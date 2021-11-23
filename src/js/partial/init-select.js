!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.NativejsSelect=t():e.NativejsSelect=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),o=n(6),i=function(){function e(e){this.handleDocumentClick=function(e){e.target.closest(".nativejs-select")||Array.from(document.querySelectorAll(".nativejs-select")).forEach((function(e){return e.classList.remove("nativejs-select_active")}))},this.handleToggleOpenSelect=function(e){var t=e.currentTarget.closest(".nativejs-select"),n=t.querySelector(".nativejs-select__search-inp");Array.from(document.querySelectorAll(".nativejs-select")).forEach((function(e){e===t?e.classList.toggle("nativejs-select_active"):e.classList.remove("nativejs-select_active")})),t.classList.contains("nativejs-select_active")&&n&&n.focus()},this.handleSearch=function(e,t){return function(n){var r=t.querySelector(".nativejs-select__options"),o=n.target.value.trim().toLocaleLowerCase();Array.from(r.children).forEach((function(e){return e.parentNode.removeChild(e)})),o?Array.from(e).forEach((function(e){-1!==e.textContent.trim().toLocaleLowerCase().search(o)&&r.appendChild(e)})):Array.from(e).forEach((function(e){return r.appendChild(e)}))}},e.disableMobile&&r.isMobile.any()||(this.props=e,this.selects=document.querySelectorAll(this.props.selector),this.renderCustomSelect(),this.initHandlers())}return e.prototype.renderCustomSelect=function(){var e=this;this.selects.forEach((function(t){var n,r;(null===(r=null===(n=t.nextElementSibling)||void 0===n?void 0:n.classList)||void 0===r?void 0:r.contains("nativejs-select"))&&t.parentNode.removeChild(t.nextElementSibling),t.hidden=!0,t.insertAdjacentHTML("afterend",o.default(t,e.props))}))},e.prototype.initHandlers=function(){var e=this;document.addEventListener("click",this.handleDocumentClick),this.selects.forEach((function(t){var n=t.nextElementSibling,r=n.querySelector(".nativejs-select__placeholder"),o=n.querySelector(".nativejs-select__search-inp"),i=n.querySelectorAll(".nativejs-select__option");r.addEventListener("click",e.handleToggleOpenSelect),null==o||o.addEventListener("input",e.handleSearch(i,n)),i.forEach((function(n,r){return n.addEventListener("click",(function(n){e.handleChooseOption(n,t,i,r)}))}))}))},e.prototype.handleChooseOption=function(e,t,n,r){var o=e.currentTarget,i=o.closest(".nativejs-select"),c=i.querySelector(".nativejs-select__search-inp"),a=i.querySelector(".nativejs-select__options"),s=Array.from(i.querySelectorAll(".nativejs-select__option")),l=i.querySelector(".nativejs-select__placeholder-value");t.selectedIndex=r,s.forEach((function(e){return e.removeAttribute("data-selected")})),o.setAttribute("data-selected","true"),i.classList.remove("nativejs-select_active"),l.innerHTML=o.innerHTML,Array.from(a.children).forEach((function(e){return e.parentNode.removeChild(e)})),Array.from(n).forEach((function(e){return a.appendChild(e)})),c&&(c.value=""),t.dispatchEvent(new CustomEvent("change"))},e}();t.default=i},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};t.__esModule=!0,o(n(4),t),o(n(5),t)},function(e,t,n){n(3),e.exports=n(0)},function(e,t){"function"!=typeof NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),Array.from||(Array.from=function(){function e(e){return"function"==typeof e||"[object Function]"===n.call(e)}function t(e){var t,n=(t=Number(e),isNaN(t)?0:0!==t&&isFinite(t)?(0<t?1:-1)*Math.floor(Math.abs(t)):t);return Math.min(Math.max(n,0),r)}var n=Object.prototype.toString,r=Math.pow(2,53)-1;return function(n,r,o){var i=Object(n);if(null==n)throw new TypeError("Array.from requires an array-like object - not null or undefined");var c,a=1<arguments.length?r:void 0;if(void 0!==a){if(!e(a))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(c=o)}for(var s,l=t(i.length),u=e(this)?Object(new this(l)):new Array(l),f=0;f<l;)s=i[f],u[f]=a?void 0===c?a(s,f):a.call(c,s,f):s,f+=1;return u.length=l,u}}()),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),function(){if("function"==typeof window.CustomEvent)return!1;window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}}()},function(e,t,n){"use strict";t.__esModule=!0,t.isMobile=void 0,t.isMobile={Android:function(){return/Android/i.test(navigator.userAgent)},BlackBerry:function(){return/BlackBerry/i.test(navigator.userAgent)},iOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},Opera:function(){return/Opera Mini/i.test(navigator.userAgent)},Windows:function(){return/IEMobile/i.test(navigator.userAgent)||/WPDesktop/i.test(navigator.userAgent)},any:function(){return t.isMobile.Android()||t.isMobile.BlackBerry()||t.isMobile.iOS()||t.isMobile.Opera()||t.isMobile.Windows()}}},function(e,t,n){"use strict";t.__esModule=!0,t.getHtmlProps=void 0,t.getHtmlProps=function(e){var t={};return Array.from(e.attributes).filter((function(e){return-1!==e.name.indexOf("data-")})).forEach((function(e){var n=e.name.replace("data-","").split("-").map((function(e,t){return 0!==t?e.slice(0,1).toUpperCase()+e.slice(1):e})).join("");t[n]=e.value})),t}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};t.__esModule=!0;var o=n(1);t.default=function(e,t){var n=r(r({},t),o.getHtmlProps(e)),i=n.placeholder,c=n.fixedPlaceholder,a=n.renderOptions,s=n.enableSearch,l=Array.from(e.querySelectorAll("option")),u=l.filter((function(e){return e.selected}))[0];return'\n    <div class="nativejs-select">\n      <button type="button" class="nativejs-select__placeholder">\n        '+(c?'<span class="nativejs-select__placeholder-fixed">'+c+"</span>":"")+'\n        <div class="nativejs-select__placeholder-value">\n          '+(i||(a?a(u,u.index,l.length):u.innerHTML))+'\n        </div>\n      </button>\n\n      <div class="nativejs-select__dropdown">\n        '+(s?'\n          <div class="nativejs-select__search">\n            <input  type="text" class="nativejs-select__search-inp" />\n          </div>\n        ':"")+'\n        <div class="nativejs-select__options">\n          '+l.map((function(e,t){return'\n            <button type="button" data-selected="'+e.selected+'" class="nativejs-select__option">\n              '+(a?a(e,t,l.length):e.innerHTML)+"\n            </button>\n          "})).join("")+"\n        </div>\n      </div>\n    </div>\n  "}}]).default}));


// new NativejsSelect({
//     selector: '.customSelect',
// });