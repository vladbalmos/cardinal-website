System.register(["./p-51da6f80.system.js","./p-61358132.system.js","./p-a13b0b86.system.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.r;n=e.h},function(e){r=e.T},function(){}],execute:function(){var o=undefined&&undefined.__decorate||function(e,t,n,r){var o=arguments.length,a=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,i;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)if(i=e[s])a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a;return o>3&&a&&Object.defineProperty(t,n,a),a};var a=e("psk_page_loader",function(){function e(e){t(this,e);this.errorLoadingPage=false}e.prototype.watchHandler=function(e){this.getPageContent(e)};e.prototype.componentWillLoad=function(){this.getPageContent(this.pageUrl)};e.prototype.getPageContent=function(e){var t=this;var n=new XMLHttpRequest;n.open("GET",e);n.onload=function(){if(n.status!=200){t.errorLoadingPage=true}else{t.errorLoadingPage=false;t.pageContent=n.responseText}};n.onerror=function(){t.errorLoadingPage=true};n.send()};e.prototype.render=function(){return this.errorLoadingPage?n("h4",null,"Page "+this.pageUrl+" could not be loaded!"):n("div",{class:"page_content",innerHTML:this.pageContent})};Object.defineProperty(e,"watchers",{get:function(){return{pageUrl:["watchHandler"]}},enumerable:true,configurable:true});return e}());o([r({description:["This property is the url for the page that needs to be loaded.","When this component loads a get http request will be issued and the cotent of that url will be rendered if it can be accessed."],isMandatory:true,propertyType:"string"})],a.prototype,"pageUrl",void 0)}}}));