(function(e){function n(n){for(var r,o,i=n[0],u=n[1],l=n[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-ae99fb36":"b5b5dd1f","chunk-0b46e80a":"0f20b2fc","chunk-59189f00":"7b4b34cc","chunk-755029d6":"4f68a74e"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-ae99fb36":1,"chunk-0b46e80a":1,"chunk-59189f00":1,"chunk-755029d6":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-ae99fb36":"228dcafc","chunk-0b46e80a":"ecd89c89","chunk-59189f00":"801e6032","chunk-755029d6":"05c31b33"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return n()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),t(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var d=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1494:function(e,n,t){e.exports=t.p+"img/header2.ac6ad506.png"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-content",[t("MyHeader"),t("router-view"),t("MyFooter")],1)],1)},a=[],c=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("v-app-bar",{attrs:{fixed:"",color:"transparent",src:t("1494")},scopedSlots:e._u([{key:"img",fn:function(n){var t=n.props;return[r("v-img",e._b({attrs:{position:"bottom center",cover:""}},"v-img",t,!1))]}}])},e._l(e.items,(function(n){return r("v-tabs",{key:n.title,attrs:{grow:""}},[r("v-tab",{staticClass:"mx-0",attrs:{to:n.link}},[e._v(e._s(n.title))])],1)})),1)},i=[],u={name:"MyHeader",data:function(){return{items:[{title:"Top",icon:"mdi-home",link:"/"},{title:"About",icon:"mdi-clipboard-list-outline",link:"/about"},{title:"Letter",icon:"mdi-dashboard",link:"/letter"}]}}},l=u,s=t("2877"),f=t("6544"),d=t.n(f),p=t("40dc"),h=t("adda"),m=t("71a3"),v=t("fe57"),b=Object(s["a"])(l,c,i,!1,null,null,null),g=b.exports;d()(b,{VAppBar:p["a"],VImg:h["a"],VTab:m["a"],VTabs:v["a"]});var k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-footer",{attrs:{fixed:"",color:"transparent",dark:""}},[t("v-spacer"),t("a",{attrs:{href:"/"}},[t("img",{attrs:{src:e.item,height:"35",position:"center center",contain:"",alt:""}})]),t("v-spacer")],1)},y=[],x={name:"MyFooter",data:function(){return{item:t("b843")}}},w=x,S=(t("f7d7"),t("553a")),A=t("2fa4"),_=Object(s["a"])(w,k,y,!1,null,null,null),P=_.exports;d()(_,{VFooter:S["a"],VSpacer:A["a"]});var T={name:"App",components:{MyHeader:g,MyFooter:P},data:function(){return{}}},j=T,O=t("7496"),E=t("a75b"),C=Object(s["a"])(j,o,a,!1,null,null,null),L=C.exports;d()(C,{VApp:O["a"],VContent:E["a"]});t("d3b7");var M=t("8c4f");r["a"].use(M["a"]);var V=[{path:"/",name:"Top",component:function(){return Promise.all([t.e("chunk-ae99fb36"),t.e("chunk-755029d6")]).then(t.bind(null,"ec27"))}},{path:"/about",name:"About",component:function(){return Promise.all([t.e("chunk-ae99fb36"),t.e("chunk-0b46e80a")]).then(t.bind(null,"f820"))}},{path:"/letter",name:"Letter",component:function(){return Promise.all([t.e("chunk-ae99fb36"),t.e("chunk-59189f00")]).then(t.bind(null,"a4d9"))}}],N=new M["a"]({mode:"history",base:"/",routes:V}),F=N,I=t("2f62");r["a"].use(I["a"]);var R=new I["a"].Store({state:{drawer:!1,index:-1,alX:[2,2,0,3,0,3,0,1,2,3,0,1,3,3,0,3,0,2,2,3],dna:["A","G","T","C"],rna:["U","C","A","G"],cdn:[[["F","F","L","L"],["S","S","S","S"],["Y","Y","x","x"],["C","C","x","W"]],[["L","L","L","L"],["P","P","P","P"],["H","H","Q","Q"],["R","R","R","R"]],[["I","I","I","M"],["T","T","T","T"],["N","N","K","K"],["S","S","R","R"]],[["V","V","V","V"],["A","A","A","A"],["D","D","E","E"],["G","G","G","G"]]]},getters:{index:function(e){return e.index},alX:function(e){return e.alX},dna:function(e){return e.dna},rna:function(e){return e.rna},cdn:function(e){return e.cdn},DnaSeq:function(e){for(var n=e.alX,t=[],r=0;r<n.length;r++){var o=n[r];t.push({id:r,text:e.dna[o]})}return t},RnaSeq:function(e){for(var n=e.alX,t=[],r=0;r<n.length;r++){var o=n[r];t.push({id:r,text:e.rna[o]})}return t},makecodon:function(e){var n=[],t=e.index;if(t+1>0){var r=e.alX,o=2,a=1,c=t+o;while(c<r.length){var i=e.cdn[r[c-o]][r[c-o+1]][r[c-o+2]],u="M"===i||"x"===i?"r":"";if(n.push({id:a,text:i,class:u}),"x"==i)break;c+=3,a++}}return n}},mutations:{changeIndex:function(e,n){e.index=n}},actions:{changeIndex:function(e,n){e.commit("changeIndex",n)}},modules:{}}),G=t("f309");r["a"].use(G["a"]);var H=new G["a"]({}),X=t("9483");Object(X["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:F,store:R,vuetify:H,render:function(e){return e(L)}}).$mount("#app")},aeac:function(e,n,t){},b843:function(e,n,t){e.exports=t.p+"img/footerIcon.1f0838a2.png"},f7d7:function(e,n,t){"use strict";var r=t("aeac"),o=t.n(r);o.a}});
//# sourceMappingURL=app.803c2788.js.map