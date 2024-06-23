import{j as n,D as r,d as e,g as a,W as k,C as z,R as f,h,I as i,F as o,aE as d}from"./main-11f2565f.js";import{r as E,R as H}from"./chartjs-8bcccd15.js";import{C as t}from"./Card-190f7cd8.js";import{a as G,D as c}from"./DropdownButton-45b0c853.js";import{o as l}from"./googlemaps-6af91147.js";import{B as F}from"./ButtonGroup-93aa5894.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";const M={id:l.string,toggleLabel:l.string,href:l.string,target:l.string,onClick:l.func,title:l.node.isRequired,type:l.string,disabled:l.bool,align:G,menuRole:l.string,renderMenuOnMount:l.bool,rootCloseEvent:l.string,flip:l.bool,bsPrefix:l.string,variant:l.string,size:l.string},m=E.forwardRef(({id:w,bsPrefix:p,size:u,variant:b,title:x,type:I="button",toggleLabel:T="Toggle dropdown",children:y,onClick:B,href:N,target:v,menuRole:C,renderMenuOnMount:S,rootCloseEvent:A,flip:D,...s},R)=>n(r,{ref:R,...s,as:F,children:[e(a,{size:u,variant:b,disabled:s.disabled,bsPrefix:p,href:N,target:v,onClick:B,type:I,children:x}),e(r.Toggle,{split:!0,id:w,size:u,variant:b,disabled:s.disabled,childBsPrefix:p,children:e("span",{className:"visually-hidden",children:T})}),e(r.Menu,{role:C,renderOnMount:S,rootCloseEvent:A,flip:D,children:y})]}));m.propTypes=M;m.displayName="SplitButton";const g=m,U=()=>n(t,{children:[e(t.Header,{children:e(t.Title,{className:"mb-0",children:"Default"})}),n(t.Body,{children:[n(i,{className:"mb-3",children:[e(i.Text,{children:"@"}),e(o.Control,{placeholder:"Username"})]}),n(i,{className:"mb-3",children:[e(o.Control,{placeholder:"Recipient's username"}),e(i.Text,{children:"@example.com"})]}),n(i,{className:"mb-3",children:[e(i.Text,{children:"https://example.com/users/"}),e(o.Control,{})]}),n(i,{className:"mb-3",children:[e(i.Text,{children:"$"}),e(o.Control,{}),e(i.Text,{children:".00"})]}),n(i,{children:[e(i.Text,{children:"$"}),e(i.Text,{children:"0.00"}),e(o.Control,{})]})]})]}),j=()=>n(t,{children:[e(t.Header,{children:e(t.Title,{className:"mb-0",children:"Checkbox and radio addons"})}),e(t.Body,{children:n(f,{children:[e(h,{lg:"6",children:n(i,{className:"mb-3",children:[e(i.Checkbox,{"aria-label":"Checkbox for following text input"}),e(d,{"aria-label":"Text input with checkbox",placeholder:"Checkbox"})]})}),e(h,{lg:"6",children:n(i,{children:[e(i.Radio,{"aria-label":"Radio button for following text input"}),e(d,{"aria-label":"Text input with radio button",placeholder:"Radio"})]})})]})})]}),P=()=>n(t,{children:[e(t.Header,{children:e(t.Title,{className:"mb-0",children:"Sizing"})}),n(t.Body,{children:[n(i,{className:"mb-3",size:"lg",children:[e(i.Text,{children:"@"}),e(o.Control,{placeholder:"Username"})]}),n(i,{className:"mb-3",children:[e(i.Text,{children:"@"}),e(o.Control,{placeholder:"Username"})]}),n(i,{size:"sm",children:[e(i.Text,{children:"@"}),e(o.Control,{placeholder:"Username"})]})]})]}),$=()=>n(t,{children:[e(t.Header,{children:e(t.Title,{className:"mb-0",children:"Button addons"})}),n(t.Body,{children:[n(i,{className:"mb-3",children:[e(a,{variant:"secondary",id:"button-addon1",children:"Button"}),e(d,{"aria-label":"Example text with button addon","aria-describedby":"basic-addon1"})]}),n(i,{className:"mb-3",children:[e(d,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),e(a,{variant:"secondary",id:"button-addon2",children:"Button"})]}),n(i,{className:"mb-3",children:[e(a,{variant:"secondary",children:"Button"}),e(a,{variant:"secondary",children:"Button"}),e(d,{"aria-label":"Example text with two button addons"})]}),n(i,{children:[e(d,{placeholder:"Recipient's username","aria-label":"Recipient's username with two button addons"}),e(a,{variant:"secondary",children:"Button"}),e(a,{variant:"secondary",children:"Button"})]})]})]}),O=()=>n(t,{children:[e(t.Header,{children:e(t.Title,{className:"mb-0",children:"Buttons with dropdowns"})}),n(t.Body,{children:[n(i,{className:"mb-3",children:[n(c,{variant:"secondary",title:"Dropdown",id:"input-group-dropdown-1",children:[e(r.Item,{href:"#",children:"Action"}),e(r.Item,{href:"#",children:"Another action"}),e(r.Item,{href:"#",children:"Something else here"}),e(r.Divider,{}),e(r.Item,{href:"#",children:"Separated link"})]}),e(d,{"aria-label":"Text input with dropdown button"})]}),n(i,{className:"mb-3",children:[e(d,{"aria-label":"Text input with dropdown button"}),n(c,{variant:"secondary",title:"Dropdown",id:"input-group-dropdown-2",align:"end",children:[e(r.Item,{href:"#",children:"Action"}),e(r.Item,{href:"#",children:"Another action"}),e(r.Item,{href:"#",children:"Something else here"}),e(r.Divider,{}),e(r.Item,{href:"#",children:"Separated link"})]})]}),n(i,{children:[n(c,{variant:"secondary",title:"Dropdown",id:"input-group-dropdown-3",children:[e(r.Item,{href:"#",children:"Action"}),e(r.Item,{href:"#",children:"Another action"}),e(r.Item,{href:"#",children:"Something else here"}),e(r.Divider,{}),e(r.Item,{href:"#",children:"Separated link"})]}),e(d,{"aria-label":"Text input with 2 dropdown buttons"}),n(c,{variant:"secondary",title:"Dropdown",id:"input-group-dropdown-4",align:"end",children:[e(r.Item,{href:"#",children:"Action"}),e(r.Item,{href:"#",children:"Another action"}),e(r.Item,{href:"#",children:"Something else here"}),e(r.Divider,{}),e(r.Item,{href:"#",children:"Separated link"})]})]})]})]}),W=()=>n(t,{children:[e(t.Header,{children:e(t.Title,{className:"mb-0",children:"Segmented buttons"})}),n(t.Body,{children:[n(i,{className:"mb-3",children:[n(g,{variant:"secondary",title:"Action",id:"segmented-button-dropdown-1",children:[e(r.Item,{href:"#",children:"Action"}),e(r.Item,{href:"#",children:"Another action"}),e(r.Item,{href:"#",children:"Something else here"}),e(r.Divider,{}),e(r.Item,{href:"#",children:"Separated link"})]}),e(d,{"aria-label":"Text input with dropdown button"})]}),n(i,{className:"mb-3",children:[e(d,{"aria-label":"Text input with dropdown button"}),n(g,{variant:"secondary",title:"Action",id:"segmented-button-dropdown-2",alignRight:!0,children:[e(r.Item,{href:"#",children:"Action"}),e(r.Item,{href:"#",children:"Another action"}),e(r.Item,{href:"#",children:"Something else here"}),e(r.Divider,{}),e(r.Item,{href:"#",children:"Separated link"})]})]})]})]}),Z=()=>n(H.Fragment,{children:[e(k,{title:"Input Groups"}),n(z,{fluid:!0,className:"p-0",children:[e("h1",{className:"h3 mb-3",children:"Input Groups"}),n(f,{children:[n(h,{lg:"6",children:[e(U,{}),e(j,{}),e(P,{})]}),n(h,{lg:"6",children:[e($,{}),e(O,{}),e(W,{})]})]})]})]});export{Z as default};
