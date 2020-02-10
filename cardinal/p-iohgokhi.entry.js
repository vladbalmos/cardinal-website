import{r as t,c as e,h as s}from"./p-9835b40a.js";import{T as i}from"./p-353f2ea7.js";import"./p-72de6249.js";import{C as o}from"./p-ec895615.js";import{T as r}from"./p-d5013a80.js";import{C as a}from"./p-0ddb48c5.js";var n=function(t,e,s,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(r<3?o(a):r>3?o(e,s,a):o(e,s))||a);return r>3&&a&&Object.defineProperty(e,s,a),a};const h=class{constructor(s){t(this,s),this.alertOpened=!1,this._messagesQueue=[],this._messagesContent=[],this.timer=0,this.opened=!1,this.typeOfAlert=[],this.timeAlive=5e3,this.messagesToDisplay=3,this.openFeedbackHandler=e(this,"openFeedback",7)}closeFeedbackHandler(t){this.alertOpened&&(this.alertOpened=!1);const e=this._messagesContent.indexOf(t.detail);e>-1&&(this.typeOfAlert.splice(e,1),this._messagesContent.splice(e,1),this._messagesContent=this._messagesContent.slice(),this._messagesQueue.length>0&&(this._messagesContent=[...this._messagesContent,this._messagesQueue.shift()]))}componentWillLoad(){this.openFeedbackHandler.emit((t,e,s)=>{this.typeOfAlert.push(s||"toast"),this.alertOpened=!0,t instanceof Array?t.forEach((t,e)=>{this.addToMessageArray.bind(this)(t,e)}):this.addToMessageArray.bind(this)(t,e)})}timerToShow(t){if(this._messagesContent.length>0){const e=(new Date).getTime(),s=t.timer;let i=Math.floor((e-s)/a.MINUTE);switch(setTimeout(()=>{this.timerToShow.bind(this)(t)},a.MINUTE_TICK),setTimeout(()=>{this.timerToShow.bind(this)(t)},a.HOUR_TICK),!0){case i<=0:this.timeMeasure=a.RIGHT_NOW;break;case i<60:this.timer=Math.floor((e-s)/a.MINUTE),this.timeMeasure=a.MINUTES;break;case i>=60:this.timer=Math.floor((e-s)/a.HOUR),this.timeMeasure=a.HOURS}}}addToMessageArray(t,e){const s={content:t,timer:(new Date).getTime(),name:e};this._messagesContent.length+1<=this.messagesToDisplay?this._messagesContent=[...this._messagesContent,s]:this._messagesQueue=[...this._messagesQueue,s]}render(){let t,e=[];return this._messagesContent.forEach((i,o)=>{"toast"===this.typeOfAlert[o]?(t=this.toastRenderer?this.toastRenderer:"psk-ui-toast",this.timerToShow.bind(this)(i),e.push(s(t,{message:i,timeSinceCreation:this.timer,timeMeasure:this.timeMeasure,styleCustomisation:this.styleCustomisation}))):e.push(s(t=this.alertRenderer?this.alertRenderer:"psk-ui-alert",{message:this._messagesContent[this._messagesContent.length-1],typeOfAlert:this.typeOfAlert[o],timeAlive:this.timeAlive,styleCustomisation:this.styleCustomisation}))}),s("div",null,e||null)}};n([o(),i({description:"This property is a object based on StyleCustomisation interface ",isMandatory:!1,propertyType:"StyleCustomisation type",specialNote:"Even if you do not use all the parameters there will not be a problem with the default renderers."})],h.prototype,"styleCustomisation",void 0),n([i({description:"This property is the auto closing timer in milliseconds for the alert.",isMandatory:!1,propertyType:"number",defaultValue:5e3,specialNote:"This property will only be taken into consideration when used with the psk-ui-alert child component"})],h.prototype,"timeAlive",void 0),n([i({description:"This property represents the number of toasts to be renderer on the user interface.",isMandatory:!1,propertyType:"number",defaultValue:3,specialNote:"This property will only be taken into consideration when used with the psk-ui-toast child component."})],h.prototype,"messagesToDisplay",void 0),n([i({description:"This property allows the component to display a custom toast in case the default one is not preferred.",isMandatory:!1,propertyType:"string",defaultValue:"psk-ui-toast",specialNote:"If this property is missing , psk-ui-toast will be assumed."})],h.prototype,"toastRenderer",void 0),n([i({description:"This property allows the component to display a custom alert in case the default one is not preferred.",isMandatory:!1,propertyType:"string",defaultValue:"psk-ui-alert",specialNote:"If this property is missing , psk-ui-alert will be assumed."})],h.prototype,"alertRenderer",void 0),n([r({eventName:"openFeedback",controllerInteraction:{required:!0},description:"This even is triggered when the user does an action that require feedback.This event comes with three parameters :\n            message(string) : the message for the action that was executed,\n            name(string) : the name is necessary in case of a toast feedback and\n            typeOfAlert(string) : either toast or a bootstrap alert."})],h.prototype,"openFeedbackHandler",void 0);export{h as psk_list_feedbacks};