import{j as l,d as e,D as n,k as y,R as m,h as c,i as S,g as u,B as o,W as k,C as w}from"./main-11f2565f.js";import{r as p,R as g,B as A}from"./chartjs-8bcccd15.js";import{C as r}from"./Card-190f7cd8.js";import{M as f}from"./more-horizontal-8062219a.js";import{F as T,R as C}from"./refresh-cw-724a6cec.js";import{T as B}from"./Table-d0c0adb8.js";import{S as I}from"./shopping-bag-d8072084.js";import{o as N}from"./googlemaps-6af91147.js";import{A as O}from"./activity-7a4aef9b.js";import{j as P}from"./vectormaps-5a12ad1d.js";import"./apexcharts-65e52e7e.js";function b(){return b=Object.assign||function(a){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(a[d]=i[d])}return a},b.apply(this,arguments)}function M(a,s){if(a==null)return{};var i=j(a,s),d,t;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(a);for(t=0;t<h.length;t++)d=h[t],!(s.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(i[d]=a[d])}return i}function j(a,s){if(a==null)return{};var i={},d=Object.keys(a),t,h;for(h=0;h<d.length;h++)t=d[h],!(s.indexOf(t)>=0)&&(i[t]=a[t]);return i}var x=p.forwardRef(function(a,s){var i=a.color,d=i===void 0?"currentColor":i,t=a.size,h=t===void 0?24:t,v=M(a,["color","size"]);return g.createElement("svg",b({ref:s,xmlns:"http://www.w3.org/2000/svg",width:h,height:h,viewBox:"0 0 24 24",fill:"none",stroke:d,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},v),g.createElement("circle",{cx:"9",cy:"21",r:"1"}),g.createElement("circle",{cx:"20",cy:"21",r:"1"}),g.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))});x.propTypes={color:N.string,size:N.oneOfType([N.string,N.number])};x.displayName="ShoppingCart";const R=x,D=()=>l(r,{className:"flex-fill w-100",children:[l(r.Header,{children:[e("div",{className:"card-actions float-end",children:l(n,{align:"end",children:[e(n.Toggle,{as:"a",bsPrefix:"-",children:e(f,{})}),l(n.Menu,{children:[e(n.Item,{children:"Action"}),e(n.Item,{children:"Another Action"}),e(n.Item,{children:"Something else here"})]})]})}),e(r.Title,{className:"mb-0",children:"Order Activity"})]}),e(r.Body,{className:"d-flex",children:l("ul",{className:"timeline m-3",children:[l("li",{className:"timeline-item",children:[e("strong",{children:"Delivered"}),e("p",{className:"text-sm",children:"2 hours ago"})]}),l("li",{className:"timeline-item",children:[e("strong",{children:"Pick Up"}),e("p",{className:"text-sm",children:"6 hours ago"})]}),l("li",{className:"timeline-item",children:[e("strong",{children:"In Transit"}),e("p",{className:"text-sm",children:"1 days ago"})]}),l("li",{className:"timeline-item",children:[e("strong",{children:"Dispatched"}),e("p",{className:"text-sm",children:"3 days ago"})]}),l("li",{className:"timeline-item",children:[e("strong",{children:"Order Received"}),e("p",{className:"text-sm mb-0",children:"4 days ago"})]})]})})]}),L=()=>{const a=y(),s={labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Last year",backgroundColor:a.primary,borderColor:a.primary,hoverBackgroundColor:a.primary,hoverBorderColor:a.primary,data:[54,67,41,55,62,45,55,73,60,76,48,79],barPercentage:.325,categoryPercentage:.5},{label:"This year",backgroundColor:a["primary-light"],borderColor:a["primary-light"],hoverBackgroundColor:a["primary-light"],hoverBorderColor:a["primary-light"],data:[69,66,24,48,52,51,44,53,62,79,51,68],barPercentage:.325,categoryPercentage:.5,borderRadius:99,borderSkipped:"bottom"}]},i={maintainAspectRatio:!1,cornerRadius:15,plugins:{legend:{display:!1}},scales:{y:{grid:{display:!1},ticks:{stepSize:20},stacked:!0},x:{grid:{color:"transparent"},stacked:!0}}};return l(r,{className:"flex-fill w-100",children:[l(r.Header,{children:[e("div",{className:"card-actions float-end",children:l(n,{align:"end",children:[e(n.Toggle,{as:"a",bsPrefix:"-",children:e(f,{})}),l(n.Menu,{children:[e(n.Item,{children:"Action"}),e(n.Item,{children:"Another Action"}),e(n.Item,{children:"Something else here"})]})]})}),e(r.Title,{className:"mb-0",children:"Sales / Revenue"})]}),e(r.Body,{className:"d-flex",children:e("div",{className:"align-self-center w-100",children:e("div",{className:"chart",children:e(A,{data:s,options:i})})})})]})},H=()=>l(m,{className:"mb-2 mb-xl-3",children:[e(c,{xs:"auto",className:"d-none d-sm-block",children:e("h3",{children:"SaaS"})}),l(c,{xs:"auto",className:"ms-auto text-end mt-n1",children:[l(n,{className:"d-inline me-2",children:[l(n.Toggle,{variant:"light",className:"bg-white shadow-sm",children:[e(S,{className:"feather align-middle mt-n1"})," Today"]}),l(n.Menu,{children:[e(n.Item,{children:"Action"}),e(n.Item,{children:"Another Action"}),e(n.Item,{children:"Something else here"}),e(n.Divider,{}),e(n.Item,{children:"Seperated link"})]})]}),e(u,{variant:"primary",className:"shadow-sm me-1",children:e(T,{className:"feather"})}),e(u,{variant:"primary",className:"shadow-sm",children:e(C,{className:"feather"})})]})]}),z=()=>l(r,{className:"flex-fill w-100",children:[l(r.Header,{children:[e("div",{className:"card-actions float-end",children:l(n,{align:"end",children:[e(n.Toggle,{as:"a",bsPrefix:"-",children:e(f,{})}),l(n.Menu,{children:[e(n.Item,{children:"Action"}),e(n.Item,{children:"Another Action"}),e(n.Item,{children:"Something else here"})]})]})}),e(r.Title,{className:"mb-0",children:"Top Selling Products"})]}),l(B,{striped:!0,className:"my-0",children:[e("thead",{children:l("tr",{children:[e("th",{children:"Name"}),e("th",{className:"d-none d-xl-table-cell",children:"Tech"}),e("th",{className:"d-none d-xl-table-cell",children:"License"}),e("th",{className:"d-none d-xl-table-cell",children:"Tickets"}),e("th",{children:"Sales"})]})}),l("tbody",{children:[l("tr",{children:[e("td",{children:"Abel Theme"}),e("td",{children:e(o,{bg:"danger",children:"Angular"})}),e("td",{className:"d-none d-xl-table-cell",children:"Single license"}),e("td",{className:"d-none d-xl-table-cell",children:"80"}),e("td",{className:"d-none d-xl-table-cell",children:"150"})]}),l("tr",{children:[e("td",{children:"Ada Theme"}),e("td",{children:e(o,{bg:"info",children:"Vue"})}),e("td",{className:"d-none d-xl-table-cell",children:"Single license"}),e("td",{className:"d-none d-xl-table-cell",children:"60"}),e("td",{className:"d-none d-xl-table-cell",children:"610"})]}),l("tr",{children:[e("td",{children:"AppStack Theme"}),e("td",{children:e(o,{bg:"success",children:"HTML"})}),e("td",{className:"d-none d-xl-table-cell",children:"Single license"}),e("td",{className:"d-none d-xl-table-cell",children:"50"}),e("td",{className:"d-none d-xl-table-cell",children:"720"})]}),l("tr",{children:[e("td",{children:"Libre Theme"}),e("td",{children:e(o,{bg:"warning",children:"React"})}),e("td",{className:"d-none d-xl-table-cell",children:"Single license"}),e("td",{className:"d-none d-xl-table-cell",children:"30"}),e("td",{className:"d-none d-xl-table-cell",children:"280"})]}),l("tr",{children:[e("td",{children:"Material Blog Theme"}),e("td",{children:e(o,{bg:"info",children:"Vue"})}),e("td",{className:"d-none d-xl-table-cell",children:"Single license"}),e("td",{className:"d-none d-xl-table-cell",children:"10"}),e("td",{className:"d-none d-xl-table-cell",children:"480"})]}),l("tr",{children:[e("td",{children:"Milo Theme"}),e("td",{children:e(o,{bg:"warning",children:"React"})}),e("td",{className:"d-none d-xl-table-cell",children:"Single license"}),e("td",{className:"d-none d-xl-table-cell",children:"40"}),e("td",{className:"d-none d-xl-table-cell",children:"280"})]}),l("tr",{children:[e("td",{children:"Spark Theme"}),e("td",{children:e(o,{bg:"success",children:"HTML"})}),e("td",{className:"d-none d-xl-table-cell",children:"Single license"}),e("td",{className:"d-none d-xl-table-cell",children:"20"}),e("td",{className:"d-none d-xl-table-cell",children:"480"})]}),l("tr",{children:[e("td",{children:"Von Theme"}),e("td",{children:e(o,{bg:"danger",children:"Angular"})}),e("td",{className:"d-none d-xl-table-cell",children:"Single license"}),e("td",{className:"d-none d-xl-table-cell",children:"50"}),e("td",{className:"d-none d-xl-table-cell",children:"350"})]})]})]})]}),E="/assets/social.png",_=()=>l(m,{children:[e(c,{md:"6",className:"col-xxl-3 d-flex",children:e(r,{className:"flex-fill",children:l(r.Body,{children:[l(m,{children:[e(c,{className:"mt-0",children:e("h5",{className:"card-title",children:"Income"})}),e(c,{xs:"auto",children:e("div",{className:"stat stat-sm",children:e(I,{className:"align-middle"})})})]}),e("span",{className:"h1 d-inline-block mt-1 mb-3",children:"$37.500"}),l("div",{className:"mb-0",children:[e(o,{bg:"",className:"badge-soft-success me-2",children:"6.25%"}),e("span",{className:"text-muted",children:"Since last week"})]})]})})}),e(c,{md:"6",className:"col-xxl-3 d-flex",children:e(r,{className:"flex-fill",children:l(r.Body,{children:[l(m,{children:[e(c,{className:"mt-0",children:e("h5",{className:"card-title",children:"Orders"})}),e(c,{xs:"auto",children:e("div",{className:"stat stat-sm",children:e(R,{className:"align-middle"})})})]}),e("span",{className:"h1 d-inline-block mt-1 mb-3",children:"3.282"}),l("div",{className:"mb-0",children:[l(o,{bg:"",className:"badge-soft-danger me-2",children:["-4.65%"," "]}),e("span",{className:"text-muted",children:"Since last week"})]})]})})}),e(c,{md:"6",className:"col-xxl-3 d-flex",children:e(r,{className:"flex-fill",children:l(r.Body,{children:[l(m,{children:[e(c,{className:"mt-0",children:e("h5",{className:"card-title",children:"Activity"})}),e(c,{xs:"auto",children:e("div",{className:"stat stat-sm",children:e(O,{className:"align-middle"})})})]}),e("span",{className:"h1 d-inline-block mt-1 mb-3",children:"19.312"}),l("div",{className:"mb-0",children:[e(o,{bg:"",className:"badge-soft-success me-2",children:"8.35%"}),e("span",{className:"text-muted",children:"Since last week"})]})]})})}),e(c,{md:"6",className:"col-xxl-3 d-flex",children:e(r,{className:"illustration flex-fill",children:e(r.Body,{className:"p-0 d-flex flex-fill",children:l(m,{className:"g-0 w-100",children:[e(c,{xs:"6",children:l("div",{className:"illustration-text p-3 m-1",children:[e("h4",{className:"illustration-text",children:"Welcome Back, Chris!"}),e("p",{className:"mb-0",children:"AppStack Dashboard"})]})}),e(c,{xs:"6",className:"align-self-end text-end",children:e("img",{src:E,alt:"Social",className:"img-fluid illustration-img"})})]})})})})]});function F(){const a=y(),[s,i]=p.useState(!1);return p.useEffect(()=>{setTimeout(()=>{i(!0)},100)},[]),p.useEffect(()=>{s&&new P({selector:"#saas_usa",map:"us_aea_en",zoomOnScroll:!1,regionStyle:{initial:{fill:a["gray-200"]}},markerStyle:{initial:{r:9,fill:a.primary,"fill-opacity":.9,stroke:a.white,"stroke-width":7,"stroke-opacity":.4},hover:{fill:a.primary,"fill-opacity":.9,stroke:a.primary,"stroke-width":7,"stroke-opacity":.4}},backgroundColor:"transparent",markers:[{coords:[37.77,-122.41],name:"San Francisco: 375"},{coords:[40.71,-74],name:"New York: 350"},{coords:[39.09,-94.57],name:"Kansas City: 250"},{coords:[36.16,-115.13],name:"Las Vegas: 275"},{coords:[32.77,-96.79],name:"Dallas: 225"}]})},[s,a]),l(r,{className:"flex-fill w-100",children:[l(r.Header,{children:[e("div",{className:"card-actions float-end",children:l(n,{align:"end",children:[e(n.Toggle,{as:"a",bsPrefix:"-",children:e(f,{})}),l(n.Menu,{children:[e(n.Item,{children:"Action"}),e(n.Item,{children:"Another Action"}),e(n.Item,{children:"Something else here"})]})]})}),e(r.Title,{className:"mb-0",children:"Sales by State"})]}),e(r.Body,{children:e("div",{className:"map-container",style:{height:294},children:e("div",{id:"saas_usa"})})})]})}const Z=()=>l(g.Fragment,{children:[e(k,{title:"SaaS Dashboard"}),l(w,{fluid:!0,className:"p-0",children:[e(H,{}),e(_,{}),l(m,{children:[e(c,{lg:"4",className:"d-flex",children:e(F,{})}),e(c,{md:"7",lg:"4",className:"col-xxl-6 d-flex",children:e(L,{})}),e(c,{md:"5",lg:"4",className:"col-xxl-2 d-flex",children:e(D,{})})]}),e(z,{})]})]});export{Z as default};
