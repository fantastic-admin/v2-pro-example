import{d as zt,r as q,B as Vt,e as H,o as Ht,f as Kt,g as N,w as I,h as K,l as J,i as nt,_ as Jt,S as $t,R as Yt,q as Ot,x as Et}from"./index-17000ae8.js";import qt from"./alert-8aa56ecd.js";var L={},jt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Bt={},T={};let gt;const Gt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];T.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};T.getSymbolTotalCodewords=function(t){return Gt[t]};T.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};T.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');gt=t};T.isKanjiModeEnabled=function(){return typeof gt<"u"};T.toSJIS=function(t){return gt(t)};var Z={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(Z);function At(){this.buffer=[],this.length=0}At.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Qt=At;function O(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}O.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};O.prototype.get=function(e,t){return this.data[e*this.size+t]};O.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};O.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Wt=O,Nt={};(function(e){const t=T.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,a=[n-7];for(let u=1;u<o-1;u++)a[u]=a[u-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let a=0;a<s;a++)for(let u=0;u<s;u++)a===0&&u===0||a===0&&u===s-1||a===s-1&&u===0||o.push([n[a],n[u]]);return o}})(Nt);var It={};const Zt=T.getSymbolSize,Ct=7;It.getPositions=function(t){const i=Zt(t);return[[0,0],[i-Ct,0],[0,i-Ct]]};var Tt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,a=0,u=0,c=null,l=null;for(let p=0;p<n;p++){a=u=0,c=l=null;for(let h=0;h<n;h++){let f=o.get(p,h);f===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=f,a=1),f=o.get(h,p),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}a>=5&&(s+=t.N1+(a-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let a=0;a<n-1;a++)for(let u=0;u<n-1;u++){const c=o.get(a,u)+o.get(a,u+1)+o.get(a+1,u)+o.get(a+1,u+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,a=0,u=0;for(let c=0;c<n;c++){a=u=0;for(let l=0;l<n;l++)a=a<<1&2047|o.get(c,l),l>=10&&(a===1488||a===93)&&s++,u=u<<1&2047|o.get(l,c),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let u=0;u<s;u++)n+=o.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let a=0;a<s;a++)for(let u=0;u<s;u++)n.isReserved(u,a)||n.xor(u,a,i(o,u,a))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let a=0,u=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,o);const l=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(c,o),l<u&&(u=l,a=c)}return a}})(Tt);var X={};const D=Z,j=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],G=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];X.getBlocksCount=function(t,i){switch(i){case D.L:return j[(t-1)*4+0];case D.M:return j[(t-1)*4+1];case D.Q:return j[(t-1)*4+2];case D.H:return j[(t-1)*4+3];default:return}};X.getTotalCodewordsCount=function(t,i){switch(i){case D.L:return G[(t-1)*4+0];case D.M:return G[(t-1)*4+1];case D.Q:return G[(t-1)*4+2];case D.H:return G[(t-1)*4+3];default:return}};var Mt={},x={};const $=new Uint8Array(512),Q=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)$[i]=t,Q[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)$[i]=$[i-255]})();x.log=function(t){if(t<1)throw new Error("log("+t+")");return Q[t]};x.exp=function(t){return $[t]};x.mul=function(t,i){return t===0||i===0?0:$[Q[t]+Q[i]]};(function(e){const t=x;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)n[s+a]^=t.mul(r[s],o[a]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let u=0;u<o.length;u++)n[u]^=t.mul(o[u],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(Mt);const bt=Mt;function ht(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ht.prototype.initialize=function(t){this.degree=t,this.genPoly=bt.generateECPolynomial(this.degree)};ht.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=bt.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var Xt=ht,St={},U={},mt={};mt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var S={};const Pt="[0-9]+",xt="[A-Z $%*+\\-./:]+";let Y="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Y=Y.replace(/u/g,"\\u");const te="(?:(?![A-Z0-9 $%*+\\-./:]|"+Y+`)(?:.|[\r
]))+`;S.KANJI=new RegExp(Y,"g");S.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");S.BYTE=new RegExp(te,"g");S.NUMERIC=new RegExp(Pt,"g");S.ALPHANUMERIC=new RegExp(xt,"g");const ee=new RegExp("^"+Y+"$"),ne=new RegExp("^"+Pt+"$"),oe=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");S.testKanji=function(t){return ee.test(t)};S.testNumeric=function(t){return ne.test(t)};S.testAlphanumeric=function(t){return oe.test(t)};(function(e){const t=mt,i=S;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(U);(function(e){const t=T,i=X,r=Z,o=U,n=mt,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,a=t.getBCHDigit(s);function u(h,f,m){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,m,h))return y}function c(h,f){return o.getCharCountIndicator(h,f)+4}function l(h,f){let m=0;return h.forEach(function(y){const B=c(y.mode,f);m+=B+y.getBitsLength()}),m}function p(h,f){for(let m=1;m<=40;m++)if(l(h,m)<=e.getCapacity(m,f,o.MIXED))return m}e.from=function(f,m){return n.isValid(f)?parseInt(f,10):m},e.getCapacity=function(f,m,y){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=o.BYTE);const B=t.getSymbolTotalCodewords(f),w=i.getTotalCodewordsCount(f,m),E=(B-w)*8;if(y===o.MIXED)return E;const g=E-c(y,f);switch(y){case o.NUMERIC:return Math.floor(g/10*3);case o.ALPHANUMERIC:return Math.floor(g/11*2);case o.KANJI:return Math.floor(g/13);case o.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,m){let y;const B=r.from(m,r.M);if(Array.isArray(f)){if(f.length>1)return p(f,B);if(f.length===0)return 1;y=f[0]}else y=f;return u(y.mode,y.getLength(),B)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let m=f<<12;for(;t.getBCHDigit(m)-a>=0;)m^=s<<t.getBCHDigit(m)-a;return f<<12|m}})(St);var Rt={};const at=T,Lt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,re=1<<14|1<<12|1<<10|1<<4|1<<1,pt=at.getBCHDigit(Lt);Rt.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;at.getBCHDigit(o)-pt>=0;)o^=Lt<<at.getBCHDigit(o)-pt;return(r<<10|o)^re};var Dt={};const ie=U;function F(e){this.mode=ie.NUMERIC,this.data=e.toString()}F.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var se=F;const ue=U,ot=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function k(e){this.mode=ue.ALPHANUMERIC,this.data=e}k.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=ot.indexOf(this.data[i])*45;r+=ot.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(ot.indexOf(this.data[i]),6)};var ae=k,ce=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const le=ce,fe=U;function v(e){this.mode=fe.BYTE,typeof e=="string"&&(e=le(e)),this.data=new Uint8Array(e)}v.getBitsLength=function(t){return t*8};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var de=v;const ge=U,he=T;function z(e){this.mode=ge.KANJI,this.data=e}z.getBitsLength=function(t){return t*13};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=he.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var me=z,ct={},we={get exports(){return ct},set exports(e){ct=e}};(function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var u,c,l,p,h,f,m,y,B;!a.empty();){u=a.pop(),c=u.value,p=u.cost,h=i[c]||{};for(l in h)h.hasOwnProperty(l)&&(f=h[l],m=p+f,y=s[l],B=typeof s[l]>"u",(B||y>m)&&(s[l]=m,a.push(l,m),n[l]=c))}if(typeof o<"u"&&typeof s[o]>"u"){var w=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(w)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(we);(function(e){const t=U,i=se,r=ae,o=de,n=me,s=S,a=T,u=ct;function c(w){return unescape(encodeURIComponent(w)).length}function l(w,E,g){const d=[];let C;for(;(C=w.exec(g))!==null;)d.push({data:C[0],index:C.index,mode:E,length:C[0].length});return d}function p(w){const E=l(s.NUMERIC,t.NUMERIC,w),g=l(s.ALPHANUMERIC,t.ALPHANUMERIC,w);let d,C;return a.isKanjiModeEnabled()?(d=l(s.BYTE,t.BYTE,w),C=l(s.KANJI,t.KANJI,w)):(d=l(s.BYTE_KANJI,t.BYTE,w),C=[]),E.concat(g,d,C).sort(function(A,M){return A.index-M.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function h(w,E){switch(E){case t.NUMERIC:return i.getBitsLength(w);case t.ALPHANUMERIC:return r.getBitsLength(w);case t.KANJI:return n.getBitsLength(w);case t.BYTE:return o.getBitsLength(w)}}function f(w){return w.reduce(function(E,g){const d=E.length-1>=0?E[E.length-1]:null;return d&&d.mode===g.mode?(E[E.length-1].data+=g.data,E):(E.push(g),E)},[])}function m(w){const E=[];for(let g=0;g<w.length;g++){const d=w[g];switch(d.mode){case t.NUMERIC:E.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:E.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:E.push([d,{data:d.data,mode:t.BYTE,length:c(d.data)}]);break;case t.BYTE:E.push([{data:d.data,mode:t.BYTE,length:c(d.data)}])}}return E}function y(w,E){const g={},d={start:{}};let C=["start"];for(let _=0;_<w.length;_++){const A=w[_],M=[];for(let R=0;R<A.length;R++){const b=A[R],V=""+_+R;M.push(V),g[V]={node:b,lastCount:0},d[V]={};for(let et=0;et<C.length;et++){const P=C[et];g[P]&&g[P].node.mode===b.mode?(d[P][V]=h(g[P].lastCount+b.length,b.mode)-h(g[P].lastCount,b.mode),g[P].lastCount+=b.length):(g[P]&&(g[P].lastCount=b.length),d[P][V]=h(b.length,b.mode)+4+t.getCharCountIndicator(b.mode,E))}}C=M}for(let _=0;_<C.length;_++)d[C[_]].end=0;return{map:d,table:g}}function B(w,E){let g;const d=t.getBestModeForData(w);if(g=t.from(E,d),g!==t.BYTE&&g.bit<d.bit)throw new Error('"'+w+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(d));switch(g===t.KANJI&&!a.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(w);case t.ALPHANUMERIC:return new r(w);case t.KANJI:return new n(w);case t.BYTE:return new o(w)}}e.fromArray=function(E){return E.reduce(function(g,d){return typeof d=="string"?g.push(B(d,null)):d.data&&g.push(B(d.data,d.mode)),g},[])},e.fromString=function(E,g){const d=p(E,a.isKanjiModeEnabled()),C=m(d),_=y(C,g),A=u.find_path(_.map,"start","end"),M=[];for(let R=1;R<A.length-1;R++)M.push(_.table[A[R]].node);return e.fromArray(f(M))},e.rawSplit=function(E){return e.fromArray(p(E,a.isKanjiModeEnabled()))}})(Dt);const tt=T,rt=Z,ye=Qt,Ee=Wt,Ce=Nt,pe=It,lt=Tt,ft=X,_e=Xt,W=St,Be=Rt,Ae=U,it=Dt;function Ne(e,t){const i=e.size,r=pe.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(a>=0&&a<=6&&(u===0||u===6)||u>=0&&u<=6&&(a===0||a===6)||a>=2&&a<=4&&u>=2&&u<=4?e.set(n+a,s+u,!0,!0):e.set(n+a,s+u,!1,!0))}}function Ie(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function Te(e,t){const i=Ce.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,n+a,!0,!0):e.set(o+s,n+a,!1,!0)}}function Me(e,t){const i=e.size,r=W.getEncodedBits(t);let o,n,s;for(let a=0;a<18;a++)o=Math.floor(a/3),n=a%3+i-8-3,s=(r>>a&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function st(e,t,i){const r=e.size,o=Be.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(r-15+n,8,s,!0),n<8?e.set(8,r-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(r-8,8,1,!0)}function be(e,t){const i=e.size;let r=-1,o=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let u=0;u<2;u++)if(!e.isReserved(o,a-u)){let c=!1;s<t.length&&(c=(t[s]>>>n&1)===1),e.set(o,a-u,c),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function Se(e,t,i){const r=new ye;i.forEach(function(u){r.put(u.mode.bit,4),r.put(u.getLength(),Ae.getCharCountIndicator(u.mode,e)),u.write(r)});const o=tt.getSymbolTotalCodewords(e),n=ft.getTotalCodewordsCount(e,t),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let u=0;u<a;u++)r.put(u%2?17:236,8);return Pe(r,e,t)}function Pe(e,t,i){const r=tt.getSymbolTotalCodewords(t),o=ft.getTotalCodewordsCount(t,i),n=r-o,s=ft.getBlocksCount(t,i),a=r%s,u=s-a,c=Math.floor(r/s),l=Math.floor(n/s),p=l+1,h=c-l,f=new _e(h);let m=0;const y=new Array(s),B=new Array(s);let w=0;const E=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const M=A<u?l:p;y[A]=E.slice(m,m+M),B[A]=f.encode(y[A]),m+=M,w=Math.max(w,M)}const g=new Uint8Array(r);let d=0,C,_;for(C=0;C<w;C++)for(_=0;_<s;_++)C<y[_].length&&(g[d++]=y[_][C]);for(C=0;C<h;C++)for(_=0;_<s;_++)g[d++]=B[_][C];return g}function Re(e,t,i,r){let o;if(Array.isArray(e))o=it.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const l=it.rawSplit(e);c=W.getBestVersionForData(l,i)}o=it.fromString(e,c||40)}else throw new Error("Invalid data");const n=W.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Se(t,i,o),a=tt.getSymbolSize(t),u=new Ee(a);return Ne(u,t),Ie(u),Te(u,t),st(u,i,0),t>=7&&Me(u,t),be(u,s),isNaN(r)&&(r=lt.getBestMask(u,st.bind(null,u,i))),lt.applyMask(r,u),st(u,i,r),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}Bt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=rt.M,o,n;return typeof i<"u"&&(r=rt.from(i.errorCorrectionLevel,rt.M),o=W.from(i.version),n=lt.from(i.maskPattern),i.toSJISFunc&&tt.setToSJISFunction(i.toSJISFunc)),Re(t,o,r,n)};var Ut={},wt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,a=o.modules.data,u=e.getScale(s,n),c=Math.floor((s+n.margin*2)*u),l=n.margin*u,p=[n.color.light,n.color.dark];for(let h=0;h<c;h++)for(let f=0;f<c;f++){let m=(h*c+f)*4,y=n.color.light;if(h>=l&&f>=l&&h<c-l&&f<c-l){const B=Math.floor((h-l)/u),w=Math.floor((f-l)/u);y=p[a[B*s+w]?1:0]}r[m++]=y.r,r[m++]=y.g,r[m++]=y.b,r[m]=y.a}}})(wt);(function(e){const t=wt;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let u=a,c=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(c=r()),u=t.getOptions(u);const l=t.getImageWidth(n.modules.size,u),p=c.getContext("2d"),h=p.createImageData(l,l);return t.qrToImageData(h.data,n,u),i(p,c,l),p.putImageData(h,0,0),c},e.renderToDataURL=function(n,s,a){let u=a;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const c=e.render(n,s,u),l=u.type||"image/png",p=u.rendererOpts||{};return c.toDataURL(l,p.quality)}})(Ut);var Ft={};const Le=wt;function _t(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function ut(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function De(e,t,i){let r="",o=0,n=!1,s=0;for(let a=0;a<e.length;a++){const u=Math.floor(a%t),c=Math.floor(a/t);!u&&!n&&(n=!0),e[a]?(s++,a>0&&u>0&&e[a-1]||(r+=n?ut("M",u+i,.5+c+i):ut("m",o,0),o=0,n=!1),u+1<t&&e[a+1]||(r+=ut("h",s),s=0)):o++}return r}Ft.render=function(t,i,r){const o=Le.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+o.margin*2,u=o.color.light.a?"<path "+_t(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+_t(o.color.dark,"stroke")+' d="'+De(s,n,o.margin)+'"/>',l='viewBox="0 0 '+a+" "+a+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+l+' shape-rendering="crispEdges">'+u+c+`</svg>
`;return typeof r=="function"&&r(null,h),h};const Ue=jt,dt=Bt,kt=Ut,Fe=Ft;function yt(e,t,i,r,o){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!Ue())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(u,c){try{const l=dt.create(i,r);u(e(l,t,r))}catch(l){c(l)}})}try{const u=dt.create(i,r);o(null,e(u,t,r))}catch(u){o(u)}}L.create=dt.create;L.toCanvas=yt.bind(null,kt.render);L.toDataURL=yt.bind(null,kt.renderToDataURL);L.toString=yt.bind(null,function(e,t,i){return Fe.render(e,i)});const ke={style:{"margin-bottom":"0"}},ve=["src"],ze=["src"],Ve=["src"],vt=zt({__name:"qrcode",setup(e){const t=q(""),i=q(""),r=q(""),o=q();Vt(()=>{L.toDataURL("Fantastic-admin 真棒！").then(s=>{t.value=s}).catch(s=>{console.log(s)}),L.toCanvas(o.value,"Fantastic-admin 真棒！").then(()=>{}).catch(s=>{console.log(s)}),L.toDataURL("Fantastic-admin 真棒！",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then(s=>{i.value=s}).catch(s=>{console.log(s)}),L.toDataURL("Fantastic-admin 真棒！",{width:100}).then(s=>{r.value=s}).catch(s=>{console.log(s)})});function n(s){window.open(s,"_blank")}return(s,a)=>{const u=H("el-tag"),c=Jt,l=H("el-icon"),p=H("el-button"),h=$t,f=Yt,m=H("el-col"),y=H("el-row");return Ht(),Kt("div",null,[N(qt),N(h,{title:"二维码"},{content:I(()=>[K("p",ke,[J(" 安装命令："),N(u,null,{default:I(()=>[J("pnpm add qrcode")]),_:1}),J(),N(u,null,{default:I(()=>[J("pnpm add @types/qrcode -D")]),_:1})])]),default:I(()=>[N(p,{onClick:a[0]||(a[0]=B=>n("https://github.com/soldair/node-qrcode"))},{icon:I(()=>[N(l,null,{default:I(()=>[N(c,{name:"i-ep:link"})]),_:1})]),default:I(()=>[J(" 访问 node-qrcode ")]),_:1})]),_:1}),N(y,{gutter:20,style:{margin:"0 10px"}},{default:I(()=>[N(m,{sm:6},{default:I(()=>[N(f,{title:"渲染成 img 标签",style:{margin:"0"}},{default:I(()=>[K("img",{src:nt(t)},null,8,ve)]),_:1})]),_:1}),N(m,{sm:6},{default:I(()=>[N(f,{title:"渲染成 canvas 标签",style:{margin:"0"}},{default:I(()=>[K("canvas",{ref_key:"canvasRef",ref:o},null,512)]),_:1})]),_:1}),N(m,{sm:6},{default:I(()=>[N(f,{title:"自定义颜色",style:{margin:"0"}},{default:I(()=>[K("img",{src:nt(i)},null,8,ze)]),_:1})]),_:1}),N(m,{sm:6},{default:I(()=>[N(f,{title:"指定宽度",style:{margin:"0"}},{default:I(()=>[K("img",{src:nt(r)},null,8,Ve)]),_:1})]),_:1})]),_:1})])}}});typeof Et=="function"&&Et(vt);const Je=Ot(vt,[["__scopeId","data-v-7398d1ef"]]);export{Je as default};
