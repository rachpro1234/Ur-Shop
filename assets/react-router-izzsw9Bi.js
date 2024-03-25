import{r}from"./react-INodxC-X.js";import{i as g,p as L,m as W,j as R,A as j,s as z,g as M,r as D,a as A}from"./@remix-run-qg_F8xzm.js";/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}const O=r.createContext(null),S=r.createContext(null),b=r.createContext(null),B=r.createContext(null),x=r.createContext({outlet:null,matches:[],isDataRoute:!1}),J=r.createContext(null);function ie(e,t){let{relative:n}=t===void 0?{}:t;P()||g(!1);let{basename:o,navigator:i}=r.useContext(b),{hash:u,pathname:a,search:f}=Q(e,{relative:n}),c=a;return o!=="/"&&(c=a==="/"?o:R([o,a])),i.createHref({pathname:c,search:f,hash:u})}function P(){return r.useContext(B)!=null}function U(){return P()||g(!1),r.useContext(B).location}function T(e){r.useContext(b).static||r.useLayoutEffect(e)}function se(){let{isDataRoute:e}=r.useContext(x);return e?ne():q()}function q(){P()||g(!1);let e=r.useContext(O),{basename:t,future:n,navigator:o}=r.useContext(b),{matches:i}=r.useContext(x),{pathname:u}=U(),a=JSON.stringify(M(i,n.v7_relativeSplatPath)),f=r.useRef(!1);return T(()=>{f.current=!0}),r.useCallback(function(v,s){if(s===void 0&&(s={}),!f.current)return;if(typeof v=="number"){o.go(v);return}let l=D(v,JSON.parse(a),u,s.relative==="path");e==null&&t!=="/"&&(l.pathname=l.pathname==="/"?t:R([t,l.pathname])),(s.replace?o.replace:o.push)(l,s.state,s)},[t,o,a,u,e])}const G=r.createContext(null);function K(e){let t=r.useContext(x).outlet;return t&&r.createElement(G.Provider,{value:e},t)}function Q(e,t){let{relative:n}=t===void 0?{}:t,{future:o}=r.useContext(b),{matches:i}=r.useContext(x),{pathname:u}=U(),a=JSON.stringify(M(i,o.v7_relativeSplatPath));return r.useMemo(()=>D(e,JSON.parse(a),u,n==="path"),[e,a,u,n])}function ue(e,t,n,o){P()||g(!1);let{navigator:i}=r.useContext(b),{matches:u}=r.useContext(x),a=u[u.length-1],f=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let v=U(),s;if(t){var l;let d=typeof t=="string"?L(t):t;c==="/"||(l=d.pathname)!=null&&l.startsWith(c)||g(!1),s=d}else s=v;let m=s.pathname||"/",h=c==="/"?m:m.slice(c.length)||"/",p=W(e,{pathname:h}),C=$(p&&p.map(d=>Object.assign({},d,{params:Object.assign({},f,d.params),pathname:R([c,i.encodeLocation?i.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:R([c,i.encodeLocation?i.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),u,n,o);return t&&C?r.createElement(B.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:j.Pop}},C):C}function V(){let e=re(),t=A(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:i},n):null,null)}const X=r.createElement(V,null);class Y extends r.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?r.createElement(x.Provider,{value:this.props.routeContext},r.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z(e){let{routeContext:t,match:n,children:o}=e,i=r.useContext(O);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(x.Provider,{value:t},o)}function $(e,t,n,o){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var u;if((u=n)!=null&&u.errors)e=n.matches;else return null}let a=e,f=(i=n)==null?void 0:i.errors;if(f!=null){let s=a.findIndex(l=>l.route.id&&(f==null?void 0:f[l.route.id]));s>=0||g(!1),a=a.slice(0,Math.min(a.length,s+1))}let c=!1,v=-1;if(n&&o&&o.v7_partialHydration)for(let s=0;s<a.length;s++){let l=a[s];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(v=s),l.route.id){let{loaderData:m,errors:h}=n,p=l.route.loader&&m[l.route.id]===void 0&&(!h||h[l.route.id]===void 0);if(l.route.lazy||p){c=!0,v>=0?a=a.slice(0,v+1):a=[a[0]];break}}}return a.reduceRight((s,l,m)=>{let h,p=!1,C=null,d=null;n&&(h=f&&l.route.id?f[l.route.id]:void 0,C=l.route.errorElement||X,c&&(v<0&&m===0?(ae("route-fallback",!1),p=!0,d=null):v===m&&(p=!0,d=l.route.hydrateFallbackElement||null)));let k=t.concat(a.slice(0,m+1)),F=()=>{let E;return h?E=C:p?E=d:l.route.Component?E=r.createElement(l.route.Component,null):l.route.element?E=l.route.element:E=s,r.createElement(Z,{match:l,routeContext:{outlet:s,matches:k,isDataRoute:n!=null},children:E})};return n&&(l.route.ErrorBoundary||l.route.errorElement||m===0)?r.createElement(Y,{location:n.location,revalidation:n.revalidation,component:C,error:h,children:F(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):F()},null)}var _=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_||{}),N=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(N||{});function H(e){let t=r.useContext(O);return t||g(!1),t}function ee(e){let t=r.useContext(S);return t||g(!1),t}function te(e){let t=r.useContext(x);return t||g(!1),t}function w(e){let t=te(),n=t.matches[t.matches.length-1];return n.route.id||g(!1),n.route.id}function re(){var e;let t=r.useContext(J),n=ee(N.UseRouteError),o=w(N.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[o]}function ne(){let{router:e}=H(_.UseNavigateStable),t=w(N.UseNavigateStable),n=r.useRef(!1);return T(()=>{n.current=!0}),r.useCallback(function(i,u){u===void 0&&(u={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,y({fromRouteId:t},u)))},[e,t])}const I={};function ae(e,t,n){!t&&!I[e]&&(I[e]=!0)}function ce(e){return K(e.context)}function de(e){let{basename:t="/",children:n=null,location:o,navigationType:i=j.Pop,navigator:u,static:a=!1,future:f}=e;P()&&g(!1);let c=t.replace(/^\/*/,"/"),v=r.useMemo(()=>({basename:c,navigator:u,static:a,future:y({v7_relativeSplatPath:!1},f)}),[c,f,u,a]);typeof o=="string"&&(o=L(o));let{pathname:s="/",search:l="",hash:m="",state:h=null,key:p="default"}=o,C=r.useMemo(()=>{let d=z(s,c);return d==null?null:{location:{pathname:d,search:l,hash:m,state:h,key:p},navigationType:i}},[c,s,l,m,h,p,i]);return C==null?null:r.createElement(b.Provider,{value:v},r.createElement(B.Provider,{children:n,value:C}))}new Promise(()=>{});function fe(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:r.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:r.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:r.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}export{O as D,b as N,ce as O,de as R,S as a,ie as b,Q as c,U as d,se as e,fe as m,ue as u};