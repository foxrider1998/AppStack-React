import{_ as Y,K as L,$ as Z,a0 as ee,a1 as te,a2 as ne,a3 as H,a4 as $,a5 as I,a6 as oe,a7 as se,a8 as ae,y as W,w as B,E as z,j as S,x as U,d as F,a9 as re,aa as ie,ab as K,ac as M,ad as le,v as ce,ae as ue}from"./main-11f2565f.js";import{r as s}from"./chartjs-8bcccd15.js";import{u as de}from"./useTimeout-f5e86cc1.js";import{R as fe}from"./googlemaps-6af91147.js";const he=()=>{};function me(e,n,{disabled:t,clickTrigger:o}={}){const r=n||he;Y(e,r,{disabled:t,clickTrigger:o});const i=L(c=>{Z(c)&&r(c)});s.useEffect(()=>{if(t||e==null)return;const c=ee(te(e));let m=(c.defaultView||window).event;const u=ne(c,"keyup",f=>{if(f===m){m=void 0;return}i(f)});return()=>{u()}},[e,t,i])}const A=s.forwardRef((e,n)=>{const{flip:t,offset:o,placement:r,containerPadding:i,popperConfig:c={},transition:m,runTransition:u}=e,[f,g]=H(),[w,y]=H(),h=$(g,n),d=I(e.container),O=I(e.target),[a,v]=s.useState(!e.show),l=oe(O,f,se({placement:r,enableEvents:!!e.show,containerPadding:i||5,flip:t,offset:o,arrowElement:w,popperConfig:c}));e.show&&a&&v(!1);const C=(..._)=>{v(!0),e.onExited&&e.onExited(..._)},x=e.show||!a;if(me(f,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!x)return null;const{onExit:b,onExiting:R,onEnter:E,onEntering:k,onEntered:N}=e;let P=e.children(Object.assign({},l.attributes.popper,{style:l.styles.popper,ref:h}),{popper:l,placement:r,show:!!e.show,arrowProps:Object.assign({},l.attributes.arrow,{style:l.styles.arrow,ref:y})});return P=ae(m,u,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:P,onExit:b,onExiting:R,onExited:C,onEnter:E,onEntering:k,onEntered:N}),d?fe.createPortal(P,d):null});A.displayName="Overlay";const ve=A,pe=W("popover-header"),V=W("popover-body");function q(e,n){let t=e;return e==="left"?t=n?"end":"start":e==="right"&&(t=n?"start":"end"),t}function G(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const ge=s.forwardRef(({bsPrefix:e,placement:n="right",className:t,style:o,children:r,body:i,arrowProps:c,hasDoneInitialMeasure:m,popper:u,show:f,...g},w)=>{const y=B(e,"popover"),h=z(),[d]=(n==null?void 0:n.split("-"))||[],O=q(d,h);let a=o;return f&&!m&&(a={...o,...G(u==null?void 0:u.strategy)}),S("div",{ref:w,role:"tooltip",style:a,"x-placement":d,className:U(t,y,d&&`bs-popover-${O}`),...g,children:[F("div",{className:"popover-arrow",...c}),i?F(V,{children:r}):r]})}),we=Object.assign(ge,{Header:pe,Body:V,POPPER_OFFSET:[0,8]});function ye(e){const n=s.useRef(null),t=B(void 0,"popover"),o=s.useMemo(()=>({name:"offset",options:{offset:()=>n.current&&re(n.current,t)?e||we.POPPER_OFFSET:e||[0,0]}}),[e,t]);return[n,[o]]}function Re(e,n){const{ref:t}=e,{ref:o}=n;e.ref=t.__wrapped||(t.__wrapped=r=>t(M(r))),n.ref=o.__wrapped||(o.__wrapped=r=>o(M(r)))}const J=s.forwardRef(({children:e,transition:n=K,popperConfig:t={},rootClose:o=!1,placement:r="top",show:i=!1,...c},m)=>{const u=s.useRef({}),[f,g]=s.useState(null),[w,y]=ye(c.offset),h=$(m,w),d=n===!0?K:n||void 0,O=L(a=>{g(a),t==null||t.onFirstUpdate==null||t.onFirstUpdate(a)});return ie(()=>{f&&(u.current.scheduleUpdate==null||u.current.scheduleUpdate())},[f]),s.useEffect(()=>{i||g(null)},[i]),F(ve,{...c,ref:h,popperConfig:{...t,modifiers:y.concat(t.modifiers||[]),onFirstUpdate:O},transition:d,rootClose:o,placement:r,show:i,children:(a,{arrowProps:v,popper:l,show:C})=>{var x,b;Re(a,v);const R=l==null?void 0:l.placement,E=Object.assign(u.current,{state:l==null?void 0:l.state,scheduleUpdate:l==null?void 0:l.update,placement:R,outOfBoundaries:(l==null||(x=l.state)==null||(b=x.modifiersData.hide)==null?void 0:b.isReferenceHidden)||!1,strategy:t.strategy}),k=!!f;return typeof e=="function"?e({...a,placement:R,show:C,...!n&&C&&{className:"show"},popper:E,arrowProps:v,hasDoneInitialMeasure:k}):s.cloneElement(e,{...a,placement:R,arrowProps:v,popper:E,hasDoneInitialMeasure:k,className:U(e.props.className,!n&&C&&"show"),style:{...e.props.style,...a.style}})}})});J.displayName="Overlay";const Ee=J;function Oe(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function j(e,n,t){const[o]=n,r=o.currentTarget,i=o.relatedTarget||o.nativeEvent[t];(!i||i!==r)&&!ue(r,i)&&e(...n)}function ke({trigger:e=["hover","focus"],overlay:n,children:t,popperConfig:o={},show:r,defaultShow:i=!1,onToggle:c,delay:m,placement:u,flip:f=u&&u.indexOf("auto")!==-1,...g}){const w=s.useRef(null),y=$(w,t.ref),h=de(),d=s.useRef(""),[O,a]=le(r,i,c),v=Oe(m),{onFocus:l,onBlur:C,onClick:x}=typeof t!="function"?s.Children.only(t).props:{},b=p=>{y(M(p))},R=s.useCallback(()=>{if(h.clear(),d.current="show",!v.show){a(!0);return}h.set(()=>{d.current==="show"&&a(!0)},v.show)},[v.show,a,h]),E=s.useCallback(()=>{if(h.clear(),d.current="hide",!v.hide){a(!1);return}h.set(()=>{d.current==="hide"&&a(!1)},v.hide)},[v.hide,a,h]),k=s.useCallback((...p)=>{R(),l==null||l(...p)},[R,l]),N=s.useCallback((...p)=>{E(),C==null||C(...p)},[E,C]),P=s.useCallback((...p)=>{a(!O),x==null||x(...p)},[x,a,O]),_=s.useCallback((...p)=>{j(R,p,"fromElement")},[R]),X=s.useCallback((...p)=>{j(E,p,"toElement")},[E]),D=e==null?[]:[].concat(e),T={ref:b};return D.indexOf("click")!==-1&&(T.onClick=P),D.indexOf("focus")!==-1&&(T.onFocus=k,T.onBlur=N),D.indexOf("hover")!==-1&&(T.onMouseOver=_,T.onMouseOut=X),S(ce,{children:[typeof t=="function"?t(T):s.cloneElement(t,T),F(Ee,{...g,show:O,onHide:E,flip:f,placement:u,popperConfig:o,target:w.current,children:n})]})}const Q=s.forwardRef(({bsPrefix:e,placement:n="right",className:t,style:o,children:r,arrowProps:i,hasDoneInitialMeasure:c,popper:m,show:u,...f},g)=>{e=B(e,"tooltip");const w=z(),[y]=(n==null?void 0:n.split("-"))||[],h=q(y,w);let d=o;return u&&!c&&(d={...o,...G(m==null?void 0:m.strategy)}),S("div",{ref:g,style:d,role:"tooltip","x-placement":y,className:U(t,e,`bs-tooltip-${h}`),...f,children:[F("div",{className:"tooltip-arrow",...i}),F("div",{className:`${e}-inner`,children:r})]})});Q.displayName="Tooltip";const Fe=Q;export{ke as O,we as P,Fe as T};
