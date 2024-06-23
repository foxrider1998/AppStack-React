import{j as a,d as e,W as z,C as P,R as I,h as y,F as O,q as m,B as j,m as C,r as c,n as M,g as v,o as f,I as L}from"./main-11f2565f.js";import{r as B,R as p}from"./chartjs-8bcccd15.js";import{a as k}from"./avatar-2-da4e520a.js";import{F as d}from"./index.es-ebb9cd8b.js";import{d as h}from"./index-e7f6075d.js";import{C as S}from"./Card-190f7cd8.js";import{o as u}from"./googlemaps-6af91147.js";import{M as $}from"./more-horizontal-8062219a.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";function N(){return N=Object.assign||function(i){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},N.apply(this,arguments)}function W(i,l){if(i==null)return{};var t=E(i,l),r,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(n=0;n<s.length;n++)r=s[n],!(l.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(t[r]=i[r])}return t}function E(i,l){if(i==null)return{};var t={},r=Object.keys(i),n,s;for(s=0;s<r.length;s++)n=r[s],!(l.indexOf(n)>=0)&&(t[n]=i[n]);return t}var b=B.forwardRef(function(i,l){var t=i.color,r=t===void 0?"currentColor":t,n=i.size,s=n===void 0?24:n,g=W(i,["color","size"]);return p.createElement("svg",N({ref:l,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},g),p.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}))});b.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};b.displayName="Phone";const q=b;function x(){return x=Object.assign||function(i){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},x.apply(this,arguments)}function F(i,l){if(i==null)return{};var t=R(i,l),r,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(n=0;n<s.length;n++)r=s[n],!(l.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(t[r]=i[r])}return t}function R(i,l){if(i==null)return{};var t={},r=Object.keys(i),n,s;for(s=0;s<r.length;s++)n=r[s],!(l.indexOf(n)>=0)&&(t[n]=i[n]);return t}var w=B.forwardRef(function(i,l){var t=i.color,r=t===void 0?"currentColor":t,n=i.size,s=n===void 0?24:n,g=F(i,["color","size"]);return p.createElement("svg",x({ref:l,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},g),p.createElement("polygon",{points:"23 7 16 12 23 17 23 7"}),p.createElement("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"}))});w.propTypes={color:u.string,size:u.oneOfType([u.string,u.number])};w.displayName="Video";const T=w,o=({position:i,avatar:l,name:t,children:r,time:n})=>a("div",{className:`chat-message-${i} pb-4`,children:[a("div",{children:[e("img",{src:l,className:"rounded-circle me-1",alt:t,width:"40",height:"40"}),e("div",{className:"text-muted small text-nowrap mt-2",children:n})]}),a("div",{className:`flex-shrink-1 bg-light rounded py-2 px-3 ${i==="right"?"me-3":"ms-3"}`,children:[e("div",{className:"fw-bold mb-1",children:t}),r]})]}),U=()=>a(p.Fragment,{children:[e(z,{title:"Chat"}),a(P,{fluid:!0,className:"p-0",children:[e("h1",{className:"h3 mb-3",children:"Messages"}),e(S,{children:a(I,{className:"g-0",children:[a(y,{lg:5,xl:3,className:"border-end list-group",children:[e("div",{className:"px-4 d-none d-md-block",children:e("div",{className:"d-flex align-items-center",children:e("div",{className:"flex-grow-1",children:e(O.Control,{type:"text",className:"my-3",placeholder:"Search..."})})})}),a(m.Item,{action:!0,tag:"a",href:"#",className:"border-0",children:[e(j,{bg:"success",className:"float-end",children:"5"}),a("div",{className:"d-flex",children:[e("img",{src:C,className:"rounded-circle me-1",alt:"Ashley Briggs",width:"40",height:"40"}),a("div",{className:"flex-grow-1 ms-3",children:["Ashley Briggs",a("div",{className:"small",children:[e(d,{icon:h,className:"chat-online"})," ","Online"]})]})]})]}),a(m.Item,{action:!0,tag:"a",href:"#",className:"border-0",children:[e(j,{bg:"success",className:"float-end",children:"2"}),a("div",{className:"d-flex",children:[e("img",{src:k,className:"rounded-circle me-1",alt:"Carl Jenkins",width:"40",height:"40"}),a("div",{className:"flex-grow-1 ms-3",children:["Carl Jenkins",a("div",{className:"small",children:[e(d,{icon:h,className:"chat-online"})," ","Online"]})]})]})]}),e(m.Item,{action:!0,tag:"a",href:"#",className:"border-0",children:a("div",{className:"d-flex",children:[e("img",{src:c,className:"rounded-circle me-1",alt:"Bertha Martin",width:"40",height:"40"}),a("div",{className:"flex-grow-1 ms-3",children:["Bertha Martin",a("div",{className:"small",children:[e(d,{icon:h,className:"chat-online"})," ","Online"]})]})]})}),e(m.Item,{action:!0,tag:"a",href:"#",className:"border-0",children:a("div",{className:"d-flex",children:[e("img",{src:M,className:"rounded-circle me-1",alt:"Stacie Hall",width:"40",height:"40"}),a("div",{className:"flex-grow-1 ms-3",children:["Stacie Hall",a("div",{className:"small",children:[e(d,{icon:h,className:"chat-offline"})," ","Offline"]})]})]})}),e(m.Item,{action:!0,tag:"a",href:"#",className:"border-0",children:a("div",{className:"d-flex",children:[e("img",{src:C,className:"rounded-circle me-1",alt:"Fiona Green",width:"40",height:"40"}),a("div",{className:"flex-grow-1 ms-3",children:["Fiona Green",a("div",{className:"small",children:[e(d,{icon:h,className:"chat-offline"})," ","Offline"]})]})]})}),e(m.Item,{action:!0,tag:"a",href:"#",className:"border-0",children:a("div",{className:"d-flex",children:[e("img",{src:k,className:"rounded-circle me-1",alt:"Doris Wilder",width:"40",height:"40"}),a("div",{className:"flex-grow-1 ms-3",children:["Doris Wilder",a("div",{className:"small",children:[e(d,{icon:h,className:"chat-offline"})," ","Offline"]})]})]})}),e(m.Item,{action:!0,tag:"a",href:"#",className:"border-0",children:a("div",{className:"d-flex",children:[e("img",{src:M,className:"rounded-circle me-1",alt:"Haley Kennedy",width:"40",height:"40"}),a("div",{className:"flex-grow-1 ms-3",children:["Haley Kennedy",a("div",{className:"small",children:[e(d,{icon:h,className:"chat-offline"})," ","Offline"]})]})]})}),e(m.Item,{action:!0,tag:"a",href:"#",className:"border-0",children:a("div",{className:"d-flex",children:[e("img",{src:c,className:"rounded-circle me-1",alt:"Jennifer Chang",width:"40",height:"40"}),a("div",{className:"flex-grow-1 ms-3",children:["Jennifer Chang",a("div",{className:"small",children:[e(d,{icon:h,className:"chat-offline"})," ","Offline"]})]})]})}),e("hr",{className:"d-block d-lg-none mt-1 mb-0"})]}),a(y,{lg:7,xl:9,children:[e("div",{className:"py-2 px-4 border-bottom d-none d-lg-block",children:a("div",{className:"d-flex align-items-center py-1",children:[e("div",{className:"position-relative",children:e("img",{src:c,className:"rounded-circle me-1",alt:"Bertha Martin",width:"40",height:"40"})}),a("div",{className:"flex-grow-1 ps-3",children:[e("strong",{children:"Bertha Martin"}),e("div",{className:"text-muted small",children:e("em",{children:"Typing..."})})]}),a("div",{children:[e(v,{size:"lg",variant:"primary",className:"px-3 me-2",children:e(q,{className:"feather"})}),e(v,{size:"lg",variant:"info",className:"me-2 px-3 d-none d-md-inline-block",children:e(T,{className:"feather"})}),e(v,{size:"lg",variant:"light",className:"px-3 border",children:e($,{className:"feather"})})]})]})}),e("div",{className:"position-relative",children:a("div",{className:"chat-messages p-4",children:[e(o,{position:"right",name:"You",avatar:f,time:"2:33 am",children:"Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix."}),e(o,{position:"left",name:"Bertha Martin",avatar:c,time:"2:34 am",children:"Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo."}),e(o,{position:"right",name:"You",avatar:f,time:"2:35 am",children:"Cum ea graeci tractatos."}),e(o,{position:"left",name:"Bertha Martin",avatar:c,time:"2:36 am",children:"Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit. Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus."}),e(o,{position:"left",name:"Bertha Martin",avatar:c,time:"2:37 am",children:"Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci."}),e(o,{position:"right",name:"You",avatar:f,time:"2:38 am",children:"Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix."}),e(o,{position:"left",name:"Bertha Martin",avatar:c,time:"2:39 am",children:"Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo."}),e(o,{position:"right",name:"You",avatar:f,time:"2:40 am",children:"Cum ea graeci tractatos."}),e(o,{position:"right",name:"You",avatar:f,time:"2:41 am",children:"Morbi finibus, lorem id placerat ullamcorper, nunc enim ultrices massa, id dignissim metus urna eget purus."}),e(o,{position:"left",name:"Bertha Martin",avatar:c,time:"2:42 am",children:"Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit. Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus."}),e(o,{position:"right",name:"You",avatar:f,time:"2:43 am",children:"Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix."}),e(o,{position:"left",name:"Bertha Martin",avatar:c,time:"2:44 am",children:"Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo."})]})}),e("div",{className:"flex-grow-0 py-3 px-4 border-top",children:a(L,{children:[e(O.Control,{type:"text",placeholder:"Type your message"}),e(v,{variant:"primary",children:"Send"})]})})]})]})})]})]});export{U as default};
