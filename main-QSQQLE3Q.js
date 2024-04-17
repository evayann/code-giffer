import{a as R1}from"./chunk-OD6DNVQ6.js";import{$ as z2,$a as p1,A as q,Aa as r1,B as Rn,Ba as i1,C as Z2,Ca as S0,D as E2,Da as c0,E as P2,F as $,Fa as W,G as U2,H as y,Ha as o1,I as b,Ia as s1,J as m,Ja as Un,K as $2,Ka as E,L as j2,M as In,Ma as $n,N as D,Na as a1,O as V,Oa as l1,P as d,Pa as c1,Q as O,R as k2,S as Tn,T as xn,Ta as u1,U as Dn,Ua as nn,V as On,Va as h1,W as J0,Wa as jn,X as Zn,Xa as kn,Y as N2,Ya as d1,Z as _2,Za as tn,_ as F2,_a as Q1,a as S2,aa as M0,ab as f1,b as R2,ba as B,bb as R0,c as yn,ca as En,cb as g1,d as Mn,da as q2,db as v1,e as z,ea as V2,eb as I0,f as w,fa as B2,fb as L1,g as t0,ga as H,gb as A1,h as R,ha as Z,hb as m1,i as Q,ia as H2,ib as k,j as y0,ja as b0,jb as C1,k as I2,ka as w0,kb as y1,l as T2,la as a0,lb as M1,m as L,ma as W2,mb as b1,n as Y0,na as G2,o as I,oa as K2,ob as w1,p as bn,pa as l0,pb as S1,q as x2,qa as Y2,r as wn,ra as X2,s as D2,sa as Pn,t as F,ta as J2,u as i0,ua as n1,v as o0,va as t1,w as Sn,wa as e1,x as s0,xa as C,y as O2,ya as M,z as X0,za as T}from"./chunk-7AAV5TZ3.js";import{a as h,b as S}from"./chunk-VHCA6YAO.js";var p="primary",q0=Symbol("RouteTitle"),qn=class{constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let i=this.params[n];return Array.isArray(i)?i[0]:i}return null}getAll(n){if(this.has(n)){let i=this.params[n];return Array.isArray(i)?i:[i]}return[]}get keys(){return Object.keys(this.params)}};function p0(t){return new qn(t)}function xt(t,n,i){let e=i.path.split("/");if(e.length>t.length||i.pathMatch==="full"&&(n.hasChildren()||e.length<t.length))return null;let r={};for(let o=0;o<e.length;o++){let s=e[o],a=t[o];if(s.startsWith(":"))r[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:t.slice(0,e.length),posParams:r}}function Dt(t,n){if(t.length!==n.length)return!1;for(let i=0;i<t.length;++i)if(!N(t[i],n[i]))return!1;return!0}function N(t,n){let i=t?Vn(t):void 0,e=n?Vn(n):void 0;if(!i||!e||i.length!=e.length)return!1;let r;for(let o=0;o<i.length;o++)if(r=i[o],!$1(t[r],n[r]))return!1;return!0}function Vn(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function $1(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let i=[...t].sort(),e=[...n].sort();return i.every((r,o)=>e[o]===r)}else return t===n}function J(t){return I2(t)?t:i1(t)?R(Promise.resolve(t)):Q(t)}var Ot={exact:k1,subset:N1},j1={exact:Zt,subset:Et,ignored:()=>!0};function I1(t,n,i){return Ot[i.paths](t.root,n.root,i.matrixParams)&&j1[i.queryParams](t.queryParams,n.queryParams)&&!(i.fragment==="exact"&&t.fragment!==n.fragment)}function Zt(t,n){return N(t,n)}function k1(t,n,i){if(!r0(t.segments,n.segments)||!on(t.segments,n.segments,i)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let e in n.children)if(!t.children[e]||!k1(t.children[e],n.children[e],i))return!1;return!0}function Et(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(i=>$1(t[i],n[i]))}function N1(t,n,i){return _1(t,n,n.segments,i)}function _1(t,n,i,e){if(t.segments.length>i.length){let r=t.segments.slice(0,i.length);return!(!r0(r,i)||n.hasChildren()||!on(r,i,e))}else if(t.segments.length===i.length){if(!r0(t.segments,i)||!on(t.segments,i,e))return!1;for(let r in n.children)if(!t.children[r]||!N1(t.children[r],n.children[r],e))return!1;return!0}else{let r=i.slice(0,t.segments.length),o=i.slice(t.segments.length);return!r0(t.segments,r)||!on(t.segments,r,e)||!t.children[p]?!1:_1(t.children[p],n,o,e)}}function on(t,n,i){return n.every((e,r)=>j1[i](t[r].parameters,e.parameters))}var G=class{constructor(n=new v([],{}),i={},e=null){this.root=n,this.queryParams=i,this.fragment=e}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=p0(this.queryParams)),this._queryParamMap}toString(){return $t.serialize(this)}},v=class{constructor(n,i){this.segments=n,this.children=i,this.parent=null,Object.values(i).forEach(e=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return sn(this)}},e0=class{constructor(n,i){this.path=n,this.parameters=i}get parameterMap(){return this._parameterMap||(this._parameterMap=p0(this.parameters)),this._parameterMap}toString(){return z1(this)}};function Pt(t,n){return r0(t,n)&&t.every((i,e)=>N(i.parameters,n[e].parameters))}function r0(t,n){return t.length!==n.length?!1:t.every((i,e)=>i.path===n[e].path)}function Ut(t,n){let i=[];return Object.entries(t.children).forEach(([e,r])=>{e===p&&(i=i.concat(n(r,e)))}),Object.entries(t.children).forEach(([e,r])=>{e!==p&&(i=i.concat(n(r,e)))}),i}var V0=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:()=>(()=>new P0)(),providedIn:"root"});let t=n;return t})(),P0=class{parse(n){let i=new Hn(n);return new G(i.parseRootSegment(),i.parseQueryParams(),i.parseFragment())}serialize(n){let i=`/${T0(n.root,!0)}`,e=Nt(n.queryParams),r=typeof n.fragment=="string"?`#${jt(n.fragment)}`:"";return`${i}${e}${r}`}},$t=new P0;function sn(t){return t.segments.map(n=>z1(n)).join("/")}function T0(t,n){if(!t.hasChildren())return sn(t);if(n){let i=t.children[p]?T0(t.children[p],!1):"",e=[];return Object.entries(t.children).forEach(([r,o])=>{r!==p&&e.push(`${r}:${T0(o,!1)}`)}),e.length>0?`${i}(${e.join("//")})`:i}else{let i=Ut(t,(e,r)=>r===p?[T0(t.children[p],!1)]:[`${r}:${T0(e,!1)}`]);return Object.keys(t.children).length===1&&t.children[p]!=null?`${sn(t)}/${i[0]}`:`${sn(t)}/(${i.join("//")})`}}function F1(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function en(t){return F1(t).replace(/%3B/gi,";")}function jt(t){return encodeURI(t)}function Bn(t){return F1(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function an(t){return decodeURIComponent(t)}function T1(t){return an(t.replace(/\+/g,"%20"))}function z1(t){return`${Bn(t.path)}${kt(t.parameters)}`}function kt(t){return Object.entries(t).map(([n,i])=>`;${Bn(n)}=${Bn(i)}`).join("")}function Nt(t){let n=Object.entries(t).map(([i,e])=>Array.isArray(e)?e.map(r=>`${en(i)}=${en(r)}`).join("&"):`${en(i)}=${en(e)}`).filter(i=>i);return n.length?`?${n.join("&")}`:""}var _t=/^[^\/()?;#]+/;function Nn(t){let n=t.match(_t);return n?n[0]:""}var Ft=/^[^\/()?;=#]+/;function zt(t){let n=t.match(Ft);return n?n[0]:""}var qt=/^[^=?&#]+/;function Vt(t){let n=t.match(qt);return n?n[0]:""}var Bt=/^[^&#]+/;function Ht(t){let n=t.match(Bt);return n?n[0]:""}var Hn=class{constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new v([],{}):new v([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let n=[];for(this.peekStartsWith("(")||n.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),n.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0));let e={};return this.peekStartsWith("(")&&(e=this.parseParens(!1)),(n.length>0||Object.keys(i).length>0)&&(e[p]=new v(n,i)),e}parseSegment(){let n=Nn(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new b(4009,!1);return this.capture(n),new e0(an(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let i=zt(this.remaining);if(!i)return;this.capture(i);let e="";if(this.consumeOptional("=")){let r=Nn(this.remaining);r&&(e=r,this.capture(e))}n[an(i)]=an(e)}parseQueryParam(n){let i=Vt(this.remaining);if(!i)return;this.capture(i);let e="";if(this.consumeOptional("=")){let s=Ht(this.remaining);s&&(e=s,this.capture(e))}let r=T1(i),o=T1(e);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let e=Nn(this.remaining),r=this.remaining[e.length];if(r!=="/"&&r!==")"&&r!==";")throw new b(4010,!1);let o;e.indexOf(":")>-1?(o=e.slice(0,e.indexOf(":")),this.capture(o),this.capture(":")):n&&(o=p);let s=this.parseChildren();i[o]=Object.keys(s).length===1?s[p]:new v([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new b(4011,!1)}};function q1(t){return t.segments.length>0?new v([],{[p]:t}):t}function V1(t){let n={};for(let[e,r]of Object.entries(t.children)){let o=V1(r);if(e===p&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[e]=o)}let i=new v(t.segments,n);return Wt(i)}function Wt(t){if(t.numberOfChildren===1&&t.children[p]){let n=t.children[p];return new v(t.segments.concat(n.segments),n.children)}return t}function f0(t){return t instanceof G}function Gt(t,n,i=null,e=null){let r=B1(t);return H1(r,n,i,e)}function B1(t){let n;function i(o){let s={};for(let c of o.children){let l=i(c);s[c.outlet]=l}let a=new v(o.url,s);return o===t&&(n=a),a}let e=i(t.root),r=q1(e);return n??r}function H1(t,n,i,e){let r=t;for(;r.parent;)r=r.parent;if(n.length===0)return _n(r,r,r,i,e);let o=Kt(n);if(o.toRoot())return _n(r,r,new v([],{}),i,e);let s=Yt(o,r,t),a=s.processChildren?O0(s.segmentGroup,s.index,o.commands):G1(s.segmentGroup,s.index,o.commands);return _n(r,s.segmentGroup,a,i,e)}function ln(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function U0(t){return typeof t=="object"&&t!=null&&t.outlets}function _n(t,n,i,e,r){let o={};e&&Object.entries(e).forEach(([c,l])=>{o[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let s;t===n?s=i:s=W1(t,n,i);let a=q1(V1(s));return new G(a,o,r)}function W1(t,n,i){let e={};return Object.entries(t.children).forEach(([r,o])=>{o===n?e[r]=i:e[r]=W1(o,n,i)}),new v(t.segments,e)}var cn=class{constructor(n,i,e){if(this.isAbsolute=n,this.numberOfDoubleDots=i,this.commands=e,n&&e.length>0&&ln(e[0]))throw new b(4003,!1);let r=e.find(U0);if(r&&r!==e.at(-1))throw new b(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Kt(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new cn(!0,0,t);let n=0,i=!1,e=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?i=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new cn(i,n,e)}var d0=class{constructor(n,i,e){this.segmentGroup=n,this.processChildren=i,this.index=e}};function Yt(t,n,i){if(t.isAbsolute)return new d0(n,!0,0);if(!i)return new d0(n,!1,NaN);if(i.parent===null)return new d0(i,!0,0);let e=ln(t.commands[0])?0:1,r=i.segments.length-1+e;return Xt(i,r,t.numberOfDoubleDots)}function Xt(t,n,i){let e=t,r=n,o=i;for(;o>r;){if(o-=r,e=e.parent,!e)throw new b(4005,!1);r=e.segments.length}return new d0(e,!1,r-o)}function Jt(t){return U0(t[0])?t[0].outlets:{[p]:t}}function G1(t,n,i){if(t||(t=new v([],{})),t.segments.length===0&&t.hasChildren())return O0(t,n,i);let e=ne(t,n,i),r=i.slice(e.commandIndex);if(e.match&&e.pathIndex<t.segments.length){let o=new v(t.segments.slice(0,e.pathIndex),{});return o.children[p]=new v(t.segments.slice(e.pathIndex),t.children),O0(o,0,r)}else return e.match&&r.length===0?new v(t.segments,{}):e.match&&!t.hasChildren()?Wn(t,n,i):e.match?O0(t,0,r):Wn(t,n,i)}function O0(t,n,i){if(i.length===0)return new v(t.segments,{});{let e=Jt(i),r={};if(Object.keys(e).some(o=>o!==p)&&t.children[p]&&t.numberOfChildren===1&&t.children[p].segments.length===0){let o=O0(t.children[p],n,i);return new v(t.segments,o.children)}return Object.entries(e).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=G1(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{e[o]===void 0&&(r[o]=s)}),new v(t.segments,r)}}function ne(t,n,i){let e=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(e>=i.length)return o;let s=t.segments[r],a=i[e];if(U0(a))break;let c=`${a}`,l=e<i.length-1?i[e+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!D1(c,l,s))return o;e+=2}else{if(!D1(c,{},s))return o;e++}r++}return{match:!0,pathIndex:r,commandIndex:e}}function Wn(t,n,i){let e=t.segments.slice(0,n),r=0;for(;r<i.length;){let o=i[r];if(U0(o)){let c=te(o.outlets);return new v(e,c)}if(r===0&&ln(i[0])){let c=t.segments[n];e.push(new e0(c.path,x1(i[0]))),r++;continue}let s=U0(o)?o.outlets[p]:`${o}`,a=r<i.length-1?i[r+1]:null;s&&a&&ln(a)?(e.push(new e0(s,x1(a))),r+=2):(e.push(new e0(s,{})),r++)}return new v(e,{})}function te(t){let n={};return Object.entries(t).forEach(([i,e])=>{typeof e=="string"&&(e=[e]),e!==null&&(n[i]=Wn(new v([],{}),0,e))}),n}function x1(t){let n={};return Object.entries(t).forEach(([i,e])=>n[i]=`${e}`),n}function D1(t,n,i){return t==i.path&&N(n,i.parameters)}var Z0="imperative",P=class{constructor(n,i){this.id=n,this.url=i}},g0=class extends P{constructor(n,i,e="imperative",r=null){super(n,i),this.type=0,this.navigationTrigger=e,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},U=class extends P{constructor(n,i,e){super(n,i),this.urlAfterRedirects=e,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},K=class extends P{constructor(n,i,e,r){super(n,i),this.reason=e,this.code=r,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Y=class extends P{constructor(n,i,e,r){super(n,i),this.reason=e,this.code=r,this.type=16}},$0=class extends P{constructor(n,i,e,r){super(n,i),this.error=e,this.target=r,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},un=class extends P{constructor(n,i,e,r){super(n,i),this.urlAfterRedirects=e,this.state=r,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Gn=class extends P{constructor(n,i,e,r){super(n,i),this.urlAfterRedirects=e,this.state=r,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kn=class extends P{constructor(n,i,e,r,o){super(n,i),this.urlAfterRedirects=e,this.state=r,this.shouldActivate=o,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Yn=class extends P{constructor(n,i,e,r){super(n,i),this.urlAfterRedirects=e,this.state=r,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xn=class extends P{constructor(n,i,e,r){super(n,i),this.urlAfterRedirects=e,this.state=r,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jn=class{constructor(n){this.route=n,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},n2=class{constructor(n){this.route=n,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},t2=class{constructor(n){this.snapshot=n,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},e2=class{constructor(n){this.snapshot=n,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},r2=class{constructor(n){this.snapshot=n,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},i2=class{constructor(n){this.snapshot=n,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hn=class{constructor(n,i,e){this.routerEvent=n,this.position=i,this.anchor=e,this.type=15}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},j0=class{},k0=class{constructor(n){this.url=n}};var o2=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new B0,this.attachRef=null}},B0=(()=>{let n=class n{constructor(){this.contexts=new Map}onChildOutletCreated(e,r){let o=this.getOrCreateContext(e);o.outlet=r,this.contexts.set(e,o)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new o2,this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})(),dn=class{constructor(n){this._root=n}get root(){return this._root.value}parent(n){let i=this.pathFromRoot(n);return i.length>1?i[i.length-2]:null}children(n){let i=s2(n,this._root);return i?i.children.map(e=>e.value):[]}firstChild(n){let i=s2(n,this._root);return i&&i.children.length>0?i.children[0].value:null}siblings(n){let i=a2(n,this._root);return i.length<2?[]:i[i.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return a2(n,this._root).map(i=>i.value)}};function s2(t,n){if(t===n.value)return n;for(let i of n.children){let e=s2(t,i);if(e)return e}return null}function a2(t,n){if(t===n.value)return[n];for(let i of n.children){let e=a2(t,i);if(e.length)return e.unshift(n),e}return[]}var x=class{constructor(n,i){this.value=n,this.children=i}toString(){return`TreeNode(${this.value})`}};function h0(t){let n={};return t&&t.children.forEach(i=>n[i.value.outlet]=i),n}var Qn=class extends dn{constructor(n,i){super(n),this.snapshot=i,v2(this,n)}toString(){return this.snapshot.toString()}};function K1(t){let n=ee(t),i=new w([new e0("",{})]),e=new w({}),r=new w({}),o=new w({}),s=new w(""),a=new X(i,e,o,s,r,p,t,n.root);return a.snapshot=n.root,new Qn(new x(a,[]),n)}function ee(t){let n={},i={},e={},r="",o=new N0([],n,e,r,i,p,t,null,{});return new pn("",new x(o,[]))}var X=class{constructor(n,i,e,r,o,s,a,c){this.urlSubject=n,this.paramsSubject=i,this.queryParamsSubject=e,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(L(l=>l[q0]))??Q(void 0),this.url=n,this.params=i,this.queryParams=e,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(L(n=>p0(n)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(L(n=>p0(n)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function g2(t,n,i="emptyOnly"){let e,{routeConfig:r}=t;return n!==null&&(i==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?e={params:h(h({},n.params),t.params),data:h(h({},n.data),t.data),resolve:h(h(h(h({},t.data),n.data),r?.data),t._resolvedData)}:e={params:h({},t.params),data:h({},t.data),resolve:h(h({},t.data),t._resolvedData??{})},r&&X1(r)&&(e.resolve[q0]=r.title),e}var N0=class{get title(){return this.data?.[q0]}constructor(n,i,e,r,o,s,a,c,l){this.url=n,this.params=i,this.queryParams=e,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=p0(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=p0(this.queryParams)),this._queryParamMap}toString(){let n=this.url.map(e=>e.toString()).join("/"),i=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${i}')`}},pn=class extends dn{constructor(n,i){super(i),this.url=n,v2(this,i)}toString(){return Y1(this._root)}};function v2(t,n){n.value._routerState=t,n.children.forEach(i=>v2(t,i))}function Y1(t){let n=t.children.length>0?` { ${t.children.map(Y1).join(", ")} } `:"";return`${t.value}${n}`}function Fn(t){if(t.snapshot){let n=t.snapshot,i=t._futureSnapshot;t.snapshot=i,N(n.queryParams,i.queryParams)||t.queryParamsSubject.next(i.queryParams),n.fragment!==i.fragment&&t.fragmentSubject.next(i.fragment),N(n.params,i.params)||t.paramsSubject.next(i.params),Dt(n.url,i.url)||t.urlSubject.next(i.url),N(n.data,i.data)||t.dataSubject.next(i.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function l2(t,n){let i=N(t.params,n.params)&&Pt(t.url,n.url),e=!t.parent!=!n.parent;return i&&!e&&(!t.parent||l2(t.parent,n.parent))}function X1(t){return typeof t.title=="string"||t.title===null}var L2=(()=>{let n=class n{constructor(){this.activated=null,this._activatedRoute=null,this.name=p,this.activateEvents=new w0,this.deactivateEvents=new w0,this.attachEvents=new w0,this.detachEvents=new w0,this.parentContexts=d(B0),this.location=d(X2),this.changeDetector=d(b0),this.environmentInjector=d(M0),this.inputBinder=d(Ln,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:o}=e.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new b(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new b(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new b(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new b(4013,!1);this._activatedRoute=e;let o=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new c2(e,c,o.injector);this.activated=o.createComponent(a,{index:o.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};n.\u0275fac=function(r){return new(r||n)},n.\u0275dir=Tn({type:n,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[xn]});let t=n;return t})(),c2=class{constructor(n,i,e){this.route=n,this.childContexts=i,this.parent=e}get(n,i){return n===X?this.route:n===B0?this.childContexts:this.parent.get(n,i)}},Ln=new D(""),O1=(()=>{let n=class n{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:r}=e,o=Y0([r.queryParams,r.params,r.data]).pipe($(([s,a,c],l)=>(c=h(h(h({},s),a),c),l===0?Q(c):Promise.resolve(c)))).subscribe(s=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==r||r.component===null){this.unsubscribeFromRouteData(e);return}let a=Q1(r.component);if(!a){this.unsubscribeFromRouteData(e);return}for(let{templateName:c}of a.inputs)e.activatedComponentRef.setInput(c,s[c])});this.outletDataSubscriptions.set(e,o)}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:n.\u0275fac});let t=n;return t})();function re(t,n,i){let e=_0(t,n._root,i?i._root:void 0);return new Qn(e,n)}function _0(t,n,i){if(i&&t.shouldReuseRoute(n.value,i.value.snapshot)){let e=i.value;e._futureSnapshot=n.value;let r=ie(t,n,i);return new x(e,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>_0(t,a)),s}}let e=oe(n.value),r=n.children.map(o=>_0(t,o));return new x(e,r)}}function ie(t,n,i){return n.children.map(e=>{for(let r of i.children)if(t.shouldReuseRoute(e.value,r.value.snapshot))return _0(t,e,r);return _0(t,e)})}function oe(t){return new X(new w(t.url),new w(t.params),new w(t.queryParams),new w(t.fragment),new w(t.data),t.outlet,t.component,t)}var J1="ngNavigationCancelingError";function nt(t,n){let{redirectTo:i,navigationBehaviorOptions:e}=f0(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=tt(!1,0,n);return r.url=i,r.navigationBehaviorOptions=e,r}function tt(t,n,i){let e=new Error("NavigationCancelingError: "+(t||""));return e[J1]=!0,e.cancellationCode=n,i&&(e.url=i),e}function se(t){return et(t)&&f0(t.url)}function et(t){return t&&t[J1]}var ae=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=O({type:n,selectors:[["ng-component"]],standalone:!0,features:[E],decls:1,vars:0,template:function(r,o){r&1&&T(0,"router-outlet")},dependencies:[L2],encapsulation:2});let t=n;return t})();function le(t,n){return t.providers&&!t._injector&&(t._injector=Un(t.providers,n,`Route: ${t.path}`)),t._injector??n}function A2(t){let n=t.children&&t.children.map(A2),i=n?S(h({},t),{children:n}):h({},t);return!i.component&&!i.loadComponent&&(n||i.loadChildren)&&i.outlet&&i.outlet!==p&&(i.component=ae),i}function _(t){return t.outlet||p}function ce(t,n){let i=t.filter(e=>_(e)===n);return i.push(...t.filter(e=>_(e)!==n)),i}function H0(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let n=t.parent;n;n=n.parent){let i=n.routeConfig;if(i?._loadedInjector)return i._loadedInjector;if(i?._injector)return i._injector}return null}var ue=(t,n,i,e)=>L(r=>(new u2(n,r.targetRouterState,r.currentRouterState,i,e).activate(t),r)),u2=class{constructor(n,i,e,r,o){this.routeReuseStrategy=n,this.futureState=i,this.currState=e,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let i=this.futureState._root,e=this.currState?this.currState._root:null;this.deactivateChildRoutes(i,e,n),Fn(this.futureState.root),this.activateChildRoutes(i,e,n)}deactivateChildRoutes(n,i,e){let r=h0(i);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],e),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,e)})}deactivateRoutes(n,i,e){let r=n.value,o=i?i.value:null;if(r===o)if(r.component){let s=e.getContext(r.outlet);s&&this.deactivateChildRoutes(n,i,s.children)}else this.deactivateChildRoutes(n,i,e);else o&&this.deactivateRouteAndItsChildren(i,e)}deactivateRouteAndItsChildren(n,i){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,i):this.deactivateRouteAndOutlet(n,i)}detachAndStoreRouteSubtree(n,i){let e=i.getContext(n.value.outlet),r=e&&n.value.component?e.children:i,o=h0(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(e&&e.outlet){let s=e.outlet.detach(),a=e.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,i){let e=i.getContext(n.value.outlet),r=e&&n.value.component?e.children:i,o=h0(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);e&&(e.outlet&&(e.outlet.deactivate(),e.children.onOutletDeactivated()),e.attachRef=null,e.route=null)}activateChildRoutes(n,i,e){let r=h0(i);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],e),this.forwardEvent(new i2(o.value.snapshot))}),n.children.length&&this.forwardEvent(new e2(n.value.snapshot))}activateRoutes(n,i,e){let r=n.value,o=i?i.value:null;if(Fn(r),r===o)if(r.component){let s=e.getOrCreateContext(r.outlet);this.activateChildRoutes(n,i,s.children)}else this.activateChildRoutes(n,i,e);else if(r.component){let s=e.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Fn(a.route.value),this.activateChildRoutes(n,null,s.children)}else{let a=H0(r.snapshot);s.attachRef=null,s.route=r,s.injector=a,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}}else this.activateChildRoutes(n,null,e)}},fn=class{constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Q0=class{constructor(n,i){this.component=n,this.route=i}};function he(t,n,i){let e=t._root,r=n?n._root:null;return x0(e,r,i,[e.value])}function de(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function A0(t,n){let i=Symbol(),e=n.get(t,i);return e===i?typeof t=="function"&&!j2(t)?t:n.get(t):e}function x0(t,n,i,e,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=h0(n);return t.children.forEach(s=>{Qe(s,o[s.value.outlet],i,e.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>E0(a,i.getContext(s),r)),r}function Qe(t,n,i,e,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=i?i.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=pe(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new fn(e)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?x0(t,n,a?a.children:null,e,r):x0(t,n,i,e,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Q0(a.outlet.component,s))}else s&&E0(n,a,r),r.canActivateChecks.push(new fn(e)),o.component?x0(t,null,a?a.children:null,e,r):x0(t,null,i,e,r);return r}function pe(t,n,i){if(typeof i=="function")return i(t,n);switch(i){case"pathParamsChange":return!r0(t.url,n.url);case"pathParamsOrQueryParamsChange":return!r0(t.url,n.url)||!N(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!l2(t,n)||!N(t.queryParams,n.queryParams);case"paramsChange":default:return!l2(t,n)}}function E0(t,n,i){let e=h0(t),r=t.value;Object.entries(e).forEach(([o,s])=>{r.component?n?E0(s,n.children.getContext(o),i):E0(s,null,i):E0(s,n,i)}),r.component?n&&n.outlet&&n.outlet.isActivated?i.canDeactivateChecks.push(new Q0(n.outlet.component,r)):i.canDeactivateChecks.push(new Q0(null,r)):i.canDeactivateChecks.push(new Q0(null,r))}function W0(t){return typeof t=="function"}function fe(t){return typeof t=="boolean"}function ge(t){return t&&W0(t.canLoad)}function ve(t){return t&&W0(t.canActivate)}function Le(t){return t&&W0(t.canActivateChild)}function Ae(t){return t&&W0(t.canDeactivate)}function me(t){return t&&W0(t.canMatch)}function rt(t){return t instanceof T2||t?.name==="EmptyError"}var rn=Symbol("INITIAL_VALUE");function v0(){return $(t=>Y0(t.map(n=>n.pipe(s0(1),P2(rn)))).pipe(L(n=>{for(let i of n)if(i!==!0){if(i===rn)return rn;if(i===!1||i instanceof G)return i}return!0}),F(n=>n!==rn),s0(1)))}function Ce(t,n){return I(i=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:s}}=i;return s.length===0&&o.length===0?Q(S(h({},i),{guardsResult:!0})):ye(s,e,r,t).pipe(I(a=>a&&fe(a)?Me(e,o,t,n):Q(a)),L(a=>S(h({},i),{guardsResult:a})))})}function ye(t,n,i,e){return R(t).pipe(I(r=>Ie(r.component,r.route,i,n,e)),q(r=>r!==!0,!0))}function Me(t,n,i,e){return R(n).pipe(o0(r=>x2(we(r.route.parent,e),be(r.route,e),Re(t,r.path,i),Se(t,r.route,i))),q(r=>r!==!0,!0))}function be(t,n){return t!==null&&n&&n(new r2(t)),Q(!0)}function we(t,n){return t!==null&&n&&n(new t2(t)),Q(!0)}function Se(t,n,i){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Q(!0);let r=e.map(o=>wn(()=>{let s=H0(n)??i,a=A0(o,s),c=ve(a)?a.canActivate(n,t):B(s,()=>a(n,t));return J(c).pipe(q())}));return Q(r).pipe(v0())}function Re(t,n,i){let e=n[n.length-1],o=n.slice(0,n.length-1).reverse().map(s=>de(s)).filter(s=>s!==null).map(s=>wn(()=>{let a=s.guards.map(c=>{let l=H0(s.node)??i,u=A0(c,l),g=Le(u)?u.canActivateChild(e,t):B(l,()=>u(e,t));return J(g).pipe(q())});return Q(a).pipe(v0())}));return Q(o).pipe(v0())}function Ie(t,n,i,e,r){let o=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!o||o.length===0)return Q(!0);let s=o.map(a=>{let c=H0(n)??r,l=A0(a,c),u=Ae(l)?l.canDeactivate(t,n,i,e):B(c,()=>l(t,n,i,e));return J(u).pipe(q())});return Q(s).pipe(v0())}function Te(t,n,i,e){let r=n.canLoad;if(r===void 0||r.length===0)return Q(!0);let o=r.map(s=>{let a=A0(s,t),c=ge(a)?a.canLoad(n,i):B(t,()=>a(n,i));return J(c)});return Q(o).pipe(v0(),it(e))}function it(t){return R2(y(n=>{if(f0(n))throw nt(t,n)}),L(n=>n===!0))}function xe(t,n,i,e){let r=n.canMatch;if(!r||r.length===0)return Q(!0);let o=r.map(s=>{let a=A0(s,t),c=me(a)?a.canMatch(n,i):B(t,()=>a(n,i));return J(c)});return Q(o).pipe(v0(),it(e))}var F0=class{constructor(n){this.segmentGroup=n||null}},gn=class extends Error{constructor(n){super(),this.urlTree=n}};function u0(t){return y0(new F0(t))}function De(t){return y0(new b(4e3,!1))}function Oe(t){return y0(tt(!1,3))}var h2=class{constructor(n,i){this.urlSerializer=n,this.urlTree=i}lineralizeSegments(n,i){let e=[],r=i.root;for(;;){if(e=e.concat(r.segments),r.numberOfChildren===0)return Q(e);if(r.numberOfChildren>1||!r.children[p])return De(n.redirectTo);r=r.children[p]}}applyRedirectCommands(n,i,e){let r=this.applyRedirectCreateUrlTree(i,this.urlSerializer.parse(i),n,e);if(i.startsWith("/"))throw new gn(r);return r}applyRedirectCreateUrlTree(n,i,e,r){let o=this.createSegmentGroup(n,i.root,e,r);return new G(o,this.createQueryParams(i.queryParams,this.urlTree.queryParams),i.fragment)}createQueryParams(n,i){let e={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o.startsWith(":")){let a=o.substring(1);e[r]=i[a]}else e[r]=o}),e}createSegmentGroup(n,i,e,r){let o=this.createSegments(n,i.segments,e,r),s={};return Object.entries(i.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(n,c,e,r)}),new v(o,s)}createSegments(n,i,e,r){return i.map(o=>o.path.startsWith(":")?this.findPosParam(n,o,r):this.findOrReturn(o,e))}findPosParam(n,i,e){let r=e[i.path.substring(1)];if(!r)throw new b(4001,!1);return r}findOrReturn(n,i){let e=0;for(let r of i){if(r.path===n.path)return i.splice(e),r;e++}return n}},d2={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ze(t,n,i,e,r){let o=m2(t,n,i);return o.matched?(e=le(n,e),xe(e,n,i,r).pipe(L(s=>s===!0?o:h({},d2)))):Q(o)}function m2(t,n,i){if(n.path==="**")return Ee(i);if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||i.length>0)?h({},d2):{matched:!0,consumedSegments:[],remainingSegments:i,parameters:{},positionalParamSegments:{}};let r=(n.matcher||xt)(i,t,n);if(!r)return h({},d2);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?h(h({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:i.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function Ee(t){return{matched:!0,parameters:t.at(-1)?.parameters??{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function Z1(t,n,i,e){return i.length>0&&$e(t,i,e)?{segmentGroup:new v(n,Ue(e,new v(i,t.children))),slicedSegments:[]}:i.length===0&&je(t,i,e)?{segmentGroup:new v(t.segments,Pe(t,i,e,t.children)),slicedSegments:i}:{segmentGroup:new v(t.segments,t.children),slicedSegments:i}}function Pe(t,n,i,e){let r={};for(let o of i)if(An(t,n,o)&&!e[_(o)]){let s=new v([],{});r[_(o)]=s}return h(h({},e),r)}function Ue(t,n){let i={};i[p]=n;for(let e of t)if(e.path===""&&_(e)!==p){let r=new v([],{});i[_(e)]=r}return i}function $e(t,n,i){return i.some(e=>An(t,n,e)&&_(e)!==p)}function je(t,n,i){return i.some(e=>An(t,n,e))}function An(t,n,i){return(t.hasChildren()||n.length>0)&&i.pathMatch==="full"?!1:i.path===""}function ke(t,n,i,e){return _(t)!==e&&(e===p||!An(n,i,t))?!1:m2(n,t,i).matched}function Ne(t,n,i){return n.length===0&&!t.children[i]}var Q2=class{};function _e(t,n,i,e,r,o,s="emptyOnly"){return new p2(t,n,i,e,r,s,o).recognize()}var Fe=31,p2=class{constructor(n,i,e,r,o,s,a){this.injector=n,this.configLoader=i,this.rootComponentType=e,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new h2(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(n){return new b(4002,`'${n.segmentGroup}'`)}recognize(){let n=Z1(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(n).pipe(L(i=>{let e=new N0([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,{},p,this.rootComponentType,null,{}),r=new x(e,i),o=new pn("",r),s=Gt(e,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),this.inheritParamsAndData(o._root,null),{state:o,tree:s}}))}match(n){return this.processSegmentGroup(this.injector,this.config,n,p).pipe(i0(e=>{if(e instanceof gn)return this.urlTree=e.urlTree,this.match(e.urlTree.root);throw e instanceof F0?this.noMatchError(e):e}))}inheritParamsAndData(n,i){let e=n.value,r=g2(e,i,this.paramsInheritanceStrategy);e.params=Object.freeze(r.params),e.data=Object.freeze(r.data),n.children.forEach(o=>this.inheritParamsAndData(o,e))}processSegmentGroup(n,i,e,r){return e.segments.length===0&&e.hasChildren()?this.processChildren(n,i,e):this.processSegment(n,i,e,e.segments,r,!0).pipe(L(o=>o instanceof x?[o]:[]))}processChildren(n,i,e){let r=[];for(let o of Object.keys(e.children))o==="primary"?r.unshift(o):r.push(o);return R(r).pipe(o0(o=>{let s=e.children[o],a=ce(i,o);return this.processSegmentGroup(n,a,s,o)}),E2((o,s)=>(o.push(...s),o)),Sn(null),Z2(),I(o=>{if(o===null)return u0(e);let s=ot(o);return ze(s),Q(s)}))}processSegment(n,i,e,r,o,s){return R(i).pipe(o0(a=>this.processSegmentAgainstRoute(a._injector??n,i,a,e,r,o,s).pipe(i0(c=>{if(c instanceof F0)return Q(null);throw c}))),q(a=>!!a),i0(a=>{if(rt(a))return Ne(e,r,o)?Q(new Q2):u0(e);throw a}))}processSegmentAgainstRoute(n,i,e,r,o,s,a){return ke(e,r,o,s)?e.redirectTo===void 0?this.matchSegmentAgainstRoute(n,r,e,o,s):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(n,r,i,e,o,s):u0(r):u0(r)}expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,s){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=m2(i,r,o);if(!a)return u0(i);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Fe&&(this.allowRedirects=!1));let g=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,g).pipe(I(f=>this.processSegment(n,e,i,f.concat(u),s,!1)))}matchSegmentAgainstRoute(n,i,e,r,o){let s=Ze(i,e,r,n,this.urlSerializer);return e.path==="**"&&(i.children={}),s.pipe($(a=>a.matched?(n=e._injector??n,this.getChildConfig(n,e,r).pipe($(({routes:c})=>{let l=e._loadedInjector??n,{consumedSegments:u,remainingSegments:g,parameters:f}=a,A=new N0(u,f,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Ve(e),_(e),e.component??e._loadedComponent??null,e,Be(e)),{segmentGroup:m0,slicedSegments:C0}=Z1(i,u,g,c);if(C0.length===0&&m0.hasChildren())return this.processChildren(l,c,m0).pipe(L(n0=>n0===null?null:new x(A,n0)));if(c.length===0&&C0.length===0)return Q(new x(A,[]));let Cn=_(e)===o;return this.processSegment(l,c,m0,C0,Cn?p:o,!0).pipe(L(n0=>new x(A,n0 instanceof x?[n0]:[])))}))):u0(i)))}getChildConfig(n,i,e){return i.children?Q({routes:i.children,injector:n}):i.loadChildren?i._loadedRoutes!==void 0?Q({routes:i._loadedRoutes,injector:i._loadedInjector}):Te(n,i,e,this.urlSerializer).pipe(I(r=>r?this.configLoader.loadChildren(n,i).pipe(y(o=>{i._loadedRoutes=o.routes,i._loadedInjector=o.injector})):Oe(i))):Q({routes:[],injector:n})}};function ze(t){t.sort((n,i)=>n.value.outlet===p?-1:i.value.outlet===p?1:n.value.outlet.localeCompare(i.value.outlet))}function qe(t){let n=t.value.routeConfig;return n&&n.path===""}function ot(t){let n=[],i=new Set;for(let e of t){if(!qe(e)){n.push(e);continue}let r=n.find(o=>e.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...e.children),i.add(r)):n.push(e)}for(let e of i){let r=ot(e.children);n.push(new x(e.value,r))}return n.filter(e=>!i.has(e))}function Ve(t){return t.data||{}}function Be(t){return t.resolve||{}}function He(t,n,i,e,r,o){return I(s=>_e(t,n,i,e,s.extractedUrl,r,o).pipe(L(({state:a,tree:c})=>S(h({},s),{targetSnapshot:a,urlAfterRedirects:c}))))}function We(t,n){return I(i=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=i;if(!r.length)return Q(i);let o=new Set(r.map(c=>c.route)),s=new Set;for(let c of o)if(!s.has(c))for(let l of st(c))s.add(l);let a=0;return R(s).pipe(o0(c=>o.has(c)?Ge(c,e,t,n):(c.data=g2(c,c.parent,t).resolve,Q(void 0))),y(()=>a++),Rn(1),I(c=>a===s.size?Q(i):t0))})}function st(t){let n=t.children.map(i=>st(i)).flat();return[t,...n]}function Ge(t,n,i,e){let r=t.routeConfig,o=t._resolve;return r?.title!==void 0&&!X1(r)&&(o[q0]=r.title),Ke(o,t,n,e).pipe(L(s=>(t._resolvedData=s,t.data=g2(t,t.parent,i).resolve,null)))}function Ke(t,n,i,e){let r=Vn(t);if(r.length===0)return Q({});let o={};return R(r).pipe(I(s=>Ye(t[s],n,i,e).pipe(q(),y(a=>{o[s]=a}))),Rn(1),O2(o),i0(s=>rt(s)?t0:y0(s)))}function Ye(t,n,i,e){let r=H0(n)??e,o=A0(t,r),s=o.resolve?o.resolve(n,i):B(r,()=>o(n,i));return J(s)}function zn(t){return $(n=>{let i=t(n);return i?R(i).pipe(L(()=>n)):Q(n)})}var at=(()=>{let n=class n{buildTitle(e){let r,o=e.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(s=>s.outlet===p);return r}getResolvedTitleForRoute(e){return e.data[q0]}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:()=>(()=>d(Xe))(),providedIn:"root"});let t=n;return t})(),Xe=(()=>{let n=class n extends at{constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}};n.\u0275fac=function(r){return new(r||n)(V(M1))},n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})(),G0=new D("",{providedIn:"root",factory:()=>({})}),z0=new D("ROUTES"),C2=(()=>{let n=class n{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=d(nn)}loadComponent(e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Q(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let r=J(e.loadComponent()).pipe(L(lt),y(s=>{this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=s}),X0(()=>{this.componentLoaders.delete(e)})),o=new Mn(r,()=>new z).pipe(yn());return this.componentLoaders.set(e,o),o}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Q({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let s=Je(r,this.compiler,e,this.onLoadEndListener).pipe(X0(()=>{this.childrenLoaders.delete(r)})),a=new Mn(s,()=>new z).pipe(yn());return this.childrenLoaders.set(r,a),a}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();function Je(t,n,i,e){return J(t.loadChildren()).pipe(L(lt),I(r=>r instanceof s1||Array.isArray(r)?Q(r):R(n.compileModuleAsync(r))),L(r=>{e&&e(t);let o,s,a=!1;return Array.isArray(r)?(s=r,a=!0):(o=r.create(i).injector,s=o.get(z0,[],{optional:!0,self:!0}).flat()),{routes:s.map(A2),injector:o}}))}function n3(t){return t&&typeof t=="object"&&"default"in t}function lt(t){return n3(t)?t.default:t}var y2=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:()=>(()=>d(t3))(),providedIn:"root"});let t=n;return t})(),t3=(()=>{let n=class n{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})(),ct=new D(""),ut=new D("");function e3(t,n,i){let e=t.get(ut),r=t.get(p1);return t.get(a0).runOutsideAngular(()=>{if(!r.startViewTransition||e.skipNextTransition)return e.skipNextTransition=!1,Promise.resolve();let o,s=new Promise(l=>{o=l}),a=r.startViewTransition(()=>(o(),r3(t))),{onViewTransitionCreated:c}=e;return c&&B(t,()=>c({transition:a,from:n,to:i})),s})}function r3(t){return new Promise(n=>{W2(n,{injector:t})})}var M2=(()=>{let n=class n{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new z,this.transitionAbortSubject=new z,this.configLoader=d(C2),this.environmentInjector=d(M0),this.urlSerializer=d(V0),this.rootContexts=d(B0),this.location=d(I0),this.inputBindingEnabled=d(Ln,{optional:!0})!==null,this.titleStrategy=d(at),this.options=d(G0,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=d(y2),this.createViewTransition=d(ct,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Q(void 0),this.rootComponentType=null;let e=o=>this.events.next(new Jn(o)),r=o=>this.events.next(new n2(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;this.transitions?.next(S(h(h({},this.transitions.value),e),{id:r}))}setupNavigations(e,r,o){return this.transitions=new w({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Z0,restoredState:null,currentSnapshot:o.snapshot,targetSnapshot:null,currentRouterState:o,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(F(s=>s.id!==0),L(s=>S(h({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),$(s=>{this.currentTransition=s;let a=!1,c=!1;return Q(s).pipe(y(l=>{this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?S(h({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),$(l=>{let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),g=l.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&g!=="reload"){let f="";return this.events.next(new Y(l.id,this.urlSerializer.serialize(l.rawUrl),f,0)),l.resolve(null),t0}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Q(l).pipe($(f=>{let A=this.transitions?.getValue();return this.events.next(new g0(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),A!==this.transitions?.getValue()?t0:Promise.resolve(f)}),He(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),y(f=>{s.targetSnapshot=f.targetSnapshot,s.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation=S(h({},this.currentNavigation),{finalUrl:f.urlAfterRedirects});let A=new un(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(A)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:f,extractedUrl:A,source:m0,restoredState:C0,extras:Cn}=l,n0=new g0(f,this.urlSerializer.serialize(A),m0,C0);this.events.next(n0);let Tt=K1(this.rootComponentType).snapshot;return this.currentTransition=s=S(h({},l),{targetSnapshot:Tt,urlAfterRedirects:A,extras:S(h({},Cn),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=A,Q(s)}else{let f="";return this.events.next(new Y(l.id,this.urlSerializer.serialize(l.extractedUrl),f,1)),l.resolve(null),t0}}),y(l=>{let u=new Gn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),L(l=>(this.currentTransition=s=S(h({},l),{guards:he(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),s)),Ce(this.environmentInjector,l=>this.events.next(l)),y(l=>{if(s.guardsResult=l.guardsResult,f0(l.guardsResult))throw nt(this.urlSerializer,l.guardsResult);let u=new Kn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),F(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",3),!1)),zn(l=>{if(l.guards.canActivateChecks.length)return Q(l).pipe(y(u=>{let g=new Yn(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(g)}),$(u=>{let g=!1;return Q(u).pipe(We(this.paramsInheritanceStrategy,this.environmentInjector),y({next:()=>g=!0,complete:()=>{g||this.cancelNavigationTransition(u,"",2)}}))}),y(u=>{let g=new Xn(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(g)}))}),zn(l=>{let u=g=>{let f=[];g.routeConfig?.loadComponent&&!g.routeConfig._loadedComponent&&f.push(this.configLoader.loadComponent(g.routeConfig).pipe(y(A=>{g.component=A}),L(()=>{})));for(let A of g.children)f.push(...u(A));return f};return Y0(u(l.targetSnapshot.root)).pipe(Sn(null),s0(1))}),zn(()=>this.afterPreactivation()),$(()=>{let{currentSnapshot:l,targetSnapshot:u}=s,g=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return g?R(g).pipe(L(()=>s)):Q(s)}),L(l=>{let u=re(e.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=s=S(h({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,s}),y(()=>{this.events.next(new j0)}),ue(this.rootContexts,e.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),s0(1),y({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new U(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),U2(this.transitionAbortSubject.pipe(y(l=>{throw l}))),X0(()=>{if(!a&&!c){let l="";this.cancelNavigationTransition(s,l,1)}this.currentNavigation?.id===s.id&&(this.currentNavigation=null)}),i0(l=>{if(c=!0,et(l))this.events.next(new K(s.id,this.urlSerializer.serialize(s.extractedUrl),l.message,l.cancellationCode)),se(l)?this.events.next(new k0(l.url)):s.resolve(!1);else{this.events.next(new $0(s.id,this.urlSerializer.serialize(s.extractedUrl),l,s.targetSnapshot??void 0));try{s.resolve(e.errorHandler(l))}catch(u){s.reject(u)}}return t0}))}))}cancelNavigationTransition(e,r,o){let s=new K(e.id,this.urlSerializer.serialize(e.extractedUrl),r,o);this.events.next(s),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();function i3(t){return t!==Z0}var o3=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:()=>(()=>d(s3))(),providedIn:"root"});let t=n;return t})(),f2=class{shouldDetach(n){return!1}store(n,i){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,i){return n.routeConfig===i.routeConfig}},s3=(()=>{let n=class n extends f2{};n.\u0275fac=(()=>{let e;return function(o){return(e||(e=Zn(n)))(o||n)}})(),n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})(),ht=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:()=>(()=>d(a3))(),providedIn:"root"});let t=n;return t})(),a3=(()=>{let n=class n extends ht{constructor(){super(...arguments),this.location=d(I0),this.urlSerializer=d(V0),this.options=d(G0,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=d(y2),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new G,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=K1(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type==="popstate"&&e(r.url,r.state)})}handleRouterEvent(e,r){if(e instanceof g0)this.stateMemento=this.createStateMemento();else if(e instanceof Y)this.rawUrlTree=r.initialUrl;else if(e instanceof un){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(o,r)}}else e instanceof j0?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):e instanceof K&&(e.code===3||e.code===2)?this.restoreHistory(r):e instanceof $0?this.restoreHistory(r,!0):e instanceof U&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let o=this.urlSerializer.serialize(e);if(this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl){let s=this.browserPageId,a=h(h({},r.extras.state),this.generateNgRouterState(r.id,s));this.location.replaceState(o,"",a)}else{let s=h(h({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(o,"",s)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,s=this.currentPageId-o;s!==0?this.location.historyGo(s):this.currentUrlTree===e.finalUrl&&s===0&&(this.resetState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(e),this.resetUrlToCurrentUrlTree())}resetState(e){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:r}:{navigationId:e}}};n.\u0275fac=(()=>{let e;return function(o){return(e||(e=Zn(n)))(o||n)}})(),n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})(),D0=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(D0||{});function dt(t,n){t.events.pipe(F(i=>i instanceof U||i instanceof K||i instanceof $0||i instanceof Y),L(i=>i instanceof U||i instanceof Y?D0.COMPLETE:(i instanceof K?i.code===0||i.code===1:!1)?D0.REDIRECTING:D0.FAILED),F(i=>i!==D0.REDIRECTING),s0(1)).subscribe(()=>{n()})}function l3(t){throw t}var c3={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},u3={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},j=(()=>{let n=class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=d(u1),this.stateManager=d(ht),this.options=d(G0,{optional:!0})||{},this.pendingTasks=d(h1),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=d(M2),this.urlSerializer=d(V0),this.location=d(I0),this.urlHandlingStrategy=d(y2),this._events=new z,this.errorHandler=this.options.errorHandler||l3,this.navigated=!1,this.routeReuseStrategy=d(o3),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=d(z0,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!d(Ln,{optional:!0}),this.eventsSubscription=new S2,this.isNgZoneEnabled=d(a0)instanceof a0&&a0.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(o!==null&&s!==null){if(this.stateManager.handleRouterEvent(r,s),r instanceof K&&r.code!==0&&r.code!==1)this.navigated=!0;else if(r instanceof U)this.navigated=!0;else if(r instanceof k0){let a=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),c={skipLocationChange:o.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||i3(o.source)};this.scheduleNavigation(a,Z0,null,c,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}d3(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Z0,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription||(this.nonRouterCurrentEntryChangeSubscription=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(e,"popstate",r)},0)}))}navigateToSyncWithBrowser(e,r,o){let s={replaceUrl:!0},a=o?.navigationId?o:null;if(o){let l=h({},o);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let c=this.parseUrl(e);this.scheduleNavigation(c,r,a,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(A2),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:o,queryParams:s,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,g=null;switch(c){case"merge":g=h(h({},this.currentUrlTree.queryParams),s);break;case"preserve":g=this.currentUrlTree.queryParams;break;default:g=s||null}g!==null&&(g=this.removeEmptyProps(g));let f;try{let A=o?o.snapshot:this.routerState.snapshot.root;f=B1(A)}catch{(typeof e[0]!="string"||!e[0].startsWith("/"))&&(e=[]),f=this.currentUrlTree.root}return H1(f,e,g,u??null)}navigateByUrl(e,r={skipLocationChange:!1}){let o=f0(e)?e:this.parseUrl(e),s=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(s,Z0,null,r)}navigate(e,r={skipLocationChange:!1}){return h3(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,r){let o;if(r===!0?o=h({},c3):r===!1?o=h({},u3):o=r,f0(e))return I1(this.currentUrlTree,e,o);let s=this.parseUrl(e);return I1(this.currentUrlTree,s,o)}removeEmptyProps(e){return Object.entries(e).reduce((r,[o,s])=>(s!=null&&(r[o]=s),r),{})}scheduleNavigation(e,r,o,s,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((f,A)=>{c=f,l=A});let g=this.pendingTasks.add();return dt(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(g))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:s,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(f=>Promise.reject(f))}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();function h3(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new b(4008,!1)}function d3(t){return!(t instanceof j0)&&!(t instanceof k0)}var Qt=(()=>{let n=class n{constructor(e,r,o,s,a,c){this.router=e,this.route=r,this.tabIndexAttribute=o,this.renderer=s,this.el=a,this.locationStrategy=c,this.href=null,this.commands=null,this.onChanges=new z,this.preserveFragment=!1,this.skipLocationChange=!1,this.replaceUrl=!1;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=e.events.subscribe(u=>{u instanceof U&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(e){e!=null?(this.commands=Array.isArray(e)?e:[e],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(e,r,o,s,a){if(this.urlTree===null||this.isAnchorElement&&(e!==0||r||o||s||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state};return this.router.navigateByUrl(this.urlTree,c),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){this.href=this.urlTree!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null;let e=this.href===null?null:q2(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",e)}applyAttributeValue(e,r){let o=this.renderer,s=this.el.nativeElement;r!==null?o.setAttribute(s,e,r):o.removeAttribute(s,e)}get urlTree(){return this.commands===null?null:this.router.createUrlTree(this.commands,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}};n.\u0275fac=function(r){return new(r||n)(Z(j),Z(X),N2("tabindex"),Z(B2),Z(V2),Z(R0))},n.\u0275dir=Tn({type:n,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(r,o){r&1&&S0("click",function(a){return o.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&K2("target",o.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",relativeTo:"relativeTo",preserveFragment:["preserveFragment","preserveFragment",tn],skipLocationChange:["skipLocationChange","skipLocationChange",tn],replaceUrl:["replaceUrl","replaceUrl",tn],routerLink:"routerLink"},standalone:!0,features:[G2,xn]});let t=n;return t})();var vn=class{};var Q3=(()=>{let n=class n{constructor(e,r,o,s,a){this.router=e,this.injector=o,this.preloadingStrategy=s,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(F(e=>e instanceof U),o0(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,r){let o=[];for(let s of r){s.providers&&!s._injector&&(s._injector=Un(s.providers,e,`Route: ${s.path}`));let a=s._injector??e,c=s._loadedInjector??a;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&o.push(this.preloadConfig(a,s)),(s.children||s._loadedRoutes)&&o.push(this.processRoutes(c,s.children??s._loadedRoutes))}return R(o).pipe(bn())}preloadConfig(e,r){return this.preloadingStrategy.preload(r,()=>{let o;r.loadChildren&&r.canLoad===void 0?o=this.loader.loadChildren(e,r):o=Q(null);let s=o.pipe(I(a=>a===null?Q(void 0):(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,this.processRoutes(a.injector??e,a.routes))));if(r.loadComponent&&!r._loadedComponent){let a=this.loader.loadComponent(r);return R([s,a]).pipe(bn())}else return s})}};n.\u0275fac=function(r){return new(r||n)(V(j),V(nn),V(M0),V(vn),V(C2))},n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})(),pt=new D(""),p3=(()=>{let n=class n{constructor(e,r,o,s,a={}){this.urlSerializer=e,this.transitions=r,this.viewportScroller=o,this.zone=s,this.options=a,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},a.scrollPositionRestoration=a.scrollPositionRestoration||"disabled",a.anchorScrolling=a.anchorScrolling||"disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof g0?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof U?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Y&&e.code===0&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof hn&&(e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,r){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new hn(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,r))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}};n.\u0275fac=function(r){H2()},n.\u0275prov=m({token:n,factory:n.\u0275fac});let t=n;return t})();function ft(t,...n){return z2([{provide:z0,multi:!0,useValue:t},[],{provide:X,useFactory:gt,deps:[j]},{provide:kn,multi:!0,useFactory:vt},n.map(i=>i.\u0275providers)])}function gt(t){return t.routerState.root}function K0(t,n){return{\u0275kind:t,\u0275providers:n}}function vt(){let t=d(En);return n=>{let i=t.get(d1);if(n!==i.components[0])return;let e=t.get(j),r=t.get(Lt);t.get(b2)===1&&e.initialNavigation(),t.get(At,null,In.Optional)?.setUpPreloading(),t.get(pt,null,In.Optional)?.init(),e.resetRootComponentType(i.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Lt=new D("",{factory:()=>new z}),b2=new D("",{providedIn:"root",factory:()=>1});function f3(){return K0(2,[{provide:b2,useValue:0},{provide:jn,multi:!0,deps:[En],useFactory:n=>{let i=n.get(f1,Promise.resolve());return()=>i.then(()=>new Promise(e=>{let r=n.get(j),o=n.get(Lt);dt(r,()=>{e(!0)}),n.get(M2).afterPreactivation=()=>(e(!0),o.closed?Q(void 0):o),r.initialNavigation()}))}}])}function g3(){return K0(3,[{provide:jn,multi:!0,useFactory:()=>{let n=d(j);return()=>{n.setUpLocationChangeListener()}}},{provide:b2,useValue:2}])}var At=new D("");function v3(t){return K0(0,[{provide:At,useExisting:Q3},{provide:vn,useExisting:t}])}function w2(){return K0(8,[O1,{provide:Ln,useExisting:O1}])}function L3(t){let n=[{provide:ct,useValue:e3},{provide:ut,useValue:h({skipNextTransition:!!t?.skipInitialTransition},t)}];return K0(9,n)}var E1=new D("ROUTER_FORROOT_GUARD"),A3=[I0,{provide:V0,useClass:P0},j,B0,{provide:X,useFactory:gt,deps:[j]},C2,[]],mt=(()=>{let n=class n{constructor(e){}static forRoot(e,r){return{ngModule:n,providers:[A3,[],{provide:z0,multi:!0,useValue:e},{provide:E1,useFactory:M3,deps:[[j,new _2,new F2]]},{provide:G0,useValue:r||{}},r?.useHash?C3():y3(),m3(),r?.preloadingStrategy?v3(r.preloadingStrategy).\u0275providers:[],r?.initialNavigation?b3(r):[],r?.bindToComponentInputs?w2().\u0275providers:[],r?.enableViewTransitions?L3().\u0275providers:[],w3()]}}static forChild(e){return{ngModule:n,providers:[{provide:z0,multi:!0,useValue:e}]}}};n.\u0275fac=function(r){return new(r||n)(V(E1,8))},n.\u0275mod=k2({type:n}),n.\u0275inj=$2({});let t=n;return t})();function m3(){return{provide:pt,useFactory:()=>{let t=d(C1),n=d(a0),i=d(G0),e=d(M2),r=d(V0);return i.scrollOffset&&t.setOffset(i.scrollOffset),new p3(r,e,t,n,i)}}}function C3(){return{provide:R0,useClass:v1}}function y3(){return{provide:R0,useClass:g1}}function M3(t){return"guarded"}function b3(t){return[t.initialNavigation==="disabled"?g3().\u0275providers:[],t.initialNavigation==="enabledBlocking"?f3().\u0275providers:[]]}var P1=new D("");function w3(){return[{provide:P1,useFactory:vt},{provide:kn,multi:!0,useExisting:P1}]}var mn=(()=>{let n=class n{constructor(){this.isFirstLoad=!0,this.isLoadingSubject$=new w(!1)}get isLoading$(){return this.isLoadingSubject$.asObservable()}startLoading(){this.isLoadingSubject$.next(!0),this.isFirstLoad=!1}endLoading(){this.isLoadingSubject$.next(!1)}};n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"});let t=n;return t})();var R3=()=>{let t=d(mn);return t.isFirstLoad?(t.startLoading(),D2(2e3).pipe(L(()=>(t.endLoading(),!0)))):!0},yt=[{path:"",redirectTo:"auto",pathMatch:"full"},{path:"",canActivateChild:[R3],children:[{path:"auto",loadComponent:()=>import("./chunk-UKJNOYX5.js").then(t=>t.AutoCodeToGifPageComponent)},{path:"frame-per-frame",loadComponent:()=>import("./chunk-5DEH2E4Q.js").then(t=>t.FramePerFrameCodeToGifPageComponent)}]}];var Mt={providers:[ft(yt,w2()),{provide:S1,useValue:{fullLibraryLoader:()=>import("./chunk-IJJSOYG7.js")}}]};var bt=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=O({type:n,selectors:[["app-logo"]],hostVars:4,hostBindings:function(r,o){r&2&&Y2("--logo-color",o.color)("--logo-background",o.background)},inputs:{color:"color",background:"background"},standalone:!0,features:[E],decls:61,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","version","1.1","viewBox","0.00 0.00 1060.00 310.00",2,"--bg","var(--logo-background, transparent)","--col","var(--logo-color, red)"],["fill","var(--bg)","d",`
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
  Z`]],template:function(r,o){r&1&&(J0(),C(0,"svg",0),T(1,"path",1)(2,"rect",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8)(9,"path",9)(10,"path",10)(11,"path",11)(12,"path",12)(13,"path",13)(14,"path",14)(15,"path",15)(16,"path",16)(17,"path",17)(18,"path",18)(19,"path",19)(20,"path",20)(21,"path",21)(22,"path",22)(23,"path",23)(24,"path",24)(25,"path",25)(26,"path",26)(27,"path",27)(28,"path",28)(29,"rect",29)(30,"path",30)(31,"path",31)(32,"path",32)(33,"path",33)(34,"path",34)(35,"path",35)(36,"path",36)(37,"rect",37)(38,"path",38)(39,"path",39)(40,"path",40)(41,"path",41)(42,"path",42)(43,"path",43)(44,"path",44)(45,"path",45)(46,"path",46)(47,"path",47)(48,"rect",48)(49,"path",49)(50,"path",50)(51,"path",51)(52,"path",52)(53,"ellipse",53)(54,"ellipse",54)(55,"path",55)(56,"path",56)(57,"path",57)(58,"path",58)(59,"path",59)(60,"path",60),M())},dependencies:[k],encapsulation:2,changeDetection:0});let t=n;return t})();var I3=["app",""],wt=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=O({type:n,selectors:[["footer","app",""]],standalone:!0,features:[E],attrs:I3,decls:10,vars:0,consts:[[1,"social-networks"],["href","https://twitter.com/_evayann_","target","_blank","rel","noopener noreferrer"],["href","https://github.com/evayann","target","_blank","rel","noopener noreferrer"],["color","var(--logo)",1,"logo"]],template:function(r,o){r&1&&(C(0,"div",0)(1,"a",1),W(2," X "),M(),C(3,"a",2),W(4," Github "),M()(),T(5,"app-logo",3),C(6,"p"),W(7," Made by "),C(8,"span"),W(9,"Yann Zavattero"),M()())},dependencies:[k,bt],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);align-items:center;justify-items:center;height:100%}.social-networks[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:var(--space-2)}.logo[_ngcontent-%COMP%]{width:20vw;border-radius:var(--border-radius-4)}"],changeDetection:0});let t=n;return t})();var St=(()=>{let n=class n{};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=O({type:n,selectors:[["app-initial-loading"]],standalone:!0,features:[E],decls:63,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","version","1.1","viewBox","0.00 0.00 1060.00 310.00",2,"--bg","transparent","--col","var(--logo, red)"],[2,"scale","0.5"],["fill","var(--bg)","d",`
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
  Z`]],template:function(r,o){r&1&&(J0(),C(0,"svg",0)(1,"g",1),T(2,"path",2)(3,"rect",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8)(9,"path",9)(10,"path",10)(11,"path",11)(12,"path",12)(13,"path",13)(14,"path",14)(15,"path",15)(16,"path",16)(17,"path",17)(18,"path",18)(19,"path",19)(20,"path",20)(21,"path",21)(22,"path",22)(23,"path",23)(24,"path",24)(25,"path",25)(26,"path",26)(27,"path",27)(28,"path",28)(29,"path",29)(30,"rect",30),M(),C(31,"g",1),T(32,"path",31)(33,"path",32)(34,"path",33)(35,"path",34)(36,"path",35)(37,"path",36)(38,"path",37)(39,"rect",38)(40,"path",39)(41,"path",40)(42,"path",41)(43,"path",42)(44,"path",43)(45,"path",44)(46,"path",45)(47,"path",46)(48,"path",47)(49,"path",48)(50,"rect",49)(51,"path",50)(52,"path",51)(53,"path",52)(54,"path",53)(55,"ellipse",54)(56,"ellipse",55)(57,"path",56)(58,"path",57)(59,"path",58)(60,"path",59)(61,"path",60)(62,"path",61),M()())},dependencies:[k],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%], svg[_ngcontent-%COMP%]{width:100%;height:100%}svg[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]:first-child{translate:-50% 25%;animation:_ngcontent-%COMP%_slideIn .6s ease-in-out forwards}svg[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]:first-child + g[_ngcontent-%COMP%]{translate:-50% 25%;animation:.6s ease-in-out .6s _ngcontent-%COMP%_slideIn forwards}@keyframes _ngcontent-%COMP%_slideIn{0%{translate:-50% 25%}to{translate:25% 25%}}"],changeDetection:0});let t=n;return t})();var T3=["app",""],x3=t=>[t],D3=t=>({disabled:t});function O3(t,n){if(t&1&&(C(0,"li")(1,"a",2),W(2),M()()),t&2){let i=n.$implicit,e=c0();H(),l0("routerLink",$n(3,x3,i))("ngClass",$n(5,D3,e.isCurrentUrl(i))),H(),o1(" ",i," ")}}var Z3=(t,n)=>({"--count":t,"--active":n}),Rt=(()=>{let n=class n{constructor(){this.routeList=["auto","frame-per-frame"]}isCurrentUrl(e){return this.currentUrl?.includes(e)??!1}currentRouteIndexInList(){return this.routeList.findIndex(e=>(this.currentUrl??"").includes(e))??1}};n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=O({type:n,selectors:[["nav","app",""]],inputs:{currentUrl:"currentUrl"},standalone:!0,features:[E],attrs:T3,decls:5,vars:4,consts:[[1,"label"],[1,"route-list",3,"ngStyle"],[1,"route",3,"routerLink","ngClass"]],template:function(r,o){r&1&&(C(0,"p",0),W(1," Animation mode "),M(),C(2,"ul",1),t1(3,O3,3,7,"li",null,n1),M()),r&2&&(H(2),l0("ngStyle",a1(1,Z3,o.routeList.length,o.currentRouteIndexInList())),H(),e1(o.routeList))},dependencies:[k,L1,A1,mt,Qt],styles:['[_nghost-%COMP%]{background-color:rgba(var(--secondary-rgb),40%);border-radius:var(--border-radius);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);padding:var(--padding-4);--border-radius: var(--border-radius-3);--border: 4px;--height: 48px;--speed: .25s;--ease: linear( 0, .1641 3.52%, .311 7.18%, .4413 10.99%, .5553 14.96%, .6539 19.12%, .738 23.5%, .8086 28.15%, .8662 33.12%, .9078 37.92%, .9405 43.12%, .965 48.84%, .9821 55.28%, .992 61.97%, .9976 70.09%, 1 )}.route-list[_ngcontent-%COMP%]{position:relative;display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:var(--space-3);height:var(--height);list-style-type:none;background-color:var(--secondary);border-radius:var(--border-radius);border:var(--border) solid var(--secondary);padding:0 2px}.route-list[_ngcontent-%COMP%]:before{content:"";position:absolute;pointer-events:none;width:calc(100% / var(--count));height:100%;background:var(--background);border-radius:calc(var(--border-radius) - var(--border));translate:calc(var(--active, 0) * 100%) 0;transition:translate,outline-color;transition-duration:var(--speed);transition-timing-function:var(--ease, ease);outline:2px solid transparent}.route[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-decoration:none;width:100%;height:100%}.disabled[_ngcontent-%COMP%]{cursor:default;position:relative;color:var(--text-background)}'],changeDetection:0});let t=n;return t})();function E3(t,n){t&1&&T(0,"app-initial-loading")}function P3(t,n){if(t&1){let i=r1();C(0,"header"),T(1,"nav",0),C(2,"app-menu",1),S0("themeChange",function(){Dn(i);let r=c0();return On(r.onThemeChange())}),M()(),C(3,"div",2)(4,"router-outlet",3),S0("activate",function(r){Dn(i);let o=c0();return On(o.onOutletComponentActivate(r))}),M()(),T(5,"footer",4)}if(t&2){let i=c0();H(),l0("currentUrl",i.currentUrl),H(),l0("themeNameList",i.themeService.themeNameList)("menuForm",i.menuForm)}}var It=(()=>{let n=class n{constructor(e,r,o,s,a){this.themeService=e,this.isLoading$=r.isLoading$,e.loadDefaultTheme();let c=e.currentTheme;this.menuForm=s.group({intervalBetweenFrameInMs:100,theme:c.name,loopIteration:0,hasBackground:!0,roundCorner:"medium",padding:"medium",isDarkMode:c.variant==="dark"}),this.routeSubscription=o.events.pipe(F(l=>l instanceof U)).subscribe(l=>{this.currentUrl=l.url,a.detectChanges()})}ngOnDestroy(){this.routeSubscription.unsubscribe()}onOutletComponentActivate(e){e.menuForm=this.menuForm}onThemeChange(){this.themeService.loadTheme({name:this.getMenuValue("theme"),variant:this.getMenuValue("isDarkMode")?"dark":"light"})}getMenuValue(e){return this.menuForm.get(e)?.value}};n.\u0275fac=function(r){return new(r||n)(Z(R1),Z(mn),Z(j),Z(b1),Z(b0))},n.\u0275cmp=O({type:n,selectors:[["app-root"]],standalone:!0,features:[E],decls:3,vars:3,consts:[["app","",3,"currentUrl"],[3,"themeNameList","menuForm","themeChange"],[1,"page"],[3,"activate"],["app",""]],template:function(r,o){r&1&&(Pn(0,E3,1,0,"app-initial-loading"),l1(1,"async"),Pn(2,P3,6,3)),r&2&&J2(0,c1(1,1,o.isLoading$)?0:2)},dependencies:[k,m1,L2,w1,Rt,wt,St],styles:['[_nghost-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:1fr 9fr 1fr;grid-template-areas:"header" "page" "footer";width:100%;height:100%;overflow:auto;background-blend-mode:multiply;background-color:var(--background);background-image:url("./media/noise-QTMOSU2G.svg")}[_nghost-%COMP%]:has(app-initial-loading){display:flex;align-items:center;justify-content:center}.page[_ngcontent-%COMP%]{grid-area:page}app-footer[_ngcontent-%COMP%]{grid-area:footer}header[_ngcontent-%COMP%]{grid-area:header;position:sticky;top:0;display:grid;grid-template-columns:repeat(2,1fr);align-items:center;justify-items:center;padding:var(--space-5) 0;z-index:1}header[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:100%}nav[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}'],changeDetection:0});let t=n;return t})();y1(It,Mt).catch(t=>console.error(t));
