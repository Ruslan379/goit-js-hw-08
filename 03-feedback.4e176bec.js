function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,a,i,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n)}function S(e){return c=e,f=setTimeout(j,t),l?y(e):i}function x(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=a}function j(){var e=g();if(x(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?m(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&r?y(e):(r=o=void 0,i)}function T(){var e=g(),n=x(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),i}return t=b(t)||0,p(n)&&(l=!!n.leading,a=(s="maxWait"in n)?d(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},T.flush=function(){return void 0===f?i:O(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form  input"),textarea:document.querySelector(".feedback-form  textarea")};y.form.addEventListener("submit",e(t)((function(e){if(e.preventDefault(),""===y.email.value||""===y.textarea.value)return alert("Все поля должны быть заполнены!");console.log(S),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}
//!++++++++++++++++++++++++++++++++++++++++
),500)),y.email.addEventListener("input",(function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}
//!++++++++++++++++++++++++++++++++++++++++
)),y.textarea.addEventListener("input",(function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}));let S={};localStorage.getItem("feedback-form-state")&&(S=JSON.parse(localStorage.getItem("feedback-form-state")),S.email&&(y.email.value=S.email),S.message&&(y.textarea.value=S.message));
//# sourceMappingURL=03-feedback.4e176bec.js.map
