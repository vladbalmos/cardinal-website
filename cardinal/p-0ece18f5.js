import{g as t}from"./p-9835b40a.js";import{c as n}from"./p-79c4de9f.js";function e(t){let n=this;Object.keys(t).forEach((function(e){n[e]=t[e]}))}function l(n,e,l){let o=this;const i=t(o);Array.from(i.attributes).filter(t=>t.name.startsWith(l)).forEach(t=>{const i=t.name.split(l)[1];o[i]=e.getChainValue(n?`${n}.${t.value}`:t.value)})}function o(n,e,l){let o=this;const i=t(o);Array.from(i.attributes).filter(t=>t.value.startsWith(l)).forEach(t=>{const i=t.value.split(l)[1],r=n?`${n}.${i}`:i;o[t.name]=e.getChainValue(r),e.onChange(r,(function(){o[t.name]=e.getChainValue(r)}))})}function i(t,n){try{let e=this;if(e.rootModel){let l=t;return e.parentChain&&(l=`${e.parentChain}.${t}`),e.rootModel.setChainValue(l,n),!0}return!1}catch(e){console.error(e)}return!1}function r(n,e){if(n||!e)return;let i,r,c,u=this,a=t(u);if(null!==a.getAttribute("data-view-model")&&"psk-for-each"===a.tagName.toLowerCase())return i=a.getAttribute("data-view-model"),u.__assignProperties.call(u,{rootModel:e,parentChain:c=i}),void u.render.call(u);if(i=a.getAttribute("view-model"),c=i,null===i&&(null!==(r=null===a.getAttribute("name")||a.getAttribute("name").startsWith("@")?null:a.getAttribute("name"))||null===a.getAttribute("label")||a.getAttribute("label").startsWith("@")||(r=a.getAttribute("label").replace(/( |:|\/|\.|-)/g,"").toLowerCase()),c=r),!i&&!r)return o.call(u,c,e,"@"),l.call(u,c,e,"view-model-"),void u.render.call(u);function s(t,n){u[t]=e.getChainValue(n),e.onChange(n,(function(){u[t]=e.getChainValue(n)}))}if(u.__assignProperties.call(u,{rootModel:e,parentChain:c}),i){let t=e.getChainValue(c);if(!t)return;return Object.keys(t).forEach(t=>{s(t,`${c}.${t}`)}),void function(){const t=`${c}.value`;e.getChainValue(c)&&!e.getChainValue(t)&&s("value",t)}()}}function c(){return function(l){let{componentWillLoad:o,render:c}=l;l.componentWillLoad=function(){let l=t(this);return this.render=c,this.changeModel=i,this.__assignProperties=e,n("getModelEvent",{bubbles:!0,composed:!0,cancellable:!0,detail:{callback:r.bind(this)}},!0,l),o&&o.call(this)}}}export{c as B};