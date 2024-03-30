import{d as f,e as a,o as _,L as s,w as o,l as y,t as r,h as i,g as e,O as C,K as v,_ as x,q as m,f as b,x as u,S,R as k}from"./index-17000ae8.js";const w={class:"num"},N={class:"tip"},$=f({name:"ColorfulCard"}),B=f({...$,props:{colorFrom:{type:String,default:"#843cf6"},colorTo:{type:String,default:"#759bff"},header:{type:String,default:""},num:{type:Number,default:0},tip:{type:String,default:""},icon:{type:String,default:""}},setup(t){return(g,d)=>{const n=x,c=a("el-icon"),l=a("el-card");return _(),s(l,{shadow:"hover",class:"mini-card",style:v({background:`linear-gradient(50deg, ${t.colorFrom}, ${t.colorTo})`})},{header:o(()=>[y(r(t.header),1)]),default:o(()=>[i("div",w,r(t.num),1),i("div",N,r(t.tip),1),t.icon?(_(),s(c,{key:0},{default:o(()=>[e(n,{name:t.icon,rotate:20},null,8,["name"])]),_:1})):C("",!0)]),_:1},8,["style"])}}});const V=m(B,[["__scopeId","data-v-8b2d9019"]]),p={};function T(t,g){const d=S,n=V,c=a("el-col"),l=a("el-row"),h=k;return _(),b("div",null,[e(d,{title:"多彩渐变卡片",content:"ColorfulCard"}),e(h,null,{default:o(()=>[e(l,{gutter:20},{default:o(()=>[e(c,{md:6},{default:o(()=>[e(n,{header:"开发文档",num:123,tip:"较上周上升50%"})]),_:1}),e(c,{md:6},{default:o(()=>[e(n,{"color-from":"#fbaaa2","color-to":"#fc5286",header:"基础组件",num:12323,tip:"较上周上升50%",icon:"ep:element-plus"})]),_:1}),e(c,{md:6},{default:o(()=>[e(n,{"color-from":"#ff763b","color-to":"#ffc480",header:"扩展组件",num:123,tip:"较上周上升50%",icon:"ri:pages-line"})]),_:1}),e(c,{md:6},{default:o(()=>[e(n,{"color-from":"#6a8eff","color-to":"#0e4cfd",header:"业务应用页面",num:123,tip:"较上周上升50%",icon:"ep:link"})]),_:1})]),_:1})]),_:1})])}typeof u=="function"&&u(p);const q=m(p,[["render",T]]);export{q as default};
