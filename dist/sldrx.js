!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="pwNi")}({BMrJ:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=h[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(l(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(l(o.parts[i],t));h[o.id]={id:o.id,refs:1,parts:a}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s=i[1],c=i[2],u=i[3],l={css:s,media:c,sourceMap:u};o[a]?o[a].parts.push(l):n.push(o[a]={id:a,parts:[l]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=b[b.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=y++;n=_||(_=s(t)),o=f.bind(null,n,u,!1),r=f.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=p.bind(null,n,t),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=d.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function f(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=A(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),_=null,y=0,b=[],A=n("DRTY");e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=h[s.id];c.refs--,i.push(c)}if(e){o(r(e,t),t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete h[c.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},BtxX:function(e){!function(t){function n(){}function o(e,t){return function(){e.apply(t,arguments)}}function r(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function i(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,r._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?a:s)(t.promise,e._value);var o;try{o=n(e._value)}catch(e){return void s(t.promise,e)}a(t.promise,o)})}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l(o(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}var f=setTimeout;r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var o=new this.constructor(n);return i(this,new u(e,t,o)),o},r.all=function(e){var t=Array.prototype.slice.call(e);return new r(function(e,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){o(i,e)},n)}t[i]=a,0==--r&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var r=t.length,i=0;i<t.length;i++)o(i,t[i])})},r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},r._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){f(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},r._setImmediateFn=function(e){r._immediateFn=e},r._setUnhandledRejectionFn=function(e){r._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=r:t.Promise||(t.Promise=r)}(this)},DRTY:function(e){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},JkW7:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0});var p=n("KM04"),h=n.n(p),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},v=function(e){return e.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()})},_=function(){return document.currentScript||function(){var e=document.getElementsByTagName("script");return e[e.length-1]}()},y=function(e){var t=e.attributes,n={};return Object.keys(t).forEach(function(e){if(t.hasOwnProperty(e)){var o=t[e].name;if(!o||"string"!=typeof o)return!1;var r=o.split(/(data-props?-)/).pop()||"";if(r=v(r),o!==r){n[r]=t[e].nodeValue}}}),[].forEach.call(e.getElementsByTagName("script"),function(e){var t={};if(e.hasAttribute("type")){if("text/props"!==e.getAttribute("type"))return;try{t=JSON.parse(e.innerHTML)}catch(e){throw new Error(e)}m(n,t)}}),n},b=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach(function(e){if(t.hasOwnProperty(e)){"data-mount-in"===t[e].name&&(n=t[e].nodeValue)}}),n},A=function(e){var t=e.selector,n=e.inline,o=e.clientSpecified,r=[],i=_();if(!0===n){r.push(i.parentNode)}return!0!==o||t||(t="[data-widget='"+b(i)+"']"),t&&[].forEach.call(document.querySelectorAll(t),function(e){r.push(e)}),r},g=function(e,t,n,o){t.forEach(function(t){var r=t;if(!r._habitat){r._habitat=!0;var i=y(t)||{};return o&&(r.innerHTML=""),h.a.render(h.a.h(e,i),r,n)}})},C=function(e){var t=e;return{render:function(e){void 0===e&&(e={});var n=e.selector;void 0===n&&(n=null);var o=e.inline;void 0===o&&(o=!1);var r=e.clean;void 0===r&&(r=!1);var i=e.clientSpecified;void 0===i&&(i=!1);var a=A({selector:n,inline:o,clientSpecified:i}),s=function(){if(a.length>0){var e=A({selector:n,inline:o,clientSpecified:i});return g(t,e,null,r)}};s(),document.addEventListener("DOMContentLoaded",s),document.addEventListener("load",s)}}},w=C,x={display:"flex",alignItems:"center",justifyContent:"center"},k=function(e){return Object(p.h)("div",{style:x},e.children.map(function(t){return Object(p.cloneElement)(t,e)}))},j=k,O=n("hSNs"),N=n.n(O),B=function(e){return Object(p.h)("button",{className:N.a.reactionButton,onClick:e.handleClick},Object(p.h)("span",{className:N.a.reactionEmoji},e.emoji),Object(p.h)("span",{className:N.a.reactionNumber},e.count))},S=B,T=function(e){function t(){for(var t,n,r,i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=n=o(this,e.call.apply(e,[this].concat(a))),n.currentUpdater=null,n.state={clickCount:0},n.handleClick=function(){return n.setState({clickCount:n.state.clickCount+1}),n.props.handleClick(n.props.children[0]),n.refreshCount(),!0},n.refreshCount=function(){n.currentUpdater&&(clearTimeout(n.currentUpdater),n.currentUpdater=null),n.currentUpdater=setTimeout(n.refreshCountRT,500)},n.refreshCountRT=function(){n.props.getCount(n.props.children[0]).then(function(e){n.setState({clickCount:e})})},r=t,o(n,r)}return r(t,e),t.prototype.componentDidMount=function(){this.refreshCountRT()},t.prototype.render=function(e){return Object(p.h)(S,{handleClick:this.handleClick,emoji:e.children,count:this.state.clickCount})},t}(p.Component),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},U="refreshToken",E=function(e){function t(){var n,o,r;a(this,t);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return n=o=s(this,e.call.apply(e,[this].concat(u))),o.state={user:null},o.setUser=function(e){o.setState({user:e}),localStorage.setItem(U,e.refreshToken),setTimeout(o.refreshAuth,1e3*parseInt(e.expiresIn)-1e3)},o.signupNewUser=function(){var e,t,n,r,a,s;return Promise.resolve().then(function(){return e="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key="+o.props.apiKey,t={returnSecureToken:!0},fetch(e,{method:"POST",body:JSON.stringify(t)})}).then(function(e){return n=e,n.json()}).then(function(e){r=e,a=r.kind,s=i(r,["kind"]),o.setUser(s)})},o.refreshAuth=function(){var e,t,n,r,i,a;return Promise.resolve().then(function(){return e=localStorage.getItem(U),t="https://securetoken.googleapis.com/v1/token?key="+o.props.apiKey,n={grant_type:"refresh_token",refresh_token:e},fetch(t,{method:"POST",body:JSON.stringify(n)})}).then(function(e){return r=e,r.json()}).then(function(e){i=e,a={expiresIn:i.expires_in,idToken:i.id_token,localId:i.user_id,refreshToken:i.refresh_token},o.setUser(a)})},o.signupOrRefreshAuth=function(){var e;e=localStorage.getItem(U),e&&"undefined"!==e?o.refreshAuth():o.signupNewUser()},o.getCount=function(e){function t(e){return new Promise(function(t){return setTimeout(t,e)})}var n,r,i,a,t;return Promise.resolve().then(function(){return n=void 0,o.state.user?Promise.resolve().then(function(){return r=o.props.databaseURL+"/reactions/"+e+'.json?orderBy="userId"&equalTo="'+o.state.user.localId+'"',fetch(r)}).then(function(e){return i=e,i.json()}).then(function(e){a=e,n=Object.keys(a).length}):Promise.resolve().then(function(){return(t=t)(1e3)}).then(function(){return o.getCount(e)}).then(function(e){n=e})}).then(function(){return n})},o.increment=function(e){var t,n,r;return Promise.resolve().then(function(){return t=o.props.databaseURL+"/reactions/"+e+".json?auth="+o.state.user.idToken,n={timestamp:Date.now(),userId:o.state.user.localId},fetch(t,{method:"POST",body:JSON.stringify(n)})}).then(function(e){return r=e,r.json()}).then(function(){})},o.handleClick=function(e){o.state.user?o.increment(e):setTimeout(function(){return o.handleClick(e)},1e3)},r=n,s(o,r)}return c(t,e),t.prototype.componentDidMount=function(){this.signupOrRefreshAuth()},t.prototype.render=function(e){var t={fontSize:e.fontSize?e.fontSize:"30px"},n={position:"fixed",bottom:0,left:0,width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},o="inline"!==e.display?R({},t,n):t,r=e.emojis?e.emojis:K;return Object(p.h)("div",{style:o},Object(p.h)(j,{handleClick:this.handleClick,getCount:this.getCount},r.map(function(e){return Object(p.h)(T,null,e)})))},t}(p.Component),P=function(){},H={position:"fixed",bottom:0,left:0,width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:'"HelveticaNeue-CondensedBold", "HelveticaNeueBoldCondensed", "HelveticaNeue-Bold-Condensed", "Helvetica Neue Bold Condensed", "HelveticaNeueBold", "HelveticaNeue-Bold", "Helvetica Neue Bold", "HelveticaNeue", "Helvetica Neue", "TeXGyreHerosCnBold", "Helvetica", "Tahoma", "Geneva", "Arial Narrow", "Arial", sans-serif'},W=function(e){return Object(p.h)("div",{style:H},Object(p.h)("div",null,e.url||"SldRX"),Object(p.h)(j,{handleClick:P},Object.keys(e.reactions).map(function(t){return Object(p.h)(S,{key:t,emoji:t,count:e.reactions[t]})})))},M=W,L=n("YwDF"),I=n.n(L),z=function(e){return Object(p.h)("div",{className:I.a.bubbles},e.incomingReactions.map(function(e){return Object(p.h)("span",{key:e[1],className:(e[2]%2==0?I.a.x1:I.a.x2)+" "+I.a.bubble},e[0])}))},F=z,G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},J=function(e){function t(){var n,o,r;u(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=o=l(this,e.call.apply(e,[this].concat(a))),o.state={emojis:null,source:null,reactions:{},incomingReactions:[]},o.syncState=function(e){if(e){var t={};Object.keys(e).filter(function(e){return o.state.emojis.includes(e)}).map(function(n){return t[n]=(o.state.reactions[n]||0)+Object.keys(e[n]).length}),o.setState({reactions:G({},o.state.reactions,t)})}},o.updateState=function(e){var t,n=e.path.split("/");n.shift(),n.push(e.data.timestamp),o.state.emojis.includes(n[0])&&(o.setState({reactions:G({},o.state.reactions,(t={},t[n[0]]=(o.state.reactions[n[0]]||0)+1,t)),incomingReactions:[].concat(o.state.incomingReactions,[n])}),setTimeout(o.clearIncoming,5100))},o.clearIncoming=function(){var e=[].concat(o.state.incomingReactions);e.shift(),o.setState({incomingReactions:e})},o.parsePutEvent=function(e){var t=JSON.parse(e.data);"/"===t.path?o.syncState(t.data):o.updateState(t)},r=n,l(o,r)}return f(t,e),t.prototype.componentDidMount=function(){var e=this.props.emojis?this.props.emojis:K;this.setState({emojis:e,reactions:e.reduce(function(e,t){return e[t]=0,e},{})});var t=new EventSource(this.props.databaseURL+"/reactions.json");t.addEventListener("put",this.parsePutEvent,!1),this.setState({source:t})},t.prototype.componentWillUnmount=function(){this.state.source.close()},t.prototype.render=function(e){return Object(p.h)("div",{style:{fontSize:e.fontSize?e.fontSize:"30px"}},Object(p.h)(M,{reactions:this.state.reactions,url:e.url}),Object(p.h)(F,{incomingReactions:this.state.incomingReactions}))},t}(p.Component),K=["👍","🤔","😡"],D=function(e){var t=e.dataWidgetSldrx,n=d(e,["dataWidgetSldrx"]);return"master"==t?Object(p.h)(J,n):Object(p.h)(E,n)},V=D;n("m+Gh");w(V).render({selector:"[data-widget-sldrx]",clean:!0})},KM04:function(e){!function(){"use strict";function t(){}function n(e,n){var o,r,i,a,s=U;for(a=arguments.length;a-- >2;)R.push(arguments[a]);for(n&&null!=n.children&&(R.length||R.push(n.children),delete n.children);R.length;)if((r=R.pop())&&void 0!==r.pop)for(a=r.length;a--;)R.push(r[a]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(i=!1)),i&&o?s[s.length-1]+=r:s===U?s=[r]:s.push(r),o=i;var c=new t;return c.nodeName=e,c.children=s,c.attributes=null==n?void 0:n,c.key=null==n?void 0:n.key,void 0!==T.vnode&&T.vnode(c),c}function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e,t){return n(e.nodeName,o(o({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function i(e){!e.__d&&(e.__d=!0)&&1==H.push(e)&&(T.debounceRendering||E)(a)}function a(){var e,t=H;for(H=[];e=t.pop();)e.__d&&j(e)}function s(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&c(e,t.nodeName):n||e._componentConstructor===t.nodeName}function c(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function u(e){var t=o({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function l(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===P.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,h,a):e.removeEventListener(t,h,a),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)p(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var s=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function p(e,t,n){try{e[t]=n}catch(e){}}function h(e){return this.__l[e.type](T.event&&T.event(e)||e)}function m(){for(var e;e=W.pop();)T.afterMount&&T.afterMount(e),e.componentDidMount&&e.componentDidMount()}function v(e,t,n,o,r,i){M++||(L=null!=r&&void 0!==r.ownerSVGElement,I=null!=e&&!("__preactattr_"in e));var a=_(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--M||(I=!1,i||m()),a}function _(e,t,n,o,r){var i=e,a=L;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0))),i.__preactattr_=!0,i;var s=t.nodeName;if("function"==typeof s)return O(e,t,n,o);if(L="svg"===s||"foreignObject"!==s&&L,s+="",(!e||!c(e,s))&&(i=l(s,L),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),b(e,!0)}var u=i.firstChild,f=i.__preactattr_,d=t.children;if(null==f){f=i.__preactattr_={};for(var p=i.attributes,h=p.length;h--;)f[p[h].name]=p[h].value}return!I&&d&&1===d.length&&"string"==typeof d[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=d[0]&&(u.nodeValue=d[0]):(d&&d.length||null!=u)&&y(i,d,n,o,I||null!=f.dangerouslySetInnerHTML),g(i,t.attributes,f),L=a,i}function y(e,t,n,o,r){var i,a,c,u,l,d=e.childNodes,p=[],h={},m=0,v=0,y=d.length,A=0,g=t?t.length:0;if(0!==y)for(var C=0;C<y;C++){var w=d[C],x=w.__preactattr_,k=g&&x?w._component?w._component.__k:x.key:null;null!=k?(m++,h[k]=w):(x||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(p[A++]=w)}if(0!==g)for(var C=0;C<g;C++){u=t[C],l=null;var k=u.key;if(null!=k)m&&void 0!==h[k]&&(l=h[k],h[k]=void 0,m--);else if(!l&&v<A)for(i=v;i<A;i++)if(void 0!==p[i]&&s(a=p[i],u,r)){l=a,p[i]=void 0,i===A-1&&A--,i===v&&v++;break}l=_(l,u,n,o),c=d[C],l&&l!==e&&l!==c&&(null==c?e.appendChild(l):l===c.nextSibling?f(c):e.insertBefore(l,c))}if(m)for(var C in h)void 0!==h[C]&&b(h[C],!1);for(;v<=A;)void 0!==(l=p[A--])&&b(l,!1)}function b(e,t){var n=e._component;n?N(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),A(e))}function A(e){for(e=e.lastChild;e;){var t=e.previousSibling;b(e,!0),e=t}}function g(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||d(e,o,n[o],n[o]=void 0,L);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||d(e,o,n[o],n[o]=t[o],L)}function C(e){var t=e.constructor.name;(z[t]||(z[t]=[])).push(e)}function w(e,t,n){var o,r=z[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),B.call(o,t,n)):(o=new B(t,n),o.constructor=e,o.render=x),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.__b=r[i].__b,r.splice(i,1);break}return o}function x(e,t,n){return this.constructor(e,n)}function k(e,t,n,o,r){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===T.syncComponentUpdates&&e.base?i(e):j(e,1,r)),e.__r&&e.__r(e))}function j(e,t,n,r){if(!e.__x){var i,a,s,c=e.props,l=e.state,f=e.context,d=e.__p||c,p=e.__s||l,h=e.__c||f,_=e.base,y=e.__b,A=_||y,g=e._component,C=!1;if(_&&(e.props=d,e.state=p,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,l,f)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(c,l,f),e.props=c,e.state=l,e.context=f),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!C){i=e.render(c,l,f),e.getChildContext&&(f=o(o({},f),e.getChildContext()));var x,O,B=i&&i.nodeName;if("function"==typeof B){var S=u(i);a=g,a&&a.constructor===B&&S.key==a.__k?k(a,S,1,f,!1):(x=a,e._component=a=w(B,S,f),a.__b=a.__b||y,a.__u=e,k(a,S,0,f,!1),j(a,1,n,!0)),O=a.base}else s=A,x=g,x&&(s=e._component=null),(A||1===t)&&(s&&(s._component=null),O=v(s,i,f,n||!_,A&&A.parentNode,!0));if(A&&O!==A&&a!==g){var R=A.parentNode;R&&O!==R&&(R.replaceChild(O,A),x||(A._component=null,b(A,!1)))}if(x&&N(x),e.base=O,O&&!r){for(var U=e,E=e;E=E.__u;)(U=E).base=O;O._component=U,O._componentConstructor=U.constructor}}if(!_||n?W.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(d,p,h),T.afterUpdate&&T.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);M||r||m()}}function O(e,t,n,o){for(var r=e&&e._component,i=r,a=e,s=r&&e._componentConstructor===t.nodeName,c=s,l=u(t);r&&!c&&(r=r.__u);)c=r.constructor===t.nodeName;return r&&c&&(!o||r._component)?(k(r,l,3,n,o),e=r.base):(i&&!s&&(N(i),e=a=null),r=w(t.nodeName,l,n),e&&!r.__b&&(r.__b=e,a=null),k(r,l,1,n,o),e=r.base,a&&e!==a&&(a._component=null,b(a,!1))),e}function N(e){T.beforeUnmount&&T.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?N(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,f(t),C(e),A(t)),e.__r&&e.__r(null)}function B(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function S(e,t,n){return v(n,e,{},!1,t,!1)}var T={},R=[],U=[],E="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,P=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,H=[],W=[],M=0,L=!1,I=!1,z={};o(B.prototype,{setState:function(e,t){var n=this.state;this.__s||(this.__s=o({},n)),o(n,"function"==typeof e?e(n,this.props):e),t&&(this.__h=this.__h||[]).push(t),i(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),j(this,2)},render:function(){}});var F={h:n,createElement:n,cloneElement:r,Component:B,render:S,rerender:a,options:T};e.exports=F}()},QAmr:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,o){function r(){var e,t=[],n=[],o={};return i.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(r,i,a){t.push(i=i.toLowerCase()),n.push([i,a]),e=o[i],o[i]=e?e+","+a:a}),{ok:1==(i.status/200|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:r,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}}var i=new XMLHttpRequest;i.open(t.method||"get",e);for(var a in t.headers)i.setRequestHeader(a,t.headers[a]);i.withCredentials="include"==t.credentials,i.onload=function(){n(r())},i.onerror=o,i.send(t.body)})}},TAnW:function(e,t,n){t=e.exports=n("lcwS")(!0),t.push([e.i,".bubbles__2hd3F{width:2em;font-size:2em;position:fixed;right:0;top:0;height:100vh;overflow:hidden;z-index:99;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.bubble__2rR8U{position:absolute}.x1__2xkW1{-webkit-animation:moveclouds__3eKi1 5s ease-out infinite,sideWays__16dap 2s ease-in-out infinite alternate,fadeout__2FCOc 5s ease-in infinite;-moz-animation:moveclouds__3eKi1 5s ease-out infinite,sideWays__16dap 2s ease-in-out infinite alternate,fadeout__2FCOc 5s ease-in infinite;-o-animation:moveclouds__3eKi1 5s ease-out infinite,sideWays__16dap 2s ease-in-out infinite alternate,fadeout__2FCOc 5s ease-in infinite}.x2__2zPEC{-webkit-animation:moveclouds__3eKi1 5s ease-out infinite,sideWaysAlt__2V3Mb 2s ease-in-out infinite alternate,fadeout__2FCOc 5s ease-in infinite;-moz-animation:moveclouds__3eKi1 5s ease-out infinite,sideWaysAlt__2V3Mb 2s ease-in-out infinite alternate,fadeout__2FCOc 5s ease-in infinite;-o-animation:moveclouds__3eKi1 5s ease-out infinite,sideWaysAlt__2V3Mb 2s ease-in-out infinite alternate,fadeout__2FCOc 5s ease-in infinite}@-webkit-keyframes moveclouds__3eKi1{0%{top:100vh}to{top:25vh}}@-webkit-keyframes sideWays__16dap{0%{margin-left:0}to{margin-left:1em}}@-webkit-keyframes sideWaysAlt__2V3Mb{0%{margin-left:1em}to{margin-left:0}}@-webkit-keyframes fadeout__2FCOc{0%{opacity:1}to{opacity:0}}","",{version:3,sources:["/Users/elyalvarado/Workspace/Personales/slide-reactions/src/components/ReactionBubbles.scss"],names:[],mappings:"AAAA,gBACE,UACA,cACA,eACA,QACA,MACA,aACA,gBACA,WACA,oBAAA,oBAAA,aACA,sBAAA,mBAAA,qBACA,uBAAA,oBAAA,0BAA2B,CAC5B,eAGC,iBAAkB,CACnB,WAGC,8IACA,2IACA,wIAAsH,CACvH,WAEC,iJACA,8IACA,2IAAyH,CAC1H,qCAE+B,GAAK,SAAU,CAAI,GAAO,QAAS,CAAA,CACnE,mCAA8B,GAAK,aAAa,CAAI,GAAO,eAAe,CAAA,CAC1E,sCAAiC,GAAK,eAAe,CAAI,GAAO,aAAa,CAAA,CAC7E,kCAA6B,GAAK,SAAU,CAAI,GAAO,SAAU,CAAA,CACjE",file:"ReactionBubbles.scss",sourcesContent:[".bubbles { \n  width: 2em;\n  font-size: 2em;\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  overflow: hidden;\n  z-index: 99;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n}\n\n.bubble {\n  position: absolute;\n}\n\n.x1 {\n  -webkit-animation: moveclouds 5s ease-out infinite, sideWays 2s ease-in-out infinite alternate, fadeout 5s ease-in infinite;\n  -moz-animation: moveclouds 5s ease-out infinite, sideWays 2s ease-in-out infinite alternate, fadeout 5s ease-in infinite;\n  -o-animation: moveclouds 5s ease-out infinite, sideWays 2s ease-in-out infinite alternate, fadeout 5s ease-in infinite;\n}\n.x2 {\n  -webkit-animation: moveclouds 5s ease-out infinite, sideWaysAlt 2s ease-in-out infinite alternate, fadeout 5s ease-in infinite;\n  -moz-animation: moveclouds 5s ease-out infinite, sideWaysAlt 2s ease-in-out infinite alternate, fadeout 5s ease-in infinite;\n  -o-animation: moveclouds 5s ease-out infinite, sideWaysAlt 2s ease-in-out infinite alternate, fadeout 5s ease-in infinite;\n}\n\n@-webkit-keyframes moveclouds { 0% { top: 100vh; } 100% { top: 25vh; } }\n@-webkit-keyframes sideWays { 0% { margin-left:0; } 100% { margin-left:1em; } }\n@-webkit-keyframes sideWaysAlt { 0% { margin-left:1em; } 100% { margin-left:0; } }\n@-webkit-keyframes fadeout { 0% { opacity: 1; } 100% { opacity: 0; } }\n@-moz-keyframes moveclouds {     0% { top: 100vh; } 100% { top: -200px; } }\n@-moz-keyframes sideWays { 0% { margin-left:0; } 100% { margin-left:1em; } }\n@-moz-keyframes sideWaysAlt { 0% { margin-left:1em; } 100% { margin-left:0; } }\n@-moz-keyframes fadeout { 0% { opacity: 1; } 100% { opacity: 0; } }\n@-o-keyframes moveclouds { 0% { top: 100vh; } 100% { top: -200px; } }\n@-o-keyframes sideWays { 0% { margin-left:0; } 100% { margin-left:1em; } }\n@-o-keyframes sideWaysAlt { 0% { margin-left:1em; } 100% { margin-left:0; } }\n@-o-keyframes fadeout { 0% { opacity: 1; } 100% { opacity: 0; } }\n"],sourceRoot:""}]),t.locals={bubbles:"bubbles__2hd3F",bubble:"bubble__2rR8U",x1:"x1__2xkW1",moveclouds:"moveclouds__3eKi1",sideWays:"sideWays__16dap",fadeout:"fadeout__2FCOc",x2:"x2__2zPEC",sideWaysAlt:"sideWaysAlt__2V3Mb"}},VS7n:function(e,t,n){e.exports=window.fetch||(window.fetch=n("QAmr").default||n("QAmr"))},YwDF:function(e,t,n){var o=n("TAnW");"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n("BMrJ")(o,r);o.locals&&(e.exports=o.locals)},h6ac:function(e){var t;t=this;try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},hSNs:function(e,t,n){var o=n("jdNb");"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n("BMrJ")(o,r);o.locals&&(e.exports=o.locals)},jdNb:function(e,t,n){t=e.exports=n("lcwS")(!0),t.push([e.i,'.reactionButton__3S5Jd{min-width:3.3em;color:"#aaa";cursor:pointer;background-color:transparent;border:1px solid #e1e4e7;font-size:1em;padding:calc(.3vw + 1px) calc(1vw + 1px);margin:5px .3vw;border-radius:5px;font-family:HelveticaNeue-CondensedBold,HelveticaNeueBoldCondensed,HelveticaNeue-Bold-Condensed,Helvetica Neue Bold Condensed,HelveticaNeueBold,HelveticaNeue-Bold,Helvetica Neue Bold,HelveticaNeue,Helvetica Neue,TeXGyreHerosCnBold,Helvetica,Tahoma,Geneva,Arial Narrow,Arial,sans-serif;font-stretch:condensed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}@media (hover:hover){.reactionButton__3S5Jd:hover{color:"#000";background-color:gray}}.reactionNumber__38tgE{font-size:.9em}',"",{version:3,sources:["/Users/elyalvarado/Workspace/Personales/slide-reactions/src/components/ReactionButton.scss"],names:[],mappings:"AAAA,uBACE,gBACA,aACA,eACA,6BACA,yBACA,cACA,yCACA,gBACA,kBACA,6RACA,uBACA,oBAAA,oBAAA,aACA,yBAAA,sBAAA,mBACA,yBAAA,4BAA6B,CAC9B,qBAGC,6BACE,aACA,qBAAsB,CACvB,CAMH,uBACE,cACF,CAAC",file:"ReactionButton.scss",sourcesContent:['.reactionButton {\n  min-width: 3.3em;\n  color: \'#aaa\';\n  cursor: pointer;\n  background-color: transparent;\n  border: 1px solid #e1e4e7;\n  font-size: 1em;\n  padding: calc(0.3vw + 1px) calc(1vw + 1px);\n  margin: 5px 0.3vw;\n  border-radius: 5px;\n  font-family: "HelveticaNeue-CondensedBold", "HelveticaNeueBoldCondensed", "HelveticaNeue-Bold-Condensed", "Helvetica Neue Bold Condensed", "HelveticaNeueBold", "HelveticaNeue-Bold", "Helvetica Neue Bold", "HelveticaNeue", "Helvetica Neue", "TeXGyreHerosCnBold", "Helvetica", "Tahoma", "Geneva", "Arial Narrow", "Arial", sans-serif;\n  font-stretch: condensed;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n@media (hover:hover) {\n  .reactionButton:hover {\n    color: \'black\';\n    background-color: gray;\n  }\n}\n\n.reactionEmoji {\n}\n\n.reactionNumber {\n  font-size: .9em\n}\n'],sourceRoot:""}]),t.locals={reactionButton:"reactionButton__3S5Jd",reactionNumber:"reactionNumber__38tgE"}},lcwS:function(e){function t(e,t){var o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var i=n(r);return[o].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[o].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var o=t(n,e);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},"m+Gh":function(e,t,n){"use strict";(function(e){e.Promise||(e.Promise=n("BtxX")),e.fetch||(e.fetch=n("VS7n"))}).call(t,n("h6ac"))},pwNi:function(e,t,n){"use strict";var o=n("KM04"),r=function(e){return e&&e.default?e.default:e};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var e=r(n("JkW7"));i=(0,o.render)((0,o.h)(e),document.body,i)};a()}}})});