import{w as y,d as e,Y as W,x as N,z as Q,Q as Y,j as r,W as Z,C as J,R as X,h as H,B as T,o as A,g as q,Z as g}from"./main-11f2565f.js";import{r as m,R as _}from"./chartjs-8bcccd15.js";import{C as n}from"./Card-190f7cd8.js";import{P as t}from"./Pagination-6d7d6b83.js";import{O as P,P as C,T as ee}from"./Tooltip-a5448d8b.js";import{P as b}from"./ProgressBar-6b407db7.js";import"./googlemaps-6af91147.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";import"./useTimeout-f5e86cc1.js";function R(a,i){return Array.isArray(a)?a.includes(i):a===i}const $=m.createContext({});$.displayName="AccordionContext";const w=$,S=m.forwardRef(({as:a="div",bsPrefix:i,className:l,children:o,eventKey:s,...d},c)=>{const{activeEventKey:u}=m.useContext(w);return i=y(i,"accordion-collapse"),e(W,{ref:c,in:R(u,s),...d,className:N(l,i),children:e(a,{children:m.Children.only(o)})})});S.displayName="AccordionCollapse";const k=S,L=m.createContext({eventKey:""});L.displayName="AccordionItemContext";const E=L,z=m.forwardRef(({as:a="div",bsPrefix:i,className:l,onEnter:o,onEntering:s,onEntered:d,onExit:c,onExiting:u,onExited:h,...I},f)=>{i=y(i,"accordion-body");const{eventKey:B}=m.useContext(E);return e(k,{eventKey:B,onEnter:o,onEntering:s,onEntered:d,onExit:c,onExiting:u,onExited:h,children:e(a,{ref:f,...I,className:N(l,i)})})});z.displayName="AccordionBody";const ae=z;function re(a,i){const{activeEventKey:l,onSelect:o,alwaysOpen:s}=m.useContext(w);return d=>{let c=a===l?null:a;s&&(Array.isArray(l)?l.includes(a)?c=l.filter(u=>u!==a):c=[...l,a]:c=[a]),o==null||o(c,d),i==null||i(d)}}const O=m.forwardRef(({as:a="button",bsPrefix:i,className:l,onClick:o,...s},d)=>{i=y(i,"accordion-button");const{eventKey:c}=m.useContext(E),u=re(c,o),{activeEventKey:h}=m.useContext(w);return a==="button"&&(s.type="button"),e(a,{ref:d,onClick:u,...s,"aria-expanded":Array.isArray(h)?h.includes(c):c===h,className:N(l,i,!R(h,c)&&"collapsed")})});O.displayName="AccordionButton";const D=O,K=m.forwardRef(({as:a="h2",bsPrefix:i,className:l,children:o,onClick:s,...d},c)=>(i=y(i,"accordion-header"),e(a,{ref:c,...d,className:N(l,i),children:e(D,{onClick:s,children:o})})));K.displayName="AccordionHeader";const ie=K,j=m.forwardRef(({as:a="div",bsPrefix:i,className:l,eventKey:o,...s},d)=>{i=y(i,"accordion-item");const c=m.useMemo(()=>({eventKey:o}),[o]);return e(E.Provider,{value:c,children:e(a,{ref:d,...s,className:N(l,i)})})});j.displayName="AccordionItem";const te=j,F=m.forwardRef((a,i)=>{const{as:l="div",activeKey:o,bsPrefix:s,className:d,onSelect:c,flush:u,alwaysOpen:h,...I}=Q(a,{activeKey:"onSelect"}),f=y(s,"accordion"),B=m.useMemo(()=>({activeEventKey:o,onSelect:c,alwaysOpen:h}),[o,c,h]);return e(w.Provider,{value:B,children:e(l,{ref:i,...I,className:N(d,f,u&&`${f}-flush`)})})});F.displayName="Accordion";const p=Object.assign(F,{Button:D,Collapse:k,Item:te,Header:ie,Body:ae}),U=m.forwardRef(({bsPrefix:a,active:i=!1,children:l,className:o,as:s="li",linkAs:d=Y,linkProps:c={},href:u,title:h,target:I,...f},B)=>{const V=y(a,"breadcrumb-item");return e(s,{ref:B,...f,className:N(V,o,{active:i}),"aria-current":i?"page":void 0,children:i?l:e(d,{...c,href:u,title:h,target:I,children:l})})});U.displayName="BreadcrumbItem";const ne=U,G=m.forwardRef(({bsPrefix:a,className:i,listProps:l={},children:o,label:s="breadcrumb",as:d="nav",...c},u)=>{const h=y(a,"breadcrumb");return e(d,{"aria-label":s,className:i,ref:u,...c,children:e("ol",{...l,className:N(h,l==null?void 0:l.className),children:o})})});G.displayName="Breadcrumb";const v=Object.assign(G,{Item:ne}),x=[{name:"Primary",value:"primary"},{name:"Secondary",value:"secondary"},{name:"Success",value:"success"},{name:"Danger",value:"danger"},{name:"Warning",value:"warning"},{name:"Info",value:"info"}],M=[{name:"Left",value:"left"},{name:"Top",value:"top"},{name:"Bottom",value:"bottom"},{name:"Right",value:"right"}],le=()=>r(n,{children:[r(n.Header,{className:"pb-0",children:[e(n.Title,{children:"Accordion"}),e("h6",{className:"card-subtitle text-muted",children:"Build vertically collapsing accordions in combination with the Collapse component."})]}),e(n.Body,{children:r(p,{defaultActiveKey:"0",children:[r(p.Item,{eventKey:"0",className:"bg-white",children:[e(p.Header,{children:"Accordion Item #1"}),e(p.Body,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),r(p.Item,{eventKey:"1",children:[e(p.Header,{children:"Accordion Item #2"}),e(p.Body,{className:"bg-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),r(p.Item,{eventKey:"2",children:[e(p.Header,{children:"Accordion Item #3"}),e(p.Body,{className:"bg-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})})]}),ce=()=>r(n,{children:[r(n.Header,{children:[e(n.Title,{children:"Badges"}),e("h6",{className:"card-subtitle text-muted",children:"Examples for badges."})]}),r(n.Body,{children:[e("div",{children:x.map((a,i)=>e(T,{bg:a.value,className:"me-1 mb-1",children:a.name},i))}),e("div",{children:x.map((a,i)=>e(T,{bg:a.value,className:"rounded-pill me-1 mb-1",children:a.name},i))})]})]}),oe=()=>r(n,{children:[r(n.Header,{children:[e(n.Title,{children:"Breadcrumbs"}),e("h6",{className:"card-subtitle text-muted",children:"Indicate the current page’s location within a navigational hierarchy."})]}),r(n.Body,{children:[e(v,{children:e(v.Item,{active:!0,children:"Home"})}),r(v,{children:[e(v.Item,{children:"Home"}),e(v.Item,{active:!0,children:"Library"})]}),r(v,{children:[e(v.Item,{children:"Home"}),e(v.Item,{children:"Library"}),e(v.Item,{active:!0,children:"Data"})]})]})]}),se=()=>r(n,{children:[r(n.Header,{children:[e(n.Title,{children:"Images"}),e("h6",{className:"card-subtitle text-muted",children:"Lightweight styles for images."})]}),r(n.Body,{className:"text-center",children:[e("img",{className:"rounded me-2 mb-2",src:A,alt:"Placeholder",width:"140",height:"140"}),e("img",{className:"rounded-circle rounded me-2 mb-2",src:A,alt:"Placeholder",width:"140",height:"140"}),e("img",{className:"img-thumbnail rounded me-2 mb-2",src:A,alt:"Placeholder",width:"140",height:"140"})]})]}),de=()=>r(n,{children:[r(n.Header,{children:[e(n.Title,{children:"Pagination"}),e("h6",{className:"card-subtitle text-muted",children:"Examples for showing pagination."})]}),r(n.Body,{children:[r(t,{size:"sm",children:[e(t.First,{}),e(t.Prev,{}),e(t.Item,{children:1}),e(t.Ellipsis,{}),e(t.Item,{children:10}),e(t.Item,{children:11}),e(t.Item,{active:!0,children:12}),e(t.Item,{children:13}),e(t.Item,{disabled:!0,children:14}),e(t.Ellipsis,{}),e(t.Item,{children:20}),e(t.Next,{}),e(t.Last,{})]}),r(t,{children:[e(t.First,{}),e(t.Prev,{}),e(t.Item,{children:1}),e(t.Ellipsis,{}),e(t.Item,{children:10}),e(t.Item,{children:11}),e(t.Item,{active:!0,children:12}),e(t.Item,{children:13}),e(t.Item,{disabled:!0,children:14}),e(t.Ellipsis,{}),e(t.Item,{children:20}),e(t.Next,{}),e(t.Last,{})]}),r(t,{size:"lg",children:[e(t.First,{}),e(t.Prev,{}),e(t.Item,{children:1}),e(t.Ellipsis,{}),e(t.Item,{children:10}),e(t.Item,{children:11}),e(t.Item,{active:!0,children:12}),e(t.Item,{children:13}),e(t.Item,{disabled:!0,children:14}),e(t.Ellipsis,{}),e(t.Item,{children:20}),e(t.Next,{}),e(t.Last,{})]})]})]}),me=()=>r(n,{children:[r(n.Header,{children:[e(n.Title,{children:"Popovers"}),e("h6",{className:"card-subtitle text-muted",children:"Examples for adding Bootstrap popovers."})]}),e(n.Body,{className:"text-center",children:M.map((a,i)=>e("span",{className:"me-1",children:e(P,{trigger:"click",placement:a.value,overlay:r(C,{id:`popover-positioned-${a.value}`,children:[e(C.Header,{as:"h3",children:`Popover ${a.name}`}),r(C.Body,{children:[e("strong",{children:"Holy guacamole!"})," Check this info."]})]}),children:r(q,{variant:"secondary",children:["Popover on ",a.name]})})},a.value))})]}),ue=()=>r(n,{children:[r(n.Header,{children:[e(n.Title,{children:"Progress Bars"}),e("h6",{className:"card-subtitle text-muted",children:"Examples for using Bootstrap custom progress bars."})]}),r(n.Body,{children:[e(b,{className:"mb-3",variant:"primary",now:25,label:"Default"}),e(b,{className:"mb-3",striped:!0,variant:"primary",now:50,label:"Striped"}),e(b,{className:"mb-3",striped:!0,animated:!0,variant:"primary",now:75,label:"Striped"}),r(b,{children:[e(b,{variant:"primary",now:25,label:"Stacked"},1),e(b,{variant:"success",now:15,label:"15%"},2),e(b,{variant:"warning",now:30,label:"30%"},3),e(b,{variant:"danger",now:20,label:"20%"},4)]})]})]}),he=()=>r(n,{children:[r(n.Header,{children:[e(n.Title,{children:"Tooltips"}),e("h6",{className:"card-subtitle text-muted",children:"Examples for adding custom Bootstrap tooltips."})]}),e(n.Body,{className:"text-center",children:M.map((a,i)=>e("span",{className:"me-1",children:e(P,{placement:a.value,overlay:r(ee,{id:`tooltip-${a.value}`,children:["Tooltip on ",a.name,"."]}),children:r(q,{variant:"secondary",children:["Tooltip on ",a.name]})})},a.value))})]}),pe=()=>r(n,{children:[r(n.Header,{children:[e(n.Title,{children:"Spinners"}),e("h6",{className:"card-subtitle text-muted",children:"Indicate the loading state of a component with Bootstrap spinners."})]}),r(n.Body,{children:[r("div",{className:"mb-2",children:[e(g,{animation:"border",variant:"dark",className:"me-2"}),x.map((a,i)=>e(g,{animation:"border",variant:a.value,className:"me-2"},i))]}),r("div",{className:"mb-2",children:[e(g,{animation:"border",variant:"dark",size:"sm",className:"me-2"}),x.map((a,i)=>e(g,{animation:"border",variant:a.value,size:"sm",className:"me-2"},i))]}),e("hr",{}),r("div",{className:"mb-2",children:[e(g,{animation:"grow",variant:"dark",type:"grow",className:"me-2"}),x.map((a,i)=>e(g,{animation:"grow",variant:a.value,type:"grow",className:"me-2"},i))]}),r("div",{className:"mb-2",children:[e(g,{animation:"grow",variant:"dark",type:"grow",size:"sm",className:"me-2"}),x.map((a,i)=>e(g,{animation:"grow",variant:a.value,type:"grow",size:"sm",className:"me-2"},i))]})]})]}),Ae=()=>r(_.Fragment,{children:[e(Z,{title:"General"}),r(J,{fluid:!0,className:"p-0",children:[e("h1",{className:"h3 mb-3",children:"General"}),r(X,{children:[r(H,{lg:"6",children:[e(le,{}),e(oe,{}),e(se,{}),e(me,{}),e(he,{})]}),r(H,{lg:"6",children:[e(ce,{}),e(de,{}),e(ue,{}),e(pe,{})]})]})]})]});export{Ae as default};
