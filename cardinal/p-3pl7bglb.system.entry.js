System.register(["./p-51da6f80.system.js","./p-61358132.system.js","./p-a13b0b86.system.js","./p-77f35bd6.system.js"],(function(e){"use strict";var t,r,n,s;return{setters:[function(e){t=e.r;r=e.h},function(e){n=e.T},function(){},function(e){s=e.C}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,r,n){var s=arguments.length,i=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,p;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)if(p=e[o])i=(s<3?p(i):s>3?p(t,r,i):p(t,r))||i;return s>3&&i&&Object.defineProperty(t,r,i),i};var p=e("psk_stepper_renderer",function(){function e(e){t(this,e)}e.prototype.computeStepDesign=function(e,t,r){var n="";if(e===0){n+="first "}else if(e===r){n+="last "}if(e<t){n+="done"}else if(e===t){n+="current"}return n};e.prototype.render=function(){var e=this;return r("div",{class:"steps clearfix"},r("ul",{role:"tablist"},this.wizardSteps.map((function(t){return r("li",{role:"tab",class:e.computeStepDesign(t.stepIndex,e.activeStep.stepIndex,e.wizardSteps.length-1)},r("div",{class:"button",onClick:function(r){r.preventDefault();r.stopImmediatePropagation();e.handleStepChange(t.stepIndex)}},r("span",{class:"current-info audible"}),r("div",{class:"title"},r("p",{class:"step-icon"},r("span",null,t.stepIndex+1)),r("div",{class:"step-text"},r("span",{class:"step-inner"},t.stepName)))))}))))};return e}());i([s(),n({description:"This property holds an array of:\n            wizard configuration\n            the names of the steps\n            the components that will be displayed\n            other properties, like information for the steps.(optional).",isMandatory:false,propertyType:"array for WizardStep items(WizardStep[])",defaultValue:"psk-stepper-renderer"})],p.prototype,"wizardSteps",void 0);i([n({description:"The WizardStep created by psk-wizard and passed on by psk-stepper.",isMandatory:true,propertyType:"WizardStep"})],p.prototype,"activeStep",void 0);i([n({description:"This property is a function that modifies the way the step change is interpreted.",isMandatory:true,propertyType:"Function"})],p.prototype,"handleStepChange",void 0)}}}));