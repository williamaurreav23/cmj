import csv
import os

import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cmj.settings")
django.setup()


from cmj.cerimonial.models import Processo, Contato
from cmj.core.models import AreaTrabalho


if __name__ == "__main__":

    at = AreaTrabalho.objects.get(pk=5)
    print(at.nome)

    """processos = Processo.objects.filter(
        workspace=5).order_by('titulo').distinct('titulo').values_list('titulo', flat=True)
    """
    with open('/home/leandro/relatorio_joaorosa.csv', 'w') as cf:
        writer = csv.writer(cf, delimiter=',',
                            quotechar='"',
                            quoting=csv.QUOTE_MINIMAL)

        contatos = Contato.objects.filter(
            workspace=5).order_by(
            'endereco_set__bairro__nome',
            'endereco_set__endereco',
            'nome')
        for c in contatos:
            end = c.endereco_set.first()
            endereco = end.endereco if end else ''
            bairro = end.bairro.nome if end and end.bairro else ''
            cep = end.cep if end and end.cep else ''
            cidade = end.municipio.nome if end and end.municipio else ''

            telefones = ' / '.join(map(lambda x: str(x),
                                       list(c.telefone_set.all())
                                       )) if c.telefone_set.exists() else ''
            writer.writerow([
                str(c.nome),
                bairro,
                endereco,
                cep,
                cidade,
                telefones])
        cf.close()
