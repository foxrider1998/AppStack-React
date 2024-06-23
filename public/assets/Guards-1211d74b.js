import{j as t,d as e,W as a,C as o,R as s,h as u}from"./main-11f2565f.js";import{R as n}from"./chartjs-8bcccd15.js";import{C as r}from"./Code-d927983d.js";import"./googlemaps-6af91147.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";import"./toConsumableArray-4c96dd34.js";const d=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),e("p",{className:"text-lg",children:"Guards can be used to protect private or public routes based on the current user role."})]}),c=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Auth Guard"}),e("p",{className:"text-lg",children:"The AuthGuard component can be used to protect a private route from unauthenticated users."}),e(r,{children:`import AuthGuard from "../components/guards/AuthGuard";
        
function Component() {
  return (
    <AuthGuard>
      <PrivateExampleComponent />
    </AuthGuard>
  )
}`})]}),i=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Guest Guard"}),e("p",{className:"text-lg",children:"The GuestGuard component can be used to protect a route from authenticated users."}),e(r,{children:`import GuestGuard from "../components/guards/GuestGuard";
        
function Component() {
  return (
    <GuestGuard>
      <PublicExampleComponent />
    </GuestGuard>
  )
}`})]}),b=()=>t(n.Fragment,{children:[e(a,{title:"Guards"}),e(o,{fluid:!0,className:"p-0",children:e(s,{children:t(u,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"Guards"}),e("hr",{className:"my-4"}),e(d,{}),e(c,{}),e(i,{})]})})})]});export{b as default};
