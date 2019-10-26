var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const c="undefined"!=typeof window;let a=c?()=>window.performance.now():()=>Date.now(),l=c?t=>requestAnimationFrame(t):t;const u=new Set;let f,d=!1;function m(){u.forEach(t=>{t[0](a())||(u.delete(t),t[1]())}),(d=u.size>0)&&l(m)}function p(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function x(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function _(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}let A,k=0,E={};function S(t,e,n,r,o,i,s,c=0){const a=16.666/r;let l="{\n";for(let t=0;t<=1;t+=a){const r=e+(n-e)*i(t);l+=100*t+`%{${s(r,1-r)}}\n`}const u=l+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`;if(!E[d]){if(!f){const t=v("style");document.head.appendChild(t),f=t.sheet}E[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length)}const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${r}ms linear ${o}ms 1 both`,k+=1,d}function M(t,e){t.style.animation=(t.style.animation||"").split(", ").filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")).join(", "),e&&!--k&&l(()=>{if(k)return;let t=f.cssRules.length;for(;t--;)f.deleteRule(t);E={}})}function j(t){A=t}function q(t){(function(){if(!A)throw new Error("Function called outside component initialization");return A})().$$.on_mount.push(t)}function C(){const t=A;return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=_(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const L=[],T=[],O=[],G=[],P=Promise.resolve();let N,B=!1;function R(t){O.push(t)}function V(){const t=new Set;do{for(;L.length;){const t=L.shift();j(t),I(t.$$)}for(;T.length;)T.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];t.has(n)||(n(),t.add(n))}O.length=0}while(L.length);for(;G.length;)G.pop()();B=!1}function I(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(R))}function z(t,e,n){t.dispatchEvent(_(`${e?"intro":"outro"}${n}`))}const F=new Set;let X;function D(){X={r:0,c:[],p:X}}function H(){X.r||o(X.c),X=X.p}function Y(t,e){t&&t.i&&(F.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),X.c.push(()=>{F.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const U={duration:0};function K(n,r,s,c){let f=r(n,s),p=c?0:1,h=null,g=null,y=null;function v(){y&&M(n,y)}function $(t,e){const n=t.b-p;return e*=Math.abs(n),{a:p,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(r){const{delay:i=0,duration:s=300,easing:c=e,tick:b=t,css:x}=f||U,w={start:a()+i,b:r};r||(w.group=X,X.r+=1),h?g=w:(x&&(v(),y=S(n,p,r,s,i,c,x)),r&&b(0,1),h=$(w,s),R(()=>z(n,r,"start")),function(t){let e;d||(d=!0,l(m)),new Promise(n=>{u.add(e=[t,n])})}(t=>{if(g&&t>g.start&&(h=$(g,s),g=null,z(n,h.b,"start"),x&&(v(),y=S(n,p,h.b,h.duration,0,c,f.css))),h)if(t>=h.end)b(p=h.b,1-p),z(n,h.b,"end"),g||(h.b?v():--h.group.r||o(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;p=h.a+h.d*c(e/h.duration),b(p,1-p)}return!(!h&&!g)}))}return{run(t){i(f)?(N||(N=Promise.resolve()).then(()=>{N=null}),N).then(()=>{f=f(),b(t)}):b(t)},end(){v(),h=g=null}}}function W(t,e,r){const{fragment:s,on_mount:c,on_destroy:a,after_update:l}=t.$$;s.m(e,r),R(()=>{const e=c.map(n).filter(i);a?a.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(R)}function Z(t,e){t.$$.fragment&&(o(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function Q(t,e){t.$$.dirty||(L.push(t),B||(B=!0,P.then(V)),t.$$.dirty=r()),t.$$.dirty[e]=!0}function tt(e,n,i,s,c,a){const l=A;j(e);const u=n.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:null};let d=!1;var m;f.ctx=i?i(e,u,(t,n,r=n)=>(f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),d&&Q(e,t)),n)):u,f.update(),d=!0,o(f.before_update),f.fragment=s(f.ctx),n.target&&(n.hydrate?f.fragment.l((m=n.target,Array.from(m.childNodes))):f.fragment.c(),n.intro&&Y(e.$$.fragment),W(e,n.target,n.anchor),V()),j(l)}class et{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function nt(e){var n,r,o;return{c(){w(n=v("div"),"class","tile svelte-1ta03ls"),w(n,"style",r=`background-image: url(${e.src});`),o=x(n,"click",e.click_handler)},m(t,e){h(t,n,e)},p(t,e){t.src&&r!==(r=`background-image: url(${e.src});`)&&w(n,"style",r)},i:t,o:t,d(t){t&&g(n),o()}}}function rt(t,e,n){let{src:r}=e;return t.$set=(t=>{"src"in t&&n("src",r=t.src)}),{src:r,click_handler:function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}}}class ot extends et{constructor(t){super(),tt(this,t,rt,nt,s,["src"])}}function it(t){const e=t-1;return e*e*e+1}function st(t,{delay:e=0,duration:n=400}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,css:t=>`opacity: ${t*r}`}}function ct(t,{delay:e=0,duration:n=400,easing:r=it,x:o=0,y:i=0,opacity:s=0}){const c=getComputedStyle(t),a=+c.opacity,l="none"===c.transform?"":c.transform,u=a*(1-s);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*o}px, ${(1-t)*i}px);\n\t\t\topacity: ${a-u*e}`}}function at(t){var e,n,r,o,i,s,c;return{c(){e=v("div"),n=v("div"),r=b(),o=v("div"),w(n,"class","background svelte-18qhn9f"),w(o,"class","content svelte-18qhn9f"),w(e,"class","lightbox svelte-18qhn9f"),c=x(n,"click",t.close)},m(i,c){h(i,e,c),p(e,n),p(e,r),p(e,o),o.innerHTML=t.data,s=!0},p(t,e){s&&!t.data||(o.innerHTML=e.data)},i(t){s||(R(()=>{i||(i=K(e,st,{duration:300},!0)),i.run(1)}),s=!0)},o(t){i||(i=K(e,st,{duration:300},!1)),i.run(0),s=!1},d(t){t&&(g(e),i&&i.end()),c()}}}function lt(t,e,n){const r=C();let{data:o}=e;return t.$set=(t=>{"data"in t&&n("data",o=t.data)}),{close:function(){r("destroy")},data:o}}class ut extends et{constructor(t){super(),tt(this,t,lt,at,s,["data"])}}function ft(t,e,n){const r=Object.create(t);return r.item=e[n],r}function dt(t){var e,n,r;var o=new ot({props:{src:t.item.src}});return o.$on("click",function(){return t.click_handler(t)}),{c(){e=v("div"),o.$$.fragment.c(),n=b(),w(e,"class","spacer svelte-1jpthra")},m(t,i){h(t,e,i),W(o,e,null),p(e,n),r=!0},p(e,n){t=n;var r={};e.items&&(r.src=t.item.src),o.$set(r)},i(t){r||(Y(o.$$.fragment,t),r=!0)},o(t){J(o.$$.fragment,t),r=!1},d(t){t&&g(e),Z(o)}}}function mt(t){var e,n,r,o;let i=t.items,s=[];for(let e=0;e<i.length;e+=1)s[e]=dt(ft(t,i,e));const c=t=>J(s[t],1,1,()=>{s[t]=null});return{c(){e=v("div");for(let t=0;t<s.length;t+=1)s[t].c();w(e,"class","filmstrip svelte-1jpthra"),w(e,"style",n=`transform: rotate(${t.rotation}deg); margin-right: ${200*Math.abs(Math.sin(Math.abs(t.rotation)))}px`)},m(t,n){h(t,e,n);for(let t=0;t<s.length;t+=1)s[t].m(e,null);o=!0},p(t,r){if(t.items){let n;for(i=r.items,n=0;n<i.length;n+=1){const o=ft(r,i,n);s[n]?(s[n].p(t,o),Y(s[n],1)):(s[n]=dt(o),s[n].c(),Y(s[n],1),s[n].m(e,null))}for(D(),n=i.length;n<s.length;n+=1)c(n);H()}o&&!t.rotation||n===(n=`transform: rotate(${r.rotation}deg); margin-right: ${200*Math.abs(Math.sin(Math.abs(r.rotation)))}px`)||w(e,"style",n)},i(t){if(!o){for(let t=0;t<i.length;t+=1)Y(s[t]);R(()=>{r||(r=K(e,st,{delay:1e3,duration:800},!0)),r.run(1)}),o=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)J(s[t]);r||(r=K(e,st,{delay:1e3,duration:800},!1)),r.run(0),o=!1},d(t){t&&g(e),y(s,t),t&&r&&r.end()}}}function pt(t,e,n){let{items:r=[],rotation:o=0}=e;return t.$set=(t=>{"items"in t&&n("items",r=t.items),"rotation"in t&&n("rotation",o=t.rotation)}),{items:r,rotation:o,click_handler:({item:t})=>(function(t){ut.createLightbox({data:t.content||`<img src="${t.src}" />`})})(t)}}ut.createLightbox=function(t){const e=new ut({target:document.body,props:t,intro:!0});return e.$on("destroy",()=>{e.$destroy()}),e.promise};class ht extends et{constructor(t){super(),tt(this,t,pt,mt,s,["items","rotation"])}}var gt,yt=(function(t,e){!function(e,n){var r="file:"===e.location.protocol,o=n.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");var i=Array.prototype.forEach||function(t,e){if(null==this||"function"!=typeof t)throw new TypeError;var n,r=this.length>>>0;for(n=0;n<r;++n)n in this&&t.call(e,this[n],n,this)},s={},c=0,a=[],l=[],u={},f=function(t){return t.cloneNode(!0)},d=function(t,e){l[t]=l[t]||[],l[t].push(e)},m=function(t,n){if(void 0!==s[t])s[t]instanceof SVGSVGElement?n(f(s[t])):d(t,n);else{if(!e.XMLHttpRequest)return n("Browser does not support XMLHttpRequest"),!1;s[t]={},d(t,n);var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4===o.readyState){if(404===o.status||null===o.responseXML)return n("Unable to load SVG file: "+t),r&&n("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),n(),!1;if(!(200===o.status||r&&0===o.status))return n("There was a problem injecting the SVG: "+o.status+" "+o.statusText),!1;if(o.responseXML instanceof Document)s[t]=o.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var e;try{e=(new DOMParser).parseFromString(o.responseText,"text/xml")}catch(t){e=void 0}if(!e||e.getElementsByTagName("parsererror").length)return n("Unable to parse SVG file: "+t),!1;s[t]=e.documentElement}!function(t){for(var e=0,n=l[t].length;e<n;e++)!function(e){setTimeout(function(){l[t][e](f(s[t]))},0)}(e)}(t)}},o.open("GET",t),o.overrideMimeType&&o.overrideMimeType("text/xml"),o.send()}},p=function(t,n,r,s){var l=t.getAttribute("data-src")||t.getAttribute("src");if(/\.svg/i.test(l))if(o)-1===a.indexOf(t)&&(a.push(t),t.setAttribute("src",""),m(l,function(r){if(void 0===r||"string"==typeof r)return s(r),!1;var o=t.getAttribute("id");o&&r.setAttribute("id",o);var f=t.getAttribute("title");f&&r.setAttribute("title",f);var d=[].concat(r.getAttribute("class")||[],"injected-svg",t.getAttribute("class")||[]).join(" ");r.setAttribute("class",function(t){for(var e={},n=(t=t.split(" ")).length,r=[];n--;)e.hasOwnProperty(t[n])||(e[t[n]]=1,r.unshift(t[n]));return r.join(" ")}(d));var m=t.getAttribute("style");m&&r.setAttribute("style",m);var p=[].filter.call(t.attributes,function(t){return/^data-\w[\w\-]*$/.test(t.name)});i.call(p,function(t){t.name&&t.value&&r.setAttribute(t.name,t.value)});var h,g,y,v,$,b={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(b).forEach(function(t){h=t,y=b[t];for(var e=0,n=(g=r.querySelectorAll("defs "+h+"[id]")).length;e<n;e++){var o;v=g[e].id,$=v+"-"+c,i.call(y,function(t){for(var e=0,n=(o=r.querySelectorAll("["+t+'*="'+v+'"]')).length;e<n;e++)o[e].setAttribute(t,"url(#"+$+")")}),g[e].id=$}}),r.removeAttribute("xmlns:a");for(var x,w,_=r.querySelectorAll("script"),A=[],k=0,E=_.length;k<E;k++)(w=_[k].getAttribute("type"))&&"application/ecmascript"!==w&&"application/javascript"!==w||(x=_[k].innerText||_[k].textContent,A.push(x),r.removeChild(_[k]));if(A.length>0&&("always"===n||"once"===n&&!u[l])){for(var S=0,M=A.length;S<M;S++)new Function(A[S])(e);u[l]=!0}var j=r.querySelectorAll("style");i.call(j,function(t){t.textContent+=""}),t.parentNode.replaceChild(r,t),delete a[a.indexOf(t)],t=null,c++,s(r)}));else{var f=t.getAttribute("data-fallback")||t.getAttribute("data-png");f?(t.setAttribute("src",f),s(null)):r?(t.setAttribute("src",r+"/"+l.split("/").pop().replace(".svg",".png")),s(null)):s("This browser does not support SVG and no PNG fallback was defined.")}else s("Attempted to inject a file with a non-svg extension: "+l)};t.exports=function(t,e,n){var r=(e=e||{}).evalScripts||"always",o=e.pngFallback||!1,s=e.each;if(void 0!==t.length){var c=0;i.call(t,function(e){p(e,r,o,function(e){s&&"function"==typeof s&&s(e),n&&t.length===++c&&n(c)})})}else t?p(t,r,o,function(e){s&&"function"==typeof s&&s(e),n&&n(1),t=null}):n&&n(0)}}(window,document)}(gt={exports:{}},gt.exports),gt.exports);function vt(e){var n,r,o,i,s,c,a;return{c(){n=v("div"),r=v("div"),o=v("div"),w(i=v("img"),"src","messages_anim.svg"),w(i,"alt",""),w(o,"class","content svelte-st7z0y"),w(r,"id","loaderContainer"),w(r,"class","svelte-st7z0y"),w(n,"id","loader"),w(n,"class","svelte-st7z0y")},m(t,s){h(t,n,s),p(n,r),p(r,o),p(o,i),e.img_binding(i),a=!0},p:t,i(t){a||(R(()=>{s||(s=K(o,ct,{y:200,duration:1600},!0)),s.run(1)}),R(()=>{c||(c=K(n,st,{delay:800,duration:400},!0)),c.run(1)}),a=!0)},o(t){s||(s=K(o,ct,{y:200,duration:1600},!1)),s.run(0),c||(c=K(n,st,{delay:800,duration:400},!1)),c.run(0),a=!1},d(t){t&&g(n),e.img_binding(null),t&&(s&&s.end(),c&&c.end())}}}function $t(t,e,n){const r=C();let o;return q(()=>{yt(o,void 0,function(){document.getElementById("el_7lT4rIY3tJ0").addEventListener("mouseover",function(){document.querySelector("svg").classList.add("hov"),document.querySelectorAll("#el_0eRWAjOgY *").forEach(t=>{t.style.animationPlayState="running"})},{once:!0}),document.getElementById("el_S0iMzZ2Pc5_an_IvVquN_Ci").addEventListener("click",function(){document.getElementById("el_AqJYz6K2xY").classList.add("fly"),r("destroy")})})}),{imageElement:o,img_binding:function(t){T[t?"unshift":"push"](()=>{n("imageElement",o=t)})}}}class bt extends et{constructor(t){super(),tt(this,t,$t,vt,s,[])}}var xt=[[{src:"http://lorempixel.com/1280/720/"},{src:"http://lorempixel.com/1280/721/"},{src:"http://lorempixel.com/1280/722/",content:"Custom text for the lightroom"}],[{src:"http://lorempixel.com/1280/723/"},{src:"http://lorempixel.com/1280/724/"},{src:"http://lorempixel.com/1280/725/"},{src:"http://lorempixel.com/1280/726/"},{src:"http://lorempixel.com/1280/727/"},{src:"http://lorempixel.com/1280/728/"},{src:"http://lorempixel.com/1280/729/"},{src:"http://lorempixel.com/1280/730/"}],[{src:"http://lorempixel.com/1281/720/"},{src:"http://lorempixel.com/1281/721/"},{src:"http://lorempixel.com/1281/722/"},{src:"http://lorempixel.com/1281/723/"}]];function wt(t,e,n){const r=Object.create(t);return r.items=e[n],r}function _t(t){var e,n;let r=xt,o=[];for(let e=0;e<r.length;e+=1)o[e]=kt(wt(t,r,e));const i=t=>J(o[t],1,1,()=>{o[t]=null});return{c(){e=v("div");for(let t=0;t<o.length;t+=1)o[t].c();w(e,"class","overflowContainer svelte-1my4yh9")},m(t,r){h(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,n){if(t.data||t.rand){let s;for(r=xt,s=0;s<r.length;s+=1){const i=wt(n,r,s);o[s]?(o[s].p(t,i),Y(o[s],1)):(o[s]=kt(i),o[s].c(),Y(o[s],1),o[s].m(e,null))}for(D(),s=r.length;s<o.length;s+=1)i(s);H()}},i(t){if(!n){for(let t=0;t<r.length;t+=1)Y(o[t]);n=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)J(o[t]);n=!1},d(t){t&&g(e),y(o,t)}}}function At(e){var n,r=new bt({});return r.$on("destroy",e.destroy_handler),{c(){r.$$.fragment.c()},m(t,e){W(r,t,e),n=!0},p:t,i(t){n||(Y(r.$$.fragment,t),n=!0)},o(t){J(r.$$.fragment,t),n=!1},d(t){Z(r,t)}}}function kt(e){var n,r=new ht({props:{items:e.items,rotation:St()}});return{c(){r.$$.fragment.c()},m(t,e){W(r,t,e),n=!0},p:t,i(t){n||(Y(r.$$.fragment,t),n=!0)},o(t){J(r.$$.fragment,t),n=!1},d(t){Z(r,t)}}}function Et(t){var e,n,r,o,i=[At,_t],s=[];function c(t,e){return e.showIntro?0:1}return e=c(0,t),n=s[e]=i[e](t),{c(){n.c(),r=$("")},m(t,n){s[e].m(t,n),h(t,r,n),o=!0},p(t,o){var a=e;(e=c(0,o))===a?s[e].p(t,o):(D(),J(s[a],1,1,()=>{s[a]=null}),H(),(n=s[e])||(n=s[e]=i[e](o)).c(),Y(n,1),n.m(r.parentNode,r))},i(t){o||(Y(n),o=!0)},o(t){J(n),o=!1},d(t){s[e].d(t),t&&g(r)}}}function St(){return 20*Math.random()-10}function Mt(t,e,n){let r=!0;return{showIntro:r,destroy_handler:()=>n("showIntro",r=!1)}}return new class extends et{constructor(t){super(),tt(this,t,Mt,Et,s,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
