!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){t.exports=n(5)},function(t,e){function n(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var u=t.apply(e,r);function a(t){n(u,o,i,a,c,"next",t)}function c(t){n(u,o,i,a,c,"throw",t)}a(void 0)})}}},function(t,e){t.exports=OSjs},function(t){t.exports={a:"HTMLViewer"}},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(6),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"==typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{(l=e.regeneratorRuntime=s?t.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},y={};y[u]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(P([])));g&&g!==r&&o.call(g,u)&&(y=g);var b=k.prototype=j.prototype=Object.create(y);L.prototype=b.constructor=k,k.constructor=L,k[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},E(N.prototype),N.prototype[a]=function(){return this},l.AsyncIterator=N,l.async=function(t,e,n,r){var o=new N(w(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(b),b[c]="Generator",b[u]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return r("end");if(u.tryLoc<=this.prev){var c=o.call(u,"catchLoc"),s=o.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return r(u.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return r(u.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof j?e:j,i=Object.create(o.prototype),u=new T(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return R()}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var a=_(u,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?d:h,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,u),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function j(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function N(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,u){var a=x(t[n],t,r);if("throw"!==a.type){var c=a.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,u)},function(t){e("throw",t,i,u)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,u)})}u(a.arg)}(n,r,e,i)})}return e=e?e.then(i,i):i()}}function _(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:R}}function R(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),u=n.n(i),a=n(2),c=n.n(a),s=n(3);function l(t,e){for(var n=[],r=[],o=arguments.length;o-- >2;)n.push(arguments[o]);for(;n.length;){var i=n.pop();if(i&&i.pop)for(o=i.length;o--;)n.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"==typeof t?t(e||{},r):{nodeName:t,attributes:e||{},children:r,key:e&&e.key}}function f(t,e,n,r){var o,i=[].map,u=r&&r.children[0]||null,a=u&&function t(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:i.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:t(e)})}}(u),c=[],s=!0,l=v(t),f=function t(e,n,r){for(var o in r)"function"==typeof r[o]?function(t,o){r[t]=function(t){var i=o(t);return"function"==typeof i&&(i=i(m(e,l),r)),i&&i!==(n=m(e,l))&&!i.then&&d(l=y(e,v(n,i),l)),i}}(o,r[o]):t(e.concat(o),n[o]=v(n[o]),r[o]=v(r[o]));return r}([],l,v(e));return d(),f;function h(t){return"function"==typeof t?h(t(l,f)):null!=t?t:""}function p(){o=!o;var t=h(n);for(r&&!o&&(u=function t(e,n,r,o,i){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=function t(e,n){var r="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName);var o=e.attributes;if(o){o.oncreate&&c.push(function(){o.oncreate(r)});for(var i=0;i<e.children.length;i++)r.appendChild(t(e.children[i]=h(e.children[i]),n));for(var u in o)w(r,u,o[u],null,n)}return r}(o,i);e.insertBefore(u,n),null!=r&&x(e,n,r),n=u}else if(null==r.nodeName)n.nodeValue=o;else{!function(t,e,n,r){for(var o in v(e,n))n[o]!==("value"===o||"checked"===o?t[o]:e[o])&&w(t,o,n[o],e[o],r);var i=s?n.oncreate:n.onupdate;i&&c.push(function(){i(t,e)})}(n,r.attributes,o.attributes,i=i||"svg"===o.nodeName);for(var a={},l={},f=[],p=r.children,d=o.children,y=0;y<p.length;y++){f[y]=n.childNodes[y];var m=g(p[y]);null!=m&&(a[m]=[f[y],p[y]])}for(var y=0,b=0;b<d.length;){var m=g(p[y]),j=g(d[b]=h(d[b]));if(l[m])y++;else if(null==j||j!==g(p[y+1]))if(null==j||s)null==m&&(t(n,f[y],p[y],d[b],i),b++),y++;else{var L=a[j]||[];m===j?(t(n,L[0],L[1],d[b],i),y++):L[0]?t(n,n.insertBefore(L[0],f[y]),L[1],d[b],i):t(n,f[y],null,d[b],i),l[j]=d[b],b++}else null==m&&x(n,f[y],p[y]),y++}for(;y<p.length;)null==g(p[y])&&x(n,f[y],p[y]),y++;for(var y in a)l[y]||x(n,a[y][0],a[y][1])}return n}(r,u,a,a=t)),s=!1;c.length;)c.pop()()}function d(){o||(o=!0,setTimeout(p))}function v(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n}function y(t,e,n){var r={};return t.length?(r[t[0]]=t.length>1?y(t.slice(1),e,n[t[0]]):e,v(n,r)):e}function m(t,e){for(var n=0;n<t.length;)e=e[t[n++]];return e}function g(t){return t?t.key:null}function b(t){return t.currentTarget.events[t.type](t)}function w(t,e,n,r,o){if("key"===e);else if("style"===e)if("string"==typeof n)t.style.cssText=n;else for(var i in"string"==typeof r&&(r=t.style.cssText=""),v(r,n)){var u=null==n||null==n[i]?"":n[i];"-"===i[0]?t.style.setProperty(i,u):t.style[i]=u}else"o"===e[0]&&"n"===e[1]?(e=e.slice(2),t.events?r||(r=t.events[e]):t.events={},t.events[e]=n,n?r||t.addEventListener(e,b):t.removeEventListener(e,b)):e in t&&"list"!==e&&"type"!==e&&"draggable"!==e&&"spellcheck"!==e&&"translate"!==e&&!o?t[e]=null==n?"":n:null!=n&&!1!==n&&t.setAttribute(e,n),null!=n&&!1!==n||t.removeAttribute(e)}function x(t,e,n){function r(){t.removeChild(function t(e,n){var r=n.attributes;if(r){for(var o=0;o<n.children.length;o++)t(e.childNodes[o],n.children[o]);r.ondestroy&&r.ondestroy(e)}return e}(e,n))}var o=n.attributes&&n.attributes.onremove;o?o(e,r):r()}}var h=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}};var p=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)};var d=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};var v=function(t){return h(t)||p(t)||d()};function y(t,e){for(var n=[],r=[],o=arguments.length;2<o--;)n.push(arguments[o]);for(;n.length;){var i=n.pop();if(i&&i.pop)for(o=i.length;o--;)n.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"==typeof t?t(e||{},r):{nodeName:t,attributes:e||{},children:r,key:e&&e.key}}function m(t,e,n,r){function o(t){return"function"==typeof t?o(t(j,L)):null==t?"":t}function i(){y=!y;var t=o(n);for(r&&!y&&(g=function t(e,n,r,i,u){if(i===r);else if(null==r||r.nodeName!==i.nodeName){var a=p(i,u);e.insertBefore(a,n),null!=r&&v(e,n,r),n=a}else if(null==r.nodeName)n.nodeValue=i;else{d(n,r.attributes,i.attributes,u=u||"svg"===i.nodeName);for(var c={},s={},f=[],h=r.children,y=i.children,m=0;m<h.length;m++){f[m]=n.childNodes[m];var g=l(h[m]);null!=g&&(c[g]=[f[m],h[m]])}for(var m=0,b=0;b<y.length;){var g=l(h[m]),w=l(y[b]=o(y[b]));if(s[g])m++;else if(null==w||w!==l(h[m+1]))if(null==w||x)null==g&&(t(n,f[m],h[m],y[b],u),b++),m++;else{var j=c[w]||[];g===w?(t(n,j[0],j[1],y[b],u),m++):j[0]?t(n,n.insertBefore(j[0],f[m]),j[1],y[b],u):t(n,f[m],null,y[b],u),s[w]=y[b],b++}else null==g&&v(n,f[m],h[m]),m++}for(;m<h.length;)null==l(h[m])&&v(n,f[m],h[m]),m++;for(var m in c)s[m]||v(n,c[m][0],c[m][1])}return n}(r,g,b,b=t)),x=!1;w.length;)w.pop()()}function u(){y||(y=!0,setTimeout(i))}function a(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n}function c(t,e,n){var r={};return t.length?(r[t[0]]=1<t.length?c(t.slice(1),e,n[t[0]]):e,a(n,r)):e}function s(t,e){for(var n=0;n<t.length;)e=e[t[n++]];return e}function l(t){return t?t.key:null}function f(t){return t.currentTarget.events[t.type](t)}function h(t,e,n,r,o){if("key"===e);else if("style"!==e)"o"===e[0]&&"n"===e[1]?(e=e.slice(2),t.events?!r&&(r=t.events[e]):t.events={},t.events[e]=n,n?!r&&t.addEventListener(e,f):t.removeEventListener(e,f)):e in t&&"list"!==e&&"type"!==e&&"draggable"!==e&&"spellcheck"!==e&&"translate"!==e&&!o?t[e]=null==n?"":n:null!=n&&!1!==n&&t.setAttribute(e,n),(null==n||!1===n)&&t.removeAttribute(e);else if("string"==typeof n)t.style.cssText=n;else for(var i in"string"==typeof r&&(r=t.style.cssText=""),a(r,n)){var u=null==n||null==n[i]?"":n[i];"-"===i[0]?t.style.setProperty(i,u):t.style[i]=u}}function p(t,e){var n="string"==typeof t||"number"==typeof t?document.createTextNode(t):(e=e||"svg"===t.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):document.createElement(t.nodeName),r=t.attributes;if(r){r.oncreate&&w.push(function(){r.oncreate(n)});for(var i=0;i<t.children.length;i++)n.appendChild(p(t.children[i]=o(t.children[i]),e));for(var u in r)h(n,u,r[u],null,e)}return n}function d(t,e,n,r){for(var o in a(e,n))n[o]!==("value"==o||"checked"==o?t[o]:e[o])&&h(t,o,n[o],e[o],r);var i=x?n.oncreate:n.onupdate;i&&w.push(function(){i(t,e)})}function v(t,e,n){function r(){t.removeChild(function t(e,n){var r=n.attributes;if(r){for(var o=0;o<n.children.length;o++)t(e.childNodes[o],n.children[o]);r.ondestroy&&r.ondestroy(e)}return e}(e,n))}var o=n.attributes&&n.attributes.onremove;o?o(e,r):r()}var y,m=[].map,g=r&&r.children[0]||null,b=g&&function t(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:m.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:t(e)})}}(g),w=[],x=!0,j=a(t),L=function t(e,n,r){for(var o in r)"function"==typeof r[o]?function(t,o){r[t]=function(t){var i=o(t);return"function"==typeof i&&(i=i(s(e,j),r)),i&&i!==(n=s(e,j))&&!i.then&&u(j=c(e,a(n,i),j)),i}}(o,r[o]):t(e.concat(o),n[o]=a(n[o]),r[o]=a(r[o]));return r}([],j,a(e));return u(),L}var g=function(t,e){return"number"==typeof t?"".concat(t,"px"):!1===t?e:t},b={grow:function(t){return{flexGrow:t}},shrink:function(t){return{flexShrink:t}},basis:function(t){return{flexBasis:g(t,"auto")}},align:function(t){return{alignItems:t}},justify:function(t){return{justifyContent:t}},padding:function(t){return{margin:g(t,"0")}},margin:function(t){return{margin:g(t,"0")}}},w=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=t.class instanceof Array?t.class:[t.class],r=["osjs-gui"].concat(v(n));t.orientation&&r.push("osjs-gui-"+t.orientation);var o="string"==typeof t.style?{}:Object.assign({},t.style||{}),i=Object.keys(t).reduce(function(e,n){var r=b[n]?b[n](t[n]):void 0;return Object.assign({},e,r)},o);return y("div",{oncreate:t.oncreate,ondestroy:t.ondestroy,class:r.filter(function(t){return!!t}).join(" "),style:i},e)},x=function(t,e){return y(w,Object.assign({orientation:"horizontal"},t,{class:["osjs-gui-box",t.class]}),e)};function j(t,e){return t(e={exports:{}},e.exports),e.exports}var L=j(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(r){return t.exports=n="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},n(r)}t.exports=n}),k=function(t){var e=t&&"object"===L(t)?t.src:t;return y("i",{"data-icon":t&&"object"===L(t)?t.name:void 0,class:"osjs-icon",style:{backgroundImage:"string"==typeof t?"url(".concat(e,")"):void 0}})};var E=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},N=function(t,e){return Object.keys(t).filter(function(t){return-1===e.indexOf(t)}).reduce(function(e,n){return Object.assign(E({},n,t[n]),e)},{})},_=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:250,n=!1;return function(r,o){return t=clearTimeout(t),t=setTimeout(function(){return n=!1},e),n?(r.preventDefault(),o(r)):(n=!0,!1)}},O=function(t){return y("div",{id:"osjs-context-menu",className:"osjs-gui osjs-gui-menu",oncreate:t.oncreate,onupdate:t.onupdate,style:{display:!1===t.visible?"none":"block",top:t.position?t.position.top+"px":0,left:t.position?t.position.left+"px":0}},function t(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,o=function(t){var e=[];return"checkbox"===t.type||"boolean"==typeof t.checked?e.push(y("span",{class:"osjs-gui-menu-checkbox "+(t.checked?"active":"")})):t.icon&&e.push(y(k,t.icon)),e.push(y("span",{},t.label)),e},i=function(e,n){if("function"==typeof n.element)return n.element();var i=[y("span",{class:"separator"===n.type?"osjs-gui-menu-separator":"osjs-gui-menu-label "+(n.disabled?"osjs__disabled":"")},o(n))];return n.items&&i.push(t(e,n.items,r+1)),i};return y("ul",{class:""},n.map(function(t){return y("li",{class:"osjs-gui-menu-entry"},[y("div",{class:"osjs-gui-menu-container","data-has-image":!!t.icon||void 0,"data-has-children":!!t.items||void 0,onmouseover:t.items?e.onshow:void 0,ontouchend:t.items?e.onshow:void 0,onclick:function(n){t.items||(t.onclick&&t.onclick(t,n),e.onclick&&e.onclick(t,n,t))}},i(e,t))])}))}(t,t.menu))};function S(t,e,n,r){return e._$r=function(){return{}},function(o,i){return y(r||"x-",{key:o.key,id:o.id,class:o.class,oncreate:function(r){var u=m(t,e,function(t,e){var o=n(t,e);return"function"==typeof o&&(o=o(r._$p,r._$c)),o},r);r._$p=o,r._$c=i,r._$r=u._$r,r._$u=u.uninit,u.init&&u.init(o),o.oncreate&&o.oncreate(r)},onupdate:function(t){t._$p=o,t._$c=i,t._$r(),o.onupdate&&o.onupdate(t)},ondestroy:function(t){t._$u&&t._$u()},onremove:function(t,e){return o.onremove?void o.onremove(t,e):e()}})}}var T=function(t,e,n,r){var o=Array(Math.ceil(n.length/2)).fill(null).map(function(){return y("div",{class:"osjs-gui-panes-spacer",onmousedown:function(t){return function(t,e,n){var r=t.target,o=t.clientX,i=t.clientY,u=r.previousSibling,a=u.offsetWidth,c=u.offsetHeight,s=Array.from(r.parentNode.children).indexOf(u),l=.8*u.parentNode.offsetWidth,f=.8*u.parentNode.offsetHeight;if(!(0>s)){var h=function(t){var r=Math.min;t.preventDefault();var u="vertical"===n?a:c;if("vertical"===n){var h=t.clientX-o;u=r(l,u+h)}else{var p=t.clientY-i;u=r(f,u+p)}e.setSize({index:s,size:u})};t.preventDefault(),document.addEventListener("mousemove",h),document.addEventListener("mouseup",function t(e){e.preventDefault(),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",t)})}}(t,e,r)}})});return n.map(function(e,n){var r=t.sizes[n]?t.sizes[n]+"px":void 0;return y("div",{class:"osjs-gui-panes-pane",style:{flex:r?"0 0 ".concat(r):r}},e)}).map(function(t,e){return[t,o[e]]}).reduce(function(t,e){return t.concat(e)}).filter(function(t){return void 0!==t})},P=(S({sizes:[]},{init:function(t){return{sizes:t.sizes||[150]}},setSize:function(t){var e=t.index,n=t.size;return function(t){var r=[].concat(t.sizes);return r[e]=n,{sizes:r}}}},function(t,e){return function(n,r){var o=n.orientation||"vertical";return y(w,{orientation:o,class:"osjs-gui-panes-inner"},T(t,e,r,o))}},"div"),_(),_(),function(t,e,n){var r=t.labels,o=t.onchange,i=t.oncontextmenu;return(r||[]).map(function(t,r){return y("div",{class:e.selectedIndex===r?"osjs__active":"",oncontextmenu:function(e){(i||function(){})(e,r,t)},onclick:function(e){n.setSelectedIndex(r),(o||function(){})(e,r,t)}},y("span",{},t))})}),R=function(t,e){return e.map(function(e,n){return y("div",{class:t.selectedIndex===n?"osjs__active":""},e)})},I=(S({selectedIndex:0},{init:function(t){return{selectedIndex:t.selectedIndex||0}},setSelectedIndex:function(t){return function(){return{selectedIndex:t}}}},function(t,e){return function(n,r){return y("div",{class:"osjs-gui-tabs-wrapper"},[y("div",{class:"osjs-gui-tabs-header"},P(n,t,e)),y("div",{class:"osjs-gui-tabs-panes"},R(t,r))])}},"div"),function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];return y(w,Object.assign({},t.box||{},{class:["osjs-gui-iframe",t.class]}),[y("iframe",Object.assign({frameborder:0},N(t,["box"])))].concat(v(e)))}),A=(S({active:!0},{init:function(t){return{ative:!1!==t.active}},ontoggle:function(t){var e=t.ev,n=t.active;return(t.ontoggle||function(){})(e,n),{active:n}}},function(t,e){return function(n,r){return y(w,Object.assign({},n.box||{},{class:["osjs-gui-expander-wrapper"]}),[y("div",{class:"osjs-gui-expander-header",onclick:function(r){return e.ontoggle({ev:r,active:!t.active,ontoggle:n.ontoggle})}},[y("div",{class:"osjs-gui-expander-header-icon","data-active":t.active+""}),y("div",{class:"osjs-gui-expander-header-label"},n.label)]),y("div",{class:"osjs-gui-expander-content",style:{display:!1===t.active?"none":void 0}},r)])}},"div"),j(function(t){!function(e){function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,u=Object.create(i.prototype),a=new p(r||[]);return u._invoke=s(t,n,a),u}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function u(){}function a(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(n,o,i,u){var a=r(t[n],t,o);if("throw"!==a.type){var c=a.arg,s=c.value;return s&&"object"==typeof s&&m.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,u)},function(t){e("throw",t,i,u)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,u)})}u(a.arg)}var n;this._invoke=function(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}}function s(t,e,n){var o="suspendedStart";return function(i,u){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===i)throw u;return{value:void 0,done:!0}}for(n.method=i,n.arg=u;;){var a=n.delegate;if(a){var c=l(a,n);if(c){if(c===L)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=r(t,e,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===L)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}function l(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,l(t,e),"throw"===e.method))return L;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return L}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,L;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,L):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,L)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function d(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(m.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:void 0,done:!0}}var y=Object.prototype,m=y.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},b=g.iterator||"@@iterator",w=g.asyncIterator||"@@asyncIterator",x=g.toStringTag||"@@toStringTag",j=e.regeneratorRuntime;if(j)t.exports=j;else{(j=e.regeneratorRuntime=t.exports).wrap=n;var L={},k={};k[b]=function(){return this};var E=Object.getPrototypeOf,N=E&&E(E(d([])));N&&N!==y&&m.call(N,b)&&(k=N);var _=u.prototype=o.prototype=Object.create(k);i.prototype=_.constructor=u,u.constructor=i,u[x]=i.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,!(x in t)&&(t[x]="GeneratorFunction")),t.prototype=Object.create(_),t},j.awrap=function(t){return{__await:t}},a(c.prototype),c.prototype[w]=function(){return this},j.AsyncIterator=c,j.async=function(t,e,r,o){var i=new c(n(t,e,r,o));return j.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},a(_),_[x]="Generator",_[b]=function(){return this},_.toString=function(){return"[object Generator]"},j.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},j.values=d,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=m.call(o,"catchLoc"),a=m.call(o,"finallyLoc");if(u&&a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n,r=this.tryEntries.length-1;0<=r;--r)if((n=this.tryEntries[r]).tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,L):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),L},finish:function(t){for(var e,n=this.tryEntries.length-1;0<=n;--n)if((e=this.tryEntries[n]).finallyLoc===t)return this.complete(e.completion,e.afterLoc),h(e),L},catch:function(t){for(var e,n=this.tryEntries.length-1;0<=n;--n)if((e=this.tryEntries[n]).tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;h(e)}return o}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:d(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),L}}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())})),$=function(){return this||"object"==typeof self&&self}()||Function("return this")(),G=$.regeneratorRuntime&&0<=Object.getOwnPropertyNames($).indexOf("regeneratorRuntime"),F=G&&$.regeneratorRuntime;$.regeneratorRuntime=void 0;var z=A;if(G)$.regeneratorRuntime=F;else try{delete $.regeneratorRuntime}catch(t){$.regeneratorRuntime=void 0}var C=z;function W(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}var B=function(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){function i(t){W(a,r,o,i,u,"next",t)}function u(t){W(a,r,o,i,u,"throw",t)}var a=t.apply(e,n);i(void 0)})}};var H=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function M(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}var Y=function(t,e,n){return e&&M(t.prototype,e),n&&M(t,n),t},V=function(t){return t(),setTimeout(t,100)},D=function(){function t(e){H(this,t),this.core=e,this.callback=function(){},this.actions=null}return Y(t,[{key:"destroy",value:function(){this.callback=null,this.actions=null}},{key:"init",value:function(){var t,e=this;this.actions=m({visible:!1,menu:[],position:{top:0,left:0}},{clamp:function(n){return function(r){if(n=n||document.querySelector("#osjs-context-menu"),clearTimeout(t),n){var o=function(t,e,n){var r={},o=n.top+e.offsetHeight,i=n.left+e.offsetWidth,u=t.offsetHeight-n.top,a=t.offsetWidth-n.left,c=i>t.offsetWidth,s=o>t.offsetHeight;return s&&(r.top=t.offsetHeight-e.offsetHeight-u),c&&(r.left=t.offsetWidth-e.offsetWidth-a),s||c?r:null}(e.core.$root,n,r.position);if(o)return{position:o}}return{}}},onshow:function(n){return function(){t=V(function(){return function(t,e){var n=e.target.querySelector("ul");n&&(n.classList.contains("osjs-gui-menu-container")&&(n=n.parentNode.parentNode),n&&n.offsetParent)&&(n.classList.remove("clamp-right"),n.getBoundingClientRect().right>t.offsetWidth&&n.classList.add("clamp-right"))}(e.core.$root,n)})}},show:function(t){return function(n,r){var o=t.menu,i=t.position;if(i instanceof Event)i={left:i.clientX,top:i.clientY};else if(i instanceof Element){var u=i.getBoundingClientRect();i={left:u.left,top:u.top+u.height}}return e.callback=function(n,r,o){t.callback&&t.callback(n,r),!1!==o.closeable&&e.actions.hide()},V(function(){return r.clamp()}),{visible:!0,menu:o||[],position:i||{top:0,left:0}}}},hide:function(){return function(){return e.callback=null,{visible:!1}}}},function(t){return function(e,n){return y(O,{position:e.position,visible:e.visible,menu:e.menu,onclick:t,onshow:n.onshow})}}(function(){!e.core.destroyed&&e.callback&&e.callback.apply(e,arguments)}),this.core.$root)}},{key:"show",value:function(){var t;return this.actions?(t=this.actions).show.apply(t,arguments):null}},{key:"hide",value:function(){var t;return this.actions?(t=this.actions).hide.apply(t,arguments):null}}]),t}(),X=function(t){var e=t.target,n="TEXTAREA"===e.tagName;return n||"INPUT"!==e.tagName||(n=-1!==["text","password","number","email"].indexOf(e.type)),n},q=(function(){function t(e){H(this,t),this.core=e,this.contextmenu=new D(e)}Y(t,[{key:"destroy",value:function(){var t=document.getElementById("osjs-context-menu");t&&t.remove(),this.contextmenu.destroy()}},{key:"init",value:function(){var t=B(C.mark(function t(){var e,n=this;return C.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e={show:function(){var t;return(t=n.contextmenu).show.apply(t,arguments)},hide:function(){var t;return(t=n.contextmenu).hide.apply(t,arguments)}},this.core.instance("osjs/contextmenu",function(){return arguments.length?e.show.apply(e,arguments):e}),this.core.$root.addEventListener("contextmenu",function(t){X(t)||(t.stopPropagation(),t.preventDefault())});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"start",value:function(){var t=this;this.core.$root.addEventListener("click",function(e){!document.getElementById("osjs-context-menu").contains(e.target)&&t.contextmenu&&t.contextmenu.hide()},!0),this.contextmenu.init()}}])}(),function(){var t=u()(o.a.mark(function t(e,n,r,i,u){var a,c;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.make("osjs/vfs").url(u.path);case 2:a=t.sent,c=Object.assign({},u,{url:a}),u.mime.match(/^text\/html?/)&&i.setSource(c.url),r.setTitle("".concat(n.metadata.title.en_EN," - ").concat(u.filename)),n.args.file=u;case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,i){return t.apply(this,arguments)}}());
/*!
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */c.a.register(s.a,function(t,e,n,r){var o=t.make("osjs/locale").translatableFlat(r.title),i=t.make("osjs/application",{args:e,options:n,metadata:r});return i.createWindow({id:"HTMLViewerWindow",title:o,icon:i.resource(r.icon),dimension:{width:400,height:400}}).on("destroy",function(){return i.destroy()}).on("render",function(t){return t.focus()}).render(function(n,o){var u=f({src:null},{setSource:function(t){return function(e){return{src:t}}}},function(t,e){return l(x,{},[l(I,{box:{grow:1},src:t.src})])},n);e.file&&q(t,i,o,u,e.file),o.on("drop",function(e,n){n.isFile&&n.mime&&(r.mimes.find(function(t){return new RegExp(t).test(n.mime)})&&q(t,i,o,u,n))})}),i})}]);
//# sourceMappingURL=main.js.map