System.register(["./p-51da6f80.system.js","./p-61358132.system.js","./p-a13b0b86.system.js","./p-77f35bd6.system.js"],(function(e){"use strict";var t,r,n,o;return{setters:[function(e){t=e.r;r=e.h},function(e){n=e.T},function(){},function(e){o=e.C}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,r,n);else for(var f=e.length-1;f>=0;f--)if(i=e[f])s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s;return o>3&&s&&Object.defineProperty(t,r,s),s};var i=e("mobile_profile_renderer",function(){function e(e){t(this,e)}e.prototype.render=function(){return r("div",{class:"profile"},r("div",{class:"card-body text-center"},r("img",{src:this.userInfo.avatar,width:"48",height:"48",alt:"card image"}),r("span",null,this.userInfo.username)))};return e}());s([o(),n({description:"This property is the user information that needs to be rendered for the user.",isMandatory:false,propertyType:"any"})],i.prototype,"userInfo",void 0)}}}));