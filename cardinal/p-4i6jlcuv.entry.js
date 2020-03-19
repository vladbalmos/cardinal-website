import{r as t,c as e,h as i}from"./p-9835b40a.js";import"./p-acb9d1e1.js";import"./p-7111d76e.js";import{T as s}from"./p-7bf9d015.js";import{C as l}from"./p-ec895615.js";import{T as r}from"./p-f0023db2.js";var n=function(t,e,i,s){var l,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(l=t[o])&&(n=(r<3?l(n):r>3?l(e,i,n):l(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};const o=class{constructor(i){t(this,i),this.error=!1,this.destinationUrl="#",this.validateUrl=e(this,"validateUrl",7)}componentDidLoad(){this.page&&this.validateUrl.emit({sourceUrl:this.page,callback:(t,e)=>{t?this.error=!0:(this.destinationUrl=e,this.error=!1)}})}render(){let t=null;return this.error&&(t=i("div",{class:"tooltip-error"},i("div",null,"Page ",i("b",null,this.page)," does not exists."))),i("div",{class:"psk-link"},this.error?i("div",null,i("a",{class:`btn btn-link ${this.error?"invalid-url":""}`,onClick:t=>{t.preventDefault()}},i("slot",null)),t):i("stencil-route-link",{url:this.destinationUrl,anchorClass:"btn btn-link"},i("slot",null)))}};n([l(),s({description:"This property gives the component the destination URL after clicking the displayed link. This property is first validated by valdateUrl event.",isMandatory:!0,propertyType:"string"})],o.prototype,"page",void 0),n([r({controllerInteraction:{required:!0},description:["This event is sent to the application controller in order to check and validate the page property.","If the sequence of pages inside the page property is valid, then the event is sending back to the component the valid path to the required page.",'If not, a special behavior will be applied to the link. On mouse over, it will turn grey and will display a hint message: "Temporary unavailable".']})],o.prototype,"validateUrl",void 0);export{o as psk_link};