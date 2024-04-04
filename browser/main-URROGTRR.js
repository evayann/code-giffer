import{$ as bn,$a as Tn,Aa as ze,Ab as H,B as Ln,Ba as Fe,C as st,Ca as Wt,Cb as lr,D as we,Da as _e,Db as cr,Eb as ur,F as Bt,Fa as qe,Fb as hr,G as _,H as yn,I as Se,Ia as Ve,Ib as dr,J as be,Ja as Be,Ka as He,L as Me,La as M,M as O,Ma as D,N as Re,Na as $,O as A,Q as y,R as L,S as Ie,Sa as We,T as Te,Ta as Ge,U as wn,Ua as Ke,V as T,W as q,Wa as B,X as p,Y as P,Ya as Ye,Z as De,_ as Sn,_a as Xe,a as me,ab as j,b as Ce,ca as Ee,cb as Dn,d as Qn,da as Mn,e as mn,ea as xe,f as F,g as I,ga as Oe,h as tt,ha as Ue,i as S,ia as Pe,j as d,ja as Ct,jb as Je,k as mt,ka as V,kb as Gt,l as Ae,la as Rn,lb as tr,m as Le,mb as En,n as m,nb as xn,o as Vt,oa as $e,ob as nr,p as b,pb as Kt,q as Cn,qa as je,qb as er,r as ye,ra as ke,s as An,sa as Ht,sb as rr,ta as z,tb as ir,ua as Ne,ub as Lt,va as In,vb as sr,w as Z,wa as At,wb as or,xa as ot,xb as yt,y as rt,ya as Ze,yb as ar,z as it}from"./chunk-AJ6GJ3E5.js";import{a as h,b as w}from"./chunk-VHCA6YAO.js";var f="primary",kt=Symbol("RouteTitle"),jn=class{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let i=this.params[t];return Array.isArray(i)?i[0]:i}return null}getAll(t){if(this.has(t)){let i=this.params[t];return Array.isArray(i)?i:[i]}return[]}get keys(){return Object.keys(this.params)}};function ht(n){return new jn(n)}function f0(n,t,i){let e=i.path.split("/");if(e.length>n.length||i.pathMatch==="full"&&(t.hasChildren()||e.length<n.length))return null;let r={};for(let s=0;s<e.length;s++){let o=e[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,e.length),posParams:r}}function g0(n,t){if(n.length!==t.length)return!1;for(let i=0;i<n.length;++i)if(!k(n[i],t[i]))return!1;return!0}function k(n,t){let i=n?kn(n):void 0,e=t?kn(t):void 0;if(!i||!e||i.length!=e.length)return!1;let r;for(let s=0;s<i.length;s++)if(r=i[s],!Lr(n[r],t[r]))return!1;return!0}function kn(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function Lr(n,t){if(Array.isArray(n)&&Array.isArray(t)){if(n.length!==t.length)return!1;let i=[...n].sort(),e=[...t].sort();return i.every((r,s)=>e[s]===r)}else return n===t}function X(n){return Ae(n)?n:We(n)?S(Promise.resolve(n)):d(n)}var v0={exact:wr,subset:Sr},yr={exact:Q0,subset:m0,ignored:()=>!0};function pr(n,t,i){return v0[i.paths](n.root,t.root,i.matrixParams)&&yr[i.queryParams](n.queryParams,t.queryParams)&&!(i.fragment==="exact"&&n.fragment!==t.fragment)}function Q0(n,t){return k(n,t)}function wr(n,t,i){if(!et(n.segments,t.segments)||!Jt(n.segments,t.segments,i)||n.numberOfChildren!==t.numberOfChildren)return!1;for(let e in t.children)if(!n.children[e]||!wr(n.children[e],t.children[e],i))return!1;return!0}function m0(n,t){return Object.keys(t).length<=Object.keys(n).length&&Object.keys(t).every(i=>Lr(n[i],t[i]))}function Sr(n,t,i){return br(n,t,t.segments,i)}function br(n,t,i,e){if(n.segments.length>i.length){let r=n.segments.slice(0,i.length);return!(!et(r,i)||t.hasChildren()||!Jt(r,i,e))}else if(n.segments.length===i.length){if(!et(n.segments,i)||!Jt(n.segments,i,e))return!1;for(let r in t.children)if(!n.children[r]||!Sr(n.children[r],t.children[r],e))return!1;return!0}else{let r=i.slice(0,n.segments.length),s=i.slice(n.segments.length);return!et(n.segments,r)||!Jt(n.segments,r,e)||!n.children[f]?!1:br(n.children[f],t,s,e)}}function Jt(n,t,i){return t.every((e,r)=>yr[i](n[r].parameters,e.parameters))}var W=class{constructor(t=new Q([],{}),i={},e=null){this.root=t,this.queryParams=i,this.fragment=e}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=ht(this.queryParams)),this._queryParamMap}toString(){return L0.serialize(this)}},Q=class{constructor(t,i){this.segments=t,this.children=i,this.parent=null,Object.values(i).forEach(e=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return tn(this)}},nt=class{constructor(t,i){this.path=t,this.parameters=i}get parameterMap(){return this._parameterMap||(this._parameterMap=ht(this.parameters)),this._parameterMap}toString(){return Rr(this)}};function C0(n,t){return et(n,t)&&n.every((i,e)=>k(i.parameters,t[e].parameters))}function et(n,t){return n.length!==t.length?!1:n.every((i,e)=>i.path===t[e].path)}function A0(n,t){let i=[];return Object.entries(n.children).forEach(([e,r])=>{e===f&&(i=i.concat(t(r,e)))}),Object.entries(n.children).forEach(([e,r])=>{e!==f&&(i=i.concat(t(r,e)))}),i}var Nt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:()=>(()=>new Tt)(),providedIn:"root"});let n=t;return n})(),Tt=class{parse(t){let i=new Zn(t);return new W(i.parseRootSegment(),i.parseQueryParams(),i.parseFragment())}serialize(t){let i=`/${wt(t.root,!0)}`,e=S0(t.queryParams),r=typeof t.fragment=="string"?`#${y0(t.fragment)}`:"";return`${i}${e}${r}`}},L0=new Tt;function tn(n){return n.segments.map(t=>Rr(t)).join("/")}function wt(n,t){if(!n.hasChildren())return tn(n);if(t){let i=n.children[f]?wt(n.children[f],!1):"",e=[];return Object.entries(n.children).forEach(([r,s])=>{r!==f&&e.push(`${r}:${wt(s,!1)}`)}),e.length>0?`${i}(${e.join("//")})`:i}else{let i=A0(n,(e,r)=>r===f?[wt(n.children[f],!1)]:[`${r}:${wt(e,!1)}`]);return Object.keys(n.children).length===1&&n.children[f]!=null?`${tn(n)}/${i[0]}`:`${tn(n)}/(${i.join("//")})`}}function Mr(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Yt(n){return Mr(n).replace(/%3B/gi,";")}function y0(n){return encodeURI(n)}function Nn(n){return Mr(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function nn(n){return decodeURIComponent(n)}function fr(n){return nn(n.replace(/\+/g,"%20"))}function Rr(n){return`${Nn(n.path)}${w0(n.parameters)}`}function w0(n){return Object.entries(n).map(([t,i])=>`;${Nn(t)}=${Nn(i)}`).join("")}function S0(n){let t=Object.entries(n).map(([i,e])=>Array.isArray(e)?e.map(r=>`${Yt(i)}=${Yt(r)}`).join("&"):`${Yt(i)}=${Yt(e)}`).filter(i=>i);return t.length?`?${t.join("&")}`:""}var b0=/^[^\/()?;#]+/;function On(n){let t=n.match(b0);return t?t[0]:""}var M0=/^[^\/()?;=#]+/;function R0(n){let t=n.match(M0);return t?t[0]:""}var I0=/^[^=?&#]+/;function T0(n){let t=n.match(I0);return t?t[0]:""}var D0=/^[^&#]+/;function E0(n){let t=n.match(D0);return t?t[0]:""}var Zn=class{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Q([],{}):new Q([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0));let e={};return this.peekStartsWith("(")&&(e=this.parseParens(!1)),(t.length>0||Object.keys(i).length>0)&&(e[f]=new Q(t,i)),e}parseSegment(){let t=On(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new y(4009,!1);return this.capture(t),new nt(nn(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let i=R0(this.remaining);if(!i)return;this.capture(i);let e="";if(this.consumeOptional("=")){let r=On(this.remaining);r&&(e=r,this.capture(e))}t[nn(i)]=nn(e)}parseQueryParam(t){let i=T0(this.remaining);if(!i)return;this.capture(i);let e="";if(this.consumeOptional("=")){let o=E0(this.remaining);o&&(e=o,this.capture(e))}let r=fr(i),s=fr(e);if(t.hasOwnProperty(r)){let o=t[r];Array.isArray(o)||(o=[o],t[r]=o),o.push(s)}else t[r]=s}parseParens(t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let e=On(this.remaining),r=this.remaining[e.length];if(r!=="/"&&r!==")"&&r!==";")throw new y(4010,!1);let s;e.indexOf(":")>-1?(s=e.slice(0,e.indexOf(":")),this.capture(s),this.capture(":")):t&&(s=f);let o=this.parseChildren();i[s]=Object.keys(o).length===1?o[f]:new Q([],o),this.consumeOptional("//")}return i}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new y(4011,!1)}};function Ir(n){return n.segments.length>0?new Q([],{[f]:n}):n}function Tr(n){let t={};for(let[e,r]of Object.entries(n.children)){let s=Tr(r);if(e===f&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))t[o]=a;else(s.segments.length>0||s.hasChildren())&&(t[e]=s)}let i=new Q(n.segments,t);return x0(i)}function x0(n){if(n.numberOfChildren===1&&n.children[f]){let t=n.children[f];return new Q(n.segments.concat(t.segments),t.children)}return n}function dt(n){return n instanceof W}function O0(n,t,i=null,e=null){let r=Dr(n);return Er(r,t,i,e)}function Dr(n){let t;function i(s){let o={};for(let c of s.children){let l=i(c);o[c.outlet]=l}let a=new Q(s.url,o);return s===n&&(t=a),a}let e=i(n.root),r=Ir(e);return t??r}function Er(n,t,i,e){let r=n;for(;r.parent;)r=r.parent;if(t.length===0)return Un(r,r,r,i,e);let s=U0(t);if(s.toRoot())return Un(r,r,new Q([],{}),i,e);let o=P0(s,r,n),a=o.processChildren?Mt(o.segmentGroup,o.index,s.commands):Or(o.segmentGroup,o.index,s.commands);return Un(r,o.segmentGroup,a,i,e)}function en(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Dt(n){return typeof n=="object"&&n!=null&&n.outlets}function Un(n,t,i,e,r){let s={};e&&Object.entries(e).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===t?o=i:o=xr(n,t,i);let a=Ir(Tr(o));return new W(a,s,r)}function xr(n,t,i){let e={};return Object.entries(n.children).forEach(([r,s])=>{s===t?e[r]=i:e[r]=xr(s,t,i)}),new Q(n.segments,e)}var rn=class{constructor(t,i,e){if(this.isAbsolute=t,this.numberOfDoubleDots=i,this.commands=e,t&&e.length>0&&en(e[0]))throw new y(4003,!1);let r=e.find(Dt);if(r&&r!==e.at(-1))throw new y(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function U0(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new rn(!0,0,n);let t=0,i=!1,e=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?i=!0:a===".."?t++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new rn(i,t,e)}var ct=class{constructor(t,i,e){this.segmentGroup=t,this.processChildren=i,this.index=e}};function P0(n,t,i){if(n.isAbsolute)return new ct(t,!0,0);if(!i)return new ct(t,!1,NaN);if(i.parent===null)return new ct(i,!0,0);let e=en(n.commands[0])?0:1,r=i.segments.length-1+e;return $0(i,r,n.numberOfDoubleDots)}function $0(n,t,i){let e=n,r=t,s=i;for(;s>r;){if(s-=r,e=e.parent,!e)throw new y(4005,!1);r=e.segments.length}return new ct(e,!1,r-s)}function j0(n){return Dt(n[0])?n[0].outlets:{[f]:n}}function Or(n,t,i){if(n||(n=new Q([],{})),n.segments.length===0&&n.hasChildren())return Mt(n,t,i);let e=k0(n,t,i),r=i.slice(e.commandIndex);if(e.match&&e.pathIndex<n.segments.length){let s=new Q(n.segments.slice(0,e.pathIndex),{});return s.children[f]=new Q(n.segments.slice(e.pathIndex),n.children),Mt(s,0,r)}else return e.match&&r.length===0?new Q(n.segments,{}):e.match&&!n.hasChildren()?zn(n,t,i):e.match?Mt(n,0,r):zn(n,t,i)}function Mt(n,t,i){if(i.length===0)return new Q(n.segments,{});{let e=j0(i),r={};if(Object.keys(e).some(s=>s!==f)&&n.children[f]&&n.numberOfChildren===1&&n.children[f].segments.length===0){let s=Mt(n.children[f],t,i);return new Q(n.segments,s.children)}return Object.entries(e).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Or(n.children[s],t,o))}),Object.entries(n.children).forEach(([s,o])=>{e[s]===void 0&&(r[s]=o)}),new Q(n.segments,r)}}function k0(n,t,i){let e=0,r=t,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(e>=i.length)return s;let o=n.segments[r],a=i[e];if(Dt(a))break;let c=`${a}`,l=e<i.length-1?i[e+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!vr(c,l,o))return s;e+=2}else{if(!vr(c,{},o))return s;e++}r++}return{match:!0,pathIndex:r,commandIndex:e}}function zn(n,t,i){let e=n.segments.slice(0,t),r=0;for(;r<i.length;){let s=i[r];if(Dt(s)){let c=N0(s.outlets);return new Q(e,c)}if(r===0&&en(i[0])){let c=n.segments[t];e.push(new nt(c.path,gr(i[0]))),r++;continue}let o=Dt(s)?s.outlets[f]:`${s}`,a=r<i.length-1?i[r+1]:null;o&&a&&en(a)?(e.push(new nt(o,gr(a))),r+=2):(e.push(new nt(o,{})),r++)}return new Q(e,{})}function N0(n){let t={};return Object.entries(n).forEach(([i,e])=>{typeof e=="string"&&(e=[e]),e!==null&&(t[i]=zn(new Q([],{}),0,e))}),t}function gr(n){let t={};return Object.entries(n).forEach(([i,e])=>t[i]=`${e}`),t}function vr(n,t,i){return n==i.path&&k(t,i.parameters)}var Rt="imperative",E=class{constructor(t,i){this.id=t,this.url=i}},pt=class extends E{constructor(t,i,e="imperative",r=null){super(t,i),this.type=0,this.navigationTrigger=e,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},x=class extends E{constructor(t,i,e){super(t,i),this.urlAfterRedirects=e,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},G=class extends E{constructor(t,i,e,r){super(t,i),this.reason=e,this.code=r,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},K=class extends E{constructor(t,i,e,r){super(t,i),this.reason=e,this.code=r,this.type=16}},Et=class extends E{constructor(t,i,e,r){super(t,i),this.error=e,this.target=r,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},sn=class extends E{constructor(t,i,e,r){super(t,i),this.urlAfterRedirects=e,this.state=r,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Fn=class extends E{constructor(t,i,e,r){super(t,i),this.urlAfterRedirects=e,this.state=r,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_n=class extends E{constructor(t,i,e,r,s){super(t,i),this.urlAfterRedirects=e,this.state=r,this.shouldActivate=s,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},qn=class extends E{constructor(t,i,e,r){super(t,i),this.urlAfterRedirects=e,this.state=r,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Vn=class extends E{constructor(t,i,e,r){super(t,i),this.urlAfterRedirects=e,this.state=r,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Bn=class{constructor(t){this.route=t,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Hn=class{constructor(t){this.route=t,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Wn=class{constructor(t){this.snapshot=t,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Gn=class{constructor(t){this.snapshot=t,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Kn=class{constructor(t){this.snapshot=t,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Yn=class{constructor(t){this.snapshot=t,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},on=class{constructor(t,i,e){this.routerEvent=t,this.position=i,this.anchor=e,this.type=15}toString(){let t=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${t}')`}},xt=class{},Ot=class{constructor(t){this.url=t}};var Xn=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new Zt,this.attachRef=null}},Zt=(()=>{let t=class t{constructor(){this.contexts=new Map}onChildOutletCreated(e,r){let s=this.getOrCreateContext(e);s.outlet=r,this.contexts.set(e,s)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new Xn,this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),an=class{constructor(t){this._root=t}get root(){return this._root.value}parent(t){let i=this.pathFromRoot(t);return i.length>1?i[i.length-2]:null}children(t){let i=Jn(t,this._root);return i?i.children.map(e=>e.value):[]}firstChild(t){let i=Jn(t,this._root);return i&&i.children.length>0?i.children[0].value:null}siblings(t){let i=te(t,this._root);return i.length<2?[]:i[i.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return te(t,this._root).map(i=>i.value)}};function Jn(n,t){if(n===t.value)return t;for(let i of t.children){let e=Jn(n,i);if(e)return e}return null}function te(n,t){if(n===t.value)return[t];for(let i of t.children){let e=te(n,i);if(e.length)return e.unshift(t),e}return[]}var R=class{constructor(t,i){this.value=t,this.children=i}toString(){return`TreeNode(${this.value})`}};function lt(n){let t={};return n&&n.children.forEach(i=>t[i.value.outlet]=i),t}var ln=class extends an{constructor(t,i){super(t),this.snapshot=i,ue(this,t)}toString(){return this.snapshot.toString()}};function Ur(n){let t=Z0(n),i=new I([new nt("",{})]),e=new I({}),r=new I({}),s=new I({}),o=new I(""),a=new Y(i,e,s,o,r,f,n,t.root);return a.snapshot=t.root,new ln(new R(a,[]),t)}function Z0(n){let t={},i={},e={},r="",s=new Ut([],t,e,r,i,f,n,null,{});return new cn("",new R(s,[]))}var Y=class{constructor(t,i,e,r,s,o,a,c){this.urlSubject=t,this.paramsSubject=i,this.queryParamsSubject=e,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(m(l=>l[kt]))??d(void 0),this.url=t,this.params=i,this.queryParams=e,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(m(t=>ht(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(m(t=>ht(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ce(n,t,i="emptyOnly"){let e,{routeConfig:r}=n;return t!==null&&(i==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?e={params:h(h({},t.params),n.params),data:h(h({},t.data),n.data),resolve:h(h(h(h({},n.data),t.data),r?.data),n._resolvedData)}:e={params:h({},n.params),data:h({},n.data),resolve:h(h({},n.data),n._resolvedData??{})},r&&$r(r)&&(e.resolve[kt]=r.title),e}var Ut=class{get title(){return this.data?.[kt]}constructor(t,i,e,r,s,o,a,c,l){this.url=t,this.params=i,this.queryParams=e,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=ht(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=ht(this.queryParams)),this._queryParamMap}toString(){let t=this.url.map(e=>e.toString()).join("/"),i=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${i}')`}},cn=class extends an{constructor(t,i){super(i),this.url=t,ue(this,i)}toString(){return Pr(this._root)}};function ue(n,t){t.value._routerState=n,t.children.forEach(i=>ue(n,i))}function Pr(n){let t=n.children.length>0?` { ${n.children.map(Pr).join(", ")} } `:"";return`${n.value}${t}`}function Pn(n){if(n.snapshot){let t=n.snapshot,i=n._futureSnapshot;n.snapshot=i,k(t.queryParams,i.queryParams)||n.queryParamsSubject.next(i.queryParams),t.fragment!==i.fragment&&n.fragmentSubject.next(i.fragment),k(t.params,i.params)||n.paramsSubject.next(i.params),g0(t.url,i.url)||n.urlSubject.next(i.url),k(t.data,i.data)||n.dataSubject.next(i.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function ne(n,t){let i=k(n.params,t.params)&&C0(n.url,t.url),e=!n.parent!=!t.parent;return i&&!e&&(!n.parent||ne(n.parent,t.parent))}function $r(n){return typeof n.title=="string"||n.title===null}var he=(()=>{let t=class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=f,this.activateEvents=new At,this.deactivateEvents=new At,this.attachEvents=new At,this.detachEvents=new At,this.parentContexts=p(Zt),this.location=p(qe),this.changeDetector=p(In),this.environmentInjector=p(Ct),this.inputBinder=p(fn,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:s}=e.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new y(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new y(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new y(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new y(4013,!1);this._activatedRoute=e;let s=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new ee(e,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=Sn({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[bn]});let n=t;return n})(),ee=class{constructor(t,i,e){this.route=t,this.childContexts=i,this.parent=e}get(t,i){return t===Y?this.route:t===Zt?this.childContexts:this.parent.get(t,i)}},fn=new T(""),Qr=(()=>{let t=class t{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:r}=e,s=Vt([r.queryParams,r.params,r.data]).pipe(O(([o,a,c],l)=>(c=h(h(h({},o),a),c),l===0?d(c):Promise.resolve(c)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==r||r.component===null){this.unsubscribeFromRouteData(e);return}let a=er(r.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:c}of a.inputs)e.activatedComponentRef.setInput(c,o[c])});this.outletDataSubscriptions.set(e,s)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:t.\u0275fac});let n=t;return n})();function z0(n,t,i){let e=Pt(n,t._root,i?i._root:void 0);return new ln(e,t)}function Pt(n,t,i){if(i&&n.shouldReuseRoute(t.value,i.value.snapshot)){let e=i.value;e._futureSnapshot=t.value;let r=F0(n,t,i);return new R(e,r)}else{if(n.shouldAttach(t.value)){let s=n.retrieve(t.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=t.value,o.children=t.children.map(a=>Pt(n,a)),o}}let e=_0(t.value),r=t.children.map(s=>Pt(n,s));return new R(e,r)}}function F0(n,t,i){return t.children.map(e=>{for(let r of i.children)if(n.shouldReuseRoute(e.value,r.value.snapshot))return Pt(n,e,r);return Pt(n,e)})}function _0(n){return new Y(new I(n.url),new I(n.params),new I(n.queryParams),new I(n.fragment),new I(n.data),n.outlet,n.component,n)}var jr="ngNavigationCancelingError";function kr(n,t){let{redirectTo:i,navigationBehaviorOptions:e}=dt(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=Nr(!1,0,t);return r.url=i,r.navigationBehaviorOptions=e,r}function Nr(n,t,i){let e=new Error("NavigationCancelingError: "+(n||""));return e[jr]=!0,e.cancellationCode=t,i&&(e.url=i),e}function q0(n){return Zr(n)&&dt(n.url)}function Zr(n){return n&&n[jr]}var V0=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=P({type:t,selectors:[["ng-component"]],standalone:!0,features:[j],decls:1,vars:0,template:function(r,s){r&1&&$(0,"router-outlet")},dependencies:[he],encapsulation:2});let n=t;return n})();function B0(n,t){return n.providers&&!n._injector&&(n._injector=Tn(n.providers,t,`Route: ${n.path}`)),n._injector??t}function de(n){let t=n.children&&n.children.map(de),i=t?w(h({},n),{children:t}):h({},n);return!i.component&&!i.loadComponent&&(t||i.loadChildren)&&i.outlet&&i.outlet!==f&&(i.component=V0),i}function N(n){return n.outlet||f}function H0(n,t){let i=n.filter(e=>N(e)===t);return i.push(...n.filter(e=>N(e)!==t)),i}function zt(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let t=n.parent;t;t=t.parent){let i=t.routeConfig;if(i?._loadedInjector)return i._loadedInjector;if(i?._injector)return i._injector}return null}var W0=(n,t,i,e)=>m(r=>(new re(t,r.targetRouterState,r.currentRouterState,i,e).activate(n),r)),re=class{constructor(t,i,e,r,s){this.routeReuseStrategy=t,this.futureState=i,this.currState=e,this.forwardEvent=r,this.inputBindingEnabled=s}activate(t){let i=this.futureState._root,e=this.currState?this.currState._root:null;this.deactivateChildRoutes(i,e,t),Pn(this.futureState.root),this.activateChildRoutes(i,e,t)}deactivateChildRoutes(t,i,e){let r=lt(i);t.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],e),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,e)})}deactivateRoutes(t,i,e){let r=t.value,s=i?i.value:null;if(r===s)if(r.component){let o=e.getContext(r.outlet);o&&this.deactivateChildRoutes(t,i,o.children)}else this.deactivateChildRoutes(t,i,e);else s&&this.deactivateRouteAndItsChildren(i,e)}deactivateRouteAndItsChildren(t,i){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,i):this.deactivateRouteAndOutlet(t,i)}detachAndStoreRouteSubtree(t,i){let e=i.getContext(t.value.outlet),r=e&&t.value.component?e.children:i,s=lt(t);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(e&&e.outlet){let o=e.outlet.detach(),a=e.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:o,route:t,contexts:a})}}deactivateRouteAndOutlet(t,i){let e=i.getContext(t.value.outlet),r=e&&t.value.component?e.children:i,s=lt(t);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);e&&(e.outlet&&(e.outlet.deactivate(),e.children.onOutletDeactivated()),e.attachRef=null,e.route=null)}activateChildRoutes(t,i,e){let r=lt(i);t.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],e),this.forwardEvent(new Yn(s.value.snapshot))}),t.children.length&&this.forwardEvent(new Gn(t.value.snapshot))}activateRoutes(t,i,e){let r=t.value,s=i?i.value:null;if(Pn(r),r===s)if(r.component){let o=e.getOrCreateContext(r.outlet);this.activateChildRoutes(t,i,o.children)}else this.activateChildRoutes(t,i,e);else if(r.component){let o=e.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Pn(a.route.value),this.activateChildRoutes(t,null,o.children)}else{let a=zt(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(t,null,o.children)}}else this.activateChildRoutes(t,null,e)}},un=class{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},ut=class{constructor(t,i){this.component=t,this.route=i}};function G0(n,t,i){let e=n._root,r=t?t._root:null;return St(e,r,i,[e.value])}function K0(n){let t=n.routeConfig?n.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:n,guards:t}}function gt(n,t){let i=Symbol(),e=t.get(n,i);return e===i?typeof n=="function"&&!Te(n)?n:t.get(n):e}function St(n,t,i,e,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=lt(t);return n.children.forEach(o=>{Y0(o,s[o.value.outlet],i,e.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>It(a,i.getContext(o),r)),r}function Y0(n,t,i,e,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=t?t.value:null,a=i?i.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=X0(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new un(e)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?St(n,t,a?a.children:null,e,r):St(n,t,i,e,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ut(a.outlet.component,o))}else o&&It(t,a,r),r.canActivateChecks.push(new un(e)),s.component?St(n,null,a?a.children:null,e,r):St(n,null,i,e,r);return r}function X0(n,t,i){if(typeof i=="function")return i(n,t);switch(i){case"pathParamsChange":return!et(n.url,t.url);case"pathParamsOrQueryParamsChange":return!et(n.url,t.url)||!k(n.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ne(n,t)||!k(n.queryParams,t.queryParams);case"paramsChange":default:return!ne(n,t)}}function It(n,t,i){let e=lt(n),r=n.value;Object.entries(e).forEach(([s,o])=>{r.component?t?It(o,t.children.getContext(s),i):It(o,null,i):It(o,t,i)}),r.component?t&&t.outlet&&t.outlet.isActivated?i.canDeactivateChecks.push(new ut(t.outlet.component,r)):i.canDeactivateChecks.push(new ut(null,r)):i.canDeactivateChecks.push(new ut(null,r))}function Ft(n){return typeof n=="function"}function J0(n){return typeof n=="boolean"}function ti(n){return n&&Ft(n.canLoad)}function ni(n){return n&&Ft(n.canActivate)}function ei(n){return n&&Ft(n.canActivateChild)}function ri(n){return n&&Ft(n.canDeactivate)}function ii(n){return n&&Ft(n.canMatch)}function zr(n){return n instanceof Le||n?.name==="EmptyError"}var Xt=Symbol("INITIAL_VALUE");function ft(){return O(n=>Vt(n.map(t=>t.pipe(st(1),Me(Xt)))).pipe(m(t=>{for(let i of t)if(i!==!0){if(i===Xt)return Xt;if(i===!1||i instanceof W)return i}return!0}),Z(t=>t!==Xt),st(1)))}function si(n,t){return b(i=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=i;return o.length===0&&s.length===0?d(w(h({},i),{guardsResult:!0})):oi(o,e,r,n).pipe(b(a=>a&&J0(a)?ai(e,s,n,t):d(a)),m(a=>w(h({},i),{guardsResult:a})))})}function oi(n,t,i,e){return S(n).pipe(b(r=>di(r.component,r.route,i,t,e)),_(r=>r!==!0,!0))}function ai(n,t,i,e){return S(t).pipe(it(r=>ye(ci(r.route.parent,e),li(r.route,e),hi(n,r.path,i),ui(n,r.route,i))),_(r=>r!==!0,!0))}function li(n,t){return n!==null&&t&&t(new Kn(n)),d(!0)}function ci(n,t){return n!==null&&t&&t(new Wn(n)),d(!0)}function ui(n,t,i){let e=t.routeConfig?t.routeConfig.canActivate:null;if(!e||e.length===0)return d(!0);let r=e.map(s=>An(()=>{let o=zt(t)??i,a=gt(s,o),c=ni(a)?a.canActivate(t,n):V(o,()=>a(t,n));return X(c).pipe(_())}));return d(r).pipe(ft())}function hi(n,t,i){let e=t[t.length-1],s=t.slice(0,t.length-1).reverse().map(o=>K0(o)).filter(o=>o!==null).map(o=>An(()=>{let a=o.guards.map(c=>{let l=zt(o.node)??i,u=gt(c,l),v=ei(u)?u.canActivateChild(e,n):V(l,()=>u(e,n));return X(v).pipe(_())});return d(a).pipe(ft())}));return d(s).pipe(ft())}function di(n,t,i,e,r){let s=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!s||s.length===0)return d(!0);let o=s.map(a=>{let c=zt(t)??r,l=gt(a,c),u=ri(l)?l.canDeactivate(n,t,i,e):V(c,()=>l(n,t,i,e));return X(u).pipe(_())});return d(o).pipe(ft())}function pi(n,t,i,e){let r=t.canLoad;if(r===void 0||r.length===0)return d(!0);let s=r.map(o=>{let a=gt(o,n),c=ti(a)?a.canLoad(t,i):V(n,()=>a(t,i));return X(c)});return d(s).pipe(ft(),Fr(e))}function Fr(n){return Ce(A(t=>{if(dt(t))throw kr(n,t)}),m(t=>t===!0))}function fi(n,t,i,e){let r=t.canMatch;if(!r||r.length===0)return d(!0);let s=r.map(o=>{let a=gt(o,n),c=ii(a)?a.canMatch(t,i):V(n,()=>a(t,i));return X(c)});return d(s).pipe(ft(),Fr(e))}var $t=class{constructor(t){this.segmentGroup=t||null}},hn=class extends Error{constructor(t){super(),this.urlTree=t}};function at(n){return mt(new $t(n))}function gi(n){return mt(new y(4e3,!1))}function vi(n){return mt(Nr(!1,3))}var ie=class{constructor(t,i){this.urlSerializer=t,this.urlTree=i}lineralizeSegments(t,i){let e=[],r=i.root;for(;;){if(e=e.concat(r.segments),r.numberOfChildren===0)return d(e);if(r.numberOfChildren>1||!r.children[f])return gi(t.redirectTo);r=r.children[f]}}applyRedirectCommands(t,i,e){let r=this.applyRedirectCreateUrlTree(i,this.urlSerializer.parse(i),t,e);if(i.startsWith("/"))throw new hn(r);return r}applyRedirectCreateUrlTree(t,i,e,r){let s=this.createSegmentGroup(t,i.root,e,r);return new W(s,this.createQueryParams(i.queryParams,this.urlTree.queryParams),i.fragment)}createQueryParams(t,i){let e={};return Object.entries(t).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);e[r]=i[a]}else e[r]=s}),e}createSegmentGroup(t,i,e,r){let s=this.createSegments(t,i.segments,e,r),o={};return Object.entries(i.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(t,c,e,r)}),new Q(s,o)}createSegments(t,i,e,r){return i.map(s=>s.path.startsWith(":")?this.findPosParam(t,s,r):this.findOrReturn(s,e))}findPosParam(t,i,e){let r=e[i.path.substring(1)];if(!r)throw new y(4001,!1);return r}findOrReturn(t,i){let e=0;for(let r of i){if(r.path===t.path)return i.splice(e),r;e++}return t}},se={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Qi(n,t,i,e,r){let s=pe(n,t,i);return s.matched?(e=B0(t,e),fi(e,t,i,r).pipe(m(o=>o===!0?s:h({},se)))):d(s)}function pe(n,t,i){if(t.path==="**")return mi(i);if(t.path==="")return t.pathMatch==="full"&&(n.hasChildren()||i.length>0)?h({},se):{matched:!0,consumedSegments:[],remainingSegments:i,parameters:{},positionalParamSegments:{}};let r=(t.matcher||f0)(i,n,t);if(!r)return h({},se);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?h(h({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:i.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function mi(n){return{matched:!0,parameters:n.at(-1)?.parameters??{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function mr(n,t,i,e){return i.length>0&&Li(n,i,e)?{segmentGroup:new Q(t,Ai(e,new Q(i,n.children))),slicedSegments:[]}:i.length===0&&yi(n,i,e)?{segmentGroup:new Q(n.segments,Ci(n,i,e,n.children)),slicedSegments:i}:{segmentGroup:new Q(n.segments,n.children),slicedSegments:i}}function Ci(n,t,i,e){let r={};for(let s of i)if(gn(n,t,s)&&!e[N(s)]){let o=new Q([],{});r[N(s)]=o}return h(h({},e),r)}function Ai(n,t){let i={};i[f]=t;for(let e of n)if(e.path===""&&N(e)!==f){let r=new Q([],{});i[N(e)]=r}return i}function Li(n,t,i){return i.some(e=>gn(n,t,e)&&N(e)!==f)}function yi(n,t,i){return i.some(e=>gn(n,t,e))}function gn(n,t,i){return(n.hasChildren()||t.length>0)&&i.pathMatch==="full"?!1:i.path===""}function wi(n,t,i,e){return N(n)!==e&&(e===f||!gn(t,i,n))?!1:pe(t,n,i).matched}function Si(n,t,i){return t.length===0&&!n.children[i]}var oe=class{};function bi(n,t,i,e,r,s,o="emptyOnly"){return new ae(n,t,i,e,r,o,s).recognize()}var Mi=31,ae=class{constructor(t,i,e,r,s,o,a){this.injector=t,this.configLoader=i,this.rootComponentType=e,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new ie(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(t){return new y(4002,`'${t.segmentGroup}'`)}recognize(){let t=mr(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(m(i=>{let e=new Ut([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,{},f,this.rootComponentType,null,{}),r=new R(e,i),s=new cn("",r),o=O0(e,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(t){return this.processSegmentGroup(this.injector,this.config,t,f).pipe(rt(e=>{if(e instanceof hn)return this.urlTree=e.urlTree,this.match(e.urlTree.root);throw e instanceof $t?this.noMatchError(e):e}))}inheritParamsAndData(t,i){let e=t.value,r=ce(e,i,this.paramsInheritanceStrategy);e.params=Object.freeze(r.params),e.data=Object.freeze(r.data),t.children.forEach(s=>this.inheritParamsAndData(s,e))}processSegmentGroup(t,i,e,r){return e.segments.length===0&&e.hasChildren()?this.processChildren(t,i,e):this.processSegment(t,i,e,e.segments,r,!0).pipe(m(s=>s instanceof R?[s]:[]))}processChildren(t,i,e){let r=[];for(let s of Object.keys(e.children))s==="primary"?r.unshift(s):r.push(s);return S(r).pipe(it(s=>{let o=e.children[s],a=H0(i,s);return this.processSegmentGroup(t,a,o,s)}),be((s,o)=>(s.push(...o),s)),Ln(null),Se(),b(s=>{if(s===null)return at(e);let o=_r(s);return Ri(o),d(o)}))}processSegment(t,i,e,r,s,o){return S(i).pipe(it(a=>this.processSegmentAgainstRoute(a._injector??t,i,a,e,r,s,o).pipe(rt(c=>{if(c instanceof $t)return d(null);throw c}))),_(a=>!!a),rt(a=>{if(zr(a))return Si(e,r,s)?d(new oe):at(e);throw a}))}processSegmentAgainstRoute(t,i,e,r,s,o,a){return wi(e,r,s,o)?e.redirectTo===void 0?this.matchSegmentAgainstRoute(t,r,e,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(t,r,i,e,s,o):at(r):at(r)}expandSegmentAgainstRouteUsingRedirect(t,i,e,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=pe(i,r,s);if(!a)return at(i);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Mi&&(this.allowRedirects=!1));let v=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,v).pipe(b(g=>this.processSegment(t,e,i,g.concat(u),o,!1)))}matchSegmentAgainstRoute(t,i,e,r,s){let o=Qi(i,e,r,t,this.urlSerializer);return e.path==="**"&&(i.children={}),o.pipe(O(a=>a.matched?(t=e._injector??t,this.getChildConfig(t,e,r).pipe(O(({routes:c})=>{let l=e._loadedInjector??t,{consumedSegments:u,remainingSegments:v,parameters:g}=a,C=new Ut(u,g,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Ti(e),N(e),e.component??e._loadedComponent??null,e,Di(e)),{segmentGroup:vt,slicedSegments:Qt}=mr(i,u,v,c);if(Qt.length===0&&vt.hasChildren())return this.processChildren(l,c,vt).pipe(m(J=>J===null?null:new R(C,J)));if(c.length===0&&Qt.length===0)return d(new R(C,[]));let vn=N(e)===s;return this.processSegment(l,c,vt,Qt,vn?f:s,!0).pipe(m(J=>new R(C,J instanceof R?[J]:[])))}))):at(i)))}getChildConfig(t,i,e){return i.children?d({routes:i.children,injector:t}):i.loadChildren?i._loadedRoutes!==void 0?d({routes:i._loadedRoutes,injector:i._loadedInjector}):pi(t,i,e,this.urlSerializer).pipe(b(r=>r?this.configLoader.loadChildren(t,i).pipe(A(s=>{i._loadedRoutes=s.routes,i._loadedInjector=s.injector})):vi(i))):d({routes:[],injector:t})}};function Ri(n){n.sort((t,i)=>t.value.outlet===f?-1:i.value.outlet===f?1:t.value.outlet.localeCompare(i.value.outlet))}function Ii(n){let t=n.value.routeConfig;return t&&t.path===""}function _r(n){let t=[],i=new Set;for(let e of n){if(!Ii(e)){t.push(e);continue}let r=t.find(s=>e.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...e.children),i.add(r)):t.push(e)}for(let e of i){let r=_r(e.children);t.push(new R(e.value,r))}return t.filter(e=>!i.has(e))}function Ti(n){return n.data||{}}function Di(n){return n.resolve||{}}function Ei(n,t,i,e,r,s){return b(o=>bi(n,t,i,e,o.extractedUrl,r,s).pipe(m(({state:a,tree:c})=>w(h({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function xi(n,t){return b(i=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=i;if(!r.length)return d(i);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of qr(c))o.add(l);let a=0;return S(o).pipe(it(c=>s.has(c)?Oi(c,e,n,t):(c.data=ce(c,c.parent,n).resolve,d(void 0))),A(()=>a++),yn(1),b(c=>a===o.size?d(i):tt))})}function qr(n){let t=n.children.map(i=>qr(i)).flat();return[n,...t]}function Oi(n,t,i,e){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!$r(r)&&(s[kt]=r.title),Ui(s,n,t,e).pipe(m(o=>(n._resolvedData=o,n.data=ce(n,n.parent,i).resolve,null)))}function Ui(n,t,i,e){let r=kn(n);if(r.length===0)return d({});let s={};return S(r).pipe(b(o=>Pi(n[o],t,i,e).pipe(_(),A(a=>{s[o]=a}))),yn(1),we(s),rt(o=>zr(o)?tt:mt(o)))}function Pi(n,t,i,e){let r=zt(t)??e,s=gt(n,r),o=s.resolve?s.resolve(t,i):V(r,()=>s(t,i));return X(o)}function $n(n){return O(t=>{let i=n(t);return i?S(i).pipe(m(()=>t)):d(t)})}var Vr=(()=>{let t=class t{buildTitle(e){let r,s=e.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===f);return r}getResolvedTitleForRoute(e){return e.data[kt]}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:()=>(()=>p($i))(),providedIn:"root"});let n=t;return n})(),$i=(()=>{let t=class t extends Vr{constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}};t.\u0275fac=function(r){return new(r||t)(q(ur))},t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),_t=new T("",{providedIn:"root",factory:()=>({})}),jt=new T("ROUTES"),fe=(()=>{let t=class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=p(Gt)}loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return d(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let r=X(e.loadComponent()).pipe(m(Br),A(o=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=o}),Bt(()=>{this.componentLoaders.delete(e)})),s=new mn(r,()=>new F).pipe(Qn());return this.componentLoaders.set(e,s),s}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return d({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=ji(r,this.compiler,e,this.onLoadEndListener).pipe(Bt(()=>{this.childrenLoaders.delete(r)})),a=new mn(o,()=>new F).pipe(Qn());return this.childrenLoaders.set(r,a),a}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();function ji(n,t,i,e){return X(n.loadChildren()).pipe(m(Br),b(r=>r instanceof Xe||Array.isArray(r)?d(r):S(t.compileModuleAsync(r))),m(r=>{e&&e(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(i).injector,o=s.get(jt,[],{optional:!0,self:!0}).flat()),{routes:o.map(de),injector:s}}))}function ki(n){return n&&typeof n=="object"&&"default"in n}function Br(n){return ki(n)?n.default:n}var ge=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:()=>(()=>p(Ni))(),providedIn:"root"});let n=t;return n})(),Ni=(()=>{let t=class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),Hr=new T(""),Wr=new T("");function Zi(n,t,i){let e=n.get(Wr),r=n.get(rr);return n.get(ot).runOutsideAngular(()=>{if(!r.startViewTransition||e.skipNextTransition)return e.skipNextTransition=!1,Promise.resolve();let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),zi(n))),{onViewTransitionCreated:c}=e;return c&&V(n,()=>c({transition:a,from:t,to:i})),o})}function zi(n){return new Promise(t=>{Ze(t,{injector:n})})}var ve=(()=>{let t=class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new F,this.transitionAbortSubject=new F,this.configLoader=p(fe),this.environmentInjector=p(Ct),this.urlSerializer=p(Nt),this.rootContexts=p(Zt),this.location=p(yt),this.inputBindingEnabled=p(fn,{optional:!0})!==null,this.titleStrategy=p(Vr),this.options=p(_t,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=p(ge),this.createViewTransition=p(Hr,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>d(void 0),this.rootComponentType=null;let e=s=>this.events.next(new Bn(s)),r=s=>this.events.next(new Hn(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;this.transitions?.next(w(h(h({},this.transitions.value),e),{id:r}))}setupNavigations(e,r,s){return this.transitions=new I({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Rt,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Z(o=>o.id!==0),m(o=>w(h({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),O(o=>{this.currentTransition=o;let a=!1,c=!1;return d(o).pipe(A(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?w(h({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),O(l=>{let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&v!=="reload"){let g="";return this.events.next(new K(l.id,this.urlSerializer.serialize(l.rawUrl),g,0)),l.resolve(null),tt}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return d(l).pipe(O(g=>{let C=this.transitions?.getValue();return this.events.next(new pt(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),C!==this.transitions?.getValue()?tt:Promise.resolve(g)}),Ei(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),A(g=>{o.targetSnapshot=g.targetSnapshot,o.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation=w(h({},this.currentNavigation),{finalUrl:g.urlAfterRedirects});let C=new sn(g.id,this.urlSerializer.serialize(g.extractedUrl),this.urlSerializer.serialize(g.urlAfterRedirects),g.targetSnapshot);this.events.next(C)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:g,extractedUrl:C,source:vt,restoredState:Qt,extras:vn}=l,J=new pt(g,this.urlSerializer.serialize(C),vt,Qt);this.events.next(J);let d0=Ur(this.rootComponentType).snapshot;return this.currentTransition=o=w(h({},l),{targetSnapshot:d0,urlAfterRedirects:C,extras:w(h({},vn),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=C,d(o)}else{let g="";return this.events.next(new K(l.id,this.urlSerializer.serialize(l.extractedUrl),g,1)),l.resolve(null),tt}}),A(l=>{let u=new Fn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),m(l=>(this.currentTransition=o=w(h({},l),{guards:G0(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),si(this.environmentInjector,l=>this.events.next(l)),A(l=>{if(o.guardsResult=l.guardsResult,dt(l.guardsResult))throw kr(this.urlSerializer,l.guardsResult);let u=new _n(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),Z(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",3),!1)),$n(l=>{if(l.guards.canActivateChecks.length)return d(l).pipe(A(u=>{let v=new qn(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(v)}),O(u=>{let v=!1;return d(u).pipe(xi(this.paramsInheritanceStrategy,this.environmentInjector),A({next:()=>v=!0,complete:()=>{v||this.cancelNavigationTransition(u,"",2)}}))}),A(u=>{let v=new Vn(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(v)}))}),$n(l=>{let u=v=>{let g=[];v.routeConfig?.loadComponent&&!v.routeConfig._loadedComponent&&g.push(this.configLoader.loadComponent(v.routeConfig).pipe(A(C=>{v.component=C}),m(()=>{})));for(let C of v.children)g.push(...u(C));return g};return Vt(u(l.targetSnapshot.root)).pipe(Ln(null),st(1))}),$n(()=>this.afterPreactivation()),O(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,v=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return v?S(v).pipe(m(()=>o)):d(o)}),m(l=>{let u=z0(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=w(h({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),A(()=>{this.events.next(new xt)}),W0(this.rootContexts,e.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),st(1),A({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new x(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),Re(this.transitionAbortSubject.pipe(A(l=>{throw l}))),Bt(()=>{if(!a&&!c){let l="";this.cancelNavigationTransition(o,l,1)}this.currentNavigation?.id===o.id&&(this.currentNavigation=null)}),rt(l=>{if(c=!0,Zr(l))this.events.next(new G(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),q0(l)?this.events.next(new Ot(l.url)):o.resolve(!1);else{this.events.next(new Et(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(e.errorHandler(l))}catch(u){o.reject(u)}}return tt}))}))}cancelNavigationTransition(e,r,s){let o=new G(e.id,this.urlSerializer.serialize(e.extractedUrl),r,s);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();function Fi(n){return n!==Rt}var _i=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:()=>(()=>p(qi))(),providedIn:"root"});let n=t;return n})(),le=class{shouldDetach(t){return!1}store(t,i){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,i){return t.routeConfig===i.routeConfig}},qi=(()=>{let t=class t extends le{};t.\u0275fac=(()=>{let e;return function(s){return(e||(e=Mn(t)))(s||t)}})(),t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),Gr=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:()=>(()=>p(Vi))(),providedIn:"root"});let n=t;return n})(),Vi=(()=>{let t=class t extends Gr{constructor(){super(...arguments),this.location=p(yt),this.urlSerializer=p(Nt),this.options=p(_t,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=p(ge),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new W,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Ur(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type==="popstate"&&e(r.url,r.state)})}handleRouterEvent(e,r){if(e instanceof pt)this.stateMemento=this.createStateMemento();else if(e instanceof K)this.rawUrlTree=r.initialUrl;else if(e instanceof sn){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else e instanceof xt?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):e instanceof G&&(e.code===3||e.code===2)?this.restoreHistory(r):e instanceof Et?this.restoreHistory(r,!0):e instanceof x&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let s=this.urlSerializer.serialize(e);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=h(h({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=h(h({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===e.finalUrl&&o===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:r}:{navigationId:e}}};t.\u0275fac=(()=>{let e;return function(s){return(e||(e=Mn(t)))(s||t)}})(),t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),bt=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(bt||{});function Kr(n,t){n.events.pipe(Z(i=>i instanceof x||i instanceof G||i instanceof Et||i instanceof K),m(i=>i instanceof x||i instanceof K?bt.COMPLETE:(i instanceof G?i.code===0||i.code===1:!1)?bt.REDIRECTING:bt.FAILED),Z(i=>i!==bt.REDIRECTING),st(1)).subscribe(()=>{t()})}function Bi(n){throw n}var Hi={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Wi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},U=(()=>{let t=class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=p(Je),this.stateManager=p(Gr),this.options=p(_t,{optional:!0})||{},this.pendingTasks=p(tr),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=p(ve),this.urlSerializer=p(Nt),this.location=p(yt),this.urlHandlingStrategy=p(ge),this._events=new F,this.errorHandler=this.options.errorHandler||Bi,this.navigated=!1,this.routeReuseStrategy=p(_i),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=p(jt,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!p(fn,{optional:!0}),this.eventsSubscription=new me,this.isNgZoneEnabled=p(ot)instanceof ot&&ot.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof G&&r.code!==0&&r.code!==1)this.navigated=!0;else if(r instanceof x)this.navigated=!0;else if(r instanceof Ot){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||Fi(s.source)};this.scheduleNavigation(a,Rt,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}Ki(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Rt,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription||(this.nonRouterCurrentEntryChangeSubscription=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",r)},0)}))}navigateToSyncWithBrowser(e,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=h({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(e);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(de),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,v=null;switch(c){case"merge":v=h(h({},this.currentUrlTree.queryParams),o);break;case"preserve":v=this.currentUrlTree.queryParams;break;default:v=o||null}v!==null&&(v=this.removeEmptyProps(v));let g;try{let C=s?s.snapshot:this.routerState.snapshot.root;g=Dr(C)}catch{(typeof e[0]!="string"||!e[0].startsWith("/"))&&(e=[]),g=this.currentUrlTree.root}return Er(g,e,v,u??null)}navigateByUrl(e,r={skipLocationChange:!1}){let s=dt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,Rt,null,r)}navigate(e,r={skipLocationChange:!1}){return Gi(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,r){let s;if(r===!0?s=h({},Hi):r===!1?s=h({},Wi):s=r,dt(e))return pr(this.currentUrlTree,e,s);let o=this.parseUrl(e);return pr(this.currentUrlTree,o,s)}removeEmptyProps(e){return Object.entries(e).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(e,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((g,C)=>{c=g,l=C});let v=this.pendingTasks.add();return Kr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(g=>Promise.reject(g))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();function Gi(n){for(let t=0;t<n.length;t++)if(n[t]==null)throw new y(4008,!1)}function Ki(n){return!(n instanceof xt)&&!(n instanceof Ot)}var Yr=(()=>{let t=class t{constructor(e,r,s,o,a,c){this.router=e,this.route=r,this.tabIndexAttribute=s,this.renderer=o,this.el=a,this.locationStrategy=c,this.href=null,this.commands=null,this.onChanges=new F,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=e.events.subscribe(u=>{u instanceof x&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(e){e!=null?(this.commands=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(e,r,s,o,a){if(this.urlTree===null||this.isAnchorElement&&(e!==0||r||s||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state};return this.router.navigateByUrl(this.urlTree,c),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){this.href=this.urlTree!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null;let e=this.href===null?null:$e(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",e)}applyAttributeValue(e,r){let s=this.renderer,o=this.el.nativeElement;r!==null?s.setAttribute(o,e,r):s.removeAttribute(o,e)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};t.\u0275fac=function(r){return new(r||t)(z(U),z(Y),xe("tabindex"),z(ke),z(je),z(Lt))},t.\u0275dir=Sn({type:t,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(r,s){r&1&&Ge("click",function(a){return s.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&Fe("target",s.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",relativeTo:"relativeTo",preserveFragment:["preserveFragment","preserveFragment",Kt],skipLocationChange:["skipLocationChange","skipLocationChange",Kt],replaceUrl:["replaceUrl","replaceUrl",Kt],routerLink:"routerLink"},standalone:!0,features:[ze,bn]});let n=t;return n})();var dn=class{};var Yi=(()=>{let t=class t{constructor(e,r,s,o,a){this.router=e,this.injector=s,this.preloadingStrategy=o,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(Z(e=>e instanceof x),it(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,r){let s=[];for(let o of r){o.providers&&!o._injector&&(o._injector=Tn(o.providers,e,`Route: ${o.path}`));let a=o._injector??e,c=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&s.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&s.push(this.processRoutes(c,o.children??o._loadedRoutes))}return S(s).pipe(Cn())}preloadConfig(e,r){return this.preloadingStrategy.preload(r,()=>{let s;r.loadChildren&&r.canLoad===void 0?s=this.loader.loadChildren(e,r):s=d(null);let o=s.pipe(b(a=>a===null?d(void 0):(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,this.processRoutes(a.injector??e,a.routes))));if(r.loadComponent&&!r._loadedComponent){let a=this.loader.loadComponent(r);return S([o,a]).pipe(Cn())}else return o})}};t.\u0275fac=function(r){return new(r||t)(q(U),q(Gt),q(Ct),q(dn),q(fe))},t.\u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),Xr=new T(""),Xi=(()=>{let t=class t{constructor(e,r,s,o,a={}){this.urlSerializer=e,this.transitions=r,this.viewportScroller=s,this.zone=o,this.options=a,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},a.scrollPositionRestoration=a.scrollPositionRestoration||"disabled",a.anchorScrolling=a.anchorScrolling||"disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof pt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof x?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof K&&e.code===0&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof on&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,r){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new on(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,r))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}};t.\u0275fac=function(r){Ne()},t.\u0275prov=L({token:t,factory:t.\u0275fac});let n=t;return n})();function Jr(n,...t){return Pe([{provide:jt,multi:!0,useValue:n},[],{provide:Y,useFactory:t0,deps:[U]},{provide:xn,multi:!0,useFactory:n0},t.map(i=>i.\u0275providers)])}function t0(n){return n.routerState.root}function qt(n,t){return{\u0275kind:n,\u0275providers:t}}function n0(){let n=p(Rn);return t=>{let i=n.get(nr);if(t!==i.components[0])return;let e=n.get(U),r=n.get(e0);n.get(Qe)===1&&e.initialNavigation(),n.get(r0,null,wn.Optional)?.setUpPreloading(),n.get(Xr,null,wn.Optional)?.init(),e.resetRootComponentType(i.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var e0=new T("",{factory:()=>new F}),Qe=new T("",{providedIn:"root",factory:()=>1});function Ji(){return qt(2,[{provide:Qe,useValue:0},{provide:En,multi:!0,deps:[Rn],useFactory:t=>{let i=t.get(ir,Promise.resolve());return()=>i.then(()=>new Promise(e=>{let r=t.get(U),s=t.get(e0);Kr(r,()=>{e(!0)}),t.get(ve).afterPreactivation=()=>(e(!0),s.closed?d(void 0):s),r.initialNavigation()}))}}])}function t2(){return qt(3,[{provide:En,multi:!0,useFactory:()=>{let t=p(U);return()=>{t.setUpLocationChangeListener()}}},{provide:Qe,useValue:2}])}var r0=new T("");function n2(n){return qt(0,[{provide:r0,useExisting:Yi},{provide:dn,useExisting:n}])}function e2(){return qt(8,[Qr,{provide:fn,useExisting:Qr}])}function r2(n){let t=[{provide:Hr,useValue:Zi},{provide:Wr,useValue:h({skipNextTransition:!!n?.skipInitialTransition},n)}];return qt(9,t)}var Cr=new T("ROUTER_FORROOT_GUARD"),i2=[yt,{provide:Nt,useClass:Tt},U,Zt,{provide:Y,useFactory:t0,deps:[U]},fe,[]],i0=(()=>{let t=class t{constructor(e){}static forRoot(e,r){return{ngModule:t,providers:[i2,[],{provide:jt,multi:!0,useValue:e},{provide:Cr,useFactory:l2,deps:[[U,new Oe,new Ue]]},{provide:_t,useValue:r||{}},r?.useHash?o2():a2(),s2(),r?.preloadingStrategy?n2(r.preloadingStrategy).\u0275providers:[],r?.initialNavigation?c2(r):[],r?.bindToComponentInputs?e2().\u0275providers:[],r?.enableViewTransitions?r2().\u0275providers:[],u2()]}}static forChild(e){return{ngModule:t,providers:[{provide:jt,multi:!0,useValue:e}]}}};t.\u0275fac=function(r){return new(r||t)(q(Cr,8))},t.\u0275mod=De({type:t}),t.\u0275inj=Ie({});let n=t;return n})();function s2(){return{provide:Xr,useFactory:()=>{let n=p(lr),t=p(ot),i=p(_t),e=p(ve),r=p(Nt);return i.scrollOffset&&n.setOffset(i.scrollOffset),new Xi(r,e,n,t,i)}}}function o2(){return{provide:Lt,useClass:or}}function a2(){return{provide:Lt,useClass:sr}}function l2(n){return"guarded"}function c2(n){return[n.initialNavigation==="disabled"?t2().\u0275providers:[],n.initialNavigation==="enabledBlocking"?Ji().\u0275providers:[]]}var Ar=new T("");function u2(){return[{provide:Ar,useFactory:n0},{provide:xn,multi:!0,useExisting:Ar}]}var o0=[{path:"",redirectTo:"auto",pathMatch:"full"},{path:"auto",loadComponent:()=>import("./chunk-YA5XO5SB.js").then(n=>n.AutoCodeToGifPageComponent)},{path:"frame-per-frame",loadComponent:()=>import("./chunk-PBGWQYTU.js").then(n=>n.FramePerFrameCodeToGifPageComponent)}];var a0={providers:[Jr(o0),{provide:hr,useValue:{fullLibraryLoader:()=>import("./chunk-IJJSOYG7.js")}}]};var l0=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=P({type:t,selectors:[["app-logo"]],hostVars:4,hostBindings:function(r,s){r&2&&_e("--logo-color",s.color)("--logo-background",s.background)},inputs:{color:"color",background:"background"},standalone:!0,features:[j],decls:61,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","version","1.1","viewBox","0.00 0.00 1060.00 310.00",2,"--bg","var(--logo-background, transparent)","--col","var(--logo-color, red)"],["fill","var(--bg)","d",`
  M 0.00 0.00
  L 1060.00 0.00
  L 1060.00 310.00
  L 0.00 310.00
  L 0.00 0.00
  Z
  M 455.90 32.79
  A 0.27 0.27 0.0 0 0 455.63 32.52
  L 30.93 32.52
  A 0.27 0.27 0.0 0 0 30.66 32.79
  L 30.66 40.73
  A 0.27 0.27 0.0 0 0 30.93 41.00
  L 455.63 41.00
  A 0.27 0.27 0.0 0 0 455.90 40.73
  L 455.90 32.79
  Z
  M 477.46 32.76
  A 0.32 0.32 0.0 0 0 477.14 33.08
  L 477.14 211.79
  A 0.32 0.32 0.0 0 0 477.46 212.11
  L 1045.93 212.11
  A 0.32 0.32 0.0 0 0 1046.25 211.79
  L 1046.25 33.08
  A 0.32 0.32 0.0 0 0 1045.93 32.76
  L 477.46 32.76
  Z
  M 221.06 67.27
  L 220.83 66.83
  Q 220.66 66.52 220.31 66.51
  C 218.88 66.51 217.64 65.55 216.21 65.15
  Q 208.49 62.98 199.81 62.47
  Q 185.15 61.61 174.05 63.45
  Q 168.55 64.36 162.91 66.59
  Q 159.02 68.13 154.73 71.70
  Q 147.49 77.72 140.26 83.79
  Q 137.33 86.25 134.19 89.84
  Q 133.61 90.51 133.27 91.32
  Q 132.91 92.19 132.45 93.03
  Q 131.79 94.20 131.40 95.58
  Q 129.80 101.25 129.78 107.06
  Q 129.68 127.75 129.80 149.55
  Q 129.83 155.23 131.51 160.86
  Q 134.49 170.84 143.21 176.04
  Q 143.73 176.35 144.31 176.45
  Q 144.76 176.53 144.93 176.95
  A 0.88 0.87 72.4 0 0 145.95 177.48
  Q 146.59 177.33 146.92 177.90
  Q 147.15 178.33 147.63 178.43
  Q 148.72 178.66 149.76 179.06
  Q 156.36 181.58 164.40 182.24
  Q 175.22 183.14 185.93 182.11
  C 195.32 181.20 204.20 178.88 211.43 172.47
  C 216.54 167.93 222.30 163.64 227.45 158.83
  Q 229.93 156.51 231.16 154.49
  Q 235.19 147.89 235.22 139.25
  Q 235.31 114.39 235.21 90.00
  Q 235.18 81.92 230.82 74.70
  Q 229.82 73.06 224.93 69.06
  A 1.84 1.76 66.3 0 0 223.96 68.66
  Q 223.13 68.58 222.82 67.82
  Q 222.71 67.54 222.43 67.43
  Q 222.21 67.33 222.00 67.48
  Q 221.40 67.92 221.06 67.27
  Z
  M 82.64 108.28
  Q 90.27 108.19 98.98 108.30
  C 101.33 108.32 103.06 107.49 104.82 105.98
  Q 112.40 99.47 119.66 93.57
  Q 123.18 90.72 123.23 86.81
  Q 123.33 78.51 123.18 70.20
  Q 123.08 64.30 117.44 64.28
  Q 99.89 64.20 82.67 64.31
  Q 72.02 64.38 64.84 67.14
  Q 59.84 69.07 55.74 72.51
  Q 48.72 78.37 41.70 84.25
  C 40.03 85.64 38.77 87.24 37.22 88.70
  C 33.02 92.67 30.89 100.92 30.84 106.03
  Q 30.68 124.65 30.77 148.01
  Q 30.82 159.19 36.82 168.10
  C 39.92 172.71 44.67 176.21 49.86 178.08
  Q 56.55 180.48 65.37 180.50
  Q 82.48 180.52 99.69 180.46
  Q 102.04 180.46 103.79 178.99
  Q 111.98 172.15 120.43 165.18
  C 122.07 163.84 123.18 161.68 123.19 159.57
  Q 123.24 153.29 123.30 144.40
  Q 123.32 141.80 122.43 139.71
  Q 121.18 136.71 117.50 136.76
  Q 104.47 136.94 89.27 136.51
  Q 88.24 136.49 87.17 136.43
  C 84.13 136.29 82.26 134.13 82.26 131.06
  Q 82.24 119.67 82.27 108.66
  A 0.38 0.37 -90.0 0 1 82.64 108.28
  Z
  M 348.24 151.13
  C 349.89 147.39 351.16 142.64 351.19 138.50
  Q 351.33 114.31 351.29 93.00
  Q 351.28 84.61 347.49 77.32
  Q 346.47 75.35 345.06 74.06
  Q 343.44 72.57 342.06 71.03
  C 341.25 70.13 340.17 70.15 339.32 69.31
  Q 338.52 68.51 337.42 68.08
  Q 327.82 64.33 317.41 64.30
  Q 294.42 64.23 270.57 64.28
  C 268.50 64.28 266.24 64.83 264.68 66.19
  Q 257.24 72.70 248.72 79.69
  C 246.85 81.22 245.99 83.74 245.99 86.16
  Q 246.04 126.24 246.02 174.83
  Q 246.02 177.74 248.15 179.38
  Q 249.59 180.49 251.38 180.49
  Q 276.81 180.53 300.48 180.47
  Q 306.83 180.45 314.05 178.70
  Q 315.22 178.41 316.19 177.90
  C 317.98 176.97 319.66 176.84 321.41 175.63
  C 324.30 173.63 327.10 171.71 329.72 169.35
  C 334.08 165.43 338.77 162.06 343.16 157.97
  Q 346.65 154.73 348.24 151.13
  Z
  M 432.00 137.03
  Q 430.59 137.04 431.67 136.13
  L 442.27 127.25
  A 6.56 6.56 0.0 0 0 444.61 122.45
  Q 444.85 114.72 444.68 105.75
  Q 444.64 103.25 442.92 101.91
  Q 442.47 101.56 442.85 101.14
  Q 444.41 99.38 446.04 98.14
  Q 449.94 95.15 453.48 92.03
  Q 455.89 89.93 455.98 85.77
  Q 456.19 76.58 455.69 68.74
  Q 455.56 66.62 453.07 65.02
  Q 452.21 64.47 450.85 64.44
  Q 449.64 64.42 448.49 64.41
  Q 415.75 64.12 386.06 64.29
  C 384.36 64.30 382.21 64.93 380.89 66.05
  Q 372.73 72.95 364.55 79.85
  C 362.98 81.17 362.00 83.22 362.00 85.25
  Q 362.09 147.86 362.00 174.25
  Q 361.99 177.55 364.06 179.29
  Q 365.51 180.50 367.38 180.50
  Q 398.93 180.55 431.64 180.47
  C 433.26 180.46 434.70 180.43 436.04 179.32
  Q 443.44 173.18 450.19 167.63
  Q 452.73 165.53 455.15 162.87
  A 1.30 1.27 -23.7 0 0 455.49 162.03
  C 455.54 160.66 455.96 159.47 455.95 158.05
  Q 455.93 153.30 456.02 148.03
  C 456.12 142.45 456.34 137.13 449.29 137.06
  Q 440.02 136.96 432.00 137.03
  Z
  M 455.90 204.10
  A 0.27 0.27 0.0 0 0 455.63 203.83
  L 30.93 203.83
  A 0.27 0.27 0.0 0 0 30.66 204.10
  L 30.66 212.04
  A 0.27 0.27 0.0 0 0 30.93 212.31
  L 455.63 212.31
  A 0.27 0.27 0.0 0 0 455.90 212.04
  L 455.90 204.10
  Z
  M 438.6367 271.6996
  A 16.71 13.78 89.6 0 0 452.2997 254.8938
  A 16.71 13.78 89.6 0 0 438.4033 238.2804
  A 16.71 13.78 89.6 0 0 424.7403 255.0862
  A 16.71 13.78 89.6 0 0 438.6367 271.6996
  Z
  M 538.72 267.79
  C 537.08 267.47 534.43 265.93 533.60 264.63
  Q 529.08 257.45 531.68 249.39
  Q 534.51 240.65 543.38 242.52
  Q 545.21 242.91 546.38 244.38
  Q 547.02 245.17 547.69 244.40
  L 549.04 242.84
  Q 549.63 242.18 548.86 241.74
  C 546.94 240.63 545.22 238.90 542.93 238.68
  Q 533.71 237.79 529.26 244.97
  C 522.95 255.14 527.66 273.81 542.87 271.23
  Q 545.88 270.72 549.48 267.67
  Q 550.35 266.93 549.50 266.18
  L 548.23 265.04
  Q 547.46 264.36 546.83 265.15
  Q 543.89 268.81 538.72 267.79
  Z
  M 566.6075 271.6998
  A 16.71 13.78 89.7 0 0 580.2998 254.9178
  A 16.71 13.78 89.7 0 0 566.4325 238.2802
  A 16.71 13.78 89.7 0 0 552.7402 255.0622
  A 16.71 13.78 89.7 0 0 566.6075 271.6998
  Z
  M 656.31 244.76
  C 658.59 240.49 664.94 242.13 667.98 244.50
  Q 668.56 244.95 669.21 244.63
  Q 670.14 244.17 670.67 243.04
  Q 670.96 242.42 670.44 241.97
  Q 665.17 237.31 658.45 238.98
  Q 653.72 240.17 652.17 244.45
  C 650.24 249.74 654.18 253.86 658.85 255.58
  C 662.84 257.06 668.99 258.69 667.56 264.29
  C 667.04 266.34 664.86 267.44 662.95 267.75
  Q 656.58 268.78 652.96 263.91
  Q 652.86 263.77 652.72 263.88
  Q 651.21 265.19 650.15 267.14
  Q 650.12 267.20 650.17 267.25
  Q 657.36 273.19 665.37 270.73
  Q 668.56 269.75 670.21 267.55
  C 672.67 264.26 672.39 258.90 669.08 256.17
  C 666.38 253.93 662.64 252.76 659.31 251.37
  C 656.50 250.19 654.71 247.76 656.31 244.76
  Z
  M 840.39 267.35
  Q 834.07 269.40 829.13 264.44
  A 0.97 0.96 40.5 0 0 827.67 264.55
  L 826.33 266.37
  Q 825.85 267.03 826.49 267.53
  Q 833.78 273.23 841.65 270.65
  C 849.54 268.06 849.84 257.84 842.44 254.39
  Q 839.06 252.81 835.79 251.68
  C 832.52 250.54 829.67 246.45 833.01 243.68
  C 835.89 241.28 841.07 241.76 843.92 244.61
  A 0.92 0.91 -50.0 0 0 845.32 244.48
  L 846.11 243.34
  Q 846.74 242.44 845.92 241.71
  Q 840.49 236.88 833.36 239.37
  Q 827.20 241.52 827.70 248.16
  C 828.09 253.28 834.68 255.80 838.76 257.16
  Q 841.54 258.08 842.88 259.96
  C 844.69 262.52 843.46 266.35 840.39 267.35
  Z
  M 226.92 261.81
  Q 228.60 265.78 229.44 269.96
  A 1.30 1.30 0.0 0 0 230.71 271.00
  L 233.33 271.00
  Q 234.17 271.00 233.90 270.20
  L 223.66 239.49
  Q 223.50 239.00 222.98 239.00
  L 219.30 239.00
  A 0.67 0.66 8.7 0 0 218.68 239.45
  L 208.31 270.53
  A 0.16 0.15 -73.8 0 0 208.41 270.73
  Q 210.24 271.21 212.15 270.95
  Q 212.21 270.94 212.23 270.88
  L 215.12 261.82
  Q 215.30 261.25 215.90 261.25
  L 226.06 261.25
  Q 226.68 261.25 226.92 261.81
  Z
  M 242.54 244.97
  Q 249.14 257.25 257.00 270.38
  Q 257.38 271.00 258.10 271.00
  L 260.88 271.00
  Q 261.50 270.99 261.50 270.37
  L 261.50 239.26
  A 0.25 0.25 0.0 0 0 261.25 239.01
  L 257.77 239.00
  Q 257.55 239.00 257.54 239.22
  Q 257.29 251.50 257.94 263.78
  Q 258.11 266.97 256.91 264.01
  C 255.39 260.24 252.98 256.71 250.93 253.07
  Q 247.08 246.21 243.17 239.53
  Q 242.86 239.00 242.25 239.00
  L 239.25 239.00
  Q 238.75 239.00 238.75 239.50
  L 238.75 270.74
  Q 238.75 270.99 238.99 270.99
  L 242.28 270.99
  Q 242.56 270.99 242.56 270.72
  L 242.36 245.02
  Q 242.36 244.63 242.54 244.97
  Z
  M 274.25 239.28
  A 0.27 0.27 0.0 0 0 273.98 239.01
  L 270.52 239.01
  A 0.27 0.27 0.0 0 0 270.25 239.28
  L 270.25 270.72
  A 0.27 0.27 0.0 0 0 270.52 270.99
  L 273.98 270.99
  A 0.27 0.27 0.0 0 0 274.25 270.72
  L 274.25 239.28
  Z
  M 306.48 244.79
  Q 305.70 248.90 305.71 253.00
  Q 305.74 261.99 305.75 270.72
  Q 305.75 270.99 306.03 270.99
  L 309.26 270.99
  Q 309.50 270.99 309.50 270.74
  L 309.50 239.75
  Q 309.50 239.00 308.75 239.00
  L 304.98 239.00
  A 0.49 0.49 0.0 0 0 304.49 239.56
  C 304.65 240.74 303.88 241.68 303.49 242.75
  Q 300.01 252.17 296.95 261.42
  Q 296.35 263.22 295.73 261.43
  Q 292.26 251.53 288.74 241.80
  Q 288.32 240.63 287.69 239.52
  Q 287.40 239.00 286.80 239.00
  L 283.50 239.00
  A 0.50 0.50 0.0 0 0 283.00 239.50
  L 283.00 270.75
  Q 283.00 271.00 283.25 271.00
  L 286.46 270.98
  Q 286.64 270.98 286.64 270.80
  Q 287.09 257.10 286.23 245.13
  Q 286.09 243.20 286.75 245.02
  Q 290.14 254.51 293.65 264.05
  Q 294.27 265.75 295.06 267.20
  A 1.42 1.41 40.7 0 0 297.63 267.01
  L 305.87 244.54
  Q 305.91 244.43 306.02 244.46
  L 306.33 244.54
  Q 306.52 244.59 306.48 244.79
  Z
  M 332.67 261.25
  A 0.38 0.38 0.0 0 1 333.03 261.52
  L 335.78 270.73
  A 0.38 0.38 0.0 0 0 336.14 271.00
  L 339.66 271.00
  A 0.38 0.38 0.0 0 0 340.02 270.50
  L 329.54 239.26
  A 0.38 0.38 0.0 0 0 329.18 239.00
  L 325.11 239.00
  A 0.38 0.38 0.0 0 0 324.75 239.26
  L 314.31 270.46
  A 0.38 0.38 0.0 0 0 314.67 270.96
  L 317.90 271.02
  A 0.38 0.38 0.0 0 0 318.27 270.75
  L 321.22 261.51
  A 0.38 0.38 0.0 0 1 321.58 261.25
  L 332.67 261.25
  Z
  M 349.18 242.50
  A 0.32 0.32 0.0 0 1 349.50 242.82
  L 349.50 270.67
  A 0.32 0.32 0.0 0 0 349.82 270.99
  L 353.18 270.99
  A 0.32 0.32 0.0 0 0 353.50 270.67
  L 353.50 242.82
  A 0.32 0.32 0.0 0 1 353.82 242.50
  L 362.92 242.50
  A 0.32 0.32 0.0 0 0 363.24 242.18
  L 363.27 239.32
  A 0.32 0.32 0.0 0 0 362.95 239.00
  L 340.09 239.00
  A 0.32 0.32 0.0 0 0 339.77 239.31
  L 339.70 242.17
  A 0.32 0.32 0.0 0 0 340.02 242.50
  L 349.18 242.50
  Z
  M 373.00 242.87
  A 0.37 0.37 0.0 0 1 373.37 242.50
  L 386.85 242.50
  A 0.37 0.37 0.0 0 0 387.22 242.14
  L 387.28 239.38
  A 0.37 0.37 0.0 0 0 386.91 239.00
  L 369.12 239.00
  A 0.37 0.37 0.0 0 0 368.75 239.37
  L 368.75 270.63
  A 0.37 0.37 0.0 0 0 369.12 271.00
  L 387.36 270.99
  A 0.37 0.37 0.0 0 0 387.73 270.63
  L 387.76 267.85
  A 0.37 0.37 0.0 0 0 387.39 267.47
  L 373.37 267.52
  A 0.37 0.37 0.0 0 1 373.00 267.15
  L 373.00 256.37
  A 0.37 0.37 0.0 0 1 373.37 256.00
  L 384.63 256.00
  A 0.37 0.37 0.0 0 0 385.00 255.63
  L 384.99 252.87
  A 0.37 0.37 0.0 0 0 384.62 252.50
  L 373.38 252.50
  A 0.37 0.37 0.0 0 1 373.01 252.13
  L 373.00 242.87
  Z
  M 411.04 254.06
  C 409.30 250.78 408.16 247.42 406.53 244.08
  Q 405.42 241.82 404.36 239.67
  Q 403.99 238.92 403.11 238.95
  Q 403.08 238.95 400.74 239.04
  Q 399.84 239.07 400.24 239.88
  Q 404.29 248.00 408.81 257.66
  Q 409.63 259.42 409.57 261.57
  Q 409.43 266.33 409.51 270.53
  Q 409.51 270.99 409.98 270.99
  L 413.04 271.00
  Q 413.47 271.00 413.48 270.56
  Q 413.56 265.77 413.44 260.52
  Q 413.40 258.50 414.40 256.57
  Q 418.96 247.76 423.05 239.26
  Q 423.13 239.09 422.94 239.09
  L 419.19 238.97
  Q 418.96 238.96 418.86 239.17
  L 412.05 254.03
  A 0.56 0.56 0.0 0 1 411.04 254.06
  Z
  M 477.76 258.67
  C 477.78 264.70 474.23 269.57 467.52 267.31
  C 463.56 265.98 462.87 261.47 462.82 257.81
  Q 462.67 248.36 462.77 239.49
  Q 462.77 239.01 462.29 239.01
  L 459.20 239.00
  Q 458.80 239.00 458.79 239.41
  Q 458.62 249.36 458.90 258.91
  Q 459.04 263.88 461.28 267.26
  Q 463.30 270.32 466.98 271.06
  C 476.33 272.92 481.49 267.90 481.66 258.74
  Q 481.84 249.40 481.72 239.44
  A 0.44 0.44 0.0 0 0 481.27 239.01
  L 478.23 239.01
  Q 477.76 239.01 477.76 239.48
  Q 477.74 248.96 477.76 258.67
  Z
  M 495.25 257.50
  L 499.51 257.50
  Q 500.16 257.50 500.47 258.06
  L 507.52 270.45
  Q 507.84 271.01 508.49 271.01
  L 512.01 270.98
  A 0.31 0.31 0.0 0 0 512.25 270.49
  C 510.24 267.78 509.08 264.82 507.20 262.03
  Q 505.80 259.94 504.78 257.62
  Q 504.59 257.18 505.02 256.99
  Q 507.30 255.97 509.34 253.88
  Q 510.84 252.34 511.22 250.27
  C 512.15 245.25 510.07 240.93 505.03 239.76
  C 500.37 238.67 495.54 238.98 490.79 238.99
  Q 490.25 239.00 490.25 239.54
  L 490.25 270.50
  Q 490.25 271.00 490.75 271.00
  L 494.26 270.99
  Q 494.50 270.99 494.50 270.74
  L 494.50 258.25
  Q 494.50 257.50 495.25 257.50
  Z
  M 586.97 239.55
  L 587.03 270.39
  A 0.58 0.58 0.0 0 0 587.61 270.97
  L 596.01 270.95
  A 14.33 14.00 89.9 0 0 609.98 256.60
  L 609.98 253.26
  A 14.33 14.00 89.9 0 0 595.95 238.95
  L 587.55 238.97
  A 0.58 0.58 0.0 0 0 586.97 239.55
  Z
  M 620.98 243.05
  A 0.56 0.56 0.0 0 1 621.54 242.49
  L 634.68 242.50
  A 0.56 0.56 0.0 0 0 635.24 241.94
  L 635.27 239.56
  A 0.56 0.56 0.0 0 0 634.71 239.00
  L 617.56 239.00
  A 0.56 0.56 0.0 0 0 617.00 239.56
  L 617.00 270.43
  A 0.56 0.56 0.0 0 0 617.56 270.99
  L 635.18 270.99
  A 0.56 0.56 0.0 0 0 635.74 270.43
  L 635.75 268.05
  A 0.56 0.56 0.0 0 0 635.19 267.49
  L 621.56 267.52
  A 0.56 0.56 0.0 0 1 621.00 266.96
  L 620.98 256.55
  A 0.56 0.56 0.0 0 1 621.54 255.99
  L 632.45 255.98
  A 0.56 0.56 0.0 0 0 633.01 255.42
  L 632.98 253.06
  A 0.56 0.56 0.0 0 0 632.42 252.50
  L 621.56 252.51
  A 0.56 0.56 0.0 0 1 621.00 251.95
  L 620.98 243.05
  Z
  M 681.67 244.89
  Q 681.64 244.27 681.94 244.82
  Q 688.66 256.97 695.84 269.34
  C 697.05 271.42 698.20 271.17 700.24 271.02
  Q 701.00 270.96 701.00 270.20
  L 700.98 239.74
  Q 700.98 239.00 700.24 239.00
  L 697.72 239.01
  Q 697.04 239.01 697.03 239.69
  Q 696.85 252.19 697.53 265.00
  Q 697.56 265.56 697.29 265.08
  L 682.73 239.47
  A 0.88 0.87 75.3 0 0 681.97 239.02
  L 679.01 239.00
  Q 678.25 238.99 678.25 239.75
  L 678.26 270.24
  Q 678.26 270.96 678.98 270.98
  L 681.06 271.01
  Q 681.93 271.03 681.94 270.16
  Q 682.20 255.92 681.67 244.89
  Z
  M 713.75 239.45
  A 0.44 0.44 0.0 0 0 713.31 239.01
  L 710.19 239.01
  A 0.44 0.44 0.0 0 0 709.75 239.45
  L 709.75 270.55
  A 0.44 0.44 0.0 0 0 710.19 270.99
  L 713.31 270.99
  A 0.44 0.44 0.0 0 0 713.75 270.55
  L 713.75 239.45
  Z
  M 727.13 258.18
  C 734.69 258.78 743.75 258.07 744.00 248.30
  C 744.11 243.73 741.16 240.10 736.59 239.51
  Q 730.60 238.73 722.98 239.04
  Q 722.50 239.06 722.50 239.54
  L 722.50 270.62
  Q 722.50 270.99 722.87 270.99
  L 726.25 271.00
  Q 726.50 271.00 726.50 270.75
  L 726.49 258.77
  Q 726.49 258.13 727.13 258.18
  Z
  M 755.04 258.20
  C 760.43 258.38 768.31 258.84 771.01 252.77
  C 773.51 247.18 771.29 240.50 764.69 239.54
  Q 758.90 238.70 750.98 239.05
  Q 750.50 239.07 750.50 239.55
  L 750.50 270.74
  Q 750.50 270.99 750.74 270.99
  L 754.12 271.00
  Q 754.50 271.01 754.50 270.63
  L 754.49 258.73
  Q 754.49 258.18 755.04 258.20
  Z
  M 782.82 252.50
  A 0.32 0.32 0.0 0 1 782.50 252.18
  L 782.50 242.82
  A 0.32 0.32 0.0 0 1 782.82 242.50
  L 796.42 242.50
  A 0.32 0.32 0.0 0 0 796.74 242.18
  L 796.76 239.32
  A 0.32 0.32 0.0 0 0 796.44 239.00
  L 778.82 239.00
  A 0.32 0.32 0.0 0 0 778.50 239.32
  L 778.50 270.68
  A 0.32 0.32 0.0 0 0 778.82 271.00
  L 796.91 270.99
  A 0.32 0.32 0.0 0 0 797.23 270.68
  L 797.29 267.83
  A 0.32 0.32 0.0 0 0 796.97 267.50
  L 782.82 267.50
  A 0.32 0.32 0.0 0 1 782.50 267.18
  L 782.50 256.32
  A 0.32 0.32 0.0 0 1 782.82 256.00
  L 794.19 256.00
  A 0.32 0.32 0.0 0 0 794.51 255.68
  L 794.49 252.82
  A 0.32 0.32 0.0 0 0 794.17 252.50
  L 782.82 252.50
  Z
  M 810.43 242.48
  A 0.32 0.32 0.0 0 1 810.75 242.80
  L 810.75 270.67
  A 0.32 0.32 0.0 0 0 811.07 270.99
  L 814.43 270.99
  A 0.32 0.32 0.0 0 0 814.75 270.67
  L 814.75 242.82
  A 0.32 0.32 0.0 0 1 815.07 242.50
  L 824.16 242.50
  A 0.32 0.32 0.0 0 0 824.48 242.18
  L 824.52 239.32
  A 0.32 0.32 0.0 0 0 824.20 239.00
  L 801.35 239.00
  A 0.32 0.32 0.0 0 0 801.03 239.32
  L 800.99 242.19
  A 0.32 0.32 0.0 0 0 801.31 242.51
  L 810.43 242.48
  Z`],["fill","var(--col)","x","30.66","y","32.52","width","425.24","height","8.48","rx","0.27"],["fill","var(--col)","d",`
  M 477.46 32.76
  L 1045.93 32.76
  A 0.32 0.32 0.0 0 1 1046.25 33.08
  L 1046.25 211.79
  A 0.32 0.32 0.0 0 1 1045.93 212.11
  L 477.46 212.11
  A 0.32 0.32 0.0 0 1 477.14 211.79
  L 477.14 33.08
  A 0.32 0.32 0.0 0 1 477.46 32.76
  Z
  M 548.41 138.45
  Q 539.13 138.73 534.77 138.29
  C 532.83 138.09 529.81 136.47 529.73 134.11
  C 529.68 132.77 529.24 131.64 529.24 130.22
  Q 529.20 115.87 529.29 99.93
  Q 529.33 92.18 537.32 92.08
  Q 551.66 91.90 566.70 92.04
  Q 571.04 92.08 571.16 87.74
  Q 571.38 79.79 571.17 70.25
  Q 571.07 65.87 567.28 65.81
  Q 554.73 65.63 528.26 65.83
  Q 520.48 65.89 512.62 68.91
  C 509.39 70.16 506.03 72.50 503.88 75.25
  Q 501.21 78.65 499.98 82.30
  Q 498.29 87.35 498.27 94.18
  Q 498.20 116.14 498.28 135.37
  C 498.32 145.87 501.11 155.64 511.35 160.35
  C 517.69 163.27 524.38 164.20 531.49 164.22
  Q 554.14 164.29 576.29 164.22
  A 3.64 3.63 -89.8 0 0 579.91 160.62
  Q 580.17 139.30 579.87 118.53
  Q 579.84 116.58 579.69 114.38
  Q 579.65 113.87 579.30 113.49
  Q 578.22 112.34 576.52 112.23
  Q 566.17 111.61 552.87 112.20
  C 550.56 112.31 549.12 113.91 549.08 116.20
  Q 548.90 126.97 549.04 137.79
  Q 549.05 138.43 548.41 138.45
  Z
  M 645.47 91.97
  Q 651.71 92.06 658.45 91.95
  Q 662.38 91.89 662.70 88.46
  Q 663.39 81.10 662.77 69.56
  C 662.67 67.62 661.68 65.75 659.49 65.75
  Q 630.04 65.77 598.77 65.72
  A 4.14 4.13 -88.8 0 0 594.64 69.68
  Q 594.24 79.28 594.73 88.58
  A 3.61 3.60 88.5 0 0 598.33 92.00
  L 612.25 92.00
  A 0.76 0.75 0.0 0 1 613.01 92.75
  L 613.00 137.74
  Q 613.00 138.28 612.45 138.28
  Q 605.16 138.28 598.33 138.23
  C 596.44 138.22 594.88 139.53 594.74 141.46
  C 594.35 146.94 594.42 152.73 594.55 158.91
  Q 594.67 164.25 599.88 164.25
  Q 628.40 164.25 657.99 164.24
  Q 662.60 164.24 662.85 159.88
  Q 663.22 153.21 662.90 143.08
  Q 662.74 138.21 658.28 138.24
  Q 651.01 138.29 645.06 138.22
  A 0.31 0.30 0.0 0 1 644.75 137.92
  L 644.73 92.70
  Q 644.73 91.96 645.47 91.97
  Z
  M 711.25 132.25
  L 735.93 132.25
  A 3.63 3.63 0.0 0 0 739.56 128.74
  Q 739.84 120.54 739.73 111.16
  C 739.69 108.15 738.33 106.06 735.00 106.05
  Q 722.98 106.00 711.03 105.99
  A 0.28 0.28 0.0 0 1 710.75 105.71
  L 710.75 92.25
  A 0.50 0.50 0.0 0 1 711.25 91.75
  L 746.73 91.75
  A 3.99 3.98 0.2 0 0 750.72 87.80
  Q 750.79 78.80 750.72 70.26
  C 750.71 69.15 750.15 68.30 749.89 67.28
  A 2.04 2.02 -7.1 0 0 747.92 65.76
  L 683.96 65.75
  A 4.20 4.20 0.0 0 0 679.76 69.95
  L 679.75 160.25
  A 4.00 4.00 0.0 0 0 683.75 164.25
  L 706.75 164.25
  A 4.00 4.00 0.0 0 0 710.75 160.25
  L 710.75 132.75
  Q 710.75 132.25 711.25 132.25
  Z
  M 796.01 91.75
  L 831.26 91.75
  Q 835.52 91.75 835.51 87.49
  L 835.47 69.73
  A 3.99 3.98 -0.0 0 0 831.48 65.75
  L 768.56 65.75
  A 4.07 4.06 -89.9 0 0 764.50 69.81
  Q 764.46 114.92 764.52 159.93
  Q 764.52 162.20 766.46 163.49
  Q 767.60 164.24 770.69 164.25
  Q 781.99 164.26 792.07 164.20
  Q 793.83 164.19 794.55 162.59
  Q 794.77 162.11 795.23 161.41
  Q 795.50 160.99 795.50 160.48
  L 795.50 132.75
  Q 795.50 132.25 796.00 132.25
  L 820.21 132.25
  A 4.04 4.04 0.0 0 0 824.25 128.20
  Q 824.24 119.69 824.26 110.32
  C 824.26 109.19 823.68 108.25 823.15 107.31
  Q 822.89 106.86 822.39 106.71
  Q 819.84 105.97 817.22 105.98
  Q 807.32 106.01 796.04 106.00
  Q 795.49 106.00 795.50 105.46
  L 795.50 92.25
  Q 795.50 91.75 796.01 91.75
  Z
  M 880.63 126.50
  L 906.78 126.50
  Q 911.47 126.50 911.50 121.81
  Q 911.55 114.51 911.43 105.97
  Q 911.41 104.05 909.87 102.75
  Q 909.53 102.46 909.08 102.46
  C 907.74 102.46 906.64 101.99 905.26 101.99
  Q 892.60 102.02 880.71 101.99
  A 0.71 0.71 0.0 0 1 880.01 101.28
  L 880.00 92.04
  Q 880.00 91.47 880.56 91.48
  Q 898.93 91.56 916.46 91.45
  C 919.47 91.43 922.56 91.04 922.66 87.13
  Q 922.87 78.70 922.68 70.08
  A 4.43 4.43 0.0 0 0 918.25 65.75
  L 853.25 65.75
  A 4.00 3.99 -89.9 0 0 849.26 69.74
  Q 849.23 114.71 849.26 159.65
  C 849.26 160.94 849.92 161.75 850.05 163.02
  Q 850.10 163.61 850.69 163.55
  Q 851.65 163.46 852.52 163.97
  Q 853.01 164.25 853.56 164.25
  L 918.91 164.25
  A 3.64 3.64 0.0 0 0 922.55 160.78
  Q 922.90 153.24 922.74 144.74
  C 922.68 141.85 922.46 138.51 918.69 138.50
  Q 898.46 138.49 880.54 138.51
  Q 880.00 138.51 880.00 137.97
  L 880.00 127.12
  Q 880.00 126.50 880.63 126.50
  Z
  M 1008.95 109.99
  C 1010.05 109.45 1011.09 109.14 1011.97 108.22
  Q 1015.15 104.87 1015.81 100.65
  Q 1017.00 92.96 1016.05 84.52
  Q 1015.21 76.97 1011.02 72.58
  Q 1007.43 68.81 1002.81 67.41
  Q 997.74 65.87 992.75 65.85
  Q 967.13 65.73 943.61 65.75
  Q 938.75 65.76 938.75 70.62
  Q 938.75 113.65 938.73 158.98
  C 938.73 161.38 939.76 164.13 942.59 164.17
  Q 954.10 164.31 965.29 164.22
  Q 969.74 164.18 969.74 159.73
  L 969.75 133.30
  A 0.81 0.81 0.0 0 1 970.57 132.49
  Q 978.70 132.54 988.13 132.47
  C 991.01 132.45 993.89 133.33 994.04 136.80
  Q 994.45 146.32 994.18 158.84
  C 994.15 160.38 994.66 161.27 995.04 162.65
  Q 995.19 163.17 995.70 163.31
  C 996.98 163.65 997.78 164.26 999.19 164.26
  Q 1010.75 164.24 1021.16 164.25
  A 4.11 4.11 0.0 0 0 1025.28 160.10
  Q 1025.14 147.62 1025.33 133.19
  Q 1025.42 125.65 1023.81 121.73
  Q 1019.86 112.12 1009.02 110.44
  Q 1008.27 110.32 1008.95 109.99
  Z`],["fill","var(--col)","d",`
  M 222.00 67.48
  Q 222.21 67.33 222.43 67.43
  Q 222.71 67.54 222.82 67.82
  Q 223.13 68.58 223.96 68.66
  A 1.84 1.76 66.3 0 1 224.93 69.06
  Q 229.82 73.06 230.82 74.70
  Q 235.18 81.92 235.21 90.00
  Q 235.31 114.39 235.22 139.25
  Q 235.19 147.89 231.16 154.49
  Q 229.93 156.51 227.45 158.83
  C 222.30 163.64 216.54 167.93 211.43 172.47
  C 204.20 178.88 195.32 181.20 185.93 182.11
  Q 175.22 183.14 164.40 182.24
  Q 156.36 181.58 149.76 179.06
  Q 148.72 178.66 147.63 178.43
  Q 147.15 178.33 146.92 177.90
  Q 146.59 177.33 145.95 177.48
  A 0.88 0.87 72.4 0 1 144.93 176.95
  Q 144.76 176.53 144.31 176.45
  Q 143.73 176.35 143.21 176.04
  Q 134.49 170.84 131.51 160.86
  Q 129.83 155.23 129.80 149.55
  Q 129.68 127.75 129.78 107.06
  Q 129.80 101.25 131.40 95.58
  Q 131.79 94.20 132.45 93.03
  Q 132.91 92.19 133.27 91.32
  Q 133.61 90.51 134.19 89.84
  Q 137.33 86.25 140.26 83.79
  Q 147.49 77.72 154.73 71.70
  Q 159.02 68.13 162.91 66.59
  Q 168.55 64.36 174.05 63.45
  Q 185.15 61.61 199.81 62.47
  Q 208.49 62.98 216.21 65.15
  C 217.64 65.55 218.88 66.51 220.31 66.51
  Q 220.66 66.52 220.83 66.83
  L 221.06 67.27
  Q 221.40 67.92 222.00 67.48
  Z
  M 220.85 68.64
  Q 212.78 65.01 203.95 64.13
  Q 191.75 62.92 178.36 64.27
  Q 171.04 65.02 164.64 67.62
  Q 164.27 67.77 163.88 67.75
  Q 163.52 67.73 163.20 67.89
  Q 160.06 69.52 157.25 71.65
  Q 151.08 76.33 149.69 84.01
  Q 148.86 88.63 148.82 92.82
  Q 148.59 114.81 148.88 137.80
  C 149.03 149.73 153.07 158.11 164.53 162.37
  Q 173.03 165.53 181.66 166.05
  C 187.65 166.42 193.92 166.34 199.93 166.11
  C 210.96 165.68 224.94 162.32 230.77 152.33
  C 233.19 148.19 233.97 142.49 233.99 137.75
  Q 234.07 117.14 233.97 92.75
  Q 233.94 85.86 232.21 80.71
  C 230.86 76.72 228.80 74.63 225.96 71.87
  Q 224.91 70.84 223.60 70.07
  Q 222.23 69.26 220.85 68.64
  Z`],["fill","var(--bg)","d",`
  M 220.85 68.64
  Q 222.23 69.26 223.60 70.07
  Q 224.91 70.84 225.96 71.87
  C 228.80 74.63 230.86 76.72 232.21 80.71
  Q 233.94 85.86 233.97 92.75
  Q 234.07 117.14 233.99 137.75
  C 233.97 142.49 233.19 148.19 230.77 152.33
  C 224.94 162.32 210.96 165.68 199.93 166.11
  C 193.92 166.34 187.65 166.42 181.66 166.05
  Q 173.03 165.53 164.53 162.37
  C 153.07 158.11 149.03 149.73 148.88 137.80
  Q 148.59 114.81 148.82 92.82
  Q 148.86 88.63 149.69 84.01
  Q 151.08 76.33 157.25 71.65
  Q 160.06 69.52 163.20 67.89
  Q 163.52 67.73 163.88 67.75
  Q 164.27 67.77 164.64 67.62
  Q 171.04 65.02 178.36 64.27
  Q 191.75 62.92 203.95 64.13
  Q 212.78 65.01 220.85 68.64
  Z
  M 201.83 77.17
  Q 189.18 75.26 178.11 77.65
  Q 163.59 80.79 163.71 95.82
  Q 163.87 115.34 163.66 133.38
  C 163.57 140.39 165.62 146.37 171.36 149.84
  Q 173.69 151.26 177.14 152.18
  Q 180.00 152.94 182.78 153.26
  Q 190.02 154.07 198.36 153.41
  C 209.21 152.56 218.68 147.97 218.88 135.59
  Q 219.20 116.38 218.81 93.78
  Q 218.78 92.17 218.61 90.50
  Q 218.56 89.97 218.23 89.56
  C 217.56 88.74 217.87 88.00 217.37 87.06
  Q 214.56 81.80 210.94 80.05
  Q 206.43 77.87 201.83 77.17
  Z`],["fill","var(--col)","d",`
  M 82.64 108.28
  A 0.38 0.37 90.0 0 0 82.27 108.66
  Q 82.24 119.67 82.26 131.06
  C 82.26 134.13 84.13 136.29 87.17 136.43
  Q 88.24 136.49 89.27 136.51
  Q 104.47 136.94 117.50 136.76
  Q 121.18 136.71 122.43 139.71
  Q 123.32 141.80 123.30 144.40
  Q 123.24 153.29 123.19 159.57
  C 123.18 161.68 122.07 163.84 120.43 165.18
  Q 111.98 172.15 103.79 178.99
  Q 102.04 180.46 99.69 180.46
  Q 82.48 180.52 65.37 180.50
  Q 56.55 180.48 49.86 178.08
  C 44.67 176.21 39.92 172.71 36.82 168.10
  Q 30.82 159.19 30.77 148.01
  Q 30.68 124.65 30.84 106.03
  C 30.89 100.92 33.02 92.67 37.22 88.70
  C 38.77 87.24 40.03 85.64 41.70 84.25
  Q 48.72 78.37 55.74 72.51
  Q 59.84 69.07 64.84 67.14
  Q 72.02 64.38 82.67 64.31
  Q 99.89 64.20 117.44 64.28
  Q 123.08 64.30 123.18 70.20
  Q 123.33 78.51 123.23 86.81
  Q 123.18 90.72 119.66 93.57
  Q 112.40 99.47 104.82 105.98
  C 103.06 107.49 101.33 108.32 98.98 108.30
  Q 90.27 108.19 82.64 108.28
  Z
  M 83.00 136.19
  Q 81.01 133.97 81.02 131.10
  Q 81.07 115.24 80.97 100.37
  C 80.92 93.38 84.62 91.98 90.87 92.00
  Q 104.41 92.04 117.68 91.95
  Q 121.74 91.92 121.74 87.87
  L 121.75 69.04
  A 3.29 3.29 0.0 0 0 118.47 65.75
  Q 98.24 65.69 80.33 65.78
  Q 73.14 65.82 65.76 68.29
  Q 58.86 70.61 54.57 76.52
  C 53.97 77.34 53.81 78.42 52.96 78.96
  Q 52.46 79.28 52.48 79.87
  C 52.50 80.62 51.79 81.38 51.55 82.20
  Q 49.81 87.98 49.79 93.61
  Q 49.72 113.14 49.76 135.23
  C 49.77 144.12 51.51 152.04 58.71 157.74
  Q 62.19 160.50 66.93 162.01
  Q 72.85 163.90 77.82 164.04
  Q 94.68 164.49 118.20 164.14
  A 3.51 3.50 -89.9 0 0 121.65 160.69
  Q 121.80 152.25 121.76 142.47
  Q 121.75 140.81 120.82 139.58
  Q 119.81 138.25 117.01 138.25
  Q 104.00 138.22 90.97 138.26
  C 89.27 138.26 87.70 137.88 86.03 137.69
  Q 84.14 137.48 83.00 136.19
  Z`],["fill","var(--col)","d",`
  M 351.19 138.50
  C 351.16 142.64 349.89 147.39 348.24 151.13
  Q 346.65 154.73 343.16 157.97
  C 338.77 162.06 334.08 165.43 329.72 169.35
  C 327.10 171.71 324.30 173.63 321.41 175.63
  C 319.66 176.84 317.98 176.97 316.19 177.90
  Q 315.22 178.41 314.05 178.70
  Q 306.83 180.45 300.48 180.47
  Q 276.81 180.53 251.38 180.49
  Q 249.59 180.49 248.15 179.38
  Q 246.02 177.74 246.02 174.83
  Q 246.04 126.24 245.99 86.16
  C 245.99 83.74 246.85 81.22 248.72 79.69
  Q 257.24 72.70 264.68 66.19
  C 266.24 64.83 268.50 64.28 270.57 64.28
  Q 294.42 64.23 317.41 64.30
  Q 327.82 64.33 337.42 68.08
  Q 338.52 68.51 339.32 69.31
  C 340.17 70.15 341.25 70.13 342.06 71.03
  Q 343.44 72.57 345.06 74.06
  Q 346.47 75.35 347.49 77.32
  Q 351.28 84.61 351.29 93.00
  Q 351.33 114.31 351.19 138.50
  Z
  M 338.88 70.58
  Q 330.32 66.01 321.26 65.88
  Q 300.41 65.61 269.26 65.77
  A 4.23 4.23 0.0 0 0 265.05 69.98
  Q 264.90 114.91 265.08 157.24
  C 265.09 158.94 264.98 161.97 266.12 163.15
  Q 267.15 164.21 269.50 164.22
  Q 293.50 164.30 317.49 164.22
  Q 326.88 164.19 334.54 161.43
  Q 337.67 160.30 340.62 158.09
  Q 344.29 155.35 345.69 153.23
  Q 349.75 147.12 349.89 136.64
  Q 350.18 115.37 349.98 95.84
  Q 349.94 91.92 349.48 88.00
  Q 348.21 77.17 339.81 71.15
  Q 339.37 70.84 338.88 70.58
  Z`],["fill","var(--col)","d",`
  M 432.00 137.03
  Q 440.02 136.96 449.29 137.06
  C 456.34 137.13 456.12 142.45 456.02 148.03
  Q 455.93 153.30 455.95 158.05
  C 455.96 159.47 455.54 160.66 455.49 162.03
  A 1.30 1.27 -23.7 0 1 455.15 162.87
  Q 452.73 165.53 450.19 167.63
  Q 443.44 173.18 436.04 179.32
  C 434.70 180.43 433.26 180.46 431.64 180.47
  Q 398.93 180.55 367.38 180.50
  Q 365.51 180.50 364.06 179.29
  Q 361.99 177.55 362.00 174.25
  Q 362.09 147.86 362.00 85.25
  C 362.00 83.22 362.98 81.17 364.55 79.85
  Q 372.73 72.95 380.89 66.05
  C 382.21 64.93 384.36 64.30 386.06 64.29
  Q 415.75 64.12 448.49 64.41
  Q 449.64 64.42 450.85 64.44
  Q 452.21 64.47 453.07 65.02
  Q 455.56 66.62 455.69 68.74
  Q 456.19 76.58 455.98 85.77
  Q 455.89 89.93 453.48 92.03
  Q 449.94 95.15 446.04 98.14
  Q 444.41 99.38 442.85 101.14
  Q 442.47 101.56 442.92 101.91
  Q 444.64 103.25 444.68 105.75
  Q 444.85 114.72 444.61 122.45
  A 6.56 6.56 0.0 0 1 442.27 127.25
  L 431.67 136.13
  Q 430.59 137.04 432.00 137.03
  Z
  M 411.74 137.99
  L 411.76 127.25
  A 0.75 0.74 90.0 0 1 412.50 126.50
  L 439.15 126.50
  A 4.39 4.38 -0.1 0 0 443.54 122.10
  L 443.45 106.35
  A 4.36 4.36 0.0 0 0 439.10 102.01
  L 412.24 101.99
  A 0.50 0.50 0.0 0 1 411.74 101.49
  L 411.75 92.25
  A 0.76 0.76 0.0 0 1 412.52 91.49
  Q 431.90 91.54 449.70 91.46
  Q 454.52 91.43 454.52 87.00
  Q 454.52 78.32 454.49 70.49
  Q 454.47 65.75 449.73 65.75
  L 385.45 65.73
  A 4.42 4.42 0.0 0 0 381.03 70.14
  Q 380.94 115.35 381.04 159.92
  Q 381.05 164.24 385.38 164.24
  Q 415.77 164.25 450.29 164.25
  A 4.22 4.22 0.0 0 0 454.51 160.03
  L 454.51 142.38
  A 3.88 3.88 0.0 0 0 450.63 138.50
  L 412.24 138.50
  Q 411.74 138.50 411.74 137.99
  Z`],["fill","var(--bg)","d",`
  M 86.03 137.69
  C 87.70 137.88 89.27 138.26 90.97 138.26
  Q 104.00 138.22 117.01 138.25
  Q 119.81 138.25 120.82 139.58
  Q 121.75 140.81 121.76 142.47
  Q 121.80 152.25 121.65 160.69
  A 3.51 3.50 -89.9 0 1 118.20 164.14
  Q 94.68 164.49 77.82 164.04
  Q 72.85 163.90 66.93 162.01
  Q 62.19 160.50 58.71 157.74
  C 51.51 152.04 49.77 144.12 49.76 135.23
  Q 49.72 113.14 49.79 93.61
  Q 49.81 87.98 51.55 82.20
  C 51.79 81.38 52.50 80.62 52.48 79.87
  Q 52.46 79.28 52.96 78.96
  C 53.81 78.42 53.97 77.34 54.57 76.52
  Q 58.86 70.61 65.76 68.29
  Q 73.14 65.82 80.33 65.78
  Q 98.24 65.69 118.47 65.75
  A 3.29 3.29 0.0 0 1 121.75 69.04
  L 121.74 87.87
  Q 121.74 91.92 117.68 91.95
  Q 104.41 92.04 90.87 92.00
  C 84.62 91.98 80.92 93.38 80.97 100.37
  Q 81.07 115.24 81.02 131.10
  Q 81.01 133.97 83.00 136.19
  Q 84.14 137.48 86.03 137.69
  Z
  M 108.74 78.08
  Q 97.85 78.03 86.51 78.04
  C 80.42 78.05 71.59 78.44 67.75 83.42
  Q 64.76 87.29 64.68 94.26
  Q 64.45 113.25 64.50 132.25
  C 64.51 137.47 64.92 142.00 67.69 146.38
  C 69.92 149.89 75.59 151.21 79.33 151.50
  Q 89.31 152.28 108.62 151.87
  A 0.80 0.79 -83.9 0 0 109.38 151.25
  L 109.43 150.98
  A 0.40 0.40 0.0 0 0 109.04 150.49
  Q 94.74 150.57 82.19 150.46
  Q 77.97 150.42 73.08 148.73
  Q 70.10 147.69 68.71 145.41
  Q 66.05 141.02 66.02 136.71
  Q 65.89 115.70 66.00 93.86
  Q 66.02 89.04 68.54 85.10
  Q 69.77 83.17 71.39 82.25
  Q 73.69 80.94 76.08 80.40
  Q 81.22 79.23 87.61 79.25
  Q 98.32 79.26 108.83 79.24
  Q 109.18 79.24 109.19 78.90
  L 109.20 78.56
  Q 109.22 78.09 108.74 78.08
  Z`],["fill","var(--bg)","d",`
  M 338.88 70.58
  Q 339.37 70.84 339.81 71.15
  Q 348.21 77.17 349.48 88.00
  Q 349.94 91.92 349.98 95.84
  Q 350.18 115.37 349.89 136.64
  Q 349.75 147.12 345.69 153.23
  Q 344.29 155.35 340.62 158.09
  Q 337.67 160.30 334.54 161.43
  Q 326.88 164.19 317.49 164.22
  Q 293.50 164.30 269.50 164.22
  Q 267.15 164.21 266.12 163.15
  C 264.98 161.97 265.09 158.94 265.08 157.24
  Q 264.90 114.91 265.05 69.98
  A 4.23 4.23 0.0 0 1 269.26 65.77
  Q 300.41 65.61 321.26 65.88
  Q 330.32 66.01 338.88 70.58
  Z
  M 280.95 78.06
  Q 280.08 78.06 280.08 78.93
  L 280.02 151.69
  Q 280.02 151.89 280.22 151.90
  Q 297.43 152.04 317.03 151.78
  Q 318.92 151.75 320.94 151.35
  Q 322.75 150.99 324.46 150.52
  Q 327.24 149.77 329.75 147.86
  Q 331.61 146.44 332.65 144.65
  Q 333.85 142.56 334.23 140.49
  Q 334.77 137.54 335.01 134.53
  Q 335.26 131.36 335.26 128.33
  Q 335.29 113.48 335.21 99.81
  Q 335.18 95.09 333.99 88.55
  C 333.62 86.54 331.44 83.62 329.77 82.45
  C 324.75 78.91 319.64 78.11 313.78 78.09
  Q 296.96 78.04 280.95 78.06
  Z`],["fill","var(--bg)","d",`
  M 412.24 138.50
  L 450.63 138.50
  A 3.88 3.88 0.0 0 1 454.51 142.38
  L 454.51 160.03
  A 4.22 4.22 0.0 0 1 450.29 164.25
  Q 415.77 164.25 385.38 164.24
  Q 381.05 164.24 381.04 159.92
  Q 380.94 115.35 381.03 70.14
  A 4.42 4.42 0.0 0 1 385.45 65.73
  L 449.73 65.75
  Q 454.47 65.75 454.49 70.49
  Q 454.52 78.32 454.52 87.00
  Q 454.52 91.43 449.70 91.46
  Q 431.90 91.54 412.52 91.49
  A 0.76 0.76 0.0 0 0 411.75 92.25
  L 411.74 101.49
  A 0.50 0.50 0.0 0 0 412.24 101.99
  L 439.10 102.01
  A 4.36 4.36 0.0 0 1 443.45 106.35
  L 443.54 122.10
  A 4.39 4.38 -0.1 0 1 439.15 126.50
  L 412.50 126.50
  A 0.75 0.74 90.0 0 0 411.76 127.25
  L 411.74 137.99
  Q 411.74 138.50 412.24 138.50
  Z
  M 397.25 79.52
  A 0.27 0.27 0.0 0 1 397.52 79.25
  L 441.92 79.25
  A 0.27 0.27 0.0 0 0 442.19 79.02
  L 442.28 78.38
  A 0.27 0.27 0.0 0 0 442.01 78.07
  L 396.31 78.11
  A 0.27 0.27 0.0 0 0 396.04 78.38
  L 396.05 151.60
  A 0.27 0.27 0.0 0 0 396.32 151.87
  L 441.77 151.92
  A 0.27 0.27 0.0 0 0 442.01 151.79
  L 442.51 150.92
  A 0.27 0.27 0.0 0 0 442.28 150.51
  L 397.52 150.54
  A 0.27 0.27 0.0 0 1 397.25 150.27
  L 397.25 115.25
  A 0.27 0.27 0.0 0 1 397.52 114.98
  L 430.66 114.95
  A 0.27 0.27 0.0 0 0 430.93 114.69
  L 430.95 114.03
  A 0.27 0.27 0.0 0 0 430.68 113.75
  L 397.52 113.75
  A 0.27 0.27 0.0 0 1 397.25 113.48
  L 397.25 79.52
  Z`],["fill","var(--bg)","d",`
  M 549.04 137.79
  Q 548.90 126.97 549.08 116.20
  C 549.12 113.91 550.56 112.31 552.87 112.20
  Q 566.17 111.61 576.52 112.23
  Q 578.22 112.34 579.30 113.49
  Q 579.65 113.87 579.69 114.38
  Q 579.84 116.58 579.87 118.53
  Q 580.17 139.30 579.91 160.62
  A 3.64 3.63 -89.8 0 1 576.29 164.22
  Q 554.14 164.29 531.49 164.22
  C 524.38 164.20 517.69 163.27 511.35 160.35
  C 501.11 155.64 498.32 145.87 498.28 135.37
  Q 498.20 116.14 498.27 94.18
  Q 498.29 87.35 499.98 82.30
  Q 501.21 78.65 503.88 75.25
  C 506.03 72.50 509.39 70.16 512.62 68.91
  Q 520.48 65.89 528.26 65.83
  Q 554.73 65.63 567.28 65.81
  Q 571.07 65.87 571.17 70.25
  Q 571.38 79.79 571.16 87.74
  Q 571.04 92.08 566.70 92.04
  Q 551.66 91.90 537.32 92.08
  Q 529.33 92.18 529.29 99.93
  Q 529.20 115.87 529.24 130.22
  C 529.24 131.64 529.68 132.77 529.73 134.11
  C 529.81 136.47 532.83 138.09 534.77 138.29
  Q 539.13 138.73 548.41 138.45
  Q 549.05 138.43 549.04 137.79
  Z`],["fill","var(--bg)","d",`
  M 644.73 92.70
  L 644.75 137.92
  A 0.31 0.30 0.0 0 0 645.06 138.22
  Q 651.01 138.29 658.28 138.24
  Q 662.74 138.21 662.90 143.08
  Q 663.22 153.21 662.85 159.88
  Q 662.60 164.24 657.99 164.24
  Q 628.40 164.25 599.88 164.25
  Q 594.67 164.25 594.55 158.91
  C 594.42 152.73 594.35 146.94 594.74 141.46
  C 594.88 139.53 596.44 138.22 598.33 138.23
  Q 605.16 138.28 612.45 138.28
  Q 613.00 138.28 613.00 137.74
  L 613.01 92.75
  A 0.76 0.75 0.0 0 0 612.25 92.00
  L 598.33 92.00
  A 3.61 3.60 88.5 0 1 594.73 88.58
  Q 594.24 79.28 594.64 69.68
  A 4.14 4.13 -88.8 0 1 598.77 65.72
  Q 630.04 65.77 659.49 65.75
  C 661.68 65.75 662.67 67.62 662.77 69.56
  Q 663.39 81.10 662.70 88.46
  Q 662.38 91.89 658.45 91.95
  Q 651.71 92.06 645.47 91.97
  Q 644.73 91.96 644.73 92.70
  Z`],["fill","var(--bg)","d",`
  M 710.75 132.75
  L 710.75 160.25
  A 4.00 4.00 0.0 0 1 706.75 164.25
  L 683.75 164.25
  A 4.00 4.00 0.0 0 1 679.75 160.25
  L 679.76 69.95
  A 4.20 4.20 0.0 0 1 683.96 65.75
  L 747.92 65.76
  A 2.04 2.02 -7.1 0 1 749.89 67.28
  C 750.15 68.30 750.71 69.15 750.72 70.26
  Q 750.79 78.80 750.72 87.80
  A 3.99 3.98 0.2 0 1 746.73 91.75
  L 711.25 91.75
  A 0.50 0.50 0.0 0 0 710.75 92.25
  L 710.75 105.71
  A 0.28 0.28 0.0 0 0 711.03 105.99
  Q 722.98 106.00 735.00 106.05
  C 738.33 106.06 739.69 108.15 739.73 111.16
  Q 739.84 120.54 739.56 128.74
  A 3.63 3.63 0.0 0 1 735.93 132.25
  L 711.25 132.25
  Q 710.75 132.25 710.75 132.75
  Z`],["fill","var(--bg)","d",`
  M 795.50 92.25
  L 795.50 105.46
  Q 795.49 106.00 796.04 106.00
  Q 807.32 106.01 817.22 105.98
  Q 819.84 105.97 822.39 106.71
  Q 822.89 106.86 823.15 107.31
  C 823.68 108.25 824.26 109.19 824.26 110.32
  Q 824.24 119.69 824.25 128.20
  A 4.04 4.04 0.0 0 1 820.21 132.25
  L 796.00 132.25
  Q 795.50 132.25 795.50 132.75
  L 795.50 160.48
  Q 795.50 160.99 795.23 161.41
  Q 794.77 162.11 794.55 162.59
  Q 793.83 164.19 792.07 164.20
  Q 781.99 164.26 770.69 164.25
  Q 767.60 164.24 766.46 163.49
  Q 764.52 162.20 764.52 159.93
  Q 764.46 114.92 764.50 69.81
  A 4.07 4.06 -89.9 0 1 768.56 65.75
  L 831.48 65.75
  A 3.99 3.98 -0.0 0 1 835.47 69.73
  L 835.51 87.49
  Q 835.52 91.75 831.26 91.75
  L 796.01 91.75
  Q 795.50 91.75 795.50 92.25
  Z`],["fill","var(--bg)","d",`
  M 880.00 127.12
  L 880.00 137.97
  Q 880.00 138.51 880.54 138.51
  Q 898.46 138.49 918.69 138.50
  C 922.46 138.51 922.68 141.85 922.74 144.74
  Q 922.90 153.24 922.55 160.78
  A 3.64 3.64 0.0 0 1 918.91 164.25
  L 853.56 164.25
  Q 853.01 164.25 852.52 163.97
  Q 851.65 163.46 850.69 163.55
  Q 850.10 163.61 850.05 163.02
  C 849.92 161.75 849.26 160.94 849.26 159.65
  Q 849.23 114.71 849.26 69.74
  A 4.00 3.99 -89.9 0 1 853.25 65.75
  L 918.25 65.75
  A 4.43 4.43 0.0 0 1 922.68 70.08
  Q 922.87 78.70 922.66 87.13
  C 922.56 91.04 919.47 91.43 916.46 91.45
  Q 898.93 91.56 880.56 91.48
  Q 880.00 91.47 880.00 92.04
  L 880.01 101.28
  A 0.71 0.71 0.0 0 0 880.71 101.99
  Q 892.60 102.02 905.26 101.99
  C 906.64 101.99 907.74 102.46 909.08 102.46
  Q 909.53 102.46 909.87 102.75
  Q 911.41 104.05 911.43 105.97
  Q 911.55 114.51 911.50 121.81
  Q 911.47 126.50 906.78 126.50
  L 880.63 126.50
  Q 880.00 126.50 880.00 127.12
  Z`],["fill","var(--bg)","d",`
  M 1009.02 110.44
  Q 1019.86 112.12 1023.81 121.73
  Q 1025.42 125.65 1025.33 133.19
  Q 1025.14 147.62 1025.28 160.10
  A 4.11 4.11 0.0 0 1 1021.16 164.25
  Q 1010.75 164.24 999.19 164.26
  C 997.78 164.26 996.98 163.65 995.70 163.31
  Q 995.19 163.17 995.04 162.65
  C 994.66 161.27 994.15 160.38 994.18 158.84
  Q 994.45 146.32 994.04 136.80
  C 993.89 133.33 991.01 132.45 988.13 132.47
  Q 978.70 132.54 970.57 132.49
  A 0.81 0.81 0.0 0 0 969.75 133.30
  L 969.74 159.73
  Q 969.74 164.18 965.29 164.22
  Q 954.10 164.31 942.59 164.17
  C 939.76 164.13 938.73 161.38 938.73 158.98
  Q 938.75 113.65 938.75 70.62
  Q 938.75 65.76 943.61 65.75
  Q 967.13 65.73 992.75 65.85
  Q 997.74 65.87 1002.81 67.41
  Q 1007.43 68.81 1011.02 72.58
  Q 1015.21 76.97 1016.05 84.52
  Q 1017.00 92.96 1015.81 100.65
  Q 1015.15 104.87 1011.97 108.22
  C 1011.09 109.14 1010.05 109.45 1008.95 109.99
  Q 1008.27 110.32 1009.02 110.44
  Z
  M 969.72 90.54
  L 969.78 107.56
  A 0.25 0.25 0.0 0 0 970.03 107.81
  L 980.82 107.77
  A 5.45 5.20 89.8 0 0 986.00 102.30
  L 985.98 95.68
  A 5.45 5.20 89.8 0 0 980.76 90.25
  L 969.97 90.29
  A 0.25 0.25 0.0 0 0 969.72 90.54
  Z`],["fill","var(--col)","d",`
  M 201.83 77.17
  Q 206.43 77.87 210.94 80.05
  Q 214.56 81.80 217.37 87.06
  C 217.87 88.00 217.56 88.74 218.23 89.56
  Q 218.56 89.97 218.61 90.50
  Q 218.78 92.17 218.81 93.78
  Q 219.20 116.38 218.88 135.59
  C 218.68 147.97 209.21 152.56 198.36 153.41
  Q 190.02 154.07 182.78 153.26
  Q 180.00 152.94 177.14 152.18
  Q 173.69 151.26 171.36 149.84
  C 165.62 146.37 163.57 140.39 163.66 133.38
  Q 163.87 115.34 163.71 95.82
  Q 163.59 80.79 178.11 77.65
  Q 189.18 75.26 201.83 77.17
  Z
  M 177.69 79.10
  Q 169.32 81.18 166.34 87.88
  Q 164.80 91.33 164.92 99.90
  Q 165.13 115.14 164.93 131.72
  C 164.83 139.08 166.15 145.29 172.76 149.19
  Q 176.37 151.33 184.69 152.03
  C 192.54 152.70 201.84 152.59 209.05 149.40
  Q 213.93 147.24 216.21 142.38
  Q 217.77 139.06 217.76 133.27
  Q 217.76 111.74 217.72 94.76
  Q 217.70 89.16 214.06 84.34
  Q 212.55 82.36 209.81 80.98
  Q 206.99 79.56 204.40 78.98
  Q 192.72 76.34 178.11 78.82
  Q 177.98 78.84 177.91 78.95
  Q 177.82 79.06 177.69 79.10
  Z`],["fill","var(--bg)","d",`
  M 177.69 79.10
  Q 177.82 79.06 177.91 78.95
  Q 177.98 78.84 178.11 78.82
  Q 192.72 76.34 204.40 78.98
  Q 206.99 79.56 209.81 80.98
  Q 212.55 82.36 214.06 84.34
  Q 217.70 89.16 217.72 94.76
  Q 217.76 111.74 217.76 133.27
  Q 217.77 139.06 216.21 142.38
  Q 213.93 147.24 209.05 149.40
  C 201.84 152.59 192.54 152.70 184.69 152.03
  Q 176.37 151.33 172.76 149.19
  C 166.15 145.29 164.83 139.08 164.93 131.72
  Q 165.13 115.14 164.92 99.90
  Q 164.80 91.33 166.34 87.88
  Q 169.32 81.18 177.69 79.10
  Z
  M 202.9284 96.9900
  A 6.63 6.63 0.0 0 0 196.2869 90.3716
  L 186.6069 90.3885
  A 6.63 6.63 0.0 0 0 179.9885 97.0300
  L 180.0516 133.1900
  A 6.63 6.63 0.0 0 0 186.6931 139.8084
  L 196.3731 139.7915
  A 6.63 6.63 0.0 0 0 202.9915 133.1500
  L 202.9284 96.9900
  Z`],["fill","var(--col)","d",`
  M 108.74 78.08
  Q 109.22 78.09 109.20 78.56
  L 109.19 78.90
  Q 109.18 79.24 108.83 79.24
  Q 98.32 79.26 87.61 79.25
  Q 81.22 79.23 76.08 80.40
  Q 73.69 80.94 71.39 82.25
  Q 69.77 83.17 68.54 85.10
  Q 66.02 89.04 66.00 93.86
  Q 65.89 115.70 66.02 136.71
  Q 66.05 141.02 68.71 145.41
  Q 70.10 147.69 73.08 148.73
  Q 77.97 150.42 82.19 150.46
  Q 94.74 150.57 109.04 150.49
  A 0.40 0.40 0.0 0 1 109.43 150.98
  L 109.38 151.25
  A 0.80 0.79 -83.9 0 1 108.62 151.87
  Q 89.31 152.28 79.33 151.50
  C 75.59 151.21 69.92 149.89 67.69 146.38
  C 64.92 142.00 64.51 137.47 64.50 132.25
  Q 64.45 113.25 64.68 94.26
  Q 64.76 87.29 67.75 83.42
  C 71.59 78.44 80.42 78.05 86.51 78.04
  Q 97.85 78.03 108.74 78.08
  Z`],["fill","var(--col)","d",`
  M 280.95 78.06
  Q 296.96 78.04 313.78 78.09
  C 319.64 78.11 324.75 78.91 329.77 82.45
  C 331.44 83.62 333.62 86.54 333.99 88.55
  Q 335.18 95.09 335.21 99.81
  Q 335.29 113.48 335.26 128.33
  Q 335.26 131.36 335.01 134.53
  Q 334.77 137.54 334.23 140.49
  Q 333.85 142.56 332.65 144.65
  Q 331.61 146.44 329.75 147.86
  Q 327.24 149.77 324.46 150.52
  Q 322.75 150.99 320.94 151.35
  Q 318.92 151.75 317.03 151.78
  Q 297.43 152.04 280.22 151.90
  Q 280.02 151.89 280.02 151.69
  L 280.08 78.93
  Q 280.08 78.06 280.95 78.06
  Z
  M 328.43 83.36
  Q 325.64 81.08 323.95 80.73
  Q 322.09 80.34 320.35 79.92
  Q 318.25 79.40 315.98 79.37
  Q 300.00 79.15 282.04 79.26
  Q 281.48 79.27 281.48 79.82
  L 281.50 149.97
  Q 281.50 150.45 281.98 150.46
  Q 299.37 150.62 316.74 150.45
  Q 323.93 150.38 329.53 146.29
  C 330.96 145.25 331.45 143.83 332.20 142.34
  C 333.33 140.12 333.30 137.65 333.56 135.23
  Q 333.76 133.24 333.76 131.35
  Q 333.76 114.69 333.72 98.24
  Q 333.71 94.19 332.96 90.39
  Q 332.24 86.77 329.72 84.20
  C 329.35 83.83 328.86 83.71 328.43 83.36
  Z`],["fill","var(--col)","d",`
  M 397.25 79.52
  L 397.25 113.48
  A 0.27 0.27 0.0 0 0 397.52 113.75
  L 430.68 113.75
  A 0.27 0.27 0.0 0 1 430.95 114.03
  L 430.93 114.69
  A 0.27 0.27 0.0 0 1 430.66 114.95
  L 397.52 114.98
  A 0.27 0.27 0.0 0 0 397.25 115.25
  L 397.25 150.27
  A 0.27 0.27 0.0 0 0 397.52 150.54
  L 442.28 150.51
  A 0.27 0.27 0.0 0 1 442.51 150.92
  L 442.01 151.79
  A 0.27 0.27 0.0 0 1 441.77 151.92
  L 396.32 151.87
  A 0.27 0.27 0.0 0 1 396.05 151.60
  L 396.04 78.38
  A 0.27 0.27 0.0 0 1 396.31 78.11
  L 442.01 78.07
  A 0.27 0.27 0.0 0 1 442.28 78.38
  L 442.19 79.02
  A 0.27 0.27 0.0 0 1 441.92 79.25
  L 397.52 79.25
  A 0.27 0.27 0.0 0 0 397.25 79.52
  Z`],["fill","var(--bg)","d",`
  M 328.43 83.36
  C 328.86 83.71 329.35 83.83 329.72 84.20
  Q 332.24 86.77 332.96 90.39
  Q 333.71 94.19 333.72 98.24
  Q 333.76 114.69 333.76 131.35
  Q 333.76 133.24 333.56 135.23
  C 333.30 137.65 333.33 140.12 332.20 142.34
  C 331.45 143.83 330.96 145.25 329.53 146.29
  Q 323.93 150.38 316.74 150.45
  Q 299.37 150.62 281.98 150.46
  Q 281.50 150.45 281.50 149.97
  L 281.48 79.82
  Q 281.48 79.27 282.04 79.26
  Q 300.00 79.15 315.98 79.37
  Q 318.25 79.40 320.35 79.92
  Q 322.09 80.34 323.95 80.73
  Q 325.64 81.08 328.43 83.36
  Z
  M 318.59 95.40
  C 318.22 92.56 313.42 91.71 311.21 91.73
  Q 303.97 91.78 296.81 91.72
  Q 296.25 91.72 296.25 92.28
  L 296.23 137.98
  Q 296.23 138.51 296.76 138.51
  Q 304.19 138.55 311.92 138.41
  C 317.08 138.31 318.94 135.92 318.97 130.93
  Q 319.09 113.52 318.91 99.49
  Q 318.88 97.59 318.59 95.40
  Z`],["fill","var(--col)","d",`
  M 202.9915 133.1500
  A 6.63 6.63 0.0 0 1 196.3731 139.7915
  L 186.6931 139.8084
  A 6.63 6.63 0.0 0 1 180.0516 133.1900
  L 179.9885 97.0300
  A 6.63 6.63 0.0 0 1 186.6069 90.3885
  L 196.2869 90.3716
  A 6.63 6.63 0.0 0 1 202.9284 96.9900
  L 202.9915 133.1500
  Z
  M 181.25 134.20
  A 0.68 0.68 0.0 0 0 181.33 134.52
  L 182.75 137.13
  A 0.68 0.68 0.0 0 0 184.03 136.81
  L 183.94 110.41
  A 0.68 0.68 0.0 0 0 183.84 110.06
  L 182.52 107.90
  A 0.68 0.68 0.0 0 0 181.26 108.26
  L 181.25 134.20
  Z`],["fill","var(--col)","d",`
  M 969.72 90.54
  A 0.25 0.25 0.0 0 1 969.97 90.29
  L 980.76 90.25
  A 5.45 5.20 89.8 0 1 985.98 95.68
  L 986.00 102.30
  A 5.45 5.20 89.8 0 1 980.82 107.77
  L 970.03 107.81
  A 0.25 0.25 0.0 0 1 969.78 107.56
  L 969.72 90.54
  Z`],["fill","var(--col)","d",`
  M 311.21 91.73
  C 313.42 91.71 318.22 92.56 318.59 95.40
  Q 318.88 97.59 318.91 99.49
  Q 319.09 113.52 318.97 130.93
  C 318.94 135.92 317.08 138.31 311.92 138.41
  Q 304.19 138.55 296.76 138.51
  Q 296.23 138.51 296.23 137.98
  L 296.25 92.28
  Q 296.25 91.72 296.81 91.72
  Q 303.97 91.78 311.21 91.73
  Z
  M 299.89 113.76
  C 299.86 111.60 299.41 110.35 298.07 108.83
  Q 297.51 108.19 297.51 109.04
  L 297.51 136.52
  Q 297.51 137.03 298.02 137.02
  L 299.51 137.00
  A 0.48 0.47 -0.6 0 0 299.98 136.53
  Q 300.05 125.22 299.89 113.76
  Z`],["fill","var(--bg)","d",`
  M 181.25 134.20
  L 181.26 108.26
  A 0.68 0.68 0.0 0 1 182.52 107.90
  L 183.84 110.06
  A 0.68 0.68 0.0 0 1 183.94 110.41
  L 184.03 136.81
  A 0.68 0.68 0.0 0 1 182.75 137.13
  L 181.33 134.52
  A 0.68 0.68 0.0 0 1 181.25 134.20
  Z`],["fill","var(--bg)","d",`
  M 298.07 108.83
  C 299.41 110.35 299.86 111.60 299.89 113.76
  Q 300.05 125.22 299.98 136.53
  A 0.48 0.47 -0.6 0 1 299.51 137.00
  L 298.02 137.02
  Q 297.51 137.03 297.51 136.52
  L 297.51 109.04
  Q 297.51 108.19 298.07 108.83
  Z`],["fill","var(--col)","x","30.66","y","203.83","width","425.24","height","8.48","rx","0.27"],["fill","var(--col)","d",`
  M 438.6367 271.6996
  A 16.71 13.78 89.6 0 1 424.7403 255.0862
  A 16.71 13.78 89.6 0 1 438.4033 238.2804
  A 16.71 13.78 89.6 0 1 452.2997 254.8938
  A 16.71 13.78 89.6 0 1 438.6367 271.6996
  Z
  M 438.5028 268.1100
  A 13.09 9.48 89.9 0 0 447.9600 255.0035
  A 13.09 9.48 89.9 0 0 438.4572 241.9300
  A 13.09 9.48 89.9 0 0 429.0000 255.0365
  A 13.09 9.48 89.9 0 0 438.5028 268.1100
  Z`],["fill","var(--col)","d",`
  M 538.72 267.79
  Q 543.89 268.81 546.83 265.15
  Q 547.46 264.36 548.23 265.04
  L 549.50 266.18
  Q 550.35 266.93 549.48 267.67
  Q 545.88 270.72 542.87 271.23
  C 527.66 273.81 522.95 255.14 529.26 244.97
  Q 533.71 237.79 542.93 238.68
  C 545.22 238.90 546.94 240.63 548.86 241.74
  Q 549.63 242.18 549.04 242.84
  L 547.69 244.40
  Q 547.02 245.17 546.38 244.38
  Q 545.21 242.91 543.38 242.52
  Q 534.51 240.65 531.68 249.39
  Q 529.08 257.45 533.60 264.63
  C 534.43 265.93 537.08 267.47 538.72 267.79
  Z`],["fill","var(--col)","d",`
  M 566.6075 271.6998
  A 16.71 13.78 89.7 0 1 552.7402 255.0622
  A 16.71 13.78 89.7 0 1 566.4325 238.2802
  A 16.71 13.78 89.7 0 1 580.2998 254.9178
  A 16.71 13.78 89.7 0 1 566.6075 271.6998
  Z
  M 566.4372 268.0700
  A 13.07 9.48 90.1 0 0 575.9400 255.0165
  A 13.07 9.48 90.1 0 0 566.4828 241.9300
  A 13.07 9.48 90.1 0 0 556.9800 254.9835
  A 13.07 9.48 90.1 0 0 566.4372 268.0700
  Z`],["fill","var(--col)","d",`
  M 667.98 244.50
  C 664.94 242.13 658.59 240.49 656.31 244.76
  C 654.71 247.76 656.50 250.19 659.31 251.37
  C 662.64 252.76 666.38 253.93 669.08 256.17
  C 672.39 258.90 672.67 264.26 670.21 267.55
  Q 668.56 269.75 665.37 270.73
  Q 657.36 273.19 650.17 267.25
  Q 650.12 267.20 650.15 267.14
  Q 651.21 265.19 652.72 263.88
  Q 652.86 263.77 652.96 263.91
  Q 656.58 268.78 662.95 267.75
  C 664.86 267.44 667.04 266.34 667.56 264.29
  C 668.99 258.69 662.84 257.06 658.85 255.58
  C 654.18 253.86 650.24 249.74 652.17 244.45
  Q 653.72 240.17 658.45 238.98
  Q 665.17 237.31 670.44 241.97
  Q 670.96 242.42 670.67 243.04
  Q 670.14 244.17 669.21 244.63
  Q 668.56 244.95 667.98 244.50
  Z`],["fill","var(--col)","d",`
  M 840.39 267.35
  C 843.46 266.35 844.69 262.52 842.88 259.96
  Q 841.54 258.08 838.76 257.16
  C 834.68 255.80 828.09 253.28 827.70 248.16
  Q 827.20 241.52 833.36 239.37
  Q 840.49 236.88 845.92 241.71
  Q 846.74 242.44 846.11 243.34
  L 845.32 244.48
  A 0.92 0.91 -50.0 0 1 843.92 244.61
  C 841.07 241.76 835.89 241.28 833.01 243.68
  C 829.67 246.45 832.52 250.54 835.79 251.68
  Q 839.06 252.81 842.44 254.39
  C 849.84 257.84 849.54 268.06 841.65 270.65
  Q 833.78 273.23 826.49 267.53
  Q 825.85 267.03 826.33 266.37
  L 827.67 264.55
  A 0.97 0.96 40.5 0 1 829.13 264.44
  Q 834.07 269.40 840.39 267.35
  Z`],["fill","var(--col)","d",`
  M 226.06 261.25
  L 215.90 261.25
  Q 215.30 261.25 215.12 261.82
  L 212.23 270.88
  Q 212.21 270.94 212.15 270.95
  Q 210.24 271.21 208.41 270.73
  A 0.16 0.15 -73.8 0 1 208.31 270.53
  L 218.68 239.45
  A 0.67 0.66 8.7 0 1 219.30 239.00
  L 222.98 239.00
  Q 223.50 239.00 223.66 239.49
  L 233.90 270.20
  Q 234.17 271.00 233.33 271.00
  L 230.71 271.00
  A 1.30 1.30 0.0 0 1 229.44 269.96
  Q 228.60 265.78 226.92 261.81
  Q 226.68 261.25 226.06 261.25
  Z
  M 225.67 257.37
  L 221.18 242.73
  Q 221.04 242.26 220.89 242.73
  L 216.51 257.43
  Q 216.34 258.00 216.94 258.00
  L 225.21 258.00
  Q 225.87 258.00 225.67 257.37
  Z`],["fill","var(--col)","d",`
  M 242.36 245.02
  L 242.56 270.72
  Q 242.56 270.99 242.28 270.99
  L 238.99 270.99
  Q 238.75 270.99 238.75 270.74
  L 238.75 239.50
  Q 238.75 239.00 239.25 239.00
  L 242.25 239.00
  Q 242.86 239.00 243.17 239.53
  Q 247.08 246.21 250.93 253.07
  C 252.98 256.71 255.39 260.24 256.91 264.01
  Q 258.11 266.97 257.94 263.78
  Q 257.29 251.50 257.54 239.22
  Q 257.55 239.00 257.77 239.00
  L 261.25 239.01
  A 0.25 0.25 0.0 0 1 261.50 239.26
  L 261.50 270.37
  Q 261.50 270.99 260.88 271.00
  L 258.10 271.00
  Q 257.38 271.00 257.00 270.38
  Q 249.14 257.25 242.54 244.97
  Q 242.36 244.63 242.36 245.02
  Z`],["fill","var(--col)","x","270.25","y","239.01","width","4.00","height","31.98","rx","0.27"],["fill","var(--col)","d",`
  M 306.48 244.79
  Q 306.52 244.59 306.33 244.54
  L 306.02 244.46
  Q 305.91 244.43 305.87 244.54
  L 297.63 267.01
  A 1.42 1.41 40.7 0 1 295.06 267.20
  Q 294.27 265.75 293.65 264.05
  Q 290.14 254.51 286.75 245.02
  Q 286.09 243.20 286.23 245.13
  Q 287.09 257.10 286.64 270.80
  Q 286.64 270.98 286.46 270.98
  L 283.25 271.00
  Q 283.00 271.00 283.00 270.75
  L 283.00 239.50
  A 0.50 0.50 0.0 0 1 283.50 239.00
  L 286.80 239.00
  Q 287.40 239.00 287.69 239.52
  Q 288.32 240.63 288.74 241.80
  Q 292.26 251.53 295.73 261.43
  Q 296.35 263.22 296.95 261.42
  Q 300.01 252.17 303.49 242.75
  C 303.88 241.68 304.65 240.74 304.49 239.56
  A 0.49 0.49 0.0 0 1 304.98 239.00
  L 308.75 239.00
  Q 309.50 239.00 309.50 239.75
  L 309.50 270.74
  Q 309.50 270.99 309.26 270.99
  L 306.03 270.99
  Q 305.75 270.99 305.75 270.72
  Q 305.74 261.99 305.71 253.00
  Q 305.70 248.90 306.48 244.79
  Z`],["fill","var(--col)","d",`
  M 332.67 261.25
  L 321.58 261.25
  A 0.38 0.38 0.0 0 0 321.22 261.51
  L 318.27 270.75
  A 0.38 0.38 0.0 0 1 317.90 271.02
  L 314.67 270.96
  A 0.38 0.38 0.0 0 1 314.31 270.46
  L 324.75 239.26
  A 0.38 0.38 0.0 0 1 325.11 239.00
  L 329.18 239.00
  A 0.38 0.38 0.0 0 1 329.54 239.26
  L 340.02 270.50
  A 0.38 0.38 0.0 0 1 339.66 271.00
  L 336.14 271.00
  A 0.38 0.38 0.0 0 1 335.78 270.73
  L 333.03 261.52
  A 0.38 0.38 0.0 0 0 332.67 261.25
  Z
  M 322.39 257.79
  A 0.16 0.15 -81.3 0 0 322.53 257.99
  L 331.19 258.01
  Q 331.81 258.01 331.63 257.41
  L 327.38 243.23
  Q 327.07 242.18 326.75 243.23
  L 322.39 257.79
  Z`],["fill","var(--col)","d",`
  M 349.18 242.50
  L 340.02 242.50
  A 0.32 0.32 0.0 0 1 339.70 242.17
  L 339.77 239.31
  A 0.32 0.32 0.0 0 1 340.09 239.00
  L 362.95 239.00
  A 0.32 0.32 0.0 0 1 363.27 239.32
  L 363.24 242.18
  A 0.32 0.32 0.0 0 1 362.92 242.50
  L 353.82 242.50
  A 0.32 0.32 0.0 0 0 353.50 242.82
  L 353.50 270.67
  A 0.32 0.32 0.0 0 1 353.18 270.99
  L 349.82 270.99
  A 0.32 0.32 0.0 0 1 349.50 270.67
  L 349.50 242.82
  A 0.32 0.32 0.0 0 0 349.18 242.50
  Z`],["fill","var(--col)","d",`
  M 373.00 242.87
  L 373.01 252.13
  A 0.37 0.37 0.0 0 0 373.38 252.50
  L 384.62 252.50
  A 0.37 0.37 0.0 0 1 384.99 252.87
  L 385.00 255.63
  A 0.37 0.37 0.0 0 1 384.63 256.00
  L 373.37 256.00
  A 0.37 0.37 0.0 0 0 373.00 256.37
  L 373.00 267.15
  A 0.37 0.37 0.0 0 0 373.37 267.52
  L 387.39 267.47
  A 0.37 0.37 0.0 0 1 387.76 267.85
  L 387.73 270.63
  A 0.37 0.37 0.0 0 1 387.36 270.99
  L 369.12 271.00
  A 0.37 0.37 0.0 0 1 368.75 270.63
  L 368.75 239.37
  A 0.37 0.37 0.0 0 1 369.12 239.00
  L 386.91 239.00
  A 0.37 0.37 0.0 0 1 387.28 239.38
  L 387.22 242.14
  A 0.37 0.37 0.0 0 1 386.85 242.50
  L 373.37 242.50
  A 0.37 0.37 0.0 0 0 373.00 242.87
  Z`],["fill","var(--col)","d",`
  M 411.04 254.06
  A 0.56 0.56 0.0 0 0 412.05 254.03
  L 418.86 239.17
  Q 418.96 238.96 419.19 238.97
  L 422.94 239.09
  Q 423.13 239.09 423.05 239.26
  Q 418.96 247.76 414.40 256.57
  Q 413.40 258.50 413.44 260.52
  Q 413.56 265.77 413.48 270.56
  Q 413.47 271.00 413.04 271.00
  L 409.98 270.99
  Q 409.51 270.99 409.51 270.53
  Q 409.43 266.33 409.57 261.57
  Q 409.63 259.42 408.81 257.66
  Q 404.29 248.00 400.24 239.88
  Q 399.84 239.07 400.74 239.04
  Q 403.08 238.95 403.11 238.95
  Q 403.99 238.92 404.36 239.67
  Q 405.42 241.82 406.53 244.08
  C 408.16 247.42 409.30 250.78 411.04 254.06
  Z`],["fill","var(--col)","d",`
  M 467.52 267.31
  C 474.23 269.57 477.78 264.70 477.76 258.67
  Q 477.74 248.96 477.76 239.48
  Q 477.76 239.01 478.23 239.01
  L 481.27 239.01
  A 0.44 0.44 0.0 0 1 481.72 239.44
  Q 481.84 249.40 481.66 258.74
  C 481.49 267.90 476.33 272.92 466.98 271.06
  Q 463.30 270.32 461.28 267.26
  Q 459.04 263.88 458.90 258.91
  Q 458.62 249.36 458.79 239.41
  Q 458.80 239.00 459.20 239.00
  L 462.29 239.01
  Q 462.77 239.01 462.77 239.49
  Q 462.67 248.36 462.82 257.81
  C 462.87 261.47 463.56 265.98 467.52 267.31
  Z`],["fill","var(--col)","d",`
  M 494.50 258.25
  L 494.50 270.74
  Q 494.50 270.99 494.26 270.99
  L 490.75 271.00
  Q 490.25 271.00 490.25 270.50
  L 490.25 239.54
  Q 490.25 239.00 490.79 238.99
  C 495.54 238.98 500.37 238.67 505.03 239.76
  C 510.07 240.93 512.15 245.25 511.22 250.27
  Q 510.84 252.34 509.34 253.88
  Q 507.30 255.97 505.02 256.99
  Q 504.59 257.18 504.78 257.62
  Q 505.80 259.94 507.20 262.03
  C 509.08 264.82 510.24 267.78 512.25 270.49
  A 0.31 0.31 0.0 0 1 512.01 270.98
  L 508.49 271.01
  Q 507.84 271.01 507.52 270.45
  L 500.47 258.06
  Q 500.16 257.50 499.51 257.50
  L 495.25 257.50
  Q 494.50 257.50 494.50 258.25
  Z
  M 494.45 242.62
  L 494.53 253.90
  A 0.30 0.30 0.0 0 0 494.83 254.19
  L 500.86 254.15
  A 6.63 5.52 -0.4 0 0 507.45 248.58
  L 507.45 247.74
  A 6.63 5.52 -0.4 0 0 500.78 242.27
  L 494.75 242.31
  A 0.30 0.30 0.0 0 0 494.45 242.62
  Z`],["fill","var(--col)","d",`
  M 586.97 239.55
  A 0.58 0.58 0.0 0 1 587.55 238.97
  L 595.95 238.95
  A 14.33 14.00 89.9 0 1 609.98 253.26
  L 609.98 256.60
  A 14.33 14.00 89.9 0 1 596.01 270.95
  L 587.61 270.97
  A 0.58 0.58 0.0 0 1 587.03 270.39
  L 586.97 239.55
  Z
  M 590.96 242.87
  L 591.00 267.07
  A 0.64 0.64 0.0 0 0 591.64 267.71
  L 595.18 267.71
  A 10.92 10.58 89.9 0 0 605.74 256.77
  L 605.74 253.13
  A 10.92 10.58 89.9 0 0 595.14 242.23
  L 591.60 242.23
  A 0.64 0.64 0.0 0 0 590.96 242.87
  Z`],["fill","var(--col)","d",`
  M 620.98 243.05
  L 621.00 251.95
  A 0.56 0.56 0.0 0 0 621.56 252.51
  L 632.42 252.50
  A 0.56 0.56 0.0 0 1 632.98 253.06
  L 633.01 255.42
  A 0.56 0.56 0.0 0 1 632.45 255.98
  L 621.54 255.99
  A 0.56 0.56 0.0 0 0 620.98 256.55
  L 621.00 266.96
  A 0.56 0.56 0.0 0 0 621.56 267.52
  L 635.19 267.49
  A 0.56 0.56 0.0 0 1 635.75 268.05
  L 635.74 270.43
  A 0.56 0.56 0.0 0 1 635.18 270.99
  L 617.56 270.99
  A 0.56 0.56 0.0 0 1 617.00 270.43
  L 617.00 239.56
  A 0.56 0.56 0.0 0 1 617.56 239.00
  L 634.71 239.00
  A 0.56 0.56 0.0 0 1 635.27 239.56
  L 635.24 241.94
  A 0.56 0.56 0.0 0 1 634.68 242.50
  L 621.54 242.49
  A 0.56 0.56 0.0 0 0 620.98 243.05
  Z`],["fill","var(--col)","d",`
  M 681.67 244.89
  Q 682.20 255.92 681.94 270.16
  Q 681.93 271.03 681.06 271.01
  L 678.98 270.98
  Q 678.26 270.96 678.26 270.24
  L 678.25 239.75
  Q 678.25 238.99 679.01 239.00
  L 681.97 239.02
  A 0.88 0.87 75.3 0 1 682.73 239.47
  L 697.29 265.08
  Q 697.56 265.56 697.53 265.00
  Q 696.85 252.19 697.03 239.69
  Q 697.04 239.01 697.72 239.01
  L 700.24 239.00
  Q 700.98 239.00 700.98 239.74
  L 701.00 270.20
  Q 701.00 270.96 700.24 271.02
  C 698.20 271.17 697.05 271.42 695.84 269.34
  Q 688.66 256.97 681.94 244.82
  Q 681.64 244.27 681.67 244.89
  Z`],["fill","var(--col)","x","709.75","y","239.01","width","4.00","height","31.98","rx","0.44"],["fill","var(--col)","d",`
  M 726.49 258.77
  L 726.50 270.75
  Q 726.50 271.00 726.25 271.00
  L 722.87 270.99
  Q 722.50 270.99 722.50 270.62
  L 722.50 239.54
  Q 722.50 239.06 722.98 239.04
  Q 730.60 238.73 736.59 239.51
  C 741.16 240.10 744.11 243.73 744.00 248.30
  C 743.75 258.07 734.69 258.78 727.13 258.18
  Q 726.49 258.13 726.49 258.77
  Z
  M 726.47 242.60
  L 726.51 254.68
  A 0.30 0.30 0.0 0 0 726.81 254.98
  L 733.47 254.96
  A 6.42 5.90 -0.2 0 0 739.87 249.04
  L 739.87 248.16
  A 6.42 5.90 -0.2 0 0 733.43 242.28
  L 726.77 242.30
  A 0.30 0.30 0.0 0 0 726.47 242.60
  Z`],["fill","var(--col)","d",`
  M 754.49 258.73
  L 754.50 270.63
  Q 754.50 271.01 754.12 271.00
  L 750.74 270.99
  Q 750.50 270.99 750.50 270.74
  L 750.50 239.55
  Q 750.50 239.07 750.98 239.05
  Q 758.90 238.70 764.69 239.54
  C 771.29 240.50 773.51 247.18 771.01 252.77
  C 768.31 258.84 760.43 258.38 755.04 258.20
  Q 754.49 258.18 754.49 258.73
  Z
  M 754.50 242.55
  L 754.48 254.71
  A 0.25 0.25 0.0 0 0 754.73 254.96
  L 761.49 254.97
  A 6.41 6.06 0.1 0 0 767.91 248.92
  L 767.91 248.38
  A 6.41 6.06 0.1 0 0 761.51 242.31
  L 754.75 242.30
  A 0.25 0.25 0.0 0 0 754.50 242.55
  Z`],["fill","var(--col)","d",`
  M 782.82 252.50
  L 794.17 252.50
  A 0.32 0.32 0.0 0 1 794.49 252.82
  L 794.51 255.68
  A 0.32 0.32 0.0 0 1 794.19 256.00
  L 782.82 256.00
  A 0.32 0.32 0.0 0 0 782.50 256.32
  L 782.50 267.18
  A 0.32 0.32 0.0 0 0 782.82 267.50
  L 796.97 267.50
  A 0.32 0.32 0.0 0 1 797.29 267.83
  L 797.23 270.68
  A 0.32 0.32 0.0 0 1 796.91 270.99
  L 778.82 271.00
  A 0.32 0.32 0.0 0 1 778.50 270.68
  L 778.50 239.32
  A 0.32 0.32 0.0 0 1 778.82 239.00
  L 796.44 239.00
  A 0.32 0.32 0.0 0 1 796.76 239.32
  L 796.74 242.18
  A 0.32 0.32 0.0 0 1 796.42 242.50
  L 782.82 242.50
  A 0.32 0.32 0.0 0 0 782.50 242.82
  L 782.50 252.18
  A 0.32 0.32 0.0 0 0 782.82 252.50
  Z`],["fill","var(--col)","d",`
  M 810.43 242.48
  L 801.31 242.51
  A 0.32 0.32 0.0 0 1 800.99 242.19
  L 801.03 239.32
  A 0.32 0.32 0.0 0 1 801.35 239.00
  L 824.20 239.00
  A 0.32 0.32 0.0 0 1 824.52 239.32
  L 824.48 242.18
  A 0.32 0.32 0.0 0 1 824.16 242.50
  L 815.07 242.50
  A 0.32 0.32 0.0 0 0 814.75 242.82
  L 814.75 270.67
  A 0.32 0.32 0.0 0 1 814.43 270.99
  L 811.07 270.99
  A 0.32 0.32 0.0 0 1 810.75 270.67
  L 810.75 242.80
  A 0.32 0.32 0.0 0 0 810.43 242.48
  Z`],["fill","var(--bg)","cx","0.00","cy","0.00","transform","translate(438.48,255.02) rotate(89.9)","rx","13.09","ry","9.48"],["fill","var(--bg)","cx","0.00","cy","0.00","transform","translate(566.46,255.00) rotate(90.1)","rx","13.07","ry","9.48"],["fill","var(--bg)","d",`
  M 221.18 242.73
  L 225.67 257.37
  Q 225.87 258.00 225.21 258.00
  L 216.94 258.00
  Q 216.34 258.00 216.51 257.43
  L 220.89 242.73
  Q 221.04 242.26 221.18 242.73
  Z`],["fill","var(--bg)","d",`
  M 494.45 242.62
  A 0.30 0.30 0.0 0 1 494.75 242.31
  L 500.78 242.27
  A 6.63 5.52 -0.4 0 1 507.45 247.74
  L 507.45 248.58
  A 6.63 5.52 -0.4 0 1 500.86 254.15
  L 494.83 254.19
  A 0.30 0.30 0.0 0 1 494.53 253.90
  L 494.45 242.62
  Z`],["fill","var(--bg)","d",`
  M 590.96 242.87
  A 0.64 0.64 0.0 0 1 591.60 242.23
  L 595.14 242.23
  A 10.92 10.58 89.9 0 1 605.74 253.13
  L 605.74 256.77
  A 10.92 10.58 89.9 0 1 595.18 267.71
  L 591.64 267.71
  A 0.64 0.64 0.0 0 1 591.00 267.07
  L 590.96 242.87
  Z`],["fill","var(--bg)","d",`
  M 726.47 242.60
  A 0.30 0.30 0.0 0 1 726.77 242.30
  L 733.43 242.28
  A 6.42 5.90 -0.2 0 1 739.87 248.16
  L 739.87 249.04
  A 6.42 5.90 -0.2 0 1 733.47 254.96
  L 726.81 254.98
  A 0.30 0.30 0.0 0 1 726.51 254.68
  L 726.47 242.60
  Z`],["fill","var(--bg)","d",`
  M 754.50 242.55
  A 0.25 0.25 0.0 0 1 754.75 242.30
  L 761.51 242.31
  A 6.41 6.06 0.1 0 1 767.91 248.38
  L 767.91 248.92
  A 6.41 6.06 0.1 0 1 761.49 254.97
  L 754.73 254.96
  A 0.25 0.25 0.0 0 1 754.48 254.71
  L 754.50 242.55
  Z`],["fill","var(--bg)","d",`
  M 322.39 257.79
  L 326.75 243.23
  Q 327.07 242.18 327.38 243.23
  L 331.63 257.41
  Q 331.81 258.01 331.19 258.01
  L 322.53 257.99
  A 0.16 0.15 -81.3 0 1 322.39 257.79
  Z`]],template:function(r,s){r&1&&(Ee(),M(0,"svg",0),$(1,"path",1)(2,"rect",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8)(9,"path",9)(10,"path",10)(11,"path",11)(12,"path",12)(13,"path",13)(14,"path",14)(15,"path",15)(16,"path",16)(17,"path",17)(18,"path",18)(19,"path",19)(20,"path",20)(21,"path",21)(22,"path",22)(23,"path",23)(24,"path",24)(25,"path",25)(26,"path",26)(27,"path",27)(28,"path",28)(29,"rect",29)(30,"path",30)(31,"path",31)(32,"path",32)(33,"path",33)(34,"path",34)(35,"path",35)(36,"path",36)(37,"rect",37)(38,"path",38)(39,"path",39)(40,"path",40)(41,"path",41)(42,"path",42)(43,"path",43)(44,"path",44)(45,"path",45)(46,"path",46)(47,"path",47)(48,"rect",48)(49,"path",49)(50,"path",50)(51,"path",51)(52,"path",52)(53,"ellipse",53)(54,"ellipse",54)(55,"path",55)(56,"path",56)(57,"path",57)(58,"path",58)(59,"path",59)(60,"path",60),D())},dependencies:[H],encapsulation:2,changeDetection:0});let n=t;return n})();var c0=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=P({type:t,selectors:[["app-footer"]],standalone:!0,features:[j],decls:11,vars:0,consts:[[1,"social-networks"],["href","https://twitter.com/_evayann_","target","_blank","rel","noopener noreferrer"],["href","https://github.com/evayann","target","_blank","rel","noopener noreferrer"],["color","var(--logo)",1,"logo"]],template:function(r,s){r&1&&(M(0,"footer")(1,"div",0)(2,"a",1),B(3," X "),D(),M(4,"a",2),B(5," Github "),D()(),$(6,"app-logo",3),M(7,"p"),B(8," Made by "),M(9,"span"),B(10,"Yann Zavattero"),D()()())},dependencies:[H,l0],styles:["footer[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);align-items:center;justify-items:center;height:100%}.social-networks[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:var(--space-2)}.logo[_ngcontent-%COMP%]{width:20vw;border-radius:12px}"],changeDetection:0});let n=t;return n})();var h2=n=>[n],d2=n=>({disabled:n});function p2(n,t){if(n&1&&(M(0,"li")(1,"a",1),B(2),D()()),n&2){let i=t.$implicit,e=Ke();Ht(),Wt("routerLink",Dn(3,h2,i))("ngClass",Dn(5,d2,e.isCurrentUrl(i))),Ht(),Ye(" ",i," ")}}var u0=(()=>{let t=class t{constructor(){this.routeList=["auto","frame-per-frame"]}isCurrentUrl(e){return this.currentUrl?.includes(e)??!1}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=P({type:t,selectors:[["app-navigation"]],inputs:{currentUrl:"currentUrl"},standalone:!0,features:[j],decls:5,vars:0,consts:[[1,"label"],[1,"button","secondary",3,"routerLink","ngClass"]],template:function(r,s){r&1&&(M(0,"p",0),B(1," Animation mode "),D(),M(2,"ul"),Be(3,p2,3,7,"li",null,Ve),D()),r&2&&(Ht(3),He(s.routeList))},dependencies:[H,ar,i0,Yr],styles:["[_nghost-%COMP%]{background-color:rgb(var(--secondary-rgb),40%);border-radius:var(--space-3);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);padding:var(--space-3)}ul[_ngcontent-%COMP%]{display:flex;gap:var(--space-1);list-style-type:none;padding:0}.disabled[_ngcontent-%COMP%]{cursor:default}"],changeDetection:0});let n=t;return n})();var h0=(()=>{let t=class t{constructor(e,r){e.loadDefaultTheme(),this.routeSubscription=r.events.pipe(Z(s=>s instanceof x)).subscribe(s=>this.currentUrl=s.url)}ngOnDestroy(){this.routeSubscription.unsubscribe()}};t.\u0275fac=function(r){return new(r||t)(z(dr),z(U))},t.\u0275cmp=P({type:t,selectors:[["app-root"]],standalone:!0,features:[j],decls:4,vars:1,consts:[[3,"currentUrl"],[1,"page"]],template:function(r,s){r&1&&($(0,"app-navigation",0),M(1,"div",1),$(2,"router-outlet"),D(),$(3,"app-footer")),r&2&&Wt("currentUrl",s.currentUrl)},dependencies:[H,he,u0,c0],styles:['[_nghost-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:9fr 1fr;grid-template-areas:"page" "footer";width:100%;height:100%;overflow:auto;background-blend-mode:multiply;background-color:var(--background);background-image:url("./media/noise-LBHUHC7E.svg")}.page[_ngcontent-%COMP%]{grid-area:page}app-footer[_ngcontent-%COMP%]{grid-area:footer}app-navigation[_ngcontent-%COMP%]{position:absolute;top:var(--space-5);left:var(--space-5);z-index:1}']});let n=t;return n})();cr(h0,a0).catch(n=>console.error(n));
