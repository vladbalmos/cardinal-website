System.register(["./p-51da6f80.system.js","./p-a85ba8b7.system.js","./p-77f35bd6.system.js","./p-6ff0ba97.system.js"],(function(e){"use strict";var t,o,i,n,r;return{setters:[function(e){t=e.r;o=e.h},function(e){i=e.T},function(e){n=e.C},function(e){r=e.B}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,o,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r;return n>3&&r&&Object.defineProperty(t,o,r),r};var a=e("psk_label",function(){function e(e){t(this,e);this.label=null;this.for=null}e.prototype.render=function(){return o("label",{class:"col-form-label",htmlFor:this.for},this.label?this.label:o("slot",null))};return e}());s([n(),r(),i({description:["Specifies the label to be displayed.","If this attribute is not provided, the component will display the content of the component as label."],isMandatory:false,propertyType:"string"})],a.prototype,"label",void 0);s([i({description:["Specifies which form element a label is bound to.","Usually, this attribute comes in pair with another component, and is used by the browser to group the content in a specific order to be read by screen readers.","The screen readers are used by the people with disabilities in order to have the possibility to navigate a website.",'An example of this pair of components can be found in the <a href="#live-examples">Examples section</a>.'],isMandatory:false,propertyType:"string"})],a.prototype,"for",void 0)}}}));