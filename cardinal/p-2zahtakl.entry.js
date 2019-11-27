import{r as t,c as e,h as i}from"./p-a1b3783e.js";import{T as r}from"./p-45b15f92.js";import{C as o}from"./p-02bd97ff.js";import{T as a}from"./p-0a7c1c92.js";var s=function(t,e,i,r){var o,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(a<3?o(s):a>3?o(e,i,s):o(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const n=class{constructor(i){t(this,i),this.error=!1,this.destinationUrl="#",this.validateUrl=e(this,"validateUrl",7)}render(){return i("button",{type:"button",title:this.error?"Temporary unavailable":"",class:`btn btn-link ${this.error?"invalid-url":""}`,onClick:t=>{this.error?t.preventDefault():window.location.href=this.destinationUrl}},i("slot",null))}componentDidLoad(){this.page&&this.validateUrl.emit({sourceUrl:this.page,callback:(t,e)=>{t?this.error=!0:(this.destinationUrl=`${window.location.origin}${e}`,this.error=!1)}})}};s([o(),r({description:"This property gives the component the destination URL after clicking the displayed link. This property is first validated by valdateUrl event.",isMandatory:!0,propertyType:"string"})],n.prototype,"page",void 0),s([a({controllerInteraction:{required:!0},description:["This event is sent to the application controller in order to check and validate the page property.","If the sequence of pages inside the page property is valid, then the event is sending back to the component the valid path to the required page.",'If not, a special behavior will be applied to the link. On mouse over, it will turn grey and will display a hint message: "Temporary unavailable".']})],n.prototype,"validateUrl",void 0);export{n as psk_link};