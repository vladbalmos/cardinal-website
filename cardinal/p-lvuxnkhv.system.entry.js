System.register(["./p-51da6f80.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-06840729.system.js","./p-77f35bd6.system.js"],(function(e){"use strict";var t,r,n,s;return{setters:[function(e){t=e.r;r=e.h},function(){},function(){},function(e){n=e.T},function(e){s=e.C}],execute:function(){var o=undefined&&undefined.__decorate||function(e,t,r,n){var s=arguments.length,o=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,r,n);else for(var f=e.length-1;f>=0;f--)if(i=e[f])o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o;return s>3&&o&&Object.defineProperty(t,r,o),o};var i=e("mobile_profile_renderer",function(){function e(e){t(this,e)}e.prototype.render=function(){return r("div",{class:"profile"},r("div",{class:"card-body text-center"},r("img",{src:this.userInfo.avatar,width:"48",height:"48",alt:"card image"}),r("span",null,this.userInfo.username)))};return e}());o([s(),n({description:"This property is the user information that needs to be rendered for the user.",isMandatory:false,propertyType:"any"})],i.prototype,"userInfo",void 0)}}}));