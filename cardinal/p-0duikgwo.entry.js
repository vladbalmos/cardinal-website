import{r as t,h as e,g as s}from"./p-9835b40a.js";import{s as i,c as r,T as o}from"./p-e9e45895.js";import{C as n}from"./p-ec895615.js";var c=function(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n};const a=class{constructor(e){t(this,e),this.chapters=[],this.title="",this.componentFullyLoaded=!1}receiveChapters(t){if(t.stopImmediatePropagation(),!t.detail)return;const e=Object.assign({},t.detail),s=this.chapters.findIndex(t=>e.guid===t.guid),i=[...this.chapters];if(-1===s)return i.push(Object.assign({},e)),void(this.chapters=JSON.parse(JSON.stringify(i)));i[s]=Object.assign({},e),this.chapters=JSON.parse(JSON.stringify(i))}_checkForChapterScrolling(){if(-1===window.location.href.indexOf("chapter="))return;const t=window.location.href.split("chapter=")[1];setTimeout(()=>{i(t,this.element)},50)}_sendTableOfContentChapters(){r("psk-send-toc",{bubbles:!0,composed:!0,cancelable:!0,detail:this.chapters},!0)}componentDidLoad(){this.componentFullyLoaded=!0}render(){return this._checkForChapterScrolling(),this._sendTableOfContentChapters(),e("div",null,e("nav",null,e("h3",null,this.title)),e("div",{class:"page-content container"},this.componentFullyLoaded?e("slot",null):e("psk-ui-loader",{shouldBeRendered:!0})))}get element(){return s(this)}};c([n()],a.prototype,"chapters",void 0),c([o({description:"This property will be used as the title for the page.",isMandatory:!1,propertyType:"string"})],a.prototype,"title",void 0),c([o({description:"This property is the name of the table of content.",isMandatory:!1,propertyType:"string"})],a.prototype,"tocTitle",void 0);export{a as psk_page};