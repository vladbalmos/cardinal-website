import{r as t,h as e}from"./p-a1b3783e.js";import{T as i}from"./p-45b15f92.js";import{C as s}from"./p-02bd97ff.js";var r=function(t,e,i,s){var r,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const o=class{constructor(e){t(this,e),this.basePath=-1===this.src.indexOf("http")?"undefined"!=typeof globalConfig&&"string"==typeof globalConfig.pagesBasePath?globalConfig.pagesBasePath+this.src:"https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/pages/"+this.src:this.src}render(){return e("div",{class:"image_container"},e("div",{class:"image_wrapper"},e("img",{src:this.basePath,class:"img-fluid",alt:this.title})),this.title?e("div",{class:"image_description"},this.title):null)}};r([s(),i({description:'This property is the path to the image source (Example:"PrivateSky/EDFS.png").',isMandatory:!1,propertyType:"string"})],o.prototype,"src",void 0),r([i({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:!1,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],o.prototype,"title",void 0);export{o as psk_img};