import{d as W,r as S,G as m,bG as v,e as w,o as i,f as o,i as e,j as _,v as y,K as p,X as r,O as s,h as b,L as k,w as B,g as L,_ as x,q as C}from"./index-17000ae8.js";const N={class:"flex-container"},R={class:"main"},V={class:"main-container"},T=W({name:"ListLayout"}),G=W({...T,props:{enableLeftSide:{type:Boolean,default:!0},enableRightSide:{type:Boolean,default:!0},leftSideWidth:{type:[Number,String],default:300},rightSideWidth:{type:[Number,String],default:300},hideLeftSideToggle:{type:Boolean,default:!1},hideRightSideToggle:{type:Boolean,default:!1}},setup(t){const c=t,n=S(!0),d=S(!0),u=m(()=>c.enableLeftSide&&!!v().leftSide),f=m(()=>c.enableRightSide&&!!v().rightSide);return(l,a)=>{const h=x,g=w("el-icon");return i(),o("div",N,[e(u)?_((i(),o("div",{key:0,class:"left-side",style:p({width:typeof t.leftSideWidth=="number"?`${t.leftSideWidth}px`:t.leftSideWidth})},[r(l.$slots,"leftSide",{},void 0,!0)],4)),[[y,e(n)]]):s("",!0),b("div",R,[e(u)&&!t.hideLeftSideToggle?(i(),k(g,{key:0,class:"left-side-icon",onClick:a[0]||(a[0]=$=>n.value=!e(n))},{default:B(()=>[L(h,{name:e(n)?"i-ep:caret-left":"i-ep:caret-right"},null,8,["name"])]),_:1})):s("",!0),e(f)&&!t.hideRightSideToggle?(i(),k(g,{key:1,class:"right-side-icon",onClick:a[1]||(a[1]=$=>d.value=!e(d))},{default:B(()=>[L(h,{name:e(d)?"i-ep:caret-right":"i-ep:caret-left"},null,8,["name"])]),_:1})):s("",!0),b("div",V,[r(l.$slots,"default",{},void 0,!0)])]),e(f)?_((i(),o("div",{key:1,class:"right-side",style:p({width:typeof t.rightSideWidth=="number"?`${t.rightSideWidth}px`:t.rightSideWidth})},[r(l.$slots,"rightSide",{},void 0,!0)],4)),[[y,e(d)]]):s("",!0)])}}});const q=C(G,[["__scopeId","data-v-152c7c36"]]);export{q as _};
