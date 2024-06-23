import{k as n,j as r,d as e,W as d,C as m,R as h,h as o}from"./main-05ddef70.js";import{r as t,R as p}from"./chartjs-8bcccd15.js";import{j as c}from"./vectormaps-5a12ad1d.js";import{C as a}from"./Card-ca2d0c1d.js";import"./googlemaps-6af91147.js";import"./apexcharts-65e52e7e.js";function u(){const l=n(),[s,i]=t.useState(!1);return t.useEffect(()=>{setTimeout(()=>{i(!0)},100)},[]),t.useEffect(()=>{s&&new c({selector:"#maps_world",map:"world",regionStyle:{initial:{fill:l["gray-200"]}},backgroundColor:"transparent",containerStyle:{width:"100%",height:"100%"},zoomOnScroll:!1})},[s,l]),r(a,{children:[e(a.Header,{children:e(a.Title,{className:"mb-0",children:"World Map"})}),e(a.Body,{children:e("div",{className:"map-container",style:{height:300},children:e("div",{id:"maps_world"})})})]})}function f(){const l=n(),[s,i]=t.useState(!1);return t.useEffect(()=>{setTimeout(()=>{i(!0)},100)},[]),t.useEffect(()=>{s&&new c({selector:"#maps_usa",map:"us_aea_en",regionStyle:{initial:{fill:l["gray-200"]}},backgroundColor:"transparent",containerStyle:{width:"100%",height:"100%"},zoomOnScroll:!1})},[s,l]),r(a,{children:[e(a.Header,{children:e(a.Title,{className:"mb-0",children:"USA Map"})}),e(a.Body,{children:e("div",{className:"map-container",style:{height:300},children:e("div",{id:"maps_usa"})})})]})}const v=()=>r(p.Fragment,{children:[e(d,{title:"Vector Maps"}),r(m,{fluid:!0,className:"p-0",children:[e("h1",{className:"h3 mb-3",children:"Vector Maps"}),r(a,{children:[e(a.Header,{children:e(a.Title,{className:"mb-0",children:"Jsvectormap"})}),e(a.Body,{className:"pt-0",children:r("p",{className:"mb-0",children:["A JavaScript library for creating interactive maps."," ",e("a",{href:"https://github.com/kadoshms/react-jvectormap",target:"_blank",rel:"nofollow noreferrer",children:"Documentation & map downloads"}),"."]})})]}),r(h,{children:[e(o,{lg:"6",children:e(u,{})}),e(o,{lg:"6",children:e(f,{})})]})]})]});export{v as default};
