import{d as o,x as m,j as p,Q as N,w as g}from"./main-05ddef70.js";import{r as l}from"./chartjs-8bcccd15.js";const d=l.forwardRef(({active:s=!1,disabled:a=!1,className:e,style:t,activeLabel:n="(current)",children:r,...c},u)=>{const P=s||a?"span":N;return o("li",{ref:u,style:t,className:m(e,"page-item",{active:s,disabled:a}),children:p(P,{className:"page-link",...c,children:[r,s&&n&&o("span",{className:"visually-hidden",children:n})]})})});d.displayName="PageItem";const h=d;function i(s,a,e=s){const t=l.forwardRef(({children:n,...r},c)=>p(d,{...r,ref:c,children:[o("span",{"aria-hidden":"true",children:n||a}),o("span",{className:"visually-hidden",children:e})]}));return t.displayName=s,t}const x=i("First","«"),y=i("Prev","‹","Previous"),j=i("Ellipsis","…","More"),w=i("Next","›"),B=i("Last","»"),f=l.forwardRef(({bsPrefix:s,className:a,size:e,...t},n)=>{const r=g(s,"pagination");return o("ul",{ref:n,...t,className:m(a,r,e&&`${r}-${e}`)})});f.displayName="Pagination";const E=Object.assign(f,{First:x,Prev:y,Ellipsis:j,Item:h,Next:w,Last:B});export{E as P};