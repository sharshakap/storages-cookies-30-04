(this["webpackJsonpstorages-cookies"]=this["webpackJsonpstorages-cookies"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(4),a=n.n(r),i=n(3),s=n(0),l=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),l=a[0],b=a[1],u=function(t,e){e(t.target.value)},m=function(){return""===l||""===n},d=function(t){var e=n.trim(),c=l.trim();t!==document.cookie?!t.getItem(e)&&t.setItem(e,c):document.cookie="".concat(e,"=").concat(c,";max-age=30;")},j=function(t){if(t===document.cookie)return alert(document.cookie),void console.log(document.cookie.split(";").reduce((function(t,e){var n=(e=e.trim()).indexOf("="),c=e.substring(0,n),o=e.slice(n+1);return o&&c&&(t[c]=o),t}),{}));alert(t.getItem(n.trim()))},g=function(t){var e=n.trim(),c=l.trim();t!==document.cookie?t.getItem(e)&&t.setItem(e,c):document.cookie="".concat(e,"=").concat(c,";max-age=30;")},x=function(t){var e=n.trim(),c=l.trim();t!==document.cookie?t.removeItem(e):document.cookie="".concat(e,"=").concat(c,";max-age=-1;")},k=function(t){t!==document.cookie?t.clear():document.cookie.split(";").map((function(t){return document.cookie="".concat(t.trim(),";max-age=-1;")}))};return Object(s.jsx)("div",{className:"d-flex flex-column mw-25",children:Object(s.jsxs)("div",{className:"ml-3",children:[Object(s.jsxs)("form",{className:"w-25 d-flex flex-column mt-3",children:[Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{className:"ml-3",htmlFor:"key",children:"Identificador (Key)"}),Object(s.jsx)("input",{id:"key",type:"text",value:n,onChange:function(t){return u(t,o)}})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{className:"ml-3",htmlFor:"value",children:"Valor (Value)"}),Object(s.jsx)("input",{id:"value",type:"text",value:l,onChange:function(t){return u(t,b)}})]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{className:"",children:"Session Storage"}),Object(s.jsx)("button",{type:"button",disabled:m(),className:"btn btn-primary mt-1 btn-lg mr-1",onClick:function(){return d(sessionStorage)},children:"Crear"}),Object(s.jsx)("button",{type:"button",className:"btn btn-secondary mt-1 btn-lg mr-1",onClick:function(){return j(sessionStorage)},children:"Mostrar"}),Object(s.jsx)("button",{type:"button",disabled:m(),className:"btn btn-success mt-1 btn-lg mr-1",onClick:function(){return g(sessionStorage)},children:"Actualizar"}),Object(s.jsx)("button",{type:"button",className:"btn btn-danger mt-1 btn-lg mr-1",onClick:function(){return x(sessionStorage)},children:"Eliminar"}),Object(s.jsx)("button",{type:"button",className:"btn btn-dark mt-1 btn-lg mr-1",onClick:function(){return k(sessionStorage)},children:"Vaciar"}),Object(s.jsx)("h2",{className:"mt-5",children:"Local Storage"}),Object(s.jsx)("button",{type:"button",disabled:m(),className:"btn btn-primary mt-1 btn-lg mr-1",onClick:function(){return d(localStorage)},children:"Crear"}),Object(s.jsx)("button",{type:"button",className:"btn btn-secondary mt-1 btn-lg mr-1",onClick:function(){return j(localStorage)},children:"Mostrar"}),Object(s.jsx)("button",{type:"button",disabled:m(),className:"btn btn-success mt-1 btn-lg mr-1",onClick:function(){return g(localStorage)},children:"Actualizar"}),Object(s.jsx)("button",{type:"button",className:"btn btn-danger mt-1 btn-lg mr-1",onClick:function(){return x(localStorage)},children:"Eliminar"}),Object(s.jsx)("button",{type:"button",className:"btn btn-dark mt-1 btn-lg mr-1",onClick:function(){return k(localStorage)},children:"Vaciar"}),Object(s.jsx)("h2",{className:"mt-5",children:"Cookies"}),Object(s.jsx)("button",{type:"button",disabled:m(),className:"btn btn-primary mt-1 btn-lg mr-1",onClick:function(){return d(document.cookie)},children:"A\xf1adir/Actualizar"}),Object(s.jsx)("button",{type:"button",className:"btn btn-secondary mt-1 btn-lg mr-1",onClick:function(){return j(document.cookie)},children:"Mostrar Cookies"}),Object(s.jsx)("button",{type:"button",className:"btn btn-danger mt-1 btn-lg mr-1",onClick:function(){return x(document.cookie)},children:"Eliminar"}),Object(s.jsx)("button",{type:"button",className:"btn btn-dark mt-1 btn-lg mr-1",onClick:function(){return k(document.cookie)},children:"Vaciar"})]})]})})},b=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(l,{})})};n(10);a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.666306e5.chunk.js.map