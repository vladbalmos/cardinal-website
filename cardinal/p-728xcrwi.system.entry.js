System.register(["./p-0b2166d8.system.js","./p-4c48f288.system.js","./p-9f6f8884.system.js","./p-8abcb78c.system.js"],(function(t){"use strict";var e,i,n,s;return{setters:[function(t){e=t.r;i=t.g;n=t.h},function(){},function(t){s=t.i},function(){}],execute:function(){var o=t("expandable_renderer",function(){function t(t){e(this,t);this.isOpened=false;this.dropDownHasChildActive=false;this.somethingChanged=false}t.prototype.handleClick=function(t){var e=t.target;if(!i(this).contains(e)){this.isOpened=false}};t.prototype.routeChanged=function(){this.dropDownHasChildActive=window.location.href.includes(this.url)};t.prototype.toggleDropdown=function(t){var e=t.target;var i=false;while(e.parentElement){e=e.parentElement;if(e.classList.contains("children")){i=true;break}}if(!i){if(!this.isOpened){this.history.push(this.firstMenuChild.path)}t.stopImmediatePropagation()}this.isOpened=!this.isOpened};t.prototype.render=function(){var t=this;this.routeChanged();return n("div",{class:"dropdown "+(this.dropDownHasChildActive?"active":"")+" "+(this.isOpened?"isOpened":""),onClick:function(e){return t.toggleDropdown(e)}},n("slot",null))};return t}());s(o)}}}));