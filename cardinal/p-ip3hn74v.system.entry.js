System.register(["./p-51da6f80.system.js","./p-a85ba8b7.system.js","./p-77f35bd6.system.js"],(function(t){"use strict";var e,n,r,i,o;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(t){i=t.T},function(t){o=t.C}],execute:function(){var s=undefined&&undefined.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)if(s=t[l])o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o;return i>3&&o&&Object.defineProperty(e,n,o),o};var l=t("psk_table",function(){function t(t){e(this,t);this.cellsWidth="";this.tableContent=null}t.prototype.render=function(){return n("table",null,this.tableContent)};t.prototype.componentWillLoad=function(){var t=this;var e=[];if(this.cellsWidth.length>0){e=this.cellsWidth.split(",")}e=e.map((function(t){return parseInt(t)}));var n=this.element.innerHTML.split(/\n/g).map((function(t){return t.trim().replace("\x3c!----\x3e","")})).filter((function(t){return t.length>0})).map((function(n,r){var i=-1;var o=n.split("|").map((function(n){i++;if(t.header&&r===0){return"<th style=width:"+(e.length>i?e[i]+"%;":"auto")+">"+n.trim()+"</th>"}else{return"<td style=width:"+(e.length>=i?e[i]+"%;":"auto")+">"+n.trim()+"</td>"}})).join("");return"<tr style=width:100%;>"+o+"</tr>"}));var r=[];if(this.header){r.push(this._stringArrayToHTMLElement("thead",n.splice(0,1)));if(this.footer){r.push(this._stringArrayToHTMLElement("tbody",n.splice(0,n.length-1)));r.push(this._stringArrayToHTMLElement("tfoot",[n[n.length-1]]))}else{r.push(this._stringArrayToHTMLElement("tbody",n.splice(0)))}}else{r=[this._stringArrayToHTMLElement("tbody",n)]}this.tableContent=r;this.element.innerHTML=""};t.prototype._stringArrayToHTMLElement=function(t,e){var r=t;return n(r,{innerHTML:e.join("")})};Object.defineProperty(t.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());s([o(),i({description:"If this property is set to true then the first row of the given content will be shown as a table header.",isMandatory:false,propertyType:"boolean"})],l.prototype,"header",void 0);s([i({description:"If this property is set to true then the last row of the given content will be shown as a table footer.",isMandatory:false,propertyType:"boolean"})],l.prototype,"footer",void 0)}}}));