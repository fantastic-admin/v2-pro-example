import{d as _,r as u,A as p,e as r,o as m,f,g as o,w as d,i as v,V as x,S as g,R as h,b_ as w,x as a}from"./index-17000ae8.js";const B=_({__name:"leavetips",setup(V){const e=u(!0);return p((s,n,t)=>{e.value?w.confirm("当前页面还没有保存，是否确定要离开？","温馨提醒",{confirmButtonText:"确定离开",cancelButtonText:"取消",type:"warning"}).then(()=>{t()}).catch(()=>{}):t()}),(s,n)=>{const t=g,l=r("el-switch"),c=h;return m(),f("div",null,[o(t,{title:"页面离开提醒",content:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),o(c,null,{default:d(()=>[o(l,{modelValue:v(e),"onUpdate:modelValue":n[0]||(n[0]=i=>x(e)?e.value=i:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof a=="function"&&a(B);export{B as default};
