import{d as r,e as d,o as m,f,g as e,w as n,i as c,l as a,h as l,c3 as h,c4 as g,S as b,R as k,E as C,x as _}from"./index-17000ae8.js";const x=l("p",null,"所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。",-1),B=l("p",null,"所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。",-1),E=r({__name:"debounce",setup(N){function t(){C.success({message:"恭喜你，这是一条成功消息"})}const u=h(()=>{t()},1e3),i=g(()=>{t()},1e3);return(V,v)=>{const p=b,o=d("el-button"),s=k;return m(),f("div",null,[e(p,{title:"防抖节流"}),e(s,{title:"防抖：debounce"},{default:n(()=>[x,e(o,{onClick:c(u)},{default:n(()=>[a(" 连续点击我，只会执行最后一次点击事件 ")]),_:1},8,["onClick"])]),_:1}),e(s,{title:"节流：throttle"},{default:n(()=>[B,e(o,{onClick:c(i)},{default:n(()=>[a(" 连续点击我，每一秒只会执行一次点击事件 ")]),_:1},8,["onClick"])]),_:1})])}}});typeof _=="function"&&_(E);export{E as default};
