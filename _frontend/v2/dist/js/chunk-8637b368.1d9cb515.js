(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8637b368"],{"186d":function(t,e,n){"use strict";var o=n("4c93");n.n(o).a},"21c5":function(t,e,n){"use strict";(function(t){n("d3b7"),n("ddb0");var o=n("5530"),i=n("3bf0");e.a={name:"container",extends:Object(o.a)({},i.default),data:function(){return{has_titulo:!1,has_descricao:!1,has_autor:!1}},methods:{toogleTitulo:function(t){this.has_titulo=!this.has_titulo},toogleDescricao:function(t){this.has_descricao=!this.has_descricao},toogleAutor:function(t){this.has_autor=!this.has_autor},addBrother:function(t,e){var n=Object();n.tipo=this.getChoices.all_bycomponent[t].id,n.parent=this.parent.id,n.ordem=this.elemento.ordem+1,this.createBrother(n)},addChild:function(t,e){var n=Object();n.tipo=this.getChoices.all_bycomponent[t].id,n.parent=this.elemento.id,this.createChild(n)},deleteParte:function(t){var e=this,n=this;n.documentoResource.deleteDocumento(this.elemento.id).then((function(t){n.$parent.getDocumento(e.parent.id),n.success("Elemento excluído com sucesso.")})).catch((function(t){n.danger(t.response.data.detail)}))},containerTrocarTipo:function(e){var n=this,o=Object(),i=t.keys(this.getChoices.tipo.containers);o.tipo=this.elemento.tipo===parseInt(i[0])?i[1]:i[0],o.id=this.elemento.id,n.updateDocumento(o).then((function(t){n.$parent.getDocumento(n.parent.id)}))}}}}).call(this,n("2ef0"))},"26b1":function(t,e,n){"use strict";n.r(e);var o=n("21c5").a,i=(n("186d"),n("2877")),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.name_component,0!==t.childsOrdenados.length?"":"empty"]},[n("div",{staticClass:"btn-toolbar widgets widget-top"},[t.elemento.titulo?t._e():n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-success",attrs:{title:"Disponibilizar Título para o Container",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toogleTitulo(e)}}},[t._v("T")])]),0===t.childsOrdenados.length?[n("div",{staticClass:"btn-group btn-group-sm"},t._l(t.getChoices.tipo.subtipos,(function(e,o){return n("button",{key:o,staticClass:"btn btn-primary",attrs:{type:"button",title:"Adiciona Elemento no final deste Container..."},on:{click:function(n){return n.target!==n.currentTarget?null:t.addChild(e.component_tag,n)}}},[t._v(t._s(e.text))])})),0)]:t._e(),n("div",{staticClass:"btn-group btn-group-sm"})],2),t.has_titulo||t.elemento.titulo?n("div",{staticClass:"path-title-container construct"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.elemento.titulo,expression:"elemento.titulo",modifiers:{lazy:!0}}],attrs:{placeholder:"Sub título do container..."},domProps:{value:t.elemento.titulo},on:{change:function(e){return t.$set(t.elemento,"titulo",e.target.value)}}})]):t._e(),t._l(t.childsOrdenados,(function(e){return n(t.classChild(e),{key:e.id,tag:"component",attrs:{child:e,parent:t.elemento}})})),n("div",{staticClass:"clearfix"}),n("div",{staticClass:"btn-toolbar widgets widget-bottom justify-content-end"},[n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Simples abaixo deste",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container",e)}}},[t._v("+C")]),n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Extendido abaixo deste",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container-fluid",e)}}},[t._v("+CE")]),n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Para PDF",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container-file",e)}}},[t._v("+CF")])]),n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Trocar tipo deste Container",type:"button"},on:{click:t.containerTrocarTipo}},[n("i",{staticClass:"fas fa-exchange-alt"})])]),n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-danger",attrs:{title:"Remover este Container",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.deleteParte(e)}}},[t._v("x")])])])],2)}),[],!1,null,null,null);e.default=a.exports},"4c93":function(t,e,n){}}]);