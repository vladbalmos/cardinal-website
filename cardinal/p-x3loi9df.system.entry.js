var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)n[o]=i[s];return n};System.register(["./p-51da6f80.system.js","./p-a85ba8b7.system.js","./p-77f35bd6.system.js"],(function(e){"use strict";var t,r,n,o,i,s,a;return{setters:[function(e){t=e.r;r=e.h;n=e.g},function(e){o=e.s;i=e.c;s=e.T},function(e){a=e.C}],execute:function(){var p=undefined&&undefined.__decorate||function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i;return o>3&&i&&Object.defineProperty(t,r,i),i};var c=e("psk_page",function(){function e(e){t(this,e);this.chapters=[];this.title="";this.componentFullyLoaded=false}e.prototype.receiveChapters=function(e){e.stopImmediatePropagation();if(!e.detail){return}var t=Object.assign({},e.detail);var r=function(e){return t.guid===e.guid};var n=this.chapters.findIndex(r);var o=__spreadArrays(this.chapters);if(n===-1){o.push(Object.assign({},t));this.chapters=JSON.parse(JSON.stringify(o));return}o[n]=Object.assign({},t);this.chapters=JSON.parse(JSON.stringify(o))};e.prototype._checkForChapterScrolling=function(){var e=this;if(window.location.href.indexOf("chapter=")===-1){return}var t=window.location.href.split("chapter=")[1];setTimeout((function(){o(t,e.element)}),50)};e.prototype._sendTableOfContentChapters=function(){i("psk-send-toc",{bubbles:true,composed:true,cancelable:true,detail:this.chapters},true)};e.prototype.componentDidLoad=function(){this.componentFullyLoaded=true};e.prototype.render=function(){this._checkForChapterScrolling();this._sendTableOfContentChapters();return r("div",null,r("nav",null,r("h3",null,this.title)),r("div",{class:"page-content container"},this.componentFullyLoaded?r("slot",null):r("psk-ui-loader",{shouldBeRendered:true})))};Object.defineProperty(e.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});return e}());p([a()],c.prototype,"chapters",void 0);p([s({description:"This property will be used as the title for the page.",isMandatory:false,propertyType:"string"})],c.prototype,"title",void 0);p([s({description:"This property is the name of the table of content.",isMandatory:false,propertyType:"string"})],c.prototype,"tocTitle",void 0)}}}));