!function e(t,r,n){function o(i,u){if(!r[i]){if(!t[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+i+"'")}var c=r[i]={exports:{}};t[i][0].call(c.exports,(function(e){var r=t[i][1][e];return o(r||e)}),c,c.exports,e,t,r,n)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){"use strict";t.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},{}],2:[function(e,t,r){"use strict";t.exports=function(e){if(Array.isArray(e))return e}},{}],3:[function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var u=e[a](i),l=u.value}catch(e){return void r(e)}u.done?t(l):Promise.resolve(l).then(n,o)}t.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function u(e){n(i,o,a,u,l,"next",e)}function l(e){n(i,o,a,u,l,"throw",e)}u(void 0)}))}}},{}],4:[function(e,t,r){"use strict";t.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],5:[function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},{}],6:[function(e,t,r){"use strict";t.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},{}],7:[function(e,t,r){"use strict";t.exports=function(e){return e&&e.__esModule?e:{default:e}}},{}],8:[function(e,t,r){"use strict";t.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}},{}],9:[function(e,t,r){"use strict";t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},{}],10:[function(e,t,r){"use strict";var n=e("./arrayWithHoles"),o=e("./iterableToArrayLimit"),a=e("./unsupportedIterableToArray"),i=e("./nonIterableRest");t.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()}},{"./arrayWithHoles":2,"./iterableToArrayLimit":8,"./nonIterableRest":9,"./unsupportedIterableToArray":11}],11:[function(e,t,r){"use strict";var n=e("./arrayLikeToArray");t.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},{"./arrayLikeToArray":1}],12:[function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=w(i,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var s={};function f(){}function d(){}function h(){}var p={};p[o]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(C([])));v&&v!==t&&r.call(v,o)&&(p=v);var y=h.prototype=f.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,u){var l=c(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,u)}),(function(e){n("throw",e,i,u)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,u)}))}u(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(undefined===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=undefined,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=undefined),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=undefined,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:undefined,done:!0}}return d.prototype=y.constructor=h,h.constructor=d,d.displayName=u(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,u(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(g.prototype),g.prototype[a]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new g(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),u(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=undefined)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=undefined),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=undefined),s}},e}("object"==typeof t?t.exports:{});try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},{}],13:[function(e,t,r){"use strict";t.exports=e("regenerator-runtime")},{"regenerator-runtime":12}],14:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e("@babel/runtime/helpers/slicedToArray")),a=n(e("@babel/runtime/helpers/classCallCheck")),i=n(e("@babel/runtime/helpers/createClass")),u=n(e("./Storage"));function l(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=function(){function e(t){(0,a.default)(this,e),this.fleetTable=t.getElementsByClassName("layout listing btnlisting tbllisting1")}return(0,i.default)(e,[{key:"markSelectedTargets",value:function(){if(!this.fleetTable)return!1;var e,t=this.fleetTable[0].getElementsByTagName("tbody"),r=l((0,o.default)(t,1)[0].getElementsByTagName("tr"));try{for(r.s();!(e=r.n()).done;){var n=e.value;if("listing-header"!==n.className){var a=this.getId(n),i=u.default.getItem(a);i&&(n.style.backgroundColor=i)}}}catch(e){r.e(e)}finally{r.f()}return!0}},{key:"getId",value:function(e){var t=e.firstChild.firstChild.href.split("=");return(0,o.default)(t,2)[1]}}]),e}();r.default=s},{"./Storage":17,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/slicedToArray":10}],15:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e("@babel/runtime/regenerator")),a=n(e("@babel/runtime/helpers/asyncToGenerator")),i=n(e("@babel/runtime/helpers/classCallCheck")),u=n(e("@babel/runtime/helpers/createClass")),l=n(e("./Popup")),c=n(e("./Storage"));function s(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(){function e(t){var r=this;(0,i.default)(this,e),this.fleetsRoot=t,this.popup=new l.default,this.popup.getElement().addEventListener("color-picked",(function(e){r.updateRow(e)})),this.popup.init()}var t,r,n;return(0,u.default)(e,[{key:"getFleetRows",value:function(){return this.fleetsRoot.getElementsByClassName("layout listing btnlisting tbllisting1 sorttable")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")}},{key:"createTableColumn",value:(n=(0,a.default)(o.default.mark((function e(t){var r,n,i,u,l,c,s=this;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,n=this.getId(t),e.next=4,this.getItem(n);case 4:return i=e.sent,u=i?"x":"+",r.style.backgroundColor=i||"",l=document.createElement("td"),c=document.createTextNode(u),l.className="action-text",l.appendChild(c),l.addEventListener("click",function(){var e=(0,a.default)(o.default.mark((function e(t){var r;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.parentElement,e.next=3,s.getItem(n);case 3:if(!e.sent){e.next=9;break}return s.removeItem(n),r.style.backgroundColor="",r.lastChild.innerText="+",s.updateActiveElement(void 0),e.abrupt("return",!0);case 9:return s.popup.show(t.pageX-150,t.pageY),s.updateActiveElement(r),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",l);case 13:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"sort",value:(r=(0,a.default)(o.default.mark((function e(){var t,r,n,a,i=this;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.getFleetRows(),r=s(t);try{for(a=function(){var e=n.value;i.createTableColumn(e).then((function(t){e.appendChild(t)}))},r.s();!(n=r.n()).done;)a()}catch(e){r.e(e)}finally{r.f()}case 3:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"getId",value:function(e){return e.firstChild.firstChild.href.split("=")[1]}},{key:"setItem",value:function(e,t){c.default.setItem(e,t)}},{key:"removeItem",value:function(e){c.default.removeItem(e)}},{key:"getItem",value:(t=(0,a.default)(o.default.mark((function e(t){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.default.getItem(t));case 1:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"updateActiveElement",value:function(e){this.activeElement=e}},{key:"updateRow",value:function(e){this.activeElement.style.backgroundColor=e.detail.color;var t=this.getId(this.activeElement);this.setItem(t,e.detail.color),this.popup.hide(),this.activeElement.lastChild.innerText="x",this.activeElement=void 0}},{key:"showClearFleet",value:function(){var e=document.getElementById("link_fleet_move_here").parentElement,t=document.createElement("span"),r=document.createTextNode("Click to clear ALL marked fleets");t.addEventListener("click",(0,a.default)(o.default.mark((function e(){return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.default.clearAllItems();case 2:location.reload();case 3:case"end":return e.stop()}}),e)})))),t.className="action-text ml-5",t.appendChild(r),e.appendChild(t)}}]),e}();r.default=d},{"./Popup":16,"./Storage":17,"@babel/runtime/helpers/asyncToGenerator":3,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/regenerator":13}],16:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e("@babel/runtime/helpers/classCallCheck")),a=n(e("@babel/runtime/helpers/createClass")),i=function(){function e(){(0,o.default)(this,e),this.div=document.createElement("div"),this.div.className="popup",this.div.id="colors"}return(0,a.default)(e,[{key:"init",value:function(){var e=this.createColorPallete();this.div.appendChild(e),this.div.appendChild(this.createCancelButton()),document.body.appendChild(this.div)}},{key:"createColorPallete",value:function(){var e=document.createElement("div");e.className="flex";for(var t=function(){var t=n[r],o=document.createElement("div");o.style="background-color:".concat(t),o.className="color-option",o.addEventListener("click",(function(){o.dispatchEvent(new CustomEvent("color-picked",{bubbles:!0,detail:{color:t}}))})),e.appendChild(o)},r=0,n=["blue","black","white","red","orange"];r<n.length;r++)t();return e}},{key:"createCancelButton",value:function(){var e=this,t=document.createElement("span"),r=document.createTextNode("x");return t.addEventListener("click",(function(){e.hide()})),t.className="action-text",t.appendChild(r),t}},{key:"getElement",value:function(){return this.div}},{key:"show",value:function(e,t){var r=this.getElement();r.style.top="".concat(t,"px"),r.style.left="".concat(e,"px"),r.style.display="block"}},{key:"hide",value:function(){this.getElement().style.display="none"}}]),e}();r.default=i},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":7}],17:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e("@babel/runtime/helpers/slicedToArray")),a=n(e("@babel/runtime/helpers/defineProperty")),i=n(e("@babel/runtime/regenerator")),u=n(e("@babel/runtime/helpers/asyncToGenerator")),l={getPrefix:function(){return"fleet-"},setPrefix:function(e){return this.getPrefix()+e},getItem:function(e){var t=this;return(0,u.default)(i.default.mark((function r(){var n;return i.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.setPrefix(e),r.abrupt("return",browser.storage.local.get(n).then((function(e){return!!e[n]&&e[n]})));case 2:case"end":return r.stop()}}),r)})))()},removeItem:function(e){browser.storage.local.remove(this.setPrefix(e))},setItem:function(e,t){var r=this.setPrefix(e);browser.storage.local.set((0,a.default)({},r,t))},clearAllItems:function(){var e=this;return(0,u.default)(i.default.mark((function t(){return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:browser.storage.local.get().then((function(t){for(var r=0,n=Object.entries(t);r<n.length;r++){var a=(0,o.default)(n[r],1)[0];a.includes(e.getPrefix())&&browser.storage.local.remove(a)}}));case 1:case"end":return t.stop()}}),t)})))()}};r.default=l},{"@babel/runtime/helpers/asyncToGenerator":3,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/slicedToArray":10,"@babel/runtime/regenerator":13}],18:[function(e,t,r){"use strict";var n=e("@babel/runtime/helpers/interopRequireDefault"),o=n(e("./Landing")),a=n(e("./Attack"));browser.storage.local.get("isEnabled").then((function(e){if(e.isEnabled){var t=document.getElementById("map_fleets"),r=document.getElementById("fleets_attack-list");if(t){var n=new o.default(t);n.sort(),n.showClearFleet()}if(r)new a.default(r).markSelectedTargets()}}))},{"./Attack":14,"./Landing":15,"@babel/runtime/helpers/interopRequireDefault":7}]},{},[18]);