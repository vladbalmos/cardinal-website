import{g as e}from"./p-9835b40a.js";const n="definedProperties",t="definedEvents",o="definedControllers",a="data-define-props",s="data-define-events",r="data-define-controller",i="Copy to clipboard",l="Copied!",c="ordered",d={startTag:/<([a-z]+|-*)>/,endTag:/<\/([a-z]+|-*)>/,inlineTag:/.*<([a-z]+|-*)>.*<\/([a-z]+|-*)>.*/},f={view:{value:"eye",color:"rgba(108, 192, 145, 1)"},edit:{value:"edit",color:"#007bff"},cancel:{value:"close",color:"#dc3545"},bid:{value:"gavel"},calendar:{value:"calendar-check-o"}},u=["link","psk-for-each"],p=["xs","s","m","l","xl"],b={xs:".d-none .d-sm-block",sm:".d-sm-none .d-md-block",md:".d-md-none .d-lg-block",lg:".d-lg-none .d-xl-block",xl:".d-xl-none"};function h(e,n){const t=e.replace(/( |:|\/|\.)/g,"-").toLowerCase(),o=n.querySelector(`#${t}`);if(!o)return;o.scrollIntoView({behavior:"smooth"});let a=window.location.href,s="?";-1!==a.indexOf("chapter=")?(a=window.location.href.split("chapter=")[0]).length>0&&(s=a[a.length-1],a=a.substring(0,a.length-1)):s=a.indexOf("?")>0?"&":"?",window.history.pushState({},"",`${a}${`${s}chapter=`}${t}`)}function m(e,n,t=!1,o=null){const a=new CustomEvent(e,n);t&&(o?o.dispatchEvent(a):document.dispatchEvent(a))}function k(e,n,t){let o=null;for(;e;){if(e.matches(n)){o=e;break}if(t&&e.matches(t))break;e=e.parentElement}return o}function v(e,n,t,o=null){let a=e.replace(n,t);return o?o(a):a}function g(e){return!!e.startsWith("psk-")||["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"].find(n=>n===e)===e}function w(t){return function(o,s){const{connectedCallback:r,render:i,componentWillLoad:l}=o;o.componentWillLoad=function(){if(!e(this).hasAttribute(a))return l&&l.call(this)},o.connectedCallback=function(){let o=this,i=e(o),l=String(s).split("").map(e=>e===e.toLowerCase()?e:`-${e.toLowerCase()}`).join("");if(i.hasAttribute(a)){if(!o.componentDefinitions)return o.componentDefinitions={definedProperties:[Object.assign(Object.assign({},t),{propertyName:l})]},r&&r.call(o);let e=o.componentDefinitions;const a=Object.assign(Object.assign({},t),{propertyName:l});if(e&&e.hasOwnProperty(n)){let t=[...e[n]];t.push(a),e[n]=[...t]}else e[n]=[a];o.componentDefinitions=Object.assign({},e)}return r&&r.call(o)},o.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[n])return i&&i.call(this);let e=this.componentDefinitions[n];e&&(e=e.reverse()),m("psk-send-props",{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{f as A,t as D,u as G,c as L,d as P,w as T,g as a,s as b,m as c,r as d,o as e,k as f,p as g,b as h,l as i,i as j,v as n,h as s};