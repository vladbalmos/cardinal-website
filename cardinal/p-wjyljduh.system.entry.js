System.register(["./p-51da6f80.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-06840729.system.js","./p-77f35bd6.system.js","./p-01febca5.system.js"],(function(e){"use strict";var t,i,n,o,a;return{setters:[function(e){t=e.r;i=e.h},function(){},function(){},function(e){n=e.T},function(e){o=e.C},function(e){a=e.B}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,i,n){var o=arguments.length,a=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)if(s=e[r])a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a;return o>3&&a&&Object.defineProperty(t,i,a),a};var r=["Bytes","KB","MB","GB","TB"];var l=e("psk_attachments_list",function(){function e(e){t(this,e);this.files=[];this.removeFileFromList=null;this.attachmentsClass=""}e.bytesToSize=function(e){if(e==0)return"0 Byte";var t=parseInt(String(Math.floor(Math.log(e)/Math.log(1024))));return Math.round(e/Math.pow(1024,t))+" "+r[t]};e.prototype.render=function(){var e=this;if(!this.files||this.files.length===0){return i("h5",null,"No attachments available!")}var t=this.files.map((function(t,n){var o=null;switch(t.name.substr(t.name.lastIndexOf(".")+1)){case"pdf":o="fa-file-pdf-o";break;case"xls":o="fa-file-excel-o";break;case"doc":case"docx":o="fa-file-word-o";break;case"jpg":case"png":o="fa-file-picture-o";break;default:o="fa-file-o"}return i("button",{type:"button",class:"btn btn-primary mr-2 mt-2"},i("span",{class:"icon mr-1 fa "+o}),t.name,i("span",{class:"badge badge-light ml-1 + "+e.attachmentsClass},l.bytesToSize(t.size)),e.removeFileFromList!==null&&i("span",{class:"fa fa-remove fa-2x pull-right",onClick:function(t){t.preventDefault();t.stopImmediatePropagation();e.removeFileFromList(n)}}))}));return t};return e}());s([o(),a(),n({description:"This parameter holds the files that can be downloaded. They can be downloaded one by one by clicking on the desired file, or all at the same time.",specialNote:"WgFile is a custom type. Inside it, the following information can be stored:\n\t\t\tname of the file,\n\t\t\tsize of the file,\n\t\t\ttype of the file (by extension),\n\t\t\t? content of the file",isMandatory:true,propertyType:"array of WgFile items (WgFile[])"})],l.prototype,"files",void 0);s([n({description:"If this property is given to the component, then a red X will be displayed on the right of each file card giving the possibility to remove the file (this functionality should be implemented by the programmer providing him the possibility to have custom behavior before the deletion of the file).",specialNote:"The function will receive one parameter, the index of the file in the WgFile array.",isMandatory:false,propertyType:"Function",defaultValue:"null"})],l.prototype,"removeFileFromList",void 0)}}}));