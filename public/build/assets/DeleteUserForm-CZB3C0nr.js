import{r as s,R as m,c as ze,j as v,W as Ze}from"./app-C3hQBHGF.js";import{I as Je}from"./InputError-9c7LbBt4.js";import{I as Qe}from"./InputLabel-5QVxaJyB.js";import{o as X,t as oe,l as le,p as et,f as be,u as xe,i as V,s as tt,z as $e,F as Y}from"./transition-DVz3Z5vX.js";import{s as ae,K as x,L as P,n as O,a as W,u as G,o as y,y as C,T as nt,O as me}from"./use-sync-refs-CpVdOcNR.js";import{H as rt,w as ot}from"./description-DuU32IkS.js";import{T as lt}from"./TextInput-C4_RUx1r.js";function z(e){return ae.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let at="span";var K=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(K||{});function it(e,t){var n;let{features:r=1,...o}=e,l={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return P()({ourProps:l,theirProps:o,slot:{},defaultTag:at,name:"Hidden"})}let ee=x(it);var Fe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Fe||{});let ut=s.createContext(()=>{});function st({value:e,children:t}){return m.createElement(ut.Provider,{value:e},t)}let ct=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function Te(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let i=t[o].call(n,...l);i&&(n=i,r.forEach(u=>u()))}}}function Pe(e){return s.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let dt=new ct(()=>Te(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function k(e,t){let n=dt.get(t),r=s.useId(),o=Pe(n);if(O(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let l=o.indexOf(r),i=o.length;return l===-1&&(l=i,i+=1),l===i-1}let te=new Map,U=new Map;function pe(e){var t;let n=(t=U.get(e))!=null?t:0;return U.set(e,n+1),n!==0?()=>he(e):(te.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>he(e))}function he(e){var t;let n=(t=U.get(e))!=null?t:1;if(n===1?U.delete(e):U.set(e,n-1),n!==1)return;let r=te.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,te.delete(e))}function ft(e,{allowed:t,disallowed:n}={}){let r=k(e,"inert-others");O(()=>{var o,l;if(!r)return;let i=X();for(let a of(o=n==null?void 0:n())!=null?o:[])a&&i.add(pe(a));let u=(l=t==null?void 0:t())!=null?l:[];for(let a of u){if(!a)continue;let d=z(a);if(!d)continue;let c=a.parentElement;for(;c&&c!==d.body;){for(let p of c.children)u.some(h=>p.contains(h))||i.add(pe(p));c=c.parentElement}}return i.dispose},[r,t,n])}function mt(e,t,n){let r=W(o=>{let l=o.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&n()});s.useEffect(()=>{if(!e)return;let o=t===null?null:t instanceof HTMLElement?t:t.current;if(!o)return;let l=X();if(typeof ResizeObserver<"u"){let i=new ResizeObserver(()=>r.current(o));i.observe(o),l.add(()=>i.disconnect())}if(typeof IntersectionObserver<"u"){let i=new IntersectionObserver(()=>r.current(o));i.observe(o),l.add(()=>i.disconnect())}return()=>l.dispose()},[t,r,e])}let q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),pt=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(F||{}),ne=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ne||{}),ht=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ht||{});function vt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(q)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function gt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(pt)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Le=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Le||{});function wt(e,t=0){var n;return e===((n=z(e))==null?void 0:n.body)?!1:G(t,{0(){return e.matches(q)},1(){let r=e;for(;r!==null;){if(r.matches(q))return!0;r=r.parentElement}return!1}})}var Et=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Et||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function T(e){e==null||e.focus({preventScroll:!0})}let yt=["textarea","input"].join(",");function bt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,yt))!=null?n:!1}function xt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let i=o.compareDocumentPosition(l);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function B(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?xt(e):e:t&64?gt(e):vt(e);o.length>0&&i.length>1&&(i=i.filter(f=>!o.some(g=>g!=null&&"current"in g?(g==null?void 0:g.current)===f:g===f))),r=r??l.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,p=i.length,h;do{if(c>=p||c+p<=0)return 0;let f=a+c;if(t&16)f=(f+p)%p;else{if(f<0)return 3;if(f>=p)return 1}h=i[f],h==null||h.focus(d),c+=u}while(h!==l.activeElement);return t&6&&bt(h)&&h.select(),2}function Se(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function $t(){return/Android/gi.test(window.navigator.userAgent)}function Ft(){return Se()||$t()}function j(e,t,n,r){let o=W(n);s.useEffect(()=>{if(!e)return;function l(i){o.current(i)}return document.addEventListener(t,l,r),()=>document.removeEventListener(t,l,r)},[e,t,r])}function Ne(e,t,n,r){let o=W(n);s.useEffect(()=>{if(!e)return;function l(i){o.current(i)}return window.addEventListener(t,l,r),()=>window.removeEventListener(t,l,r)},[e,t,r])}const ve=30;function Tt(e,t,n){let r=k(e,"outside-click"),o=W(n),l=s.useCallback(function(a,d){if(a.defaultPrevented)return;let c=d(a);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let p=function h(f){return typeof f=="function"?h(f()):Array.isArray(f)||f instanceof Set?f:[f]}(t);for(let h of p)if(h!==null&&(h.contains(c)||a.composed&&a.composedPath().includes(h)))return;return!wt(c,Le.Loose)&&c.tabIndex!==-1&&a.preventDefault(),o.current(a,c)},[o,t]),i=s.useRef(null);j(r,"pointerdown",a=>{var d,c;i.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),j(r,"mousedown",a=>{var d,c;i.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),j(r,"click",a=>{Ft()||i.current&&(l(a,()=>i.current),i.current=null)},!0);let u=s.useRef({x:0,y:0});j(r,"touchstart",a=>{u.current.x=a.touches[0].clientX,u.current.y=a.touches[0].clientY},!0),j(r,"touchend",a=>{let d={x:a.changedTouches[0].clientX,y:a.changedTouches[0].clientY};if(!(Math.abs(d.x-u.current.x)>=ve||Math.abs(d.y-u.current.y)>=ve))return l(a,()=>a.target instanceof HTMLElement?a.target:null)},!0),Ne(r,"blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function _(...e){return s.useMemo(()=>z(...e),[...e])}function De(e,t,n,r){let o=W(n);s.useEffect(()=>{e=e??window;function l(i){o.current(i)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function Pt(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=(n=t.defaultView)!=null?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),l=Math.max(0,e-o);n.style(r,"paddingRight",`${l}px`)}}}function Lt(){return Se()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(l=>l()).some(l=>l.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let u=X();u.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>u.dispose()))}let l=(o=window.scrollY)!=null?o:window.pageYOffset,i=null;t.addEventListener(e,"click",u=>{if(u.target instanceof HTMLElement)try{let a=u.target.closest("a");if(!a)return;let{hash:d}=new URL(a.href),c=e.querySelector(d);c&&!r(c)&&(i=c)}catch{}},!0),t.addEventListener(e,"touchstart",u=>{if(u.target instanceof HTMLElement)if(r(u.target)){let a=u.target;for(;a.parentElement&&r(a.parentElement);)a=a.parentElement;t.style(a,"overscrollBehavior","contain")}else t.style(u.target,"touchAction","none")}),t.addEventListener(e,"touchmove",u=>{if(u.target instanceof HTMLElement){if(u.target.tagName==="INPUT")return;if(r(u.target)){let a=u.target;for(;a.parentElement&&a.dataset.headlessuiPortal!==""&&!(a.scrollHeight>a.clientHeight||a.scrollWidth>a.clientWidth);)a=a.parentElement;a.dataset.headlessuiPortal===""&&u.preventDefault()}else u.preventDefault()}},{passive:!1}),t.add(()=>{var u;let a=(u=window.scrollY)!=null?u:window.pageYOffset;l!==a&&window.scrollTo(0,l),i&&i.isConnected&&(i.scrollIntoView({block:"nearest"}),i=null)})})}}:{}}function St(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Nt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let A=Te(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:X(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Nt(n)},o=[Lt(),Pt(),St()];o.forEach(({before:l})=>l==null?void 0:l(r)),o.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});A.subscribe(()=>{let e=A.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&A.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&A.dispatch("TEARDOWN",n)}});function Dt(e,t,n=()=>({containers:[]})){let r=Pe(A),o=t?r.get(t):void 0,l=o?o.count>0:!1;return O(()=>{if(!(!t||!e))return A.dispatch("PUSH",t,n),()=>A.dispatch("POP",t,n)},[e,t]),l}function Mt(e,t,n=()=>[document.body]){let r=k(e,"scroll-lock");Dt(r,t,o=>{var l;return{containers:[...(l=o.containers)!=null?l:[],n]}})}function ie(e,t){let n=s.useRef([]),r=y(e);s.useEffect(()=>{let o=[...n.current];for(let[l,i]of t.entries())if(n.current[l]!==i){let u=r(t,o);return n.current=t,u}},[r,...t])}function At(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let S=[];At(()=>{function e(t){if(!(t.target instanceof HTMLElement)||t.target===document.body||S[0]===t.target)return;let n=t.target;n=n.closest(q),S.unshift(n??t.target),S=S.filter(r=>r!=null&&r.isConnected),S.splice(10)}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Me(e){let t=y(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,oe(()=>{n.current&&t()})}),[t])}let Ae=s.createContext(!1);function Ct(){return s.useContext(Ae)}function ge(e){return m.createElement(Ae.Provider,{value:e.force},e.children)}function Rt(e){let t=Ct(),n=s.useContext(Re),r=_(e),[o,l]=s.useState(()=>{var i;if(!t&&n!==null)return(i=n.current)!=null?i:null;if(ae.isServer)return null;let u=r==null?void 0:r.getElementById("headlessui-portal-root");if(u)return u;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let Ce=s.Fragment,Ot=x(function(e,t){let n=e,r=s.useRef(null),o=C(nt(p=>{r.current=p}),t),l=_(r),i=Rt(r),[u]=s.useState(()=>{var p;return ae.isServer?null:(p=l==null?void 0:l.createElement("div"))!=null?p:null}),a=s.useContext(re),d=le();O(()=>{!i||!u||i.contains(u)||(u.setAttribute("data-headlessui-portal",""),i.appendChild(u))},[i,u]),O(()=>{if(u&&a)return a.register(u)},[a,u]),Me(()=>{var p;!i||!u||(u instanceof Node&&i.contains(u)&&i.removeChild(u),i.childNodes.length<=0&&((p=i.parentElement)==null||p.removeChild(i)))});let c=P();return d?!i||!u?null:ze.createPortal(c({ourProps:{ref:o},theirProps:n,slot:{},defaultTag:Ce,name:"Portal"}),u):null});function kt(e,t){let n=C(t),{enabled:r=!0,...o}=e,l=P();return r?m.createElement(Ot,{...o,ref:n}):l({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:Ce,name:"Portal"})}let It=s.Fragment,Re=s.createContext(null);function jt(e,t){let{target:n,...r}=e,o={ref:C(t)},l=P();return m.createElement(Re.Provider,{value:n},l({ourProps:o,theirProps:r,defaultTag:It,name:"Popover.Group"}))}let re=s.createContext(null);function Ht(){let e=s.useContext(re),t=s.useRef([]),n=y(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=y(l=>{let i=t.current.indexOf(l);i!==-1&&t.current.splice(i,1),e&&e.unregister(l)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:l}){return m.createElement(re.Provider,{value:o},l)},[o])]}let Ut=x(kt),Oe=x(jt),Bt=Object.assign(Ut,{Group:Oe});function Wt(e,t=typeof document<"u"?document.defaultView:null,n){let r=k(e,"escape");De(t,"keydown",o=>{r&&(o.defaultPrevented||o.key===Fe.Escape&&n(o))})}function _t(){var e;let[t]=s.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=s.useState((e=t==null?void 0:t.matches)!=null?e:!1);return O(()=>{if(!t)return;function o(l){r(l.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function Vt({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=_(n),o=y(()=>{var l,i;let u=[];for(let a of e)a!==null&&(a instanceof HTMLElement?u.push(a):"current"in a&&a.current instanceof HTMLElement&&u.push(a.current));if(t!=null&&t.current)for(let a of t.current)u.push(a);for(let a of(l=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?l:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(n&&(a.contains(n)||a.contains((i=n==null?void 0:n.getRootNode())==null?void 0:i.host))||u.some(d=>a.contains(d))||u.push(a));return u});return{resolveContainers:o,contains:y(l=>o().some(i=>i.contains(l)))}}let ke=s.createContext(null);function we({children:e,node:t}){let[n,r]=s.useState(null),o=Ie(t??n);return m.createElement(ke.Provider,{value:o},e,o===null&&m.createElement(ee,{features:K.Hidden,ref:l=>{var i,u;if(l){for(let a of(u=(i=z(l))==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?u:[])if(a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a!=null&&a.contains(l)){r(a);break}}}}))}function Ie(e=null){var t;return(t=s.useContext(ke))!=null?t:e}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function Yt(){let e=s.useRef(0);return Ne(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function je(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Gt="div";var M=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(M||{});function Kt(e,t){let n=s.useRef(null),r=C(n,t),{initialFocus:o,initialFocusFallback:l,containers:i,features:u=15,...a}=e;le()||(u=0);let d=_(n);Zt(u,{ownerDocument:d});let c=Jt(u,{ownerDocument:d,container:n,initialFocus:o,initialFocusFallback:l});Qt(u,{ownerDocument:d,container:n,containers:i,previousActiveElement:c});let p=Yt(),h=y(E=>{let L=n.current;L&&(b=>b())(()=>{G(p.current,{[H.Forwards]:()=>{B(L,F.First,{skipElements:[E.relatedTarget,l]})},[H.Backwards]:()=>{B(L,F.Last,{skipElements:[E.relatedTarget,l]})}})})}),f=k(!!(u&2),"focus-trap#tab-lock"),g=et(),N=s.useRef(!1),D={ref:r,onKeyDown(E){E.key=="Tab"&&(N.current=!0,g.requestAnimationFrame(()=>{N.current=!1}))},onBlur(E){if(!(u&4))return;let L=je(i);n.current instanceof HTMLElement&&L.add(n.current);let b=E.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&(He(L,b)||(N.current?B(n.current,G(p.current,{[H.Forwards]:()=>F.Next,[H.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:E.target}):E.target instanceof HTMLElement&&T(E.target)))}},$=P();return m.createElement(m.Fragment,null,f&&m.createElement(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:K.Focusable}),$({ourProps:D,theirProps:a,defaultTag:Gt,name:"FocusTrap"}),f&&m.createElement(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:K.Focusable}))}let qt=x(Kt),Xt=Object.assign(qt,{features:M});function zt(e=!0){let t=s.useRef(S.slice());return ie(([n],[r])=>{r===!0&&n===!1&&oe(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=S.slice())},[e,S,t]),y(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Zt(e,{ownerDocument:t}){let n=!!(e&8),r=zt(n);ie(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&T(r())},[n]),Me(()=>{n&&T(r())})}function Jt(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:o}){let l=s.useRef(null),i=k(!!(e&1),"focus-trap#initial-focus"),u=be();return ie(()=>{if(e===0)return;if(!i){o!=null&&o.current&&T(o.current);return}let a=n.current;a&&oe(()=>{if(!u.current)return;let d=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===d){l.current=d;return}}else if(a.contains(d)){l.current=d;return}if(r!=null&&r.current)T(r.current);else{if(e&16){if(B(a,F.First|F.AutoFocus)!==ne.Error)return}else if(B(a,F.First)!==ne.Error)return;if(o!=null&&o.current&&(T(o.current),(t==null?void 0:t.activeElement)===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}l.current=t==null?void 0:t.activeElement})},[o,i,e]),l}function Qt(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:o}){let l=be(),i=!!(e&4);De(t==null?void 0:t.defaultView,"focus",u=>{if(!i||!l.current)return;let a=je(r);n.current instanceof HTMLElement&&a.add(n.current);let d=o.current;if(!d)return;let c=u.target;c&&c instanceof HTMLElement?He(a,c)?(o.current=c,T(c)):(u.preventDefault(),u.stopPropagation(),T(d)):T(o.current)},!0)}function He(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var en=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(en||{}),tn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(tn||{});let nn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},ue=s.createContext(null);ue.displayName="DialogContext";function Z(e){let t=s.useContext(ue);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Z),n}return t}function rn(e,t){return G(t.type,nn,e,t)}let Ee=x(function(e,t){let n=s.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:i,role:u="dialog",autoFocus:a=!0,__demoMode:d=!1,unmount:c=!1,...p}=e,h=s.useRef(!1);u=function(){return u==="dialog"||u==="alertdialog"?u:(h.current||(h.current=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let f=xe();o===void 0&&f!==null&&(o=(f&V.Open)===V.Open);let g=s.useRef(null),N=C(g,t),D=_(g),$=o?0:1,[E,L]=s.useReducer(rn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),b=y(()=>l(!1)),se=y(w=>L({type:0,id:w})),R=le()?$===0:!1,[Be,We]=Ht(),_e={get current(){var w;return(w=E.panelRef.current)!=null?w:g.current}},J=Ie(),{resolveContainers:Q}=Vt({mainTreeNode:J,portals:Be,defaultContainers:[_e]}),ce=f!==null?(f&V.Closing)===V.Closing:!1;ft(d||ce?!1:R,{allowed:y(()=>{var w,fe;return[(fe=(w=g.current)==null?void 0:w.closest("[data-headlessui-portal]"))!=null?fe:null]}),disallowed:y(()=>{var w;return[(w=J==null?void 0:J.closest("body > *:not(#headlessui-portal-root)"))!=null?w:null]})}),Tt(R,Q,w=>{w.preventDefault(),b()}),Wt(R,D==null?void 0:D.defaultView,w=>{w.preventDefault(),w.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),b()}),Mt(d||ce?!1:R,D,Q),mt(R,g,b);let[Ve,Ye]=ot(),Ge=s.useMemo(()=>[{dialogState:$,close:b,setTitleId:se,unmount:c},E],[$,E,b,se,c]),de=s.useMemo(()=>({open:$===0}),[$]),Ke={ref:N,id:r,role:u,tabIndex:-1,"aria-modal":d?void 0:$===0?!0:void 0,"aria-labelledby":E.titleId,"aria-describedby":Ve,unmount:c},qe=!_t(),I=M.None;R&&!d&&(I|=M.RestoreFocus,I|=M.TabLock,a&&(I|=M.AutoFocus),qe&&(I|=M.InitialFocus));let Xe=P();return m.createElement(tt,null,m.createElement(ge,{force:!0},m.createElement(Bt,null,m.createElement(ue.Provider,{value:Ge},m.createElement(Oe,{target:g},m.createElement(ge,{force:!1},m.createElement(Ye,{slot:de},m.createElement(We,null,m.createElement(Xt,{initialFocus:i,initialFocusFallback:g,containers:Q,features:I},m.createElement(st,{value:b},Xe({ourProps:Ke,theirProps:p,slot:de,defaultTag:on,features:ln,visible:$===0,name:"Dialog"})))))))))))}),on="div",ln=me.RenderStrategy|me.Static;function an(e,t){let{transition:n=!1,open:r,...o}=e,l=xe(),i=e.hasOwnProperty("open")||l!==null,u=e.hasOwnProperty("onClose");if(!i&&!u)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!i)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!u)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!l&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!o.static?m.createElement(we,null,m.createElement($e,{show:r,transition:n,unmount:o.unmount},m.createElement(Ee,{ref:t,...o}))):m.createElement(we,null,m.createElement(Ee,{ref:t,open:r,...o}))}let un="div";function sn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:o=!1,...l}=e,[{dialogState:i,unmount:u},a]=Z("Dialog.Panel"),d=C(t,a.panelRef),c=s.useMemo(()=>({open:i===0}),[i]),p=y(D=>{D.stopPropagation()}),h={ref:d,id:r,onClick:p},f=o?Y:s.Fragment,g=o?{unmount:u}:{},N=P();return m.createElement(f,{...g},N({ourProps:h,theirProps:l,slot:c,defaultTag:un,name:"Dialog.Panel"}))}let cn="div";function dn(e,t){let{transition:n=!1,...r}=e,[{dialogState:o,unmount:l}]=Z("Dialog.Backdrop"),i=s.useMemo(()=>({open:o===0}),[o]),u={ref:t,"aria-hidden":!0},a=n?Y:s.Fragment,d=n?{unmount:l}:{},c=P();return m.createElement(a,{...d},c({ourProps:u,theirProps:r,slot:i,defaultTag:cn,name:"Dialog.Backdrop"}))}let fn="h2";function mn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:i}]=Z("Dialog.Title"),u=C(t);s.useEffect(()=>(i(r),()=>i(null)),[r,i]);let a=s.useMemo(()=>({open:l===0}),[l]),d={ref:u,id:r};return P()({ourProps:d,theirProps:o,slot:a,defaultTag:fn,name:"Dialog.Title"})}let pn=x(an),Ue=x(sn);x(dn);let hn=x(mn),vn=Object.assign(pn,{Panel:Ue,Title:hn,Description:rt});function gn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const l=()=>{r&&o()},i={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return v.jsx($e,{show:t,leave:"duration-200",children:v.jsxs(vn,{as:"div",id:"modal",className:"fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0",onClose:l,children:[v.jsx(Y,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),v.jsx(Y,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v.jsx(Ue,{className:`mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full ${i}`,children:e})})]})})}function ye({className:e="",disabled:t,children:n,...r}){return v.jsx("button",{...r,className:`inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function wn({type:e="button",className:t="",disabled:n,children:r,...o}){return v.jsx("button",{...o,type:e,className:`inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Ln({className:e=""}){const[t,n]=s.useState(!1),r=s.useRef(),{data:o,setData:l,delete:i,processing:u,reset:a,errors:d,clearErrors:c}=Ze({password:""}),p=()=>{n(!0)},h=g=>{g.preventDefault(),i(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>f(),onError:()=>r.current.focus(),onFinish:()=>a()})},f=()=>{n(!1),c(),a()};return v.jsxs("section",{className:`space-y-6 ${e}`,children:[v.jsxs("header",{children:[v.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),v.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),v.jsx(ye,{onClick:p,children:"Delete Account"}),v.jsx(gn,{show:t,onClose:f,children:v.jsxs("form",{onSubmit:h,className:"p-6",children:[v.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),v.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),v.jsxs("div",{className:"mt-6",children:[v.jsx(Qe,{htmlFor:"password",value:"Password",className:"sr-only"}),v.jsx(lt,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:g=>l("password",g.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),v.jsx(Je,{message:d.password,className:"mt-2"})]}),v.jsxs("div",{className:"mt-6 flex justify-end",children:[v.jsx(wn,{onClick:f,children:"Cancel"}),v.jsx(ye,{className:"ms-3",disabled:u,children:"Delete Account"})]})]})})]})}export{Ln as default};