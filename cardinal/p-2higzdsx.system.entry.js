System.register(["./p-0b2166d8.system.js"],(function(e){"use strict";var c,s;return{setters:[function(e){c=e.r;s=e.h}],execute:function(){var t=e("psk_checkbox",function(){function e(e){c(this,e);this.label=null;this.checkboxLabel=null;this.required=false;this.checked=false}e.prototype.render=function(){return s("div",{class:"form-group"},this.label&&s("label",{class:"form-check-label",htmlFor:this.label.replace(/\s/g,"").toLowerCase()},this.label),s("div",{class:"form-check"},s("input",{type:"checkbox",id:this.checkboxLabel&&this.checkboxLabel.replace(/\s/g,"").toLowerCase(),checked:this.checked,required:this.required,name:this.checkboxLabel&&this.checkboxLabel.replace(/\s/g,"").toLowerCase(),class:"form-check-input"}),this.checkboxLabel&&s("label",{class:"form-check-label",htmlFor:this.checkboxLabel.replace(/\s/g,"").toLowerCase()},this.checkboxLabel)))};return e}())}}}));