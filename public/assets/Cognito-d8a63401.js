import{j as n,d as e,W as t,C as i,R as s,h as r}from"./main-11f2565f.js";import{R as a}from"./chartjs-8bcccd15.js";import{C as o}from"./Code-d927983d.js";import"./googlemaps-6af91147.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";import"./toConsumableArray-4c96dd34.js";const c=()=>n("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),e("p",{className:"text-lg",children:"Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Apple, Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0 and OpenID Connect."})]}),l=()=>n("div",{className:"mb-5",children:[e("h3",{children:"Quick start"}),e("p",{className:"text-lg",children:"Follow these steps if you want to enable Amazon Cognito authentication in your application."}),e("h4",{children:"1. Enable AuthProvider"}),n("p",{className:"text-lg",children:["Enable Cognito's ",e("code",{children:"AuthProvider"})," in ",e("code",{children:"/src/App.js"}),"."]}),e(o,{children:`import { AuthProvider } from "./contexts/CognitoContext";
        
function App() {
  return (
    <AuthProvider>
      {content}
    </AuthProvider>;
  )
}`}),e("h4",{children:"2. Enable useAuth hook"}),n("p",{className:"text-lg",children:["Enable Cognito's ",e("code",{children:"useAuth"})," hook in"," ",e("code",{children:"/src/hooks/useAuth.js"}),"."]}),e(o,{children:`import { AuthContext } from "../contexts/CognitoContext";
        
const useAuth = () => {
  return useContext(AuthContext);
};`})]}),h=()=>n("div",{className:"mb-5",children:[e("h3",{children:"How to use"}),e("p",{className:"text-lg",children:"Learn how to use Cognito authentication. There are multiple examples included, including sign in, sign up and sign out."}),e("h4",{children:"Retrieve user info"}),e(o,{children:`import useAuth from '../hooks/useAuth';

const App = () => {
  const { displayName } = useAuth();

  return (
    <span>
      {user.displayName}
    </span>
  );
};`}),e("h4",{children:"Execute actions"}),e(o,{children:`import useAuth from '../hooks/useAuth';

const App = () => {
  const { signIn } = useAuth();

  return (
    <button onClick={() => signIn()}>
      Sign in
    </button>
  );
};`})]}),x=()=>n(a.Fragment,{children:[e(t,{title:"Cognito"}),e(i,{fluid:!0,className:"p-0",children:e(s,{children:n(r,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"Cognito"}),e("hr",{className:"my-4"}),e(c,{}),e(l,{}),e(h,{})]})})})]});export{x as default};
