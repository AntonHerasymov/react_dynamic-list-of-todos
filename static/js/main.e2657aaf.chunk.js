(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a,s=c(10),n=c.n(s),l=c(2),o=c(1),i=(c(17),c(18),c(3)),d=c.n(i),r=c(0),j=function(e){var t=e.todo,c=e.activeTodoId,a=e.onSetActiveTodo,s=t.id,n=t.completed,l=t.title,o=c===s;return Object(r.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":o}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:s}),Object(r.jsx)("td",{className:"is-vcentered",children:n&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-danger":!n,"has-text-success":n}),children:l})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(s)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:d()({"far fa-eye":!o,"far fa-eye-slash":o})})})})})]})},u=function(e){var t=e.todos,c=e.activeTodoId,a=e.onSetActiveTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(j,{todo:e,activeTodoId:c,onSetActiveTodo:a},e.id)}))})]})},b=c(11),h=c.n(b),O=c(12);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));var m=function(e){var t=e.query,c=e.onChangeQuery,s=e.onChangeType,n=Object(o.useState)(""),i=Object(l.a)(n,2),d=i[0],j=i[1],u=Object(o.useCallback)(h()(c,500),[]);return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsx)("select",{"data-cy":"statusSelect",onChange:function(e){return s(e.target.value)},children:Object.values(a).map((function(e){return Object(r.jsx)("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e)}))})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:d,onChange:function(e){e.preventDefault(),j(e.target.value),u(e.target.value.trim().toLowerCase())}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){j(""),c("")}})})]})]})};function f(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(31);var x=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},v=function(e){var t=e.todo,c=e.onCloseModal,a=t.id,s=t.title,n=t.completed,i=Object(o.useState)(),j=Object(l.a)(i,2),u=j[0],b=j[1],h=Object(o.useState)(!1),O=Object(l.a)(h,2),m=O[0],v=O[1];return Object(o.useEffect)((function(){var e;v(!0),(e=t.userId,f("/users/".concat(e))).then((function(e){b(e)})).catch((function(e){console.error(e)})).finally((function(){return v(!1)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),m?Object(r.jsx)(x,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(r.jsx)("button",{type:"button",className:"delete",onClick:c,"data-cy":"modal-close"})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:s}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:d()({"has-text-danger":!n,"has-text-success":n}),children:n?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===u||void 0===u?void 0:u.email),children:null===u||void 0===u?void 0:u.name})]})]})]})]})},p=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(o.useState)([]),i=Object(l.a)(n,2),d=i[0],j=i[1],b=Object(o.useState)(null),h=Object(l.a)(b,2),p=h[0],N=h[1],y=Object(o.useState)(a.All),g=Object(l.a)(y,2),C=g[0],k=g[1],S=Object(o.useState)(""),T=Object(l.a)(S,2),A=T[0],w=T[1],I=Object(o.useState)(!1),E=Object(l.a)(I,2),_=E[0],L=E[1];Object(o.useEffect)((function(){L(!0),f("/todos").then(s).catch((function(e){console.log(e)})).finally((function(){return L(!1)}))}),[]),Object(o.useEffect)((function(){var e=function(e,t,c){var s=Object(O.a)(e);switch(t){case a.All:break;case a.Active:s=s.filter((function(e){return!e.completed}));break;case a.Completed:s=s.filter((function(e){return e.completed}))}return c&&(s=s.filter((function(e){return e.title.toLowerCase().includes(c)}))),s}(c,C,A);j(e)}),[A,C,c]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(m,{onChangeQuery:w,onChangeType:k,query:A})}),Object(r.jsx)("div",{className:"block",children:_?Object(r.jsx)(x,{}):Object(r.jsx)(u,{todos:d,activeTodoId:null===p||void 0===p?void 0:p.id,onSetActiveTodo:function(e){if(null!==c){var t=c.find((function(t){return t.id===e}))||null;N(t)}}})})]})})}),p&&Object(r.jsx)(v,{todo:p,onCloseModal:function(){N(null)}})]})};n.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e2657aaf.chunk.js.map