!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,i,a,f,u,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,u=setTimeout(O,t),d?p(e):f}function x(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=b();if(x(e))return T(e);u=setTimeout(O,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function T(e){return u=void 0,m&&r?p(e):(r=i=void 0,f)}function h(){var e=b(),n=x(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(s)return u=setTimeout(O,t),p(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},h.flush=function(){return void 0===u?f:T(b())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form  input"),textarea:document.querySelector(".feedback-form  textarea")};j.form.addEventListener("submit",e(t)((function(e){if(e.preventDefault(),""===j.email.value||""===j.textarea.value)return alert("Все поля должны быть заполнены!");console.log(x),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}
//!++++++++++++++++++++++++++++++++++++++++
),500)),j.email.addEventListener("input",(function(e){x[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(x))}
//!++++++++++++++++++++++++++++++++++++++++
)),j.textarea.addEventListener("input",(function(e){x[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(x))}));var x={};localStorage.getItem("feedback-form-state")&&((x=JSON.parse(localStorage.getItem("feedback-form-state"))).email&&(j.email.value=x.email),x.message&&(j.textarea.value=x.message))}();
//# sourceMappingURL=03-feedback.6ca0978e.js.map
