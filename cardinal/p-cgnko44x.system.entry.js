System.register(["./p-51da6f80.system.js","./p-fdcca78d.system.js","./p-35367295.system.js","./p-77f35bd6.system.js","./p-bdc11eaf.system.js"],(function(t){"use strict";var e,s,i,o,r,n;return{setters:[function(t){e=t.r;s=t.c;i=t.h},function(){},function(t){o=t.T},function(t){r=t.C},function(t){n=t.C}],execute:function(){var a=undefined&&undefined.__decorate||function(t,e,s,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,s):i,n;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)if(n=t[a])r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r;return o>3&&r&&Object.defineProperty(e,s,r),r};var l=t("psk_ui_alert",function(){function t(t){e(this,t);this._styleCustomisation={};this.typeOfAlert=n.ALERT_SUCCESS;this.timeAlive=3e3;this.styleCustomisation={};this.isVisible=true;this.alert=null;this.closeFeedback=s(this,"closeFeedback",7)}t.prototype.styleCustomisationWatcher=function(t){if(typeof t==="string"){this._styleCustomisation=JSON.parse(t)}else{this._styleCustomisation=t}};t.prototype.closeUIFeedback=function(){var t=this;this.isVisible=false;setTimeout((function(){t.closeFeedback.emit(t.message)}),1e3)};t.prototype.componentWillLoad=function(){this.styleCustomisationWatcher(this.styleCustomisation)};t.prototype.render=function(){var t=this;this.alert=i("div",{class:"alert "+this.typeOfAlert+" alert-dismissible fade "+(this.isVisible?"show":"hide"),style:this._styleCustomisation.alert?this._styleCustomisation.alert.style?this._styleCustomisation.alert.style:{}:{},onClick:function(){t.closeUIFeedback()}},i("slot",null),i("div",{class:"toast-body"},this.message.content));setTimeout((function(){t.closeUIFeedback()}),this.timeAlive);return this.alert};Object.defineProperty(t,"watchers",{get:function(){return{styleCustomisation:["styleCustomisationWatcher"]}},enumerable:true,configurable:true});return t}());a([r(),o({description:"This property is a string that indicates the type of alert that you want so send back to the user",isMandatory:false,propertyType:"string",defaultValue:"alert-success"})],l.prototype,"typeOfAlert",void 0);a([o({description:"This property is the message that will be rendered on the alert",isMandatory:false,propertyType:"any"})],l.prototype,"message",void 0);a([o({description:"This property is the time in milliseconds t",isMandatory:false,propertyType:"any"})],l.prototype,"timeAlive",void 0);a([o({description:"The style customisation for the alert so it looks according to your application",isMandatory:false,propertyType:"StyleCustomisation"})],l.prototype,"styleCustomisation",void 0)}}}));