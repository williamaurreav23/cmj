(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-166e0c47"],{"4cb0":function(e,t,a){},"863d":function(e,t,a){"use strict";a.r(t);var n=a("5530"),o=a("2f62"),s=a("975e"),i={name:"modal-referencia-image-list",props:["elementos","pos","child","parent"],data:function(){return{documentoResource:s.a.DocumentoResource,elemento:this.child,ready:Array()}},watch:{"elemento.titulo":function(e,t){this.handlerWatch(e,t,"titulo")},"elemento.descricao":function(e,t){this.handlerWatch(e,t,"descricao")},"elemento.autor":function(e,t){this.handlerWatch(e,t,"autor")},parent:function(e,t){this.elemento=this.child}},computed:{},methods:Object(n.a)(Object(n.a)({},Object(o.b)(["sendMessage"])),{},{handlerWatch:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=Object(),o=Object();o.id=this.elemento.id,a&&(o[a]=e),n.id=this.elemento.referente,n.cita=Array(),n.cita.push(o);var s=this;s.updateDocumento(n).then((function(){s.success()}))},updateDocumento:function(e){var t=this;return this.documentoResource.updateDocumento(e).then((function(e){})).catch((function(e){return t.danger()}))},success:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Informação atualizada com sucesso.";this.sendMessage({alert:"success",message:e})},danger:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Ocorreu um erro na comunicação com o servidor.";this.sendMessage({alert:"danger",message:e})},leftParte:function(){this.ready=Array(),this.$parent.showModal-=1,this.$parent.showElemento=this.elementos[this.$parent.showModal],this.elemento=this.$parent.showElemento},rightParte:function(){this.ready=Array(),this.$parent.showModal+=1,this.$parent.showElemento=this.elementos[this.$parent.showModal],this.elemento=this.$parent.showElemento},deleteReferencia:function(e){var t=this,a=Object(),n=Object();n.id=this.elemento.id,a.id=this.elemento.referente,a.cita=Array(),a.cita.push(n),t.documentoResource.deleteReferencia(a).then((function(e){1===t.elementos.length?(t.$parent.showModal=-1,t.$parent.showElemento=null):0===t.pos?t.$parent.showElemento=t.elementos[1]:(t.$parent.showElemento=t.elementos[t.pos-1],t.$parent.showModal=t.pos-1),t.$parent.getDocumento(t.parent.id).then((function(){})),t.success("Elemento excluído com sucesso.")})).catch((function(e){t.danger(e.response.data.detail)}))}})},r=(a("86d6"),a("2877")),l=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("modal",{on:{close:function(t){return e.$emit("close")}}},[a("template",{slot:"header"},[a("span",{staticClass:"path-title-partes input-value"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.elemento.titulo,expression:"elemento.titulo",modifiers:{lazy:!0}}],attrs:{placeholder:"Título da Imagem..."},domProps:{value:e.elemento.titulo},on:{change:function(t){return e.$set(e.elemento,"titulo",t.target.value)}}})])]),a("template",{slot:"header-actions"},[a("span",{staticClass:"btn btn-lg btn-delete",on:{click:e.deleteReferencia}},[a("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})]),a("span",{staticClass:"btn btn-lg btn-close",on:{click:function(t){return e.$emit("close")}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])]),a("template",{slot:"body"},[a("img",{attrs:{src:"/"+e.elemento.slug}}),e.pos!==e.elementos.length-1?a("div",{staticClass:"btn btn-direction btn-right",on:{click:e.rightParte}},[a("i",{staticClass:"fa fa-3x fa-chevron-right",attrs:{"aria-hidden":"true"}})]):e._e(),0!==e.pos?a("div",{staticClass:"btn btn-direction btn-left",on:{click:e.leftParte}},[a("i",{staticClass:"fa fa-3x fa-chevron-left",attrs:{"aria-hidden":"true"}})]):e._e()]),a("template",{slot:"footer"},[a("div",{staticClass:"autor-imagem input-value"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.elemento.autor,expression:"elemento.autor",modifiers:{lazy:!0}}],attrs:{placeholder:"Autor da Imagem..."},domProps:{value:e.elemento.autor},on:{change:function(t){return e.$set(e.elemento,"autor",t.target.value)}}})]),a("div",{staticClass:"path-description input-value"},[a("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:e.elemento.descricao,expression:"elemento.descricao",modifiers:{lazy:!0}}],attrs:{placeholder:"Descrição da Imagem...",align:"text-left"},domProps:{value:e.elemento.descricao},on:{change:function(t){return e.$set(e.elemento,"descricao",t.target.value)}}})])])],2)],1)}),[],!1,null,"fd3b61d4",null);t.default=l.exports},"86d6":function(e,t,a){"use strict";var n=a("4cb0");a.n(n).a}}]);