(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5cedb00e"],{"0a17":function(t,a,e){},2999:function(t,a,e){"use strict";var i=e("f2dd");e.n(i).a},"2a13":function(t,a,e){},"2bd8":function(t,a,e){"use strict";(function(t){a.a={name:"norma-simple-modal-view",props:["html_id","modal_norma","idd"],data:function(){return{app:["norma"],model:["normajuridica"],norma_render:null}},watch:{modal_norma:function(t,a){null!==t&&(this.norma_render=t)},norma_render:function(t,a){null!==t&&void 0===t.html&&this.getText(t)},idd:function(t,a){var e=this;if(null!==t){var i=0;null!=t&&"number"==typeof t&&(i=t,e.utils.getModel("norma","normajuridica",i).then((function(t){e.norma_render=t.data})))}}},computed:{},mounted:function(){var t=this;t.$nextTick().then((function(){null!=t.idd&&"number"==typeof t.idd&&t.getObject({app:"norma",model:"normajuridica",id:t.idd}).then((function(a){t.norma_render=a}))}))},methods:{getText:function(a){var e=this;void 0!==a.id&&a.id>0&&t.ajax({url:"/norma/".concat(a.id,"/ta?embedded"),type:"GET",success:function(t){var i=t;e.$set(a,"html",i)}})},fetch:function(t){var a=this;void 0!==a.modal_norma&&a.modal_norma.id===t.id&&t.model===a.model[0]&&this.refresh()},refresh:function(t){var a=this;a.getObject(t).then((function(e){e.norma_de_destaque&&a.$set(a.itens["".concat(t.model,"_list")],t.id,e)}))}}}}).call(this,e("1157"))},"4c15":function(t,a,e){"use strict";e.r(a);var i=e("ce26").a,s=(e("b5b1"),e("2877")),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:"sessao-plenaria-topo"},[e("div",{staticClass:"tit"},[t._v(" "+t._s(t.titulo)+" ")]),e("div",{staticClass:"subtitulo"},[e("span",[t._v(t._s(t.subtitulo))]),t._v(" – "),e("span",[t._v(t._s(t.date_text))])])])}),[],!1,null,null,null).exports,o=e("7b25").a,r=(e("8164"),{name:"sessao-plenaria-online",components:{SessaoPlenariaTopo:n,PautaOnline:Object(s.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pauta-online"},[0===t.itens.ordemdia_list.length&&t.init?e("div",{staticClass:"empty-list"},[t._v(" Não existem Itens na Ordem do Dia com seus critérios de busca! ")]):t._e(),t.init?t._e():e("div",{staticClass:"empty-list"},[t._v(" Carregando listagem... ")]),e("div",{class:["item-expediente",t.nivel(t.NIVEL3,t.itens.expedientesessao_list.length>0)]},[e("div",{staticClass:"inner",domProps:{innerHTML:t._s(t.expediente(1))}})]),e("div",{staticClass:"container-expedientemateria"},[t.itensDoExpediente.length?e("div",{staticClass:"titulo-container"},[t._v("Matérias do Grande Expediente")]):t._e(),e("div",{staticClass:"inner"},t._l(t.itensDoExpediente,(function(t){return e("item-de-pauta",{key:"exp"+t.id,attrs:{item:t,type:"expedientemateria"}})})),1)]),e("div",{class:["item-expediente",t.nivel(t.NIVEL3,t.itens.expedientesessao_list.length>0)]},[e("div",{staticClass:"inner",domProps:{innerHTML:t._s(t.expediente(3))}})]),e("div",{staticClass:"container-ordemdia"},[t.itensDaOrdemDia.length?e("div",{staticClass:"titulo-container"},[t._v("Matérias da Ordem do Dia")]):t._e(),e("div",{staticClass:"inner"},t._l(t.itensDaOrdemDia,(function(t){return e("item-de-pauta",{key:"od"+t.id,attrs:{item:t,type:"ordemdia"}})})),1)]),e("div",{class:["item-expediente",t.nivel(t.NIVEL3,t.itens.expedientesessao_list.length>0)]},[e("div",{staticClass:"inner",domProps:{innerHTML:t._s(t.expediente(4))}})])])}),[],!1,null,null,null).exports},data:function(){return{sessao:null,idd:parseInt(this.$route.params.id),app:["sessao"],model:["sessaoplenaria"]}},mounted:function(){var t=this,a=this;a.$nextTick((function(){a.getObject({action:"",id:a.idd,app:a.app[0],model:a.model[0]}).then((function(a){t.sessao=a})).catch((function(){t.sessao=void 0!==t.cache.sessao&&void 0!==t.cache.sessao.sessaoplenaria&&void 0!==t.cache.sessao.sessaoplenaria[t.idd]?t.cache.sessao.sessaoplenaria[t.idd]:null}))}))},methods:{fetch:function(t){var a=this;t.id===this.idd&&t.app===this.app[0]&&t.model===this.model[0]&&("post_delete"===t.action?setTimeout((function(){a.sendMessage({alert:"danger",message:"Sessão Plenária foi excluída",time:5}),a.$router.push({name:"sessao_list_link"})}),500):this.sessao=this.cache.sessao.sessaoplenaria[this.idd])}}}),c=(e("c8f9"),Object(s.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sessao-plenaria-online"},[this.sessao?[a("sessao-plenaria-topo",{attrs:{sessao:this.sessao}}),a("pauta-online",{attrs:{sessao:this.sessao}})]:this._e()],2)}),[],!1,null,null,null));a.default=c.exports},"575e":function(t,a,e){"use strict";(function(t,i){e("99af"),e("ac1f"),e("5319");var s=e("95af"),n=e("96ac");a.a={name:"item-de-pauta",props:["item","type"],components:{MateriaPauta:s.a,NormaSimpleModalView:n.a},data:function(){return{app:["materia","norma"],model:["materialegislativa","tramitacao","anexada","autoria","legislacaocitada","documentoacessorio"],materia:{},tramitacao:{ultima:{},status:{}},anexadas:{},legislacaocitada:{},documentoacessorio:{},modal_legis_citada:null}},watch:{modal_legis_citada:function(a,e){var i=this;null!==a&&this.$nextTick().then((function(){t("#modal-legis-citada-".concat(a.id)).modal("show"),t("#modal-legis-citada-".concat(a.id)).on("hidden.bs.modal",(function(t){i.modal_legis_citada=null}))}))}},computed:{data_apresentacao:function(){try{var t=this.stringToDate(this.materia.data_apresentacao,"yyyy-mm-dd","-");return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())}catch(t){return""}},observacao:function(){var t=this.item.observacao;return t=(t=(t=(t=t.replace(/^\r\n/g,"")).replace(/\r\n/g,"<br />")).replace(/\r/g," ")).replace(/\n/g,"<br />")},itensAnexados:{get:function(){return i.orderBy(this.anexadas,"data_apresentacao")}},itensLegislacaoCitada:{get:function(){return i.orderBy(this.legislacaocitada,"norma")}},itensDocumentosAcessorios:{get:function(){return i.orderBy(this.documentoacessorio,"data")}},resultadoVotacao:{get:function(){var t="",a=this.item.resultado;return"Aprovado"===a?t="status-votacao result-aprovado":"Rejeitado"===a?t="status-votacao result-rejeitado":"Pedido de Vista"===a?t="status-votacao result-vista":"Prazo Regimental"===a&&(t="status-votacao result-prazo"),""!==t?t:"status-votacao"}}},mounted:function(){this.refresh()},methods:{refresh:function(){var t=this;t.fetchMateria().then((function(a){i.each(t.materia.anexadas,(function(a,e){t.fetchMateria({action:"post_save",app:t.app[0],model:t.model[0],id:a})}))})),t.$nextTick().then((function(){t.fetchUltimaTramitacao()})).then((function(){t.fetchLegislacaoCitada()})).then((function(){t.fetchDocumentoAcessorio()}))},fetch:function(t){var a=this;void 0!==t&&("materia"===t.app&&"materialegislativa"===t.model?(t.id===a.item.materia||t.id in a.materia.anexadas)&&a.fetchMateria(t):"materia"===t.app&&"anexada"===t.model?(a.$set(a,"anexadas",{}),a.refreshState({action:"",app:a.app[0],model:a.model[0],id:a.item.materia}).then((function(t){a.refresh()}))):"materia"===t.app&&"autoria"===t.model?a.refreshState({action:"",app:a.app[0],model:a.model[0],id:a.item.materia}).then((function(t){a.refresh()})):"materia"===t.app&&"tramitacao"===t.model?a.fetchUltimaTramitacao(t):"norma"===t.app&&"legislacaocitada"===t.model?a.fetchLegislacaoCitada():"materia"===t.app&&"documentoacessorio"===t.model&&a.fetchDocumentoAcessorio())},fetchDocumentoAcessorio:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="&materia=".concat(a.item.materia);a.utils.getModelList("materia","documentoacessorio",t,e).then((function(t){i.each(t.data.results,(function(t){a.$set(a.documentoacessorio,t.id,t)})),null!==t.data.pagination.next_page&&a.$nextTick().then((function(){a.fetchDocumentoAcessorio(t.data.pagination.next_page)}))})).catch((function(t){a.sendMessage({alert:"danger",message:"Não foi possível recuperar a lista de Documentos Acessórios.",time:5})}))},fetchLegislacaoCitada:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="&materia=".concat(a.item.materia);a.utils.getModelList("norma","legislacaocitada",t,e).then((function(t){i.each(t.data.results,(function(t){a.$set(a.legislacaocitada,t.id,t)})),null!==t.data.pagination.next_page&&a.$nextTick().then((function(){a.fetchLegislacaoCitada(t.data.pagination.next_page)}))})).catch((function(t){a.sendMessage({alert:"danger",message:"Não foi possível recuperar a lista de Legislação Citada.",time:5})}))},fetchMateria:function(t){var a=this;return a.getObject({action:"",app:a.app[0],model:a.model[0],id:void 0!==t?t.id:a.item.materia}).then((function(t){return t.id===a.item.materia?a.materia=t:a.$set(a.anexadas,t.id,t),t}))},fetchUltimaTramitacao:function(){var t=this;return t.utils.getByMetadata({action:"ultima_tramitacao",app:"materia",model:"materialegislativa",id:t.item.materia}).then((function(a){t.tramitacao.ultima=a.data,void 0!==t.tramitacao.ultima.id&&t.getObject({action:"",app:"materia",model:"statustramitacao",id:t.tramitacao.ultima.status}).then((function(a){t.tramitacao.status=a}))}))}}}}).call(this,e("1157"),e("2ef0"))},"6b46":function(t,a,e){},"71e4":function(t,a,e){},7637:function(t,a,e){"use strict";(function(t){e("99af"),e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d");var i=e("bc3a"),s=e.n(i);a.a={name:"materia-pauta",props:["materia","type"],data:function(){return{app:["materia"],model:["materialegislativa","tramitacao","anexada","autoria"],autores:{},tipo_string:"",blob:null,baixando:!1}},watch:{materia:function(t){this.refresh()}},computed:{data_apresentacao:function(){try{var t=this.stringToDate(this.materia.data_apresentacao,"yyyy-mm-dd","-");return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())}catch(t){return""}},autores_list:{get:function(){return t.orderBy(this.autores,"nome")}}},mounted:function(){var t=this;setTimeout((function(){t.blob||t.refresh()}),1e3)},methods:{clickFile:function(t){var a=window.URL.createObjectURL(this.blob);window.location=a},fetch:function(t){var a=this;void 0!==a.materia&&a.materia.id===t.id&&t.model===a.model[0]&&this.refresh()},refresh:function(){var a=this;void 0!==a.materia&&(a.getObject({app:"materia",model:"tipomaterialegislativa",id:a.materia.tipo}).then((function(t){a.tipo_string=t.descricao})),a.$set(a,"autores",{}),a.$nextTick().then((function(){if(t.each(a.materia.autores,(function(t){a.getObject({app:"base",model:"autor",id:t}).then((function(t){a.$set(a.autores,t.id,t)}))})),null!==a.materia.texto_original){var e=a.materia.texto_original;a.baixando=!0,s()({url:e,method:"GET",responseType:"blob"}).then((function(t){a.baixando=!1,a.blob=new Blob([t.data],{type:"application/pdf"})})).catch((function(){a.baixando=!1}))}})))}}}}).call(this,e("2ef0"))},"7b25":function(t,a,e){"use strict";(function(t){e("4de4");var i=e("d93a");a.a={name:"pauta-online",props:["sessao"],components:{ItemDePauta:i.a},data:function(){return{itens:{expedientesessao_list:[],ordemdia_list:{},expedientemateria_list:{}},init:!1,app:["sessao"],model:["expedientemateria","ordemdia"]}},computed:{itensDaOrdemDia:{get:function(){return t.orderBy(this.itens.ordemdia_list,"numero_ordem")}},itensDoExpediente:{get:function(){return t.orderBy(this.itens.expedientemateria_list,"numero_ordem")}}},mounted:function(){var t=this;setTimeout((function(){t.fetchItens(),t.fetchExpedienteSessao()}),1e3)},methods:{expediente:function(a){var e=this.itens.expedientesessao_list,i=t.filter(e,["tipo",a]);return i.length>0?i[0].conteudo:""},fetch:function(t){if("post_delete"!==t.action){var a=this;a.getObject(t).then((function(e){a.$set(a.itens["".concat(t.model,"_list")],t.id,e)}))}else this.$delete(this.itens["".concat(t.model,"_list")],t.id)},fetchItens:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.model,e=this;t.mapKeys(a,(function(a,i){t.mapKeys(e.itens["".concat(a,"_list")],(function(t,a){t.vue_validate=!1})),e.$nextTick().then((function(){e.fetchList(1,a)}))}))},fetchExpedienteSessao:function(){var t=this;return t.utils.getByMetadata({action:"expedientes",app:"sessao",model:"sessaoplenaria",id:t.sessao.id}).then((function(a){t.$set(t.itens,"expedientesessao_list",a.data.results)})).then((function(t){}))},fetchList:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this,s="&sessao_plenaria=".concat(this.sessao.id);i.utils.getModelOrderedList("sessao",e,"numero_ordem",null===a?1:a,s).then((function(a){i.init=!0,t.each(a.data.results,(function(t,a){t.vue_validate=!0,t.id in i.itens["".concat(e,"_list")]?i.itens["".concat(e,"_list")][t.id]=t:i.$set(i.itens["".concat(e,"_list")],t.id,t)})),i.$nextTick().then((function(){null!==a.data.pagination.next_page?i.fetchList(a.data.pagination.next_page,e):t.mapKeys(i.itens["".concat(e,"_list")],(function(t,a){t.vue_validate||i.$delete(i.itens["".concat(e,"_list")],t.id)}))}))})).catch((function(t){i.init=!0,i.sendMessage({alert:"danger",message:"Não foi possível recuperar a Ordem do Dia.",time:5})}))}}}}).call(this,e("2ef0"))},8164:function(t,a,e){"use strict";var i=e("0a17");e.n(i).a},"95af":function(t,a,e){"use strict";var i=e("7637").a,s=(e("2999"),e("2877")),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["materia-pauta"]},[e("div",{staticClass:"epigrafe"},[t._v(t._s(t.tipo_string)+" nº "+t._s(t.materia.numero)+"/"+t._s(t.materia.ano))]),e("div",{class:["item-header",t.tipo_string?"":"d-none"]},[e("div",{staticClass:"link-file",attrs:{id:t.type+"-"+t.materia.id}},[e("a",{class:["btn btn-link","link-file-"+t.materia.id,t.blob?"":"d-none"],on:{click:t.clickFile}},[e("i",{staticClass:"far fa-2x fa-file-pdf"})]),e("small",{class:t.baixando?"":"d-none"},[t._v("Baixando"),e("br"),t._v("Arquivo")])]),e("div",{staticClass:"data-header"},[e("div",{staticClass:"detail-header"},[e("div",{staticClass:"protocolo-data"},[e("span",[t._v(" Protocolo: "),e("strong",[t._v(t._s(t.materia.numero_protocolo))])]),e("span",[t._v(t._s(t.data_apresentacao))])]),e("div",{staticClass:"autoria"},t._l(t.autores_list,(function(a,i){return e("span",{key:"au"+i},[t._v(t._s(a.nome))])})),0)]),e("div",{staticClass:"ementa"},[t._v(t._s(t.materia.ementa))])])])])}),[],!1,null,null,null);a.a=n.exports},"96ac":function(t,a,e){"use strict";var i=e("2bd8").a,s=(e("ee48"),e("2877")),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["norma-simple-modal-view","modal","fade"],attrs:{id:t.html_id}},[e("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[t.norma_render?e("h5",{staticClass:"modal-title",attrs:{id:"#titulo"}},[t._v(" "+t._s(""!==t.norma_render.apelido?t.norma_render.apelido:"")+" ("+t._s(t.norma_render.__str__)+") ")]):t._e(),t._m(0)]),e("div",{staticClass:"modal-body"},[t.norma_render&&!t.norma_render.html?e("div",[t._v("Carregando texto...")]):t._e(),t.norma_render?e("div",{domProps:{innerHTML:t._s(t.norma_render.html)}}):t._e()]),t._m(1)])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Fechar"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Fechar")])])}],!1,null,null,null);a.a=n.exports},"9c44":function(t,a,e){"use strict";var i=e("d461");e.n(i).a},b5b1:function(t,a,e){"use strict";var i=e("6b46");e.n(i).a},c8f9:function(t,a,e){"use strict";var i=e("71e4");e.n(i).a},ce26:function(t,a,e){"use strict";(function(t){e("99af");a.a={name:"sessao-plenaria-topo",props:["sessao"],data:function(){return{app:["sessao","parlamentares"],model:["sessaoplenaria","sessaolegislativa","tiposessaoplenaria","legislatura"],data_inicio:new Date,sessao_legislativa:{numero:""},tipo:{nome:""},legislatura:{numero:""},metadata:{sessao_legislativa:{app:"parlamentares",model:"sessaolegislativa",id:this.sessao.sessao_legislativa},legislatura:{app:"parlamentares",model:"legislatura",id:this.sessao.legislatura},tipo:{app:"sessao",model:"tiposessaoplenaria",id:this.sessao.tipo}}}},watch:{sessao:function(t){this.updateSessao(),this.fetch()}},computed:{titulo:function(){var t=this.sessao,a=this.tipo,e=this.data_inicio;return"".concat(t.numero,"ª ").concat(a.nome," da \n              ").concat(e.getDate()>15?2:1,"ª Quizena do Mês de \n              ").concat(this.month_text(e.getMonth())," de \n              ").concat(e.getFullYear(),"\n              ")},subtitulo:function(){return"".concat(this.sessao_legislativa.numero,"ª Sessão Legislativa da \n              ").concat(this.legislatura.numero,"ª Legislatura")},date_text:function(){return"".concat(this.data_inicio.getDate()," de \n              ").concat(this.month_text(this.data_inicio.getMonth())," de\n              ").concat(this.data_inicio.getFullYear()," – ").concat(this.sessao.hora_inicio)}},methods:{fetch:function(a){var e=this;t.mapKeys(e.metadata,(function(t,a){var i=e.metadata[a];e.getObject(i).then((function(t){e[a]=t}))}))},updateSessao:function(){this.data_inicio=this.stringToDate(this.sessao.data_inicio,"yyyy-mm-dd","-"),this.metadata.sessao_legislativa.id=this.sessao.sessao_legislativa,this.metadata.tipo.id=this.sessao.tipo,this.metadata.legislatura.id=this.sessao.legislatura}},mounted:function(){this.updateSessao(),this.fetch()}}}).call(this,e("2ef0"))},d461:function(t,a,e){},d93a:function(t,a,e){"use strict";var i=e("575e").a,s=(e("9c44"),e("2877")),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:["item-de-pauta",t.type]},[e("div",{class:["empty-list",void 0===t.materia.id?"":"d-none"]},[t._v(" Carregando Matéria... ")]),e("div",{class:[t.resultadoVotacao]},[t.item.resultado?e("span",[t._v(t._s(t.item.resultado))]):e("span",[t._v("Tramitando")])]),e("materia-pauta",{attrs:{materia:t.materia,type:t.type}}),e("div",{class:["item-body"]}),e("div",{class:["item-body",void 0!==t.materia.id&&t.materia.anexadas.length>0?"col-anexadas":""]},[e("div",{staticClass:"col-1-body"},[e("div",{staticClass:"status-tramitacao"},[e("div",{class:["ultima_tramitacao",t.nivel(t.NIVEL2,t.tramitacao.ultima!=={})]},[e("strong",[t._v("Situação:")]),t._v(" "+t._s(t.tramitacao.status.descricao)),e("br"),e("strong",[t._v("Ultima Ação:")]),t._v(" "+t._s(t.tramitacao.ultima.texto)+" ")]),e("div",{class:["observacao",t.nivel(t.NIVEL3,t.observacao.length>0)],domProps:{innerHTML:t._s(t.observacao)}})]),e("div",{class:["sub-containers",0===t.itensLegislacaoCitada.length?"d-none":"container-legis-citada"]},[t._m(0),e("div",{staticClass:"inner"},t._l(t.itensLegislacaoCitada,(function(a){return e("button",{key:"legiscit"+a.id,staticClass:"btn btn-link",attrs:{type:"button","data-toggle":"modal","data-target":"modal-legis-citada-"+a.id},on:{click:function(e){t.modal_legis_citada=a}}},[t._v(" "+t._s(a.__str__)+" ")])})),0)]),e("div",{class:["sub-containers",t.nivel(t.NIVEL2,t.itensDocumentosAcessorios.length>0),0===t.itensDocumentosAcessorios.length?"d-none":"container-docs-acessorios"]},[t._m(1),e("div",{staticClass:"inner"},t._l(t.itensDocumentosAcessorios,(function(a){return e("a",{key:"docsacc"+a.id,staticClass:"btn btn-link",attrs:{href:a.arquivo}},[t._v(" "+t._s(a.__str__)+" ")])})),0)])]),e("div",{staticClass:"col-2-body"},[e("div",{class:["sub-containers",t.nivel(t.NIVEL2,t.itensAnexados.length>0)]},[t._m(2),e("div",{staticClass:"inner"},t._l(t.itensAnexados,(function(a){return e("div",{key:""+t.type+a.id},[e("materia-pauta",{attrs:{materia:a,type:t.type}})],1)})),0)])])]),t.modal_legis_citada?e("norma-simple-modal-view",{attrs:{html_id:"modal-legis-citada-"+t.modal_legis_citada.id,modal_norma:null,idd:t.modal_legis_citada.norma}}):t._e()],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title"},[a("span",[this._v(" Legislação Citada ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title"},[a("span",[this._v(" Documentos Acessórios ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title"},[a("span",[this._v(" Matérias Anexadas ")])])}],!1,null,null,null);a.a=n.exports},ee48:function(t,a,e){"use strict";var i=e("2a13");e.n(i).a},f2dd:function(t,a,e){}}]);