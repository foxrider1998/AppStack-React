import{j as e,d as t,W as r,C as i}from"./main-11f2565f.js";import{R as l}from"./chartjs-8bcccd15.js";import{F as n,i as d,a as s,b as o}from"./fullcalendar-1b01f4c7.js";import{C as a}from"./Card-190f7cd8.js";import"./googlemaps-6af91147.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";const m=[{title:"All Day Event",start:"2020-07-01"},{title:"Long Event",start:"2020-07-07",end:"2020-07-10"},{groupId:"999",title:"Repeating Event",start:"2020-07-09T16:00:00"},{groupId:"999",title:"Repeating Event",start:"2020-07-16T16:00:00"},{title:"Conference",start:"2020-07-11",end:"2020-07-13"},{title:"Meeting",start:"2020-07-12T10:30:00",end:"2020-07-12T12:30:00"},{title:"Lunch",start:"2020-07-12T12:00:00"},{title:"Meeting",start:"2020-07-12T14:30:00"},{title:"Birthday Party",start:"2020-07-13T07:00:00"},{title:"Click for Google",url:"http://google.com/",start:"2020-07-28"}],v=()=>e(l.Fragment,{children:[t(r,{title:"Calendar"}),e(i,{fluid:!0,className:"p-0",children:[t("h1",{className:"h3 mb-3",children:"Calendar"}),e(a,{children:[e(a.Header,{children:[t(a.Title,{children:"FullCalendar"}),t("h6",{className:"card-subtitle text-muted",children:"Open source JavaScript plugin for a full-sized, drag & drop event calendar."})]}),t(a.Body,{children:t(n,{plugins:[d,s,o],themeSystem:"bootstrap",initialView:"dayGridMonth",initialDate:"2020-07-07",headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},events:m,bootstrapFontAwesome:!1})})]})]})]});export{v as default};