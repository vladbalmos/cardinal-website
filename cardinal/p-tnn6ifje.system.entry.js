System.register(["./p-51da6f80.system.js","./p-77f35bd6.system.js"],(function(e){"use strict";var n,r,t;return{setters:[function(e){n=e.r;r=e.h},function(e){t=e.C}],execute:function(){var i=undefined&&undefined.__decorate||function(e,n,r,t){var i=arguments.length,a=i<3?n:t===null?t=Object.getOwnPropertyDescriptor(n,r):t,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,n,r,t);else for(var s=e.length-1;s>=0;s--)if(c=e[s])a=(i<3?c(a):i>3?c(n,r,a):c(n,r))||a;return i>3&&a&&Object.defineProperty(n,r,a),a};var a=e("sidebar_renderer",function(){function e(e){n(this,e)}e.prototype.renderMenuItem=function(e){var n=this;var t=e.path;var i=[];if(e.children&&e.children.type==="known"){e.children.items.forEach((function(e){i.push(n.renderMenuItem(e))}))}var a=r("div",{class:"wrapper_container"},r("div",{class:"item_container"},r("span",{class:"icon fa "+e.icon}),e.children?r("span",{class:"item_name"},e.name):r("span",{class:"item_name"},e.name),e.children?r("span",{class:"fa fa-caret-right expand-menu"}):null),e.children?r("div",{class:"children"},i):null);if(e.children&&e.children.type==="event"){return r("event-expandable-renderer",{event:e.children.event},a)}else{var c=this.historyType==="query"?"query-page-link":"stencil-route-link";var s=e.type==="abstract"?"expandable-renderer":c;var l=e.children?e.children.items[0]:"";return r(s,{firstMenuChild:l,url:t,activeClass:"active",exact:false,somethingChanged:this.value},a)}};e.prototype.render=function(){return this.renderMenuItem(this.value)};return e}());i([t()],a.prototype,"value",void 0)}}}));