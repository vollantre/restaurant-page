!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=document.createElement("ul");c.setAttribute("class","tabs primary-nav");[{label:"home",renderContent:()=>{const e=document.createElement("div");e.id="home-content";const t=document.createElement("p");t.innerText="Are you Venezuelan and do you want to feel at home? come and delight yourself with our best dishes. Welcome to Pataconia restaurant, a restaurant that offers the tastiest Venezuelan🇻🇪 dishes in the city. Now with delivery!",e.appendChild(t),document.getElementById("content").appendChild(e)}},{label:"menu",renderContent:()=>{const e=document.createElement("div");e.id="menu-content";const t=document.createElement("div");t.id="menu-list",[{name:"patacon",price:"2$",filename:"patacones.jpg"},{name:"arepa",price:"0.5$",filename:"arepas.jpg"},{name:"cachapa",price:"2$",filename:"cachapa.jpg"},{name:"tequeños",price:"1$",filename:"tequenos.jpg"}].forEach(e=>{const n=document.createElement("img");n.src="../public/"+e.filename;const c=document.createElement("div");c.setAttribute("class","menu-item"),c.appendChild(n);const o=document.createElement("h3");o.innerText=e.name;const d=document.createElement("div"),r=document.createElement("p");r.setAttribute("class","price"),r.innerText=e.price,d.appendChild(o),d.appendChild(r),c.appendChild(d),t.appendChild(c)}),e.appendChild(t),document.getElementById("content").appendChild(e)}},{label:"contact",renderContent:()=>{const e=document.createElement("div");e.id="contact-content";const t=document.createElement("h2");t.innerText="Address";const n=document.createElement("p");n.innerText="You know where to find us.";const c=document.createElement("div");c.appendChild(t),c.appendChild(n);const o=document.createElement("h2");o.innerText="Phone";const d=document.createElement("p");d.innerText="+58 424 121212121";const r=document.createElement("div");r.appendChild(o),r.appendChild(d),e.appendChild(c),e.appendChild(r),document.getElementById("content").appendChild(e)}}].forEach(e=>{const t=document.createElement("li");t.setAttribute("class","tabs-item"),t.id=e.label+"-tab",t.addEventListener("click",()=>{const t=document.getElementById("content");t.innerHTML="";const n=document.createElement("h1");n.innerText=e.label,t.appendChild(n),e.renderContent()});const n=document.createElement("a");n.setAttribute("href","#"),n.setAttribute("class","tabs-link"),n.innerText=e.label,t.appendChild(n),c.appendChild(t)});const o=document.createElement("header");o.setAttribute("id","header");const d=document.createElement("img");d.src="../public/pataconia.png",d.style.height="200px",o.appendChild(d),document.body.insertBefore(o,document.body.childNodes[0]),document.body.insertBefore(c,document.body.childNodes[0]),document.getElementById("home-tab").dispatchEvent(new Event("click"))}]);