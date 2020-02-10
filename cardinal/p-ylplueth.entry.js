import{r as e,h as t,g as o}from"./p-9835b40a.js";import{T as r}from"./p-e9e45895.js";import{C as s}from"./p-ec895615.js";var i=function(e,t,o,r){var s,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(i<3?s(n):i>3?s(t,o,n):s(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n};const n=class{constructor(t){e(this,t),this.controllerName="FormController",this.formActions="submit",this.action=null,this.method="get"}render(){return t("psk-container",{controllerName:this.controllerName,parentHost:this._host},t("div",{class:"container"},t("form",null,t("slot",null),this._createFormActions(this.formActions))))}_createFormActions(e){if(0===e.trim().length)return null;let o=[];return o=e.split(",").map(e=>t("psk-button",{"event-name":e,label:e})),t("psk-container",{id:"actions"},o)}get _host(){return o(this)}};i([s()],n.prototype,"render",null),i([r({description:["This attributes is setting the controller of the form. The default value for this attribute is FormController, a default controller for handling form submitions created inside Cardinal.Js.",'Information about creating a controller can be found inside the documentation: <psk-link page="Cardinal/controllers">Controllers Documentation</psk-link>',"All the "],isMandatory:!1,propertyType:"string",defaultValue:"FormController",specialNote:"If the controller name is not provided, then the default FormController is assumed."})],n.prototype,"controllerName",void 0),i([r({description:['By defining this attribute, the user is able to control the behaviour of the form, so by definition, this attribute holds the possible actions inside the form, the defined actions should be sepparated by comma(",").',"Also, as a recommendation, the values should be provided using lowercases, and if there are more words inside an action, to be written using dash symbol(-)","Example of form actions: submit, reset-form, validate-form, cancel",'Using all these actions, the component will generate a <psk-link page="web-components/psk-button">psk-button</psk-link>.'],isMandatory:!1,propertyType:"string values sepparated by comma (,)",defaultValue:"submit",specialNote:"If this attribute has no value, then the submit form action is assumed as default value."})],n.prototype,"formActions",void 0),i([r({description:["\tSpecifies where to send the form-data when a form is submitted","Most of the time, this is the URL to a server which is mainly responsible to handle the form-data."],isMandatory:!1,propertyType:"string",defaultValue:"null",specialNote:"If this attribute has no value, then the current page will be handled. If a controller is given to the form, rather than FormController, then nothing will happen."})],n.prototype,"action",void 0),i([r({description:["This property specifies the HTTP method to use when sending form-data.","The possible values are <strong>get</strong> and <strong>post</strong>. If no value is provided, the GET is assumed."],isMandatory:!1,propertyType:"string (get / post)",defaultValue:"get"})],n.prototype,"method",void 0);export{n as psk_form};