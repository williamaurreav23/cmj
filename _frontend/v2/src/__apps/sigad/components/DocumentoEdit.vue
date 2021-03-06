<template lang="html">
  <div v-if="mode !== 'INIT'" :class="classParent">
    <div v-if="notHasParent" class="container">
      <div v-show="elemento.id" class="btn-toolbar widgets-function justify-content-between">
        <b-button-group>
          <b-button v-on:click.self="clickVersaoFinal" variant="primary">Versão Final</b-button>
          <b-button v-on:click.self="clickEditMetadados" variant="success">Editar Metadados</b-button>
        </b-button-group>
        <div class="btn-group widget-visibilidade">
          <cmj-choices v-model.lazy="elemento.visibilidade" :options="visibilidade_choice" name="visibilidade-" :id="elemento.id" />
        </div>
      </div>
      <div class="path-title construct">
        <textarea-autosize v-model.lazy="elemento.titulo" placeholder="Título do Documento"  :align="'text-center'"/>
      </div>
      <div class="path-description construct">
        <textarea-autosize v-model.lazy="elemento.descricao" placeholder="Descrição do Documento" :align="'text-center'"/>
      </div>
      <div class="construct">
        <textarea-autosize v-model.lazy="elemento.texto" placeholder="texto..." :align="'text-left'"/>
      </div>
    </div>
    <component :is="classChild(value)" v-for="value in childsOrdenados" :child="value" :parent="elemento" :key="value.id"/>
  </div>
  <div v-else>
    <div class="container">
      <div class="loading">
        Carregando Editor...
      </div>
    </div>
  </div>
</template>

<script>
// import { orderBy, isEmpty } from 'lodash'
import { mapActions, mapGetters } from 'vuex'
import Resources from '@/resources'

export default {
  name: 'documento-edit',
  props: ['child', 'parent'], // props.child == data.elemento
  components: {
    CmjChoices: () => import('@/components/utils/CmjChoices'),
    TextareaAutosize: () => import('@/components/utils/TextareaAutosize'),
    DropZone: () => import('@/components/utils/DropZone'),

    Container: () => import('./Container'),
    ContainerFluid: () => import('./ContainerFluid'),
    ContainerFile: () => import('./ContainerFile'),
    ContainerTdBi: () => import('./ContainerTdBi'),

    TpdTexto: () => import('./TpdTexto'),
    TpdFile: () => import('./TpdFile'),
    TpdVideo: () => import('./TpdVideo'),
    TpdAudio: () => import('./TpdAudio'),
    TpdImage: () => import('./TpdImage'),
    TpdImageTdBi: () => import('./TpdImageTdBi'),
    TpdGallery: () => import('./TpdGallery'),
    TpdReferencia: () => import('./TpdReferencia'),

    ModalImageList: () => import('./ModalImageList'),
    ModalReferenciaImageList: () => import('./ModalReferenciaImageList')
  },
  data () {
    return {
      documentoResource: Resources.DocumentoResource,
      elemento: {
        id: 0,
        classe: 0,
        parent: null,
        titulo: '',
        descricao: '',
        visibilidade: 99,
        texto: '',
        autor: '',
        refresh: 0
      },
      mode: 'INIT'
    }
  },
  watch: {
    'elemento.titulo': function (nv, ov) { this.handlerWatch(nv, ov, 'titulo') },
    'elemento.descricao': function (nv, ov) { this.handlerWatch(nv, ov, 'descricao') },
    'elemento.visibilidade': function (nv, ov) { this.handlerWatch(nv, ov, 'visibilidade') },
    'elemento.texto': function (nv, ov) { this.handlerWatch(nv, ov, 'texto') },
    'elemento.autor': function (nv, ov) { this.handlerWatch(nv, ov, 'autor') },
    parent: function (nv, ov) {
      this.elemento = this.child
    }
  },
  computed: {
    ...mapGetters([
      'getChilds',
      'getChoices',
      'getDocObject'
    ]),
    name_component: function () {
      return this.$options.name
    },
    hasParent: function () {
      return this.elemento && this.elemento.parent > 0
    },
    notHasParent: function () {
      return !this.elemento || !this.elemento.parent
    },
    refresh: function () {
      let refresh = this.elemento
      refresh = refresh.refresh
      refresh = refresh === undefined ? 0 : refresh
      return refresh
    },
    slug: function () {
      let slug = this.elemento.slug
      return '/' + slug
    },
    meta_edit: function () {
      // let slug = this.getSlug
      return '/documento/' + this.elemento.id + '/edit'
    },
    childsOrdenados: function () {
      let ordenar = this.elemento.childs
      return _.orderBy(ordenar,'ordem') // eslint-disable-line
    },
    visibilidade_choice: function () {
      return this.getChoices && this.getChoices.visibilidade
        ? this.getChoices.visibilidade : {}
    },
    classParent: function () {
      return this.notHasParent ? 'container-path container-documento-edit' : ''
    },
    ordem: function () {
      return this.elemento.ordem
    }
  },
  methods: {
    ...mapActions([
      'setDocObject',
      'setTitulo',
      'setDescricao',
      'sendMessage'
    ]),
    clickVersaoFinal () {
      window.open(this.slug, '_blank')
    },
    clickEditMetadados () {
      window.open(this.meta_edit, '_self')
    },
    classChild (value) {
      if (!value.id && this.notHasParent) {
        return 'container-path container-documento-edit'
      } else {
        try {
          let classe = this.getChoices.all_bycode[value.tipo]['component_tag']
          if ([10].indexOf(this.getDocObject.tipo) !== -1) {
            classe += '-' + this.getChoices.all_bycode[this.getDocObject.tipo]['component_tag']
          }
          return classe
        } catch (Exception) {
          return ''
        }
      }
    },
    handlerWatch (newValue, oldValue, attr = null) {
      let data = Object()
      if (attr) {
        data[attr] = newValue
      }

      if (this.mode === 'CREATE') {
        data.classe = this.elemento.classe
        data.parent = this.elemento.parent
        this.createDocumento(data)
        return
      } else if (this.mode === 'INIT') {
        return
      }

      data.id = this.elemento.id

      let t = this
      t.updateDocumento(data)
        .then(() => {
          t.success()
        })
    },
    updateDocumento (data) {
      let t = this
      return t.documentoResource.updateDocumento(data)
        .then((response) => {
          t.setDocObject(response.data)
          // t.success()
        })
        .catch((response) => this.danger())
    },
    success (message = 'Informação atualizada com sucesso.') {
      this.sendMessage({ alert: 'success', message: message })
    },
    danger (message = 'Ocorreu um erro na comunicação com o servidor.') {
      this.sendMessage({
        alert: 'danger',
        message: message
      })
    },
    createDocumento (data) {
      let t = this
      t.documentoResource.createDocumento(data)
        .then((response) => {
          t.setDocObject(response.data)
          t.$router.push({
            name: 'documento_construct', params: { id: response.data.id } })
          t.$nextTick()
            .then(function () {
              t.getDocumento(response.data.id)
            })
        })
        .catch((response) => this.danger())
    },
    getDocumento (id) {
      // console.log('get:', id)
      let t = this
      this.mode = 'INIT'
      return this.$nextTick()
        .then(function () {
          t.documentoResource.getDocumento(id)
            .then((req) => {
              t.setDocObject(req.data)
              t.elemento = req.data
              t.$nextTick()
                .then(function () {
                  t.mode = 'UPDATE'
                  t.success()
                })
            })
            .catch((e) => {
              t.setDocObject({})
              t.elemento = {}
              t.danger('erro na atualização')
            })
        })
    },
    createBrother (data) {
      let t = this
      t.documentoResource.createDocumento(data)
        .then((response) => {
          t.$parent.getDocumento(response.data.parent)
        })
        .catch((response) => {
          t.danger()
        })
    },
    createChild (data) {
      let t = this
      t.documentoResource.createDocumento(data)
        .then((response) => {
          t.getDocumento(this.elemento.id)
        })
        .catch((response) => {
          t.danger('erro na adição')
        })
    }
  },
  mounted: function () {
    let t = this
    if (t.child) {
      t.elemento = t.child
      // console.log(t.elemento.tipo)
      t.$nextTick()
        .then(function () {
          t.mode = 'UPDATE'
        })
    } else {
      let id = t.$route.params.id
      if (t.$route.name === 'documento_construct') {
        t.getDocumento(id)
      } else {
        t.mode = 'CREATE'
        t.elemento.classe = id
        if (t.parent) {
          t.elemento.parent = t.parent.id
        }
      }
    }
  }
}
</script>

<style lang="scss" >
.loading {
  font-size: 200%;
  text-align: center;
  margin: 15% 0;
}

.container-path.container-documento-edit {
  padding: 20px 0px 200px;
  .widget-visibilidade {
    label {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
    .status-private {
      background: transparentize(#d90040,0.6);
    }
    .status-restrict {
      background: #ffd050;
    }
    .status-public {
      background: transparentize(#008020,0.6);
    }
    .active {
      opacity: 1;
      font-weight: bold;
      color: black;
    }
  }
  .tpd-texto, .tpd-audio, .tpd-video, .tpd-image, .tpd-gallery, .tpd-file {
    position: relative;
  }
  .widgets {
    position: absolute;
    z-index: 2;
    width: 100%;
    transition: all 0.5s ease;
    height: 0;
    display: none;
    opacity: 0.7;
    .btn {
      box-shadow: 0 0 0;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.2;
    }
    .btn-group {
      padding: 0 4px;
    }
    &:hover {
      opacity: 1;
      transition: all 0.5s ease;
    }
  }
  .widget-bottom {
    top:100%;
    margin-top: -15px;
    right: 10px;
  }

  .widget-top {
    top: 0px;
    margin-top: -15px;
  }
  input, textarea {
    outline: none;
    width: 100%;
    margin: 5px 0;
    padding: 5px 10px;
    border: none;
    background: transparent;
    &:focus {
      background: transparentize(#fff, 0.7);
    }
  }
  .tpd-texto, .tpd-audio, .tpd-video, .tpd-image, .tpd-gallery, .tpd-file {
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid transparent;
    &:hover {
      background: transparentize(#fff, 0.4);
      border: 1px solid #fafafa;
      border-radius: 5px;
      & > .widgets {
        display: flex;
        height: auto;
        opacity: 0.7;
        &:hover {
          opacity: 1;
          transition: all 0.5s ease;
        }
      }
    }
  }
}

.container-path.container-documento-edit__old {
  //background: #f7f7f7 url("../../../../../static/img/bg.png");
  margin: -20px 0px 0;

  .path-title {
    margin-top: 1em;
    margin-bottom: 0;
  }
  .path-description {
    margin: 0px;
  }
  .widget-actions {
    .btn {
      font-size: 1rem;
    }
    a {
      color: white;
    }
  }
}
.fr-counter {
  display: none;
}
</style>
