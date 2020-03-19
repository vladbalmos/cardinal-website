System.register(["./p-51da6f80.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-06840729.system.js","./p-77f35bd6.system.js","./p-01febca5.system.js"],(function(e){"use strict";var t,n,a,r,i,s;return{setters:[function(e){t=e.r;n=e.h;a=e.g},function(){},function(){},function(e){r=e.T},function(e){i=e.C},function(e){s=e.B}],execute:function(){var o=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function l(e,t){return t={exports:{}},e(t,t.exports),t.exports}var u=l((function(e){var t=typeof window!=="undefined"?window:typeof WorkerGlobalScope!=="undefined"&&self instanceof WorkerGlobalScope?self:{};var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i;var n=0;var a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){if(e instanceof r){return new r(e.type,a.util.encode(e.content),e.alias)}else if(Array.isArray(e)){return e.map(a.util.encode)}else{return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")}},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){if(!e["__id"]){Object.defineProperty(e,"__id",{value:++n})}return e["__id"]},clone:function e(t,n){var r,i,s=a.util.type(t);n=n||{};switch(s){case"Object":i=a.util.objId(t);if(n[i]){return n[i]}r={};n[i]=r;for(var o in t){if(t.hasOwnProperty(o)){r[o]=e(t[o],n)}}return r;case"Array":i=a.util.objId(t);if(n[i]){return n[i]}r=[];n[i]=r;t.forEach((function(t,a){r[a]=e(t,n)}));return r;default:return t}},getLanguage:function(e){while(e&&!t.test(e.className)){e=e.parentElement}if(e){return(e.className.match(t)||[,"none"])[1].toLowerCase()}return"none"},currentScript:function(){if(typeof document==="undefined"){return null}if("currentScript"in document){return document.currentScript}try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t){if(t[n].src==e){return t[n]}}}return null}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t){n[r]=t[r]}return n},insertBefore:function(e,t,n,r){r=r||a.languages;var i=r[e];var s={};for(var o in i){if(i.hasOwnProperty(o)){if(o==t){for(var l in n){if(n.hasOwnProperty(l)){s[l]=n[l]}}}if(!n.hasOwnProperty(o)){s[o]=i[o]}}}var u=r[e];r[e]=s;a.languages.DFS(a.languages,(function(t,n){if(n===u&&t!=e){this[t]=s}}));return s},DFS:function e(t,n,r,i){i=i||{};var s=a.util.objId;for(var o in t){if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],u=a.util.type(l);if(u==="Object"&&!i[s(l)]){i[s(l)]=true;e(l,n,null,i)}else if(u==="Array"&&!i[s(l)]){i[s(l)]=true;e(l,n,o,i)}}}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector));a.hooks.run("before-all-elements-highlight",r);for(var i=0,s;s=r.elements[i++];){a.highlightElement(s,t===true,r.callback)}},highlightElement:function(n,r,i){var s=a.util.getLanguage(n);var o=a.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var l=n.parentNode;if(l&&l.nodeName.toLowerCase()==="pre"){l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s}var u=n.textContent;var c={element:n,language:s,grammar:o,code:u};function p(e){c.highlightedCode=e;a.hooks.run("before-insert",c);c.element.innerHTML=c.highlightedCode;a.hooks.run("after-highlight",c);a.hooks.run("complete",c);i&&i.call(c.element)}a.hooks.run("before-sanity-check",c);if(!c.code){a.hooks.run("complete",c);i&&i.call(c.element);return}a.hooks.run("before-highlight",c);if(!c.grammar){p(a.util.encode(c.code));return}if(r&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){p(e.data)};d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:true}))}else{p(a.highlight(c.code,c.grammar,c.language))}},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};a.hooks.run("before-tokenize",i);i.tokens=a.tokenize(i.code,i.grammar);a.hooks.run("after-tokenize",i);return r.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,i,s,o,l){for(var u in n){if(!n.hasOwnProperty(u)||!n[u]){continue}var c=n[u];c=Array.isArray(c)?c:[c];for(var p=0;p<c.length;++p){if(l&&l==u+","+p){return}var d=c[p],g=d.inside,f=!!d.lookbehind,h=!!d.greedy,m=0,b=d.alias;if(h&&!d.pattern.global){var y=d.pattern.toString().match(/[imsuy]*$/)[0];d.pattern=RegExp(d.pattern.source,y+"g")}d=d.pattern||d;for(var S=i,v=s;S<t.length;v+=t[S].length,++S){var A=t[S];if(t.length>e.length){return}if(A instanceof r){continue}if(h&&S!=t.length-1){d.lastIndex=v;var k=d.exec(e);if(!k){break}var E=k.index+(f&&k[1]?k[1].length:0),w=k.index+k[0].length,_=S,F=v;for(var T=t.length;_<T&&(F<w||!t[_].type&&!t[_-1].greedy);++_){F+=t[_].length;if(E>=F){++S;v=F}}if(t[S]instanceof r){continue}O=_-S;A=e.slice(v,F);k.index-=v}else{d.lastIndex=0;var k=d.exec(A),O=1}if(!k){if(o){break}continue}if(f){m=k[1]?k[1].length:0}var E=k.index+m,k=k[0].slice(m),w=E+k.length,x=A.slice(0,E),I=A.slice(w);var N=[S,O];if(x){++S;v+=x.length;N.push(x)}var P=new r(u,g?a.tokenize(k,g):k,b,k,h);N.push(P);if(I){N.push(I)}Array.prototype.splice.apply(t,N);if(O!=1)a.matchGrammar(e,t,n,S,v,true,u+","+p);if(o)break}}}},tokenize:function(e,t){var n=[e];var r=t.rest;if(r){for(var i in r){t[i]=r[i]}delete t.rest}a.matchGrammar(e,n,t,0,0,false);return n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[];n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(!n||!n.length){return}for(var r=0,i;i=n[r++];){i(t)}}},Token:r};e.Prism=a;function r(e,t,n,a,r){this.type=e;this.content=t;this.alias=n;this.length=(a||"").length|0;this.greedy=!!r}r.stringify=function(e,t){if(typeof e=="string"){return e}if(Array.isArray(e)){return e.map((function(e){return r.stringify(e,t)})).join("")}var n={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,i)}a.hooks.run("wrap",n);var s=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(s?" "+s:"")+">"+n.content+"</"+n.tag+">"};if(!e.document){if(!e.addEventListener){return a}if(!a.disableWorkerMessageHandler){e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,s=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r));if(s){e.close()}}),false)}return a}var i=a.util.currentScript();if(i){a.filename=i.src;if(i.hasAttribute("data-manual")){a.manual=true}}if(!a.manual){function s(){if(!a.manual){a.highlightAll()}}var o=document.readyState;if(o==="loading"||o==="interactive"&&i&&i.defer){document.addEventListener("DOMContentLoaded",s)}else{if(window.requestAnimationFrame){window.requestAnimationFrame(s)}else{window.setTimeout(s,16)}}}return a}(t);if(e.exports){e.exports=n}if(typeof o!=="undefined"){o.Prism=n}n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:true},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:true,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:true}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i};n.languages.markup["tag"].inside["attr-value"].inside["entity"]=n.languages.markup["entity"];n.hooks.add("wrap",(function(e){if(e.type==="entity"){e.attributes["title"]=e.content.replace(/&amp;/,"&")}}));Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function e(t,a){var r={};r["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:true,inside:n.languages[a]};r["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};i["language-"+a]={pattern:/[\s\S]+/,inside:n.languages[a]};var s={};s[t]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,t),"i"),lookbehind:true,greedy:true,inside:i};n.languages.insertBefore("markup","cdata",s)}});n.languages.xml=n.languages.extend("markup",{});n.languages.html=n.languages.markup;n.languages.mathml=n.languages.markup;n.languages.svg=n.languages.markup;(function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:true},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/};e.languages.css["atrule"].inside.rest=e.languages.css;var n=e.languages.markup;if(n){n.tag.addInlined("style","css");e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag)}})(n);n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:true},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:true,greedy:true}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:true},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:true,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:true}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:true},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:true}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/});n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:true,greedy:true},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:true,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:true,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:true,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:true,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:true,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}});if(n.languages.markup){n.languages.markup.tag.addInlined("script","javascript")}n.languages.js=n.languages.javascript;(function(){if(typeof self==="undefined"||!self.Prism||!self.document||!document.querySelector){return}self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(e.hasAttribute("data-src-loaded")){return}var a=e.getAttribute("data-src");var r,i=e;var s=/\blang(?:uage)?-([\w-]+)\b/i;while(i&&!s.test(i.className)){i=i.parentNode}if(i){r=(e.className.match(s)||[,""])[1]}if(!r){var o=(a.match(/\.(\w+)$/)||[,""])[1];r=t[o]||o}var l=document.createElement("code");l.className="language-"+r;e.textContent="";l.textContent="Loading…";e.appendChild(l);var u=new XMLHttpRequest;u.open("GET",a,true);u.onreadystatechange=function(){if(u.readyState==4){if(u.status<400&&u.responseText){l.textContent=u.responseText;n.highlightElement(l);e.setAttribute("data-src-loaded","")}else if(u.status>=400){l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText}else{l.textContent="✖ Error: File does not exist or is empty"}}};u.send(null)}))};document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()}))})()}));Prism.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:true},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:true},comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,number:/-?\d+\.?\d*(?:e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";var n={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:true,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:true},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:true,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:true,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:true,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:true},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:true,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:true},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:true,alias:"constant"}},alias:"variable",lookbehind:true},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,lookbehind:true,greedy:true,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,lookbehind:true,greedy:true},{pattern:/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,greedy:true,inside:n}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:true},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:true},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:true,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:true},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:true}};var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"];var r=n.variable[1].inside;for(var i=0;i<a.length;i++){r[a[i]]=e.languages.bash[a[i]]}e.languages.shell=e.languages.bash})(Prism);Prism.languages["shell-session"]={command:{pattern:/\$(?:[^\r\n'"<]|(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1|(?:^|[^<])<<\s*["']?(?:\w+?)["']?\s*(?:\r\n?|\n)(?:[\s\S])*?(?:\r\n?|\n)\3)+/,inside:{bash:{pattern:/(\$\s*)[\s\S]+/,lookbehind:true,alias:"language-bash",inside:Prism.languages.bash},sh:{pattern:/^\$/,alias:"important"}}},output:{pattern:/.(?:.*(?:\r\n?|\n|.$))*/}};var c=undefined&&undefined.__decorate||function(e,t,n,a){var r=arguments.length,i=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,n):a,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,a);else for(var o=e.length-1;o>=0;o--)if(s=e[o])i=(r<3?s(i):r>3?s(t,n,i):s(t,n))||i;return r>3&&i&&Object.defineProperty(t,n,i),i};var p=/<!---->/gm;var d=e("psk_code",function(){function e(e){t(this,e);this.title="";this.language="xml";this.componentCode=""}e.prototype.componentWillLoad=function(){switch(this.language){case"javascript":case"css":case"json":case"shell-session":this.componentCode=this.host.innerText;break;default:this.componentCode=this.host.innerHTML}var e=this.host.querySelector("link");if(e){this.host.innerHTML=e.outerHTML;this.componentCode=this.componentCode.replace(e.outerHTML,"")}else{this.host.innerHTML=""}};e.prototype.componentDidLoad=function(){u.highlightAllUnder(this.host)};e.prototype.render=function(){var e=document.createElement("textarea");e.innerHTML=this.componentCode;var t=e.value;t=t.replace(p,"");t=t.trim();var a=t.split("\n");var r=[];if(a.length){var i=a[a.length-1].trimLeft();var s=a[a.length-1].length-i.length;for(var o=0;o<a.length;o++){var l=a[o];var u=s;var c=l.trimLeft();if(l.length-c.length<s){u=l.length-c.length}l=l.substring(u);r.push(l)}}var d=r.join("\n");var g=n("pre",null,n("code",{class:"language-"+this.language},d));if(this.title.replace(/\s/g,"")===""){return g}return n("psk-chapter",{title:this.title},g)};Object.defineProperty(e.prototype,"host",{get:function(){return a(this)},enumerable:true,configurable:true});return e}());c([i(),s(),r({description:"This property is the title of the psk-chapter that will be created.",isMandatory:false,propertyType:"string"})],d.prototype,"title",void 0);c([r({description:"This property is the language, in which the code is written(so the css can identify it).",isMandatory:false,propertyType:"string"})],d.prototype,"language",void 0)}}}));