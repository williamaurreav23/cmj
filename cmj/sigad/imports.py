from datetime import datetime
from datetime import timedelta
import os

from django.conf import settings
from django.core.files.base import File
from django.core.files.temp import NamedTemporaryFile
from django.db import transaction
from django.db.models.aggregates import Max
from django.http.response import Http404
from django.utils.translation import ugettext_lazy as _
from django.views.generic.base import TemplateView
from reversion.views import RevisionMixin
from sapl.parlamentares.models import Parlamentar
import dateutil.parser

from cmj.sigad import models
from cmj.sigad.models import Documento, Midia, VersaoDeMidia, Revisao, Classe,\
    ReferenciaEntreDocumentos, DOC_TEMPLATES_CHOICE, CMSMixin,\
    CLASSE_TEMPLATES_CHOICE


class DocumentoPmImportView(RevisionMixin, TemplateView):

    template_name = 'path/pagina_inicial.html'

    endereco_fotografia = 'http://187.6.249.155'
    end_local_fotog = endereco_fotografia  # 'http://10.3.163.1'

    def get_codigo_classe(self, parent):

        cod__max = Classe.objects.filter(
            parent=parent).order_by('codigo').aggregate(Max('codigo'))

        return cod__max['codigo__max'] + 1 if cod__max['codigo__max'] else 1

    def get_or_create_classe(
        self,
            titulo,
            parent=None,
            visibilidade=1,
            perfil=1):

        classe = Classe.objects.filter(
            titulo=titulo,
            parent=parent).first()
        created = False
        if not classe:
            created = True
            classe = Classe()
            classe.codigo = self.get_codigo_classe(parent)
            classe.titulo = titulo
            classe.visibilidade = visibilidade
            classe.perfil = perfil
            classe.parent = parent
            classe.owner = self.request.user

            classe.save()
        return classe, created

    def get(self, request, *args, **kwargs):

        self.get_youtube(request, *args, **kwargs)
        return TemplateView.get(self, request, *args, **kwargs)

    def get_youtube(self, request, *args, **kwargs):

        import urllib3
        import json

        if not request.user.is_superuser:
            raise Http404()

        http = urllib3.PoolManager()

        playlists = [
            (198, 'PLgLO7BeNLo8MHrbBi75K7JVF7aGntEBoA'),  # Plenárias 2018
            (199, 'PLgLO7BeNLo8PsNewCX7mjzlbS91M5LILv'),  # Plenárias 2017
            (200, 'PLgLO7BeNLo8PPos7B59cOq1mDCHXuRkc3'),  # Plenárias 2016
            (201, 'PLgLO7BeNLo8NQfWXfKwj1ZbyA2lM-INNJ'),  # Plenárias 2015
            #(204, ''),  # Plenárias 2014
            (205, 'PLgLO7BeNLo8MP54ONb0p6RkadZqXensg-'),  # Plenárias 2013
            (197, 'PLgLO7BeNLo8MD8LzEb8obLTua4spbL_ui'),  # Sessões Solenes
            (206, 'PLgLO7BeNLo8PxBA-GjNUFG7dCWUPYwQFl'),  # Audiências Públicas
            (207, 'PLgLO7BeNLo8OluYcp2_5R61nNJXabb5vB'),  # Entrevistas
            (208, 'PLgLO7BeNLo8NIOg9IC-Fax8KmXT91eylS'),  # Memórias de Jataí
        ]

        url = ('https://www.googleapis.com/youtube/v3/playlistItems?'
               'part=snippet&maxResults=50'
               '&key=%s'
               '&playlistId=%s'
               '&pageToken=%s')

        for p in playlists:
            classe_id, pl = p

            pageToken = ''

            classe = Classe.objects.get(pk=classe_id)

            while pageToken is not None:
                r = http.request(
                    'GET', url %
                    (settings.GOOGLE_URL_API_KEY, pl, pageToken))

                data = r.data.decode('utf-8')
                data = json.loads(data)

                pageToken = data['nextPageToken']\
                    if 'nextPageToken' in data else None

                for item in data['items']:
                    snippet = item['snippet']

                    video_id = snippet['resourceId']['videoId']

                    if Documento.objects.filter(
                            texto__contains=video_id).exists():
                        documento = Documento.objects.filter(
                            texto__contains=video_id).first().raiz
                    else:
                        documento = Documento()

                    url_vid = ('https://www.googleapis.com/youtube/v3/videos?'
                               'part=snippet'
                               '&key=%s'
                               '&id=%s')

                    r = http.request('GET', url_vid %
                                     (settings.GOOGLE_URL_API_KEY, video_id))

                    vdata = r.data.decode('utf-8')
                    vdata = json.loads(vdata)
                    video_dict = {}
                    try:
                        video_dict = vdata['items'][0]['snippet']
                    except:
                        continue

                    documento.titulo = video_dict['title']
                    documento.descricao = video_dict['description']
                    documento.public_date = dateutil.parser.parse(
                        video_dict['publishedAt'])
                    documento.classe = classe
                    documento.tipo = Documento.TD_VIDEO_NEWS
                    documento.template_doc = 1
                    documento.owner = request.user
                    documento.visibilidade = Documento.STATUS_PUBLIC

                    documento.extra_data = video_dict
                    documento.save()
                    documento.childs.all().delete()

                    container = Documento()
                    container.raiz = documento
                    container.titulo = ''
                    container.descricao = ''
                    container.classe = classe
                    container.tipo = Documento.TPD_CONTAINER_SIMPLES
                    container.owner = request.user
                    container.parent = documento
                    container.ordem = 1
                    container.visibilidade = documento.visibilidade
                    container.save()

                    video = Documento()
                    video.raiz = documento
                    video.titulo = ''
                    video.descricao = ''
                    video.classe = classe
                    video.tipo = Documento.TPD_VIDEO
                    video.owner = request.user
                    video.parent = container
                    video.ordem = 1
                    video.extra_data = video_dict
                    video.visibilidade = documento.visibilidade

                    video.texto = (
                        '<iframe width="560" height="315"'
                        'src="https://www.youtube.com/embed/%s" '
                        'frameborder="0" '
                        'allow="autoplay; encrypted-media" allowfullscreen>'
                        '</iframe>' % video_id)

                    video.save()

    def get_pm1(self, request, *args, **kwargs):

        import urllib3
        import json

        if not request.user.is_superuser:
            raise Http404()

        # Fotografia - captura todos os eventos no sistema de fotografia
        http = urllib3.PoolManager()

        r = http.request('GET', ('%s/fotografia/'
                                 'evento.do?action=evento_lista_json' %
                                 self.end_local_fotog))

        fotografia = self.get_or_create_classe(
            'Banco de Imagens', perfil=models.CLASSE_ESTRUTURAL)[0]

        data = r.data.decode('utf-8')
        # print('data: ', data)
        # return TemplateView.get(self, request, *args, **kwargs)
        jdata = json.loads(data)
        jdata = jdata[0:5]

        anos = {}
        print(len(jdata))
        for evento in jdata:
            data = datetime.strptime(
                evento['data'], '%Y-%m-%d %H:%M:%S.%f')
            anos[str(data.year)] = True
        anos = list(anos.keys())
        anos.sort()

        pasta_ano = {}
        for ano in anos:
            pasta_ano[ano] = self.get_or_create_classe(
                ano, parent=fotografia, perfil=models.CLASSE_DOCUMENTAL)[0]

        for evento in jdata:

            # if 'Sessão ordinária' in evento['epigrafe']:
            #    print('Pulando...', evento['epigrafe'])
            #    continue

            old_path = ('/fotografia/evento.do?action=evento_view&id=%s' %
                        evento['id'])

            documento = Documento.objects.filter(old_path=old_path).first()

            if documento:
                print('...', evento['epigrafe'])
                continue

            print('Cadastrando...', evento['epigrafe'])

            data = datetime.strptime(
                evento['data'], '%Y-%m-%d %H:%M:%S.%f')
            ano = str(data.year)

            documento = Documento()
            documento.old_path = old_path
            documento.old_json = json.dumps(evento)
            documento.titulo = evento['epigrafe']
            documento.descricao = evento['ementa']
            documento.public_date = data
            documento.classe = pasta_ano[ano]
            documento.tipo = Documento.TD_BI
            documento.template_doc = 2
            documento.owner = request.user
            documento.visibilidade = Documento.STATUS_RESTRICT
            documento.save()
            Revisao.gerar_revisao(documento, request.user)

            container = Documento()
            container.raiz = documento
            container.titulo = ''
            container.descricao = ''
            container.classe = pasta_ano[ano]
            container.tipo = Documento.TPD_CONTAINER_EXTENDIDO
            container.owner = request.user
            container.parent = documento
            container.visibilidade = \
                Documento.STATUS_RESTRICT
            container.save()
            Revisao.gerar_revisao(container, request.user)

            ordem = 0
            for midia_id_import in evento['midias']:
                ordem += 1
                old_path_midia = ('/fotografia/'
                                  'midia.do?action=midia_view'
                                  '&escala=cmj_import&idImage=%s'
                                  % midia_id_import)

                image = Documento()
                image.raiz = documento
                image.autor = 'Hélio Domingos'
                image.visibilidade = Documento.STATUS_RESTRICT
                image.ordem = ordem
                image.old_path = old_path_midia
                image.titulo = ''
                image.owner = request.user
                image.parent = container
                image.tipo = Documento.TPD_IMAGE
                image.classe = pasta_ano[ano]
                image.save()
                Revisao.gerar_revisao(image, request.user)

                midia = Midia()
                midia.documento = image
                midia.save()

                versao = VersaoDeMidia()
                versao.midia = midia
                versao.owner = request.user
                versao.content_type = 'image/jpeg'
                versao.alinhamento = Documento.ALINHAMENTO_JUSTIFY
                versao.save()

                file = http.request(
                    'GET', '%s%s' % (self.endereco_fotografia,
                                     old_path_midia,))

                img_temp = NamedTemporaryFile(delete=True)
                img_temp.write(file.data)
                img_temp.flush()
                versao.file.save("image.jpg", File(img_temp), save=True)

                print(midia_id_import)

        # PORTAL MODELO - captura todas as notícias do portal modelo 1.0
        p = 1
        s = 100
        news = []
        while True:
            print('Noticias do portal modelo:', p)
            r = http.request('GET', ('http://187.6.249.157'
                                     '/portal/json/jsonclient/json'
                                     '?page=%s&step=%s') % (
                p, s))

            jdata = json.loads(r.data.decode('utf-8'))

            stop = False
            for n in jdata:
                if Documento.objects.filter(old_path=n['path']).exists():
                    stop = True
                    break

                news.append(n)
                # print(n['date'])

            if stop or len(jdata) < s:
                break
            p += 1

            break  # comentar para importar tudo

        news.reverse()

        for n in news:

            n_date = ' '.join(n['date'].lower().split()[:2])
            if len(n_date) == 10:
                n_date += ' 00:00:00'

            n_effective = ' '.join(n['effective'].lower().split()[:2])
            if len(n_effective) == 10:
                n_effective += ' 00:00:00'

            gmt = n['date'].rsplit(' ', 1)[-1]

            gmt = 2 if gmt == 'gmt-2' else 3 if gmt == 'gmt-3' else 0

            d = Documento()
            try:
                d.created = datetime.strptime(
                    n_date, '%Y/%m/%d %H:%M:%S.%f') - timedelta(hours=gmt)
            except:
                try:
                    d.created = datetime.strptime(
                        n_date, '%Y/%m/%d %H:%M:%S') - timedelta(hours=gmt)
                except:
                    d.created = datetime.now()

            try:
                d.public_date = datetime.strptime(
                    n_effective, '%Y/%m/%d %H:%M:%S.%f') - timedelta(hours=gmt)
            except:
                try:
                    d.public_date = datetime.strptime(
                        n_effective, '%Y/%m/%d %H:%M:%S') - timedelta(hours=gmt)
                except:
                    d.public_date = datetime.now()

            d.owner = request.user
            d.descricao = n['description']
            d.titulo = n['title']
            d.visibilidade = 0 if n['review_state'] == 'published' else 99
            d.old_path = n['path']
            d.old_json = json.dumps(n)
            d.classe_id = 1
            d.save()
            Revisao.gerar_revisao(d, request.user)

            container = Documento()
            container.raiz = d
            container.titulo = ''
            container.descricao = ''
            container.classe_id = 1
            container.tipo = Documento.TPD_CONTAINER_SIMPLES
            container.owner = request.user
            container.parent = d
            container.ordem = 1
            container.visibilidade = d.visibilidade
            container.save()
            Revisao.gerar_revisao(container, request.user)

            ordem = 0
            if n['image']:
                ordem += 1
                image = Documento()
                image.raiz = d
                image.autor = n['image_caption']
                image.visibilidade = 0
                image.ordem = ordem
                image.titulo = ''
                image.owner = request.user
                image.parent = container
                image.tipo = Documento.TPD_IMAGE
                image.classe_id = 1
                image.visibilidade = d.visibilidade
                image.save()
                Revisao.gerar_revisao(image, request.user)

                midia = Midia()
                midia.documento = image
                midia.save()

                versao = VersaoDeMidia()
                versao.midia = midia
                versao.owner = request.user
                versao.content_type = 'image/jpeg'
                versao.save()

                file = http.request('GET', ('http://187.6.249.157%s'
                                            ) % (n['image']))

                img_temp = NamedTemporaryFile(delete=True)
                img_temp.write(file.data)
                img_temp.flush()
                versao.file.save("image.jpg", File(img_temp), save=True)

            if n['text']:
                ordem += 1
                texto = Documento()
                texto.raiz = d
                texto.texto = n['text']
                texto.visibilidade = d.visibilidade
                texto.ordem = ordem
                texto.owner = request.user
                texto.parent = container
                texto.classe_id = 1
                texto.tipo = Documento.TPD_TEXTO

                texto.save()
                Revisao.gerar_revisao(texto, request.user)

            if n['url_source_album']:

                print('%s%s' % (self.end_local_fotog,
                                n['url_source_album']))

                jdata = []
                try:
                    r = http.request('GET', '%s%s' % (
                        self.end_local_fotog,
                        n['url_source_album']))
                    jdata = json.loads(r.data.decode('utf-8'))
                except:
                    pass

                if not jdata:
                    continue

                if len(jdata) == 1 and jdata[0]['id'] == "0":
                    continue

                ordem += 1

                cont_gallery = Documento()
                cont_gallery.raiz = d
                cont_gallery.titulo = ''
                cont_gallery.descricao = ''
                cont_gallery.classe_id = 1
                cont_gallery.tipo = Documento.TPD_CONTAINER_EXTENDIDO
                cont_gallery.owner = request.user
                cont_gallery.parent = d
                cont_gallery.ordem = 2
                cont_gallery.visibilidade = d.visibilidade
                cont_gallery.save()
                Revisao.gerar_revisao(cont_gallery, request.user)

                galeria = Documento()
                galeria.raiz = d
                galeria.autor = n['image_caption']
                galeria.visibilidade = d.visibilidade
                galeria.ordem = ordem
                galeria.titulo = ''
                galeria.owner = request.user
                galeria.parent = cont_gallery
                galeria.tipo = Documento.TPD_GALLERY
                galeria.classe_id = 1
                galeria.save()
                Revisao.gerar_revisao(galeria, request.user)

                ord_ref = 1
                for item in jdata:
                    old_path_midia = ('/fotografia/'
                                      'midia.do?action=midia_view'
                                      '&escala=cmj_import&idImage=%s'
                                      % item['id'])

                    referenciado = Documento.objects.filter(
                        old_path=old_path_midia).first()

                    if referenciado:
                        ref = ReferenciaEntreDocumentos()
                        ref.referenciado = referenciado
                        ref.referente = galeria
                        ref.ordem = ord_ref
                        ref.titulo = ''

                        ref.save()
                        ord_ref += 1

        # liga as notícias aos parlamentares
        pm = Parlamentar.objects
        url_parts = (
            (pm.get(pk=7), 1, 1, 'Adilson-Carvalho'),
            (pm.get(pk=14), 1, 1, '/Vereadores/thiago-maggioni/'),
            (pm.get(pk=168), 1, 1, '/Vereadores/david-pires/'),
            (pm.get(pk=166), 1, 1, '/Vereadores/jose-prado-carapo/'),
            (pm.get(pk=165), 1, 1, 'carvalhinho/noticias/'),
            (pm.get(pk=12), 1, 1, 'Vereadores/gildenicio-santos/'),
            (pm.get(pk=8), 1, 1, '/Vereadores/Joao-Rosa/'),
            (pm.get(pk=167), 1, 1, '/Vereadores/katia-carvalho/'),
            (pm.get(pk=9), 1, 1, '/Vereadores/Marcos-Antonio/'),
            (pm.get(pk=2), 1, 1, '/Vereadores/mauro-bento-filho/'),
            (pm.get(pk=13), 1, 1, 'vereadores-2013-2016/vinicius-luz/'),
            (pm.get(pk=11), 1, 1, 'vereadores-2013-2016/Nilton-Cesar-Soro/'),
            (pm.get(pk=1), 1, 1, 'vereadores-2013-2016/Geovaci-Peres/'),
            (pm.get(pk=16), 1, 1, 'vereadores-2013-2016/carlos-miranda/'),
            (pm.get(pk=6), 1, 1, 'vereadores-2013-2016/Genio-Euripedes/'),

            (pm.get(pk=152), 1, 1, 'Vereadores_2009-2012/Ediglan-Maia'),
            (pm.get(pk=6), 1, 1, 'Vereadores_2009-2012/Genio-Euripedes/'),
            (pm.get(pk=4), 1, 1, 'Vereadores_2009-2012/Vilma-Feitosa/'),
            (pm.get(pk=3), 1, 1, 'Vereadores_2009-2012/Nelson-Antonio/'),
            (pm.get(pk=5), 1, 1, 'Vereadores_2009-2012/Pr-Luiz-Carlos/'),


            (pm.get(pk=6), 1, 1, 'Vereadores_2005-2008/genio-euripedes'),
            (pm.get(pk=128), 1, 1, 'Vereadores_2005-2008/alcides-fazolino'),
            (pm.get(pk=157), 1, 1, 'Vereadores_2005-2008/abimael-silva'),
            (pm.get(pk=152), 1, 1, 'Vereadores_2005-2008/ediglan-maia'),
            (pm.get(pk=155), 1, 1, 'Vereadores_2005-2008/maria-jose'),
            (pm.get(pk=156), 1, 1, 'Vereadores_2005-2008/soraia-rodrigues'),
            (pm.get(pk=154), 1, 1, 'Vereadores_2005-2008/joao-wesley'),
            (pm.get(pk=158), 1, 1, 'Vereadores_2005-2008/andre-pires'),


            (0, 1, 3, '/portal/tv/cmj-noticias/'),
            (0, 1, 4, '/portal/tv/sessoes/'),
            (0, 1, 5, '/portal/tv/fala-vereador/'),
            (0, 1, 6, '/portal/tv/a-voz-da-comunidade/'),

            (0, 1, 9, '/portal/radio/momento-camara'),
        )

        for u in url_parts:
            print(u)
            docs = Documento.objects.filter(
                classe=u[1],
                # parlamentares__isnull=True,
                old_path__contains=u[3])

            for doc in docs:
                if u[0] and not doc.parlamentares.exists():
                    doc.parlamentares.add(u[0])

                if u[1] != u[2]:
                    for item in doc.tree2list():
                        item.classe_id = u[2]
                        item.save()

        Documento.objects.filter(
            old_path__startswith='/portal/radio/programacao/').delete()

        Documento.objects.filter(
            old_path__startswith='/portal/videosdiversos/').delete()

        parlamentar, created_parlamentar = self.get_or_create_classe(
            'Parlamentar',
            visibilidade=CMSMixin.STATUS_PUBLIC,
            perfil=models.CLASSE_ESTRUTURAL)

        if created_parlamentar:
            parlamentar.template_classe = \
                CLASSE_TEMPLATES_CHOICE.parlamentares
            parlamentar.save()

        pms = pm.all()

        for p in pms:
            classe_parlamentar, created = self.get_or_create_classe(
                p.nome_parlamentar,
                parent=parlamentar,
                visibilidade=CMSMixin.STATUS_PUBLIC,
                perfil=models.CLASSE_ESTRUTURAL)

            if created or not classe_parlamentar.parlamentar:
                classe_parlamentar.template_classe = \
                    CLASSE_TEMPLATES_CHOICE.parlamentar
                classe_parlamentar.parlamentar = p
                classe_parlamentar.save()

        # FOTOGRAFIA - captura de albuns independentes sem notícias associadas
        r = http.request('GET', ('%s/fotografia/'
                                 'album.do?action=album_lista_json' %
                                 self.end_local_fotog))

        data = r.data.decode('utf-8')
        # print('data: ', data)
        # return TemplateView.get(self, request, *args, **kwargs)
        jdata = json.loads(data)
        jdata = jdata[0:21]

        print('Albuns independentes:', len(jdata))

        classe_albuns = Classe.objects.get(slug='galerias/imagens')

        for album in jdata:

            evento_path = ('/fotografia/evento.do?action=evento_view&id=%s' %
                           album['evento_id'])

            if not Documento.objects.filter(old_path=evento_path).exists():
                print ('não existe evento associado:', album['id'])
                continue

            capa = ('/fotografia/'
                    'midia.do?action=midia_view'
                    '&escala=cmj_import&idImage=%s'
                    % album['idMCp'])

            noticia = Documento.objects.filter(old_path=capa,
                                               citado_em__isnull=False)
            if noticia.exists():
                print ('Já existe album associado a notícia:', album['tit'])

                img = noticia.first()

                """if img:
                    d = img.citado_em.all().first().referente
                    d.titulo = album['tit']
                    d.descricao = album['dscr']
                    d.save()
                    Revisao.gerar_revisao(d, request.user)"""
                continue

            album_path = ("/fotografia/album.do?action=album_json&id=%s"
                          % album['id'])

            if Documento.objects.filter(old_path=album_path).exists():
                print ('Já existe album:', album['tit'])
                continue

            print ('Criando album:', album['tit'])

            jmidias = []
            try:
                r = http.request('GET', '%s%s%s' % (
                    self.end_local_fotog,
                    '/fotografia/album.do?action=album_json&id=', album['id']))
                jmidias = json.loads(r.data.decode('utf-8'))
            except:
                pass

            if not jmidias:
                continue

            if len(jmidias) == 1 and jmidias[0]['id'] == "0":
                continue

            evento = Documento.objects.filter(old_path=evento_path).first()

            with transaction.atomic():
                documento = Documento()
                documento.old_path = album_path
                documento.old_json = json.dumps(album)
                documento.titulo = album['tit']
                documento.descricao = album['dscr']
                documento.public_date = evento.public_date
                documento.classe = classe_albuns
                documento.tipo = Documento.TD_GALERIA_PUBLICA
                documento.template_doc = DOC_TEMPLATES_CHOICE.noticia
                documento.owner = request.user
                documento.visibilidade = Documento.STATUS_PUBLIC
                documento.save()
                Revisao.gerar_revisao(documento, request.user)

                cont_gallery = Documento()
                cont_gallery.raiz = documento
                cont_gallery.titulo = ''
                cont_gallery.descricao = ''
                cont_gallery.classe = classe_albuns
                cont_gallery.tipo = Documento.TPD_CONTAINER_EXTENDIDO
                cont_gallery.owner = request.user
                cont_gallery.parent = documento
                cont_gallery.ordem = 1
                cont_gallery.visibilidade = documento.visibilidade
                cont_gallery.save()
                Revisao.gerar_revisao(cont_gallery, request.user)

                galeria = Documento()
                galeria.raiz = documento
                galeria.autor = 'Hélio Domingos'
                galeria.visibilidade = documento.visibilidade
                galeria.ordem = 1
                galeria.titulo = ''
                galeria.owner = request.user
                galeria.parent = cont_gallery
                galeria.tipo = Documento.TPD_GALLERY
                galeria.classe = classe_albuns
                galeria.save()
                Revisao.gerar_revisao(galeria, request.user)

                ord_ref = 2
                for midia in jmidias:
                    old_path_midia = ('/fotografia/'
                                      'midia.do?action=midia_view'
                                      '&escala=cmj_import&idImage=%s'
                                      % midia['id'])

                    referenciado = Documento.objects.filter(
                        old_path=old_path_midia).first()

                    if referenciado:

                        ref = ReferenciaEntreDocumentos()
                        ref.referenciado = referenciado
                        ref.referente = galeria
                        ref.titulo = ''

                        ref.ordem = ord_ref if midia[
                            'id'] != album['idMCp'] else 1

                        ref.ordem = ord_ref
                        ref.save()
                        if midia['id'] != album['idMCp']:
                            ord_ref += 1

        http = urllib3.PoolManager()

        for p in Parlamentar.objects.all():
            p.fotografia.delete()

            mypath = '%s/sapl/public/parlamentar/%s' % (
                settings.MEDIA_ROOT, p.pk)

            print(p.nome_parlamentar)

            if os.path.exists(mypath):
                onlyfiles = [
                    f for f in os.listdir(mypath)
                    if os.path.isfile(os.path.join(mypath, f))]

                for f in onlyfiles:
                    os.remove(mypath + '/' + f)

            file = http.request(
                'GET', ('http://187.6.249.156:8480/sapl/'
                        'sapl_documentos/parlamentar/fotos/'
                        '%s_foto_parlamentar') % (p.pk, ))

            try:
                data = file.data.decode('utf-8')
            except:
                img_temp = NamedTemporaryFile(delete=True)
                img_temp.write(file.data)
                img_temp.flush()
                p.fotografia.save("image.jpg", File(img_temp), save=True)

        return TemplateView.get(self, request, *args, **kwargs)
