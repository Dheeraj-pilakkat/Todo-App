(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(8),s=n.n(i),o=n(10),r=n(3),l=n(4),d=n(24),j=n(21),u=n(22),b=n(23),f=n(2);var x=function(){var e=Object(c.useState)(localStorage.getItem("Todo")?JSON.parse(localStorage.getItem("Todo")):[]),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(l.a)(i,2),x=s[0],m=s[1],O=Object(c.useState)(!0),p=Object(l.a)(O,2),h=p[0],v=p[1],N=Object(c.useState)(null),g=Object(l.a)(N,2),w=g[0],S=g[1],y=function(e){if(x)if(x&&!h)a(n.map((function(e){return e.id===w?Object(r.a)(Object(r.a)({},e),{},{name:x}):e}))),m(""),v(!0),S(null);else{var t={id:(new Date).getTime().toString(),name:x};a([].concat(Object(o.a)(n),[t])),console.log(n)}else window.alert("Please enter what to do")};return Object(c.useEffect)((function(){localStorage.setItem("Todo",JSON.stringify(n))}),[n]),Object(f.jsx)("div",{className:"todo container-fluid",children:Object(f.jsxs)("div",{className:"py-5 container-fluid",children:[Object(f.jsxs)("div",{className:"container div1 rounded-3 p-1",children:[Object(f.jsxs)("h1",{className:"h1 text-center text-white-50 p-3 rounded-3",children:[Object(f.jsx)(j.a,{}),"Todo App"]}),Object(f.jsxs)("div",{className:"div2 d-flex justify-content-between mx-4 my-2",children:[Object(f.jsx)("input",{type:"text",placeholder:"Enter what to do...",className:"input1 rounded-3 bg-transparent text-white-50 w-50",value:x,onChange:function(e){return m(e.target.value)}}),Object(f.jsxs)("div",{className:"d-flex justify-content-between btn1",children:[h?Object(f.jsx)(d.a,{className:"rounded-3 me-2 px-2",onClick:function(){return y()},children:"Add"}):Object(f.jsx)(d.a,{className:"rounded-3 me-2 px-2",onClick:function(){return y()},children:"Edit"}),Object(f.jsx)(d.a,{className:"rounded-3 px-2",onClick:function(){a([])},children:"Delete All"})]})]})]}),Object(f.jsx)("div",{className:"container text-left p-0",children:n.map((function(e,t){return Object(f.jsx)("div",{className:"div1 mt-5 px-4 rounded d-flex justify-content-between",children:Object(f.jsxs)("h3",{className:"mb-1 p-1 ",children:[Object(f.jsxs)("b",{className:"position-absolute bold",children:[t,", ",e.name]}),Object(f.jsxs)("div",{className:" position-relative right",children:[Object(f.jsx)(u.a,{className:" text-left flex-0 ",onClick:function(){return function(e){var t=n.find((function(t){return t.id===e}));v(!1),m(t.name),S(e)}(e.id)}}),Object(f.jsx)(b.a,{className:" text-left  ",onClick:function(){return function(e){var t=n.filter((function(t){return e!==t.id}));a(t)}(e.id)}})]})]},e.id)})}))})]})})};n(17),n(18);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.07de6a0b.chunk.js.map