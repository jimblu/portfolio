parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mAzE":[function(require,module,exports) {

},{}],"Ko7r":[function(require,module,exports) {
var define;
var global = arguments[3];
var n,t=arguments[3];!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof n&&n.amd?n(r):t.Splitting=r()}(this,function(){"use strict";var n=document,t=n.createTextNode.bind(n);function r(n,t,r){n.style.setProperty(t,r)}function e(n,t){return n.appendChild(t)}function o(t,r,o,u){var i=n.createElement("span");return r&&(i.className=r),o&&(!u&&i.setAttribute("data-"+r,o),i.textContent=o),t&&e(t,i)||i}function u(n,t){return n.getAttribute("data-"+t)}function i(t,r){return t&&0!=t.length?t.nodeName?[t]:[].slice.call(t[0].nodeName?t:(r||n).querySelectorAll(t)):[]}function c(n){for(var t=[];n--;)t[n]=[];return t}function a(n,t){n&&n.some(t)}function s(n){return function(t){return n[t]}}var l={};function f(n,t,r,e){return{by:n,depends:t,key:r,split:e}}function d(n){return function n(t,r,e){var o=e.indexOf(t);if(-1==o)e.unshift(t),a(l[t].depends,function(r){n(r,t,e)});else{var u=e.indexOf(r);e.splice(o,1),e.splice(u,0,t)}return e}(n,0,[]).map(s(l))}function p(n){l[n.by]=n}function m(n,r,u,c,s){n.normalize();var l=[],f=document.createDocumentFragment();c&&l.push(n.previousSibling);var d=[];return i(n.childNodes).some(function(n){if(!n.tagName||n.hasChildNodes()){if(n.childNodes&&n.childNodes.length)return d.push(n),void l.push.apply(l,m(n,r,u,c,s));var e=n.wholeText||"",i=e.trim();i.length&&(" "===e[0]&&d.push(t(" ")),a(i.split(u),function(n,t){t&&s&&d.push(o(f,"whitespace"," ",s));var e=o(f,r,n);l.push(e),d.push(e)})," "===e[e.length-1]&&d.push(t(" ")))}else d.push(n)}),a(d,function(n){e(f,n)}),n.innerHTML="",e(n,f),l}var h=f("words",0,"word",function(n){return m(n,"word",/\s+/,0,1)}),g="chars",v=f(g,["words"],"char",function(n,t,r){var e=[];return a(r.words,function(n,r){e.push.apply(e,m(n,"char","",t.whitespace&&r))}),e});function y(n){var t=(n=n||{}).key;return i(n.target||"[data-splitting]").map(function(e){var o=e["🍌"];if(!n.force&&o)return o;o=e["🍌"]={el:e};var i=d(n.by||u(e,"splitting")||g),c=function(n,t){for(var r in t)n[r]=t[r];return n}({},n);return a(i,function(n){if(n.split){var u=n.by,i=(t?"-"+t:"")+n.key,s=n.split(e,c,o);i&&function(n,t,e){var o="--"+t,u=o+"-index";a(e,function(n,t){Array.isArray(n)?a(n,function(n){r(n,u,t)}):r(n,u,t)}),r(n,o+"-total",e.length)}(e,i,s),o[u]=s,e.classList.add(u)}}),e.classList.add("splitting"),o})}function w(n,t,r){var e=i(t.matching||n.children,n),o={};return a(e,function(n){var t=Math.round(n[r]);(o[t]||(o[t]=[])).push(n)}),Object.keys(o).map(Number).sort(b).map(s(o))}function b(n,t){return n-t}y.html=function(n){var t=(n=n||{}).target=o();return t.innerHTML=n.content,y(n),t.outerHTML},y.add=p;var N=f("lines",["words"],"line",function(n,t,r){return w(n,{matching:r.words},"offsetTop")}),x=f("items",0,"item",function(n,t){return i(t.matching||n.children,n)}),T=f("rows",0,"row",function(n,t){return w(n,t,"offsetTop")}),L=f("cols",0,"col",function(n,t){return w(n,t,"offsetLeft")}),k=f("grid",["rows","cols"]),A=f("layout",0,0,function(n,t){var c=t.rows=+(t.rows||u(n,"rows")||1),a=t.columns=+(t.columns||u(n,"columns")||1);if(t.image=t.image||u(n,"image")||n.currentSrc||n.src,t.image){var s=i("img",n)[0];t.image=s&&(s.currentSrc||s.src)}t.image&&r(n,"background-image","url("+t.image+")");for(var l=c*a,f=[],d=o(0,"cell-grid");l--;){var p=o(d,"cell");o(p,"cell-inner"),f.push(p)}return e(n,d),f}),C=f("cellRows",["layout"],"row",function(n,t,r){var e=t.rows,o=c(e);return a(r.layout,function(n,t,r){o[Math.floor(t/(r.length/e))].push(n)}),o}),M=f("cellColumns",["layout"],"col",function(n,t,r){var e=t.columns,o=c(e);return a(r.layout,function(n,t){o[t%e].push(n)}),o}),S=f("cells",["cellRows","cellColumns"],"cell",function(n,t,r){return r.layout});return p(h),p(v),p(N),p(x),p(T),p(L),p(k),p(A),p(C),p(M),p(S),y});
},{}],"CQhr":[function(require,module,exports) {
var e=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function o(t,o){for(;t&&t.nodeType!==e;){if("function"==typeof t.matches&&t.matches(o))return t;t=t.parentNode}}module.exports=o;
},{}],"oMd0":[function(require,module,exports) {
var e=require("./closest");function t(e,t,n,a,o){var i=r.apply(this,arguments);return e.addEventListener(n,i,o),{destroy:function(){e.removeEventListener(n,i,o)}}}function r(t,r,n,a){return function(n){n.delegateTarget=e(n.target,r),n.delegateTarget&&a.call(t,n)}}module.exports=t;
},{"./closest":"CQhr"}],"NOx8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=exports.Cache=function(){function n(){t(this,n),this.pages={},this.last=null}return e(n,[{key:"cacheUrl",value:function(e){e.url in this.pages==!1&&(this.pages[e.url]=e),this.last=this.pages[e.url],this.swup.log("Cache ("+Object.keys(this.pages).length+")",this.pages)}},{key:"getPage",value:function(e){return this.pages[e]}},{key:"getCurrentPage",value:function(){return this.getPage(window.location.pathname+window.location.search)}},{key:"exists",value:function(e){return e in this.pages}},{key:"empty",value:function(){this.pages={},this.last=null,this.swup.log("Cache cleared")}},{key:"remove",value:function(e){delete this.pages[e]}}]),n}();exports.default=n;
},{}],"g2kt":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e){var r=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return"/"===r[0]&&(r=r.splice(1)),""===r&&(r="homepage"),r};exports.default=e;
},{}],"JK0m":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t){window.history.pushState({url:t||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,t||window.location.href.split(window.location.hostname)[1])};exports.default=t;
},{}],"iTFX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.query=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:r.querySelector(e)},r=exports.queryAll=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:Array.prototype.slice.call(r.querySelectorAll(e))};
},{}],"Hux7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=require("../utils"),r=function(r,o){var n=document.createElement("html");n.innerHTML=r;for(var l=[],u=function(e){if(null==n.querySelector(o[e]))return{v:null};(0,t.queryAll)(o[e]).forEach(function(r,u){(0,t.queryAll)(o[e],n)[u].setAttribute("data-swup",l.length),l.push((0,t.queryAll)(o[e],n)[u].outerHTML)})},i=0;i<o.length;i++){var y=u(i);if("object"===(void 0===y?"undefined":e(y)))return y.v}var c={title:n.querySelector("title").innerText,pageClass:n.querySelector("body").className,originalContent:r,blocks:l};return n.innerHTML="",n=null,c};exports.default=r;
},{"../utils":"iTFX"}],"AD4e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},t=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}},n=e({},r,t),o=new XMLHttpRequest;return o.onreadystatechange=function(){4===o.readyState&&(o.status,a(o))},o.open(n.method,n.url,!0),Object.keys(n.headers).forEach(function(e){o.setRequestHeader(e,n.headers[e])}),o.send(n.data),o};exports.default=t;
},{}],"XEBX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){var n=document.createElement("div"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(void 0!==n.style[i])return t[i];return!1};exports.default=n;
},{}],"poij":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){return window.location.pathname+window.location.search};exports.default=e;
},{}],"efEv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../utils"),t=function(t,r){for(var u=0,n=function(n){null==t.querySelector(r[n])?console.warn("Element "+r[n]+" is not in current page."):(0,e.queryAll)(r[n]).forEach(function(l,o){(0,e.queryAll)(r[n],t)[o].setAttribute("data-swup",u),u++})},l=0;l<r.length;l++)n(l)};exports.default=t;
},{"../utils":"iTFX"}],"unwl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=function(){function n(e){t(this,n),e instanceof Element||e instanceof SVGElement?this.link=e:(this.link=document.createElement("a"),this.link.href=e)}return e(n,[{key:"getPath",value:function(){var e=this.link.pathname;return"/"!==e[0]&&(e="/"+e),e}},{key:"getAddress",value:function(){var e=this.link.pathname+this.link.search;return this.link.getAttribute("xlink:href")&&(e=this.link.getAttribute("xlink:href")),"/"!==e[0]&&(e="/"+e),e}},{key:"getHash",value:function(){return this.link.hash}}]),n}();exports.default=n;
},{}],"sTZz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Link=exports.markSwupElements=exports.getCurrentUrl=exports.transitionEnd=exports.fetch=exports.getDataFromHtml=exports.createHistoryRecord=exports.classify=void 0;var e=require("./classify"),r=q(e),t=require("./createHistoryRecord"),s=q(t),o=require("./getDataFromHtml"),a=q(o),u=require("./fetch"),i=q(u),l=require("./transitionEnd"),n=q(l),p=require("./getCurrentUrl"),d=q(p),f=require("./markSwupElements"),x=q(f),c=require("./Link"),m=q(c);function q(e){return e&&e.__esModule?e:{default:e}}var y=exports.classify=r.default,g=exports.createHistoryRecord=s.default,k=exports.getDataFromHtml=a.default,E=exports.fetch=i.default,H=exports.transitionEnd=n.default,v=exports.getCurrentUrl=d.default,_=exports.markSwupElements=x.default,h=exports.Link=m.default;
},{"./classify":"g2kt","./createHistoryRecord":"JK0m","./getDataFromHtml":"Hux7","./fetch":"AD4e","./transitionEnd":"XEBX","./getCurrentUrl":"poij","./markSwupElements":"efEv","./Link":"unwl"}],"NaI7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},e=require("../helpers"),n=function(n,i){var o=this,r=[],a=void 0;this.triggerEvent("transitionStart",i),null!=n.customTransition?(this.updateTransition(window.location.pathname,n.url,n.customTransition),document.documentElement.classList.add("to-"+(0,e.classify)(n.customTransition))):this.updateTransition(window.location.pathname,n.url),!i||this.options.animateHistoryBrowsing?function(){if(o.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),i&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+(0,e.classify)(n.url)),r=o.getAnimationPromises("out"),Promise.all(r).then(function(){o.triggerEvent("animationOutDone")}),!i){var t=void 0;t=null!=o.scrollToElement?n.url+o.scrollToElement:n.url,(0,e.createHistoryRecord)(t)}}():this.triggerEvent("animationSkipped"),this.cache.exists(n.url)?(a=new Promise(function(t){t()}),this.triggerEvent("pageRetrievedFromCache")):a=this.preloadPromise&&this.preloadPromise.route==n.url?this.preloadPromise:new Promise(function(i,r){(0,e.fetch)(t({},n,{headers:o.options.requestHeaders}),function(t){if(500===t.status)return o.triggerEvent("serverError"),void r(n.url);var e=o.getPageData(t);null!=e?(e.url=n.url,o.cache.cacheUrl(e),o.triggerEvent("pageLoaded"),i()):r(n.url)})}),Promise.all(r.concat([a])).then(function(){o.renderPage(o.cache.getPage(n.url),i),o.preloadPromise=null}).catch(function(t){o.options.skipPopStateHandling=function(){return window.location=t,!0},window.history.go(-1)})};exports.default=n;
},{"../helpers":"sTZz"}],"VXn3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},e=require("../utils"),n=require("../helpers"),i=function(e,i){var o=this;document.documentElement.classList.remove("is-leaving");var r=new n.Link(e.responseURL);window.location.pathname!==r.getPath()&&(window.history.replaceState({url:r.getPath(),random:Math.random(),source:"swup"},document.title,r.getPath()),this.cache.cacheUrl(t({},e,{url:r.getPath()}))),i&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent",i);for(var s=0;s<e.blocks.length;s++)document.body.querySelector('[data-swup="'+s+'"]').outerHTML=e.blocks[s];if(document.title=e.title,this.triggerEvent("contentReplaced",i),this.triggerEvent("pageView",i),this.options.cache||this.cache.empty(),setTimeout(function(){i&&!o.options.animateHistoryBrowsing||(o.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))},10),!i||this.options.animateHistoryBrowsing){var a=this.getAnimationPromises("in");Promise.all(a).then(function(){o.triggerEvent("animationInDone"),o.triggerEvent("transitionEnd",i),document.documentElement.className.split(" ").forEach(function(t){(new RegExp("^to-").test(t)||"is-changing"===t||"is-rendering"===t||"is-popstate"===t)&&document.documentElement.classList.remove(t)})})}else this.triggerEvent("transitionEnd",i);this.scrollToElement=null};exports.default=i;
},{"../utils":"iTFX","../helpers":"sTZz"}],"xhxC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,t){this._handlers[e].forEach(function(e){try{e(t)}catch(r){console.error(r)}});var r=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(r)};exports.default=e;
},{}],"HBjs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,s){this._handlers[e]?this._handlers[e].push(s):console.warn("Unsupported event "+e+".")};exports.default=e;
},{}],"gXrM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(e,n){var s=this;if(null!=e)if(null!=n)if(this._handlers[e]&&this._handlers[e].filter(function(e){return e===n}).length){var r=this._handlers[e].filter(function(e){return e===n})[0],t=this._handlers[e].indexOf(r);t>-1&&this._handlers[e].splice(t,1)}else console.warn("Handler for event '"+e+"' no found.");else this._handlers[e]=[];else Object.keys(this._handlers).forEach(function(e){s._handlers[e]=[]})};exports.default=e;
},{}],"L3vD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t,e,o){this.transition={from:t,to:e,custom:o}};exports.default=t;
},{}],"bPwH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../utils"),t=require("../helpers"),r=function(){var r=[];return(0,e.queryAll)(this.options.animationSelector).forEach(function(e){var n=new Promise(function(r){e.addEventListener((0,t.transitionEnd)(),function(t){e==t.target&&r()})});r.push(n)}),r};exports.default=r;
},{"../utils":"iTFX","../helpers":"sTZz"}],"slbu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../helpers"),r=function(r){var s=r.responseText,o=(0,e.getDataFromHtml)(s,this.options.containers);return o?(o.responseURL=r.responseURL?r.responseURL:window.location.href,o):(console.warn("Received page is invalid."),null)};exports.default=r;
},{"../helpers":"sTZz"}],"B3Dx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=exports.use=function(n){if(n.isSwupPlugin)return this.plugins.push(n),n.swup=this,"function"==typeof n._beforeMount&&n._beforeMount(),n.mount(),this.plugins;console.warn("Not swup plugin instance "+n+".")},t=exports.unuse=function(n){var t=void 0;if(t="string"==typeof n?this.plugins.find(function(t){return n===t.name}):n){t.unmount(),"function"==typeof t._afterUnmount&&t._afterUnmount();var u=this.plugins.indexOf(t);return this.plugins.splice(u,1),this.plugins}console.warn("No such plugin.")},u=exports.findPlugin=function(n){return this.plugins.find(function(t){return n===t.name})};
},{}],"bvn7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},t=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),n=require("delegate"),i=S(n),a=require("./modules/Cache"),s=S(a),r=require("./modules/loadPage"),o=S(r),l=require("./modules/renderPage"),u=S(l),d=require("./modules/triggerEvent"),c=S(d),h=require("./modules/on"),g=S(h),p=require("./modules/off"),f=S(p),m=require("./modules/updateTransition"),w=S(m),v=require("./modules/getAnimationPromises"),P=S(v),b=require("./modules/getPageData"),E=S(b),y=require("./modules/plugins"),k=require("./utils"),H=require("./helpers");function S(e){return e&&e.__esModule?e:{default:e}}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var L=function(){function n(t){q(this,n);var i={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',linkSelector:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',cache:!0,containers:["#swup"],requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},plugins:[],skipPopStateHandling:function(e){return!(e.state&&"swup"===e.state.source)}},a=e({},i,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],openPageInNewTab:[],pageLoaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],serverError:[],transitionStart:[],transitionEnd:[],willReplaceContent:[]},this.scrollToElement=null,this.preloadPromise=null,this.options=a,this.plugins=[],this.transition={},this.delegatedListeners={},this.boundPopStateHandler=this.popStateHandler.bind(this),this.cache=new s.default,this.cache.swup=this,this.loadPage=o.default,this.renderPage=u.default,this.triggerEvent=c.default,this.on=g.default,this.off=f.default,this.updateTransition=w.default,this.getAnimationPromises=P.default,this.getPageData=E.default,this.log=function(){},this.use=y.use,this.unuse=y.unuse,this.findPlugin=y.findPlugin,this.enable()}return t(n,[{key:"enable",value:function(){var e=this;if("undefined"!=typeof Promise){this.delegatedListeners.click=(0,i.default)(document,this.options.linkSelector,"click",this.linkClickHandler.bind(this)),window.addEventListener("popstate",this.boundPopStateHandler);var t=(0,H.getDataFromHtml)(document.documentElement.outerHTML,this.options.containers);t.url=t.responseURL=(0,H.getCurrentUrl)(),this.options.cache&&this.cache.cacheUrl(t),(0,H.markSwupElements)(document.documentElement,this.options.containers),this.options.plugins.forEach(function(t){e.use(t)}),window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),this.triggerEvent("pageView")}else console.warn("Promise is not supported")}},{key:"destroy",value:function(){var e=this;this.delegatedListeners.click.destroy(),window.removeEventListener("popstate",this.boundPopStateHandler),this.cache.empty(),this.options.plugins.forEach(function(t){e.unuse(t)}),(0,k.queryAll)("[data-swup]").forEach(function(e){e.removeAttribute("data-swup")}),this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)this.triggerEvent("openPageInNewTab",e);else if(0===e.button){this.triggerEvent("clickLink",e),e.preventDefault();var t=new H.Link(e.delegateTarget);if(t.getAddress()==(0,H.getCurrentUrl)()||""==t.getAddress()){if(""!=t.getHash())this.triggerEvent("samePageWithHash",e),null!=document.querySelector(t.getHash())?history.replaceState({url:t.getAddress()+t.getHash(),random:Math.random(),source:"swup"},document.title,t.getAddress()+t.getHash()):console.warn("Element for offset not found ("+t.getHash()+")");else this.triggerEvent("samePage",e)}else{""!=t.getHash()&&(this.scrollToElement=t.getHash());var n=e.delegateTarget.getAttribute("data-swup-transition");this.loadPage({url:t.getAddress(),customTransition:n},!1)}}}},{key:"popStateHandler",value:function(e){if(!this.options.skipPopStateHandling(e)){var t=new H.Link(e.state?e.state.url:window.location.pathname);""!==t.getHash()?this.scrollToElement=t.getHash():e.preventDefault(),this.triggerEvent("popState",e),this.loadPage({url:t.getAddress()},e)}}}]),n}();exports.default=L;
},{"delegate":"oMd0","./modules/Cache":"NOx8","./modules/loadPage":"NaI7","./modules/renderPage":"VXn3","./modules/triggerEvent":"xhxC","./modules/on":"HBjs","./modules/off":"gXrM","./modules/updateTransition":"L3vD","./modules/getAnimationPromises":"bPwH","./modules/getPageData":"slbu","./modules/plugins":"B3Dx","./utils":"iTFX","./helpers":"sTZz"}],"L4bL":[function(require,module,exports) {
"use strict";require("splitting/dist/splitting.css"),require("splitting/dist/splitting-cells.css");var t=i(require("splitting")),e=i(require("swup"));function i(t){return t&&t.__esModule?t:{default:t}}(0,t.default)({whitespace:!0});var s=new e.default;
},{"splitting/dist/splitting.css":"mAzE","splitting/dist/splitting-cells.css":"mAzE","splitting":"Ko7r","swup":"bvn7"}]},{},["L4bL"], null)
//# sourceMappingURL=/script.afca98c7.js.map