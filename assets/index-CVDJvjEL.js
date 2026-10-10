const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Blog-B0Z-zY2S.js","assets/framer-CtMTJxX8.js","assets/vendor-PMZgu7pC.js","assets/markdown-Vfjwx8jc.js","assets/ProjectPage-DjI6C0SZ.js"])))=>i.map(i=>d[i]);
import{j as Y,u as _M,a as xM,m as zn,A as SM}from"./framer-CtMTJxX8.js";import{a as yM,b as MM,r as qe,u as rx,c as bM,L as ox,R as lx,d as EM,e as Yd,H as TM}from"./vendor-PMZgu7pC.js";import{_ as cx}from"./markdown-Vfjwx8jc.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Zd={exports:{}},ol={},Kd={exports:{}},jd={};var Gv;function AM(){return Gv||(Gv=1,(function(s){function e(P,G){var J=P.length;P.push(G);e:for(;0<J;){var q=J-1>>>1,ee=P[q];if(0<l(ee,G))P[q]=G,P[J]=ee,J=q;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var G=P[0],J=P.pop();if(J!==G){P[0]=J;e:for(var q=0,ee=P.length,ne=ee>>>1;q<ne;){var ye=2*(q+1)-1,Me=P[ye],Ye=ye+1,Ue=P[Ye];if(0>l(Me,J))Ye<ee&&0>l(Ue,Me)?(P[q]=Ue,P[Ye]=J,q=Ye):(P[q]=Me,P[ye]=J,q=ye);else if(Ye<ee&&0>l(Ue,J))P[q]=Ue,P[Ye]=J,q=Ye;else break e}}return G}function l(P,G){var J=P.sortIndex-G.sortIndex;return J!==0?J:P.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],_=1,v=null,g=3,S=!1,T=!1,N=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function A(P){for(var G=i(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=P)r(m),G.sortIndex=G.expirationTime,e(p,G);else break;G=i(m)}}function C(P){if(N=!1,A(P),!T)if(i(p)!==null)T=!0,U||(U=!0,V());else{var G=i(m);G!==null&&X(C,G.startTime-P)}}var U=!1,L=-1,E=5,R=-1;function z(){return y?!0:!(s.unstable_now()-R<E)}function F(){if(y=!1,U){var P=s.unstable_now();R=P;var G=!0;try{e:{T=!1,N&&(N=!1,O(L),L=-1),S=!0;var J=g;try{t:{for(A(P),v=i(p);v!==null&&!(v.expirationTime>P&&z());){var q=v.callback;if(typeof q=="function"){v.callback=null,g=v.priorityLevel;var ee=q(v.expirationTime<=P);if(P=s.unstable_now(),typeof ee=="function"){v.callback=ee,A(P),G=!0;break t}v===i(p)&&r(p),A(P)}else r(p);v=i(p)}if(v!==null)G=!0;else{var ne=i(m);ne!==null&&X(C,ne.startTime-P),G=!1}}break e}finally{v=null,g=J,S=!1}G=void 0}}finally{G?V():U=!1}}}var V;if(typeof I=="function")V=function(){I(F)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,H=K.port2;K.port1.onmessage=F,V=function(){H.postMessage(null)}}else V=function(){x(F,0)};function X(P,G){L=x(function(){P(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(P){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var J=g;g=G;try{return P()}finally{g=J}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var J=g;g=P;try{return G()}finally{g=J}},s.unstable_scheduleCallback=function(P,G,J){var q=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?q+J:q):J=q,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=J+ee,P={id:_++,callback:G,priorityLevel:P,startTime:J,expirationTime:ee,sortIndex:-1},J>q?(P.sortIndex=J,e(m,P),i(p)===null&&P===i(m)&&(N?(O(L),L=-1):N=!0,X(C,J-q))):(P.sortIndex=ee,e(p,P),T||S||(T=!0,U||(U=!0,V()))),P},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(P){var G=g;return function(){var J=g;g=G;try{return P.apply(this,arguments)}finally{g=J}}}})(jd)),jd}var Vv;function wM(){return Vv||(Vv=1,Kd.exports=AM()),Kd.exports}var kv;function RM(){if(kv)return ol;kv=1;var s=wM(),e=yM(),i=MM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),t;if(d===o)return p(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,D=u.child;D;){if(D===a){M=!0,a=u,o=d;break}if(D===o){M=!0,o=u,a=d;break}D=D.sibling}if(!M){for(D=d.child;D;){if(D===a){M=!0,a=d,o=u;break}if(D===o){M=!0,o=d,a=u;break}D=D.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),I=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),z=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function H(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case C:return"Suspense";case U:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case I:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return n=t.displayName||null,n!==null?n:H(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return H(t(n))}catch{}}return null}var X=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},q=[],ee=-1;function ne(t){return{current:t}}function ye(t){0>ee||(t.current=q[ee],q[ee]=null,ee--)}function Me(t,n){ee++,q[ee]=t.current,t.current=n}var Ye=ne(null),Ue=ne(null),Ge=ne(null),ae=ne(null);function ce(t,n){switch(Me(Ge,n),Me(Ue,t),Me(Ye,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?uv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=uv(n),t=fv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ye(Ye),Me(Ye,t)}function we(){ye(Ye),ye(Ue),ye(Ge)}function Ie(t){t.memoizedState!==null&&Me(ae,t);var n=Ye.current,a=fv(n,t.type);n!==a&&(Me(Ue,t),Me(Ye,a))}function Re(t){Ue.current===t&&(ye(Ye),ye(Ue)),ae.current===t&&(ye(ae),il._currentValue=J)}var be,et;function Ze(t){if(be===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);be=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+be+t+et}var rt=!1;function ft(t,n){if(!t||rt)return"";rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(pe){var ue=pe}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(pe){ue=pe}t.call(Se.prototype)}}else{try{throw Error()}catch(pe){ue=pe}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(pe){if(pe&&ue&&typeof pe.stack=="string")return[pe.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],D=d[1];if(M&&D){var k=M.split(`
`),le=D.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===le.length)for(o=k.length-1,u=le.length-1;1<=o&&0<=u&&k[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==le[u]){var ve=`
`+k[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ze(a):""}function at(t,n){switch(t.tag){case 26:case 27:case 5:return Ze(t.type);case 16:return Ze("Lazy");case 13:return t.child!==n&&n!==null?Ze("Suspense Fallback"):Ze("Suspense");case 19:return Ze("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return Ze("Activity");default:return""}}function St(t){try{var n="",a=null;do n+=at(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Nt=Object.prototype.hasOwnProperty,Kt=s.unstable_scheduleCallback,Tt=s.unstable_cancelCallback,Ht=s.unstable_shouldYield,W=s.unstable_requestPaint,ot=s.unstable_now,lt=s.unstable_getCurrentPriorityLevel,B=s.unstable_ImmediatePriority,b=s.unstable_UserBlockingPriority,$=s.unstable_NormalPriority,ie=s.unstable_LowPriority,he=s.unstable_IdlePriority,Te=s.log,Ee=s.unstable_setDisableYieldValue,me=null,ge=null;function Ce(t){if(typeof Te=="function"&&Ee(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(me,t)}catch{}}var Fe=Math.clz32?Math.clz32:tt,De=Math.log,Oe=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(De(t)/Oe|0)|0}var it=256,ut=262144,Q=4194304;function Ne(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var D=o&134217727;return D!==0?(o=D&~d,o!==0?u=Ne(o):(M&=D,M!==0?u=Ne(M):a||(a=D&~t,a!==0&&(u=Ne(a))))):(D=o&~d,D!==0?u=Ne(D):M!==0?u=Ne(M):a||(a=o&~t,a!==0&&(u=Ne(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Le(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=Q;return Q<<=1,(Q&62914560)===0&&(Q=4194304),t}function $e(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wt(t,n,a,o,u,d){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var D=t.entanglements,k=t.expirationTimes,le=t.hiddenUpdates;for(a=M&~a;0<a;){var ve=31-Fe(a),Se=1<<ve;D[ve]=0,k[ve]=-1;var ue=le[ve];if(ue!==null)for(le[ve]=null,ve=0;ve<ue.length;ve++){var pe=ue[ve];pe!==null&&(pe.lane&=-536870913)}a&=~Se}o!==0&&Ut(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(M&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Fn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Kn(t,n){var a=n&-n;return a=(a&42)!==0?1:go(a),(a&(t.suspendedLanes|n))!==0?0:a}function go(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function vo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _o(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Ov(t.type))}function or(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var Bi=Math.random().toString(36).slice(2),cn="__reactFiber$"+Bi,En="__reactProps$"+Bi,Hn="__reactContainer$"+Bi,vs="__reactEvents$"+Bi,zl="__reactListeners$"+Bi,Bl="__reactHandles$"+Bi,_s="__reactResources$"+Bi,Ua="__reactMarker$"+Bi;function La(t){delete t[cn],delete t[En],delete t[vs],delete t[zl],delete t[Bl]}function ea(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hn]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=_v(t);t!==null;){if(a=t[cn])return a;t=_v(t)}return n}t=a,a=t.parentNode}return null}function ta(t){if(t=t[cn]||t[Hn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function xs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Oa(t){var n=t[_s];return n||(n=t[_s]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(t){t[Ua]=!0}var Fl=new Set,xo={};function w(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(xo[t]=n,t=0;t<n.length;t++)Fl.add(n[t])}var fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),se={},re={};function ze(t){return Nt.call(re,t)?!0:Nt.call(se,t)?!1:fe.test(t)?re[t]=!0:(se[t]=!0,!1)}function We(t,n,a){if(ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Pe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ve(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function yt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,d.call(this,M)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function je(t){if(!t._valueTracker){var n=pt(t)?"checked":"value";t._valueTracker=yt(t,n,""+t[n])}}function Lt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=pt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var jt=/[\n"\\]/g;function vt(t){return t.replace(jt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function fn(t,n,a,o,u,d,M,D){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ke(n)):t.value!==""+ke(n)&&(t.value=""+ke(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?_n(t,M,ke(n)):a!=null?_n(t,M,ke(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+ke(D):t.removeAttribute("name")}function Xe(t,n,a,o,u,d,M,D){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){je(t);return}a=a!=null?""+ke(a):"",n=n!=null?""+ke(n):a,D||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=D?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),je(t)}function _n(t,n,a){n==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _t(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ke(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ln(t,n,a){if(n!=null&&(n=""+ke(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ke(a):""}function jn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(X(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ke(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),je(t)}function On(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Pa.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function tn(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Bt(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Bt(t,d,n[d])}function li(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bi(t){return Fi.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ci(){}var ku=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lr=null,cr=null;function cm(t){var n=ta(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(fn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(r(90));fn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Lt(o)}break e;case"textarea":Ln(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&_t(t,!!a.multiple,n,!1)}}}var Xu=!1;function um(t,n,a){if(Xu)return t(n,a);Xu=!0;try{var o=t(n);return o}finally{if(Xu=!1,(lr!==null||cr!==null)&&(Ac(),lr&&(n=lr,t=cr,cr=lr=null,cm(n),t)))for(n=0;n<t.length;n++)cm(t[n])}}function So(t,n){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(na)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){qu=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{qu=!1}var Ia=null,Yu=null,Hl=null;function fm(){if(Hl)return Hl;var t,n=Yu,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return Hl=u.slice(t,1<o?1-o:void 0)}function Gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function dm(){return!1}function Gn(t){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(d):d[D]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Vl:dm,this.isPropagationStopped=dm,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),n}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Gn(Ss),Mo=v({},Ss,{view:0,detail:0}),gS=Gn(Mo),Zu,Ku,bo,Wl=v({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(Zu=t.screenX-bo.screenX,Ku=t.screenY-bo.screenY):Ku=Zu=0,bo=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:Ku}}),hm=Gn(Wl),vS=v({},Wl,{dataTransfer:0}),_S=Gn(vS),xS=v({},Mo,{relatedTarget:0}),ju=Gn(xS),SS=v({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),yS=Gn(SS),MS=v({},Ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bS=Gn(MS),ES=v({},Ss,{data:0}),pm=Gn(ES),TS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=wS[t])?!!n[t]:!1}function Qu(){return RS}var CS=v({},Mo,{key:function(t){if(t.key){var n=TS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DS=Gn(CS),NS=v({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=Gn(NS),US=v({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),LS=Gn(US),OS=v({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),PS=Gn(OS),IS=v({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zS=Gn(IS),BS=v({},Ss,{newState:0,oldState:0}),FS=Gn(BS),HS=[9,13,27,32],Ju=na&&"CompositionEvent"in window,Eo=null;na&&"documentMode"in document&&(Eo=document.documentMode);var GS=na&&"TextEvent"in window&&!Eo,gm=na&&(!Ju||Eo&&8<Eo&&11>=Eo),vm=" ",_m=!1;function xm(t,n){switch(t){case"keyup":return HS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function VS(t,n){switch(t){case"compositionend":return Sm(n);case"keypress":return n.which!==32?null:(_m=!0,vm);case"textInput":return t=n.data,t===vm&&_m?null:t;default:return null}}function kS(t,n){if(ur)return t==="compositionend"||!Ju&&xm(t,n)?(t=fm(),Hl=Yu=Ia=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gm&&n.locale!=="ko"?null:n.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ym(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!WS[t.type]:n==="textarea"}function Mm(t,n,a,o){lr?cr?cr.push(o):cr=[o]:lr=o,n=Lc(n,"onChange"),0<n.length&&(a=new kl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var To=null,Ao=null;function XS(t){av(t,0)}function Xl(t){var n=xs(t);if(Lt(n))return t}function bm(t,n){if(t==="change")return n}var Em=!1;if(na){var $u;if(na){var ef="oninput"in document;if(!ef){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),ef=typeof Tm.oninput=="function"}$u=ef}else $u=!1;Em=$u&&(!document.documentMode||9<document.documentMode)}function Am(){To&&(To.detachEvent("onpropertychange",wm),Ao=To=null)}function wm(t){if(t.propertyName==="value"&&Xl(Ao)){var n=[];Mm(n,Ao,t,Wu(t)),um(XS,n)}}function qS(t,n,a){t==="focusin"?(Am(),To=n,Ao=a,To.attachEvent("onpropertychange",wm)):t==="focusout"&&Am()}function YS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Ao)}function ZS(t,n){if(t==="click")return Xl(n)}function KS(t,n){if(t==="input"||t==="change")return Xl(n)}function jS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:jS;function wo(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Nt.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,n){var a=Rm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rm(a)}}function Dm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Nm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Jt(t.document)}return n}function tf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var QS=na&&"documentMode"in document&&11>=document.documentMode,fr=null,nf=null,Ro=null,af=!1;function Um(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;af||fr==null||fr!==Jt(o)||(o=fr,"selectionStart"in o&&tf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ro&&wo(Ro,o)||(Ro=o,o=Lc(nf,"onSelect"),0<o.length&&(n=new kl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=fr)))}function ys(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var dr={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},sf={},Lm={};na&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Ms(t){if(sf[t])return sf[t];if(!dr[t])return t;var n=dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lm)return sf[t]=n[a];return t}var Om=Ms("animationend"),Pm=Ms("animationiteration"),Im=Ms("animationstart"),JS=Ms("transitionrun"),$S=Ms("transitionstart"),ey=Ms("transitioncancel"),zm=Ms("transitionend"),Bm=new Map,rf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rf.push("scrollEnd");function Ei(t,n){Bm.set(t,n),w(n,[t])}var ql=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],hr=0,of=0;function Yl(){for(var t=hr,n=of=hr=0;n<t;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var d=ui[n];if(ui[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&Fm(a,u,d)}}function Zl(t,n,a,o){ui[hr++]=t,ui[hr++]=n,ui[hr++]=a,ui[hr++]=o,of|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function lf(t,n,a,o){return Zl(t,n,a,o),Kl(t)}function bs(t,n){return Zl(t,null,null,n),Kl(t)}function Fm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Kl(t){if(50<jo)throw jo=0,vd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var pr={};function ty(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,o){return new ty(t,n,a,o)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jl(t,n,a,o,u,d){var M=0;if(o=t,typeof t=="function")cf(t)&&(M=1);else if(typeof t=="string")M=rM(t,a,Ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=Jn(31,a,n,u),t.elementType=R,t.lanes=d,t;case N:return Es(a.children,u,d,n);case y:M=8,u|=24;break;case x:return t=Jn(12,a,n,u|2),t.elementType=x,t.lanes=d,t;case C:return t=Jn(13,a,n,u),t.elementType=C,t.lanes=d,t;case U:return t=Jn(19,a,n,u),t.elementType=U,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:M=10;break e;case O:M=9;break e;case A:M=11;break e;case L:M=14;break e;case E:M=16,o=null;break e}M=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Jn(M,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Es(t,n,a,o){return t=Jn(7,t,o,n),t.lanes=a,t}function uf(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function Gm(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function ff(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vm=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=Vm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:St(n)},Vm.set(t,n),n)}return{value:t,source:n,stack:St(n)}}var mr=[],gr=0,Ql=null,Co=0,di=[],hi=0,za=null,Hi=1,Gi="";function aa(t,n){mr[gr++]=Co,mr[gr++]=Ql,Ql=t,Co=n}function km(t,n,a){di[hi++]=Hi,di[hi++]=Gi,di[hi++]=za,za=t;var o=Hi;t=Gi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var d=32-Fe(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Hi=1<<32-Fe(n)+u|a<<u|o,Gi=d+t}else Hi=1<<d|a<<u|o,Gi=t}function df(t){t.return!==null&&(aa(t,1),km(t,1,0))}function hf(t){for(;t===Ql;)Ql=mr[--gr],mr[gr]=null,Co=mr[--gr],mr[gr]=null;for(;t===za;)za=di[--hi],di[hi]=null,Gi=di[--hi],di[hi]=null,Hi=di[--hi],di[hi]=null}function Wm(t,n){di[hi++]=Hi,di[hi++]=Gi,di[hi++]=za,Hi=n.id,Gi=n.overflow,za=t}var Tn=null,$t=null,Rt=!1,Ba=null,pi=!1,pf=Error(r(519));function Fa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Do(fi(n,t)),pf}function Xm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[En]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Jo.length;a++)Et(Jo[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Xe(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),jn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||lv(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=ci),n=!0):n=!1,n||Fa(t,!0)}function qm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Tn=Tn.return}}function vr(t){if(t!==Tn)return!1;if(!Rt)return qm(t),Rt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ud(t.type,t.memoizedProps)),a=!a),a&&$t&&Fa(t),qm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=vv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=vv(t)}else n===27?(n=$t,$a(t.type)?(t=zd,zd=null,$t=t):$t=n):$t=Tn?gi(t.stateNode.nextSibling):null;return!0}function Ts(){$t=Tn=null,Rt=!1}function mf(){var t=Ba;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Ba=null),t}function Do(t){Ba===null?Ba=[t]:Ba.push(t)}var gf=ne(null),As=null,sa=null;function Ha(t,n,a){Me(gf,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=gf.current,ye(gf)}function vf(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function _f(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;e:for(;d!==null;){var D=d;d=u;for(var k=0;k<n.length;k++)if(D.context===n[k]){d.lanes|=a,D=d.alternate,D!==null&&(D.lanes|=a),vf(d.return,a,t),o||(M=null);break e}d=D.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),vf(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function _r(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var D=u.type;Qn(u.pendingProps.value,M.value)||(t!==null?t.push(D):t=[D])}}else if(u===ae.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(il):t=[il])}u=u.return}t!==null&&_f(n,t,a,o),n.flags|=262144}function Jl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ws(t){As=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Ym(As,t)}function $l(t,n){return As===null&&ws(t),Ym(t,n)}function Ym(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(t===null)throw Error(r(308));sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else sa=sa.next=n;return a}var ny=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},iy=s.unstable_scheduleCallback,ay=s.unstable_NormalPriority,dn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xf(){return{controller:new ny,data:new Map,refCount:0}}function No(t){t.refCount--,t.refCount===0&&iy(ay,function(){t.controller.abort()})}var Uo=null,Sf=0,xr=0,Sr=null;function sy(t,n){if(Uo===null){var a=Uo=[];Sf=0,xr=bd(),Sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Sf++,n.then(Zm,Zm),n}function Zm(){if(--Sf===0&&Uo!==null){Sr!==null&&(Sr.status="fulfilled");var t=Uo;Uo=null,xr=0,Sr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ry(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Km=P.S;P.S=function(t,n){Ug=ot(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&sy(t,n),Km!==null&&Km(t,n)};var Rs=ne(null);function yf(){var t=Rs.current;return t!==null?t:Qt.pooledCache}function ec(t,n){n===null?Me(Rs,Rs.current):Me(Rs,n.pool)}function jm(){var t=yf();return t===null?null:{parent:dn._currentValue,pool:t}}var yr=Error(r(460)),Mf=Error(r(474)),tc=Error(r(542)),nc={then:function(){}};function Qm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ci,ci),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,e0(t),t;default:if(typeof n.status=="string")n.then(ci,ci);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,e0(t),t}throw Ds=n,yr}}function Cs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ds=a,yr):a}}var Ds=null;function $m(){if(Ds===null)throw Error(r(459));var t=Ds;return Ds=null,t}function e0(t){if(t===yr||t===tc)throw Error(r(483))}var Mr=null,Lo=0;function ic(t){var n=Lo;return Lo+=1,Mr===null&&(Mr=[]),Jm(Mr,t,n)}function Oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ac(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function t0(t){function n(te,j){if(t){var oe=te.deletions;oe===null?(te.deletions=[j],te.flags|=16):oe.push(j)}}function a(te,j){if(!t)return null;for(;j!==null;)n(te,j),j=j.sibling;return null}function o(te){for(var j=new Map;te!==null;)te.key!==null?j.set(te.key,te):j.set(te.index,te),te=te.sibling;return j}function u(te,j){return te=ia(te,j),te.index=0,te.sibling=null,te}function d(te,j,oe){return te.index=oe,t?(oe=te.alternate,oe!==null?(oe=oe.index,oe<j?(te.flags|=67108866,j):oe):(te.flags|=67108866,j)):(te.flags|=1048576,j)}function M(te){return t&&te.alternate===null&&(te.flags|=67108866),te}function D(te,j,oe,xe){return j===null||j.tag!==6?(j=uf(oe,te.mode,xe),j.return=te,j):(j=u(j,oe),j.return=te,j)}function k(te,j,oe,xe){var st=oe.type;return st===N?ve(te,j,oe.props.children,xe,oe.key):j!==null&&(j.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===E&&Cs(st)===j.type)?(j=u(j,oe.props),Oo(j,oe),j.return=te,j):(j=jl(oe.type,oe.key,oe.props,null,te.mode,xe),Oo(j,oe),j.return=te,j)}function le(te,j,oe,xe){return j===null||j.tag!==4||j.stateNode.containerInfo!==oe.containerInfo||j.stateNode.implementation!==oe.implementation?(j=ff(oe,te.mode,xe),j.return=te,j):(j=u(j,oe.children||[]),j.return=te,j)}function ve(te,j,oe,xe,st){return j===null||j.tag!==7?(j=Es(oe,te.mode,xe,st),j.return=te,j):(j=u(j,oe),j.return=te,j)}function Se(te,j,oe){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=uf(""+j,te.mode,oe),j.return=te,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return oe=jl(j.type,j.key,j.props,null,te.mode,oe),Oo(oe,j),oe.return=te,oe;case T:return j=ff(j,te.mode,oe),j.return=te,j;case E:return j=Cs(j),Se(te,j,oe)}if(X(j)||V(j))return j=Es(j,te.mode,oe,null),j.return=te,j;if(typeof j.then=="function")return Se(te,ic(j),oe);if(j.$$typeof===I)return Se(te,$l(te,j),oe);ac(te,j)}return null}function ue(te,j,oe,xe){var st=j!==null?j.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return st!==null?null:D(te,j,""+oe,xe);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case S:return oe.key===st?k(te,j,oe,xe):null;case T:return oe.key===st?le(te,j,oe,xe):null;case E:return oe=Cs(oe),ue(te,j,oe,xe)}if(X(oe)||V(oe))return st!==null?null:ve(te,j,oe,xe,null);if(typeof oe.then=="function")return ue(te,j,ic(oe),xe);if(oe.$$typeof===I)return ue(te,j,$l(te,oe),xe);ac(te,oe)}return null}function pe(te,j,oe,xe,st){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return te=te.get(oe)||null,D(j,te,""+xe,st);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case S:return te=te.get(xe.key===null?oe:xe.key)||null,k(j,te,xe,st);case T:return te=te.get(xe.key===null?oe:xe.key)||null,le(j,te,xe,st);case E:return xe=Cs(xe),pe(te,j,oe,xe,st)}if(X(xe)||V(xe))return te=te.get(oe)||null,ve(j,te,xe,st,null);if(typeof xe.then=="function")return pe(te,j,oe,ic(xe),st);if(xe.$$typeof===I)return pe(te,j,oe,$l(j,xe),st);ac(j,xe)}return null}function Qe(te,j,oe,xe){for(var st=null,Ot=null,Je=j,gt=j=0,wt=null;Je!==null&&gt<oe.length;gt++){Je.index>gt?(wt=Je,Je=null):wt=Je.sibling;var Pt=ue(te,Je,oe[gt],xe);if(Pt===null){Je===null&&(Je=wt);break}t&&Je&&Pt.alternate===null&&n(te,Je),j=d(Pt,j,gt),Ot===null?st=Pt:Ot.sibling=Pt,Ot=Pt,Je=wt}if(gt===oe.length)return a(te,Je),Rt&&aa(te,gt),st;if(Je===null){for(;gt<oe.length;gt++)Je=Se(te,oe[gt],xe),Je!==null&&(j=d(Je,j,gt),Ot===null?st=Je:Ot.sibling=Je,Ot=Je);return Rt&&aa(te,gt),st}for(Je=o(Je);gt<oe.length;gt++)wt=pe(Je,te,gt,oe[gt],xe),wt!==null&&(t&&wt.alternate!==null&&Je.delete(wt.key===null?gt:wt.key),j=d(wt,j,gt),Ot===null?st=wt:Ot.sibling=wt,Ot=wt);return t&&Je.forEach(function(as){return n(te,as)}),Rt&&aa(te,gt),st}function ct(te,j,oe,xe){if(oe==null)throw Error(r(151));for(var st=null,Ot=null,Je=j,gt=j=0,wt=null,Pt=oe.next();Je!==null&&!Pt.done;gt++,Pt=oe.next()){Je.index>gt?(wt=Je,Je=null):wt=Je.sibling;var as=ue(te,Je,Pt.value,xe);if(as===null){Je===null&&(Je=wt);break}t&&Je&&as.alternate===null&&n(te,Je),j=d(as,j,gt),Ot===null?st=as:Ot.sibling=as,Ot=as,Je=wt}if(Pt.done)return a(te,Je),Rt&&aa(te,gt),st;if(Je===null){for(;!Pt.done;gt++,Pt=oe.next())Pt=Se(te,Pt.value,xe),Pt!==null&&(j=d(Pt,j,gt),Ot===null?st=Pt:Ot.sibling=Pt,Ot=Pt);return Rt&&aa(te,gt),st}for(Je=o(Je);!Pt.done;gt++,Pt=oe.next())Pt=pe(Je,te,gt,Pt.value,xe),Pt!==null&&(t&&Pt.alternate!==null&&Je.delete(Pt.key===null?gt:Pt.key),j=d(Pt,j,gt),Ot===null?st=Pt:Ot.sibling=Pt,Ot=Pt);return t&&Je.forEach(function(vM){return n(te,vM)}),Rt&&aa(te,gt),st}function Zt(te,j,oe,xe){if(typeof oe=="object"&&oe!==null&&oe.type===N&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case S:e:{for(var st=oe.key;j!==null;){if(j.key===st){if(st=oe.type,st===N){if(j.tag===7){a(te,j.sibling),xe=u(j,oe.props.children),xe.return=te,te=xe;break e}}else if(j.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===E&&Cs(st)===j.type){a(te,j.sibling),xe=u(j,oe.props),Oo(xe,oe),xe.return=te,te=xe;break e}a(te,j);break}else n(te,j);j=j.sibling}oe.type===N?(xe=Es(oe.props.children,te.mode,xe,oe.key),xe.return=te,te=xe):(xe=jl(oe.type,oe.key,oe.props,null,te.mode,xe),Oo(xe,oe),xe.return=te,te=xe)}return M(te);case T:e:{for(st=oe.key;j!==null;){if(j.key===st)if(j.tag===4&&j.stateNode.containerInfo===oe.containerInfo&&j.stateNode.implementation===oe.implementation){a(te,j.sibling),xe=u(j,oe.children||[]),xe.return=te,te=xe;break e}else{a(te,j);break}else n(te,j);j=j.sibling}xe=ff(oe,te.mode,xe),xe.return=te,te=xe}return M(te);case E:return oe=Cs(oe),Zt(te,j,oe,xe)}if(X(oe))return Qe(te,j,oe,xe);if(V(oe)){if(st=V(oe),typeof st!="function")throw Error(r(150));return oe=st.call(oe),ct(te,j,oe,xe)}if(typeof oe.then=="function")return Zt(te,j,ic(oe),xe);if(oe.$$typeof===I)return Zt(te,j,$l(te,oe),xe);ac(te,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,j!==null&&j.tag===6?(a(te,j.sibling),xe=u(j,oe),xe.return=te,te=xe):(a(te,j),xe=uf(oe,te.mode,xe),xe.return=te,te=xe),M(te)):a(te,j)}return function(te,j,oe,xe){try{Lo=0;var st=Zt(te,j,oe,xe);return Mr=null,st}catch(Je){if(Je===yr||Je===tc)throw Je;var Ot=Jn(29,Je,null,te.mode);return Ot.lanes=xe,Ot.return=te,Ot}finally{}}}var Ns=t0(!0),n0=t0(!1),Ga=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ef(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Kl(t),Fm(t,null,a),n}return Zl(t,o,n,a),Kl(t)}function Po(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Fn(t,a)}}function Tf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Af=!1;function Io(){if(Af){var t=Sr;if(t!==null)throw t}}function zo(t,n,a,o){Af=!1;var u=t.updateQueue;Ga=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var k=D,le=k.next;k.next=null,M===null?d=le:M.next=le,M=k;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,D=ve.lastBaseUpdate,D!==M&&(D===null?ve.firstBaseUpdate=le:D.next=le,ve.lastBaseUpdate=k))}if(d!==null){var Se=u.baseState;M=0,ve=le=k=null,D=d;do{var ue=D.lane&-536870913,pe=ue!==D.lane;if(pe?(At&ue)===ue:(o&ue)===ue){ue!==0&&ue===xr&&(Af=!0),ve!==null&&(ve=ve.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var Qe=t,ct=D;ue=n;var Zt=a;switch(ct.tag){case 1:if(Qe=ct.payload,typeof Qe=="function"){Se=Qe.call(Zt,Se,ue);break e}Se=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=ct.payload,ue=typeof Qe=="function"?Qe.call(Zt,Se,ue):Qe,ue==null)break e;Se=v({},Se,ue);break e;case 2:Ga=!0}}ue=D.callback,ue!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=u.callbacks,pe===null?u.callbacks=[ue]:pe.push(ue))}else pe={lane:ue,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ve===null?(le=ve=pe,k=Se):ve=ve.next=pe,M|=ue;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;pe=D,D=pe.next,pe.next=null,u.lastBaseUpdate=pe,u.shared.pending=null}}while(!0);ve===null&&(k=Se),u.baseState=k,u.firstBaseUpdate=le,u.lastBaseUpdate=ve,d===null&&(u.shared.lanes=0),Za|=M,t.lanes=M,t.memoizedState=Se}}function i0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function a0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)i0(a[t],n)}var br=ne(null),sc=ne(0);function s0(t,n){t=ma,Me(sc,t),Me(br,n),ma=t|n.baseLanes}function wf(){Me(sc,ma),Me(br,br.current)}function Rf(){ma=sc.current,ye(br),ye(sc)}var $n=ne(null),mi=null;function Wa(t){var n=t.alternate;Me(on,on.current&1),Me($n,t),mi===null&&(n===null||br.current!==null||n.memoizedState!==null)&&(mi=t)}function Cf(t){Me(on,on.current),Me($n,t),mi===null&&(mi=t)}function r0(t){t.tag===22?(Me(on,on.current),Me($n,t),mi===null&&(mi=t)):Xa()}function Xa(){Me(on,on.current),Me($n,$n.current)}function ei(t){ye($n),mi===t&&(mi=null),ye(on)}var on=ne(0);function rc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pd(a)||Id(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,mt=null,qt=null,hn=null,oc=!1,Er=!1,Us=!1,lc=0,Bo=0,Tr=null,oy=0;function an(){throw Error(r(321))}function Df(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Qn(t[a],n[a]))return!1;return!0}function Nf(t,n,a,o,u,d){return oa=d,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?k0:qf,Us=!1,d=a(o,u),Us=!1,Er&&(d=l0(n,a,o,u)),o0(t),d}function o0(t){P.H=Go;var n=qt!==null&&qt.next!==null;if(oa=0,hn=qt=mt=null,oc=!1,Bo=0,Tr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&Jl(t)&&(pn=!0))}function l0(t,n,a,o){mt=t;var u=0;do{if(Er&&(Tr=null),Bo=0,Er=!1,25<=u)throw Error(r(301));if(u+=1,hn=qt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=W0,d=n(a,o)}while(Er);return d}function ly(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Fo(n):n,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(mt.flags|=1024),n}function Uf(){var t=lc!==0;return lc=0,t}function Lf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Of(t){if(oc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}oc=!1}oa=0,hn=qt=mt=null,Er=!1,Bo=lc=0,Tr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?mt.memoizedState=hn=t:hn=hn.next=t,hn}function ln(){if(qt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var n=hn===null?mt.memoizedState:hn.next;if(n!==null)hn=n,qt=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},hn===null?mt.memoizedState=hn=t:hn=hn.next=t}return hn}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(t){var n=Bo;return Bo+=1,Tr===null&&(Tr=[]),t=Jm(Tr,t,n),n=mt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?k0:qf),t}function uc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fo(t);if(t.$$typeof===I)return An(t)}throw Error(r(438,String(t)))}function Pf(t){var n=null,a=mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=cc(),mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=z;return n.index++,a}function la(t,n){return typeof n=="function"?n(t):n}function fc(t){var n=ln();return If(n,qt,t)}function If(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var D=M=null,k=null,le=n,ve=!1;do{var Se=le.lane&-536870913;if(Se!==le.lane?(At&Se)===Se:(oa&Se)===Se){var ue=le.revertLane;if(ue===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),Se===xr&&(ve=!0);else if((oa&ue)===ue){le=le.next,ue===xr&&(ve=!0);continue}else Se={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},k===null?(D=k=Se,M=d):k=k.next=Se,mt.lanes|=ue,Za|=ue;Se=le.action,Us&&a(d,Se),d=le.hasEagerState?le.eagerState:a(d,Se)}else ue={lane:Se,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},k===null?(D=k=ue,M=d):k=k.next=ue,mt.lanes|=Se,Za|=Se;le=le.next}while(le!==null&&le!==n);if(k===null?M=d:k.next=D,!Qn(d,t.memoizedState)&&(pn=!0,ve&&(a=Sr,a!==null)))throw a;t.memoizedState=d,t.baseState=M,t.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function zf(t){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=t(d,M.action),M=M.next;while(M!==u);Qn(d,n.memoizedState)||(pn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function c0(t,n,a){var o=mt,u=ln(),d=Rt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Qn((qt||u).memoizedState,a);if(M&&(u.memoizedState=a,pn=!0),u=u.queue,Hf(d0.bind(null,o,u,t),[t]),u.getSnapshot!==n||M||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,Ar(9,{destroy:void 0},f0.bind(null,o,u,a,n),null),Qt===null)throw Error(r(349));d||(oa&127)!==0||u0(o,n,a)}return a}function u0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=mt.updateQueue,n===null?(n=cc(),mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function f0(t,n,a,o){n.value=a,n.getSnapshot=o,h0(n)&&p0(t)}function d0(t,n,a){return a(function(){h0(n)&&p0(t)})}function h0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Qn(t,a)}catch{return!0}}function p0(t){var n=bs(t,2);n!==null&&qn(n,t,2)}function Bf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),Us){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n}function m0(t,n,a,o){return t.baseState=a,If(t,qt,typeof o=="function"?o:la)}function cy(t,n,a,o,u){if(pc(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,g0(n,d)):(d.next=a.next,n.pending=a.next=d)}}function g0(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=P.T,M={};P.T=M;try{var D=a(u,o),k=P.S;k!==null&&k(M,D),v0(t,n,D)}catch(le){Ff(t,n,le)}finally{d!==null&&M.types!==null&&(d.types=M.types),P.T=d}}else try{d=a(u,o),v0(t,n,d)}catch(le){Ff(t,n,le)}}function v0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){_0(t,n,o)},function(o){return Ff(t,n,o)}):_0(t,n,a)}function _0(t,n,a){n.status="fulfilled",n.value=a,x0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,g0(t,a)))}function Ff(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,x0(n),n=n.next;while(n!==o)}t.action=null}function x0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function S0(t,n){return n}function y0(t,n){if(Rt){var a=Qt.formState;if(a!==null){e:{var o=mt;if(Rt){if($t){t:{for(var u=$t,d=pi;u.nodeType!==8;){if(!d){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$t=gi(u.nextSibling),o=u.data==="F!";break e}}Fa(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:S0,lastRenderedState:n},a.queue=o,a=H0.bind(null,mt,o),o.dispatch=a,o=Bf(!1),d=Xf.bind(null,mt,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=cy.bind(null,mt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function M0(t){var n=ln();return b0(n,qt,t)}function b0(t,n,a){if(n=If(t,n,S0)[0],t=fc(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Fo(n)}catch(M){throw M===yr?tc:M}else o=n;n=ln();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(mt.flags|=2048,Ar(9,{destroy:void 0},uy.bind(null,u,a),null)),[o,d,t]}function uy(t,n){t.action=n}function E0(t){var n=ln(),a=qt;if(a!==null)return b0(n,a,t);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Ar(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=cc(),mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function T0(){return ln().memoizedState}function dc(t,n,a,o){var u=Pn();mt.flags|=t,u.memoizedState=Ar(1|n,{destroy:void 0},a,o===void 0?null:o)}function hc(t,n,a,o){var u=ln();o=o===void 0?null:o;var d=u.memoizedState.inst;qt!==null&&o!==null&&Df(o,qt.memoizedState.deps)?u.memoizedState=Ar(n,d,a,o):(mt.flags|=t,u.memoizedState=Ar(1|n,d,a,o))}function A0(t,n){dc(8390656,8,t,n)}function Hf(t,n){hc(2048,8,t,n)}function fy(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=cc(),mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function w0(t){var n=ln().memoizedState;return fy({ref:n,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function R0(t,n){return hc(4,2,t,n)}function C0(t,n){return hc(4,4,t,n)}function D0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function N0(t,n,a){a=a!=null?a.concat([t]):null,hc(4,4,D0.bind(null,n,t),a)}function Gf(){}function U0(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Df(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function L0(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Df(n,o[1]))return o[0];if(o=t(),Us){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function Vf(t,n,a){return a===void 0||(oa&1073741824)!==0&&(At&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Og(),mt.lanes|=t,Za|=t,a)}function O0(t,n,a,o){return Qn(a,n)?a:br.current!==null?(t=Vf(t,a,o),Qn(t,n)||(pn=!0),t):(oa&42)===0||(oa&1073741824)!==0&&(At&261930)===0?(pn=!0,t.memoizedState=a):(t=Og(),mt.lanes|=t,Za|=t,n)}function P0(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var M=P.T,D={};P.T=D,Xf(t,!1,n,a);try{var k=u(),le=P.S;if(le!==null&&le(D,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ve=ry(k,o);Ho(t,n,ve,ii(t))}else Ho(t,n,o,ii(t))}catch(Se){Ho(t,n,{then:function(){},status:"rejected",reason:Se},ii())}finally{G.p=d,M!==null&&D.types!==null&&(M.types=D.types),P.T=M}}function dy(){}function kf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=I0(t).queue;P0(t,u,n,J,a===null?dy:function(){return z0(t),a(o)})}function I0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function z0(t){var n=I0(t);n.next===null&&(n=t.alternate.memoizedState),Ho(t,n.next.queue,{},ii())}function Wf(){return An(il)}function B0(){return ln().memoizedState}function F0(){return ln().memoizedState}function hy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();t=Va(a);var o=ka(n,t,a);o!==null&&(qn(o,n,a),Po(o,n,a)),n={cache:xf()},t.payload=n;return}n=n.return}}function py(t,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pc(t)?G0(n,a):(a=lf(t,n,a,o),a!==null&&(qn(a,t,o),V0(a,n,o)))}function H0(t,n,a){var o=ii();Ho(t,n,a,o)}function Ho(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pc(t))G0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,D=d(M,a);if(u.hasEagerState=!0,u.eagerState=D,Qn(D,M))return Zl(t,n,u,0),Qt===null&&Yl(),!1}catch{}finally{}if(a=lf(t,n,u,o),a!==null)return qn(a,t,o),V0(a,n,o),!0}return!1}function Xf(t,n,a,o){if(o={lane:2,revertLane:bd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},pc(t)){if(n)throw Error(r(479))}else n=lf(t,a,o,2),n!==null&&qn(n,t,2)}function pc(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function G0(t,n){Er=oc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function V0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Fn(t,a)}}var Go={readContext:An,use:uc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Go.useEffectEvent=an;var k0={readContext:An,use:uc,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:A0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,dc(4194308,4,D0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return dc(4194308,4,t,n)},useInsertionEffect:function(t,n){dc(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(Us){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(Us){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=py.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Bf(t);var n=t.queue,a=H0.bind(null,mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Gf,useDeferredValue:function(t,n){var a=Pn();return Vf(a,t,n)},useTransition:function(){var t=Bf(!1);return t=P0.bind(null,mt,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=mt,u=Pn();if(Rt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Qt===null)throw Error(r(349));(At&127)!==0||u0(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,A0(d0.bind(null,o,d,t),[t]),o.flags|=2048,Ar(9,{destroy:void 0},f0.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=Qt.identifierPrefix;if(Rt){var a=Gi,o=Hi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=lc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=oy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Wf,useFormState:y0,useActionState:y0,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Xf.bind(null,mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pf,useCacheRefresh:function(){return Pn().memoizedState=hy.bind(null,mt)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},qf={readContext:An,use:uc,useCallback:U0,useContext:An,useEffect:Hf,useImperativeHandle:N0,useInsertionEffect:R0,useLayoutEffect:C0,useMemo:L0,useReducer:fc,useRef:T0,useState:function(){return fc(la)},useDebugValue:Gf,useDeferredValue:function(t,n){var a=ln();return O0(a,qt.memoizedState,t,n)},useTransition:function(){var t=fc(la)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:c0,useId:B0,useHostTransitionStatus:Wf,useFormState:M0,useActionState:M0,useOptimistic:function(t,n){var a=ln();return m0(a,qt,t,n)},useMemoCache:Pf,useCacheRefresh:F0};qf.useEffectEvent=w0;var W0={readContext:An,use:uc,useCallback:U0,useContext:An,useEffect:Hf,useImperativeHandle:N0,useInsertionEffect:R0,useLayoutEffect:C0,useMemo:L0,useReducer:zf,useRef:T0,useState:function(){return zf(la)},useDebugValue:Gf,useDeferredValue:function(t,n){var a=ln();return qt===null?Vf(a,t,n):O0(a,qt.memoizedState,t,n)},useTransition:function(){var t=zf(la)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:c0,useId:B0,useHostTransitionStatus:Wf,useFormState:E0,useActionState:E0,useOptimistic:function(t,n){var a=ln();return qt!==null?m0(a,qt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:F0};W0.useEffectEvent=w0;function Yf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ii(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(qn(n,t,o),Po(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ii(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(qn(n,t,o),Po(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ii(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(t,o,a),n!==null&&(qn(n,t,a),Po(n,t,a))}};function X0(t,n,a,o,u,d,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!wo(a,o)||!wo(u,d):!0}function q0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Zf.enqueueReplaceState(n,n.state,null)}function Ls(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Y0(t){ql(t)}function Z0(t){console.error(t)}function K0(t){ql(t)}function mc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function j0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Kf(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){mc(t,n)},a}function Q0(t){return t=Va(t),t.tag=3,t}function J0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){j0(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){j0(n,a,o),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function my(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&_r(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?wc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===nc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Sd(t,o,u)),!1;case 22:return a.flags|=65536,o===nc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Sd(t,o,u)),!1}throw Error(r(435,a.tag))}return Sd(t,o,u),wc(),!1}if(Rt)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==pf&&(t=Error(r(422),{cause:o}),Do(fi(t,a)))):(o!==pf&&(n=Error(r(423),{cause:o}),Do(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=Kf(t.stateNode,o,u),Tf(t,u),sn!==4&&(sn=2)),!1;var d=Error(r(520),{cause:o});if(d=fi(d,a),Ko===null?Ko=[d]:Ko.push(d),sn!==4&&(sn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Kf(a.stateNode,o,t),Tf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ka===null||!Ka.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Q0(u),J0(u,t,a,o),Tf(a,u),!1}a=a.return}while(a!==null);return!1}var jf=Error(r(461)),pn=!1;function wn(t,n,a,o){n.child=t===null?n0(n,null,a,o):Ns(n,t.child,a,o)}function $0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var D in o)D!=="ref"&&(M[D]=o[D])}else M=o;return ws(n),o=Nf(t,n,a,M,d,u),D=Uf(),t!==null&&!pn?(Lf(t,n,u),ca(t,n,u)):(Rt&&D&&df(n),n.flags|=1,wn(t,n,o,u),n.child)}function eg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!cf(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,tg(t,n,d,o,u)):(t=jl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!ad(t,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:wo,a(M,o)&&t.ref===n.ref)return ca(t,n,u)}return n.flags|=1,t=ia(d,o),t.ref=n.ref,t.return=n,n.child=t}function tg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(wo(d,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=d,ad(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,ca(t,n,u)}return Qf(t,n,a,o,u)}function ng(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return ig(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ec(n,d!==null?d.cachePool:null),d!==null?s0(n,d):wf(),r0(n);else return o=n.lanes=536870912,ig(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(ec(n,d.cachePool),s0(n,d),Xa(),n.memoizedState=null):(t!==null&&ec(n,null),wf(),Xa());return wn(t,n,u,a),n.child}function Vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ig(t,n,a,o,u){var d=yf();return d=d===null?null:{parent:dn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&ec(n,null),wf(),r0(n),t!==null&&_r(t,n,o,!0),n.childLanes=u,null}function gc(t,n){return n=_c({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ag(t,n,a){return Ns(n,t.child,null,a),t=gc(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function gy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(o.mode==="hidden")return t=gc(n,o),n.lanes=536870912,Vo(null,t);if(Cf(n),(t=$t)?(t=gv(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Gm(t),a.return=n,n.child=a,Tn=n,$t=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return gc(n,o)}var d=t.memoizedState;if(d!==null){var M=d.dehydrated;if(Cf(n),u)if(n.flags&256)n.flags&=-257,n=ag(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(pn||_r(t,n,a,!1),u=(a&t.childLanes)!==0,pn||u){if(o=Qt,o!==null&&(M=Kn(o,a),M!==0&&M!==d.retryLane))throw d.retryLane=M,bs(t,M),qn(o,t,M),jf;wc(),n=ag(t,n,a)}else t=d.treeContext,$t=gi(M.nextSibling),Tn=n,Rt=!0,Ba=null,pi=!1,t!==null&&Wm(n,t),n=gc(n,o),n.flags|=4096;return n}return t=ia(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function vc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qf(t,n,a,o,u){return ws(n),a=Nf(t,n,a,o,void 0,u),o=Uf(),t!==null&&!pn?(Lf(t,n,u),ca(t,n,u)):(Rt&&o&&df(n),n.flags|=1,wn(t,n,a,u),n.child)}function sg(t,n,a,o,u,d){return ws(n),n.updateQueue=null,a=l0(n,o,a,u),o0(t),o=Uf(),t!==null&&!pn?(Lf(t,n,d),ca(t,n,d)):(Rt&&o&&df(n),n.flags|=1,wn(t,n,a,d),n.child)}function rg(t,n,a,o,u){if(ws(n),n.stateNode===null){var d=pr,M=a.contextType;typeof M=="object"&&M!==null&&(d=An(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Zf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},bf(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?An(M):pr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Yf(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&Zf.enqueueReplaceState(d,d.state,null),zo(n,o,d,u),Io(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var D=n.memoizedProps,k=Ls(a,D);d.props=k;var le=d.context,ve=a.contextType;M=pr,typeof ve=="object"&&ve!==null&&(M=An(ve));var Se=a.getDerivedStateFromProps;ve=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,ve||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(D||le!==M)&&q0(n,d,o,M),Ga=!1;var ue=n.memoizedState;d.state=ue,zo(n,o,d,u),Io(),le=n.memoizedState,D||ue!==le||Ga?(typeof Se=="function"&&(Yf(n,a,Se,o),le=n.memoizedState),(k=Ga||X0(n,a,k,o,ue,le,M))?(ve||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=M,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ef(t,n),M=n.memoizedProps,ve=Ls(a,M),d.props=ve,Se=n.pendingProps,ue=d.context,le=a.contextType,k=pr,typeof le=="object"&&le!==null&&(k=An(le)),D=a.getDerivedStateFromProps,(le=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==Se||ue!==k)&&q0(n,d,o,k),Ga=!1,ue=n.memoizedState,d.state=ue,zo(n,o,d,u),Io();var pe=n.memoizedState;M!==Se||ue!==pe||Ga||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof D=="function"&&(Yf(n,a,D,o),pe=n.memoizedState),(ve=Ga||X0(n,a,ve,o,ue,pe,k)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,pe,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,pe,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=pe),d.props=o,d.state=pe,d.context=k,o=ve):(typeof d.componentDidUpdate!="function"||M===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,vc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Ns(n,t.child,null,u),n.child=Ns(n,null,a,u)):wn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ca(t,n,u),t}function og(t,n,a,o){return Ts(),n.flags|=256,wn(t,n,a,o),n.child}var Jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $f(t){return{baseLanes:t,cachePool:jm()}}function ed(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function lg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(u?Wa(n):Xa(),(t=$t)?(t=gv(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Gm(t),a.return=n,n.child=a,Tn=n,$t=null)):t=null,t===null)throw Fa(n);return Id(t)?n.lanes=32:n.lanes=536870912,null}var D=o.children;return o=o.fallback,u?(Xa(),u=n.mode,D=_c({mode:"hidden",children:D},u),o=Es(o,u,a,null),D.return=n,o.return=n,D.sibling=o,n.child=D,o=n.child,o.memoizedState=$f(a),o.childLanes=ed(t,M,a),n.memoizedState=Jf,Vo(null,o)):(Wa(n),td(n,D))}var k=t.memoizedState;if(k!==null&&(D=k.dehydrated,D!==null)){if(d)n.flags&256?(Wa(n),n.flags&=-257,n=nd(t,n,a)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),D=o.fallback,u=n.mode,o=_c({mode:"visible",children:o.children},u),D=Es(D,u,a,null),D.flags|=2,o.return=n,D.return=n,o.sibling=D,n.child=o,Ns(n,t.child,null,a),o=n.child,o.memoizedState=$f(a),o.childLanes=ed(t,M,a),n.memoizedState=Jf,n=Vo(null,o));else if(Wa(n),Id(D)){if(M=D.nextSibling&&D.nextSibling.dataset,M)var le=M.dgst;M=le,o=Error(r(419)),o.stack="",o.digest=M,Do({value:o,source:null,stack:null}),n=nd(t,n,a)}else if(pn||_r(t,n,a,!1),M=(a&t.childLanes)!==0,pn||M){if(M=Qt,M!==null&&(o=Kn(M,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,bs(t,o),qn(M,t,o),jf;Pd(D)||wc(),n=nd(t,n,a)}else Pd(D)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,$t=gi(D.nextSibling),Tn=n,Rt=!0,Ba=null,pi=!1,t!==null&&Wm(n,t),n=td(n,o.children),n.flags|=4096);return n}return u?(Xa(),D=o.fallback,u=n.mode,k=t.child,le=k.sibling,o=ia(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,le!==null?D=ia(le,D):(D=Es(D,u,a,null),D.flags|=2),D.return=n,o.return=n,o.sibling=D,n.child=o,Vo(null,o),o=n.child,D=t.child.memoizedState,D===null?D=$f(a):(u=D.cachePool,u!==null?(k=dn._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=jm(),D={baseLanes:D.baseLanes|a,cachePool:u}),o.memoizedState=D,o.childLanes=ed(t,M,a),n.memoizedState=Jf,Vo(t.child,o)):(Wa(n),a=t.child,t=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function td(t,n){return n=_c({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _c(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function nd(t,n,a){return Ns(n,t.child,null,a),t=td(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function cg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),vf(t.return,n,a)}function id(t,n,a,o,u,d){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=d)}function ug(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var M=on.current,D=(M&2)!==0;if(D?(M=M&1|2,n.flags|=128):M&=1,Me(on,M),wn(t,n,o,a),o=Rt?Co:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cg(t,a,n);else if(t.tag===19)cg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&rc(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),id(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&rc(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}id(n,!0,a,null,d,o);break;case"together":id(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(_r(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ia(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ia(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ad(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function vy(t,n,a){switch(n.tag){case 3:ce(n,n.stateNode.containerInfo),Ha(n,dn,t.memoizedState.cache),Ts();break;case 27:case 5:Ie(n);break;case 4:ce(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lg(t,n,a):(Wa(n),t=ca(t,n,a),t!==null?t.sibling:null);Wa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(_r(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ug(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(on,on.current),o)break;return null;case 22:return n.lanes=0,ng(t,n,a,n.pendingProps);case 24:Ha(n,dn,t.memoizedState.cache)}return ca(t,n,a)}function fg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!ad(t,a)&&(n.flags&128)===0)return pn=!1,vy(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Rt&&(n.flags&1048576)!==0&&km(n,Co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Cs(n.elementType),n.type=t,typeof t=="function")cf(t)?(o=Ls(t,o),n.tag=1,n=rg(null,n,t,o,a)):(n.tag=0,n=Qf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===A){n.tag=11,n=$0(null,n,t,o,a);break e}else if(u===L){n.tag=14,n=eg(null,n,t,o,a);break e}}throw n=H(t)||t,Error(r(306,n,""))}}return n;case 0:return Qf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ls(o,n.pendingProps),rg(t,n,o,u,a);case 3:e:{if(ce(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Ef(t,n),zo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ha(n,dn,o),o!==d.cache&&_f(n,[dn],a,!0),Io(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=og(t,n,o,a);break e}else if(o!==u){u=fi(Error(r(424)),n),Do(u),n=og(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=gi(t.firstChild),Tn=n,Rt=!0,Ba=null,pi=!0,a=n0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ts(),o===u){n=ca(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return vc(t,n),t===null?(a=Mv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(a=n.type,t=n.pendingProps,o=Oc(Ge.current).createElement(a),o[cn]=n,o[En]=t,Rn(o,a,t),un(o),n.stateNode=o):n.memoizedState=Mv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ie(n),t===null&&Rt&&(o=n.stateNode=xv(n.type,n.pendingProps,Ge.current),Tn=n,pi=!0,u=$t,$a(n.type)?(zd=u,$t=gi(o.firstChild)):$t=u),wn(t,n,n.pendingProps.children,a),vc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((u=o=$t)&&(o=Yy(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Tn=n,$t=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Fa(n)),Ie(n),u=n.type,d=n.pendingProps,M=t!==null?t.memoizedProps:null,o=d.children,Ud(u,d)?o=null:M!==null&&Ud(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Nf(t,n,ly,null,null,a),il._currentValue=u),vc(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&Rt&&((t=a=$t)&&(a=Zy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Tn=n,$t=null,t=!0):t=!1),t||Fa(n)),null;case 13:return lg(t,n,a);case 4:return ce(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ns(n,null,o,a):wn(t,n,o,a),n.child;case 11:return $0(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ws(n),u=An(u),o=o(u),n.flags|=1,wn(t,n,o,a),n.child;case 14:return eg(t,n,n.type,n.pendingProps,a);case 15:return tg(t,n,n.type,n.pendingProps,a);case 19:return ug(t,n,a);case 31:return gy(t,n,a);case 22:return ng(t,n,a,n.pendingProps);case 24:return ws(n),o=An(dn),t===null?(u=yf(),u===null&&(u=Qt,d=xf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},bf(n),Ha(n,dn,u)):((t.lanes&a)!==0&&(Ef(t,n),zo(n,null,null,a),Io()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,dn,o)):(o=d.cache,Ha(n,dn,o),o!==u.cache&&_f(n,[dn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ua(t){t.flags|=4}function sd(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Bg())t.flags|=8192;else throw Ds=nc,Mf}else t.flags&=-16777217}function dg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wv(n))if(Bg())t.flags|=8192;else throw Ds=nc,Mf}function xc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,Dr|=n)}function ko(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function _y(t,n,a){var o=n.pendingProps;switch(hf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(dn),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(vr(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mf())),en(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ua(n),d!==null?(en(n),dg(n,d)):(en(n),sd(n,u,null,o,a))):d?d!==t.memoizedState?(ua(n),en(n),dg(n,d)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ua(n),en(n),sd(n,u,t,o,a)),null;case 27:if(Re(n),a=Ge.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}t=Ye.current,vr(n)?Xm(n):(t=xv(u,o,a),n.stateNode=t,ua(n))}return en(n),null;case 5:if(Re(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return en(n),null}if(d=Ye.current,vr(n))Xm(n);else{var M=Oc(Ge.current);switch(d){case 1:d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=M.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}d[cn]=n,d[En]=o;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)d.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=d;e:switch(Rn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ua(n)}}return en(n),sd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ge.current,vr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||lv(t.nodeValue,a)),t||Fa(n,!0)}else t=Oc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=vr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=vr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),xc(n,n.updateQueue),en(n),null);case 4:return we(),t===null&&wd(n.stateNode.containerInfo),en(n),null;case 10:return ra(n.type),en(n),null;case 19:if(ye(on),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)ko(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=rc(t),d!==null){for(n.flags|=128,ko(o,!1),t=d.updateQueue,n.updateQueue=t,xc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Hm(a,t),a=a.sibling;return Me(on,on.current&1|2),Rt&&aa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&ot()>Ec&&(n.flags|=128,u=!0,ko(o,!1),n.lanes=4194304)}else{if(!u)if(t=rc(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,xc(n,t),ko(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Rt)return en(n),null}else 2*ot()-o.renderingStartTime>Ec&&a!==536870912&&(n.flags|=128,u=!0,ko(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ot(),t.sibling=null,a=on.current,Me(on,u?a&1|2:a&1),Rt&&aa(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return ei(n),Rf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&xc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ye(Rs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(dn),en(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function xy(t,n){switch(hf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(dn),we(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Re(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(r(340));Ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ye(on),null;case 4:return we(),null;case 10:return ra(n.type),null;case 22:case 23:return ei(n),Rf(),t!==null&&ye(Rs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function hg(t,n){switch(hf(n),n.tag){case 3:ra(dn),we();break;case 26:case 27:case 5:Re(n);break;case 4:we();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:ye(on);break;case 10:ra(n.type);break;case 22:case 23:ei(n),Rf(),t!==null&&ye(Rs);break;case 24:ra(dn)}}function Wo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(D){Vt(n,n.return,D)}}function qa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var M=o.inst,D=M.destroy;if(D!==void 0){M.destroy=void 0,u=n;var k=a,le=D;try{le()}catch(ve){Vt(u,k,ve)}}}o=o.next}while(o!==d)}}catch(ve){Vt(n,n.return,ve)}}function pg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{a0(n,a)}catch(o){Vt(t,t.return,o)}}}function mg(t,n,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function Xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function Vi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function gg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function rd(t,n,a){try{var o=t.stateNode;Gy(o,t.type,a,n),o[En]=n}catch(u){Vt(t,t.return,u)}}function vg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function od(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ci));else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ld(t,n,a),t=t.sibling;t!==null;)ld(t,n,a),t=t.sibling}function Sc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sc(t,n,a),t=t.sibling;t!==null;)Sc(t,n,a),t=t.sibling}function _g(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[cn]=t,n[En]=a}catch(d){Vt(t,t.return,d)}}var fa=!1,mn=!1,cd=!1,xg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Sy(t,n){if(t=t.containerInfo,Dd=Gc,t=Nm(t),tf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var M=0,D=-1,k=-1,le=0,ve=0,Se=t,ue=null;t:for(;;){for(var pe;Se!==a||u!==0&&Se.nodeType!==3||(D=M+u),Se!==d||o!==0&&Se.nodeType!==3||(k=M+o),Se.nodeType===3&&(M+=Se.nodeValue.length),(pe=Se.firstChild)!==null;)ue=Se,Se=pe;for(;;){if(Se===t)break t;if(ue===a&&++le===u&&(D=M),ue===d&&++ve===o&&(k=M),(pe=Se.nextSibling)!==null)break;Se=ue,ue=Se.parentNode}Se=pe}a=D===-1||k===-1?null:{start:D,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nd={focusedElem:t,selectionRange:a},Gc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Qe=Ls(a.type,u);t=o.getSnapshotBeforeUpdate(Qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Vt(a,a.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Od(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Od(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function Sg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),o&4&&Wo(5,a);break;case 1:if(ha(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Vt(a,a.return,M)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Vt(a,a.return,M)}}o&64&&pg(a),o&512&&Xo(a,a.return);break;case 3:if(ha(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{a0(t,n)}catch(M){Vt(a,a.return,M)}}break;case 27:n===null&&o&4&&_g(a);case 26:case 5:ha(t,a),n===null&&o&4&&gg(a),o&512&&Xo(a,a.return);break;case 12:ha(t,a);break;case 31:ha(t,a),o&4&&bg(t,a);break;case 13:ha(t,a),o&4&&Eg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Cy.bind(null,a),Ky(t,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||mn,u=fa;var d=mn;fa=o,(mn=n)&&!d?pa(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),fa=u,mn=d}break;case 30:break;default:ha(t,a)}}function yg(t){var n=t.alternate;n!==null&&(t.alternate=null,yg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&La(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,Vn=!1;function da(t,n,a){for(a=a.child;a!==null;)Mg(t,n,a),a=a.sibling}function Mg(t,n,a){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:mn||Vi(a,n),da(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Vi(a,n);var o=nn,u=Vn;$a(a.type)&&(nn=a.stateNode,Vn=!1),da(t,n,a),el(a.stateNode),nn=o,Vn=u;break;case 5:mn||Vi(a,n);case 6:if(o=nn,u=Vn,nn=null,da(t,n,a),nn=o,Vn=u,nn!==null)if(Vn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{nn.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:nn!==null&&(Vn?(t=nn,pv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Br(t)):pv(nn,a.stateNode));break;case 4:o=nn,u=Vn,nn=a.stateNode.containerInfo,Vn=!0,da(t,n,a),nn=o,Vn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),mn||qa(4,a,n),da(t,n,a);break;case 1:mn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mg(a,n,o)),da(t,n,a);break;case 21:da(t,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,da(t,n,a),mn=o;break;default:da(t,n,a)}}function bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Br(t)}catch(a){Vt(n,n.return,a)}}}function Eg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Br(t)}catch(a){Vt(n,n.return,a)}}function yy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new xg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new xg),n;default:throw Error(r(435,t.tag))}}function yc(t,n){var a=yy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Dy.bind(null,t,o);o.then(u,u)}})}function kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,M=n,D=M;e:for(;D!==null;){switch(D.tag){case 27:if($a(D.type)){nn=D.stateNode,Vn=!1;break e}break;case 5:nn=D.stateNode,Vn=!1;break e;case 3:case 4:nn=D.stateNode.containerInfo,Vn=!0;break e}D=D.return}if(nn===null)throw Error(r(160));Mg(d,M,u),nn=null,Vn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Tg(n,t),n=n.sibling}var Ti=null;function Tg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Wn(t),o&4&&(qa(3,t,t.return),Wo(3,t),qa(5,t,t.return));break;case 1:kn(n,t),Wn(t),o&512&&(mn||a===null||Vi(a,a.return)),o&64&&fa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(kn(n,t),Wn(t),o&512&&(mn||a===null||Vi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ua]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Rn(d,o,a),d[cn]=t,un(d),o=d;break e;case"link":var M=Tv("link","href",u).get(o+(a.href||""));if(M){for(var D=0;D<M.length;D++)if(d=M[D],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(D,1);break t}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=Tv("meta","content",u).get(o+(a.content||""))){for(D=0;D<M.length;D++)if(d=M[D],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(D,1);break t}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[cn]=t,un(d),o=d}t.stateNode=o}else Av(u,t.type,t.stateNode);else t.stateNode=Ev(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Av(u,t.type,t.stateNode):Ev(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&rd(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Wn(t),o&512&&(mn||a===null||Vi(a,a.return)),a!==null&&o&4&&rd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Wn(t),o&512&&(mn||a===null||Vi(a,a.return)),t.flags&32){u=t.stateNode;try{On(u,"")}catch(Qe){Vt(t,t.return,Qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,rd(t,u,a!==null?a.memoizedProps:u)),o&1024&&(cd=!0);break;case 6:if(kn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Qe){Vt(t,t.return,Qe)}}break;case 3:if(zc=null,u=Ti,Ti=Pc(n.containerInfo),kn(n,t),Ti=u,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Br(n.containerInfo)}catch(Qe){Vt(t,t.return,Qe)}cd&&(cd=!1,Ag(t));break;case 4:o=Ti,Ti=Pc(t.stateNode.containerInfo),kn(n,t),Wn(t),Ti=o;break;case 12:kn(n,t),Wn(t);break;case 31:kn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yc(t,o)));break;case 13:kn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bc=ot()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yc(t,o)));break;case 22:u=t.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,le=fa,ve=mn;if(fa=le||u,mn=ve||k,kn(n,t),mn=ve,fa=le,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||fa||mn||Os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{D=k.stateNode;var Se=k.memoizedProps.style,ue=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;D.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(Qe){Vt(k,k.return,Qe)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(Qe){Vt(k,k.return,Qe)}}}else if(n.tag===18){if(a===null){k=n;try{var pe=k.stateNode;u?mv(pe,!0):mv(k.stateNode,!1)}catch(Qe){Vt(k,k.return,Qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,yc(t,a))));break;case 19:kn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,yc(t,o)));break;case 30:break;case 21:break;default:kn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(vg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=od(t);Sc(t,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(On(M,""),a.flags&=-33);var D=od(t);Sc(t,D,M);break;case 3:case 4:var k=a.stateNode.containerInfo,le=od(t);ld(t,le,k);break;default:throw Error(r(161))}}catch(ve){Vt(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ag(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sg(t,n.alternate,n),n=n.sibling}function Os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Os(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mg(n,n.return,a),Os(n);break;case 27:el(n.stateNode);case 26:case 5:Vi(n,n.return),Os(n);break;case 22:n.memoizedState===null&&Os(n);break;case 30:Os(n);break;default:Os(n)}t=t.sibling}}function pa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:pa(u,d,a),Wo(4,d);break;case 1:if(pa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){Vt(o,o.return,le)}if(o=d,u=o.updateQueue,u!==null){var D=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)i0(k[u],D)}catch(le){Vt(o,o.return,le)}}a&&M&64&&pg(d),Xo(d,d.return);break;case 27:_g(d);case 26:case 5:pa(u,d,a),a&&o===null&&M&4&&gg(d),Xo(d,d.return);break;case 12:pa(u,d,a);break;case 31:pa(u,d,a),a&&M&4&&bg(u,d);break;case 13:pa(u,d,a),a&&M&4&&Eg(u,d);break;case 22:d.memoizedState===null&&pa(u,d,a),Xo(d,d.return);break;case 30:break;default:pa(u,d,a)}n=n.sibling}}function ud(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&No(a))}function fd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&No(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wg(t,n,a,o),n=n.sibling}function wg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),u&2048&&Wo(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&No(t)));break;case 12:if(u&2048){Ai(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,M=d.id,D=d.onPostCommit;typeof D=="function"&&D(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){Vt(n,n.return,k)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Ai(t,n,a,o):qo(t,n):d._visibility&2?Ai(t,n,a,o):(d._visibility|=2,wr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&ud(M,n);break;case 24:Ai(t,n,a,o),u&2048&&fd(n.alternate,n);break;default:Ai(t,n,a,o)}}function wr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,M=n,D=a,k=o,le=M.flags;switch(M.tag){case 0:case 11:case 15:wr(d,M,D,k,u),Wo(8,M);break;case 23:break;case 22:var ve=M.stateNode;M.memoizedState!==null?ve._visibility&2?wr(d,M,D,k,u):qo(d,M):(ve._visibility|=2,wr(d,M,D,k,u)),u&&le&2048&&ud(M.alternate,M);break;case 24:wr(d,M,D,k,u),u&&le&2048&&fd(M.alternate,M);break;default:wr(d,M,D,k,u)}n=n.sibling}}function qo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:qo(a,o),u&2048&&ud(o.alternate,o);break;case 24:qo(a,o),u&2048&&fd(o.alternate,o);break;default:qo(a,o)}n=n.sibling}}var Yo=8192;function Rr(t,n,a){if(t.subtreeFlags&Yo)for(t=t.child;t!==null;)Rg(t,n,a),t=t.sibling}function Rg(t,n,a){switch(t.tag){case 26:Rr(t,n,a),t.flags&Yo&&t.memoizedState!==null&&oM(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:Rr(t,n,a);break;case 3:case 4:var o=Ti;Ti=Pc(t.stateNode.containerInfo),Rr(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Yo,Yo=16777216,Rr(t,n,a),Yo=o):Rr(t,n,a));break;default:Rr(t,n,a)}}function Cg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Ng(o,t)}Cg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dg(t),t=t.sibling}function Dg(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&qa(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Mc(t)):Zo(t);break;default:Zo(t)}}function Mc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Ng(o,t)}Cg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Mc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Mc(n));break;default:Mc(n)}t=t.sibling}}function Ng(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:No(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(yg(o),o===a){Mn=null;break e}if(u!==null){u.return=d,Mn=u;break e}Mn=d}}}var My={getCacheForType:function(t){var n=An(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(dn).controller.signal}},by=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Qt=null,bt=null,At=0,Gt=0,ti=null,Ya=!1,Cr=!1,dd=!1,ma=0,sn=0,Za=0,Ps=0,hd=0,ni=0,Dr=0,Ko=null,Xn=null,pd=!1,bc=0,Ug=0,Ec=1/0,Tc=null,Ka=null,xn=0,ja=null,Nr=null,ga=0,md=0,gd=null,Lg=null,jo=0,vd=null;function ii(){return(Ft&2)!==0&&At!==0?At&-At:P.T!==null?bd():_o()}function Og(){if(ni===0)if((At&536870912)===0||Rt){var t=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),ni=t}else ni=536870912;return t=$n.current,t!==null&&(t.flags|=32),ni}function qn(t,n,a){(t===Qt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(Ur(t,0),Qa(t,At,ni,!1)),Ke(t,a),((Ft&2)===0||t!==Qt)&&(t===Qt&&((Ft&2)===0&&(Ps|=a),sn===4&&Qa(t,At,ni,!1)),ki(t))}function Pg(t,n,a){if((Ft&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Le(t,n),u=o?Ay(t,n):xd(t,n,!0),d=o;do{if(u===0){Cr&&!o&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Ey(a)){u=xd(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var D=t;u=Ko;var k=D.current.memoizedState.isDehydrated;if(k&&(Ur(D,M).flags|=256),M=xd(D,M,!1),M!==2){if(dd&&!k){D.errorRecoveryDisabledLanes|=d,Ps|=d,u=4;break e}d=Xn,Xn=u,d!==null&&(Xn===null?Xn=d:Xn.push.apply(Xn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){Ur(t,0),Qa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,ni,!Ya);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=bc+300-ot(),10<u)){if(Qa(o,n,ni,!Ya),_e(o,0,!0)!==0)break e;ga=n,o.timeoutHandle=dv(Ig.bind(null,o,a,Xn,Tc,pd,n,ni,Ps,Dr,Ya,d,"Throttled",-0,0),u);break e}Ig(o,a,Xn,Tc,pd,n,ni,Ps,Dr,Ya,d,null,-0,0)}}break}while(!0);ki(t)}function Ig(t,n,a,o,u,d,M,D,k,le,ve,Se,ue,pe){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ci},Rg(n,d,Se);var Qe=(d&62914560)===d?bc-ot():(d&4194048)===d?Ug-ot():0;if(Qe=lM(Se,Qe),Qe!==null){ga=d,t.cancelPendingCommit=Qe(Wg.bind(null,t,n,d,a,o,u,M,D,k,ve,Se,null,ue,pe)),Qa(t,d,M,!le);return}}Wg(t,n,d,a,o,u,M,D,k)}function Ey(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Qn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,o){n&=~hd,n&=~Ps,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Fe(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&Ut(t,a,n)}function Ac(){return(Ft&6)===0?(Qo(0),!1):!0}function _d(){if(bt!==null){if(Gt===0)var t=bt.return;else t=bt,sa=As=null,Of(t),Mr=null,Lo=0,t=bt;for(;t!==null;)hg(t.alternate,t),t=t.return;bt=null}}function Ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Wy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ga=0,_d(),Qt=t,bt=a=ia(t.current,null),At=n,Gt=0,ti=null,Ya=!1,Cr=Le(t,n),dd=!1,Dr=ni=hd=Ps=Za=sn=0,Xn=Ko=null,pd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),d=1<<u;n|=t[u],o&=~d}return ma=n,Yl(),a}function zg(t,n){mt=null,P.H=Go,n===yr||n===tc?(n=$m(),Gt=3):n===Mf?(n=$m(),Gt=4):Gt=n===jf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,bt===null&&(sn=1,mc(t,fi(n,t.current)))}function Bg(){var t=$n.current;return t===null?!0:(At&4194048)===At?mi===null:(At&62914560)===At||(At&536870912)!==0?t===mi:!1}function Fg(){var t=P.H;return P.H=Go,t===null?Go:t}function Hg(){var t=P.A;return P.A=My,t}function wc(){sn=4,Ya||(At&4194048)!==At&&$n.current!==null||(Cr=!0),(Za&134217727)===0&&(Ps&134217727)===0||Qt===null||Qa(Qt,At,ni,!1)}function xd(t,n,a){var o=Ft;Ft|=2;var u=Fg(),d=Hg();(Qt!==t||At!==n)&&(Tc=null,Ur(t,n)),n=!1;var M=sn;e:do try{if(Gt!==0&&bt!==null){var D=bt,k=ti;switch(Gt){case 8:_d(),M=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var le=Gt;if(Gt=0,ti=null,Lr(t,D,k,le),a&&Cr){M=0;break e}break;default:le=Gt,Gt=0,ti=null,Lr(t,D,k,le)}}Ty(),M=sn;break}catch(ve){zg(t,ve)}while(!0);return n&&t.shellSuspendCounter++,sa=As=null,Ft=o,P.H=u,P.A=d,bt===null&&(Qt=null,At=0,Yl()),M}function Ty(){for(;bt!==null;)Gg(bt)}function Ay(t,n){var a=Ft;Ft|=2;var o=Fg(),u=Hg();Qt!==t||At!==n?(Tc=null,Ec=ot()+500,Ur(t,n)):Cr=Le(t,n);e:do try{if(Gt!==0&&bt!==null){n=bt;var d=ti;t:switch(Gt){case 1:Gt=0,ti=null,Lr(t,n,d,1);break;case 2:case 9:if(Qm(d)){Gt=0,ti=null,Vg(n);break}n=function(){Gt!==2&&Gt!==9||Qt!==t||(Gt=7),ki(t)},d.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:Qm(d)?(Gt=0,ti=null,Vg(n)):(Gt=0,ti=null,Lr(t,n,d,7));break;case 5:var M=null;switch(bt.tag){case 26:M=bt.memoizedState;case 5:case 27:var D=bt;if(M?wv(M):D.stateNode.complete){Gt=0,ti=null;var k=D.sibling;if(k!==null)bt=k;else{var le=D.return;le!==null?(bt=le,Rc(le)):bt=null}break t}}Gt=0,ti=null,Lr(t,n,d,5);break;case 6:Gt=0,ti=null,Lr(t,n,d,6);break;case 8:_d(),sn=6;break e;default:throw Error(r(462))}}wy();break}catch(ve){zg(t,ve)}while(!0);return sa=As=null,P.H=o,P.A=u,Ft=a,bt!==null?0:(Qt=null,At=0,Yl(),sn)}function wy(){for(;bt!==null&&!Ht();)Gg(bt)}function Gg(t){var n=fg(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Rc(t):bt=n}function Vg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=sg(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=sg(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:Of(n);default:hg(a,n),n=bt=Hm(n,ma),n=fg(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Rc(t):bt=n}function Lr(t,n,a,o){sa=As=null,Of(n),Mr=null,Lo=0;var u=n.return;try{if(my(t,u,n,a,At)){sn=1,mc(t,fi(a,t.current)),bt=null;return}}catch(d){if(u!==null)throw bt=u,d;sn=1,mc(t,fi(a,t.current)),bt=null;return}n.flags&32768?(Rt||o===1?t=!0:Cr||(At&536870912)!==0?t=!1:(Ya=t=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),kg(n,t)):Rc(n)}function Rc(t){var n=t;do{if((n.flags&32768)!==0){kg(n,Ya);return}t=n.return;var a=_y(n.alternate,n,ma);if(a!==null){bt=a;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=t}while(n!==null);sn===0&&(sn=5)}function kg(t,n){do{var a=xy(t.alternate,t);if(a!==null){a.flags&=32767,bt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){bt=t;return}bt=t=a}while(t!==null);sn=6,bt=null}function Wg(t,n,a,o,u,d,M,D,k){t.cancelPendingCommit=null;do Cc();while(xn!==0);if((Ft&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=of,Wt(t,a,d,M,D,k),t===Qt&&(bt=Qt=null,At=0),Nr=n,ja=t,ga=a,md=d,gd=u,Lg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ny($,function(){return Kg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=G.p,G.p=2,M=Ft,Ft|=4;try{Sy(t,n,a)}finally{Ft=M,G.p=u,P.T=o}}xn=1,Xg(),qg(),Yg()}}function Xg(){if(xn===1){xn=0;var t=ja,n=Nr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=Ft;Ft|=4;try{Tg(n,t);var d=Nd,M=Nm(t.containerInfo),D=d.focusedElem,k=d.selectionRange;if(M!==D&&D&&D.ownerDocument&&Dm(D.ownerDocument.documentElement,D)){if(k!==null&&tf(D)){var le=k.start,ve=k.end;if(ve===void 0&&(ve=le),"selectionStart"in D)D.selectionStart=le,D.selectionEnd=Math.min(ve,D.value.length);else{var Se=D.ownerDocument||document,ue=Se&&Se.defaultView||window;if(ue.getSelection){var pe=ue.getSelection(),Qe=D.textContent.length,ct=Math.min(k.start,Qe),Zt=k.end===void 0?ct:Math.min(k.end,Qe);!pe.extend&&ct>Zt&&(M=Zt,Zt=ct,ct=M);var te=Cm(D,ct),j=Cm(D,Zt);if(te&&j&&(pe.rangeCount!==1||pe.anchorNode!==te.node||pe.anchorOffset!==te.offset||pe.focusNode!==j.node||pe.focusOffset!==j.offset)){var oe=Se.createRange();oe.setStart(te.node,te.offset),pe.removeAllRanges(),ct>Zt?(pe.addRange(oe),pe.extend(j.node,j.offset)):(oe.setEnd(j.node,j.offset),pe.addRange(oe))}}}}for(Se=[],pe=D;pe=pe.parentNode;)pe.nodeType===1&&Se.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Se.length;D++){var xe=Se[D];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Gc=!!Dd,Nd=Dd=null}finally{Ft=u,G.p=o,P.T=a}}t.current=n,xn=2}}function qg(){if(xn===2){xn=0;var t=ja,n=Nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=G.p;G.p=2;var u=Ft;Ft|=4;try{Sg(t,n.alternate,n)}finally{Ft=u,G.p=o,P.T=a}}xn=3}}function Yg(){if(xn===4||xn===3){xn=0,W();var t=ja,n=Nr,a=ga,o=Lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Nr=ja=null,Zg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ka=null),vo(a),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=G.p,G.p=2,P.T=null;try{for(var d=t.onRecoverableError,M=0;M<o.length;M++){var D=o[M];d(D.value,{componentStack:D.stack})}}finally{P.T=n,G.p=u}}(ga&3)!==0&&Cc(),ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===vd?jo++:(jo=0,vd=t):jo=0,Qo(0)}}function Zg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,No(n)))}function Cc(){return Xg(),qg(),Yg(),Kg()}function Kg(){if(xn!==5)return!1;var t=ja,n=md;md=0;var a=vo(ga),o=P.T,u=G.p;try{G.p=32>a?32:a,P.T=null,a=gd,gd=null;var d=ja,M=ga;if(xn=0,Nr=ja=null,ga=0,(Ft&6)!==0)throw Error(r(331));var D=Ft;if(Ft|=4,Dg(d.current),wg(d,d.current,M,a),Ft=D,Qo(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(me,d)}catch{}return!0}finally{G.p=u,P.T=o,Zg(t,n)}}function jg(t,n,a){n=fi(a,n),n=Kf(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(Ke(t,2),ki(t))}function Vt(t,n,a){if(t.tag===3)jg(t,t,a);else for(;n!==null;){if(n.tag===3){jg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ka===null||!Ka.has(o))){t=fi(a,t),a=Q0(2),o=ka(n,a,2),o!==null&&(J0(a,o,n,t),Ke(o,2),ki(o));break}}n=n.return}}function Sd(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new by;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(dd=!0,u.add(a),t=Ry.bind(null,t,n,a),n.then(t,t))}function Ry(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(At&a)===a&&(sn===4||sn===3&&(At&62914560)===At&&300>ot()-bc?(Ft&2)===0&&Ur(t,0):hd|=a,Dr===At&&(Dr=0)),ki(t)}function Qg(t,n){n===0&&(n=Ae()),t=bs(t,n),t!==null&&(Ke(t,n),ki(t))}function Cy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(t,a)}function Dy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Qg(t,a)}function Ny(t,n){return Kt(t,n)}var Dc=null,Or=null,yd=!1,Nc=!1,Md=!1,Ja=0;function ki(t){t!==Or&&t.next===null&&(Or===null?Dc=Or=t:Or=Or.next=t),Nc=!0,yd||(yd=!0,Ly())}function Qo(t,n){if(!Md&&Nc){Md=!0;do for(var a=!1,o=Dc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,D=o.pingedLanes;d=(1<<31-Fe(42|t)+1)-1,d&=u&~(M&~D),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,tv(o,d))}else d=At,d=_e(o,o===Qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Le(o,d)||(a=!0,tv(o,d));o=o.next}while(a);Md=!1}}function Uy(){Jg()}function Jg(){Nc=yd=!1;var t=0;Ja!==0&&ky()&&(t=Ja);for(var n=ot(),a=null,o=Dc;o!==null;){var u=o.next,d=$g(o,n);d===0?(o.next=null,a===null?Dc=u:a.next=u,u===null&&(Or=a)):(a=o,(t!==0||(d&3)!==0)&&(Nc=!0)),o=u}xn!==0&&xn!==5||Qo(t),Ja!==0&&(Ja=0)}function $g(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var M=31-Fe(d),D=1<<M,k=u[M];k===-1?((D&a)===0||(D&o)!==0)&&(u[M]=He(D,n)):k<=n&&(t.expiredLanes|=D),d&=~D}if(n=Qt,a=At,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Tt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Le(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Tt(o),vo(a)){case 2:case 8:a=b;break;case 32:a=$;break;case 268435456:a=he;break;default:a=$}return o=ev.bind(null,t),a=Kt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Tt(o),t.callbackPriority=2,t.callbackNode=null,2}function ev(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cc()&&t.callbackNode!==a)return null;var o=At;return o=_e(t,t===Qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Pg(t,o,n),$g(t,ot()),t.callbackNode!=null&&t.callbackNode===a?ev.bind(null,t):null)}function tv(t,n){if(Cc())return null;Pg(t,n,!0)}function Ly(){Xy(function(){(Ft&6)!==0?Kt(B,Uy):Jg()})}function bd(){if(Ja===0){var t=xr;t===0&&(t=it,it<<=1,(it&261888)===0&&(it=256)),Ja=t}return Ja}function nv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bi(""+t)}function iv(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Oy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=nv((u[En]||null).action),M=o.submitter;M&&(n=(n=M[En]||null)?nv(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var D=new kl("action","action",null,o,u);t.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var k=M?iv(u,M):new FormData(u);kf(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(D.preventDefault(),k=M?iv(u,M):new FormData(u),kf(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var Ed=0;Ed<rf.length;Ed++){var Td=rf[Ed],Py=Td.toLowerCase(),Iy=Td[0].toUpperCase()+Td.slice(1);Ei(Py,"on"+Iy)}Ei(Om,"onAnimationEnd"),Ei(Pm,"onAnimationIteration"),Ei(Im,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(JS,"onTransitionRun"),Ei($S,"onTransitionStart"),Ei(ey,"onTransitionCancel"),Ei(zm,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jo));function av(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var D=o[M],k=D.instance,le=D.currentTarget;if(D=D.listener,k!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=le;try{d(u)}catch(ve){ql(ve)}u.currentTarget=null,d=k}else for(M=0;M<o.length;M++){if(D=o[M],k=D.instance,le=D.currentTarget,D=D.listener,k!==d&&u.isPropagationStopped())break e;d=D,u.currentTarget=le;try{d(u)}catch(ve){ql(ve)}u.currentTarget=null,d=k}}}}function Et(t,n){var a=n[vs];a===void 0&&(a=n[vs]=new Set);var o=t+"__bubble";a.has(o)||(sv(n,t,2,!1),a.add(o))}function Ad(t,n,a){var o=0;n&&(o|=4),sv(a,t,o,n)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function wd(t){if(!t[Uc]){t[Uc]=!0,Fl.forEach(function(a){a!=="selectionchange"&&(zy.has(a)||Ad(a,!1,t),Ad(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Uc]||(n[Uc]=!0,Ad("selectionchange",!1,n))}}function sv(t,n,a,o){switch(Ov(n)){case 2:var u=fM;break;case 8:u=dM;break;default:u=Vd}a=u.bind(null,n,a,t),u=void 0,!qu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Rd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var D=o.stateNode.containerInfo;if(D===u)break;if(M===4)for(M=o.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;D!==null;){if(M=ea(D),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){o=d=M;continue e}D=D.parentNode}}o=o.return}um(function(){var le=d,ve=Wu(a),Se=[];e:{var ue=Bm.get(t);if(ue!==void 0){var pe=kl,Qe=t;switch(t){case"keypress":if(Gl(a)===0)break e;case"keydown":case"keyup":pe=DS;break;case"focusin":Qe="focus",pe=ju;break;case"focusout":Qe="blur",pe=ju;break;case"beforeblur":case"afterblur":pe=ju;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=_S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=LS;break;case Om:case Pm:case Im:pe=yS;break;case zm:pe=PS;break;case"scroll":case"scrollend":pe=gS;break;case"wheel":pe=zS;break;case"copy":case"cut":case"paste":pe=bS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=mm;break;case"toggle":case"beforetoggle":pe=FS}var ct=(n&4)!==0,Zt=!ct&&(t==="scroll"||t==="scrollend"),te=ct?ue!==null?ue+"Capture":null:ue;ct=[];for(var j=le,oe;j!==null;){var xe=j;if(oe=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||oe===null||te===null||(xe=So(j,te),xe!=null&&ct.push($o(j,xe,oe))),Zt)break;j=j.return}0<ct.length&&(ue=new pe(ue,Qe,null,a,ve),Se.push({event:ue,listeners:ct}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",ue&&a!==ku&&(Qe=a.relatedTarget||a.fromElement)&&(ea(Qe)||Qe[Hn]))break e;if((pe||ue)&&(ue=ve.window===ve?ve:(ue=ve.ownerDocument)?ue.defaultView||ue.parentWindow:window,pe?(Qe=a.relatedTarget||a.toElement,pe=le,Qe=Qe?ea(Qe):null,Qe!==null&&(Zt=c(Qe),ct=Qe.tag,Qe!==Zt||ct!==5&&ct!==27&&ct!==6)&&(Qe=null)):(pe=null,Qe=le),pe!==Qe)){if(ct=hm,xe="onMouseLeave",te="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ct=mm,xe="onPointerLeave",te="onPointerEnter",j="pointer"),Zt=pe==null?ue:xs(pe),oe=Qe==null?ue:xs(Qe),ue=new ct(xe,j+"leave",pe,a,ve),ue.target=Zt,ue.relatedTarget=oe,xe=null,ea(ve)===le&&(ct=new ct(te,j+"enter",Qe,a,ve),ct.target=oe,ct.relatedTarget=Zt,xe=ct),Zt=xe,pe&&Qe)t:{for(ct=By,te=pe,j=Qe,oe=0,xe=te;xe;xe=ct(xe))oe++;xe=0;for(var st=j;st;st=ct(st))xe++;for(;0<oe-xe;)te=ct(te),oe--;for(;0<xe-oe;)j=ct(j),xe--;for(;oe--;){if(te===j||j!==null&&te===j.alternate){ct=te;break t}te=ct(te),j=ct(j)}ct=null}else ct=null;pe!==null&&rv(Se,ue,pe,ct,!1),Qe!==null&&Zt!==null&&rv(Se,Zt,Qe,ct,!0)}}e:{if(ue=le?xs(le):window,pe=ue.nodeName&&ue.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ue.type==="file")var Ot=bm;else if(ym(ue))if(Em)Ot=KS;else{Ot=YS;var Je=qS}else pe=ue.nodeName,!pe||pe.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?le&&li(le.elementType)&&(Ot=bm):Ot=ZS;if(Ot&&(Ot=Ot(t,le))){Mm(Se,Ot,a,ve);break e}Je&&Je(t,ue,le),t==="focusout"&&le&&ue.type==="number"&&le.memoizedProps.value!=null&&_n(ue,"number",ue.value)}switch(Je=le?xs(le):window,t){case"focusin":(ym(Je)||Je.contentEditable==="true")&&(fr=Je,nf=le,Ro=null);break;case"focusout":Ro=nf=fr=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,Um(Se,a,ve);break;case"selectionchange":if(QS)break;case"keydown":case"keyup":Um(Se,a,ve)}var gt;if(Ju)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else ur?xm(t,a)&&(wt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(gm&&a.locale!=="ko"&&(ur||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&ur&&(gt=fm()):(Ia=ve,Yu="value"in Ia?Ia.value:Ia.textContent,ur=!0)),Je=Lc(le,wt),0<Je.length&&(wt=new pm(wt,t,null,a,ve),Se.push({event:wt,listeners:Je}),gt?wt.data=gt:(gt=Sm(a),gt!==null&&(wt.data=gt)))),(gt=GS?VS(t,a):kS(t,a))&&(wt=Lc(le,"onBeforeInput"),0<wt.length&&(Je=new pm("onBeforeInput","beforeinput",null,a,ve),Se.push({event:Je,listeners:wt}),Je.data=gt)),Oy(Se,t,le,a,ve)}av(Se,n)})}function $o(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Lc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=So(t,a),u!=null&&o.unshift($o(t,u,d)),u=So(t,n),u!=null&&o.push($o(t,u,d))),t.tag===3)return o;t=t.return}return[]}function By(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rv(t,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var D=a,k=D.alternate,le=D.stateNode;if(D=D.tag,k!==null&&k===o)break;D!==5&&D!==26&&D!==27||le===null||(k=le,u?(le=So(a,d),le!=null&&M.unshift($o(a,le,k))):u||(le=So(a,d),le!=null&&M.push($o(a,le,k)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var Fy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function ov(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(Hy,"")}function lv(t,n){return n=ov(n),ov(t)===n}function Yt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||On(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&On(t,""+o);break;case"className":Pe(t,"class",o);break;case"tabIndex":Pe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(t,a,o);break;case"style":tn(t,o,d);break;case"data":if(n!=="object"){Pe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=bi(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Yt(t,n,"name",u.name,u,null),Yt(t,n,"formEncType",u.formEncType,u,null),Yt(t,n,"formMethod",u.formMethod,u,null),Yt(t,n,"formTarget",u.formTarget,u,null)):(Yt(t,n,"encType",u.encType,u,null),Yt(t,n,"method",u.method,u,null),Yt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=bi(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ci);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=bi(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),We(t,"popover",o);break;case"xlinkActuate":Ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ve(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ve(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ve(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ve(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":We(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xt.get(a)||a,We(t,a,o))}}function Cd(t,n,a,o,u,d){switch(a){case"style":tn(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?On(t,o):(typeof o=="number"||typeof o=="bigint")&&On(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ci);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[En]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):We(t,a,o)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(t,n,d,M,a,null)}}u&&Yt(t,n,"srcSet",a.srcSet,a,null),o&&Yt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var D=d=M=u=null,k=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":M=ve;break;case"checked":k=ve;break;case"defaultChecked":le=ve;break;case"value":d=ve;break;case"defaultValue":D=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(r(137,n));break;default:Yt(t,n,o,ve,a,null)}}Xe(t,d,D,k,le,M,u,!1);return;case"select":Et("invalid",t),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":d=D;break;case"defaultValue":M=D;break;case"multiple":o=D;default:Yt(t,n,u,D,a,null)}n=d,a=M,t.multiple=!!o,n!=null?_t(t,!!o,n,!1):a!=null&&_t(t,!!o,a,!0);return;case"textarea":Et("invalid",t),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(D=a[M],D!=null))switch(M){case"value":o=D;break;case"defaultValue":u=D;break;case"children":d=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:Yt(t,n,M,D,a,null)}jn(t,o,u,d);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Yt(t,n,k,o,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Jo.length;o++)Et(Jo[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(t,n,le,o,a,null)}return;default:if(li(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&Cd(t,n,ve,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&Yt(t,n,D,o,a,null))}function Gy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,D=null,k=null,le=null,ve=null;for(pe in a){var Se=a[pe];if(a.hasOwnProperty(pe)&&Se!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":k=Se;default:o.hasOwnProperty(pe)||Yt(t,n,pe,null,o,Se)}}for(var ue in o){var pe=o[ue];if(Se=a[ue],o.hasOwnProperty(ue)&&(pe!=null||Se!=null))switch(ue){case"type":d=pe;break;case"name":u=pe;break;case"checked":le=pe;break;case"defaultChecked":ve=pe;break;case"value":M=pe;break;case"defaultValue":D=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:pe!==Se&&Yt(t,n,ue,pe,o,Se)}}fn(t,M,D,k,le,ve,d,u);return;case"select":pe=M=D=ue=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":pe=k;default:o.hasOwnProperty(d)||Yt(t,n,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":ue=d;break;case"defaultValue":D=d;break;case"multiple":M=d;default:d!==k&&Yt(t,n,u,d,o,k)}n=D,a=M,o=pe,ue!=null?_t(t,!!a,ue,!1):!!o!=!!a&&(n!=null?_t(t,!!a,n,!0):_t(t,!!a,a?[]:"",!1));return;case"textarea":pe=ue=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Yt(t,n,D,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":ue=u;break;case"defaultValue":pe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Yt(t,n,M,u,o,d)}Ln(t,ue,pe);return;case"option":for(var Qe in a)if(ue=a[Qe],a.hasOwnProperty(Qe)&&ue!=null&&!o.hasOwnProperty(Qe))switch(Qe){case"selected":t.selected=!1;break;default:Yt(t,n,Qe,null,o,ue)}for(k in o)if(ue=o[k],pe=a[k],o.hasOwnProperty(k)&&ue!==pe&&(ue!=null||pe!=null))switch(k){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Yt(t,n,k,ue,o,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)ue=a[ct],a.hasOwnProperty(ct)&&ue!=null&&!o.hasOwnProperty(ct)&&Yt(t,n,ct,null,o,ue);for(le in o)if(ue=o[le],pe=a[le],o.hasOwnProperty(le)&&ue!==pe&&(ue!=null||pe!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Yt(t,n,le,ue,o,pe)}return;default:if(li(n)){for(var Zt in a)ue=a[Zt],a.hasOwnProperty(Zt)&&ue!==void 0&&!o.hasOwnProperty(Zt)&&Cd(t,n,Zt,void 0,o,ue);for(ve in o)ue=o[ve],pe=a[ve],!o.hasOwnProperty(ve)||ue===pe||ue===void 0&&pe===void 0||Cd(t,n,ve,ue,o,pe);return}}for(var te in a)ue=a[te],a.hasOwnProperty(te)&&ue!=null&&!o.hasOwnProperty(te)&&Yt(t,n,te,null,o,ue);for(Se in o)ue=o[Se],pe=a[Se],!o.hasOwnProperty(Se)||ue===pe||ue==null&&pe==null||Yt(t,n,Se,ue,o,pe)}function cv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,M=u.initiatorType,D=u.duration;if(d&&D&&cv(M)){for(M=0,D=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],le=k.startTime;if(le>D)break;var ve=k.transferSize,Se=k.initiatorType;ve&&cv(Se)&&(k=k.responseEnd,M+=ve*(k<D?1:(D-le)/(k-le)))}if(--o,n+=8*(d+M)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dd=null,Nd=null;function Oc(t){return t.nodeType===9?t:t.ownerDocument}function uv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ud(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ld=null;function ky(){var t=window.event;return t&&t.type==="popstate"?t===Ld?!1:(Ld=t,!0):(Ld=null,!1)}var dv=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(t){return hv.resolve(null).then(t).catch(qy)}:dv;function qy(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function pv(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Br(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")el(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,el(a);for(var d=a.firstChild;d;){var M=d.nextSibling,D=d.nodeName;d[Ua]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=M}}else a==="body"&&el(t.ownerDocument.body);a=u}while(a);Br(n)}function mv(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Od(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Od(a),La(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Yy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ua])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function Zy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function gv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function Pd(t){return t.data==="$?"||t.data==="$~"}function Id(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ky(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var zd=null;function vv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function _v(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function xv(t,n,a){switch(n=Oc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function el(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);La(t)}var vi=new Map,Sv=new Set;function Pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var va=G.d;G.d={f:jy,r:Qy,D:Jy,C:$y,L:eM,m:tM,X:iM,S:nM,M:aM};function jy(){var t=va.f(),n=Ac();return t||n}function Qy(t){var n=ta(t);n!==null&&n.tag===5&&n.type==="form"?z0(n):va.r(t)}var Pr=typeof document>"u"?null:document;function yv(t,n,a){var o=Pr;if(o&&typeof n=="string"&&n){var u=vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Sv.has(u)||(Sv.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),un(n),o.head.appendChild(n)))}}function Jy(t){va.D(t),yv("dns-prefetch",t,null)}function $y(t,n){va.C(t,n),yv("preconnect",t,n)}function eM(t,n,a){va.L(t,n,a);var o=Pr;if(o&&t&&n){var u='link[rel="preload"][as="'+vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vt(a.imageSizes)+'"]')):u+='[href="'+vt(t)+'"]';var d=u;switch(n){case"style":d=Ir(t);break;case"script":d=zr(t)}vi.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(tl(d))||n==="script"&&o.querySelector(nl(d))||(n=o.createElement("link"),Rn(n,"link",t),un(n),o.head.appendChild(n)))}}function tM(t,n){va.m(t,n);var a=Pr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vt(o)+'"][href="'+vt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=zr(t)}if(!vi.has(d)&&(t=v({rel:"modulepreload",href:t},n),vi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nl(d)))return}o=a.createElement("link"),Rn(o,"link",t),un(o),a.head.appendChild(o)}}}function nM(t,n,a){va.S(t,n,a);var o=Pr;if(o&&t){var u=Oa(o).hoistableStyles,d=Ir(t);n=n||"default";var M=u.get(d);if(!M){var D={loading:0,preload:null};if(M=o.querySelector(tl(d)))D.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(d))&&Bd(t,a);var k=M=o.createElement("link");un(k),Rn(k,"link",t),k._p=new Promise(function(le,ve){k.onload=le,k.onerror=ve}),k.addEventListener("load",function(){D.loading|=1}),k.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Ic(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:D},u.set(d,M)}}}function iM(t,n){va.X(t,n);var a=Pr;if(a&&t){var o=Oa(a).hoistableScripts,u=zr(t),d=o.get(u);d||(d=a.querySelector(nl(u)),d||(t=v({src:t,async:!0},n),(n=vi.get(u))&&Fd(t,n),d=a.createElement("script"),un(d),Rn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function aM(t,n){va.M(t,n);var a=Pr;if(a&&t){var o=Oa(a).hoistableScripts,u=zr(t),d=o.get(u);d||(d=a.querySelector(nl(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&Fd(t,n),d=a.createElement("script"),un(d),Rn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Mv(t,n,a,o){var u=(u=Ge.current)?Pc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ir(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ir(a.href);var d=Oa(u).hoistableStyles,M=d.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,M),(d=u.querySelector(tl(t)))&&!d._p&&(M.instance=d,M.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),d||sM(u,t,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=zr(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ir(t){return'href="'+vt(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function bv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function sM(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),un(n),t.head.appendChild(n))}function zr(t){return'[src="'+vt(t)+'"]'}function nl(t){return"script[async]"+t}function Ev(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+vt(a.href)+'"]');if(o)return n.instance=o,un(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),un(o),Rn(o,"style",u),Ic(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ir(a.href);var d=t.querySelector(tl(u));if(d)return n.state.loading|=4,n.instance=d,un(d),d;o=bv(a),(u=vi.get(u))&&Bd(o,u),d=(t.ownerDocument||t).createElement("link"),un(d);var M=d;return M._p=new Promise(function(D,k){M.onload=D,M.onerror=k}),Rn(d,"link",o),n.state.loading|=4,Ic(d,a.precedence,t),n.instance=d;case"script":return d=zr(a.src),(u=t.querySelector(nl(d)))?(n.instance=u,un(u),u):(o=a,(u=vi.get(d))&&(o=v({},a),Fd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),un(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ic(o,a.precedence,t));return n.instance}function Ic(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var D=o[M];if(D.dataset.precedence===n)d=D;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Bd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zc=null;function Tv(t,n,a){if(zc===null){var o=new Map,u=zc=new Map;u.set(a,o)}else u=zc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ua]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=t+M;var D=o.get(M);D?D.push(d):o.set(M,[d])}}return o}function Av(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function rM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function oM(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ir(o.href),d=n.querySelector(tl(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Bc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,un(d);return}d=n.ownerDocument||n,o=bv(o),(u=vi.get(u))&&Bd(o,u),d=d.createElement("link"),un(d);var M=d;M._p=new Promise(function(D,k){M.onload=D,M.onerror=k}),Rn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Bc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hd=0;function lM(t,n){return t.stylesheets&&t.count===0&&Hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Hd===0&&(Hd=62500*Vy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Hc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Hd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fc=null;function Hc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fc=new Map,n.forEach(cM,t),Fc=null,Bc.call(t))}function cM(t,n){if(!(n.state.loading&4)){var a=Fc.get(t);if(a)var o=a.get(null);else{a=new Map,Fc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=Bc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var il={$$typeof:I,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function uM(t,n,a,o,u,d,M,D,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$e(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$e(0),this.hiddenUpdates=$e(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Rv(t,n,a,o,u,d,M,D,k,le,ve,Se){return t=new uM(t,n,a,M,k,le,ve,Se,D),n=1,d===!0&&(n|=24),d=Jn(3,null,null,n),t.current=d,d.stateNode=t,n=xf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},bf(d),t}function Cv(t){return t?(t=pr,t):pr}function Dv(t,n,a,o,u,d){u=Cv(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ka(t,o,n),a!==null&&(qn(a,t,n),Po(a,t,n))}function Nv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Gd(t,n){Nv(t,n),(t=t.alternate)&&Nv(t,n)}function Uv(t){if(t.tag===13||t.tag===31){var n=bs(t,67108864);n!==null&&qn(n,t,67108864),Gd(t,67108864)}}function Lv(t){if(t.tag===13||t.tag===31){var n=ii();n=go(n);var a=bs(t,n);a!==null&&qn(a,t,n),Gd(t,n)}}var Gc=!0;function fM(t,n,a,o){var u=P.T;P.T=null;var d=G.p;try{G.p=2,Vd(t,n,a,o)}finally{G.p=d,P.T=u}}function dM(t,n,a,o){var u=P.T;P.T=null;var d=G.p;try{G.p=8,Vd(t,n,a,o)}finally{G.p=d,P.T=u}}function Vd(t,n,a,o){if(Gc){var u=kd(o);if(u===null)Rd(t,n,o,Vc,a),Pv(t,o);else if(pM(u,t,n,a,o))o.stopPropagation();else if(Pv(t,o),n&4&&-1<hM.indexOf(t)){for(;u!==null;){var d=ta(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Ne(d.pendingLanes);if(M!==0){var D=d;for(D.pendingLanes|=2,D.entangledLanes|=2;M;){var k=1<<31-Fe(M);D.entanglements[1]|=k,M&=~k}ki(d),(Ft&6)===0&&(Ec=ot()+500,Qo(0))}}break;case 31:case 13:D=bs(d,2),D!==null&&qn(D,d,2),Ac(),Gd(d,2)}if(d=kd(o),d===null&&Rd(t,n,o,Vc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Rd(t,n,o,null,a)}}function kd(t){return t=Wu(t),Wd(t)}var Vc=null;function Wd(t){if(Vc=null,t=ea(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vc=t,null}function Ov(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lt()){case B:return 2;case b:return 8;case $:case ie:return 32;case he:return 268435456;default:return 32}default:return 32}}var Xd=!1,es=null,ts=null,ns=null,al=new Map,sl=new Map,is=[],hM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pv(t,n){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":al.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(n.pointerId)}}function rl(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=ta(n),n!==null&&Uv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function pM(t,n,a,o,u){switch(n){case"focusin":return es=rl(es,t,n,a,o,u),!0;case"dragenter":return ts=rl(ts,t,n,a,o,u),!0;case"mouseover":return ns=rl(ns,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return al.set(d,rl(al.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,sl.set(d,rl(sl.get(d)||null,t,n,a,o,u)),!0}return!1}function Iv(t){var n=ea(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,or(t.priority,function(){Lv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,or(t.priority,function(){Lv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=kd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);ku=o,a.target.dispatchEvent(o),ku=null}else return n=ta(a),n!==null&&Uv(n),t.blockedOn=a,!1;n.shift()}return!0}function zv(t,n,a){kc(t)&&a.delete(n)}function mM(){Xd=!1,es!==null&&kc(es)&&(es=null),ts!==null&&kc(ts)&&(ts=null),ns!==null&&kc(ns)&&(ns=null),al.forEach(zv),sl.forEach(zv)}function Wc(t,n){t.blockedOn===n&&(t.blockedOn=null,Xd||(Xd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,mM)))}var Xc=null;function Bv(t){Xc!==t&&(Xc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Xc===t&&(Xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Wd(o||a)===null)continue;break}var d=ta(a);d!==null&&(t.splice(n,3),n-=3,kf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Br(t){function n(k){return Wc(k,t)}es!==null&&Wc(es,t),ts!==null&&Wc(ts,t),ns!==null&&Wc(ns,t),al.forEach(n),sl.forEach(n);for(var a=0;a<is.length;a++){var o=is[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)Iv(a),a.blockedOn===null&&is.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[En]||null;if(typeof d=="function")M||Bv(a);else if(M){var D=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[En]||null)D=M.formAction;else if(Wd(u)!==null)continue}else D=M.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),Bv(a)}}}function Fv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function qd(t){this._internalRoot=t}qc.prototype.render=qd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ii();Dv(a,o,t,n,null,null)},qc.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Dv(t.current,2,null,t,null,null),Ac(),n[Hn]=null}};function qc(t){this._internalRoot=t}qc.prototype.unstable_scheduleHydration=function(t){if(t){var n=_o();t={blockedOn:null,target:t,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,t),a===0&&Iv(t)}};var Hv=e.version;if(Hv!=="19.2.3")throw Error(r(527,Hv,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var gM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{me=Yc.inject(gM),ge=Yc}catch{}}return ol.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Y0,d=Z0,M=K0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=Rv(t,1,!1,null,null,a,o,null,u,d,M,Fv),t[Hn]=n.current,wd(t),new qd(n)},ol.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=Y0,M=Z0,D=K0,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=Rv(t,1,!0,n,a??null,o,u,k,d,M,D,Fv),n.context=Cv(null),a=n.current,o=ii(),o=go(o),u=Va(o),u.callback=null,ka(a,u,o),a=o,n.current.lanes=a,Ke(n,a),ki(n),t[Hn]=n.current,wd(t),new qc(n)},ol.version="19.2.3",ol}var Wv;function CM(){if(Wv)return Zd.exports;Wv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zd.exports=RM(),Zd.exports}var DM=CM();function Qd(s,e,i){return s+(e-s)*i}function ux(s){return s-Math.floor(s)}function Jd(s,e){const i=Math.floor(s),r=Math.floor(e);let l=s-i,c=e-r;l=l*l*(3-2*l),c=c*c*(3-2*c);const f=Mi(i,r),h=Mi(i+1,r),p=Mi(i,r+1),m=Mi(i+1,r+1);return f+(h-f)*l+(p-f)*c+(f-h-p+m)*l*c}function Mi(s,e){const i=Math.sin(s*12.9898+e*78.233)*43758.5453;return i-Math.floor(i)}function Fp(s,e){const i=Math.PI*(3-Math.sqrt(5)),r=1-2*(s+.5)/e,l=Math.sqrt(1-r*r),c=s*i;return[l*Math.cos(c),r,l*Math.sin(c)]}function NM(s,e){return Math.atan2(Math.sin(s-e),Math.cos(s-e))}function ar(s,e,i,r,l){const c=Math.sin(e),f=Math.cos(e),h=Math.sin(s),p=Math.cos(s);return(m,_,v)=>{const g=m*p+v*h,S=-m*h+v*p,T=_*f-S*c,N=_*c+S*f;return[i+g*l,r-T*l,N]}}function fx(s,e,i,r){if(!r){const c=Math.round((i?1-s:s)*255);return`rgba(${c},${c},${c},${e})`}const l=c=>Math.round(i?c*(1-s):c+(255-c)*s);return`rgba(${l(r.r)},${l(r.g)},${l(r.b)},${e})`}function UM(s,e,i,r=.3,l){for(const c of e){const f=c.a??1,h=Math.min(1,Math.max(0,c.white));s.fillStyle=fx(h,f,i,l),s.beginPath(),s.arc(c.x,c.y,c.r,0,Math.PI*2),s.fill()}}function LM(s,e,i,r){for(const l of e){const c=l.a??1,f=Math.min(1,Math.max(0,l.white));s.strokeStyle=fx(f,c,i,r),s.lineWidth=l.w,s.beginPath(),s.moveTo(l.x1,l.y1),s.lineTo(l.x2,l.y2),s.stroke()}}function gs(s,e,i=.3){const r=[];for(const l of s)(l.a??1)<.02||(l.r=Math.max(i,l.r),r.push(l));return r.sort((l,c)=>l.z-c.z),{dots:r,lines:e.filter(l=>(l.a??1)>=.02)}}function dx(s,e,i,r){e.lines.length&&LM(s,e.lines,i,r),UM(s,e.dots,i,.3,r)}function sr(s,e){return(s/300)**e}const OM=[["latRings","lonDensity"],["rings","lonDensity"],["lanes","segs"]],PM=["orbitN","ghostN","nodeN","strandN","signals"],IM=["iconD"],zM=["rBase","rDepth","rActive","rDot","ghostR","partR","partRDepth","nodeR","nodeRDepth"];function hx(s,e){const i={...s},r=new Set,l=Math.sqrt(e);for(const[c,f]of OM){const h=i[c],p=i[f];h!=null&&p!=null&&!r.has(c)&&!r.has(f)&&(i[c]=Math.max(2,Math.round(h*l)),i[f]=Math.max(2,Math.round(p*l)),r.add(c),r.add(f))}for(const c of PM){const f=i[c];f!=null&&f!==0&&!r.has(c)&&(i[c]=Math.max(1,Math.round(f*e)))}for(const c of IM){const f=i[c];f!=null&&(i[c]=Math.max(.02,f*e))}return i}function px(s,e){const i={...s};for(const r of zM){const l=i[r];l!=null&&(i[r]=l*e)}return i.rSizeMul=(i.rSizeMul??1)*e,i}const BM={globe:{latRings:17,lonDensity:44,rBase:.6,rDepth:1.7,rBoost:1,inkFar:.62,inkSpan:.54,rsPow:.6,rMin:.3},orbits:{orbitN:12,ghostN:40,ghostR:.9,ghostA:.5,particles:3,partR:1.2,partRDepth:1.6,rsPow:.6,rMin:.3},rubik:{latRings:15,lonDensity:40,moveCount:14,rBase:.6,rDepth:1.7,rActive:.3,inkFar:.62,inkSpan:.54,rsPow:.6,rMin:.3},wave:{rings:15,lonDensity:40,rBase:.6,rDepth:1.7,rsPow:.6,rMin:.3},web:{nodeN:30,thr:.72,signals:5,nodeR:1.4,nodeRDepth:1.8,lineW:.8,rsPow:.6,rMin:.3},braid:{strandN:52,turns:3,ghostN:150,rBase:1.2,rDepth:1.8,rsPow:.6,rMin:.3},ribbon:{lanes:5,segs:88,ghostN:150,rBase:1.1,rDepth:1.7,rsPow:.6,rMin:.3},ring:{lanes:5,segs:88,ghostN:0,faceOn:1,rBase:1.1,rDepth:1.7,rsPow:.6,rMin:.3},morph:{rDot:.021,iconD:1,rMin:.25}},FM=(s,e,i)=>{const r=s/2,l=s/2,c=s/2*.76,f=ar(e*.4,.3,r,l,1),h=sr(s,i.rsPow??.6),p=[],m=i.ghostN??150;for(let g=0;g<m;g++){const S=Fp(g,m),[T,N,y]=f(S[0]*c,S[1]*c,S[2]*c),x=(y/c+1)/2;p.push({x:T,y:N,z:y,r:.8*h,white:.78,a:.1+.22*x})}const _=i.strandN??52,v=i.turns??3;for(let g=0;g<3;g++){const S=g/3*2*Math.PI;for(let T=0;T<_;T++){const N=(ux(T/_+e*.045)*2-1)*.96,y=Math.sqrt(Math.max(0,1-N*N)),x=Math.min(1,(1-Math.abs(N))/.1),O=N*Math.PI*v+S,I=1+.075*Math.sin(N*Math.PI*v*2+S*2+e*.8),A=y*c*I,[C,U,L]=f(Math.cos(O)*A,N*c*I,Math.sin(O)*A),E=(L/c+1)/2;p.push({x:C,y:U,z:L,r:((i.rBase??1.2)+(i.rDepth??1.8)*E)*h,white:.55-.45*E,a:x*(.45+.55*E)})}}return gs(p,[],i.rMin)};function HM(s,e,i,r){const l=2*e*i+r,c=s%l,f=new Array(e).fill(0);let h=-1;if(c<2*e*i){const p=Math.floor(c/i),m=(c-p*i)/i,v=1-(1-Math.min(1,m/.7))**3;if(p<e){for(let g=0;g<p;g++)f[g]=1;f[p]=v,h=p}else{const g=2*e-1-p;for(let S=0;S<g;S++)f[S]=1;f[g]=1-v,h=g}}return{amount:f,active:h}}function GM(s,e,i){let[r,l,c]=s,f=!1;for(let h=0;h<e.length;h++){if(i.amount[h]<=0)continue;const p=e[h],m=p.axis===0?r:p.axis===1?l:c;if(m<p.lo||m>=p.hi)continue;h===i.active&&(f=!0);const _=p.ang*i.amount[h],v=Math.cos(_),g=Math.sin(_);if(p.axis===0){const S=l*v-c*g;c=l*g+c*v,l=S}else if(p.axis===1){const S=r*v+c*g;c=-r*g+c*v,r=S}else{const S=r*v-l*g;l=r*g+l*v,r=S}}return[r,l,c,f]}function VM(s){const e=[];for(let i=0;i<s;i++){const r=Math.min(2,Math.floor(Mi(i,2.3)*3)),l=-1+.5*Math.min(3,Math.floor(Mi(i,5.9)*4)),c=Mi(i,7.7)<.5?1:-1;e.push({axis:r,lo:l,hi:l+.5,ang:c*Math.PI/2})}return e}const kM=(s,e,i)=>{const l=s/2,c=s/2,f=s/2*.82,h=.4+.06*Math.sin(e*.35),p=ar(e*.5,h,l,c,f),m=e*(.5+(1.7-.5)*(i.scanMul??1)),_=sr(s,i.rsPow??.6),v=i.dimBase??1,g=[],S=i.latRings??17,T=i.lonDensity??44;for(let N=0;N<=S;N++){const y=-Math.PI/2+N/S*Math.PI,x=Math.cos(y),O=Math.sin(y),I=Math.max(1,Math.round(Math.abs(x)*T));for(let A=0;A<I;A++){const C=A/I*2*Math.PI,[U,L,E]=p(x*Math.cos(C),O,x*Math.sin(C)),R=(E+1)/2,z=NM(C+e*.5,m),F=Math.exp(-(z*z)/.18)*Math.max(0,E);g.push({x:U,y:L,z:E,r:((i.rBase??.6)+(i.rDepth??1.7)*R+(i.rBoost??1)*F)*_,white:(i.inkFar??.62)-(i.inkSpan??.54)*R,a:v+(1-v)*Math.min(1,F)})}}return gs(g,[],i.rMin)},WM=(s,e,i)=>{const r=s/2,l=s/2,c=s/2*.82,f=ar(e*.55,.35+.1*Math.sin(e*.9),r,l,c),h=sr(s,i.rsPow??.6),p=i.moveCount??14,m=VM(p),_=HM(e,p,.42,1.2),v=[],g=i.latRings??15,S=i.lonDensity??40;for(let T=0;T<=g;T++){const N=-Math.PI/2+T/g*Math.PI,y=Math.cos(N),x=Math.sin(N),O=Math.max(1,Math.round(Math.abs(y)*S));for(let I=0;I<O;I++){const A=I/O*2*Math.PI,[C,U,L,E]=GM([y*Math.cos(A),x,y*Math.sin(A)],m,_),[R,z,F]=f(C,U,L),V=(F+1)/2;v.push({x:R,y:z,z:F,r:((i.rBase??.6)+(i.rDepth??1.7)*V+(E?i.rActive??.3:0))*h,white:(i.inkFar??.62)-(i.inkSpan??.54)*V-(E?.14:0)})}}return gs(v,[],i.rMin)},XM=(s,e,i)=>{const r=s/2,l=s/2,c=s/2*.874,f=ar(e*.18,.38,r,l,1),h=sr(s,i.rsPow??.6),p=[],m=i.rings??15,_=i.lonDensity??40;for(let v=0;v<=m;v++){const g=-Math.PI/2+v/m*Math.PI,S=Math.cos(g),T=Math.sin(g),N=.62*Math.sin(e*2.1-v*.52)+.38*Math.sin(e*1.27+v*.83),y=c*(.88+.105*N),x=Math.max(1,Math.round(Math.abs(S)*_));for(let O=0;O<x;O++){const I=O/x*2*Math.PI,[A,C,U]=f(S*Math.cos(I)*y,T*y,S*Math.sin(I)*y),L=(U/c+1)/2,E=Math.max(0,N);p.push({x:A,y:C,z:U,r:((i.rBase??.6)+(i.rDepth??1.7)*L)*(1+.4*E)*h,white:.66-.56*L-.1*E})}}return gs(p,[],i.rMin)};function qM(s){return s*s*(3-2*s)}function mx(s){const e=s.length,i=[];let r=0;for(let l=0;l<e;l++){const c=s[l],f=s[(l+1)%e],h=Math.hypot(f[0]-c[0],f[1]-c[1]);i.push(h),r+=h}return l=>{let c=l*r,f=0;for(;c>i[f]&&f<e-1;)c-=i[f],f++;const h=s[f],p=s[(f+1)%e],m=i[f]?Math.min(1,c/i[f]):0;return[h[0]+(p[0]-h[0])*m,h[1]+(p[1]-h[1])*m]}}const YM=s=>{const e=-Math.PI/2+s*2*Math.PI;return[Math.cos(e)*.24,Math.sin(e)*.24]},ZM=mx([[0,-.26],[.24,.16],[-.24,.16]]),KM=mx([[0,-.2],[.2,-.2],[.2,.2],[-.2,.2],[-.2,-.2]]),$d=[YM,ZM,KM];function jM(s){return Math.max(6,Math.round(34*s))}const Hh=1.4,gx=.9,Zc=Hh+gx,QM=(s,e,i)=>{const r=$d.length,l=e%(Zc*r),c=i.shape!=null&&i.shape>=0&&i.shape<r?Math.floor(i.shape):-1,f=c>=0?c:Math.floor(l/Zc),h=c>=0?e%Zc:l-f*Zc,p=c>=0?0:h>Hh?qM((h-Hh)/gx):0,m=i.spread??1,_=$d[f],v=c>=0?_:$d[(f+1)%r],g=160,S=[];for(let L=0;L<g;L++){const E=L/g,R=_(E),z=v(E);S.push([(R[0]+(z[0]-R[0])*p)*m,(R[1]+(z[1]-R[1])*p)*m])}const T=[];let N=0;for(let L=0;L<g;L++){const E=S[L],R=S[(L+1)%g],z=Math.hypot(R[0]-E[0],R[1]-E[1]);T.push(z),N+=z}const y=jM(i.iconD??1),x=(i.rDot??.021)*1.35*m,O=1+.02*Math.sin(h*3.1),I=[],A=s/2;let C=0,U=0;for(let L=0;L<y;L++){const E=L/y*N;for(;U+T[C]<E&&C<g-1;)U+=T[C],C++;const R=S[C],z=S[(C+1)%g],F=T[C]?Math.min(1,(E-U)/T[C]):0,V=(R[0]+(z[0]-R[0])*F)*O,K=(R[1]+(z[1]-R[1])*F)*O;I.push({x:A+V*s,y:A+K*s,z:0,r:Math.max(.35,x*s),white:.1})}return gs(I,[],i.rMin)},JM=(s,e,i)=>{const r=s/2,l=s/2,c=s/2*.82,f=ar(e*.12,.3,r,l,1),h=sr(s,i.rsPow??.6),p=[],m=i.orbitN??12,_=i.ghostN??40,v=i.particles??3;for(let g=0;g<m;g++){const S=Mi(g,1.7),T=Mi(g,5.2),N=Mi(g,8.9),y=c*(.45+.52*S),x=S*2*Math.PI,O=Math.acos(2*T-1),I=Math.sin(O)*Math.cos(x),A=Math.cos(O),C=Math.sin(O)*Math.sin(x);let U=-A,L=I;const E=0,R=Math.max(1e-6,Math.sqrt(U*U+L*L));U/=R,L/=R;const z=A*E-C*L,F=C*U-I*E,V=I*L-A*U,K=(.25+.55*N)*(N>.5?1:-1);for(let H=0;H<_;H++){const X=H/_*2*Math.PI,[P,G,J]=f((U*Math.cos(X)+z*Math.sin(X))*y,(L*Math.cos(X)+F*Math.sin(X))*y,(E*Math.cos(X)+V*Math.sin(X))*y),q=(J/y+1)/2;p.push({x:P,y:G,z:J,r:(i.ghostR??.9)*h,white:.72,a:(i.ghostA??.5)*(.4+.6*q)})}for(let H=0;H<v;H++){const X=e*K+H/v*2*Math.PI+T*6,[P,G,J]=f((U*Math.cos(X)+z*Math.sin(X))*y,(L*Math.cos(X)+F*Math.sin(X))*y,(E*Math.cos(X)+V*Math.sin(X))*y),q=(J/y+1)/2;p.push({x:P,y:G,z:J,r:((i.partR??1.2)+(i.partRDepth??1.6)*q)*h,white:.3-.22*q})}}return gs(p,[],i.rMin)},Xv=(s,e,i)=>{const r=s/2,l=s/2,c=s/2*.78,f=i.spin??1,h=.3,p=ar(e*.1*f,h,r,l,1),m=sr(s,i.rsPow??.6),_=[],v=i.ghostN??150;for(let V=0;V<v;V++){const K=Fp(V,v),[H,X,P]=p(K[0]*c,K[1]*c,K[2]*c),G=(P/c+1)/2;_.push({x:H,y:X,z:P,r:.8*m,white:.78,a:.1+.22*G})}const g=e*.24*f,S=i.faceOn?-h:.55+.3*Math.sin(e*.18)*f,T=Math.cos(g),N=0,y=Math.sin(g),x=-y*Math.sin(S),O=Math.cos(S),I=T*Math.sin(S),A=N*I-y*O,C=y*x-T*I,U=T*O-N*x,L=.23*(i.wobMul??1),E=i.faceOn?c/(1+.85*L):c,R=i.lanes??5,z=i.segs??88,F=Math.max(1,Math.round(R*(i.bandMul??1)));for(let V=0;V<F;V++){const K=(V-(F-1)/2)*.075,H=Math.abs(V-(F-1)/2)/Math.max(1,(F-1)/2);for(let X=0;X<z;X++){const P=X/z*2*Math.PI,G=(.16*Math.sin(P*3-e*1.7+V*.22)+.07*Math.sin(P*5+e*1.1))*(i.wobMul??1),J=i.faceOn?1+G:1,q=i.faceOn?K:K+G,ee=T*Math.cos(P)+x*Math.sin(P)+A*q,ne=N*Math.cos(P)+O*Math.sin(P)+C*q,ye=y*Math.cos(P)+I*Math.sin(P)+U*q,Me=Math.sqrt(ee*ee+ne*ne+ye*ye),Ye=E*J,[Ue,Ge,ae]=p(ee/Me*Ye,ne/Me*Ye,ye/Me*Ye),ce=(ae/c+1)/2;_.push({x:Ue,y:Ge,z:ae,r:((i.rBase??1.1)+(i.rDepth??1.7)*ce)*(1-.25*H)*m,white:.52-.44*ce+.18*H,a:.4+.6*ce})}}return gs(_,[],i.rMin)},$M=(s,e,i)=>{const r=s/2,l=s/2,c=s/2*.8*(i.spread??1),f=ar(e*.12,.32,r,l,c),h=sr(s,i.rsPow??.6),p=i.nodeN??30,m=i.thr??.72,_=i.nodeR??1.4,v=i.nodeRDepth??1.8,g=[];for(let y=0;y<p;y++){const x=Fp(y,p),O=x[0]+.3*(Jd(y*.31+9,e*.24)-.5)*2,I=x[1]+.3*(Jd(y*.53+27,e*.21)-.5)*2,A=x[2]+.3*(Jd(y*.77+55,e*.27)-.5)*2,C=Math.sqrt(O*O+I*I+A*A);g.push([O/C,I/C,A/C])}const S=[],T=[];for(let y=0;y<p;y++)for(let x=y+1;x<p;x++){const O=g[y][0]-g[x][0],I=g[y][1]-g[x][1],A=g[y][2]-g[x][2],C=Math.sqrt(O*O+I*I+A*A);if(C>=m)continue;const[U,L,E]=f(g[y][0],g[y][1],g[y][2]),[R,z,F]=f(g[x][0],g[x][1],g[x][2]),V=((E+F)/2+1)/2;S.push({x1:U,y1:L,x2:R,y2:z,white:.42,a:(1-C/m)*(.3+.55*V),w:Math.max(.6,(i.lineW??.8)*h)})}for(let y=0;y<p;y++){const[x,O,I]=f(g[y][0],g[y][1],g[y][2]),A=(I+1)/2,C=1+.25*Math.sin(e*1.4+y*2.7);T.push({x,y:O,z:I,r:(_+v*A)*C*h,white:.55-.45*A})}const N=i.signals??5;for(let y=0;y<N;y++){const x=Math.floor(e*.55+y*7.31),O=Math.floor(Mi(x,y*3.1+1.7)*p),I=Math.floor(Mi(x,y*5.7+4.2)*p);if(O===I)continue;const A=ux(e*.55+y*7.31),C=Qd(g[O][0],g[I][0],A),U=Qd(g[O][1],g[I][1],A),L=Qd(g[O][2],g[I][2],A),E=Math.max(1e-6,Math.sqrt(C*C+U*U+L*L)),[R,z,F]=f(C/E,U/E,L/E),V=(F+1)/2;T.push({x:R,y:z,z:F,r:(_*1.5+v*V)*h,white:.05,a:.5+.5*V})}return gs(T,S,i.rMin)},vx={orbits:JM,globe:kM,rubik:WM,wave:XM,web:$M,braid:FM,ribbon:Xv,ring:Xv,morph:QM};Object.fromEntries(Object.entries(vx).map(([s,e])=>[s,(i,r,l,c,f)=>dx(i,e(r,l,f),c)]));const eb={working:"orbits",searching:"globe",solving:"rubik",listening:"wave",connecting:"web",weaving:"braid",composing:"ribbon",breathing:"ring",shaping:"morph"},tb={orbits:{64:{speed:1.885,count:1,size:1},32:{speed:2.9072,count:.4251,size:1.6849},20:{speed:3.9,count:.238,size:2.4}},globe:{64:{speed:2.015,count:.42,size:1.15,extra:{scanMul:4.08,dimBase:.45}},32:{speed:2.3803,count:.1839,size:1.4769,extra:{scanMul:4.2301,dimBase:.45}},20:{speed:2.665,count:.105,size:1.75,extra:{scanMul:4.335,dimBase:.45}}},rubik:{64:{speed:1.82,count:.35,size:1.05},32:{speed:1.8964,count:.1537,size:1.4951},20:{speed:1.95,count:.088,size:1.9}},wave:{64:{speed:4.388,count:.341,size:1},32:{speed:4.1512,count:.169,size:1.3232},20:{speed:3.998,count:.105,size:1.6}},web:{64:{speed:3.315,count:1.35,size:.95},32:{speed:5.0104,count:.4942,size:1.2571},20:{speed:6.63,count:.25,size:1.52}},braid:{64:{speed:1.625,count:.5,size:1},32:{speed:2.2234,count:.2056,size:1.2011},20:{speed:2.75,count:.1125,size:1.36}},ribbon:{64:{speed:2.34,count:.25,size:.85,extra:{spin:0,bandMul:3.9,wobMul:1}},32:{speed:2.7776,count:.0969,size:.9766,extra:{spin:0,bandMul:4.49,wobMul:1}},20:{speed:3.12,count:.051,size:1.073,extra:{spin:0,bandMul:4.94,wobMul:1}}},ring:{64:{speed:3.24,count:.25,size:.956,extra:{spin:0,bandMul:3.627,wobMul:.368}},32:{speed:3.5517,count:.0678,size:1.31,extra:{spin:0,bandMul:3.8265,wobMul:.4751}},20:{speed:3.78,count:.028,size:1.622,extra:{spin:0,bandMul:3.968,wobMul:.565}}},morph:{64:{speed:2.405,count:.702,size:.395,extra:{spread:1.45}},32:{speed:2.2057,count:.5937,size:.6916,extra:{spread:1.45}},20:{speed:2.08,count:.53,size:1.011,extra:{spread:1.45}}}},qv=new Map;function nb(s,e){const i=`${s}-${e}`,r=qv.get(i);if(r)return r;const l=eb[s],c=tb[l][e];let f={...BM[l]};c.count!==1&&(f=hx(f,c.count)),c.size!==1&&(f=px(f,c.size)),c.extra&&(f={...f,...c.extra});const h={mode:l,speed:c.speed,opts:f};return qv.set(i,h),h}function ib(s){let e=s;for(;e;){const i=e.getAttribute("data-theme");if(i==="dark")return!0;if(i==="light")return!1;if(e.classList.contains("dark"))return!0;if(e.classList.contains("light"))return!1;e=e.parentElement}return null}function ab(){return typeof matchMedia>"u"||matchMedia("(prefers-color-scheme: dark)").matches}function sb(s,e){const[i,r]=qe.useState(!0);return qe.useEffect(()=>{if(s==="dark"){r(!0);return}if(s==="light"){r(!1);return}const l=()=>{const p=ib(e.current);r(p??ab())};l();const c=typeof matchMedia<"u"?matchMedia("(prefers-color-scheme: dark)"):null,f=()=>l();c?.addEventListener("change",f);let h=null;return typeof MutationObserver<"u"&&e.current&&(h=new MutationObserver(l),h.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"],subtree:!0})),()=>{c?.removeEventListener("change",f),h?.disconnect()}},[s,e]),i}function rb(){const[s,e]=qe.useState(!1);return qe.useEffect(()=>{if(typeof matchMedia>"u")return;const i=matchMedia("(prefers-reduced-motion: reduce)");e(i.matches);const r=l=>e(l.matches);return i.addEventListener("change",r),()=>i.removeEventListener("change",r)},[]),s}const xi=Object.freeze({reach:160,strength:11,deform:19,taper:1.95,curve:2.8,falloff:24,smoothing:.3,handover:.6,squash:1.2,blur:1,fadeMs:180});let Ui=null,Js=null,ao=null,Yv=0,_x=0,xl=!1,Gh="",Vh=0;function ob(s){if(s===Ui||(Ui=s,Js=null,ao=null,xl=!1,Vh=0,_x=typeof window<"u"&&window.devicePixelRatio||1,$s(),!s||typeof Image>"u"))return;const e=new Image;e.decoding="async",e.onload=()=>{Ui===s&&(Js=e,zu())},e.src=s.src}const eo=new Set;let lo=!1,ms=0,kh=0,Di=Number.NaN,Ws=Number.NaN,Wh=0,Xh=0,us=0,ri=null,Su=!0,Sl=!1;function lb(s,e=!0){const i=e===!0?{}:e;i.sprite&&ob(i.sprite);const r={el:s,opts:{reach:Math.max(1,i.reach??xi.reach),strength:Math.max(0,Math.min(64,i.strength??xi.strength)),deform:Math.max(0,Math.min(32,i.deform??xi.deform)),taper:Math.max(1,Math.min(4,i.taper??xi.taper)),curve:Math.max(1,Math.min(4,i.curve??xi.curve)),falloff:Math.max(2,Math.min(200,i.falloff??xi.falloff)),smoothing:Zv(i.smoothing??xi.smoothing),handover:Zv(i.handover??xi.handover),squash:Math.max(0,Math.min(3,i.squash??xi.squash)),blur:Math.max(0,Math.min(24,i.blur??xi.blur)),fadeMs:Math.max(1,i.fadeMs??xi.fadeMs)}};return eo.add(r),fb(),zu(),()=>{eo.delete(r),ri===r&&(ri=null),eo.size===0&&queueMicrotask(()=>{eo.size===0&&db()})}}const Zv=s=>Math.max(0,Math.min(1,s)),yu=s=>s.opts,gl=s=>typeof window.matchMedia=="function"&&window.matchMedia(s).matches;function cb(){if(xl)return Gh||"disabled by a fail-safe";if(!Ui)return"no pointer sprite set";if(!Js)return"pointer sprite still loading";if(gl("(prefers-reduced-motion: reduce)"))return"prefers-reduced-motion is on";if(gl("(forced-colors: active)"))return"forced colours are active";if(!gl("(pointer: fine)")||!gl("(hover: hover)"))return"no fine pointer";if((window.devicePixelRatio||1)!==_x)return"display scale changed since the sprite was set — reload";const s=window.visualViewport;return s&&Math.abs(s.scale-1)>.001?"page is zoomed":null}function ub(){return cb()===null}function fb(){lo||eo.size===0||typeof document>"u"||gl("(pointer: fine)")&&(lo=!0,document.addEventListener("pointermove",xx,{passive:!0}),document.addEventListener("pointerleave",ps),document.addEventListener("pointercancel",ps),document.addEventListener("keydown",Sx,{passive:!0}),document.addEventListener("visibilitychange",ps),window.addEventListener("blur",ps))}function db(){lo&&(lo=!1,document.removeEventListener("pointermove",xx),document.removeEventListener("pointerleave",ps),document.removeEventListener("pointercancel",ps),document.removeEventListener("keydown",Sx),document.removeEventListener("visibilitychange",ps),window.removeEventListener("blur",ps),ms!==0&&(cancelAnimationFrame(ms),ms=0),ri=null,us=0,$s(),Ki&&(Ki.remove(),Ki=null,ba=null,Cu=null),qs&&(qs.remove(),qs=null))}function xx(s){Su=s.pointerType==="mouse"||s.pointerType==="",Sl=!1,Hp++,Di=Wh=s.clientX,Ws=Xh=s.clientY,Tl&&(Tl=!1,yl(),Ml=0,bl=0,Xs=to=Number.NaN),zu()}function Sx(){Sl=!0,$s()}function ps(){Di=Ws=Number.NaN,zu()}function zu(){!lo||ms!==0||(kh=performance.now(),ms=requestAnimationFrame(Zh))}let Ki=null,ba=null,Cu=null,co=!1;const js="thinking-orb-gravity-hide";let qs=null,El=!1;const Kv=new WeakMap;let Hp=0,Gp=-1,qh=0,yx=-1;function hb(){if(Ki)return!0;const s=document.createElement("div");s.className="thinking-orb-gravity-cursor",s.setAttribute("aria-hidden","true"),s.style.cssText="position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;display:none";const e=document.createElement("canvas");e.style.display="block",s.appendChild(e),document.body.appendChild(s);const i=e.getContext("2d");return i?(Ki=s,ba=e,Cu=i,Yh=0,!0):(s.remove(),!1)}function pb(){qs||(qs=document.createElement("style"),qs.textContent=`html.${js}, html.${js} * { cursor: none !important; }`,document.head.appendChild(qs))}function mb(s){const e=Kv.get(s);if(e)return e;const i=document.documentElement,r=i.classList.contains(js);r&&i.classList.remove(js);const l=getComputedStyle(s).cursor;return r&&i.classList.add(js),Kv.set(s,l),l}function jv(s,e){const i=document.elementFromPoint(s,e);if(!i)return!1;const r=mb(i);return r!=="auto"&&r!=="default"?(Vp(),!1):(El||(pb(),document.documentElement.classList.add(js),El=!0,Gp=Hp,yx=qh),!0)}function Vp(){El&&(document.documentElement.classList.remove(js),El=!1,Gp=-1)}function yl(){Ki&&co&&(Ki.style.display="none",co=!1)}const gb=500;let Qv=Number.NEGATIVE_INFINITY,Tl=!1;function $s(){Tl=!1,Vp(),yl(),Ml=0,bl=0,Xs=to=Number.NaN}const Ys={cx:0,cy:0,r:0};let Ml=0,bl=0,Xs=Number.NaN,to=Number.NaN;const Is=48,Jv=10;let Fr=null,eh=null,zs=null,Bs=null,no=null,Yh=0,$v=0,e_=0;function vb(s){if(!Js||!Ui)return null;const e=document.createElement("canvas");e.width=Math.ceil(Ui.width*s),e.height=Math.ceil(Ui.height*s);const i=e.getContext("2d",{willReadFrequently:!0});return i?(i.scale(s,s),i.drawImage(Js,0,0,Ui.width,Ui.height),i.getImageData(0,0,e.width,e.height)):null}function _b(s,e,i,r,l,c,f){if(!ao||!no)return;const h=no.width,p=no.height,m=ao,_=m.width,v=m.height,g=m.data,S=no.data;S.fill(0);const T=Math.max(1,Math.hypot(_,v)),N=c-r,y=f-l,x=Math.hypot(N,y)||1,O=N/x,I=y/x,A=Math.max(0,Math.floor(i+Math.min(0,s*O)-3)),C=Math.min(h,Math.ceil(i+_+Math.max(0,s*O)+3)),U=Math.max(0,Math.floor(i+Math.min(0,s*I)-3)),L=Math.min(p,Math.ceil(i+v+Math.max(0,s*I)+3));for(let E=U;E<L;E++)for(let R=A;R<C;R++){const z=(E*h+R)*4;let F=R-i,V=E-i;if(s>.01){let ne=R,ye=E,Me=0,Ye=0,Ue=0,Ge=1;for(let we=0;we<7;we++){const Ie=Math.hypot(ne-r,ye-l)/T;Me=s*Math.pow(Math.min(1,Ie),e),Ye=c-ne,Ue=f-ye,Ge=Math.hypot(Ye,Ue)||1,ne+=(R-Me*Ye/Ge-ne)*.5,ye+=(E-Me*Ue/Ge-ye)*.5}const ae=ne+Me*Ye/Ge-R,ce=ye+Me*Ue/Ge-E;if(ae*ae+ce*ce>2.25){S[z]=S[z+1]=S[z+2]=S[z+3]=0;continue}F=ne-i,V=ye-i}const K=Math.floor(F),H=Math.floor(V);if(K<-1||H<-1||K>=_||H>=v){S[z]=S[z+1]=S[z+2]=S[z+3]=0;continue}const X=F-K,P=V-H;let G=0,J=0,q=0,ee=0;for(let ne=0;ne<4;ne++){const ye=K+(ne&1),Me=H+(ne>>1);if(ye<0||Me<0||ye>=_||Me>=v)continue;const Ye=(ne&1?X:1-X)*(ne>>1?P:1-P),Ue=(Me*_+ye)*4,Ge=Ye*g[Ue+3];G+=g[Ue]*Ge,J+=g[Ue+1]*Ge,q+=g[Ue+2]*Ge,ee+=Ge}ee>0?(S[z]=G/ee,S[z+1]=J/ee,S[z+2]=q/ee,S[z+3]=ee):S[z]=S[z+1]=S[z+2]=S[z+3]=0}}function t_(s,e,i){if(!Cu||!ba||!Ki||!Ui||!Js)return;const r=Ui,l=yu(s),c=Math.min(3,window.devicePixelRatio||1);if(Fr||(Fr=document.createElement("canvas"),eh=Fr.getContext("2d")),zs||(zs=document.createElement("canvas"),Bs=zs.getContext("2d")),!eh||!Bs||((!ao||Yv!==c)&&(ao=vb(c),Yv=c),!ao))return;if(c!==Yh||r.width!==$v||r.height!==e_){Yh=c,$v=r.width,e_=r.height;const P=Math.ceil((r.width+2*Is)*c),G=Math.ceil((r.height+2*Is)*c);ba.width=Fr.width=zs.width=P,ba.height=Fr.height=zs.height=G,ba.style.width=`${r.width+2*Is}px`,ba.style.height=`${r.height+2*Is}px`,no=Bs.createImageData(P,G)}const f=ba.width,h=ba.height,p=Math.pow(e,l.curve),m=1-Math.exp(-i/(.012+l.smoothing*.14));Ml+=(l.strength*p-Ml)*m,bl+=(l.deform*p-bl)*m;let _=Ml*c,v=bl*c;if(Number.isNaN(Xs))Xs=Ys.cx,to=Ys.cy;else{const P=1-Math.exp(-i/(.05+l.handover*.6));Xs+=(Ys.cx-Xs)*P,to+=(Ys.cy-to)*P}const g=Is*c,S=g+r.hotX*c,T=g+r.hotY*c,N=S+(Xs-Wh)*c,y=T+(to-Xh)*c,x=Math.hypot(N-S,y-T)||1,O=(N-S)/x,I=(y-T)/x,A=l.falloff*c;if(l.squash>0){const P=Math.hypot(r.width*.5-r.hotX,r.height-r.hotY)||1,G=(r.width*.5-r.hotX)/P,J=(r.height-r.hotY)/P,q=Math.max(0,-(O*G+I*J)),ee=1+l.squash*q;_*=ee,v*=ee}const C=Math.ceil(Math.max(v,1))+4,U=Math.floor(Math.min(g,g+O*_)-C),L=Math.floor(Math.min(g,g+I*_)-C),E=Math.ceil(Math.max(g,g+O*_)+r.width*c+C),R=Math.ceil(Math.max(g,g+I*_)+r.height*c+C),z=Math.max(0,U),F=Math.max(0,L),V=Math.min(f,E)-z,K=Math.min(h,R)-F;v>.01?(_b(v,l.taper,g,S,T,N,y),Bs.putImageData(no,0,0,z,F,V,K)):(Bs.setTransform(1,0,0,1,0,0),Bs.clearRect(0,0,f,h),Bs.drawImage(Js,g,g,r.width*c,r.height*c));const H=Cu,X=eh;if(H.setTransform(1,0,0,1,0,0),H.clearRect(0,0,f,h),H.globalAlpha=1,H.globalCompositeOperation="source-over",H.drawImage(zs,0,0),_>.5){const P=g+r.width*c*.42,G=g+r.height*c*.5,J=A/2,q=X.createLinearGradient(P-O*J,G-I*J,P+O*J,G+I*J);q.addColorStop(0,"rgba(0,0,0,0)"),q.addColorStop(1,"rgba(0,0,0,1)");for(let ee=Jv;ee>=1;ee--){const ne=ee/Jv;X.setTransform(1,0,0,1,0,0),X.globalCompositeOperation="source-over",X.globalAlpha=1,X.clearRect(z,F,V,K),X.drawImage(zs,z,F,V,K,z+O*_*ne,F+I*_*ne,V,K),X.globalCompositeOperation="destination-in",X.fillStyle=q,X.fillRect(z,F,V,K),H.globalCompositeOperation="destination-over",H.globalAlpha=Math.pow(1-ne,1.6)*.9,l.blur>0&&(H.filter=`blur(${(l.blur*Math.sqrt(ne)*c).toFixed(2)}px)`),H.drawImage(Fr,z,F,V,K,z,F,V,K)}H.filter="none",H.globalAlpha=1,H.globalCompositeOperation="source-over"}Ki.style.transform=`translate3d(${(Wh-r.hotX-Is).toFixed(2)}px,${(Xh-r.hotY-Is).toFixed(2)}px,0)`,co||(Ki.style.display="",co=!0)}function Zh(s){if(ms=0,!lo)return;const e=performance.now();try{xb(s)}catch(r){xl=!0,Gh=`disabled after an error (${r instanceof Error?r.message:String(r)})`,$s(),ri=null,typeof console<"u"&&console.warn("thinking-orbs: gravity disabled after error",r);return}const i=performance.now()-e;i>12?++Vh>=30&&!xl&&(xl=!0,Gh=`disabled after slow frames (~${Math.round(i)}ms each)`,$s()):Vh=0}function xb(s){const e=Math.min(.05,Math.max(.001,(s-kh)/1e3));kh=s,qh++;let i=null,r=0;if(!Number.isNaN(Di)&&ub()){let h=Number.POSITIVE_INFINITY;for(const p of eo){if(!p.el.isConnected)continue;const m=p.el.getBoundingClientRect();if(m.width<=0)continue;const _=m.left+m.width/2,v=m.top+m.height/2,g=Math.min(m.width,m.height)/2,S=yu(p).reach;if(Di<_-g-S||Di>_+g+S||Ws<v-g-S||Ws>v+g+S)continue;const T=Math.hypot(Di-_,Ws-v)-g;T<=S&&T<h&&(h=T,i=p,Ys.cx=_,Ys.cy=v,Ys.r=g)}if(i){const p=1-Math.max(0,h)/yu(i).reach;r=p*p*(3-2*p),Qv=s}}const l=ri??i,c=l?yu(l).fadeMs:xi.fadeMs,f=1-Math.exp(-(e*1e3)/(c/3));if(us+=(r-us)*f,i&&i!==ri&&(ri=i),!i&&us<.002){if(us=0,ri&&El&&!Tl&&Su&&!Sl&&!Number.isNaN(Di)){if(s-Qv<gb){jv(Di,Ws)?t_(ri,0,e):yl(),ms=requestAnimationFrame(Zh);return}if(co){Vp(),Tl=!0,ri=null;return}}ri=null,$s();return}ri&&(us>.002&&Su&&!Sl&&!Number.isNaN(Di)&&hb()&&jv(Di,Ws)?Gp===Hp&&qh-yx<2&&!co?yl():t_(ri,us,e):us>.002&&!Number.isNaN(Di)&&Su&&!Sl?yl():$s(),ms=requestAnimationFrame(Zh))}function Sb(s){if(!s)return;const e=s.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(e){let r=e[1];r.length===3&&(r=r.replace(/./g,c=>c+c));const l=parseInt(r,16);return{r:l>>16&255,g:l>>8&255,b:l&255}}const i=s.trim().match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);if(i)return{r:Number(i[1]),g:Number(i[2]),b:Number(i[3])}}const yb={working:"Working…",searching:"Searching…",solving:"Solving…",listening:"Listening…",connecting:"Connecting…",weaving:"Weaving…",composing:"Composing…",breathing:"Thinking…",shaping:"Shaping…"};function Bu({state:s="working",size:e=64,theme:i="auto",speed:r=1,paused:l=!1,color:c,dots:f=1,dotSize:h=1,opts:p,frame:m,gravity:_,style:v,"aria-label":g,...S}){const T=qe.useRef(null),N=p?JSON.stringify(p):"",y=sb(i,T),x=_?JSON.stringify(_):"";qe.useEffect(()=>{const I=T.current;if(!(!I||!_))return lb(I,_===!0?!0:_)},[x]);const O=rb();return qe.useEffect(()=>{const I=T.current;if(!I)return;const A=Math.min(2,typeof devicePixelRatio<"u"&&devicePixelRatio||1);I.width=Math.round(e*A),I.height=Math.round(e*A);const C=I.getContext("2d");if(!C)return;const{mode:U,speed:L,opts:E}=nb(s,e);let R=f!==1?hx(E,Math.max(.1,f)):E;h!==1&&(R=px(R,Math.max(.1,h))),p&&(R={...R,...p});const z=m??vx[U],F=Sb(c),V=L*r,K=ye=>{C.setTransform(A,0,0,A,0,0),C.clearRect(0,0,e,e),dx(C,z(e,ye,R),y,F)};if(O){K(.6);return}let H=0,X=!1;const P=()=>{K(performance.now()/1e3*V),X&&(H=requestAnimationFrame(P))},G=()=>{X||l||(X=!0,H=requestAnimationFrame(P))},J=()=>{X=!1,cancelAnimationFrame(H)};K(performance.now()/1e3*V);let q=!0;const ee=typeof IntersectionObserver<"u"?new IntersectionObserver(([ye])=>{q=ye.isIntersecting,q&&document.visibilityState!=="hidden"?G():J()}):null;ee?.observe(I);const ne=()=>{document.visibilityState==="hidden"?J():q&&G()};return document.addEventListener("visibilitychange",ne),ee||G(),()=>{J(),ee?.disconnect(),document.removeEventListener("visibilitychange",ne)}},[s,e,y,r,l,O,c,f,h,N,m]),Y.jsx("canvas",{ref:T,role:"img","aria-label":g??yb[s],style:{width:e,height:e,display:"block",...v},...S})}const Mb=()=>{const s=rx(),e=bM(),[i,r]=qe.useState(!1),{scrollY:l}=_M(),c=xM(l,[0,100],[1,0]),f=[{name:"About",type:"scroll",target:"about"},{name:"Publications",type:"scroll",target:"publications"},{name:"Projects",type:"scroll",target:"projects"},{name:"Skills",type:"scroll",target:"skills"},{name:"Archive",type:"route",path:"/blog"},{name:"Contact",type:"scroll",target:"contact"}];qe.useEffect(()=>{i?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[i]);const h=p=>{if(r(!1),p.type==="route")e(p.path);else if(p.type==="scroll")if(s.pathname!=="/")e("/",{state:{scrollTo:p.target}}),setTimeout(()=>{const m=document.getElementById(p.target);m&&m.scrollIntoView({behavior:"smooth"})},100);else{const m=document.getElementById(p.target);m&&m.scrollIntoView({behavior:"smooth"})}};return Y.jsxs("nav",{className:"fixed top-0 left-0 w-full z-50",children:[Y.jsxs("div",{className:"w-full px-6 md:px-24 h-24 flex justify-between items-center bg-transparent relative z-50",children:[Y.jsxs(zn.div,{style:{opacity:c},className:"z-50 flex items-center gap-3",children:[Y.jsx(Bu,{state:"working",size:20,theme:"light"}),Y.jsx(ox,{to:"/",className:"font-serif font-bold text-2xl tracking-tighter text-black hover:opacity-70 transition-opacity",children:"GB."})]}),Y.jsx("div",{className:"hidden md:flex gap-16 items-center bg-gray-200/30 backdrop-blur-xl px-16 py-4 rounded-full border border-white/20 shadow-lg ring-1 ring-black/5",children:f.map(p=>Y.jsxs("button",{onClick:()=>h(p),className:"font-mono text-sm uppercase tracking-widest font-bold text-black/80 hover:text-black transition-colors relative group bg-transparent border-none cursor-pointer",children:[p.name,Y.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"})]},p.name))}),Y.jsx("button",{onClick:()=>r(!i),className:"md:hidden z-50 p-2 bg-white/50 backdrop-blur-md rounded-full border border-black/5",children:Y.jsxs("div",{className:"w-6 h-5 flex flex-col justify-between",children:[Y.jsx("span",{className:`w-full h-0.5 bg-black transition-all duration-300 ${i?"rotate-45 translate-y-2":""}`}),Y.jsx("span",{className:`w-full h-0.5 bg-black transition-all duration-300 ${i?"opacity-0":""}`}),Y.jsx("span",{className:`w-full h-0.5 bg-black transition-all duration-300 ${i?"-rotate-45 -translate-y-2.5":""}`})]})})]}),Y.jsx(SM,{children:i&&Y.jsx(zn.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden",children:Y.jsx("div",{className:"flex flex-col gap-8 text-center",children:f.map(p=>Y.jsx("button",{onClick:()=>h(p),className:"font-serif text-4xl font-bold text-black hover:text-gray-600 transition-colors bg-transparent border-none",children:p.name},p.name))})})})]})};const kp="186",bb=0,n_=1,Eb=2,Mu=1,Tb=2,vl=3,er=0,Zn=1,Ea=2,Aa=0,so=1,i_=2,a_=3,s_=4,Ab=5,$r=100,wb=101,Rb=102,Cb=103,Db=104,Nb=200,Ub=201,Lb=202,Ob=203,Mx=204,bx=205,Pb=206,Ib=207,zb=208,Bb=209,Fb=210,Hb=211,Gb=212,Vb=213,kb=214,Kh=0,jh=1,Qh=2,Al=3,Jh=4,$h=5,ep=6,tp=7,Ex=0,Wb=1,Xb=2,ji=0,Tx=1,Ax=2,wx=3,Rx=4,Cx=5,Dx=6,Nx=7,Ux=300,tr=301,uo=302,th=303,nh=304,Fu=306,np=1e3,Ta=1001,ip=1002,Cn=1003,qb=1004,Kc=1005,Un=1006,ih=1007,Zs=1008,yi=1009,Lx=1010,Ox=1011,wl=1012,Wp=1013,Qi=1014,Yi=1015,Ji=1016,Xp=1017,qp=1018,Rl=1020,Px=35902,Ix=35899,zx=1021,Bx=1022,Oi=1023,Da=1026,Ks=1027,Fx=1028,Yp=1029,nr=1030,Zp=1031,Kp=1033,bu=33776,Eu=33777,Tu=33778,Au=33779,ap=35840,sp=35841,rp=35842,op=35843,lp=36196,cp=37492,up=37496,fp=37488,dp=37489,Du=37490,hp=37491,pp=37808,mp=37809,gp=37810,vp=37811,_p=37812,xp=37813,Sp=37814,yp=37815,Mp=37816,bp=37817,Ep=37818,Tp=37819,Ap=37820,wp=37821,Rp=36492,Cp=36494,Dp=36495,Np=36283,Up=36284,Nu=36285,Lp=36286,Yb=3200,r_=0,Zb=1,hs="",Si="srgb",Uu="srgb-linear",Lu="linear",kt="srgb",ah=7680,Kb=519,jb=512,Qb=513,Jb=514,jp=515,$b=516,e1=517,Qp=518,t1=519,n1=35044,o_="300 es",Zi=2e3,Ou=2001;function i1(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function a1(){const s=Pu("canvas");return s.style.display="block",s}const l_={};function c_(...s){const e="THREE."+s.shift();console.log(e,...s)}function Hx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function dt(...s){s=Hx(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function It(...s){s=Hx(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function ro(...s){const e=s.join(" ");e in l_||(l_[e]=!0,dt(...s))}function s1(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const r1={[Kh]:jh,[Qh]:ep,[Jh]:tp,[Al]:$h,[jh]:Kh,[ep]:Qh,[tp]:Jh,[$h]:Al};class rr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,Op=180/Math.PI;function Ul(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Dt(s,e,i){return Math.max(e,Math.min(i,s))}function o1(s,e){return(s%e+e)%e}function rh(s,e,i){return(1-i)*s+i*e}function ll(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const am=class am{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};am.prototype.isVector2=!0;let zt=am;class po{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let p=r[l+0],m=r[l+1],_=r[l+2],v=r[l+3],g=c[f+0],S=c[f+1],T=c[f+2],N=c[f+3];if(v!==N||p!==g||m!==S||_!==T){let y=p*g+m*S+_*T+v*N;y<0&&(g=-g,S=-S,T=-T,N=-N,y=-y);let x=1-h;if(y<.9995){const O=Math.acos(y),I=Math.sin(O);x=Math.sin(x*O)/I,h=Math.sin(h*O)/I,p=p*x+g*h,m=m*x+S*h,_=_*x+T*h,v=v*x+N*h}else{p=p*x+g*h,m=m*x+S*h,_=_*x+T*h,v=v*x+N*h;const O=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=O,m*=O,_*=O,v*=O}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],p=r[l+1],m=r[l+2],_=r[l+3],v=c[f],g=c[f+1],S=c[f+2],T=c[f+3];return e[i]=h*T+_*v+p*S-m*g,e[i+1]=p*T+_*g+m*v-h*S,e[i+2]=m*T+_*S+h*g-p*v,e[i+3]=_*T-h*v-p*g-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,p=Math.sin,m=h(r/2),_=h(l/2),v=h(c/2),g=p(r/2),S=p(l/2),T=p(c/2);switch(f){case"XYZ":this._x=g*_*v+m*S*T,this._y=m*S*v-g*_*T,this._z=m*_*T+g*S*v,this._w=m*_*v-g*S*T;break;case"YXZ":this._x=g*_*v+m*S*T,this._y=m*S*v-g*_*T,this._z=m*_*T-g*S*v,this._w=m*_*v+g*S*T;break;case"ZXY":this._x=g*_*v-m*S*T,this._y=m*S*v+g*_*T,this._z=m*_*T+g*S*v,this._w=m*_*v-g*S*T;break;case"ZYX":this._x=g*_*v-m*S*T,this._y=m*S*v+g*_*T,this._z=m*_*T-g*S*v,this._w=m*_*v+g*S*T;break;case"YZX":this._x=g*_*v+m*S*T,this._y=m*S*v+g*_*T,this._z=m*_*T-g*S*v,this._w=m*_*v-g*S*T;break;case"XZY":this._x=g*_*v-m*S*T,this._y=m*S*v-g*_*T,this._z=m*_*T+g*S*v,this._w=m*_*v+g*S*T;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],_=i[6],v=i[10],g=r+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(_-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+f*h+l*m-c*p,this._y=l*_+f*p+c*h-r*m,this._z=c*_+f*m+r*p-l*h,this._w=f*_-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,f=-f,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),_=Math.sin(m);p=Math.sin(p*m)/_,i=Math.sin(i*m)/_,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+f*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sm=class sm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(u_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(u_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,p=e.w,m=2*(f*l-h*r),_=2*(h*i-c*l),v=2*(c*r-f*i);return this.x=i+p*m+f*v-h*_,this.y=r+p*_+h*m-c*v,this.z=l+p*v+c*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this.z=Dt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this.z=Dt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-r*p,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sm.prototype.isVector3=!0;let de=sm;const oh=new de,u_=new po,rm=class rm{constructor(e,i,r,l,c,f,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,p,m)}set(e,i,r,l,c,f,h,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],_=r[4],v=r[7],g=r[2],S=r[5],T=r[8],N=l[0],y=l[3],x=l[6],O=l[1],I=l[4],A=l[7],C=l[2],U=l[5],L=l[8];return c[0]=f*N+h*O+p*C,c[3]=f*y+h*I+p*U,c[6]=f*x+h*A+p*L,c[1]=m*N+_*O+v*C,c[4]=m*y+_*I+v*U,c[7]=m*x+_*A+v*L,c[2]=g*N+S*O+T*C,c[5]=g*y+S*I+T*U,c[8]=g*x+S*A+T*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],_=e[8];return i*f*_-i*h*m-r*c*_+r*h*p+l*c*m-l*f*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],_=e[8],v=_*f-h*m,g=h*p-_*c,S=m*c-f*p,T=i*v+r*g+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=v*N,e[1]=(l*m-_*r)*N,e[2]=(h*r-l*f)*N,e[3]=g*N,e[4]=(_*i-l*p)*N,e[5]=(l*c-h*i)*N,e[6]=S*N,e[7]=(r*p-m*i)*N,e[8]=(f*i-r*c)*N,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*h)+f+e,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(e,i){return ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lh.makeScale(e,i)),this}rotate(e){return ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lh.makeRotation(-e)),this}translate(e,i){return ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rm.prototype.isMatrix3=!0;let ht=rm;const lh=new ht,f_=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d_=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l1(){const s={enabled:!0,workingColorSpace:Uu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===kt&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===kt&&(l.r=oo(l.r),l.g=oo(l.g),l.b=oo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===hs?Lu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Uu]:{primaries:e,whitePoint:r,transfer:Lu,toXYZ:f_,fromXYZ:d_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:f_,fromXYZ:d_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),s}const Ct=l1();function wa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hr;class c1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Hr===void 0&&(Hr=Pu("canvas")),Hr.width=e.width,Hr.height=e.height;const l=Hr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Hr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Pu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=wa(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(wa(i[r]/255)*255):i[r]=wa(i[r]);return{data:i,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u1=0;class Jp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(ch(l[f].image)):c.push(ch(l[f]))}else c=ch(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function ch(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?c1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let f1=0;const uh=new de;class Bn extends rr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=Ta,l=Ta,c=Un,f=Zs,h=Oi,p=yi,m=Bn.DEFAULT_ANISOTROPY,_=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=Ul(),this.name="",this.source=new Jp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ux)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case np:e.x=e.x-Math.floor(e.x);break;case Ta:e.x=e.x<0?0:1;break;case ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case np:e.y=e.y-Math.floor(e.y);break;case Ta:e.y=e.y<0?0:1;break;case ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Ux;Bn.DEFAULT_ANISOTROPY=1;const om=class om{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],_=p[4],v=p[8],g=p[1],S=p[5],T=p[9],N=p[2],y=p[6],x=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-N)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+N)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(m+1)/2,A=(S+1)/2,C=(x+1)/2,U=(_+g)/4,L=(v+N)/4,E=(T+y)/4;return I>A&&I>C?I<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(I),l=U/r,c=L/r):A>C?A<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),r=U/l,c=E/l):C<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(C),r=L/c,l=E/c),this.set(r,l,c,i),this}let O=Math.sqrt((y-T)*(y-T)+(v-N)*(v-N)+(g-_)*(g-_));return Math.abs(O)<.001&&(O=1),this.x=(y-T)/O,this.y=(v-N)/O,this.z=(g-_)/O,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this.z=Dt(this.z,e.z,i.z),this.w=Dt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this.z=Dt(this.z,e,i),this.w=Dt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};om.prototype.isVector4=!0;let rn=om;class d1 extends rr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new Bn(l),f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Jp(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends d1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Gx extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h1 extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Iu=class Iu{constructor(e,i,r,l,c,f,h,p,m,_,v,g,S,T,N,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,p,m,_,v,g,S,T,N,y)}set(e,i,r,l,c,f,h,p,m,_,v,g,S,T,N,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=p,x[2]=m,x[6]=_,x[10]=v,x[14]=g,x[3]=S,x[7]=T,x[11]=N,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Iu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Gr.setFromMatrixColumn(e,0).length(),c=1/Gr.setFromMatrixColumn(e,1).length(),f=1/Gr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=f*_,S=f*v,T=h*_,N=h*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=S+T*m,i[5]=g-N*m,i[9]=-h*p,i[2]=N-g*m,i[6]=T+S*m,i[10]=f*p}else if(e.order==="YXZ"){const g=p*_,S=p*v,T=m*_,N=m*v;i[0]=g+N*h,i[4]=T*h-S,i[8]=f*m,i[1]=f*v,i[5]=f*_,i[9]=-h,i[2]=S*h-T,i[6]=N+g*h,i[10]=f*p}else if(e.order==="ZXY"){const g=p*_,S=p*v,T=m*_,N=m*v;i[0]=g-N*h,i[4]=-f*v,i[8]=T+S*h,i[1]=S+T*h,i[5]=f*_,i[9]=N-g*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(e.order==="ZYX"){const g=f*_,S=f*v,T=h*_,N=h*v;i[0]=p*_,i[4]=T*m-S,i[8]=g*m+N,i[1]=p*v,i[5]=N*m+g,i[9]=S*m-T,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(e.order==="YZX"){const g=f*p,S=f*m,T=h*p,N=h*m;i[0]=p*_,i[4]=N-g*v,i[8]=T*v+S,i[1]=v,i[5]=f*_,i[9]=-h*_,i[2]=-m*_,i[6]=S*v+T,i[10]=g-N*v}else if(e.order==="XZY"){const g=f*p,S=f*m,T=h*p,N=h*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=g*v+N,i[5]=f*_,i[9]=S*v-T,i[2]=T*v-S,i[6]=h*_,i[10]=N*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p1,e,m1)}lookAt(e,i,r){const l=this.elements;return ai.subVectors(e,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ss.crossVectors(r,ai),ss.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ss.crossVectors(r,ai)),ss.normalize(),jc.crossVectors(ai,ss),l[0]=ss.x,l[4]=jc.x,l[8]=ai.x,l[1]=ss.y,l[5]=jc.y,l[9]=ai.y,l[2]=ss.z,l[6]=jc.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],_=r[1],v=r[5],g=r[9],S=r[13],T=r[2],N=r[6],y=r[10],x=r[14],O=r[3],I=r[7],A=r[11],C=r[15],U=l[0],L=l[4],E=l[8],R=l[12],z=l[1],F=l[5],V=l[9],K=l[13],H=l[2],X=l[6],P=l[10],G=l[14],J=l[3],q=l[7],ee=l[11],ne=l[15];return c[0]=f*U+h*z+p*H+m*J,c[4]=f*L+h*F+p*X+m*q,c[8]=f*E+h*V+p*P+m*ee,c[12]=f*R+h*K+p*G+m*ne,c[1]=_*U+v*z+g*H+S*J,c[5]=_*L+v*F+g*X+S*q,c[9]=_*E+v*V+g*P+S*ee,c[13]=_*R+v*K+g*G+S*ne,c[2]=T*U+N*z+y*H+x*J,c[6]=T*L+N*F+y*X+x*q,c[10]=T*E+N*V+y*P+x*ee,c[14]=T*R+N*K+y*G+x*ne,c[3]=O*U+I*z+A*H+C*J,c[7]=O*L+I*F+A*X+C*q,c[11]=O*E+I*V+A*P+C*ee,c[15]=O*R+I*K+A*G+C*ne,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],p=e[9],m=e[13],_=e[2],v=e[6],g=e[10],S=e[14],T=e[3],N=e[7],y=e[11],x=e[15],O=p*S-m*g,I=h*S-m*v,A=h*g-p*v,C=f*S-m*_,U=f*g-p*_,L=f*v-h*_;return i*(N*O-y*I+x*A)-r*(T*O-y*C+x*U)+l*(T*I-N*C+x*L)-c*(T*A-N*U+y*L)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],f=e[5],h=e[9],p=e[2],m=e[6],_=e[10];return i*(f*_-h*m)-r*(c*_-h*p)+l*(c*m-f*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],p=e[6],m=e[7],_=e[8],v=e[9],g=e[10],S=e[11],T=e[12],N=e[13],y=e[14],x=e[15],O=i*h-r*f,I=i*p-l*f,A=i*m-c*f,C=r*p-l*h,U=r*m-c*h,L=l*m-c*p,E=_*N-v*T,R=_*y-g*T,z=_*x-S*T,F=v*y-g*N,V=v*x-S*N,K=g*x-S*y,H=O*K-I*V+A*F+C*z-U*R+L*E;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/H;return e[0]=(h*K-p*V+m*F)*X,e[1]=(l*V-r*K-c*F)*X,e[2]=(N*L-y*U+x*C)*X,e[3]=(g*U-v*L-S*C)*X,e[4]=(p*z-f*K-m*R)*X,e[5]=(i*K-l*z+c*R)*X,e[6]=(y*A-T*L-x*I)*X,e[7]=(_*L-g*A+S*I)*X,e[8]=(f*V-h*z+m*E)*X,e[9]=(r*z-i*V-c*E)*X,e[10]=(T*U-N*A+x*O)*X,e[11]=(v*A-_*U-S*O)*X,e[12]=(h*R-f*F-p*E)*X,e[13]=(i*F-r*R+l*E)*X,e[14]=(N*I-T*C-y*O)*X,e[15]=(_*C-v*I+g*O)*X,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,p=e.z,m=c*f,_=c*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,_*h+r,_*p-l*f,0,m*p-l*h,_*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,_=f+f,v=h+h,g=c*m,S=c*_,T=c*v,N=f*_,y=f*v,x=h*v,O=p*m,I=p*_,A=p*v,C=r.x,U=r.y,L=r.z;return l[0]=(1-(N+x))*C,l[1]=(S+A)*C,l[2]=(T-I)*C,l[3]=0,l[4]=(S-A)*U,l[5]=(1-(g+x))*U,l[6]=(y+O)*U,l[7]=0,l[8]=(T+I)*L,l[9]=(y-O)*L,l[10]=(1-(g+N))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let f=Gr.set(l[0],l[1],l[2]).length();const h=Gr.set(l[4],l[5],l[6]).length(),p=Gr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),wi.copy(this);const m=1/f,_=1/h,v=1/p;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=_,wi.elements[5]*=_,wi.elements[6]*=_,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,i.setFromRotationMatrix(wi),r.x=f,r.y=h,r.z=p,this}makePerspective(e,i,r,l,c,f,h=Zi,p=!1){const m=this.elements,_=2*c/(i-e),v=2*c/(r-l),g=(i+e)/(i-e),S=(r+l)/(r-l);let T,N;if(p)T=c/(f-c),N=f*c/(f-c);else if(h===Zi)T=-(f+c)/(f-c),N=-2*f*c/(f-c);else if(h===Ou)T=-f/(f-c),N=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=N,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Zi,p=!1){const m=this.elements,_=2/(i-e),v=2/(r-l),g=-(i+e)/(i-e),S=-(r+l)/(r-l);let T,N;if(p)T=1/(f-c),N=f/(f-c);else if(h===Zi)T=-2/(f-c),N=-(f+c)/(f-c);else if(h===Ou)T=-1/(f-c),N=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=N,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Iu.prototype.isMatrix4=!0;let vn=Iu;const Gr=new de,wi=new vn,p1=new de(0,0,0),m1=new de(1,1,1),ss=new de,jc=new de,ai=new de,h_=new vn,p_=new po;class ir{constructor(e=0,i=0,r=0,l=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],_=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return h_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(h_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return p_.setFromEuler(this),this.setFromQuaternion(p_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class Vx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g1=0;const m_=new de,Vr=new po,_a=new vn,Qc=new de,cl=new de,v1=new de,_1=new po,g_=new de(1,0,0),v_=new de(0,1,0),__=new de(0,0,1),x_={type:"added"},x1={type:"removed"},kr={type:"childadded",child:null},fh={type:"childremoved",child:null};class oi extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=Ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const e=new de,i=new ir,r=new po,l=new de(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new vn},normalMatrix:{value:new ht}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Vr.setFromAxisAngle(e,i),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,i){return Vr.setFromAxisAngle(e,i),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(g_,e)}rotateY(e){return this.rotateOnAxis(v_,e)}rotateZ(e){return this.rotateOnAxis(__,e)}translateOnAxis(e,i){return m_.copy(e).applyQuaternion(this.quaternion),this.position.add(m_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(g_,e)}translateY(e){return this.translateOnAxis(v_,e)}translateZ(e){return this.translateOnAxis(__,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Qc.copy(e):Qc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(cl,Qc,this.up):_a.lookAt(Qc,cl,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Vr.setFromRotationMatrix(_a),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(x_),kr.child=e,this.dispatchEvent(kr),kr.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(x1),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(x_),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,v1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,_1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let f=0,h=c.length;f<h;f++)c[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(i){const h=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),v=f(e.shapes),g=f(e.skeletons),S=f(e.animations),T=f(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=l,r;function f(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}oi.DEFAULT_UP=new de(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jc extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S1={type:"move"};class dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const N of e.hand.values()){const y=i.getJointPose(N,r),x=this._getHandJoint(m,N);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&g>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(S1)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Jc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},$c={h:0,s:0,l:0};function hh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Mt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ct.workingColorSpace){if(e=o1(e,1),i=Dt(i,0,1),r=Dt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=hh(f,c,e+1/3),this.g=hh(f,c,e),this.b=hh(f,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function r(c){c!==void 0&&parseFloat(c)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:dt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const r=kx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Ct.workingToColorSpace(Nn.copy(this),e),Math.round(Dt(Nn.r*255,0,255))*65536+Math.round(Dt(Nn.g*255,0,255))*256+Math.round(Dt(Nn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const _=(h+f)/2;if(h===f)p=0,m=0;else{const v=f-h;switch(m=_<=.5?v/(f+h):v/(2-f-h),f){case r:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-r)/v+2;break;case c:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Nn.copy(this),i),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Si){Ct.workingToColorSpace(Nn.copy(this),e);const i=Nn.r,r=Nn.g,l=Nn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+i,rs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(rs),e.getHSL($c);const r=rh(rs.h,$c.h,i),l=rh(rs.s,$c.s,i),c=rh(rs.l,$c.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Mt;Mt.NAMES=kx;class y1 extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new de,xa=new de,ph=new de,Sa=new de,Wr=new de,Xr=new de,S_=new de,mh=new de,gh=new de,vh=new de,_h=new rn,xh=new rn,Sh=new rn;class Li{constructor(e=new de,i=new de,r=new de){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),xa.subVectors(r,i),ph.subVectors(e,i);const f=Ri.dot(Ri),h=Ri.dot(xa),p=Ri.dot(ph),m=xa.dot(xa),_=xa.dot(ph),v=f*m-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(m*p-h*_)*g,T=(f*_-h*p)*g;return c.set(1-S-T,T,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,r,l,c,f,h,p){return this.getBarycoord(e,i,r,l,Sa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Sa.x),p.addScaledVector(f,Sa.y),p.addScaledVector(h,Sa.z),p)}static getInterpolatedAttribute(e,i,r,l,c,f){return _h.setScalar(0),xh.setScalar(0),Sh.setScalar(0),_h.fromBufferAttribute(e,i),xh.fromBufferAttribute(e,r),Sh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(_h,c.x),f.addScaledVector(xh,c.y),f.addScaledVector(Sh,c.z),f}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),xa.subVectors(e,i),Ri.cross(xa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ri.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Li.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Wr.subVectors(l,r),Xr.subVectors(c,r),mh.subVectors(e,r);const p=Wr.dot(mh),m=Xr.dot(mh);if(p<=0&&m<=0)return i.copy(r);gh.subVectors(e,l);const _=Wr.dot(gh),v=Xr.dot(gh);if(_>=0&&v<=_)return i.copy(l);const g=p*v-_*m;if(g<=0&&p>=0&&_<=0)return f=p/(p-_),i.copy(r).addScaledVector(Wr,f);vh.subVectors(e,c);const S=Wr.dot(vh),T=Xr.dot(vh);if(T>=0&&S<=T)return i.copy(c);const N=S*m-p*T;if(N<=0&&m>=0&&T<=0)return h=m/(m-T),i.copy(r).addScaledVector(Xr,h);const y=_*T-S*v;if(y<=0&&v-_>=0&&S-T>=0)return S_.subVectors(c,l),h=(v-_)/(v-_+(S-T)),i.copy(l).addScaledVector(S_,h);const x=1/(y+N+g);return f=N*x,h=g*x,i.copy(r).addScaledVector(Wr,f).addScaledVector(Xr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ll{constructor(e=new de(1/0,1/0,1/0),i=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ci):Ci.fromBufferAttribute(c,f),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),eu.copy(r.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),tu.subVectors(this.max,ul),qr.subVectors(e.a,ul),Yr.subVectors(e.b,ul),Zr.subVectors(e.c,ul),os.subVectors(Yr,qr),ls.subVectors(Zr,Yr),Fs.subVectors(qr,Zr);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Fs.z,Fs.y,os.z,0,-os.x,ls.z,0,-ls.x,Fs.z,0,-Fs.x,-os.y,os.x,0,-ls.y,ls.x,0,-Fs.y,Fs.x,0];return!yh(i,qr,Yr,Zr,tu)||(i=[1,0,0,0,1,0,0,0,1],!yh(i,qr,Yr,Zr,tu))?!1:(nu.crossVectors(os,ls),i=[nu.x,nu.y,nu.z],yh(i,qr,Yr,Zr,tu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ya=[new de,new de,new de,new de,new de,new de,new de,new de],Ci=new de,eu=new Ll,qr=new de,Yr=new de,Zr=new de,os=new de,ls=new de,Fs=new de,ul=new de,tu=new de,nu=new de,Hs=new de;function yh(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Hs.fromArray(s,c);const h=l.x*Math.abs(Hs.x)+l.y*Math.abs(Hs.y)+l.z*Math.abs(Hs.z),p=e.dot(Hs),m=i.dot(Hs),_=r.dot(Hs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const gn=new de,iu=new zt;let M1=0;class Ra extends rr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=n1,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)iu.fromBufferAttribute(this,i),iu.applyMatrix3(e),this.setXY(i,iu.x,iu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ll(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ll(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ll(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ll(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ll(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wx extends Ra{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Xx extends Ra{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ca extends Ra{constructor(e,i,r){super(new Float32Array(e),i,r)}}const b1=new Ll,fl=new de,Mh=new de;class $p{constructor(e=new de,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):b1.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fl.subVectors(e,this.center);const i=fl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(fl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fl.copy(e.center).add(Mh)),this.expandByPoint(fl.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let E1=0;const _i=new vn,bh=new oi,Kr=new de,si=new Ll,dl=new Ll,bn=new de;class Na extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i1(e)?Xx:Wx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,i,r){return _i.makeTranslation(e,i,r),this.applyMatrix4(_i),this}scale(e,i,r){return _i.makeScale(e,i,r),this.applyMatrix4(_i),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ca(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ll);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];si.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $p);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];dl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(si.min,dl.min),si.expandByPoint(bn),bn.addVectors(si.max,dl.max),si.expandByPoint(bn)):(si.expandByPoint(dl.min),si.expandByPoint(dl.max))}si.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)bn.fromBufferAttribute(h,m),p&&(Kr.fromBufferAttribute(e,m),bn.add(Kr)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new Ra(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const h=[],p=[];for(let E=0;E<r.count;E++)h[E]=new de,p[E]=new de;const m=new de,_=new de,v=new de,g=new zt,S=new zt,T=new zt,N=new de,y=new de;function x(E,R,z){m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,R),v.fromBufferAttribute(r,z),g.fromBufferAttribute(c,E),S.fromBufferAttribute(c,R),T.fromBufferAttribute(c,z),_.sub(m),v.sub(m),S.sub(g),T.sub(g);const F=1/(S.x*T.y-T.x*S.y);isFinite(F)&&(N.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(F),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(F),h[E].add(N),h[R].add(N),h[z].add(N),p[E].add(y),p[R].add(y),p[z].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let E=0,R=O.length;E<R;++E){const z=O[E],F=z.start,V=z.count;for(let K=F,H=F+V;K<H;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const I=new de,A=new de,C=new de,U=new de;function L(E){C.fromBufferAttribute(l,E),U.copy(C);const R=h[E];I.copy(R),I.sub(C.multiplyScalar(C.dot(R))).normalize(),A.crossVectors(U,R);const F=A.dot(p[E])<0?-1:1;f.setXYZW(E,I.x,I.y,I.z,F)}for(let E=0,R=O.length;E<R;++E){const z=O[E],F=z.start,V=z.count;for(let K=F,H=F+V;K<H;K+=3)L(e.getX(K+0)),L(e.getX(K+1)),L(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ra(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const l=new de,c=new de,f=new de,h=new de,p=new de,m=new de,_=new de,v=new de;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),N=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,y),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,y),h.add(_),p.add(_),m.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(N,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,p){const m=h.array,_=h.itemSize,v=h.normalized,g=new m.constructor(p.length*_);let S=0,T=0;for(let N=0,y=p.length;N<y;N++){h.isInterleavedBufferAttribute?S=p[N]*h.data.stride+h.offset:S=p[N]*_;for(let x=0;x<_;x++)g[T++]=m[S++]}return new Ra(g,_,v)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Na,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let _=0,v=m.length;_<v;_++){const g=m[_],S=e(g,r);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,g=m.length;v<g;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=e.morphAttributes;for(const m in c){const _=[],v=c[m];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new de,T1=new de,A1=new ht;class fs{constructor(e=new de(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Eh.subVectors(r,i).cross(T1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Eh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||A1.getNormalMatrix(e),l=this.coplanarPoint(Eh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let w1=0;class Hu extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Ul(),this.name="",this.type="Material",this.blending=so,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mx,this.blendDst=bx,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ah,this.stencilZFail=ah,this.stencilZPass=ah,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){dt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new fs().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new zt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ma=new de,Th=new de,au=new de,su=new de;let R1=class{constructor(e=new de,i=new de(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Th.copy(e).add(i).multiplyScalar(.5),au.copy(i).sub(e).normalize(),su.copy(this.origin).sub(Th);const c=e.distanceTo(i)*.5,f=-this.direction.dot(au),h=su.dot(this.direction),p=-su.dot(au),m=su.lengthSq(),_=Math.abs(1-f*f);let v,g,S,T;if(_>0)if(v=f*p-h,g=f*h-p,T=c*_,v>=0)if(g>=-T)if(g<=T){const N=1/_;v*=N,g*=N,S=v*(v+f*g+2*h)+g*(f*v+g+2*p)+m}else g=c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*p)+m;else g=-c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*p)+m;else g<=-T?(v=Math.max(0,-(-f*c+h)),g=v>0?-c:Math.min(Math.max(-c,-p),c),S=-v*v+g*(g+2*p)+m):g<=T?(v=0,g=Math.min(Math.max(-c,-p),c),S=g*(g+2*p)+m):(v=Math.max(0,-(f*c+h)),g=v>0?c:Math.min(Math.max(-c,-p),c),S=-v*v+g*(g+2*p)+m);else g=f>0?-c:c,v=Math.max(0,-(f*g+h)),S=-v*v+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Th).addScaledVector(au,g),S}intersectSphere(e,i){if(e.radius<0)return null;Ma.subVectors(e.center,this.origin);const r=Ma.dot(this.direction),l=Ma.dot(Ma)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,l=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,l=(e.min.x-g.x)*m),_>=0?(c=(e.min.y-g.y)*_,f=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,f=(e.min.y-g.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-g.z)*v,p=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,p=(e.min.z-g.z)*v),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ma)!==null}intersectTriangle(e,i,r,l,c){const f=this.origin,h=this.direction,p=h.x,m=h.y,_=h.z,v=e.x-f.x,g=e.y-f.y,S=e.z-f.z,T=i.x-f.x,N=i.y-f.y,y=i.z-f.z,x=r.x-f.x,O=r.y-f.y,I=r.z-f.z,A=Math.abs(p),C=Math.abs(m),U=Math.abs(_);let L,E,R,z,F,V,K,H,X,P,G,J;if(A>=C&&A>=U?(R=p,V=v,X=T,J=x,p>=0?(L=m,E=_,z=g,F=S,K=N,H=y,P=O,G=I):(L=_,E=m,z=S,F=g,K=y,H=N,P=I,G=O)):C>=U?(R=m,V=g,X=N,J=O,m>=0?(L=_,E=p,z=S,F=v,K=y,H=T,P=I,G=x):(L=p,E=_,z=v,F=S,K=T,H=y,P=x,G=I)):(R=_,V=S,X=y,J=I,_>=0?(L=p,E=m,z=v,F=g,K=T,H=N,P=x,G=O):(L=m,E=p,z=g,F=v,K=N,H=T,P=O,G=x)),R===0)return null;const q=L/R,ee=E/R,ne=1/R,ye=z-q*V,Me=F-ee*V,Ye=K-q*X,Ue=H-ee*X,Ge=P-q*J,ae=G-ee*J,ce=Ge*Ue-ae*Ye,we=ye*ae-Me*Ge,Ie=Ye*Me-Ue*ye;if(l){if(ce<0||we<0||Ie<0)return null}else if((ce<0||we<0||Ie<0)&&(ce>0||we>0||Ie>0))return null;const Re=ce+we+Ie;if(Re===0)return null;const be=ne*(ce*V+we*X+Ie*J);return(Re>0?be<0:be>0)?null:this.at(be/Re,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class qx extends Hu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=Ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const y_=new vn,Gs=new R1,ru=new $p,M_=new de,ou=new de,lu=new de,cu=new de,Ah=new de,uu=new de,b_=new de,fu=new de;class $i extends oi{constructor(e=new Na,i=new qx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){uu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=h[p],v=c[p];_!==0&&(Ah.fromBufferAttribute(v,e),f?uu.addScaledVector(Ah,_):uu.addScaledVector(Ah.sub(i),_))}i.add(uu)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ru.copy(r.boundingSphere),ru.applyMatrix4(c),Gs.copy(e.ray).recast(e.near),!(ru.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(ru,M_)===null||Gs.origin.distanceToSquared(M_)>(e.far-e.near)**2))&&(y_.copy(c).invert(),Gs.copy(e.ray).applyMatrix4(y_),!(r.boundingBox!==null&&Gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Gs)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let T=0,N=g.length;T<N;T++){const y=g[T],x=f[y.materialIndex],O=Math.max(y.start,S.start),I=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let A=O,C=I;A<C;A+=3){const U=h.getX(A),L=h.getX(A+1),E=h.getX(A+2);l=du(this,x,e,r,m,_,v,U,L,E),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),N=Math.min(h.count,S.start+S.count);for(let y=T,x=N;y<x;y+=3){const O=h.getX(y),I=h.getX(y+1),A=h.getX(y+2);l=du(this,f,e,r,m,_,v,O,I,A),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,N=g.length;T<N;T++){const y=g[T],x=f[y.materialIndex],O=Math.max(y.start,S.start),I=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let A=O,C=I;A<C;A+=3){const U=A,L=A+1,E=A+2;l=du(this,x,e,r,m,_,v,U,L,E),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),N=Math.min(p.count,S.start+S.count);for(let y=T,x=N;y<x;y+=3){const O=y,I=y+1,A=y+2;l=du(this,f,e,r,m,_,v,O,I,A),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function C1(s,e,i,r,l,c,f,h){let p;if(e.side===Zn?p=r.intersectTriangle(f,c,l,!0,h):p=r.intersectTriangle(l,c,f,e.side===er,h),p===null)return null;fu.copy(h),fu.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(fu);return m<i.near||m>i.far?null:{distance:m,point:fu.clone(),object:s}}function du(s,e,i,r,l,c,f,h,p,m){s.getVertexPosition(h,ou),s.getVertexPosition(p,lu),s.getVertexPosition(m,cu);const _=C1(s,e,i,r,ou,lu,cu,b_);if(_){const v=new de;Li.getBarycoord(b_,ou,lu,cu,v),l&&(_.uv=Li.getInterpolatedAttribute(l,h,p,m,v,new zt)),c&&(_.uv1=Li.getInterpolatedAttribute(c,h,p,m,v,new zt)),f&&(_.normal=Li.getInterpolatedAttribute(f,h,p,m,v,new de),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new de,materialIndex:0};Li.getNormal(ou,lu,cu,g.normal),_.face=g,_.barycoord=v}return _}class D1 extends Bn{constructor(e=null,i=1,r=1,l,c,f,h,p,m=Cn,_=Cn,v,g){super(null,f,h,p,m,_,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vs=new $p,N1=new zt(.5,.5),hu=new de;class Yx{constructor(e=new fs,i=new fs,r=new fs,l=new fs,c=new fs,f=new fs){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Zi,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],p=c[2],m=c[3],_=c[4],v=c[5],g=c[6],S=c[7],T=c[8],N=c[9],y=c[10],x=c[11],O=c[12],I=c[13],A=c[14],C=c[15];if(l[0].setComponents(m-f,S-_,x-T,C-O).normalize(),l[1].setComponents(m+f,S+_,x+T,C+O).normalize(),l[2].setComponents(m+h,S+v,x+N,C+I).normalize(),l[3].setComponents(m-h,S-v,x-N,C-I).normalize(),r)l[4].setComponents(p,g,y,A).normalize(),l[5].setComponents(m-p,S-g,x-y,C-A).normalize();else if(l[4].setComponents(m-p,S-g,x-y,C-A).normalize(),i===Zi)l[5].setComponents(m+p,S+g,x+y,C+A).normalize();else if(i===Ou)l[5].setComponents(p,g,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const i=N1.distanceTo(e.center);return Vs.radius=.7071067811865476+i,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(hu.x=l.normal.x>0?e.max.x:e.min.x,hu.y=l.normal.y>0?e.max.y:e.min.y,hu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zx extends Bn{constructor(e=[],i=tr,r,l,c,f,h,p,m,_){super(e,i,r,l,c,f,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cl extends Bn{constructor(e,i,r=Qi,l,c,f,h=Cn,p=Cn,m,_=Da,v=1){if(_!==Da&&_!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,f,h,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class U1 extends Cl{constructor(e,i=Qi,r=tr,l,c,f=Cn,h=Cn,p,m=Da){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,r,l,c,f,h,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ol extends Na{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],_=[],v=[];let g=0,S=0;T("z","y","x",-1,-1,r,i,e,f,c,0),T("z","y","x",1,-1,r,i,-e,f,c,1),T("x","z","y",1,1,e,r,i,l,f,2),T("x","z","y",1,-1,e,r,-i,l,f,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Ca(m,3)),this.setAttribute("normal",new Ca(_,3)),this.setAttribute("uv",new Ca(v,2));function T(N,y,x,O,I,A,C,U,L,E,R){const z=A/L,F=C/E,V=A/2,K=C/2,H=U/2,X=L+1,P=E+1;let G=0,J=0;const q=new de;for(let ee=0;ee<P;ee++){const ne=ee*F-K;for(let ye=0;ye<X;ye++){const Me=ye*z-V;q[N]=Me*O,q[y]=ne*I,q[x]=H,m.push(q.x,q.y,q.z),q[N]=0,q[y]=0,q[x]=U>0?1:-1,_.push(q.x,q.y,q.z),v.push(ye/L),v.push(1-ee/E),G+=1}}for(let ee=0;ee<E;ee++)for(let ne=0;ne<L;ne++){const ye=g+ne+X*ee,Me=g+ne+X*(ee+1),Ye=g+(ne+1)+X*(ee+1),Ue=g+(ne+1)+X*ee;p.push(ye,Me,Ue),p.push(Me,Ye,Ue),J+=6}h.addGroup(S,J,R),S+=J,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pl extends Na{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,_=p+1,v=e/h,g=i/p,S=[],T=[],N=[],y=[];for(let x=0;x<_;x++){const O=x*g-f;for(let I=0;I<m;I++){const A=I*v-c;T.push(A,-O,0),N.push(0,0,1),y.push(I/h),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let O=0;O<h;O++){const I=O+m*x,A=O+m*(x+1),C=O+1+m*(x+1),U=O+1+m*x;S.push(I,A,U),S.push(A,C,U)}this.setIndex(S),this.setAttribute("position",new Ca(T,3)),this.setAttribute("normal",new Ca(N,3)),this.setAttribute("uv",new Ca(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.widthSegments,e.heightSegments)}}function fo(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(E_(l))l.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(E_(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=fo(s[i]);for(const l in r)e[l]=r[l]}return e}function E_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function L1(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function jx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const O1={clone:fo,merge:In};var P1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Hu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P1,this.fragmentShader=I1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=L1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(l.value);break;case"v2":this.uniforms[r].value=new zt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new de().fromArray(l.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new ht().fromArray(l.value);break;case"m4":this.uniforms[r].value=new vn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class z1 extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class B1 extends Hu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F1 extends Hu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pu=new de,mu=new po,Wi=new de;class Qx extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pu,mu,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(pu,mu,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pu,mu,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cs=new de,T_=new zt,A_=new zt;class Ni extends Qx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Op*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,i){return this.getViewBounds(e,T_,A_),i.subVectors(A_,T_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(sh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class em extends Qx{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const jr=-90,Qr=1;class H1 extends oi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ni(jr,Qr,e,i);l.layers=this.layers,this.add(l);const c=new Ni(jr,Qr,e,i);c.layers=this.layers,this.add(c);const f=new Ni(jr,Qr,e,i);f.layers=this.layers,this.add(f);const h=new Ni(jr,Qr,e,i);h.layers=this.layers,this.add(h);const p=new Ni(jr,Qr,e,i);p.layers=this.layers,this.add(p);const m=new Ni(jr,Qr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(e===Zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ou)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class G1 extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lm=class lm{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};lm.prototype.isMatrix2=!0;let w_=lm;function R_(s,e,i,r){const l=V1(r);switch(i){case zx:return s*e;case Fx:return s*e/l.components*l.byteLength;case Yp:return s*e/l.components*l.byteLength;case nr:return s*e*2/l.components*l.byteLength;case Zp:return s*e*2/l.components*l.byteLength;case Bx:return s*e*3/l.components*l.byteLength;case Oi:return s*e*4/l.components*l.byteLength;case Kp:return s*e*4/l.components*l.byteLength;case bu:case Eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Au:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sp:case op:return Math.max(s,16)*Math.max(e,8)/4;case ap:case rp:return Math.max(s,8)*Math.max(e,8)/2;case lp:case cp:case fp:case dp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case up:case Du:case hp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gp:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vp:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _p:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yp:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bp:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case wp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rp:case Cp:case Dp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Np:case Up:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nu:case Lp:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function V1(s){switch(s){case yi:case Lx:return{byteLength:1,components:1};case wl:case Ox:case Ji:return{byteLength:2,components:1};case Xp:case qp:return{byteLength:2,components:4};case Qi:case Wp:case Yi:return{byteLength:4,components:1};case Px:case Ix:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);function Jx(){let s=null,e=!1,i=null,r=null;function l(c,f){r=s.requestAnimationFrame(l),i(c,f)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function k1(s){const e=new WeakMap;function i(h,p){const m=h.array,_=h.usage,v=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,_),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,h),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<v.length;S++){const T=v[g],N=v[S];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++g,v[g]=N)}v.length=g+1;for(let S=0,T=v.length;S<T;S++){const N=v[S];s.bufferSubData(m,N.start*_.BYTES_PER_ELEMENT,_,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var W1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",yE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,IE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,S2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,w2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,O2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ST=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:W1,alphahash_pars_fragment:X1,alphamap_fragment:q1,alphamap_pars_fragment:Y1,alphatest_fragment:Z1,alphatest_pars_fragment:K1,aomap_fragment:j1,aomap_pars_fragment:Q1,batching_pars_vertex:J1,batching_vertex:$1,begin_vertex:eE,beginnormal_vertex:tE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:aE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:lE,color_fragment:cE,color_pars_fragment:uE,color_pars_vertex:fE,color_vertex:dE,common:hE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:vE,emissivemap_fragment:_E,emissivemap_pars_fragment:xE,colorspace_fragment:SE,colorspace_pars_fragment:yE,envmap_fragment:ME,envmap_common_pars_fragment:bE,envmap_pars_fragment:EE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:IE,envmap_vertex:AE,fog_vertex:wE,fog_pars_vertex:RE,fog_fragment:CE,fog_pars_fragment:DE,gradientmap_pars_fragment:NE,lightmap_pars_fragment:UE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:OE,lights_pars_begin:PE,lights_toon_fragment:zE,lights_toon_pars_fragment:BE,lights_phong_fragment:FE,lights_phong_pars_fragment:HE,lights_physical_fragment:GE,lights_physical_pars_fragment:VE,lights_fragment_begin:kE,lights_fragment_maps:WE,lights_fragment_end:XE,lightprobes_pars_fragment:qE,logdepthbuf_fragment:YE,logdepthbuf_pars_fragment:ZE,logdepthbuf_pars_vertex:KE,logdepthbuf_vertex:jE,map_fragment:QE,map_pars_fragment:JE,map_particle_fragment:$E,map_particle_pars_fragment:e2,metalnessmap_fragment:t2,metalnessmap_pars_fragment:n2,morphinstance_vertex:i2,morphcolor_vertex:a2,morphnormal_vertex:s2,morphtarget_pars_vertex:r2,morphtarget_vertex:o2,normal_fragment_begin:l2,normal_fragment_maps:c2,normal_pars_fragment:u2,normal_pars_vertex:f2,normal_vertex:d2,normalmap_pars_fragment:h2,clearcoat_normal_fragment_begin:p2,clearcoat_normal_fragment_maps:m2,clearcoat_pars_fragment:g2,iridescence_pars_fragment:v2,opaque_fragment:_2,packing:x2,premultiplied_alpha_fragment:S2,project_vertex:y2,dithering_fragment:M2,dithering_pars_fragment:b2,roughnessmap_fragment:E2,roughnessmap_pars_fragment:T2,shadowmap_pars_fragment:A2,shadowmap_pars_vertex:w2,shadowmap_vertex:R2,shadowmask_pars_fragment:C2,skinbase_vertex:D2,skinning_pars_vertex:N2,skinning_vertex:U2,skinnormal_vertex:L2,specularmap_fragment:O2,specularmap_pars_fragment:P2,tonemapping_fragment:I2,tonemapping_pars_fragment:z2,transmission_fragment:B2,transmission_pars_fragment:F2,uv_pars_fragment:H2,uv_pars_vertex:G2,uv_vertex:V2,worldpos_vertex:k2,background_vert:W2,background_frag:X2,backgroundCube_vert:q2,backgroundCube_frag:Y2,cube_vert:Z2,cube_frag:K2,depth_vert:j2,depth_frag:Q2,distance_vert:J2,distance_frag:$2,equirect_vert:eT,equirect_frag:tT,linedashed_vert:nT,linedashed_frag:iT,meshbasic_vert:aT,meshbasic_frag:sT,meshlambert_vert:rT,meshlambert_frag:oT,meshmatcap_vert:lT,meshmatcap_frag:cT,meshnormal_vert:uT,meshnormal_frag:fT,meshphong_vert:dT,meshphong_frag:hT,meshphysical_vert:pT,meshphysical_frag:mT,meshtoon_vert:gT,meshtoon_frag:vT,points_vert:_T,points_frag:xT,shadow_vert:ST,shadow_frag:yT,sprite_vert:MT,sprite_frag:bT},Be={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new de},probesMax:{value:new de},probesResolution:{value:new de}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},qi={basic:{uniforms:In([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:In([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:In([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:In([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:In([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Mt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:In([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:In([Be.points,Be.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:In([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:In([Be.common,Be.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:In([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:In([Be.sprite,Be.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:In([Be.common,Be.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:In([Be.lights,Be.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};qi.physical={uniforms:In([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const gu={r:0,b:0,g:0},ET=new vn,$x=new ht;$x.set(-1,0,0,0,1,0,0,0,1);function TT(s,e,i,r,l,c){const f=new Mt(0);let h=l===!0?0:1,p,m,_=null,v=0,g=null;function S(O){let I=O.isScene===!0?O.background:null;if(I&&I.isTexture){const A=O.backgroundBlurriness>0;I=e.get(I,A)}return I}function T(O){let I=!1;const A=S(O);A===null?y(f,h):A&&A.isColor&&(y(A,1),I=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,c):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function N(O,I){const A=S(I);A&&(A.isCubeTexture||A.mapping===Fu)?(m===void 0&&(m=new $i(new Ol(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:fo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(C,U,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=A,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(I.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply($x),m.material.toneMapped=Ct.getTransfer(A.colorSpace)!==kt,(_!==A||v!==A.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=A,v=A.version,g=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new $i(new Pl(2,2),new zi({name:"BackgroundMaterial",uniforms:fo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(A.colorSpace)!==kt,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||v!==A.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,_=A,v=A.version,g=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function y(O,I){O.getRGB(gu,jx(s)),i.buffers.color.setClear(gu.r,gu.g,gu.b,I,c)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(O,I=1){f.set(O),h=I,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,y(f,h)},render:T,addToRenderList:N,dispose:x}}function AT(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,f=!1;function h(F,V,K,H,X){let P=!1;const G=v(F,H,K,V);c!==G&&(c=G,m(c.object)),P=S(F,H,K,X),P&&T(F,H,K,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(P||f)&&(f=!1,A(F,V,K,H),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function p(){return s.createVertexArray()}function m(F){return s.bindVertexArray(F)}function _(F){return s.deleteVertexArray(F)}function v(F,V,K,H){const X=H.wireframe===!0;let P=r[V.id];P===void 0&&(P={},r[V.id]=P);const G=F.isInstancedMesh===!0?F.id:0;let J=P[G];J===void 0&&(J={},P[G]=J);let q=J[K.id];q===void 0&&(q={},J[K.id]=q);let ee=q[X];return ee===void 0&&(ee=g(p()),q[X]=ee),ee}function g(F){const V=[],K=[],H=[];for(let X=0;X<i;X++)V[X]=0,K[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:H,object:F,attributes:{},index:null}}function S(F,V,K,H){const X=c.attributes,P=V.attributes;let G=0;const J=K.getAttributes();for(const q in J)if(J[q].location>=0){const ne=X[q];let ye=P[q];if(ye===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor)),ne===void 0||ne.attribute!==ye||ye&&ne.data!==ye.data)return!0;G++}return c.attributesNum!==G||c.index!==H}function T(F,V,K,H){const X={},P=V.attributes;let G=0;const J=K.getAttributes();for(const q in J)if(J[q].location>=0){let ne=P[q];ne===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor));const ye={};ye.attribute=ne,ne&&ne.data&&(ye.data=ne.data),X[q]=ye,G++}c.attributes=X,c.attributesNum=G,c.index=H}function N(){const F=c.newAttributes;for(let V=0,K=F.length;V<K;V++)F[V]=0}function y(F){x(F,0)}function x(F,V){const K=c.newAttributes,H=c.enabledAttributes,X=c.attributeDivisors;K[F]=1,H[F]===0&&(s.enableVertexAttribArray(F),H[F]=1),X[F]!==V&&(s.vertexAttribDivisor(F,V),X[F]=V)}function O(){const F=c.newAttributes,V=c.enabledAttributes;for(let K=0,H=V.length;K<H;K++)V[K]!==F[K]&&(s.disableVertexAttribArray(K),V[K]=0)}function I(F,V,K,H,X,P,G){G===!0?s.vertexAttribIPointer(F,V,K,X,P):s.vertexAttribPointer(F,V,K,H,X,P)}function A(F,V,K,H){N();const X=H.attributes,P=K.getAttributes(),G=V.defaultAttributeValues;for(const J in P){const q=P[J];if(q.location>=0){let ee=X[J];if(ee===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),ee!==void 0){const ne=ee.normalized,ye=ee.itemSize,Me=e.get(ee);if(Me===void 0)continue;const Ye=Me.buffer,Ue=Me.type,Ge=Me.bytesPerElement,ae=Ue===s.INT||Ue===s.UNSIGNED_INT||ee.gpuType===Wp;if(ee.isInterleavedBufferAttribute){const ce=ee.data,we=ce.stride,Ie=ee.offset;if(ce.isInstancedInterleavedBuffer){for(let Re=0;Re<q.locationSize;Re++)x(q.location+Re,ce.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Re=0;Re<q.locationSize;Re++)y(q.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let Re=0;Re<q.locationSize;Re++)I(q.location+Re,ye/q.locationSize,Ue,ne,we*Ge,(Ie+ye/q.locationSize*Re)*Ge,ae)}else{if(ee.isInstancedBufferAttribute){for(let ce=0;ce<q.locationSize;ce++)x(q.location+ce,ee.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ce=0;ce<q.locationSize;ce++)y(q.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let ce=0;ce<q.locationSize;ce++)I(q.location+ce,ye/q.locationSize,Ue,ne,ye*Ge,ye/q.locationSize*ce*Ge,ae)}}else if(G!==void 0){const ne=G[J];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(q.location,ne);break;case 3:s.vertexAttrib3fv(q.location,ne);break;case 4:s.vertexAttrib4fv(q.location,ne);break;default:s.vertexAttrib1fv(q.location,ne)}}}}O()}function C(){R();for(const F in r){const V=r[F];for(const K in V){const H=V[K];for(const X in H){const P=H[X];for(const G in P)_(P[G].object),delete P[G];delete H[X]}}delete r[F]}}function U(F){if(r[F.id]===void 0)return;const V=r[F.id];for(const K in V){const H=V[K];for(const X in H){const P=H[X];for(const G in P)_(P[G].object),delete P[G];delete H[X]}}delete r[F.id]}function L(F){for(const V in r){const K=r[V];for(const H in K){const X=K[H];if(X[F.id]===void 0)continue;const P=X[F.id];for(const G in P)_(P[G].object),delete P[G];delete X[F.id]}}}function E(F){for(const V in r){const K=r[V],H=F.isInstancedMesh===!0?F.id:0,X=K[H];if(X!==void 0){for(const P in X){const G=X[P];for(const J in G)_(G[J].object),delete G[J];delete X[P]}delete K[H],Object.keys(K).length===0&&delete r[V]}}}function R(){z(),f=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:R,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:L,initAttributes:N,enableAttribute:y,disableUnusedAttributes:O}}function wT(s,e,i){let r;function l(p){r=p}function c(p,m){s.drawArrays(r,p,m),i.update(m,r,1)}function f(p,m,_){_!==0&&(s.drawArraysInstanced(r,p,m,_),i.update(m,r,_))}function h(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let g=0;for(let S=0;S<_;S++)g+=m[S];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function RT(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(L){return!(L!==Oi&&r.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(L){const E=L===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==yi&&L!==Yi&&!E&&r.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(dt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:A,maxSamples:C,samples:U}}function CT(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new fs,h=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||l;return l=g,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const T=v.clippingPlanes,N=v.clipIntersection,y=v.clipShadows,x=s.get(v);if(!l||T===null||T.length===0||c&&!y)c?_(null):m();else{const O=c?0:r,I=O*4;let A=x.clippingState||null;p.value=A,A=_(T,g,I,S);for(let C=0;C!==I;++C)A[C]=i[C];x.clippingState=A,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,S,T){const N=v!==null?v.length:0;let y=null;if(N!==0){if(y=p.value,T!==!0||y===null){const x=S+N*4,O=g.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<x)&&(y=new Float32Array(x));for(let I=0,A=S;I!==N;++I,A+=4)f.copy(v[I]).applyMatrix4(O,h),f.normal.toArray(y,A),y[A+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,y}}const io=4,DT=6,NT=20,UT=256,hl=new em,C_=new Mt;let wh=null,Rh=0,Ch=0,Dh=!1;const LT=new de,ks=new de;class D_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=LT}=c;wh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wh,Rh,Ch),this._renderer.xr.enabled=Dh,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===tr||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wh=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ji,format:Oi,colorSpace:Uu,depthBuffer:!1},l=N_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=OT(c)),this._blurMaterial=IT(c,e,i),this._ggxMaterial=PT(c,e,i)}return l}_compileMaterial(e){const i=new $i(new Na,e);this._renderer.compile(i,hl)}_sceneToCubeUV(e,i,r,l,c){const p=new Ni(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(C_),v.toneMapping=ji,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $i(new Ol,new qx({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,y=N.material;let x=!1;const O=e.background;O?O.isColor&&(y.color.copy(O),e.background=null,x=!0):(y.color.copy(C_),x=!0);for(let I=0;I<6;I++){const A=I%3;A===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[I],c.y,c.z)):A===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[I]));const C=this._cubeSize;Jr(l,A*C,I>2?C:0,C,C),v.setRenderTarget(l),x&&v.render(N,p),v.render(e,p)}v.toneMapping=S,v.autoClear=g,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===tr||e.mapping===uo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const p=this._cubeSize;Jr(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,hl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const p=f.uniforms,m=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-_*_),g=m*1.25,S=v*g,{_lodMax:T}=this,N=this._sizeLods[r],y=3*N*(r>T-io?r-T+io:0),x=4*(this._cubeSize-N);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=T-i,Jr(c,y,x,3*N,2*N),l.setRenderTarget(c),l.render(h,hl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,Jr(e,y,x,3*N,2*N),l.setRenderTarget(e),l.render(h,hl)}_blur(e,i,r,l){const c=this._pingPongRenderTarget,f=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,c,i,r,f),this._blurPass(c,e,r,r,f)}_blurPass(e,i,r,l,c){const f=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-r;const _=this._sizeLods[l],v=3*_*(l>this._lodMax-io?l-this._lodMax+io:0),g=4*(this._cubeSize-_);Jr(i,v,g,3*_,2*_),f.setRenderTarget(i),f.render(p,hl)}}function OT(s){const e=[],i=[];let r=s;const l=s-io+1+DT;for(let c=0;c<l;c++){const f=Math.pow(2,r);e.push(f);const h=1/(f-2),p=-h,m=1+h,_=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,g=6,S=3,T=new Float32Array(S*g*v),N=new Float32Array(S*g*v);for(let x=0;x<v;x++){const O=x%3*2/3-1,I=x>2?0:-1,A=[O,I,0,O+2/3,I,0,O+2/3,I+1,0,O,I,0,O+2/3,I+1,0,O,I+1,0];T.set(A,S*g*x);for(let C=0;C<g;C++){const U=_[C*2]*2-1,L=_[C*2+1]*2-1;x===0?ks.set(1,L,U):x===1?ks.set(-U,1,-L):x===2?ks.set(-U,L,1):x===3?ks.set(-1,L,-U):x===4?ks.set(-U,-1,L):ks.set(U,L,-1),ks.toArray(N,(x*g+C)*S)}}const y=new Na;y.setAttribute("position",new Ra(T,S)),y.setAttribute("outputDirection",new Ra(N,S)),i.push(new $i(y,null)),r>io&&r--}return{lodMeshes:i,sizeLods:e}}function N_(s,e,i){const r=new Ii(s,e,i);return r.texture.mapping=Fu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Jr(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function PT(s,e,i){return new zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function IT(s,e,i){return new zi({name:"SphericalGaussianBlur",defines:{SAMPLES:NT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function U_(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function L_(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Gu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class eS extends Ii{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Zx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ol(5,5,5),c=new zi({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:Aa});c.uniforms.tEquirect.value=i;const f=new $i(l,c),h=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Un),new H1(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}function zT(s){let e=new WeakMap,i=new WeakMap,r=null;function l(g,S=!1){return g==null?null:S?f(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===th||S===nh)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const N=new eS(T.height);return N.fromEquirectangularTexture(s,g),e.set(g,N),g.addEventListener("dispose",m),h(N.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const S=g.mapping,T=S===th||S===nh,N=S===tr||S===uo;if(T||N){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new D_(s)),y=T?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const O=g.image;return T&&O&&O.height>0||N&&O&&p(O)?(r===null&&(r=new D_(s)),y=T?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function h(g,S){return S===th?g.mapping=tr:S===nh&&(g.mapping=uo),g}function p(g){let S=0;const T=6;for(let N=0;N<T;N++)g[N]!==void 0&&S++;return S===T}function m(g){const S=g.target;S.removeEventListener("dispose",m);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const T=i.get(S);T!==void 0&&(i.delete(S),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function BT(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ro("WebGLRenderer: "+r+" extension not supported."),l}}}function FT(s,e,i,r){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",f),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function p(v){const g=v.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function m(v){const g=[],S=v.index,T=v.attributes.position;let N=0;if(T===void 0)return;if(S!==null){const O=S.array;N=S.version;for(let I=0,A=O.length;I<A;I+=3){const C=O[I+0],U=O[I+1],L=O[I+2];g.push(C,U,U,L,L,C)}}else{const O=T.array;N=T.version;for(let I=0,A=O.length/3-1;I<A;I+=3){const C=I+0,U=I+1,L=I+2;g.push(C,U,U,L,L,C)}}const y=new(T.count>=65535?Xx:Wx)(g,1);y.version=N;const x=c.get(v);x&&e.remove(x),c.set(v,y)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:_}}function HT(s,e,i){let r;function l(v){r=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function p(v,g){s.drawElements(r,g,c,v*f),i.update(g,r,1)}function m(v,g,S){S!==0&&(s.drawElementsInstanced(r,g,c,v*f,S),i.update(g,r,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,S);let N=0;for(let y=0;y<S;y++)N+=g[y];i.update(N,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function GT(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:It("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function VT(s,e,i){const r=new WeakMap,l=new rn;function c(f,h,p){const m=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let R=function(){L.dispose(),r.delete(h),h.removeEventListener("dispose",R)};g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,N=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let I=0;S===!0&&(I=1),T===!0&&(I=2),N===!0&&(I=3);let A=h.attributes.position.count*I,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const U=new Float32Array(A*C*4*v),L=new Gx(U,A,C,v);L.type=Yi,L.needsUpdate=!0;const E=I*4;for(let z=0;z<v;z++){const F=y[z],V=x[z],K=O[z],H=A*C*4*z;for(let X=0;X<F.count;X++){const P=X*E;S===!0&&(l.fromBufferAttribute(F,X),U[H+P+0]=l.x,U[H+P+1]=l.y,U[H+P+2]=l.z,U[H+P+3]=0),T===!0&&(l.fromBufferAttribute(V,X),U[H+P+4]=l.x,U[H+P+5]=l.y,U[H+P+6]=l.z,U[H+P+7]=0),N===!0&&(l.fromBufferAttribute(K,X),U[H+P+8]=l.x,U[H+P+9]=l.y,U[H+P+10]=l.z,U[H+P+11]=K.itemSize===4?l.w:1)}}g={count:v,texture:L,size:new zt(A,C)},r.set(h,g),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let S=0;for(let N=0;N<m.length;N++)S+=m[N];const T=h.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function kT(s,e,i,r,l){let c=new WeakMap;function f(m){const _=l.render.frame,v=m.geometry,g=e.get(m,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==_&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const S=m.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const WT={[Tx]:"LINEAR_TONE_MAPPING",[Ax]:"REINHARD_TONE_MAPPING",[wx]:"CINEON_TONE_MAPPING",[Rx]:"ACES_FILMIC_TONE_MAPPING",[Dx]:"AGX_TONE_MAPPING",[Nx]:"NEUTRAL_TONE_MAPPING",[Cx]:"CUSTOM_TONE_MAPPING"};function XT(s,e,i,r,l,c){const f=new Ii(e,i,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new Na;m.setAttribute("position",new Ca([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ca([0,2,0,0,2,0],2));const _=new z1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new $i(m,_),g=new em(-1,1,1,-1,0,1);let S=null,T=null,N=!1,y,x=null,O=[],I=!1;this.setSize=function(A,C){f.setSize(A,C),h!==null&&h.setSize(A,C),p!==null&&p.setSize(A,C);for(let U=0;U<O.length;U++){const L=O[U];L.setSize&&L.setSize(A,C)}},this.setEffects=function(A){O=A,I=O.length>0&&O[0].isRenderPass===!0;const C=f.width,U=f.height;O.length>0&&h===null&&(h=new Ii(C,U,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),p=new Ii(C,U,{type:Ji,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<O.length;L++){const E=O[L];E.setSize&&E.setSize(C,U)}},this.begin=function(A,C){if(N||A.toneMapping===ji&&O.length===0)return!1;if(x=C,C!==null){const U=C.width,L=C.height;(f.width!==U||f.height!==L)&&this.setSize(U,L)}return I===!1&&A.setRenderTarget(f),y=A.toneMapping,A.toneMapping=ji,!0},this.hasRenderPass=function(){return I},this.end=function(A,C){A.toneMapping=y,N=!0;let U=f,L=h;for(let E=0;E<O.length;E++){const R=O[E];R.enabled!==!1&&(R.render(A,L,U,C),R.needsSwap!==!1&&(U=L,L=L===h?p:h))}if(S!==A.outputColorSpace||T!==A.toneMapping){S=A.outputColorSpace,T=A.toneMapping,_.defines={},Ct.getTransfer(S)===kt&&(_.defines.SRGB_TRANSFER="");const E=WT[T];E&&(_.defines[E]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=U.texture,A.setRenderTarget(x),A.render(v,g),x=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){f.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),_.dispose()}}const tS=new Bn,Pp=new Cl(1,1),nS=new Gx,iS=new h1,aS=new Zx,O_=[],P_=[],I_=new Float32Array(16),z_=new Float32Array(9),B_=new Float32Array(4);function mo(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=O_[l];if(c===void 0&&(c=new Float32Array(l),O_[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function Sn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Vu(s,e){let i=P_[e];i===void 0&&(i=new Int32Array(e),P_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function qT(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function YT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function ZT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function KT(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function jT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;B_.set(r),s.uniformMatrix2fv(this.addr,!1,B_),yn(i,r)}}function QT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;z_.set(r),s.uniformMatrix3fv(this.addr,!1,z_),yn(i,r)}}function JT(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;I_.set(r),s.uniformMatrix4fv(this.addr,!1,I_),yn(i,r)}}function $T(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function eA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function tA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function nA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function iA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function aA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function sA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function rA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function oA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Pp.compareFunction=i.isReversedDepthBuffer()?Qp:jp,c=Pp):c=tS,i.setTexture2D(e||c,l)}function lA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||iS,l)}function cA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||aS,l)}function uA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||nS,l)}function fA(s){switch(s){case 5126:return qT;case 35664:return YT;case 35665:return ZT;case 35666:return KT;case 35674:return jT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return $T;case 35667:case 35671:return eA;case 35668:case 35672:return tA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return aA;case 36295:return sA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}function dA(s,e){s.uniform1fv(this.addr,e)}function hA(s,e){const i=mo(e,this.size,2);s.uniform2fv(this.addr,i)}function pA(s,e){const i=mo(e,this.size,3);s.uniform3fv(this.addr,i)}function mA(s,e){const i=mo(e,this.size,4);s.uniform4fv(this.addr,i)}function gA(s,e){const i=mo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function vA(s,e){const i=mo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function _A(s,e){const i=mo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function xA(s,e){s.uniform1iv(this.addr,e)}function SA(s,e){s.uniform2iv(this.addr,e)}function yA(s,e){s.uniform3iv(this.addr,e)}function MA(s,e){s.uniform4iv(this.addr,e)}function bA(s,e){s.uniform1uiv(this.addr,e)}function EA(s,e){s.uniform2uiv(this.addr,e)}function TA(s,e){s.uniform3uiv(this.addr,e)}function AA(s,e){s.uniform4uiv(this.addr,e)}function wA(s,e,i){const r=this.cache,l=e.length,c=Vu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=Pp:f=tS;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function RA(s,e,i){const r=this.cache,l=e.length,c=Vu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||iS,c[f])}function CA(s,e,i){const r=this.cache,l=e.length,c=Vu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||aS,c[f])}function DA(s,e,i){const r=this.cache,l=e.length,c=Vu(i,l);Sn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||nS,c[f])}function NA(s){switch(s){case 5126:return dA;case 35664:return hA;case 35665:return pA;case 35666:return mA;case 35674:return gA;case 35675:return vA;case 35676:return _A;case 5124:case 35670:return xA;case 35667:case 35671:return SA;case 35668:case 35672:return yA;case 35669:case 35673:return MA;case 5125:return bA;case 36294:return EA;case 36295:return TA;case 36296:return AA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return DA}}class UA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=fA(i.type)}}class LA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=NA(i.type)}}class OA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function F_(s,e){s.seq.push(e),s.map[e.id]=e}function PA(s,e,i){const r=s.name,l=r.length;for(Nh.lastIndex=0;;){const c=Nh.exec(r),f=Nh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){F_(i,m===void 0?new UA(h,s,e):new LA(h,s,e));break}else{let v=i.map[h];v===void 0&&(v=new OA(h),F_(i,v)),i=v}}}class wu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(i,f),p=e.getUniformLocation(i,h.name);PA(h,p,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function H_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const IA=37297;let zA=0;function BA(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const G_=new ht;function FA(s){Ct._getMatrix(G_,Ct.workingColorSpace,s);const e=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Lu:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function V_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+BA(s.getShaderSource(e),h)}else return c}function HA(s,e){const i=FA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const GA={[Tx]:"Linear",[Ax]:"Reinhard",[wx]:"Cineon",[Rx]:"ACESFilmic",[Dx]:"AgX",[Nx]:"Neutral",[Cx]:"Custom"};function VA(s,e){const i=GA[e];return i===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vu=new de;function kA(){Ct.getLuminanceCoefficients(vu);const s=vu.x.toFixed(4),e=vu.y.toFixed(4),i=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function XA(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function qA(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function _l(s){return s!==""}function k_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(s){return s.replace(YA,KA)}const ZA=new Map;function KA(s,e){let i=xt[e];if(i===void 0){const r=ZA.get(e);if(r!==void 0)i=xt[r],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ip(i)}const jA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X_(s){return s.replace(jA,QA)}function QA(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function q_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const JA={[Mu]:"SHADOWMAP_TYPE_PCF",[vl]:"SHADOWMAP_TYPE_VSM"};function $A(s){return JA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ew={[tr]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[Fu]:"ENVMAP_TYPE_CUBE_UV"};function tw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":ew[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const nw={[uo]:"ENVMAP_MODE_REFRACTION"};function iw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":nw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aw={[Ex]:"ENVMAP_BLENDING_MULTIPLY",[Wb]:"ENVMAP_BLENDING_MIX",[Xb]:"ENVMAP_BLENDING_ADD"};function sw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":aw[s.combine]||"ENVMAP_BLENDING_NONE"}function rw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function ow(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=$A(i),m=tw(i),_=iw(i),v=sw(i),g=rw(i),S=WA(i),T=XA(c),N=l.createProgram();let y,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(_l).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(_l).join(`
`),x.length>0&&(x+=`
`)):(y=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),x=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?xt.tonemapping_pars_fragment:"",i.toneMapping!==ji?VA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,HA("linearToOutputTexel",i.outputColorSpace),kA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_l).join(`
`)),f=Ip(f),f=k_(f,i),f=W_(f,i),h=Ip(h),h=k_(h,i),h=W_(h,i),f=X_(f),h=X_(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===o_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===o_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=O+y+f,A=O+x+h,C=H_(l,l.VERTEX_SHADER,I),U=H_(l,l.FRAGMENT_SHADER,A);l.attachShader(N,C),l.attachShader(N,U),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function L(F){if(s.debug.checkShaderErrors){const V=l.getProgramInfoLog(N)||"",K=l.getShaderInfoLog(C)||"",H=l.getShaderInfoLog(U)||"",X=V.trim(),P=K.trim(),G=H.trim();let J=!0,q=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,N,C,U);else{const ee=V_(l,C,"vertex"),ne=V_(l,U,"fragment");It("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+ee+`
`+ne)}else X!==""?dt("WebGLProgram: Program Info Log:",X):(P===""||G==="")&&(q=!1);q&&(F.diagnostics={runnable:J,programLog:X,vertexShader:{log:P,prefix:y},fragmentShader:{log:G,prefix:x}})}l.deleteShader(C),l.deleteShader(U),E=new wu(l,N),R=qA(l,N)}let E;this.getUniforms=function(){return E===void 0&&L(this),E};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=l.getProgramParameter(N,IA)),z},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zA++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=C,this.fragmentShader=U,this}let lw=0;class cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new uw(e),i.set(e,r)),r}}class uw{constructor(e){this.id=lw++,this.code=e,this.usedTimes=0}}function fw(s){return s===nr||s===Du||s===Nu}function dw(s,e,i,r,l,c){const f=new Vx,h=new cw,p=new Set,m=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return p.add(E),E===0?"uv":`uv${E}`}function N(E,R,z,F,V,K){const H=F.fog,X=V.geometry,P=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,J=e.get(E.envMap||P,G),q=J&&J.mapping===Fu?J.image.height:null,ee=S[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&dt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const ne=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ye=ne!==void 0?ne.length:0;let Me=0;X.morphAttributes.position!==void 0&&(Me=1),X.morphAttributes.normal!==void 0&&(Me=2),X.morphAttributes.color!==void 0&&(Me=3);let Ye,Ue,Ge,ae;if(ee){const Wt=qi[ee];Ye=Wt.vertexShader,Ue=Wt.fragmentShader}else{Ye=E.vertexShader,Ue=E.fragmentShader;const Wt=h.getVertexShaderStage(E),Ut=h.getFragmentShaderStage(E);h.update(E,Wt,Ut),Ge=Wt.id,ae=Ut.id}const ce=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ie=V.isInstancedMesh===!0,Re=V.isBatchedMesh===!0,be=!!E.map,et=!!E.matcap,Ze=!!J,rt=!!E.aoMap,ft=!!E.lightMap,at=!!E.bumpMap&&E.wireframe===!1,St=!!E.normalMap,Nt=!!E.displacementMap,Kt=!!E.emissiveMap,Tt=!!E.metalnessMap,Ht=!!E.roughnessMap,W=E.anisotropy>0,ot=E.clearcoat>0,lt=E.dispersion>0,B=E.retroreflectivity>0,b=E.iridescence>0,$=E.sheen>0,ie=E.transmission>0,he=W&&!!E.anisotropyMap,Te=ot&&!!E.clearcoatMap,Ee=ot&&!!E.clearcoatNormalMap,me=ot&&!!E.clearcoatRoughnessMap,ge=b&&!!E.iridescenceMap,Ce=b&&!!E.iridescenceThicknessMap,Fe=$&&!!E.sheenColorMap,De=$&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,tt=!!E.specularColorMap,it=!!E.specularIntensityMap,ut=ie&&!!E.transmissionMap,Q=ie&&!!E.thicknessMap,Ne=!!E.gradientMap,_e=!!E.alphaMap,Le=E.alphaTest>0,He=!!E.alphaHash,Ae=!!E.extensions;let $e=ji;E.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&($e=s.toneMapping);const Ke={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:Ye,fragmentShader:Ue,defines:E.defines,customVertexShaderID:Ge,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Re,batchingColor:Re&&V._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&V.instanceColor!==null,instancingMorph:Ie&&V.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:be,matcap:et,envMap:Ze,envMapMode:Ze&&J.mapping,envMapCubeUVHeight:q,aoMap:rt,lightMap:ft,bumpMap:at,normalMap:St,displacementMap:Nt,emissiveMap:Kt,normalMapObjectSpace:St&&E.normalMapType===Zb,normalMapTangentSpace:St&&E.normalMapType===r_,packedNormalMap:St&&E.normalMapType===r_&&fw(E.normalMap.format),metalnessMap:Tt,roughnessMap:Ht,anisotropy:W,anisotropyMap:he,clearcoat:ot,clearcoatMap:Te,clearcoatNormalMap:Ee,clearcoatRoughnessMap:me,dispersion:lt,retroreflection:B,iridescence:b,iridescenceMap:ge,iridescenceThicknessMap:Ce,sheen:$,sheenColorMap:Fe,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:tt,specularIntensityMap:it,transmission:ie,transmissionMap:ut,thicknessMap:Q,gradientMap:Ne,opaque:E.transparent===!1&&E.blending===so&&E.alphaToCoverage===!1,alphaMap:_e,alphaTest:Le,alphaHash:He,combine:E.combine,mapUv:be&&T(E.map.channel),aoMapUv:rt&&T(E.aoMap.channel),lightMapUv:ft&&T(E.lightMap.channel),bumpMapUv:at&&T(E.bumpMap.channel),normalMapUv:St&&T(E.normalMap.channel),displacementMapUv:Nt&&T(E.displacementMap.channel),emissiveMapUv:Kt&&T(E.emissiveMap.channel),metalnessMapUv:Tt&&T(E.metalnessMap.channel),roughnessMapUv:Ht&&T(E.roughnessMap.channel),anisotropyMapUv:he&&T(E.anisotropyMap.channel),clearcoatMapUv:Te&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&T(E.sheenRoughnessMap.channel),specularMapUv:Oe&&T(E.specularMap.channel),specularColorMapUv:tt&&T(E.specularColorMap.channel),specularIntensityMapUv:it&&T(E.specularIntensityMap.channel),transmissionMapUv:ut&&T(E.transmissionMap.channel),thicknessMapUv:Q&&T(E.thicknessMap.channel),alphaMapUv:_e&&T(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(St||W),vertexNormals:!!X.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(be||_e),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||X.attributes.normal===void 0&&St===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Me,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:$e,decodeVideoTexture:be&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===kt,decodeVideoTextureEmissive:Kt&&E.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(E.emissiveMap.colorSpace)===kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ea,flipSided:E.side===Zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&E.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ke.vertexUv1s=p.has(1),Ke.vertexUv2s=p.has(2),Ke.vertexUv3s=p.has(3),p.clear(),Ke}function y(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)R.push(z),R.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(x(R,E),O(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function x(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numSunLights),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numSunLightShadows),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function O(E,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.retroreflection&&f.enable(24),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),R.packedNormalMap&&f.enable(22),R.vertexNormals&&f.enable(23),E.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),R.numLightProbeGrids>0&&f.enable(22),R.hasPositionAttribute&&f.enable(23),E.push(f.mask)}function I(E){const R=S[E.type];let z;if(R){const F=qi[R];z=O1.clone(F.uniforms)}else z=E.uniforms;return z}function A(E,R){let z=_.get(R);return z!==void 0?++z.usedTimes:(z=new ow(s,R,E,l),m.push(z),_.set(R,z)),z}function C(E){if(--E.usedTimes===0){const R=m.indexOf(E);m[R]=m[m.length-1],m.pop(),_.delete(E.cacheKey),E.destroy()}}function U(E){h.remove(E)}function L(){h.dispose()}return{getParameters:N,getProgramCacheKey:y,getUniforms:I,acquireProgram:A,releaseProgram:C,releaseShaderCache:U,programs:m,dispose:L}}function hw(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function pw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Y_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Z_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,T,N,y,x){let O=s[e];return O===void 0?(O={id:g.id,object:g,geometry:S,material:T,materialVariant:f(g),groupOrder:N,renderOrder:g.renderOrder,z:y,group:x},s[e]=O):(O.id=g.id,O.object=g,O.geometry=S,O.material=T,O.materialVariant=f(g),O.groupOrder=N,O.renderOrder=g.renderOrder,O.z=y,O.group=x),e++,O}function p(g,S,T,N,y,x,O){O.reversedDepth===!0&&(y=-y);const I=h(g,S,T,N,y,x);T.transmission>0?r.push(I):T.transparent===!0?l.push(I):i.push(I)}function m(g,S,T,N,y,x){const O=h(g,S,T,N,y,x);T.transmission>0?r.unshift(O):T.transparent===!0?l.unshift(O):i.unshift(O)}function _(g,S){i.length>1&&i.sort(g||pw),r.length>1&&r.sort(S||Y_),l.length>1&&l.sort(S||Y_)}function v(){for(let g=e,S=s.length;g<S;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:p,unshift:m,finish:v,sort:_}}function mw(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new Z_,s.set(r,[f])):l>=c.length?(f=new Z_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function gw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new de,color:new Mt};break;case"SpotLight":i={position:new de,direction:new de,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new de,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new de,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":i={color:new Mt,position:new de,halfWidth:new de,halfHeight:new de};break}return s[e.id]=i,i}}}function vw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let _w=0;function xw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Sw(s){const e=new gw,i=vw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new de);const l=new de,c=new vn,f=new vn;function h(m){let _=0,v=0,g=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let S=0,T=0,N=0,y=0,x=0,O=0,I=0,A=0,C=0,U=0,L=0,E=0,R=0,z=0;m.sort(xw);for(let V=0,K=m.length;V<K;V++){const H=m[V],X=H.color,P=H.intensity,G=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===nr?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=X.r*P,v+=X.g*P,g+=X.b*P;else if(H.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(H.sh.coefficients[q],P);z++}else if(H.isSunLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ee=H.shadow,ne=i.get(H);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),r.sunShadow[T]=ne,r.sunShadowMap[T]=J;const ye=ee.getViewportCount();for(let Me=0;Me<ye;Me++)r.sunShadowMatrix[N+Me]=ee.getMatrix(Me),r.sunShadowCascade[N+Me]=ee._cascadeData[Me];N+=ye,T++}r.sun[S]=q,S++}else if(H.isDirectionalLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ee=H.shadow,ne=i.get(H);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,r.directionalShadow[y]=ne,r.directionalShadowMap[y]=J,r.directionalShadowMatrix[y]=H.shadow.matrix,C++}r.directional[y]=q,y++}else if(H.isSpotLight){const q=e.get(H);q.position.setFromMatrixPosition(H.matrixWorld),q.color.copy(X).multiplyScalar(P),q.distance=G,q.coneCos=Math.cos(H.angle),q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),q.decay=H.decay,r.spot[O]=q;const ee=H.shadow;if(H.map&&(r.spotLightMap[E]=H.map,E++,ee.updateMatrices(H),H.castShadow&&R++),r.spotLightMatrix[O]=ee.matrix,H.castShadow){const ne=i.get(H);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,r.spotShadow[O]=ne,r.spotShadowMap[O]=J,L++}O++}else if(H.isRectAreaLight){const q=e.get(H);q.color.copy(X).multiplyScalar(P),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),r.rectArea[I]=q,I++}else if(H.isPointLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),q.distance=H.distance,q.decay=H.decay,H.castShadow){const ee=H.shadow,ne=i.get(H);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,r.pointShadow[x]=ne,r.pointShadowMap[x]=J,r.pointShadowMatrix[x]=H.shadow.matrix,U++}r.point[x]=q,x++}else if(H.isHemisphereLight){const q=e.get(H);q.skyColor.copy(H.color).multiplyScalar(P),q.groundColor.copy(H.groundColor).multiplyScalar(P),r.hemi[A]=q,A++}}I>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const F=r.hash;(F.sunLength!==S||F.directionalLength!==y||F.pointLength!==x||F.spotLength!==O||F.rectAreaLength!==I||F.hemiLength!==A||F.numSunShadows!==T||F.numDirectionalShadows!==C||F.numPointShadows!==U||F.numSpotShadows!==L||F.numSpotMaps!==E||F.numLightProbes!==z)&&(r.sun.length=S,r.directional.length=y,r.spot.length=O,r.rectArea.length=I,r.point.length=x,r.hemi.length=A,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=N,r.sunShadowCascade.length=N,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.directionalShadowMatrix.length=C,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=L,r.spotShadowMap.length=L,r.spotLightMatrix.length=L+E-R,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=z,F.sunLength=S,F.directionalLength=y,F.pointLength=x,F.spotLength=O,F.rectAreaLength=I,F.hemiLength=A,F.numSunShadows=T,F.numDirectionalShadows=C,F.numPointShadows=U,F.numSpotShadows=L,F.numSpotMaps=E,F.numLightProbes=z,r.version=_w++)}function p(m,_){let v=0,g=0,S=0,T=0,N=0,y=0;const x=_.matrixWorldInverse;for(let O=0,I=m.length;O<I;O++){const A=m[O];if(A.isSunLight){const C=r.sun[v];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(x),v++}else if(A.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),g++}else if(A.isSpotLight){const C=r.spot[T];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),T++}else if(A.isRectAreaLight){const C=r.rectArea[N];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(x),f.identity(),c.copy(A.matrixWorld),c.premultiply(x),f.extractRotation(c),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),N++}else if(A.isPointLight){const C=r.point[S];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(x),S++}else if(A.isHemisphereLight){const C=r.hemi[y];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(x),y++}}}return{setup:h,setupView:p,state:r}}function K_(s){const e=new Sw(s),i=[],r=[],l=[];function c(g){v.camera=g,i.length=0,r.length=0,l.length=0}function f(g){i.push(g)}function h(g){r.push(g)}function p(g){l.push(g)}function m(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:m,setupLightsView:_,pushLight:f,pushShadow:h,pushLightProbeGrid:p}}function yw(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new K_(s),e.set(l,[h])):c>=f.length?(h=new K_(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const Mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ew=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],Tw=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],j_=new vn,pl=new de,Uh=new de;function Aw(s,e,i){let r=new Yx;const l=new zt,c=new zt,f=new rn,h=new B1,p=new F1,m={},_=i.maxTextureSize,v={[er]:Zn,[Zn]:er,[Ea]:Ea},g=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Mw,fragmentShader:bw}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new Na;T.setAttribute("position",new Ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new $i(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let x=this.type;this.render=function(U,L,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===Tb&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mu);const R=s.getRenderTarget(),z=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Aa),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const K=x!==this.type;K&&L.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(X=>X.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,X=U.length;H<X;H++){const P=U[H],G=P.shadow;if(G===void 0){dt("WebGLShadowMap:",P,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const J=G.getFrameExtents();l.multiply(J),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/J.x),l.x=c.x*J.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/J.y),l.y=c.y*J.y,G.mapSize.y=c.y));const q=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||K===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===vl){if(P.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ii(l.x,l.y,{format:nr,type:Ji,minFilter:Un,magFilter:Un,generateMipmaps:!1}),G.map.texture.name=P.name+".shadowMap",G.map.depthTexture=new Cl(l.x,l.y,Yi),G.map.depthTexture.name=P.name+".shadowMapDepth",G.map.depthTexture.format=Da,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn}else P.isPointLight?(G.map=new eS(l.x),G.map.depthTexture=new U1(l.x,Qi)):(G.map=new Ii(l.x,l.y),G.map.depthTexture=new Cl(l.x,l.y,Qi)),G.map.depthTexture.name=P.name+".shadowMap",G.map.depthTexture.format=Da,this.type===Mu?(G.map.depthTexture.compareFunction=q?Qp:jp,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==l.x||G.map.height!==l.y)&&G.map.setSize(l.x,l.y);const ee=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();P.isPointLight!==!0&&G.updateMatrices(P,E);for(let ne=0;ne<ee;ne++){const ye=G.getCamera(ne);if(P.isPointLight){const Me=G.camera,Ye=G.matrix,Ue=P.distance||Me.far;Ue!==Me.far&&(Me.far=Ue,Me.updateProjectionMatrix()),pl.setFromMatrixPosition(P.matrixWorld),Me.position.copy(pl),Uh.copy(Me.position),Uh.add(Ew[ne]),Me.up.copy(Tw[ne]),Me.lookAt(Uh),Me.updateMatrixWorld(),Ye.makeTranslation(-pl.x,-pl.y,-pl.z),j_.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),G._frustum.setFromProjectionMatrix(j_,Me.coordinateSystem,Me.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(G.map),s.clear());const Me=G.getViewport(ne);f.set(c.x*Me.x,c.y*Me.y,c.x*Me.z,c.y*Me.w),V.viewport(f)}r=G.getFrustum(ne),A(L,E,ye,P,this.type)}G.isPointLightShadow!==!0&&this.type===vl&&O(G,E),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(R,z,F)};function O(U,L){const E=e.update(N);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null?U.mapPass=new Ii(l.x,l.y,{format:nr,type:Ji}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value.set(U.map.width,U.map.height),g.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(L,null,E,g,N,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value.set(U.map.width,U.map.height),S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(L,null,E,S,N,null)}function I(U,L,E,R){let z=null;const F=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(F!==void 0)z=F;else if(z=E.isPointLight===!0?p:h,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const V=z.uuid,K=L.uuid;let H=m[V];H===void 0&&(H={},m[V]=H);let X=H[K];X===void 0&&(X=z.clone(),H[K]=X,L.addEventListener("dispose",C)),z=X}if(z.visible=L.visible,z.wireframe=L.wireframe,R===vl?z.side=L.shadowSide!==null?L.shadowSide:L.side:z.side=L.shadowSide!==null?L.shadowSide:v[L.side],z.alphaMap=L.alphaMap,z.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,z.map=L.map,z.clipShadows=L.clipShadows,z.clippingPlanes=L.clippingPlanes,z.clipIntersection=L.clipIntersection,z.displacementMap=L.displacementMap,z.displacementScale=L.displacementScale,z.displacementBias=L.displacementBias,z.wireframeLinewidth=L.wireframeLinewidth,z.linewidth=L.linewidth,E.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const V=s.properties.get(z);V.light=E}return z}function A(U,L,E,R,z){if(U.visible===!1)return;if(U.layers.test(L.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&z===vl)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const K=e.update(U),H=U.material;if(Array.isArray(H)){const X=K.groups;for(let P=0,G=X.length;P<G;P++){const J=X[P],q=H[J.materialIndex];if(q&&q.visible){const ee=I(U,q,R,z);U.onBeforeShadow(s,U,L,E,K,ee,J),s.renderBufferDirect(E,null,K,ee,U,J),U.onAfterShadow(s,U,L,E,K,ee,J)}}}else if(H.visible){const X=I(U,H,R,z);U.onBeforeShadow(s,U,L,E,K,X,null),s.renderBufferDirect(E,null,K,X,U,null),U.onAfterShadow(s,U,L,E,K,X,null)}}const V=U.children;for(let K=0,H=V.length;K<H;K++)A(V[K],L,E,R,z)}function C(U){U.target.removeEventListener("dispose",C);for(const E in m){const R=m[E],z=U.target.uuid;z in R&&(R[z].dispose(),delete R[z])}}}function ww(s,e){function i(){let Q=!1;const Ne=new rn;let _e=null;const Le=new rn(0,0,0,0);return{setMask:function(He){_e!==He&&!Q&&(s.colorMask(He,He,He,He),_e=He)},setLocked:function(He){Q=He},setClear:function(He,Ae,$e,Ke,Wt){Wt===!0&&(He*=Ke,Ae*=Ke,$e*=Ke),Ne.set(He,Ae,$e,Ke),Le.equals(Ne)===!1&&(s.clearColor(He,Ae,$e,Ke),Le.copy(Ne))},reset:function(){Q=!1,_e=null,Le.set(-1,0,0,0)}}}function r(){let Q=!1,Ne=!1,_e=null,Le=null,He=null;return{setReversed:function(Ae){if(Ne!==Ae){const $e=e.get("EXT_clip_control");Ae?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Ne=Ae;const Ke=He;He=null,this.setClear(Ke)}},getReversed:function(){return Ne},setTest:function(Ae){Ae?ce(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Ae){_e!==Ae&&!Q&&(s.depthMask(Ae),_e=Ae)},setFunc:function(Ae){if(Ne&&(Ae=r1[Ae]),Le!==Ae){switch(Ae){case Kh:s.depthFunc(s.NEVER);break;case jh:s.depthFunc(s.ALWAYS);break;case Qh:s.depthFunc(s.LESS);break;case Al:s.depthFunc(s.LEQUAL);break;case Jh:s.depthFunc(s.EQUAL);break;case $h:s.depthFunc(s.GEQUAL);break;case ep:s.depthFunc(s.GREATER);break;case tp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=Ae}},setLocked:function(Ae){Q=Ae},setClear:function(Ae){He!==Ae&&(He=Ae,Ne&&(Ae=1-Ae),s.clearDepth(Ae))},reset:function(){Q=!1,_e=null,Le=null,He=null,Ne=!1}}}function l(){let Q=!1,Ne=null,_e=null,Le=null,He=null,Ae=null,$e=null,Ke=null,Wt=null;return{setTest:function(Ut){Q||(Ut?ce(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Ut){Ne!==Ut&&!Q&&(s.stencilMask(Ut),Ne=Ut)},setFunc:function(Ut,Fn,Kn){(_e!==Ut||Le!==Fn||He!==Kn)&&(s.stencilFunc(Ut,Fn,Kn),_e=Ut,Le=Fn,He=Kn)},setOp:function(Ut,Fn,Kn){(Ae!==Ut||$e!==Fn||Ke!==Kn)&&(s.stencilOp(Ut,Fn,Kn),Ae=Ut,$e=Fn,Ke=Kn)},setLocked:function(Ut){Q=Ut},setClear:function(Ut){Wt!==Ut&&(s.clearStencil(Ut),Wt=Ut)},reset:function(){Q=!1,Ne=null,_e=null,Le=null,He=null,Ae=null,$e=null,Ke=null,Wt=null}}}const c=new i,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let _={},v={},g={},S=new WeakMap,T=[],N=null,y=!1,x=null,O=null,I=null,A=null,C=null,U=null,L=null,E=new Mt(0,0,0),R=0,z=!1,F=null,V=null,K=null,H=null,X=null;const P=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=J>=2);let ee=null,ne={};const ye=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),Ye=new rn().fromArray(ye),Ue=new rn().fromArray(Me);function Ge(Q,Ne,_e,Le){const He=new Uint8Array(4),Ae=s.createTexture();s.bindTexture(Q,Ae),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<_e;$e++)Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,He):s.texImage2D(Ne+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,He);return Ae}const ae={};ae[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ce(s.DEPTH_TEST),f.setFunc(Al),at(!1),St(n_),ce(s.CULL_FACE),rt(Aa);function ce(Q){_[Q]!==!0&&(s.enable(Q),_[Q]=!0)}function we(Q){_[Q]!==!1&&(s.disable(Q),_[Q]=!1)}function Ie(Q,Ne){return g[Q]!==Ne?(s.bindFramebuffer(Q,Ne),g[Q]=Ne,Q===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ne),Q===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Re(Q,Ne){let _e=T,Le=!1;if(Q){_e=S.get(Ne),_e===void 0&&(_e=[],S.set(Ne,_e));const He=Q.textures;if(_e.length!==He.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let Ae=0,$e=He.length;Ae<$e;Ae++)_e[Ae]=s.COLOR_ATTACHMENT0+Ae;_e.length=He.length,Le=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Le=!0);Le&&s.drawBuffers(_e)}function be(Q){return N!==Q?(s.useProgram(Q),N=Q,!0):!1}const et={[$r]:s.FUNC_ADD,[wb]:s.FUNC_SUBTRACT,[Rb]:s.FUNC_REVERSE_SUBTRACT};et[Cb]=s.MIN,et[Db]=s.MAX;const Ze={[Nb]:s.ZERO,[Ub]:s.ONE,[Lb]:s.SRC_COLOR,[Mx]:s.SRC_ALPHA,[Fb]:s.SRC_ALPHA_SATURATE,[zb]:s.DST_COLOR,[Pb]:s.DST_ALPHA,[Ob]:s.ONE_MINUS_SRC_COLOR,[bx]:s.ONE_MINUS_SRC_ALPHA,[Bb]:s.ONE_MINUS_DST_COLOR,[Ib]:s.ONE_MINUS_DST_ALPHA,[Hb]:s.CONSTANT_COLOR,[Gb]:s.ONE_MINUS_CONSTANT_COLOR,[Vb]:s.CONSTANT_ALPHA,[kb]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(Q,Ne,_e,Le,He,Ae,$e,Ke,Wt,Ut){if(Q===Aa){y===!0&&(we(s.BLEND),y=!1);return}if(y===!1&&(ce(s.BLEND),y=!0),Q!==Ab){if(Q!==x||Ut!==z){if((O!==$r||C!==$r)&&(s.blendEquation(s.FUNC_ADD),O=$r,C=$r),Ut)switch(Q){case so:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case i_:s.blendFunc(s.ONE,s.ONE);break;case a_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case s_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:It("WebGLState: Invalid blending: ",Q);break}else switch(Q){case so:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case i_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case a_:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case s_:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",Q);break}I=null,A=null,U=null,L=null,E.set(0,0,0),R=0,x=Q,z=Ut}return}He=He||Ne,Ae=Ae||_e,$e=$e||Le,(Ne!==O||He!==C)&&(s.blendEquationSeparate(et[Ne],et[He]),O=Ne,C=He),(_e!==I||Le!==A||Ae!==U||$e!==L)&&(s.blendFuncSeparate(Ze[_e],Ze[Le],Ze[Ae],Ze[$e]),I=_e,A=Le,U=Ae,L=$e),(Ke.equals(E)===!1||Wt!==R)&&(s.blendColor(Ke.r,Ke.g,Ke.b,Wt),E.copy(Ke),R=Wt),x=Q,z=!1}function ft(Q,Ne){Q.side===Ea?we(s.CULL_FACE):ce(s.CULL_FACE);let _e=Q.side===Zn;Ne&&(_e=!_e),at(_e),Q.blending===so&&Q.transparent===!1?rt(Aa):rt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),f.setFunc(Q.depthFunc),f.setTest(Q.depthTest),f.setMask(Q.depthWrite),c.setMask(Q.colorWrite);const Le=Q.stencilWrite;h.setTest(Le),Le&&(h.setMask(Q.stencilWriteMask),h.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),h.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Kt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(Q){F!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),F=Q)}function St(Q){Q!==bb?(ce(s.CULL_FACE),Q!==V&&(Q===n_?s.cullFace(s.BACK):Q===Eb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),V=Q}function Nt(Q){Q!==K&&(G&&s.lineWidth(Q),K=Q)}function Kt(Q,Ne,_e){Q?(ce(s.POLYGON_OFFSET_FILL),(H!==Ne||X!==_e)&&(H=Ne,X=_e,f.getReversed()&&(Ne=-Ne),s.polygonOffset(Ne,_e))):we(s.POLYGON_OFFSET_FILL)}function Tt(Q){Q?ce(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Ht(Q){Q===void 0&&(Q=s.TEXTURE0+P-1),ee!==Q&&(s.activeTexture(Q),ee=Q)}function W(Q,Ne,_e){_e===void 0&&(ee===null?_e=s.TEXTURE0+P-1:_e=ee);let Le=ne[_e];Le===void 0&&(Le={type:void 0,texture:void 0},ne[_e]=Le),(Le.type!==Q||Le.texture!==Ne)&&(ee!==_e&&(s.activeTexture(_e),ee=_e),s.bindTexture(Q,Ne||ae[Q]),Le.type=Q,Le.texture=Ne)}function ot(){const Q=ne[ee];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function lt(){try{s.compressedTexImage2D(...arguments)}catch(Q){It("WebGLState:",Q)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(Q){It("WebGLState:",Q)}}function b(){try{s.texSubImage2D(...arguments)}catch(Q){It("WebGLState:",Q)}}function $(){try{s.texSubImage3D(...arguments)}catch(Q){It("WebGLState:",Q)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(Q){It("WebGLState:",Q)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(Q){It("WebGLState:",Q)}}function Te(){try{s.texStorage2D(...arguments)}catch(Q){It("WebGLState:",Q)}}function Ee(){try{s.texStorage3D(...arguments)}catch(Q){It("WebGLState:",Q)}}function me(){try{s.texImage2D(...arguments)}catch(Q){It("WebGLState:",Q)}}function ge(){try{s.texImage3D(...arguments)}catch(Q){It("WebGLState:",Q)}}function Ce(Q){return v[Q]!==void 0?v[Q]:s.getParameter(Q)}function Fe(Q,Ne){v[Q]!==Ne&&(s.pixelStorei(Q,Ne),v[Q]=Ne)}function De(Q){Ye.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),Ye.copy(Q))}function Oe(Q){Ue.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),Ue.copy(Q))}function tt(Q,Ne){let _e=m.get(Ne);_e===void 0&&(_e=new WeakMap,m.set(Ne,_e));let Le=_e.get(Q);Le===void 0&&(Le=s.getUniformBlockIndex(Ne,Q.name),_e.set(Q,Le))}function it(Q,Ne){const Le=m.get(Ne).get(Q);p.get(Ne)!==Le&&(s.uniformBlockBinding(Ne,Le,Q.__bindingPointIndex),p.set(Ne,Le))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},v={},ee=null,ne={},g={},S=new WeakMap,T=[],N=null,y=!1,x=null,O=null,I=null,A=null,C=null,U=null,L=null,E=new Mt(0,0,0),R=0,z=!1,F=null,V=null,K=null,H=null,X=null,Ye.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ce,disable:we,bindFramebuffer:Ie,drawBuffers:Re,useProgram:be,setBlending:rt,setMaterial:ft,setFlipSided:at,setCullFace:St,setLineWidth:Nt,setPolygonOffset:Kt,setScissorTest:Tt,activeTexture:Ht,bindTexture:W,unbindTexture:ot,compressedTexImage2D:lt,compressedTexImage3D:B,texImage2D:me,texImage3D:ge,pixelStorei:Fe,getParameter:Ce,updateUBOMapping:tt,uniformBlockBinding:it,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:ie,compressedTexSubImage3D:he,scissor:De,viewport:Oe,reset:ut}}function Rw(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new zt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(B,b){return T?new OffscreenCanvas(B,b):Pu("canvas")}function y(B,b,$){let ie=1;const he=lt(B);if((he.width>$||he.height>$)&&(ie=$/Math.max(he.width,he.height)),ie<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Te=Math.floor(ie*he.width),Ee=Math.floor(ie*he.height);g===void 0&&(g=N(Te,Ee));const me=b?N(Te,Ee):g;return me.width=Te,me.height=Ee,me.getContext("2d").drawImage(B,0,0,Te,Ee),dt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Te+"x"+Ee+")."),me}else return"data"in B&&dt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),B;return B}function x(B){return B.generateMipmaps}function O(B){s.generateMipmap(B)}function I(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(B,b,$,ie,he,Te=!1){if(B!==null){if(s[B]!==void 0)return s[B];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ee;ie&&(Ee=e.get("EXT_texture_norm16"),Ee||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=b;if(b===s.RED&&($===s.FLOAT&&(me=s.R32F),$===s.HALF_FLOAT&&(me=s.R16F),$===s.UNSIGNED_BYTE&&(me=s.R8),$===s.UNSIGNED_SHORT&&Ee&&(me=Ee.R16_EXT),$===s.SHORT&&Ee&&(me=Ee.R16_SNORM_EXT)),b===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.R8UI),$===s.UNSIGNED_SHORT&&(me=s.R16UI),$===s.UNSIGNED_INT&&(me=s.R32UI),$===s.BYTE&&(me=s.R8I),$===s.SHORT&&(me=s.R16I),$===s.INT&&(me=s.R32I)),b===s.RG&&($===s.FLOAT&&(me=s.RG32F),$===s.HALF_FLOAT&&(me=s.RG16F),$===s.UNSIGNED_BYTE&&(me=s.RG8),$===s.UNSIGNED_SHORT&&Ee&&(me=Ee.RG16_EXT),$===s.SHORT&&Ee&&(me=Ee.RG16_SNORM_EXT)),b===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RG8UI),$===s.UNSIGNED_SHORT&&(me=s.RG16UI),$===s.UNSIGNED_INT&&(me=s.RG32UI),$===s.BYTE&&(me=s.RG8I),$===s.SHORT&&(me=s.RG16I),$===s.INT&&(me=s.RG32I)),b===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RGB8UI),$===s.UNSIGNED_SHORT&&(me=s.RGB16UI),$===s.UNSIGNED_INT&&(me=s.RGB32UI),$===s.BYTE&&(me=s.RGB8I),$===s.SHORT&&(me=s.RGB16I),$===s.INT&&(me=s.RGB32I)),b===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),$===s.UNSIGNED_INT&&(me=s.RGBA32UI),$===s.BYTE&&(me=s.RGBA8I),$===s.SHORT&&(me=s.RGBA16I),$===s.INT&&(me=s.RGBA32I)),b===s.RGB&&($===s.UNSIGNED_SHORT&&Ee&&(me=Ee.RGB16_EXT),$===s.SHORT&&Ee&&(me=Ee.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),b===s.RGBA){const ge=Te?Lu:Ct.getTransfer(he);$===s.FLOAT&&(me=s.RGBA32F),$===s.HALF_FLOAT&&(me=s.RGBA16F),$===s.UNSIGNED_BYTE&&(me=ge===kt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Ee&&(me=Ee.RGBA16_EXT),$===s.SHORT&&Ee&&(me=Ee.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function C(B,b){let $;return B?b===null||b===Qi||b===Rl?$=s.DEPTH24_STENCIL8:b===Yi?$=s.DEPTH32F_STENCIL8:b===wl&&($=s.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qi||b===Rl?$=s.DEPTH_COMPONENT24:b===Yi?$=s.DEPTH_COMPONENT32F:b===wl&&($=s.DEPTH_COMPONENT16),$}function U(B,b){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==Cn&&B.minFilter!==Un?Math.log2(Math.max(b.width,b.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?b.mipmaps.length:1}function L(B){const b=B.target;b.removeEventListener("dispose",L),R(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&v.delete(b)}function E(B){const b=B.target;b.removeEventListener("dispose",E),F(b)}function R(B){const b=r.get(B);if(b.__webglInit===void 0)return;const $=B.source,ie=S.get($);if(ie){const he=ie[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&z(B),Object.keys(ie).length===0&&S.delete($)}r.remove(B)}function z(B){const b=r.get(B);s.deleteTexture(b.__webglTexture);const $=B.source,ie=S.get($);delete ie[b.__cacheKey],f.memory.textures--}function F(B){const b=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let he=0;he<b.__webglFramebuffer[ie].length;he++)s.deleteFramebuffer(b.__webglFramebuffer[ie][he]);else s.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)s.deleteFramebuffer(b.__webglFramebuffer[ie]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=B.textures;for(let ie=0,he=$.length;ie<he;ie++){const Te=r.get($[ie]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),f.memory.textures--),r.remove($[ie])}r.remove(B)}let V=0;function K(){V=0}function H(){return V}function X(B){V=B}function P(){const B=V;return B>=l.maxTextures&&dt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+l.maxTextures),V+=1,B}function G(B){const b=[];return b.push(B.wrapS),b.push(B.wrapT),b.push(B.wrapR||0),b.push(B.magFilter),b.push(B.minFilter),b.push(B.anisotropy),b.push(B.internalFormat),b.push(B.format),b.push(B.type),b.push(B.generateMipmaps),b.push(B.premultiplyAlpha),b.push(B.flipY),b.push(B.unpackAlignment),b.push(B.colorSpace),b.join()}function J(B,b){const $=r.get(B);if(B.isVideoTexture&&W(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&$.__version!==B.version){const ie=B.image;if(ie===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{we($,B,b);return}}else B.isExternalTexture&&($.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+b)}function q(B,b){const $=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&$.__version!==B.version){we($,B,b);return}else B.isExternalTexture&&($.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+b)}function ee(B,b){const $=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&$.__version!==B.version){we($,B,b);return}i.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+b)}function ne(B,b){const $=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&$.__version!==B.version){Ie($,B,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+b)}const ye={[np]:s.REPEAT,[Ta]:s.CLAMP_TO_EDGE,[ip]:s.MIRRORED_REPEAT},Me={[Cn]:s.NEAREST,[qb]:s.NEAREST_MIPMAP_NEAREST,[Kc]:s.NEAREST_MIPMAP_LINEAR,[Un]:s.LINEAR,[ih]:s.LINEAR_MIPMAP_NEAREST,[Zs]:s.LINEAR_MIPMAP_LINEAR},Ye={[jb]:s.NEVER,[t1]:s.ALWAYS,[Qb]:s.LESS,[jp]:s.LEQUAL,[Jb]:s.EQUAL,[Qp]:s.GEQUAL,[$b]:s.GREATER,[e1]:s.NOTEQUAL};function Ue(B,b){if(b.type===Yi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Un||b.magFilter===ih||b.magFilter===Kc||b.magFilter===Zs||b.minFilter===Un||b.minFilter===ih||b.minFilter===Kc||b.minFilter===Zs)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,ye[b.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,ye[b.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,ye[b.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,Me[b.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,Me[b.minFilter]),b.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,Ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Cn||b.minFilter!==Kc&&b.minFilter!==Zs||b.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Ge(B,b){let $=!1;B.__webglInit===void 0&&(B.__webglInit=!0,b.addEventListener("dispose",L));const ie=b.source;let he=S.get(ie);he===void 0&&(he={},S.set(ie,he));const Te=G(b);if(Te!==B.__cacheKey){he[Te]===void 0&&(he[Te]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,$=!0),he[Te].usedTimes++;const Ee=he[B.__cacheKey];Ee!==void 0&&(he[B.__cacheKey].usedTimes--,Ee.usedTimes===0&&z(b)),B.__cacheKey=Te,B.__webglTexture=he[Te].texture}return $}function ae(B,b,$){return Math.floor(Math.floor(B/$)/b)}function ce(B,b,$,ie){const Te=B.updateRanges;if(Te.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,$,ie,b.data);else{Te.sort((Fe,De)=>Fe.start-De.start);let Ee=0;for(let Fe=1;Fe<Te.length;Fe++){const De=Te[Ee],Oe=Te[Fe],tt=De.start+De.count,it=ae(Oe.start,b.width,4),ut=ae(De.start,b.width,4);Oe.start<=tt+1&&it===ut&&ae(Oe.start+Oe.count-1,b.width,4)===it?De.count=Math.max(De.count,Oe.start+Oe.count-De.start):(++Ee,Te[Ee]=Oe)}Te.length=Ee+1;const me=i.getParameter(s.UNPACK_ROW_LENGTH),ge=i.getParameter(s.UNPACK_SKIP_PIXELS),Ce=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Fe=0,De=Te.length;Fe<De;Fe++){const Oe=Te[Fe],tt=Math.floor(Oe.start/4),it=Math.ceil(Oe.count/4),ut=tt%b.width,Q=Math.floor(tt/b.width),Ne=it,_e=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),i.pixelStorei(s.UNPACK_SKIP_ROWS,Q),i.texSubImage2D(s.TEXTURE_2D,0,ut,Q,Ne,_e,$,ie,b.data)}B.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,me),i.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function we(B,b,$){let ie=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=s.TEXTURE_3D);const he=Ge(B,b),Te=b.source;i.bindTexture(ie,B.__webglTexture,s.TEXTURE0+$);const Ee=r.get(Te);if(Te.version!==Ee.__version||he===!0){if(i.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const _e=Ct.getPrimaries(Ct.workingColorSpace),Le=b.colorSpace===hs?null:Ct.getPrimaries(b.colorSpace),He=b.colorSpace===hs||_e===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let ge=y(b.image,!1,l.maxTextureSize);ge=ot(b,ge);const Ce=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let De=A(b.internalFormat,Ce,Fe,b.normalized,b.colorSpace,b.isVideoTexture);Ue(ie,b);let Oe;const tt=b.mipmaps,it=b.isVideoTexture!==!0,ut=Ee.__version===void 0||he===!0,Q=Te.dataReady,Ne=U(b,ge);if(b.isDepthTexture)De=C(b.format===Ks,b.type),ut&&(it?i.texStorage2D(s.TEXTURE_2D,1,De,ge.width,ge.height):i.texImage2D(s.TEXTURE_2D,0,De,ge.width,ge.height,0,Ce,Fe,null));else if(b.isDataTexture)if(tt.length>0){it&&ut&&i.texStorage2D(s.TEXTURE_2D,Ne,De,tt[0].width,tt[0].height);for(let _e=0,Le=tt.length;_e<Le;_e++)Oe=tt[_e],it?Q&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,Oe.width,Oe.height,Ce,Fe,Oe.data):i.texImage2D(s.TEXTURE_2D,_e,De,Oe.width,Oe.height,0,Ce,Fe,Oe.data);b.generateMipmaps=!1}else it?(ut&&i.texStorage2D(s.TEXTURE_2D,Ne,De,ge.width,ge.height),Q&&ce(b,ge,Ce,Fe)):i.texImage2D(s.TEXTURE_2D,0,De,ge.width,ge.height,0,Ce,Fe,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){it&&ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,De,tt[0].width,tt[0].height,ge.depth);for(let _e=0,Le=tt.length;_e<Le;_e++)if(Oe=tt[_e],b.format!==Oi)if(Ce!==null)if(it){if(Q)if(b.layerUpdates.size>0){const He=R_(Oe.width,Oe.height,b.format,b.type);for(const Ae of b.layerUpdates){const $e=Oe.data.subarray(Ae*He/Oe.data.BYTES_PER_ELEMENT,(Ae+1)*He/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,Ae,Oe.width,Oe.height,1,Ce,$e)}}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Oe.width,Oe.height,ge.depth,Ce,Oe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,De,Oe.width,Oe.height,ge.depth,0,Oe.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?Q&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Oe.width,Oe.height,ge.depth,Ce,Fe,Oe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,_e,De,Oe.width,Oe.height,ge.depth,0,Ce,Fe,Oe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{it&&ut&&i.texStorage2D(s.TEXTURE_2D,Ne,De,tt[0].width,tt[0].height);for(let _e=0,Le=tt.length;_e<Le;_e++)Oe=tt[_e],b.format!==Oi?Ce!==null?it?Q&&i.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Oe.width,Oe.height,Ce,Oe.data):i.compressedTexImage2D(s.TEXTURE_2D,_e,De,Oe.width,Oe.height,0,Oe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?Q&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,Oe.width,Oe.height,Ce,Fe,Oe.data):i.texImage2D(s.TEXTURE_2D,_e,De,Oe.width,Oe.height,0,Ce,Fe,Oe.data)}else if(b.isDataArrayTexture)if(it){if(ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,De,ge.width,ge.height,ge.depth),Q)if(b.layerUpdates.size>0){const _e=R_(ge.width,ge.height,b.format,b.type);for(const Le of b.layerUpdates){const He=ge.data.subarray(Le*_e/ge.data.BYTES_PER_ELEMENT,(Le+1)*_e/ge.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,ge.width,ge.height,1,Ce,Fe,He)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Fe,ge.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Ce,Fe,ge.data);else if(b.isData3DTexture)it?(ut&&i.texStorage3D(s.TEXTURE_3D,Ne,De,ge.width,ge.height,ge.depth),Q&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Fe,ge.data)):i.texImage3D(s.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Ce,Fe,ge.data);else if(b.isFramebufferTexture){if(ut)if(it)i.texStorage2D(s.TEXTURE_2D,Ne,De,ge.width,ge.height);else{let _e=ge.width,Le=ge.height;for(let He=0;He<Ne;He++)i.texImage2D(s.TEXTURE_2D,He,De,_e,Le,0,Ce,Fe,null),_e>>=1,Le>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ge.parentNode!==_e){_e.appendChild(ge),v.add(b),_e.onpaint=Le=>{const He=Le.changedElements;for(const Ae of v)He.includes(Ae.image)&&(Ae.needsUpdate=!0)},_e.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const He=s.RGBA,Ae=s.RGBA,$e=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,He,Ae,$e,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(tt.length>0){if(it&&ut){const _e=lt(tt[0]);i.texStorage2D(s.TEXTURE_2D,Ne,De,_e.width,_e.height)}for(let _e=0,Le=tt.length;_e<Le;_e++)Oe=tt[_e],it?Q&&i.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ce,Fe,Oe):i.texImage2D(s.TEXTURE_2D,_e,De,Ce,Fe,Oe);b.generateMipmaps=!1}else if(it){if(ut){const _e=lt(ge);i.texStorage2D(s.TEXTURE_2D,Ne,De,_e.width,_e.height)}Q&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Fe,ge)}else i.texImage2D(s.TEXTURE_2D,0,De,Ce,Fe,ge);x(b)&&O(ie),Ee.__version=Te.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function Ie(B,b,$){if(b.image.length!==6)return;const ie=Ge(B,b),he=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+$);const Te=r.get(he);if(he.version!==Te.__version||ie===!0){i.activeTexture(s.TEXTURE0+$);const Ee=Ct.getPrimaries(Ct.workingColorSpace),me=b.colorSpace===hs?null:Ct.getPrimaries(b.colorSpace),ge=b.colorSpace===hs||Ee===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,Fe=b.image[0]&&b.image[0].isDataTexture,De=[];for(let Ae=0;Ae<6;Ae++)!Ce&&!Fe?De[Ae]=y(b.image[Ae],!0,l.maxCubemapSize):De[Ae]=Fe?b.image[Ae].image:b.image[Ae],De[Ae]=ot(b,De[Ae]);const Oe=De[0],tt=c.convert(b.format,b.colorSpace),it=c.convert(b.type),ut=A(b.internalFormat,tt,it,b.normalized,b.colorSpace),Q=b.isVideoTexture!==!0,Ne=Te.__version===void 0||ie===!0,_e=he.dataReady;let Le=U(b,Oe);Ue(s.TEXTURE_CUBE_MAP,b);let He;if(Ce){Q&&Ne&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ut,Oe.width,Oe.height);for(let Ae=0;Ae<6;Ae++){He=De[Ae].mipmaps;for(let $e=0;$e<He.length;$e++){const Ke=He[$e];b.format!==Oi?tt!==null?Q?_e&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,0,0,Ke.width,Ke.height,tt,Ke.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,ut,Ke.width,Ke.height,0,Ke.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,0,0,Ke.width,Ke.height,tt,it,Ke.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e,ut,Ke.width,Ke.height,0,tt,it,Ke.data)}}}else{if(He=b.mipmaps,Q&&Ne){He.length>0&&Le++;const Ae=lt(De[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ut,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Fe){Q?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,De[Ae].width,De[Ae].height,tt,it,De[Ae].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,De[Ae].width,De[Ae].height,0,tt,it,De[Ae].data);for(let $e=0;$e<He.length;$e++){const Wt=He[$e].image[Ae].image;Q?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,0,0,Wt.width,Wt.height,tt,it,Wt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,ut,Wt.width,Wt.height,0,tt,it,Wt.data)}}else{Q?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,tt,it,De[Ae]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ut,tt,it,De[Ae]);for(let $e=0;$e<He.length;$e++){const Ke=He[$e];Q?_e&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,0,0,tt,it,Ke.image[Ae]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e+1,ut,tt,it,Ke.image[Ae])}}}x(b)&&O(s.TEXTURE_CUBE_MAP),Te.__version=he.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function Re(B,b,$,ie,he,Te){const Ee=c.convert($.format,$.colorSpace),me=c.convert($.type),ge=A($.internalFormat,Ee,me,$.normalized,$.colorSpace),Ce=r.get(b),Fe=r.get($);if(Fe.__renderTarget=b,!Ce.__hasExternalTextures){const De=Math.max(1,b.width>>Te),Oe=Math.max(1,b.height>>Te);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?i.texImage3D(he,Te,ge,De,Oe,b.depth,0,Ee,me,null):i.texImage2D(he,Te,ge,De,Oe,0,Ee,me,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),Ht(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,he,Fe.__webglTexture,0,Tt(b)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,he,Fe.__webglTexture,Te),i.bindFramebuffer(s.FRAMEBUFFER,null)}function be(B,b,$){if(s.bindRenderbuffer(s.RENDERBUFFER,B),b.depthBuffer){const ie=b.depthTexture,he=ie&&ie.isDepthTexture?ie.type:null,Te=C(b.stencilBuffer,he),Ee=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ht(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(b),Te,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(b),Te,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Te,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,B)}else{const ie=b.textures;for(let he=0;he<ie.length;he++){const Te=ie[he],Ee=c.convert(Te.format,Te.colorSpace),me=c.convert(Te.type),ge=A(Te.internalFormat,Ee,me,Te.normalized,Te.colorSpace);Ht(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(b),ge,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(b),ge,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ge,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function et(B,b,$){const ie=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(b.depthTexture);if(he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ie){if(he.__webglInit===void 0&&(he.__webglInit=!0,b.depthTexture.addEventListener("dispose",L)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,b.depthTexture);const Ce=c.convert(b.depthTexture.format),Fe=c.convert(b.depthTexture.type);let De;b.depthTexture.format===Da?De=s.DEPTH_COMPONENT24:b.depthTexture.format===Ks&&(De=s.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,De,b.width,b.height,0,Ce,Fe,null)}}else J(b.depthTexture,0);const Te=he.__webglTexture,Ee=Tt(b),me=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,ge=b.depthTexture.format===Ks?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Da)Ht(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,Te,0,Ee):s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,Te,0);else if(b.depthTexture.format===Ks)Ht(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,Te,0,Ee):s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(B){const b=r.get(B),$=B.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==B.depthTexture){const ie=B.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",he)};ie.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=ie}if(B.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let ie=0;ie<6;ie++)et(b.__webglFramebuffer[ie],B,ie);else{const ie=B.texture.mipmaps;ie&&ie.length>0?et(b.__webglFramebuffer[0],B,0):et(b.__webglFramebuffer,B,0)}else if($){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=s.createRenderbuffer(),be(b.__webglDepthbuffer[ie],B,!1);else{const he=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=b.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Te)}}else{const ie=B.texture.mipmaps;if(ie&&ie.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),be(b.__webglDepthbuffer,B,!1);else{const he=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Te)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(B,b,$){const ie=r.get(B);b!==void 0&&Re(ie.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ze(B)}function ft(B){const b=B.texture,$=r.get(B),ie=r.get(b);B.addEventListener("dispose",E);const he=B.textures,Te=B.isWebGLCubeRenderTarget===!0,Ee=he.length>1;if(Ee||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=b.version,f.memory.textures++),Te){$.__webglFramebuffer=[];for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[me]=[];for(let ge=0;ge<b.mipmaps.length;ge++)$.__webglFramebuffer[me][ge]=s.createFramebuffer()}else $.__webglFramebuffer[me]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)$.__webglFramebuffer[me]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ee)for(let me=0,ge=he.length;me<ge;me++){const Ce=r.get(he[me]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),f.memory.textures++)}if(B.samples>0&&Ht(B)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const ge=he[me];$.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[me]);const Ce=c.convert(ge.format,ge.colorSpace),Fe=c.convert(ge.type),De=A(ge.internalFormat,Ce,Fe,ge.normalized,ge.colorSpace,B.isXRRenderTarget===!0),Oe=Tt(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,De,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,$.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),be($.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){i.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,b);for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)Re($.__webglFramebuffer[me][ge],B,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ge);else Re($.__webglFramebuffer[me],B,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);x(b)&&O(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ee){for(let me=0,ge=he.length;me<ge;me++){const Ce=he[me],Fe=r.get(Ce);let De=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(De=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,Fe.__webglTexture),Ue(De,Ce),Re($.__webglFramebuffer,B,Ce,s.COLOR_ATTACHMENT0+me,De,0),x(Ce)&&O(De)}i.unbindTexture()}else{let me=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(me=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(me,ie.__webglTexture),Ue(me,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)Re($.__webglFramebuffer[ge],B,b,s.COLOR_ATTACHMENT0,me,ge);else Re($.__webglFramebuffer,B,b,s.COLOR_ATTACHMENT0,me,0);x(b)&&O(me),i.unbindTexture()}B.depthBuffer&&Ze(B)}function at(B){const b=B.textures;for(let $=0,ie=b.length;$<ie;$++){const he=b[$];if(x(he)){const Te=I(B),Ee=r.get(he).__webglTexture;i.bindTexture(Te,Ee),O(Te),i.unbindTexture()}}}const St=[],Nt=[];function Kt(B){if(B.samples>0){if(Ht(B)===!1){const b=B.textures,$=B.width,ie=B.height;let he=s.COLOR_BUFFER_BIT;const Te=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=r.get(B),me=b.length>1;if(me)for(let Ce=0;Ce<b.length;Ce++)i.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const ge=B.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const Fe=r.get(b[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,$,ie,0,0,$,ie,he,s.NEAREST),p===!0&&(St.length=0,Nt.length=0,St.push(s.COLOR_ATTACHMENT0+Ce),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(St.push(Te),Nt.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let Ce=0;Ce<b.length;Ce++){i.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const Fe=r.get(b[Ce]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Fe,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&p){const b=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Tt(B){return Math.min(l.maxSamples,B.samples)}function Ht(B){const b=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function W(B){const b=f.render.frame;_.get(B)!==b&&(_.set(B,b),B.update())}function ot(B,b){const $=B.colorSpace,ie=B.format,he=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||$!==Uu&&$!==hs&&(Ct.getTransfer($)===kt?(ie!==Oi||he!==yi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",$)),b}function lt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=P,this.resetTextureUnits=K,this.getTextureUnits=H,this.setTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=ne,this.rebindTextures=rt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Cw(s,e){function i(r,l=hs){let c;const f=Ct.getTransfer(l);if(r===yi)return s.UNSIGNED_BYTE;if(r===Xp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Px)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ix)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Lx)return s.BYTE;if(r===Ox)return s.SHORT;if(r===wl)return s.UNSIGNED_SHORT;if(r===Wp)return s.INT;if(r===Qi)return s.UNSIGNED_INT;if(r===Yi)return s.FLOAT;if(r===Ji)return s.HALF_FLOAT;if(r===zx)return s.ALPHA;if(r===Bx)return s.RGB;if(r===Oi)return s.RGBA;if(r===Da)return s.DEPTH_COMPONENT;if(r===Ks)return s.DEPTH_STENCIL;if(r===Fx)return s.RED;if(r===Yp)return s.RED_INTEGER;if(r===nr)return s.RG;if(r===Zp)return s.RG_INTEGER;if(r===Kp)return s.RGBA_INTEGER;if(r===bu||r===Eu||r===Tu||r===Au)if(f===kt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===bu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===bu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ap||r===sp||r===rp||r===op)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ap)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===op)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lp||r===cp||r===up||r===fp||r===dp||r===Du||r===hp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===lp||r===cp)return f===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===up)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===fp)return c.COMPRESSED_R11_EAC;if(r===dp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Du)return c.COMPRESSED_RG11_EAC;if(r===hp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===pp||r===mp||r===gp||r===vp||r===_p||r===xp||r===Sp||r===yp||r===Mp||r===bp||r===Ep||r===Tp||r===Ap||r===wp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===pp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_p)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ep)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ap)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wp)return f===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rp||r===Cp||r===Dp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Rp)return f===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Np||r===Up||r===Nu||r===Lp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Np)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Up)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const Dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Kx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new zi({vertexShader:Dw,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $i(new Pl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lw extends rr{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,_=null,v=null,g=null,S=null,T=null;const N=typeof XRWebGLBinding<"u",y=new Uw,x={},O=i.getContextAttributes();let I=null,A=null;const C=[],U=[],L=new zt;let E=null,R=null;const z=new Ni;z.viewport=new rn;const F=new Ni;F.viewport=new rn;const V=[z,F],K=new G1;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ce=C[ae];return ce===void 0&&(ce=new dh,C[ae]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ae){let ce=C[ae];return ce===void 0&&(ce=new dh,C[ae]=ce),ce.getGripSpace()},this.getHand=function(ae){let ce=C[ae];return ce===void 0&&(ce=new dh,C[ae]=ce),ce.getHandSpace()};function P(ae){const ce=U.indexOf(ae.inputSource);if(ce===-1)return;const we=C[ce];we!==void 0&&(we.update(ae.inputSource,ae.frame,m||f),we.dispatchEvent({type:ae.type,data:ae.inputSource}))}function G(){l.removeEventListener("select",P),l.removeEventListener("selectstart",P),l.removeEventListener("selectend",P),l.removeEventListener("squeeze",P),l.removeEventListener("squeezestart",P),l.removeEventListener("squeezeend",P),l.removeEventListener("end",G),l.removeEventListener("inputsourceschange",J);for(let ae=0;ae<C.length;ae++){const ce=U[ae];ce!==null&&(U[ae]=null,C[ae].disconnect(ce))}H=null,X=null,y.reset();for(const ae in x)delete x[ae];if(e.setRenderTarget(I),S=null,g=null,v=null,l=null,A=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),R!==null){const ae=R.camera;ae.fov=R.fov,ae.zoom=R.zoom,ae.updateProjectionMatrix(),R=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&N&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",P),l.addEventListener("selectstart",P),l.addEventListener("selectend",P),l.addEventListener("squeeze",P),l.addEventListener("squeezestart",P),l.addEventListener("squeezeend",P),l.addEventListener("end",G),l.addEventListener("inputsourceschange",J),O.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ie=null,Re=null;O.depth&&(Re=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=O.stencil?Ks:Da,Ie=O.stencil?Rl:Qi);const be={colorFormat:i.RGBA8,depthFormat:Re,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(be),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new Ii(g.textureWidth,g.textureHeight,{format:Oi,type:yi,depthTexture:new Cl(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const we={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new Ii(S.framebufferWidth,S.framebufferHeight,{format:Oi,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Ge.setContext(l),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(ae){for(let ce=0;ce<ae.removed.length;ce++){const we=ae.removed[ce],Ie=U.indexOf(we);Ie>=0&&(U[Ie]=null,C[Ie].disconnect(we))}for(let ce=0;ce<ae.added.length;ce++){const we=ae.added[ce];let Ie=U.indexOf(we);if(Ie===-1){for(let be=0;be<C.length;be++)if(be>=U.length){U.push(we),Ie=be;break}else if(U[be]===null){U[be]=we,Ie=be;break}if(Ie===-1)break}const Re=C[Ie];Re&&Re.connect(we)}}const q=new de,ee=new de;function ne(ae,ce,we){q.setFromMatrixPosition(ce.matrixWorld),ee.setFromMatrixPosition(we.matrixWorld);const Ie=q.distanceTo(ee),Re=ce.projectionMatrix.elements,be=we.projectionMatrix.elements,et=Re[14]/(Re[10]-1),Ze=Re[14]/(Re[10]+1),rt=(Re[9]+1)/Re[5],ft=(Re[9]-1)/Re[5],at=(Re[8]-1)/Re[0],St=(be[8]+1)/be[0],Nt=et*at,Kt=et*St,Tt=Ie/(-at+St),Ht=Tt*-at;if(ce.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ht),ae.translateZ(Tt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Re[10]===-1)ae.projectionMatrix.copy(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const W=et+Tt,ot=Ze+Tt,lt=Nt-Ht,B=Kt+(Ie-Ht),b=rt*Ze/ot*W,$=ft*Ze/ot*W;ae.projectionMatrix.makePerspective(lt,B,b,$,W,ot),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function ye(ae,ce){ce===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ce.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let ce=ae.near,we=ae.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(we=y.depthFar)),K.near=F.near=z.near=ce,K.far=F.far=z.far=we,(H!==K.near||X!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),H=K.near,X=K.far),K.layers.mask=ae.layers.mask|6,z.layers.mask=K.layers.mask&-5,F.layers.mask=K.layers.mask&-3;const Ie=ae.parent,Re=K.cameras;ye(K,Ie);for(let be=0;be<Re.length;be++)ye(Re[be],Ie);Re.length===2?ne(K,z,F):K.projectionMatrix.copy(z.projectionMatrix),R===null&&ae.isPerspectiveCamera&&(R={camera:ae,fov:ae.fov,zoom:ae.zoom}),Me(ae,K,Ie)};function Me(ae,ce,we){we===null?ae.matrix.copy(ce.matrixWorld):(ae.matrix.copy(we.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ce.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Op*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(ae){p=ae,g!==null&&(g.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(ae){return x[ae]};let Ye=null;function Ue(ae,ce){if(_=ce.getViewerPose(m||f),T=ce,_!==null){const we=_.views;S!==null&&(e.setRenderTargetFramebuffer(A,S.framebuffer),e.setRenderTarget(A));let Ie=!1;we.length!==K.cameras.length&&(K.cameras.length=0,Ie=!0);for(let Ze=0;Ze<we.length;Ze++){const rt=we[Ze];let ft=null;if(S!==null)ft=S.getViewport(rt);else{const St=v.getViewSubImage(g,rt);ft=St.viewport,Ze===0&&(e.setRenderTargetTextures(A,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(A))}let at=V[Ze];at===void 0&&(at=new Ni,at.layers.enable(Ze),at.viewport=new rn,V[Ze]=at),at.matrix.fromArray(rt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(rt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ft.x,ft.y,ft.width,ft.height),Ze===0&&(K.matrix.copy(at.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ie===!0&&K.cameras.push(at)}const Re=l.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){v=r.getBinding();const Ze=v.getDepthInformation(we[0]);Ze&&Ze.isValid&&Ze.texture&&y.init(Ze,l.renderState)}if(Re&&Re.includes("camera-access")&&N){e.state.unbindTexture(),v=r.getBinding();for(let Ze=0;Ze<we.length;Ze++){const rt=we[Ze].camera;if(rt){let ft=x[rt];ft||(ft=new Kx,x[rt]=ft);const at=v.getCameraImage(rt);ft.sourceTexture=at}}}}for(let we=0;we<C.length;we++){const Ie=U[we],Re=C[we];Ie!==null&&Re!==void 0&&Re.update(Ie,ce,m||f)}Ye&&Ye(ae,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),T=null}const Ge=new Jx;Ge.setAnimationLoop(Ue),this.setAnimationLoop=function(ae){Ye=ae},this.dispose=function(){}}}const Ow=new vn,sS=new ht;sS.set(-1,0,0,0,1,0,0,0,1);function Pw(s,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,jx(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,O,I,A){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),_(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&S(y,x,A)):x.isMeshMatcapMaterial?(c(y,x),T(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),N(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?p(y,x,O,I):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Zn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Zn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const O=e.get(x),I=O.envMap,A=O.envMapRotation;I&&(y.envMap.value=I,y.envMapRotation.value.setFromMatrix4(Ow.makeRotationFromEuler(A)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(sS),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,O,I){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*O,y.scale.value=I*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,O){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function N(y,x){const O=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Iw(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,C){const U=C.program;r.uniformBlockBinding(A,U)}function m(A,C){let U=l[A.id];U===void 0&&(y(A),U=_(A),l[A.id]=U,A.addEventListener("dispose",O));const L=C.program;r.updateUBOMapping(A,L);const E=e.render.frame;c[A.id]!==E&&(g(A),c[A.id]=E)}function _(A){const C=v();A.__bindingPointIndex=C;const U=s.createBuffer(),L=A.__size,E=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,L,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,U),U}function v(){for(let A=0;A<h;A++)if(f.indexOf(A)===-1)return f.push(A),A;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const C=l[A.id],U=A.uniforms,L=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let E=0,R=U.length;E<R;E++){const z=U[E];if(Array.isArray(z))for(let F=0,V=z.length;F<V;F++)S(z[F],E,F,L);else S(z,E,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(A,C,U,L){if(N(A,C,U,L)===!0){const E=A.__offset,R=A.value;if(Array.isArray(R)){let z=0;for(let F=0;F<R.length;F++){const V=R[F],K=x(V);T(V,A.__data,z),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(R,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,A.__data)}}function T(A,C,U){typeof A=="number"||typeof A=="boolean"?C[0]=A:A.isMatrix3?(C[0]=A.elements[0],C[1]=A.elements[1],C[2]=A.elements[2],C[3]=0,C[4]=A.elements[3],C[5]=A.elements[4],C[6]=A.elements[5],C[7]=0,C[8]=A.elements[6],C[9]=A.elements[7],C[10]=A.elements[8],C[11]=0):ArrayBuffer.isView(A)?C.set(new A.constructor(A.buffer,A.byteOffset,C.length)):A.toArray(C,U)}function N(A,C,U,L){const E=A.value,R=C+"_"+U;if(L[R]===void 0)return typeof E=="number"||typeof E=="boolean"?L[R]=E:ArrayBuffer.isView(E)?L[R]=E.slice():L[R]=E.clone(),!0;{const z=L[R];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return L[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(z.equals(E)===!1)return z.copy(E),!0}}return!1}function y(A){const C=A.uniforms;let U=0;const L=16;for(let R=0,z=C.length;R<z;R++){const F=Array.isArray(C[R])?C[R]:[C[R]];for(let V=0,K=F.length;V<K;V++){const H=F[V],X=Array.isArray(H.value)?H.value:[H.value];for(let P=0,G=X.length;P<G;P++){const J=X[P],q=x(J),ee=U%L,ne=ee%q.boundary,ye=ee+ne;U+=ne,ye!==0&&L-ye<q.storage&&(U+=L-ye),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=U,U+=q.storage}}}const E=U%L;return E>0&&(U+=L-E),A.__size=U,A.__cache={},this}function x(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(C.boundary=16,C.storage=A.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",A),C}function O(A){const C=A.target;C.removeEventListener("dispose",O);const U=f.indexOf(C.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function I(){for(const A in l)s.deleteBuffer(l[A]);f=[],l={},c={}}return{bind:p,update:m,dispose:I}}const zw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function Bw(){return Xi===null&&(Xi=new D1(zw,16,16,nr,Ji),Xi.name="DFG_LUT",Xi.minFilter=Un,Xi.magFilter=Un,Xi.wrapS=Ta,Xi.wrapT=Ta,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class Fw{constructor(e={}){const{canvas:i=a1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=yi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=f;const N=S,y=new Set([Kp,Zp,Yp]),x=new Set([yi,Qi,wl,Rl,Xp,qp]),O=new Uint32Array(4),I=new Int32Array(4),A=new de;let C=null,U=null;const L=[],E=[];let R=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let F=!1,V=null,K=null,H=null,X=null;this._outputColorSpace=Si;let P=0,G=0,J=null,q=-1,ee=null;const ne=new rn,ye=new rn;let Me=null;const Ye=new Mt(0);let Ue=0,Ge=i.width,ae=i.height,ce=1,we=null,Ie=null;const Re=new rn(0,0,Ge,ae),be=new rn(0,0,Ge,ae);let et=!1;const Ze=new Yx;let rt=!1,ft=!1;const at=new vn,St=new de,Nt=new rn,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Ht(){return J===null?ce:1}let W=r;function ot(w,Z){return i.getContext(w,Z)}let lt,B,b,$,ie,he,Te,Ee,me,ge,Ce,Fe,De,Oe,tt,it,ut,Q,Ne,_e,Le,He,Ae;try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kp}`),i.addEventListener("webglcontextlost",Wt,!1),i.addEventListener("webglcontextrestored",Ut,!1),i.addEventListener("webglcontextcreationerror",Fn,!1),W===null){const Z="webgl2";if(W=ot(Z,w),W===null)throw ot(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(w){throw i.removeEventListener("webglcontextlost",Wt,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",Fn,!1),It("WebGLRenderer: "+w.message),w}function $e(){lt=new BT(W),lt.init(),Le=new Cw(W,lt),B=new RT(W,lt,e,Le),b=new ww(W,lt),B.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),K=W.createFramebuffer(),H=W.createFramebuffer(),X=W.createFramebuffer(),$=new GT(W),ie=new hw,he=new Rw(W,lt,b,ie,B,Le,$),Te=new zT(z),Ee=new k1(W),He=new AT(W,Ee),me=new FT(W,Ee,$,He),ge=new kT(W,me,Ee,He,$),Q=new VT(W,B,he),tt=new CT(ie),Ce=new dw(z,Te,lt,B,He,tt),Fe=new Pw(z,ie),De=new mw,Oe=new yw(lt),ut=new TT(z,Te,b,ge,T,p),it=new Aw(z,ge,B),Ae=new Iw(W,$,B,b),Ne=new wT(W,lt,$),_e=new HT(W,lt,$),$.programs=Ce.programs,z.capabilities=B,z.extensions=lt,z.properties=ie,z.renderLists=De,z.shadowMap=it,z.state=b,z.info=$}N!==yi&&(R=new XT(N,i.width,i.height,h,l,c));const Ke=new Lw(z,W);this.xr=Ke,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=lt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=lt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(w){w!==void 0&&(ce=w,this.setSize(Ge,ae,!1))},this.getSize=function(w){return w.set(Ge,ae)},this.setSize=function(w,Z,fe=!0){if(Ke.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=w,ae=Z,i.width=Math.floor(w*ce),i.height=Math.floor(Z*ce),fe===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),R!==null&&R.setSize(i.width,i.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(Ge*ce,ae*ce).floor()},this.setDrawingBufferSize=function(w,Z,fe){Ge=w,ae=Z,ce=fe,i.width=Math.floor(w*fe),i.height=Math.floor(Z*fe),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(N===yi){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(Re)},this.setViewport=function(w,Z,fe,se){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,Z,fe,se),b.viewport(ne.copy(Re).multiplyScalar(ce).round())},this.getScissor=function(w){return w.copy(be)},this.setScissor=function(w,Z,fe,se){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,Z,fe,se),b.scissor(ye.copy(be).multiplyScalar(ce).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(w){b.setScissorTest(et=w)},this.setOpaqueSort=function(w){we=w},this.setTransparentSort=function(w){Ie=w},this.getClearColor=function(w){return w.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,fe=!0){let se=0;if(w){let re=!1;if(J!==null){const ze=J.texture.format;re=y.has(ze)}if(re){const ze=J.texture.type,We=x.has(ze),Pe=ut.getClearColor(),Ve=ut.getClearAlpha(),ke=Pe.r,pt=Pe.g,yt=Pe.b;We?(O[0]=ke,O[1]=pt,O[2]=yt,O[3]=Ve,W.clearBufferuiv(W.COLOR,0,O)):(I[0]=ke,I[1]=pt,I[2]=yt,I[3]=Ve,W.clearBufferiv(W.COLOR,0,I))}else se|=W.COLOR_BUFFER_BIT}Z&&(se|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(se|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&W.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),V=w},this.dispose=function(){i.removeEventListener("webglcontextlost",Wt,!1),i.removeEventListener("webglcontextrestored",Ut,!1),i.removeEventListener("webglcontextcreationerror",Fn,!1),ut.dispose(),De.dispose(),Oe.dispose(),ie.dispose(),Te.dispose(),ge.dispose(),He.dispose(),Ae.dispose(),Ce.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",cn),Ke.removeEventListener("sessionend",En),Hn.stop()};function Wt(w){w.preventDefault(),c_("WebGLRenderer: Context Lost."),F=!0}function Ut(){c_("WebGLRenderer: Context Restored."),F=!1;const w=$.autoReset,Z=it.enabled,fe=it.autoUpdate,se=it.needsUpdate,re=it.type;$e(),$.autoReset=w,it.enabled=Z,it.autoUpdate=fe,it.needsUpdate=se,it.type=re}function Fn(w){It("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Kn(w){const Z=w.target;Z.removeEventListener("dispose",Kn),go(Z)}function go(w){vo(w),ie.remove(w)}function vo(w){const Z=ie.get(w).programs;Z!==void 0&&(Z.forEach(function(fe){Ce.releaseProgram(fe)}),w.isShaderMaterial&&Ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,fe,se,re,ze){Z===null&&(Z=Kt);const We=re.isMesh&&re.matrixWorld.determinantAffine()<0,Pe=Oa(w,Z,fe,se,re);b.setMaterial(se,We);let Ve=fe.index,ke=1;if(se.wireframe===!0){if(Ve=me.getWireframeAttribute(fe),Ve===void 0)return;ke=2}const pt=fe.drawRange,yt=fe.attributes.position;let je=pt.start*ke,Lt=(pt.start+pt.count)*ke;ze!==null&&(je=Math.max(je,ze.start*ke),Lt=Math.min(Lt,(ze.start+ze.count)*ke)),Ve!==null?(je=Math.max(je,0),Lt=Math.min(Lt,Ve.count)):yt!=null&&(je=Math.max(je,0),Lt=Math.min(Lt,yt.count));const Jt=Lt-je;if(Jt<0||Jt===1/0)return;He.setup(re,se,Pe,fe,Ve);let jt,vt=Ne;if(Ve!==null&&(jt=Ee.get(Ve),vt=_e,vt.setIndex(jt)),re.isMesh)se.wireframe===!0?(b.setLineWidth(se.wireframeLinewidth*Ht()),vt.setMode(W.LINES)):vt.setMode(W.TRIANGLES);else if(re.isLine){let fn=se.linewidth;fn===void 0&&(fn=1),b.setLineWidth(fn*Ht()),re.isLineSegments?vt.setMode(W.LINES):re.isLineLoop?vt.setMode(W.LINE_LOOP):vt.setMode(W.LINE_STRIP)}else re.isPoints?vt.setMode(W.POINTS):re.isSprite&&vt.setMode(W.TRIANGLES);if(re.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))vt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const fn=re._multiDrawStarts,Xe=re._multiDrawCounts,_n=re._multiDrawCount,_t=Ve?Ee.get(Ve).bytesPerElement:1,Ln=ie.get(se).currentProgram.getUniforms();for(let jn=0;jn<_n;jn++)Ln.setValue(W,"_gl_DrawID",jn),vt.render(fn[jn]/_t,Xe[jn])}else if(re.isInstancedMesh)vt.renderInstances(je,Jt,re.count);else if(fe.isInstancedBufferGeometry){const fn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Xe=Math.min(fe.instanceCount,fn);vt.renderInstances(je,Jt,Xe)}else vt.render(je,Jt)};function _o(w,Z,fe,se){V!==null&&w.isNodeMaterial&&V.setObject(se,w),rt===!0&&tt.setState(w,fe,!1),w.transparent===!0&&w.side===Ea&&w.forceSinglePass===!1?(w.side=Zn,w.needsUpdate=!0,La(w,Z,se),w.side=er,w.needsUpdate=!0,La(w,Z,se),w.side=Ea):La(w,Z,se)}this.compile=function(w,Z,fe=null){fe===null&&(fe=w),V!==null&&V.renderStart(w,Z,fe),U=Oe.get(fe),U.init(Z),E.push(U),fe.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),w!==fe&&w.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(U.pushLight(re),re.castShadow&&U.pushShadow(re))}),U.setupLights(),V!==null&&V.updateLights(U.state.lightsArray),ft=this.localClippingEnabled,rt=tt.init(this.clippingPlanes,ft),rt===!0&&tt.setGlobalState(this.clippingPlanes,Z),V!==null&&it.render(U.state.shadowsArray,fe,Z);const se=new Set;return w.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const ze=re.material;if(ze)if(Array.isArray(ze))for(let We=0;We<ze.length;We++){const Pe=ze[We];_o(Pe,fe,Z,re),se.add(Pe)}else _o(ze,fe,Z,re),se.add(ze)}),U=E.pop(),V!==null&&V.renderEnd(),se},this.compileAsync=function(w,Z,fe=null){const se=this.compile(w,Z,fe);return new Promise(re=>{function ze(){if(se.forEach(function(We){const Ve=ie.get(We).currentProgram;(Ve===void 0||Ve.isReady())&&se.delete(We)}),se.size===0){re(w);return}setTimeout(ze,10)}lt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let or=null;function Bi(w){or&&or(w)}function cn(){Hn.stop()}function En(){Hn.start()}const Hn=new Jx;Hn.setAnimationLoop(Bi),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(w){or=w,Ke.setAnimationLoop(w),w===null?Hn.stop():Hn.start()},Ke.addEventListener("sessionstart",cn),Ke.addEventListener("sessionend",En),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;V!==null&&V.renderStart(w,Z);const fe=Ke.enabled===!0&&Ke.isPresenting===!0,se=R!==null&&(J===null||fe)&&R.begin(z,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(Z),Z=Ke.getCamera()),w.isScene===!0&&w.onBeforeRender(z,w,Z,J),U=Oe.get(w,E.length),U.init(Z),U.state.textureUnits=he.getTextureUnits(),E.push(U),at.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ze.setFromProjectionMatrix(at,Zi,Z.reversedDepth),ft=this.localClippingEnabled,rt=tt.init(this.clippingPlanes,ft),C=De.get(w,L.length),C.init(),L.push(C),Ke.enabled===!0&&Ke.isPresenting===!0){const We=z.xr.getDepthSensingMesh();We!==null&&vs(We,Z,-1/0,z.sortObjects)}vs(w,Z,0,z.sortObjects),C.finish(),V!==null&&V.updateLights(U.state.lightsArray),z.sortObjects===!0&&C.sort(we,Ie),Tt=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,Tt&&ut.addToRenderList(C,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&tt.beginShadows();const re=U.state.shadowsArray;if(it.render(re,w,Z),rt===!0&&tt.endShadows(),(se&&R.hasRenderPass())===!1){const We=C.opaque,Pe=C.transmissive;if(U.setupLights(),Z.isArrayCamera){const Ve=Z.cameras;if(Pe.length>0)for(let ke=0,pt=Ve.length;ke<pt;ke++){const yt=Ve[ke];Bl(We,Pe,w,yt)}Tt&&ut.render(w);for(let ke=0,pt=Ve.length;ke<pt;ke++){const yt=Ve[ke];zl(C,w,yt,yt.viewport)}}else Pe.length>0&&Bl(We,Pe,w,Z),Tt&&ut.render(w),zl(C,w,Z)}J!==null&&G===0&&(he.updateMultisampleRenderTarget(J),he.updateRenderTargetMipmap(J)),se&&R.end(z),w.isScene===!0&&w.onAfterRender(z,w,Z),He.resetDefaultState(),q=-1,ee=null,E.pop(),E.length>0?(U=E[E.length-1],he.setTextureUnits(U.state.textureUnits),rt===!0&&tt.setGlobalState(z.clippingPlanes,U.state.camera)):U=null,L.pop(),L.length>0?C=L[L.length-1]:C=null,V!==null&&V.renderEnd()};function vs(w,Z,fe,se){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)fe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLightProbeGrid)U.pushLightProbeGrid(w);else if(w.isLight)U.pushLight(w),w.castShadow&&U.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Ze)){se&&Nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(at);const We=ge.update(w),Pe=w.material;Pe.visible&&C.push(w,We,Pe,fe,Nt.z,null,Z)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Ze))){const We=ge.update(w),Pe=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Nt.copy(w.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Nt.copy(We.boundingSphere.center)),Nt.applyMatrix4(w.matrixWorld).applyMatrix4(at)),Array.isArray(Pe)){const Ve=We.groups;for(let ke=0,pt=Ve.length;ke<pt;ke++){const yt=Ve[ke],je=Pe[yt.materialIndex];je&&je.visible&&C.push(w,We,je,fe,Nt.z,yt,Z)}}else Pe.visible&&C.push(w,We,Pe,fe,Nt.z,null,Z)}}const ze=w.children;for(let We=0,Pe=ze.length;We<Pe;We++)vs(ze[We],Z,fe,se)}function zl(w,Z,fe,se){const{opaque:re,transmissive:ze,transparent:We}=w;U.setupLightsView(fe),rt===!0&&tt.setGlobalState(z.clippingPlanes,fe),se&&b.viewport(ne.copy(se)),re.length>0&&_s(re,Z,fe),ze.length>0&&_s(ze,Z,fe),We.length>0&&_s(We,Z,fe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Bl(w,Z,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[se.id]===void 0){const je=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[se.id]=new Ii(1,1,{generateMipmaps:!0,type:je?Ji:yi,minFilter:Zs,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const ze=U.state.transmissionRenderTarget[se.id],We=se.viewport||ne;ze.setSize(We.z*z.transmissionResolutionScale,We.w*z.transmissionResolutionScale);const Pe=z.getRenderTarget(),Ve=z.getActiveCubeFace(),ke=z.getActiveMipmapLevel();z.setRenderTarget(ze),z.getClearColor(Ye),Ue=z.getClearAlpha(),Ue<1&&z.setClearColor(16777215,.5),z.clear(),Tt&&ut.render(fe);const pt=z.toneMapping;z.toneMapping=ji;const yt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),U.setupLightsView(se),rt===!0&&tt.setGlobalState(z.clippingPlanes,se),_s(w,fe,se),he.updateMultisampleRenderTarget(ze),he.updateRenderTargetMipmap(ze),lt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Lt=0,Jt=Z.length;Lt<Jt;Lt++){const jt=Z[Lt],{object:vt,geometry:fn,material:Xe,group:_n}=jt;if(Xe.side===Ea&&vt.layers.test(se.layers)){const _t=Xe.side;Xe.side=Zn,Xe.needsUpdate=!0,Ua(vt,fe,se,fn,Xe,_n),Xe.side=_t,Xe.needsUpdate=!0,je=!0}}je===!0&&(he.updateMultisampleRenderTarget(ze),he.updateRenderTargetMipmap(ze))}z.setRenderTarget(Pe,Ve,ke),z.setClearColor(Ye,Ue),yt!==void 0&&(se.viewport=yt),z.toneMapping=pt}function _s(w,Z,fe){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let re=0,ze=w.length;re<ze;re++){const We=w[re],{object:Pe,geometry:Ve,group:ke}=We;let pt=We.material;pt.allowOverride===!0&&se!==null&&(pt=se),Pe.layers.test(fe.layers)&&Ua(Pe,Z,fe,Ve,pt,ke)}}function Ua(w,Z,fe,se,re,ze){V!==null&&re.isNodeMaterial&&V.setObject(w,re),w.onBeforeRender(z,Z,fe,se,re,ze),w.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),re.onBeforeRender(z,Z,fe,se,w,ze),re.transparent===!0&&re.side===Ea&&re.forceSinglePass===!1?(re.side=Zn,re.needsUpdate=!0,z.renderBufferDirect(fe,Z,se,re,w,ze),re.side=er,re.needsUpdate=!0,z.renderBufferDirect(fe,Z,se,re,w,ze),re.side=Ea):z.renderBufferDirect(fe,Z,se,re,w,ze),w.onAfterRender(z,Z,fe,se,re,ze)}function La(w,Z,fe){Z.isScene!==!0&&(Z=Kt);const se=ie.get(w),re=U.state.lights,ze=U.state.shadowsArray,We=re.state.version,Pe=Ce.getParameters(w,re.state,ze,Z,fe,U.state.lightProbeGridArray),Ve=Ce.getProgramCacheKey(Pe);let ke=se.programs;se.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Z.environment:null,se.fog=Z.fog;const pt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;se.envMap=Te.get(w.envMap||se.environment,pt),se.envMapRotation=se.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",Kn),ke=new Map,se.programs=ke);let yt=ke.get(Ve);if(yt!==void 0){if(se.currentProgram===yt&&se.lightsStateVersion===We)return ta(w,Pe),yt}else Pe.uniforms=Ce.getUniforms(w),V!==null&&w.isNodeMaterial&&V.build(w,fe,Pe),w.onBeforeCompile(Pe,z),yt=Ce.acquireProgram(Pe,Ve),ke.set(Ve,yt),se.uniforms=Pe.uniforms;const je=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=tt.uniform),ta(w,Pe),se.needsLights=Fl(w),se.lightsStateVersion=We,se.needsLights&&(je.ambientLightColor.value=re.state.ambient,je.lightProbe.value=re.state.probe,je.sunLights.value=re.state.sun,je.sunLightShadows.value=re.state.sunShadow,je.directionalLights.value=re.state.directional,je.directionalLightShadows.value=re.state.directionalShadow,je.spotLights.value=re.state.spot,je.spotLightShadows.value=re.state.spotShadow,je.rectAreaLights.value=re.state.rectArea,je.ltc_1.value=re.state.rectAreaLTC1,je.ltc_2.value=re.state.rectAreaLTC2,je.pointLights.value=re.state.point,je.pointLightShadows.value=re.state.pointShadow,je.hemisphereLights.value=re.state.hemi,je.sunShadowMatrix.value=re.state.sunShadowMatrix,je.sunShadowCascade.value=re.state.sunShadowCascade,je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,je.spotLightMatrix.value=re.state.spotLightMatrix,je.spotLightMap.value=re.state.spotLightMap,je.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=U.state.lightProbeGridArray.length>0,se.currentProgram=yt,se.uniformsList=null,yt}function ea(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=wu.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function ta(w,Z){const fe=ie.get(w);fe.outputColorSpace=Z.outputColorSpace,fe.batching=Z.batching,fe.batchingColor=Z.batchingColor,fe.instancing=Z.instancing,fe.instancingColor=Z.instancingColor,fe.instancingMorph=Z.instancingMorph,fe.skinning=Z.skinning,fe.morphTargets=Z.morphTargets,fe.morphNormals=Z.morphNormals,fe.morphColors=Z.morphColors,fe.morphTargetsCount=Z.morphTargetsCount,fe.numClippingPlanes=Z.numClippingPlanes,fe.numIntersection=Z.numClipIntersection,fe.vertexAlphas=Z.vertexAlphas,fe.vertexTangents=Z.vertexTangents,fe.toneMapping=Z.toneMapping}function xs(w,Z){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;A.setFromMatrixPosition(Z.matrixWorld);for(let fe=0,se=w.length;fe<se;fe++){const re=w[fe];if(re.texture!==null&&re.boundingBox.containsPoint(A))return re}return null}function Oa(w,Z,fe,se,re){Z.isScene!==!0&&(Z=Kt),he.resetTextureUnits();const ze=Z.fog,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?Z.environment:null,Pe=J===null?z.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ct.workingColorSpace,Ve=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,ke=Te.get(se.envMap||We,Ve),pt=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,yt=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),je=!!fe.morphAttributes.position,Lt=!!fe.morphAttributes.normal,Jt=!!fe.morphAttributes.color;let jt=ji;se.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(jt=z.toneMapping);const vt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,fn=vt!==void 0?vt.length:0,Xe=ie.get(se),_n=U.state.lights;if(rt===!0&&(ft===!0||w!==ee)){const Xt=w===ee&&se.id===q;tt.setState(se,w,Xt)}let _t=!1;se.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==_n.state.version||Xe.outputColorSpace!==Pe||re.isBatchedMesh&&Xe.batching===!1||!re.isBatchedMesh&&Xe.batching===!0||re.isBatchedMesh&&Xe.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Xe.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Xe.instancing===!1||!re.isInstancedMesh&&Xe.instancing===!0||re.isSkinnedMesh&&Xe.skinning===!1||!re.isSkinnedMesh&&Xe.skinning===!0||re.isInstancedMesh&&Xe.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Xe.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Xe.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Xe.instancingMorph===!1&&re.morphTexture!==null||Xe.envMap!==ke||se.fog===!0&&Xe.fog!==ze||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==tt.numPlanes||Xe.numIntersection!==tt.numIntersection)||Xe.vertexAlphas!==pt||Xe.vertexTangents!==yt||Xe.morphTargets!==je||Xe.morphNormals!==Lt||Xe.morphColors!==Jt||Xe.toneMapping!==jt||Xe.morphTargetsCount!==fn||!!Xe.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Xe.__version=se.version);let Ln=Xe.currentProgram;_t===!0&&(Ln=La(se,Z,re),V&&se.isNodeMaterial&&V.onUpdateProgram(se,Ln,Xe));let jn=!1,On=!1,Pa=!1;const Bt=Ln.getUniforms(),tn=Xe.uniforms;if(b.useProgram(Ln.program)&&(jn=!0,On=!0,Pa=!0),se.id!==q&&(q=se.id,On=!0),Xe.needsLights){const Xt=xs(U.state.lightProbeGridArray,re);Xe.lightProbeGrid!==Xt&&(Xe.lightProbeGrid=Xt,On=!0)}if(jn||ee!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Bt.setValue(W,"projectionMatrix",w.projectionMatrix),Bt.setValue(W,"viewMatrix",w.matrixWorldInverse);const Fi=Bt.map.cameraPosition;Fi!==void 0&&Fi.setValue(W,St.setFromMatrixPosition(w.matrixWorld)),B.logarithmicDepthBuffer&&Bt.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Bt.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,On=!0,Pa=!0)}if(Xe.needsLights&&(_n.state.sunShadowMap.length>0&&Bt.setValue(W,"sunShadowMap",_n.state.sunShadowMap,he),_n.state.directionalShadowMap.length>0&&Bt.setValue(W,"directionalShadowMap",_n.state.directionalShadowMap,he),_n.state.spotShadowMap.length>0&&Bt.setValue(W,"spotShadowMap",_n.state.spotShadowMap,he),_n.state.pointShadowMap.length>0&&Bt.setValue(W,"pointShadowMap",_n.state.pointShadowMap,he)),re.isSkinnedMesh){Bt.setOptional(W,re,"bindMatrix"),Bt.setOptional(W,re,"bindMatrixInverse");const Xt=re.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Bt.setValue(W,"boneTexture",Xt.boneTexture,he))}re.isBatchedMesh&&(Bt.setOptional(W,re,"batchingTexture"),Bt.setValue(W,"batchingTexture",re._matricesTexture,he),Bt.setOptional(W,re,"batchingIdTexture"),Bt.setValue(W,"batchingIdTexture",re._indirectTexture,he),Bt.setOptional(W,re,"batchingColorTexture"),re._colorsTexture!==null&&Bt.setValue(W,"batchingColorTexture",re._colorsTexture,he));const li=fe.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&Q.update(re,fe,Ln),(On||Xe.receiveShadow!==re.receiveShadow)&&(Xe.receiveShadow=re.receiveShadow,Bt.setValue(W,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&Z.environment!==null&&(tn.envMapIntensity.value=Z.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=Bw()),On){if(Bt.setValue(W,"toneMappingExposure",z.toneMappingExposure),Xe.needsLights&&un(tn,Pa),ze&&se.fog===!0&&Fe.refreshFogUniforms(tn,ze),Fe.refreshMaterialUniforms(tn,se,ce,ae,U.state.transmissionRenderTarget[w.id]),Xe.needsLights&&Xe.lightProbeGrid){const Xt=Xe.lightProbeGrid;tn.probesSH.value=Xt.texture,tn.probesMin.value.copy(Xt.boundingBox.min),tn.probesMax.value.copy(Xt.boundingBox.max),tn.probesResolution.value.copy(Xt.resolution)}wu.upload(W,ea(Xe),tn,he)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(wu.upload(W,ea(Xe),tn,he),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Bt.setValue(W,"center",re.center),Bt.setValue(W,"modelViewMatrix",re.modelViewMatrix),Bt.setValue(W,"normalMatrix",re.normalMatrix),Bt.setValue(W,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const Xt=se.uniformsGroups;for(let Fi=0,bi=Xt.length;Fi<bi;Fi++){const ci=Xt[Fi];Ae.update(ci,Ln),Ae.bind(ci,Ln)}}return Ln}function un(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.sunLights.needsUpdate=Z,w.sunLightShadows.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function Fl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,Z,fe){const se=ie.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),ie.get(w.texture).__webglTexture=Z,ie.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const fe=ie.get(w);fe.__webglFramebuffer=Z,fe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(w,Z=0,fe=0){J=w,P=Z,G=fe;let se=null,re=!1,ze=!1;if(w){const Pe=ie.get(w);if(Pe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(W.FRAMEBUFFER,Pe.__webglFramebuffer),ne.copy(w.viewport),ye.copy(w.scissor),Me=w.scissorTest,b.viewport(ne),b.scissor(ye),b.setScissorTest(Me),q=-1;return}else if(Pe.__webglFramebuffer===void 0)he.setupRenderTarget(w);else if(Pe.__hasExternalTextures)he.rebindTextures(w,ie.get(w.texture).__webglTexture,ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const pt=w.depthTexture;if(Pe.__boundDepthTexture!==pt){if(pt!==null&&ie.has(pt)&&(w.width!==pt.image.width||w.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ze=!0);const ke=ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[Z])?se=ke[Z][fe]:se=ke[Z],re=!0):w.samples>0&&he.useMultisampledRTT(w)===!1?se=ie.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?se=ke[fe]:se=ke,ne.copy(w.viewport),ye.copy(w.scissor),Me=w.scissorTest}else ne.copy(Re).multiplyScalar(ce).floor(),ye.copy(be).multiplyScalar(ce).floor(),Me=et;if(fe!==0&&(se=K),b.bindFramebuffer(W.FRAMEBUFFER,se)&&b.drawBuffers(w,se),b.viewport(ne),b.scissor(ye),b.setScissorTest(Me),re){const Pe=ie.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pe.__webglTexture,fe)}else if(ze){const Pe=Z;for(let Ve=0;Ve<w.textures.length;Ve++){const ke=ie.get(w.textures[Ve]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ve,ke.__webglTexture,fe,Pe)}}else if(w!==null&&fe!==0){const Pe=ie.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Pe.__webglTexture,fe)}q=-1};function xo(w){const Z=ie.get(w);return(Z.__readFormat!==w.format||Z.__readType!==w.type)&&(Z.__readFormat=w.format,Z.__readType=w.type,Z.__formatReadable=B.textureFormatReadable(w.format),Z.__typeReadable=B.textureTypeReadable(w.type)),Z}this.readRenderTargetPixels=function(w,Z,fe,se,re,ze,We,Pe=0){if(!(w&&w.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&We!==void 0&&(Ve=Ve[We]),Ve){b.bindFramebuffer(W.FRAMEBUFFER,Ve);try{const ke=w.textures[Pe],pt=ke.format,yt=ke.type;w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Pe);const je=xo(ke);if(je.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-se&&fe>=0&&fe<=w.height-re&&W.readPixels(Z,fe,se,re,Le.convert(pt),Le.convert(yt),ze)}finally{const ke=J!==null?ie.get(J).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(w,Z,fe,se,re,ze,We,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&We!==void 0&&(Ve=Ve[We]),Ve)if(Z>=0&&Z<=w.width-se&&fe>=0&&fe<=w.height-re){b.bindFramebuffer(W.FRAMEBUFFER,Ve);const ke=w.textures[Pe],pt=ke.format,yt=ke.type;w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Pe);const je=xo(ke);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Lt),W.bufferData(W.PIXEL_PACK_BUFFER,ze.byteLength,W.STREAM_READ),W.readPixels(Z,fe,se,re,Le.convert(pt),Le.convert(yt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Jt=J!==null?ie.get(J).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,Jt);const jt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await s1(W,jt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Lt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ze),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Lt),W.deleteSync(jt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,fe=0){const se=Math.pow(2,-fe),re=Math.floor(w.image.width*se),ze=Math.floor(w.image.height*se),We=Z!==null?Z.x:0,Pe=Z!==null?Z.y:0;he.setTexture2D(w,0),W.copyTexSubImage2D(W.TEXTURE_2D,fe,0,0,We,Pe,re,ze),b.unbindTexture()},this.copyTextureToTexture=function(w,Z,fe=null,se=null,re=0,ze=0){let We,Pe,Ve,ke,pt,yt,je,Lt,Jt;const jt=w.isCompressedTexture?w.mipmaps[ze]:w.image;if(fe!==null)We=fe.max.x-fe.min.x,Pe=fe.max.y-fe.min.y,Ve=fe.isBox3?fe.max.z-fe.min.z:1,ke=fe.min.x,pt=fe.min.y,yt=fe.isBox3?fe.min.z:0;else{const tn=Math.pow(2,-re);We=Math.floor(jt.width*tn),Pe=Math.floor(jt.height*tn),w.isDataArrayTexture?Ve=jt.depth:w.isData3DTexture?Ve=Math.floor(jt.depth*tn):Ve=1,ke=0,pt=0,yt=0}se!==null?(je=se.x,Lt=se.y,Jt=se.z):(je=0,Lt=0,Jt=0);const vt=Le.convert(Z.format),fn=Le.convert(Z.type);let Xe;Z.isData3DTexture?(he.setTexture3D(Z,0),Xe=W.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(he.setTexture2DArray(Z,0),Xe=W.TEXTURE_2D_ARRAY):(he.setTexture2D(Z,0),Xe=W.TEXTURE_2D),b.activeTexture(W.TEXTURE0),b.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);const _n=b.getParameter(W.UNPACK_ROW_LENGTH),_t=b.getParameter(W.UNPACK_IMAGE_HEIGHT),Ln=b.getParameter(W.UNPACK_SKIP_PIXELS),jn=b.getParameter(W.UNPACK_SKIP_ROWS),On=b.getParameter(W.UNPACK_SKIP_IMAGES);b.pixelStorei(W.UNPACK_ROW_LENGTH,jt.width),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,jt.height),b.pixelStorei(W.UNPACK_SKIP_PIXELS,ke),b.pixelStorei(W.UNPACK_SKIP_ROWS,pt),b.pixelStorei(W.UNPACK_SKIP_IMAGES,yt);const Pa=w.isDataArrayTexture||w.isData3DTexture,Bt=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const tn=ie.get(w),li=ie.get(Z),Xt=ie.get(tn.__renderTarget),Fi=ie.get(li.__renderTarget);b.bindFramebuffer(W.READ_FRAMEBUFFER,Xt.__webglFramebuffer),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let bi=0;bi<Ve;bi++)Pa&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ie.get(w).__webglTexture,re,yt+bi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ie.get(Z).__webglTexture,ze,Jt+bi)),W.blitFramebuffer(ke,pt,We,Pe,je,Lt,We,Pe,W.DEPTH_BUFFER_BIT,W.NEAREST);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(re!==0||w.isRenderTargetTexture||ie.has(w)){const tn=ie.get(w),li=ie.get(Z);b.bindFramebuffer(W.READ_FRAMEBUFFER,H),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,X);for(let Xt=0;Xt<Ve;Xt++)Pa?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,tn.__webglTexture,re,yt+Xt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,tn.__webglTexture,re),Bt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,li.__webglTexture,ze,Jt+Xt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,li.__webglTexture,ze),re!==0?W.blitFramebuffer(ke,pt,We,Pe,je,Lt,We,Pe,W.COLOR_BUFFER_BIT,W.NEAREST):Bt?W.copyTexSubImage3D(Xe,ze,je,Lt,Jt+Xt,ke,pt,We,Pe):W.copyTexSubImage2D(Xe,ze,je,Lt,ke,pt,We,Pe);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Bt?w.isDataTexture||w.isData3DTexture?W.texSubImage3D(Xe,ze,je,Lt,Jt,We,Pe,Ve,vt,fn,jt.data):Z.isCompressedArrayTexture?W.compressedTexSubImage3D(Xe,ze,je,Lt,Jt,We,Pe,Ve,vt,jt.data):W.texSubImage3D(Xe,ze,je,Lt,Jt,We,Pe,Ve,vt,fn,jt):w.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ze,je,Lt,We,Pe,vt,fn,jt.data):w.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ze,je,Lt,jt.width,jt.height,vt,jt.data):W.texSubImage2D(W.TEXTURE_2D,ze,je,Lt,We,Pe,vt,fn,jt);b.pixelStorei(W.UNPACK_ROW_LENGTH,_n),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,_t),b.pixelStorei(W.UNPACK_SKIP_PIXELS,Ln),b.pixelStorei(W.UNPACK_SKIP_ROWS,jn),b.pixelStorei(W.UNPACK_SKIP_IMAGES,On),ze===0&&Z.generateMipmaps&&W.generateMipmap(Xe),b.unbindTexture()},this.initRenderTarget=function(w){ie.get(w).__webglFramebuffer===void 0&&he.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?he.setTextureCube(w,0):w.isData3DTexture?he.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?he.setTexture2DArray(w,0):he.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){P=0,G=0,J=null,b.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const Hw={name:"pixels-mechanic",modes:{dark:{theme:"dark",effectIndex:11,colors:["#949494","#2d2d2d","#333333","#3a3a3a","#0b0b0b","#060606","#2f2f2f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:.7,intensity:1,scale:1.4,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.32,vignette:.26,vigOpacity:1,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Nebula"},light:{theme:"light",effectIndex:11,colors:["#e0e0e0","#fdfdfd","#f2f2f2","#0a0a0a","#dcdcdc","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:25,speed:.55,intensity:.85,scale:.9,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.92,vignette:0,vigOpacity:0,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor3",softness:.5,blur:0,pixDuration:2.6,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Nebula"}}},Gw={name:"pixels-organic",modes:{dark:{theme:"dark",effectIndex:22,colors:["#0f0f0f","#4a4949","#b9b9b9","#0f0f0f","#d8d8d8","#0f0f0f","#2f2f2f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:.3,intensity:1,scale:1,softness:.76,distortion:.3,complexity:.2,shape:.52,blur:1,highlight:.2,vignette:.26,vigOpacity:1,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Chromium Flow"},light:{theme:"light",effectIndex:22,colors:["#e3e3e3","#ffffff","#f5f5f5","#f5f5f5","#080808","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:25,speed:.3,intensity:.85,scale:1,softness:.76,distortion:.3,complexity:.2,shape:.52,blur:1,highlight:.7,vignette:0,vigOpacity:0,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.55,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Chromium Flow"}}},Vw={name:"sweep-gradient",modes:{dark:{theme:"dark",effectIndex:25,colors:["#0f0f0f","#0f0f0f","#282828","#3a3a3a","#525252","#0f0f0f","#0f0f0f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:2.65,intensity:1,scale:1,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.32,vignette:.26,vigOpacity:1,shaderOpacity:1,sweepEase:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"gradientSweep",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Gradient Sweep"},light:{theme:"light",effectIndex:25,colors:["#f5f5f5","#f5f5f5","#ededed","#eaeaea","#d2d2d2","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:2.65,intensity:.85,scale:1,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.92,vignette:0,vigOpacity:0,shaderOpacity:1,sweepEase:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"gradientSweep",softness:.5,blur:0,pixDuration:2.6,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Gradient Sweep"}}},kw={"pixels-organic":Gw,"pixels-mechanic":Hw,"sweep-gradient":Vw},Lh=kw;let ml;function Ww(){if(ml!==void 0)return ml;if(typeof document>"u")return ml=null,null;const s=document.createElement("canvas");return s.width=1,s.height=1,ml=s.getContext("2d"),ml}function Qs(s){if(typeof s!="string"||s.length===0)return[0,0,0];if(s[0]==="#"){let f=s.slice(1);if(f.length===3&&(f=f[0]+f[0]+f[1]+f[1]+f[2]+f[2]),(f.length===6||f.length===8)&&/^[0-9a-fA-F]+$/.test(f))return[parseInt(f.slice(0,2),16)/255,parseInt(f.slice(2,4),16)/255,parseInt(f.slice(4,6),16)/255]}const e=Ww();if(!e)return[0,0,0];e.fillStyle="#000000",e.fillStyle=s;const i=e.fillStyle;e.fillStyle="#ffffff",e.fillStyle=s;const r=e.fillStyle;if(i!==r)return[0,0,0];const l=i;if(l[0]==="#")return[parseInt(l.slice(1,3),16)/255,parseInt(l.slice(3,5),16)/255,parseInt(l.slice(5,7),16)/255];const c=l.match(/^rgba?\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)/);if(c){const f=h=>Math.max(0,Math.min(255,h))/255;return[f(parseFloat(c[1])),f(parseFloat(c[2])),f(parseFloat(c[3]))]}return[0,0,0]}const Xw=`
  void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,qw=`
  uniform vec2 u_resolution;
  uniform float u_dpr;
  uniform float u_time;
  uniform vec3 u_color1, u_color2, u_color3, u_color4, u_color5, u_color6, u_color7, u_cardBg;
  uniform float u_alpha1, u_alpha2, u_alpha3, u_alpha4, u_alpha5, u_alpha6, u_alpha7;
  uniform float u_speed, u_intensity, u_scale, u_direction;
  uniform float u_softness, u_distortion, u_complexity, u_shape, u_flicker;
  uniform float u_vignette, u_vigOpacity, u_blur, u_highlight, u_shaderOpacity;
  uniform float u_cellSize, u_gap, u_dotSize, u_dotSoftness, u_dotOpacity, u_hlScale, u_fillOpacity, u_edgeFade, u_fadeStr;
  uniform float u_dotMode;
  uniform int u_effect;
  uniform int u_sweepEase;

  // Reference card edge length (CSS px) at which the original preset cellSize
  // gives the canonical cell count. Cell PIXEL size stays constant across card
  // sizes by scaling gridSize proportionally to (currentCssDim / REF_DIM).
  const float REF_DIM = 320.0;

  /** Anisotropic cell count: returns the number of cells along x and y so that
   *  each cell stays SQUARE in screen space regardless of the card's aspect
   *  ratio. A 600×300 card gets twice as many cells horizontally as vertically;
   *  cells stay the same physical size as on a 300×300 card. */
  vec2 gridCounts(float baseCount) {
    vec2 cssRes = u_resolution / max(u_dpr, 0.0001);
    return max(vec2(2.0), floor(baseCount * cssRes / REF_DIM));
  }

  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289v2(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289((x * 34.0 + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289v2(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x_ = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x_) - 0.5;
    vec3 ox = floor(x_ + 0.5);
    vec3 a0 = x_ - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p, float oct) {
    float val = 0.0, amp = 0.5;
    int n = int(oct);
    for (int i = 0; i < 4; i++) {
      if (i >= n) break;
      val += amp * snoise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return val;
  }

  float nfbm(vec2 p) { return fbm(p, 2.0 + u_complexity * 2.0); }

  vec3 palette(float t) {
    t = clamp(t, 0.0, 1.0);
    t = t * t * (3.0 - 2.0 * t);
    float k = 64.0;
    float w1 = u_alpha1 * exp(-k * t * t);
    float w2 = u_alpha2 * exp(-k * (t - 0.25) * (t - 0.25));
    float w3 = u_alpha3 * exp(-k * (t - 0.5)  * (t - 0.5));
    float w4 = u_alpha4 * exp(-k * (t - 0.75) * (t - 0.75));
    float w5 = u_alpha5 * exp(-k * (t - 1.0)  * (t - 1.0));
    float total = w1 + w2 + w3 + w4 + w5 + 0.0001;
    return (u_color1*w1 + u_color2*w2 + u_color3*w3 + u_color4*w4 + u_color5*w5) / total;
  }

  vec3 softBlend(float a, float b, float c) {
    a = clamp(a, 0.0, 1.0); a *= a;
    b = clamp(b, 0.0, 1.0); b *= b;
    c = clamp(c, 0.0, 1.0); c *= c;
    float d = clamp(a * 0.7 + c * 0.3, 0.0, 1.0); d *= d;
    float e = clamp(b * 0.5 + c * 0.5, 0.0, 1.0); e *= e;
    a *= u_alpha1; b *= u_alpha2; c *= u_alpha3; d *= u_alpha4; e *= u_alpha5;
    float total = a + b + c + d + e;
    float floorW = max(0.001 - total, 0.0);
    vec3 fallback = (u_color1 + u_color2 + u_color3 + u_color4 + u_color5) * 0.2;
    return (u_color1 * a + u_color2 * b + u_color3 * c + u_color4 * d + u_color5 * e + fallback * floorW) / (total + floorW);
  }

  vec2 warp(vec2 p, float t) {
    float str = u_distortion * 2.0;
    return vec2(
      nfbm(p + vec2(t * 0.1, 0.0)),
      nfbm(p + vec2(0.0, t * 0.12) + 5.0)
    ) * str;
  }

  float sweepEase(float x) {
    if (u_sweepEase == 1) return x * x * (3.0 - 2.0 * x);
    if (u_sweepEase == 2) {
      float p = 1.0 - x;
      return 1.0 - p * p * p;
    }
    if (u_sweepEase == 3) {
      return x < 0.5 ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) * 0.5;
    }
    if (u_sweepEase == 4) return 1.0 - pow(2.0, -10.0 * x) * (1.0 - x);
    return x;
  }

  float blob(vec2 p, vec2 center, float radius) {
    float r = radius * (0.5 + u_shape * 0.8);
    float soft = 0.05 + u_softness * 0.4;
    return smoothstep(r + soft, r - soft * 0.5, length(p - center));
  }

  vec3 computeEffect(vec2 uv, float aspect, float t, float dist, float soft, float cpx, float shp) {
    vec2 p = (uv - 0.5) * u_scale;
    p.x *= aspect;
    p += vec2(cos(u_direction), sin(u_direction)) * t * 0.15;
    vec3 col = vec3(0.0);

    if (u_effect == 0) {
      float val = sin(p.x * 3.0 + t) * 0.5 + 0.5;
      val += sin(p.y * 2.0 + t * 0.7) * 0.3;
      val += sin((p.x + p.y) * (1.0 + cpx * 3.0) - t * 0.5) * 0.2;
      vec2 w = warp(p, t);
      val += (w.x + w.y) * 0.15;
      col = palette(clamp(val * u_intensity, 0.0, 1.0));

    } else if (u_effect == 1) {
      float freq = 3.0 + cpx * 8.0;
      float val = 0.0;
      val += sin(p.x * freq + t);
      val += sin(p.y * freq + t * 1.3);
      val += sin((p.x + p.y) * freq * 0.7 + t * 0.7);
      val += sin(length(p) * freq * 0.8 - t * 1.5);
      vec2 w = warp(p, t);
      val += (w.x + w.y) * dist;
      val = val * 0.2 * u_intensity + 0.5;
      col = palette(clamp(val, 0.0, 1.0));

    } else if (u_effect == 2) {
      vec2 q = vec2(nfbm(p + t * 0.3), nfbm(p + vec2(5.2, 1.3) + t * 0.2));
      float val = nfbm(p + q * (1.0 + dist * 3.0) + t * 0.1);
      val = val * u_intensity * 0.5 + 0.5;
      col = palette(clamp(val, 0.0, 1.0));

    } else if (u_effect == 3) {
      float d = length(p);
      float val = sin(d * (3.0 + cpx * 6.0) - t * 2.0) * 0.5 + 0.5;
      val *= exp(-d * (0.3 + shp * 1.0));
      val += sin(atan(p.y, p.x) * (1.5 + cpx * 2.0) + t) * 0.15;
      col = palette(clamp(val * u_intensity, 0.0, 1.0));

    } else if (u_effect == 4) {
      vec2 q = vec2(nfbm(p * (0.5 + shp * 0.6) + vec2(t * 0.12, t * 0.08)), nfbm(p * (0.5 + shp * 0.6) + vec2(t * 0.09, -t * 0.11)));
      vec2 r = vec2(nfbm(p + q * (1.0 + dist * 2.0) + vec2(1.7, 9.2) + t * 0.06), nfbm(p + q * (1.0 + dist * 2.0) + vec2(8.3, 2.8) - t * 0.08));
      float val = nfbm(p + r * 2.0);
      float lo = -0.3 - soft * 0.5;
      float hi = 0.5 + soft * 0.5;
      val = smoothstep(lo, hi, val * u_intensity);
      col = palette(val);

    } else if (u_effect == 5) {
      float n1 = nfbm(vec2(p.x * 0.5 + t * 0.15, p.y * (1.0 + cpx * 1.5)));
      float n2 = nfbm(vec2(p.x * 0.3 - t * 0.1, p.y * (0.8 + cpx * 1.0) + 3.0));
      float band = sin(p.y * 3.0 + n1 * (1.0 + dist * 2.0) + t * 0.3) * 0.5 + 0.5;
      float shimmer = sin(p.y * 4.0 + n2 * 1.5 - t * 0.2) * 0.5 + 0.5;
      float w1 = band * (0.5 + 0.5 * sin(p.x * 1.5 + t * 0.2 + n1));
      float w2 = shimmer * (0.5 + 0.5 * cos(p.x * 1.0 - t * 0.15 + n2));
      float w3 = nfbm(p * 0.5 + t * 0.05) * 0.5 + 0.5;
      col = softBlend(w1 * u_intensity, w2 * u_intensity, w3 * 0.6 * u_intensity);

    } else if (u_effect == 6) {
      vec2 wp = warp(p * 1.2, t);
      float blobR = 0.15 + shp * 0.2;
      float b1 = blob(p, vec2(sin(t * 0.3) * 0.3, cos(t * 0.2) * 0.4) + wp * 0.2, blobR);
      float b2 = blob(p, vec2(cos(t * 0.25) * 0.4, sin(t * 0.35) * 0.3 - 0.2) + wp * 0.15, blobR * 1.2);
      float b3 = blob(p, vec2(-sin(t * 0.2) * 0.3, -cos(t * 0.3) * 0.35) + wp * 0.18, blobR);
      float bg = nfbm(p * 0.5 + t * 0.05) * 0.3 + 0.15;
      col = softBlend((b1 + bg * 0.5) * u_intensity, (b2 + bg * 0.3) * u_intensity, (b3 + bg * 0.4) * u_intensity);

    } else if (u_effect == 7) {
      float sz = 0.4 + shp * 0.6;
      float sigma = sz * sz * 2.0;
      vec2 a1 = vec2(-0.45 + sin(t * 0.07) * 0.06, 0.45 + cos(t * 0.09) * 0.05);
      vec2 a2 = vec2(0.45 + cos(t * 0.08) * 0.06, 0.45 + sin(t * 0.06) * 0.05);
      vec2 a3 = vec2(0.0 + sin(t * 0.05) * 0.1, 0.0 + cos(t * 0.07) * 0.1);
      vec2 a4 = vec2(-0.4 + cos(t * 0.06) * 0.07, -0.3 + sin(t * 0.08) * 0.06);
      vec2 a5 = vec2(0.4 + sin(t * 0.07) * 0.06, -0.4 + cos(t * 0.05) * 0.06);
      float g1 = exp(-dot(p - a1, p - a1) / sigma);
      float g2 = exp(-dot(p - a2, p - a2) / sigma);
      float g3 = exp(-dot(p - a3, p - a3) / sigma);
      float g4 = exp(-dot(p - a4, p - a4) / sigma);
      float g5 = exp(-dot(p - a5, p - a5) / sigma);
      float nudge = dist > 0.01 ? snoise(p * (0.5 + cpx) + t * 0.04) * dist * 0.08 : 0.0;
      float w1 = (g1 + g4 + nudge) * u_intensity;
      float w2 = (g2 + g5 + nudge) * u_intensity;
      float w3 = (g3 + nudge) * u_intensity;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 8) {
      vec2 w1 = vec2(nfbm(p * (0.7 + cpx * 0.5) + t * 0.1), nfbm(p * (0.7 + cpx * 0.5) + vec2(3.3, 7.7) + t * 0.08));
      vec2 w2 = vec2(nfbm(p * 0.6 + w1 * (1.0 + dist) + t * 0.06), nfbm(p * 0.6 + w1 * (1.0 + dist) + vec2(1.7, 4.2) - t * 0.07));
      float f1 = nfbm(p + w2 * 1.5);
      float f2 = nfbm(p + w2 * 1.5 + vec2(4.1, 2.3));
      float f3 = nfbm(p + w2 * 1.5 + vec2(7.5, 6.1));
      col = softBlend((f1 * 0.5 + 0.5) * u_intensity, (f2 * 0.5 + 0.5) * u_intensity, (f3 * 0.5 + 0.5) * u_intensity);

    } else if (u_effect == 9) {
      vec2 sw = vec2(sin(p.y * 2.0 + t * 0.3) * 0.15 + snoise(p * 1.5 + t * 0.15) * dist * 0.3, cos(p.x * 1.8 + t * 0.25) * 0.15 + snoise(p * 1.5 + vec2(5.0, 0.0) + t * 0.12) * dist * 0.3);
      vec2 wp = p + sw;
      float caustic = (snoise(wp * (1.5 + cpx * 2.0) + t * 0.2) * 0.5 + 0.5) + (snoise(wp * (2.0 + cpx * 2.0) - t * 0.15) * 0.5 + 0.5) * 0.5;
      caustic = caustic / 1.5;
      float depth = nfbm(vec2(p.x * 0.3, p.y * 0.8) + t * 0.05) * 0.5 + 0.5;
      col = softBlend(depth * u_intensity, (1.0 - depth) * u_intensity, caustic * u_intensity);

    } else if (u_effect == 10) {
      float angle = 0.6 + shp * 1.2;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      float n1 = nfbm(rp * 0.8 + t * 0.12) * (1.0 + dist * 2.0);
      float n2 = nfbm(rp * 0.6 + vec2(3.0, 0.0) + t * 0.1) * (1.0 + dist * 1.5);
      float wave = sin(rp.x * (2.0 + cpx * 2.0) + n1 + t * 0.3);
      float wave2 = sin(rp.x * (1.5 + cpx * 1.5) + n2 - t * 0.2);
      float ribbon1 = exp(-2.0 * (rp.y - wave * 0.35) * (rp.y - wave * 0.35)) * u_intensity;
      float ribbon2 = exp(-2.0 * (rp.y - 0.15 - wave2 * 0.3) * (rp.y - 0.15 - wave2 * 0.3)) * u_intensity;
      float bg = nfbm(p * 0.4 + t * 0.03) * 0.5 + 0.5;
      col = softBlend(ribbon1, ribbon2, bg * 0.5 * u_intensity);

    } else if (u_effect == 11) {
      vec2 q = vec2(nfbm(p * 0.5 + vec2(t * 0.05, 0.0)), nfbm(p * 0.5 + vec2(0.0, t * 0.07)));
      vec2 r = vec2(nfbm(p * 0.6 + q * (1.0 + dist * 1.5) + vec2(1.7, 9.2) + t * 0.03), nfbm(p * 0.6 + q * (1.0 + dist * 1.5) + vec2(8.3, 2.8) + t * 0.04));
      float f = nfbm(p + r * 1.5);
      float f2 = nfbm(p * 0.7 + r + vec2(3.0, 7.0));
      col = softBlend((f * 0.5 + 0.5) * u_intensity, (f2 * 0.5 + 0.5) * u_intensity, (nfbm(p * 0.4 - t * 0.02) * 0.5 + 0.5) * u_intensity);

    } else if (u_effect == 12) {
      vec2 w = warp(p * 0.5, t * 0.7);
      float fold1 = sin(p.x * (1.5 + cpx * 2.0) + w.x * 1.5 + t * 0.2) * 0.5 + 0.5;
      float fold2 = sin(p.y * (1.2 + cpx * 1.5) + w.y * 1.5 - t * 0.15) * 0.5 + 0.5;
      float fold3 = sin((p.x - p.y) * (0.8 + cpx * 0.8) + (w.x + w.y) + t * 0.1) * 0.5 + 0.5;
      col = softBlend(fold1 * u_intensity, fold2 * u_intensity, fold3 * 0.7 * u_intensity);

    } else if (u_effect == 13) {
      float spread = 0.25 + shp * 0.35;
      vec2 w = warp(p, t * 0.5);
      vec2 c1 = vec2(sin(t * 0.08) * spread, cos(t * 0.11) * spread) + w * 0.15;
      vec2 c2 = vec2(cos(t * 0.09) * spread * 1.3, sin(t * 0.07) * spread) + w * 0.12;
      vec2 c3 = vec2(-sin(t * 0.1) * spread, -cos(t * 0.08) * spread * 1.2) + w * 0.1;
      float falloff = 0.3 + soft * 0.7;
      float d1 = 1.0 - smoothstep(0.0, falloff, length(p - c1 + w * dist * 0.3));
      float d2 = 1.0 - smoothstep(0.0, falloff, length(p - c2 + w * dist * 0.25));
      float d3 = 1.0 - smoothstep(0.0, falloff, length(p - c3 + w * dist * 0.2));
      float detail = nfbm(p * 2.0 + t * 0.05) * cpx * 0.3;
      col = softBlend((d1 + detail) * u_intensity, (d2 + detail) * u_intensity, (d3 + detail) * u_intensity);

    } else if (u_effect == 14) {
      vec2 w = warp(p * 0.6, t * 0.6);
      float angle = atan(p.y + w.y * dist, p.x + w.x * dist);
      float radius = length(p);
      float field1 = sin(angle * (2.0 + cpx * 4.0) + radius * (3.0 + cpx * 3.0) + t * 0.4 + nfbm(p + t * 0.1) * dist * 2.0) * 0.5 + 0.5;
      float field2 = sin(angle * (1.5 + cpx * 2.5) - radius * 2.0 - t * 0.3 + nfbm(p * 0.6 + t * 0.08) * dist * 1.5) * 0.5 + 0.5;
      float bg = nfbm(p * 0.3 + t * 0.03) * 0.5 + 0.5;
      col = softBlend(field1 * u_intensity, field2 * u_intensity, bg * 0.5 * u_intensity);

    } else if (u_effect == 15) {
      vec2 drift = vec2(t * 0.06, t * 0.03);
      float c1 = nfbm((p + drift) * (0.4 + cpx * 0.5)) * 0.5 + 0.5;
      float c2 = nfbm((p + drift + vec2(3.7, 1.2)) * (0.35 + cpx * 0.4)) * 0.5 + 0.5;
      float c3 = nfbm((p + drift + vec2(7.1, 4.5)) * (0.3 + cpx * 0.35)) * 0.5 + 0.5;
      vec2 w = warp(p * 0.2, t * 0.4);
      c1 += w.x * dist * 0.3;
      c2 += w.y * dist * 0.25;
      col = softBlend(c1 * u_intensity, c2 * u_intensity, c3 * u_intensity);

    } else if (u_effect == 16) {
      vec2 w = warp(vec2(p.x * 0.3, p.y * 0.6), t * 0.5);
      float c1 = sin(p.x * (1.5 + cpx * 2.0) + w.x * (1.0 + dist * 2.0) + t * 0.15) * 0.5 + 0.5;
      float c2 = sin(p.x * (1.0 + cpx * 1.5) + w.y * (1.0 + dist * 1.5) - t * 0.12 + 2.0) * 0.5 + 0.5;
      float c3 = sin(p.x * (0.8 + cpx * 1.0) + (w.x + w.y) * 0.5 * (1.0 + dist) + t * 0.08 + 4.0) * 0.5 + 0.5;
      float fade = nfbm(vec2(p.x * 0.3, p.y * 0.5) + t * 0.03) * 0.5 + 0.5;
      col = softBlend(c1 * fade * u_intensity, c2 * fade * u_intensity, c3 * (1.0 - fade * 0.4) * u_intensity * 0.7);

    } else if (u_effect == 17) {
      vec2 w = warp(p * 0.8, t * 0.6);
      vec2 w2 = warp(p * 0.5 + w * 0.4, t * 0.4);
      float r1 = (snoise((p + w * dist * 0.5) * (1.5 + cpx * 2.0) + t * 0.1) * 0.5 + 0.5) * u_intensity;
      float r2 = (snoise((p + w2 * dist * 0.4) * (1.2 + cpx * 1.5) + t * 0.08 + 3.0) * 0.5 + 0.5) * u_intensity;
      float r3 = (snoise((p + (w + w2) * dist * 0.3) * (0.8 + cpx * 1.0) - t * 0.06 + 7.0) * 0.5 + 0.5) * u_intensity;
      col = softBlend(r1, r2, r3);

    } else if (u_effect == 18) {
      vec2 w = warp(p * 0.5, t * 0.5);
      float blobSize = 0.2 + shp * 0.3;
      float total1 = 0.0, total2 = 0.0;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        vec2 c1 = vec2(sin(t * 0.1 + fi * 2.1) * 0.4, cos(t * 0.13 + fi * 1.7) * 0.35) + w * dist * 0.15;
        vec2 c2 = vec2(cos(t * 0.12 + fi * 1.9) * 0.35, sin(t * 0.09 + fi * 2.3) * 0.4) + w * dist * 0.12;
        total1 += blobSize * blobSize / (dot(p - c1, p - c1) + 0.02);
        total2 += blobSize * blobSize / (dot(p - c2, p - c2) + 0.02);
      }
      total1 = clamp(total1 * 0.25, 0.0, 1.0);
      total2 = clamp(total2 * 0.25, 0.0, 1.0);
      float total3 = nfbm(p + w * dist * 0.3 + t * 0.05) * 0.5 + 0.5;
      col = softBlend(total1 * u_intensity, total2 * u_intensity, total3 * 0.7 * u_intensity);

    } else if (u_effect == 19) {
      vec2 w = warp(p * 0.4, t * 0.4);
      float angle = atan(p.y, p.x);
      float radius = length(p);
      float s1 = sin(angle * (1.5 + cpx * 2.0) + radius * (3.0 + cpx * 3.0) + t * 0.3 + w.x * dist * 1.5) * 0.5 + 0.5;
      float s2 = sin(angle * (1.2 + cpx * 1.5) - radius * (2.5 + cpx * 2.5) - t * 0.25 + w.y * dist * 1.5 + 1.5) * 0.5 + 0.5;
      float s3 = sin((angle + 3.14) * (0.8 + cpx) + radius * (2.0 + cpx * 2.0) + t * 0.15 + (w.x + w.y) * dist) * 0.5 + 0.5;
      float fade = exp(-radius * (0.5 - shp * 0.3));
      col = softBlend(s1 * fade * u_intensity, s2 * fade * u_intensity, s3 * fade * 0.7 * u_intensity);

    } else if (u_effect == 20) {
      vec2 w = warp(p * 0.5, t * 0.4);
      vec2 wp = p + w * (0.4 + dist * 0.6);
      float scale = 0.6 + cpx * 0.8;
      float h  = nfbm(wp * scale + t * 0.08);
      float eps = 0.06;
      float hx = nfbm((wp + vec2(eps, 0.0)) * scale + t * 0.08) - h;
      float hy = nfbm((wp + vec2(0.0, eps)) * scale + t * 0.08) - h;
      vec3 n = normalize(vec3(-hx * 6.0, -hy * 6.0, 1.0));
      vec3 lightDir = normalize(vec3(0.55, 0.65, 0.8));
      float light = max(dot(n, lightDir), 0.0);
      float spec = pow(light, 6.0 + shp * 26.0);
      float diffuse = light * 0.6 + 0.35;
      float fres = pow(1.0 - max(n.z, 0.0), 2.0);
      float w1 = (diffuse + spec * 0.5) * u_intensity;
      float w2 = (h * 0.5 + 0.5 + spec * 0.3 + fres * 0.3) * u_intensity;
      float w3 = (spec * 1.4 + fres * 0.5) * u_intensity;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 21) {
      vec2 w = warp(p * 0.4, t * 0.3);
      float angle = 0.2 + shp * 1.3;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      float band = sin(rp.y * (3.0 + cpx * 5.0) + w.x * (1.0 + dist * 2.5) + t * 0.35);
      float ridge = 1.0 - abs(band);
      ridge = pow(ridge, 5.0 + shp * 10.0);
      float band2 = sin(rp.y * (2.0 + cpx * 3.0) + w.y * (0.8 + dist * 2.0) - t * 0.22 + 1.4);
      float ridge2 = 1.0 - abs(band2);
      ridge2 = pow(ridge2, 3.0 + shp * 8.0);
      float bg = nfbm(p * 0.45 + t * 0.05) * 0.5 + 0.5;
      float w1 = (ridge * 1.4 + bg * 0.25) * u_intensity;
      float w2 = (ridge2 * 1.0 + bg * 0.45) * u_intensity;
      float w3 = (ridge * 0.5 + ridge2 * 0.5) * u_intensity * 0.8;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 22) {
      vec2 w  = warp(p * 0.7, t * 0.5);
      vec2 w2 = warp(p * 0.4 + w * 0.3, t * 0.3);
      vec2 wp = p + w * (0.4 + dist * 0.6);
      float n1 = snoise(wp * (1.4 + cpx * 1.6) + t * 0.14);
      float n2 = snoise((wp + w2 * dist * 0.4) * (2.0 + cpx * 2.0) + vec2(3.0, 7.0) - t * 0.1);
      float ridge1 = 1.0 - abs(n1);
      ridge1 = pow(ridge1, 5.0 + shp * 12.0);
      float ridge2 = 1.0 - abs(n2);
      ridge2 = pow(ridge2, 4.0 + shp * 10.0);
      float base = (n1 + n2) * 0.25 + 0.5;
      float w1 = (base * 0.6 + ridge1 * 1.2) * u_intensity;
      float w2c = ((1.0 - base) * 0.6 + ridge2 * 1.0) * u_intensity;
      float w3 = (ridge1 * 0.8 + ridge2 * 0.6) * u_intensity;
      col = softBlend(w1, w2c, w3);

    } else if (u_effect == 23) {
      float angle = 0.1 + shp * 1.4;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      vec2 stretch = vec2(rp.x * (5.0 + cpx * 4.0), rp.y * (0.35 + cpx * 0.3));
      vec2 sw = warp(stretch * 0.3, t * 0.3) * dist;
      float n1 = snoise(stretch + sw + t * 0.08);
      float n2 = snoise(stretch * 1.4 + vec2(2.0, 5.0) + sw - t * 0.06);
      float streak = 1.0 - abs(n1);
      streak = pow(streak, 6.0 + shp * 12.0);
      float streak2 = 1.0 - abs(n2);
      streak2 = pow(streak2, 4.0 + shp * 8.0);
      float bg = nfbm(p * 0.4 + t * 0.04) * 0.4 + 0.4;
      float w1 = (streak * 1.4 + bg * 0.3) * u_intensity;
      float w2 = (streak2 * 0.9 + bg * 0.5) * u_intensity;
      float w3 = (streak * 0.7 + streak2 * 0.4) * u_intensity * 0.8;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 24) {
      vec2 w1 = warp(p * 0.55, t * 0.4);
      vec2 w2 = warp(p * 0.7 + w1 * 0.4, t * 0.3);
      vec2 wp = p + (w1 + w2) * (0.4 + dist * 0.7);

      float scale = 0.65 + cpx * 0.7;
      float n1 = nfbm(wp * scale + vec2(0.0, 0.0) + t * 0.10);
      float n2 = nfbm(wp * scale + vec2(3.7, 5.2) - t * 0.07);
      float n3 = nfbm(wp * scale + vec2(7.1, 2.3) + t * 0.06);
      float n4 = nfbm(wp * scale + vec2(1.8, 8.4) - t * 0.08);
      float n5 = nfbm(wp * scale + vec2(4.9, 1.1) + t * 0.05);
      float n6 = nfbm(wp * scale + vec2(6.3, 7.8) - t * 0.09);
      float n7 = nfbm(wp * scale + vec2(2.4, 4.6) + t * 0.04);

      float pw = 2.5 + shp * 5.0;
      n1 = pow(clamp(n1, 0.0, 1.0), pw);
      n2 = pow(clamp(n2, 0.0, 1.0), pw);
      n3 = pow(clamp(n3, 0.0, 1.0), pw);
      n4 = pow(clamp(n4, 0.0, 1.0), pw);
      n5 = pow(clamp(n5, 0.0, 1.0), pw);
      n6 = pow(clamp(n6, 0.0, 1.0), pw);
      n7 = pow(clamp(n7, 0.0, 1.0), pw);

      float intens = 0.5 + u_intensity * 0.9;
      float a1 = n1 * u_alpha1 * intens;
      float a2 = n2 * u_alpha2 * intens;
      float a3 = n3 * u_alpha3 * intens;
      float a4 = n4 * u_alpha4 * intens;
      float a5 = n5 * u_alpha5 * intens;
      float a6 = n6 * u_alpha6 * intens;
      float a7 = n7 * u_alpha7 * intens;
      float total = a1 + a2 + a3 + a4 + a5 + a6 + a7 + 0.001;
      col = (u_color1 * a1 + u_color2 * a2 + u_color3 * a3 + u_color4 * a4
           + u_color5 * a5 + u_color6 * a6 + u_color7 * a7) / total;

    } else if (u_effect == 25) {
      float d = (uv.x + (1.0 - uv.y)) * 0.5;
      float w = 0.9 / max(u_scale, 0.25);
      float cyc = t * 0.08;
      float pA = mix(-w, 1.0 + w, sweepEase(fract(cyc)));
      float pB = mix(-w, 1.0 + w, sweepEase(fract(cyc + 0.5)));
      float band = max(
        clamp(1.0 - abs(d - pA) / w, 0.0, 1.0),
        clamp(1.0 - abs(d - pB) / w, 0.0, 1.0)
      );
      float v = band * u_intensity;

      vec2 ggs = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        ggs = max(vec2(2.0), floor(ggs * (1.0 - u_gap * 0.8)));
      }
      vec2 cell = floor(uv * ggs);
      float clk = t * 1.6;
      // Wrap the stepped clock to keep sin() arguments small. u_time grows
      // unbounded over a session; on mediump-float GPUs (older Android, some
      // iOS) large hash inputs lose precision and the flicker bands/freezes.
      // mod(x, 1024) keeps the crossfade continuous across the wrap
      // (step 1023 fades into step 0, whose hash is the next s0).
      float step0 = mod(floor(clk), 1024.0);
      float step1 = mod(step0 + 1.0, 1024.0);
      float fz = smoothstep(0.0, 1.0, fract(clk));
      float cellSeed = dot(cell, vec2(127.1, 311.7));
      float r1 = fract(sin(cellSeed + step0 * 17.23) * 43758.5453);
      float r2 = fract(sin(cellSeed + step1 * 17.23) * 43758.5453);
      float rnd = mix(r1, r2, fz);
      v += (rnd - 0.5) * u_flicker * 0.9 * (0.15 + band * 0.85);

      col = palette(clamp(v, 0.0, 1.0));
    }

    return col;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;
    float t = u_time * u_speed;
    float dist = u_distortion;
    float soft = u_softness;
    float cpx = u_complexity;
    float shp = u_shape;

    vec2 sampleUV = uv;
    if (u_dotMode > 0.5) {
      vec2 gs = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        gs = max(vec2(2.0), floor(gs * (1.0 - u_gap * 0.8)));
      }
      sampleUV = (floor(uv * gs) + vec2(0.5)) / gs;
    }

    vec3 col;
    if (u_blur < 0.01) {
      col = computeEffect(sampleUV, aspect, t, dist, soft, cpx, shp);
    } else {
      float r = u_blur * 0.02;
      col  = computeEffect(sampleUV, aspect, t, dist, soft, cpx, shp) * 0.4;
      col += computeEffect(sampleUV + vec2( r,  0.0), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2(-r,  0.0), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2( 0.0,  r), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2( 0.0, -r), aspect, t, dist, soft, cpx, shp) * 0.15;
    }

    vec3 baseCol = col;
    if (u_dotMode < 0.5) {
      col = pow(col, vec3(1.3));
    }

    // CSS-pixel distance to the nearest edge — keeps the vignette / edge-fade
    // bands a consistent physical width on every side of any aspect ratio.
    vec2 cssRes = u_resolution / max(u_dpr, 0.0001);
    vec2 cssCoord = uv * cssRes;
    float edgeDistPx = min(
      min(cssCoord.x, cssRes.x - cssCoord.x),
      min(cssCoord.y, cssRes.y - cssCoord.y)
    );
    float vigRangePx = 40.0 * (1.0 + u_vignette * 3.0);
    float vig = (edgeDistPx * edgeDistPx) / (vigRangePx * vigRangePx);
    vig = smoothstep(0.0, 1.0, vig);
    col *= mix(1.0, vig, u_vignette * u_vigOpacity);

    float colorAlpha = (u_alpha1 + u_alpha2 + u_alpha3 + u_alpha4 + u_alpha5) / 5.0;
    if (colorAlpha < 0.999) {
      vec3 c1d = col - u_color1, c2d = col - u_color2, c3d = col - u_color3, c4d = col - u_color4, c5d = col - u_color5;
      float prox1 = exp(-8.0 * dot(c1d, c1d));
      float prox2 = exp(-8.0 * dot(c2d, c2d));
      float prox3 = exp(-8.0 * dot(c3d, c3d));
      float prox4 = exp(-8.0 * dot(c4d, c4d));
      float prox5 = exp(-8.0 * dot(c5d, c5d));
      float pTotal = prox1 + prox2 + prox3 + prox4 + prox5 + 0.0001;
      colorAlpha = (prox1*u_alpha1 + prox2*u_alpha2 + prox3*u_alpha3 + prox4*u_alpha4 + prox5*u_alpha5) / pTotal;
    }
    float alpha = colorAlpha;

    if (u_dotMode > 0.5) {
      vec2 gridSize = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        gridSize = max(vec2(2.0), floor(gridSize * (1.0 - u_gap * 0.8)));
      }
      // cellLocal is in [0,1] within each cell. Because gridSize was chosen so
      // that cell PIXEL size is square, distance / mask math here works in
      // screen-square units even though we're operating in normalised cell uv.
      vec2 cellLocal = fract(uv * gridSize);

      float hlFactor = 0.0;
      if (u_highlight > 0.01 || u_hlScale > 0.01) {
        vec2 cellCenter = (floor(uv * gridSize) + vec2(0.5)) / gridSize;
        vec2 cp2 = (cellCenter - 0.5) * u_scale;
        cp2.x *= aspect;
        float lw = sin(cp2.x * 3.0 + t * 1.5) * 0.5 + 0.5;
        lw *= sin(cp2.y * 2.5 - t * 1.1) * 0.5 + 0.5;
        lw += (snoise(cp2 * 2.0 + t * 0.6) * 0.5 + 0.5) * 0.3;
        hlFactor = clamp(lw, 0.0, 1.0);
        hlFactor *= hlFactor;
      }

      float scaleBoost = 1.0 + smoothstep(0.2, 0.8, hlFactor) * u_hlScale * 1.2;

      float mask = 1.0;
      if (u_dotMode < 1.5) {
        float gapW = u_gap * 0.35 / scaleBoost;
        if (gapW > 0.003) {
          mask = step(gapW, cellLocal.x) * step(gapW, 1.0 - cellLocal.x)
               * step(gapW, cellLocal.y) * step(gapW, 1.0 - cellLocal.y);
        }
      } else {
        // Render the circular dot mask in screen-pixel space rather than
        // cell-local UV. We map the cell-local offset to actual pixels
        // (cellPx = u_resolution / gridSize), then apply a 1-pixel AA
        // floor to the smoothstep edge so the dot rim is crisp and
        // properly anti-aliased even at u_dotSoftness near 0. The user
        // softness slider still scales linearly on top of the floor.
        // No fwidth() / GL_OES_standard_derivatives needed - dPx is
        // already in pixel units, so a fixed 1-px edge IS pixel-perfect.
        // gridCounts() already keeps cells square in screen space, so
        // pxOffset traces true circles (not ellipses) on any aspect.
        vec2 cellPx = u_resolution / gridSize;
        vec2 pxOffset = (cellLocal - 0.5) * cellPx;
        float dPx = length(pxOffset);
        float minCellPx = min(cellPx.x, cellPx.y);
        float radiusPx = u_dotSize * 0.5 * minCellPx * scaleBoost;
        // 0.5-px AA floor (1-px total smoothstep ramp) keeps the rim
        // pixel-perfect at u_dotSoftness=0 while letting the user softness
        // value dominate at the bundled preset defaults (e.g. softness=0.1
        // on a ~28-px cell yields softPx=0.56 -> ~1.1-px ramp, matching
        // the original cell-local behaviour). A larger floor (e.g. 1.0)
        // would widen low-softness dots and visually lighten dot presets.
        float aaPx = 0.5;
        float softPx = u_dotSoftness * 0.2 * minCellPx;
        float edgePx = max(aaPx, softPx);
        mask = 1.0 - smoothstep(radiusPx - edgePx, radiusPx + edgePx, dPx);
      }

      if (u_highlight > 0.01) {
        float hl = hlFactor * u_highlight;
        col = col * (1.0 + hl * 2.5) + vec3(hl * hl * 0.3);
      }

      if (u_edgeFade > 0.5 && u_fadeStr > 0.005) {
        float ef = smoothstep(0.0, u_edgeFade, edgeDistPx);
        mask *= mix(1.0, ef, u_fadeStr);
      }

      float baseOpacity = (u_dotMode < 1.5) ? u_fillOpacity : 0.0;
      alpha = colorAlpha * mix(baseOpacity, u_dotOpacity, mask);

      float bgLum  = dot(u_cardBg, vec3(0.299, 0.587, 0.114));
      float colLum = dot(baseCol, vec3(0.299, 0.587, 0.114));
      alpha *= smoothstep(0.0, 0.33, abs(colLum - bgLum));
    }

    gl_FragColor = vec4(col, alpha * u_shaderOpacity);
  }
`;let zp=1e3/10,tm=1.25;const Yw=2;function rS(){return typeof window>"u"?1:Math.min(window.devicePixelRatio||1,Yw)}let nt=null;function Zw(){return{u_resolution:{value:new zt(1,1)},u_dpr:{value:1},u_time:{value:0},u_color1:{value:new Mt(1710618)},u_color2:{value:new Mt(8421504)},u_color3:{value:new Mt(14277081)},u_color4:{value:new Mt(4210752)},u_color5:{value:new Mt(12632256)},u_color6:{value:new Mt(6316128)},u_color7:{value:new Mt(10526880)},u_cardBg:{value:new Mt(986895)},u_alpha1:{value:1},u_alpha2:{value:1},u_alpha3:{value:1},u_alpha4:{value:1},u_alpha5:{value:1},u_alpha6:{value:1},u_alpha7:{value:1},u_speed:{value:1},u_intensity:{value:1},u_scale:{value:1.5},u_direction:{value:0},u_softness:{value:.75},u_distortion:{value:.3},u_complexity:{value:.2},u_shape:{value:.5},u_flicker:{value:0},u_vignette:{value:.25},u_vigOpacity:{value:1},u_blur:{value:0},u_highlight:{value:.4},u_shaderOpacity:{value:1},u_cellSize:{value:.5},u_gap:{value:.3},u_dotSize:{value:.8},u_dotSoftness:{value:.1},u_dotOpacity:{value:1},u_hlScale:{value:0},u_fillOpacity:{value:0},u_edgeFade:{value:16},u_fadeStr:{value:1},u_dotMode:{value:2},u_effect:{value:4},u_sweepEase:{value:0}}}function Kw(){if(nt)return nt;const s=document.createElement("canvas");s.width=8,s.height=8;const e=new Fw({canvas:s,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!1,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(typeof window<"u"?window.devicePixelRatio:1,tm)),e.setClearColor(0,0),e.autoClear=!0;const i=e.getContext(),r=new y1,l=new em(-1,1,1,-1,0,1),c=Zw(),f=new zi({vertexShader:Xw,fragmentShader:qw,uniforms:c,transparent:!0,depthTest:!1,depthWrite:!1,blending:so}),h=new Pl(2,2),p=new $i(h,f);r.add(p),nt={glCanvas:s,gl:i,renderer:e,scene:r,camera:l,material:f,geometry:h,mesh:p,uniforms:c,instances:new Set,rafId:0,lastFrameMs:0,lastTickMs:performance.now(),lastInstance:null,onContextLost:null,onContextRestored:null,contextLost:!1};const m=v=>{v.preventDefault(),nt&&(nt.contextLost=!0,nt.rafId!==0&&(cancelAnimationFrame(nt.rafId),nt.rafId=0))},_=()=>{if(nt){nt.contextLost=!1,nt.lastInstance=null;for(const v of nt.instances)v.uniformsDirty=!0;Dl()}};return s.addEventListener("webglcontextlost",m,!1),s.addEventListener("webglcontextrestored",_,!1),nt.onContextLost=m,nt.onContextRestored=_,Dl(),nt}function jw(){nt&&(nt.rafId!==0&&cancelAnimationFrame(nt.rafId),nt.onContextLost&&nt.glCanvas.removeEventListener("webglcontextlost",nt.onContextLost,!1),nt.onContextRestored&&nt.glCanvas.removeEventListener("webglcontextrestored",nt.onContextRestored,!1),nt.geometry.dispose(),nt.material.dispose(),nt.renderer.dispose(),nt=null)}function Qw(s,e){var i;const r=e.preset,l=s.uniforms;l.u_effect.value=r.effectIndex,l.u_speed.value=r.speed,l.u_intensity.value=r.intensity,l.u_scale.value=r.scale,l.u_direction.value=r.direction*Math.PI/180,l.u_softness.value=r.softness,l.u_distortion.value=r.distortion,l.u_complexity.value=r.complexity,l.u_shape.value=r.shape,l.u_flicker.value=r.flicker??0,l.u_vignette.value=r.vignette,l.u_vigOpacity.value=r.vigOpacity,l.u_blur.value=r.blur,l.u_highlight.value=r.highlight,l.u_shaderOpacity.value=r.shaderOpacity,l.u_dotMode.value=r.dotMode,l.u_sweepEase.value=r.sweepEase!=null?Math.floor(r.sweepEase):0;const c=r.dotMode===1?r.pixelConfig:r.dotConfig;l.u_cellSize.value=Nl(c.cellSize,e.pixelScale),l.u_gap.value=c.gap,l.u_dotSize.value=c.dotSize,l.u_dotSoftness.value=c.dotSoftness,l.u_dotOpacity.value=c.dotOpacity,l.u_hlScale.value=c.hlScale,l.u_fillOpacity.value=c.fillOpacity,l.u_edgeFade.value=c.edgeFade,l.u_fadeStr.value=c.fadeStr;const[f,h,p]=Qs(e.cardBgOverride??r.cardBg);for(let m=0;m<7;m++){const _=(i=e.colorsOverride)==null?void 0:i[m],[v,g,S]=_!=null?Qs(_):Ru(e,m);l[`u_color${m+1}`].value.setRGB(v,g,S),l[`u_alpha${m+1}`].value=r.alphas[m]}l.u_cardBg.value.setRGB(f,h,p),e.uniformsDirty=!1}function Jw(s){return s.cardBgOverride??s.preset.cardBg}function Ru(s,e){const i=s.preset,[r,l,c]=Qs(i.colors[e]);if(s.cardBgOverride==null)return[r,l,c];const[f,h,p]=Qs(i.cardBg),m=_=>Math.round(_*255);return m(r)===m(f)&&m(l)===m(h)&&m(c)===m(p)?Qs(s.cardBgOverride):[r,l,c]}function $w(s){return{iw:Math.max(1,Math.floor(s.cssWidth*s.dpr)),ih:Math.max(1,Math.floor(s.cssHeight*s.dpr))}}function oS(s){let e=0,i=0;for(const _ of s.instances)!_.visible||_.paused||(_.cssWidth>e&&(e=_.cssWidth),_.cssHeight>i&&(i=_.cssHeight));if(e<=0||i<=0)return;const r=s.renderer.getPixelRatio(),l=Math.max(1,Math.floor(e*r)),c=Math.max(1,Math.floor(i*r)),f=s.glCanvas.width,h=s.glCanvas.height;if(l<=f&&c<=h)return;const p=Math.max(e,f/Math.max(r,1e-4)),m=Math.max(i,h/Math.max(r,1e-4));s.renderer.setSize(p,m,!1)}function lS(s,e,i){var r;if(s.contextLost)return;const{iw:l,ih:c}=$w(e),f=Math.max(1,e.cssWidth),h=Math.max(1,e.cssHeight);s.renderer.setViewport(0,0,f,h),s.renderer.setScissor(0,0,f,h),s.renderer.setScissorTest(!0),s.uniforms.u_resolution.value.set(l,c),s.uniforms.u_dpr.value=e.dpr||1,s.lastInstance===e&&!e.uniformsDirty||(Qw(s,e),s.lastInstance=e),s.uniforms.u_time.value=e.accumulatedTime,s.renderer.render(s.scene,s.camera);const p=Math.max(1,Math.floor(e.cssWidth*e.canvasDpr)),m=Math.max(1,Math.floor(e.cssHeight*e.canvasDpr));(e.canvas.width!==p||e.canvas.height!==m)&&(e.canvas.width=p,e.canvas.height=m),e.ctx.clearRect(0,0,p,m);const _=s.glCanvas.height-c;e.ctx.imageSmoothingEnabled=!1,e.ctx.drawImage(s.glCanvas,0,_,l,c,0,0,p,m),(r=e.reveal)==null||r.afterShaderFrame(s,e,i),e.reveal&&e.reveal.isActive()&&(s.lastInstance=null)}function e3(s,e,i){!e.visible||e.paused||e.cssWidth<1||e.cssHeight<1||lS(s,e,i)}function _u(s){nt&&(nt.contextLost||s.visible&&(s.cssWidth<1||s.cssHeight<1||(oS(nt),lS(nt,s,performance.now()))))}function t3(s){for(const e of s.instances)if(e.visible&&!e.paused)return!0;return!1}const cS=s=>{if(!nt)return;if(nt.contextLost){nt.rafId=0;return}if(!t3(nt)){nt.rafId=0;return}nt.rafId=requestAnimationFrame(cS);const e=s-nt.lastFrameMs;if(e<zp)return;nt.lastFrameMs=s-e%zp;const i=(s-nt.lastTickMs)/1e3;nt.lastTickMs=s;for(const r of nt.instances)r.visible&&!r.paused&&(r.accumulatedTime+=i);oS(nt);for(const r of nt.instances)e3(nt,r,s)};function Dl(){nt&&(nt.contextLost||nt.rafId===0&&(nt.lastTickMs=performance.now(),nt.lastFrameMs=nt.lastTickMs,nt.rafId=requestAnimationFrame(cS)))}function Nl(s,e){return!(e>0)||e===1?s:((6+s*74)/e-6)/74}function n3(s){const e=Kw(),i=s.canvas.getContext("2d");if(!i)throw new Error("img-fx: 2D context unavailable");const r={canvas:s.canvas,ctx:i,cssWidth:s.cssWidth,cssHeight:s.cssHeight,dpr:Math.min(typeof window<"u"?window.devicePixelRatio:1,tm),canvasDpr:rS(),preset:s.preset,cardBgOverride:s.cardBg??null,colorsOverride:null,strength:s.strength??1,pixelScale:s.pixelScale!=null&&s.pixelScale>0?s.pixelScale:1,visible:!0,paused:!1,uniformsDirty:!0,reveal:null,accumulatedTime:Math.random()*1e3,startedAtMs:performance.now()};return e.instances.add(r),Dl(),r}function i3(s){var e;nt&&(nt.instances.delete(s),nt.lastInstance===s&&(nt.lastInstance=null),(e=s.reveal)==null||e.dispose(),s.reveal=null,nt.instances.size===0&&jw())}function a3(s,e,i){s.cssWidth=e,s.cssHeight=i,typeof window<"u"&&(s.dpr=Math.min(window.devicePixelRatio,tm),s.canvasDpr=rS())}function s3(s,e){s.preset=e,s.uniformsDirty=!0}function r3(s,e){s.cardBgOverride=e,s.uniformsDirty=!0}function o3(s,e){s.colorsOverride=e&&e.length>0?e.slice(0,7):null,s.uniformsDirty=!0}function l3(s,e){s.visible=e,e&&Dl()}function c3(s,e){s.paused=e,e||Dl()}function u3(s,e){s.strength=Math.max(0,Math.min(1,e))}function f3(s,e){s.pixelScale=e>0?e:1,s.uniformsDirty=!0}function Q_(s){zp=1e3/Math.max(1,Math.min(60,s))}const J_={linear:s=>s,smoothstep:s=>s*s*(3-2*s),easeOutCubic:s=>1-Math.pow(1-s,3),easeOutQuint:s=>1-Math.pow(1-s,5),easeInOutCubic:s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,easeOutExpo:s=>s===1?1:1-Math.pow(2,-10*s),easeOutBack:s=>1+(1.70158+1)*Math.pow(s-1,3)+1.70158*Math.pow(s-1,2)};function Il(s,e){return(J_[s]??J_.smoothstep)(Math.max(0,Math.min(1,e)))}const d3=64,h3=96,ho=320,p3=.006;function nm(s,e,i){const r=e/Math.max(1,i),l=s.width/Math.max(1,s.height);let c=0,f=0,h=s.width,p=s.height;l>r?(h=s.height*r,c=(s.width-h)/2):(p=s.width/r,f=(s.height-p)/2);const m=Math.min(h,p)*p3;return h-2*m>1&&p-2*m>1&&(c+=m,f+=m,h-=2*m,p-=2*m),{sx:c,sy:f,sw:h,sh:p}}const Oh=new Map;function m3(s){let e=Oh.get(s);return e||(e=new Promise((i,r)=>{const l=new Image,c=()=>i(l);l.onerror=f=>{Oh.delete(s),r(f)},typeof l.decode=="function"?(l.src=s,l.decode().then(c,()=>{l.complete&&l.naturalWidth>0?c():l.onload=c})):(l.onload=c,l.src=s)}),Oh.set(s,e),e)}function Pi(s,e,i,r,l){let c=e==="a"?s.coverA:s.coverB;if(!c){const f=document.createElement("canvas"),h=f.getContext("2d");if(!h)throw new Error("img-fx: 2D context unavailable for cover bitmap");c={canvas:f,ctx:h,img:null,w:0,h:0},e==="a"?s.coverA=c:s.coverB=c}if(c.img!==i||c.w!==r||c.h!==l){c.canvas.width=r,c.canvas.height=l,c.w=r,c.h=l,c.img=i;const{sx:f,sy:h,sw:p,sh:m}=nm(i,r,l);c.ctx.clearRect(0,0,r,l),c.ctx.imageSmoothingEnabled=!0,c.ctx.imageSmoothingQuality="high",c.ctx.drawImage(i,f,h,p,m,0,0,r,l)}return c.canvas}function uS(s){return s.dotMode===2?h3:d3}function fS(s){const e=s.revealConfig;return s.dotMode===2?{duration:Math.max(.05,e.dotDuration),easingKey:e.dotEasing}:{duration:Math.max(.05,e.duration),easingKey:e.easing}}function g3(s,e,i,r){const l=i/(r-1),c=e/(r-1),f=l-.5,h=c-.5;switch(s){case"radialCenter":return 1-Math.sqrt(f*f+h*h)*2;case"radialCorner":return 1-Math.sqrt(l*l+c*c)/1.414;case"linearTop":return 1-c;case"linearBottom":return c;case"linearLeft":return 1-l;case"linearRight":return l;case"diagonalTL":return 1-(l+c)/2;case"diagonalBR":return(l+c)/2;case"diamond":return 1-(Math.abs(f)+Math.abs(h));case"blindsH":return 1-c*8%1;case"blindsV":return 1-l*8%1;default:return-1}}function dS(s,e,i,r,l){const c=e.uniforms.u_dotMode.value,f=e.uniforms.u_fillOpacity.value,h=i.preset.dotMode,p=h<1.5?0:1;e.uniforms.u_dotMode.value=p,e.uniforms.u_fillOpacity.value=p>.5?h===1?i.preset.pixelConfig.fillOpacity:i.preset.dotConfig.fillOpacity:0,e.renderer.render(e.scene,e.camera);const m=Math.max(1,Math.floor(i.cssWidth*i.dpr)),_=Math.max(1,Math.floor(i.cssHeight*i.dpr)),v=Math.max(0,e.glCanvas.height-_);s.sampleGpuCanvas||(s.sampleGpuCanvas=document.createElement("canvas"),s.sampleGpuCtx=s.sampleGpuCanvas.getContext("2d"));const g=s.sampleGpuCanvas,S=s.sampleGpuCtx;return(g.width!==l||g.height!==l)&&(g.width=l,g.height=l),S.clearRect(0,0,l,l),S.drawImage(e.glCanvas,0,v,m,_,0,0,l,l),r.clearRect(0,0,l,l),r.drawImage(g,0,0),e.uniforms.u_dotMode.value=c,e.uniforms.u_fillOpacity.value=f,s.sampleImgData=r.getImageData(0,0,l,l),s.sampleDataCache=s.sampleImgData.data,s.sampleDataCache}function hS(s,e){s.sampleCanvas||(s.sampleCanvas=document.createElement("canvas"),s.sampleCtx=s.sampleCanvas.getContext("2d",{willReadFrequently:!0})),(s.sampleCanvas.width!==e||s.sampleCanvas.height!==e)&&(s.sampleCanvas.width=e,s.sampleCanvas.height=e,s.sampleImgData=null,s.sampleDataCache=null,s.sampleFrameCounter=0),s.maskGrad||(s.maskGrad=document.createElement("canvas"),s.maskGradCtx=s.maskGrad.getContext("2d")),(s.maskGrad.width!==e||s.maskGrad.height!==e)&&(s.maskGrad.width=e,s.maskGrad.height=e,s.maskImgData=null),!s.maskImgData&&s.maskGradCtx&&(s.maskImgData=s.maskGradCtx.createImageData(e,e))}function v3(s,e,i,r){if(!s.image)return;const l=i.preset,c=i.canvas.width,f=i.canvas.height;(r.canvas.width!==c||r.canvas.height!==f)&&(r.canvas.width=c,r.canvas.height=f),r.clearRect(0,0,c,f);const{duration:h,easingKey:p}=fS(l),m=(performance.now()-s.revealStartMs)/1e3,_=Math.min(m/h,1),v=Il(p,_),g=s.image,{sx:S,sy:T,sw:N,sh:y}=nm(g,c,f),x=l.revealConfig.blur;if(_<1&&x>0){const Ue=x*(1-v);r.canvas.style.filter=Ue>.1?`blur(${Ue.toFixed(1)}px)`:"none"}else r.canvas.style.filter="none";if(_>=1){r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(Pi(s,"a",g,c,f),0,0);return}const O=uS(l);hS(s,O);const I=s.sampleCtx,A=s.maskGrad,C=s.maskGradCtx,U=l.revealConfig.maskShape,L=l.revealConfig.softness,E=U.startsWith("shader");let R=null,z=null,F=null;if(E){const Ue=s.sampleFrameCounter++;s.sampleDataCache==null||(Ue&1)===0?R=dS(s,e,i,I,O):R=s.sampleDataCache;const Ge={shaderColor1:0,shaderColor2:1,shaderColor3:2,shaderColor4:3,shaderColor5:4};if(Ge[U]!=null&&(z=Ru(i,Ge[U])),U==="shaderHighlight"){const ae=Qs(Jw(i));F=[];for(let ce=0;ce<5;ce++){const we=Ru(i,ce),Ie=we[0]-ae[0],Re=we[1]-ae[1],be=we[2]-ae[2];Math.sqrt(Ie*Ie+Re*Re+be*be)>.15&&F.push(we)}F.length===0&&(F=[Ru(i,0)])}}const V=1-v*(1+L),K=U==="gradientSweep";let H=0,X=0,P=2;const G=l.flicker??0;let J=null,q=null,ee=0,ne=0,ye=0;if(G>.003){P=Math.max(2,Math.floor(6+Nl(l.pixelConfig.cellSize,i.pixelScale)*74));const Ue=i.accumulatedTime*Math.max(l.speed,2)*1.6,Ge=Math.floor(Ue);ee=Ge%1024,ne=(ee+1)%1024,ye=Ue-Ge,ye=ye*ye*(3-2*ye);const ae=(we,Ie)=>{const Re=Math.sin(we*127.1+Ie*17.23)*43758.5453;return Re-Math.floor(Re)};q=ae;const ce=P*P;(!s.gsFlickerTable||s.gsFlickerTable.length!==ce)&&(s.gsFlickerTable=new Float32Array(ce)),J=s.gsFlickerTable;for(let we=0;we<ce;we++){const Ie=ae(we,ee)*(1-ye)+ae(we,ne)*ye;J[we]=(Ie-.5)*G*1.6}}K&&(H=.9/Math.max(l.scale,.25),X=-H+v*(1+2*H));const Me=s.maskImgData,Ye=Me.data;for(let Ue=0;Ue<O;Ue++)for(let Ge=0;Ge<O;Ge++){let ae;if(E&&R){const Ie=(Ue*O+Ge)*4,Re=R[Ie]/255,be=R[Ie+1]/255,et=R[Ie+2]/255;if(F){let Ze=0;for(const rt of F){const ft=Re-rt[0],at=be-rt[1],St=et-rt[2],Nt=Math.exp(-10*(ft*ft+at*at+St*St));Nt>Ze&&(Ze=Nt)}ae=Ze}else if(z){const Ze=Re-z[0],rt=be-z[1],ft=et-z[2];ae=Math.exp(-8*(Ze*Ze+rt*rt+ft*ft))}else ae=(R[Ie]*.299+R[Ie+1]*.587+R[Ie+2]*.114)/255}else K?ae=0:ae=g3(U,Ue,Ge,O);let ce;if(K){const Ie=Ge/(O-1),Re=Ue/(O-1),be=(Ie+Re)*.5;ce=(X+H-be)/(2*H)}else ce=(ae-V)/L;if(J&&ce>-.5&&ce<1.5){const Ie=ce<0?0:ce>1?1:ce,Re=Ie*(1-Ie)*4;if(Re>.001){const be=Ge/(O-1),et=Ue/(O-1),Ze=Math.floor(et*P)*P+Math.floor(be*P);ce+=J[Ze]*Re}}ce<0?ce=0:ce>1&&(ce=1),ce=ce*ce*(3-2*ce);const we=(Ue*O+Ge)*4;Ye[we]=255,Ye[we+1]=255,Ye[we+2]=255,Ye[we+3]=ce*255+.5|0}if(C.putImageData(Me,0,0),l.dotMode===1)x3(s,r,g,S,T,N,y,l,m,c,f,i,K?0:G,q,ee,ne,ye);else{l.dotMode===2?_3(s,r,g,S,T,N,y,Nl(l.pixelConfig.cellSize,i.pixelScale),m,l.revealConfig.pixDuration,l.revealConfig.pixEasing,i,c,f):(r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(Pi(s,"a",g,c,f),0,0)),r.globalCompositeOperation="destination-in";const Ue=l.dotMode===2&&E;Ue&&(r.imageSmoothingEnabled=!1),r.drawImage(A,0,0,c,f),Ue&&(r.imageSmoothingEnabled=!0),r.globalCompositeOperation="source-over"}}function _3(s,e,i,r,l,c,f,h,p,m,_,v,g,S){const T=6+h*74,N=Math.max(1,v.cssWidth),y=Math.max(1,v.cssHeight),x=Math.max(2,Math.floor(T*N/ho)),O=Math.max(2,Math.floor(T*y/ho)),I=x*O,A=Math.max(.05,m),C=Math.max(0,Math.min(1,p/A)),U=Il(_,C);s.pixCanvas||(s.pixCanvas=document.createElement("canvas"),s.pixCtx=s.pixCanvas.getContext("2d"));const L=s.pixCanvas,E=s.pixCtx;(L.width!==x||L.height!==O)&&(L.width=x,L.height=O),s.pixDrop||(s.pixDrop=document.createElement("canvas"),s.pixDropCtx=s.pixDrop.getContext("2d"));const R=s.pixDrop,z=s.pixDropCtx;if(R.width!==x||R.height!==O){R.width=x,R.height=O,s.pixDropImgData=z.createImageData(x,O);const X=s.pixDropImgData.data;for(let P=0;P<X.length;P+=4)X[P]=255,X[P+1]=255,X[P+2]=255}const F=.07,V=1/(2*F);if(!s.pixDropPattern||s.pixDropPatternW!==x||s.pixDropPatternH!==O||s.pixDropRevealStart!==s.revealStartMs){s.pixDropPattern=new Float32Array(I);const X=F,P=1-2*F;for(let G=0;G<s.pixDropPattern.length;G++)s.pixDropPattern[G]=X+Math.random()*P;s.pixDropPatternW=x,s.pixDropPatternH=O,s.pixDropRevealStart=s.revealStartMs}const K=s.pixDropImgData.data,H=s.pixDropPattern;for(let X=0;X<H.length;X++){let P=.5+(H[X]-U)*V;P<0?P=0:P>1&&(P=1),K[X*4+3]=P*255+.5|0}z.putImageData(s.pixDropImgData,0,0),E.globalCompositeOperation="source-over",E.clearRect(0,0,x,O),E.imageSmoothingEnabled=!0,E.imageSmoothingQuality="high",E.drawImage(Pi(s,"a",i,g,S),0,0,g,S,0,0,x,O),E.globalCompositeOperation="destination-in",E.imageSmoothingEnabled=!1,E.drawImage(R,0,0),E.globalCompositeOperation="source-over",e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(Pi(s,"a",i,g,S),0,0),e.imageSmoothingEnabled=!1,e.drawImage(L,0,0,x,O,0,0,g,S),e.imageSmoothingEnabled=!0}function x3(s,e,i,r,l,c,f,h,p,m,_,v,g,S,T,N,y){const x=6+Nl(h.pixelConfig.cellSize,v.pixelScale)*74,O=Math.max(1,v.cssWidth),I=Math.max(1,v.cssHeight),A=Math.max(2,Math.floor(x*O/ho)),C=Math.max(2,Math.floor(x*I/ho)),U=A*C,L=Math.max(.05,h.revealConfig.pixDuration),E=Math.max(0,Math.min(1,p/L)),R=Il(h.revealConfig.pixEasing,E);s.pixCanvas||(s.pixCanvas=document.createElement("canvas"),s.pixCtx=s.pixCanvas.getContext("2d"));const z=s.pixCanvas,F=s.pixCtx;(z.width!==A||z.height!==C)&&(z.width=A,z.height=C),s.pixDrop||(s.pixDrop=document.createElement("canvas"),s.pixDropCtx=s.pixDrop.getContext("2d"));const V=s.pixDrop,K=s.pixDropCtx;if(V.width!==A||V.height!==C){V.width=A,V.height=C,s.pixDropImgData=K.createImageData(A,C);const q=s.pixDropImgData.data;for(let ee=0;ee<q.length;ee+=4)q[ee]=255,q[ee+1]=255,q[ee+2]=255}const H=.07,X=1/(2*H);if(!s.pixDropPattern||s.pixDropPatternW!==A||s.pixDropPatternH!==C||s.pixDropRevealStart!==s.revealStartMs){s.pixDropPattern=new Float32Array(U);const q=H,ee=1-2*H;for(let ne=0;ne<s.pixDropPattern.length;ne++)s.pixDropPattern[ne]=q+Math.random()*ee;s.pixDropPatternW=A,s.pixDropPatternH=C,s.pixDropRevealStart=s.revealStartMs}const P=s.pixDropImgData.data,G=s.pixDropPattern,J=g>.003&&S!=null;for(let q=0;q<G.length;q++){const ee=G[q];let ne=.5+(ee-R)*X;if(ne<0?ne=0:ne>1&&(ne=1),J){const ye=1-Math.abs(R-ee)*6.25;if(ye>0){const Me=S(q,T)*(1-y)+S(q,N)*y;ne+=(Me-.5)*g*1.6*ye,ne<0?ne=0:ne>1&&(ne=1)}}P[q*4+3]=ne*255+.5|0}K.putImageData(s.pixDropImgData,0,0),F.globalCompositeOperation="source-over",F.clearRect(0,0,A,C),F.imageSmoothingEnabled=!0,F.imageSmoothingQuality="high",F.drawImage(Pi(s,"a",i,m,_),0,0,m,_,0,0,A,C),F.globalCompositeOperation="destination-in",F.imageSmoothingEnabled=!1,F.drawImage(V,0,0),F.globalCompositeOperation="source-over",e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(Pi(s,"a",i,m,_),0,0),e.imageSmoothingEnabled=!1,e.drawImage(z,0,0,A,C,0,0,m,_),e.imageSmoothingEnabled=!0,F.globalCompositeOperation="source-over",F.clearRect(0,0,A,C),F.imageSmoothingEnabled=!0,F.imageSmoothingQuality="high",F.drawImage(s.maskGrad,0,0,A,C),e.imageSmoothingEnabled=!1,e.globalCompositeOperation="destination-in",e.drawImage(z,0,0,A,C,0,0,m,_),e.imageSmoothingEnabled=!0,e.globalCompositeOperation="source-over"}const Ph=800,Ih=300,S3=1,y3=.5,M3=.03,$_=.6,ex=800,b3=400,E3=1200;function T3(s,e,i,r,l,c){var f;const h=s.image;if(!h)return;const p=i.preset,m=i.canvas.width,_=i.canvas.height;(r.canvas.width!==m||r.canvas.height!==_)&&(r.canvas.width=m,r.canvas.height=_),r.canvas.style.filter="none";const v=6+Nl(p.pixelConfig.cellSize,i.pixelScale)*74,g=Math.max(1,i.cssWidth),S=Math.max(1,i.cssHeight),T=Math.max(2,Math.floor(v*g/ho)),N=Math.max(2,Math.floor(v*S/ho)),y=T*N,x=s.pendingReveal,O=x&&s.boilHandoffStartMs>0?c-s.boilHandoffStartMs:-1,I=W=>W*W*(3-2*W),A=O<0?0:I(Math.min(1,O/ex)),C=O<0?-1:O-ex,U=C<=0?0:I(Math.min(1,C/b3)),L=C<=0?0:Math.min(1,C/E3),E=x!=null&&C>0,R=c-s.boilStartMs,z=Math.min(1,R/Ph),F=z*z*(3-2*z),V=z<1,K=Math.min(1,Math.max(0,R-(Ph-Ih))/Ih),H=1-K*K*(3-2*K),X=Math.min(1,Math.max(0,R-(Ph-Ih))/(S3*1e3)),P=X*X*(3-2*X),G=P*y3;l.style.opacity=String(P),s.pixCanvas||(s.pixCanvas=document.createElement("canvas"),s.pixCtx=s.pixCanvas.getContext("2d"));const J=s.pixCanvas,q=s.pixCtx;(J.width!==T||J.height!==N)&&(J.width=T,J.height=N),s.pixDrop||(s.pixDrop=document.createElement("canvas"),s.pixDropCtx=s.pixDrop.getContext("2d"));const ee=s.pixDrop,ne=s.pixDropCtx;if(ee.width!==T||ee.height!==N||!s.pixDropImgData){ee.width=T,ee.height=N,s.pixDropImgData=ne.createImageData(T,N);const W=s.pixDropImgData.data;for(let ot=0;ot<W.length;ot+=4)W[ot]=255,W[ot+1]=255,W[ot+2]=255}if(!s.boilPattern||s.boilPatternW!==T||s.boilPatternH!==N){s.boilPattern=new Float32Array(y);for(let W=0;W<y;W++)s.boilPattern[W]=Math.random();s.boilPatternW=T,s.boilPatternH=N}const ye=Math.max(p.flicker??0,.5),Me=i.accumulatedTime*Math.max(p.speed,2)*1.6,Ye=Math.floor(Me),Ue=Ye%1024,Ge=(Ue+1)%1024;let ae=Me-Ye;ae=ae*ae*(3-2*ae);const ce=(W,ot)=>{const lt=Math.sin(W*127.1+ot*17.23)*43758.5453;return lt-Math.floor(lt)},we=s.pixDropImgData.data,Ie=s.boilPattern,Re=uS(p);hS(s,Re);const be=s.sampleFrameCounter++,et=s.sampleDataCache==null||be%3===0,Ze=!s.boilField||s.boilField.length!==y,rt=et?dS(s,e,i,s.sampleCtx,Re):s.sampleDataCache;if(et||Ze){Ze&&(s.boilField=new Float32Array(y));const W=s.boilField;let ot=1,lt=0;for(let b=0;b<N;b++){const $=Math.min(Re-1,(b+.5)*Re/N|0);for(let ie=0;ie<T;ie++){const he=Math.min(Re-1,(ie+.5)*Re/T|0),Te=($*Re+he)*4,Ee=(rt[Te]*.299+rt[Te+1]*.587+rt[Te+2]*.114)/255;W[b*T+ie]=Ee,Ee<ot&&(ot=Ee),Ee>lt&&(lt=Ee)}}const B=lt-ot>.001?1/(lt-ot):0;for(let b=0;b<y;b++)W[b]=B>0?(W[b]-ot)*B:.5}const ft=s.boilField,at=1/(2*M3),St=ye*.6*(1-L),Nt=1-$_,Kt=E?Il(p.revealConfig.pixEasing,L):0,Tt=1/(2*.07),Ht=p.flicker??0;for(let W=0;W<y;W++){const ot=ce(W,Ue)*(1-ae)+ce(W,Ge)*ae;let lt=.5+(ft[W]*$_+Ie[W]*Nt+(ot-.5)*St-G)*at;if(lt<0?lt=0:lt>1&&(lt=1),V){const B=Ie[W];let b=.5+(F-B)*Tt;b<0?b=0:b>1&&(b=1);const $=1-Math.abs(F-B)*6.25;$>0&&(b+=(ot-.5)*ye*1.6*$,b<0?b=0:b>1&&(b=1)),b<lt&&(lt=b)}if(E){const B=Ie[W];let b=.5+(B-Kt)*Tt;if(b<0?b=0:b>1&&(b=1),Ht>.003){const $=1-Math.abs(Kt-B)*6.25;$>0&&(b+=(ot-.5)*Ht*1.6*$,b<0?b=0:b>1&&(b=1))}b<lt&&(lt=b)}we[W*4+3]=lt*255+.5|0}ne.putImageData(s.pixDropImgData,0,0),nm(h,m,_),q.globalCompositeOperation="source-over",q.clearRect(0,0,T,N),q.imageSmoothingEnabled=!0,q.imageSmoothingQuality="high",A<1&&q.drawImage(Pi(s,"a",h,m,_),0,0,m,_,0,0,T,N),x&&A>0&&(q.globalAlpha=A,q.drawImage(Pi(s,"b",x.image,m,_),0,0,m,_,0,0,T,N),q.globalAlpha=1),q.globalCompositeOperation="destination-in",q.imageSmoothingEnabled=!1,q.drawImage(ee,0,0),q.globalCompositeOperation="source-over",r.clearRect(0,0,m,_),V&&H>0?(r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.globalAlpha=H,r.drawImage(Pi(s,"a",h,m,_),0,0),r.globalAlpha=1):E&&x&&U>0&&(r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.globalAlpha=U,r.drawImage(Pi(s,"b",x.image,m,_),0,0),r.globalAlpha=1),r.imageSmoothingEnabled=!1,r.drawImage(J,0,0,T,N,0,0,m,_),r.imageSmoothingEnabled=!0,E&&x&&L>=1&&U>=1&&(s.image=x.image,s.pendingReveal=null,s.boilHandoffStartMs=0,s.holdPaintedImg=null,s.phase="hold",l.style.opacity="0",(f=s.onRevealComplete)==null||f.call(s))}function A3(s){const e=s.canvas.getContext("2d");if(!e)throw new Error("img-fx: 2D context unavailable for reveal canvas");const i={active:!1,phase:"idle",revealStartMs:0,hideStartMs:0,hideDurationMs:300,boilStartMs:0,boilPattern:null,boilPatternW:0,boilPatternH:0,boilField:null,boilHandoffStartMs:0,pendingReveal:null,image:null,cssWidth:s.cssWidth,cssHeight:s.cssHeight,sampleCanvas:null,sampleCtx:null,sampleImgData:null,sampleDataCache:null,sampleFrameCounter:0,maskGrad:null,maskGradCtx:null,maskImgData:null,gsFlickerTable:null,pixCanvas:null,pixCtx:null,pixDrop:null,pixDropCtx:null,pixDropImgData:null,pixDropPattern:null,pixDropPatternW:0,pixDropPatternH:0,pixDropRevealStart:-1,coverA:null,coverB:null,holdPaintedImg:null,holdPaintedW:0,holdPaintedH:0,sampleGpuCanvas:null,sampleGpuCtx:null},r=s.shaderCanvas;function l(c){i.image=c.image,i.cssWidth=c.cssWidth,i.cssHeight=c.cssHeight,i.onRevealComplete=c.onRevealComplete,i.revealStartMs=performance.now(),i.phase="reveal",i.active=!0,i.boilHandoffStartMs=0,i.pendingReveal=null,i.sampleFrameCounter=0,i.sampleDataCache=null,i.holdPaintedImg=null,e.canvas.style.opacity="1"}return{canvas:s.canvas,ctx:e,afterShaderFrame(c,f,h){var p;if(i.cssWidth=f.cssWidth,i.cssHeight=f.cssHeight,!i.active){e.canvas.style.filter="none";return}const{duration:m,easingKey:_}=fS(f.preset);if(i.phase==="reveal"&&i.image){const v=(h-i.revealStartMs)/1e3,g=Math.min(v/m,1),S=Il(_,g);r.style.opacity=String(1-S),v3(i,c,f,e),g>=1&&(i.phase="hold",r.style.opacity="0",(p=i.onRevealComplete)==null||p.call(i))}else if(i.phase==="hold"&&i.image){e.canvas.style.filter="none";const v=i.image,g=f.canvas.width,S=f.canvas.height;(e.canvas.width!==g||e.canvas.height!==S)&&(e.canvas.width=g,e.canvas.height=S,i.holdPaintedImg=null),(i.holdPaintedImg!==v||i.holdPaintedW!==g||i.holdPaintedH!==S)&&(e.clearRect(0,0,g,S),e.globalCompositeOperation="source-over",e.globalAlpha=1,e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(Pi(i,"a",v,g,S),0,0),i.holdPaintedImg=v,i.holdPaintedW=g,i.holdPaintedH=S),r.style.opacity="0"}else if(i.phase==="boil"&&i.image)T3(i,c,f,e,r,h);else if(i.phase==="hide"){const v=h-i.hideStartMs,g=Math.min(v/Math.max(1,i.hideDurationMs),1),S=1-g;e.canvas.style.opacity=String(S),r.style.opacity=String(g),g>=1&&(i.active=!1,i.phase="idle",e.canvas.style.opacity="1",e.clearRect(0,0,e.canvas.width,e.canvas.height),r.style.opacity="1",i.image=null)}},startReveal(c){if(i.phase==="boil"&&i.active){i.pendingReveal=c,i.onRevealComplete=c.onRevealComplete,i.cssWidth=c.cssWidth,i.cssHeight=c.cssHeight,i.boilHandoffStartMs===0&&(i.boilHandoffStartMs=performance.now());return}l(c)},startHide(c=300){!i.active||i.phase==="hide"||(i.phase="hide",i.hideStartMs=performance.now(),i.hideDurationMs=c)},startBoil(){!i.active||!i.image||i.phase!=="hold"&&i.phase!=="reveal"||(i.phase="boil",i.boilStartMs=performance.now(),i.boilHandoffStartMs=0,i.pendingReveal=null,i.boilPattern=null,i.sampleFrameCounter=0,i.sampleDataCache=null,i.holdPaintedImg=null,e.canvas.style.opacity="1")},clear(){const c=i.active;i.active=!1,i.phase="idle",i.image=null,i.boilHandoffStartMs=0,i.pendingReveal=null,i.holdPaintedImg=null,e.clearRect(0,0,e.canvas.width,e.canvas.height),c&&(e.canvas.style.filter="none",e.canvas.style.opacity="1",r.style.opacity="1")},isActive(){return i.active},dispose(){i.image=null,i.sampleCanvas=null,i.sampleCtx=null,i.sampleImgData=null,i.sampleDataCache=null,i.sampleFrameCounter=0,i.maskGrad=null,i.maskGradCtx=null,i.maskImgData=null,i.gsFlickerTable=null,i.pixCanvas=null,i.pixCtx=null,i.pixDrop=null,i.pixDropCtx=null,i.pixDropImgData=null,i.pixDropPattern=null,i.boilPattern=null,i.boilField=null,i.pendingReveal=null,i.coverA=null,i.coverB=null,i.holdPaintedImg=null,i.sampleGpuCanvas=null,i.sampleGpuCtx=null}}}function tx(s,e){if(s.length===0)return null;if(s.length===1)return{src:s[0],idx:0};let i;do i=Math.floor(Math.random()*s.length);while(i===e);return{src:s[i],idx:i}}function w3(s){let e=s.images.slice(),i=s.delayRange,r=s.holdMs,l=s.fadeOutMs,c=s.onPhase,f=s.excludeSrcs,h="idle",p=null,m=-1,_=!1,v=!1,g=null,S=!1,T="auto";function N(L){h=L,c?.({phase:L,src:g})}function y(){p!=null&&(clearTimeout(p),p=null)}function x(){if(typeof r=="number")return Math.max(0,r);const[L,E]=r,R=Math.max(0,Math.min(L,E)),z=Math.max(0,Math.max(L,E));return R+Math.random()*(z-R)}function O(L){if(!_||v)return;N("idle");const[E,R]=i,z=E+Math.random()*Math.max(0,R-E),F=L??z*1e3;y(),p=setTimeout(()=>{p=null,C(!0,"auto")},F)}function I(){v||(N("hide"),s.reveal.startHide(l),y(),p=setTimeout(()=>{p=null,!v&&(g=null,S?O():(_=!1,N("idle")))},l))}function A(){if(e.length===0)return null;const L=f?.(),E=L==null?null:L instanceof Set?L:new Set(L);if(!E||E.size===0)return tx(e,m);const R=m>=0&&m<e.length?e[m]:null,z=[];for(let V=0;V<e.length;V++){const K=e[V];E.has(K)||K===R&&e.length>E.size+1||z.push(V)}if(z.length===0)return tx(e,m);const F=z[Math.floor(Math.random()*z.length)];return{src:e[F],idx:F}}function C(L,E){if(!_||v)return;if(e.length===0){L?O(500):_=!1;return}const R=A();if(!R){L?O(500):_=!1;return}m=R.idx,g=R.src,S=L,T=E,m3(R.src).then(z=>{!_||v||(N("reveal"),s.reveal.startReveal({image:z,cssWidth:s.reveal.canvas.clientWidth||s.reveal.canvas.width,cssHeight:s.reveal.canvas.clientHeight||s.reveal.canvas.height,onRevealComplete:()=>{if(!_||v)return;if(N("visible"),E==="manual"){y();return}y();const F=x();p=setTimeout(()=>{p=null,!(!_||v)&&I()},F)}}))}).catch(()=>{g=null,L?O(500):_=!1})}function U(L){if(v||h==="reveal"||h==="visible"||h==="hide")return;const E=_;y(),E||(_=!0),C(E,L?.hold??"auto")}return{start(){if(_)return;_=!0,v=!1;const L=s.initialDelayMs??Math.random()*1500;O(L)},stop(){_=!1,y(),s.reveal.clear(),g=null,h="idle"},triggerOnce(L){U(L)},triggerHide(){v||h!=="reveal"&&h!=="visible"||I()},triggerBoil(L){if(v||h!=="reveal"&&h!=="visible")return;y(),s.reveal.startBoil(),g=null,_=!1,N("idle");const E=L?.autoRevealAfterMs;E!=null&&Number.isFinite(E)&&(p=setTimeout(()=>{p=null,U({hold:"manual"})},Math.max(0,E)))},getPhase(){return h},setPaused(L){if(v!==L){if(v=L,v)y();else if(_)if(h==="visible"){if(T==="manual")return;y(),p=setTimeout(()=>{p=null,I()},Math.min(x(),500))}else h==="hide"?(y(),p=setTimeout(()=>{p=null,g=null,O()},l)):O()}},setImages(L){e=L.slice(),m=-1},setExcludeSrcs(L){f=L??void 0},setOptions(L){L.delayRange&&(i=L.delayRange),L.holdMs!=null&&(r=L.holdMs),L.fadeOutMs!=null&&(l=L.fadeOutMs),L.onPhase&&(c=L.onPhase)},isRunning(){return _&&!v},dispose(){_=!1,y()}}}const nx=(s,e,i)=>.299*s+.587*e+.114*i,ix=(s,e,i)=>`#${[s,e,i].map(r=>Math.round(r).toString(16).padStart(2,"0")).join("")}`,ds=24;let xu=null,zh=null;function R3(){return zh||(typeof document>"u"?null:(xu=document.createElement("canvas"),xu.width=ds,xu.height=ds,zh=xu.getContext("2d",{willReadFrequently:!0}),zh))}function C3(s,e){if(s.width===0||s.height===0)return null;const i=R3();if(!i)return null;i.imageSmoothingEnabled=!0,i.clearRect(0,0,ds,ds),i.drawImage(s,0,0,ds,ds);let r;try{r=i.getImageData(0,0,ds,ds).data}catch{return null}const l=[];let c=0,f=0,h=0;for(let v=0;v<r.length;v+=4){if(r[v+3]<8)continue;const g=r[v],S=r[v+1],T=r[v+2];l.push({r:g,g:S,b:T,lum:nx(g,S,T)}),c+=g,f+=S,h+=T}if(l.length===0)return null;l.sort((v,g)=>v.lum-g.lum);const p=ix(c/l.length,f/l.length,h/l.length),m=e.map((v,g)=>{const[S,T,N]=Qs(v);return{slot:g,lum:nx(S,T,N)}}).sort((v,g)=>v.lum-g.lum),_=new Array(m.length);for(let v=0;v<m.length;v++){const g=.05+.9*v/Math.max(1,m.length-1),S=l[Math.min(l.length-1,Math.round(g*(l.length-1)))];_[m[v].slot]=ix(S.r,S.g,S.b)}return{colors:_,cardBg:p}}const ax="img-fx-styles",D3=`
.image-gen-root {
  position: relative;
  display: inline-block;
  isolation: isolate;
  overflow: hidden;
  vertical-align: top;
  line-height: 0;
  flex: 0 0 auto;
}

.image-gen-root > .image-gen-shader,
.image-gen-root > .image-gen-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
  display: block;
}

.image-gen-root > .image-gen-shader {
  z-index: 1;
}

.image-gen-root > .image-gen-overlay {
  z-index: 2;
}

.image-gen-root > .image-gen-child {
  position: relative;
  z-index: 0;
  display: block;
  line-height: normal;
}
`;let Bh=!1;function pS(){if(typeof document>"u"||Bh)return;if(document.getElementById(ax)){Bh=!0;return}const s=document.createElement("style");s.id=ax,s.textContent=D3,document.head.appendChild(s),Bh=!0}pS();function sx(){if(typeof document>"u")return"dark";const s=document.documentElement,e=s.getAttribute("data-theme");if(e==="dark"||e==="light")return e;if(s.classList.contains("dark"))return"dark";if(s.classList.contains("light"))return"light";const i=s.style.colorScheme||getComputedStyle(s).colorScheme;return i==="dark"?"dark":i==="light"?"light":typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"}function N3(s){const[e,i]=qe.useState(()=>s!=="auto"?s:sx());return qe.useEffect(()=>{if(s!=="auto"){i(s);return}if(typeof window>"u")return;const r=()=>i(sx());r();const l=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;l?.addEventListener("change",r);let c=null;return typeof document<"u"&&typeof MutationObserver<"u"&&(c=new MutationObserver(r),c.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]})),()=>{l?.removeEventListener("change",r),c?.disconnect()}},[s]),e}function U3(s){return s?typeof s=="string"?[s]:s.slice():[]}const Bp=["pixels-mechanic","pixels-organic"];function L3(s){return Bp.includes(s)}const im=qe.forwardRef(function({children:s,preset:e="pixels-organic",theme:i="auto",strength:r=1,pixelScale:l=1,cardBg:c,colors:f,images:h,autoReveal:p=!1,revealDelayRange:m=[2,4],revealInitialDelay:_,revealHoldMs:v=2e3,revealFadeOutMs:g=300,borderRadius:S,paused:T=!1,onCycle:N,excludeSrcs:y,className:x,style:O,...I},A){const C=qe.useRef(null),U=qe.useRef(null),L=qe.useRef(null),E=qe.useRef(null),R=qe.useRef(null),z=qe.useRef(null),F=qe.useRef(null),V=qe.useRef(N),K=qe.useRef(y),[H,X]=qe.useState(null),[P,G]=qe.useState(null);qe.useImperativeHandle(A,()=>({get element(){return C.current},triggerReveal(be){var et;(et=F.current)==null||et.triggerOnce(be)},triggerHide(){var be;(be=F.current)==null||be.triggerHide()},triggerRegenerate(be){const et=F.current;if(!et||Ye.current)return;const Ze=et.getPhase();if(Ze!=="reveal"&&Ze!=="visible")return;const rt=ye.current,ft=L3(rt)?null:Bp[Math.floor(Math.random()*Bp.length)];if(be?.tintFromImage??!0){const St=L.current;if(St){const Nt=ft?Lh[ft].modes[Me.current].colors:ne.current.colors,Kt=C3(St,Nt);Kt&&X(Kt)}}ft&&G(ft);const at=be?.autoReveal??!0;et.triggerBoil(at?{autoRevealAfterMs:be?.durationMs??4e3}:void 0)},isImageActive(){var be;const et=((be=F.current)==null?void 0:be.getPhase())??"idle";return et==="reveal"||et==="visible"||et==="hide"}}),[]),qe.useLayoutEffect(()=>{pS()},[]),qe.useEffect(()=>{V.current=N},[N]),qe.useEffect(()=>{K.current=y},[y]);const J=N3(i),q=qe.useMemo(()=>Lh[e].modes[J],[e,J]),ee=c??q.cardBg,ne=qe.useRef(q);ne.current=q;const ye=qe.useRef(e);ye.current=e;const Me=qe.useRef(J);Me.current=J;const Ye=qe.useRef(T);Ye.current=T;const Ue=qe.useMemo(()=>U3(h),[h]),Ge=qe.useRef(Ue),ae=qe.useRef(m),ce=qe.useRef(v),we=qe.useRef(g);Ge.current=Ue,ae.current=m,ce.current=v,we.current=g;const Ie=qe.useRef(qe.useMemo(()=>{if(_==null)return;if(typeof _=="number")return Math.max(0,_)*1e3;const[be,et]=_,Ze=Math.max(0,Math.min(be,et)),rt=Math.max(0,Math.max(be,et));return(Ze+Math.random()*(rt-Ze))*1e3},[]));qe.useLayoutEffect(()=>{var be;const et=C.current,Ze=U.current,rt=L.current;if(!et||!Ze||!rt)return;const ft=()=>{var Te;const Ee=et.getBoundingClientRect(),me=Math.max(1,Math.round(Ee.width)),ge=Math.max(1,Math.round(Ee.height));let Ce=0;if(typeof S=="number")Ce=S;else{const Fe=(Te=E.current)==null?void 0:Te.firstElementChild;if(Fe){const De=parseFloat(getComputedStyle(Fe).borderTopLeftRadius);Number.isFinite(De)&&De>0&&(Ce=De)}if(Ce===0){const De=parseFloat(getComputedStyle(et).borderTopLeftRadius);Number.isFinite(De)&&De>0&&(Ce=De)}}return{w:me,h:ge,r:Ce}},at=ft(),St=n3({canvas:Ze,cssWidth:at.w,cssHeight:at.h,preset:q,strength:r,cardBg:c??null,pixelScale:l});R.current=St,St.canvas.style.opacity=String(Math.max(0,Math.min(1,r)));const Nt=A3({canvas:rt,cssWidth:at.w,cssHeight:at.h,shaderCanvas:Ze});St.reveal=Nt,z.current=Nt;const Kt=w3({reveal:Nt,images:Ge.current,delayRange:ae.current,holdMs:ce.current,fadeOutMs:we.current,initialDelayMs:Ie.current,onPhase:Te=>{var Ee;Te.phase==="visible"&&(X(null),G(null)),(Ee=V.current)==null||Ee.call(V,Te)},excludeSrcs:()=>{var Te;return((Te=K.current)==null?void 0:Te.call(K))??null}});F.current=Kt,T&&Kt.setPaused(!0),et.style.setProperty("--image-gen-radius",`${at.r}px`),et.style.borderRadius=`${at.r}px`;let Tt=0,Ht=-1,W=-1,ot=-1;const lt=()=>{Tt=0;const Te=R.current;if(!Te)return;const Ee=ft();(Ee.w!==Ht||Ee.h!==W)&&(a3(Te,Ee.w,Ee.h),Ht=Ee.w,W=Ee.h),Ee.r!==ot&&(et.style.setProperty("--image-gen-radius",`${Ee.r}px`),et.style.borderRadius=`${Ee.r}px`,ot=Ee.r)},B=()=>{Tt===0&&(Tt=requestAnimationFrame(lt))},b=new ResizeObserver(B);b.observe(et);const $=(be=E.current)==null?void 0:be.firstElementChild;$&&b.observe($);let ie=null;$&&typeof MutationObserver<"u"&&(ie=new MutationObserver(B),ie.observe($,{attributes:!0,attributeFilter:["class","style"]})),Ht=at.w,W=at.h,ot=at.r;let he=null;return typeof IntersectionObserver<"u"&&(he=new IntersectionObserver(Te=>{const Ee=R.current;if(Ee)for(const me of Te)l3(Ee,me.isIntersecting)},{rootMargin:"64px"}),he.observe(et)),()=>{var Te;b.disconnect(),ie?.disconnect(),he?.disconnect(),Tt!==0&&cancelAnimationFrame(Tt),(Te=F.current)==null||Te.dispose(),F.current=null,Nt.dispose(),z.current=null;const Ee=R.current;Ee&&i3(Ee),R.current=null}},[]),qe.useEffect(()=>{const be=R.current;if(!be)return;const et=P?Lh[P].modes[J]:q;s3(be,et),_u(be)},[q,P,J]),qe.useEffect(()=>{const be=R.current;be&&(r3(be,H?.cardBg??c??null),_u(be))},[c,H]),qe.useEffect(()=>{const be=R.current;be&&(o3(be,H?.colors??f??null),_u(be))},[f,H]),qe.useEffect(()=>{const be=R.current;be&&(u3(be,r),be.canvas&&(be.canvas.style.opacity=String(Math.max(0,Math.min(1,r)))))},[r]),qe.useEffect(()=>{const be=R.current;be&&(f3(be,l),_u(be))},[l]),qe.useEffect(()=>{var be;const et=R.current;et&&c3(et,T),(be=F.current)==null||be.setPaused(T)},[T]),qe.useEffect(()=>{var be;(be=F.current)==null||be.setImages(Ue)},[Ue]),qe.useEffect(()=>{var be;(be=F.current)==null||be.setOptions({delayRange:m,holdMs:v,fadeOutMs:g})},[m,v,g]),qe.useEffect(()=>{const be=F.current;if(be){if(p)return be.start(),()=>be.stop();be.stop()}},[p]);const Re=qe.useMemo(()=>({background:H?.cardBg??ee,...O}),[ee,H,O]);return Y.jsxs("div",{...I,ref:C,className:["image-gen-root",x].filter(Boolean).join(" "),"data-preset":e,"data-theme":J,"data-paused":T?"true":void 0,style:Re,children:[Y.jsx("canvas",{ref:U,className:"image-gen-shader","aria-hidden":"true"}),Y.jsx("canvas",{ref:L,className:"image-gen-overlay","aria-hidden":"true"}),Y.jsx("div",{ref:E,className:"image-gen-child",children:s})]})});im.displayName="ImageGeneration";const O3=({squareSize:s=4,gridGap:e=6,flickerChance:i=.3,color:r="rgb(0, 0, 0)",width:l,height:c,className:f,maxOpacity:h=.3,...p})=>{const m=qe.useRef(null),_=qe.useRef(null),[v,g]=qe.useState(!1),[S,T]=qe.useState({width:0,height:0}),N=qe.useMemo(()=>(A=>{if(typeof window>"u")return"rgba(0, 0, 0,";const C=document.createElement("canvas");C.width=C.height=1;const U=C.getContext("2d");if(!U)return"rgba(255, 0, 0,";U.fillStyle=A,U.fillRect(0,0,1,1);const[L,E,R]=Array.from(U.getImageData(0,0,1,1).data);return`rgba(${L}, ${E}, ${R},`})(r),[r]),y=qe.useCallback((I,A,C)=>{const U=window.devicePixelRatio||1;I.width=A*U,I.height=C*U,I.style.width=`${A}px`,I.style.height=`${C}px`;const L=Math.ceil(A/(s+e)),E=Math.ceil(C/(s+e)),R=new Float32Array(L*E);for(let z=0;z<R.length;z++)R[z]=Math.random()*h;return{cols:L,rows:E,squares:R,dpr:U}},[s,e,h]),x=qe.useCallback((I,A)=>{for(let C=0;C<I.length;C++)Math.random()<i*A&&(I[C]=Math.random()*h)},[i,h]),O=qe.useCallback((I,A,C,U,L,E,R)=>{I.clearRect(0,0,A,C),I.fillStyle="transparent",I.fillRect(0,0,A,C);for(let z=0;z<U;z++)for(let F=0;F<L;F++){const V=E[z*L+F];I.fillStyle=`${N}${V})`,I.fillRect(z*(s+e)*R,F*(s+e)*R,s*R,s*R)}},[N,s,e]);return qe.useEffect(()=>{const I=m.current,A=_.current,C=I?.getContext("2d")??null;let U=null,L=null,E=null,R=null;if(I&&A&&C){const z=()=>{const K=l||A.clientWidth,H=c||A.clientHeight;T({width:K,height:H}),R=y(I,K,H)};z();let F=0;const V=K=>{if(!v||!R)return;const H=(K-F)/1e3;F=K,x(R.squares,H),O(C,I.width,I.height,R.cols,R.rows,R.squares,R.dpr),U=requestAnimationFrame(V)};L=new ResizeObserver(()=>{z()}),L.observe(A),E=new IntersectionObserver(([K])=>{g(K.isIntersecting)},{threshold:0}),E.observe(I),v&&(U=requestAnimationFrame(V))}return()=>{U!==null&&cancelAnimationFrame(U),L&&L.disconnect(),E&&E.disconnect()}},[y,x,O,l,c,v]),Y.jsx("div",{ref:_,className:`h-full w-full ${f||""}`,...p,children:Y.jsx("canvas",{ref:m,className:"pointer-events-none",style:{width:S.width,height:S.height}})})};Q_&&Q_(30);const P3=()=>{const[s,e]=qe.useState("breathing"),[i,r]=qe.useState("System Idle"),l=qe.useRef(null);return qe.useEffect(()=>{const c=setTimeout(()=>{l.current?.triggerReveal({hold:"manual"})},800);return()=>clearTimeout(c)},[]),Y.jsxs("section",{className:"min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-20",children:[Y.jsx(O3,{className:"absolute inset-0 z-0 size-full",squareSize:4,gridGap:6,color:"#6B7280",maxOpacity:.27,flickerChance:.1}),Y.jsxs("div",{className:"container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full",children:[Y.jsxs("div",{className:"col-span-1 md:col-span-7 flex flex-col justify-center",children:[Y.jsxs(zn.div,{className:"mb-8 flex items-center gap-3 bg-gray-50 border border-gray-200 w-fit px-4 py-2 rounded-full shadow-sm",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8},children:[Y.jsx(Bu,{state:s,size:20,theme:"light"}),Y.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-gray-500 font-semibold min-w-[150px] whitespace-nowrap",children:i})]}),Y.jsxs(zn.h1,{className:"font-serif text-4xl md:text-6xl font-normal leading-tight tracking-tight mb-8",initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.2},children:["Hi, This is ",Y.jsx("span",{className:"font-bold",children:"Gaurav"})]}),Y.jsxs(zn.div,{className:"font-sans text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed mb-10 pl-2 border-l-2 border-black/20 space-y-2",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.4},children:[Y.jsx("p",{className:"font-bold",children:"Senior Undergraduate, IIT Gandhinagar"}),Y.jsxs("p",{children:["Dual Majors in ",Y.jsx("span",{className:"text-black font-semibold",children:"Chemical"})," and ",Y.jsx("span",{className:"text-black font-semibold",children:"Computer Science Engineering"})]})]}),Y.jsxs(zn.div,{className:"flex flex-col gap-8 w-fit",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[Y.jsxs("div",{className:"flex flex-wrap gap-4",children:[Y.jsxs("a",{href:"/External_Gaurav.pdf",target:"_blank",rel:"noopener noreferrer",className:"group relative px-8 py-3 rounded-full bg-black text-white font-mono text-sm font-bold uppercase tracking-widest overflow-hidden hover:shadow-lg transition-all",onMouseEnter:()=>{e("working"),r("Retrieving CV...")},onMouseLeave:()=>{e("breathing"),r("System Idle")},children:[Y.jsx("span",{className:"relative z-10 group-hover:text-black transition-colors duration-300",children:"Download CV"}),Y.jsx("div",{className:"absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"})]}),Y.jsxs("a",{href:"#contact",className:"group relative px-8 py-3 rounded-full bg-white text-black border border-black font-mono text-sm font-bold uppercase tracking-widest overflow-hidden hover:shadow-lg transition-all",onMouseEnter:()=>{e("connecting"),r("Establishing Link...")},onMouseLeave:()=>{e("breathing"),r("System Idle")},children:[Y.jsx("span",{className:"relative z-10 group-hover:text-white transition-colors duration-300",children:"Contact Me"}),Y.jsx("div",{className:"absolute inset-0 bg-black transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"})]})]}),Y.jsxs("div",{className:"flex gap-6 items-center justify-center w-full",children:[Y.jsx("a",{href:"https://github.com/gaurav-budhwani",target:"_blank",rel:"noopener noreferrer",className:"hover:scale-110 transition-transform duration-300",onMouseEnter:()=>{e("weaving"),r("Parsing Github...")},onMouseLeave:()=>{e("breathing"),r("System Idle")},children:Y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-600 hover:text-black",children:[Y.jsx("path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}),Y.jsx("path",{d:"M9 18c-4.51 2-5-2-7-2"})]})}),Y.jsx("a",{href:"https://www.linkedin.com/in/gaurav-budhwani-66a78625a/",target:"_blank",rel:"noopener noreferrer",className:"hover:scale-110 transition-transform duration-300",onMouseEnter:()=>{e("searching"),r("Scanning Profile...")},onMouseLeave:()=>{e("breathing"),r("System Idle")},children:Y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-600 hover:text-blue-700",children:[Y.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),Y.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),Y.jsx("circle",{cx:"4",cy:"4",r:"2"})]})})]})]})]}),Y.jsx(zn.div,{className:"col-span-1 md:col-span-5 relative flex justify-center items-center",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:1,delay:.3},children:Y.jsxs("div",{className:"relative z-10 p-4 border border-black/10 bg-white/50 backdrop-blur-sm group w-full max-w-sm mx-auto",onMouseEnter:()=>{e("solving"),r("Analyzing Subject...")},onMouseLeave:()=>{e("breathing"),r("System Idle")},children:[Y.jsx("div",{className:"grayscale hover:grayscale-0 transition-all duration-700",children:Y.jsx(im,{ref:l,preset:"pixels-organic",images:["/images/my_pic_test.JPG","/images/my_pic_test.JPG"],children:Y.jsx("div",{className:"aspect-[3/4] w-full overflow-hidden bg-gray-100 relative",children:Y.jsx("img",{src:"/images/my_pic_test.JPG",alt:"Gaurav Budhwani",className:"w-full h-full object-cover opacity-0"})})})}),Y.jsxs("div",{className:"mt-4 flex justify-between items-center border-t border-black/10 pt-2 font-mono text-[10px] uppercase text-gray-500",children:[Y.jsx("span",{children:"Student / Engineer"}),Y.jsx("span",{children:"IIT Gandhinagar"})]}),Y.jsx("div",{className:"mt-2 text-center font-sans text-xs font-bold text-black tracking-wide",children:"At Miami Beach, Florida, USA"})]})})]})]})},I3="/assets/CSP-vJaxawL6.png",z3="/assets/HAR-YZ0JOCR8.png",B3="/assets/Numerical%20methods-DmdefuRc.png",F3="/assets/Quizz-app-yF5bNSbO.png",H3="/assets/TCP-B2qeZ_VW.png",G3="/assets/api_gateway-CyL_Ykx5.png",V3="/assets/Cumene-Cg0DDCsC.png",k3="/assets/Optimisation-189xhJRN.png",W3="/assets/Saffman-D08U2UzO.png",X3="/assets/Thermodynamics-20hPtdE_.png",q3="/assets/heat%20transfer-D_ypFj_U.png",Y3="/assets/pyrolysis-D6JFEHJO.png",Z3="/assets/CN_Project-XZkirl4E.pdf",K3="/assets/CSP_Report-DmUyKoYu.pdf",j3="/assets/MA203_Project-DlVV2G25.pdf",Q3="/assets/SP_Report-DSAlzpmn.pdf",J3="/assets/Pyrolysis_ppt-B7Uus_p7.pdf",$3="/assets/cumene_Report-9HPN2uBE.pdf",eR="/assets/Engineering_Optimisation_Report-BRHP1O4G.pdf",tR="/assets/ICL_Project_Report_Group_E-BmeK8KAC.pdf",nR="/assets/ES211_Project-CeBrmVls.pdf",iR="/assets/CL204-Heat_final%20report_Group3-Br7KncuO.pdf",aR="/assets/market-sentiment-AgGwo9GD.png",sR="/assets/dashboard_AAPL-BBhyxH7m.png",rR="/assets/dashboard_AMZN-D8bbJBSV.png",oR="/assets/dashboard_GOOG-Cxxz5Zs8.png",lR="/assets/dashboard_MSFT-LIYfX2Ws.png",cR="/assets/dashboard_TSLA-CTGxLcyR.png",uR="/data/HAR_Analysis.json",fR="/data/ICL_Saffman.json",mS=[{title:"TCP Congestion Control Simulator",subtitle:"Networking",description:"Custom implementation of TCP protocol features.",image:H3,link:"/project/tcp",category:"Networking",slug:"tcp",longDescription:"Interactive simulation platform that demonstrates how different TCP congestion control algorithms work under varying network conditions, such as bandwidth, delay, and packet loss. It provides visualization of throughput, congestion window changes, and retransmission behavior.",features:["Interactive Simulation of network conditions","Real-time Visualization of throughput & congestion","Congestion Window Analysis","Packet Loss & Retransmission Simulation"],techStack:["Python","JavaScript","React","Matplotlib","ns-3"],repoUrl:"https://github.com/gaurav-budhwani/TCP-Congestion-Control-Algorithms",reportUrl:Z3},{title:"API Gateway Core",subtitle:"LLD / Networking",description:"Low-level design of a scalable API gateway system.",image:G3,link:"/project/api-gateway",category:"LLD / Networking",slug:"api-gateway",techStack:["System Design","Networking","Load Balancing","Rate Limiting"],repoUrl:"https://github.com/gaurav-budhwani/API-Gateway-Core",features:["Request Routing & Load Balancing","Rate Limiting & Throttling","Authentication & Authorization","Caching & Performance Optimization","Circuit Breaker Pattern"],longDescription:"A comprehensive **low-level design of an API Gateway** that serves as a single entry point for microservices architecture. This project demonstrates the implementation of core gateway functionalities including request routing, load balancing across backend services, rate limiting to prevent abuse, and caching mechanisms for improved performance. The design focuses on scalability, fault tolerance, and security best practices."},{title:"Constraint Satisfaction",subtitle:"AI / Algorithms",description:"Visualizing CSP algorithms for complex problem solving.",image:I3,link:"/project/csp",category:"AI / Algorithms",slug:"csp",longDescription:"This project is an interactive Constraint Satisfaction Problem (CSP) Visualizer built with React and TypeScript. It demonstrates how AI algorithms solve complex constraint problems like N-Queens and KenKen puzzles. The application features a premium UI with real-time visualization of solver steps, allowing users to understand algorithms like Backtracking, Forward Checking, and Arc Consistency.",features:["N-Queens Solver (4x4 to 12x12)","KenKen Puzzle Generator & Solver","Visualized Algorithms: Backtracking, Forward Checking, MAC","Interactive User Play Mode with Validation"],techStack:["React","TypeScript","Vite","CSS3"],repoUrl:"https://github.com/gaurav-budhwani/CSP-Visualizer",reportUrl:K3},{title:"Human Activity Recognition",subtitle:"Machine Learning",description:"ML model interpreting accelerometer data.",image:z3,link:"/project/har",category:"Machine Learning",slug:"har",longDescription:"Machine learning model that can identify different human activities like walking, sitting, and running using data from an accelerometer. This project involves Exploratory Data Analysis (EDA), Feature Engineering using the TSFEL library, and training Decision Trees to classify activities with high accuracy.",features:["Accelerometer Data Analysis","Time Series Feature Extraction (TSFEL)","PCA Dimensionality Reduction","Decision Tree Classification","Real-world Data Validation"],techStack:["Python","Scikit-Learn","Pandas","Seaborn"],repoUrl:"https://github.com/gaurav-budhwani/HAR-Human-Activity-Recognizer-ML",notebookData:uR,fullWidth:!0},{title:"Quiz Application",subtitle:"Web Development",description:"Interactive quiz platform with secure authentication.",image:F3,link:"/project/quiz-app",category:"Web Dev / Databases",slug:"quiz-app",techStack:["Flask","SQLite3","Python","HTML/CSS"],repoUrl:"https://github.com/Hit2737/Quiz_App",features:["User Authentication (Login, Signup, Forgot Password)","Admin Dashboard for creating and managing quizzes","Student Dashboard for taking quizzes","Secure environment with basic verification","Responsive Design"],longDescription:`This repo provides the code for the quiz app that I built with my friends ([Ruchit Jagodara](https://github.com/ruchitjagodara), [Bhavik Patel](https://github.com/bp0609/), [Gaurav Budhwani](https://github.com/gaurav-budhwani)) under the guidance of [Prof. Balagopal Komarath](https://github.com/balu).

The app is built using **Flask** and **SQLite3** and is designed to be lightweight, allowing it to be hosted on any machine with Python installed.

### Key Capabilities
- **Authentication**: Includes secure login, signup, and password recovery.
- **Classroom Utility**: Can be used for attendance and secure quiz-taking with verification features.
- **Admin Role**: Admins can create quizzes, add questions (text or MCQ), set options, and manage the quiz lifecycle (start/stop/lock).
- **Student Role**: Students can join quizzes via code, verify their identity, and attempt questions in a controlled environment.

### How it Works
The application separates roles into **Admin** and **Student**. Admins have full control over the quiz creation process, including supporting latex for math equations in questions. Students experience a streamlined interface to take the quiz and view their results.`},{title:"Numerical Analysis of Car Breaking System",subtitle:"Computational Math",description:"Implementation of advanced numerical algorithms.",image:B3,link:"/project/numerical-methods",category:"Computational Math",slug:"numerical-methods",techStack:["Python","NumPy","Matplotlib"],repoUrl:"https://github.com/gaurav-budhwani/MA-203-Project",reportUrl:j3,features:["Transient Thermal Analysis of Brake Systems","Numerical Modeling of Heat Dissipation","Simulation of Braking Scenarios","Algorithm Implementation from Scratch"],longDescription:"This project focuses on the **Transient Thermal Analysis of a Car Brake System**. It involves the mathematical modeling and numerical simulation of heat generation and dissipation in brake discs during braking. The project implements advanced numerical methods to solve differential equations governing heat transfer, allowing for the prediction of temperature profiles and thermal behavior under various conditions."}],dR=[{title:"Pyrolysis Modeling",subtitle:"Research / Simulation",description:"Parameter estimation for wood particle pyrolysis.",image:Y3,link:"/project/pyrolysis",category:"Separation process",slug:"pyrolysis",techStack:["MATLAB","Simulink","Parameter Estimation"],repoUrl:"https://iitgnacin-my.sharepoint.com/:f:/g/personal/22110085_iitgn_ac_in/IgBVDOWwWKHrRoaLWNHzXRbsAVrJU5MMrZAkfG0I7Vd3MvU?e=t4t5J8",reportUrl:Q3,presentationUrl:J3,features:["Mathematical Modeling of Pyrolysis Kinetics","Parameter Estimation using Experimental Data","Curve Fitting & Error Minimization","Simulation of Decomposition Profiles"],longDescription:"The project involves the **mathematical modeling and simulation of wood particle pyrolysis** to estimate kinetic parameters. By fitting experimental data to theoretical models, we determined the reaction rate constants and activation energies for the decomposition process. This work aids in optimizing reactor design and understanding the thermal degradation behavior of biomass."},{title:"Cumene Process Design",subtitle:"Plant Design",description:"Energy-efficient plant design and optimization.",image:V3,link:"/project/cumene",category:"Process Design",slug:"cumene",techStack:["ASPEN Plus","Heat Exchanger Network Design","Process Safety"],reportUrl:$3,features:["Material & Energy Balance Calculations","Reactor & Distillation Column Design","Heat Exchanger Network Synthesis (HENS)","Economic & Safety Analysis"],longDescription:"This project entails the comprehensive **design of a chemical plant for the production of Cumene** from benzene and propylene. It includes detailed material and energy balances, the design of major equipment like reactors and distillation columns, and the synthesis of a Heat Exchanger Network (HEN) to maximize energy recovery. An economic analysis and hazard identification study were also conducted to ensure viability and safety."},{title:"Laminar Airflow Optimization",subtitle:"CFD Analysis",description:"Minimizing heat loss via CFD analysis.",image:k3,link:"/project/airflow",category:"Optimisation",slug:"airflow",techStack:["OpenFOAM","Python","Genetic Algorithms"],repoUrl:"https://github.com/gaurav-budhwani/ES604---Project",reportUrl:eR,features:["CFD Simulation of Laminar Airflow","Adjoint-based Optimization","Heat Loss Minimization","Geometric Shape Optimization"],longDescription:"This project uses **Computational Fluid Dynamics (CFD)** and optimization techniques to minimize heat loss in a laminar airflow system. By simulating fluid flow and heat transfer, we optimized the geometry of the system to reduce thermal dissipation. The study combines numerical simulations with optimization algorithms to achieve an energy-efficient design."},{title:"Saffman-Taylor Instability",subtitle:"Fluid Dynamics",description:"Experimental study of Hele-Shaw instability.",image:W3,link:"/project/saffman",category:"Modelling",slug:"saffman",techStack:["Python","Image Processing","Fluid Mechanics"],repoUrl:"https://github.com/gaurav-budhwani/CL326-Project",reportUrl:tR,notebookData:fR,fullWidth:!0,features:["Experimental Visualization of Viscous Fingering","Image Processing to Analyze Finger Width","Validation of Modified Darcy's Law","Data Extraction and Regression Analysis"],longDescription:"This project investigates the **Saffman-Taylor instability (viscous fingering)**, a phenomenon that occurs when a less viscous fluid displaces a more viscous one in a porous medium. Using a Hele-Shaw cell setup, we captured the interface dynamics and used image processing techniques to analyze finger width and propagation. The experimental results were compared with theoretical predictions to validate the governing laws of fluid instability."},{title:"Thermodynamics Analysis",subtitle:"Research",description:"Thermodynamic cycle analysis and efficiency study.",image:X3,link:"/project/thermo",category:"Thermodynamics",slug:"thermo",techStack:["Python","Thermodynamics","Data Analysis"],repoUrl:"https://github.com/gaurav-budhwani/ES-211-Project",reportUrl:nR,features:["Thermodynamic Cycle Simulation","Efficiency Calculation","Property Variation Analysis","Theoretical Validation"],longDescription:"This research project involves the **analysis of thermodynamic cycles** to evaluate their efficiency and performance under various operating conditions. We modeled the cycles and simulated the thermodynamic processes to understand the impact of different parameters on system performance, validating the results with theoretical principles."},{title:"Heat Transfer Efficiency",subtitle:"Engineering",description:"Analysis of circular fin heat transfer efficiency.",image:q3,link:"/project/heat-transfer",category:"Heat Transfer",slug:"heat-transfer",techStack:["Experimental","Data Analysis","Heat Transfer"],reportUrl:iR,videoUrl:"https://iitgnacin-my.sharepoint.com/:v:/g/personal/22110085_iitgn_ac_in/IQDJl_mA1WMES7AGZt2HFq0PAdzCpJKkuSRgM0-ucMMPrLo?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=EBotLt",features:["Experimental Setup of Circular Fin","Temperature Profile Measurement","Efficiency Calculation","Comparison with Analytical Models"],longDescription:"This project focuses on the **experimental analysis of heat transfer efficiency** in circular fins. By setting up a controlled experiment, we measured the temperature distribution along the fin and calculated its heat transfer efficiency. The experimental data were then compared with analytical models to validate the heat transfer correlations."}],hR={title:"Market Sentiment Alpha Seeker",subtitle:"Data Engineering / NLP",description:"Quantifying market hype to find financial alpha.",image:aR,link:"/project/market-sentiment",category:"Data Engineering",slug:"market-sentiment",techStack:["Python","NLP (VADER)","SQL (SQLite)","Plotly","ETL"],repoUrl:"https://github.com/gaurav-budhwani/Market-Sentiment",features:["Real-time News Scraping","Sentiment Analysis (NLP)","Time-Series Alignment (Weekend Gap Fix)","Complex SQL Transformations","Interactive Dashboards"],fullWidth:!0,longDescription:` Trying to build a Financial "Alpha Seeker" with \`Python\`, \`NLP\`, and Complex \`SQL\`

---

### The "Why": Markets Run on Math *and* Emotion

In classical finance theory, stock prices are supposed to reflect the fundamental value of a company. In reality, we know that isn't the whole story. Markets are heavily influenced by psychology, hype, fear, and the 24-hour news cycle.

As a data engineer interested in finance, I wanted to answer a specific question: **Can we quantify "market hype" and overlay it against price action to find leading indicators?**

If news sentiment turns negative on a Saturday, does that predict a gap down at Monday's open? To answer this, I couldn't just rely on structured \`OHLCV\` (Open, High, Low, Close, Volume) data. I needed to bridge the gap between unstructured text data and structured time-series data.

This led to the creation of the **Market Sentiment Alpha Seeker**, an end-to-end financial analysis pipeline.

---

### The Technical Challenge: The "Weekend Gap"

Building a sentiment analysis tool is a common project. However, making it actually useful for financial analysis presented a significant data engineering challenge: **Time Alignment.**

Financial markets operate 9-to-5, Monday through Friday. News, however, never sleeps. It happens 24/7, including weekends and holidays.

If a major negative headline breaks on Saturday afternoon, it won't impact the stock price until Monday morning at 9:30 AM. If you simply plot sentiment by its publication date against stock prices by their trading date, your data will be misaligned, and any correlations you find will be flawed.

Solving this time-alignment mismatch became the crux of the project.

---

### The Architecture

I designed a four-stage pipeline to handle ingestion, processing, storage, and visualization.

#### 1. Ingestion Layer (The Raw Materials)

I needed two distinct streams of data. For historical stock data, I utilized the reliable \`yfinance\` library. For news, I built a custom scraper using \`BeautifulSoup\` to parse Google News RSS feeds for real-time headlines related to specific tickers.

#### 2. NLP & Transformation (Quantifying Hype)

To turn headlines into data, I needed Sentiment Analysis. I chose **VADER** (Valence Aware Dictionary and sEntiment Reasoner) for the initial implementation. \`VADER\` is excellent at parsing the tone of short, social-media-style text common in headlines.

The system is designed modularly, so \`VADER\` can easily be swapped out for more advanced financial-specific models like \`FinBERT\` in the future. Each headline receives a "compound score" ranging from -1 (extremely negative) to +1 (extremely positive).

#### 3. Data Warehousing & The SQL Solution

This is where the heavy lifting happens. Data is stored in a \`SQLite\` database (\`market_sentiment.db\`) with a star-schema design (fact tables for prices and news scores, dimension tables for stocks).

To solve the "Weekend Gap" challenge mentioned earlier, I relied on complex \`SQL\`. I used **Window Functions** and **Common Table Expressions (CTEs)** to map news that occurred during non-trading hours to the *next available trading (effective) date*. This ensures that the sentiment shown on a chart actually corresponds to the price action it might influence.

#### 4. Visualization

Finally, to make the data interpretable, I used \`Plotly\` and \`Kaleido\`. The output is a series of dual-axis dashboards. The stock price is represented as a line chart, overlaid with a bar chart showing the average sentiment score for that effective date.

---

### The Results: Visualizing the Correlation

The pipeline successfully generates high-resolution dashboards that allow for immediate visual inspection of sentiment versus price.

**Tesla (TSLA)**

It’s fascinating to watch how volatile stocks like Tesla react to intense bursts of news sentiment.

![Dashboard TSLA](${cR})

**Apple (AAPL)**

Even stable giants like Apple show interesting correlations during earnings seasons or major product announcements.

![Dashboard AAPL](${sR})

**Other Key Examples:**

![Dashboard AMZN](${rR})

![Dashboard GOOG](${oR})

![Dashboard MSFT](${lR})

---

### Key Takeaways for Engineering

This project was a great exercise in moving beyond tutorials and dealing with messy, real-world data problems.

1.  **Data Alignment is 80% of the battle:** The \`NLP\` part was surprisingly straightforward. The hardest part was writing the \`SQL\` logic to ensure Saturday's news correctly mapped to Monday's open.
2.  **Modularity Matters:** By separating the ingestion, \`NLP\`, and storage layers, I can now upgrade the sentiment model to \`FinBERT\` without breaking the database schema or the scraping logic.
3.  **Local Pipelines are Powerful:** You don't always need a massive cloud infrastructure to build valuable insights. A well-architected local \`Python\` and \`SQLite\` pipeline can process significant amounts of data efficiently.

### Future Improvements

*   Integrating \`FinBERT\` for more nuanced financial sentiment detection.
*   Automating the pipeline via \`Airflow\` to run daily.
*   Building a front-end web UI using \`Streamlit\` instead of static PNG images.

If you want to dive into the code, check out the repository on GitHub.`},IR=[...mS,hR,...dR],pR=()=>{const s=mS;return Y.jsx("section",{id:"projects",className:"py-24 px-6 md:px-12 bg-white border-t border-black/5",children:Y.jsxs("div",{className:"max-w-7xl mx-auto",children:[Y.jsx("div",{className:"flex items-center gap-4 mb-16",children:Y.jsx("h2",{className:"font-serif text-4xl font-bold tracking-tight",children:"PROJECTS"})}),Y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16",children:s.map((e,i)=>Y.jsxs(ox,{to:e.link,className:"group block cursor-pointer",children:[Y.jsxs("div",{className:"relative overflow-hidden mb-6 bg-gray-50 aspect-[4/3] border border-gray-100 rounded-lg group-hover:shadow-md transition-shadow",children:[Y.jsx("div",{className:"absolute top-3 left-3 z-10 font-mono text-[10px] bg-white px-3 py-1.5 border border-gray-200 shadow-sm rounded-full font-bold uppercase tracking-wider text-black",children:e.subtitle}),Y.jsx("div",{className:"absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-white/80 backdrop-blur-sm rounded-full p-1.5 border border-gray-200",children:Y.jsx(Bu,{state:"connecting",size:20,theme:"light"})}),Y.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0",loading:"lazy"})]}),Y.jsxs("div",{className:"border-l-2 border-transparent group-hover:border-black pl-0 group-hover:pl-4 transition-all duration-300",children:[Y.jsx("h3",{className:"font-serif text-2xl font-bold leading-tight mb-3 group-hover:text-gray-600 transition-colors",children:e.title}),Y.jsx("p",{className:"font-sans text-sm text-gray-700 leading-relaxed font-medium",children:e.description}),Y.jsxs("div",{className:"mt-4 font-mono text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2",children:["View Project ",Y.jsx("span",{children:"→"})]})]})]},i))})]})})},mR=()=>Y.jsx("section",{id:"publications",className:"py-24 px-6 md:px-12 bg-white",children:Y.jsxs("div",{className:"max-w-7xl mx-auto",children:[Y.jsx("div",{className:"flex items-center gap-4 mb-16",children:Y.jsx("h2",{className:"font-serif text-4xl font-bold tracking-tight",children:"PUBLICATIONS"})}),Y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16",children:Y.jsxs("div",{className:"group block",children:[Y.jsxs("div",{className:"relative overflow-hidden mb-6 bg-gray-50 aspect-[4/3] border border-gray-100 rounded-lg group-hover:shadow-md transition-shadow",children:[Y.jsx("div",{className:"absolute bottom-3 left-3 z-10 font-mono text-[10px] bg-white px-3 py-1.5 border border-gray-200 shadow-sm rounded-full font-bold uppercase tracking-wider text-black",children:"Journal Article"}),Y.jsx("img",{src:"/images/jgr_atmospheres_cover.png",alt:"JGR Atmospheres Cover",className:"w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0",loading:"lazy"})]}),Y.jsxs("div",{className:"border-l-2 border-transparent group-hover:border-black pl-0 group-hover:pl-4 transition-all duration-300",children:[Y.jsx("h3",{className:"font-serif text-xl font-bold leading-tight mb-2 group-hover:text-gray-600 transition-colors",children:"Employing Machine Learning for New Particle Formation Identification and Mechanistic Analysis"}),Y.jsx("p",{className:"font-sans text-sm text-gray-500 mb-2",children:"Insights From a Six-Year Observational Study in the Southern Great Plains"}),Y.jsx("p",{className:"font-mono text-xs text-gray-400 uppercase tracking-widest mb-4",children:"JGR Atmospheres • 2026"}),Y.jsxs("div",{className:"flex gap-4",children:[Y.jsx("a",{href:"https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024JD043116",target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Read Online →"}),Y.jsx("a",{href:"/JGR_Atmospheres_2026_Hao.pdf",target:"_blank",rel:"noopener noreferrer",className:"font-mono text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Download PDF ↓"})]})]})]})})]})}),gR="/assets/miami_logo-Cjl_EmQU.png",vR="/assets/iitgn_logo-CfMXUfzo.png",_R="/assets/accenture_logo-DVW00XVv.png",Fh="/assets/about-BVSV8C9V.JPG";function xR(...s){return s.filter(Boolean).join(" ")}const SR=(s,e)=>s<=0?[]:Array.from({length:s},(i,r)=>{const l=8+Math.random()*84,c=-28+Math.random()*56,f=160+Math.random()*160,h=.8+Math.random()*1.8,p=Math.random()*e,m=e*(.75+Math.random()*.5),_=.6+Math.random()*.5;return{id:`${r}-${Math.round(l*10)}`,left:l,rotate:c,width:f,swing:h,delay:p,duration:m,intensity:_}}),yR=({left:s,rotate:e,width:i,swing:r,delay:l,duration:c,intensity:f})=>Y.jsx(zn.div,{className:"pointer-events-none absolute -top-[12%] left-[var(--ray-left)] h-[var(--light-rays-length)] w-[var(--ray-width)] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-[color-mix(in_srgb,var(--light-rays-color)_70%,transparent)] to-transparent opacity-0 mix-blend-screen blur-[var(--light-rays-blur)]",style:{"--ray-left":`${s}%`,"--ray-width":`${i}px`},initial:{rotate:e},animate:{opacity:[0,f,0],rotate:[e-r,e+r,e-r]},transition:{duration:c,repeat:1/0,ease:"easeInOut",delay:l,repeatDelay:c*.1}});function MR({className:s,style:e,count:i=7,color:r="rgba(107, 114, 128, 0.2)",blur:l=36,speed:c=14,length:f="70vh",...h}){const[p,m]=qe.useState([]),_=Math.max(c,.1);return qe.useEffect(()=>{m(SR(i,_))},[i,_]),Y.jsx("div",{className:xR("pointer-events-none absolute inset-0 isolate overflow-hidden rounded-[inherit]",s),style:{"--light-rays-color":r,"--light-rays-blur":`${l}px`,"--light-rays-length":f,...e},...h,children:Y.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[Y.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 opacity-60",style:{background:"radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--light-rays-color) 45%, transparent), transparent 70%)"}}),Y.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 opacity-60",style:{background:"radial-gradient(circle at 80% 10%, color-mix(in srgb, var(--light-rays-color) 35%, transparent), transparent 75%)"}}),p.map(v=>Y.jsx(yR,{...v},v.id))]})})}const bR=()=>{const s=qe.useRef(null),e=qe.useRef(!1),i=()=>{e.current||(e.current=!0,setTimeout(()=>{s.current?.triggerReveal({hold:"manual"})},600))};return Y.jsxs("section",{id:"about",className:"py-32 px-6 md:px-12 bg-white relative border-b border-black/5 overflow-hidden",children:[Y.jsx(MR,{}),Y.jsxs("div",{className:"max-w-[1400px] mx-auto relative z-10",children:[Y.jsx(zn.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"font-serif text-[clamp(3rem,5vw,5rem)] font-bold leading-[0.9] tracking-tight mb-20 text-center md:text-left",children:"About Me."}),Y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",children:[Y.jsx("div",{className:"lg:col-span-4",children:Y.jsxs(zn.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,amount:.3},onViewportEnter:i,className:"relative",children:[Y.jsx("div",{className:"rounded-2xl overflow-hidden border border-gray-200 shadow-sm grayscale hover:grayscale-0 transition-all duration-700 ease-in-out",children:Y.jsx(im,{ref:s,preset:"pixels-organic",images:[Fh,Fh],children:Y.jsx("div",{className:"w-full h-full relative",children:Y.jsx("img",{src:Fh,alt:"Gaurav at University of Miami",className:"w-full h-auto object-cover opacity-0",loading:"lazy"})})})}),Y.jsx("p",{className:"font-sans text-sm font-medium text-gray-700 mt-4 text-center",children:"At University of Miami, Florida, USA"})]})}),Y.jsx("div",{className:"lg:col-span-4 flex flex-col justify-center pt-4",children:Y.jsxs(zn.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.2},viewport:{once:!0},className:"space-y-6 font-sans text-lg leading-relaxed text-gray-800",children:[Y.jsxs("p",{children:["I am an undergraduate student pursuing a dual majors in ",Y.jsx("span",{className:"font-bold",children:"Chemical Engineering"})," and ",Y.jsx("span",{className:"font-bold",children:"Computer Science Engineering"}),"."]}),Y.jsx("p",{children:"My academic journey is driven by a deep fascination with the interplay between mathematics and coding, and how these disciplines converge to address real-world challenges. I believe that the synergy between Chemical Engineering and Computer Science opens up a world of innovative solutions and I am eager to continue learning and growing in these dynamic fields."})]})}),Y.jsxs("div",{className:"lg:col-span-4 flex flex-col space-y-6",children:[Y.jsx(zn.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"group relative bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:border-black transition-colors duration-300",children:Y.jsxs("div",{className:"flex items-center gap-4",children:[Y.jsx("div",{className:"w-14 h-14 shrink-0 bg-gray-100 rounded-xl p-2 border border-gray-200 shadow-sm group-hover:scale-105 transition-transform",children:Y.jsx("img",{src:_R,alt:"Accenture",className:"w-full h-full object-contain",loading:"lazy"})}),Y.jsxs("div",{children:[Y.jsx("h4",{className:"font-sans text-lg font-bold leading-tight",children:"AEH Intern"}),Y.jsx("p",{className:"font-sans text-sm text-gray-600",children:"Accenture"}),Y.jsx("p",{className:"font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wider",children:"May'26 - July'26"}),Y.jsx("p",{className:"font-sans text-[11px] whitespace-nowrap text-gray-700 font-bold mt-1 tracking-tight",children:"Offered PPO for ETE (Elite Technology Engineering) Role"})]})]})}),Y.jsx(zn.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},className:"group relative bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:border-black transition-colors duration-300",children:Y.jsxs("div",{className:"flex items-center gap-4",children:[Y.jsx("div",{className:"w-14 h-14 shrink-0 bg-gray-100 rounded-xl p-2 border border-gray-200 shadow-sm group-hover:scale-105 transition-transform",children:Y.jsx("img",{src:gR,alt:"University of Miami",className:"w-full h-full object-contain",loading:"lazy"})}),Y.jsxs("div",{children:[Y.jsx("h4",{className:"font-sans text-lg font-bold leading-tight",children:"Applied Machine Learning Intern"}),Y.jsx("p",{className:"font-sans text-sm text-gray-600",children:"University of Miami"}),Y.jsx("p",{className:"font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wider",children:"Summer 2025"})]})]})}),Y.jsx(zn.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{delay:.1},viewport:{once:!0},className:"group relative bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:border-black transition-colors duration-300",children:Y.jsxs("div",{className:"flex items-center gap-4",children:[Y.jsx("div",{className:"w-14 h-14 shrink-0 bg-gray-100 rounded-xl p-2 border border-gray-200 shadow-sm group-hover:scale-105 transition-transform",children:Y.jsx("img",{src:vR,alt:"IIT Gandhinagar",className:"w-full h-full object-contain",loading:"lazy"})}),Y.jsxs("div",{children:[Y.jsx("h4",{className:"font-sans text-lg font-bold leading-tight",children:"Bachelor of Technology"}),Y.jsx("p",{className:"font-sans text-sm text-gray-600",children:"IIT Gandhinagar"}),Y.jsx("p",{className:"font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wider",children:"2022 - Present"})]})]})})]})]})]})]})},ER={LANGUAGES:["Python","C","C++","Matlab","HTML","CSS","Javascript","Sql","Rust"],ENGINEERING:["Aspen Plus","COMSOL","AutoCAD","Cantera","LaTeX","Adobe Illustrator","Arduino","Autodesk Inventor","Tableau"],DOMAINS:["Process Optimisation","CFD","Heat transfer","Math Modelling","Web Dev","Machine learning","Data structures and Algorithms"]},TR=()=>Y.jsx("section",{id:"skills",className:"py-20 px-6 md:px-24 bg-gray-50 border-t border-black/5",children:Y.jsxs("div",{className:"max-w-7xl mx-auto",children:[Y.jsx("div",{className:"mb-16",children:Y.jsx(zn.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"font-serif text-4xl md:text-5xl font-bold tracking-tight text-center",children:"TECH STACKS"})}),Y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:Object.entries(ER).map(([s,e],i)=>Y.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-black/20 transition-all",children:[Y.jsx("h4",{className:"font-mono text-sm font-bold uppercase tracking-widest mb-6 bg-black text-white inline-block px-3 py-1 rounded",children:s}),Y.jsx("div",{className:"flex flex-wrap gap-2",children:e.map((r,l)=>Y.jsx("span",{className:"font-sans text-sm font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700",children:r},l))})]},i))})]})}),AR=[{title:"Undergraduate Teaching Assistant",organization:"Engineering Optimisation",period:"Aug '25 - Nov '25",description:"Conducted weekly tutorial sessions, mentored students on assignments and projects, clarified optimization concepts, and provided structured feedback to improve problem-solving and implementation quality."},{title:"Design Team Member",organization:"Amalthea ’23 (Annual Tech Summit)",period:"Dec '22 - Feb '24",description:"Developed and executed visually compelling social media content for diverse platforms using Adobe Illustrator, Canva, and other graphic design tools."},{title:"Team Member",organization:"Vinteo (Film Making Club)",period:"Jul '24 - May '25",description:"Contributed to a short film’s production, handling concept development, and filming. Ensured smooth execution."},{title:"Team Member",organization:"MAPRC (Public Relations Committee)",period:"Jul '24 - May '25",description:"Designer for 'ETHEREAL,' IIT Gandhinagar’s official monthly magazine, crafting visuals to showcase campus life, student achievements, events, and engaging stories."}],wR=()=>Y.jsx("section",{id:"por",className:"py-20 px-6 md:px-24 bg-white",children:Y.jsxs("div",{className:"max-w-7xl mx-auto",children:[Y.jsx("h3",{className:"font-sans text-3xl font-bold mb-12 text-black text-center",children:"PORs"}),Y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:AR.map((s,e)=>Y.jsxs("div",{className:"p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1",children:[Y.jsxs("div",{className:"flex justify-between items-start mb-4",children:[Y.jsx("h4",{className:"font-sans text-xl font-bold text-black",children:s.title}),Y.jsx("span",{className:"font-sans text-xs font-bold bg-black text-white px-2 py-1 rounded",children:s.period})]}),Y.jsx("p",{className:"font-sans text-base font-medium text-gray-700 mb-2 uppercase tracking-wide",children:s.organization}),Y.jsx("p",{className:"font-sans text-sm text-gray-600 leading-relaxed",children:s.description})]},e))})]})}),RR=()=>Y.jsxs("footer",{id:"contact",className:"bg-black text-white pt-24 pb-12 px-6 md:px-12 mt-12",children:[Y.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/20 pb-24",children:[Y.jsxs("div",{className:"col-span-1 md:col-span-8",children:[Y.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[Y.jsx(Bu,{state:"searching",size:20,theme:"dark"}),Y.jsx("p",{className:"font-mono text-xs text-gray-400 uppercase tracking-widest",children:"Initialise_Procedure: Contact"})]}),Y.jsxs("h2",{className:"font-serif text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tight mb-8 hover:text-gray-300 transition-colors cursor-default",children:["LET'S",Y.jsx("br",{}),"BUILD."]})]}),Y.jsxs("div",{className:"col-span-1 md:col-span-4 flex flex-col justify-end items-start md:items-end",children:[Y.jsxs("a",{href:"mailto:gaurav.budhwani@iitgn.ac.in",className:"group flex items-center justify-between w-full md:w-64 border-b border-white/20 py-4 hover:bg-white hover:text-black hover:px-4 transition-all duration-300",children:[Y.jsx("span",{className:"font-mono text-sm uppercase",children:"Email"}),Y.jsx("span",{className:"font-sans font-bold",children:"→"})]}),Y.jsxs("a",{href:"https://www.linkedin.com/in/gaurav-budhwani-66a78625a/",target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-between w-full md:w-64 border-b border-white/20 py-4 hover:bg-white hover:text-black hover:px-4 transition-all duration-300",children:[Y.jsx("span",{className:"font-mono text-sm uppercase",children:"LinkedIn"}),Y.jsx("span",{className:"font-sans font-bold",children:"→"})]}),Y.jsxs("a",{href:"https://github.com/gaurav-budhwani",target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-between w-full md:w-64 border-b border-white/20 py-4 hover:bg-white hover:text-black hover:px-4 transition-all duration-300",children:[Y.jsx("span",{className:"font-mono text-sm uppercase",children:"GitHub"}),Y.jsx("span",{className:"font-sans font-bold",children:"→"})]})]})]}),Y.jsxs("div",{className:"max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 font-mono text-[10px] uppercase tracking-widest",children:[Y.jsx("div",{children:"System: Gaurav Budhwani"}),Y.jsxs("div",{className:"mt-4 md:mt-0",children:["© ",new Date().getFullYear()," All Rights Reserved."]})]})]}),CR=lx.lazy(()=>cx(()=>import("./Blog-B0Z-zY2S.js"),__vite__mapDeps([0,1,2,3]))),DR=lx.lazy(()=>cx(()=>import("./ProjectPage-DjI6C0SZ.js"),__vite__mapDeps([4,1,2,3])));function NR(){const s=rx();return qe.useEffect(()=>{if(s.state&&s.state.scrollTo){const e=document.getElementById(s.state.scrollTo);e&&setTimeout(()=>{e.scrollIntoView({behavior:"smooth"}),window.history.replaceState({},document.title)},100)}},[s]),Y.jsxs("div",{className:"bg-white min-h-screen selection:bg-black selection:text-white",children:[Y.jsx(Mb,{}),Y.jsx(qe.Suspense,{fallback:Y.jsx("div",{className:"flex h-screen items-center justify-center",children:"Loading..."}),children:Y.jsxs(EM,{children:[Y.jsx(Yd,{path:"/",element:Y.jsxs(Y.Fragment,{children:[Y.jsx(P3,{}),Y.jsx(bR,{}),Y.jsx(mR,{}),Y.jsx(pR,{}),Y.jsx(TR,{}),Y.jsx(wR,{}),Y.jsx(RR,{})]})}),Y.jsx(Yd,{path:"/blog",element:Y.jsx(CR,{})}),Y.jsx(Yd,{path:"/project/:slug",element:Y.jsx(DR,{})})]})})]})}DM.createRoot(document.getElementById("root")).render(Y.jsx(qe.StrictMode,{children:Y.jsx(TM,{children:Y.jsx(NR,{})})}));export{Mb as N,IR as a};
