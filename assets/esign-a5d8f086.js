import{q as M,o as w,f as _,d as D,r as p,e as x,g as r,w as c,h as y,l as g,i as f,O as E,a1 as S,E as R,_ as X,S as Y,R as I,x as b}from"./index-17000ae8.js";import N from"./alert-8aa56ecd.js";const W={props:{width:{type:Number,default:800},height:{type:Number,default:300},lineWidth:{type:Number,default:4},lineColor:{type:String,default:"#000000"},bgColor:{type:String,default:""},isCrop:{type:Boolean,default:!1},isClearBgColor:{type:Boolean,default:!0},format:{type:String,default:"image/png"},quality:{type:Number,default:1}},data(){return{hasDrew:!1,resultImg:"",points:[],canvasTxt:null,startX:0,startY:0,isDrawing:!1,sratio:1}},computed:{ratio(){return this.height/this.width},stageInfo(){return this.$refs.canvas.getBoundingClientRect()},myBg(){return this.bgColor?this.bgColor:"rgba(255, 255, 255, 0)"}},watch:{myBg:function(t){this.$refs.canvas.style.background=t}},beforeMount(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy(){window.removeEventListener("resize",this.$_resizeHandler)},mounted(){const t=this.$refs.canvas;t.height=this.height,t.width=this.width,t.style.background=this.myBg,this.$_resizeHandler(),document.onmouseup=()=>{this.isDrawing=!1}},methods:{$_resizeHandler(){const t=this.$refs.canvas;t.style.width=this.width+"px";const e=parseFloat(window.getComputedStyle(t).width);t.style.height=this.ratio*e+"px",this.canvasTxt=t.getContext("2d"),this.canvasTxt.scale(1*this.sratio,1*this.sratio),this.sratio=e/this.width,this.canvasTxt.scale(1/this.sratio,1/this.sratio)},mouseDown(t){t=t||event,t.preventDefault(),this.isDrawing=!0,this.hasDrew=!0;let e={x:t.offsetX,y:t.offsetY};this.drawStart(e)},mouseMove(t){if(t=t||event,t.preventDefault(),this.isDrawing){let e={x:t.offsetX,y:t.offsetY};this.drawMove(e)}},mouseUp(t){t=t||event,t.preventDefault();let e={x:t.offsetX,y:t.offsetY};this.drawEnd(e),this.isDrawing=!1},touchStart(t){if(t=t||event,t.preventDefault(),this.hasDrew=!0,t.touches.length===1){let e={x:t.targetTouches[0].clientX-this.$refs.canvas.getBoundingClientRect().left,y:t.targetTouches[0].clientY-this.$refs.canvas.getBoundingClientRect().top};this.drawStart(e)}},touchMove(t){if(t=t||event,t.preventDefault(),t.touches.length===1){let e={x:t.targetTouches[0].clientX-this.$refs.canvas.getBoundingClientRect().left,y:t.targetTouches[0].clientY-this.$refs.canvas.getBoundingClientRect().top};this.drawMove(e)}},touchEnd(t){if(t=t||event,t.preventDefault(),t.touches.length===1){let e={x:t.targetTouches[0].clientX-this.$refs.canvas.getBoundingClientRect().left,y:t.targetTouches[0].clientY-this.$refs.canvas.getBoundingClientRect().top};this.drawEnd(e)}},drawStart(t){this.startX=t.x,this.startY=t.y,this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(t.x,t.y),this.canvasTxt.lineCap="round",this.canvasTxt.lineJoin="round",this.canvasTxt.lineWidth=this.lineWidth*this.sratio,this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.points.push(t)},drawMove(t){this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(t.x,t.y),this.canvasTxt.strokeStyle=this.lineColor,this.canvasTxt.lineWidth=this.lineWidth*this.sratio,this.canvasTxt.lineCap="round",this.canvasTxt.lineJoin="round",this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.startY=t.y,this.startX=t.x,this.points.push(t)},drawEnd(t){this.canvasTxt.beginPath(),this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(t.x,t.y),this.canvasTxt.lineCap="round",this.canvasTxt.lineJoin="round",this.canvasTxt.stroke(),this.canvasTxt.closePath(),this.points.push(t),this.points.push({x:-1,y:-1})},generate(t){let e=t&&t.format?t.format:this.format,n=t&&t.quality?t.quality:this.quality;return new Promise((u,s)=>{if(!this.hasDrew){s("Warning: Not Signned!");return}var a=this.canvasTxt.getImageData(0,0,this.$refs.canvas.width,this.$refs.canvas.height);this.canvasTxt.globalCompositeOperation="destination-over",this.canvasTxt.fillStyle=this.myBg,this.canvasTxt.fillRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.resultImg=this.$refs.canvas.toDataURL(e,n);var d=this.resultImg;if(this.canvasTxt.clearRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.canvasTxt.putImageData(a,0,0),this.canvasTxt.globalCompositeOperation="source-over",this.isCrop){const o=this.getCropArea(a.data);var i=document.createElement("canvas");const l=i.getContext("2d");i.width=o[2]-o[0],i.height=o[3]-o[1];const v=this.canvasTxt.getImageData(...o);l.globalCompositeOperation="destination-over",l.putImageData(v,0,0),l.fillStyle=this.myBg,l.fillRect(0,0,i.width,i.height),d=i.toDataURL(e,n),i=null}u(d)})},reset(){this.canvasTxt.clearRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height),this.isClearBgColor&&(this.$emit("update:bgColor",""),this.$refs.canvas.style.background="rgba(255, 255, 255, 0)"),this.points=[],this.hasDrew=!1,this.resultImg=""},getCropArea(t){for(var e=this.$refs.canvas.width,n=0,h=this.$refs.canvas.height,u=0,s=0;s<this.$refs.canvas.width;s++)for(var a=0;a<this.$refs.canvas.height;a++){var d=(s+this.$refs.canvas.width*a)*4;(t[d]>0||t[d+1]>0||t[d+2]||t[d+3]>0)&&(u=Math.max(a,u),n=Math.max(s,n),h=Math.min(a,h),e=Math.min(s,e))}return e++,n++,h++,u++,[e,h,n,u]}}};function P(t,e,n,h,u,s){return w(),_("canvas",{ref:"canvas",onMousedown:e[0]||(e[0]=(...a)=>s.mouseDown&&s.mouseDown(...a)),onMousemove:e[1]||(e[1]=(...a)=>s.mouseMove&&s.mouseMove(...a)),onMouseup:e[2]||(e[2]=(...a)=>s.mouseUp&&s.mouseUp(...a)),onTouchstart:e[3]||(e[3]=(...a)=>s.touchStart&&s.touchStart(...a)),onTouchmove:e[4]||(e[4]=(...a)=>s.touchMove&&s.touchMove(...a)),onTouchend:e[5]||(e[5]=(...a)=>s.touchEnd&&s.touchEnd(...a))},null,544)}const T=M(W,[["render",P],["__scopeId","data-v-1fcc7cb1"]]);T.install=function(t){this.installed||(this.installed=!0,t.component("vueEsign",T))};const z={style:{"margin-bottom":"0"}},U=["src"],q=D({name:"ComponentExampleSignCanvas"}),O=D({...q,setup(t){const e=p(),n=p({lineWidth:6,lineColor:"#000000",bgColor:"#f0f0f0",isCrop:!1}),h=p("");function u(){e.value.reset(),S(()=>{n.value.bgColor="#f0f0f0"})}function s(){e.value.generate().then(i=>{h.value=i}).catch(()=>{R("画板为空，无法生成图片")})}function a(){e.value.generate().then(i=>{const o=new Image;o.setAttribute("crossOrigin","anonymous"),o.onload=()=>{const l=document.createElement("a"),v=new MouseEvent("click");l.download=Date.parse(new Date().toString()).toString(),l.href=o.src,l.dispatchEvent(v)},o.src=i})}function d(i){window.open(i,"_blank")}return(i,o)=>{const l=x("el-tag"),v=X,$=x("el-icon"),m=x("el-button"),k=Y,B=I;return w(),_("div",null,[r(N),r(k,{title:"电子签名"},{content:c(()=>[y("p",z,[g(" 安装命令："),r(l,null,{default:c(()=>[g("pnpm add vue-esign")]),_:1})])]),default:c(()=>[r(m,{onClick:o[0]||(o[0]=C=>d("https://github.com/JaimeCheng/vue-esign"))},{icon:c(()=>[r($,null,{default:c(()=>[r(v,{name:"i-ep:link"})]),_:1})]),default:c(()=>[g(" 访问 vue-esign ")]),_:1})]),_:1}),r(B,null,{default:c(()=>[r(f(T),{ref_key:"esignRef",ref:e,bgColor:f(n).bgColor,"onUpdate:bgColor":o[1]||(o[1]=C=>f(n).bgColor=C),width:500,height:300,"is-crop":f(n).isCrop,"line-width":f(n).lineWidth,"line-color":f(n).lineColor},null,8,["bgColor","is-crop","line-width","line-color"]),y("div",null,[r(m,{onClick:u},{default:c(()=>[g(" 清空画板 ")]),_:1}),r(m,{onClick:s},{default:c(()=>[g(" 生成图片 ")]),_:1}),r(m,{onClick:a},{default:c(()=>[g(" 下载图片 ")]),_:1})]),f(h)?(w(),_("img",{key:0,src:f(h),width:500,height:300},null,8,U)):E("",!0)]),_:1})])}}});typeof b=="function"&&b(O);export{O as default};
