import c from"./index-99f5a731.js";import{d as z,r as B,G as k,e as f,o as p,f as N,L as C,w as o,g as t,l as n,b1 as b,i as r,V as v,h as R,O as h}from"./index-17000ae8.js";const S={class:"buttons"},E=z({__name:"index",props:{...c.props,modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:d=>["dialog","drawer"].includes(d)}},emits:["update:modelValue","success"],setup(d,{emit:_}){const l=d,i=B(),e=k({get(){return l.modelValue},set(g){_("update:modelValue",g)}}),V=k(()=>l.id===""?"新增运费模板":"编辑运费模板");function y(){i.value.submit().then(()=>{_("success"),u()})}function u(){e.value=!1}return(g,a)=>{const s=f("el-button"),w=f("el-dialog"),x=f("el-drawer");return p(),N("div",null,[l.mode==="dialog"?(p(),C(w,{key:0,modelValue:r(e),"onUpdate:modelValue":a[0]||(a[0]=m=>v(e)?e.value=m:null),title:r(V),width:"800px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:o(()=>[t(s,{size:"large",onClick:u},{default:o(()=>[n(" 取消 ")]),_:1}),t(s,{type:"primary",size:"large",onClick:y},{default:o(()=>[n(" 确定 ")]),_:1})]),default:o(()=>[t(c,b({ref_key:"formRef",ref:i},l),null,16)]),_:1},8,["modelValue","title"])):l.mode==="drawer"?(p(),C(x,{key:1,modelValue:r(e),"onUpdate:modelValue":a[1]||(a[1]=m=>v(e)?e.value=m:null),title:r(V),size:"800px","close-on-click-modal":!1,"destroy-on-close":""},{default:o(()=>[t(c,b({ref_key:"formRef",ref:i},l),null,16),R("div",S,[t(s,{size:"large",onClick:u},{default:o(()=>[n(" 取消 ")]),_:1}),t(s,{type:"primary",size:"large",onClick:y},{default:o(()=>[n(" 确定 ")]),_:1})])]),_:1},8,["modelValue","title"])):h("",!0)])}}});export{E as _};
