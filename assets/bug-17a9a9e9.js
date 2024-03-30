import{d as $,y as B,r as T,G as j,e as l,o as r,f as s,g as e,w as t,l as _,i as g,h as m,t as d,a1 as E,_ as H,S as I,R as D,x as b}from"./index-17000ae8.js";const G={key:0},J={key:0},M={key:1},O={style:{"white-space":"pre-wrap"}},R={key:1},q=$({__name:"bug",setup(z){const k=B(),v="example",u=T(""),w=j(()=>u.value?[JSON.parse(u.value)]:[]);function f(i){switch(E(()=>{u.value=sessionStorage.getItem("errorLog")||""}),i){case 1:a=abc;break;case 2:testMethod();break}}function h(i){window.open(i,"_blank")}return(i,o)=>{const y=H,x=l("el-icon"),p=l("el-button"),S=I,C=l("el-tag"),c=l("el-table-column"),V=l("el-link"),L=l("el-table"),N=D;return r(),s("div",null,[e(S,{title:"错误日志",content:"错误日志通过 Vue 提供的全局错误钩子 errorHandler 进行拦截，如果需要上报给后端，需自行实现"},{default:t(()=>[e(p,{onClick:o[0]||(o[0]=n=>h("https://v3.cn.vuejs.org/api/application-config.html#errorhandler"))},{icon:t(()=>[e(x,null,{default:t(()=>[e(y,{name:"i-ep:link"})]),_:1})]),default:t(()=>[_(" Vue errorHandler 说明 ")]),_:1})]),_:1}),e(N,null,{default:t(()=>[g(v)!=="development"?(r(),s("div",G,[g(k).settings.app.enableErrorLog?(r(),s("div",M,[e(p,{type:"danger",onClick:o[1]||(o[1]=n=>f(1))},{default:t(()=>[_(" 模拟触发错误1 ")]),_:1}),e(p,{type:"danger",onClick:o[2]||(o[2]=n=>f(2))},{default:t(()=>[_(" 模拟触发错误2 ")]),_:1}),e(L,{data:g(w),border:""},{default:t(()=>[e(c,{label:"错误信息",width:"200",align:"center"},{default:t(n=>[m("div",null,d(n.row.err.message),1),e(C,{type:"danger"},{default:t(()=>[_(d(n.row.info),1)]),_:2},1024)]),_:1}),e(c,{label:"错误详情"},{default:t(n=>[m("div",O,d(n.row.err.stack),1)]),_:1}),e(c,{label:"错误链接",width:"200",align:"center"},{default:t(n=>[e(V,{href:n.row.url,target:"_blank"},{default:t(()=>[_(d(n.row.url),1)]),_:2},1032,["href"])]),_:1}),e(c,{prop:"datetime",label:"时间",width:"200",align:"center"})]),_:1},8,["data"])])):(r(),s("div",J," 请到 seeting.js 里打开错误日志功能，再进入该页面查看演示 "))])):(r(),s("div",R," 当前为开发环境，该功能关闭演示 "))]),_:1})])}}});typeof b=="function"&&b(q);export{q as default};
