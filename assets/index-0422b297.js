(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ds(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ae={},qt=[],Fe=()=>{},Yc=()=>!1,Xc=/^on[^a-z]/,wr=t=>Xc.test(t),Ls=t=>t.startsWith("onUpdate:"),fe=Object.assign,Ms=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qc=Object.prototype.hasOwnProperty,q=(t,e)=>Qc.call(t,e),F=Array.isArray,Gt=t=>xn(t)==="[object Map]",Tr=t=>xn(t)==="[object Set]",mi=t=>xn(t)==="[object Date]",V=t=>typeof t=="function",de=t=>typeof t=="string",Tn=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Wo=t=>ie(t)&&V(t.then)&&V(t.catch),zo=Object.prototype.toString,xn=t=>zo.call(t),Zc=t=>xn(t).slice(8,-1),Ko=t=>xn(t)==="[object Object]",xs=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zn=Ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},el=/-(\w)/g,Je=Cr(t=>t.replace(el,(e,n)=>n?n.toUpperCase():"")),tl=/\B([A-Z])/g,ln=Cr(t=>t.replace(tl,"-$1").toLowerCase()),Sr=Cr(t=>t.charAt(0).toUpperCase()+t.slice(1)),jr=Cr(t=>t?`on${Sr(t)}`:""),Cn=(t,e)=>!Object.is(t,e),er=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},lr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},os=t=>{const e=parseFloat(t);return isNaN(e)?t:e},nl=t=>{const e=de(t)?Number(t):NaN;return isNaN(e)?t:e};let _i;const as=()=>_i||(_i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Us(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?ol(r):Us(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(de(t))return t;if(ie(t))return t}}const rl=/;(?![^(]*\))/g,sl=/:([^]+)/,il=/\/\*[^]*?\*\//g;function ol(t){const e={};return t.replace(il,"").split(rl).forEach(n=>{if(n){const r=n.split(sl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fs(t){let e="";if(de(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Fs(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cl=Ds(al);function qo(t){return!!t||t===""}function ll(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ar(t[r],e[r]);return n}function Ar(t,e){if(t===e)return!0;let n=mi(t),r=mi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Tn(t),r=Tn(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?ll(t,e):!1;if(n=ie(t),r=ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(c&&!a||!c&&a||!Ar(t[o],e[o]))return!1}}return String(t)===String(e)}function Go(t,e){return t.findIndex(n=>Ar(n,e))}const Km=t=>de(t)?t:t==null?"":F(t)||ie(t)&&(t.toString===zo||!V(t.toString))?JSON.stringify(t,Jo,2):String(t),Jo=(t,e)=>e&&e.__v_isRef?Jo(t,e.value):Gt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Tr(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!F(e)&&!Ko(e)?String(e):e;let De;class ul{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=De,!e&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=De;try{return De=this,e()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function fl(t,e=De){e&&e.active&&e.effects.push(t)}function dl(){return De}const Bs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Yo=t=>(t.w&wt)>0,Xo=t=>(t.n&wt)>0,hl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wt},pl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Yo(s)&&!Xo(s)?s.delete(t):e[n++]=s,s.w&=~wt,s.n&=~wt}e.length=n}},cs=new WeakMap;let _n=0,wt=1;const ls=30;let Le;const xt=Symbol(""),us=Symbol("");class $s{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fl(this,r)}run(){if(!this.active)return this.fn();let e=Le,n=yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Le,Le=this,yt=!0,wt=1<<++_n,_n<=ls?hl(this):vi(this),this.fn()}finally{_n<=ls&&pl(this),wt=1<<--_n,Le=this.parent,yt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(vi(this),this.onStop&&this.onStop(),this.active=!1)}}function vi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yt=!0;const Qo=[];function un(){Qo.push(yt),yt=!1}function fn(){const t=Qo.pop();yt=t===void 0?!0:t}function Se(t,e,n){if(yt&&Le){let r=cs.get(t);r||cs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Bs()),Zo(s)}}function Zo(t,e){let n=!1;_n<=ls?Xo(t)||(t.n|=wt,n=!Yo(t)):n=!t.has(Le),n&&(t.add(Le),Le.deps.push(t))}function rt(t,e,n,r,s,i){const o=cs.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?xs(n)&&c.push(o.get("length")):(c.push(o.get(xt)),Gt(t)&&c.push(o.get(us)));break;case"delete":F(t)||(c.push(o.get(xt)),Gt(t)&&c.push(o.get(us)));break;case"set":Gt(t)&&c.push(o.get(xt));break}if(c.length===1)c[0]&&fs(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);fs(Bs(a))}}function fs(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&yi(r);for(const r of n)r.computed||yi(r)}function yi(t,e){(t!==Le||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gl=Ds("__proto__,__v_isRef,__isVue"),ea=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn)),ml=Hs(),_l=Hs(!1,!0),vl=Hs(!0),bi=yl();function yl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){un();const r=G(this)[e].apply(this,n);return fn(),r}}),t}function bl(t){const e=G(this);return Se(e,"has",t),e.hasOwnProperty(t)}function Hs(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?xl:ia:e?sa:ra).get(r))return r;const o=F(r);if(!t){if(o&&q(bi,s))return Reflect.get(bi,s,i);if(s==="hasOwnProperty")return bl}const c=Reflect.get(r,s,i);return(Tn(s)?ea.has(s):gl(s))||(t||Se(r,"get",s),e)?c:ye(c)?o&&xs(s)?c:c.value:ie(c)?t?aa(c):Pr(c):c}}const El=ta(),Il=ta(!0);function ta(t=!1){return function(n,r,s,i){let o=n[r];if(nn(o)&&ye(o)&&!ye(s))return!1;if(!t&&(!ur(s)&&!nn(s)&&(o=G(o),s=G(s)),!F(n)&&ye(o)&&!ye(s)))return o.value=s,!0;const c=F(n)&&xs(r)?Number(r)<n.length:q(n,r),a=Reflect.set(n,r,s,i);return n===G(i)&&(c?Cn(s,o)&&rt(n,"set",r,s):rt(n,"add",r,s)),a}}function wl(t,e){const n=q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&rt(t,"delete",e,void 0),r}function Tl(t,e){const n=Reflect.has(t,e);return(!Tn(e)||!ea.has(e))&&Se(t,"has",e),n}function Cl(t){return Se(t,"iterate",F(t)?"length":xt),Reflect.ownKeys(t)}const na={get:ml,set:El,deleteProperty:wl,has:Tl,ownKeys:Cl},Sl={get:vl,set(t,e){return!0},deleteProperty(t,e){return!0}},Al=fe({},na,{get:_l,set:Il}),js=t=>t,Rr=t=>Reflect.getPrototypeOf(t);function Kn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(e!==i&&Se(s,"get",e),Se(s,"get",i));const{has:o}=Rr(s),c=r?js:n?zs:Sn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function qn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(t!==s&&Se(r,"has",t),Se(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Gn(t,e=!1){return t=t.__v_raw,!e&&Se(G(t),"iterate",xt),Reflect.get(t,"size",t)}function Ei(t){t=G(t);const e=G(this);return Rr(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function Ii(t,e){e=G(e);const n=G(this),{has:r,get:s}=Rr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Cn(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function wi(t){const e=G(this),{has:n,get:r}=Rr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function Ti(){const t=G(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function Jn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=G(o),a=e?js:t?zs:Sn;return!t&&Se(c,"iterate",xt),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function Yn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Gt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?js:e?zs:Sn;return!e&&Se(i,"iterate",a?us:xt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function ct(t){return function(...e){return t==="delete"?!1:this}}function Rl(){const t={get(i){return Kn(this,i)},get size(){return Gn(this)},has:qn,add:Ei,set:Ii,delete:wi,clear:Ti,forEach:Jn(!1,!1)},e={get(i){return Kn(this,i,!1,!0)},get size(){return Gn(this)},has:qn,add:Ei,set:Ii,delete:wi,clear:Ti,forEach:Jn(!1,!0)},n={get(i){return Kn(this,i,!0)},get size(){return Gn(this,!0)},has(i){return qn.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:Jn(!0,!1)},r={get(i){return Kn(this,i,!0,!0)},get size(){return Gn(this,!0)},has(i){return qn.call(this,i,!0)},add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear"),forEach:Jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yn(i,!1,!1),n[i]=Yn(i,!0,!1),e[i]=Yn(i,!1,!0),r[i]=Yn(i,!0,!0)}),[t,n,e,r]}const[Pl,Ol,kl,Nl]=Rl();function Vs(t,e){const n=e?t?Nl:kl:t?Ol:Pl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const Dl={get:Vs(!1,!1)},Ll={get:Vs(!1,!0)},Ml={get:Vs(!0,!1)},ra=new WeakMap,sa=new WeakMap,ia=new WeakMap,xl=new WeakMap;function Ul(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fl(t){return t.__v_skip||!Object.isExtensible(t)?0:Ul(Zc(t))}function Pr(t){return nn(t)?t:Ws(t,!1,na,Dl,ra)}function oa(t){return Ws(t,!1,Al,Ll,sa)}function aa(t){return Ws(t,!0,Sl,Ml,ia)}function Ws(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Fl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Jt(t){return nn(t)?Jt(t.__v_raw):!!(t&&t.__v_isReactive)}function nn(t){return!!(t&&t.__v_isReadonly)}function ur(t){return!!(t&&t.__v_isShallow)}function ca(t){return Jt(t)||nn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function la(t){return lr(t,"__v_skip",!0),t}const Sn=t=>ie(t)?Pr(t):t,zs=t=>ie(t)?aa(t):t;function ua(t){yt&&Le&&(t=G(t),Zo(t.dep||(t.dep=Bs())))}function fa(t,e){t=G(t);const n=t.dep;n&&fs(n)}function ye(t){return!!(t&&t.__v_isRef===!0)}function Bl(t){return da(t,!1)}function $l(t){return da(t,!0)}function da(t,e){return ye(t)?t:new Hl(t,e)}class Hl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Sn(e)}get value(){return ua(this),this._value}set value(e){const n=this.__v_isShallow||ur(e)||nn(e);e=n?e:G(e),Cn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Sn(e),fa(this))}}function Yt(t){return ye(t)?t.value:t}const jl={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ha(t){return Jt(t)?t:new Proxy(t,jl)}class Vl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new $s(e,()=>{this._dirty||(this._dirty=!0,fa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return ua(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Wl(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=Fe):(r=t.get,s=t.set),new Vl(r,s,i||!s,n)}function bt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Or(i,e,n)}return s}function Oe(t,e,n,r){if(V(t)){const i=bt(t,e,n,r);return i&&Wo(i)&&i.catch(o=>{Or(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Oe(t[i],e,n,r));return s}function Or(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){bt(a,null,10,[t,o,c]);return}}zl(t,n,s,r)}function zl(t,e,n,r=!0){console.error(t)}let An=!1,ds=!1;const ve=[];let Ke=0;const Xt=[];let Ze=null,kt=0;const pa=Promise.resolve();let Ks=null;function ga(t){const e=Ks||pa;return t?e.then(this?t.bind(this):t):e}function Kl(t){let e=Ke+1,n=ve.length;for(;e<n;){const r=e+n>>>1;Rn(ve[r])<t?e=r+1:n=r}return e}function qs(t){(!ve.length||!ve.includes(t,An&&t.allowRecurse?Ke+1:Ke))&&(t.id==null?ve.push(t):ve.splice(Kl(t.id),0,t),ma())}function ma(){!An&&!ds&&(ds=!0,Ks=pa.then(va))}function ql(t){const e=ve.indexOf(t);e>Ke&&ve.splice(e,1)}function Gl(t){F(t)?Xt.push(...t):(!Ze||!Ze.includes(t,t.allowRecurse?kt+1:kt))&&Xt.push(t),ma()}function Ci(t,e=An?Ke+1:0){for(;e<ve.length;e++){const n=ve[e];n&&n.pre&&(ve.splice(e,1),e--,n())}}function _a(t){if(Xt.length){const e=[...new Set(Xt)];if(Xt.length=0,Ze){Ze.push(...e);return}for(Ze=e,Ze.sort((n,r)=>Rn(n)-Rn(r)),kt=0;kt<Ze.length;kt++)Ze[kt]();Ze=null,kt=0}}const Rn=t=>t.id==null?1/0:t.id,Jl=(t,e)=>{const n=Rn(t)-Rn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function va(t){ds=!1,An=!0,ve.sort(Jl);const e=Fe;try{for(Ke=0;Ke<ve.length;Ke++){const n=ve[Ke];n&&n.active!==!1&&bt(n,null,14)}}finally{Ke=0,ve.length=0,_a(),An=!1,Ks=null,(ve.length||Xt.length)&&va()}}function Yl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ae;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||ae;p&&(s=n.map(_=>de(_)?_.trim():_)),h&&(s=n.map(os))}let c,a=r[c=jr(e)]||r[c=jr(Je(e))];!a&&i&&(a=r[c=jr(ln(e))]),a&&Oe(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Oe(l,t,6,s)}}function ya(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!V(t)){const a=l=>{const u=ya(l,e,!0);u&&(c=!0,fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ie(t)&&r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):fe(o,i),ie(t)&&r.set(t,o),o)}function kr(t,e){return!t||!wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,ln(e))||q(t,e))}let Re=null,Nr=null;function fr(t){const e=Re;return Re=t,Nr=t&&t.type.__scopeId||null,e}function ba(t){Nr=t}function Ea(){Nr=null}function ge(t,e=Re,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ui(-1);const i=fr(e);let o;try{o=t(...s)}finally{fr(i),r._d&&Ui(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Vr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:h,data:p,setupState:_,ctx:T,inheritAttrs:S}=t;let M,P;const N=fr(t);try{if(n.shapeFlag&4){const O=s||r;M=ze(u.call(O,O,h,i,_,p,T)),P=a}else{const O=e;M=ze(O.length>1?O(i,{attrs:a,slots:c,emit:l}):O(i,null)),P=e.props?a:Xl(a)}}catch(O){bn.length=0,Or(O,t,1),M=z(Be)}let H=M;if(P&&S!==!1){const O=Object.keys(P),{shapeFlag:Q}=H;O.length&&Q&7&&(o&&O.some(Ls)&&(P=Ql(P,o)),H=Tt(H,P))}return n.dirs&&(H=Tt(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),M=H,fr(N),M}const Xl=t=>{let e;for(const n in t)(n==="class"||n==="style"||wr(n))&&((e||(e={}))[n]=t[n]);return e},Ql=(t,e)=>{const n={};for(const r in t)(!Ls(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Si(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!kr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Si(r,o,l):!0:!!o;return!1}function Si(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!kr(n,i))return!0}return!1}function eu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tu=t=>t.__isSuspense;function nu(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Gl(t)}const Xn={};function tr(t,e,n){return Ia(t,e,n)}function Ia(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ae){var c;const a=dl()===((c=me)==null?void 0:c.scope)?me:null;let l,u=!1,h=!1;if(ye(t)?(l=()=>t.value,u=ur(t)):Jt(t)?(l=()=>t,r=!0):F(t)?(h=!0,u=t.some(O=>Jt(O)||ur(O)),l=()=>t.map(O=>{if(ye(O))return O.value;if(Jt(O))return Mt(O);if(V(O))return bt(O,a,2)})):V(t)?e?l=()=>bt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return p&&p(),Oe(t,a,3,[_])}:l=Fe,e&&r){const O=l;l=()=>Mt(O())}let p,_=O=>{p=N.onStop=()=>{bt(O,a,4)}},T;if(On)if(_=Fe,e?n&&Oe(e,a,3,[l(),h?[]:void 0,_]):l(),s==="sync"){const O=Xu();T=O.__watcherHandles||(O.__watcherHandles=[])}else return Fe;let S=h?new Array(t.length).fill(Xn):Xn;const M=()=>{if(N.active)if(e){const O=N.run();(r||u||(h?O.some((Q,ce)=>Cn(Q,S[ce])):Cn(O,S)))&&(p&&p(),Oe(e,a,3,[O,S===Xn?void 0:h&&S[0]===Xn?[]:S,_]),S=O)}else N.run()};M.allowRecurse=!!e;let P;s==="sync"?P=M:s==="post"?P=()=>Ce(M,a&&a.suspense):(M.pre=!0,a&&(M.id=a.uid),P=()=>qs(M));const N=new $s(l,P);e?n?M():S=N.run():s==="post"?Ce(N.run.bind(N),a&&a.suspense):N.run();const H=()=>{N.stop(),a&&a.scope&&Ms(a.scope.effects,N)};return T&&T.push(H),H}function ru(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?wa(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=me;rn(this);const c=Ia(s,i.bind(r),n);return o?rn(o):Ut(),c}function wa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Mt(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ye(t))Mt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Mt(t[n],e);else if(Tr(t)||Gt(t))t.forEach(n=>{Mt(n,e)});else if(Ko(t))for(const n in t)Mt(t[n],e);return t}function qm(t,e){const n=Re;if(n===null)return t;const r=Ur(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,c,a,l=ae]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&Mt(c),s.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l}))}return t}function St(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(un(),Oe(a,n,8,[t.el,c,t,e]),fn())}}function su(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pa(()=>{t.isMounted=!0}),Oa(()=>{t.isUnmounting=!0}),t}const Pe=[Function,Array],Ta={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pe,onEnter:Pe,onAfterEnter:Pe,onEnterCancelled:Pe,onBeforeLeave:Pe,onLeave:Pe,onAfterLeave:Pe,onLeaveCancelled:Pe,onBeforeAppear:Pe,onAppear:Pe,onAfterAppear:Pe,onAppearCancelled:Pe},iu={name:"BaseTransition",props:Ta,setup(t,{slots:e}){const n=Vu(),r=su();let s;return()=>{const i=e.default&&Sa(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==Be){o=S;break}}const c=G(t),{mode:a}=c;if(r.isLeaving)return Wr(o);const l=Ai(o);if(!l)return Wr(o);const u=hs(l,c,r,n);ps(l,u);const h=n.subTree,p=h&&Ai(h);let _=!1;const{getTransitionKey:T}=l.type;if(T){const S=T();s===void 0?s=S:S!==s&&(s=S,_=!0)}if(p&&p.type!==Be&&(!Nt(l,p)||_)){const S=hs(p,c,r,n);if(ps(p,S),a==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Wr(o);a==="in-out"&&l.type!==Be&&(S.delayLeave=(M,P,N)=>{const H=Ca(r,p);H[String(p.key)]=p,M._leaveCb=()=>{P(),M._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=N})}return o}}},ou=iu;function Ca(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function hs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:T,onBeforeAppear:S,onAppear:M,onAfterAppear:P,onAppearCancelled:N}=e,H=String(t.key),O=Ca(n,t),Q=(j,Z)=>{j&&Oe(j,r,9,Z)},ce=(j,Z)=>{const J=Z[1];Q(j,Z),F(j)?j.every(pe=>pe.length<=1)&&J():j.length<=1&&J()},he={mode:i,persisted:o,beforeEnter(j){let Z=c;if(!n.isMounted)if(s)Z=S||c;else return;j._leaveCb&&j._leaveCb(!0);const J=O[H];J&&Nt(t,J)&&J.el._leaveCb&&J.el._leaveCb(),Q(Z,[j])},enter(j){let Z=a,J=l,pe=u;if(!n.isMounted)if(s)Z=M||a,J=P||l,pe=N||u;else return;let D=!1;const ee=j._enterCb=Ee=>{D||(D=!0,Ee?Q(pe,[j]):Q(J,[j]),he.delayedLeave&&he.delayedLeave(),j._enterCb=void 0)};Z?ce(Z,[j,ee]):ee()},leave(j,Z){const J=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return Z();Q(h,[j]);let pe=!1;const D=j._leaveCb=ee=>{pe||(pe=!0,Z(),ee?Q(T,[j]):Q(_,[j]),j._leaveCb=void 0,O[J]===t&&delete O[J])};O[J]=t,p?ce(p,[j,D]):D()},clone(j){return hs(j,e,n,r)}};return he}function Wr(t){if(Dr(t))return t=Tt(t),t.children=null,t}function Ai(t){return Dr(t)?t.children?t.children[0]:void 0:t}function ps(t,e){t.shapeFlag&6&&t.component?ps(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Sa(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===We?(o.patchFlag&128&&s++,r=r.concat(Sa(o.children,e,c))):(e||o.type!==Be)&&r.push(c!=null?Tt(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Aa(t,e){return V(t)?(()=>fe({name:t.name},e,{setup:t}))():t}const nr=t=>!!t.type.__asyncLoader,Dr=t=>t.type.__isKeepAlive;function au(t,e){Ra(t,"a",e)}function cu(t,e){Ra(t,"da",e)}function Ra(t,e,n=me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Lr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dr(s.parent.vnode)&&lu(r,e,n,s),s=s.parent}}function lu(t,e,n,r){const s=Lr(e,t,r,!0);ka(()=>{Ms(r[e],s)},n)}function Lr(t,e,n=me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;un(),rn(n);const c=Oe(e,n,t,o);return Ut(),fn(),c});return r?s.unshift(i):s.push(i),i}}const ot=t=>(e,n=me)=>(!On||t==="sp")&&Lr(t,(...r)=>e(...r),n),uu=ot("bm"),Pa=ot("m"),fu=ot("bu"),du=ot("u"),Oa=ot("bum"),ka=ot("um"),hu=ot("sp"),pu=ot("rtg"),gu=ot("rtc");function mu(t,e=me){Lr("ec",t,e)}const Na="components";function Me(t,e){return vu(Na,t,!0,e)||t}const _u=Symbol.for("v-ndc");function vu(t,e,n=!0,r=!1){const s=Re||me;if(s){const i=s.type;if(t===Na){const c=Gu(i,!1);if(c&&(c===e||c===Je(e)||c===Sr(Je(e))))return i}const o=Ri(s[t]||i[t],e)||Ri(s.appContext[t],e);return!o&&r?i:o}}function Ri(t,e){return t&&(t[e]||t[Je(e)]||t[Sr(Je(e))])}function Gm(t,e,n,r){let s;const i=n&&n[r];if(F(t)||de(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,a=o.length;c<a;c++){const l=o[c];s[c]=e(t[l],l,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}const gs=t=>t?Va(t)?Ur(t)||t.proxy:gs(t.parent):null,yn=fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gs(t.parent),$root:t=>gs(t.root),$emit:t=>t.emit,$options:t=>Gs(t),$forceUpdate:t=>t.f||(t.f=()=>qs(t.update)),$nextTick:t=>t.n||(t.n=ga.bind(t.proxy)),$watch:t=>ru.bind(t)}),zr=(t,e)=>t!==ae&&!t.__isScriptSetup&&q(t,e),yu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(zr(r,e))return o[e]=1,r[e];if(s!==ae&&q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,i[e];if(n!==ae&&q(n,e))return o[e]=4,n[e];ms&&(o[e]=0)}}const u=yn[e];let h,p;if(u)return e==="$attrs"&&Se(t,"get",e),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==ae&&q(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return zr(s,e)?(s[e]=n,!0):r!==ae&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ae&&q(t,o)||zr(e,o)||(c=i[0])&&q(c,o)||q(r,o)||q(yn,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ms=!0;function bu(t){const e=Gs(t),n=t.proxy,r=t.ctx;ms=!1,e.beforeCreate&&Oi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:_,updated:T,activated:S,deactivated:M,beforeDestroy:P,beforeUnmount:N,destroyed:H,unmounted:O,render:Q,renderTracked:ce,renderTriggered:he,errorCaptured:j,serverPrefetch:Z,expose:J,inheritAttrs:pe,components:D,directives:ee,filters:Ee}=e;if(l&&Eu(l,r,null),o)for(const re in o){const Y=o[re];V(Y)&&(r[re]=Y.bind(n))}if(s){const re=s.call(n,n);ie(re)&&(t.data=Pr(re))}if(ms=!0,i)for(const re in i){const Y=i[re],Xe=V(Y)?Y.bind(n,n):V(Y.get)?Y.get.bind(n,n):Fe,at=!V(Y)&&V(Y.set)?Y.set.bind(n):Fe,He=xe({get:Xe,set:at});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>He.value,set:Te=>He.value=Te})}if(c)for(const re in c)Da(c[re],r,n,re);if(a){const re=V(a)?a.call(n):a;Reflect.ownKeys(re).forEach(Y=>{rr(Y,re[Y])})}u&&Oi(u,t,"c");function le(re,Y){F(Y)?Y.forEach(Xe=>re(Xe.bind(n))):Y&&re(Y.bind(n))}if(le(uu,h),le(Pa,p),le(fu,_),le(du,T),le(au,S),le(cu,M),le(mu,j),le(gu,ce),le(pu,he),le(Oa,N),le(ka,O),le(hu,Z),F(J))if(J.length){const re=t.exposed||(t.exposed={});J.forEach(Y=>{Object.defineProperty(re,Y,{get:()=>n[Y],set:Xe=>n[Y]=Xe})})}else t.exposed||(t.exposed={});Q&&t.render===Fe&&(t.render=Q),pe!=null&&(t.inheritAttrs=pe),D&&(t.components=D),ee&&(t.directives=ee)}function Eu(t,e,n=Fe){F(t)&&(t=_s(t));for(const r in t){const s=t[r];let i;ie(s)?"default"in s?i=nt(s.from||r,s.default,!0):i=nt(s.from||r):i=nt(s),ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Oi(t,e,n){Oe(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Da(t,e,n,r){const s=r.includes(".")?wa(n,r):()=>n[r];if(de(t)){const i=e[t];V(i)&&tr(s,i)}else if(V(t))tr(s,t.bind(n));else if(ie(t))if(F(t))t.forEach(i=>Da(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&tr(s,i,t)}}function Gs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>dr(a,l,o,!0)),dr(a,e,o)),ie(e)&&i.set(e,a),a}function dr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&dr(t,i,n,!0),s&&s.forEach(o=>dr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Iu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Iu={data:ki,props:Ni,emits:Ni,methods:vn,computed:vn,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:vn,directives:vn,watch:Tu,provide:ki,inject:wu};function ki(t,e){return e?t?function(){return fe(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function wu(t,e){return vn(_s(t),_s(e))}function _s(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?fe(Object.create(null),t,e):e}function Ni(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:fe(Object.create(null),Pi(t),Pi(e??{})):e}function Tu(t,e){if(!t)return e;if(!e)return t;const n=fe(Object.create(null),t);for(const r in e)n[r]=Ie(t[r],e[r]);return n}function La(){return{app:null,config:{isNativeTag:Yc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cu=0;function Su(t,e){return function(r,s=null){V(r)||(r=fe({},r)),s!=null&&!ie(s)&&(s=null);const i=La(),o=new Set;let c=!1;const a=i.app={_uid:Cu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Qu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(a,...u)):V(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const p=z(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,h),c=!0,a._container=l,l.__vue_app__=a,Ur(p.component)||p.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){hr=a;try{return l()}finally{hr=null}}};return a}}let hr=null;function rr(t,e){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[t]=e}}function nt(t,e,n=!1){const r=me||Re;if(r||hr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:hr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r&&r.proxy):e}}function Au(t,e,n,r=!1){const s={},i={};lr(i,xr,1),t.propsDefaults=Object.create(null),Ma(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:oa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ru(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=G(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(kr(t.emitsOptions,p))continue;const _=e[p];if(a)if(q(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const T=Je(p);s[T]=vs(a,c,T,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Ma(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!q(e,h)&&((u=ln(h))===h||!q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=vs(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!q(e,h))&&(delete i[h],l=!0)}l&&rt(t,"set","$attrs")}function Ma(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Zn(a))continue;const l=e[a];let u;s&&q(s,u=Je(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:kr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=G(n),l=c||ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=vs(s,a,h,l[h],t,!q(l,h))}}return o}function vs(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=q(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(rn(s),r=l[n]=a.call(null,e),Ut())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===ln(n))&&(r=!0))}return r}function xa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!V(t)){const u=h=>{a=!0;const[p,_]=xa(h,e,!0);fe(o,p),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return ie(t)&&r.set(t,qt),qt;if(F(i))for(let u=0;u<i.length;u++){const h=Je(i[u]);Di(h)&&(o[h]=ae)}else if(i)for(const u in i){const h=Je(u);if(Di(h)){const p=i[u],_=o[h]=F(p)||V(p)?{type:p}:fe({},p);if(_){const T=xi(Boolean,_.type),S=xi(String,_.type);_[0]=T>-1,_[1]=S<0||T<S,(T>-1||q(_,"default"))&&c.push(h)}}}const l=[o,c];return ie(t)&&r.set(t,l),l}function Di(t){return t[0]!=="$"}function Li(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Mi(t,e){return Li(t)===Li(e)}function xi(t,e){return F(e)?e.findIndex(n=>Mi(n,t)):V(e)&&Mi(e,t)?0:-1}const Ua=t=>t[0]==="_"||t==="$stable",Js=t=>F(t)?t.map(ze):[ze(t)],Pu=(t,e,n)=>{if(e._n)return e;const r=ge((...s)=>Js(e(...s)),n);return r._c=!1,r},Fa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ua(s))continue;const i=t[s];if(V(i))e[s]=Pu(s,i,r);else if(i!=null){const o=Js(i);e[s]=()=>o}}},Ba=(t,e)=>{const n=Js(e);t.slots.default=()=>n},Ou=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),lr(e,"_",n)):Fa(e,t.slots={})}else t.slots={},e&&Ba(t,e);lr(t.slots,xr,1)},ku=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ae;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(fe(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Fa(e,s)),o=e}else e&&(Ba(t,e),o={default:1});if(i)for(const c in s)!Ua(c)&&!(c in o)&&delete s[c]};function ys(t,e,n,r,s=!1){if(F(t)){t.forEach((p,_)=>ys(p,e&&(F(e)?e[_]:e),n,r,s));return}if(nr(r)&&!s)return;const i=r.shapeFlag&4?Ur(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===ae?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(de(l)?(u[l]=null,q(h,l)&&(h[l]=null)):ye(l)&&(l.value=null)),V(a))bt(a,c,12,[o,u]);else{const p=de(a),_=ye(a);if(p||_){const T=()=>{if(t.f){const S=p?q(h,a)?h[a]:u[a]:a.value;s?F(S)&&Ms(S,i):F(S)?S.includes(i)||S.push(i):p?(u[a]=[i],q(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else p?(u[a]=o,q(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,Ce(T,n)):T()}}}const Ce=nu;function Nu(t){return Du(t)}function Du(t,e){const n=as();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:_=Fe,insertStaticContent:T}=t,S=(f,d,g,m=null,y=null,b=null,A=!1,I=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!Nt(f,d)&&(m=v(f),Te(f,y,b,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:x,shapeFlag:k}=d;switch(E){case Mr:M(f,d,g,m);break;case Be:P(f,d,g,m);break;case Kr:f==null&&N(d,g,m,A);break;case We:D(f,d,g,m,y,b,A,I,w);break;default:k&1?Q(f,d,g,m,y,b,A,I,w):k&6?ee(f,d,g,m,y,b,A,I,w):(k&64||k&128)&&E.process(f,d,g,m,y,b,A,I,w,C)}x!=null&&y&&ys(x,f&&f.ref,b,d||f,!d)},M=(f,d,g,m)=>{if(f==null)r(d.el=c(d.children),g,m);else{const y=d.el=f.el;d.children!==f.children&&l(y,d.children)}},P=(f,d,g,m)=>{f==null?r(d.el=a(d.children||""),g,m):d.el=f.el},N=(f,d,g,m)=>{[f.el,f.anchor]=T(f.children,d,g,m,f.el,f.anchor)},H=({el:f,anchor:d},g,m)=>{let y;for(;f&&f!==d;)y=p(f),r(f,g,m),f=y;r(d,g,m)},O=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),s(f),f=g;s(d)},Q=(f,d,g,m,y,b,A,I,w)=>{A=A||d.type==="svg",f==null?ce(d,g,m,y,b,A,I,w):Z(f,d,y,b,A,I,w)},ce=(f,d,g,m,y,b,A,I)=>{let w,E;const{type:x,props:k,shapeFlag:U,transition:B,dirs:K}=f;if(w=f.el=o(f.type,b,k&&k.is,k),U&8?u(w,f.children):U&16&&j(f.children,w,null,m,y,b&&x!=="foreignObject",A,I),K&&St(f,null,m,"created"),he(w,f,f.scopeId,A,m),k){for(const ne in k)ne!=="value"&&!Zn(ne)&&i(w,ne,null,k[ne],b,f.children,m,y,_e);"value"in k&&i(w,"value",null,k.value),(E=k.onVnodeBeforeMount)&&Ve(E,m,f)}K&&St(f,null,m,"beforeMount");const oe=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;oe&&B.beforeEnter(w),r(w,d,g),((E=k&&k.onVnodeMounted)||oe||K)&&Ce(()=>{E&&Ve(E,m,f),oe&&B.enter(w),K&&St(f,null,m,"mounted")},y)},he=(f,d,g,m,y)=>{if(g&&_(f,g),m)for(let b=0;b<m.length;b++)_(f,m[b]);if(y){let b=y.subTree;if(d===b){const A=y.vnode;he(f,A,A.scopeId,A.slotScopeIds,y.parent)}}},j=(f,d,g,m,y,b,A,I,w=0)=>{for(let E=w;E<f.length;E++){const x=f[E]=I?ht(f[E]):ze(f[E]);S(null,x,d,g,m,y,b,A,I)}},Z=(f,d,g,m,y,b,A)=>{const I=d.el=f.el;let{patchFlag:w,dynamicChildren:E,dirs:x}=d;w|=f.patchFlag&16;const k=f.props||ae,U=d.props||ae;let B;g&&At(g,!1),(B=U.onVnodeBeforeUpdate)&&Ve(B,g,d,f),x&&St(d,f,g,"beforeUpdate"),g&&At(g,!0);const K=y&&d.type!=="foreignObject";if(E?J(f.dynamicChildren,E,I,g,m,K,b):A||Y(f,d,I,null,g,m,K,b,!1),w>0){if(w&16)pe(I,d,k,U,g,m,y);else if(w&2&&k.class!==U.class&&i(I,"class",null,U.class,y),w&4&&i(I,"style",k.style,U.style,y),w&8){const oe=d.dynamicProps;for(let ne=0;ne<oe.length;ne++){const ue=oe[ne],ke=k[ue],Vt=U[ue];(Vt!==ke||ue==="value")&&i(I,ue,ke,Vt,y,f.children,g,m,_e)}}w&1&&f.children!==d.children&&u(I,d.children)}else!A&&E==null&&pe(I,d,k,U,g,m,y);((B=U.onVnodeUpdated)||x)&&Ce(()=>{B&&Ve(B,g,d,f),x&&St(d,f,g,"updated")},m)},J=(f,d,g,m,y,b,A)=>{for(let I=0;I<d.length;I++){const w=f[I],E=d[I],x=w.el&&(w.type===We||!Nt(w,E)||w.shapeFlag&70)?h(w.el):g;S(w,E,x,null,m,y,b,A,!0)}},pe=(f,d,g,m,y,b,A)=>{if(g!==m){if(g!==ae)for(const I in g)!Zn(I)&&!(I in m)&&i(f,I,g[I],null,A,d.children,y,b,_e);for(const I in m){if(Zn(I))continue;const w=m[I],E=g[I];w!==E&&I!=="value"&&i(f,I,E,w,A,d.children,y,b,_e)}"value"in m&&i(f,"value",g.value,m.value)}},D=(f,d,g,m,y,b,A,I,w)=>{const E=d.el=f?f.el:c(""),x=d.anchor=f?f.anchor:c("");let{patchFlag:k,dynamicChildren:U,slotScopeIds:B}=d;B&&(I=I?I.concat(B):B),f==null?(r(E,g,m),r(x,g,m),j(d.children,g,x,y,b,A,I,w)):k>0&&k&64&&U&&f.dynamicChildren?(J(f.dynamicChildren,U,g,y,b,A,I),(d.key!=null||y&&d===y.subTree)&&$a(f,d,!0)):Y(f,d,g,x,y,b,A,I,w)},ee=(f,d,g,m,y,b,A,I,w)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?y.ctx.activate(d,g,m,A,w):Ee(d,g,m,y,b,A,w):Ye(f,d,w)},Ee=(f,d,g,m,y,b,A)=>{const I=f.component=ju(f,m,y);if(Dr(f)&&(I.ctx.renderer=C),Wu(I),I.asyncDep){if(y&&y.registerDep(I,le),!f.el){const w=I.subTree=z(Be);P(null,w,d,g)}return}le(I,f,d,g,y,b,A)},Ye=(f,d,g)=>{const m=d.component=f.component;if(Zl(f,d,g))if(m.asyncDep&&!m.asyncResolved){re(m,d,g);return}else m.next=d,ql(m.update),m.update();else d.el=f.el,m.vnode=d},le=(f,d,g,m,y,b,A)=>{const I=()=>{if(f.isMounted){let{next:x,bu:k,u:U,parent:B,vnode:K}=f,oe=x,ne;At(f,!1),x?(x.el=K.el,re(f,x,A)):x=K,k&&er(k),(ne=x.props&&x.props.onVnodeBeforeUpdate)&&Ve(ne,B,x,K),At(f,!0);const ue=Vr(f),ke=f.subTree;f.subTree=ue,S(ke,ue,h(ke.el),v(ke),f,y,b),x.el=ue.el,oe===null&&eu(f,ue.el),U&&Ce(U,y),(ne=x.props&&x.props.onVnodeUpdated)&&Ce(()=>Ve(ne,B,x,K),y)}else{let x;const{el:k,props:U}=d,{bm:B,m:K,parent:oe}=f,ne=nr(d);if(At(f,!1),B&&er(B),!ne&&(x=U&&U.onVnodeBeforeMount)&&Ve(x,oe,d),At(f,!0),k&&X){const ue=()=>{f.subTree=Vr(f),X(k,f.subTree,f,y,null)};ne?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ue()):ue()}else{const ue=f.subTree=Vr(f);S(null,ue,g,m,f,y,b),d.el=ue.el}if(K&&Ce(K,y),!ne&&(x=U&&U.onVnodeMounted)){const ue=d;Ce(()=>Ve(x,oe,ue),y)}(d.shapeFlag&256||oe&&nr(oe.vnode)&&oe.vnode.shapeFlag&256)&&f.a&&Ce(f.a,y),f.isMounted=!0,d=g=m=null}},w=f.effect=new $s(I,()=>qs(E),f.scope),E=f.update=()=>w.run();E.id=f.uid,At(f,!0),E()},re=(f,d,g)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,Ru(f,d.props,m,g),ku(f,d.children,g),un(),Ci(),fn()},Y=(f,d,g,m,y,b,A,I,w=!1)=>{const E=f&&f.children,x=f?f.shapeFlag:0,k=d.children,{patchFlag:U,shapeFlag:B}=d;if(U>0){if(U&128){at(E,k,g,m,y,b,A,I,w);return}else if(U&256){Xe(E,k,g,m,y,b,A,I,w);return}}B&8?(x&16&&_e(E,y,b),k!==E&&u(g,k)):x&16?B&16?at(E,k,g,m,y,b,A,I,w):_e(E,y,b,!0):(x&8&&u(g,""),B&16&&j(k,g,m,y,b,A,I,w))},Xe=(f,d,g,m,y,b,A,I,w)=>{f=f||qt,d=d||qt;const E=f.length,x=d.length,k=Math.min(E,x);let U;for(U=0;U<k;U++){const B=d[U]=w?ht(d[U]):ze(d[U]);S(f[U],B,g,null,y,b,A,I,w)}E>x?_e(f,y,b,!0,!1,k):j(d,g,m,y,b,A,I,w,k)},at=(f,d,g,m,y,b,A,I,w)=>{let E=0;const x=d.length;let k=f.length-1,U=x-1;for(;E<=k&&E<=U;){const B=f[E],K=d[E]=w?ht(d[E]):ze(d[E]);if(Nt(B,K))S(B,K,g,null,y,b,A,I,w);else break;E++}for(;E<=k&&E<=U;){const B=f[k],K=d[U]=w?ht(d[U]):ze(d[U]);if(Nt(B,K))S(B,K,g,null,y,b,A,I,w);else break;k--,U--}if(E>k){if(E<=U){const B=U+1,K=B<x?d[B].el:m;for(;E<=U;)S(null,d[E]=w?ht(d[E]):ze(d[E]),g,K,y,b,A,I,w),E++}}else if(E>U)for(;E<=k;)Te(f[E],y,b,!0),E++;else{const B=E,K=E,oe=new Map;for(E=K;E<=U;E++){const Ae=d[E]=w?ht(d[E]):ze(d[E]);Ae.key!=null&&oe.set(Ae.key,E)}let ne,ue=0;const ke=U-K+1;let Vt=!1,hi=0;const hn=new Array(ke);for(E=0;E<ke;E++)hn[E]=0;for(E=B;E<=k;E++){const Ae=f[E];if(ue>=ke){Te(Ae,y,b,!0);continue}let je;if(Ae.key!=null)je=oe.get(Ae.key);else for(ne=K;ne<=U;ne++)if(hn[ne-K]===0&&Nt(Ae,d[ne])){je=ne;break}je===void 0?Te(Ae,y,b,!0):(hn[je-K]=E+1,je>=hi?hi=je:Vt=!0,S(Ae,d[je],g,null,y,b,A,I,w),ue++)}const pi=Vt?Lu(hn):qt;for(ne=pi.length-1,E=ke-1;E>=0;E--){const Ae=K+E,je=d[Ae],gi=Ae+1<x?d[Ae+1].el:m;hn[E]===0?S(null,je,g,gi,y,b,A,I,w):Vt&&(ne<0||E!==pi[ne]?He(je,g,gi,2):ne--)}}},He=(f,d,g,m,y=null)=>{const{el:b,type:A,transition:I,children:w,shapeFlag:E}=f;if(E&6){He(f.component.subTree,d,g,m);return}if(E&128){f.suspense.move(d,g,m);return}if(E&64){A.move(f,d,g,C);return}if(A===We){r(b,d,g);for(let k=0;k<w.length;k++)He(w[k],d,g,m);r(f.anchor,d,g);return}if(A===Kr){H(f,d,g);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(b),r(b,d,g),Ce(()=>I.enter(b),y);else{const{leave:k,delayLeave:U,afterLeave:B}=I,K=()=>r(b,d,g),oe=()=>{k(b,()=>{K(),B&&B()})};U?U(b,K,oe):oe()}else r(b,d,g)},Te=(f,d,g,m=!1,y=!1)=>{const{type:b,props:A,ref:I,children:w,dynamicChildren:E,shapeFlag:x,patchFlag:k,dirs:U}=f;if(I!=null&&ys(I,null,g,f,!0),x&256){d.ctx.deactivate(f);return}const B=x&1&&U,K=!nr(f);let oe;if(K&&(oe=A&&A.onVnodeBeforeUnmount)&&Ve(oe,d,f),x&6)zn(f.component,g,m);else{if(x&128){f.suspense.unmount(g,m);return}B&&St(f,null,d,"beforeUnmount"),x&64?f.type.remove(f,d,g,y,C,m):E&&(b!==We||k>0&&k&64)?_e(E,d,g,!1,!0):(b===We&&k&384||!y&&x&16)&&_e(w,d,g),m&&Ht(f)}(K&&(oe=A&&A.onVnodeUnmounted)||B)&&Ce(()=>{oe&&Ve(oe,d,f),B&&St(f,null,d,"unmounted")},g)},Ht=f=>{const{type:d,el:g,anchor:m,transition:y}=f;if(d===We){jt(g,m);return}if(d===Kr){O(f);return}const b=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:I}=y,w=()=>A(g,b);I?I(f.el,b,w):w()}else b()},jt=(f,d)=>{let g;for(;f!==d;)g=p(f),s(f),f=g;s(d)},zn=(f,d,g)=>{const{bum:m,scope:y,update:b,subTree:A,um:I}=f;m&&er(m),y.stop(),b&&(b.active=!1,Te(A,f,d,g)),I&&Ce(I,d),Ce(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},_e=(f,d,g,m=!1,y=!1,b=0)=>{for(let A=b;A<f.length;A++)Te(f[A],d,g,m,y)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),R=(f,d,g)=>{f==null?d._vnode&&Te(d._vnode,null,null,!0):S(d._vnode||null,f,d,null,null,null,g),Ci(),_a(),d._vnode=f},C={p:S,um:Te,m:He,r:Ht,mt:Ee,mc:j,pc:Y,pbc:J,n:v,o:t};let L,X;return e&&([L,X]=e(C)),{render:R,hydrate:L,createApp:Su(R,L)}}function At({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function $a(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ht(s[i]),c.el=o.el),n||$a(o,c)),c.type===Mr&&(c.el=o.el)}}function Lu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Mu=t=>t.__isTeleport,We=Symbol.for("v-fgt"),Mr=Symbol.for("v-txt"),Be=Symbol.for("v-cmt"),Kr=Symbol.for("v-stc"),bn=[];let Ue=null;function Qt(t=!1){bn.push(Ue=t?null:[])}function xu(){bn.pop(),Ue=bn[bn.length-1]||null}let Pn=1;function Ui(t){Pn+=t}function Ha(t){return t.dynamicChildren=Pn>0?Ue||qt:null,xu(),Pn>0&&Ue&&Ue.push(t),t}function Ys(t,e,n,r,s,i){return Ha(W(t,e,n,r,s,i,!0))}function bs(t,e,n,r,s){return Ha(z(t,e,n,r,s,!0))}function Es(t){return t?t.__v_isVNode===!0:!1}function Nt(t,e){return t.type===e.type&&t.key===e.key}const xr="__vInternal",ja=({key:t})=>t??null,sr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||ye(t)||V(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,r=0,s=null,i=t===We?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ja(e),ref:e&&sr(e),scopeId:Nr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return c?(Xs(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=de(n)?8:16),Pn>0&&!o&&Ue&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ue.push(a),a}const z=Uu;function Uu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===_u)&&(t=Be),Es(t)){const c=Tt(t,e,!0);return n&&Xs(c,n),Pn>0&&!i&&Ue&&(c.shapeFlag&6?Ue[Ue.indexOf(t)]=c:Ue.push(c)),c.patchFlag|=-2,c}if(Ju(t)&&(t=t.__vccOpts),e){e=Fu(e);let{class:c,style:a}=e;c&&!de(c)&&(e.class=Fs(c)),ie(a)&&(ca(a)&&!F(a)&&(a=fe({},a)),e.style=Us(a))}const o=de(t)?1:tu(t)?128:Mu(t)?64:ie(t)?4:V(t)?2:0;return W(t,e,n,r,s,o,i,!0)}function Fu(t){return t?ca(t)||xr in t?fe({},t):t:null}function Tt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?Bu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ja(c),ref:e&&e.ref?n&&s?F(s)?s.concat(sr(e)):[s,sr(e)]:sr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tt(t.ssContent),ssFallback:t.ssFallback&&Tt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function we(t=" ",e=0){return z(Mr,null,t,e)}function Fi(t="",e=!1){return e?(Qt(),bs(Be,null,t)):z(Be,null,t)}function ze(t){return t==null||typeof t=="boolean"?z(Be):F(t)?z(We,null,t.slice()):typeof t=="object"?ht(t):z(Mr,null,String(t))}function ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tt(t)}function Xs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(xr in e)?e._ctx=Re:s===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),r&64?(n=16,e=[we(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Fs([e.class,r.class]));else if(s==="style")e.style=Us([e.style,r.style]);else if(wr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ve(t,e,n,r=null){Oe(t,e,7,[n,r])}const $u=La();let Hu=0;function ju(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$u,i={uid:Hu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ul(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xa(r,s),emitsOptions:ya(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Yl.bind(null,i),t.ce&&t.ce(i),i}let me=null;const Vu=()=>me||Re;let Qs,Wt,Bi="__VUE_INSTANCE_SETTERS__";(Wt=as()[Bi])||(Wt=as()[Bi]=[]),Wt.push(t=>me=t),Qs=t=>{Wt.length>1?Wt.forEach(e=>e(t)):Wt[0](t)};const rn=t=>{Qs(t),t.scope.on()},Ut=()=>{me&&me.scope.off(),Qs(null)};function Va(t){return t.vnode.shapeFlag&4}let On=!1;function Wu(t,e=!1){On=e;const{props:n,children:r}=t.vnode,s=Va(t);Au(t,n,s,e),Ou(t,r);const i=s?zu(t,e):void 0;return On=!1,i}function zu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=la(new Proxy(t.ctx,yu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?qu(t):null;rn(t),un();const i=bt(r,t,0,[t.props,s]);if(fn(),Ut(),Wo(i)){if(i.then(Ut,Ut),e)return i.then(o=>{$i(t,o,e)}).catch(o=>{Or(o,t,0)});t.asyncDep=i}else $i(t,i,e)}else Wa(t,e)}function $i(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=ha(e)),Wa(t,n)}let Hi;function Wa(t,e,n){const r=t.type;if(!t.render){if(!e&&Hi&&!r.render){const s=r.template||Gs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=fe(fe({isCustomElement:i,delimiters:c},o),a);r.render=Hi(s,l)}}t.render=r.render||Fe}rn(t),un(),bu(t),fn(),Ut()}function Ku(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Se(t,"get","$attrs"),e[n]}}))}function qu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Ku(t)},slots:t.slots,emit:t.emit,expose:e}}function Ur(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ha(la(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yn)return yn[n](t)},has(e,n){return n in e||n in yn}}))}function Gu(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Ju(t){return V(t)&&"__vccOpts"in t}const xe=(t,e)=>Wl(t,e,On);function Zs(t,e,n){const r=arguments.length;return r===2?ie(e)&&!F(e)?Es(e)?z(t,null,[e]):z(t,e):z(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Es(n)&&(n=[n]),z(t,e,n))}const Yu=Symbol.for("v-scx"),Xu=()=>nt(Yu),Qu="3.3.4",Zu="http://www.w3.org/2000/svg",Dt=typeof document<"u"?document:null,ji=Dt&&Dt.createElement("template"),ef={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Dt.createElementNS(Zu,t):Dt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ji.innerHTML=r?`<svg>${t}</svg>`:t;const c=ji.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function tf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function nf(t,e,n){const r=t.style,s=de(n);if(n&&!s){if(e&&!de(e))for(const i in e)n[i]==null&&Is(r,i,"");for(const i in n)Is(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Vi=/\s*!important$/;function Is(t,e,n){if(F(n))n.forEach(r=>Is(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rf(t,e);Vi.test(n)?t.setProperty(ln(r),n.replace(Vi,""),"important"):t[r]=n}}const Wi=["Webkit","Moz","ms"],qr={};function rf(t,e){const n=qr[e];if(n)return n;let r=Je(e);if(r!=="filter"&&r in t)return qr[e]=r;r=Sr(r);for(let s=0;s<Wi.length;s++){const i=Wi[s]+r;if(i in t)return qr[e]=i}return e}const zi="http://www.w3.org/1999/xlink";function sf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zi,e.slice(6,e.length)):t.setAttributeNS(zi,e,n);else{const i=cl(e);n==null||i&&!qo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function of(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qo(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Lt(t,e,n,r){t.addEventListener(e,n,r)}function af(t,e,n,r){t.removeEventListener(e,n,r)}function cf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=lf(e);if(r){const l=i[e]=df(r,s);Lt(t,c,l,a)}else o&&(af(t,c,o,a),i[e]=void 0)}}const Ki=/(?:Once|Passive|Capture)$/;function lf(t){let e;if(Ki.test(t)){e={};let r;for(;r=t.match(Ki);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ln(t.slice(2)),e]}let Gr=0;const uf=Promise.resolve(),ff=()=>Gr||(uf.then(()=>Gr=0),Gr=Date.now());function df(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(hf(r,n.value),e,5,[r])};return n.value=t,n.attached=ff(),n}function hf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qi=/^on[a-z]/,pf=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?tf(t,r,s):e==="style"?nf(t,n,r):wr(e)?Ls(e)||cf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gf(t,e,r,s))?of(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sf(t,e,r,s))};function gf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&qi.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qi.test(e)&&de(n)?!1:e in t}const lt="transition",pn="animation",ei=(t,{slots:e})=>Zs(ou,mf(t),e);ei.displayName="Transition";const za={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ei.props=fe({},Ta,za);const Rt=(t,e=[])=>{F(t)?t.forEach(n=>n(...e)):t&&t(...e)},Gi=t=>t?F(t)?t.some(e=>e.length>1):t.length>1:!1;function mf(t){const e={};for(const D in t)D in za||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:u=c,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,T=_f(s),S=T&&T[0],M=T&&T[1],{onBeforeEnter:P,onEnter:N,onEnterCancelled:H,onLeave:O,onLeaveCancelled:Q,onBeforeAppear:ce=P,onAppear:he=N,onAppearCancelled:j=H}=e,Z=(D,ee,Ee)=>{Pt(D,ee?u:c),Pt(D,ee?l:o),Ee&&Ee()},J=(D,ee)=>{D._isLeaving=!1,Pt(D,h),Pt(D,_),Pt(D,p),ee&&ee()},pe=D=>(ee,Ee)=>{const Ye=D?he:N,le=()=>Z(ee,D,Ee);Rt(Ye,[ee,le]),Ji(()=>{Pt(ee,D?a:i),ut(ee,D?u:c),Gi(Ye)||Yi(ee,r,S,le)})};return fe(e,{onBeforeEnter(D){Rt(P,[D]),ut(D,i),ut(D,o)},onBeforeAppear(D){Rt(ce,[D]),ut(D,a),ut(D,l)},onEnter:pe(!1),onAppear:pe(!0),onLeave(D,ee){D._isLeaving=!0;const Ee=()=>J(D,ee);ut(D,h),bf(),ut(D,p),Ji(()=>{D._isLeaving&&(Pt(D,h),ut(D,_),Gi(O)||Yi(D,r,M,Ee))}),Rt(O,[D,Ee])},onEnterCancelled(D){Z(D,!1),Rt(H,[D])},onAppearCancelled(D){Z(D,!0),Rt(j,[D])},onLeaveCancelled(D){J(D),Rt(Q,[D])}})}function _f(t){if(t==null)return null;if(ie(t))return[Jr(t.enter),Jr(t.leave)];{const e=Jr(t);return[e,e]}}function Jr(t){return nl(t)}function ut(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Pt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ji(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vf=0;function Yi(t,e,n,r){const s=t._endId=++vf,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=yf(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,p),i()},p=_=>{_.target===t&&++u>=a&&h()};setTimeout(()=>{u<a&&h()},c+1),t.addEventListener(l,p)}function yf(t,e){const n=window.getComputedStyle(t),r=T=>(n[T]||"").split(", "),s=r(`${lt}Delay`),i=r(`${lt}Duration`),o=Xi(s,i),c=r(`${pn}Delay`),a=r(`${pn}Duration`),l=Xi(c,a);let u=null,h=0,p=0;e===lt?o>0&&(u=lt,h=o,p=i.length):e===pn?l>0&&(u=pn,h=l,p=a.length):(h=Math.max(o,l),u=h>0?o>l?lt:pn:null,p=u?u===lt?i.length:a.length:0);const _=u===lt&&/\b(transform|all)(,|$)/.test(r(`${lt}Property`).toString());return{type:u,timeout:h,propCount:p,hasTransform:_}}function Xi(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Qi(n)+Qi(t[r])))}function Qi(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function bf(){return document.body.offsetHeight}const pr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>er(e,n):e};function Ef(t){t.target.composing=!0}function Zi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=pr(s);const i=r||s.props&&s.props.type==="number";Lt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=os(c)),t._assign(c)}),n&&Lt(t,"change",()=>{t.value=t.value.trim()}),e||(Lt(t,"compositionstart",Ef),Lt(t,"compositionend",Zi),Lt(t,"change",Zi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=pr(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&os(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ym={deep:!0,created(t,e,n){t._assign=pr(n),Lt(t,"change",()=>{const r=t._modelValue,s=If(t),i=t.checked,o=t._assign;if(F(r)){const c=Go(r,s),a=c!==-1;if(i&&!a)o(r.concat(s));else if(!i&&a){const l=[...r];l.splice(c,1),o(l)}}else if(Tr(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Ka(t,i))})},mounted:eo,beforeUpdate(t,e,n){t._assign=pr(n),eo(t,e,n)}};function eo(t,{value:e,oldValue:n},r){t._modelValue=e,F(e)?t.checked=Go(e,r.props.value)>-1:Tr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Ar(e,Ka(t,!0)))}function If(t){return"_value"in t?t._value:t.value}function Ka(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const wf=["ctrl","shift","alt","meta"],Tf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>wf.some(n=>t[`${n}Key`]&&!e.includes(n))},Xm=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Tf[e[s]];if(i&&i(n,e))return}return t(n,...r)},Qm={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):gn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),gn(t,!0),r.enter(t)):r.leave(t,()=>{gn(t,!1)}):gn(t,e))},beforeUnmount(t,{value:e}){gn(t,e)}};function gn(t,e){t.style.display=e?t._vod:"none"}const Cf=fe({patchProp:pf},ef);let to;function Sf(){return to||(to=Nu(Cf))}const Af=(...t)=>{const e=Sf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Rf(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Rf(t){return de(t)?document.querySelector(t):t}const qa=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Pf={},Un=t=>(ba("data-v-152375bd"),t=t(),Ea(),t),Of={class:"container"},kf={class:"branding"},Nf={class:"nav-links"},Df={class:"profile",ref:"profile"},Lf=Un(()=>W("span",null,"this.$store.state.profileInitials",-1)),Mf={class:"profile-menu"},xf=Un(()=>W("div",{class:"info"},[W("p",{class:"initials"},"this.$store.state.profileInitials"),W("div",{class:"right"},[W("p",null,"this.$store.state.profileFirstName this.$store.state.profileLastName"),W("p",null,"this.$store.state.profileUsername"),W("p",null,"this.$store.state.profileEmail")])],-1)),Uf={class:"options"},Ff={class:"option"},Bf=Un(()=>W("p",null,"Profile",-1)),$f={class:"option"},Hf=Un(()=>W("p",null,"Admin",-1)),jf={class:"option"},Vf=Un(()=>W("p",null,"Sign Out",-1)),Wf={class:"mobile-nav"};function zf(t,e){const n=Me("router-link"),r=Me("userIcon"),s=Me("adminIcon"),i=Me("signOutIcon"),o=Me("menuIcon");return Qt(),Ys("header",null,[W("nav",Of,[W("div",kf,[z(n,{class:"header",to:{name:"Home"}},{default:ge(()=>[we("FireBlogs")]),_:1})]),W("div",Nf,[W("ul",null,[z(n,{class:"link",to:{name:"Home"}},{default:ge(()=>[we("Home")]),_:1}),z(n,{class:"link",to:{name:"Blogs"}},{default:ge(()=>[we("Blogs")]),_:1}),z(n,{class:"link",to:{name:"CreatePost"}},{default:ge(()=>[we("Create Post")]),_:1}),z(n,{class:"link",to:{name:"Login"}},{default:ge(()=>[we("Login/Register")]),_:1})]),W("div",Df,[Lf,W("div",Mf,[xf,W("div",Uf,[W("div",Ff,[z(n,{class:"option",to:{name:"Profile"}},{default:ge(()=>[z(r,{class:"icon"}),Bf]),_:1})]),W("div",$f,[z(n,{class:"option",to:{name:"Admin"}},{default:ge(()=>[z(s,{class:"icon"}),Hf]),_:1})]),W("div",jf,[z(i,{class:"icon"}),Vf])])])],512)])]),z(o,{class:"menu-icon"}),z(ei,{name:"mobile-nav"},{default:ge(()=>[W("ul",Wf,[z(n,{class:"link",to:{name:"Home"}},{default:ge(()=>[we("Home")]),_:1}),z(n,{class:"link",to:{name:"Blogs"}},{default:ge(()=>[we("Blogs")]),_:1}),z(n,{class:"link",to:{name:"CreatePost"}},{default:ge(()=>[we("Create Post")]),_:1}),z(n,{class:"link",to:{name:"Login"}},{default:ge(()=>[we("Login/Register")]),_:1})])]),_:1})])}const Kf=qa(Pf,[["render",zf],["__scopeId","data-v-152375bd"]]);const qf={},Gf=t=>(ba("data-v-1edad8a4"),t=t(),Ea(),t),Jf={class:"container"},Yf={class:"left"},Xf={class:"col-1"},Qf={href:"#"},Zf={href:"#"},ed={href:"#"},td={href:"#"},nd={class:"col-2"},rd=Gf(()=>W("div",{class:"right"},[W("p",null,"Copyright 2021 All Rights Reserved")],-1));function sd(t,e,n,r,s,i){const o=Me("router-link"),c=Me("youTube"),a=Me("twitter"),l=Me("instagram"),u=Me("linkedin");return Qt(),Ys("footer",null,[W("div",Jf,[W("div",Yf,[W("div",Xf,[z(o,{class:"header",to:{name:"Home"}},{default:ge(()=>[we("FireBlogs")]),_:1}),W("ul",null,[W("li",null,[W("a",Qf,[z(c,{class:"svg-icon"})])]),W("li",null,[W("a",Zf,[z(a,{class:"svg-icon"})])]),W("li",null,[W("a",ed,[z(l,{class:"svg-icon"})])]),W("li",null,[W("a",td,[z(u,{class:"svg-icon"})])])])]),W("div",nd,[W("ul",null,[z(o,{class:"link",to:{name:"Home"}},{default:ge(()=>[we("Home")]),_:1}),z(o,{class:"link",to:{name:"Blogs"}},{default:ge(()=>[we("Blogs")]),_:1}),t.admin?(Qt(),bs(o,{key:0,class:"link",to:{name:"CreatePost"}},{default:ge(()=>[we("Create Post")]),_:1})):Fi("",!0),t.user?Fi("",!0):(Qt(),bs(o,{key:1,class:"link",to:{name:"Login"}},{default:ge(()=>[we("Login In / Register")]),_:1}))])])]),rd])])}const id=qa(qf,[["render",sd],["__scopeId","data-v-1edad8a4"]]);const od={class:"app-wrapper"},ad={class:"app"},cd={__name:"App",setup(t){return(e,n)=>{const r=Me("router-view");return Qt(),Ys("div",od,[W("div",ad,[z(Kf),z(r),z(id)])])}}},ld="modulepreload",ud=function(t){return"/vue-blog-test/"+t},no={},Ne=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ud(i),i in no)return;no[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":ld,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof window<"u";function fd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Yr(t,e){const n={};for(const r in e){const s=e[r];n[r]=$e(s)?s.map(t):t(s)}return n}const En=()=>{},$e=Array.isArray,dd=/\/$/,hd=t=>t.replace(dd,"");function Xr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=_d(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function pd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ro(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&sn(e.matched[r],n.matched[s])&&Ga(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ga(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!md(t[n],e[n]))return!1;return!0}function md(t,e){return $e(t)?so(t,e):$e(e)?so(e,t):t===e}function so(t,e){return $e(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function _d(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var kn;(function(t){t.pop="pop",t.push="push"})(kn||(kn={}));var In;(function(t){t.back="back",t.forward="forward",t.unknown=""})(In||(In={}));function vd(t){if(!t)if(zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hd(t)}const yd=/^[^#]+#/;function bd(t,e){return t.replace(yd,"#")+e}function Ed(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Id(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ed(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function io(t,e){return(history.state?history.state.position-e:-1)+t}const ws=new Map;function wd(t,e){ws.set(t,e)}function Td(t){const e=ws.get(t);return ws.delete(t),e}let Cd=()=>location.protocol+"//"+location.host;function Ja(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),ro(a,"")}return ro(n,t)+r+s}function Sd(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const _=Ja(t,location),T=n.value,S=e.value;let M=0;if(p){if(n.value=_,e.value=p,o&&o===T){o=null;return}M=S?p.position-S.position:0}else r(_);s.forEach(P=>{P(n.value,T,{delta:M,type:kn.pop,direction:M?M>0?In.forward:In.back:In.unknown})})};function a(){o=n.value}function l(p){s.push(p);const _=()=>{const T=s.indexOf(p);T>-1&&s.splice(T,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:Fr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function oo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fr():null}}function Ad(t){const{history:e,location:n}=window,r={value:Ja(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Cd()+t+a;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(a,l){const u=te({},e.state,oo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=te({},s.value,e.state,{forward:a,scroll:Fr()});i(u.current,u,!0);const h=te({},oo(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Rd(t){t=vd(t);const e=Ad(t),n=Sd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:t,go:r,createHref:bd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Pd(t){return typeof t=="string"||t&&typeof t=="object"}function Ya(t){return typeof t=="string"||typeof t=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xa=Symbol("");var ao;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ao||(ao={}));function on(t,e){return te(new Error,{type:t,[Xa]:!0},e)}function Qe(t,e){return t instanceof Error&&Xa in t&&(e==null||!!(t.type&e))}const co="[^/]+?",Od={sensitive:!1,strict:!1,start:!0,end:!0},kd=/[.+*?^${}()[\]/\\]/g;function Nd(t,e){const n=te({},Od,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(kd,"\\$&"),_+=40;else if(p.type===1){const{value:T,repeatable:S,optional:M,regexp:P}=p;i.push({name:T,repeatable:S,optional:M});const N=P||co;if(N!==co){_+=10;try{new RegExp(`(${N})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${T}" (${N}): `+O.message)}}let H=S?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(H=M&&l.length<2?`(?:/${H})`:"/"+H),M&&(H+="?"),s+=H,_+=20,M&&(_+=-8),S&&(_+=-20),N===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",T=i[p-1];h[T.name]=_&&T.repeatable?_.split("/"):_}return h}function a(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:T,repeatable:S,optional:M}=_,P=T in l?l[T]:"";if($e(P)&&!S)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const N=$e(P)?P.join("/"):P;if(!N)if(M)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${T}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Dd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ld(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Dd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(lo(r))return 1;if(lo(s))return-1}return s.length-r.length}function lo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Md={type:0,value:""},xd=/[a-zA-Z0-9_]/;function Ud(t){if(!t)return[[]];if(t==="/")return[[Md]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:xd.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Fd(t,e,n){const r=Nd(Ud(t.path),n),s=te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Bd(t,e){const n=[],r=new Map;e=ho({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const _=!p,T=$d(u);T.aliasOf=p&&p.record;const S=ho(e,u),M=[T];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of H)M.push(te({},T,{components:p?p.record.components:T.components,path:O,aliasOf:p?p.record:T}))}let P,N;for(const H of M){const{path:O}=H;if(h&&O[0]!=="/"){const Q=h.record.path,ce=Q[Q.length-1]==="/"?"":"/";H.path=h.record.path+(O&&ce+O)}if(P=Fd(H,h,S),p?p.alias.push(P):(N=N||P,N!==P&&N.alias.push(P),_&&u.name&&!fo(P)&&o(u.name)),T.children){const Q=T.children;for(let ce=0;ce<Q.length;ce++)i(Q[ce],P,p&&p.children[ce])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&a(P)}return N?()=>{o(N)}:En}function o(u){if(Ya(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&Ld(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qa(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!fo(u)&&r.set(u.record.name,u)}function l(u,h){let p,_={},T,S;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw on(1,{location:u});S=p.record.name,_=te(uo(h.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&uo(u.params,p.keys.map(N=>N.name))),T=p.stringify(_)}else if("path"in u)T=u.path,p=n.find(N=>N.re.test(T)),p&&(_=p.parse(T),S=p.record.name);else{if(p=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!p)throw on(1,{location:u,currentLocation:h});S=p.record.name,_=te({},h.params,u.params),T=p.stringify(_)}const M=[];let P=p;for(;P;)M.unshift(P.record),P=P.parent;return{name:S,path:T,params:_,matched:M,meta:jd(M)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function uo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function $d(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Hd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Hd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function fo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jd(t){return t.reduce((e,n)=>te(e,n.meta),{})}function ho(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Qa(t,e){return e.children.some(n=>n===t||Qa(t,n))}const Za=/#/g,Vd=/&/g,Wd=/\//g,zd=/=/g,Kd=/\?/g,ec=/\+/g,qd=/%5B/g,Gd=/%5D/g,tc=/%5E/g,Jd=/%60/g,nc=/%7B/g,Yd=/%7C/g,rc=/%7D/g,Xd=/%20/g;function ti(t){return encodeURI(""+t).replace(Yd,"|").replace(qd,"[").replace(Gd,"]")}function Qd(t){return ti(t).replace(nc,"{").replace(rc,"}").replace(tc,"^")}function Ts(t){return ti(t).replace(ec,"%2B").replace(Xd,"+").replace(Za,"%23").replace(Vd,"%26").replace(Jd,"`").replace(nc,"{").replace(rc,"}").replace(tc,"^")}function Zd(t){return Ts(t).replace(zd,"%3D")}function eh(t){return ti(t).replace(Za,"%23").replace(Kd,"%3F")}function th(t){return t==null?"":eh(t).replace(Wd,"%2F")}function gr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function nh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ec," "),o=i.indexOf("="),c=gr(o<0?i:i.slice(0,o)),a=o<0?null:gr(i.slice(o+1));if(c in e){let l=e[c];$e(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function po(t){let e="";for(let n in t){const r=t[n];if(n=Zd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&Ts(i)):[r&&Ts(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function rh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$e(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const sh=Symbol(""),go=Symbol(""),ni=Symbol(""),sc=Symbol(""),Cs=Symbol("");function mn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(on(4,{from:n,to:e})):h instanceof Error?c(h):Pd(h)?c(on(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(l);t.length<3&&(u=u.then(a)),u.catch(h=>c(h))})}function Qr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ih(c)){const l=(c.__vccOpts||c)[e];l&&s.push(pt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=fd(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&pt(p,n,r,i,o)()}))}}return s}function ih(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mo(t){const e=nt(ni),n=nt(sc),r=xe(()=>e.resolve(Yt(t.to))),s=xe(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(sn.bind(null,u));if(p>-1)return p;const _=_o(a[l-2]);return l>1&&_o(u)===_&&h[h.length-1].path!==_?h.findIndex(sn.bind(null,a[l-2])):p}),i=xe(()=>s.value>-1&&lh(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&Ga(n.params,r.value.params));function c(a={}){return ch(a)?e[Yt(t.replace)?"replace":"push"](Yt(t.to)).catch(En):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const oh=Aa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mo,setup(t,{slots:e}){const n=Pr(mo(t)),{options:r}=nt(ni),s=xe(()=>({[vo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Zs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ah=oh;function ch(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$e(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function _o(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vo=(t,e,n)=>t??e??n,uh=Aa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nt(Cs),s=xe(()=>t.route||r.value),i=nt(go,0),o=xe(()=>{let l=Yt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=xe(()=>s.value.matched[o.value]);rr(go,xe(()=>o.value+1)),rr(sh,c),rr(Cs,s);const a=Bl();return tr(()=>[a.value,c.value,t.name],([l,u,h],[p,_,T])=>{u&&(u.instances[h]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!sn(u,_)||!p)&&(u.enterCallbacks[h]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,p=h&&h.components[u];if(!p)return yo(n.default,{Component:p,route:l});const _=h.props[u],T=_?_===!0?l.params:typeof _=="function"?_(l):_:null,M=Zs(p,te({},T,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return yo(n.default,{Component:M,route:l})||M}}});function yo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fh=uh;function dh(t){const e=Bd(t.routes,t),n=t.parseQuery||nh,r=t.stringifyQuery||po,s=t.history,i=mn(),o=mn(),c=mn(),a=$l(ft);let l=ft;zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yr.bind(null,v=>""+v),h=Yr.bind(null,th),p=Yr.bind(null,gr);function _(v,R){let C,L;return Ya(v)?(C=e.getRecordMatcher(v),L=R):L=v,e.addRoute(L,C)}function T(v){const R=e.getRecordMatcher(v);R&&e.removeRoute(R)}function S(){return e.getRoutes().map(v=>v.record)}function M(v){return!!e.getRecordMatcher(v)}function P(v,R){if(R=te({},R||a.value),typeof v=="string"){const g=Xr(n,v,R.path),m=e.resolve({path:g.path},R),y=s.createHref(g.fullPath);return te(g,m,{params:p(m.params),hash:gr(g.hash),redirectedFrom:void 0,href:y})}let C;if("path"in v)C=te({},v,{path:Xr(n,v.path,R.path).path});else{const g=te({},v.params);for(const m in g)g[m]==null&&delete g[m];C=te({},v,{params:h(g)}),R.params=h(R.params)}const L=e.resolve(C,R),X=v.hash||"";L.params=u(p(L.params));const f=pd(r,te({},v,{hash:Qd(X),path:L.path})),d=s.createHref(f);return te({fullPath:f,hash:X,query:r===po?rh(v.query):v.query||{}},L,{redirectedFrom:void 0,href:d})}function N(v){return typeof v=="string"?Xr(n,v,a.value.path):te({},v)}function H(v,R){if(l!==v)return on(8,{from:R,to:v})}function O(v){return he(v)}function Q(v){return O(te(N(v),{replace:!0}))}function ce(v){const R=v.matched[v.matched.length-1];if(R&&R.redirect){const{redirect:C}=R;let L=typeof C=="function"?C(v):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=N(L):{path:L},L.params={}),te({query:v.query,hash:v.hash,params:"path"in L?{}:v.params},L)}}function he(v,R){const C=l=P(v),L=a.value,X=v.state,f=v.force,d=v.replace===!0,g=ce(C);if(g)return he(te(N(g),{state:typeof g=="object"?te({},X,g.state):X,force:f,replace:d}),R||C);const m=C;m.redirectedFrom=R;let y;return!f&&gd(r,L,C)&&(y=on(16,{to:m,from:L}),He(L,L,!0,!1)),(y?Promise.resolve(y):J(m,L)).catch(b=>Qe(b)?Qe(b,2)?b:at(b):Y(b,m,L)).then(b=>{if(b){if(Qe(b,2))return he(te({replace:d},N(b.to),{state:typeof b.to=="object"?te({},X,b.to.state):X,force:f}),R||m)}else b=D(m,L,!0,d,X);return pe(m,L,b),b})}function j(v,R){const C=H(v,R);return C?Promise.reject(C):Promise.resolve()}function Z(v){const R=jt.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(v):v()}function J(v,R){let C;const[L,X,f]=hh(v,R);C=Qr(L.reverse(),"beforeRouteLeave",v,R);for(const g of L)g.leaveGuards.forEach(m=>{C.push(pt(m,v,R))});const d=j.bind(null,v,R);return C.push(d),_e(C).then(()=>{C=[];for(const g of i.list())C.push(pt(g,v,R));return C.push(d),_e(C)}).then(()=>{C=Qr(X,"beforeRouteUpdate",v,R);for(const g of X)g.updateGuards.forEach(m=>{C.push(pt(m,v,R))});return C.push(d),_e(C)}).then(()=>{C=[];for(const g of f)if(g.beforeEnter)if($e(g.beforeEnter))for(const m of g.beforeEnter)C.push(pt(m,v,R));else C.push(pt(g.beforeEnter,v,R));return C.push(d),_e(C)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),C=Qr(f,"beforeRouteEnter",v,R),C.push(d),_e(C))).then(()=>{C=[];for(const g of o.list())C.push(pt(g,v,R));return C.push(d),_e(C)}).catch(g=>Qe(g,8)?g:Promise.reject(g))}function pe(v,R,C){c.list().forEach(L=>Z(()=>L(v,R,C)))}function D(v,R,C,L,X){const f=H(v,R);if(f)return f;const d=R===ft,g=zt?history.state:{};C&&(L||d?s.replace(v.fullPath,te({scroll:d&&g&&g.scroll},X)):s.push(v.fullPath,X)),a.value=v,He(v,R,C,d),at()}let ee;function Ee(){ee||(ee=s.listen((v,R,C)=>{if(!zn.listening)return;const L=P(v),X=ce(L);if(X){he(te(X,{replace:!0}),L).catch(En);return}l=L;const f=a.value;zt&&wd(io(f.fullPath,C.delta),Fr()),J(L,f).catch(d=>Qe(d,12)?d:Qe(d,2)?(he(d.to,L).then(g=>{Qe(g,20)&&!C.delta&&C.type===kn.pop&&s.go(-1,!1)}).catch(En),Promise.reject()):(C.delta&&s.go(-C.delta,!1),Y(d,L,f))).then(d=>{d=d||D(L,f,!1),d&&(C.delta&&!Qe(d,8)?s.go(-C.delta,!1):C.type===kn.pop&&Qe(d,20)&&s.go(-1,!1)),pe(L,f,d)}).catch(En)}))}let Ye=mn(),le=mn(),re;function Y(v,R,C){at(v);const L=le.list();return L.length?L.forEach(X=>X(v,R,C)):console.error(v),Promise.reject(v)}function Xe(){return re&&a.value!==ft?Promise.resolve():new Promise((v,R)=>{Ye.add([v,R])})}function at(v){return re||(re=!v,Ee(),Ye.list().forEach(([R,C])=>v?C(v):R()),Ye.reset()),v}function He(v,R,C,L){const{scrollBehavior:X}=t;if(!zt||!X)return Promise.resolve();const f=!C&&Td(io(v.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return ga().then(()=>X(v,R,f)).then(d=>d&&Id(d)).catch(d=>Y(d,v,R))}const Te=v=>s.go(v);let Ht;const jt=new Set,zn={currentRoute:a,listening:!0,addRoute:_,removeRoute:T,hasRoute:M,getRoutes:S,resolve:P,options:t,push:O,replace:Q,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:le.add,isReady:Xe,install(v){const R=this;v.component("RouterLink",ah),v.component("RouterView",fh),v.config.globalProperties.$router=R,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(a)}),zt&&!Ht&&a.value===ft&&(Ht=!0,O(s.location).catch(X=>{}));const C={};for(const X in ft)Object.defineProperty(C,X,{get:()=>a.value[X],enumerable:!0});v.provide(ni,R),v.provide(sc,oa(C)),v.provide(Cs,a);const L=v.unmount;jt.add(v),v.unmount=function(){jt.delete(v),jt.size<1&&(l=ft,ee&&ee(),ee=null,a.value=ft,Ht=!1,re=!1),L()}}};function _e(v){return v.reduce((R,C)=>R.then(()=>Z(C)),Promise.resolve())}return zn}function hh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>sn(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>sn(l,a))||s.push(a))}return[n,r,s]}const ph=[{path:"/",name:"Home",component:()=>Ne(()=>import("./Home-9315f254.js"),["assets/Home-9315f254.js","assets/Home-93a1c9ff.css"]),meta:{title:"Home",requiresAuth:!1}},{path:"/blogs",name:"Blogs",component:()=>Ne(()=>import("./Blogs-3439974c.js"),["assets/Blogs-3439974c.js","assets/Blogs-4968aac7.css"]),meta:{title:"Blogs",requiresAuth:!1}},{path:"/login",name:"Login",component:()=>Ne(()=>import("./Login-1618fcdc.js"),["assets/Login-1618fcdc.js","assets/Login-1b8bd270.css"]),meta:{title:"Login",requiresAuth:!1}},{path:"/register",name:"Register",component:()=>Ne(()=>import("./Register-6d852315.js"),["assets/Register-6d852315.js","assets/Register-87293243.css"]),meta:{title:"Register",requiresAuth:!1}},{path:"/forgot-password",name:"ForgotPassword",component:()=>Ne(()=>import("./ForgotPassword-d10ff7a7.js"),["assets/ForgotPassword-d10ff7a7.js","assets/ForgotPassword-dce0807c.css"]),meta:{title:"Forgot Password",requiresAuth:!1}},{path:"/profile",name:"Profile",component:()=>Ne(()=>import("./Profile-1ab320e9.js"),["assets/Profile-1ab320e9.js","assets/Profile-c9dfc6b5.css"]),meta:{title:"Profile",requiresAuth:!0}},{path:"/admin",name:"Admin",component:()=>Ne(()=>import("./Admin-e8ba15be.js"),["assets/Admin-e8ba15be.js","assets/Admin-9255a7f1.css"]),meta:{title:"Admin",requiresAuth:!0,requiresAdmin:!0}},{path:"/create-post",name:"CreatePost",component:()=>Ne(()=>import("./CreatePost-c30d8346.js"),["assets/CreatePost-c30d8346.js","assets/CreatePost-30d429de.css"]),meta:{title:"Create Post",requiresAuth:!0,requiresAdmin:!0}},{path:"/post-preview",name:"BlogPreview",component:()=>Ne(()=>import("./BlogPreview-1e913ff5.js"),["assets/BlogPreview-1e913ff5.js","assets/BlogPreview-1dce920d.css"]),meta:{title:"Preview Blog Post",requiresAuth:!0,requiresAdmin:!0}},{path:"/view-blog/:blogid",name:"ViewBlog",component:()=>Ne(()=>import("./ViewBlog-53ff6874.js"),["assets/ViewBlog-53ff6874.js","assets/ViewBlog-cf95c7e7.css"]),meta:{title:"View Blog Post",requiresAuth:!1}},{path:"/edit-blog/:blogid",name:"EditBlog",component:()=>Ne(()=>import("./EditBlog-9c871e76.js"),["assets/EditBlog-9c871e76.js","assets/CreatePost-30d429de.css"]),meta:{title:"Edit Blog Post",requiresAuth:!0,requiresAdmin:!0}}],gh=dh({history:Rd("/vue-blog-test/"),routes:ph});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},mh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,_=l&63;a||(_=64,o||(p=64)),r.push(n[u],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ic(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new _h;const p=i<<2|c>>4;if(r.push(p),l!==64){const _=c<<4&240|l>>2;if(r.push(_),h!==64){const T=l<<6&192|h;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vh=function(t){const e=ic(t);return oc.encodeByteArray(e,!0)},ac=function(t){return vh(t).replace(/\./g,"")},cc=function(t){try{return oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=()=>yh().__FIREBASE_DEFAULTS__,Eh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ih=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cc(t[1]);return e&&JSON.parse(e)},ri=()=>{try{return bh()||Eh()||Ih()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wh=t=>{var e,n;return(n=(e=ri())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lc=()=>{var t;return(t=ri())===null||t===void 0?void 0:t.config},uc=t=>{var e;return(e=ri())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ch(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Sh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ah(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rh(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ph(){try{return typeof indexedDB=="object"}catch{return!1}}function Oh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kh,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fn.prototype.create)}}class Fn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Nh(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,c,r)}}function Nh(t,e){return t.replace(Dh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Dh=/\{\$([^}]+)}/g;function Lh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(bo(i)&&bo(o)){if(!mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function bo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mh(t,e){const n=new xh(t,e);return n.subscribe.bind(n)}class xh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Uh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zr),s.error===void 0&&(s.error=Zr),s.complete===void 0&&(s.complete=Zr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Th;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($h(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bh(t){return t===Ot?void 0:t}function $h(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const jh={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Vh=se.INFO,Wh={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},zh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Wh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fc{constructor(e){this.name=e,this._logLevel=Vh,this._logHandler=zh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Kh=(t,e)=>e.some(n=>t instanceof n);let Eo,Io;function qh(){return Eo||(Eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gh(){return Io||(Io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dc=new WeakMap,Ss=new WeakMap,hc=new WeakMap,es=new WeakMap,si=new WeakMap;function Jh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Et(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dc.set(n,t)}).catch(()=>{}),si.set(e,t),e}function Yh(t){if(Ss.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ss.set(t,e)}let As={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ss.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xh(t){As=t(As)}function Qh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ts(this),e,...n);return hc.set(r,e.sort?e.sort():[e]),Et(r)}:Gh().includes(t)?function(...e){return t.apply(ts(this),e),Et(dc.get(this))}:function(...e){return Et(t.apply(ts(this),e))}}function Zh(t){return typeof t=="function"?Qh(t):(t instanceof IDBTransaction&&Yh(t),Kh(t,qh())?new Proxy(t,As):t)}function Et(t){if(t instanceof IDBRequest)return Jh(t);if(es.has(t))return es.get(t);const e=Zh(t);return e!==t&&(es.set(t,e),si.set(e,t)),e}const ts=t=>si.get(t);function ep(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Et(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Et(o.result),a.oldVersion,a.newVersion,Et(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const tp=["get","getKey","getAll","getAllKeys","count"],np=["put","add","delete","clear"],ns=new Map;function wo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ns.get(e))return ns.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=np.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tp.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return ns.set(e,i),i}Xh(t=>({...t,get:(e,n,r)=>wo(e,n)||t.get(e,n,r),has:(e,n)=>!!wo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rs="@firebase/app",To="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new fc("@firebase/app"),ip="@firebase/app-compat",op="@firebase/analytics-compat",ap="@firebase/analytics",cp="@firebase/app-check-compat",lp="@firebase/app-check",up="@firebase/auth",fp="@firebase/auth-compat",dp="@firebase/database",hp="@firebase/database-compat",pp="@firebase/functions",gp="@firebase/functions-compat",mp="@firebase/installations",_p="@firebase/installations-compat",vp="@firebase/messaging",yp="@firebase/messaging-compat",bp="@firebase/performance",Ep="@firebase/performance-compat",Ip="@firebase/remote-config",wp="@firebase/remote-config-compat",Tp="@firebase/storage",Cp="@firebase/storage-compat",Sp="@firebase/firestore",Ap="@firebase/firestore-compat",Rp="firebase",Pp="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="[DEFAULT]",Op={[Rs]:"fire-core",[ip]:"fire-core-compat",[ap]:"fire-analytics",[op]:"fire-analytics-compat",[lp]:"fire-app-check",[cp]:"fire-app-check-compat",[up]:"fire-auth",[fp]:"fire-auth-compat",[dp]:"fire-rtdb",[hp]:"fire-rtdb-compat",[pp]:"fire-fn",[gp]:"fire-fn-compat",[mp]:"fire-iid",[_p]:"fire-iid-compat",[vp]:"fire-fcm",[yp]:"fire-fcm-compat",[bp]:"fire-perf",[Ep]:"fire-perf-compat",[Ip]:"fire-rc",[wp]:"fire-rc-compat",[Tp]:"fire-gcs",[Cp]:"fire-gcs-compat",[Sp]:"fire-fst",[Ap]:"fire-fst-compat","fire-js":"fire-js",[Rp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map,Os=new Map;function kp(t,e){try{t.container.addComponent(e)}catch(n){Bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(Os.has(e))return Bt.debug(`There were multiple attempts to register component ${e}.`),!1;Os.set(e,t);for(const n of _r.values())kp(n,t);return!0}function pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},It=new Fn("app","Firebase",Np);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=Pp;function gc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ps,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw It.create("bad-app-name",{appName:String(s)});if(n||(n=lc()),!n)throw It.create("no-options");const i=_r.get(s);if(i){if(mr(n,i.options)&&mr(r,i.config))return i;throw It.create("duplicate-app",{appName:s})}const o=new Hh(s);for(const a of Os.values())o.addComponent(a);const c=new Dp(n,r,o);return _r.set(s,c),c}function Lp(t=Ps){const e=_r.get(t);if(!e&&t===Ps&&lc())return gc();if(!e)throw It.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let s=(r=Op[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bt.warn(c.join(" "));return}Nn(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="firebase-heartbeat-database",xp=1,Dn="firebase-heartbeat-store";let rs=null;function mc(){return rs||(rs=ep(Mp,xp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}}).catch(t=>{throw It.create("idb-open",{originalErrorMessage:t.message})})),rs}async function Up(t){try{return await(await mc()).transaction(Dn).objectStore(Dn).get(_c(t))}catch(e){if(e instanceof Ct)Bt.warn(e.message);else{const n=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(n.message)}}}async function Co(t,e){try{const r=(await mc()).transaction(Dn,"readwrite");await r.objectStore(Dn).put(e,_c(t)),await r.done}catch(n){if(n instanceof Ct)Bt.warn(n.message);else{const r=It.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bt.warn(r.message)}}}function _c(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=1024,Bp=30*24*60*60*1e3;class $p{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=So();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Bp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=So(),{heartbeatsToSend:n,unsentEntries:r}=Hp(this._heartbeatsCache.heartbeats),s=ac(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function So(){return new Date().toISOString().substring(0,10)}function Hp(t,e=Fp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ao(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ao(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ph()?Oh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Up(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Co(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Co(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ao(t){return ac(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t){Nn(new an("platform-logger",e=>new rp(e),"PRIVATE")),Nn(new an("heartbeat",e=>new $p(e),"PRIVATE")),Zt(Rs,To,t),Zt(Rs,To,"esm2017"),Zt("fire-js","")}Vp("");var Wp="firebase",zp="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(Wp,zp,"app");function ii(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kp=vc,yc=new Fn("auth","Firebase",vc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new fc("@firebase/auth");function qp(t,...e){vr.logLevel<=se.WARN&&vr.warn(`Auth (${$n}): ${t}`,...e)}function ir(t,...e){vr.logLevel<=se.ERROR&&vr.error(`Auth (${$n}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,...e){throw oi(t,...e)}function qe(t,...e){return oi(t,...e)}function Gp(t,e,n){const r=Object.assign(Object.assign({},Kp()),{[e]:n});return new Fn("auth","Firebase",r).create(e,{appName:t.name})}function oi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yc.create(t,...e)}function $(t,e,...n){if(!t)throw oi(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ir(e),new Error(e)}function it(t,e){t||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Jp(){return Ro()==="http:"||Ro()==="https:"}function Ro(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jp()||Sh()||"connection"in navigator)?navigator.onLine:!0}function Xp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=Ch()||Ah()}get(){return Yp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Hn(3e4,6e4);function Ec(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jn(t,e,n,r,s={}){return Ic(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Bn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),bc.fetch()(wc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Ic(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qp),e);try{const s=new tg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Qn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Qn(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gp(t,u,l);st(t,u)}}catch(s){if(s instanceof Ct)throw s;st(t,"network-request-failed",{message:String(s)})}}async function eg(t,e,n,r,s={}){const i=await jn(t,e,n,r,s);return"mfaPendingCredential"in i&&st(t,"multi-factor-auth-required",{_serverResponse:i}),i}function wc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ai(t.config,s):`${t.config.apiScheme}://${s}`}class tg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),Zp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qe(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(t,e){return jn(t,"POST","/v1/accounts:delete",e)}async function rg(t,e){return jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sg(t,e=!1){const n=dn(t),r=await n.getIdToken(e),s=ci(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wn(ss(s.auth_time)),issuedAtTime:wn(ss(s.iat)),expirationTime:wn(ss(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ss(t){return Number(t)*1e3}function ci(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ir("JWT malformed, contained fewer than 3 sections"),null;try{const s=cc(n);return s?JSON.parse(s):(ir("Failed to decode base64 JWT payload"),null)}catch(s){return ir("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ig(t){const e=ci(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&og(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function og({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wn(this.lastLoginAt),this.creationTime=wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ln(t,rg(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ug(i.providerUserInfo):[],c=lg(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Tc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function cg(t){const e=dn(t);await yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ug(t){return t.map(e=>{var{providerId:n}=e,r=ii(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(t,e){const n=await Ic(t,{},async()=>{const r=Bn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=wc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",bc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Mn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ag(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ln(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sg(this,e)}reload(){return cg(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ln(this,ng(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(c=n.tenantId)!==null&&c!==void 0?c:void 0,M=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:O,isAnonymous:Q,providerData:ce,stsTokenManager:he}=n;$(H&&he,e,"internal-error");const j=Mn.fromJSON(this.name,he);$(typeof H=="string",e,"internal-error"),dt(h,e.name),dt(p,e.name),$(typeof O=="boolean",e,"internal-error"),$(typeof Q=="boolean",e,"internal-error"),dt(_,e.name),dt(T,e.name),dt(S,e.name),dt(M,e.name),dt(P,e.name),dt(N,e.name);const Z=new Ft({uid:H,auth:e,email:p,emailVerified:O,displayName:h,isAnonymous:Q,photoURL:T,phoneNumber:_,tenantId:S,stsTokenManager:j,createdAt:P,lastLoginAt:N});return ce&&Array.isArray(ce)&&(Z.providerData=ce.map(J=>Object.assign({},J))),M&&(Z._redirectEventId=M),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mn;s.updateFromServerResponse(n);const i=new Ft({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map;function tt(t){it(t instanceof Function,"Expected a class definition");let e=Po.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Po.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cc.type="NONE";const Oo=Cc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e,n){return`firebase:${t}:${e}:${n}`}class en{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=or(this.userKey,s.apiKey,i),this.fullPersistenceKey=or("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new en(tt(Oo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||tt(Oo);const o=or(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ft._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new en(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new en(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Oc(e))return"Blackberry";if(kc(e))return"Webos";if(li(e))return"Safari";if((e.includes("chrome/")||Ac(e))&&!e.includes("edge/"))return"Chrome";if(Pc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sc(t=be()){return/firefox\//i.test(t)}function li(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ac(t=be()){return/crios\//i.test(t)}function Rc(t=be()){return/iemobile/i.test(t)}function Pc(t=be()){return/android/i.test(t)}function Oc(t=be()){return/blackberry/i.test(t)}function kc(t=be()){return/webos/i.test(t)}function Br(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dg(t=be()){var e;return Br(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hg(){return Rh()&&document.documentMode===10}function Nc(t=be()){return Br(t)||Pc(t)||kc(t)||Oc(t)||/windows phone/i.test(t)||Rc(t)}function pg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t,e=[]){let n;switch(t){case"Browser":n=ko(be());break;case"Worker":n=`${ko(be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$n}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(t,e={}){return jn(t,"GET","/v2/passwordPolicy",Ec(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=6;class vg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_g,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new gg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?dn(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mg(this),n=new vg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if($(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ui(t){return dn(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mh(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Eg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",bg().appendChild(r)})}function Ig(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t,e){const n=pc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(mr(i,e??{}))return s;st(s,"already-initialized")}return n.initialize({options:e})}function Tg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lc(t,e,n){const r=ui(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Mc(e),{host:o,port:c}=Cg(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Sg()}function Mc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Cg(t){const e=Mc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Do(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Do(o)}}}function Do(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(t,e){return eg(t,"POST","/v1/accounts:signInWithIdp",Ec(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="http://localhost";class $t extends xc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ii(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tn(e,n)}buildRequest(){const e={requestUri:Ag,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Uc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Vn{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Vn{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Vn{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ft._fromIdTokenResponse(e,r,s),o=Lo(r);return new cn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Lo(r);return new cn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Lo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,br.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new br(e,n,r,s)}}function Fc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?br._fromErrorAndOperation(t,i,e,r):i})}async function Rg(t,e,n=!1){const r=await Ln(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ln(t,Fc(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=ci(i.idToken);$(o,r,"internal-error");const{sub:c}=o;return $(t.uid===c,r,"user-mismatch"),cn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&st(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t,e,n=!1){const r="signIn",s=await Fc(t,r,e),i=await cn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function kg(t,e,n,r){return dn(t).onIdTokenChanged(e,n,r)}function Ng(t,e,n){return dn(t).beforeAuthStateChanged(e,n)}const Er="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Er,"1"),this.storage.removeItem(Er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){const t=be();return li(t)||Br(t)}const Lg=1e3,Mg=10;class $c extends Bc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dg()&&pg(),this.fallbackToPolling=Nc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Mg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Lg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$c.type="LOCAL";const xg=$c;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends Bc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hc.type="SESSION";const jc=Hc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $r(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Ug(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$r.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=fi("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function Bg(t){Ge().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function $g(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jg(){return Vc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="firebaseLocalStorageDb",Vg=1,Ir="firebaseLocalStorage",zc="fbase_key";class Wn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hr(t,e){return t.transaction([Ir],e?"readwrite":"readonly").objectStore(Ir)}function Wg(){const t=indexedDB.deleteDatabase(Wc);return new Wn(t).toPromise()}function Ns(){const t=indexedDB.open(Wc,Vg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ir,{keyPath:zc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ir)?e(r):(r.close(),await Wg(),e(await Ns()))})})}async function Mo(t,e,n){const r=Hr(t,!0).put({[zc]:e,value:n});return new Wn(r).toPromise()}async function zg(t,e){const n=Hr(t,!1).get(e),r=await new Wn(n).toPromise();return r===void 0?null:r.value}function xo(t,e){const n=Hr(t,!0).delete(e);return new Wn(n).toPromise()}const Kg=800,qg=3;class Kc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ns(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$r._getInstance(jg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $g(),!this.activeServiceWorker)return;this.sender=new Fg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ns();return await Mo(e,Er,"1"),await xo(e,Er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hr(s,!1).getAll();return new Wn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kc.type="LOCAL";const Gg=Kc;new Hn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e){return e?tt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends xc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yg(t){return Og(t.auth,new di(t),t.bypassAuthState)}function Xg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Pg(n,new di(t),t.bypassAuthState)}async function Qg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Rg(n,new di(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yg;case"linkViaPopup":case"linkViaRedirect":return Qg;case"reauthViaPopup":case"reauthViaRedirect":return Xg;default:st(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Hn(2e3,1e4);class Kt extends qc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=fi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zg.get())};e()}}Kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="pendingRedirect",ar=new Map;class tm extends qc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ar.get(this.auth._key());if(!e){try{const r=await nm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ar.set(this.auth._key(),e)}return this.bypassAuthState||ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nm(t,e){const n=im(e),r=sm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rm(t,e){ar.set(t._key(),e)}function sm(t){return tt(t._redirectPersistence)}function im(t){return or(em,t.config.apiKey,t.name)}async function om(t,e,n=!1){const r=ui(t),s=Jg(r,e),o=await new tm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=10*60*1e3;class cm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Gc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=am&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uo(e))}saveEventToCache(e){this.cachedEventUids.add(Uo(e)),this.lastProcessedEventTime=Date.now()}}function Uo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(t,e={}){return jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dm=/^https?/;async function hm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await um(t);for(const n of e)try{if(pm(n))return}catch{}st(t,"unauthorized-domain")}function pm(t){const e=ks(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dm.test(n))return!1;if(fm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=new Hn(3e4,6e4);function Fo(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mm(t){return new Promise((e,n)=>{var r,s,i;function o(){Fo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fo(),n(qe(t,"network-request-failed"))},timeout:gm.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const c=Ig("iframefcb");return Ge()[c]=()=>{gapi.load?o():n(qe(t,"network-request-failed"))},Eg(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw cr=null,e})}let cr=null;function _m(t){return cr=cr||mm(t),cr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new Hn(5e3,15e3),ym="__/auth/iframe",bm="emulator/auth/iframe",Em={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Im=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wm(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ai(e,bm):`https://${t.config.authDomain}/${ym}`,r={apiKey:e.apiKey,appName:t.name,v:$n},s=Im.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bn(r).slice(1)}`}async function Tm(t){const e=await _m(t),n=Ge().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:wm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Em,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qe(t,"network-request-failed"),c=Ge().setTimeout(()=>{i(o)},vm.get());function a(){Ge().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sm=500,Am=600,Rm="_blank",Pm="http://localhost";class Bo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Om(t,e,n,r=Sm,s=Am){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Cm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=be().toLowerCase();n&&(c=Ac(l)?Rm:n),Sc(l)&&(e=e||Pm,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[_,T])=>`${p}${_}=${T},`,"");if(dg(l)&&c!=="_self")return km(e||"",c),new Bo(null);const h=window.open(e||"",c,u);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Bo(h)}function km(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="__/auth/handler",Dm="emulator/auth/handler",Lm=encodeURIComponent("fac");async function $o(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$n,eventId:s};if(e instanceof Uc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Vn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${Lm}=${encodeURIComponent(a)}`:"";return`${Mm(t)}?${Bn(c).slice(1)}${l}`}function Mm({config:t}){return t.emulator?ai(t,Dm):`https://${t.authDomain}/${Nm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="webStorageSupport";class xm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jc,this._completeRedirectFn=om,this._overrideRedirectResult=rm}async _openPopup(e,n,r,s){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $o(e,n,r,ks(),s);return Om(e,o,fi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $o(e,n,r,ks(),s);return Bg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Tm(e),r=new cm(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(is,{type:is},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[is];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nc()||li()||Br()}}const Um=xm;var Ho="@firebase/auth",jo="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $m(t){Nn(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dc(t)},l=new yg(r,s,i,a);return Tg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new an("auth-internal",e=>{const n=ui(e.getProvider("auth").getImmediate());return(r=>new Fm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(Ho,jo,Bm(t)),Zt(Ho,jo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=5*60,jm=uc("authIdTokenMaxAge")||Hm;let Vo=null;const Vm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jm)return;const s=n==null?void 0:n.token;Vo!==s&&(Vo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wm(t=Lp()){const e=pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wg(t,{popupRedirectResolver:Um,persistence:[Gg,xg,jc]}),r=uc("authTokenSyncURL");if(r){const i=Vm(r);Ng(n,i,()=>i(n.currentUser)),kg(n,o=>i(o))}const s=wh("auth");return s&&Lc(n,`http://${s}`),n}$m("Browser");const zm={apiKey:"AIzaSyCADDPZK38h6kXH87DX54hCMRDPPsFgQdM",authDomain:"vue-firestore-yarn.firebaseapp.com",projectId:"vue-firestore-yarn",storageBucket:"vue-firestore-yarn.appspot.com",messagingSenderId:"606075661395",appId:"1:606075661395:web:309af8b5f96980d457aaa6",measurementId:"G-KGJGH9SD9E"};gc(zm);location.hostname==="localhost"&&Lc(Wm(),"http://localhost:9099");const Jc=Af(cd);Jc.use(gh);Jc.mount("#app");export{We as F,qa as _,z as a,W as b,Ys as c,we as d,Ea as e,qm as f,Fi as g,Gm as h,bs as i,Jm as j,Qm as k,Xm as l,Fs as n,Qt as o,ba as p,Me as r,Km as t,Ym as v,ge as w};
