(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(148);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement("h1",null,"NOT FOUND"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(e,t,n){"use strict";function r(e){return e.replace(/^\s+|\s+$/g,"")}var a=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function o(e){console.warn("[react-ga]",e)}var i="REDACTED (Potential Email Address)";function c(e,t){return function(e){return/[^@]+@[^@]+/.test(e)}(e)?(o("This arg looks like an email address, redacting."),i):t?r(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(a)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var l=function(e){var t,n,r,a,o,i,c,l="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?l=e.gaAddress:e&&e.debug&&(l="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",a=l,o="ga",t.GoogleAnalyticsObject=o,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),c=n.getElementsByTagName(r)[0],i.async=1,i.src=a,c.parentNode.insertBefore(i,c)};function u(e){console.info("[react-ga]",e)}var s=[],f={calls:s,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];s.push(t.concat())},resetCalls:function(){s.length=0}},p=n(0),g=n.n(p),b=n(4),d=n.n(b);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E="_blank",j=1,A=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return r=this,a=(e=v(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==y(a)&&"function"!=typeof a?O(r):a,k(O(O(n)),"handleClick",function(e){var r=n.props,a=r.target,o=r.eventLabel,i=r.to,c=r.onClick,l={label:o},u=a!==E,s=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===j);u&&s?(e.preventDefault(),t.trackLink(l,function(){window.location.href=i})):t.trackLink(l,function(){}),c&&c(e)}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,p["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){k(e,t,n[t])})}return e}({},m(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===E&&(n.rel="noopener noreferrer"),delete n.eventLabel,g.a.createElement("a",n)}}])&&h(n.prototype,r),a&&h(n,a),t}();function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}k(A,"trackLink",function(){o("ga tracking not enabled")}),k(A,"propTypes",{eventLabel:d.a.string.isRequired,target:d.a.string,to:d.a.string,onClick:d.a.func}),k(A,"defaultProps",{target:null,to:null,onClick:null});var T=!1,q=!0,P=!1,L=!0,D=function(){var e;return P?f.ga.apply(f,arguments):"undefined"!=typeof window&&(window.ga?(e=window).ga.apply(e,arguments):o("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function _(e){return c(e,q)}function I(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=n[0];if("function"==typeof D){if("string"!=typeof a)return void o("ga command must be a string");!L&&Array.isArray(e)||D.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){D.apply(void 0,x(["".concat(e,".").concat(a)].concat(n.slice(1))))})}}function z(e,t){e?(t&&(t.debug&&!0===t.debug&&(T=!0),!1===t.titleCase&&(q=!1)),t&&t.gaOptions?D("create",e,t.gaOptions):D("create",e,"auto")):o("gaTrackingID is required in initialize()")}function J(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(D.apply(void 0,t),T&&(u("called ga('arguments');"),u("with arguments: ".concat(JSON.stringify(t))))),window.ga}function F(e,t){I(t,"send",e),T&&(u("called ga('send', fieldObject);"),u("with fieldObject: ".concat(JSON.stringify(e))),u("with trackers: ".concat(JSON.stringify(t))))}var M={require:function(e,t){if(e){var n=r(e);if(""!==n)if(t){if("object"!==C(t))return void o("Expected `options` arg to be an Object");0===Object.keys(t).length&&o("Empty `options` given to .require()"),J("require",n,t),T&&u("called ga('require', '".concat(n,"', ").concat(JSON.stringify(t)))}else J("require",n),T&&u("called ga('require', '".concat(n,"');"));else o("`name` cannot be an empty string in .require()")}else o("`name` is required in .require()")},execute:function(e,t){var n,r;if(1==(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!=typeof e)o("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)o("Expected `action` arg to be a String.");else{var a="".concat(e,":").concat(t);n=n||null,r&&n?(J(a,r,n),T&&(u("called ga('".concat(a,"');")),u('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(J(a,n),T&&(u("called ga('".concat(a,"');")),u("with payload: ".concat(JSON.stringify(n))))):(J(a),T&&u("called ga('".concat(a,"');")))}}};function V(e,t,n){if("function"==typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:_(e.label)},a=!1,i=setTimeout(function(){a=!0,t()},250);r.hitCallback=function(){clearTimeout(i),a||t()},F(r,n)}else o("args.label is required in outboundLink()");else o("hitCallback function is required")}A.origTrackLink=A.trackLink,A.trackLink=V;var R=A;t.a={initialize:function(e,t){if(t&&!0===t.testMode)P=!0;else{if("undefined"==typeof window)return!1;t&&!0===t.standardImplementation||l(t)}return L=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===C(e)?z(e.trackingId,e):o("All configs must be an object")}):z(e,t),!0},ga:J,set:function(e,t){e?"object"===C(e)?(0===Object.keys(e).length&&o("empty `fieldsObject` given to .set()"),I(t,"set",e),T&&(u("called ga('set', fieldsObject);"),u("with fieldsObject: ".concat(JSON.stringify(e))))):o("Expected `fieldsObject` arg to be an Object"):o("`fieldsObject` is required in .set()")},send:F,pageview:function(e,t,n){if(e){var a=r(e);if(""!==a){var i={};if(n&&(i.title=n),I(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){N(e,t,n[t])})}return e}({hitType:"pageview",page:a},i)),T){u("called ga('send', 'pageview', path);");var c="";n&&(c=" and title: ".concat(n)),u("with path: ".concat(a).concat(c))}}else o("path cannot be an empty string in .pageview()")}else o("path is required in .pageview()")},modalview:function(e,t){if(e){var n,a="/"===(n=r(e)).substring(0,1)?n.substring(1):n;if(""!==a){var i="/modal/".concat(a);I(t,"send","pageview",i),T&&(u("called ga('send', 'pageview', path);"),u("with path: ".concat(i)))}else o("modalName cannot be an empty string or a single / in .modalview()")}else o("modalName is required in .modalview(modalName)")},timing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,a=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"==typeof r){var c={hitType:"timing",timingCategory:_(t),timingVar:_(n),timingValue:r};a&&(c.timingLabel=_(a)),F(c,i)}else o("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")},event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,a=e.value,i=e.nonInteraction,c=e.transport,l=S(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var s={hitType:"event",eventCategory:_(t),eventAction:_(n)};r&&(s.eventLabel=_(r)),void 0!==a&&("number"!=typeof a?o("Expected `args.value` arg to be a Number."):s.eventValue=a),void 0!==i&&("boolean"!=typeof i?o("`args.nonInteraction` must be a boolean."):s.nonInteraction=i),void 0!==c&&("string"!=typeof c?o("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(c)&&o("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=c)),Object.keys(l).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){s[e]=l[e]}),Object.keys(l).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){s[e]=l[e]}),F(s,u)}else o("args.category AND args.action are required in event()")},exception:function(e,t){var n=e.description,r=e.fatal,a={hitType:"exception"};n&&(a.exDescription=_(n)),void 0!==r&&("boolean"!=typeof r?o("`args.fatal` must be a boolean."):a.exFatal=r),F(a,t)},plugin:M,outboundLink:V,OutboundLink:R,testModeAPI:f}},146:function(e,t,n){e.exports=n.p+"static/Maximiliano-David-Ozernickz-CV-8dbf3a9091a4e383c47afe08a0760310.pdf"},147:function(e,t,n){e.exports=n.p+"static/avatar-23d510966bf419248a082185d010e8b0.jpg"},148:function(e,t,n){"use strict";var r=n(7),a=n.n(r),o=n(0),i=n.n(o),c=(n(149),n(145)),l=n(146),u=n.n(l),s=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).registerEvent=function(e){return c.a.event({category:"Footer",action:"link",label:e})},t}return a()(t,e),t.prototype.render=function(){return i.a.createElement("div",{id:"footer"},i.a.createElement("div",{className:"inner"},i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{onClick:this.registerEvent.bind(this,"Linkedin"),href:"https://www.linkedin.com/in/maximilianoozernickz",target:"__blank",rel:"noopener noreferrer",className:"icon fa-linkedin"},i.a.createElement("span",{className:"label"},"Twitter"))),i.a.createElement("li",null,i.a.createElement("a",{onClick:this.registerEvent.bind(this,"CV"),href:u.a,target:"_blank",rel:"noopener noreferrer",className:"icon fa-id-badge"},i.a.createElement("span",{className:"label"},"Email"))),i.a.createElement("li",null,i.a.createElement("a",{onClick:this.registerEvent.bind(this,"Mail"),href:"mailto:maxoozer@gmail.com",className:"icon fa-envelope-o"},i.a.createElement("span",{className:"label"},"Email")))),i.a.createElement("ul",{className:"copyright"})))},t}(i.a.Component),f=n(147),p=n.n(f),g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement("header",{id:"header"},i.a.createElement("div",{className:"inner"},i.a.createElement("a",{href:"#",className:"image avatar"},i.a.createElement("img",{src:p.a,alt:""})),i.a.createElement("h1",null,i.a.createElement("strong",null,"I'm Maxi")),i.a.createElement("h1",null,i.a.createElement("p",null,"Senior Full-Stack web developer and Technical Leader."))),i.a.createElement(s,null))},t}(i.a.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(g,null),e)},t}(i.a.Component);t.a=b}}]);
//# sourceMappingURL=component---src-pages-404-js-f4f5e885c7cc027b7250.js.map