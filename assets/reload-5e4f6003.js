import{d as s,r as m,e as t,o as d,f,g as e,w as a,i as x,V,l as g,h as k,S as C,R as b,x as l}from"./index-17000ae8.js";import{u as h}from"./useMainPage-b6113823.js";const v=k("p",null,"该特性无视页面缓存，意味着即便当前页面开启了页面缓存，手动刷新也会强制清除当前页面内的组件和数据的状态。",-1),B=s({name:"FeatureExampleReload"}),N=s({...B,setup(R){const n=m("");function _(){h().reload()}return(w,o)=>{const u=C,c=t("el-input"),p=t("el-button"),r=b;return d(),f("div",null,[e(u,{title:"主页面刷新",content:"重新渲染当前页面"}),e(r,null,{default:a(()=>[v,e(c,{modelValue:x(n),"onUpdate:modelValue":o[0]||(o[0]=i=>V(n)?n.value=i:null)},null,8,["modelValue"]),e(p,{onClick:_},{default:a(()=>[g(" 刷新 ")]),_:1})]),_:1})])}}});typeof l=="function"&&l(N);export{N as default};
