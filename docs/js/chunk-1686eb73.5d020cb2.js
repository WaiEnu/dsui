(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1686eb73"],{"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var a=n("ade3"),r=n("5530"),i=(n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,a){return n[t+Object(o["n"])(a)]=e(),n}),{})}var f=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:f}})),v=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:v}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},h=u("alignContent",(function(){return{type:String,default:null,validator:g}})),b={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(h)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var a=m[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var x=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},d,{justify:{type:String,default:null,validator:v}},p,{alignContent:{type:String,default:null,validator:g}},h),render:function(t,e){var n=e.props,r=e.data,i=e.children,o="";for(var c in n)o+=String(n[c]);var l=x.get(o);return l||function(){var t,e;for(e in l=[],b)b[e].forEach((function(t){var a=n[t],r=y(e,t,a);r&&l.push(r)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(o,l)}(),t(n.tag,Object(s["a"])(r,{staticClass:"row",class:l}),i)}})},"2c2c":function(t,e,n){t.exports=n.p+"img/copy_ico.cc67dcb3.png"},"48f1":function(t,e,n){t.exports=n.p+"img/tran_ico.8730524e.png"},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),r=n("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},5934:function(t,e,n){t.exports=n.p+"img/tape_ico.341e8dca.png"},5974:function(t,e,n){t.exports=n.p+"img/caset.e8073f76.png"},"62ad":function(t,e,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var a=n("ade3"),r=n("5530"),i=(n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(o["n"])(e)]={type:[String,Number],default:null},t}),{})}(),f=function(){return c.reduce((function(t,e){return t["order"+Object(o["n"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(f)};function v(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var p=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},f,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,i=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var l=p.get(o);return l||function(){var t,e;for(e in l=[],d)d[e].forEach((function(t){var a=n[t],r=v(e,t,a);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!n.cols},Object(a["a"])(t,"col-".concat(n.cols),n.cols),Object(a["a"])(t,"offset-".concat(n.offset),n.offset),Object(a["a"])(t,"order-".concat(n.order),n.order),Object(a["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),p.set(o,l)}(),t(n.tag,Object(s["a"])(r,{class:l}),i)}})},6566:function(t,e,n){"use strict";var a=n("9bf2").f,r=n("7c73"),i=n("e2cc"),s=n("0366"),o=n("19aa"),c=n("2266"),l=n("7dd0"),u=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),p=v.set,g=v.getterFor;t.exports={getConstructor:function(t,e,n,l){var u=t((function(t,a){o(t,u,e),p(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=a&&c(a,t[l],t,n)})),v=g(e),h=function(t,e,n){var a,r,i=v(t),s=b(t,e);return s?s.value=n:(i.last=s={index:r=d(e,!0),key:e,value:n,previous:a=i.last,next:void 0,removed:!1},i.first||(i.first=s),a&&(a.next=s),f?i.size++:t.size++,"F"!==r&&(i.index[r]=s)),t},b=function(t,e){var n,a=v(t),r=d(e);if("F"!==r)return a.index[r];for(n=a.first;n;n=n.next)if(n.key==e)return n};return i(u.prototype,{clear:function(){var t=this,e=v(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),a=b(e,t);if(a){var r=a.next,i=a.previous;delete n.index[a.index],a.removed=!0,i&&(i.next=r),r&&(r.previous=i),n.first==a&&(n.first=r),n.last==a&&(n.last=i),f?n.size--:e.size--}return!!a},forEach:function(t){var e,n=v(this),a=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!b(this,t)}}),i(u.prototype,n?{get:function(t){var e=b(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),f&&a(u.prototype,"size",{get:function(){return v(this).size}}),u},setStrong:function(t,e,n){var a=e+" Iterator",r=g(e),i=g(a);l(t,e,(function(t,e){p(this,{type:a,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var a=n("23e7"),r=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("f183"),c=n("2266"),l=n("19aa"),u=n("861d"),f=n("d039"),d=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var g=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),b=g?"set":"add",m=r[t],y=m&&m.prototype,x=m,C={},w=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(i(t,"function"!=typeof m||!(h||y.forEach&&!f((function(){(new m).entries().next()})))))x=n.getConstructor(e,t,g,b),o.REQUIRED=!0;else if(i(t,!0)){var j=new x,_=j[b](h?{}:-0,1)!=j,S=f((function(){j.has(1)})),k=d((function(t){new m(t)})),O=!h&&f((function(){var t=new m,e=5;while(e--)t[b](e,e);return!t.has(-0)}));k||(x=e((function(e,n){l(e,x,t);var a=p(new m,e,x);return void 0!=n&&c(n,a[b],a,g),a})),x.prototype=y,y.constructor=x),(S||O)&&(w("delete"),w("has"),g&&w("get")),(O||_)&&w(b),h&&y.clear&&delete y.clear}return C[t]=x,a({global:!0,forced:x!=m},C),v(x,t),h||n.setStrong(x,t,g),x}},a4d9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-layout",{attrs:{wrap:"","align-center":"","justify-space-around":""}},[n("v-flex",{attrs:{lg8:"",md10:"",xs10:""}},[n("v-card",[n("v-img",{staticClass:"bgImg",attrs:{src:t.item,alt:"",position:"left top"}},[n("Letterparts")],1)],1)],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-img",{staticClass:"Img",attrs:{src:n("2c2c"),contain:"",alt:""}})],1),a("v-col",{attrs:{cols:"10"}},[a("ul",{staticClass:"list"},[a("transition-group",{attrs:{name:"flip"}},[t._l(t.letterX,(function(e){return[a("li",{key:e.id,staticClass:"item",attrs:{id:e.id}},[a("div",{staticClass:"item__text"},[t._v(t._s(e.text))]),a("div",{staticClass:"item__delete",on:{click:function(n){return t.onDeleteClick(e.id)}}}),a("div",{staticClass:"item__add"})])]}))],2)],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-img",{staticClass:"Img",attrs:{src:n("5934"),contain:"",alt:""}})],1),a("v-col",{attrs:{cols:"10"}},[a("ul",{staticClass:"list"},[a("transition-group",{attrs:{name:"flip"}},[t._l(t.copyX,(function(e){return[a("li",{key:e.id,staticClass:"item",attrs:{id:e.id}},[a("div",{staticClass:"item__text"},[t._v(t._s(e.text))])])]}))],2)],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-img",{staticClass:"Img",attrs:{src:n("48f1"),contain:"",alt:""}})],1),a("v-col",{attrs:{cols:"10"}},[a("ul",{staticClass:"list"},[a("transition-group",{attrs:{name:"flip"}},[t._l(t.letter,(function(e){return[a("li",{key:e.id,staticClass:"item",attrs:{id:e.id}},[a("div",{staticClass:"item__text"},[t._v(t._s(e.text))]),a("div",{staticClass:"item__"})])]}))],2)],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-btn",[t._v("ロボット")])],1),a("v-col",{attrs:{cols:"4"}},[a("v-btn",[t._v("伝票")])],1),a("v-col",{attrs:{cols:"4"}},[a("v-btn",{on:{click:function(e){return t.reset()}}},[t._v("リセット")])],1)],1)],1)},s=[],o=(n("a434"),{name:"Letterparts",data:function(){return{ali:[2,0,3,0,3,3,0,1,3,0,2,3,0,3,2],alX:[2,0,3,0,3,3,0,1,3,0,2,2,3,0,3,2],dna:["A","G","T","C"],rna:["U","C","A","G"],stt:[2,0,3],stps:[[1,3,3],[1,3,4],[0,3,2]],list:3}},computed:{letter:function(){return this.newSeq(this.$data.ali)},letterX:function(){return this.newSeq(this.$data.alX)},copyX:function(){return this.tranSeq(this.$data.alX)}},methods:{newSeq:function(t){for(var e=[],n=0;n<t.length;n++){var a=t[n];e.push({id:n,text:this.$data.dna[a]})}return e},tranSeq:function(t){for(var e=[],n=0;n<t.length;n++){var a=t[n];e.push({id:n,text:this.$data.rna[a]})}return e},onDeleteClick:function(t){var e=t;this.$data.alX.splice(e,1)},reset:function(){this.$router.go({path:this.$router.currentRoute.path,force:!0})}}}),c=o,l=n("2877"),u=n("6544"),f=n.n(u),d=n("8336"),v=n("62ad"),p=n("a523"),g=n("adda"),h=n("0fd9"),b=Object(l["a"])(c,i,s,!1,null,null,null),m=b.exports;f()(b,{VBtn:d["a"],VCol:v["a"],VContainer:p["a"],VImg:g["a"],VRow:h["a"]});var y={name:"Letter",components:{Letterparts:m},data:function(){return{item:n("5974")}}},x=y,C=n("b0af"),w=n("0e8f"),j=n("a722"),_=Object(l["a"])(x,a,r,!1,null,null,null);e["default"]=_.exports;f()(_,{VCard:C["a"],VContainer:p["a"],VFlex:w["a"],VImg:g["a"],VLayout:j["a"]})}}]);
//# sourceMappingURL=chunk-1686eb73.5d020cb2.js.map