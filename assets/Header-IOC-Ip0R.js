import{r as l,j as s}from"./react-328yWDDP.js";import{N as a}from"./react-router-dom-zgtQiqLr.js";import{u}from"./react-use-cart-RfXZ2AJl.js";import{b as g,L as N,S as v,M as k,I as f,a as h,c as b,d as C,B as L,e as S}from"./react-icons-ppYESBDa.js";import R from"./Signout-s1LsKpkn.js";import{u as M,a as B,m as E}from"./framer-motion-KSOoU1u5.js";import"./@mapbox-P3eih9Ks.js";import"./react-dom-AjuaLGBG.js";import"./scheduler-iwWdm5Ml.js";import"./react-router-WP88t3CV.js";import"./@remix-run-qg_F8xzm.js";import"./@firebase-ZwAEdWQa.js";import"./idb-IQTssp_s.js";import"./tslib-uVCKAQsh.js";import"./firebase-7Ue_0VZr.js";import"./firebase-TwBQqvRO.js";const I=""+new URL("1-OaeyaLRf.png",import.meta.url).href,O=""+new URL("2-x_zXpq09.png",import.meta.url).href,G=({changeTheme:j,currentTheme:c})=>{const[o,n]=l.useState(!1),{scrollY:r}=M(),[p,d]=l.useState(!1),m=l.useRef(null),{totalItems:x}=u();l.useEffect(()=>{function i(t){m.current.contains(t.target)||n(!1)}return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)});const e=i=>{i.currentTarget.classList.toggle("active")};return B(r,"change",i=>{const t=r.getPrevious();i>t&&i>150?d(!0):d(!1)}),s.jsxs(E.div,{variants:{visible:{y:0},hidden:{y:"-100%"}},animate:p?"hidden":"visible",transition:{duration:.25,ease:"easeInOut"},className:"header",children:[s.jsxs("div",{className:"logo-section",children:[c==="light"?s.jsx("img",{src:I,alt:"logo",className:"logo-img"}):s.jsx("img",{src:O,alt:"logo",className:"logo-img"}),s.jsx("h1",{id:"logo",className:"logo",children:"Ur-Shop"})]}),s.jsx("div",{className:"navbar",ref:m,children:s.jsxs("ul",{className:`links ${o?"links-active":"links-inactive"}`,children:[s.jsxs("li",{children:[s.jsx(a,{to:"/",className:"link",onClick:e,children:s.jsx(g,{})}),s.jsx("span",{children:"home"})]}),s.jsxs("li",{children:[s.jsx(a,{to:"/shop",className:"link",onClick:e,children:s.jsx(N,{})}),s.jsx("span",{children:"shop"})]}),s.jsxs("li",{children:[s.jsx(a,{to:"/blog",className:"link",onClick:e,children:s.jsx(v,{})}),s.jsx("span",{children:"blog"})]}),s.jsxs("li",{children:[s.jsx(a,{to:"/about",className:"link",onClick:e,children:s.jsx(k,{})}),s.jsx("span",{children:"about"})]}),s.jsxs("li",{children:[s.jsx(a,{to:"/contact",className:"link",onClick:e,children:s.jsx(f,{})}),s.jsx("span",{children:"contact"})]}),s.jsx("li",{className:"cart-bag",children:s.jsxs(a,{to:"/cart",className:"link",onClick:e,children:[s.jsx("p",{className:"total-items",children:x}),s.jsx(h,{})]})}),s.jsx("li",{id:"close",children:s.jsx(b,{onClick:()=>n(!o)})}),s.jsxs("div",{className:"signing",children:[s.jsx(R,{}),s.jsx("div",{className:"mode",onClick:j,children:c==="dark"?s.jsx(C,{className:"sun"}):s.jsx(L,{className:"moon"})})]})]})}),s.jsxs("div",{className:"mobile",children:[s.jsxs(a,{to:"/cart",onClick:e,className:"mobile-bag",children:[s.jsx("p",{className:"total-items",children:x}),s.jsx(h,{})]}),s.jsx("span",{children:s.jsx(S,{onClick:()=>n(!o)})})]})]})};export{G as default};