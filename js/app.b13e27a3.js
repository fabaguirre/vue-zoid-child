(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/scorms-component/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"25fc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("fu-scorm")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"a-scormViewer"},[n("div",{staticStyle:{display:"none"},attrs:{id:"navigationContainer"}}),n("div",{staticStyle:{display:"none"},attrs:{id:"treeContainer"}}),n("div",{staticClass:"a-scormViewer__container placeholder_contentIFrame"},[n("iframe",{staticClass:"a-scormViewer__iframe",attrs:{id:"contentIFrame",frameborder:"0"},on:{load:e.onScormLoad}})])])},c=[],s=n("1da1"),u=(n("96cf"),n("d3b7"),r["a"].extend({name:"FuScorm",data:function(){return{loaded:!1}},created:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,o,a,i,c,s,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=["sscompat.js","sscorlib.js","ssfx.Core.js","API_BASE.js","API.js","API_1484_11.js","Controls.js","LocalStorage.js","Player.js"],a=0,i=o;case 2:if(!(a<i.length)){e.next=9;break}return c=i[a],e.next=6,r["a"].loadScript("/scorms-component/js/scormpool/".concat(c));case 6:a++,e.next=2;break;case 9:return s=null===(t=window.xprops)||void 0===t?void 0:t.manifestUrl,u=null===(n=window.xprops)||void 0===n?void 0:n.withCache,window.PlayerConfiguration.StorageSupport=!0,e.next=14,Promise.resolve(window.Run.ManifestByURL(s,u));case 14:l=function(e){return window.API.LMSGetValue(e)},d=function(e,t){return window.API.LMSSetValue(e,t)},window.xprops.getApi(l),window.xprops.setApi(d),console.log("Dec 14 09:30-- SCORM");case 19:case"end":return e.stop()}}),e)})))()},methods:{onScormLoad:function(){var e;(console.log("scorm loaded zoid",this.loaded),this.loaded)&&(console.log("YA CARGO"),null===(e=window.xprops)||void 0===e||e.onLoad());this.loaded=!this.loaded}}})),l=u,d=(n("c867"),n("2877")),p=Object(d["a"])(l,i,c,!1,null,null,null),f=p.exports,m=n("b997"),w=(m["create"]({tag:"fu-scorm-viewer",url:"https://summer-butterfly-9aa1.dialguiba.workers.dev/"}),{name:"App",components:{FuScorm:f}}),v=w,b=(n("034f"),Object(d["a"])(v,o,a,!1,null,null,null)),h=b.exports,g=n("67b0");r["a"].config.productionTip=!1,r["a"].use(g["a"]),new r["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,n){},c867:function(e,t,n){"use strict";n("25fc")}});
//# sourceMappingURL=app.b13e27a3.js.map