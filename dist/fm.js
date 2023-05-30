var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function finallyConstructor(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})}function allSettled(n){return new this(function(r,e){if(!n||void 0===n.length)return e(new TypeError(typeof n+" "+n+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(n);if(0===i.length)return r([]);var a=i.length;for(var t=0;t<i.length;t++)!function t(n,e){if(e&&("object"==typeof e||"function"==typeof e)){var o=e.then;if("function"==typeof o)return void o.call(e,function(e){t(n,e)},function(e){i[n]={status:"rejected",reason:e},0==--a&&r(i)})}i[n]={status:"fulfilled",value:e},0==--a&&r(i)}(t,i[t])})}window.console||(window.console={}),console.log||(console.log=function(){}),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var r in o)o.hasOwnProperty(r)&&(t[r]=o[r])}return t}),Array.from||(Array.from=function(e){return Array.apply(this,e)}),Array.prototype.forEach||(Array.prototype.forEach=function(e){var t=void 0,n=void 0;if(null==this)throw new TypeError("this is null or not defined");var o=Object(this),r=o.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(1<arguments.length&&(t=arguments[1]),n=0;n<r;){var i;n in o&&(i=o[n],e.call(t,i,n,o)),n++}}),Array.prototype.map||(Array.prototype.map=function(e){var t=void 0,n=void 0;if(null==this)throw new TypeError("this is null or not defined");var o=Object(this),r=o.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");1<arguments.length&&(t=arguments[1]);for(var i=new Array(r),n=0;n<r;){var a;n in o&&(a=o[n],a=e.call(t,a,n,o),i[n]=a),n++}return i}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(null==this)throw new TypeError("Array.prototype.indexOf() - can't convert `"+this+"` to object");var n=isFinite(t)?Math.floor(t):0,o=this instanceof Object?this:new Object(this),r=isFinite(o.length)?Math.floor(o.length):0;if(!(r<=n))if(n<0&&(n=Math.max(r+n,0)),void 0===e){do{if(n in o&&void 0===o[n])return n}while(++n<r)}else do{if(o[n]===e)return n}while(++n<r);return-1}),Object.keys||(Object.keys=function(){var r=Object.prototype.hasOwnProperty,i=!{toString:null}.propertyIsEnumerable("toString"),a=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=a.length;return function(e){if("function"!=typeof e&&("object"!==(void 0===e?"undefined":_typeof(e))||null===e))throw new TypeError("Object.keys called on non-object");var t=[],n=void 0,o=void 0;for(n in e)r.call(e,n)&&t.push(n);if(i)for(o=0;o<c;o++)r.call(e,a[o])&&t.push(a[o]);return t}}());var setTimeoutFunc=setTimeout;function isArray(e){return Boolean(e&&void 0!==e.length)}function noop(){}function bind(e,t){return function(){e.apply(t,arguments)}}function Promise$1(e){if(!(this instanceof Promise$1))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],doResolve(e,this)}function handle(n,o){for(;3===n._state;)n=n._value;0===n._state?n._deferreds.push(o):(n._handled=!0,Promise$1._immediateFn(function(){var e,t=1===n._state?o.onFulfilled:o.onRejected;if(null===t)(1===n._state?resolve:reject)(o.promise,n._value);else{try{e=t(n._value)}catch(e){return void reject(o.promise,e)}resolve(o.promise,e)}}))}function resolve(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof Promise$1)return t._state=3,t._value=e,void finale(t);if("function"==typeof n)return void doResolve(bind(n,e),t)}t._state=1,t._value=e,finale(t)}catch(e){reject(t,e)}}function reject(e,t){e._state=2,e._value=t,finale(e)}function finale(e){2===e._state&&0===e._deferreds.length&&Promise$1._immediateFn(function(){e._handled||Promise$1._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)handle(e,e._deferreds[t]);e._deferreds=null}function Handler(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function doResolve(e,t){var n=!1;try{e(function(e){n||(n=!0,resolve(t,e))},function(e){n||(n=!0,reject(t,e))})}catch(e){n||(n=!0,reject(t,e))}}Promise$1.prototype.catch=function(e){return this.then(null,e)},Promise$1.prototype.then=function(e,t){var n=new this.constructor(noop);return handle(this,new Handler(e,t,n)),n},Promise$1.prototype.finally=finallyConstructor,Promise$1.all=function(t){return new Promise$1(function(r,i){if(!isArray(t))return i(new TypeError("Promise.all accepts an array"));var a=Array.prototype.slice.call(t);if(0===a.length)return r([]);var c=a.length;for(var e=0;e<a.length;e++)!function t(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var o=e.then;if("function"==typeof o)return void o.call(e,function(e){t(n,e)},i)}a[n]=e,0==--c&&r(a)}catch(e){i(e)}}(e,a[e])})},Promise$1.allSettled=allSettled,Promise$1.resolve=function(t){return t&&"object"==typeof t&&t.constructor===Promise$1?t:new Promise$1(function(e){e(t)})},Promise$1.reject=function(n){return new Promise$1(function(e,t){t(n)})},Promise$1.race=function(r){return new Promise$1(function(e,t){if(!isArray(r))return t(new TypeError("Promise.race accepts an array"));for(var n=0,o=r.length;n<o;n++)Promise$1.resolve(r[n]).then(e,t)})},Promise$1._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){setTimeoutFunc(e,0)},Promise$1._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var globalNS=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}();function md5(){function f(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function c(e,t,n,o,r,i){return f((t=f(f(t,e),f(o,i)))<<r|t>>>32-r,n)}function d(e,t,n,o,r,i,a){return c(t&n|~t&o,e,t,r,i,a)}function m(e,t,n,o,r,i,a){return c(t&o|n&~o,e,t,r,i,a)}function p(e,t,n,o,r,i,a){return c(t^n^o,e,t,r,i,a)}function h(e,t,n,o,r,i,a){return c(n^(t|~o),e,t,r,i,a)}function a(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n,o,r,i,a=1732584193,c=-271733879,s=-1732584194,l=271733878,u=0;u<e.length;u+=16)c=h(c=h(c=h(c=h(c=p(c=p(c=p(c=p(c=m(c=m(c=m(c=m(c=d(c=d(c=d(c=d(o=c,s=d(r=s,l=d(i=l,a=d(n=a,c,s,l,e[u],7,-680876936),c,s,e[u+1],12,-389564586),a,c,e[u+2],17,606105819),l,a,e[u+3],22,-1044525330),s=d(s,l=d(l,a=d(a,c,s,l,e[u+4],7,-176418897),c,s,e[u+5],12,1200080426),a,c,e[u+6],17,-1473231341),l,a,e[u+7],22,-45705983),s=d(s,l=d(l,a=d(a,c,s,l,e[u+8],7,1770035416),c,s,e[u+9],12,-1958414417),a,c,e[u+10],17,-42063),l,a,e[u+11],22,-1990404162),s=d(s,l=d(l,a=d(a,c,s,l,e[u+12],7,1804603682),c,s,e[u+13],12,-40341101),a,c,e[u+14],17,-1502002290),l,a,e[u+15],22,1236535329),s=m(s,l=m(l,a=m(a,c,s,l,e[u+1],5,-165796510),c,s,e[u+6],9,-1069501632),a,c,e[u+11],14,643717713),l,a,e[u],20,-373897302),s=m(s,l=m(l,a=m(a,c,s,l,e[u+5],5,-701558691),c,s,e[u+10],9,38016083),a,c,e[u+15],14,-660478335),l,a,e[u+4],20,-405537848),s=m(s,l=m(l,a=m(a,c,s,l,e[u+9],5,568446438),c,s,e[u+14],9,-1019803690),a,c,e[u+3],14,-187363961),l,a,e[u+8],20,1163531501),s=m(s,l=m(l,a=m(a,c,s,l,e[u+13],5,-1444681467),c,s,e[u+2],9,-51403784),a,c,e[u+7],14,1735328473),l,a,e[u+12],20,-1926607734),s=p(s,l=p(l,a=p(a,c,s,l,e[u+5],4,-378558),c,s,e[u+8],11,-2022574463),a,c,e[u+11],16,1839030562),l,a,e[u+14],23,-35309556),s=p(s,l=p(l,a=p(a,c,s,l,e[u+1],4,-1530992060),c,s,e[u+4],11,1272893353),a,c,e[u+7],16,-155497632),l,a,e[u+10],23,-1094730640),s=p(s,l=p(l,a=p(a,c,s,l,e[u+13],4,681279174),c,s,e[u],11,-358537222),a,c,e[u+3],16,-722521979),l,a,e[u+6],23,76029189),s=p(s,l=p(l,a=p(a,c,s,l,e[u+9],4,-640364487),c,s,e[u+12],11,-421815835),a,c,e[u+15],16,530742520),l,a,e[u+2],23,-995338651),s=h(s,l=h(l,a=h(a,c,s,l,e[u],6,-198630844),c,s,e[u+7],10,1126891415),a,c,e[u+14],15,-1416354905),l,a,e[u+5],21,-57434055),s=h(s,l=h(l,a=h(a,c,s,l,e[u+12],6,1700485571),c,s,e[u+3],10,-1894986606),a,c,e[u+10],15,-1051523),l,a,e[u+1],21,-2054922799),s=h(s,l=h(l,a=h(a,c,s,l,e[u+8],6,1873313359),c,s,e[u+15],10,-30611744),a,c,e[u+6],15,-1560198380),l,a,e[u+13],21,1309151649),s=h(s,l=h(l,a=h(a,c,s,l,e[u+4],6,-145523070),c,s,e[u+11],10,-1120210379),a,c,e[u+2],15,718787259),l,a,e[u+9],21,-343485551),a=f(a,n),c=f(c,o),s=f(s,r),l=f(l,i);return[a,c,s,l]}function s(e){for(var t="",n=32*e.length,o=0;o<n;o+=8)t+=String.fromCharCode(e[o>>5]>>>o%32&255);return t}function l(e){var t=[];for(t[(e.length>>2)-1]=void 0,o=0;o<t.length;o+=1)t[o]=0;for(var n=8*e.length,o=0;o<n;o+=8)t[o>>5]|=(255&e.charCodeAt(o/8))<<o%32;return t}function o(e){for(var t,n="",o=0;o<e.length;o+=1)t=e.charCodeAt(o),n+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return n}function u(e){return unescape(encodeURIComponent(e))}function r(e){return s(a(l(e=u(e)),8*e.length))}function i(e,t){var n,e=u(e),t=u(t),o=l(e),r=[],i=[];for(r[15]=i[15]=void 0,16<o.length&&(o=a(o,8*e.length)),n=0;n<16;n+=1)r[n]=909522486^o[n],i[n]=1549556828^o[n];return e=a(r.concat(l(t)),512+8*t.length),s(a(i.concat(e),640))}return function(e,t,n){return t?n?i(t,e):o(i(t,e)):n?r(e):o(r(e))}}"function"!=typeof globalNS.Promise?globalNS.Promise=Promise$1:(globalNS.Promise.prototype.finally||(globalNS.Promise.prototype.finally=finallyConstructor),globalNS.Promise.allSettled||(globalNS.Promise.allSettled=allSettled));var md5$1=md5(),win=window,doc=document,nav=window.navigator,domain=void 0,ipRegex=/([0-9]{1,3}(\.[0-9]{1,3}){3})/,points=(win.location.hostname||"").match(/\./g),pointsCount=points?points.length:0,domain=ipRegex.exec(win.location.hostname)?win.location.hostname:2<pointsCount?"."+win.location.hostname.replace(/^(\w+)\./,""):"."+win.location.hostname.replace(/^(?:.+\.)?(\w+\.\w+)$/,"$1"),cookie={set:function(e,t){try{win.localStorage&&(localStorage[e]=t)}catch(e){}try{win.sessionStorage&&win.sessionStorage.setItem(e,t)}catch(e){}nav.cookieEnabled&&(e=e+"="+encodeURIComponent(t),e+="; domain="+domain+"; expires="+new Date((new Date).getTime()+31536e6).toGMTString()+"; path=/",doc.cookie=e)},get:function(e){var t,n="";try{if(win.localStorage&&32===(n=localStorage[e]||"").length)return n}catch(e){}try{if(win.sessionStorage&&32===(n=win.sessionStorage.getItem(e)||"").length)return n}catch(e){}return nav.cookieEnabled&&-1!==(t=doc.cookie.indexOf(e+"="))&&(t+=e.length+1,-1===(e=doc.cookie.indexOf(";",t))&&(e=doc.cookie.length),n=decodeURIComponent(doc.cookie.substring(t,e))||""),n}};function getScreen(){var e=window.screen;return{height:e.height,width:e.width,colorDepth:e.colorDepth,pixelDepth:e.pixelDepth}}function getNavigator(){var e=window.navigator,t=e.appCodeName,n=e.appName,o=e.appVersion,r=e.deviceMemory,i=e.doNotTrack,a=e.hardwareConcurrency,c=e.language,s=e.mimeTypes,l=e.platform,u=e.plugins,f=e.product,d=e.productSub,m=e.userAgent,p=e.vendor,h=e.vendorSub,e=e.webdriver;return{appCodeName:t,appName:n,appVersion:o,deviceMemory:r,doNotTrack:i,hardwareConcurrency:a,language:c,mimeTypes:[].concat(toConsumableArray(s)).map(function(e){return{description:e.description,suffixes:e.suffixes,type:e.type}}),platform:l,plugins:[].concat(toConsumableArray(u)).map(function(e){return{description:e.description,filename:e.filename,length:e.length,name:e.name}}),product:f,productSub:d,userAgent:m,vendor:p,vendorSub:h,webdriver:e}}function getCanvas(){try{var e=document.createElement("canvas"),t=e.getContext("2d"),n=(e.width=120,e.height=20,t.font="14px 'Arial'",t.fillStyle="#fff",t.fillRect(0,0,120,20),t.fillStyle="rgba(102, 204, 0, 0.7)",t.fillText("TrustDecisionJS",2,15),e.toDataURL());return e.toDataURL()?md5$1(n):""}catch(e){return""}}function getMaxTouchPoints(){var e=0;return void 0!==navigator.maxTouchPoints?e=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints),e}function getDebugger(){var e=200<window.outerWidth-window.innerWidth,t=200<window.outerHeight-window.innerHeight;return window.screen&&800<=window.screen.width&&(e||t)?1:0}function getDisabledCookie(){var t=0;if(void 0!==navigator.cookieEnabled)if(navigator.cookieEnabled)t=0;else try{document.cookie="TDJScookieDemo=test; SameSite=Strict;",-1!==document.cookie.indexOf("TDJScookieDemo=")&&(t=1),document.cookie="TDJScookieDemo=test; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT"}catch(e){t=1}return t}function getTimezone(){var e=new Date,t=(e.setDate(1),e.setMonth(5),-e.getTimezoneOffset()),e=(e.setMonth(11),-e.getTimezoneOffset());return Math.min(t,e)}function getTimezoneStr(){return window.Intl&&window.Intl.DateTimeFormat&&(new window.Intl.DateTimeFormat).resolvedOptions&&((new window.Intl.DateTimeFormat).resolvedOptions()||{}).timeZone||""}function getTouchSupport(){var e=!1;try{document.createEvent("TouchEvent"),e=!0}catch(e){}return e}function getGpu(){try{var e=document.createElement("canvas").getContext("webgl"),t=e.getExtension("WEBGL_debug_renderer_info"),n=e.getParameter(t.UNMASKED_VENDOR_WEBGL)+"|"+e.getParameter(t.UNMASKED_RENDERER_WEBGL);try{e.getExtension("WEBGL_lose_context").loseContext()}catch(e){}return n||""}catch(e){return""}}function getSupport(){var e=!1,t=!1,n=!1;try{e=!!window.localStorage}catch(e){}try{t=!!window.sessionStorage}catch(e){}try{n=!!window.indexedDB}catch(e){}return{localStorage:e,sessionStorage:t,indexedDB:n}}function getAudioRipple(){function n(t,n){var e=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,4e3,44100),o=e.createOscillator(),r=e.createAnalyser(),i=e.createDynamicsCompressor();function a(n,e){for(var t=1<arguments.length&&void 0!==e?e:20,o=[],r=[].concat(toConsumableArray(Array(t+1).keys())).slice(1),i=t;i<n.length-t&&(function(t){return r.every(function(e){return n[t]>n[t-e]&&n[t]>n[t+e]})}(i)&&o.push(n[i]),13!==o.length);i++);return o.reduce(function(e,t){return Math.abs(e)+Math.abs(t)})}i.threshold&&(i.threshold.value=-50),i.knee&&(i.knee.value=40),i.ratio&&(i.ratio.value=12),i.reduction&&(i.reduction.value=-20),i.attack&&(i.attack.value=0),i.release&&(i.release.value=.25),o.type="sine",o.connect(i),i.connect(r),r.connect(e.destination),e.oncomplete=function(){var e=new Float32Array(r.frequencyBinCount),e=(r.getFloatFrequencyData(e),o.disconnect(),i.disconnect(),r.disconnect(),a(e));clearTimeout(n),t(e)},o.start(0),e.startRendering()}return new Promise(function(e){var t;window.OfflineAudioContext||window.webkitOfflineAudioContext?(t=setTimeout(function(){return e("")},window._fmOpt.timeout||2e3),n(e,t)):e("")})}function getFont(){var e=["Helvetica","Arial","Tahoma","PingFang SC","Hiragino Sans GB","Heiti SC","Segoe UI","Microsoft YaHei","WenQuanYi Micro Hei","Roboto","Noto Sans","Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Times New Roman","Verdana","sans-serif-smallcaps","cursive","sans-serif-black","sans-serif-condensed-light","sans-serif-thin","serif-monospace","sans-serif-medium","sans-serif-light","sans-serif-condensed-medium","casual"];for(var t=new function(){var e,r=["monospace","sans-serif","serif"],i=document.getElementsByTagName("body")[0],a=document.createElement("span"),c=(a.style.fontSize="72px",a.style.position="absolute",a.style.left="-9999px",a.style.lineHeight="normal",a.innerHTML="ssssssssssslli",{}),s={};for(e in r)a.style.fontFamily=r[e],i.appendChild(a),c[r[e]]=a.offsetWidth,s[r[e]]=a.offsetHeight,i.removeChild(a);this.detect=function(e){var t,n=!1;for(t in r){a.style.fontFamily=e+","+r[t],i.appendChild(a);var o=a.offsetWidth!==c[r[t]]||a.offsetHeight!==s[r[t]];i.removeChild(a),n=n||o;break}return n}},n="",o=0;o<e.length;o++)t.detect(e[o])&&(n+=e[o]);return md5$1(n)}window._fmOpt?window._fmOpt.success||console.warn&&console.warn("_fmOpt.success is not defined!"):console.warn&&console.warn("_fmOpt is not defined!");var tasks=[{name:"screen",active:getScreen},{name:"navigator",active:getNavigator},{name:"canvas",active:getCanvas},{name:"maxTouchPoints",active:getMaxTouchPoints},{name:"timezone",active:getTimezone},{name:"touchSupport",active:getTouchSupport},{name:"gpu",active:getGpu},{name:"support",active:getSupport},{name:"font",active:getFont}],riskTasks=[{name:"debugger",active:getDebugger},{name:"disabledCookie",active:getDisabledCookie}],tasksAsync=[{name:"audioRipple",active:getAudioRipple}],result={device_id:"",device_risk_label:{debugger:0,disabledCookie:0},device_detail:{}},deviceDetail={},deviceRiskLabel={},timezoneStr=getTimezoneStr();tasks.map(function(e){"navigator"===e.name||"screen"===e.name?Object.assign(deviceDetail,e.active()):deviceDetail[e.name]=e.active()}),Promise.all(tasksAsync.map(function(e){return e.active()})).then(function(e){e.forEach(function(e,t){deviceDetail[tasksAsync[t].name]=e});var e=cookie.get("B106E2F6056FE017")||"";e&&32===e.length?result.device_id=e:0!==Object.keys(deviceDetail).length&&(e=md5$1(JSON.stringify(deviceDetail))||"")&&32===e.length&&(result.device_id=e,cookie.set("B106E2F6056FE017",e)),riskTasks.map(function(e){deviceRiskLabel[e.name]=e.active()}),result.device_detail=deviceDetail,timezoneStr&&(result.device_detail.timezoneStr=timezoneStr),result.device_risk_label=deviceRiskLabel,window._fmOpt.success&&window._fmOpt.success(result)});
