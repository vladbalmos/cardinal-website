import{r as t,h as e,g as o}from"./p-9835b40a.js";import{T as s}from"./p-79c4de9f.js";import{C as r}from"./p-ec895615.js";const n=["link","psk-for-each"],c=class{constructor(e){t(this,e)}render(){if(!this.columns)return;let t=`col-12 col-md-${Math.floor(12/this.columns)}`,o=0;for(;o<this.host.children.length;){const e=this.host.children.item(o++);-1===n.indexOf(e.tagName.toLowerCase())&&(e.className.includes("col-")||(e.className+=` ${t}`))}return e("div",{class:"row"},e("slot",null))}get host(){return o(this)}};!function(t,e,o,s){var r,n=arguments.length,c=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(c=(n<3?r(c):n>3?r(e,o,c):r(e,o))||c);n>3&&c&&Object.defineProperty(e,o,c)}([r(),s({isMandatory:!0,propertyType:"number",description:"This is the number of columns for the bootstrap columns class.",defaultValue:"null",specialNote:"That number can only be an integer between 1 and 12"})],c.prototype,"columns",void 0);export{c as psk_grid};