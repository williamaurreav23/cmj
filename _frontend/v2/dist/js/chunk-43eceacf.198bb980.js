(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-43eceacf","chunk-8637b368"],{1379:function(t,e,n){"use strict";var o=n("f95b");n.n(o).a},"186d":function(t,e,n){"use strict";var o=n("4c93");n.n(o).a},"21c5":function(t,e,n){"use strict";(function(t){n("d3b7"),n("ddb0");var o=n("5530"),a=n("3bf0");e.a={name:"container",extends:Object(o.a)({},a.default),data:function(){return{has_titulo:!1,has_descricao:!1,has_autor:!1}},methods:{toogleTitulo:function(t){this.has_titulo=!this.has_titulo},toogleDescricao:function(t){this.has_descricao=!this.has_descricao},toogleAutor:function(t){this.has_autor=!this.has_autor},addBrother:function(t,e){var n=Object();n.tipo=this.getChoices.all_bycomponent[t].id,n.parent=this.parent.id,n.ordem=this.elemento.ordem+1,this.createBrother(n)},addChild:function(t,e){var n=Object();n.tipo=this.getChoices.all_bycomponent[t].id,n.parent=this.elemento.id,this.createChild(n)},deleteParte:function(t){var e=this,n=this;n.documentoResource.deleteDocumento(this.elemento.id).then((function(t){n.$parent.getDocumento(e.parent.id),n.success("Elemento excluído com sucesso.")})).catch((function(t){n.danger(t.response.data.detail)}))},containerTrocarTipo:function(e){var n=this,o=Object(),a=t.keys(this.getChoices.tipo.containers);o.tipo=this.elemento.tipo===parseInt(a[0])?a[1]:a[0],o.id=this.elemento.id,n.updateDocumento(o).then((function(t){n.$parent.getDocumento(n.parent.id)}))}}}}).call(this,n("2ef0"))},"26b1":function(t,e,n){"use strict";n.r(e);var o=n("21c5").a,a=(n("186d"),n("2877")),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.name_component,0!==t.childsOrdenados.length?"":"empty"]},[n("div",{staticClass:"btn-toolbar widgets widget-top"},[t.elemento.titulo?t._e():n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-success",attrs:{title:"Disponibilizar Título para o Container",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toogleTitulo(e)}}},[t._v("T")])]),0===t.childsOrdenados.length?[n("div",{staticClass:"btn-group btn-group-sm"},t._l(t.getChoices.tipo.subtipos,(function(e,o){return n("button",{key:o,staticClass:"btn btn-primary",attrs:{type:"button",title:"Adiciona Elemento no final deste Container..."},on:{click:function(n){return n.target!==n.currentTarget?null:t.addChild(e.component_tag,n)}}},[t._v(t._s(e.text))])})),0)]:t._e(),n("div",{staticClass:"btn-group btn-group-sm"})],2),t.has_titulo||t.elemento.titulo?n("div",{staticClass:"path-title-container construct"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.elemento.titulo,expression:"elemento.titulo",modifiers:{lazy:!0}}],attrs:{placeholder:"Sub título do container..."},domProps:{value:t.elemento.titulo},on:{change:function(e){return t.$set(t.elemento,"titulo",e.target.value)}}})]):t._e(),t._l(t.childsOrdenados,(function(e){return n(t.classChild(e),{key:e.id,tag:"component",attrs:{child:e,parent:t.elemento}})})),n("div",{staticClass:"clearfix"}),n("div",{staticClass:"btn-toolbar widgets widget-bottom justify-content-end"},[n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Simples abaixo deste",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container",e)}}},[t._v("+C")]),n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Extendido abaixo deste",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container-fluid",e)}}},[t._v("+CE")]),n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Para PDF",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container-file",e)}}},[t._v("+CF")])]),n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Trocar tipo deste Container",type:"button"},on:{click:t.containerTrocarTipo}},[n("i",{staticClass:"fas fa-exchange-alt"})])]),n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-danger",attrs:{title:"Remover este Container",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.deleteParte(e)}}},[t._v("x")])])])],2)}),[],!1,null,null,null);e.default=i.exports},"4c93":function(t,e,n){},"576e":function(t,e,n){"use strict";n.r(e);var o=n("5530"),a=n("26b1"),i={name:"container-file",extends:Object(o.a)({},a.default),data:function(){return{has_titulo:!1,has_descricao:!1,has_autor:!1,dragleave:null,side:0,showModal:-1,showElemento:null}},methods:{clickVersaoFinal:function(){window.open(this.slug,"_blank")},toogleTitulo:function(t){this.has_titulo=!this.has_titulo},toogleDescricao:function(t){this.has_descricao=!this.has_descricao},toogleAutor:function(t){this.has_autor=!this.has_autor},addBrother:function(t,e){var n=Object();n.tipo=this.getChoices.all_bycomponent[t].id,n.parent=this.parent.id,n.ordem=this.elemento.ordem+1,this.createBrother(n)},addChild:function(t,e){var n=Object();n.tipo=this.getChoices.all_bycomponent[t].id,n.parent=this.elemento.id,this.createChild(n)},deleteParte:function(t){var e=this,n=this;n.documentoResource.deleteDocumento(this.elemento.id).then((function(t){n.$parent.getDocumento(e.parent.id),n.success("Elemento excluído com sucesso.")})).catch((function(t){n.danger(t.response.data.detail)}))},showModalAction:function(t,e){this.showElemento=t,this.showModal=e},ondragend:function(t){var e=this;if(t.id!==this.dragleave.id){var n=Object();n.id=t.id,n.ordem=this.dragleave.ordem,t.ordem>this.dragleave.ordem&&this.side>0?n.ordem++:t.ordem<this.dragleave.ordem&&this.side<0&&n.ordem--,t.ordem!==n.ordem&&(t.ordem=n.ordem,this.updateDocumento(n).then((function(){e.getDocumento(e.elemento.id)})))}},ondragleave:function(t,e){this.dragleave=t,this.side=e},changeImage:function(t){this.getDocumento(this.elemento.id)}}},r=(n("1379"),n("2877")),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.name_component,"container"]},[n("span",{staticClass:"btn-pdf"},[n("b-button-group",[0!=t.childsOrdenados.length?n("b-button",{attrs:{variant:"primary"}},[n("i",{staticClass:"far fa-file-pdf",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.target!==e.currentTarget?null:t.clickVersaoFinal(e)}}})]):t._e()],1)],1),n("div",{staticClass:"path-title-file construct"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.elemento.titulo,expression:"elemento.titulo",modifiers:{lazy:!0}}],attrs:{placeholder:"Título do Arquivo..."},domProps:{value:t.elemento.titulo},on:{change:function(e){return t.$set(t.elemento,"titulo",e.target.value)}}})]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.elemento.autor,expression:"elemento.autor",modifiers:{lazy:!0}}],attrs:{placeholder:"Autor..."},domProps:{value:t.elemento.autor},on:{change:function(e){return t.$set(t.elemento,"autor",e.target.value)}}}),n("div",{staticClass:"path-description-file construct"},[n("textarea-autosize",{attrs:{placeholder:"Descrição do Documento"},model:{value:t.elemento.descricao,callback:function(e){t.$set(t.elemento,"descricao",e)},expression:"elemento.descricao"}})],1),n("div",{staticClass:"drop-area"},[n("drop-zone",{attrs:{elemento:t.elemento,src:t.slug,multiple:!0,resource:t.documentoResource},on:{change:t.changeImage}})],1),n("div",{staticClass:"inner"},t._l(t.childsOrdenados,(function(e,o){return n(t.classChild(e),{key:e.id,tag:"component",attrs:{child:e,parent:t.elemento,pos:o},on:{ondragend:t.ondragend,ondragleave:t.ondragleave,showmodal:t.showModalAction}})})),1),n("div",{staticClass:"btn-toolbar widgets widget-bottom justify-content-end"},[n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Simples abaixo deste",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container",e)}}},[t._v("+C")]),n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Extendido abaixo deste",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container-fluid",e)}}},[t._v("+CE")]),n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Para PDF",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container-file",e)}}},[t._v("+CF")])]),n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-danger",attrs:{title:"Remover este Container",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.deleteParte(e)}}},[t._v("x")])])])])}),[],!1,null,null,null);e.default=s.exports},f95b:function(t,e,n){}}]);