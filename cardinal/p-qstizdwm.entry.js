import{r as e,h as r}from"./p-a1b3783e.js";import{T as t}from"./p-45b15f92.js";import{C as o}from"./p-02bd97ff.js";const s=class{constructor(r){e(this,r)}render(){return r("div",{class:"profile"},r("div",{class:"card-body text-center"},r("img",{src:this.userInfo.avatar,width:"48",height:"48",alt:"card image"}),r("span",null,this.userInfo.username)))}};!function(e,r,t,o){var s,i=arguments.length,n=i<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,r,t,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(i<3?s(n):i>3?s(r,t,n):s(r,t))||n);i>3&&n&&Object.defineProperty(r,t,n)}([o(),t({description:"This property is the user information that needs to be rendered for the user.",isMandatory:!1,propertyType:"any"})],s.prototype,"userInfo",void 0);export{s as mobile_profile_renderer};