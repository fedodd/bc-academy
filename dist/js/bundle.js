!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(3)},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var o=["popupCut"];(0,r.default)(".button.is__cut",o,["formCut"]),(0,r.default)("PopupCloseCut",o);var u=["popupEnroll"];(0,r.default)(".button.is__enroll",u,["formEnroll"]),(0,r.default)("PopupCloseEnroll",u),$(document).ready(function(){$(".banner-sliders").slick({dots:!0,arrows:!1,infinite:!0,autoplay:!0,pauseOnHover:!1,pauseOnDotsHover:!0,speed:500,autoplaySpeed:5e3,dotsClass:"slider-dots"})}),$(document).ready(function(){$(".program-slider").slick({dots:!0,customPaging:function(e,t){$(e.$slides[t]).data();return"<a>"+(t+1)+"</a>"},arrows:!1,infinite:!0,autoplay:!0,pauseOnHover:!1,pauseOnDotsHover:!0,speed:500,autoplaySpeed:5e3,dotsClass:"program-dots"})}),$(document).ready(function(){$(".teacher-slider").slick({arrows:!0,dots:!1,infinite:!0,autoplay:!0,pauseOnHover:!1,pauseOnDotsHover:!0,speed:500,autoplaySpeed:5e3,nextArrow:'<button type="button" class="slick-next teacher-next"></button>',prevArrow:'<button type="button" class="slick-prev teacher-prev"></button>'})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(document.querySelectorAll(e))).map(function(e){return e.addEventListener("click",function(e){e.stopPropagation(),t.map(function(e){return document.getElementById(e).classList.toggle("is__active")})})}),document.addEventListener("click",function(){t.map(function(e){return document.getElementById(e).classList.remove("is__active")})}),n&&n.forEach(function(e){document.getElementById(e).addEventListener("click",function(e){return e.stopPropagation()})})}},function(e,t){}]);
//# sourceMappingURL=bundle.js.map