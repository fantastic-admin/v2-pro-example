import{d as f,r as g,y,B as k,P as v,e as i,o as d,f as A,g as a,w as l,l as o,t as n,i as e,L as u,O as _,V as S,q as x}from"./index-17000ae8.js";const V=f({name:"HotkeysIntro"}),H=f({...V,setup(h){const r=g(!1),t=y();return k(()=>{v.on("global-hotkeys-intro-toggle",()=>{r.value=!r.value})}),(w,m)=>{const s=i("el-descriptions-item"),c=i("el-descriptions"),b=i("el-drawer");return d(),A("div",null,[a(b,{modelValue:e(r),"onUpdate:modelValue":m[0]||(m[0]=p=>S(r)?r.value=p:null),title:"快捷键介绍",direction:"rtl",size:360},{default:l(()=>[a(c,{title:"全局",column:1,border:""},{default:l(()=>[a(s,{label:"查看系统信息"},{default:l(()=>[o(n(e(t).os==="mac"?"⌥":"Alt")+" + I ",1)]),_:1}),e(t).settings.navSearch.enable&&e(t).settings.navSearch.enableHotkeys?(d(),u(s,{key:0,label:"唤起导航搜索"},{default:l(()=>[o(n(e(t).os==="mac"?"⌥":"Alt")+" + S ",1)]),_:1})):_("",!0)]),_:1}),e(t).settings.menu.enableHotkeys&&["side","head"].includes(e(t).settings.menu.menuMode)?(d(),u(c,{key:0,title:"主导航",column:1,border:""},{default:l(()=>[a(s,{label:"激活下一个主导航"},{default:l(()=>[o(n(e(t).os==="mac"?"⌥":"Alt")+" + ` ",1)]),_:1})]),_:1})):_("",!0),e(t).settings.tabbar.enable&&e(t).settings.tabbar.enableHotkeys?(d(),u(c,{key:1,title:"标签栏",column:1,border:""},{default:l(()=>[a(s,{label:"切换到上一个标签页"},{default:l(()=>[o(n(e(t).os==="mac"?"⌥":"Alt")+" + Q ",1)]),_:1}),a(s,{label:"切换到下一个标签页"},{default:l(()=>[o(n(e(t).os==="mac"?"⌥":"Alt")+" + E ",1)]),_:1}),a(s,{label:"关闭当前标签页"},{default:l(()=>[o(n(e(t).os==="mac"?"⌥":"Alt")+" + W ",1)]),_:1}),a(s,{label:"切换到第 1-9 个标签页"},{default:l(()=>[o(n(e(t).os==="mac"?"⌥":"Alt")+" + 数字 1-9 ",1)]),_:1}),a(s,{label:"切换到最后一个标签页"},{default:l(()=>[o(n(e(t).os==="mac"?"⌥":"Alt")+" + 数字 0 ",1)]),_:1})]),_:1})):_("",!0),e(t).settings.mainPage.enableHotkeys?(d(),u(c,{key:2,title:"页面",column:1,border:""},{default:l(()=>[a(s,{label:"最大化"},{default:l(()=>[o(n(e(t).os==="mac"?"⌥":"Alt")+" + ↑ ",1)]),_:1}),a(s,{label:"退出最大化"},{default:l(()=>[o(n(e(t).os==="mac"?"⌥":"Alt")+" + ↓ ",1)]),_:1})]),_:1})):_("",!0)]),_:1},8,["modelValue"])])}}});const C=x(H,[["__scopeId","data-v-45a0c82f"]]);export{C as default};
