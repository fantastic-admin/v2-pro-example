import{d as k,bZ as m,e as C,o as S,f as g,g as e,w as t,l,i,h as c,S as B,R as x,x as d}from"./index-17000ae8.js";const I=c("p",null,"如果目标地址已在标签栏存在，则直接切换并访问。如果目标地址在标签栏不存在，则会在当前标签页后面插入新的标签页。",-1),y=c("p",null,"关闭当前标签页，同时跳转到新页面。",-1),R=c("p",null,"如果当前只有一个标签时，则无法关闭。",-1),L=c("p",null,"如果关闭的是当前标签页，则会在关闭后跳转至紧邻的标签页。",-1),N=c("p",null,"如果关闭的目标页面不存在，则无法关闭。",-1),O=c("p",null,"除了提供关闭非当前标签页的 API 外，还提供了校验 API 。",-1),V=k({__name:"index",setup(v){const o=m();function a(){o.open("/")}function _(){o.close("/")}function u(){o.closeById()}function f(){o.closeById("/")}function p(){o.closeOtherSide()}function r(){o.closeLeftSide()}function h(){o.closeRightSide()}return(w,A)=>{const b=B,n=C("el-button"),s=x;return S(),g("div",null,[e(b,{title:"标签栏",content:"功能类似于浏览器的标签栏，支持右键操作"}),e(s,{title:"打开新标签页"},{default:t(()=>[I,e(n,{onClick:a},{default:t(()=>[l(" 打开主页 ")]),_:1})]),_:1}),e(s,{title:"关闭当前标签页并跳转"},{default:t(()=>[y,e(n,{onClick:_},{default:t(()=>[l(" 关闭当前标签页，并跳转到主页 ")]),_:1})]),_:1}),e(s,{title:"关闭指定标签页"},{default:t(()=>[R,L,N,e(n,{onClick:u},{default:t(()=>[l(" 关闭当前页面 ")]),_:1}),e(n,{onClick:f},{default:t(()=>[l(" 关闭主页 ")]),_:1})]),_:1}),e(s,{title:"关闭非当前标签页"},{default:t(()=>[O,e(n,{disabled:!i(o).checkCloseOtherSide(),onClick:p},{default:t(()=>[l(" 关闭两侧标签页 ")]),_:1},8,["disabled"]),e(n,{disabled:!i(o).checkCloseLeftSide(),onClick:r},{default:t(()=>[l(" 关闭左侧标签页 ")]),_:1},8,["disabled"]),e(n,{disabled:!i(o).checkCloseRightSide(),onClick:h},{default:t(()=>[l(" 关闭右侧标签页 ")]),_:1},8,["disabled"])]),_:1})])}}});typeof d=="function"&&d(V);export{V as default};
