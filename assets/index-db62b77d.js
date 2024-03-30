import{_ as A}from"./index-9a100d82.js";import{d as y,r as G,B as H,aa as v,e as c,a2 as J,o as p,f as b,g as a,h as K,w as t,i as o,j as Q,L as f,O as W,a1 as h,b_ as X,E as Y,S as Z,_ as ee,q as ae,x as C}from"./index-17000ae8.js";import ne from"./index-150955f0.js";import te from"./index-03af770c.js";import{u as oe}from"./usePagination-e0d8e4d1.js";import"./sortable.esm-be94e56d.js";const ie={class:"absolute-container"},le={class:"page-main"},se={key:1,class:"empty"},ce=y({name:"PagesExampleTable"}),k=y({...ce,setup(de){const{pagination:l,getParams:x,onSizeChange:w,onCurrentChange:z,onSortChange:L}=oe();l.value.size=20,l.value.sizes=[20,50,100];const e=G({loading:!1,search:{name:""},dataList:[],selectionDataList:[],form:{visible:!1,id:""},dialog:{visible:!1,id:"",info:{}}});H(()=>{d()});function d(){e.value.loading=!0;const n=x();e.value.search.name&&(n.name=e.value.search.name),v.get("pages_example/table/list",{baseURL:"/mock/",params:n}).then(i=>{e.value.loading=!1,e.value.dataList=i.data.list,l.value.total=i.data.total})}function S(n){w(n).then(()=>d())}function D(n=1){z(n).then(()=>d())}function P({prop:n,order:i}){L(n,i).then(()=>d())}function T(){e.value.form.visible=!1,h(()=>{e.value.form.visible=!0,e.value.form.id=""})}function B(n){e.value.form.visible=!1,h(()=>{e.value.form.visible=!0,e.value.form.id=n.id})}function E(n){X.confirm(`确认删除「${n.name}」表格吗？`,"确认信息").then(()=>{v.post("pages_example/table/delete",{id:n.id},{baseURL:"/mock/"}).then(()=>{d(),Y.success({message:"模拟删除成功",center:!0})})}).catch(()=>{})}function V(n){e.value.dialog.visible=!0,e.value.dialog.id=n.id,e.value.dialog.info={}}function $(n){e.value.dialog.visible=!0,e.value.dialog.id="",e.value.dialog.info=n}function M(){e.value.form.visible=!1,d()}function F(){e.value.form.visible=!1}return(n,i)=>{const N=Z,r=ee,u=c("el-icon"),_=c("el-button"),U=c("el-space"),m=c("el-table-column"),R=c("el-button-group"),j=c("el-table"),q=c("el-pagination"),I=A,O=J("loading");return p(),b("div",ie,[a(N,{title:"表格管理",content:"页面数据为 Mock 示例数据，非真实数据。"}),K("div",le,[a(I,{"left-side-width":"520px","hide-left-side-toggle":""},{leftSide:t(()=>[a(U,{wrap:""},{default:t(()=>[a(_,{type:"primary",size:"default",onClick:T},{icon:t(()=>[a(u,null,{default:t(()=>[a(r,{name:"i-ep:plus"})]),_:1})]),_:1}),a(_,{type:"danger",size:"default",disabled:!o(e).selectionDataList.length},{icon:t(()=>[a(u,null,{default:t(()=>[a(r,{name:"i-ep:delete"})]),_:1})]),_:1},8,["disabled"])]),_:1}),Q((p(),f(j,{class:"list-table",data:o(e).dataList,border:"",stripe:"","highlight-current-row":"",height:"100%",onSortChange:P,onSelectionChange:i[0]||(i[0]=s=>o(e).selectionDataList=s)},{default:t(()=>[a(m,{type:"selection",align:"center",fixed:""}),a(m,{prop:"name",label:"名称","min-width":"150px"}),a(m,{prop:"code",label:"标识",width:"150",align:"center"}),a(m,{label:"操作",width:"140",align:"center",fixed:"right"},{default:t(s=>[a(R,null,{default:t(()=>[a(_,{type:"primary",size:"small",plain:"",onClick:g=>B(s.row)},{icon:t(()=>[a(u,null,{default:t(()=>[a(r,{name:"i-ep:edit"})]),_:1})]),_:2},1032,["onClick"]),a(_,{type:"info",size:"small",plain:"",onClick:g=>V(s.row)},{icon:t(()=>[a(u,null,{default:t(()=>[a(r,{name:"i-ep:view"})]),_:1})]),_:2},1032,["onClick"]),a(_,{type:"danger",size:"small",plain:"",onClick:g=>E(s.row)},{icon:t(()=>[a(u,null,{default:t(()=>[a(r,{name:"i-ep:delete"})]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[O,o(e).loading]]),a(q,{"current-page":o(l).page,total:o(l).total,"page-size":o(l).size,"page-sizes":o(l).sizes,layout:o(l).layout,"hide-on-single-page":!1,class:"pagination",background:"",onCurrentChange:D,onSizeChange:S},null,8,["current-page","total","page-size","page-sizes","layout"])]),default:t(()=>[o(e).form.visible?(p(),f(ne,{key:0,id:o(e).form.id,onSuccess:M,onCancel:F,onPreview:$},null,8,["id"])):(p(),b("div",se," 请在左侧新增或编辑一个表格 "))]),_:1}),o(e).dialog.visible?(p(),f(te,{key:0,id:o(e).dialog.id,modelValue:o(e).dialog.visible,"onUpdate:modelValue":i[1]||(i[1]=s=>o(e).dialog.visible=s),info:o(e).dialog.info},null,8,["id","modelValue","info"])):W("",!0)])])}}});typeof C=="function"&&C(k);const ge=ae(k,[["__scopeId","data-v-53b7afc7"]]);export{ge as default};
