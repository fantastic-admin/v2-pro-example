import{d as V,bZ as ee,r as w,B as te,P as x,b5 as oe,aa as h,e as i,a2 as ae,o as p,f as ne,g as t,w as a,l as d,i as n,k as le,L as g,O as v,j as se,b_ as z,E as $,S as ie,_ as re,R as ue,q as de,x as L}from"./index-17000ae8.js";import{_ as ce}from"./index-fcedd18d.js";import{_ as _e}from"./index-bc97356d.js";import{_ as pe}from"./index.vue_vue_type_script_setup_true_lang-fccab503.js";import{u as me}from"./usePagination-e0d8e4d1.js";import"./index-99f5a731.js";import"./index.vue_vue_type_script_setup_true_name_PcasCascader_lang-bb8b02e4.js";import"./index-30de37a4.js";const fe=V({name:"PagesExampleDeliveryList"}),P=V({...fe,setup(ge){const{pagination:c,getParams:S,onSizeChange:D,onCurrentChange:E,onSortChange:U}=me(),C=ee(),b=w(),e=w({loading:!1,formMode:"router",formModeProps:{visible:!1,id:""},search:{title:""},batch:{enable:!1,selectionDataList:[]},dataList:[]});te(()=>{r(),e.value.formMode==="router"&&x.on("get-data-list",()=>{r()})}),oe(()=>{e.value.formMode==="router"&&x.off("get-data-list")});function r(){e.value.loading=!0;const l=S();e.value.search.title&&(l.title=e.value.search.title),h.get("pages_example/delivery/list",{baseURL:"/mock/",params:l}).then(o=>{e.value.loading=!1,e.value.dataList=o.data.list,c.value.total=o.data.total})}function B(l){D(l).then(()=>r())}function m(l=1){E(l).then(()=>r())}function R({prop:l,order:o}){U(l,o).then(()=>r())}function N(){e.value.formMode==="router"?C.open({name:"pagesExampleShopDeliveryCreate"}):(e.value.formModeProps.id="",e.value.formModeProps.visible=!0)}function A(l){e.value.formMode==="router"?C.open({name:"pagesExampleShopDeliveryEdit",params:{id:l.id}}):(e.value.formModeProps.id=l.id,e.value.formModeProps.visible=!0)}function K(l){z.confirm(`确认删除「${l.title}」吗？`,"确认信息").then(()=>{h.post("pages_example/delivery/delete",{id:l.id},{baseURL:"/mock/"}).then(()=>{r(),$.success({message:"模拟删除成功",center:!0})})}).catch(()=>{})}function T(l,o){z.confirm(`确认${l?"启用":"停用"}「${o.title}」运费模版吗？`,"确认信息").then(()=>{h.post("pages_example/delivery/change/status",{id:o.id,status:l},{baseURL:"/mock/"}).then(()=>{$.success({message:`模拟${l?"启用":"停用"}成功`,center:!0})})}).catch(()=>{o.status=!l})}return(l,o)=>{const j=ie,y=re,k=i("el-icon"),u=i("el-button"),q=i("el-input"),M=i("el-form-item"),I=i("el-col"),O=i("el-row"),Z=i("el-form"),F=_e,G=i("el-button-group"),H=ce,f=i("el-table-column"),J=i("el-switch"),Q=i("el-table"),W=i("el-pagination"),X=ue,Y=ae("loading");return p(),ne("div",null,[t(j,{title:"运费模版管理"}),t(X,null,{default:a(()=>[t(u,{type:"primary",size:"large",onClick:N},{icon:a(()=>[t(k,null,{default:a(()=>[t(y,{name:"i-ep:plus"})]),_:1})]),default:a(()=>[d(" 新增运费模版 ")]),_:1}),t(F,null,{default:a(()=>[t(Z,{model:n(e).search,size:"default","label-width":"100px","label-suffix":"："},{default:a(()=>[t(O,null,{default:a(()=>[t(I,{span:12},{default:a(()=>[t(M,{label:"模版名称"},{default:a(()=>[t(q,{modelValue:n(e).search.title,"onUpdate:modelValue":o[0]||(o[0]=s=>n(e).search.title=s),placeholder:"请输入模版名称，支持模糊查询",clearable:"",onKeydown:o[1]||(o[1]=le(s=>m(),["enter"])),onClear:o[2]||(o[2]=s=>m())},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(M,null,{default:a(()=>[t(u,{type:"primary",onClick:o[3]||(o[3]=s=>m())},{icon:a(()=>[t(k,null,{default:a(()=>[t(y,{name:"i-ep:search"})]),_:1})]),default:a(()=>[d(" 筛选 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),n(e).batch.enable?(p(),g(H,{key:0,data:n(e).dataList,"selection-data":n(e).batch.selectionDataList,onCheckAll:o[4]||(o[4]=s=>n(b).toggleAllSelection()),onCheckNull:o[5]||(o[5]=s=>n(b).clearSelection())},{default:a(()=>[t(u,{size:"default"},{default:a(()=>[d(" 单个批量操作按钮 ")]),_:1}),t(G,null,{default:a(()=>[t(u,{size:"default"},{default:a(()=>[d(" 批量操作按钮组1 ")]),_:1}),t(u,{size:"default"},{default:a(()=>[d(" 批量操作按钮组2 ")]),_:1})]),_:1})]),_:1},8,["data","selection-data"])):v("",!0),se((p(),g(Q,{ref_key:"tableRef",ref:b,class:"list-table",data:n(e).dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:R,onSelectionChange:o[6]||(o[6]=s=>n(e).batch.selectionDataList=s)},{default:a(()=>[n(e).batch.enable?(p(),g(f,{key:0,type:"selection",width:"40"})):v("",!0),t(f,{prop:"title",label:"模版名称"}),t(f,{label:"开启状态",width:"100",align:"center"},{default:a(s=>[t(J,{modelValue:s.row.status,"onUpdate:modelValue":_=>s.row.status=_,onChange:_=>T(_,s.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),t(f,{label:"操作",width:"250",align:"center"},{default:a(s=>[t(u,{type:"primary",size:"small",plain:"",onClick:_=>A(s.row)},{default:a(()=>[d(" 编辑 ")]),_:2},1032,["onClick"]),t(u,{type:"danger",size:"small",plain:"",onClick:_=>K(s.row)},{default:a(()=>[d(" 删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Y,n(e).loading]]),t(W,{"current-page":n(c).page,total:n(c).total,"page-size":n(c).size,"page-sizes":n(c).sizes,layout:n(c).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:B,onCurrentChange:m},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),["dialog","drawer"].includes(n(e).formMode)?(p(),g(pe,{key:0,id:n(e).formModeProps.id,modelValue:n(e).formModeProps.visible,"onUpdate:modelValue":o[7]||(o[7]=s=>n(e).formModeProps.visible=s),mode:n(e).formMode,onSuccess:r},null,8,["id","modelValue","mode"])):v("",!0)])}}});typeof L=="function"&&L(P);const xe=de(P,[["__scopeId","data-v-52e7b941"]]);export{xe as default};
