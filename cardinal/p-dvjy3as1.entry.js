import{r as e,h as t}from"./p-9835b40a.js";import{T as i}from"./p-e9e45895.js";import{C as r}from"./p-ec895615.js";import{B as s}from"./p-1eae6a5b.js";var a=function(e,t,i,r){var s,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var p=e.length-1;p>=0;p--)(s=e[p])&&(o=(a<3?s(o):a>3?s(t,i,o):s(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o};const o=class{constructor(t){e(this,t)}render(){return t("div",{class:"image_container"},t("div",{class:"image_wrapper"},t("img",{src:this.src,class:"img-fluid",alt:this.title})),this.title?t("div",{class:"image_description"},this.title):null)}};a([r(),s(),i({description:'This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").',isMandatory:!0,propertyType:"string"})],o.prototype,"src",void 0),a([i({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:!1,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],o.prototype,"title",void 0);export{o as psk_img};