var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],o=0,s=i.length;o<s;o++,a++)t[a]=i[o];return t};System.register(["./p-0b2166d8.system.js"],(function(e){"use strict";var r;return{setters:[function(e){r=e.g}],execute:function(){e({T:g,c:p,e:h,s:u});var n="definedProperties";var t=e("D","definedEvents");var a=e("d","definedControllers");var i="data-define-props";var o=e("a","data-define-events");var s=e("b","data-define-controller");var c=e("g","Copy to clipboard");var l=e("f","Copied!");var f=e("L","ordered");var d=e("P",{startTag:/<([a-z]+|-*)>/,endTag:/<\/([a-z]+|-*)>/,inlineTag:/.*<([a-z]+|-*)>.*<\/([a-z]+|-*)>.*/});var v=e("A",{view:{value:"eye",color:"rgba(108, 192, 145, 1)"},edit:{value:"edit",color:"#007bff"},cancel:{value:"close",color:"#dc3545"},bid:{value:"gavel"},calendar:{value:"calendar-check-o"}});function u(e,r){var n=e.replace(/( |:|\/|\.)/g,"-").toLowerCase();var t=r.querySelector("#"+n);if(!t){return}t.scrollIntoView({behavior:"smooth"});var a=window.location.href;var i="?";if(a.indexOf("chapter=")!==-1){a=window.location.href.split("chapter=")[0];if(a.length>0){i=a[a.length-1];a=a.substring(0,a.length-1)}}else{i=a.indexOf("?")>0?"&":"?"}var o=i+"chapter=";window.history.pushState({},"",""+a+o+n)}function p(e,r,n){if(n===void 0){n=false}var t=new CustomEvent(e,r);if(n){document.dispatchEvent(t)}}function h(e,r,n){var t=null;while(e){if(e.matches(r)){t=e;break}else if(n&&e.matches(n)){break}e=e.parentElement}return t}function g(e){return function(t,a){var o=t.connectedCallback,s=t.render;t.connectedCallback=function(){var t=this;var s=r(t);if(s.hasAttribute(i)){if(!t.componentDefinitions){t.componentDefinitions={definedProperties:[Object.assign(Object.assign({},e),{propertyName:String(a)})]};return o&&o.call(t)}var c=t.componentDefinitions;var l=Object.assign(Object.assign({},e),{propertyName:String(a)});if(c&&c.hasOwnProperty(n)){var f=__spreadArrays(c[n]);f.push(l);c[n]=__spreadArrays(f)}else{c[n]=[l]}t.componentDefinitions=Object.assign({},c)}return o&&o.call(t)};t.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[n])){return s&&s.call(e)}var r=e.componentDefinitions[n];if(r){r=r.reverse()}p("psk-send-props",{composed:true,bubbles:true,cancelable:true,detail:r},true)}}}}}}));