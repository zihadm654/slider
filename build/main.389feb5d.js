parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=document.querySelectorAll(".slide"),t=document.querySelector(".slider"),c=document.querySelector(".next"),n=document.querySelector(".prev"),i=document.querySelector(".dots"),d=e[0].clientWidth,a=e.length,l=0,r=function(){e.forEach(function(e,t){e.style.left=100*t+"%"}),e[0].classList.add("active")};r();var o=function(){for(var t=function(e){var t=document.createElement("div");t.classList.add("dot"),i.appendChild(t),t.addEventListener("click",function(){s(e)})},c=0;c<e.length;c++)t(c);i.children[0].classList.add("active")};function s(e){t.style.transform="translateX(-"+d*e+"px)",l=e,u()}function u(){document.querySelector(".slide.active").classList.remove("active"),e[l].classList.add("active"),document.querySelector(".dot.active").classList.remove("active"),i.children[l].classList.add("active")}o(),c.addEventListener("click",function(){s(l>=a-1?0:++l)}),n.addEventListener("click",function(){s(l<=0?a-1:--l)});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.389feb5d.js.map