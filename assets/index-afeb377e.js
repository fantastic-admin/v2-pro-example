import{d as I,u as $,a as B,c1 as F,Z as N,$ as R,r as C,C as T,e as h,o as l,f as u,h as g,j as y,v as w,i as e,L as f,w as s,g as t,a4 as V,J as j,Q as A,U as D,O as E,l as p,t as L,m as U,_ as q,p as z,n as G,q as J}from"./index-17000ae8.js";import{S as M}from"./sortable.esm-be94e56d.js";const O=c=>(z("data-v-b3882520"),c=c(),G(),c),Q={class:"favorites-container"},Z={class:"title-bar"},H=O(()=>g("div",{class:"title"}," 我的收藏夹 ",-1)),K={class:"icons"},W=["title","onClick"],X={key:1,class:"empty"},Y=I({name:"Favorites"}),ee=I({...Y,setup(c){const d=$(),b=B(),o=F(),k=N(R),v=C(),_=C(!1);return T(()=>v.value,x=>{x&&new M(v.value.$el,{animation:200,ghostClass:"ghost",draggable:".item",onStart:()=>{_.value=!0},onEnd:()=>{_.value=!1},onUpdate:n=>{n.newIndex!==void 0&&n.oldIndex!==void 0&&o.sort(n.newIndex,n.oldIndex)}})}),(x,n)=>{const i=q,r=h("el-icon"),m=h("el-text"),S=h("el-scrollbar");return l(),u("div",Q,[g("div",Z,[H,y(g("div",K,[e(o).isAdd(e(d).fullPath)?(l(),f(r,{key:1,title:"从收藏夹删除",onClick:n[1]||(n[1]=a=>e(o).remove(e(d).fullPath))},{default:s(()=>[t(i,{name:"i-mdi:star-remove"})]),_:1})):(l(),f(r,{key:0,title:"添加到收藏夹",onClick:n[0]||(n[0]=a=>e(o).add(e(d)))},{default:s(()=>[t(i,{name:"i-mdi:star-plus-outline"})]),_:1}))],512),[[w,e(o).canAdd(e(d).fullPath)]])]),e(o).list.length>0?(l(),f(S,{key:0,"max-height":"300px"},{default:s(()=>[t(V,{ref_key:"favoritesContainerRef",ref:v,name:e(_)?void 0:"dropdown-tab",tag:"div",class:j(["list",{dragging:e(_)}])},{default:s(()=>[(l(!0),u(A,null,D(e(o).list,a=>(l(),u("div",{key:a.fullPath,title:e(k)(a.i18n,a.title),class:"item",onClick:P=>e(b).push(a.fullPath)},[a.icon?(l(),f(r,{key:0},{default:s(()=>[t(i,{name:a.icon},null,8,["name"])]),_:2},1024)):E("",!0),t(m,{truncated:"",class:"name"},{default:s(()=>[p(L(e(k)(a.i18n,a.title)),1)]),_:2},1024),t(r,{class:"delete",onClick:U(P=>e(o).remove(a.fullPath),["stop"])},{default:s(()=>[t(i,{name:"i-ep:delete"})]),_:2},1032,["onClick"])],8,W))),128))]),_:1},8,["name","class"])]),_:1})):(l(),u("div",X,[t(r,null,{default:s(()=>[t(i,{name:"i-tabler:mood-empty"})]),_:1}),t(m,null,{default:s(()=>[p("收藏夹是空的")]),_:1}),y(t(m,{class:"tips"},{default:s(()=>[p(" 点击右上角 "),t(r,null,{default:s(()=>[t(i,{name:"i-mdi:star-plus-outline"})]),_:1}),p(" 将当前页面添加到收藏夹 ")]),_:1},512),[[w,e(o).canAdd(e(d).fullPath)]])]))])}}});const se=J(ee,[["__scopeId","data-v-b3882520"]]);export{se as default};
