parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var c=document.querySelector(".message-start"),i=document.querySelector(".message-win"),u=document.querySelector(".message-lose"),s=document.querySelector(".game-score"),f=document.querySelector(".button"),l=document.querySelectorAll(".field-row"),d=4,m=0,v=y();function y(){return[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}function h(){var e=Math.floor(Math.random()*d),r=Math.floor(Math.random()*d);0===v[e][r]?v[e][r]=Math.random()>.1?2:4:h()}function p(){for(var e=0;e<d;e++)for(var r=0;r<d;r++){var t=l[e].children[r],n=v[e][r];t.innerText=n||"",t.className=n?"field-cell field-cell--".concat(n):"field-cell",2048===n&&(document.removeEventListener("keydown",E),i.classList.remove("hidden"))}s.innerText=m,b()}function b(){for(var r=!0,t=w(e(v)),n=v.some(function(e){return e.includes(0)}),o=0;o<d;o++)for(var a=0;a<d-1;a++)v[o][a]!==v[o][a+1]&&t[o][a]!==t[o][a+1]||(r=!1);r&&!n&&(document.removeEventListener("keydown",E),u.classList.remove("hidden"))}function w(e){return e.map(function(r,t){return e.map(function(e){return e[t]})})}function g(e){for(var r=0;r<e.length-1;r++)e[r]===e[r+1]&&(e[r]*=2,e.splice(r+1,1),m+=e[r]);for(;e.length<d;)e.push(0);return e}function A(e){return e.filter(function(e){return 0!==e})}function S(){for(var e=0;e<d;e++){var r=A(v[e]);g(r),v[e]=r}}function L(){for(var e=0;e<d;e++){var r=A(v[e].reverse());g(r),v[e]=r.reverse()}}function k(){v=w(v),S(),v=w(v)}function q(){v=w(v),L(),v=w(v)}function M(){h(),p()}function E(e){switch(e.key){case"ArrowLeft":S(),M();break;case"ArrowRight":L(),M();break;case"ArrowUp":k(),M();break;case"ArrowDown":q(),M()}}f.addEventListener("click",function(){document.addEventListener("keydown",E),i.classList.add("hidden"),u.classList.add("hidden"),"Start"===f.innerText?(f.innerText="Restart",f.classList.replace("start","restart"),c.hidden=!0):(v=y(),m=0),h(),M()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e4cc61fa.js.map