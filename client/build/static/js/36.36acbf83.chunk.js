(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[36],{111:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(119);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(s){o=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},119:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(120);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},120:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},970:function(t,e,r){"use strict";r.r(e);var n=r(12),o=r.n(n),a=r(15),c=r(33),i=r(111),s=r(0),u=r(45),l=r(43),f=(r(67),r(21)),d=r(2);e.default=function(t){var e=t.history,r=Object(s.useState)("ridwananik57@gmail.com"),n=Object(i.a)(r,2),b=n[0],h=n[1],m=Object(f.c)((function(t){return Object(c.a)({},t)})).user;Object(s.useEffect)((function(){m&&m.token&&e.push("/")}),[m]);var O=Object(s.useState)(!1),p=Object(i.a)(O,2),j=p[0],v=p[1],E=function(){var t=Object(a.a)(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),e.preventDefault(),r={url:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API:"http://localhost:8000/api",REACT_APP_FORGOT_PASSWORD_REDIRECT:"http://localhost:3000/login",REACT_APP_REGISTER_REDIRECT_URL:"http://localhost:3000/register/complete"}).REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,handleCodeInApp:!0},t.next=5,u.a.sendPasswordResetEmail(b,r).then((function(){v(!1),h(""),l.b.success("Email Sent")})).catch((function(t){v(!1),console.log("error:",t),l.b.error(t.message)}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"container p-5",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-md-6 offset-md-3",children:[j?Object(d.jsx)("h4",{className:"text-danger",children:"Loading... "}):Object(d.jsx)("h4",{children:"Forgot Password"}),Object(d.jsxs)("form",{onSubmit:E,children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"email",className:"form-control",value:b,onChange:function(t){return h(t.target.value)},placeholder:"Enter your email",autoFocus:!0})}),Object(d.jsx)("button",{disabled:!b||j,type:"submit",className:"btn btn-raised",children:"Confirm Email"})]})]})})})}}}]);
//# sourceMappingURL=36.36acbf83.chunk.js.map