var b=function(r){return y(r)&&!s(r)};function y(e){return!!e&&typeof e=="object"}function s(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||m(e)}var o=typeof Symbol=="function"&&Symbol.for,O=o?Symbol.for("react.element"):60103;function m(e){return e.$$typeof===O}function j(e){return Array.isArray(e)?[]:{}}function u(e,r){return r.clone!==!1&&r.isMergeableObject(e)?a(j(e),e,r):e}function g(e,r,n){return e.concat(r).map(function(c){return u(c,n)})}function M(e,r){if(!r.customMerge)return a;var n=r.customMerge(e);return typeof n=="function"?n:a}function A(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return Object.propertyIsEnumerable.call(e,r)}):[]}function f(e){return Object.keys(e).concat(A(e))}function l(e,r){try{return r in e}catch{return!1}}function E(e,r){return l(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))}function p(e,r,n){var c={};return n.isMergeableObject(e)&&f(e).forEach(function(t){c[t]=u(e[t],n)}),f(r).forEach(function(t){E(e,t)||(l(e,t)&&n.isMergeableObject(r[t])?c[t]=M(t,n)(e[t],r[t],n):c[t]=u(r[t],n))}),c}function a(e,r,n){n=n||{},n.arrayMerge=n.arrayMerge||g,n.isMergeableObject=n.isMergeableObject||b,n.cloneUnlessOtherwiseSpecified=u;var c=Array.isArray(r),t=Array.isArray(e),i=c===t;return i?c?n.arrayMerge(e,r,n):p(e,r,n):u(r,n)}a.all=function(r,n){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(c,t){return a(c,t,n)},{})};var S=a,d=S;export{d as c};
