import{r as e,h as r}from"./p-9835b40a.js";import"./p-acb9d1e1.js";import"./p-7111d76e.js";import{T as t}from"./p-7bf9d015.js";import{C as s}from"./p-ec895615.js";const o=class{constructor(r){e(this,r)}render(){return r("div",{class:"profile"},r("div",{class:"card-body text-center"},r("p",null,r("img",{src:this.userInfo.avatar,alt:"card image"})),r("h5",{class:"card-title"},this.userInfo.username),r("p",{class:"card-text"},this.userInfo.email)))}};!function(e,r,t,s){var o,i=arguments.length,c=i<3?r:null===s?s=Object.getOwnPropertyDescriptor(r,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,r,t,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(r,t,c):o(r,t))||c);i>3&&c&&Object.defineProperty(r,t,c)}([s(),t({description:"This property is the user information that needs to be rendered for the user.",isMandatory:!1,propertyType:"any"})],o.prototype,"userInfo",void 0);export{o as psk_user_profile_renderer};