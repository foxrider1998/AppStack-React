import{r as c,R as f}from"./chartjs-8bcccd15.js";import{o as a}from"./googlemaps-6af91147.js";function s(){return s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function u(e,o){if(e==null)return{};var t=g(e,o),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function g(e,o){if(e==null)return{};var t={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(o.indexOf(n)>=0)&&(t[n]=e[n]);return t}var l=c.forwardRef(function(e,o){var t=e.color,r=t===void 0?"currentColor":t,n=e.size,i=n===void 0?24:n,p=u(e,["color","size"]);return f.createElement("svg",s({ref:o,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),f.createElement("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}))});l.propTypes={color:a.string,size:a.oneOfType([a.string,a.number])};l.displayName="MessageSquare";const m=l;export{m as M};
