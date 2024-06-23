import{j as e,d as t,W as o,C as i,R as s,h as r}from"./main-11f2565f.js";import{R as a}from"./chartjs-8bcccd15.js";import{C as n}from"./Code-d927983d.js";import"./googlemaps-6af91147.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";import"./toConsumableArray-4c96dd34.js";const h=()=>e("div",{className:"mb-5",children:[t("h3",{children:"Introduction"}),t("p",{className:"text-lg",children:"Auth0 is an easy to implement, adaptable authentication and authorization platform. Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business."})]}),c=()=>e("div",{className:"mb-5",children:[t("h3",{children:"Quick start"}),t("p",{className:"text-lg",children:"Follow these steps if you want to enable Auth0 authentication in your application."}),t("h4",{children:"1. Enable AuthProvider"}),e("p",{className:"text-lg",children:["Enable Auth0's ",t("code",{children:"AuthProvider"})," in ",t("code",{children:"/src/App.js"}),"."]}),t(n,{children:`import { AuthProvider } from "./contexts/Auth0Context";
        
function App() {
  return (
    <AuthProvider>
      {content}
    </AuthProvider>;
  )
}`}),t("h4",{children:"2. Enable useAuth hook"}),e("p",{className:"text-lg",children:["Enable Auth0's ",t("code",{children:"useAuth"})," hook in"," ",t("code",{children:"/src/hooks/useAuth.js"}),"."]}),t(n,{children:`import { AuthContext } from "../contexts/Auth0Context";
        
const useAuth = () => {
  return useContext(AuthContext);
};`})]}),l=()=>e("div",{className:"mb-5",children:[t("h3",{children:"How to use"}),t("p",{className:"text-lg",children:"Learn how to use Auth0 authentication. There are multiple examples included, including sign in, sign up and sign out."}),t("h4",{children:"Retrieve user info"}),t(n,{children:`import useAuth from '../hooks/useAuth';

const App = () => {
  const { displayName } = useAuth();

  return (
    <span>
      {user.displayName}
    </span>
  );
};`}),t("h4",{children:"Execute actions"}),t(n,{children:`import useAuth from '../hooks/useAuth';

const App = () => {
  const { signIn } = useAuth();

  return (
    <button onClick={() => signIn()}>
      Sign in
    </button>
  );
};`})]}),f=()=>e(a.Fragment,{children:[t(o,{title:"Auth0"}),t(i,{fluid:!0,className:"p-0",children:t(s,{children:e(r,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[t("h1",{children:"Auth0"}),t("hr",{className:"my-4"}),t(h,{}),t(c,{}),t(l,{})]})})})]});export{f as default};
