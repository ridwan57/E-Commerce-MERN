(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[26],{128:function(e,t,n){"use strict";t.a=n.p+"static/media/laptop.db0a6ff4.png"},154:function(e,t,n){"use strict";n.d(t,"k",(function(){return u})),n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"j",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return y})),n.d(t,"i",(function(){return v}));var r=n(12),a=n.n(r),c=n(15),o=n(23),s=n.n(o),u=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("http://localhost:8000/api","/user/cart"),{cart:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("http://localhost:8000/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("".concat("http://localhost:8000/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("http://localhost:8000/api","/user/address"),{address:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("http://localhost:8000/api","/user/cart/coupon"),{coupon:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("http://localhost:8000/api","/user/order"),{stripeResponse:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("http://localhost:8000/api","/user/cash-order"),{COD:n,couponApplied:r},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("http://localhost:8000/api","/user/orders"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("".concat("http://localhost:8000/api","/user/wishlist"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat("http://localhost:8000/api","/user/wishlist"),{productId:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("".concat("http://localhost:8000/api","/user/wishlist/").concat(t),{},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},290:function(e,t,n){"use strict";var r=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},c=n(41),o=function(e,t){return r.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="CheckOutlined";t.a=r.forwardRef(o)},509:function(e,t,n){!function(e,t){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function a(e,t){if(null==e)return{};var n,a,c=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function c(e,t){return o(e)||s(e,t)||u(e,t)||l()}function o(e){if(Array.isArray(e))return e}function s(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(u){a=!0,c=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw c}}return n}}function u(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function d(){}function h(){}h.resetWarningCache=d;var m=function(){function e(e,t,n,r,a,c){if(c!==f){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:h,resetWarningCache:d};return n.PropTypes=n,n},b=p((function(e){e.exports=m()})),y=function(e){return null!==e&&"object"===n(e)},v=function(e){return y(e)&&"function"===typeof e.then},j=function(e){return y(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},O="[object Object]",g=function e(t,n){if(!y(t)||!y(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var a=Object.prototype.toString.call(t)===O;if(a!==(Object.prototype.toString.call(n)===O))return!1;if(!a&&!r)return!1;var c=Object.keys(t),o=Object.keys(n);if(c.length!==o.length)return!1;for(var s={},u=0;u<c.length;u+=1)s[c[u]]=!0;for(var i=0;i<o.length;i+=1)s[o[i]]=!0;var l=Object.keys(s);if(l.length!==c.length)return!1;var p=t,f=n,d=function(t){return e(p[t],f[t])};return l.every(d)},x=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},E="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",w=function(e){if(null===e||j(e))return e;throw new Error(E)},S=function(e){if(v(e))return{tag:"async",stripePromise:Promise.resolve(e).then(w)};var t=w(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},k=t.createContext(null);k.displayName="ElementsContext";var C=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},_=function(e){var n=e.stripe,r=e.options,a=e.children,o=t.useRef(!1),s=t.useRef(!0),u=t.useMemo((function(){return S(n)}),[n]),i=c(t.useState((function(){return{stripe:null,elements:null}})),2),l=i[0],p=i[1],f=x(n),d=x(r);return null!==f&&(f!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),g(r,d)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),o.current||("sync"===u.tag&&(o.current=!0,p({stripe:u.stripe,elements:u.stripe.elements(r)})),"async"===u.tag&&(o.current=!0,u.stripePromise.then((function(e){e&&s.current&&p({stripe:e,elements:e.elements(r)})})))),t.useEffect((function(){return function(){s.current=!1}}),[]),t.useEffect((function(){var e=l.stripe;e&&e._registerWrapper&&e._registerWrapper({name:"react-stripe-js",version:"1.4.0"})}),[l.stripe]),t.createElement(k.Provider,{value:l},a)};_.propTypes={stripe:b.any,options:b.object};var P=function(e){var n=t.useContext(k);return C(n,e)},R=function(){return P("calls useElements()").elements},T=function(){return P("calls useStripe()").stripe},A=function(e){return(0,e.children)(P("mounts <ElementsConsumer>"))};A.propTypes={children:b.func.isRequired};var N=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},I=function(e){return y(e)?(e.paymentRequest,a(e,["paymentRequest"])):{}},B=function(){},F=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},D=function(e,n){var r="".concat(F(e),"Element"),a=n?function(e){P("mounts <".concat(r,">"));var n=e.id,a=e.className;return t.createElement("div",{id:n,className:a})}:function(n){var a=n.id,c=n.className,o=n.options,s=void 0===o?{}:o,u=n.onBlur,i=void 0===u?B:u,l=n.onFocus,p=void 0===l?B:l,f=n.onReady,d=void 0===f?B:f,h=n.onChange,m=void 0===h?B:h,b=n.onEscape,y=void 0===b?B:b,v=n.onClick,j=void 0===v?B:v,O=P("mounts <".concat(r,">")).elements,x=t.useRef(null),E=t.useRef(null),w=N(d),S=N(i),k=N(p),C=N(j),_=N(m),R=N(y);t.useLayoutEffect((function(){if(null==x.current&&O&&null!=E.current){var t=O.create(e,s);x.current=t,t.mount(E.current),t.on("ready",(function(){return w(t)})),t.on("change",_),t.on("blur",S),t.on("focus",k),t.on("escape",R),t.on("click",C)}}));var T=t.useRef(s);return t.useEffect((function(){T.current&&T.current.paymentRequest!==s.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=I(s);0===Object.keys(e).length||g(e,I(T.current))||x.current&&(x.current.update(e),T.current=s)}),[s]),t.useLayoutEffect((function(){return function(){x.current&&x.current.destroy()}}),[]),t.createElement("div",{id:a,className:c,ref:E})};return a.propTypes={id:b.string,className:b.string,onChange:b.func,onBlur:b.func,onFocus:b.func,onReady:b.func,onClick:b.func,options:b.object},a.displayName=r,a.__elementType=e,a},W="undefined"===typeof window,L=D("auBankAccount",W),q=D("card",W),M=D("cardNumber",W),U=D("cardExpiry",W),z=D("cardCvc",W),K=D("fpxBank",W),Y=D("iban",W),H=D("idealBank",W),V=D("p24Bank",W),J=D("epsBank",W),$=D("paymentRequestButton",W),G=D("afterpayClearpayMessage",W);e.AfterpayClearpayMessageElement=G,e.AuBankAccountElement=L,e.CardCvcElement=z,e.CardElement=q,e.CardExpiryElement=U,e.CardNumberElement=M,e.Elements=_,e.ElementsConsumer=A,e.EpsBankElement=J,e.FpxBankElement=K,e.IbanElement=Y,e.IdealBankElement=H,e.P24BankElement=V,e.PaymentRequestButtonElement=$,e.useElements=R,e.useStripe=T,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(0))},960:function(e,t,n){},967:function(e,t,n){"use strict";var r=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"}}]},name:"dollar",theme:"outlined"},c=n(41),o=function(e,t){return r.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="DollarOutlined";t.a=r.forwardRef(o)},993:function(e,t,n){"use strict";n.r(t);var r=n(0),a="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,o="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",s=null,u=function(e){return null!==s?s:s=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(o),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(a,'"]')),t=0;t<e.length;t++){var n=e[t];if(c.test(n.src))return n}return null}();r&&e?console.warn(o):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(a).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(s){return void n(s)}else t(null)}))},i=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.13.1",startTime:t})}(r,n),r},l=Promise.resolve().then((function(){return u(null)})),p=!1;l.catch((function(e){p||console.warn(e)}));var f=n(509),d=n(12),h=n.n(d),m=n(15),b=n(111),y=n(33),v=n(21),j=n(23),O=n.n(j),g=n(31),x=n(988),E=n(967),w=n(290),S=n(128),k=n(154),C=n(43),_=n(2),P=function(e){e.history;var t=Object(v.b)(),n=Object(v.c)((function(e){return Object(y.a)({},e)})),a=n.user,c=n.coupon,o=Object(r.useState)(!1),s=Object(b.a)(o,2),u=s[0],i=s[1],l=Object(r.useState)(null),p=Object(b.a)(l,2),d=p[0],j=p[1],P=Object(r.useState)(""),R=Object(b.a)(P,2),T=R[0],A=R[1],N=Object(r.useState)(!0),I=Object(b.a)(N,2),B=I[0],F=I[1],D=Object(r.useState)(""),W=Object(b.a)(D,2),L=W[0],q=W[1],M=Object(r.useState)(0),U=Object(b.a)(M,2),z=U[0],K=U[1],Y=Object(r.useState)(0),H=Object(b.a)(Y,2),V=H[0],J=H[1],$=Object(r.useState)(0),G=Object(b.a)($,2),Q=G[0],X=G[1],Z=Object(f.useStripe)(),ee=Object(f.useElements)();Object(r.useEffect)((function(){(function(e,t){return O.a.post("".concat("http://localhost:8000/api","/create-payment-intent"),{couponApplied:t},{headers:{authtoken:e}})})(a.token,c).then((function(e){console.log("create payment intent",e.data),q(e.data.clientSecret),K(e.data.cartTotal),J(e.data.totalAfterDiscount),X(e.data.payable)}))}),[]);var te=function(){var e=Object(m.a)(h.a.mark((function e(n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),A(!0),e.next=4,Z.confirmCardPayment(L,{payment_method:{card:ee.getElement(f.CardElement),billing_details:{name:n.target.name.value}}});case 4:(r=e.sent).error?(j("Payment failed ".concat(r.error.message)),A(!1)):(Object(k.d)(r,a.token).then((function(e){e.data.ok?("undefined"!==typeof window&&localStorage.removeItem("cart"),t({type:"ADD_TO_CART",payload:[]}),t({type:"COUPON_APPLIED",payload:!1}),Object(k.e)(a.token),C.b.success("Order Placed")):(console.log("Order Failed"),C.b.error("Order Failed"))})).catch((function(e){console.log(e),C.b.error("Order Failed")})),console.log(JSON.stringify(r,null,4)),j(null),A(!1),i(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F(t.empty),j(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)(_.Fragment,{children:[!u&&Object(_.jsx)("div",{children:c&&void 0!==V?Object(_.jsx)("p",{className:"alert alert-success",children:"Total after discount: $".concat(V)}):Object(_.jsx)("p",{className:"alert alert-danger",children:"No coupon applied"})}),Object(_.jsx)("div",{className:"text-center pb-5",children:Object(_.jsx)(x.a,{cover:Object(_.jsx)("img",{src:S.a,alt:S.a,style:{height:"200px",objectFit:"cover",marginBottom:"-50px"}}),actions:[Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(E.a,{className:"text-info"})," ",Object(_.jsx)("br",{})," Total: $",z]}),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(w.a,{className:"text-info"})," ",Object(_.jsx)("br",{})," Total payable : $",(Q/100).toFixed(2)]})]})}),Object(_.jsxs)("form",{id:"payment-form",className:"stripe-form",onSubmit:te,children:[Object(_.jsx)(f.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:ne}),Object(_.jsx)("button",{className:"stripe-button",disabled:T||B||u,children:Object(_.jsx)("span",{id:"button-text",children:T?Object(_.jsx)("div",{className:"spinner",id:"spinner"}):"Pay"})}),Object(_.jsx)("br",{}),d&&Object(_.jsx)("div",{className:"card-error",role:"alert",children:d}),Object(_.jsx)("br",{}),Object(_.jsxs)("p",{className:u?"result-message":"result-message hidden",children:["Payment Successful."," ",Object(_.jsx)(g.b,{to:"/user/history",children:"See it in your purchase history."})]})]})]})},R=(n(960),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];p=!0;var r=Date.now();return l.then((function(e){return i(e,t,r)}))}("pk_test_51IT5MNF65edSYYnPIWlhfyKWQd53gpXVeipWx7JZ3Yg9eeYioncz1kSLh8mKiBOrHzs6IfRcIKmJKgiwoMq9CKeO00TPxQffbS"));t.default=function(){return console.log("process.env.REACT_APP_STRIPE_KEY",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API:"http://localhost:8000/api",REACT_APP_FORGOT_PASSWORD_REDIRECT:"http://localhost:3000/login",REACT_APP_REGISTER_REDIRECT_URL:"http://localhost:3000/register/complete"}).REACT_APP_STRIPE_KEY),Object(_.jsxs)("div",{className:"container p-5 text-center",children:[Object(_.jsx)("h4",{children:"Complete your purchase"}),Object(_.jsx)(f.Elements,{stripe:R,children:Object(_.jsx)("div",{className:"col-md-8 offset-md-2",children:Object(_.jsx)(P,{})})})]})}}}]);
//# sourceMappingURL=26.d1c574a0.chunk.js.map