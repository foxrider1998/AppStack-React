import{s as g,t as u,d as a,j as s,v as f,p as c,F as e,A as v,g as w,W as F}from"./main-11f2565f.js";import{R as y}from"./chartjs-8bcccd15.js";import{F as x,c as C,a as m}from"./formik.esm-59a59d09.js";import{F as p}from"./index.es-ebb9cd8b.js";import{d as S,e as k}from"./index-8fad63a7.js";import{C as h}from"./Card-190f7cd8.js";import"./googlemaps-6af91147.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";function L(){const b=g(),{signUp:N}=u();return a(x,{initialValues:{firstName:"",lastName:"",email:"",password:"",submit:!1},validationSchema:C().shape({firstName:m().max(255).required("First name is required"),lastName:m().max(255).required("Last name is required"),email:m().email("Must be a valid email").max(255).required("Email is required"),password:m().min(12,"Must be at least 12 characters").max(255).required("Required")}),onSubmit:async(i,{setErrors:t,setStatus:r,setSubmitting:o})=>{try{N(i.email,i.password,i.firstName,i.lastName),b("/auth/sign-in")}catch(d){const l=d.message||"Something went wrong";r({success:!1}),t({submit:l}),o(!1)}},children:({errors:i,handleBlur:t,handleChange:r,handleSubmit:o,isSubmitting:d,touched:l,values:n})=>s(f,{children:[s("div",{className:"d-grid gap-2 mb-3",children:[s(c,{to:"/dashboard/default",className:"btn btn-google btn-lg",children:[a(p,{icon:S})," Sign in with Google"]}),s(c,{to:"/dashboard/default",className:"btn btn-facebook btn-lg",children:[a(p,{icon:k})," Sign in with Facebook"]})]}),s("div",{className:"row",children:[a("div",{className:"col",children:a("hr",{})}),a("div",{className:"col-auto text-uppercase d-flex align-items-center",children:"Or"}),a("div",{className:"col",children:a("hr",{})})]}),s(e,{onSubmit:o,children:[i.submit&&a(v,{className:"my-3",variant:"danger",children:i.submit}),s(e.Group,{className:"mb-3",children:[a(e.Label,{children:"First name"}),a(e.Control,{type:"text",name:"firstName",placeholder:"First name",value:n.firstName,isInvalid:!!(l.firstName&&i.firstName),onBlur:t,onChange:r}),!!l.firstName&&a(e.Control.Feedback,{type:"invalid",children:i.firstName})]}),s(e.Group,{className:"mb-3",children:[a(e.Label,{children:"Last name"}),a(e.Control,{type:"text",name:"lastName",placeholder:"Last name",value:n.lastName,isInvalid:!!(l.lastName&&i.lastName),onBlur:t,onChange:r}),!!l.lastName&&a(e.Control.Feedback,{type:"invalid",children:i.lastName})]}),s(e.Group,{className:"mb-3",children:[a(e.Label,{children:"Email address"}),a(e.Control,{type:"email",name:"email",placeholder:"Email address",value:n.email,isInvalid:!!(l.email&&i.email),onBlur:t,onChange:r}),!!l.email&&a(e.Control.Feedback,{type:"invalid",children:i.email})]}),s(e.Group,{className:"mb-3",children:[a(e.Label,{children:"Password"}),a(e.Control,{type:"password",name:"password",placeholder:"Password",value:n.password,isInvalid:!!(l.password&&i.password),onBlur:t,onChange:r}),!!l.password&&a(e.Control.Feedback,{type:"invalid",children:i.password})]}),a("div",{className:"d-grid gap-2 mt-3",children:a(w,{type:"submit",variant:"primary",size:"lg",disabled:d,children:"Sign up"})})]})]})})}const R=()=>s(y.Fragment,{children:[a(F,{title:"Sign Up"}),s("div",{className:"text-center mt-4",children:[a("h1",{className:"h2",children:"Get started"}),a("p",{className:"lead",children:"Start creating the best possible user experience for you customers."})]}),a(h,{children:a(h.Body,{children:a("div",{className:"m-sm-3",children:a(L,{})})})}),s("div",{className:"text-center mb-3",children:["Already have account? ",a(c,{to:"/auth/sign-in",children:"Log in"})]})]});export{R as default};
