var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],o=0,s=i.length;o<s;o++,a++)t[a]=i[o];return t};System.register(["./p-51da6f80.system.js"],(function(e){"use strict";var r;return{setters:[function(e){r=e.g}],execute:function(){e({T:y,a:g,c:p,f:h,n:m,s:v});var n="definedProperties";var t=e("D","definedEvents");var a=e("e","definedControllers");var i="data-define-props";var o=e("b","data-define-events");var s=e("d","data-define-controller");var c=e("h","Copy to clipboard");var l=e("g","Copied!");var f=e("L","ordered");var u=e("P",{startTag:/<([a-z]+|-*)>/,endTag:/<\/([a-z]+|-*)>/,inlineTag:/.*<([a-z]+|-*)>.*<\/([a-z]+|-*)>.*/});var d=e("A",{view:{value:"eye",color:"rgba(108, 192, 145, 1)"},edit:{value:"edit",color:"#007bff"},cancel:{value:"close",color:"#dc3545"},bid:{value:"gavel"},calendar:{value:"calendar-check-o"}});function v(e,r){var n=e.replace(/( |:|\/|\.)/g,"-").toLowerCase();var t=r.querySelector("#"+n);if(!t){return}t.scrollIntoView({behavior:"smooth"});var a=window.location.href;var i="?";if(a.indexOf("chapter=")!==-1){a=window.location.href.split("chapter=")[0];if(a.length>0){i=a[a.length-1];a=a.substring(0,a.length-1)}}else{i=a.indexOf("?")>0?"&":"?"}var o=i+"chapter=";window.history.pushState({},"",""+a+o+n)}function p(e,r,n,t){if(n===void 0){n=false}if(t===void 0){t=null}var a=new CustomEvent(e,r);if(n){if(t){t.dispatchEvent(a)}else{document.dispatchEvent(a)}}}function h(e,r,n){var t=null;while(e){if(e.matches(r)){t=e;break}else if(n&&e.matches(n)){break}e=e.parentElement}return t}function b(e){return e.split("").map((function(e){if(e===e.toLowerCase()){return e}return"-"+e.toLowerCase()})).join("")}function m(e,r,n,t){if(t===void 0){t=null}var a=e.replace(r,n);if(t){return t(a)}return a}function g(e){if(e.startsWith("psk-")){return true}var r=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"].find((function(r){return r===e}));return r===e}function y(e){return function(t,a){var o=t.connectedCallback,s=t.render,c=t.componentWillLoad;t.componentWillLoad=function(){var e=this;var n=r(e);if(!n.hasAttribute(i)){return c&&c.call(e)}};t.connectedCallback=function(){var t=this;var s=r(t);var c=b(String(a));if(s.hasAttribute(i)){if(!t.componentDefinitions){t.componentDefinitions={definedProperties:[Object.assign(Object.assign({},e),{propertyName:c})]};return o&&o.call(t)}var l=t.componentDefinitions;var f=Object.assign(Object.assign({},e),{propertyName:c});if(l&&l.hasOwnProperty(n)){var u=__spreadArrays(l[n]);u.push(f);l[n]=__spreadArrays(u)}else{l[n]=[f]}t.componentDefinitions=Object.assign({},l)}return o&&o.call(t)};t.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[n])){return s&&s.call(e)}var r=e.componentDefinitions[n];if(r){r=r.reverse()}p("psk-send-props",{composed:true,bubbles:true,cancelable:true,detail:r},true)}}}}}}));