System.register(["./p-0b2166d8.system.js","./p-4c48f288.system.js","./p-9f6f8884.system.js","./p-8abcb78c.system.js"],(function(t){"use strict";var e,n,o,r;return{setters:[function(t){e=t.r;n=t.h;o=t.g},function(){},function(t){r=t.i},function(){}],execute:function(){var i=t("query_pages_router",function(){function t(t){e(this,t);this.routes={}}t.prototype.componentWillLoad=function(){var t={};var e=function(n){n.forEach((function(n){if(n.children){e(n.children)}else{var o=n.path,r=n.component,i=n.componentProps;t[o]={component:r,componentProps:i}}}));return t};this.routes=e(this.pages)};t.prototype.locationChanged=function(t){this.currentRoute=t};t.prototype.render=function(){var t=this.currentRoute.search;if(t.indexOf("&")!==-1){t=t.substring(0,t.indexOf("&"))}var e=this.routes[t];var o="psk-page-not-found";var r={urlDestination:this.pages[0].path};if(e){o=e.component;r=e.componentProps}return n("stencil-route",{component:o,componentProps:r})};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["locationChanged"]}},enumerable:true,configurable:true});return t}());r(i)}}}));