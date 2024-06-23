import{j as t,d as e,W as o,C as r,R as a,h as i}from"./main-11f2565f.js";import{R as s}from"./chartjs-8bcccd15.js";import{C as n}from"./Code-d927983d.js";import"./googlemaps-6af91147.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";import"./toConsumableArray-4c96dd34.js";const c=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),t("p",{className:"text-lg",children:["react-i18next is a powerful internationalization framework for React which is based on i18next. The module provides multiple components eg. to assert that needed translations get loaded or that your content gets rendered when the language changes.",e("br",{}),e("br",{}),"Translations can be configured in the ",e("code",{children:"/src/i18n.js"})," file."]}),e(n,{children:`const resources = {
  en: {
    translation: {
      "Welcome back": "Welcome back",
    },
  },
  fr: {
    translation: {
      "Welcome back": "Bon retour",
    },
  },
  de: {
    translation: {
      "Welcome back": "Willkommen zurück",
    },
  },
};`})]}),l=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Usage with hooks"}),e("p",{className:"text-lg",children:"Using the hook in functional components is one of the options you got."}),e(n,{children:`import React from 'react';

import { useTranslation } from 'react-i18next';

function MyComponent () {
  const { t, i18n } = useTranslation();
  return <h1>{t('Welcome back')}</h1>
}`})]}),h=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Usage with HOC"}),e("p",{className:"text-lg",children:"Using higher order components is one of the most used method to extend existing components by passing additional props to them."}),e(n,{children:`import React from 'react';

import { withTranslation } from 'react-i18next';

function MyComponent ({ t }) {
  return <h1>{t('Welcome back')}</h1>
}

export default withTranslation()(MyComponent);`})]}),m=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Learn more"}),t("p",{className:"text-lg",children:["To learn more about react-i18next,"," ",e("a",{href:"https://react.i18next.com/",target:"_blank",rel:"noreferrer noopener",children:"click here"}),"."]})]}),k=()=>t(s.Fragment,{children:[e(o,{title:"Internationalization"}),e(r,{fluid:!0,className:"p-0",children:e(a,{children:t(i,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"Internationalization"}),e("hr",{className:"my-4"}),e(c,{}),e(l,{}),e(h,{}),e(m,{})]})})})]});export{k as default};
