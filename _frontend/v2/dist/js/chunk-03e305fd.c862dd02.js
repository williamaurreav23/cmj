(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-03e305fd","chunk-8637b368"],{1351:function(t,e,n){"use strict";var o=n("6294");n.n(o).a},"186d":function(t,e,n){"use strict";var o=n("4c93");n.n(o).a},"1f38":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i}));var o=function(){return"undefined"!=typeof window?window:t},i=function(){var t=o();return t&&t.tinymce?t.tinymce:null}}).call(this,n("c8ba"))},"21c5":function(t,e,n){"use strict";(function(t){n("d3b7"),n("ddb0");var o=n("5530"),i=n("3bf0");e.a={name:"container",extends:Object(o.a)({},i.default),data:function(){return{has_titulo:!1,has_descricao:!1,has_autor:!1}},methods:{toogleTitulo:function(t){this.has_titulo=!this.has_titulo},toogleDescricao:function(t){this.has_descricao=!this.has_descricao},toogleAutor:function(t){this.has_autor=!this.has_autor},addBrother:function(t,e){var n=Object();n.tipo=this.getChoices.all_bycomponent[t].id,n.parent=this.parent.id,n.ordem=this.elemento.ordem+1,this.createBrother(n)},addChild:function(t,e){var n=Object();n.tipo=this.getChoices.all_bycomponent[t].id,n.parent=this.elemento.id,this.createChild(n)},deleteParte:function(t){var e=this,n=this;n.documentoResource.deleteDocumento(this.elemento.id).then((function(t){n.$parent.getDocumento(e.parent.id),n.success("Elemento excluído com sucesso.")})).catch((function(t){n.danger(t.response.data.detail)}))},containerTrocarTipo:function(e){var n=this,o=Object(),i=t.keys(this.getChoices.tipo.containers);o.tipo=this.elemento.tipo===parseInt(i[0])?i[1]:i[0],o.id=this.elemento.id,n.updateDocumento(o).then((function(t){n.$parent.getDocumento(n.parent.id)}))}}}}).call(this,n("2ef0"))},"26b1":function(t,e,n){"use strict";n.r(e);var o=n("21c5").a,i=(n("186d"),n("2877")),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.name_component,0!==t.childsOrdenados.length?"":"empty"]},[n("div",{staticClass:"btn-toolbar widgets widget-top"},[t.elemento.titulo?t._e():n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-success",attrs:{title:"Disponibilizar Título para o Container",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toogleTitulo(e)}}},[t._v("T")])]),0===t.childsOrdenados.length?[n("div",{staticClass:"btn-group btn-group-sm"},t._l(t.getChoices.tipo.subtipos,(function(e,o){return n("button",{key:o,staticClass:"btn btn-primary",attrs:{type:"button",title:"Adiciona Elemento no final deste Container..."},on:{click:function(n){return n.target!==n.currentTarget?null:t.addChild(e.component_tag,n)}}},[t._v(t._s(e.text))])})),0)]:t._e(),n("div",{staticClass:"btn-group btn-group-sm"})],2),t.has_titulo||t.elemento.titulo?n("div",{staticClass:"path-title-container construct"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.elemento.titulo,expression:"elemento.titulo",modifiers:{lazy:!0}}],attrs:{placeholder:"Sub título do container..."},domProps:{value:t.elemento.titulo},on:{change:function(e){return t.$set(t.elemento,"titulo",e.target.value)}}})]):t._e(),t._l(t.childsOrdenados,(function(e){return n(t.classChild(e),{key:e.id,tag:"component",attrs:{child:e,parent:t.elemento}})})),n("div",{staticClass:"clearfix"}),n("div",{staticClass:"btn-toolbar widgets widget-bottom justify-content-end"},[n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Simples abaixo deste",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container",e)}}},[t._v("+C")]),n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Extendido abaixo deste",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container-fluid",e)}}},[t._v("+CE")]),n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Adicionar novo Container Para PDF",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.addBrother("container-file",e)}}},[t._v("+CF")])]),n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Trocar tipo deste Container",type:"button"},on:{click:t.containerTrocarTipo}},[n("i",{staticClass:"fas fa-exchange-alt"})])]),n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-danger",attrs:{title:"Remover este Container",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.deleteParte(e)}}},[t._v("x")])])])],2)}),[],!1,null,null,null);e.default=r.exports},"4c93":function(t,e,n){},6294:function(t,e,n){},d5b8:function(t,e,n){"use strict";n.r(e);var o=n("5530"),i=n("26b1"),r=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],s=function(t){return-1!==r.indexOf(t)},a=function(t,e,n){var o=e.$props.value?e.$props.value:"",i=e.$props.initialValue?e.$props.initialValue:"";n.setContent(o||i),e.$listeners.input&&function(t,e){var n,o=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(o)?o.join(" "):o;t.$watch("value",(function(t,o){e&&"string"==typeof t&&t!==n&&t!==o&&(e.setContent(t),n=t)})),e.on(i||"change keyup undo redo",(function(){n=e.getContent(),t.$emit("input",n)}))}(e,n),function(t,e,n){Object.keys(e).filter(s).forEach((function(o){var i=e[o];"function"==typeof i&&("onInit"===o?i(t,n):n.on(o.substring(2),(function(t){return i(t,n)})))}))}(t,e.$listeners,n)},l=0,c=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++l+String(e)},u=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},d=n("1f38"),p={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean},m=function(){return(m=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},b={listeners:[],scriptId:c("tiny-script"),scriptLoaded:!1},h=function(t){return function(){var e,n,o,i=m({},t.$props.init,{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,u(e).concat(u(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return a(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(o=t.element)&&"textarea"===o.tagName.toLowerCase()&&(t.element.style.visibility=""),Object(d.a)().init(i)}},f={props:p,created:function(){this.elementId=this.$props.id||c("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(d.a)())h(this)();else if(this.element&&this.element.ownerDocument){var t=this.element.ownerDocument,e=this.$props.cloudChannel?this.$props.cloudChannel:"5",n=this.$props.apiKey?this.$props.apiKey:"no-api-key";!function(t,e,n,o){t.scriptLoaded?o():(t.listeners.push(o),e.getElementById(t.scriptId)||function(t,e,n,o){var i=e.createElement("script");i.type="application/javascript",i.id=t,i.addEventListener("load",o),i.src=n,e.head&&e.head.appendChild(i)}(t.scriptId,e,n,(function(){t.listeners.forEach((function(t){return t()})),t.scriptLoaded=!0})))}(b,t,"https://cdn.tiny.cloud/1/"+n+"/tinymce/"+e+"/tinymce.min.js",h(this))}},beforeDestroy:function(){null!==Object(d.a)()&&Object(d.a)().remove(this.editor)},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}},g=(n("7913"),{name:"tpd-texto",extends:Object(o.a)({},i.default),components:{Editor:f},data:function(){return{usartinymce:!0}},methods:{toogleEditor:function(){this.usartinymce=!this.usartinymce},success:function(){}}}),v=(n("1351"),n("2877")),y=Object(v.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.name_component},[n("div",{staticClass:"btn-toolbar widgets widget-top justify-content-end"},[t.elemento.titulo?t._e():n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-success",attrs:{title:"Disponibilizar Subtítulo para este Fragmento de Texto",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toogleTitulo(e)}}},[t._v("T")])]),n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-success",attrs:{title:[t.usartinymce?"Usar Editor Simples":"Usar Editor Avançado"],type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.toogleEditor(e)}}},[t._v("Edição de Texto")]),n("button",{staticClass:"btn btn-danger",attrs:{title:"Remover este Fragmento de Texto",type:"button"},on:{click:function(e){return e.target!==e.currentTarget?null:t.deleteParte(e)}}},[t._v("x")])])]),t.has_titulo||t.elemento.titulo?n("span",{staticClass:"path-title-partes"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.elemento.titulo,expression:"elemento.titulo",modifiers:{lazy:!0}}],attrs:{placeholder:"Subtítulo para Fragmento de Texto..."},domProps:{value:t.elemento.titulo},on:{change:function(e){return t.$set(t.elemento,"titulo",e.target.value)}}})]):t._e(),t.usartinymce?n("div",{staticClass:"construct"},[t.usartinymce?n("editor",{attrs:{inline:""},model:{value:t.elemento.texto,callback:function(e){t.$set(t.elemento,"texto",e)},expression:"elemento.texto"}}):t._e()],1):t._e(),t.usartinymce?t._e():n("textarea-autosize",{attrs:{placeholder:"Fragmento de Texto",align:"text-left"},model:{value:t.elemento.texto,callback:function(e){t.$set(t.elemento,"texto",e)},expression:"elemento.texto"}}),t._l(t.childsOrdenados,(function(e){return n(t.classChild(e),{key:e.id,tag:"component",attrs:{child:e,parent:t.elemento}})})),n("div",{staticClass:"btn-toolbar widgets widget-bottom justify-content-end"},[n("div",{staticClass:"btn-group btn-group-sm"},t._l(t.getChoices.tipo.subtipos,(function(e,o){return n("button",{key:o,staticClass:"btn btn-primary",attrs:{type:"button",title:"Adiciona Elemento aqui..."},on:{click:function(n){return n.target!==n.currentTarget?null:t.addBrother(e.component_tag,n)}}},[t._v(t._s(e.text))])})),0)])],2)}),[],!1,null,null,null);e.default=y.exports}}]);