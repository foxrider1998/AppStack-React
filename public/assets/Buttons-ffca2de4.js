import{w as F,d as e,x as G,j as i,W as K,C as L,R as j,h as d,g as a,D as s}from"./main-11f2565f.js";import{r as M,R as P}from"./chartjs-8bcccd15.js";import{F as n}from"./index.es-ebb9cd8b.js";import{e as o,g as h,h as u,i as b,j as v}from"./index-e7f6075d.js";import{b as N}from"./index-1f009613.js";import{a as g,f as p,d as B,g as f,h as y,i as x,j as w,b as I,k,l as S,m as D}from"./index-8fad63a7.js";import{C as l}from"./Card-190f7cd8.js";import{D as T}from"./DropdownButton-45b0c853.js";import{B as c}from"./ButtonGroup-93aa5894.js";import"./googlemaps-6af91147.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";const R=M.forwardRef(({bsPrefix:r,className:t,role:z="toolbar",...H},A)=>{const C=F(r,"btn-toolbar");return e("div",{...H,ref:A,className:G(t,C),role:z})});R.displayName="ButtonToolbar";const $=R,m=[{name:"Primary",value:"primary"},{name:"Secondary",value:"secondary"},{name:"Success",value:"success"},{name:"Danger",value:"danger"},{name:"Warning",value:"warning"},{name:"Info",value:"info"}],q=()=>i(l,{children:[i(l.Header,{children:[e(l.Title,{children:"Basic Buttons"}),e("h6",{className:"card-subtitle text-muted",children:"Default Bootstrap buttons style."})]}),i(l.Body,{className:"text-center",children:[e("div",{className:"mb-3",children:m.map((r,t)=>e(a,{variant:r.value,className:"me-1 mb-1",children:r.name},t))}),e("div",{children:m.map((r,t)=>e(a,{variant:r.value,className:"me-1 mb-1",disabled:!0,children:r.name},t))})]})]}),V=()=>i(l,{children:[i(l.Header,{children:[e(l.Title,{children:"Rounded Buttons"}),e("h6",{className:"card-subtitle text-muted",children:"Rounded Bootstrap buttons."})]}),i(l.Body,{className:"text-center",children:[e("div",{className:"mb-3",children:m.map((r,t)=>e(a,{variant:r.value,className:"btn-pill me-1 mb-1",children:r.name},t))}),e("div",{children:m.map((r,t)=>e(a,{variant:r.value,className:"btn-pill me-1 mb-1",disabled:!0,children:r.name},t))})]})]}),W=()=>i(l,{children:[i(l.Header,{children:[e(l.Title,{children:"Outline Buttons"}),e("h6",{className:"card-subtitle text-muted",children:"Buttons without background color."})]}),i(l.Body,{className:"text-center",children:[e("div",{className:"mb-3",children:m.map((r,t)=>e(a,{variant:`outline-${r.value}`,className:"me-1 mb-1",children:r.name},t))}),e("div",{children:m.map((r,t)=>e(a,{variant:`outline-${r.value}`,className:"me-1 mb-1",disabled:!0,children:r.name},t))})]})]}),E=()=>i(l,{children:[i(l.Header,{children:[e(l.Title,{children:"Square Buttons"}),e("h6",{className:"card-subtitle text-muted",children:"Buttons without border radius."})]}),i(l.Body,{className:"text-center",children:[e("div",{className:"mb-3",children:m.map((r,t)=>e(a,{variant:r.value,className:"me-1 mb-1 btn-square",children:r.name},t))}),e("div",{children:m.map((r,t)=>e(a,{variant:r.value,className:"me-1 mb-1 btn-square",disabled:!0,children:r.name},t))})]})]}),O=()=>i(l,{children:[i(l.Header,{children:[e(l.Title,{children:"Icon Buttons"}),e("h6",{className:"card-subtitle text-muted",children:"Default Bootstrap buttons with icons."})]}),i(l.Body,{className:"text-center",children:[i("div",{className:"mb-3",children:[i(a,{variant:"primary",className:"me-1 mb-1",children:[e(n,{icon:N})," Primary"]}),i(a,{variant:"secondary",className:"me-1 mb-1",children:[e(n,{icon:o})," Secondary"]}),i(a,{variant:"success",className:"me-1 mb-1",children:[e(n,{icon:h})," Success"]}),i(a,{variant:"danger",className:"me-1 mb-1",children:[e(n,{icon:u})," Danger"]}),i(a,{variant:"warning",className:"me-1 mb-1",children:[e(n,{icon:b})," Warning"]}),i(a,{variant:"info",className:"me-1 mb-1",children:[e(n,{icon:v})," Info"]})]}),i("div",{children:[e(a,{variant:"primary",className:"me-1 mb-1",children:e(n,{icon:N})}),e(a,{variant:"secondary",className:"me-1 mb-1",children:e(n,{icon:o})}),e(a,{variant:"success",className:"me-1 mb-1",children:e(n,{icon:h})}),e(a,{variant:"danger",className:"me-1 mb-1",children:e(n,{icon:u})}),e(a,{variant:"warning",className:"me-1 mb-1",children:e(n,{icon:b})}),e(a,{variant:"info",className:"me-1 mb-1",children:e(n,{icon:v})})]})]})]}),Y=()=>i(l,{children:[i(l.Header,{children:[e(l.Title,{children:"Social Buttons"}),e("h6",{className:"card-subtitle text-muted",children:"Social buttons with icons."})]}),i(l.Body,{className:"text-center",children:[i("div",{className:"mb-3",children:[i(a,{variant:"facebook",className:"me-1 mb-1",children:[e(n,{icon:g,className:"align-middle"})," ","Facebook"]}),i(a,{variant:"twitter",className:"me-1 mb-1",children:[e(n,{icon:p,className:"align-middle"})," Twitter"]}),i(a,{variant:"google",className:"me-1 mb-1",children:[e(n,{icon:B,className:"align-middle"})," Google"]}),i(a,{variant:"youtube",className:"me-1 mb-1",children:[e(n,{icon:f,className:"align-middle"})," Youtube"]}),i(a,{variant:"vimeo",className:"me-1 mb-1",children:[e(n,{icon:y,className:"align-middle"})," Vimeo"]}),i(a,{variant:"dribbble",className:"me-1 mb-1",children:[e(n,{icon:x,className:"align-middle"})," ","Dribbble"]}),i(a,{variant:"github",className:"me-1 mb-1",children:[e(n,{icon:w,className:"align-middle"})," Github"]}),i(a,{variant:"instagram",className:"me-1 mb-1",children:[e(n,{icon:I,className:"align-middle"})," ","Instagram"]}),i(a,{variant:"pinterest",className:"me-1 mb-1",children:[e(n,{icon:k,className:"align-middle"})," ","Pinterest"]}),i(a,{variant:"flickr",className:"me-1 mb-1",children:[e(n,{icon:S,className:"align-middle"})," Flickr"]}),i(a,{variant:"bitbucket",className:"me-1 mb-1",children:[e(n,{icon:D,className:"align-middle"})," ","Bitbucket"]})]}),i("div",{children:[e(a,{variant:"facebook",className:"me-1 mb-1",children:e(n,{icon:g,className:"align-middle"})}),e(a,{variant:"twitter",className:"me-1 mb-1",children:e(n,{icon:p,className:"align-middle"})}),e(a,{variant:"google",className:"me-1 mb-1",children:e(n,{icon:B,className:"align-middle"})}),e(a,{variant:"youtube",className:"me-1 mb-1",children:e(n,{icon:f,className:"align-middle"})}),e(a,{variant:"vimeo",className:"me-1 mb-1",children:e(n,{icon:y,className:"align-middle"})}),e(a,{variant:"dribbble",className:"me-1 mb-1",children:e(n,{icon:x,className:"align-middle"})}),e(a,{variant:"github",className:"me-1 mb-1",children:e(n,{icon:w,className:"align-middle"})}),e(a,{variant:"instagram",className:"me-1 mb-1",children:e(n,{icon:I,className:"align-middle"})}),e(a,{variant:"pinterest",className:"me-1 mb-1",children:e(n,{icon:k,className:"align-middle"})}),e(a,{variant:"flickr",className:"me-1 mb-1",children:e(n,{icon:S,className:"align-middle"})}),e(a,{variant:"bitbucket",className:"me-1 mb-1",children:e(n,{icon:D,className:"align-middle"})})]})]})]}),J=()=>i(l,{children:[i(l.Header,{children:[e(l.Title,{children:"Button Sizes"}),e("h6",{className:"card-subtitle text-muted",children:"Fancy larger or smaller buttons."})]}),i(l.Body,{className:"text-center",children:[i("div",{className:"mb-3",children:[e(a,{variant:"primary",size:"sm",className:"me-1",children:"Small"}),e(a,{variant:"primary",className:"me-1",children:"Medium"}),e(a,{variant:"primary",size:"lg",className:"me-1",children:"Large"})]}),i("div",{children:[i(a,{variant:"primary",size:"sm",className:"me-1",children:[e(n,{icon:o})," Small"]}),i(a,{variant:"primary",className:"me-1",children:[e(n,{icon:o})," Medium"]}),i(a,{variant:"primary",size:"lg",className:"me-1",children:[e(n,{icon:o})," Large"]})]})]})]}),Q=()=>i(l,{children:[i(l.Header,{children:[e(l.Title,{children:"Button Dropdown"}),e("h6",{className:"card-subtitle text-muted",children:"Dropdowns styles with buttons."})]}),i(l.Body,{className:"text-center",children:[e("div",{className:"mb-3",children:m.map((r,t)=>i(T,{as:c,id:`dropdown-variants-${r.name}`,variant:r.name.toLowerCase(),title:r.name,className:"me-2",children:[e(s.Item,{eventKey:"1",children:"Action"}),e(s.Item,{eventKey:"2",children:"Another action"}),e(s.Item,{eventKey:"3",children:"Active Item"}),e(s.Divider,{}),e(s.Item,{eventKey:"4",children:"Separated link"})]},r.name))}),e("div",{className:"mb-3",children:m.map((r,t)=>i(T,{as:c,id:`dropdown-variants-${r.name}`,variant:r.name.toLowerCase(),title:r.name,className:"me-2",size:"sm",children:[e(s.Item,{eventKey:"1",children:"Action"}),e(s.Item,{eventKey:"2",children:"Another action"}),e(s.Item,{eventKey:"3",children:"Active Item"}),e(s.Divider,{}),e(s.Item,{eventKey:"4",children:"Separated link"})]},r.name))})]})]}),U=()=>i(l,{children:[i(l.Header,{children:[e(l.Title,{children:"Button Group"}),e("h6",{className:"card-subtitle text-muted",children:"Button group components."})]}),i(l.Body,{children:[e("h6",{className:"card-subtitle mb-2 text-muted",children:"Horizontal button group"}),e("div",{className:"mb-3",children:i(c,{variant:"primary",size:"lg",children:[e(a,{children:"Left"}),e(a,{children:"Middle"}),e(a,{children:"Right"})]})}),e("div",{className:"mb-3",children:i(c,{variant:"primary",children:[e(a,{children:"Left"}),e(a,{children:"Middle"}),e(a,{children:"Right"})]})}),e("div",{className:"mb-3",children:i(c,{variant:"primary",size:"sm",children:[e(a,{children:"Left"}),e(a,{children:"Middle"}),e(a,{children:"Right"})]})}),e("h6",{className:"card-subtitle mb-2 text-muted",children:"Button toolbar"}),e("div",{className:"mb-3",children:i($,{children:[i(c,{className:"me-2",children:[e(a,{children:"1"}),e(a,{children:"2"}),e(a,{children:"3"}),e(a,{children:"4"})]}),i(c,{className:"me-2",children:[e(a,{children:"5"}),e(a,{children:"6"}),e(a,{children:"7"})]}),e(c,{children:e(a,{children:"8"})})]})}),e("h6",{className:"card-subtitle mb-2 text-muted",children:"Vertical button group"}),i(c,{vertical:!0,className:"me-2",children:[e(a,{variant:"primary",children:"Button"}),e(a,{variant:"primary",children:"Button"}),e(a,{variant:"primary",children:"Button"})]}),i(c,{vertical:!0,className:"me-2",children:[e(a,{variant:"success",children:"Button"}),e(a,{variant:"success",children:"Button"}),e(a,{variant:"success",children:"Button"})]}),i(c,{vertical:!0,className:"me-2",children:[e(a,{variant:"warning",children:"Button"}),e(a,{variant:"warning",children:"Button"}),e(a,{variant:"warning",children:"Button"})]}),i(c,{vertical:!0,className:"me-2",children:[e(a,{variant:"danger",children:"Button"}),e(a,{variant:"danger",children:"Button"}),e(a,{variant:"danger",children:"Button"})]})]})]}),me=()=>i(P.Fragment,{children:[e(K,{title:"Buttons"}),i(L,{fluid:!0,className:"p-0",children:[e("h1",{className:"h3 mb-3",children:"Buttons"}),i(j,{children:[e(d,{lg:"6",children:e(q,{})}),e(d,{lg:"6",children:e(V,{})}),e(d,{lg:"6",children:e(W,{})}),e(d,{lg:"6",children:e(E,{})}),e(d,{lg:"6",children:e(O,{})}),e(d,{lg:"6",children:e(Y,{})}),i(d,{lg:"6",children:[e(J,{}),e(Q,{})]}),e(d,{lg:"6",children:e(U,{})})]})]})]});export{me as default};