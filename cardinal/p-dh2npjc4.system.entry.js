System.register(["./p-51da6f80.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-06840729.system.js","./p-77f35bd6.system.js","./p-a6b38d52.system.js"],(function(e){"use strict";var t,i,n,r,o,s;return{setters:[function(e){t=e.r;i=e.c;n=e.h},function(){},function(){},function(e){r=e.T},function(e){o=e.C},function(e){s=e.T}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,i,n){var r=arguments.length,o=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)if(s=e[l])o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o;return r>3&&o&&Object.defineProperty(t,i,o),o};var a=e("psk_link",function(){function e(e){t(this,e);this.error=false;this.destinationUrl="#";this.validateUrl=i(this,"validateUrl",7)}e.prototype.componentDidLoad=function(){var e=this;if(!this.page){return}this.validateUrl.emit({sourceUrl:this.page,callback:function(t,i){if(!t){e.destinationUrl=i;e.error=false}else{e.error=true}}})};e.prototype.render=function(){var e=null;if(this.error){e=n("div",{class:"tooltip-error"},n("div",null,"Page ",n("b",null,this.page)," does not exists."))}return n("div",{class:"psk-link"},this.error?n("div",null,n("a",{class:"btn btn-link "+(this.error?"invalid-url":""),onClick:function(e){e.preventDefault()}},n("slot",null)),e):n("stencil-route-link",{url:this.destinationUrl,anchorClass:"btn btn-link"},n("slot",null)))};return e}());l([o(),r({description:"This property gives the component the destination URL after clicking the displayed link. This property is first validated by valdateUrl event.",isMandatory:true,propertyType:"string"})],a.prototype,"page",void 0);l([s({controllerInteraction:{required:true},description:["This event is sent to the application controller in order to check and validate the page property.","If the sequence of pages inside the page property is valid, then the event is sending back to the component the valid path to the required page.",'If not, a special behavior will be applied to the link. On mouse over, it will turn grey and will display a hint message: "Temporary unavailable".']})],a.prototype,"validateUrl",void 0)}}}));