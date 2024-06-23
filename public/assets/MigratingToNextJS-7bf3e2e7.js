import{j as t,d as e,W as i,C as n,R as s,h as c}from"./main-11f2565f.js";import{R as l}from"./chartjs-8bcccd15.js";import{C as r}from"./Code-d927983d.js";import"./googlemaps-6af91147.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";import"./toConsumableArray-4c96dd34.js";const a=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),e("p",{className:"text-lg",children:"AppStack React is built using Vite. Follow the steps below to migrate to Next.js. Migrating to Next.js allows you to use SSR, API Routes and more."})]}),o=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Official Guide"}),t("p",{className:"text-lg",children:["The official guide on how to migrate from Create React App to Next.js can be found"," ",e("a",{href:"https://nextjs.org/docs/migrating/from-create-react-app",target:"_blank",rel:"noreferrer noopener",children:"here"}),". While we're using Vite instead of Create React App, the process and steps are very similar."]})]}),d=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Update dependencies"}),e("p",{className:"text-lg",children:"The first step towards migrating to Next.js is to update package.json and dependencies."}),t("p",{className:"text-lg",children:["Remove the ",e("code",{children:"vite"}),", ",e("code",{children:"@vitejs/plugin-react"})," and"," ",e("code",{children:"react-router-dom"})," dependencies."]}),e(r,{children:"npm uninstall vite @vitejs/plugin-react vite-plugin-ejs vite-plugin-node-polyfills vite-plugin-svgr react-router-dom"}),t("p",{className:"text-lg",children:["Install the ",e("code",{children:"next.js"})," dependency."]}),e(r,{children:"npm install next --save"}),t("p",{className:"text-lg",children:["Open the ",e("code",{children:"package.json"})," file and replace the"," ",e("code",{children:"scripts"})," with:"]}),e(r,{children:`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}`})]}),h=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Update entry file"}),t("p",{className:"text-lg",children:["Vite uses the root directory for the entry HTML file (",e("code",{children:"/index.html"}),"), whereas Next.js uses a custom file (",e("code",{children:"/src/pages/_document.js"}),")."]}),t("p",{className:"text-lg",children:["All code in the ",e("code",{children:"<head>"})," section of the"," ",e("code",{children:"/index.html"})," file should be moved to the"," ",e("code",{children:"/src/pages/_document.js"})," file. Learn more"," ",e("a",{href:"https://nextjs.org/docs/advanced-features/custom-document",target:"_blank",rel:"noreferrer noopener",children:"here"}),"."]})]}),p=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Update shared layout"}),t("p",{className:"text-lg",children:["Vite uses the ",e("code",{children:"/src/index.js"})," file as an entry point, whereas Next.js requires a custom ",e("code",{children:"/src/_app.js"})," file. You may want to move logic to the new ",e("code",{children:"_app.js"})," file. Learn more"," ",e("a",{href:"https://nextjs.org/docs/advanced-features/custom-app",target:"_blank",rel:"noreferrer noopener",children:"here"}),"."]})]}),m=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Update routes"}),e("p",{className:"text-lg",children:"With Vite, you're likely using React Router. Instead of using a third-party library, Next.js includes its own file-system based routing."}),t("ul",{className:"text-lg",children:[t("li",{children:["Convert all Route components to new files in the ",e("code",{children:"src/pages"})," ","directory. It is recommended to rename the files using"," ",e("code",{children:"dash-case"}),"."]}),t("li",{children:["Remove ",e("code",{children:"useRoutes"})," from the ",e("code",{children:"/src/App.js"})," file."]}),t("li",{children:["Replace the Link component from ",e("code",{children:"react-router-dom"})," with the Link component from ",e("code",{children:"next/link"}),"."]})]}),t("p",{className:"text-lg",children:["For more information, see"," ",e("a",{href:"https://nextjs.org/docs/migrating/from-react-router",target:"_blank",rel:"noreferrer noopener",children:"Migrating from React Router"}),"."]})]}),y=()=>t(l.Fragment,{children:[e(i,{title:"Migrating to Next.js"}),e(n,{fluid:!0,className:"p-0",children:e(s,{children:t(c,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"Migrating to Next.js"}),e("hr",{className:"my-4"}),e(a,{}),e(o,{}),e(d,{}),e(h,{}),e(p,{}),e(m,{})]})})})]});export{y as default};
