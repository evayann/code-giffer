import{a as D,b as se,c as Ql,d as Bl}from"./chunk-VHCA6YAO.js";var c0=Ql((u0,Vl)=>{"use strict";(function(t){"use strict";var e=Y(),r=q(),n=pe(),i=ie(),o={imagePlaceholder:void 0,cacheBust:!1},s={toSvg:a,toPng:c,toJpeg:l,toBlob:d,toPixelData:u,impl:{fontFaces:n,images:i,util:e,inliner:r,options:{}}};typeof Vl<"u"?Vl.exports=s:t.domtoimage=s;function a(v,g){return g=g||{},f(g),Promise.resolve(v).then(function(x){return p(x,g.filter,!0)}).then(C).then(b).then(_).then(function(x){return m(x,g.width||e.width(v),g.height||e.height(v))});function _(x){return g.bgcolor&&(x.style.backgroundColor=g.bgcolor),g.width&&(x.style.width=g.width+"px"),g.height&&(x.style.height=g.height+"px"),g.style&&Object.keys(g.style).forEach(function(H){x.style[H]=g.style[H]}),x}}function u(v,g){return h(v,g||{}).then(function(_){return _.getContext("2d").getImageData(0,0,e.width(v),e.height(v)).data})}function c(v,g){return h(v,g||{}).then(function(_){return _.toDataURL()})}function l(v,g){return g=g||{},h(v,g).then(function(_){return _.toDataURL("image/jpeg",g.quality||1)})}function d(v,g){return h(v,g||{}).then(e.canvasToBlob)}function f(v){typeof v.imagePlaceholder>"u"?s.impl.options.imagePlaceholder=o.imagePlaceholder:s.impl.options.imagePlaceholder=v.imagePlaceholder,typeof v.cacheBust>"u"?s.impl.options.cacheBust=o.cacheBust:s.impl.options.cacheBust=v.cacheBust}function h(v,g){return a(v,g).then(e.makeImage).then(e.delay(100)).then(function(x){var H=_(v);return H.getContext("2d").drawImage(x,0,0),H});function _(x){var H=document.createElement("canvas");if(H.width=g.width||e.width(x),H.height=g.height||e.height(x),g.bgcolor){var Q=H.getContext("2d");Q.fillStyle=g.bgcolor,Q.fillRect(0,0,H.width,H.height)}return H}}function p(v,g,_){if(!_&&g&&!g(v))return Promise.resolve();return Promise.resolve(v).then(x).then(function(S){return H(v,S,g)}).then(function(S){return Q(v,S)});function x(S){return S instanceof HTMLCanvasElement?e.makeImage(S.toDataURL()):S.cloneNode(!1)}function H(S,P,be){var ze=S.childNodes;if(ze.length===0)return Promise.resolve(P);return ee(P,e.asArray(ze),be).then(function(){return P});function ee(Fe,G,De){var _e=Promise.resolve();return G.forEach(function($e){_e=_e.then(function(){return p($e,De)}).then(function(Me){Me&&Fe.appendChild(Me)})}),_e}}function Q(S,P){if(!(P instanceof Element))return P;return Promise.resolve().then(be).then(ze).then(ee).then(Fe).then(function(){return P});function be(){G(window.getComputedStyle(S),P.style);function G(De,_e){De.cssText?_e.cssText=De.cssText:$e(De,_e);function $e(Me,Ae){e.asArray(Me).forEach(function(y){Ae.setProperty(y,Me.getPropertyValue(y),Me.getPropertyPriority(y))})}}}function ze(){[":before",":after"].forEach(function(De){G(De)});function G(De){var _e=window.getComputedStyle(S,De),$e=_e.getPropertyValue("content");if($e===""||$e==="none")return;var Me=e.uid();P.className=P.className+" "+Me;var Ae=document.createElement("style");Ae.appendChild(y(Me,De,_e)),P.appendChild(Ae);function y(k,J,K){var X="."+k+":"+J,Re=K.cssText?ut(K):ct(K);return document.createTextNode(X+"{"+Re+"}");function ut(Je){var xe=Je.getPropertyValue("content");return Je.cssText+" content: "+xe+";"}function ct(Je){return e.asArray(Je).map(xe).join("; ")+";";function xe(Rt){return Rt+": "+Je.getPropertyValue(Rt)+(Je.getPropertyPriority(Rt)?" !important":"")}}}}}function ee(){S instanceof HTMLTextAreaElement&&(P.innerHTML=S.value),S instanceof HTMLInputElement&&P.setAttribute("value",S.value)}function Fe(){P instanceof SVGElement&&(P.setAttribute("xmlns","http://www.w3.org/2000/svg"),P instanceof SVGRectElement&&["width","height"].forEach(function(G){var De=P.getAttribute(G);De&&P.style.setProperty(G,De)}))}}}function C(v){return n.resolveAll().then(function(g){var _=document.createElement("style");return v.appendChild(_),_.appendChild(document.createTextNode(g)),v})}function b(v){return i.inlineAll(v).then(function(){return v})}function m(v,g,_){return Promise.resolve(v).then(function(x){return x.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(x)}).then(e.escapeXhtml).then(function(x){return'<foreignObject x="0" y="0" width="100%" height="100%">'+x+"</foreignObject>"}).then(function(x){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+g+'" height="'+_+'">'+x+"</svg>"}).then(function(x){return"data:image/svg+xml;charset=utf-8,"+x})}function Y(){return{escape:Fe,parseExtension:g,mimeType:_,dataAsUrl:ee,isDataUrl:x,canvasToBlob:Q,resolveUrl:S,getAndEncode:ze,uid:P(),delay:G,asArray:De,escapeXhtml:_e,makeImage:be,width:$e,height:Me};function v(){var y="application/font-woff",k="image/jpeg";return{woff:y,woff2:y,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:k,jpeg:k,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function g(y){var k=/\.([^\.\/]*?)$/g.exec(y);return k?k[1]:""}function _(y){var k=g(y).toLowerCase();return v()[k]||""}function x(y){return y.search(/^(data:)/)!==-1}function H(y){return new Promise(function(k){for(var J=window.atob(y.toDataURL().split(",")[1]),K=J.length,X=new Uint8Array(K),Re=0;Re<K;Re++)X[Re]=J.charCodeAt(Re);k(new Blob([X],{type:"image/png"}))})}function Q(y){return y.toBlob?new Promise(function(k){y.toBlob(k)}):H(y)}function S(y,k){var J=document.implementation.createHTMLDocument(),K=J.createElement("base");J.head.appendChild(K);var X=J.createElement("a");return J.body.appendChild(X),K.href=k,X.href=y,X.href}function P(){var y=0;return function(){return"u"+k()+y++;function k(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function be(y){return new Promise(function(k,J){var K=new Image;K.onload=function(){k(K)},K.onerror=J,K.src=y})}function ze(y){var k=3e4;return s.impl.options.cacheBust&&(y+=(/\?/.test(y)?"&":"?")+new Date().getTime()),new Promise(function(J){var K=new XMLHttpRequest;K.onreadystatechange=ut,K.ontimeout=ct,K.responseType="blob",K.timeout=k,K.open("GET",y,!0),K.send();var X;if(s.impl.options.imagePlaceholder){var Re=s.impl.options.imagePlaceholder.split(/,/);Re&&Re[1]&&(X=Re[1])}function ut(){if(K.readyState===4){if(K.status!==200){X?J(X):Je("cannot fetch resource: "+y+", status: "+K.status);return}var xe=new FileReader;xe.onloadend=function(){var Rt=xe.result.split(/,/)[1];J(Rt)},xe.readAsDataURL(K.response)}}function ct(){X?J(X):Je("timeout of "+k+"ms occured while fetching resource: "+y)}function Je(xe){console.error(xe),J("")}})}function ee(y,k){return"data:"+k+";base64,"+y}function Fe(y){return y.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function G(y){return function(k){return new Promise(function(J){setTimeout(function(){J(k)},y)})}}function De(y){for(var k=[],J=y.length,K=0;K<J;K++)k.push(y[K]);return k}function _e(y){return y.replace(/#/g,"%23").replace(/\n/g,"%0A")}function $e(y){var k=Ae(y,"border-left-width"),J=Ae(y,"border-right-width");return y.scrollWidth+k+J}function Me(y){var k=Ae(y,"border-top-width"),J=Ae(y,"border-bottom-width");return y.scrollHeight+k+J}function Ae(y,k){var J=window.getComputedStyle(y).getPropertyValue(k);return parseFloat(J.replace("px",""))}}function q(){var v=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:H,shouldProcess:g,impl:{readUrls:_,inline:x}};function g(Q){return Q.search(v)!==-1}function _(Q){for(var S=[],P;(P=v.exec(Q))!==null;)S.push(P[1]);return S.filter(function(be){return!e.isDataUrl(be)})}function x(Q,S,P,be){return Promise.resolve(S).then(function(ee){return P?e.resolveUrl(ee,P):ee}).then(be||e.getAndEncode).then(function(ee){return e.dataAsUrl(ee,e.mimeType(S))}).then(function(ee){return Q.replace(ze(S),"$1"+ee+"$3")});function ze(ee){return new RegExp(`(url\\(['"]?)(`+e.escape(ee)+`)(['"]?\\))`,"g")}}function H(Q,S,P){if(be())return Promise.resolve(Q);return Promise.resolve(Q).then(_).then(function(ze){var ee=Promise.resolve(Q);return ze.forEach(function(Fe){ee=ee.then(function(G){return x(G,Fe,S,P)})}),ee});function be(){return!g(Q)}}}function pe(){return{resolveAll:v,impl:{readAll:g}};function v(){return g(document).then(function(_){return Promise.all(_.map(function(x){return x.resolve()}))}).then(function(_){return _.join(`
`)})}function g(){return Promise.resolve(e.asArray(document.styleSheets)).then(x).then(_).then(function(Q){return Q.map(H)});function _(Q){return Q.filter(function(S){return S.type===CSSRule.FONT_FACE_RULE}).filter(function(S){return r.shouldProcess(S.style.getPropertyValue("src"))})}function x(Q){var S=[];return Q.forEach(function(P){try{e.asArray(P.cssRules||[]).forEach(S.push.bind(S))}catch(be){console.log("Error while reading CSS rules from "+P.href,be.toString())}}),S}function H(Q){return{resolve:function(){var P=(Q.parentStyleSheet||{}).href;return r.inlineAll(Q.cssText,P)},src:function(){return Q.style.getPropertyValue("src")}}}}}function ie(){return{inlineAll:g,impl:{newImage:v}};function v(_){return{inline:x};function x(H){return e.isDataUrl(_.src)?Promise.resolve():Promise.resolve(_.src).then(H||e.getAndEncode).then(function(Q){return e.dataAsUrl(Q,e.mimeType(_.src))}).then(function(Q){return new Promise(function(S,P){_.onload=S,_.onerror=P,_.src=Q})})}}function g(_){if(!(_ instanceof Element))return Promise.resolve(_);return x(_).then(function(){return _ instanceof HTMLImageElement?v(_).inline():Promise.all(e.asArray(_.childNodes).map(function(H){return g(H)}))});function x(H){var Q=H.style.getPropertyValue("background");return Q?r.inlineAll(Q).then(function(S){H.style.setProperty("background",S,H.style.getPropertyPriority("background"))}).then(function(){return H}):Promise.resolve(H)}}}})(u0)});var d0=Ql(jl=>{"use strict";function m5(t,e,r,o){var i=0,o=o===void 0?{}:o,s=o.loop===void 0?null:o.loop,a=o.palette===void 0?null:o.palette;if(e<=0||r<=0||e>65535||r>65535)throw new Error("Width/Height invalid.");function u(b){var m=b.length;if(m<2||m>256||m&m-1)throw new Error("Invalid code/color length, must be power of 2 and 2 .. 256.");return m}t[i++]=71,t[i++]=73,t[i++]=70,t[i++]=56,t[i++]=57,t[i++]=97;var c=0,l=0;if(a!==null){for(var d=u(a);d>>=1;)++c;if(d=1<<c,--c,o.background!==void 0){if(l=o.background,l>=d)throw new Error("Background index out of range.");if(l===0)throw new Error("Background index explicitly passed as 0.")}}if(t[i++]=e&255,t[i++]=e>>8&255,t[i++]=r&255,t[i++]=r>>8&255,t[i++]=(a!==null?128:0)|c,t[i++]=l,t[i++]=0,a!==null)for(var f=0,h=a.length;f<h;++f){var p=a[f];t[i++]=p>>16&255,t[i++]=p>>8&255,t[i++]=p&255}if(s!==null){if(s<0||s>65535)throw new Error("Loop count invalid.");t[i++]=33,t[i++]=255,t[i++]=11,t[i++]=78,t[i++]=69,t[i++]=84,t[i++]=83,t[i++]=67,t[i++]=65,t[i++]=80,t[i++]=69,t[i++]=50,t[i++]=46,t[i++]=48,t[i++]=3,t[i++]=1,t[i++]=s&255,t[i++]=s>>8&255,t[i++]=0}var C=!1;this.addFrame=function(b,m,Y,q,pe,ie){if(C===!0&&(--i,C=!1),ie=ie===void 0?{}:ie,b<0||m<0||b>65535||m>65535)throw new Error("x/y invalid.");if(Y<=0||q<=0||Y>65535||q>65535)throw new Error("Width/Height invalid.");if(pe.length<Y*q)throw new Error("Not enough pixels for the frame size.");var v=!0,g=ie.palette;if(g==null&&(v=!1,g=a),g==null)throw new Error("Must supply either a local or global palette.");for(var _=u(g),x=0;_>>=1;)++x;_=1<<x;var H=ie.delay===void 0?0:ie.delay,Q=ie.disposal===void 0?0:ie.disposal;if(Q<0||Q>3)throw new Error("Disposal out of range.");var S=!1,P=0;if(ie.transparent!==void 0&&ie.transparent!==null&&(S=!0,P=ie.transparent,P<0||P>=_))throw new Error("Transparent color index.");if((Q!==0||S||H!==0)&&(t[i++]=33,t[i++]=249,t[i++]=4,t[i++]=Q<<2|(S===!0?1:0),t[i++]=H&255,t[i++]=H>>8&255,t[i++]=P,t[i++]=0),t[i++]=44,t[i++]=b&255,t[i++]=b>>8&255,t[i++]=m&255,t[i++]=m>>8&255,t[i++]=Y&255,t[i++]=Y>>8&255,t[i++]=q&255,t[i++]=q>>8&255,t[i++]=v===!0?128|x-1:0,v===!0)for(var be=0,ze=g.length;be<ze;++be){var ee=g[be];t[i++]=ee>>16&255,t[i++]=ee>>8&255,t[i++]=ee&255}return i=v5(t,i,x<2?2:x,pe),i},this.end=function(){return C===!1&&(t[i++]=59,C=!0),i},this.getOutputBuffer=function(){return t},this.setOutputBuffer=function(b){t=b},this.getOutputBufferPosition=function(){return i},this.setOutputBufferPosition=function(b){i=b}}function v5(t,e,r,n){t[e++]=r;var i=e++,o=1<<r,s=o-1,a=o+1,u=a+1,c=r+1,l=0,d=0;function f(ie){for(;l>=ie;)t[e++]=d&255,d>>=8,l-=8,e===i+256&&(t[i]=255,i=e++)}function h(ie){d|=ie<<l,l+=c,f(8)}var p=n[0]&s,C={};h(o);for(var b=1,m=n.length;b<m;++b){var Y=n[b]&s,q=p<<8|Y,pe=C[q];if(pe===void 0){for(d|=p<<l,l+=c;l>=8;)t[e++]=d&255,d>>=8,l-=8,e===i+256&&(t[i]=255,i=e++);u===4096?(h(o),u=a+1,c=r+1,C={}):(u>=1<<c&&++c,C[q]=u++),p=Y}else p=pe}return h(p),h(a),f(1),i+1===e?t[i]=0:(t[i]=e-i-1,t[e++]=0),e}function y5(t){var e=0;if(t[e++]!==71||t[e++]!==73||t[e++]!==70||t[e++]!==56||(t[e++]+1&253)!==56||t[e++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=t[e++]|t[e++]<<8,n=t[e++]|t[e++]<<8,i=t[e++],o=i>>7,s=i&7,a=1<<s+1,u=t[e++];t[e++];var c=null,l=null;o&&(c=e,l=a,e+=a*3);var d=!0,f=[],h=0,p=null,C=0,b=null;for(this.width=r,this.height=n;d&&e<t.length;)switch(t[e++]){case 33:switch(t[e++]){case 255:if(t[e]!==11||t[e+1]==78&&t[e+2]==69&&t[e+3]==84&&t[e+4]==83&&t[e+5]==67&&t[e+6]==65&&t[e+7]==80&&t[e+8]==69&&t[e+9]==50&&t[e+10]==46&&t[e+11]==48&&t[e+12]==3&&t[e+13]==1&&t[e+16]==0)e+=14,b=t[e++]|t[e++]<<8,e++;else for(e+=12;;){var m=t[e++];if(!(m>=0))throw Error("Invalid block size");if(m===0)break;e+=m}break;case 249:if(t[e++]!==4||t[e+4]!==0)throw new Error("Invalid graphics extension block.");var Y=t[e++];h=t[e++]|t[e++]<<8,p=t[e++],Y&1||(p=null),C=Y>>2&7,e++;break;case 254:for(;;){var m=t[e++];if(!(m>=0))throw Error("Invalid block size");if(m===0)break;e+=m}break;default:throw new Error("Unknown graphic control label: 0x"+t[e-1].toString(16))}break;case 44:var q=t[e++]|t[e++]<<8,pe=t[e++]|t[e++]<<8,ie=t[e++]|t[e++]<<8,v=t[e++]|t[e++]<<8,g=t[e++],_=g>>7,x=g>>6&1,H=g&7,Q=1<<H+1,S=c,P=l,be=!1;if(_){var be=!0;S=e,P=Q,e+=Q*3}var ze=e;for(e++;;){var m=t[e++];if(!(m>=0))throw Error("Invalid block size");if(m===0)break;e+=m}f.push({x:q,y:pe,width:ie,height:v,has_local_palette:be,palette_offset:S,palette_size:P,data_offset:ze,data_length:e-ze,transparent_index:p,interlaced:!!x,delay:h,disposal:C});break;case 59:d=!1;break;default:throw new Error("Unknown gif block: 0x"+t[e-1].toString(16))}this.numFrames=function(){return f.length},this.loopCount=function(){return b},this.frameInfo=function(ee){if(ee<0||ee>=f.length)throw new Error("Frame index out of range.");return f[ee]},this.decodeAndBlitFrameBGRA=function(ee,Fe){var G=this.frameInfo(ee),De=G.width*G.height,_e=new Uint8Array(De);l0(t,G.data_offset,_e,De);var $e=G.palette_offset,Me=G.transparent_index;Me===null&&(Me=256);var Ae=G.width,y=r-Ae,k=Ae,J=(G.y*r+G.x)*4,K=((G.y+G.height)*r+G.x)*4,X=J,Re=y*4;G.interlaced===!0&&(Re+=r*4*7);for(var ut=8,ct=0,Je=_e.length;ct<Je;++ct){var xe=_e[ct];if(k===0&&(X+=Re,k=Ae,X>=K&&(Re=y*4+r*4*(ut-1),X=J+(Ae+y)*(ut<<1),ut>>=1)),xe===Me)X+=4;else{var Rt=t[$e+xe*3],Ws=t[$e+xe*3+1],qs=t[$e+xe*3+2];Fe[X++]=qs,Fe[X++]=Ws,Fe[X++]=Rt,Fe[X++]=255}--k}},this.decodeAndBlitFrameRGBA=function(ee,Fe){var G=this.frameInfo(ee),De=G.width*G.height,_e=new Uint8Array(De);l0(t,G.data_offset,_e,De);var $e=G.palette_offset,Me=G.transparent_index;Me===null&&(Me=256);var Ae=G.width,y=r-Ae,k=Ae,J=(G.y*r+G.x)*4,K=((G.y+G.height)*r+G.x)*4,X=J,Re=y*4;G.interlaced===!0&&(Re+=r*4*7);for(var ut=8,ct=0,Je=_e.length;ct<Je;++ct){var xe=_e[ct];if(k===0&&(X+=Re,k=Ae,X>=K&&(Re=y*4+r*4*(ut-1),X=J+(Ae+y)*(ut<<1),ut>>=1)),xe===Me)X+=4;else{var Rt=t[$e+xe*3],Ws=t[$e+xe*3+1],qs=t[$e+xe*3+2];Fe[X++]=Rt,Fe[X++]=Ws,Fe[X++]=qs,Fe[X++]=255}--k}}}function l0(t,e,r,n){for(var i=t[e++],o=1<<i,s=o+1,a=s+1,u=i+1,c=(1<<u)-1,l=0,d=0,f=0,h=t[e++],p=new Int32Array(4096),C=null;;){for(;l<16&&h!==0;)d|=t[e++]<<l,l+=8,h===1?h=t[e++]:--h;if(l<u)break;var b=d&c;if(d>>=u,l-=u,b===o){a=s+1,u=i+1,c=(1<<u)-1,C=null;continue}else if(b===s)break;for(var m=b<a?b:C,Y=0,q=m;q>o;)q=p[q]>>8,++Y;var pe=q,ie=f+Y+(m!==b?1:0);if(ie>n){console.log("Warning, gif stream longer than expected.");return}r[f++]=pe,f+=Y;var v=f;for(m!==b&&(r[f++]=pe),q=m;Y--;)q=p[q],r[--v]=q&255,q>>=8;C!==null&&a<4096&&(p[a++]=C<<8|pe,a>=c+1&&u<12&&(++u,c=c<<1|1)),C=b}return f!==n&&console.log("Warning, gif stream shorter than expected."),r}try{jl.GifWriter=m5,jl.GifReader=y5}catch{}});var $l=null;var Zs=1;function Pe(t){let e=$l;return $l=t,e}var Ul={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function M0(t){if(!(Js(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Zs)){if(!t.producerMustRecompute(t)&&!Ys(t)){t.dirty=!1,t.lastCleanEpoch=Zs;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=Zs}}function Hl(t){return t&&(t.nextProducerIndex=0),Pe(t)}function Gl(t,e){if(Pe(e),!(!t||t.producerNode===void 0||t.producerIndexOfThis===void 0||t.producerLastReadVersion===void 0)){if(Js(t))for(let r=t.nextProducerIndex;r<t.producerNode.length;r++)Ks(t.producerNode[r],t.producerIndexOfThis[r]);for(;t.producerNode.length>t.nextProducerIndex;)t.producerNode.pop(),t.producerLastReadVersion.pop(),t.producerIndexOfThis.pop()}}function Ys(t){xi(t);for(let e=0;e<t.producerNode.length;e++){let r=t.producerNode[e],n=t.producerLastReadVersion[e];if(n!==r.version||(M0(r),n!==r.version))return!0}return!1}function zl(t){if(xi(t),Js(t))for(let e=0;e<t.producerNode.length;e++)Ks(t.producerNode[e],t.producerIndexOfThis[e]);t.producerNode.length=t.producerLastReadVersion.length=t.producerIndexOfThis.length=0,t.liveConsumerNode&&(t.liveConsumerNode.length=t.liveConsumerIndexOfThis.length=0)}function Ks(t,e){if(A0(t),xi(t),t.liveConsumerNode.length===1)for(let n=0;n<t.producerNode.length;n++)Ks(t.producerNode[n],t.producerIndexOfThis[n]);let r=t.liveConsumerNode.length-1;if(t.liveConsumerNode[e]=t.liveConsumerNode[r],t.liveConsumerIndexOfThis[e]=t.liveConsumerIndexOfThis[r],t.liveConsumerNode.length--,t.liveConsumerIndexOfThis.length--,e<t.liveConsumerNode.length){let n=t.liveConsumerIndexOfThis[e],i=t.liveConsumerNode[e];xi(i),i.producerIndexOfThis[n]=e}}function Js(t){return t.consumerIsAlwaysLive||(t?.liveConsumerNode?.length??0)>0}function xi(t){t.producerNode??=[],t.producerIndexOfThis??=[],t.producerLastReadVersion??=[]}function A0(t){t.liveConsumerNode??=[],t.liveConsumerIndexOfThis??=[]}function x0(){throw new Error}var S0=x0;function Wl(t){S0=t}function V(t){return typeof t=="function"}function Fn(t){let r=t(n=>{Error.call(n),n.stack=new Error().stack});return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var Si=Fn(t=>function(r){t(this),this.message=r?`${r.length} errors occurred during unsubscription:
${r.map((n,i)=>`${i+1}) ${n.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=r});function dn(t,e){if(t){let r=t.indexOf(e);0<=r&&t.splice(r,1)}}var me=class t{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:r}=this;if(r)if(this._parentage=null,Array.isArray(r))for(let o of r)o.remove(this);else r.remove(this);let{initialTeardown:n}=this;if(V(n))try{n()}catch(o){e=o instanceof Si?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{ql(o)}catch(s){e=e??[],s instanceof Si?e=[...e,...s.errors]:e.push(s)}}if(e)throw new Si(e)}}add(e){var r;if(e&&e!==this)if(this.closed)ql(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(r=this._finalizers)!==null&&r!==void 0?r:[]).push(e)}}_hasParent(e){let{_parentage:r}=this;return r===e||Array.isArray(r)&&r.includes(e)}_addParent(e){let{_parentage:r}=this;this._parentage=Array.isArray(r)?(r.push(e),r):r?[r,e]:e}_removeParent(e){let{_parentage:r}=this;r===e?this._parentage=null:Array.isArray(r)&&dn(r,e)}remove(e){let{_finalizers:r}=this;r&&dn(r,e),e instanceof t&&e._removeParent(this)}};me.EMPTY=(()=>{let t=new me;return t.closed=!0,t})();var Xs=me.EMPTY;function Ti(t){return t instanceof me||t&&"closed"in t&&V(t.remove)&&V(t.add)&&V(t.unsubscribe)}function ql(t){V(t)?t():t.unsubscribe()}var lt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Pn={setTimeout(t,e,...r){let{delegate:n}=Pn;return n?.setTimeout?n.setTimeout(t,e,...r):setTimeout(t,e,...r)},clearTimeout(t){let{delegate:e}=Pn;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Ni(t){Pn.setTimeout(()=>{let{onUnhandledError:e}=lt;if(e)e(t);else throw t})}function Mr(){}var Zl=(()=>ea("C",void 0,void 0))();function Yl(t){return ea("E",void 0,t)}function Kl(t){return ea("N",t,void 0)}function ea(t,e,r){return{kind:t,value:e,error:r}}var fn=null;function kn(t){if(lt.useDeprecatedSynchronousErrorHandling){let e=!fn;if(e&&(fn={errorThrown:!1,error:null}),t(),e){let{errorThrown:r,error:n}=fn;if(fn=null,r)throw n}}else t()}function Jl(t){lt.useDeprecatedSynchronousErrorHandling&&fn&&(fn.errorThrown=!0,fn.error=t)}var hn=class extends me{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Ti(e)&&e.add(this)):this.destination=O0}static create(e,r,n){return new Ft(e,r,n)}next(e){this.isStopped?na(Kl(e),this):this._next(e)}error(e){this.isStopped?na(Yl(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?na(Zl,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},T0=Function.prototype.bind;function ta(t,e){return T0.call(t,e)}var ra=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:r}=this;if(r.next)try{r.next(e)}catch(n){Oi(n)}}error(e){let{partialObserver:r}=this;if(r.error)try{r.error(e)}catch(n){Oi(n)}else Oi(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(r){Oi(r)}}},Ft=class extends hn{constructor(e,r,n){super();let i;if(V(e)||!e)i={next:e??void 0,error:r??void 0,complete:n??void 0};else{let o;this&&lt.useDeprecatedNextContext?(o=Object.create(e),o.unsubscribe=()=>this.unsubscribe(),i={next:e.next&&ta(e.next,o),error:e.error&&ta(e.error,o),complete:e.complete&&ta(e.complete,o)}):i=e}this.destination=new ra(i)}};function Oi(t){lt.useDeprecatedSynchronousErrorHandling?Jl(t):Ni(t)}function N0(t){throw t}function na(t,e){let{onStoppedNotification:r}=lt;r&&Pn.setTimeout(()=>r(t,e))}var O0={closed:!0,next:Mr,error:N0,complete:Mr};var Vn=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")();function We(t){return t}function ia(...t){return oa(t)}function oa(t){return t.length===0?We:t.length===1?t[0]:function(r){return t.reduce((n,i)=>i(n),r)}}var Z=(()=>{class t{constructor(r){r&&(this._subscribe=r)}lift(r){let n=new t;return n.source=this,n.operator=r,n}subscribe(r,n,i){let o=R0(r)?r:new Ft(r,n,i);return kn(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(r){try{return this._subscribe(r)}catch(n){r.error(n)}}forEach(r,n){return n=Xl(n),new n((i,o)=>{let s=new Ft({next:a=>{try{r(a)}catch(u){o(u),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(r){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(r)}[Vn](){return this}pipe(...r){return oa(r)(this)}toPromise(r){return r=Xl(r),new r((n,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>n(o))})}}return t.create=e=>new t(e),t})();function Xl(t){var e;return(e=t??lt.Promise)!==null&&e!==void 0?e:Promise}function L0(t){return t&&V(t.next)&&V(t.error)&&V(t.complete)}function R0(t){return t&&t instanceof hn||L0(t)&&Ti(t)}function sa(t){return V(t?.lift)}function z(t){return e=>{if(sa(e))return e.lift(function(r){try{return t(r,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function $(t,e,r,n,i){return new aa(t,e,r,n,i)}var aa=class extends hn{constructor(e,r,n,i,o,s){super(e),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=r?function(a){try{r(a)}catch(u){e.error(u)}}:super._next,this._error=i?function(a){try{i(a)}catch(u){e.error(u)}finally{this.unsubscribe()}}:super._error,this._complete=n?function(){try{n()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:r}=this;super.unsubscribe(),!r&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function jn(){return z((t,e)=>{let r=null;t._refCount++;let n=$(e,void 0,void 0,void 0,()=>{if(!t||t._refCount<=0||0<--t._refCount){r=null;return}let i=t._connection,o=r;r=null,i&&(!o||i===o)&&i.unsubscribe(),e.unsubscribe()});t.subscribe(n),n.closed||(r=t.connect())})}var Qn=class extends Z{constructor(e,r){super(),this.source=e,this.subjectFactory=r,this._subject=null,this._refCount=0,this._connection=null,sa(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new me;let r=this.getSubject();e.add(this.source.subscribe($(r,void 0,()=>{this._teardown(),r.complete()},n=>{this._teardown(),r.error(n)},()=>this._teardown()))),e.closed&&(this._connection=null,e=me.EMPTY)}return e}refCount(){return jn()(this)}};var Bn={schedule(t){let e=requestAnimationFrame,r=cancelAnimationFrame,{delegate:n}=Bn;n&&(e=n.requestAnimationFrame,r=n.cancelAnimationFrame);let i=e(o=>{r=void 0,t(o)});return new me(()=>r?.(i))},requestAnimationFrame(...t){let{delegate:e}=Bn;return(e?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:e}=Bn;return(e?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var ed=Fn(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Se=(()=>{class t extends Z{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(r){let n=new Li(this,this);return n.operator=r,n}_throwIfClosed(){if(this.closed)throw new ed}next(r){kn(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(r)}})}error(r){kn(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=r;let{observers:n}=this;for(;n.length;)n.shift().error(r)}})}complete(){kn(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:r}=this;for(;r.length;)r.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var r;return((r=this.observers)===null||r===void 0?void 0:r.length)>0}_trySubscribe(r){return this._throwIfClosed(),super._trySubscribe(r)}_subscribe(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)}_innerSubscribe(r){let{hasError:n,isStopped:i,observers:o}=this;return n||i?Xs:(this.currentObservers=null,o.push(r),new me(()=>{this.currentObservers=null,dn(o,r)}))}_checkFinalizedStatuses(r){let{hasError:n,thrownError:i,isStopped:o}=this;n?r.error(i):o&&r.complete()}asObservable(){let r=new Z;return r.source=this,r}}return t.create=(e,r)=>new Li(e,r),t})(),Li=class extends Se{constructor(e,r){super(),this.destination=e,this.source=r}next(e){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.next)===null||n===void 0||n.call(r,e)}error(e){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.error)===null||n===void 0||n.call(r,e)}complete(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)}_subscribe(e){var r,n;return(n=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&n!==void 0?n:Xs}};var Te=class extends Se{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let r=super._subscribe(e);return!r.closed&&e.next(this._value),r}getValue(){let{hasError:e,thrownError:r,_value:n}=this;if(e)throw r;return this._throwIfClosed(),n}next(e){super.next(this._value=e)}};var ua={now(){return(ua.delegate||Date).now()},delegate:void 0};var Ri=class extends me{constructor(e,r){super()}schedule(e,r=0){return this}};var Ar={setInterval(t,e,...r){let{delegate:n}=Ar;return n?.setInterval?n.setInterval(t,e,...r):setInterval(t,e,...r)},clearInterval(t){let{delegate:e}=Ar;return(e?.clearInterval||clearInterval)(t)},delegate:void 0};var Fi=class extends Ri{constructor(e,r){super(e,r),this.scheduler=e,this.work=r,this.pending=!1}schedule(e,r=0){var n;if(this.closed)return this;this.state=e;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,r)),this.pending=!0,this.delay=r,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(o,this.id,r),this}requestAsyncId(e,r,n=0){return Ar.setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,r,n=0){if(n!=null&&this.delay===n&&this.pending===!1)return r;r!=null&&Ar.clearInterval(r)}execute(e,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let n=this._execute(e,r);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,r){let n=!1,i;try{this.work(e)}catch(o){n=!0,i=o||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:e,scheduler:r}=this,{actions:n}=r;this.work=this.state=this.scheduler=null,this.pending=!1,dn(n,this),e!=null&&(this.id=this.recycleAsyncId(r,e,null)),this.delay=null,super.unsubscribe()}}};var $n=class t{constructor(e,r=t.now){this.schedulerActionCtor=e,this.now=r}schedule(e,r=0,n){return new this.schedulerActionCtor(this,e).schedule(n,r)}};$n.now=ua.now;var Pi=class extends $n{constructor(e,r=$n.now){super(e,r),this.actions=[],this._active=!1}flush(e){let{actions:r}=this;if(this._active){r.push(e);return}let n;this._active=!0;do if(n=e.execute(e.state,e.delay))break;while(e=r.shift());if(this._active=!1,n){for(;e=r.shift();)e.unsubscribe();throw n}}};var ki=class extends Fi{constructor(e,r){super(e,r),this.scheduler=e,this.work=r}requestAsyncId(e,r,n=0){return n!==null&&n>0?super.requestAsyncId(e,r,n):(e.actions.push(this),e._scheduled||(e._scheduled=Bn.requestAnimationFrame(()=>e.flush(void 0))))}recycleAsyncId(e,r,n=0){var i;if(n!=null?n>0:this.delay>0)return super.recycleAsyncId(e,r,n);let{actions:o}=e;r!=null&&((i=o[o.length-1])===null||i===void 0?void 0:i.id)!==r&&(Bn.cancelAnimationFrame(r),e._scheduled=void 0)}};var Vi=class extends Pi{flush(e){this._active=!0;let r=this._scheduled;this._scheduled=void 0;let{actions:n}=this,i;e=e||n.shift();do if(i=e.execute(e.state,e.delay))break;while((e=n[0])&&e.id===r&&n.shift());if(this._active=!1,i){for(;(e=n[0])&&e.id===r&&n.shift();)e.unsubscribe();throw i}}};var xr=new Vi(ki);var Ne=new Z(t=>t.complete());function td(t){return t&&V(t.schedule)}function ca(t){return t[t.length-1]}function Un(t){return V(ca(t))?t.pop():void 0}function Ct(t){return td(ca(t))?t.pop():void 0}function nd(t,e){return typeof ca(t)=="number"?t.pop():e}function id(t,e,r,n){function i(o){return o instanceof r?o:new r(function(s){s(o)})}return new(r||(r=Promise))(function(o,s){function a(l){try{c(n.next(l))}catch(d){s(d)}}function u(l){try{c(n.throw(l))}catch(d){s(d)}}function c(l){l.done?o(l.value):i(l.value).then(a,u)}c((n=n.apply(t,e||[])).next())})}function rd(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function pn(t){return this instanceof pn?(this.v=t,this):new pn(t)}function od(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(t,e||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(f){n[f]&&(i[f]=function(h){return new Promise(function(p,C){o.push([f,h,p,C])>1||a(f,h)})})}function a(f,h){try{u(n[f](h))}catch(p){d(o[0][3],p)}}function u(f){f.value instanceof pn?Promise.resolve(f.value.v).then(c,l):d(o[0][2],f)}function c(f){a("next",f)}function l(f){a("throw",f)}function d(f,h){f(h),o.shift(),o.length&&a(o[0][0],o[0][1])}}function sd(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],r;return e?e.call(t):(t=typeof rd=="function"?rd(t):t[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(o){r[o]=t[o]&&function(s){return new Promise(function(a,u){s=t[o](s),i(a,u,s.done,s.value)})}}function i(o,s,a,u){Promise.resolve(u).then(function(c){o({value:c,done:a})},s)}}var ji=t=>t&&typeof t.length=="number"&&typeof t!="function";function Qi(t){return V(t?.then)}function Bi(t){return V(t[Vn])}function $i(t){return Symbol.asyncIterator&&V(t?.[Symbol.asyncIterator])}function Ui(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function F0(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Hi=F0();function Gi(t){return V(t?.[Hi])}function zi(t){return od(this,arguments,function*(){let r=t.getReader();try{for(;;){let{value:n,done:i}=yield pn(r.read());if(i)return yield pn(void 0);yield yield pn(n)}}finally{r.releaseLock()}})}function Wi(t){return V(t?.getReader)}function ae(t){if(t instanceof Z)return t;if(t!=null){if(Bi(t))return P0(t);if(ji(t))return k0(t);if(Qi(t))return V0(t);if($i(t))return ad(t);if(Gi(t))return j0(t);if(Wi(t))return Q0(t)}throw Ui(t)}function P0(t){return new Z(e=>{let r=t[Vn]();if(V(r.subscribe))return r.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function k0(t){return new Z(e=>{for(let r=0;r<t.length&&!e.closed;r++)e.next(t[r]);e.complete()})}function V0(t){return new Z(e=>{t.then(r=>{e.closed||(e.next(r),e.complete())},r=>e.error(r)).then(null,Ni)})}function j0(t){return new Z(e=>{for(let r of t)if(e.next(r),e.closed)return;e.complete()})}function ad(t){return new Z(e=>{B0(t,e).catch(r=>e.error(r))})}function Q0(t){return ad(zi(t))}function B0(t,e){var r,n,i,o;return id(this,void 0,void 0,function*(){try{for(r=sd(t);n=yield r.next(),!n.done;){let s=n.value;if(e.next(s),e.closed)return}}catch(s){i={error:s}}finally{try{n&&!n.done&&(o=r.return)&&(yield o.call(r))}finally{if(i)throw i.error}}e.complete()})}function Ke(t,e,r,n=0,i=!1){let o=e.schedule(function(){r(),i?t.add(this.schedule(null,n)):this.unsubscribe()},n);if(t.add(o),!i)return o}function qi(t,e=0){return z((r,n)=>{r.subscribe($(n,i=>Ke(n,t,()=>n.next(i),e),()=>Ke(n,t,()=>n.complete(),e),i=>Ke(n,t,()=>n.error(i),e)))})}function Zi(t,e=0){return z((r,n)=>{n.add(t.schedule(()=>r.subscribe(n),e))})}function ud(t,e){return ae(t).pipe(Zi(e),qi(e))}function cd(t,e){return ae(t).pipe(Zi(e),qi(e))}function ld(t,e){return new Z(r=>{let n=0;return e.schedule(function(){n===t.length?r.complete():(r.next(t[n++]),r.closed||this.schedule())})})}function dd(t,e){return new Z(r=>{let n;return Ke(r,e,()=>{n=t[Hi](),Ke(r,e,()=>{let i,o;try{({value:i,done:o}=n.next())}catch(s){r.error(s);return}o?r.complete():r.next(i)},0,!0)}),()=>V(n?.return)&&n.return()})}function Yi(t,e){if(!t)throw new Error("Iterable cannot be null");return new Z(r=>{Ke(r,e,()=>{let n=t[Symbol.asyncIterator]();Ke(r,e,()=>{n.next().then(i=>{i.done?r.complete():r.next(i.value)})},0,!0)})})}function fd(t,e){return Yi(zi(t),e)}function hd(t,e){if(t!=null){if(Bi(t))return ud(t,e);if(ji(t))return ld(t,e);if(Qi(t))return cd(t,e);if($i(t))return Yi(t,e);if(Gi(t))return dd(t,e);if(Wi(t))return fd(t,e)}throw Ui(t)}function oe(t,e){return e?hd(t,e):ae(t)}function R(...t){let e=Ct(t);return oe(t,e)}function et(t,e){let r=V(t)?t:()=>t,n=i=>i.error(r());return new Z(e?i=>e.schedule(n,0,i):n)}function la(t){return!!t&&(t instanceof Z||V(t.lift)&&V(t.subscribe))}var Pt=Fn(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function T(t,e){return z((r,n)=>{let i=0;r.subscribe($(n,o=>{n.next(t.call(e,o,i++))}))})}var{isArray:$0}=Array;function U0(t,e){return $0(e)?t(...e):t(e)}function Ki(t){return T(e=>U0(t,e))}var{isArray:H0}=Array,{getPrototypeOf:G0,prototype:z0,keys:W0}=Object;function Ji(t){if(t.length===1){let e=t[0];if(H0(e))return{args:e,keys:null};if(q0(e)){let r=W0(e);return{args:r.map(n=>e[n]),keys:r}}}return{args:t,keys:null}}function q0(t){return t&&typeof t=="object"&&G0(t)===z0}function Xi(t,e){return t.reduce((r,n,i)=>(r[n]=e[i],r),{})}function eo(...t){let e=Ct(t),r=Un(t),{args:n,keys:i}=Ji(t);if(n.length===0)return oe([],e);let o=new Z(Z0(n,e,i?s=>Xi(i,s):We));return r?o.pipe(Ki(r)):o}function Z0(t,e,r=We){return n=>{pd(e,()=>{let{length:i}=t,o=new Array(i),s=i,a=i;for(let u=0;u<i;u++)pd(e,()=>{let c=oe(t[u],e),l=!1;c.subscribe($(n,d=>{o[u]=d,l||(l=!0,a--),a||n.next(r(o.slice()))},()=>{--s||n.complete()}))},n)},n)}}function pd(t,e,r){t?Ke(r,t,e):e()}function gd(t,e,r,n,i,o,s,a){let u=[],c=0,l=0,d=!1,f=()=>{d&&!u.length&&!c&&e.complete()},h=C=>c<n?p(C):u.push(C),p=C=>{o&&e.next(C),c++;let b=!1;ae(r(C,l++)).subscribe($(e,m=>{i?.(m),o?h(m):e.next(m)},()=>{b=!0},void 0,()=>{if(b)try{for(c--;u.length&&c<n;){let m=u.shift();s?Ke(e,s,()=>p(m)):p(m)}f()}catch(m){e.error(m)}}))};return t.subscribe($(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Oe(t,e,r=1/0){return V(e)?Oe((n,i)=>T((o,s)=>e(n,o,i,s))(ae(t(n,i))),r):(typeof e=="number"&&(r=e),z((n,i)=>gd(n,i,t,r)))}function Sr(t=1/0){return Oe(We,t)}function md(){return Sr(1)}function Hn(...t){return md()(oe(t,Ct(t)))}function to(t){return new Z(e=>{ae(t()).subscribe(e)})}function da(...t){let e=Un(t),{args:r,keys:n}=Ji(t),i=new Z(o=>{let{length:s}=r;if(!s){o.complete();return}let a=new Array(s),u=s,c=s;for(let l=0;l<s;l++){let d=!1;ae(r[l]).subscribe($(o,f=>{d||(d=!0,c--),a[l]=f},()=>u--,void 0,()=>{(!u||!d)&&(c||o.next(n?Xi(n,a):a),o.complete())}))}});return e?i.pipe(Ki(e)):i}function fa(...t){let e=Ct(t),r=nd(t,1/0),n=t;return n.length?n.length===1?ae(n[0]):Sr(r)(oe(n,e)):Ne}var{isArray:Y0}=Array;function vd(t){return t.length===1&&Y0(t[0])?t[0]:t}function Ue(t,e){return z((r,n)=>{let i=0;r.subscribe($(n,o=>t.call(e,o,i++)&&n.next(o)))})}function ha(...t){let e=Un(t),r=vd(t);return r.length?new Z(n=>{let i=r.map(()=>[]),o=r.map(()=>!1);n.add(()=>{i=o=null});for(let s=0;!n.closed&&s<r.length;s++)ae(r[s]).subscribe($(n,a=>{if(i[s].push(a),i.every(u=>u.length)){let u=i.map(c=>c.shift());n.next(e?e(...u):u),i.some((c,l)=>!c.length&&o[l])&&n.complete()}},()=>{o[s]=!0,!i[s].length&&n.complete()}));return()=>{i=o=null}}):Ne}function dt(t){return z((e,r)=>{let n=null,i=!1,o;n=e.subscribe($(r,void 0,void 0,s=>{o=ae(t(s,dt(t)(e))),n?(n.unsubscribe(),n=null,o.subscribe(r)):i=!0})),i&&(n.unsubscribe(),n=null,o.subscribe(r))})}function yd(t,e,r,n,i){return(o,s)=>{let a=r,u=e,c=0;o.subscribe($(s,l=>{let d=c++;u=a?t(u,l,d):(a=!0,l),n&&s.next(u)},i&&(()=>{a&&s.next(u),s.complete()})))}}function Gn(t,e){return V(e)?Oe(t,e,1):Oe(t,1)}function Yt(t){return z((e,r)=>{let n=!1;e.subscribe($(r,i=>{n=!0,r.next(i)},()=>{n||r.next(t),r.complete()}))})}function tt(t){return t<=0?()=>Ne:z((e,r)=>{let n=0;e.subscribe($(r,i=>{++n<=t&&(r.next(i),t<=n&&r.complete())}))})}function pa(t){return T(()=>t)}function ga(t,e=We){return t=t??K0,z((r,n)=>{let i,o=!0;r.subscribe($(n,s=>{let a=e(s);(o||!t(i,a))&&(o=!1,i=a,n.next(s))}))})}function K0(t,e){return t===e}function no(t=J0){return z((e,r)=>{let n=!1;e.subscribe($(r,i=>{n=!0,r.next(i)},()=>n?r.complete():r.error(t())))})}function J0(){return new Pt}function Tr(t){return z((e,r)=>{try{e.subscribe(r)}finally{r.add(t)}})}function Dt(t,e){let r=arguments.length>=2;return n=>n.pipe(t?Ue((i,o)=>t(i,o,n)):We,tt(1),r?Yt(e):no(()=>new Pt))}function zn(t){return t<=0?()=>Ne:z((e,r)=>{let n=[];e.subscribe($(r,i=>{n.push(i),t<n.length&&n.shift()},()=>{for(let i of n)r.next(i);r.complete()},void 0,()=>{n=null}))})}function ma(t,e){let r=arguments.length>=2;return n=>n.pipe(t?Ue((i,o)=>t(i,o,n)):We,zn(1),r?Yt(e):no(()=>new Pt))}function va(t,e){return z(yd(t,e,arguments.length>=2,!0))}function ro(t={}){let{connector:e=()=>new Se,resetOnError:r=!0,resetOnComplete:n=!0,resetOnRefCountZero:i=!0}=t;return o=>{let s,a,u,c=0,l=!1,d=!1,f=()=>{a?.unsubscribe(),a=void 0},h=()=>{f(),s=u=void 0,l=d=!1},p=()=>{let C=s;h(),C?.unsubscribe()};return z((C,b)=>{c++,!d&&!l&&f();let m=u=u??e();b.add(()=>{c--,c===0&&!d&&!l&&(a=ya(p,i))}),m.subscribe(b),!s&&c>0&&(s=new Ft({next:Y=>m.next(Y),error:Y=>{d=!0,f(),a=ya(h,r,Y),m.error(Y)},complete:()=>{l=!0,f(),a=ya(h,n),m.complete()}}),ae(C).subscribe(s))})(o)}}function ya(t,e,...r){if(e===!0){t();return}if(e===!1)return;let n=new Ft({next:()=>{n.unsubscribe(),t()}});return ae(e(...r)).subscribe(n)}function Ca(...t){let e=Ct(t);return z((r,n)=>{(e?Hn(t,r,e):Hn(t,r)).subscribe(n)})}function ke(t,e){return z((r,n)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&n.complete();r.subscribe($(n,u=>{i?.unsubscribe();let c=0,l=o++;ae(t(u,l)).subscribe(i=$(n,d=>n.next(e?e(u,d,l,c++):d),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function Da(t){return z((e,r)=>{ae(t).subscribe($(r,()=>r.complete(),Mr)),!r.closed&&e.subscribe(r)})}function le(t,e,r){let n=V(t)||e||r?{next:t,error:e,complete:r}:t;return n?z((i,o)=>{var s;(s=n.subscribe)===null||s===void 0||s.call(n);let a=!0;i.subscribe($(o,u=>{var c;(c=n.next)===null||c===void 0||c.call(n,u),o.next(u)},()=>{var u;a=!1,(u=n.complete)===null||u===void 0||u.call(n),o.complete()},u=>{var c;a=!1,(c=n.error)===null||c===void 0||c.call(n,u),o.error(u)},()=>{var u,c;a&&((u=n.unsubscribe)===null||u===void 0||u.call(n)),(c=n.finalize)===null||c===void 0||c.call(n)}))}):We}function ue(t){for(let e in t)if(t[e]===ue)return e;throw Error("Could not find renamed property on target object.")}function io(t,e){for(let r in e)e.hasOwnProperty(r)&&!t.hasOwnProperty(r)&&(t[r]=e[r])}function Ze(t){if(typeof t=="string")return t;if(Array.isArray(t))return"["+t.map(Ze).join(", ")+"]";if(t==null)return""+t;if(t.overriddenName)return`${t.overriddenName}`;if(t.name)return`${t.name}`;let e=t.toString();if(e==null)return""+e;let r=e.indexOf(`
`);return r===-1?e:e.substring(0,r)}function Cd(t,e){return t==null||t===""?e===null?"":e:e==null||e===""?t:t+" "+e}var X0=ue({__forward_ref__:ue});function xt(t){return t.__forward_ref__=xt,t.toString=function(){return Ze(this())},t}function qe(t){return of(t)?t():t}function of(t){return typeof t=="function"&&t.hasOwnProperty(X0)&&t.__forward_ref__===xt}function sf(t){return t&&!!t.\u0275providers}var af="https://g.co/ng/security#xss",E=class extends Error{constructor(e,r){super(Vu(e,r)),this.code=e}};function Vu(t,e){return`${`NG0${Math.abs(t)}`}${e?": "+e:""}`}var em=ue({\u0275cmp:ue}),tm=ue({\u0275dir:ue}),nm=ue({\u0275pipe:ue}),rm=ue({\u0275mod:ue}),vo=ue({\u0275fac:ue}),Nr=ue({__NG_ELEMENT_ID__:ue}),Dd=ue({__NG_ENV_ID__:ue});function uf(t){return typeof t=="string"?t:t==null?"":String(t)}function im(t){return typeof t=="function"?t.name||t.toString():typeof t=="object"&&t!=null&&typeof t.type=="function"?t.type.name||t.type.toString():uf(t)}function om(t,e){let r=e?`. Dependency path: ${e.join(" > ")} > ${t}`:"";throw new E(-200,`Circular dependency in DI detected for ${t}${r}`)}function ju(t,e){let r=e?` in ${e}`:"";throw new E(-201,!1)}function sm(t,e){t==null&&am(e,t,null,"!=")}function am(t,e,r,n){throw new Error(`ASSERTION ERROR: ${t}`+(n==null?"":` [Expected=> ${r} ${n} ${e} <=Actual]`))}function M(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function Qt(t){return{providers:t.providers||[],imports:t.imports||[]}}function Po(t){return wd(t,lf)||wd(t,df)}function cf(t){return Po(t)!==null}function wd(t,e){return t.hasOwnProperty(e)?t[e]:null}function um(t){let e=t&&(t[lf]||t[df]);return e||null}function bd(t){return t&&(t.hasOwnProperty(Ed)||t.hasOwnProperty(cm))?t[Ed]:null}var lf=ue({\u0275prov:ue}),Ed=ue({\u0275inj:ue}),df=ue({ngInjectableDef:ue}),cm=ue({ngInjectorDef:ue}),W=function(t){return t[t.Default=0]="Default",t[t.Host=1]="Host",t[t.Self=2]="Self",t[t.SkipSelf=4]="SkipSelf",t[t.Optional=8]="Optional",t}(W||{}),ka;function lm(){return ka}function wt(t){let e=ka;return ka=t,e}function ff(t,e,r){let n=Po(t);if(n&&n.providedIn=="root")return n.value===void 0?n.value=n.factory():n.value;if(r&W.Optional)return null;if(e!==void 0)return e;ju(Ze(t),"Injector")}var gn=globalThis;var F=class{constructor(e,r){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof r=="number"?this.__NG_ELEMENT_ID__=r:r!==void 0&&(this.\u0275prov=M({token:this,providedIn:r.providedIn||"root",factory:r.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};var dm={},Rr=dm,Va="__NG_DI_FLAG__",yo="ngTempTokenPath",fm="ngTokenPath",hm=/\n/gm,pm="\u0275",Id="__source",Or;function Wn(t){let e=Or;return Or=t,e}function gm(t,e=W.Default){if(Or===void 0)throw new E(-203,!1);return Or===null?ff(t,void 0,e):Or.get(t,e&W.Optional?null:void 0,e)}function N(t,e=W.Default){return(lm()||gm)(qe(t),e)}function w(t,e=W.Default){return N(t,ko(e))}function ko(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function ja(t){let e=[];for(let r=0;r<t.length;r++){let n=qe(t[r]);if(Array.isArray(n)){if(n.length===0)throw new E(900,!1);let i,o=W.Default;for(let s=0;s<n.length;s++){let a=n[s],u=mm(a);typeof u=="number"?u===-1?i=a.token:o|=u:i=a}e.push(N(i,o))}else e.push(N(n))}return e}function hf(t,e){return t[Va]=e,t.prototype[Va]=e,t}function mm(t){return t[Va]}function vm(t,e,r,n){let i=t[yo];throw e[Id]&&i.unshift(e[Id]),t.message=ym(`
`+t.message,i,r,n),t[fm]=i,t[yo]=null,t}function ym(t,e,r,n=null){t=t&&t.charAt(0)===`
`&&t.charAt(1)==pm?t.slice(2):t;let i=Ze(e);if(Array.isArray(e))i=e.map(Ze).join(" -> ");else if(typeof e=="object"){let o=[];for(let s in e)if(e.hasOwnProperty(s)){let a=e[s];o.push(s+":"+(typeof a=="string"?JSON.stringify(a):Ze(a)))}i=`{${o.join(", ")}}`}return`${r}${n?"("+n+")":""}[${i}]: ${t.replace(hm,`
  `)}`}function Wr(t){return{toString:t}.toString()}var pf=function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t}(pf||{}),_t=function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t}(_t||{}),Jn={},nt=[];function gf(t,e,r){let n=t.length;for(;;){let i=t.indexOf(e,r);if(i===-1)return i;if(i===0||t.charCodeAt(i-1)<=32){let o=e.length;if(i+o===n||t.charCodeAt(i+o)<=32)return i}r=i+1}}function Qa(t,e,r){let n=0;for(;n<r.length;){let i=r[n];if(typeof i=="number"){if(i!==0)break;n++;let o=r[n++],s=r[n++],a=r[n++];t.setAttribute(e,s,a,o)}else{let o=i,s=r[++n];Dm(o)?t.setProperty(e,o,s):t.setAttribute(e,o,s),n++}}return n}function Cm(t){return t===3||t===4||t===6}function Dm(t){return t.charCodeAt(0)===64}function Fr(t,e){if(!(e===null||e.length===0))if(t===null||t.length===0)t=e.slice();else{let r=-1;for(let n=0;n<e.length;n++){let i=e[n];typeof i=="number"?r=i:r===0||(r===-1||r===2?_d(t,r,i,null,e[++n]):_d(t,r,i,null,null))}}return t}function _d(t,e,r,n,i){let o=0,s=t.length;if(e===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===e){s=-1;break}else if(a>e){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===r){if(n===null){i!==null&&(t[o+1]=i);return}else if(n===t[o+1]){t[o+2]=i;return}}o++,n!==null&&o++,i!==null&&o++}s!==-1&&(t.splice(s,0,e),o=s+1),t.splice(o++,0,r),n!==null&&t.splice(o++,0,n),i!==null&&t.splice(o++,0,i)}var mf="ng-template";function wm(t,e,r){let n=0,i=!0;for(;n<t.length;){let o=t[n++];if(typeof o=="string"&&i){let s=t[n++];if(r&&o==="class"&&gf(s.toLowerCase(),e,0)!==-1)return!0}else if(o===1){for(;n<t.length&&typeof(o=t[n++])=="string";)if(o.toLowerCase()===e)return!0;return!1}else typeof o=="number"&&(i=!1)}return!1}function vf(t){return t.type===4&&t.value!==mf}function bm(t,e,r){let n=t.type===4&&!r?mf:t.value;return e===n}function Em(t,e,r){let n=4,i=t.attrs||[],o=Mm(i),s=!1;for(let a=0;a<e.length;a++){let u=e[a];if(typeof u=="number"){if(!s&&!ft(n)&&!ft(u))return!1;if(s&&ft(u))continue;s=!1,n=u|n&1;continue}if(!s)if(n&4){if(n=2|n&1,u!==""&&!bm(t,u,r)||u===""&&e.length===1){if(ft(n))return!1;s=!0}}else{let c=n&8?u:e[++a];if(n&8&&t.attrs!==null){if(!wm(t.attrs,c,r)){if(ft(n))return!1;s=!0}continue}let l=n&8?"class":u,d=Im(l,i,vf(t),r);if(d===-1){if(ft(n))return!1;s=!0;continue}if(c!==""){let f;d>o?f="":f=i[d+1].toLowerCase();let h=n&8?f:null;if(h&&gf(h,c,0)!==-1||n&2&&c!==f){if(ft(n))return!1;s=!0}}}}return ft(n)||s}function ft(t){return(t&1)===0}function Im(t,e,r,n){if(e===null)return-1;let i=0;if(n||!r){let o=!1;for(;i<e.length;){let s=e[i];if(s===t)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=e[++i];for(;typeof a=="string";)a=e[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return Am(e,t)}function _m(t,e,r=!1){for(let n=0;n<e.length;n++)if(Em(t,e[n],r))return!0;return!1}function Mm(t){for(let e=0;e<t.length;e++){let r=t[e];if(Cm(r))return e}return t.length}function Am(t,e){let r=t.indexOf(4);if(r>-1)for(r++;r<t.length;){let n=t[r];if(typeof n=="number")return-1;if(n===e)return r;r++}return-1}function Md(t,e){return t?":not("+e.trim()+")":e}function xm(t){let e=t[0],r=1,n=2,i="",o=!1;for(;r<t.length;){let s=t[r];if(typeof s=="string")if(n&2){let a=t[++r];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else n&8?i+="."+s:n&4&&(i+=" "+s);else i!==""&&!ft(s)&&(e+=Md(o,i),i=""),n=s,o=o||!ft(n);r++}return i!==""&&(e+=Md(o,i)),e}function Sm(t){return t.map(xm).join(",")}function Tm(t){let e=[],r=[],n=1,i=2;for(;n<t.length;){let o=t[n];if(typeof o=="string")i===2?o!==""&&e.push(o,t[++n]):i===8&&r.push(o);else{if(!ft(i))break;i=o}n++}return{attrs:e,classes:r}}function ve(t){return Wr(()=>{let e=bf(t),r=se(D({},e),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===pf.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&t.dependencies||null,getStandaloneInjector:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||_t.Emulated,styles:t.styles||nt,_:null,schemas:t.schemas||null,tView:null,id:""});Ef(r);let n=t.dependencies;return r.directiveDefs=xd(n,!1),r.pipeDefs=xd(n,!0),r.id=Lm(r),r})}function Nm(t){return vn(t)||yf(t)}function Om(t){return t!==null}function Bt(t){return Wr(()=>({type:t.type,bootstrap:t.bootstrap||nt,declarations:t.declarations||nt,imports:t.imports||nt,exports:t.exports||nt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function Ad(t,e){if(t==null)return Jn;let r={};for(let n in t)if(t.hasOwnProperty(n)){let i=t[n],o=i;Array.isArray(i)&&(o=i[1],i=i[0]),r[i]=n,e&&(e[i]=o)}return r}function ye(t){return Wr(()=>{let e=bf(t);return Ef(e),e})}function vn(t){return t[em]||null}function yf(t){return t[tm]||null}function Cf(t){return t[nm]||null}function Df(t){let e=vn(t)||yf(t)||Cf(t);return e!==null?e.standalone:!1}function wf(t,e){let r=t[rm]||null;if(!r&&e===!0)throw new Error(`Type ${Ze(t)} does not have '\u0275mod' property.`);return r}function bf(t){let e={};return{type:t.type,providersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:t.inputs||Jn,exportAs:t.exportAs||null,standalone:t.standalone===!0,signals:t.signals===!0,selectors:t.selectors||nt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:Ad(t.inputs,e),outputs:Ad(t.outputs),debugInfo:null}}function Ef(t){t.features?.forEach(e=>e(t))}function xd(t,e){if(!t)return null;let r=e?Cf:Nm;return()=>(typeof t=="function"?t():t).map(n=>r(n)).filter(Om)}function Lm(t){let e=0,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,t.consts,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery].join("|");for(let i of r)e=Math.imul(31,e)+i.charCodeAt(0)<<0;return e+=2147483647+1,"c"+e}var $t=0,j=1,O=2,Ie=3,ht=4,vt=5,Co=6,Pr=7,Ve=8,Xn=9,kr=10,je=11,Vr=12,Sd=13,or=14,pt=15,qr=16,qn=17,It=18,Vo=19,If=20,Lr=21,wa=22,yn=23,Ye=25,_f=1;var Cn=7,Do=8,er=9,He=10,tr=function(t){return t[t.None=0]="None",t[t.HasTransplantedViews=2]="HasTransplantedViews",t[t.HasChildViewsToRefresh=4]="HasChildViewsToRefresh",t}(tr||{});function Kt(t){return Array.isArray(t)&&typeof t[_f]=="object"}function gt(t){return Array.isArray(t)&&t[_f]===!0}function Mf(t){return(t.flags&4)!==0}function jo(t){return t.componentOffset>-1}function Qu(t){return(t.flags&1)===1}function Jt(t){return!!t.template}function Rm(t){return(t[O]&512)!==0}function nr(t,e){let r=t.hasOwnProperty(vo);return r?t[vo]:null}var Ba=class{constructor(e,r,n){this.previousValue=e,this.currentValue=r,this.firstChange=n}isFirstChange(){return this.firstChange}};function Ut(){return Af}function Af(t){return t.type.prototype.ngOnChanges&&(t.setInput=Pm),Fm}Ut.ngInherit=!0;function Fm(){let t=Sf(this),e=t?.current;if(e){let r=t.previous;if(r===Jn)t.previous=e;else for(let n in e)r[n]=e[n];t.current=null,this.ngOnChanges(e)}}function Pm(t,e,r,n){let i=this.declaredInputs[r],o=Sf(t)||km(t,{previous:Jn,current:null}),s=o.current||(o.current={}),a=o.previous,u=a[i];s[i]=new Ba(u&&u.currentValue,e,a===Jn),t[n]=e}var xf="__ngSimpleChanges__";function Sf(t){return t[xf]||null}function km(t,e){return t[xf]=e}var Td=null;var bt=function(t,e,r){Td?.(t,e,r)},Tf="svg",Vm="math";function Mt(t){for(;Array.isArray(t);)t=t[$t];return t}function Nf(t,e){return Mt(e[t])}function yt(t,e){return Mt(e[t.index])}function Bu(t,e){return t.data[e]}function jm(t,e){return t[e]}function en(t,e){let r=e[t];return Kt(r)?r:r[$t]}function Qm(t){return(t[O]&4)===4}function $u(t){return(t[O]&128)===128}function Bm(t){return gt(t[Ie])}function wo(t,e){return e==null?null:t[e]}function Of(t){t[qn]=0}function $m(t){t[O]&1024||(t[O]|=1024,$u(t)&&Qo(t))}function Um(t,e){for(;t>0;)e=e[or],t--;return e}function Lf(t){t[O]&9216&&Qo(t)}function Qo(t){let e=t[Ie];for(;e!==null&&!(gt(e)&&e[O]&tr.HasChildViewsToRefresh||Kt(e)&&e[O]&8192);){if(gt(e))e[O]|=tr.HasChildViewsToRefresh;else if(e[O]|=8192,!$u(e))break;e=e[Ie]}}function Hm(t,e){if((t[O]&256)===256)throw new E(911,!1);t[Lr]===null&&(t[Lr]=[]),t[Lr].push(e)}var U={lFrame:Qf(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function Gm(){return U.lFrame.elementDepthCount}function zm(){U.lFrame.elementDepthCount++}function Wm(){U.lFrame.elementDepthCount--}function Rf(){return U.bindingsEnabled}function qm(){return U.skipHydrationRootTNode!==null}function Zm(t){return U.skipHydrationRootTNode===t}function Ym(){U.skipHydrationRootTNode=null}function te(){return U.lFrame.lView}function it(){return U.lFrame.tView}function St(t){return U.lFrame.contextLView=t,t[Ve]}function Tt(t){return U.lFrame.contextLView=null,t}function ot(){let t=Ff();for(;t!==null&&t.type===64;)t=t.parent;return t}function Ff(){return U.lFrame.currentTNode}function Km(){let t=U.lFrame,e=t.currentTNode;return t.isParent?e:e.parent}function Zr(t,e){let r=U.lFrame;r.currentTNode=t,r.isParent=e}function Pf(){return U.lFrame.isParent}function Jm(){U.lFrame.isParent=!1}function Xm(){return U.lFrame.contextLView}function Bo(){let t=U.lFrame,e=t.bindingRootIndex;return e===-1&&(e=t.bindingRootIndex=t.tView.bindingStartIndex),e}function e1(t){return U.lFrame.bindingIndex=t}function $o(){return U.lFrame.bindingIndex++}function t1(t){let e=U.lFrame,r=e.bindingIndex;return e.bindingIndex=e.bindingIndex+t,r}function n1(){return U.lFrame.inI18n}function r1(t,e){let r=U.lFrame;r.bindingIndex=r.bindingRootIndex=t,$a(e)}function i1(){return U.lFrame.currentDirectiveIndex}function $a(t){U.lFrame.currentDirectiveIndex=t}function o1(t){let e=U.lFrame.currentDirectiveIndex;return e===-1?null:t[e]}function kf(){return U.lFrame.currentQueryIndex}function Uu(t){U.lFrame.currentQueryIndex=t}function s1(t){let e=t[j];return e.type===2?e.declTNode:e.type===1?t[vt]:null}function Vf(t,e,r){if(r&W.SkipSelf){let i=e,o=t;for(;i=i.parent,i===null&&!(r&W.Host);)if(i=s1(o),i===null||(o=o[or],i.type&10))break;if(i===null)return!1;e=i,t=o}let n=U.lFrame=jf();return n.currentTNode=e,n.lView=t,!0}function Hu(t){let e=jf(),r=t[j];U.lFrame=e,e.currentTNode=r.firstChild,e.lView=t,e.tView=r,e.contextLView=t,e.bindingIndex=r.bindingStartIndex,e.inI18n=!1}function jf(){let t=U.lFrame,e=t===null?null:t.child;return e===null?Qf(t):e}function Qf(t){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=e),e}function Bf(){let t=U.lFrame;return U.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var $f=Bf;function Gu(){let t=Bf();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function a1(t){return(U.lFrame.contextLView=Um(t,U.lFrame.contextLView))[Ve]}function sr(){return U.lFrame.selectedIndex}function Dn(t){U.lFrame.selectedIndex=t}function u1(){let t=U.lFrame;return Bu(t.tView,t.selectedIndex)}function ar(){U.lFrame.currentNamespace=Tf}function c1(){return U.lFrame.currentNamespace}var Uf=!0;function zu(){return Uf}function Wu(t){Uf=t}function l1(t,e,r){let{ngOnChanges:n,ngOnInit:i,ngDoCheck:o}=e.type.prototype;if(n){let s=Af(e);(r.preOrderHooks??=[]).push(t,s),(r.preOrderCheckHooks??=[]).push(t,s)}i&&(r.preOrderHooks??=[]).push(0-t,i),o&&((r.preOrderHooks??=[]).push(t,o),(r.preOrderCheckHooks??=[]).push(t,o))}function qu(t,e){for(let r=e.directiveStart,n=e.directiveEnd;r<n;r++){let o=t.data[r].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:u,ngAfterViewChecked:c,ngOnDestroy:l}=o;s&&(t.contentHooks??=[]).push(-r,s),a&&((t.contentHooks??=[]).push(r,a),(t.contentCheckHooks??=[]).push(r,a)),u&&(t.viewHooks??=[]).push(-r,u),c&&((t.viewHooks??=[]).push(r,c),(t.viewCheckHooks??=[]).push(r,c)),l!=null&&(t.destroyHooks??=[]).push(r,l)}}function lo(t,e,r){Hf(t,e,3,r)}function fo(t,e,r,n){(t[O]&3)===r&&Hf(t,e,r,n)}function ba(t,e){let r=t[O];(r&3)===e&&(r&=16383,r+=1,t[O]=r)}function Hf(t,e,r,n){let i=n!==void 0?t[qn]&65535:0,o=n??-1,s=e.length-1,a=0;for(let u=i;u<s;u++)if(typeof e[u+1]=="number"){if(a=e[u],n!=null&&a>=n)break}else e[u]<0&&(t[qn]+=65536),(a<o||o==-1)&&(d1(t,r,e,u),t[qn]=(t[qn]&4294901760)+u+2),u++}function Nd(t,e){bt(4,t,e);let r=Pe(null);try{e.call(t)}finally{Pe(r),bt(5,t,e)}}function d1(t,e,r,n){let i=r[n]<0,o=r[n+1],s=i?-r[n]:r[n],a=t[s];i?t[O]>>14<t[qn]>>16&&(t[O]&3)===e&&(t[O]+=16384,Nd(a,o)):Nd(a,o)}var Kn=-1,wn=class{constructor(e,r,n){this.factory=e,this.resolving=!1,this.canSeeViewProviders=r,this.injectImpl=n}};function f1(t){return t instanceof wn}function h1(t){return(t.flags&8)!==0}function p1(t){return(t.flags&16)!==0}function Gf(t){return t!==Kn}function bo(t){let e=t&32767;return t&32767}function g1(t){return t>>16}function Eo(t,e){let r=g1(t),n=e;for(;r>0;)n=n[or],r--;return n}var Ua=!0;function Od(t){let e=Ua;return Ua=t,e}var m1=256,zf=m1-1,Wf=5,v1=0,Et={};function y1(t,e,r){let n;typeof r=="string"?n=r.charCodeAt(0)||0:r.hasOwnProperty(Nr)&&(n=r[Nr]),n==null&&(n=r[Nr]=v1++);let i=n&zf,o=1<<i;e.data[t+(i>>Wf)]|=o}function Io(t,e){let r=qf(t,e);if(r!==-1)return r;let n=e[j];n.firstCreatePass&&(t.injectorIndex=e.length,Ea(n.data,t),Ea(e,null),Ea(n.blueprint,null));let i=Zu(t,e),o=t.injectorIndex;if(Gf(i)){let s=bo(i),a=Eo(i,e),u=a[j].data;for(let c=0;c<8;c++)e[o+c]=a[s+c]|u[s+c]}return e[o+8]=i,o}function Ea(t,e){t.push(0,0,0,0,0,0,0,0,e)}function qf(t,e){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||e[t.injectorIndex+8]===null?-1:t.injectorIndex}function Zu(t,e){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let r=0,n=null,i=e;for(;i!==null;){if(n=Xf(i),n===null)return Kn;if(r++,i=i[or],n.injectorIndex!==-1)return n.injectorIndex|r<<16}return Kn}function Ha(t,e,r){y1(t,e,r)}function Zf(t,e,r){if(r&W.Optional||t!==void 0)return t;ju(e,"NodeInjector")}function Yf(t,e,r,n){if(r&W.Optional&&n===void 0&&(n=null),!(r&(W.Self|W.Host))){let i=t[Xn],o=wt(void 0);try{return i?i.get(e,n,r&W.Optional):ff(e,n,r&W.Optional)}finally{wt(o)}}return Zf(n,e,r)}function Kf(t,e,r,n=W.Default,i){if(t!==null){if(e[O]&2048&&!(n&W.Self)){let s=b1(t,e,r,n,Et);if(s!==Et)return s}let o=Jf(t,e,r,n,Et);if(o!==Et)return o}return Yf(e,r,n,i)}function Jf(t,e,r,n,i){let o=D1(r);if(typeof o=="function"){if(!Vf(e,t,n))return n&W.Host?Zf(i,r,n):Yf(e,r,n,i);try{let s;if(s=o(n),s==null&&!(n&W.Optional))ju(r);else return s}finally{$f()}}else if(typeof o=="number"){let s=null,a=qf(t,e),u=Kn,c=n&W.Host?e[pt][vt]:null;for((a===-1||n&W.SkipSelf)&&(u=a===-1?Zu(t,e):e[a+8],u===Kn||!Rd(n,!1)?a=-1:(s=e[j],a=bo(u),e=Eo(u,e)));a!==-1;){let l=e[j];if(Ld(o,a,l.data)){let d=C1(a,e,r,s,n,c);if(d!==Et)return d}u=e[a+8],u!==Kn&&Rd(n,e[j].data[a+8]===c)&&Ld(o,a,e)?(s=l,a=bo(u),e=Eo(u,e)):a=-1}}return i}function C1(t,e,r,n,i,o){let s=e[j],a=s.data[t+8],u=n==null?jo(a)&&Ua:n!=s&&(a.type&3)!==0,c=i&W.Host&&o===a,l=ho(a,s,r,u,c);return l!==null?bn(e,s,l,a):Et}function ho(t,e,r,n,i){let o=t.providerIndexes,s=e.data,a=o&1048575,u=t.directiveStart,c=t.directiveEnd,l=o>>20,d=n?a:a+l,f=i?a+l:c;for(let h=d;h<f;h++){let p=s[h];if(h<u&&r===p||h>=u&&p.type===r)return h}if(i){let h=s[u];if(h&&Jt(h)&&h.type===r)return u}return null}function bn(t,e,r,n){let i=t[r],o=e.data;if(f1(i)){let s=i;s.resolving&&om(im(o[r]));let a=Od(s.canSeeViewProviders);s.resolving=!0;let u,c=s.injectImpl?wt(s.injectImpl):null,l=Vf(t,n,W.Default);try{i=t[r]=s.factory(void 0,o,t,n),e.firstCreatePass&&r>=n.directiveStart&&l1(r,o[r],e)}finally{c!==null&&wt(c),Od(a),s.resolving=!1,$f()}}return i}function D1(t){if(typeof t=="string")return t.charCodeAt(0)||0;let e=t.hasOwnProperty(Nr)?t[Nr]:void 0;return typeof e=="number"?e>=0?e&zf:w1:e}function Ld(t,e,r){let n=1<<t;return!!(r[e+(t>>Wf)]&n)}function Rd(t,e){return!(t&W.Self)&&!(t&W.Host&&e)}var mn=class{constructor(e,r){this._tNode=e,this._lView=r}get(e,r,n){return Kf(this._tNode,this._lView,e,ko(n),r)}};function w1(){return new mn(ot(),te())}function Ht(t){return Wr(()=>{let e=t.prototype.constructor,r=e[vo]||Ga(e),n=Object.prototype,i=Object.getPrototypeOf(t.prototype).constructor;for(;i&&i!==n;){let o=i[vo]||Ga(i);if(o&&o!==r)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function Ga(t){return of(t)?()=>{let e=Ga(qe(t));return e&&e()}:nr(t)}function b1(t,e,r,n,i){let o=t,s=e;for(;o!==null&&s!==null&&s[O]&2048&&!(s[O]&512);){let a=Jf(o,s,r,n|W.Self,Et);if(a!==Et)return a;let u=o.parent;if(!u){let c=s[If];if(c){let l=c.get(r,Et,n);if(l!==Et)return l}u=Xf(s),s=s[or]}o=u}return i}function Xf(t){let e=t[j],r=e.type;return r===2?e.declTNode:r===1?t[vt]:null}var oo="__parameters__";function E1(t){return function(...r){if(t){let n=t(...r);for(let i in n)this[i]=n[i]}}}function eh(t,e,r){return Wr(()=>{let n=E1(e);function i(...o){if(this instanceof i)return n.apply(this,o),this;let s=new i(...o);return a.annotation=s,a;function a(u,c,l){let d=u.hasOwnProperty(oo)?u[oo]:Object.defineProperty(u,oo,{value:[]})[oo];for(;d.length<=l;)d.push(null);return(d[l]=d[l]||[]).push(s),u}}return r&&(i.prototype=Object.create(r.prototype)),i.prototype.ngMetadataName=t,i.annotationCls=i,i})}function I1(t){return typeof t=="function"}function _1(t,e,r){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++){let i=t[n],o=e[n];if(r&&(i=r(i),o=r(o)),o!==i)return!1}return!0}function M1(t){return t.flat(Number.POSITIVE_INFINITY)}function Yu(t,e){t.forEach(r=>Array.isArray(r)?Yu(r,e):e(r))}function th(t,e,r){e>=t.length?t.push(r):t.splice(e,0,r)}function _o(t,e){return e>=t.length-1?t.pop():t.splice(e,1)[0]}function A1(t,e){let r=[];for(let n=0;n<t;n++)r.push(e);return r}function x1(t,e,r,n){let i=t.length;if(i==e)t.push(r,n);else if(i===1)t.push(n,t[0]),t[0]=r;else{for(i--,t.push(t[i-1],t[i]);i>e;){let o=i-2;t[i]=t[o],i--}t[e]=r,t[e+1]=n}}function S1(t,e,r){let n=Yr(t,e);return n>=0?t[n|1]=r:(n=~n,x1(t,n,e,r)),n}function Ia(t,e){let r=Yr(t,e);if(r>=0)return t[r|1]}function Yr(t,e){return T1(t,e,1)}function T1(t,e,r){let n=0,i=t.length>>r;for(;i!==n;){let o=n+(i-n>>1),s=t[o<<r];if(e===s)return o<<r;s>e?i=o:n=o+1}return~(i<<r)}var Ku=hf(eh("Optional"),8);var nh=hf(eh("SkipSelf"),4);var Kr=new F("ENVIRONMENT_INITIALIZER"),rh=new F("INJECTOR",-1),ih=new F("INJECTOR_DEF_TYPES"),Mo=class{get(e,r=Rr){if(r===Rr){let n=new Error(`NullInjectorError: No provider for ${Ze(e)}!`);throw n.name="NullInjectorError",n}return r}};function Uo(t){return{\u0275providers:t}}function N1(...t){return{\u0275providers:oh(!0,t),\u0275fromNgModule:!0}}function oh(t,...e){let r=[],n=new Set,i,o=s=>{r.push(s)};return Yu(e,s=>{let a=s;za(a,o,[],n)&&(i||=[],i.push(a))}),i!==void 0&&sh(i,o),r}function sh(t,e){for(let r=0;r<t.length;r++){let{ngModule:n,providers:i}=t[r];Ju(i,o=>{e(o,n)})}}function za(t,e,r,n){if(t=qe(t),!t)return!1;let i=null,o=bd(t),s=!o&&vn(t);if(!o&&!s){let u=t.ngModule;if(o=bd(u),o)i=u;else return!1}else{if(s&&!s.standalone)return!1;i=t}let a=n.has(i);if(s){if(a)return!1;if(n.add(i),s.dependencies){let u=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of u)za(c,e,r,n)}}else if(o){if(o.imports!=null&&!a){n.add(i);let c;try{Yu(o.imports,l=>{za(l,e,r,n)&&(c||=[],c.push(l))})}finally{}c!==void 0&&sh(c,e)}if(!a){let c=nr(i)||(()=>new i);e({provide:i,useFactory:c,deps:nt},i),e({provide:ih,useValue:i,multi:!0},i),e({provide:Kr,useValue:()=>N(i),multi:!0},i)}let u=o.providers;if(u!=null&&!a){let c=t;Ju(u,l=>{e(l,c)})}}else return!1;return i!==t&&t.providers!==void 0}function Ju(t,e){for(let r of t)sf(r)&&(r=r.\u0275providers),Array.isArray(r)?Ju(r,e):e(r)}var O1=ue({provide:String,useValue:ue});function ah(t){return t!==null&&typeof t=="object"&&O1 in t}function L1(t){return!!(t&&t.useExisting)}function R1(t){return!!(t&&t.useFactory)}function rr(t){return typeof t=="function"}function F1(t){return!!t.useClass}var Ho=new F("Set Injector scope."),po={},P1={},_a;function Xu(){return _a===void 0&&(_a=new Mo),_a}var rt=class{},Ao=class extends rt{get destroyed(){return this._destroyed}constructor(e,r,n,i){super(),this.parent=r,this.source=n,this.scopes=i,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,qa(e,s=>this.processProvider(s)),this.records.set(rh,Zn(void 0,this)),i.has("environment")&&this.records.set(rt,Zn(void 0,this));let o=this.records.get(Ho);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(ih,nt,W.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of e)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear()}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let r=Wn(this),n=wt(void 0),i;try{return e()}finally{Wn(r),wt(n)}}get(e,r=Rr,n=W.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(Dd))return e[Dd](this);n=ko(n);let i,o=Wn(this),s=wt(void 0);try{if(!(n&W.SkipSelf)){let u=this.records.get(e);if(u===void 0){let c=B1(e)&&Po(e);c&&this.injectableDefInScope(c)?u=Zn(Wa(e),po):u=null,this.records.set(e,u)}if(u!=null)return this.hydrate(e,u)}let a=n&W.Self?Xu():this.parent;return r=n&W.Optional&&r===Rr?null:r,a.get(e,r)}catch(a){if(a.name==="NullInjectorError"){if((a[yo]=a[yo]||[]).unshift(Ze(e)),o)throw a;return vm(a,e,"R3InjectorError",this.source)}else throw a}finally{wt(s),Wn(o)}}resolveInjectorInitializers(){let e=Wn(this),r=wt(void 0),n;try{let i=this.get(Kr,nt,W.Self);for(let o of i)o()}finally{Wn(e),wt(r)}}toString(){let e=[],r=this.records;for(let n of r.keys())e.push(Ze(n));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new E(205,!1)}processProvider(e){e=qe(e);let r=rr(e)?e:qe(e&&e.provide),n=V1(e);if(!rr(e)&&e.multi===!0){let i=this.records.get(r);i||(i=Zn(void 0,po,!0),i.factory=()=>ja(i.multi),this.records.set(r,i)),r=e,i.multi.push(e)}else{let i=this.records.get(r)}this.records.set(r,n)}hydrate(e,r){return r.value===po&&(r.value=P1,r.value=r.factory()),typeof r.value=="object"&&r.value&&Q1(r.value)&&this._ngOnDestroyHooks.add(r.value),r.value}injectableDefInScope(e){if(!e.providedIn)return!1;let r=qe(e.providedIn);return typeof r=="string"?r==="any"||this.scopes.has(r):this.injectorDefTypes.has(r)}removeOnDestroy(e){let r=this._onDestroyHooks.indexOf(e);r!==-1&&this._onDestroyHooks.splice(r,1)}};function Wa(t){let e=Po(t),r=e!==null?e.factory:nr(t);if(r!==null)return r;if(t instanceof F)throw new E(204,!1);if(t instanceof Function)return k1(t);throw new E(204,!1)}function k1(t){let e=t.length;if(e>0){let n=A1(e,"?");throw new E(204,!1)}let r=um(t);return r!==null?()=>r.factory(t):()=>new t}function V1(t){if(ah(t))return Zn(void 0,t.useValue);{let e=uh(t);return Zn(e,po)}}function uh(t,e,r){let n;if(rr(t)){let i=qe(t);return nr(i)||Wa(i)}else if(ah(t))n=()=>qe(t.useValue);else if(R1(t))n=()=>t.useFactory(...ja(t.deps||[]));else if(L1(t))n=()=>N(qe(t.useExisting));else{let i=qe(t&&(t.useClass||t.provide));if(j1(t))n=()=>new i(...ja(t.deps));else return nr(i)||Wa(i)}return n}function Zn(t,e,r=!1){return{factory:t,value:e,multi:r?[]:void 0}}function j1(t){return!!t.deps}function Q1(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function B1(t){return typeof t=="function"||typeof t=="object"&&t instanceof F}function qa(t,e){for(let r of t)Array.isArray(r)?qa(r,e):r&&sf(r)?qa(r.\u0275providers,e):e(r)}function Fd(t,e=null,r=null,n){let i=ch(t,e,r,n);return i.resolveInjectorInitializers(),i}function ch(t,e=null,r=null,n,i=new Set){let o=[r||nt,N1(t)];return n=n||(typeof t=="object"?void 0:Ze(t)),new Ao(o,e||Xu(),n||null,i)}var tn=(()=>{let e=class e{static create(n,i){if(Array.isArray(n))return Fd({name:""},i,n,"");{let o=n.name??"";return Fd({name:o},n.parent,n.providers,o)}}};e.THROW_IF_NOT_FOUND=Rr,e.NULL=new Mo,e.\u0275prov=M({token:e,providedIn:"any",factory:()=>N(rh)}),e.__NG_ELEMENT_ID__=-1;let t=e;return t})();var Za;function lh(t){Za=t}function $1(){if(Za!==void 0)return Za;if(typeof document<"u")return document;throw new E(210,!1)}var ec=new F("AppId",{providedIn:"root",factory:()=>U1}),U1="ng",tc=new F("Platform Initializer"),Gt=new F("Platform ID",{providedIn:"platform",factory:()=>"unknown"});var nc=new F("CSP nonce",{providedIn:"root",factory:()=>$1().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function dh(t){return t instanceof Function?t():t}function fh(t){return(t.flags&128)===128}var At=function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t}(At||{});var hh=new Map,H1=0;function G1(){return H1++}function z1(t){hh.set(t[Vo],t)}function W1(t){hh.delete(t[Vo])}var Pd="__ngContext__";function En(t,e){Kt(e)?(t[Pd]=e[Vo],z1(e)):t[Pd]=e}var q1;function rc(t,e){return q1(t,e)}function ic(t){let e=t[Ie];return gt(e)?e[Ie]:e}function ph(t){return mh(t[Vr])}function gh(t){return mh(t[ht])}function mh(t){for(;t!==null&&!gt(t);)t=t[ht];return t}function Yn(t,e,r,n,i){if(n!=null){let o,s=!1;gt(n)?o=n:Kt(n)&&(s=!0,n=n[$t]);let a=Mt(n);t===0&&r!==null?i==null?Ch(e,r,a):xo(e,r,a,i||null,!0):t===1&&r!==null?xo(e,r,a,i||null,!0):t===2?f2(e,a,s):t===3&&e.destroyNode(a),o!=null&&p2(e,t,o,r,i)}}function Z1(t,e){return t.createText(e)}function Y1(t,e,r){t.setValue(e,r)}function vh(t,e,r){return t.createElement(e,r)}function K1(t,e){let r=e[je];Jr(t,e,r,2,null,null),e[$t]=null,e[vt]=null}function J1(t,e,r,n,i,o){n[$t]=i,n[vt]=e,Jr(t,n,r,1,i,o)}function X1(t,e){Jr(t,e,e[je],2,null,null)}function e2(t){let e=t[Vr];if(!e)return Ma(t[j],t);for(;e;){let r=null;if(Kt(e))r=e[Vr];else{let n=e[He];n&&(r=n)}if(!r){for(;e&&!e[ht]&&e!==t;)Kt(e)&&Ma(e[j],e),e=e[Ie];e===null&&(e=t),Kt(e)&&Ma(e[j],e),r=e&&e[ht]}e=r}}function t2(t,e,r,n){let i=He+n,o=r.length;n>0&&(r[i-1][ht]=e),n<o-He?(e[ht]=r[i],th(r,He+n,e)):(r.push(e),e[ht]=null),e[Ie]=r;let s=e[qr];s!==null&&r!==s&&n2(s,e);let a=e[It];a!==null&&a.insertView(t),Lf(e),e[O]|=128}function n2(t,e){let r=t[er],i=e[Ie][Ie][pt];e[pt]!==i&&(t[O]|=tr.HasTransplantedViews),r===null?t[er]=[e]:r.push(e)}function yh(t,e){let r=t[er],n=r.indexOf(e),i=e[Ie];r.splice(n,1)}function jr(t,e){if(t.length<=He)return;let r=He+e,n=t[r];if(n){let i=n[qr];i!==null&&i!==t&&yh(i,n),e>0&&(t[r-1][ht]=n[ht]);let o=_o(t,He+e);K1(n[j],n);let s=o[It];s!==null&&s.detachView(o[j]),n[Ie]=null,n[ht]=null,n[O]&=-129}return n}function Go(t,e){if(!(e[O]&256)){let r=e[je];e[yn]&&zl(e[yn]),r.destroyNode&&Jr(t,e,r,3,null,null),e2(e)}}function Ma(t,e){if(!(e[O]&256)){e[O]&=-129,e[O]|=256,i2(t,e),r2(t,e),e[j].type===1&&e[je].destroy();let r=e[qr];if(r!==null&&gt(e[Ie])){r!==e[Ie]&&yh(r,e);let n=e[It];n!==null&&n.detachView(t)}W1(e)}}function r2(t,e){let r=t.cleanup,n=e[Pr];if(r!==null)for(let o=0;o<r.length-1;o+=2)if(typeof r[o]=="string"){let s=r[o+3];s>=0?n[s]():n[-s].unsubscribe(),o+=2}else{let s=n[r[o+1]];r[o].call(s)}n!==null&&(e[Pr]=null);let i=e[Lr];if(i!==null){e[Lr]=null;for(let o=0;o<i.length;o++){let s=i[o];s()}}}function i2(t,e){let r;if(t!=null&&(r=t.destroyHooks)!=null)for(let n=0;n<r.length;n+=2){let i=e[r[n]];if(!(i instanceof wn)){let o=r[n+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],u=o[s+1];bt(4,a,u);try{u.call(a)}finally{bt(5,a,u)}}else{bt(4,i,o);try{o.call(i)}finally{bt(5,i,o)}}}}}function o2(t,e,r){return s2(t,e.parent,r)}function s2(t,e,r){let n=e;for(;n!==null&&n.type&40;)e=n,n=e.parent;if(n===null)return r[$t];{let{componentOffset:i}=n;if(i>-1){let{encapsulation:o}=t.data[n.directiveStart+i];if(o===_t.None||o===_t.Emulated)return null}return yt(n,r)}}function xo(t,e,r,n,i){t.insertBefore(e,r,n,i)}function Ch(t,e,r){t.appendChild(e,r)}function kd(t,e,r,n,i){n!==null?xo(t,e,r,n,i):Ch(t,e,r)}function a2(t,e,r,n){t.removeChild(e,r,n)}function oc(t,e){return t.parentNode(e)}function u2(t,e){return t.nextSibling(e)}function c2(t,e,r){return d2(t,e,r)}function l2(t,e,r){return t.type&40?yt(t,r):null}var d2=l2,Vd;function sc(t,e,r,n){let i=o2(t,n,e),o=e[je],s=n.parent||e[vt],a=c2(s,n,e);if(i!=null)if(Array.isArray(r))for(let u=0;u<r.length;u++)kd(o,i,r[u],a,!1);else kd(o,i,r,a,!1);Vd!==void 0&&Vd(o,n,e,r,i)}function go(t,e){if(e!==null){let r=e.type;if(r&3)return yt(e,t);if(r&4)return Ya(-1,t[e.index]);if(r&8){let n=e.child;if(n!==null)return go(t,n);{let i=t[e.index];return gt(i)?Ya(-1,i):Mt(i)}}else{if(r&32)return rc(e,t)()||Mt(t[e.index]);{let n=Dh(t,e);if(n!==null){if(Array.isArray(n))return n[0];let i=ic(t[pt]);return go(i,n)}else return go(t,e.next)}}}return null}function Dh(t,e){if(e!==null){let n=t[pt][vt],i=e.projection;return n.projection[i]}return null}function Ya(t,e){let r=He+t+1;if(r<e.length){let n=e[r],i=n[j].firstChild;if(i!==null)return go(n,i)}return e[Cn]}function f2(t,e,r){let n=oc(t,e);n&&a2(t,n,e,r)}function ac(t,e,r,n,i,o,s){for(;r!=null;){let a=n[r.index],u=r.type;if(s&&e===0&&(a&&En(Mt(a),n),r.flags|=2),(r.flags&32)!==32)if(u&8)ac(t,e,r.child,n,i,o,!1),Yn(e,t,i,a,o);else if(u&32){let c=rc(r,n),l;for(;l=c();)Yn(e,t,i,l,o);Yn(e,t,i,a,o)}else u&16?h2(t,e,n,r,i,o):Yn(e,t,i,a,o);r=s?r.projectionNext:r.next}}function Jr(t,e,r,n,i,o){ac(r,n,t.firstChild,e,i,o,!1)}function h2(t,e,r,n,i,o){let s=r[pt],u=s[vt].projection[n.projection];if(Array.isArray(u))for(let c=0;c<u.length;c++){let l=u[c];Yn(e,t,i,l,o)}else{let c=u,l=s[Ie];fh(n)&&(c.flags|=128),ac(t,e,c,l,i,o,!0)}}function p2(t,e,r,n,i){let o=r[Cn],s=Mt(r);o!==s&&Yn(e,t,n,o,i);for(let a=He;a<r.length;a++){let u=r[a];Jr(u[j],u,t,e,n,o)}}function g2(t,e,r,n,i){if(e)i?t.addClass(r,n):t.removeClass(r,n);else{let o=n.indexOf("-")===-1?void 0:At.DashCase;i==null?t.removeStyle(r,n,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=At.Important),t.setStyle(r,n,i,o))}}function m2(t,e,r){t.setAttribute(e,"style",r)}function wh(t,e,r){r===""?t.removeAttribute(e,"class"):t.setAttribute(e,"class",r)}function bh(t,e,r){let{mergedAttrs:n,classes:i,styles:o}=r;n!==null&&Qa(t,e,n),i!==null&&wh(t,e,i),o!==null&&m2(t,e,o)}var so;function v2(){if(so===void 0&&(so=null,gn.trustedTypes))try{so=gn.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return so}function zo(t){return v2()?.createHTML(t)||t}var kt=class{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${af})`}},Ka=class extends kt{getTypeName(){return"HTML"}},Ja=class extends kt{getTypeName(){return"Style"}},Xa=class extends kt{getTypeName(){return"Script"}},eu=class extends kt{getTypeName(){return"URL"}},tu=class extends kt{getTypeName(){return"ResourceURL"}};function nn(t){return t instanceof kt?t.changingThisBreaksApplicationSecurity:t}function ur(t,e){let r=y2(t);if(r!=null&&r!==e){if(r==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${r} (see ${af})`)}return r===e}function y2(t){return t instanceof kt&&t.getTypeName()||null}function Eh(t){return new Ka(t)}function Ih(t){return new Ja(t)}function _h(t){return new Xa(t)}function Mh(t){return new eu(t)}function Ah(t){return new tu(t)}function C2(t){let e=new ru(t);return D2()?new nu(e):e}var nu=class{constructor(e){this.inertDocumentHelper=e}getInertBodyElement(e){e="<body><remove></remove>"+e;try{let r=new window.DOMParser().parseFromString(zo(e),"text/html").body;return r===null?this.inertDocumentHelper.getInertBodyElement(e):(r.removeChild(r.firstChild),r)}catch{return null}}},ru=class{constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(e){let r=this.inertDocument.createElement("template");return r.innerHTML=zo(e),r}};function D2(){try{return!!new window.DOMParser().parseFromString(zo(""),"text/html")}catch{return!1}}var w2=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function uc(t){return t=String(t),t.match(w2)?t:"unsafe:"+t}function zt(t){let e={};for(let r of t.split(","))e[r]=!0;return e}function Xr(...t){let e={};for(let r of t)for(let n in r)r.hasOwnProperty(n)&&(e[n]=!0);return e}var xh=zt("area,br,col,hr,img,wbr"),Sh=zt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Th=zt("rp,rt"),b2=Xr(Th,Sh),E2=Xr(Sh,zt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),I2=Xr(Th,zt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),jd=Xr(xh,E2,I2,b2),Nh=zt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),_2=zt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),M2=zt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),A2=Xr(Nh,_2,M2),x2=zt("script,style,template"),iu=class{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let r=e.firstChild,n=!0;for(;r;){if(r.nodeType===Node.ELEMENT_NODE?n=this.startElement(r):r.nodeType===Node.TEXT_NODE?this.chars(r.nodeValue):this.sanitizedSomething=!0,n&&r.firstChild){r=r.firstChild;continue}for(;r;){r.nodeType===Node.ELEMENT_NODE&&this.endElement(r);let i=this.checkClobberedElement(r,r.nextSibling);if(i){r=i;break}r=this.checkClobberedElement(r,r.parentNode)}}return this.buf.join("")}startElement(e){let r=e.nodeName.toLowerCase();if(!jd.hasOwnProperty(r))return this.sanitizedSomething=!0,!x2.hasOwnProperty(r);this.buf.push("<"),this.buf.push(r);let n=e.attributes;for(let i=0;i<n.length;i++){let o=n.item(i),s=o.name,a=s.toLowerCase();if(!A2.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let u=o.value;Nh[a]&&(u=uc(u)),this.buf.push(" ",s,'="',Qd(u),'"')}return this.buf.push(">"),!0}endElement(e){let r=e.nodeName.toLowerCase();jd.hasOwnProperty(r)&&!xh.hasOwnProperty(r)&&(this.buf.push("</"),this.buf.push(r),this.buf.push(">"))}chars(e){this.buf.push(Qd(e))}checkClobberedElement(e,r){if(r&&(e.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);return r}},S2=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,T2=/([^\#-~ |!])/g;function Qd(t){return t.replace(/&/g,"&amp;").replace(S2,function(e){let r=e.charCodeAt(0),n=e.charCodeAt(1);return"&#"+((r-55296)*1024+(n-56320)+65536)+";"}).replace(T2,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var ao;function Oh(t,e){let r=null;try{ao=ao||C2(t);let n=e?String(e):"";r=ao.getInertBodyElement(n);let i=5,o=n;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,n=o,o=r.innerHTML,r=ao.getInertBodyElement(n)}while(n!==o);let a=new iu().sanitizeChildren(Bd(r)||r);return zo(a)}finally{if(r){let n=Bd(r)||r;for(;n.firstChild;)n.removeChild(n.firstChild)}}}function Bd(t){return"content"in t&&N2(t)?t.content:null}function N2(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}var Nt=function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t}(Nt||{});var O2="h",L2="b";var R2=(t,e,r)=>null;function cc(t,e,r=!1){return R2(t,e,r)}var ou=class{},So=class{};function F2(t){let e=Error(`No component factory found for ${Ze(t)}.`);return e[P2]=t,e}var P2="ngComponent";var su=class{resolveComponentFactory(e){throw F2(e)}},Wo=(()=>{let e=class e{};e.NULL=new su;let t=e;return t})();function k2(){return cr(ot(),te())}function cr(t,e){return new Qe(yt(t,e))}var Qe=(()=>{let e=class e{constructor(n){this.nativeElement=n}};e.__NG_ELEMENT_ID__=k2;let t=e;return t})();function V2(t){return t instanceof Qe?t.nativeElement:t}var Qr=class{},Wt=(()=>{let e=class e{constructor(){this.destroyNode=null}};e.__NG_ELEMENT_ID__=()=>j2();let t=e;return t})();function j2(){let t=te(),e=ot(),r=en(e.index,t);return(Kt(r)?r:t)[je]}var Q2=(()=>{let e=class e{};e.\u0275prov=M({token:e,providedIn:"root",factory:()=>null});let t=e;return t})(),In=class{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}},B2=new In("17.0.3"),Aa={};function Lh(t){return t!==null&&(typeof t=="function"||typeof t=="object")}var au=class{constructor(){}supports(e){return e instanceof Map||Lh(e)}create(){return new uu}},uu=class{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(e){let r;for(r=this._mapHead;r!==null;r=r._next)e(r)}forEachPreviousItem(e){let r;for(r=this._previousMapHead;r!==null;r=r._nextPrevious)e(r)}forEachChangedItem(e){let r;for(r=this._changesHead;r!==null;r=r._nextChanged)e(r)}forEachAddedItem(e){let r;for(r=this._additionsHead;r!==null;r=r._nextAdded)e(r)}forEachRemovedItem(e){let r;for(r=this._removalsHead;r!==null;r=r._nextRemoved)e(r)}diff(e){if(!e)e=new Map;else if(!(e instanceof Map||Lh(e)))throw new E(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let r=this._mapHead;if(this._appendAfter=null,this._forEach(e,(n,i)=>{if(r&&r.key===i)this._maybeAddToChanges(r,n),this._appendAfter=r,r=r._next;else{let o=this._getOrCreateRecordForKey(i,n);r=this._insertBeforeOrAppend(r,o)}}),r){r._prev&&(r._prev._next=null),this._removalsHead=r;for(let n=r;n!==null;n=n._nextRemoved)n===this._mapHead&&(this._mapHead=null),this._records.delete(n.key),n._nextRemoved=n._next,n.previousValue=n.currentValue,n.currentValue=null,n._prev=null,n._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,r){if(e){let n=e._prev;return r._next=e,r._prev=n,e._prev=r,n&&(n._next=r),e===this._mapHead&&(this._mapHead=r),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=r,r._prev=this._appendAfter):this._mapHead=r,this._appendAfter=r,null}_getOrCreateRecordForKey(e,r){if(this._records.has(e)){let i=this._records.get(e);this._maybeAddToChanges(i,r);let o=i._prev,s=i._next;return o&&(o._next=s),s&&(s._prev=o),i._next=null,i._prev=null,i}let n=new cu(e);return this._records.set(e,n),n.currentValue=r,this._addToAdditions(n),n}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;e!==null;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;e!=null;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,r){Object.is(r,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=r,this._addToChanges(e))}_addToAdditions(e){this._additionsHead===null?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){this._changesHead===null?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,r){e instanceof Map?e.forEach(r):Object.keys(e).forEach(n=>r(e[n],n))}},cu=class{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}};function $d(){return new lc([new au])}var lc=(()=>{let e=class e{constructor(n){this.factories=n}static create(n,i){if(i){let o=i.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:i=>e.create(n,i||$d()),deps:[[e,new nh,new Ku]]}}find(n){let i=this.factories.find(o=>o.supports(n));if(i)return i;throw new E(901,!1)}};e.\u0275prov=M({token:e,providedIn:"root",factory:$d});let t=e;return t})();function To(t,e,r,n,i=!1){for(;r!==null;){let o=e[r.index];o!==null&&n.push(Mt(o)),gt(o)&&$2(o,n);let s=r.type;if(s&8)To(t,e,r.child,n);else if(s&32){let a=rc(r,e),u;for(;u=a();)n.push(u)}else if(s&16){let a=Dh(e,r);if(Array.isArray(a))n.push(...a);else{let u=ic(e[pt]);To(u[j],u,a,n,!0)}}r=i?r.projectionNext:r.next}return n}function $2(t,e){for(let r=He;r<t.length;r++){let n=t[r],i=n[j].firstChild;i!==null&&To(n[j],n,i,e)}t[Cn]!==t[$t]&&e.push(t[Cn])}var Rh=[];function U2(t){return t[yn]??H2(t)}function H2(t){let e=Rh.pop()??Object.create(z2);return e.lView=t,e}function G2(t){t.lView[yn]!==t&&(t.lView=null,Rh.push(t))}var z2=se(D({},Ul),{consumerIsAlwaysLive:!0,consumerMarkedDirty:t=>{Qo(t.lView)},consumerOnSignalRead(){this.lView[yn]=this}}),W2="ngOriginalError";function xa(t){return t[W2]}var Vt=class{constructor(){this._console=console}handleError(e){let r=this._findOriginalError(e);this._console.error("ERROR",e),r&&this._console.error("ORIGINAL ERROR",r)}_findOriginalError(e){let r=e&&xa(e);for(;r&&xa(r);)r=xa(r);return r||null}};var Fh=!1,q2=new F("",{providedIn:"root",factory:()=>Fh});var rn={};function he(t){Ph(it(),te(),sr()+t,!1)}function Ph(t,e,r,n){if(!n)if((e[O]&3)===3){let o=t.preOrderCheckHooks;o!==null&&lo(e,o,r)}else{let o=t.preOrderHooks;o!==null&&fo(e,o,0,r)}Dn(r)}function L(t,e=W.Default){let r=te();if(r===null)return N(t,e);let n=ot();return Kf(n,r,qe(t),e)}function Z2(t,e){let r=t.hostBindingOpCodes;if(r!==null)try{for(let n=0;n<r.length;n++){let i=r[n];if(i<0)Dn(~i);else{let o=i,s=r[++n],a=r[++n];r1(s,o);let u=e[o];a(2,u)}}}finally{Dn(-1)}}function qo(t,e,r,n,i,o,s,a,u,c,l){let d=e.blueprint.slice();return d[$t]=i,d[O]=n|4|128|8,(c!==null||t&&t[O]&2048)&&(d[O]|=2048),Of(d),d[Ie]=d[or]=t,d[Ve]=r,d[kr]=s||t&&t[kr],d[je]=a||t&&t[je],d[Xn]=u||t&&t[Xn]||null,d[vt]=o,d[Vo]=G1(),d[Co]=l,d[If]=c,d[pt]=e.type==2?t[pt]:d,d}function Zo(t,e,r,n,i){let o=t.data[e];if(o===null)o=Y2(t,e,r,n,i),n1()&&(o.flags|=32);else if(o.type&64){o.type=r,o.value=n,o.attrs=i;let s=Km();o.injectorIndex=s===null?-1:s.injectorIndex}return Zr(o,!0),o}function Y2(t,e,r,n,i){let o=Ff(),s=Pf(),a=s?o:o&&o.parent,u=t.data[e]=nv(t,a,r,e,n,i);return t.firstChild===null&&(t.firstChild=u),o!==null&&(s?o.child==null&&u.parent!==null&&(o.child=u):o.next===null&&(o.next=u,u.prev=o)),u}function kh(t,e,r,n){if(r===0)return-1;let i=e.length;for(let o=0;o<r;o++)e.push(n),t.blueprint.push(n),t.data.push(null);return i}function Vh(t,e,r,n,i){let o=sr(),s=n&2;try{Dn(-1),s&&e.length>Ye&&Ph(t,e,Ye,!1),bt(s?2:0,i),r(n,i)}finally{Dn(o),bt(s?3:1,i)}}function jh(t,e,r){if(Mf(e)){let n=Pe(null);try{let i=e.directiveStart,o=e.directiveEnd;for(let s=i;s<o;s++){let a=t.data[s];a.contentQueries&&a.contentQueries(1,r[s],s)}}finally{Pe(n)}}}function Qh(t,e,r){Rf()&&(cv(t,e,r,yt(r,e)),(r.flags&64)===64&&Gh(t,e,r))}function Bh(t,e,r=yt){let n=e.localNames;if(n!==null){let i=e.index+1;for(let o=0;o<n.length;o+=2){let s=n[o+1],a=s===-1?r(e,t):t[s];t[i++]=a}}}function $h(t){let e=t.tView;return e===null||e.incompleteFirstPass?t.tView=dc(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):e}function dc(t,e,r,n,i,o,s,a,u,c,l){let d=Ye+n,f=d+i,h=K2(d,f),p=typeof c=="function"?c():c;return h[j]={type:t,blueprint:h,template:r,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:u,consts:p,incompleteFirstPass:!1,ssrId:l}}function K2(t,e){let r=[];for(let n=0;n<e;n++)r.push(n<t?null:rn);return r}function J2(t,e,r,n){let o=n.get(q2,Fh)||r===_t.ShadowDom,s=t.selectRootElement(e,o);return X2(s),s}function X2(t){ev(t)}var ev=t=>null;function tv(t,e,r,n){let i=Zh(e);i.push(r),t.firstCreatePass&&Yh(t).push(n,i.length-1)}function nv(t,e,r,n,i,o){let s=e?e.injectorIndex:-1,a=0;return qm()&&(a|=128),{type:r,index:n,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,attrs:o,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Ud(t,e,r,n){for(let i in t)if(t.hasOwnProperty(i)){r=r===null?{}:r;let o=t[i];n===null?Hd(r,e,i,o):n.hasOwnProperty(i)&&Hd(r,e,n[i],o)}return r}function Hd(t,e,r,n){t.hasOwnProperty(r)?t[r].push(e,n):t[r]=[e,n]}function rv(t,e,r){let n=e.directiveStart,i=e.directiveEnd,o=t.data,s=e.attrs,a=[],u=null,c=null;for(let l=n;l<i;l++){let d=o[l],f=r?r.get(d):null,h=f?f.inputs:null,p=f?f.outputs:null;u=Ud(d.inputs,l,u,h),c=Ud(d.outputs,l,c,p);let C=u!==null&&s!==null&&!vf(e)?yv(u,l,s):null;a.push(C)}u!==null&&(u.hasOwnProperty("class")&&(e.flags|=8),u.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=u,e.outputs=c}function iv(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function ov(t,e,r,n,i,o,s,a){let u=yt(e,r),c=e.inputs,l;!a&&c!=null&&(l=c[n])?(fc(t,r,l,n,i),jo(e)&&sv(r,e.index)):e.type&3?(n=iv(n),i=s!=null?s(i,e.value||"",n):i,o.setProperty(u,n,i)):e.type&12}function sv(t,e){let r=en(e,t);r[O]&16||(r[O]|=64)}function Uh(t,e,r,n){if(Rf()){let i=n===null?null:{"":-1},o=dv(t,r),s,a;o===null?s=a=null:[s,a]=o,s!==null&&Hh(t,e,r,s,i,a),i&&fv(r,n,i)}r.mergedAttrs=Fr(r.mergedAttrs,r.attrs)}function Hh(t,e,r,n,i,o){for(let c=0;c<n.length;c++)Ha(Io(r,e),t,n[c].type);pv(r,t.data.length,n.length);for(let c=0;c<n.length;c++){let l=n[c];l.providersResolver&&l.providersResolver(l)}let s=!1,a=!1,u=kh(t,e,n.length,null);for(let c=0;c<n.length;c++){let l=n[c];r.mergedAttrs=Fr(r.mergedAttrs,l.hostAttrs),gv(t,r,e,u,l),hv(u,l,i),l.contentQueries!==null&&(r.flags|=4),(l.hostBindings!==null||l.hostAttrs!==null||l.hostVars!==0)&&(r.flags|=64);let d=l.type.prototype;!s&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((t.preOrderHooks??=[]).push(r.index),s=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(r.index),a=!0),u++}rv(t,r,o)}function av(t,e,r,n,i){let o=i.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~e.index;uv(s)!=a&&s.push(a),s.push(r,n,o)}}function uv(t){let e=t.length;for(;e>0;){let r=t[--e];if(typeof r=="number"&&r<0)return r}return 0}function cv(t,e,r,n){let i=r.directiveStart,o=r.directiveEnd;jo(r)&&mv(e,r,t.data[i+r.componentOffset]),t.firstCreatePass||Io(r,e),En(n,e);let s=r.initialInputs;for(let a=i;a<o;a++){let u=t.data[a],c=bn(e,t,a,r);if(En(c,e),s!==null&&vv(e,a-i,c,u,r,s),Jt(u)){let l=en(r.index,e);l[Ve]=bn(e,t,a,r)}}}function Gh(t,e,r){let n=r.directiveStart,i=r.directiveEnd,o=r.index,s=i1();try{Dn(o);for(let a=n;a<i;a++){let u=t.data[a],c=e[a];$a(a),(u.hostBindings!==null||u.hostVars!==0||u.hostAttrs!==null)&&lv(u,c)}}finally{Dn(-1),$a(s)}}function lv(t,e){t.hostBindings!==null&&t.hostBindings(1,e)}function dv(t,e){let r=t.directiveRegistry,n=null,i=null;if(r)for(let o=0;o<r.length;o++){let s=r[o];if(_m(e,s.selectors,!1))if(n||(n=[]),Jt(s))if(s.findHostDirectiveDefs!==null){let a=[];i=i||new Map,s.findHostDirectiveDefs(s,a,i),n.unshift(...a,s);let u=a.length;lu(t,e,u)}else n.unshift(s),lu(t,e,0);else i=i||new Map,s.findHostDirectiveDefs?.(s,n,i),n.push(s)}return n===null?null:[n,i]}function lu(t,e,r){e.componentOffset=r,(t.components??=[]).push(e.index)}function fv(t,e,r){if(e){let n=t.localNames=[];for(let i=0;i<e.length;i+=2){let o=r[e[i+1]];if(o==null)throw new E(-301,!1);n.push(e[i],o)}}}function hv(t,e,r){if(r){if(e.exportAs)for(let n=0;n<e.exportAs.length;n++)r[e.exportAs[n]]=t;Jt(e)&&(r[""]=t)}}function pv(t,e,r){t.flags|=1,t.directiveStart=e,t.directiveEnd=e+r,t.providerIndexes=e}function gv(t,e,r,n,i){t.data[n]=i;let o=i.factory||(i.factory=nr(i.type,!0)),s=new wn(o,Jt(i),L);t.blueprint[n]=s,r[n]=s,av(t,e,n,kh(t,r,i.hostVars,rn),i)}function mv(t,e,r){let n=yt(e,t),i=$h(r),o=t[kr].rendererFactory,s=16;r.signals?s=4096:r.onPush&&(s=64);let a=Yo(t,qo(t,i,null,s,n,e,null,o.createRenderer(n,r),null,null,null));t[e.index]=a}function vv(t,e,r,n,i,o){let s=o[e];if(s!==null)for(let a=0;a<s.length;){let u=s[a++],c=s[a++],l=s[a++];zh(n,r,u,c,l)}}function zh(t,e,r,n,i){let o=Pe(null);try{let s=t.inputTransforms;s!==null&&s.hasOwnProperty(n)&&(i=s[n].call(e,i)),t.setInput!==null?t.setInput(e,i,r,n):e[n]=i}finally{Pe(o)}}function yv(t,e,r){let n=null,i=0;for(;i<r.length;){let o=r[i];if(o===0){i+=4;continue}else if(o===5){i+=2;continue}if(typeof o=="number")break;if(t.hasOwnProperty(o)){n===null&&(n=[]);let s=t[o];for(let a=0;a<s.length;a+=2)if(s[a]===e){n.push(o,s[a+1],r[i+1]);break}}i+=2}return n}function Wh(t,e,r,n){return[t,!0,0,e,null,n,null,r,null,null]}function qh(t,e){let r=t.contentQueries;if(r!==null){let n=Pe(null);try{for(let i=0;i<r.length;i+=2){let o=r[i],s=r[i+1];if(s!==-1){let a=t.data[s];Uu(o),a.contentQueries(2,e[s],s)}}}finally{Pe(n)}}}function Yo(t,e){return t[Vr]?t[Sd][ht]=e:t[Vr]=e,t[Sd]=e,e}function du(t,e,r){Uu(0);let n=Pe(null);try{e(t,r)}finally{Pe(n)}}function Zh(t){return t[Pr]||(t[Pr]=[])}function Yh(t){return t.cleanup||(t.cleanup=[])}function Kh(t,e){let r=t[Xn],n=r?r.get(Vt,null):null;n&&n.handleError(e)}function fc(t,e,r,n,i){for(let o=0;o<r.length;){let s=r[o++],a=r[o++],u=e[s],c=t.data[s];zh(c,u,n,a,i)}}function Cv(t,e,r){let n=Nf(e,t);Y1(t[je],n,r)}var Dv=100;function wv(t,e=!0){let r=t[kr],n=r.rendererFactory,i=r.afterRenderEventManager,o=!1;o||(n.begin?.(),i?.begin());try{let s=t[j],a=t[Ve];Jh(s,t,s.template,a),bv(t)}catch(s){throw e&&Kh(t,s),s}finally{o||(n.end?.(),r.inlineEffectRunner?.flush(),i?.end())}}function bv(t){let e=0;for(;t[O]&9216||t[yn]?.dirty;){if(e===Dv)throw new E(103,!1);e++,tp(t,1)}}function Jh(t,e,r,n){let i=e[O];if((i&256)===256)return;let o=!1;!o&&e[kr].inlineEffectRunner?.flush(),Hu(e);let s=null,a=null;!o&&Ev(t)&&(a=U2(e),s=Hl(a));try{Of(e),e1(t.bindingStartIndex),r!==null&&Vh(t,e,r,2,n);let u=(i&3)===3;if(!o)if(u){let d=t.preOrderCheckHooks;d!==null&&lo(e,d,null)}else{let d=t.preOrderHooks;d!==null&&fo(e,d,0,null),ba(e,0)}if(Iv(e),Xh(e,0),t.contentQueries!==null&&qh(t,e),!o)if(u){let d=t.contentCheckHooks;d!==null&&lo(e,d)}else{let d=t.contentHooks;d!==null&&fo(e,d,1),ba(e,1)}Z2(t,e);let c=t.components;c!==null&&np(e,c,0);let l=t.viewQuery;if(l!==null&&du(2,l,n),!o)if(u){let d=t.viewCheckHooks;d!==null&&lo(e,d)}else{let d=t.viewHooks;d!==null&&fo(e,d,2),ba(e,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),e[wa]){for(let d of e[wa])d();e[wa]=null}o||(e[O]&=-73)}catch(u){throw Qo(e),u}finally{a!==null&&(Gl(a,s),G2(a)),Gu()}}function Ev(t){return t.type!==2}function Xh(t,e){for(let r=ph(t);r!==null;r=gh(r)){r[O]&=~tr.HasChildViewsToRefresh;for(let n=He;n<r.length;n++){let i=r[n];ep(i,e)}}}function Iv(t){for(let e=ph(t);e!==null;e=gh(e)){if(!(e[O]&tr.HasTransplantedViews))continue;let r=e[er];for(let n=0;n<r.length;n++){let i=r[n],o=i[Ie];$m(i)}}}function _v(t,e,r){let n=en(e,t);ep(n,r)}function ep(t,e){$u(t)&&tp(t,e)}function tp(t,e){let n=t[j],i=t[O],o=t[yn],s=!!(e===0&&i&16);if(s||=!!(i&64&&e===0),s||=!!(i&1024),s||=!!(o?.dirty&&Ys(o)),o&&(o.dirty=!1),t[O]&=-9217,s)Jh(n,t,n.template,t[Ve]);else if(i&8192){Xh(t,1);let a=n.components;a!==null&&np(t,a,1)}}function np(t,e,r){for(let n=0;n<e.length;n++)_v(t,e[n],r)}function hc(t){for(;t;){t[O]|=64;let e=ic(t);if(Rm(t)&&!e)return t;t=e}return null}var _n=class{get rootNodes(){let e=this._lView,r=e[j];return To(r,e,r.firstChild,[])}constructor(e,r,n=!0){this._lView=e,this._cdRefInjectingView=r,this.notifyErrorHandler=n,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Ve]}set context(e){this._lView[Ve]=e}get destroyed(){return(this._lView[O]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Ie];if(gt(e)){let r=e[Do],n=r?r.indexOf(this):-1;n>-1&&(jr(e,n),_o(r,n))}this._attachedToViewContainer=!1}Go(this._lView[j],this._lView)}onDestroy(e){Hm(this._lView,e)}markForCheck(){hc(this._cdRefInjectingView||this._lView)}detach(){this._lView[O]&=-129}reattach(){Lf(this._lView),this._lView[O]|=128}detectChanges(){wv(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new E(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,X1(this._lView[j],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new E(902,!1);this._appRef=e}},An=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=Mv;let t=e;return t})();function Mv(t){return Av(ot(),te(),(t&16)===16)}function Av(t,e,r){if(jo(t)&&!r){let n=en(t.index,e);return new _n(n,n)}else if(t.type&47){let n=e[pt];return new _n(n,e)}return null}var Gd=new Set;function Ko(t){Gd.has(t)||(Gd.add(t),performance?.mark?.("mark_use_counter",{detail:{feature:t}}))}var fu=class extends Se{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,r,n){let i=e,o=r||(()=>null),s=n;if(e&&typeof e=="object"){let u=e;i=u.next?.bind(u),o=u.error?.bind(u),s=u.complete?.bind(u)}this.__isAsync&&(o=Sa(o),i&&(i=Sa(i)),s&&(s=Sa(s)));let a=super.subscribe({next:i,error:o,complete:s});return e instanceof me&&e.add(a),a}};function Sa(t){return e=>{setTimeout(t,void 0,e)}}var de=fu;function zd(...t){}function xv(){let t=typeof gn.requestAnimationFrame=="function",e=gn[t?"requestAnimationFrame":"setTimeout"],r=gn[t?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&r){let n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);let i=r[Zone.__symbol__("OriginalDelegate")];i&&(r=i)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:r}}var Ee=class t{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:n=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new de(!1),this.onMicrotaskEmpty=new de(!1),this.onStable=new de(!1),this.onError=new de(!1),typeof Zone>"u")throw new E(908,!1);Zone.assertZonePatched();let i=this;i._nesting=0,i._outer=i._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(i._inner=i._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(i._inner=i._inner.fork(Zone.longStackTraceZoneSpec)),i.shouldCoalesceEventChangeDetection=!n&&r,i.shouldCoalesceRunChangeDetection=n,i.lastRequestAnimationFrameId=-1,i.nativeRequestAnimationFrame=xv().nativeRequestAnimationFrame,Nv(i)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new E(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new E(909,!1)}run(e,r,n){return this._inner.run(e,r,n)}runTask(e,r,n,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,e,Sv,zd,zd);try{return o.runTask(s,r,n)}finally{o.cancelTask(s)}}runGuarded(e,r,n){return this._inner.runGuarded(e,r,n)}runOutsideAngular(e){return this._outer.run(e)}},Sv={};function pc(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function Tv(t){t.isCheckStableRunning||t.lastRequestAnimationFrameId!==-1||(t.lastRequestAnimationFrameId=t.nativeRequestAnimationFrame.call(gn,()=>{t.fakeTopEventTask||(t.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{t.lastRequestAnimationFrameId=-1,hu(t),t.isCheckStableRunning=!0,pc(t),t.isCheckStableRunning=!1},void 0,()=>{},()=>{})),t.fakeTopEventTask.invoke()}),hu(t))}function Nv(t){let e=()=>{Tv(t)};t._inner=t._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(r,n,i,o,s,a)=>{if(Ov(a))return r.invokeTask(i,o,s,a);try{return Wd(t),r.invokeTask(i,o,s,a)}finally{(t.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&e(),qd(t)}},onInvoke:(r,n,i,o,s,a,u)=>{try{return Wd(t),r.invoke(i,o,s,a,u)}finally{t.shouldCoalesceRunChangeDetection&&e(),qd(t)}},onHasTask:(r,n,i,o)=>{r.hasTask(i,o),n===i&&(o.change=="microTask"?(t._hasPendingMicrotasks=o.microTask,hu(t),pc(t)):o.change=="macroTask"&&(t.hasPendingMacrotasks=o.macroTask))},onHandleError:(r,n,i,o)=>(r.handleError(i,o),t.runOutsideAngular(()=>t.onError.emit(o)),!1)})}function hu(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.lastRequestAnimationFrameId!==-1?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Wd(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function qd(t){t._nesting--,pc(t)}var rp=new F("",{providedIn:"root",factory:ip});function ip(){let t=w(Ee),e=!0,r=new Z(i=>{e=t.isStable&&!t.hasPendingMacrotasks&&!t.hasPendingMicrotasks,t.runOutsideAngular(()=>{i.next(e),i.complete()})}),n=new Z(i=>{let o;t.runOutsideAngular(()=>{o=t.onStable.subscribe(()=>{Ee.assertNotInAngularZone(),queueMicrotask(()=>{!e&&!t.hasPendingMacrotasks&&!t.hasPendingMicrotasks&&(e=!0,i.next(!0))})})});let s=t.onUnstable.subscribe(()=>{Ee.assertInAngularZone(),e&&(e=!1,t.runOutsideAngular(()=>{i.next(!1)}))});return()=>{o.unsubscribe(),s.unsubscribe()}});return fa(r,n.pipe(ro()))}function Ov(t){return!Array.isArray(t)||t.length!==1?!1:t[0].data?.__ignore_ng_zone__===!0}var Lv=(()=>{let e=class e{constructor(){this.renderDepth=0,this.handler=null,this.internalCallbacks=[]}begin(){this.handler?.validateBegin(),this.renderDepth++}end(){if(this.renderDepth--,this.renderDepth===0){for(let n of this.internalCallbacks)n();this.internalCallbacks.length=0,this.handler?.execute()}}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=M({token:e,providedIn:"root",factory:()=>new e});let t=e;return t})();function Rv(t,e){let r=en(e,t),n=r[j];Fv(n,r);let i=r[$t];i!==null&&r[Co]===null&&(r[Co]=cc(i,r[Xn])),gc(n,r,r[Ve])}function Fv(t,e){for(let r=e.length;r<t.blueprint.length;r++)e.push(t.blueprint[r])}function gc(t,e,r){Hu(e);try{let n=t.viewQuery;n!==null&&du(1,n,r);let i=t.template;i!==null&&Vh(t,e,i,1,r),t.firstCreatePass&&(t.firstCreatePass=!1),t.staticContentQueries&&qh(t,e),t.staticViewQueries&&du(2,t.viewQuery,r);let o=t.components;o!==null&&Pv(e,o)}catch(n){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),n}finally{e[O]&=-5,Gu()}}function Pv(t,e){for(let r=0;r<e.length;r++)Rv(t,e[r])}function pu(t,e,r){let n=r?t.styles:null,i=r?t.classes:null,o=0;if(e!==null)for(let s=0;s<e.length;s++){let a=e[s];if(typeof a=="number")o=a;else if(o==1)i=Cd(i,a);else if(o==2){let u=a,c=e[++s];n=Cd(n,u+": "+c+";")}}r?t.styles=n:t.stylesWithoutHost=n,r?t.classes=i:t.classesWithoutHost=i}var No=class extends Wo{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let r=vn(e);return new Br(r,this.ngModule)}};function Zd(t){let e=[];for(let r in t)if(t.hasOwnProperty(r)){let n=t[r];e.push({propName:n,templateName:r})}return e}function kv(t){let e=t.toLowerCase();return e==="svg"?Tf:e==="math"?Vm:null}var gu=class{constructor(e,r){this.injector=e,this.parentInjector=r}get(e,r,n){n=ko(n);let i=this.injector.get(e,Aa,n);return i!==Aa||r===Aa?i:this.parentInjector.get(e,r,n)}},Br=class extends So{get inputs(){let e=this.componentDef,r=e.inputTransforms,n=Zd(e.inputs);if(r!==null)for(let i of n)r.hasOwnProperty(i.propName)&&(i.transform=r[i.propName]);return n}get outputs(){return Zd(this.componentDef.outputs)}constructor(e,r){super(),this.componentDef=e,this.ngModule=r,this.componentType=e.type,this.selector=Sm(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!r}create(e,r,n,i){i=i||this.ngModule;let o=i instanceof rt?i:i?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let s=o?new gu(e,o):e,a=s.get(Qr,null);if(a===null)throw new E(407,!1);let u=s.get(Q2,null),c=s.get(Lv,null),l={rendererFactory:a,sanitizer:u,inlineEffectRunner:null,afterRenderEventManager:c},d=a.createRenderer(null,this.componentDef),f=this.componentDef.selectors[0][0]||"div",h=n?J2(d,n,this.componentDef.encapsulation,s):vh(d,f,kv(f)),p=4608,C=this.componentDef.onPush?576:528,b=this.componentDef.signals?p:C,m=null;h!==null&&(m=cc(h,s,!0));let Y=dc(0,null,null,1,0,null,null,null,null,null,null),q=qo(null,Y,null,b,null,null,l,d,s,null,m);Hu(q);let pe,ie;try{let v=this.componentDef,g,_=null;v.findHostDirectiveDefs?(g=[],_=new Map,v.findHostDirectiveDefs(v,g,_),g.push(v)):g=[v];let x=Vv(q,h),H=jv(x,h,v,g,q,l,d);ie=Bu(Y,Ye),h&&$v(d,v,h,n),r!==void 0&&Uv(ie,this.ngContentSelectors,r),pe=Bv(H,v,g,_,q,[Hv]),gc(Y,q,null)}finally{Gu()}return new mu(this.componentType,pe,cr(ie,q),q,ie)}},mu=class extends ou{constructor(e,r,n,i,o){super(),this.location=n,this._rootLView=i,this._tNode=o,this.previousInputValues=null,this.instance=r,this.hostView=this.changeDetectorRef=new _n(i,void 0,!1),this.componentType=e}setInput(e,r){let n=this._tNode.inputs,i;if(n!==null&&(i=n[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),r))return;let o=this._rootLView;fc(o[j],o,i,e,r),this.previousInputValues.set(e,r);let s=en(this._tNode.index,o);hc(s)}}get injector(){return new mn(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function Vv(t,e){let r=t[j],n=Ye;return t[n]=e,Zo(r,n,2,"#host",null)}function jv(t,e,r,n,i,o,s){let a=i[j];Qv(n,t,e,s);let u=null;e!==null&&(u=cc(e,i[Xn]));let c=o.rendererFactory.createRenderer(e,r),l=16;r.signals?l=4096:r.onPush&&(l=64);let d=qo(i,$h(r),null,l,i[t.index],t,o,c,null,null,u);return a.firstCreatePass&&lu(a,t,n.length-1),Yo(i,d),i[t.index]=d}function Qv(t,e,r,n){for(let i of t)e.mergedAttrs=Fr(e.mergedAttrs,i.hostAttrs);e.mergedAttrs!==null&&(pu(e,e.mergedAttrs,!0),r!==null&&bh(n,r,e))}function Bv(t,e,r,n,i,o){let s=ot(),a=i[j],u=yt(s,i);Hh(a,i,s,r,null,n);for(let l=0;l<r.length;l++){let d=s.directiveStart+l,f=bn(i,a,d,s);En(f,i)}Gh(a,i,s),u&&En(u,i);let c=bn(i,a,s.directiveStart+s.componentOffset,s);if(t[Ve]=i[Ve]=c,o!==null)for(let l of o)l(c,e);return jh(a,s,t),c}function $v(t,e,r,n){if(n)Qa(t,r,["ng-version",B2.full]);else{let{attrs:i,classes:o}=Tm(e.selectors[0]);i&&Qa(t,r,i),o&&o.length>0&&wh(t,r,o.join(" "))}}function Uv(t,e,r){let n=t.projection=[];for(let i=0;i<e.length;i++){let o=r[i];n.push(o!=null?Array.from(o):null)}}function Hv(){let t=ot();qu(te()[j],t)}function Gv(t){return Object.getPrototypeOf(t.prototype).constructor}function st(t){let e=Gv(t.type),r=!0,n=[t];for(;e;){let i;if(Jt(t))i=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new E(903,!1);i=e.\u0275dir}if(i){if(r){n.push(i);let s=t;s.inputs=uo(t.inputs),s.inputTransforms=uo(t.inputTransforms),s.declaredInputs=uo(t.declaredInputs),s.outputs=uo(t.outputs);let a=i.hostBindings;a&&Zv(t,a);let u=i.viewQuery,c=i.contentQueries;if(u&&Wv(t,u),c&&qv(t,c),io(t.inputs,i.inputs),io(t.declaredInputs,i.declaredInputs),io(t.outputs,i.outputs),i.inputTransforms!==null&&(s.inputTransforms===null&&(s.inputTransforms={}),io(s.inputTransforms,i.inputTransforms)),Jt(i)&&i.data.animation){let l=t.data;l.animation=(l.animation||[]).concat(i.data.animation)}}let o=i.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(t),a===st&&(r=!1)}}e=Object.getPrototypeOf(e)}zv(n)}function zv(t){let e=0,r=null;for(let n=t.length-1;n>=0;n--){let i=t[n];i.hostVars=e+=i.hostVars,i.hostAttrs=Fr(i.hostAttrs,r=Fr(r,i.hostAttrs))}}function uo(t){return t===Jn?{}:t===nt?[]:t}function Wv(t,e){let r=t.viewQuery;r?t.viewQuery=(n,i)=>{e(n,i),r(n,i)}:t.viewQuery=e}function qv(t,e){let r=t.contentQueries;r?t.contentQueries=(n,i,o)=>{e(n,i,o),r(n,i,o)}:t.contentQueries=e}function Zv(t,e){let r=t.hostBindings;r?t.hostBindings=(n,i)=>{e(n,i),r(n,i)}:t.hostBindings=e}function Jo(t,e,r){return t[e]=r}function Yv(t,e){return t[e]}function jt(t,e,r){let n=t[e];return Object.is(n,r)?!1:(t[e]=r,!0)}function op(t,e,r,n){let i=jt(t,e,r);return jt(t,e+1,n)||i}function Kv(t,e,r,n,i){let o=op(t,e,r,n);return jt(t,e+2,i)||o}function Jv(t,e,r,n){return jt(t,$o(),r)?e+uf(r)+n:rn}function co(t,e){return t<<17|e<<2}function Mn(t){return t>>17&32767}function Xv(t){return(t&2)==2}function ey(t,e){return t&131071|e<<17}function vu(t){return t|2}function ir(t){return(t&131068)>>2}function Ta(t,e){return t&-131069|e<<2}function ty(t){return(t&1)===1}function yu(t){return t|1}function ny(t,e,r,n,i,o){let s=o?e.classBindings:e.styleBindings,a=Mn(s),u=ir(s);t[n]=r;let c=!1,l;if(Array.isArray(r)){let d=r;l=d[1],(l===null||Yr(d,l)>0)&&(c=!0)}else l=r;if(i)if(u!==0){let f=Mn(t[a+1]);t[n+1]=co(f,a),f!==0&&(t[f+1]=Ta(t[f+1],n)),t[a+1]=ey(t[a+1],n)}else t[n+1]=co(a,0),a!==0&&(t[a+1]=Ta(t[a+1],n)),a=n;else t[n+1]=co(u,0),a===0?a=n:t[u+1]=Ta(t[u+1],n),u=n;c&&(t[n+1]=vu(t[n+1])),Yd(t,l,n,!0,o),Yd(t,l,n,!1,o),ry(e,l,t,n,o),s=co(a,u),o?e.classBindings=s:e.styleBindings=s}function ry(t,e,r,n,i){let o=i?t.residualClasses:t.residualStyles;o!=null&&typeof e=="string"&&Yr(o,e)>=0&&(r[n+1]=yu(r[n+1]))}function Yd(t,e,r,n,i){let o=t[r+1],s=e===null,a=n?Mn(o):ir(o),u=!1;for(;a!==0&&(u===!1||s);){let c=t[a],l=t[a+1];iy(c,e)&&(u=!0,t[a+1]=n?yu(l):vu(l)),a=n?Mn(l):ir(l)}u&&(t[r+1]=n?vu(o):yu(o))}function iy(t,e){return t===null||e==null||(Array.isArray(t)?t[1]:t)===e?!0:Array.isArray(t)&&typeof e=="string"?Yr(t,e)>=0:!1}function ge(t,e,r){let n=te(),i=$o();if(jt(n,i,e)){let o=it(),s=u1();ov(o,s,n,t,e,n[je],r,!1)}return ge}function Kd(t,e,r,n,i){let o=e.inputs,s=i?"class":"style";fc(t,r,o[s],s,n)}function Xo(t,e,r){return sp(t,e,r,!1),Xo}function lr(t,e){return sp(t,e,null,!0),lr}function sp(t,e,r,n){let i=te(),o=it(),s=t1(2);if(o.firstUpdatePass&&sy(o,t,s,n),e!==rn&&jt(i,s,e)){let a=o.data[sr()];dy(o,a,i,i[je],t,i[s+1]=fy(e,r),n,s)}}function oy(t,e){return e>=t.expandoStartIndex}function sy(t,e,r,n){let i=t.data;if(i[r+1]===null){let o=i[sr()],s=oy(t,r);hy(o,n)&&e===null&&!s&&(e=!1),e=ay(i,o,e,n),ny(i,o,e,r,s,n)}}function ay(t,e,r,n){let i=o1(t),o=n?e.residualClasses:e.residualStyles;if(i===null)(n?e.classBindings:e.styleBindings)===0&&(r=Na(null,t,e,r,n),r=$r(r,e.attrs,n),o=null);else{let s=e.directiveStylingLast;if(s===-1||t[s]!==i)if(r=Na(i,t,e,r,n),o===null){let u=uy(t,e,n);u!==void 0&&Array.isArray(u)&&(u=Na(null,t,e,u[1],n),u=$r(u,e.attrs,n),cy(t,e,n,u))}else o=ly(t,e,n)}return o!==void 0&&(n?e.residualClasses=o:e.residualStyles=o),r}function uy(t,e,r){let n=r?e.classBindings:e.styleBindings;if(ir(n)!==0)return t[Mn(n)]}function cy(t,e,r,n){let i=r?e.classBindings:e.styleBindings;t[Mn(i)]=n}function ly(t,e,r){let n,i=e.directiveEnd;for(let o=1+e.directiveStylingLast;o<i;o++){let s=t[o].hostAttrs;n=$r(n,s,r)}return $r(n,e.attrs,r)}function Na(t,e,r,n,i){let o=null,s=r.directiveEnd,a=r.directiveStylingLast;for(a===-1?a=r.directiveStart:a++;a<s&&(o=e[a],n=$r(n,o.hostAttrs,i),o!==t);)a++;return t!==null&&(r.directiveStylingLast=a),n}function $r(t,e,r){let n=r?1:2,i=-1;if(e!==null)for(let o=0;o<e.length;o++){let s=e[o];typeof s=="number"?i=s:i===n&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),S1(t,s,r?!0:e[++o]))}return t===void 0?null:t}function dy(t,e,r,n,i,o,s,a){if(!(e.type&3))return;let u=t.data,c=u[a+1],l=ty(c)?Jd(u,e,r,i,ir(c),s):void 0;if(!Oo(l)){Oo(o)||Xv(c)&&(o=Jd(u,null,r,i,a,s));let d=Nf(sr(),r);g2(n,s,d,i,o)}}function Jd(t,e,r,n,i,o){let s=e===null,a;for(;i>0;){let u=t[i],c=Array.isArray(u),l=c?u[1]:u,d=l===null,f=r[i+1];f===rn&&(f=d?nt:void 0);let h=d?Ia(f,n):l===n?f:void 0;if(c&&!Oo(h)&&(h=Ia(u,n)),Oo(h)&&(a=h,s))return a;let p=t[i+1];i=s?Mn(p):ir(p)}if(e!==null){let u=o?e.residualClasses:e.residualStyles;u!=null&&(a=Ia(u,n))}return a}function Oo(t){return t!==void 0}function fy(t,e){return t==null||t===""||(typeof e=="string"?t=t+e:typeof t=="object"&&(t=Ze(nn(t)))),t}function hy(t,e){return(t.flags&(e?8:16))!==0}var F9=new RegExp(`^(\\d+)*(${L2}|${O2})*(.*)`);var py=(t,e)=>null;function Ur(t,e){return py(t,e)}var Cu=class{destroy(e){}updateValue(e,r){}swap(e,r){let n=Math.min(e,r),i=Math.max(e,r),o=this.detach(i);if(i-n>1){let s=this.detach(n);this.attach(n,o),this.attach(i,s)}else this.attach(n,o)}move(e,r){this.attach(r,this.detach(e))}};function Oa(t,e,r,n,i){return t===r&&Object.is(e,n)?1:Object.is(i(t,e),i(r,n))?-1:0}function gy(t,e,r){let n,i,o=0,s=t.length-1;if(Array.isArray(e)){let a=e.length-1;for(;o<=s&&o<=a;){let u=t.at(o),c=e[o],l=Oa(o,u,o,c,r);if(l!==0){l<0&&t.updateValue(o,c),o++;continue}let d=t.at(s),f=e[a],h=Oa(s,d,a,f,r);if(h!==0){h<0&&t.updateValue(s,f),s--,a--;continue}let p=r(o,u),C=r(s,d),b=r(o,c);if(Object.is(b,C)){let m=r(a,f);Object.is(m,p)?(t.swap(o,s),t.updateValue(s,f),a--,s--):t.move(s,o),t.updateValue(o,c),o++;continue}if(n??=new Lo,i??=ef(t,o,s,r),Du(t,n,o,b))t.updateValue(o,c),o++,s++;else if(i.has(b))n.set(p,t.detach(o)),s--;else{let m=t.create(o,e[o]);t.attach(o,m),o++,s++}}for(;o<=a;)Xd(t,n,r,o,e[o]),o++}else if(e!=null){let a=e[Symbol.iterator](),u=a.next();for(;!u.done&&o<=s;){let c=t.at(o),l=u.value,d=Oa(o,c,o,l,r);if(d!==0)d<0&&t.updateValue(o,l),o++,u=a.next();else{n??=new Lo,i??=ef(t,o,s,r);let f=r(o,l);if(Du(t,n,o,f))t.updateValue(o,l),o++,s++,u=a.next();else if(!i.has(f))t.attach(o,t.create(o,l)),o++,s++,u=a.next();else{let h=r(o,c);n.set(h,t.detach(o)),s--}}}for(;!u.done;)Xd(t,n,r,t.length,u.value),u=a.next()}for(;o<=s;)t.destroy(t.detach(s--));n?.forEach(a=>{t.destroy(a)})}function Du(t,e,r,n){return e!==void 0&&e.has(n)?(t.attach(r,e.get(n)),e.delete(n),!0):!1}function Xd(t,e,r,n,i){if(Du(t,e,n,r(n,i)))t.updateValue(n,i);else{let o=t.create(n,i);t.attach(n,o)}}function ef(t,e,r,n){let i=new Set;for(let o=e;o<=r;o++)i.add(n(o,t.at(o)));return i}var Lo=class{constructor(){this.map=new Map}has(e){let r=this.map.get(e);return r!==void 0&&r.length>0}delete(e){let r=this.map.get(e);return r!==void 0?(r.shift(),!0):!1}get(e){let r=this.map.get(e);return r!==void 0&&r.length>0?r[0]:void 0}set(e,r){if(!this.map.has(e)){this.map.set(e,[r]);return}this.map.get(e)?.push(r)}forEach(e){for(let[r,n]of this.map)for(let i of n)e(i,r)}};function es(t,e,r,n){let i=e.tView,s=t[O]&4096?4096:16,a=qo(t,i,r,s,null,e,null,null,null,n?.injector??null,n?.dehydratedView??null),u=t[e.index];a[qr]=u;let c=t[It];return c!==null&&(a[It]=c.createEmbeddedView(i)),gc(i,a,r),a}function ap(t,e){let r=He+e;if(r<t.length)return t[r]}function Hr(t,e){return!e||fh(t)}function ts(t,e,r,n=!0){let i=e[j];if(t2(i,e,t,r),n){let o=Ya(r,t),s=e[je],a=oc(s,t[Cn]);a!==null&&J1(i,t[vt],s,e,a,o)}}function up(t,e){let r=jr(t,e);return r!==void 0&&Go(r[j],r),r}var dr=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=my;let t=e;return t})();function my(){let t=ot();return lp(t,te())}var vy=dr,cp=class extends vy{constructor(e,r,n){super(),this._lContainer=e,this._hostTNode=r,this._hostLView=n}get element(){return cr(this._hostTNode,this._hostLView)}get injector(){return new mn(this._hostTNode,this._hostLView)}get parentInjector(){let e=Zu(this._hostTNode,this._hostLView);if(Gf(e)){let r=Eo(e,this._hostLView),n=bo(e),i=r[j].data[n+8];return new mn(i,r)}else return new mn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let r=tf(this._lContainer);return r!==null&&r[e]||null}get length(){return this._lContainer.length-He}createEmbeddedView(e,r,n){let i,o;typeof n=="number"?i=n:n!=null&&(i=n.index,o=n.injector);let s=Ur(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(r||{},o,s);return this.insertImpl(a,i,Hr(this._hostTNode,s)),a}createComponent(e,r,n,i,o){let s=e&&!I1(e),a;if(s)a=r;else{let p=r||{};a=p.index,n=p.injector,i=p.projectableNodes,o=p.environmentInjector||p.ngModuleRef}let u=s?e:new Br(vn(e)),c=n||this.parentInjector;if(!o&&u.ngModule==null){let C=(s?c:this.parentInjector).get(rt,null);C&&(o=C)}let l=vn(u.componentType??{}),d=Ur(this._lContainer,l?.id??null),f=d?.firstChild??null,h=u.create(c,i,f,o);return this.insertImpl(h.hostView,a,Hr(this._hostTNode,d)),h}insert(e,r){return this.insertImpl(e,r,!0)}insertImpl(e,r,n){let i=e._lView;if(Bm(i)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let u=i[Ie],c=new cp(u,u[vt],u[Ie]);c.detach(c.indexOf(e))}}let o=this._adjustIndex(r),s=this._lContainer;return ts(s,i,o,n),e.attachToViewContainerRef(),th(La(s),o,e),e}move(e,r){return this.insert(e,r)}indexOf(e){let r=tf(this._lContainer);return r!==null?r.indexOf(e):-1}remove(e){let r=this._adjustIndex(e,-1),n=jr(this._lContainer,r);n&&(_o(La(this._lContainer),r),Go(n[j],n))}detach(e){let r=this._adjustIndex(e,-1),n=jr(this._lContainer,r);return n&&_o(La(this._lContainer),r)!=null?new _n(n):null}_adjustIndex(e,r=0){return e??this.length+r}};function tf(t){return t[Do]}function La(t){return t[Do]||(t[Do]=[])}function lp(t,e){let r,n=e[t.index];return gt(n)?r=n:(r=Wh(n,e,null,t),e[t.index]=r,Yo(e,r)),Cy(r,e,t,n),new cp(r,t,e)}function yy(t,e){let r=t[je],n=r.createComment(""),i=yt(e,t),o=oc(r,i);return xo(r,o,n,u2(r,i),!1),n}var Cy=by,Dy=(t,e,r)=>!1;function wy(t,e,r){return Dy(t,e,r)}function by(t,e,r,n){if(t[Cn])return;let i;r.type&8?i=Mt(n):i=yy(e,r),t[Cn]=i}function Ey(t,e,r,n,i,o,s,a,u){let c=e.consts,l=Zo(e,t,4,s||null,wo(c,a));Uh(e,r,l,wo(c,u)),qu(e,l);let d=l.tView=dc(2,l,n,i,o,e.directiveRegistry,e.pipeRegistry,null,e.schemas,c,null);return e.queries!==null&&(e.queries.template(e,l),d.queries=e.queries.embeddedTView(l)),l}function mt(t,e,r,n,i,o,s,a){let u=te(),c=it(),l=t+Ye,d=c.firstCreatePass?Ey(l,c,u,e,r,n,i,o,s):c.data[l];Zr(d,!1);let f=Iy(c,u,d,t);zu()&&sc(c,u,f,d),En(f,u);let h=Wh(f,u,f,d);return u[l]=h,Yo(u,h),wy(h,d,u),Qu(d)&&Qh(c,u,d),s!=null&&Bh(u,d,a),mt}var Iy=_y;function _y(t,e,r,n){return Wu(!0),e[je].createComment("")}function on(t,e,r){Ko("NgControlFlow");let n=te(),i=$o(),o=Iu(n,Ye+t),s=0;if(jt(n,i,e)){let a=Pe(null);try{if(up(o,s),e!==-1){let u=_u(n[j],e),c=Ur(o,u.tView.ssrId),l=es(n,u,r,{dehydratedView:c});ts(o,l,s,Hr(u,c))}}finally{Pe(a)}}else{let a=ap(o,s);a!==void 0&&(a[Ve]=r)}}var wu=class{constructor(e,r,n){this.lContainer=e,this.$implicit=r,this.$index=n}get $count(){return this.lContainer.length-He}};function mc(t,e){return e}var bu=class{constructor(e,r,n){this.hasEmptyBlock=e,this.trackByFn=r,this.liveCollection=n}};function ns(t,e,r,n,i,o,s,a,u,c,l){Ko("NgControlFlow");let d=u!==void 0,f=te(),h=a?s.bind(f[pt][Ve]):s,p=new bu(d,h);f[Ye+t]=p,mt(t+1,e,r,n,i,o),d&&mt(t+2,u,c,l)}var Eu=class extends Cu{constructor(e,r,n){super(),this.lContainer=e,this.hostLView=r,this.templateTNode=n,this.needsIndexUpdate=!1}get length(){return this.lContainer.length-He}at(e){return this.getLView(e)[Ve].$implicit}attach(e,r){let n=r[Co];this.needsIndexUpdate||=e!==this.length,ts(this.lContainer,r,e,Hr(this.templateTNode,n))}detach(e){return this.needsIndexUpdate||=e!==this.length-1,My(this.lContainer,e)}create(e,r){let n=Ur(this.lContainer,this.templateTNode.tView.ssrId);return es(this.hostLView,this.templateTNode,new wu(this.lContainer,r,e),{dehydratedView:n})}destroy(e){Go(e[j],e)}updateValue(e,r){this.getLView(e)[Ve].$implicit=r}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[Ve].$index=e}getLView(e){return Ay(this.lContainer,e)}};function rs(t,e){let r=Pe(null);try{let n=te(),i=n[j],o=n[Ye+t];if(o.liveCollection===void 0){let a=t+1,u=Iu(n,Ye+a),c=_u(i,a);o.liveCollection=new Eu(u,n,c)}else o.liveCollection.reset();let s=o.liveCollection;if(gy(s,e,o.trackByFn),s.updateIndexes(),o.hasEmptyBlock){let a=$o(),u=s.length===0;if(jt(n,a,u)){let c=t+2,l=Iu(n,Ye+c);if(u){let d=_u(i,c),f=Ur(l,d.tView.ssrId),h=es(n,d,void 0,{dehydratedView:f});ts(l,h,0,Hr(d,f))}else up(l,0)}}}finally{Pe(r)}}function Iu(t,e){return t[e]}function My(t,e){return jr(t,e)}function Ay(t,e){return ap(t,e)}function _u(t,e){return Bu(t,e+Ye)}function xy(t,e,r,n,i,o){let s=e.consts,a=wo(s,i),u=Zo(e,t,2,n,a);return Uh(e,r,u,wo(s,o)),u.attrs!==null&&pu(u,u.attrs,!1),u.mergedAttrs!==null&&pu(u,u.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,u),u}function A(t,e,r,n){let i=te(),o=it(),s=Ye+t,a=i[je],u=o.firstCreatePass?xy(s,o,i,e,r,n):o.data[s],c=Sy(o,i,u,a,e,t);i[s]=c;let l=Qu(u);return Zr(u,!0),bh(a,c,u),(u.flags&32)!==32&&zu()&&sc(o,i,c,u),Gm()===0&&En(c,i),zm(),l&&(Qh(o,i,u),jh(o,u,i)),n!==null&&Bh(i,u),A}function I(){let t=ot();Pf()?Jm():(t=t.parent,Zr(t,!1));let e=t;Zm(e)&&Ym(),Wm();let r=it();return r.firstCreatePass&&(qu(r,t),Mf(t)&&r.queries.elementEnd(t)),e.classesWithoutHost!=null&&h1(e)&&Kd(r,e,te(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&p1(e)&&Kd(r,e,te(),e.stylesWithoutHost,!1),I}function ce(t,e,r,n){return A(t,e,r,n),I(),ce}var Sy=(t,e,r,n,i,o)=>(Wu(!0),vh(n,i,c1()));function xn(){return te()}var Ro="en-US";var Ty=Ro;function Ny(t){sm(t,"Expected localeId to be defined"),typeof t=="string"&&(Ty=t.toLowerCase().replace(/_/g,"-"))}function Sn(t){return!!t&&typeof t.then=="function"}function dp(t){return!!t&&typeof t.subscribe=="function"}function fe(t,e,r,n){let i=te(),o=it(),s=ot();return Ly(o,i,i[je],s,t,e,n),fe}function Oy(t,e,r,n){let i=t.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===r&&i[o+1]===n){let a=e[Pr],u=i[o+2];return a.length>u?a[u]:null}typeof s=="string"&&(o+=2)}return null}function Ly(t,e,r,n,i,o,s){let a=Qu(n),c=t.firstCreatePass&&Yh(t),l=e[Ve],d=Zh(e),f=!0;if(n.type&3||s){let C=yt(n,e),b=s?s(C):C,m=d.length,Y=s?pe=>s(Mt(pe[n.index])):n.index,q=null;if(!s&&a&&(q=Oy(t,e,i,n.index)),q!==null){let pe=q.__ngLastListenerFn__||q;pe.__ngNextListenerFn__=o,q.__ngLastListenerFn__=o,f=!1}else{o=rf(n,e,l,o,!1);let pe=r.listen(b,i,o);d.push(o,pe),c&&c.push(i,Y,m,m+1)}}else o=rf(n,e,l,o,!1);let h=n.outputs,p;if(f&&h!==null&&(p=h[i])){let C=p.length;if(C)for(let b=0;b<C;b+=2){let m=p[b],Y=p[b+1],ie=e[m][Y].subscribe(o),v=d.length;d.push(o,ie),c&&c.push(i,n.index,v,-(v+1))}}}function nf(t,e,r,n){try{return bt(6,e,r),r(n)!==!1}catch(i){return Kh(t,i),!1}finally{bt(7,e,r)}}function rf(t,e,r,n,i){return function o(s){if(s===Function)return n;let a=t.componentOffset>-1?en(t.index,e):e;hc(a);let u=nf(e,r,n,s),c=o.__ngNextListenerFn__;for(;c;)u=nf(e,r,c,s)&&u,c=c.__ngNextListenerFn__;return i&&u===!1&&s.preventDefault(),u}}function Ge(t=1){return a1(t)}function is(t){let e=Xm();return jm(e,Ye+t)}function re(t,e=""){let r=te(),n=it(),i=t+Ye,o=n.firstCreatePass?Zo(n,i,1,e,null):n.data[i],s=Ry(n,r,o,e,t);r[i]=s,zu()&&sc(n,r,s,o),Zr(o,!1)}var Ry=(t,e,r,n,i)=>(Wu(!0),Z1(e[je],n));function vc(t){return fr("",t,""),vc}function fr(t,e,r){let n=te(),i=Jv(n,t,e,r);return i!==rn&&Cv(n,sr(),i),fr}function Fy(t,e,r){let n=it();if(n.firstCreatePass){let i=Jt(t);Mu(r,n.data,n.blueprint,i,!0),Mu(e,n.data,n.blueprint,i,!1)}}function Mu(t,e,r,n,i){if(t=qe(t),Array.isArray(t))for(let o=0;o<t.length;o++)Mu(t[o],e,r,n,i);else{let o=it(),s=te(),a=ot(),u=rr(t)?t:qe(t.provide),c=uh(t),l=a.providerIndexes&1048575,d=a.directiveStart,f=a.providerIndexes>>20;if(rr(t)||!t.multi){let h=new wn(c,i,L),p=Fa(u,e,i?l:l+f,d);p===-1?(Ha(Io(a,s),o,u),Ra(o,t,e.length),e.push(u),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),r.push(h),s.push(h)):(r[p]=h,s[p]=h)}else{let h=Fa(u,e,l+f,d),p=Fa(u,e,l,l+f),C=h>=0&&r[h],b=p>=0&&r[p];if(i&&!b||!i&&!C){Ha(Io(a,s),o,u);let m=Vy(i?ky:Py,r.length,i,n,c);!i&&b&&(r[p].providerFactory=m),Ra(o,t,e.length,0),e.push(u),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),r.push(m),s.push(m)}else{let m=fp(r[i?p:h],c,!i&&n);Ra(o,t,h>-1?h:p,m)}!i&&n&&b&&r[p].componentProviders++}}}function Ra(t,e,r,n){let i=rr(e),o=F1(e);if(i||o){let u=(o?qe(e.useClass):e).prototype.ngOnDestroy;if(u){let c=t.destroyHooks||(t.destroyHooks=[]);if(!i&&e.multi){let l=c.indexOf(r);l===-1?c.push(r,[n,u]):c[l+1].push(n,u)}else c.push(r,u)}}}function fp(t,e,r){return r&&t.componentProviders++,t.multi.push(e)-1}function Fa(t,e,r,n){for(let i=r;i<n;i++)if(e[i]===t)return i;return-1}function Py(t,e,r,n){return Au(this.multi,[])}function ky(t,e,r,n){let i=this.multi,o;if(this.providerFactory){let s=this.providerFactory.componentProviders,a=bn(r,r[j],this.providerFactory.index,n);o=a.slice(0,s),Au(i,o);for(let u=s;u<a.length;u++)o.push(a[u])}else o=[],Au(i,o);return o}function Au(t,e){for(let r=0;r<t.length;r++){let n=t[r];e.push(n())}return e}function Vy(t,e,r,n,i){let o=new wn(t,r,L);return o.multi=[],o.index=e,o.componentProviders=0,fp(o,i,n&&!r),o}function sn(t,e=[]){return r=>{r.providersResolver=(n,i)=>Fy(n,i?i(t):t,e)}}var Xt=class{},Gr=class{};var xu=class extends Xt{constructor(e,r,n){super(),this._parent=r,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new No(this);let i=wf(e);this._bootstrapComponents=dh(i.bootstrap),this._r3Injector=ch(e,r,[{provide:Xt,useValue:this},{provide:Wo,useValue:this.componentFactoryResolver},...n],Ze(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(r=>r()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},Su=class extends Gr{constructor(e){super(),this.moduleType=e}create(e){return new xu(this.moduleType,e,[])}};var Fo=class extends Xt{constructor(e){super(),this.componentFactoryResolver=new No(this),this.instance=null;let r=new Ao([...e.providers,{provide:Xt,useValue:this},{provide:Wo,useValue:this.componentFactoryResolver}],e.parent||Xu(),e.debugName,new Set(["environment"]));this.injector=r,e.runEnvironmentInitializers&&r.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function yc(t,e,r=null){return new Fo({providers:t,parent:e,debugName:r,runEnvironmentInitializers:!0}).injector}var jy=(()=>{let e=class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n)){let i=oh(!1,n.type),o=i.length>0?yc([i],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n,o)}return this.cachedInjectors.get(n)}ngOnDestroy(){try{for(let n of this.cachedInjectors.values())n!==null&&n.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=M({token:e,providedIn:"environment",factory:()=>new e(N(rt))});let t=e;return t})();function Ce(t){Ko("NgStandalone"),t.getStandaloneInjector=e=>e.get(jy).getOrCreateStandaloneInjector(t)}function hp(t,e,r){let n=Bo()+t,i=te();return i[n]===rn?Jo(i,n,r?e.call(r):e()):Yv(i,n)}function qt(t,e,r,n){return Qy(te(),Bo(),t,e,r,n)}function pp(t,e,r,n,i){return By(te(),Bo(),t,e,r,n,i)}function gp(t,e,r,n,i,o){return $y(te(),Bo(),t,e,r,n,i,o)}function Cc(t,e){let r=t[e];return r===rn?void 0:r}function Qy(t,e,r,n,i,o){let s=e+r;return jt(t,s,i)?Jo(t,s+1,o?n.call(o,i):n(i)):Cc(t,s+1)}function By(t,e,r,n,i,o,s){let a=e+r;return op(t,a,i,o)?Jo(t,a+2,s?n.call(s,i,o):n(i,o)):Cc(t,a+2)}function $y(t,e,r,n,i,o,s,a){let u=e+r;return Kv(t,u,i,o,s)?Jo(t,u+3,a?n.call(a,i,o,s):n(i,o,s)):Cc(t,u+3)}function Uy(){return this._results[Symbol.iterator]()}var Tu=class t{get changes(){return this._changes||(this._changes=new de)}constructor(e=!1){this._emitDistinctChangesOnly=e,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;let r=t.prototype;r[Symbol.iterator]||(r[Symbol.iterator]=Uy)}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,r){return this._results.reduce(e,r)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,r){this.dirty=!1;let n=M1(e);(this._changesDetected=!_1(this._results,n,r))&&(this._results=n,this.length=n.length,this.last=n[this.length-1],this.first=n[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}},zr=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=zy;let t=e;return t})(),Hy=zr,Gy=class extends Hy{constructor(e,r,n){super(),this._declarationLView=e,this._declarationTContainer=r,this.elementRef=n}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,r){return this.createEmbeddedViewImpl(e,r)}createEmbeddedViewImpl(e,r,n){let i=es(this._declarationLView,this._declarationTContainer,e,{injector:r,dehydratedView:n});return new _n(i)}};function zy(){return Dc(ot(),te())}function Dc(t,e){return t.type&4?new Gy(e,t,cr(t,e)):null}var Nu=class t{constructor(e){this.queryList=e,this.matches=null}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Ou=class t{constructor(e=[]){this.queries=e}createEmbeddedView(e){let r=e.queries;if(r!==null){let n=e.contentQueries!==null?e.contentQueries[0]:r.length,i=[];for(let o=0;o<n;o++){let s=r.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new t(i)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let r=0;r<this.queries.length;r++)yp(e,r).matches!==null&&this.queries[r].setDirty()}},Lu=class{constructor(e,r,n=null){this.predicate=e,this.flags=r,this.read=n}},Ru=class t{constructor(e=[]){this.queries=e}elementStart(e,r){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(e,r)}elementEnd(e){for(let r=0;r<this.queries.length;r++)this.queries[r].elementEnd(e)}embeddedTView(e){let r=null;for(let n=0;n<this.length;n++){let i=r!==null?r.length:0,o=this.getByIndex(n).embeddedTView(e,i);o&&(o.indexInDeclarationView=n,r!==null?r.push(o):r=[o])}return r!==null?new t(r):null}template(e,r){for(let n=0;n<this.queries.length;n++)this.queries[n].template(e,r)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Fu=class t{constructor(e,r=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=r}elementStart(e,r){this.isApplyingToNode(r)&&this.matchTNode(e,r)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,r){this.elementStart(e,r)}embeddedTView(e,r){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,r),new t(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let r=this._declarationNodeIndex,n=e.parent;for(;n!==null&&n.type&8&&n.index!==r;)n=n.parent;return r===(n!==null?n.index:-1)}return this._appliesToNextNode}matchTNode(e,r){let n=this.metadata.predicate;if(Array.isArray(n))for(let i=0;i<n.length;i++){let o=n[i];this.matchTNodeWithReadOption(e,r,Wy(r,o)),this.matchTNodeWithReadOption(e,r,ho(r,e,o,!1,!1))}else n===zr?r.type&4&&this.matchTNodeWithReadOption(e,r,-1):this.matchTNodeWithReadOption(e,r,ho(r,e,n,!1,!1))}matchTNodeWithReadOption(e,r,n){if(n!==null){let i=this.metadata.read;if(i!==null)if(i===Qe||i===dr||i===zr&&r.type&4)this.addMatch(r.index,-2);else{let o=ho(r,e,i,!1,!1);o!==null&&this.addMatch(r.index,o)}else this.addMatch(r.index,n)}}addMatch(e,r){this.matches===null?this.matches=[e,r]:this.matches.push(e,r)}};function Wy(t,e){let r=t.localNames;if(r!==null){for(let n=0;n<r.length;n+=2)if(r[n]===e)return r[n+1]}return null}function qy(t,e){return t.type&11?cr(t,e):t.type&4?Dc(t,e):null}function Zy(t,e,r,n){return r===-1?qy(e,t):r===-2?Yy(t,e,n):bn(t,t[j],r,e)}function Yy(t,e,r){if(r===Qe)return cr(e,t);if(r===zr)return Dc(e,t);if(r===dr)return lp(e,t)}function mp(t,e,r,n){let i=e[It].queries[n];if(i.matches===null){let o=t.data,s=r.matches,a=[];for(let u=0;u<s.length;u+=2){let c=s[u];if(c<0)a.push(null);else{let l=o[c];a.push(Zy(e,l,s[u+1],r.metadata.read))}}i.matches=a}return i.matches}function Pu(t,e,r,n){let i=t.queries.getByIndex(r),o=i.matches;if(o!==null){let s=mp(t,e,i,r);for(let a=0;a<o.length;a+=2){let u=o[a];if(u>0)n.push(s[a/2]);else{let c=o[a+1],l=e[-u];for(let d=He;d<l.length;d++){let f=l[d];f[qr]===f[Ie]&&Pu(f[j],f,c,n)}if(l[er]!==null){let d=l[er];for(let f=0;f<d.length;f++){let h=d[f];Pu(h[j],h,c,n)}}}}}return n}function wc(t){let e=te(),r=it(),n=kf();Uu(n+1);let i=yp(r,n);if(t.dirty&&Qm(e)===((i.metadata.flags&2)===2)){if(i.matches===null)t.reset([]);else{let o=i.crossesNgTemplate?Pu(r,e,n,[]):mp(r,e,i,n);t.reset(o,V2),t.notifyOnChanges()}return!0}return!1}function vp(t,e,r){let n=it();n.firstCreatePass&&(Xy(n,new Lu(t,e,r),-1),(e&2)===2&&(n.staticViewQueries=!0)),Jy(n,te(),e)}function bc(){return Ky(te(),kf())}function Ky(t,e){return t[It].queries[e].queryList}function Jy(t,e,r){let n=new Tu((r&4)===4);tv(t,e,n,n.destroy),e[It]===null&&(e[It]=new Ou),e[It].queries.push(new Nu(n))}function Xy(t,e,r){t.queries===null&&(t.queries=new Ru),t.queries.track(new Fu(e,r))}function yp(t,e){return t.queries.getByIndex(e)}var Cp=new F("Application Initializer"),Dp=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((n,i)=>{this.resolve=n,this.reject=i}),this.appInits=w(Cp,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let n=[];for(let o of this.appInits){let s=o();if(Sn(s))n.push(s);else if(dp(s)){let a=new Promise((u,c)=>{s.subscribe({complete:u,error:c})});n.push(a)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(n).then(()=>{i()}).catch(o=>{this.reject(o)}),n.length===0&&i(),this.initialized=!0}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),os=(()=>{let e=class e{log(n){console.log(n)}warn(n){console.warn(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"platform"});let t=e;return t})();function e3(){return typeof $localize<"u"&&$localize.locale||Ro}var Ec=new F("LocaleId",{providedIn:"root",factory:()=>w(Ec,W.Optional|W.SkipSelf)||e3()});var Ic=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Te(!1)}add(){this.hasPendingTasks.next(!0);let n=this.taskId++;return this.pendingTasks.add(n),n}remove(n){this.pendingTasks.delete(n),this.pendingTasks.size===0&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks.next(!1)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ku=class{constructor(e,r){this.ngModuleFactory=e,this.componentFactories=r}},_c=(()=>{let e=class e{compileModuleSync(n){return new Su(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){let i=this.compileModuleSync(n),o=wf(n),s=dh(o.declarations).reduce((a,u)=>{let c=vn(u);return c&&a.push(new Br(c)),a},[]);return new ku(i,s)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var wp=new F("");var mo=null;var bp=new F("PlatformDestroyListeners"),Mc=new F("appBootstrapListener");function t3(){Wl(()=>{throw new E(600,!1)})}function n3(t){return t.isBoundToModule}function r3(t=[]){if(mo)return mo;let e=o3(t);return mo=e,t3(),i3(e),e}function i3(t){t.get(tc,null)?.forEach(r=>r())}function Ep(t){try{let{rootComponent:e,appProviders:r,platformProviders:n}=t,i=r3(n),o=[d3(),...r||[]],a=new Fo({providers:o,parent:i,debugName:"",runEnvironmentInitializers:!1}).injector,u=a.get(Ee);return u.run(()=>{a.resolveInjectorInitializers();let c=a.get(Vt,null),l;u.runOutsideAngular(()=>{l=u.onError.subscribe({next:h=>{c.handleError(h)}})});let d=()=>a.destroy(),f=i.get(bp);return f.add(d),a.onDestroy(()=>{l.unsubscribe(),f.delete(d)}),a3(c,u,()=>{let h=a.get(Dp);return h.runInitializers(),h.donePromise.then(()=>{let p=a.get(Ec,Ro);Ny(p||Ro);let C=a.get(ei);return e!==void 0&&C.bootstrap(e),C})})})}catch(e){return Promise.reject(e)}}function o3(t=[],e){return tn.create({name:e,providers:[{provide:Ho,useValue:"platform"},{provide:bp,useValue:new Set([()=>mo=null])},...t]})}function s3(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}function a3(t,e,r){try{let n=r();return Sn(n)?n.catch(i=>{throw e.runOutsideAngular(()=>t.handleError(i)),i}):n}catch(n){throw e.runOutsideAngular(()=>t.handleError(n)),n}}var ei=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=w(Ip),this.zoneIsStable=w(rp),this.componentTypes=[],this.components=[],this.isStable=w(Ic).hasPendingTasks.pipe(ke(n=>n?R(!1):this.zoneIsStable),ga(),ro()),this._injector=w(rt)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,i){let o=n instanceof So;if(!this._injector.get(Dp).done){let p="Cannot bootstrap as there are still asynchronous initializers running."+(!o&&Df(n)?"":" Bootstrap components in the `ngDoBootstrap` method of the root module.");throw new E(405,!1)}let a;o?a=n:a=this._injector.get(Wo).resolveComponentFactory(n),this.componentTypes.push(a.componentType);let u=n3(a)?void 0:this._injector.get(Xt),c=i||a.selector,l=a.create(tn.NULL,[],c,u),d=l.location.nativeElement,f=l.injector.get(wp,null);return f?.registerApplication(d),l.onDestroy(()=>{this.detachView(l.hostView),Pa(this.components,l),f?.unregisterApplication(d)}),this._loadComponent(l),l}tick(){if(this._runningTick)throw new E(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this.internalErrorHandler(n)}finally{this._runningTick=!1}}attachView(n){let i=n;this._views.push(i),i.attachToAppRef(this)}detachView(n){let i=n;Pa(this._views,i),i.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n);let i=this._injector.get(Mc,[]);[...this._bootstrapListeners,...i].forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Pa(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new E(406,!1);let n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Pa(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}var Ip=new F("",{providedIn:"root",factory:()=>w(Vt).handleError.bind(void 0)});function u3(){let t=w(Ee),e=w(Vt);return r=>t.runOutsideAngular(()=>e.handleError(r))}var c3=(()=>{let e=class e{constructor(){this.zone=w(Ee),this.applicationRef=w(ei)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function l3(t){return[{provide:Ee,useFactory:t},{provide:Kr,multi:!0,useFactory:()=>{let e=w(c3,{optional:!0});return()=>e.initialize()}},{provide:Ip,useFactory:u3},{provide:rp,useFactory:ip}]}function d3(t){let e=l3(()=>new Ee(s3(t)));return Uo([[],e])}var Ac=null;function Zt(){return Ac}function xp(t){Ac||(Ac=t)}var ss=class{},Le=new F("DocumentToken"),Sp=(()=>{let e=class e{historyGo(n){throw new Error("Not implemented")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>(()=>w(p3))(),providedIn:"platform"});let t=e;return t})();var p3=(()=>{let e=class e extends Sp{constructor(){super(),this._doc=w(Le),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Zt().getBaseHref(this._doc)}onPopState(n){let i=Zt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=Zt().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,o){this._history.pushState(n,i,o)}replaceState(n,i,o){this._history.replaceState(n,i,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>(()=>new e)(),providedIn:"platform"});let t=e;return t})();function Tp(t,e){if(t.length==0)return e;if(e.length==0)return t;let r=0;return t.endsWith("/")&&r++,e.startsWith("/")&&r++,r==2?t+e.substring(1):r==1?t+e:t+"/"+e}function _p(t){let e=t.match(/#|\?|$/),r=e&&e.index||t.length,n=r-(t[r-1]==="/"?1:0);return t.slice(0,n)+t.slice(r)}function Tn(t){return t&&t[0]!=="?"?"?"+t:t}var us=(()=>{let e=class e{historyGo(n){throw new Error("Not implemented")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>(()=>w(Np))(),providedIn:"root"});let t=e;return t})(),g3=new F("appBaseHref"),Np=(()=>{let e=class e extends us{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??w(Le).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Tp(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+Tn(this._platformLocation.search),o=this._platformLocation.hash;return o&&n?`${i}${o}`:i}pushState(n,i,o,s){let a=this.prepareExternalUrl(o+Tn(s));this._platformLocation.pushState(n,i,a)}replaceState(n,i,o,s){let a=this.prepareExternalUrl(o+Tn(s));this._platformLocation.replaceState(n,i,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(N(Sp),N(g3,8))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ti=(()=>{let e=class e{constructor(n){this._subject=new de,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=y3(_p(Mp(i))),this._locationStrategy.onPopState(o=>{this._subject.emit({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+Tn(i))}normalize(n){return e.stripTrailingSlash(v3(this._basePath,Mp(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",o=null){this._locationStrategy.pushState(o,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Tn(i)),o)}replaceState(n,i="",o=null){this._locationStrategy.replaceState(o,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+Tn(i)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)})),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(o=>o(n,i))}subscribe(n,i,o){return this._subject.subscribe({next:n,error:i,complete:o})}};e.normalizeQueryParams=Tn,e.joinWithSlash=Tp,e.stripTrailingSlash=_p,e.\u0275fac=function(i){return new(i||e)(N(us))},e.\u0275prov=M({token:e,factory:()=>m3(),providedIn:"root"});let t=e;return t})();function m3(){return new ti(N(us))}function v3(t,e){if(!t||!e.startsWith(t))return e;let r=e.substring(t.length);return r===""||["/",";","?","#"].includes(r[0])?r:e}function Mp(t){return t.replace(/\/index.html$/,"")}function y3(t){if(new RegExp("^(https?:)?//").test(t)){let[,r]=t.split(/\/\/[^\/]+/);return r}return t}function Op(t,e){e=encodeURIComponent(e);for(let r of t.split(";")){let n=r.indexOf("="),[i,o]=n==-1?[r,""]:[r.slice(0,n),r.slice(n+1)];if(i.trim()===e)return decodeURIComponent(o)}return null}var an=(()=>{let e=class e{constructor(n,i,o){this._ngEl=n,this._differs=i,this._renderer=o,this._ngStyle=null,this._differ=null}set ngStyle(n){this._ngStyle=n,!this._differ&&n&&(this._differ=this._differs.find(n).create())}ngDoCheck(){if(this._differ){let n=this._differ.diff(this._ngStyle);n&&this._applyChanges(n)}}_setStyle(n,i){let[o,s]=n.split("."),a=o.indexOf("-")===-1?void 0:At.DashCase;i!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,s?`${i}${s}`:i,a):this._renderer.removeStyle(this._ngEl.nativeElement,o,a)}_applyChanges(n){n.forEachRemovedItem(i=>this._setStyle(i.key,null)),n.forEachAddedItem(i=>this._setStyle(i.key,i.currentValue)),n.forEachChangedItem(i=>this._setStyle(i.key,i.currentValue))}};e.\u0275fac=function(i){return new(i||e)(L(Qe),L(lc),L(Wt))},e.\u0275dir=ye({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0});let t=e;return t})();var we=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Bt({type:e}),e.\u0275inj=Qt({});let t=e;return t})(),xc="browser",C3="server";function cs(t){return t===xc}function Sc(t){return t===C3}var as=class{};var Oc=class extends ss{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Lc=class t extends Oc{static makeCurrent(){xp(new t)}onAndCancel(e,r,n){return e.addEventListener(r,n),()=>{e.removeEventListener(r,n)}}dispatchEvent(e,r){e.dispatchEvent(r)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,r){return r=r||this.getDefaultDocument(),r.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,r){return r==="window"?window:r==="document"?e:r==="body"?e.body:null}getBaseHref(e){let r=D3();return r==null?null:w3(r)}resetBaseElement(){ni=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Op(document.cookie,e)}},ni=null;function D3(){return ni=ni||document.querySelector("base"),ni?ni.getAttribute("href"):null}var ds;function w3(t){ds=ds||document.createElement("a"),ds.setAttribute("href",t);let e=ds.pathname;return e.charAt(0)==="/"?e:`/${e}`}var b3=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac});let t=e;return t})(),Rc=new F("EventManagerPlugins"),Pp=(()=>{let e=class e{constructor(n,i){this._zone=i,this._eventNameToPlugin=new Map,n.forEach(o=>{o.manager=this}),this._plugins=n.slice().reverse()}addEventListener(n,i,o){return this._findPluginFor(i).addEventListener(n,i,o)}getZone(){return this._zone}_findPluginFor(n){let i=this._eventNameToPlugin.get(n);if(i)return i;if(i=this._plugins.find(s=>s.supports(n)),!i)throw new E(5101,!1);return this._eventNameToPlugin.set(n,i),i}};e.\u0275fac=function(i){return new(i||e)(N(Rc),N(Ee))},e.\u0275prov=M({token:e,factory:e.\u0275fac});let t=e;return t})(),fs=class{constructor(e){this._doc=e}},Tc="ng-app-id",kp=(()=>{let e=class e{constructor(n,i,o,s={}){this.doc=n,this.appId=i,this.nonce=o,this.platformId=s,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Sc(s),this.resetHostNodes()}addStyles(n){for(let i of n)this.changeUsageCount(i,1)===1&&this.onStyleAdded(i)}removeStyles(n){for(let i of n)this.changeUsageCount(i,-1)<=0&&this.onStyleRemoved(i)}ngOnDestroy(){let n=this.styleNodesInDOM;n&&(n.forEach(i=>i.remove()),n.clear());for(let i of this.getAllStyles())this.onStyleRemoved(i);this.resetHostNodes()}addHost(n){this.hostNodes.add(n);for(let i of this.getAllStyles())this.addStyleToHost(n,i)}removeHost(n){this.hostNodes.delete(n)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(n){for(let i of this.hostNodes)this.addStyleToHost(i,n)}onStyleRemoved(n){let i=this.styleRef;i.get(n)?.elements?.forEach(o=>o.remove()),i.delete(n)}collectServerRenderedStyles(){let n=this.doc.head?.querySelectorAll(`style[${Tc}="${this.appId}"]`);if(n?.length){let i=new Map;return n.forEach(o=>{o.textContent!=null&&i.set(o.textContent,o)}),i}return null}changeUsageCount(n,i){let o=this.styleRef;if(o.has(n)){let s=o.get(n);return s.usage+=i,s.usage}return o.set(n,{usage:i,elements:[]}),i}getStyleElement(n,i){let o=this.styleNodesInDOM,s=o?.get(i);if(s?.parentNode===n)return o.delete(i),s.removeAttribute(Tc),s;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=i,this.platformIsServer&&a.setAttribute(Tc,this.appId),n.appendChild(a),a}}addStyleToHost(n,i){let o=this.getStyleElement(n,i),s=this.styleRef,a=s.get(i)?.elements;a?a.push(o):s.set(i,{elements:[o],usage:1})}resetHostNodes(){let n=this.hostNodes;n.clear(),n.add(this.doc.head)}};e.\u0275fac=function(i){return new(i||e)(N(Le),N(ec),N(nc,8),N(Gt))},e.\u0275prov=M({token:e,factory:e.\u0275fac});let t=e;return t})(),Nc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Pc=/%COMP%/g,Vp="%COMP%",E3=`_nghost-${Vp}`,I3=`_ngcontent-${Vp}`,_3=!0,M3=new F("RemoveStylesOnCompDestroy",{providedIn:"root",factory:()=>_3});function A3(t){return I3.replace(Pc,t)}function x3(t){return E3.replace(Pc,t)}function jp(t,e){return e.map(r=>r.replace(Pc,t))}var Lp=(()=>{let e=class e{constructor(n,i,o,s,a,u,c,l=null){this.eventManager=n,this.sharedStylesHost=i,this.appId=o,this.removeStylesOnCompDestroy=s,this.doc=a,this.platformId=u,this.ngZone=c,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=Sc(u),this.defaultRenderer=new ri(n,a,c,this.platformIsServer)}createRenderer(n,i){if(!n||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===_t.ShadowDom&&(i=se(D({},i),{encapsulation:_t.Emulated}));let o=this.getOrCreateRenderer(n,i);return o instanceof hs?o.applyToHost(n):o instanceof ii&&o.applyStyles(),o}getOrCreateRenderer(n,i){let o=this.rendererByCompId,s=o.get(i.id);if(!s){let a=this.doc,u=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.platformIsServer;switch(i.encapsulation){case _t.Emulated:s=new hs(c,l,i,this.appId,d,a,u,f);break;case _t.ShadowDom:return new Fc(c,l,n,i,a,u,this.nonce,f);default:s=new ii(c,l,i,d,a,u,f);break}o.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(i){return new(i||e)(N(Pp),N(kp),N(ec),N(M3),N(Le),N(Gt),N(Ee),N(nc))},e.\u0275prov=M({token:e,factory:e.\u0275fac});let t=e;return t})(),ri=class{constructor(e,r,n,i){this.eventManager=e,this.doc=r,this.ngZone=n,this.platformIsServer=i,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,r){return r?this.doc.createElementNS(Nc[r]||r,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,r){(Rp(e)?e.content:e).appendChild(r)}insertBefore(e,r,n){e&&(Rp(e)?e.content:e).insertBefore(r,n)}removeChild(e,r){e&&e.removeChild(r)}selectRootElement(e,r){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new E(-5104,!1);return r||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,r,n,i){if(i){r=i+":"+r;let o=Nc[i];o?e.setAttributeNS(o,r,n):e.setAttribute(r,n)}else e.setAttribute(r,n)}removeAttribute(e,r,n){if(n){let i=Nc[n];i?e.removeAttributeNS(i,r):e.removeAttribute(`${n}:${r}`)}else e.removeAttribute(r)}addClass(e,r){e.classList.add(r)}removeClass(e,r){e.classList.remove(r)}setStyle(e,r,n,i){i&(At.DashCase|At.Important)?e.style.setProperty(r,n,i&At.Important?"important":""):e.style[r]=n}removeStyle(e,r,n){n&At.DashCase?e.style.removeProperty(r):e.style[r]=""}setProperty(e,r,n){e!=null&&(e[r]=n)}setValue(e,r){e.nodeValue=r}listen(e,r,n){if(typeof e=="string"&&(e=Zt().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${r}`);return this.eventManager.addEventListener(e,r,this.decoratePreventDefault(n))}decoratePreventDefault(e){return r=>{if(r==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(r)):e(r))===!1&&r.preventDefault()}}};function Rp(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var Fc=class extends ri{constructor(e,r,n,i,o,s,a,u){super(e,o,s,u),this.sharedStylesHost=r,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=jp(i.id,i.styles);for(let l of c){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=l,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,r){return super.appendChild(this.nodeOrShadowRoot(e),r)}insertBefore(e,r,n){return super.insertBefore(this.nodeOrShadowRoot(e),r,n)}removeChild(e,r){return super.removeChild(this.nodeOrShadowRoot(e),r)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ii=class extends ri{constructor(e,r,n,i,o,s,a,u){super(e,o,s,a),this.sharedStylesHost=r,this.removeStylesOnCompDestroy=i,this.styles=u?jp(u,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},hs=class extends ii{constructor(e,r,n,i,o,s,a,u){let c=i+"-"+n.id;super(e,r,n,o,s,a,u,c),this.contentAttr=A3(c),this.hostAttr=x3(c)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,r){let n=super.createElement(e,r);return super.setAttribute(n,this.contentAttr,""),n}},S3=(()=>{let e=class e extends fs{constructor(n){super(n)}supports(n){return!0}addEventListener(n,i,o){return n.addEventListener(i,o,!1),()=>this.removeEventListener(n,i,o)}removeEventListener(n,i,o){return n.removeEventListener(i,o)}};e.\u0275fac=function(i){return new(i||e)(N(Le))},e.\u0275prov=M({token:e,factory:e.\u0275fac});let t=e;return t})(),Fp=["alt","control","meta","shift"],T3={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},N3={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},O3=(()=>{let e=class e extends fs{constructor(n){super(n)}supports(n){return e.parseEventName(n)!=null}addEventListener(n,i,o){let s=e.parseEventName(i),a=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Zt().onAndCancel(n,s.domEventName,a))}static parseEventName(n){let i=n.toLowerCase().split("."),o=i.shift();if(i.length===0||!(o==="keydown"||o==="keyup"))return null;let s=e._normalizeKey(i.pop()),a="",u=i.indexOf("code");if(u>-1&&(i.splice(u,1),a="code."),Fp.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),a+=l+".")}),a+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=o,c.fullKey=a,c}static matchEventFullKeyCode(n,i){let o=T3[n.key]||n.key,s="";return i.indexOf("code.")>-1&&(o=n.code,s="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Fp.forEach(a=>{if(a!==o){let u=N3[a];u(n)&&(s+=a+".")}}),s+=o,s===i)}static eventCallback(n,i,o){return s=>{e.matchEventFullKeyCode(s,n)&&o.runGuarded(()=>i(s))}}static _normalizeKey(n){return n==="esc"?"escape":n}};e.\u0275fac=function(i){return new(i||e)(N(Le))},e.\u0275prov=M({token:e,factory:e.\u0275fac});let t=e;return t})();function Qp(t,e){return Ep(D({rootComponent:t},L3(e)))}function L3(t){return{appProviders:[...V3,...t?.providers??[]],platformProviders:k3}}function R3(){Lc.makeCurrent()}function F3(){return new Vt}function P3(){return lh(document),document}var k3=[{provide:Gt,useValue:xc},{provide:tc,useValue:R3,multi:!0},{provide:Le,useFactory:P3,deps:[]}];var V3=[{provide:Ho,useValue:"root"},{provide:Vt,useFactory:F3,deps:[]},{provide:Rc,useClass:S3,multi:!0,deps:[Le,Ee,Gt]},{provide:Rc,useClass:O3,multi:!0,deps:[Le]},Lp,kp,Pp,{provide:Qr,useExisting:Lp},{provide:as,useClass:b3,deps:[]},[]];function j3(){return new kc(N(Le))}var kc=(()=>{let e=class e{constructor(n){this._doc=n}getTitle(){return this._doc.title}setTitle(n){this._doc.title=n||""}};e.\u0275fac=function(i){return new(i||e)(N(Le))},e.\u0275prov=M({token:e,factory:function(i){let o=null;return i?o=new i:o=j3(),o},providedIn:"root"});let t=e;return t})();var Vc=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:function(i){let o=null;return i?o=new(i||e):o=N(Bp),o},providedIn:"root"});let t=e;return t})();function Q3(t){return new Bp(t.get(Le))}var Bp=(()=>{let e=class e extends Vc{constructor(n){super(),this._doc=n}sanitize(n,i){if(i==null)return null;switch(n){case Nt.NONE:return i;case Nt.HTML:return ur(i,"HTML")?nn(i):Oh(this._doc,String(i)).toString();case Nt.STYLE:return ur(i,"Style")?nn(i):i;case Nt.SCRIPT:if(ur(i,"Script"))return nn(i);throw new E(5200,!1);case Nt.URL:return ur(i,"URL")?nn(i):uc(String(i));case Nt.RESOURCE_URL:if(ur(i,"ResourceURL"))return nn(i);throw new E(5201,!1);default:throw new E(5202,!1)}}bypassSecurityTrustHtml(n){return Eh(n)}bypassSecurityTrustStyle(n){return Ih(n)}bypassSecurityTrustScript(n){return _h(n)}bypassSecurityTrustUrl(n){return Mh(n)}bypassSecurityTrustResourceUrl(n){return Ah(n)}};e.\u0275fac=function(i){return new(i||e)(N(Le))},e.\u0275prov=M({token:e,factory:function(i){let o=null;return i?o=new i:o=Q3(N(tn)),o},providedIn:"root"});let t=e;return t})();var B="primary",Ci=Symbol("RouteTitle"),Uc=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let r=this.params[e];return Array.isArray(r)?r[0]:r}return null}getAll(e){if(this.has(e)){let r=this.params[e];return Array.isArray(r)?r:[r]}return[]}get keys(){return Object.keys(this.params)}};function vr(t){return new Uc(t)}function $3(t,e,r){let n=r.path.split("/");if(n.length>t.length||r.pathMatch==="full"&&(e.hasChildren()||n.length<t.length))return null;let i={};for(let o=0;o<n.length;o++){let s=n[o],a=t[o];if(s.startsWith(":"))i[s.substring(1)]=a;else if(s!==a.path)return null}return{consumed:t.slice(0,n.length),posParams:i}}function U3(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;++r)if(!Ot(t[r],e[r]))return!1;return!0}function Ot(t,e){let r=t?Hc(t):void 0,n=e?Hc(e):void 0;if(!r||!n||r.length!=n.length)return!1;let i;for(let o=0;o<r.length;o++)if(i=r[o],!Zp(t[i],e[i]))return!1;return!0}function Hc(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Zp(t,e){if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;let r=[...t].sort(),n=[...e].sort();return r.every((i,o)=>n[o]===i)}else return t===e}function Yp(t){return t.length>0?t[t.length-1]:null}function ln(t){return la(t)?t:Sn(t)?oe(Promise.resolve(t)):R(t)}var H3={exact:Jp,subset:Xp},Kp={exact:G3,subset:z3,ignored:()=>!0};function Up(t,e,r){return H3[r.paths](t.root,e.root,r.matrixParams)&&Kp[r.queryParams](t.queryParams,e.queryParams)&&!(r.fragment==="exact"&&t.fragment!==e.fragment)}function G3(t,e){return Ot(t,e)}function Jp(t,e,r){if(!On(t.segments,e.segments)||!ms(t.segments,e.segments,r)||t.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!t.children[n]||!Jp(t.children[n],e.children[n],r))return!1;return!0}function z3(t,e){return Object.keys(e).length<=Object.keys(t).length&&Object.keys(e).every(r=>Zp(t[r],e[r]))}function Xp(t,e,r){return eg(t,e,e.segments,r)}function eg(t,e,r,n){if(t.segments.length>r.length){let i=t.segments.slice(0,r.length);return!(!On(i,r)||e.hasChildren()||!ms(i,r,n))}else if(t.segments.length===r.length){if(!On(t.segments,r)||!ms(t.segments,r,n))return!1;for(let i in e.children)if(!t.children[i]||!Xp(t.children[i],e.children[i],n))return!1;return!0}else{let i=r.slice(0,t.segments.length),o=r.slice(t.segments.length);return!On(t.segments,i)||!ms(t.segments,i,n)||!t.children[B]?!1:eg(t.children[B],e,o,n)}}function ms(t,e,r){return e.every((n,i)=>Kp[r](t[i].parameters,n.parameters))}var un=class{constructor(e=new ne([],{}),r={},n=null){this.root=e,this.queryParams=r,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=vr(this.queryParams)),this._queryParamMap}toString(){return Z3.serialize(this)}},ne=class{constructor(e,r){this.segments=e,this.children=r,this.parent=null,Object.values(r).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return vs(this)}},Nn=class{constructor(e,r){this.path=e,this.parameters=r}get parameterMap(){return this._parameterMap||(this._parameterMap=vr(this.parameters)),this._parameterMap}toString(){return ng(this)}};function W3(t,e){return On(t,e)&&t.every((r,n)=>Ot(r.parameters,e[n].parameters))}function On(t,e){return t.length!==e.length?!1:t.every((r,n)=>r.path===e[n].path)}function q3(t,e){let r=[];return Object.entries(t.children).forEach(([n,i])=>{n===B&&(r=r.concat(e(i,n)))}),Object.entries(t.children).forEach(([n,i])=>{n!==B&&(r=r.concat(e(i,n)))}),r}var gl=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>(()=>new Cs)(),providedIn:"root"});let t=e;return t})(),Cs=class{parse(e){let r=new zc(e);return new un(r.parseRootSegment(),r.parseQueryParams(),r.parseFragment())}serialize(e){let r=`/${oi(e.root,!0)}`,n=J3(e.queryParams),i=typeof e.fragment=="string"?`#${Y3(e.fragment)}`:"";return`${r}${n}${i}`}},Z3=new Cs;function vs(t){return t.segments.map(e=>ng(e)).join("/")}function oi(t,e){if(!t.hasChildren())return vs(t);if(e){let r=t.children[B]?oi(t.children[B],!1):"",n=[];return Object.entries(t.children).forEach(([i,o])=>{i!==B&&n.push(`${i}:${oi(o,!1)}`)}),n.length>0?`${r}(${n.join("//")})`:r}else{let r=q3(t,(n,i)=>i===B?[oi(t.children[B],!1)]:[`${i}:${oi(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[B]!=null?`${vs(t)}/${r[0]}`:`${vs(t)}/(${r.join("//")})`}}function tg(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ps(t){return tg(t).replace(/%3B/gi,";")}function Y3(t){return encodeURI(t)}function Gc(t){return tg(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ys(t){return decodeURIComponent(t)}function Hp(t){return ys(t.replace(/\+/g,"%20"))}function ng(t){return`${Gc(t.path)}${K3(t.parameters)}`}function K3(t){return Object.keys(t).map(e=>`;${Gc(e)}=${Gc(t[e])}`).join("")}function J3(t){let e=Object.keys(t).map(r=>{let n=t[r];return Array.isArray(n)?n.map(i=>`${ps(r)}=${ps(i)}`).join("&"):`${ps(r)}=${ps(n)}`}).filter(r=>!!r);return e.length?`?${e.join("&")}`:""}var X3=/^[^\/()?;#]+/;function jc(t){let e=t.match(X3);return e?e[0]:""}var eC=/^[^\/()?;=#]+/;function tC(t){let e=t.match(eC);return e?e[0]:""}var nC=/^[^=?&#]+/;function rC(t){let e=t.match(nC);return e?e[0]:""}var iC=/^[^&#]+/;function oC(t){let e=t.match(iC);return e?e[0]:""}var zc=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new ne([],{}):new ne([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let r={};this.peekStartsWith("/(")&&(this.capture("/"),r=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(r).length>0)&&(n[B]=new ne(e,r)),n}parseSegment(){let e=jc(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new E(4009,!1);return this.capture(e),new Nn(ys(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let r=tC(this.remaining);if(!r)return;this.capture(r);let n="";if(this.consumeOptional("=")){let i=jc(this.remaining);i&&(n=i,this.capture(n))}e[ys(r)]=ys(n)}parseQueryParam(e){let r=rC(this.remaining);if(!r)return;this.capture(r);let n="";if(this.consumeOptional("=")){let s=oC(this.remaining);s&&(n=s,this.capture(n))}let i=Hp(r),o=Hp(n);if(e.hasOwnProperty(i)){let s=e[i];Array.isArray(s)||(s=[s],e[i]=s),s.push(o)}else e[i]=o}parseParens(e){let r={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=jc(this.remaining),i=this.remaining[n.length];if(i!=="/"&&i!==")"&&i!==";")throw new E(4010,!1);let o;n.indexOf(":")>-1?(o=n.slice(0,n.indexOf(":")),this.capture(o),this.capture(":")):e&&(o=B);let s=this.parseChildren();r[o]=Object.keys(s).length===1?s[B]:new ne([],s),this.consumeOptional("//")}return r}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new E(4011,!1)}};function rg(t){return t.segments.length>0?new ne([],{[B]:t}):t}function ig(t){let e={};for(let n of Object.keys(t.children)){let i=t.children[n],o=ig(i);if(n===B&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))e[s]=a;else(o.segments.length>0||o.hasChildren())&&(e[n]=o)}let r=new ne(t.segments,e);return sC(r)}function sC(t){if(t.numberOfChildren===1&&t.children[B]){let e=t.children[B];return new ne(t.segments.concat(e.segments),e.children)}return t}function yr(t){return t instanceof un}function aC(t,e,r=null,n=null){let i=og(t);return sg(i,e,r,n)}function og(t){let e;function r(o){let s={};for(let u of o.children){let c=r(u);s[u.outlet]=c}let a=new ne(o.url,s);return o===t&&(e=a),a}let n=r(t.root),i=rg(n);return e??i}function sg(t,e,r,n){let i=t;for(;i.parent;)i=i.parent;if(e.length===0)return Qc(i,i,i,r,n);let o=uC(e);if(o.toRoot())return Qc(i,i,new ne([],{}),r,n);let s=cC(o,i,t),a=s.processChildren?ui(s.segmentGroup,s.index,o.commands):ug(s.segmentGroup,s.index,o.commands);return Qc(i,s.segmentGroup,a,r,n)}function Ds(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function di(t){return typeof t=="object"&&t!=null&&t.outlets}function Qc(t,e,r,n,i){let o={};n&&Object.entries(n).forEach(([u,c])=>{o[u]=Array.isArray(c)?c.map(l=>`${l}`):`${c}`});let s;t===e?s=r:s=ag(t,e,r);let a=rg(ig(s));return new un(a,o,i)}function ag(t,e,r){let n={};return Object.entries(t.children).forEach(([i,o])=>{o===e?n[i]=r:n[i]=ag(o,e,r)}),new ne(t.segments,n)}var ws=class{constructor(e,r,n){if(this.isAbsolute=e,this.numberOfDoubleDots=r,this.commands=n,e&&n.length>0&&Ds(n[0]))throw new E(4003,!1);let i=n.find(di);if(i&&i!==Yp(n))throw new E(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function uC(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new ws(!0,0,t);let e=0,r=!1,n=t.reduce((i,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([u,c])=>{a[u]=typeof c=="string"?c.split("/"):c}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:s===0?(o.split("/").forEach((a,u)=>{u==0&&a==="."||(u==0&&a===""?r=!0:a===".."?e++:a!=""&&i.push(a))}),i):[...i,o]},[]);return new ws(r,e,n)}var gr=class{constructor(e,r,n){this.segmentGroup=e,this.processChildren=r,this.index=n}};function cC(t,e,r){if(t.isAbsolute)return new gr(e,!0,0);if(!r)return new gr(e,!1,NaN);if(r.parent===null)return new gr(r,!0,0);let n=Ds(t.commands[0])?0:1,i=r.segments.length-1+n;return lC(r,i,t.numberOfDoubleDots)}function lC(t,e,r){let n=t,i=e,o=r;for(;o>i;){if(o-=i,n=n.parent,!n)throw new E(4005,!1);i=n.segments.length}return new gr(n,!1,i-o)}function dC(t){return di(t[0])?t[0].outlets:{[B]:t}}function ug(t,e,r){if(t||(t=new ne([],{})),t.segments.length===0&&t.hasChildren())return ui(t,e,r);let n=fC(t,e,r),i=r.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new ne(t.segments.slice(0,n.pathIndex),{});return o.children[B]=new ne(t.segments.slice(n.pathIndex),t.children),ui(o,0,i)}else return n.match&&i.length===0?new ne(t.segments,{}):n.match&&!t.hasChildren()?Wc(t,e,r):n.match?ui(t,0,i):Wc(t,e,r)}function ui(t,e,r){if(r.length===0)return new ne(t.segments,{});{let n=dC(r),i={};if(Object.keys(n).some(o=>o!==B)&&t.children[B]&&t.numberOfChildren===1&&t.children[B].segments.length===0){let o=ui(t.children[B],e,r);return new ne(t.segments,o.children)}return Object.entries(n).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[o]=ug(t.children[o],e,s))}),Object.entries(t.children).forEach(([o,s])=>{n[o]===void 0&&(i[o]=s)}),new ne(t.segments,i)}}function fC(t,e,r){let n=0,i=e,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(n>=r.length)return o;let s=t.segments[i],a=r[n];if(di(a))break;let u=`${a}`,c=n<r.length-1?r[n+1]:null;if(i>0&&u===void 0)break;if(u&&c&&typeof c=="object"&&c.outlets===void 0){if(!zp(u,c,s))return o;n+=2}else{if(!zp(u,{},s))return o;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function Wc(t,e,r){let n=t.segments.slice(0,e),i=0;for(;i<r.length;){let o=r[i];if(di(o)){let u=hC(o.outlets);return new ne(n,u)}if(i===0&&Ds(r[0])){let u=t.segments[e];n.push(new Nn(u.path,Gp(r[0]))),i++;continue}let s=di(o)?o.outlets[B]:`${o}`,a=i<r.length-1?r[i+1]:null;s&&a&&Ds(a)?(n.push(new Nn(s,Gp(a))),i+=2):(n.push(new Nn(s,{})),i++)}return new ne(n,{})}function hC(t){let e={};return Object.entries(t).forEach(([r,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[r]=Wc(new ne([],{}),0,n))}),e}function Gp(t){let e={};return Object.entries(t).forEach(([r,n])=>e[r]=`${n}`),e}function zp(t,e,r){return t==r.path&&Ot(e,r.parameters)}var ci="imperative",at=class{constructor(e,r){this.id=e,this.url=r}},fi=class extends at{constructor(e,r,n="imperative",i=null){super(e,r),this.type=0,this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ln=class extends at{constructor(e,r,n){super(e,r),this.urlAfterRedirects=n,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},cn=class extends at{constructor(e,r,n,i){super(e,r),this.reason=n,this.code=i,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Rn=class extends at{constructor(e,r,n,i){super(e,r),this.reason=n,this.code=i,this.type=16}},hi=class extends at{constructor(e,r,n,i){super(e,r),this.error=n,this.target=i,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},bs=class extends at{constructor(e,r,n,i){super(e,r),this.urlAfterRedirects=n,this.state=i,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qc=class extends at{constructor(e,r,n,i){super(e,r),this.urlAfterRedirects=n,this.state=i,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zc=class extends at{constructor(e,r,n,i,o){super(e,r),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=o,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Yc=class extends at{constructor(e,r,n,i){super(e,r),this.urlAfterRedirects=n,this.state=i,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kc=class extends at{constructor(e,r,n,i){super(e,r),this.urlAfterRedirects=n,this.state=i,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jc=class{constructor(e){this.route=e,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Xc=class{constructor(e){this.route=e,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},el=class{constructor(e){this.snapshot=e,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},tl=class{constructor(e){this.snapshot=e,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nl=class{constructor(e){this.snapshot=e,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rl=class{constructor(e){this.snapshot=e,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var pi=class{},gi=class{constructor(e){this.url=e}};var il=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new xs,this.attachRef=null}},xs=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(n,i){let o=this.getOrCreateContext(n);o.outlet=i,this.contexts.set(n,o)}onChildOutletDestroyed(n){let i=this.getContext(n);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let n=this.contexts;return this.contexts=new Map,n}onOutletReAttached(n){this.contexts=n}getOrCreateContext(n){let i=this.getContext(n);return i||(i=new il,this.contexts.set(n,i)),i}getContext(n){return this.contexts.get(n)||null}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Es=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let r=this.pathFromRoot(e);return r.length>1?r[r.length-2]:null}children(e){let r=ol(e,this._root);return r?r.children.map(n=>n.value):[]}firstChild(e){let r=ol(e,this._root);return r&&r.children.length>0?r.children[0].value:null}siblings(e){let r=sl(e,this._root);return r.length<2?[]:r[r.length-2].children.map(i=>i.value).filter(i=>i!==e)}pathFromRoot(e){return sl(e,this._root).map(r=>r.value)}};function ol(t,e){if(t===e.value)return e;for(let r of e.children){let n=ol(t,r);if(n)return n}return null}function sl(t,e){if(t===e.value)return[e];for(let r of e.children){let n=sl(t,r);if(n.length)return n.unshift(e),n}return[]}var Xe=class{constructor(e,r){this.value=e,this.children=r}toString(){return`TreeNode(${this.value})`}};function pr(t){let e={};return t&&t.children.forEach(r=>e[r.value.outlet]=r),e}var Is=class extends Es{constructor(e,r){super(e),this.snapshot=r,vl(this,e)}toString(){return this.snapshot.toString()}};function cg(t,e){let r=pC(t,e),n=new Te([new Nn("",{})]),i=new Te({}),o=new Te({}),s=new Te({}),a=new Te(""),u=new Cr(n,i,s,a,o,B,e,r.root);return u.snapshot=r.root,new Is(new Xe(u,[]),r)}function pC(t,e){let r={},n={},i={},o="",s=new mi([],r,i,o,n,B,e,null,{});return new _s("",new Xe(s,[]))}var Cr=class{constructor(e,r,n,i,o,s,a,u){this.urlSubject=e,this.paramsSubject=r,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=u,this.title=this.dataSubject?.pipe(T(c=>c[Ci]))??R(void 0),this.url=e,this.params=r,this.queryParams=n,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(T(e=>vr(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(T(e=>vr(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ml(t,e,r="emptyOnly"){let n,{routeConfig:i}=t;return e!==null&&(r==="always"||i?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:D(D({},e.params),t.params),data:D(D({},e.data),t.data),resolve:D(D(D(D({},t.data),e.data),i?.data),t._resolvedData)}:n={params:t.params,data:t.data,resolve:D(D({},t.data),t._resolvedData??{})},i&&dg(i)&&(n.resolve[Ci]=i.title),n}var mi=class{get title(){return this.data?.[Ci]}constructor(e,r,n,i,o,s,a,u,c){this.url=e,this.params=r,this.queryParams=n,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.routeConfig=u,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=vr(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=vr(this.queryParams)),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),r=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${r}')`}},_s=class extends Es{constructor(e,r){super(r),this.url=e,vl(this,r)}toString(){return lg(this._root)}};function vl(t,e){e.value._routerState=t,e.children.forEach(r=>vl(t,r))}function lg(t){let e=t.children.length>0?` { ${t.children.map(lg).join(", ")} } `:"";return`${t.value}${e}`}function Bc(t){if(t.snapshot){let e=t.snapshot,r=t._futureSnapshot;t.snapshot=r,Ot(e.queryParams,r.queryParams)||t.queryParamsSubject.next(r.queryParams),e.fragment!==r.fragment&&t.fragmentSubject.next(r.fragment),Ot(e.params,r.params)||t.paramsSubject.next(r.params),U3(e.url,r.url)||t.urlSubject.next(r.url),Ot(e.data,r.data)||t.dataSubject.next(r.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function al(t,e){let r=Ot(t.params,e.params)&&W3(t.url,e.url),n=!t.parent!=!e.parent;return r&&!n&&(!t.parent||al(t.parent,e.parent))}function dg(t){return typeof t.title=="string"||t.title===null}var gC=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=B,this.activateEvents=new de,this.deactivateEvents=new de,this.attachEvents=new de,this.detachEvents=new de,this.parentContexts=w(xs),this.location=w(dr),this.changeDetector=w(An),this.environmentInjector=w(rt),this.inputBinder=w(yl,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(n){if(n.name){let{firstChange:i,previousValue:o}=n.name;if(i)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(n){return this.parentContexts.getContext(n)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let n=this.parentContexts.getContext(this.name);n?.route&&(n.attachRef?this.attach(n.attachRef,n.route):this.activateWith(n.route,n.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E(4012,!1);this.location.detach();let n=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(n.instance),n}attach(n,i){this.activated=n,this._activatedRoute=i,this.location.insert(n.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(n.instance)}deactivate(){if(this.activated){let n=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(n)}}activateWith(n,i){if(this.isActivated)throw new E(4013,!1);this._activatedRoute=n;let o=this.location,a=n.snapshot.component,u=this.parentContexts.getOrCreateContext(this.name).children,c=new ul(n,u,o.injector);this.activated=o.createComponent(a,{index:o.length,injector:c,environmentInjector:i??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=ye({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[Ut]});let t=e;return t})(),ul=class{constructor(e,r,n){this.route=e,this.childContexts=r,this.parent=n}get(e,r){return e===Cr?this.route:e===xs?this.childContexts:this.parent.get(e,r)}},yl=new F("");function mC(t,e,r){let n=vi(t,e._root,r?r._root:void 0);return new Is(n,e)}function vi(t,e,r){if(r&&t.shouldReuseRoute(e.value,r.value.snapshot)){let n=r.value;n._futureSnapshot=e.value;let i=vC(t,e,r);return new Xe(n,i)}else{if(t.shouldAttach(e.value)){let o=t.retrieve(e.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=e.value,s.children=e.children.map(a=>vi(t,a)),s}}let n=yC(e.value),i=e.children.map(o=>vi(t,o));return new Xe(n,i)}}function vC(t,e,r){return e.children.map(n=>{for(let i of r.children)if(t.shouldReuseRoute(n.value,i.value.snapshot))return vi(t,n,i);return vi(t,n)})}function yC(t){return new Cr(new Te(t.url),new Te(t.params),new Te(t.queryParams),new Te(t.fragment),new Te(t.data),t.outlet,t.component,t)}var fg="ngNavigationCancelingError";function hg(t,e){let{redirectTo:r,navigationBehaviorOptions:n}=yr(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,i=pg(!1,0,e);return i.url=r,i.navigationBehaviorOptions=n,i}function pg(t,e,r){let n=new Error("NavigationCancelingError: "+(t||""));return n[fg]=!0,n.cancellationCode=e,r&&(n.url=r),n}function CC(t){return gg(t)&&yr(t.url)}function gg(t){return t&&t[fg]}var DC=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=ve({type:e,selectors:[["ng-component"]],standalone:!0,features:[Ce],decls:1,vars:0,template:function(i,o){i&1&&ce(0,"router-outlet")},dependencies:[gC],encapsulation:2});let t=e;return t})();function wC(t,e){return t.providers&&!t._injector&&(t._injector=yc(t.providers,e,`Route: ${t.path}`)),t._injector??e}function Cl(t){let e=t.children&&t.children.map(Cl),r=e?se(D({},t),{children:e}):D({},t);return!r.component&&!r.loadComponent&&(e||r.loadChildren)&&r.outlet&&r.outlet!==B&&(r.component=DC),r}function Lt(t){return t.outlet||B}function bC(t,e){let r=t.filter(n=>Lt(n)===e);return r.push(...t.filter(n=>Lt(n)!==e)),r}function Di(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let e=t.parent;e;e=e.parent){let r=e.routeConfig;if(r?._loadedInjector)return r._loadedInjector;if(r?._injector)return r._injector}return null}var EC=(t,e,r,n)=>T(i=>(new cl(e,i.targetRouterState,i.currentRouterState,r,n).activate(t),i)),cl=class{constructor(e,r,n,i,o){this.routeReuseStrategy=e,this.futureState=r,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=o}activate(e){let r=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(r,n,e),Bc(this.futureState.root),this.activateChildRoutes(r,n,e)}deactivateChildRoutes(e,r,n){let i=pr(r);e.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],n),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(e,r,n){let i=e.value,o=r?r.value:null;if(i===o)if(i.component){let s=n.getContext(i.outlet);s&&this.deactivateChildRoutes(e,r,s.children)}else this.deactivateChildRoutes(e,r,n);else o&&this.deactivateRouteAndItsChildren(r,n)}deactivateRouteAndItsChildren(e,r){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,r):this.deactivateRouteAndOutlet(e,r)}detachAndStoreRouteSubtree(e,r){let n=r.getContext(e.value.outlet),i=n&&e.value.component?n.children:r,o=pr(e);for(let s of Object.keys(o))this.deactivateRouteAndItsChildren(o[s],i);if(n&&n.outlet){let s=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:s,route:e,contexts:a})}}deactivateRouteAndOutlet(e,r){let n=r.getContext(e.value.outlet),i=n&&e.value.component?n.children:r,o=pr(e);for(let s of Object.keys(o))this.deactivateRouteAndItsChildren(o[s],i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,r,n){let i=pr(r);e.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],n),this.forwardEvent(new rl(o.value.snapshot))}),e.children.length&&this.forwardEvent(new tl(e.value.snapshot))}activateRoutes(e,r,n){let i=e.value,o=r?r.value:null;if(Bc(i),i===o)if(i.component){let s=n.getOrCreateContext(i.outlet);this.activateChildRoutes(e,r,s.children)}else this.activateChildRoutes(e,r,n);else if(i.component){let s=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Bc(a.route.value),this.activateChildRoutes(e,null,s.children)}else{let a=Di(i.snapshot);s.attachRef=null,s.route=i,s.injector=a,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(e,null,s.children)}}else this.activateChildRoutes(e,null,n)}},Ms=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},mr=class{constructor(e,r){this.component=e,this.route=r}};function IC(t,e,r){let n=t._root,i=e?e._root:null;return si(n,i,r,[n.value])}function _C(t){let e=t.routeConfig?t.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:t,guards:e}}function wr(t,e){let r=Symbol(),n=e.get(t,r);return n===r?typeof t=="function"&&!cf(t)?t:e.get(t):n}function si(t,e,r,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=pr(e);return t.children.forEach(s=>{MC(s,o[s.value.outlet],r,n.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>li(a,r.getContext(s),i)),i}function MC(t,e,r,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=e?e.value:null,a=r?r.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let u=AC(s,o,o.routeConfig.runGuardsAndResolvers);u?i.canActivateChecks.push(new Ms(n)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?si(t,e,a?a.children:null,n,i):si(t,e,r,n,i),u&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new mr(a.outlet.component,s))}else s&&li(e,a,i),i.canActivateChecks.push(new Ms(n)),o.component?si(t,null,a?a.children:null,n,i):si(t,null,r,n,i);return i}function AC(t,e,r){if(typeof r=="function")return r(t,e);switch(r){case"pathParamsChange":return!On(t.url,e.url);case"pathParamsOrQueryParamsChange":return!On(t.url,e.url)||!Ot(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!al(t,e)||!Ot(t.queryParams,e.queryParams);case"paramsChange":default:return!al(t,e)}}function li(t,e,r){let n=pr(t),i=t.value;Object.entries(n).forEach(([o,s])=>{i.component?e?li(s,e.children.getContext(o),r):li(s,null,r):li(s,e,r)}),i.component?e&&e.outlet&&e.outlet.isActivated?r.canDeactivateChecks.push(new mr(e.outlet.component,i)):r.canDeactivateChecks.push(new mr(null,i)):r.canDeactivateChecks.push(new mr(null,i))}function wi(t){return typeof t=="function"}function xC(t){return typeof t=="boolean"}function SC(t){return t&&wi(t.canLoad)}function TC(t){return t&&wi(t.canActivate)}function NC(t){return t&&wi(t.canActivateChild)}function OC(t){return t&&wi(t.canDeactivate)}function LC(t){return t&&wi(t.canMatch)}function mg(t){return t instanceof Pt||t?.name==="EmptyError"}var gs=Symbol("INITIAL_VALUE");function Dr(){return ke(t=>eo(t.map(e=>e.pipe(tt(1),Ca(gs)))).pipe(T(e=>{for(let r of e)if(r!==!0){if(r===gs)return gs;if(r===!1||r instanceof un)return r}return!0}),Ue(e=>e!==gs),tt(1)))}function RC(t,e){return Oe(r=>{let{targetSnapshot:n,currentSnapshot:i,guards:{canActivateChecks:o,canDeactivateChecks:s}}=r;return s.length===0&&o.length===0?R(se(D({},r),{guardsResult:!0})):FC(s,n,i,t).pipe(Oe(a=>a&&xC(a)?PC(n,o,t,e):R(a)),T(a=>se(D({},r),{guardsResult:a})))})}function FC(t,e,r,n){return oe(t).pipe(Oe(i=>BC(i.component,i.route,r,e,n)),Dt(i=>i!==!0,!0))}function PC(t,e,r,n){return oe(e).pipe(Gn(i=>Hn(VC(i.route.parent,n),kC(i.route,n),QC(t,i.path,r),jC(t,i.route,r))),Dt(i=>i!==!0,!0))}function kC(t,e){return t!==null&&e&&e(new nl(t)),R(!0)}function VC(t,e){return t!==null&&e&&e(new el(t)),R(!0)}function jC(t,e,r){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return R(!0);let i=n.map(o=>to(()=>{let s=Di(e)??r,a=wr(o,s),u=TC(a)?a.canActivate(e,t):s.runInContext(()=>a(e,t));return ln(u).pipe(Dt())}));return R(i).pipe(Dr())}function QC(t,e,r){let n=e[e.length-1],o=e.slice(0,e.length-1).reverse().map(s=>_C(s)).filter(s=>s!==null).map(s=>to(()=>{let a=s.guards.map(u=>{let c=Di(s.node)??r,l=wr(u,c),d=NC(l)?l.canActivateChild(n,t):c.runInContext(()=>l(n,t));return ln(d).pipe(Dt())});return R(a).pipe(Dr())}));return R(o).pipe(Dr())}function BC(t,e,r,n,i){let o=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!o||o.length===0)return R(!0);let s=o.map(a=>{let u=Di(e)??i,c=wr(a,u),l=OC(c)?c.canDeactivate(t,e,r,n):u.runInContext(()=>c(t,e,r,n));return ln(l).pipe(Dt())});return R(s).pipe(Dr())}function $C(t,e,r,n){let i=e.canLoad;if(i===void 0||i.length===0)return R(!0);let o=i.map(s=>{let a=wr(s,t),u=SC(a)?a.canLoad(e,r):t.runInContext(()=>a(e,r));return ln(u)});return R(o).pipe(Dr(),vg(n))}function vg(t){return ia(le(e=>{if(yr(e))throw hg(t,e)}),T(e=>e===!0))}function UC(t,e,r,n){let i=e.canMatch;if(!i||i.length===0)return R(!0);let o=i.map(s=>{let a=wr(s,t),u=LC(a)?a.canMatch(e,r):t.runInContext(()=>a(e,r));return ln(u)});return R(o).pipe(Dr(),vg(n))}var yi=class{constructor(e){this.segmentGroup=e||null}},As=class extends Error{constructor(e){super(),this.urlTree=e}};function hr(t){return et(new yi(t))}function HC(t){return et(new E(4e3,!1))}function GC(t){return et(pg(!1,3))}var ll=class{constructor(e,r){this.urlSerializer=e,this.urlTree=r}noMatchError(e){return new E(4002,!1)}lineralizeSegments(e,r){let n=[],i=r.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return R(n);if(i.numberOfChildren>1||!i.children[B])return HC(e.redirectTo);i=i.children[B]}}applyRedirectCommands(e,r,n){let i=this.applyRedirectCreateUrlTree(r,this.urlSerializer.parse(r),e,n);if(r.startsWith("/"))throw new As(i);return i}applyRedirectCreateUrlTree(e,r,n,i){let o=this.createSegmentGroup(e,r.root,n,i);return new un(o,this.createQueryParams(r.queryParams,this.urlTree.queryParams),r.fragment)}createQueryParams(e,r){let n={};return Object.entries(e).forEach(([i,o])=>{if(typeof o=="string"&&o.startsWith(":")){let a=o.substring(1);n[i]=r[a]}else n[i]=o}),n}createSegmentGroup(e,r,n,i){let o=this.createSegments(e,r.segments,n,i),s={};return Object.entries(r.children).forEach(([a,u])=>{s[a]=this.createSegmentGroup(e,u,n,i)}),new ne(o,s)}createSegments(e,r,n,i){return r.map(o=>o.path.startsWith(":")?this.findPosParam(e,o,i):this.findOrReturn(o,n))}findPosParam(e,r,n){let i=n[r.path.substring(1)];if(!i)throw new E(4001,!1);return i}findOrReturn(e,r){let n=0;for(let i of r){if(i.path===e.path)return r.splice(n),i;n++}return e}},dl={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function zC(t,e,r,n,i){let o=Dl(t,e,r);return o.matched?(n=wC(e,n),UC(n,e,r,i).pipe(T(s=>s===!0?o:D({},dl)))):R(o)}function Dl(t,e,r){if(e.path==="")return e.pathMatch==="full"&&(t.hasChildren()||r.length>0)?D({},dl):{matched:!0,consumedSegments:[],remainingSegments:r,parameters:{},positionalParamSegments:{}};let i=(e.matcher||$3)(r,t,e);if(!i)return D({},dl);let o={};Object.entries(i.posParams??{}).forEach(([a,u])=>{o[a]=u.path});let s=i.consumed.length>0?D(D({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:r.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function Wp(t,e,r,n){return r.length>0&&ZC(t,r,n)?{segmentGroup:new ne(e,qC(n,new ne(r,t.children))),slicedSegments:[]}:r.length===0&&YC(t,r,n)?{segmentGroup:new ne(t.segments,WC(t,e,r,n,t.children)),slicedSegments:r}:{segmentGroup:new ne(t.segments,t.children),slicedSegments:r}}function WC(t,e,r,n,i){let o={};for(let s of n)if(Ss(t,r,s)&&!i[Lt(s)]){let a=new ne([],{});o[Lt(s)]=a}return D(D({},i),o)}function qC(t,e){let r={};r[B]=e;for(let n of t)if(n.path===""&&Lt(n)!==B){let i=new ne([],{});r[Lt(n)]=i}return r}function ZC(t,e,r){return r.some(n=>Ss(t,e,n)&&Lt(n)!==B)}function YC(t,e,r){return r.some(n=>Ss(t,e,n))}function Ss(t,e,r){return(t.hasChildren()||e.length>0)&&r.pathMatch==="full"?!1:r.path===""}function KC(t,e,r,n){return Lt(t)!==n&&(n===B||!Ss(e,r,t))?!1:t.path==="**"?!0:Dl(e,t,r).matched}function JC(t,e,r){return e.length===0&&!t.children[r]}var fl=class{};function XC(t,e,r,n,i,o,s="emptyOnly"){return new hl(t,e,r,n,i,s,o).recognize()}var eD=31,hl=class{constructor(e,r,n,i,o,s,a){this.injector=e,this.configLoader=r,this.rootComponentType=n,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.applyRedirects=new ll(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new E(4002,!1)}recognize(){let e=Wp(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(T(r=>{let n=new mi([],Object.freeze({}),Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,{},B,this.rootComponentType,null,{}),i=new Xe(n,r),o=new _s("",i),s=aC(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),this.inheritParamsAndData(o._root,null),{state:o,tree:s}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,B).pipe(dt(n=>{if(n instanceof As)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof yi?this.noMatchError(n):n}))}inheritParamsAndData(e,r){let n=e.value,i=ml(n,r,this.paramsInheritanceStrategy);n.params=Object.freeze(i.params),n.data=Object.freeze(i.data),e.children.forEach(o=>this.inheritParamsAndData(o,n))}processSegmentGroup(e,r,n,i){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,r,n):this.processSegment(e,r,n,n.segments,i,!0).pipe(T(o=>o instanceof Xe?[o]:[]))}processChildren(e,r,n){let i=[];for(let o of Object.keys(n.children))o==="primary"?i.unshift(o):i.push(o);return oe(i).pipe(Gn(o=>{let s=n.children[o],a=bC(r,o);return this.processSegmentGroup(e,a,s,o)}),va((o,s)=>(o.push(...s),o)),Yt(null),ma(),Oe(o=>{if(o===null)return hr(n);let s=yg(o);return tD(s),R(s)}))}processSegment(e,r,n,i,o,s){return oe(r).pipe(Gn(a=>this.processSegmentAgainstRoute(a._injector??e,r,a,n,i,o,s).pipe(dt(u=>{if(u instanceof yi)return R(null);throw u}))),Dt(a=>!!a),dt(a=>{if(mg(a))return JC(n,i,o)?R(new fl):hr(n);throw a}))}processSegmentAgainstRoute(e,r,n,i,o,s,a){return KC(n,i,o,s)?n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,i,n,o,s):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,i,r,n,o,s):hr(i):hr(i)}expandSegmentAgainstRouteUsingRedirect(e,r,n,i,o,s){let{matched:a,consumedSegments:u,positionalParamSegments:c,remainingSegments:l}=i.path==="**"?qp(o):Dl(r,i,o);if(!a)return hr(r);i.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>eD&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(u,i.redirectTo,c);return this.applyRedirects.lineralizeSegments(i,d).pipe(Oe(f=>this.processSegment(e,n,r,f.concat(l),s,!1)))}matchSegmentAgainstRoute(e,r,n,i,o){let s;return n.path==="**"?(s=R(qp(i)),r.children={}):s=zC(r,n,i,e,this.urlSerializer),s.pipe(ke(a=>a.matched?(e=n._injector??e,this.getChildConfig(e,n,i).pipe(ke(({routes:u})=>{let c=n._loadedInjector??e,{consumedSegments:l,remainingSegments:d,parameters:f}=a,h=new mi(l,f,Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,rD(n),Lt(n),n.component??n._loadedComponent??null,n,iD(n)),{segmentGroup:p,slicedSegments:C}=Wp(r,l,d,u);if(C.length===0&&p.hasChildren())return this.processChildren(c,u,p).pipe(T(m=>m===null?null:new Xe(h,m)));if(u.length===0&&C.length===0)return R(new Xe(h,[]));let b=Lt(n)===o;return this.processSegment(c,u,p,C,b?B:o,!0).pipe(T(m=>new Xe(h,m instanceof Xe?[m]:[])))}))):hr(r)))}getChildConfig(e,r,n){return r.children?R({routes:r.children,injector:e}):r.loadChildren?r._loadedRoutes!==void 0?R({routes:r._loadedRoutes,injector:r._loadedInjector}):$C(e,r,n,this.urlSerializer).pipe(Oe(i=>i?this.configLoader.loadChildren(e,r).pipe(le(o=>{r._loadedRoutes=o.routes,r._loadedInjector=o.injector})):GC(r))):R({routes:[],injector:e})}};function tD(t){t.sort((e,r)=>e.value.outlet===B?-1:r.value.outlet===B?1:e.value.outlet.localeCompare(r.value.outlet))}function nD(t){let e=t.value.routeConfig;return e&&e.path===""}function yg(t){let e=[],r=new Set;for(let n of t){if(!nD(n)){e.push(n);continue}let i=e.find(o=>n.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...n.children),r.add(i)):e.push(n)}for(let n of r){let i=yg(n.children);e.push(new Xe(n.value,i))}return e.filter(n=>!r.has(n))}function rD(t){return t.data||{}}function iD(t){return t.resolve||{}}function qp(t){return{matched:!0,parameters:t.length>0?Yp(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function oD(t,e,r,n,i,o){return Oe(s=>XC(t,e,r,n,s.extractedUrl,i,o).pipe(T(({state:a,tree:u})=>se(D({},s),{targetSnapshot:a,urlAfterRedirects:u}))))}function sD(t,e){return Oe(r=>{let{targetSnapshot:n,guards:{canActivateChecks:i}}=r;if(!i.length)return R(r);let o=i.map(c=>c.route),s=new Set(o),a=Cg(o[0].parent).slice(1),u=0;return oe(a).pipe(Gn(c=>s.has(c)?aD(c,n,t,e):(c.data=ml(c,c.parent,t).resolve,R(void 0))),le(()=>u++),zn(1),Oe(c=>u===a.length?R(r):Ne))})}function Cg(t){let e=t.children.map(r=>Cg(r)).flat();return[t,...e]}function aD(t,e,r,n){let i=t.routeConfig,o=t._resolve;return i?.title!==void 0&&!dg(i)&&(o[Ci]=i.title),uD(o,t,e,n).pipe(T(s=>(t._resolvedData=s,t.data=ml(t,t.parent,r).resolve,null)))}function uD(t,e,r,n){let i=Hc(t);if(i.length===0)return R({});let o={};return oe(i).pipe(Oe(s=>cD(t[s],e,r,n).pipe(Dt(),le(a=>{o[s]=a}))),zn(1),pa(o),dt(s=>mg(s)?Ne:et(s)))}function cD(t,e,r,n){let i=Di(e)??n,o=wr(t,i),s=o.resolve?o.resolve(e,r):i.runInContext(()=>o(e,r));return ln(s)}function $c(t){return ke(e=>{let r=t(e);return r?oe(r).pipe(T(()=>e)):R(e)})}var Dg=(()=>{let e=class e{buildTitle(n){let i,o=n.root;for(;o!==void 0;)i=this.getResolvedTitleForRoute(o)??i,o=o.children.find(s=>s.outlet===B);return i}getResolvedTitleForRoute(n){return n.data[Ci]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>(()=>w(lD))(),providedIn:"root"});let t=e;return t})(),lD=(()=>{let e=class e extends Dg{constructor(n){super(),this.title=n}updateTitle(n){let i=this.buildTitle(n);i!==void 0&&this.title.setTitle(i)}};e.\u0275fac=function(i){return new(i||e)(N(kc))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),wl=new F("",{providedIn:"root",factory:()=>({})}),bl=new F("ROUTES"),dD=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=w(_c)}loadComponent(n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return R(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=ln(n.loadComponent()).pipe(T(wg),le(s=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=s}),Tr(()=>{this.componentLoaders.delete(n)})),o=new Qn(i,()=>new Se).pipe(jn());return this.componentLoaders.set(n,o),o}loadChildren(n,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return R({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=fD(i,this.compiler,n,this.onLoadEndListener).pipe(Tr(()=>{this.childrenLoaders.delete(i)})),a=new Qn(s,()=>new Se).pipe(jn());return this.childrenLoaders.set(i,a),a}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function fD(t,e,r,n){return ln(t.loadChildren()).pipe(T(wg),Oe(i=>i instanceof Gr||Array.isArray(i)?R(i):oe(e.compileModuleAsync(i))),T(i=>{n&&n(t);let o,s,a=!1;return Array.isArray(i)?(s=i,a=!0):(o=i.create(r).injector,s=o.get(bl,[],{optional:!0,self:!0}).flat()),{routes:s.map(Cl),injector:o}}))}function hD(t){return t&&typeof t=="object"&&"default"in t}function wg(t){return hD(t)?t.default:t}var El=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>(()=>w(pD))(),providedIn:"root"});let t=e;return t})(),pD=(()=>{let e=class e{shouldProcessUrl(n){return!0}extract(n){return n}merge(n,i){return n}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),gD=new F("");var mD=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new Se,this.transitionAbortSubject=new Se,this.configLoader=w(dD),this.environmentInjector=w(rt),this.urlSerializer=w(gl),this.rootContexts=w(xs),this.location=w(ti),this.inputBindingEnabled=w(yl,{optional:!0})!==null,this.titleStrategy=w(Dg),this.options=w(wl,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=w(El),this.createViewTransition=w(gD,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>R(void 0),this.rootComponentType=null;let n=o=>this.events.next(new Jc(o)),i=o=>this.events.next(new Xc(o));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=n}complete(){this.transitions?.complete()}handleNavigationRequest(n){let i=++this.navigationId;this.transitions?.next(se(D(D({},this.transitions.value),n),{id:i}))}setupNavigations(n,i,o){return this.transitions=new Te({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:ci,restoredState:null,currentSnapshot:o.snapshot,targetSnapshot:null,currentRouterState:o,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Ue(s=>s.id!==0),T(s=>se(D({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),ke(s=>{this.currentTransition=s;let a=!1,u=!1;return R(s).pipe(le(c=>{this.currentNavigation={id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,trigger:c.source,extras:c.extras,previousNavigation:this.lastSuccessfulNavigation?se(D({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),ke(c=>{let l=!n.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=c.extras.onSameUrlNavigation??n.onSameUrlNavigation;if(!l&&d!=="reload"){let f="";return this.events.next(new Rn(c.id,this.urlSerializer.serialize(c.rawUrl),f,0)),c.resolve(null),Ne}if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return R(c).pipe(ke(f=>{let h=this.transitions?.getValue();return this.events.next(new fi(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),h!==this.transitions?.getValue()?Ne:Promise.resolve(f)}),oD(this.environmentInjector,this.configLoader,this.rootComponentType,n.config,this.urlSerializer,this.paramsInheritanceStrategy),le(f=>{s.targetSnapshot=f.targetSnapshot,s.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation=se(D({},this.currentNavigation),{finalUrl:f.urlAfterRedirects});let h=new bs(f.id,this.urlSerializer.serialize(f.extractedUrl),this.urlSerializer.serialize(f.urlAfterRedirects),f.targetSnapshot);this.events.next(h)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:f,extractedUrl:h,source:p,restoredState:C,extras:b}=c,m=new fi(f,this.urlSerializer.serialize(h),p,C);this.events.next(m);let Y=cg(h,this.rootComponentType).snapshot;return this.currentTransition=s=se(D({},c),{targetSnapshot:Y,urlAfterRedirects:h,extras:se(D({},b),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=h,R(s)}else{let f="";return this.events.next(new Rn(c.id,this.urlSerializer.serialize(c.extractedUrl),f,1)),c.resolve(null),Ne}}),le(c=>{let l=new qc(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(l)}),T(c=>(this.currentTransition=s=se(D({},c),{guards:IC(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),s)),RC(this.environmentInjector,c=>this.events.next(c)),le(c=>{if(s.guardsResult=c.guardsResult,yr(c.guardsResult))throw hg(this.urlSerializer,c.guardsResult);let l=new Zc(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);this.events.next(l)}),Ue(c=>c.guardsResult?!0:(this.cancelNavigationTransition(c,"",3),!1)),$c(c=>{if(c.guards.canActivateChecks.length)return R(c).pipe(le(l=>{let d=new Yc(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(d)}),ke(l=>{let d=!1;return R(l).pipe(sD(this.paramsInheritanceStrategy,this.environmentInjector),le({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(l,"",2)}}))}),le(l=>{let d=new Kc(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(d)}))}),$c(c=>{let l=d=>{let f=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&f.push(this.configLoader.loadComponent(d.routeConfig).pipe(le(h=>{d.component=h}),T(()=>{})));for(let h of d.children)f.push(...l(h));return f};return eo(l(c.targetSnapshot.root)).pipe(Yt(),tt(1))}),$c(()=>this.afterPreactivation()),ke(()=>{let{currentSnapshot:c,targetSnapshot:l}=s,d=this.createViewTransition?.(this.environmentInjector,c.root,l.root);return d?oe(d).pipe(T(()=>s)):R(s)}),T(c=>{let l=mC(n.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=s=se(D({},c),{targetRouterState:l}),this.currentNavigation.targetRouterState=l,s}),le(()=>{this.events.next(new pi)}),EC(this.rootContexts,n.routeReuseStrategy,c=>this.events.next(c),this.inputBindingEnabled),tt(1),le({next:c=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ln(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0)},complete:()=>{a=!0}}),Da(this.transitionAbortSubject.pipe(le(c=>{throw c}))),Tr(()=>{if(!a&&!u){let c="";this.cancelNavigationTransition(s,c,1)}this.currentNavigation?.id===s.id&&(this.currentNavigation=null)}),dt(c=>{if(u=!0,gg(c))this.events.next(new cn(s.id,this.urlSerializer.serialize(s.extractedUrl),c.message,c.cancellationCode)),CC(c)?this.events.next(new gi(c.url)):s.resolve(!1);else{this.events.next(new hi(s.id,this.urlSerializer.serialize(s.extractedUrl),c,s.targetSnapshot??void 0));try{s.resolve(n.errorHandler(c))}catch(l){s.reject(l)}}return Ne}))}))}cancelNavigationTransition(n,i,o){let s=new cn(n.id,this.urlSerializer.serialize(n.extractedUrl),i,o);this.events.next(s),n.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function vD(t){return t!==ci}var yD=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>(()=>w(CD))(),providedIn:"root"});let t=e;return t})(),pl=class{shouldDetach(e){return!1}store(e,r){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,r){return e.routeConfig===r.routeConfig}},CD=(()=>{let e=class e extends pl{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=Ht(e)))(o||e)}})(),e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),bg=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:()=>(()=>w(DD))(),providedIn:"root"});let t=e;return t})(),DD=(()=>{let e=class e extends bg{constructor(){super(...arguments),this.location=w(ti),this.urlSerializer=w(gl),this.options=w(wl,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=w(El),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new un,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=cg(this.currentUrlTree,null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(n){return this.location.subscribe(i=>{i.type==="popstate"&&n(i.url,i.state)})}handleRouterEvent(n,i){if(n instanceof fi)this.stateMemento=this.createStateMemento();else if(n instanceof Rn)this.rawUrlTree=i.initialUrl;else if(n instanceof bs){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(o,i)}}else n instanceof pi?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,i))):n instanceof cn&&(n.code===3||n.code===2)?this.restoreHistory(i):n instanceof hi?this.restoreHistory(i,!0):n instanceof Ln&&(this.lastSuccessfulId=n.id,this.currentPageId=this.browserPageId)}setBrowserUrl(n,i){let o=this.urlSerializer.serialize(n);if(this.location.isCurrentPathEqualTo(o)||i.extras.replaceUrl){let s=this.browserPageId,a=D(D({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(o,"",a)}else{let s=D(D({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(o,"",s)}}restoreHistory(n,i=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,s=this.currentPageId-o;s!==0?this.location.historyGo(s):this.currentUrlTree===n.finalUrl&&s===0&&(this.resetState(n),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(n),this.resetUrlToCurrentUrlTree())}resetState(n){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(n,i){return this.canceledNavigationResolution==="computed"?{navigationId:n,\u0275routerPageId:i}:{navigationId:n}}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=Ht(e)))(o||e)}})(),e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ai=function(t){return t[t.COMPLETE=0]="COMPLETE",t[t.FAILED=1]="FAILED",t[t.REDIRECTING=2]="REDIRECTING",t}(ai||{});function wD(t,e){t.events.pipe(Ue(r=>r instanceof Ln||r instanceof cn||r instanceof hi||r instanceof Rn),T(r=>r instanceof Ln||r instanceof Rn?ai.COMPLETE:(r instanceof cn?r.code===0||r.code===1:!1)?ai.REDIRECTING:ai.FAILED),Ue(r=>r!==ai.REDIRECTING),tt(1)).subscribe(()=>{e()})}function bD(t){throw t}var ED={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ID={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Eg=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=w(os),this.stateManager=w(bg),this.options=w(wl,{optional:!0})||{},this.pendingTasks=w(Ic),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=w(mD),this.urlSerializer=w(gl),this.location=w(ti),this.urlHandlingStrategy=w(El),this._events=new Se,this.errorHandler=this.options.errorHandler||bD,this.navigated=!1,this.routeReuseStrategy=w(yD),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=w(bl,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!w(yl,{optional:!0}),this.eventsSubscription=new me,this.isNgZoneEnabled=w(Ee)instanceof Ee&&Ee.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:n=>{this.console.warn(n)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let n=this.navigationTransitions.events.subscribe(i=>{try{let o=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(o!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof cn&&i.code!==0&&i.code!==1)this.navigated=!0;else if(i instanceof Ln)this.navigated=!0;else if(i instanceof gi){let a=this.urlHandlingStrategy.merge(i.url,o.currentRawUrl),u={skipLocationChange:o.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||vD(o.source)};this.scheduleNavigation(a,ci,null,u,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}MD(i)&&this._events.next(i)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(n)}resetRootComponentType(n){this.routerState.root.component=n,this.navigationTransitions.rootComponentType=n}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ci,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription||(this.nonRouterCurrentEntryChangeSubscription=this.stateManager.registerNonRouterCurrentEntryChangeListener((n,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(n,"popstate",i)},0)}))}navigateToSyncWithBrowser(n,i,o){let s={replaceUrl:!0},a=o?.navigationId?o:null;if(o){let c=D({},o);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let u=this.parseUrl(n);this.scheduleNavigation(u,i,a,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(n){this.config=n.map(Cl),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(n,i={}){let{relativeTo:o,queryParams:s,fragment:a,queryParamsHandling:u,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:a,d=null;switch(u){case"merge":d=D(D({},this.currentUrlTree.queryParams),s);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=s||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let h=o?o.snapshot:this.routerState.snapshot.root;f=og(h)}catch{(typeof n[0]!="string"||!n[0].startsWith("/"))&&(n=[]),f=this.currentUrlTree.root}return sg(f,n,d,l??null)}navigateByUrl(n,i={skipLocationChange:!1}){let o=yr(n)?n:this.parseUrl(n),s=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(s,ci,null,i)}navigate(n,i={skipLocationChange:!1}){return _D(n),this.navigateByUrl(this.createUrlTree(n,i),i)}serializeUrl(n){return this.urlSerializer.serialize(n)}parseUrl(n){try{return this.urlSerializer.parse(n)}catch{return this.urlSerializer.parse("/")}}isActive(n,i){let o;if(i===!0?o=D({},ED):i===!1?o=D({},ID):o=i,yr(n))return Up(this.currentUrlTree,n,o);let s=this.parseUrl(n);return Up(this.currentUrlTree,s,o)}removeEmptyProps(n){return Object.keys(n).reduce((i,o)=>{let s=n[o];return s!=null&&(i[o]=s),i},{})}scheduleNavigation(n,i,o,s,a){if(this.disposed)return Promise.resolve(!1);let u,c,l;a?(u=a.resolve,c=a.reject,l=a.promise):l=new Promise((f,h)=>{u=f,c=h});let d=this.pendingTasks.add();return wD(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:n,extras:s,resolve:u,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(f=>Promise.reject(f))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function _D(t){for(let e=0;e<t.length;e++)if(t[e]==null)throw new E(4008,!1)}function MD(t){return!(t instanceof pi)&&!(t instanceof gi)}var AD=new F("");function Ig(t,...e){return Uo([{provide:bl,multi:!0,useValue:t},[],{provide:Cr,useFactory:xD,deps:[Eg]},{provide:Mc,multi:!0,useFactory:SD},e.map(r=>r.\u0275providers)])}function xD(t){return t.routerState.root}function SD(){let t=w(tn);return e=>{let r=t.get(ei);if(e!==r.components[0])return;let n=t.get(Eg),i=t.get(TD);t.get(ND)===1&&n.initialNavigation(),t.get(OD,null,W.Optional)?.setUpPreloading(),t.get(AD,null,W.Optional)?.init(),n.resetRootComponentType(r.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var TD=new F("",{factory:()=>new Se}),ND=new F("",{providedIn:"root",factory:()=>1});var OD=new F("");var _g=[];var bi=new F("HIGHLIGHT_OPTIONS"),Il;function LD(){if(!Il)try{Il=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:t=>t})}catch{}return Il}function RD(t){return LD()?.createHTML(t)||t}var Ml=(()=>{let e=class e{constructor(n,i,o){this.doc=n,this.platformId=i,this._options=o,this._ready=new Te(null),this.ready=this._ready.asObservable().pipe(Ue(s=>!!s),tt(1)),cs(i)&&(n.defaultView.hljs?this._ready.next(n.defaultView.hljs):(this._loadLibrary().pipe(ke(s=>this._options&&this._options.lineNumbersLoader?(n.defaultView.hljs=s,this.loadLineNumbers().pipe(le(a=>{a.activateLineNumbers(),this._ready.next(s)}))):(this._ready.next(s),Ne)),dt(s=>(console.error("[HLJS] ",s),Ne))).subscribe(),this._options?.themePath&&this.loadTheme(this._options.themePath)))}_loadLibrary(){if(this._options){if(this._options.fullLibraryLoader&&this._options.coreLibraryLoader)return et(()=>"The full library and the core library were imported, only one of them should be imported!");if(this._options.fullLibraryLoader&&this._options.languages)return et(()=>"The highlighting languages were imported they are not needed!");if(this._options.coreLibraryLoader&&!this._options.languages)return et(()=>"The highlighting languages were not imported!");if(!this._options.coreLibraryLoader&&this._options.languages)return et(()=>"The core library was not imported!");if(this._options.fullLibraryLoader)return this.loadFullLibrary();if(this._options.coreLibraryLoader&&this._options.languages&&Object.keys(this._options.languages).length)return this.loadCoreLibrary().pipe(ke(n=>this._loadLanguages(n)))}return et(()=>"Highlight.js library was not imported!")}_loadLanguages(n){let i=Object.entries(this._options.languages).map(([o,s])=>_l(s()).pipe(le(a=>n.registerLanguage(o,a))));return ha(...i).pipe(T(()=>n))}loadCoreLibrary(){return _l(this._options.coreLibraryLoader())}loadFullLibrary(){return _l(this._options.fullLibraryLoader())}loadLineNumbers(){return oe(this._options.lineNumbersLoader())}setTheme(n){cs(this.platformId)&&(this._themeLinkElement?this._themeLinkElement.href=n:this.loadTheme(n))}loadTheme(n){this._themeLinkElement=this.doc.createElement("link"),this._themeLinkElement.href=n,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.doc.head.appendChild(this._themeLinkElement)}};e.\u0275fac=function(i){return new(i||e)(N(Le),N(Gt),N(bi,8))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),_l=t=>oe(t).pipe(Ue(e=>!!e?.default),T(e=>e.default)),FD=(()=>{let e=class e{get hljs(){return this._hljs}constructor(n,i){this._loader=n,this._hljs=null,n.ready.subscribe(o=>{this._hljs=o,i&&i.config&&(o.configure(i.config),o.listLanguages().length<1&&console.error("[HighlightJS]: No languages were registered!"))})}highlight(n,{language:i,ignoreIllegals:o}){return this._loader.ready.pipe(T(s=>s.highlight(n,{language:i,ignoreIllegals:o})))}highlightAuto(n,i){return this._loader.ready.pipe(T(o=>o.highlightAuto(n,i)))}highlightElement(n){return this._loader.ready.pipe(T(i=>i.highlightElement(n)))}highlightAll(){return this._loader.ready.pipe(T(n=>n.highlightAll()))}configure(n){return this._loader.ready.pipe(T(i=>i.configure(n)))}registerLanguage(n,i){return this._loader.ready.pipe(le(o=>o.registerLanguage(n,i)))}unregisterLanguage(n){return this._loader.ready.pipe(le(i=>i.unregisterLanguage(n)))}registerAliases(n,{languageName:i}){return this._loader.ready.pipe(le(o=>o.registerAliases(n,{languageName:i})))}listLanguages(){return this._loader.ready.pipe(T(n=>n.listLanguages()))}getLanguage(n){return this._loader.ready.pipe(T(i=>i.getLanguage(n)))}safeMode(){return this._loader.ready.pipe(T(n=>n.safeMode()))}debugMode(){return this._loader.ready.pipe(T(n=>n.debugMode()))}lineNumbersBlock(n){return this._loader.ready.pipe(Ue(i=>!!i.lineNumbersBlock),le(i=>i.lineNumbersBlock(n)))}};e.\u0275fac=function(i){return new(i||e)(N(Ml),N(bi,8))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Mg=(()=>{let e=class e{constructor(n,i,o,s,a){this._hljs=i,this._sanitizer=o,this.platformId=s,this._options=a,this.highlighted=new de,this._nativeElement=n.nativeElement}ngOnChanges(n){cs(this.platformId)&&n?.code?.currentValue!==null&&n.code.currentValue!==n.code.previousValue&&(this.code?this.highlightElement(this.code,this.languages):this.setTextContent(""))}highlightElement(n,i){this.setTextContent(n),this._hljs.highlightAuto(n,i).subscribe(o=>{this.setInnerHTML(o?.value),this.lineNumbers&&this._options&&this._options.lineNumbersLoader&&this.addLineNumbers(),this.highlighted.emit(o)})}addLineNumbers(){this.destroyLineNumbersObserver(),xr.schedule(()=>{this._hljs.lineNumbersBlock(this._nativeElement).subscribe(),this._lineNumbersObs=new MutationObserver(()=>{this._nativeElement.firstElementChild&&this._nativeElement.firstElementChild.tagName.toUpperCase()==="TABLE"&&this._nativeElement.classList.add("hljs-line-numbers"),this.destroyLineNumbersObserver()}),this._lineNumbersObs.observe(this._nativeElement,{childList:!0})})}destroyLineNumbersObserver(){this._lineNumbersObs&&(this._lineNumbersObs.disconnect(),this._lineNumbersObs=null)}setTextContent(n){xr.schedule(()=>this._nativeElement.textContent=n)}setInnerHTML(n){xr.schedule(()=>this._nativeElement.innerHTML=RD(this._sanitizer.sanitize(Nt.HTML,n)||""))}};e.\u0275fac=function(i){return new(i||e)(L(Qe),L(FD),L(Vc),L(Gt),L(bi,8))},e.\u0275dir=ye({type:e,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(i,o){i&2&&lr("hljs",!0)},inputs:{code:["highlight","code"],languages:"languages",lineNumbers:"lineNumbers"},outputs:{highlighted:"highlighted"},standalone:!0,features:[Ut]});let t=e;return t})();var Ag={providers:[Ig(_g),{provide:bi,useValue:{lineNumbers:!0,coreLibraryLoader:()=>import("./chunk-5RJ24MPY.js"),lineNumbersLoader:()=>import("./chunk-AZJJSKFN.js"),themePath:"node_modules/highlight.js/styles/github.css",languages:{typescript:()=>import("./chunk-GOCHF37Q.js"),css:()=>import("./chunk-A2VLP2HC.js"),xml:()=>import("./chunk-T7FSH4OL.js")}}}]};var kg=(()=>{let e=class e{constructor(n,i){this._renderer=n,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,i){this._renderer.setProperty(this._elementRef.nativeElement,n,i)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(i){return new(i||e)(L(Wt),L(Qe))},e.\u0275dir=ye({type:e});let t=e;return t})(),Mi=(()=>{let e=class e extends kg{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=Ht(e)))(o||e)}})(),e.\u0275dir=ye({type:e,features:[st]});let t=e;return t})(),_r=new F("NgValueAccessor"),kD={provide:_r,useExisting:xt(()=>Tl),multi:!0},Tl=(()=>{let e=class e extends Mi{writeValue(n){this.setProperty("checked",n)}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=Ht(e)))(o||e)}})(),e.\u0275dir=ye({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(i,o){i&1&&fe("change",function(a){return o.onChange(a.target.checked)})("blur",function(){return o.onTouched()})},features:[sn([kD]),st]});let t=e;return t})(),VD={provide:_r,useExisting:xt(()=>Vs),multi:!0};function jD(){let t=Zt()?Zt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var QD=new F("CompositionEventMode"),Vs=(()=>{let e=class e extends kg{constructor(n,i,o){super(n,i),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!jD())}writeValue(n){let i=n??"";this.setProperty("value",i)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(i){return new(i||e)(L(Wt),L(Qe),L(QD,8))},e.\u0275dir=ye({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&fe("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[sn([VD]),st]});let t=e;return t})();var Vg=new F("NgValidators"),jg=new F("NgAsyncValidators");function Qg(t){return t!=null}function Bg(t){return Sn(t)?oe(t):t}function $g(t){let e={};return t.forEach(r=>{e=r!=null?D(D({},e),r):e}),Object.keys(e).length===0?null:e}function Ug(t,e){return e.map(r=>r(t))}function BD(t){return!t.validate}function Hg(t){return t.map(e=>BD(e)?e:r=>e.validate(r))}function $D(t){if(!t)return null;let e=t.filter(Qg);return e.length==0?null:function(r){return $g(Ug(r,e))}}function Gg(t){return t!=null?$D(Hg(t)):null}function UD(t){if(!t)return null;let e=t.filter(Qg);return e.length==0?null:function(r){let n=Ug(r,e).map(Bg);return da(n).pipe(T($g))}}function zg(t){return t!=null?UD(Hg(t)):null}function xg(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Wg(t){return t._rawValidators}function qg(t){return t._rawAsyncValidators}function Al(t){return t?Array.isArray(t)?t:[t]:[]}function Os(t,e){return Array.isArray(t)?t.includes(e):t===e}function Sg(t,e){let r=Al(e);return Al(t).forEach(i=>{Os(r,i)||r.push(i)}),r}function Tg(t,e){return Al(e).filter(r=>!Os(t,r))}var Ls=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Gg(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=zg(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return this.control?this.control.hasError(e,r):!1}getError(e,r){return this.control?this.control.getError(e,r):null}},Er=class extends Ls{get formDirective(){return null}get path(){return null}},_i=class extends Ls{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Rs=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},HD={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},TI=se(D({},HD),{"[class.ng-submitted]":"isSubmitted"}),Zg=(()=>{let e=class e extends Rs{constructor(n){super(n)}};e.\u0275fac=function(i){return new(i||e)(L(_i,2))},e.\u0275dir=ye({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&lr("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[st]});let t=e;return t})(),Yg=(()=>{let e=class e extends Rs{constructor(n){super(n)}};e.\u0275fac=function(i){return new(i||e)(L(Er,10))},e.\u0275dir=ye({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&lr("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[st]});let t=e;return t})();var Ei="VALID",Ts="INVALID",br="PENDING",Ii="DISABLED";function Nl(t){return(js(t)?t.validators:t)||null}function GD(t){return Array.isArray(t)?Gg(t):t||null}function Ol(t,e){return(js(e)?e.asyncValidators:t)||null}function zD(t){return Array.isArray(t)?zg(t):t||null}function js(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Kg(t,e,r){let n=t.controls;if(!(e?Object.keys(n):n).length)throw new E(1e3,"");if(!n[r])throw new E(1001,"")}function Jg(t,e,r){t._forEachChild((n,i)=>{if(r[i]===void 0)throw new E(1002,"")})}var Ir=class{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===Ei}get invalid(){return this.status===Ts}get pending(){return this.status==br}get disabled(){return this.status===Ii}get enabled(){return this.status!==Ii}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Sg(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Sg(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Tg(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Tg(e,this._rawAsyncValidators))}hasValidator(e){return Os(this._rawValidators,e)}hasAsyncValidator(e){return Os(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=br,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=Ii,this.errors=null,this._forEachChild(n=>{n.disable(se(D({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(se(D({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=Ei,this._forEachChild(n=>{n.enable(se(D({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(se(D({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ei||this.status===br)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ii:Ei}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=br,this._hasOwnPendingAsyncValidator=!0;let r=Bg(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(r.emitEvent!==!1)}get(e){let r=e;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((n,i)=>n&&n._find(i),this)}getError(e,r){let n=r?this.get(r):this;return n&&n.errors?n.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new de,this.statusChanges=new de}_calculateStatus(){return this._allControlsDisabled()?Ii:this.errors?Ts:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(br)?br:this._anyControlsHaveStatus(Ts)?Ts:Ei}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){js(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let r=this._parent&&this._parent.dirty;return!e&&!!r&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=GD(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=zD(this._rawAsyncValidators)}},Fs=class extends Ir{constructor(e,r,n){super(Nl(r),Ol(n,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,r){return this.controls[e]?this.controls[e]:(this.controls[e]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(e,r,n={}){this.registerControl(e,r),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(e,r,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],r&&this.registerControl(e,r),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,r={}){Jg(this,!0,e),Object.keys(e).forEach(n=>{Kg(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){e!=null&&(Object.keys(e).forEach(n=>{let i=this.controls[n];i&&i.patchValue(e[n],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e={},r={}){this._forEachChild((n,i)=>{n.reset(e?e[i]:null,{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(e,r,n)=>(e[n]=r.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(r,n)=>n._syncPendingControls()?!0:r);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(r=>{let n=this.controls[r];n&&e(n,r)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[r,n]of Object.entries(this.controls))if(this.contains(r)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(r,n,i)=>((n.enabled||this.disabled)&&(r[i]=n.value),r))}_reduceChildren(e,r){let n=e;return this._forEachChild((i,o)=>{n=r(n,i,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var xl=class extends Fs{};var Xg=new F("CallSetDisabledState",{providedIn:"root",factory:()=>Ll}),Ll="always";function WD(t,e){return[...e.path,t]}function Ng(t,e,r=Ll){Rl(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||r==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ZD(t,e),KD(t,e),YD(t,e),qD(t,e)}function Og(t,e,r=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),ks(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Ps(t,e){t.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function qD(t,e){if(e.valueAccessor.setDisabledState){let r=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(r),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(r)})}}function Rl(t,e){let r=Wg(t);e.validator!==null?t.setValidators(xg(r,e.validator)):typeof r=="function"&&t.setValidators([r]);let n=qg(t);e.asyncValidator!==null?t.setAsyncValidators(xg(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();Ps(e._rawValidators,i),Ps(e._rawAsyncValidators,i)}function ks(t,e){let r=!1;if(t!==null){if(e.validator!==null){let i=Wg(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==e.validator);o.length!==i.length&&(r=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let i=qg(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==e.asyncValidator);o.length!==i.length&&(r=!0,t.setAsyncValidators(o))}}}let n=()=>{};return Ps(e._rawValidators,n),Ps(e._rawAsyncValidators,n),r}function ZD(t,e){e.valueAccessor.registerOnChange(r=>{t._pendingValue=r,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&e0(t,e)})}function YD(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&e0(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function e0(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function KD(t,e){let r=(n,i)=>{e.valueAccessor.writeValue(n),i&&e.viewToModelUpdate(n)};t.registerOnChange(r),e._registerOnDestroy(()=>{t._unregisterOnChange(r)})}function JD(t,e){t==null,Rl(t,e)}function XD(t,e){return ks(t,e)}function e5(t,e){if(!t.hasOwnProperty("model"))return!1;let r=t.model;return r.isFirstChange()?!0:!Object.is(e,r.currentValue)}function t5(t){return Object.getPrototypeOf(t.constructor)===Mi}function n5(t,e){t._syncPendingControls(),e.forEach(r=>{let n=r.control;n.updateOn==="submit"&&n._pendingChange&&(r.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function r5(t,e){if(!e)return null;Array.isArray(e);let r,n,i;return e.forEach(o=>{o.constructor===Vs?r=o:t5(o)?n=o:i=o}),i||n||r||null}function i5(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}function Lg(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}function Rg(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ns=class extends Ir{constructor(e=null,r,n){super(Nl(r),Ol(n,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),js(r)&&(r.nonNullable||r.initialValueIsDefault)&&(Rg(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Lg(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Lg(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Rg(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var o5=t=>t instanceof Ns;var s5={provide:_r,useExisting:xt(()=>Fl),multi:!0},Fl=(()=>{let e=class e extends Mi{writeValue(n){let i=n??"";this.setProperty("value",i)}registerOnChange(n){this.onChange=i=>{n(i==""?null:parseFloat(i))}}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=Ht(e)))(o||e)}})(),e.\u0275dir=ye({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,o){i&1&&fe("input",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},features:[sn([s5]),st]});let t=e;return t})();var a5=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Bt({type:e}),e.\u0275inj=Qt({});let t=e;return t})();var t0=new F("NgModelWithFormControlWarning");var u5={provide:Er,useExisting:xt(()=>Pl)},Pl=(()=>{let e=class e extends Er{constructor(n,i,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new de,this._setValidators(n),this._setAsyncValidators(i)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ks(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){let i=this.form.get(n.path);return Ng(i,n,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),i}getControl(n){return this.form.get(n.path)}removeControl(n){Og(n.control||null,n,!1),i5(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,i){this.form.get(n.path).setValue(i)}onSubmit(n){return this.submitted=!0,n5(this.form,this.directives),this.ngSubmit.emit(n),n?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_updateDomValue(){this.directives.forEach(n=>{let i=n.control,o=this.form.get(n.path);i!==o&&(Og(i||null,n),o5(o)&&(Ng(o,n,this.callSetDisabledState),n.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){let i=this.form.get(n.path);JD(i,n),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){let i=this.form.get(n.path);i&&XD(i,n)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Rl(this.form,this),this._oldForm&&ks(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(i){return new(i||e)(L(Vg,10),L(jg,10),L(Xg,8))},e.\u0275dir=ye({type:e,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&fe("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[sn([u5]),st,Ut]});let t=e;return t})();var c5={provide:_i,useExisting:xt(()=>kl)},kl=(()=>{let e=class e extends _i{set isDisabled(n){}constructor(n,i,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new de,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=r5(this,s)}ngOnChanges(n){this._added||this._setUpControl(),e5(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return WD(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(i){return new(i||e)(L(Er,13),L(Vg,10),L(jg,10),L(_r,10),L(t0,8))},e.\u0275dir=ye({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[sn([c5]),st,Ut]});let t=e;return t})(),l5={provide:_r,useExisting:xt(()=>Qs),multi:!0};function n0(t,e){return t==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function d5(t){return t.split(":")[0]}var Qs=(()=>{let e=class e extends Mi{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(n){this._compareWith=n}writeValue(n){this.value=n;let i=this._getOptionId(n),o=n0(i,n);this.setProperty("value",o)}registerOnChange(n){this.onChange=i=>{this.value=this._getOptionValue(i),n(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(n){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),n))return i;return null}_getOptionValue(n){let i=d5(n);return this._optionMap.has(i)?this._optionMap.get(i):n}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=Ht(e)))(o||e)}})(),e.\u0275dir=ye({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,o){i&1&&fe("change",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[sn([l5]),st]});let t=e;return t})(),r0=(()=>{let e=class e{constructor(n,i,o){this._element=n,this._renderer=i,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(n){this._select!=null&&(this._select._optionMap.set(this.id,n),this._setElementValue(n0(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._setElementValue(n),this._select&&this._select.writeValue(this._select.value)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(i){return new(i||e)(L(Qe),L(Wt),L(Qs,9))},e.\u0275dir=ye({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let t=e;return t})(),f5={provide:_r,useExisting:xt(()=>i0),multi:!0};function Fg(t,e){return t==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function h5(t){return t.split(":")[0]}var i0=(()=>{let e=class e extends Mi{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(n){this._compareWith=n}writeValue(n){this.value=n;let i;if(Array.isArray(n)){let o=n.map(s=>this._getOptionId(s));i=(s,a)=>{s._setSelected(o.indexOf(a.toString())>-1)}}else i=(o,s)=>{o._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(n){this.onChange=i=>{let o=[],s=i.selectedOptions;if(s!==void 0){let a=s;for(let u=0;u<a.length;u++){let c=a[u],l=this._getOptionValue(c.value);o.push(l)}}else{let a=i.options;for(let u=0;u<a.length;u++){let c=a[u];if(c.selected){let l=this._getOptionValue(c.value);o.push(l)}}}this.value=o,n(o)}}_registerOption(n){let i=(this._idCounter++).toString();return this._optionMap.set(i,n),i}_getOptionId(n){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,n))return i;return null}_getOptionValue(n){let i=h5(n);return this._optionMap.has(i)?this._optionMap.get(i)._value:n}};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=Ht(e)))(o||e)}})(),e.\u0275dir=ye({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,o){i&1&&fe("change",function(a){return o.onChange(a.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[sn([f5]),st]});let t=e;return t})(),o0=(()=>{let e=class e{constructor(n,i,o){this._element=n,this._renderer=i,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(n){this._select!=null&&(this._value=n,this._setElementValue(Fg(this.id,n)),this._select.writeValue(this._select.value))}set value(n){this._select?(this._value=n,this._setElementValue(Fg(this.id,n)),this._select.writeValue(this._select.value)):this._setElementValue(n)}_setElementValue(n){this._renderer.setProperty(this._element.nativeElement,"value",n)}_setSelected(n){this._renderer.setProperty(this._element.nativeElement,"selected",n)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(i){return new(i||e)(L(Qe),L(Wt),L(i0,9))},e.\u0275dir=ye({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let t=e;return t})();var p5=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Bt({type:e}),e.\u0275inj=Qt({imports:[a5]});let t=e;return t})(),Sl=class extends Ir{constructor(e,r,n){super(Nl(r),Ol(n,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,r={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}insert(e,r,n={}){this.controls.splice(e,0,r),this._registerControl(r),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,r={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:r.emitEvent})}setControl(e,r,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),r&&(this.controls.splice(i,0,r),this._registerControl(r)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,r={}){Jg(this,!1,e),e.forEach((n,i)=>{Kg(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){e!=null&&(e.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e=[],r={}){this._forEachChild((n,i)=>{n.reset(e[i],{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(r=>r._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((r,n)=>n._syncPendingControls()?!0:r,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((r,n)=>{e(r,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(r=>r.enabled&&e(r))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Pg(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var s0=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let n=new e;return n.useNonNullable=!0,n}group(n,i=null){let o=this._reduceControls(n),s={};return Pg(i)?s=i:i!==null&&(s.validators=i.validator,s.asyncValidators=i.asyncValidator),new Fs(o,s)}record(n,i=null){let o=this._reduceControls(n);return new xl(o,i)}control(n,i,o){let s={};return this.useNonNullable?(Pg(i)?s=i:(s.validators=i,s.asyncValidators=o),new Ns(n,se(D({},s),{nonNullable:!0}))):new Ns(n,i,o)}array(n,i,o){let s=n.map(a=>this._createControl(a));return new Sl(s,i,o)}_reduceControls(n){let i={};return Object.keys(n).forEach(o=>{i[o]=this._createControl(n[o])}),i}_createControl(n){if(n instanceof Ns)return n;if(n instanceof Ir)return n;if(Array.isArray(n)){let i=n[0],o=n.length>1?n[1]:null,s=n.length>2?n[2]:null;return this.control(i,o,s)}else return this.control(n)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var a0=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:t0,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:Xg,useValue:n.callSetDisabledState??Ll}]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Bt({type:e}),e.\u0275inj=Qt({imports:[p5]});let t=e;return t})();var h0=Bl(c0());var f0=Bl(d0());var Bs=class{constructor(e){this.color=e}toRgb(e=1){if(typeof this.color=="string")throw new Error("Not supported yet for string color");let[r,n,i]=this.color;return{r:Math.floor(r*(1/e))*e,g:Math.floor(n*(1/e))*e,b:Math.floor(i*(1/e))*e}}toUint8(){if(typeof this.color=="string")throw new Error("Not supported yet for string color");let{r:e,g:r,b:n}=this.toRgb(10);return e<<16|r<<8|n<<0}};var $s=class{get asBlob(){return new Blob([this.buffer.subarray(0,this.writer.end())],{type:"image/gif"})}constructor({width:e,height:r,numberOfFrames:n}){this.width=e,this.height=r,this.buffer=new Uint8Array(e*r*n),this.writer=new f0.GifWriter(this.buffer,e,r,{loop:void 0})}addFrame(e,r){let i=[],o=[];for(let a=0;a<this.width*this.height;a++){let c=this.extractRGBFromPixels(e,a*4).toUint8(),l=o.indexOf(c);l===-1?(i.push(o.length),o.push(c)):i.push(l)}o.length=this.paletteSize(o);let s={palette:o,delay:Math.round((r?.delayInSecondes??1)*100)};this.writer.addFrame(0,0,this.width,this.height,i,s)}extractRGBFromPixels(e,r){return new Bs(e.slice(r,r+3))}paletteSize(e){let r=1;for(;r<e.length;)r<<=1;return e.length>255&&console.log("Gif can't have more than 256 colors in palette"),r}};var Us=class t{static generate(e){new t(e).saveAnimation()}constructor(e){this.dom=e.dom,this.animation=e.animation,this.onStart=e.onStart,this.onFinish=e.onFinish,this.loadFrame=e.loadFrame,this.gif=new $s({width:e.width,height:e.height,numberOfFrames:e.animation.numberOfFrame}),this.nextFrameLoadedSubscription=e.frameLoaded.subscribe(()=>this.saveFrame())}saveAnimation(){this.animation.hasNoFrame||(this.animation.start(),this.onStart?.(),this.loadNextFrame())}loadNextFrame(){let e=this.animation.nextFrame();if(!e){this.downloadGif(),this.onFinish?.(),this.nextFrameLoadedSubscription.unsubscribe();return}this.loadFrame(e)}saveFrame(){let e=oe(h0.default.toPixelData(this.dom)).subscribe(r=>{this.gif.addFrame(r),this.loadNextFrame(),e.unsubscribe()})}downloadGif(){let e=document.createElement("a");e.href=URL.createObjectURL(this.gif.asBlob),e.download="animation.gif",e.click()}};var Hs=class{constructor(){this._frameList=[]}get hasNoFrame(){return this._frameList.length<=0}get numberOfFrame(){return this._frameList.length}get hasStart(){return this.currentFrameIndex!==void 0}get currentFrame(){if(this.currentFrameIndex!==void 0)return this._frameList.at(this.currentFrameIndex)}get frameList(){return this._frameList}start(){this.currentFrameIndex=-1}stop(){this.currentFrameIndex=void 0}nextFrame(){if(this.currentFrameIndex===void 0)throw new Error("Can't get next frame");let e=this.currentFrameIndex+1;if(e>=this._frameList.length){this.stop();return}return this.currentFrameIndex=e,this.currentFrame}addFrame(e){this._frameList.push(e)}removeFrame(e){this._frameList.splice(e,1)}copy(){return new this.constructor}};var Ai=class t extends Hs{get nbMaxRow(){return Math.max(...this._frameList.map(e=>t.nbRowForCode(e.code)))}static nbRowForCode(e){let r=1,n=0;return e.split("").forEach(i=>{i===`
`&&(r++,n=0),n++,n>64&&(r++,n=0)}),r}};var C5=t=>({color:t}),p0=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=ve({type:e,selectors:[["app-title-bar"]],inputs:{theme:"theme"},standalone:!0,features:[Ce],decls:6,vars:3,consts:[[1,"window-state"],[1,"window-action","window-close"],[1,"window-action","window-minimize"],[1,"window-action","window-maximize"],["contenteditable","true",1,"window-title",3,"ngStyle"]],template:function(i,o){i&1&&(A(0,"div",0),ce(1,"div",1)(2,"div",2)(3,"div",3),I(),A(4,"h2",4),re(5," Snippet title "),I()),i&2&&(he(4),ge("ngStyle",qt(1,C5,o.theme.titleColor)))},dependencies:[we,an],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;background-color:#494981;padding:var(--padding-2) var(--padding-4)}.window-state[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-1)}.window-action[_ngcontent-%COMP%]{width:12px;height:12px;border:1px solid black;border-radius:50%}.window-close[_ngcontent-%COMP%]{background-color:red;border-color:brown}.window-minimize[_ngcontent-%COMP%]{background-color:#ff0;border-color:orange}.window-maximize[_ngcontent-%COMP%]{background-color:#32cd32;border-color:green}.window-title[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical;text-overflow:ellipsis;outline:0px solid transparent;margin:0}"],changeDetection:0});let t=e;return t})();var g0=(()=>{let e=class e{constructor(n){this.elementReference=n,this.hasChange=new de}ngAfterViewInit(){this.observer=new MutationObserver(()=>this.hasChange.emit());let n={childList:!0,subtree:!0};this.observer.observe(this.elementReference.nativeElement,n)}ngOnDestroy(){this.observer.disconnect()}};e.\u0275fac=function(i){return new(i||e)(L(Qe))},e.\u0275dir=ye({type:e,selectors:[["","hasChange",""]],outputs:{hasChange:"hasChange"},standalone:!0});let t=e;return t})();var D5=t=>[t],w5=t=>({"caret-color":t});function b5(t,e){if(t&1){let r=xn();A(0,"div",2)(1,"code",3),fe("hasChange",function(){St(r);let i=Ge();return Tt(i.codeTagHasChange())}),I(),A(2,"textarea",4,5),fe("input",function(){St(r);let i=is(3),o=Ge();return Tt(o.codeModify(i))}),re(4),I()()}if(t&2){let r=Ge();he(1),ge("highlight",r.code)("languages",qt(7,D5,r.language))("lineNumbers",!1),he(1),ge("rows",r.windowConfiguration.numberRow)("cols",r.windowConfiguration.numberColumn)("ngStyle",qt(9,w5,r.theme.caretColor)),he(2),vc(r.code)}}var E5=()=>["xml"];function I5(t,e){if(t&1&&ce(0,"code",6),t&2){let r=Ge();ge("highlight",r.code)("languages",hp(3,E5))("lineNumbers",!1)}}var Gs=(()=>{let e=class e{constructor(){this.domHasChange=new de,this.codeHasChange=new de}codeTagHasChange(){this.domHasChange.next()}codeModify(n){this.codeHasChange.emit({value:n.value,position:n.selectionEnd})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=ve({type:e,selectors:[["app-window"]],inputs:{language:"language",code:"code",theme:"theme",windowConfiguration:"windowConfiguration"},outputs:{domHasChange:"domHasChange",codeHasChange:"codeHasChange"},standalone:!0,features:[Ce],decls:3,vars:2,consts:[[3,"theme"],["class","stack-child code-container"],[1,"stack-child","code-container"],[1,"code",3,"highlight","languages","lineNumbers","hasChange"],[1,"textarea-code","textarea-fixed","p-1",3,"rows","cols","ngStyle","input"],["textArea",""],[1,"code",3,"highlight","languages","lineNumbers"]],template:function(i,o){i&1&&(ce(0,"app-title-bar",0),mt(1,b5,5,11,"div",1)(2,I5,1,4)),i&2&&(ge("theme",o.theme),he(1),on(1,o.windowConfiguration.isEditable?1:2))},dependencies:[p0,g0,Mg,we,an],styles:["[_nghost-%COMP%]{display:block;border-radius:14px;overflow:hidden}.code[_ngcontent-%COMP%], .textarea-code[_ngcontent-%COMP%]{display:inline-block;font-size:var(--font-size, 16px);font-family:monospace;white-space:pre;text-wrap:wrap;width:100%;padding:var(--padding-4)}.code-container[_ngcontent-%COMP%]{position:relative;--padding: 16px;--font-size: 16px}.code-container[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%]{position:absolute;font-size:var(--font-size);top:calc(var(--padding));left:calc(var(--padding) + 2ch);width:1ch;height:calc(var(--font-size) * 1.2);background-color:#f009}.textarea-code[_ngcontent-%COMP%]{outline:0px solid transparent;-webkit-text-fill-color:transparent;background-color:transparent;border:0}.textarea-fixed[_ngcontent-%COMP%]{resize:none}"],changeDetection:0});let t=e;return t})();var _5=["codeContainer"],M5=t=>({width:t});function A5(t,e){if(t&1&&(A(0,"p",5),re(1," Render Gif "),I()),t&2){let r=Ge();ge("ngStyle",qt(1,M5,r.codeWidth))}}function x5(t,e){if(t&1){let r=xn();A(0,"div")(1,"button",6),fe("click",function(){St(r);let i=Ge();return Tt(i.addFrameToAnimation())}),re(2," Add frame "),I(),A(3,"button",7),fe("click",function(){St(r);let i=Ge();return Tt(i.saveCodeAnimation())}),re(4," Save "),I()()}if(t&2){let r=Ge();he(3),ge("disabled",r.codeAnimation.hasNoFrame)}}var S5=(t,e,r)=>({width:t,padding:e,background:r}),m0=(()=>{let e=class e{set initialCode(n){this.code===""&&(this.code=n)}constructor(n){this.changeDetectorReference=n,this.animation=new de,this.code="",this.codeWidth="64ch",this.codeConfiguration={numberRow:1,numberColumn:64,isEditable:!0,hideTextSelection:!1},this.codeAnimation=new Ai,this.codeChangeFromAnimation$=new Se}deleteFrame(n){this.codeAnimation.removeFrame(n),this.emitCodeAnimationInformation()}codeHasChange(n){this.codeAnimation.hasStart||(this.code=n.value,this.codeConfiguration.numberRow=Ai.nbRowForCode(this.code))}domHasChange(){this.codeAnimation.hasStart&&this.codeChangeFromAnimation$.next()}addFrameToAnimation(){this.codeAnimation.addFrame({code:this.code,caretPosition:0}),this.emitCodeAnimationInformation()}saveCodeAnimation(){this.codeAnimation.hasNoFrame||Us.generate({animation:this.codeAnimation,width:this.codeContainer.nativeElement.clientWidth,height:this.codeContainer.nativeElement.clientHeight,dom:this.codeContainer.nativeElement,scaleFactor:2,frameLoaded:this.codeChangeFromAnimation$.asObservable(),onStart:()=>{this.codeConfiguration.hideTextSelection=!0,this.codeConfiguration.numberRow=this.codeAnimation.nbMaxRow,this.changeDetectorReference.detectChanges()},loadFrame:n=>{if(this.isAlreadyLoad(n)){this.codeChangeFromAnimation$.next();return}this.code=n.code,this.changeDetectorReference.detectChanges()},onFinish:()=>{this.codeConfiguration.hideTextSelection=!1,this.changeDetectorReference.detectChanges()}})}isAlreadyLoad(n){return this.code===n.code}emitCodeAnimationInformation(){this.animation.emit({frameList:this.codeAnimation.frameList,maxRow:this.codeAnimation.nbMaxRow})}};e.\u0275fac=function(i){return new(i||e)(L(An))},e.\u0275cmp=ve({type:e,selectors:[["app-code-editor"]],viewQuery:function(i,o){if(i&1&&vp(_5,5),i&2){let s;wc(s=bc())&&(o.codeContainer=s.first)}},inputs:{initialCode:"initialCode",language:"language",theme:"theme"},outputs:{animation:"animation"},standalone:!0,features:[Ce],decls:6,vars:11,consts:[[1,"stack-child","code-editor"],[3,"ngStyle"],["codeContainer",""],[3,"language","code","theme","windowConfiguration","codeHasChange","domHasChange"],["class","spinner",3,"ngStyle"],[1,"spinner",3,"ngStyle"],[1,"secondary",3,"click"],[1,"primary",3,"disabled","click"]],template:function(i,o){i&1&&(A(0,"div",0)(1,"div",1,2)(3,"app-window",3),fe("codeHasChange",function(a){return o.codeHasChange(a)})("domHasChange",function(){return o.domHasChange()}),I()(),mt(4,A5,2,3,"p",4),I(),mt(5,x5,5,1,"div")),i&2&&(he(1),ge("ngStyle",gp(7,S5,o.codeWidth,o.theme.padding,o.theme.background)),he(2),ge("language",o.language)("code",o.code)("theme",o.theme)("windowConfiguration",o.codeConfiguration),he(1),on(4,o.codeAnimation.hasStart?4:-1),he(1),on(5,o.codeAnimation.hasStart?-1:5))},dependencies:[we,an,Gs],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.spinner[_ngcontent-%COMP%]{padding:var(--padding-5);margin:0;z-index:0;background-color:#000}"],changeDetection:0});let t=e;return t})();var T5=(t,e)=>({width:"64ch",padding:t,background:e}),v0=(()=>{let e=class e{get code(){return this.frame.code}get configuration(){return{isEditable:!1,numberRow:this.dimension.row,numberColumn:this.dimension.column,hideTextSelection:!1}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=ve({type:e,selectors:[["app-code-viewer"]],inputs:{frame:"frame",dimension:"dimension",theme:"theme",language:"language"},standalone:!0,features:[Ce],decls:2,vars:8,consts:[[1,"screen",3,"ngStyle"],[3,"language","code","theme","windowConfiguration"]],template:function(i,o){i&1&&(A(0,"div",0),ce(1,"app-window",1),I()),i&2&&(ge("ngStyle",pp(5,T5,o.theme.padding,o.theme.background)),he(1),ge("language",o.language)("code",o.code)("theme",o.theme)("windowConfiguration",o.configuration))},dependencies:[we,an,Gs],changeDetection:0});let t=e;return t})();var y0=["html","javascript"];var C0=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=ve({type:e,selectors:[["app-arrow-left"]],standalone:!0,features:[Ce],decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16"],["fill-rule","evenodd","d","M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"]],template:function(i,o){i&1&&(ar(),A(0,"svg",0),ce(1,"path",1),I())},dependencies:[we],encapsulation:2,changeDetection:0});let t=e;return t})();var D0=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=ve({type:e,selectors:[["app-arrow-right"]],standalone:!0,features:[Ce],decls:2,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16"],["fill-rule","evenodd","d","M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"]],template:function(i,o){i&1&&(ar(),A(0,"svg",0),ce(1,"path",1),I())},dependencies:[we],encapsulation:2,changeDetection:0});let t=e;return t})();var zs=(()=>{let e=class e{get currentTheme(){return{name:this.themeName,variant:this.themeVariant}}get themeNameList(){return["blue","green"]}constructor(n){this.themeInLocalStorageKey="previous-theme",this.htmlTag=n.querySelector("html")}loadTheme(n){!n.name||!n.variant||(n.name&&(this.themeName=n.name),n.variant&&(this.themeVariant=n.variant),this.saveCurrentTheme(),this.reloadTheme())}loadDefaultTheme(){let n=this.getThemeInLocalStorage();this.themeName=n?.name??"blue",this.themeVariant=n?.variant??"dark",this.reloadTheme()}saveCurrentTheme(){let n={name:this.themeName,variant:this.themeVariant},i=JSON.stringify(n);localStorage.setItem(this.themeInLocalStorageKey,i)}getThemeInLocalStorage(){let n=localStorage.getItem(this.themeInLocalStorageKey);if(n)return JSON.parse(n)}reloadTheme(){this.htmlTag?.setAttribute("theme",`${this.themeName}-${this.themeVariant}`)}};e.\u0275fac=function(i){return new(i||e)(N(Le))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function N5(t,e){return this.theme}var O5=t=>({column:64,row:t});function L5(t,e){if(t&1){let r=xn();A(0,"div",19)(1,"div",20)(2,"button",21),fe("click",function(){let o=St(r).$index;Ge(2);let s=is(1);return Tt(s.deleteFrame(o))}),re(3," X "),I()(),A(4,"div",22)(5,"p"),re(6),I(),ce(7,"app-code-viewer",23),I()()}if(t&2){let r=e.$implicit,n=e.$index,i=Ge(2);he(6),fr(" Frame ",n," "),he(1),ge("language",i.language)("theme",i.theme)("frame",r)("dimension",qt(5,O5,i.animation.maxRow))}}function R5(t,e){if(t&1&&(A(0,"button",16),ce(1,"app-arrow-left"),I(),ns(2,L5,8,7,"div",24,mc),A(4,"button",17),ce(5,"app-arrow-right",18),I()),t&2){let r=Ge();rs(2,r.animation.frameList)}}function F5(t,e){t&1&&(A(0,"p",18),re(1," No frame yet ! Try something :) "),I())}function P5(t,e){if(t&1&&(A(0,"option",25),re(1),I()),t&2){let r=e.$implicit;ge("value",r),he(1),fr(" ",r," ")}}function k5(t,e){if(t&1&&(A(0,"option",25),re(1),I()),t&2){let r=e.$implicit;ge("value",r),he(1),fr(" ",r," ")}}function V5(t,e){if(t&1){let r=xn();A(0,"ul",26)(1,"li")(2,"button",27),fe("click",function(){St(r);let i=Ge();return Tt(i.saveAsGif())}),re(3," Gif "),I()(),A(4,"li")(5,"button",27),fe("click",function(){St(r);let i=Ge();return Tt(i.saveAsVideo())}),re(6," Video "),I()()()}}var b0=(()=>{let e=class e{get theme(){return{background:this.getToolsValue("hasBackground")?"var(--gradient)":"transparent",padding:this.getToolsValue("hasPadding")?"var(--padding-5)":"0",codeSyntaxThemeName:"androidstudio",titleColor:"white",caretColor:"white"}}get language(){return this.getToolsValue("language")}get isExportable(){return this.animation.frameList.length!==0}constructor(n,i,o){this.hljsLoader=n,this.themeService=i,this.showExportType=!1,this.animation={frameList:[],maxRow:0},this.languagesList=["auto"].concat(y0),this.saveCurrentFrameSubject$=new Se,this.hljsLoader.setTheme("//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/androidstudio.min.css"),this.themeNameList=i.themeNameList;let s=i.currentTheme;this.toolsForm=o.group({language:"auto",theme:s.name,loopIteration:0,hasBackground:!0,hasPadding:!0,isDarkMode:s.variant==="dark"}),this.saveCurrentFrame$=this.saveCurrentFrameSubject$.asObservable()}updateTheme(){this.themeService.loadTheme({name:this.getToolsValue("theme"),variant:this.getToolsValue("isDarkMode")?"dark":"light"})}loadAnimation(n){this.animation={frameList:[...n.frameList],maxRow:n.maxRow}}addCurrentFrame(){}saveAsGif(){this.showExportType=!1}saveAsVideo(){this.showExportType=!1}getToolsValue(n){return this.toolsForm.get(n)?.value}};e.\u0275fac=function(i){return new(i||e)(L(Ml),L(zs),L(s0))},e.\u0275cmp=ve({type:e,selectors:[["app-code-to-gif"]],standalone:!0,features:[Ce],decls:41,vars:6,consts:[[3,"language","theme","animation"],["codeEditor",""],[1,"frame-list"],[1,"tools-area","tools-bar",3,"formGroup"],[1,"label"],["formControlName","language"],["type","number","formControlName","loopIteration"],["formControlName","theme",3,"ngModelChange"],[1,"export-and-save"],[1,"export-container"],[1,"primary",3,"disabled","click"],["class","export-type"],[1,"secondary",3,"click"],["type","checkbox","formControlName","hasBackground"],["type","checkbox","formControlName","isDarkMode",3,"ngModelChange"],["type","checkbox","formControlName","hasPadding"],[1,"frame-previous","invisible","text-primary","xl"],[1,"frame-next","invisible","text-primary","xl"],[1,"xl"],[1,"frame"],[1,"frame-actions"],["aria-label","Delete frame",1,"secondary","icon",3,"click"],[1,"frame-card"],[3,"language","theme","frame","dimension"],["class","frame"],[3,"value"],[1,"export-type"],[1,"invisible",3,"click"]],template:function(i,o){i&1&&(A(0,"app-code-editor",0,1),fe("animation",function(a){return o.loadAnimation(a)}),I(),A(2,"div",2),mt(3,R5,6,0)(4,F5,2,0),I(),A(5,"div",3)(6,"div")(7,"p",4),re(8," Language "),I(),A(9,"select",5),ns(10,P5,2,2,"option",25,mc),I()(),A(12,"div")(13,"p",4),re(14," Loop iteration "),I(),ce(15,"input",6),I(),A(16,"div")(17,"p",4),re(18," Theme "),I(),A(19,"select",7),fe("ngModelChange",function(){return o.updateTheme()}),ns(20,k5,2,2,"option",25,N5,!0),I()(),A(22,"div",8)(23,"div",9)(24,"button",10),fe("click",function(){return o.showExportType=!0}),re(25," Export "),I(),mt(26,V5,7,0,"ul",11),I(),A(27,"button",12),fe("click",function(){return o.addCurrentFrame()}),re(28," Add Frame "),I()(),A(29,"div")(30,"p",4),re(31," Background "),I(),ce(32,"input",13),I(),A(33,"div")(34,"p",4),re(35," Dark mode "),I(),A(36,"input",14),fe("ngModelChange",function(){return o.updateTheme()}),I()(),A(37,"div")(38,"p",4),re(39," Padding "),I(),ce(40,"input",15),I()()),i&2&&(ge("language",o.language)("theme",o.theme),he(3),on(3,o.animation.frameList.length>0?3:4),he(2),ge("formGroup",o.toolsForm),rs(10,o.languagesList),rs(20,o.themeNameList),he(19),ge("disabled",!o.isExportable),he(2),on(26,o.showExportType?26:-1))},dependencies:[we,a0,r0,o0,Vs,Fl,Tl,Qs,Zg,Yg,Pl,kl,m0,v0,C0,D0],styles:[`@charset "UTF-8";[_ngcontent-%COMP%]:root{--space-1: 2px;--space-2: 4px;--space-3: 8px;--space-4: 16px;--space-5: 32px;--padding-1: 2px;--padding-2: 4px;--padding-3: 8px;--padding-4: 16px;--padding-5: 32px}body[_ngcontent-%COMP%]{margin:0;width:100dvw;height:100dvh}[_ngcontent-%COMP%]:root[theme=blue-dark]{--background: #455b84;--text-background: #000;--gradient: linear-gradient(140deg, rgb(142 199 251), rgb(51 91 237));--logo: #3880ff;--primary: #3880ff;--primary-rgb: 56, 128, 255;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #f4f5f8;--secondary: #3dc2ff;--secondary-rgb: 61, 194, 255;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #222428}[_ngcontent-%COMP%]:root[theme=blue-light]{--background: #d1d1f4;--text-background: #222428;--gradient: linear-gradient(140deg, rgb(142 199 251), rgb(51 91 237));--logo: #5667ad;--primary: #5667ad;--primary-rgb: 86, 103, 173;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #f4f5f8;--secondary: #919fdb;--secondary-rgb: 145, 159, 219;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #222428}[_ngcontent-%COMP%]:root[theme=green-light]{--background: #ecfcec;--text-background: #222428;--gradient: linear-gradient(140deg, #74D680, #378B29);--logo: #4d9759;--primary: #55ab63;--primary-rgb: 85, 171, 99;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #222428;--secondary: #88d1b6;--secondary-rgb: 136, 209, 182;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #222428}[_ngcontent-%COMP%]:root[theme=green-dark]{--background: #062606;--text-background: #f4f5f8;--gradient: linear-gradient(140deg, #74D680, #378B29);--logo: #54ab63;--primary: #54ab63;--primary-rgb: 84, 171, 99;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #222428;--secondary: #2d5c4b;--secondary-rgb: 45, 92, 75;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #f4f5f8}.stack-child[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;grid-template-columns:1fr}.stack-child[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{grid-row:1;grid-column:1}button[_ngcontent-%COMP%]{cursor:pointer;color:var(--_btn-color);background-color:var(--_btn-bg);border:var(--btn-border-width) solid var(--btn-border-color);border-radius:var(--space-3);font-weight:var(--btn-font-weight);padding:var(--space-3);transition:all .3s ease-in-out,font-weight .4s ease-in-out;--btn-color: black;--_btn-color: var(--btn-color);--btn-bg: transparent;--_btn-bg: var(--btn-bg);--btn-border-width: 1px;--btn-border-color: black;--btn-font-weight: normal}button[_ngcontent-%COMP%]:disabled{cursor:auto;opacity:.6}button[_ngcontent-%COMP%]:hover:not(button:disabled){--_btn-color: color-mix(in srgb, var(--btn-color), white 80%);--_btn-bg: color-mix(in srgb, var(--btn-bg), black 20%)}button.primary[_ngcontent-%COMP%]{--btn-color: var(--text-primary);--btn-bg: var(--primary)}button.secondary[_ngcontent-%COMP%]{--btn-color: var(--text-secondary);--btn-bg: var(--secondary)}button.invisible[_ngcontent-%COMP%]{--btn-bg: transparent;--btn-border-width: 0}*[_ngcontent-%COMP%]{font-family:Chillax-Regular;color:var(--text-background);margin:0}*.label[_ngcontent-%COMP%]{font-family:Chillax-Light;font-size:12px}*.xl[_ngcontent-%COMP%]{font-family:Chillax-Medium;font-size:24px}*.text-primary[_ngcontent-%COMP%]{color:var(--primary)}a[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]:hover{text-decoration:none}select[_ngcontent-%COMP%]{color:var(--text-primary);background-color:var(--primary);border-radius:var(--space-2)}input[_ngcontent-%COMP%]{color:var(--text-primary);background-color:var(--primary);border-radius:var(--space-2);border:1px solid gray}input[type=checkbox][_ngcontent-%COMP%]{accent-color:var(--primary);cursor:pointer}@font-face{font-family:Chillax-Variable;src:url("./media/Chillax-Variable-5TZBJ6RH.woff2") format("woff2"),url("./media/Chillax-Variable-GUTGERYV.woff") format("woff"),url("./media/Chillax-Variable-XJZMLVRM.ttf") format("truetype");font-weight:200 700;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Extralight;src:url("./media/Chillax-Extralight-VMLRC4XP.woff2") format("woff2"),url("./media/Chillax-Extralight-OY23W4QL.woff") format("woff"),url("./media/Chillax-Extralight-Z6EZPJ5D.ttf") format("truetype");font-weight:200;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Light;src:url("./media/Chillax-Light-7N5LKZDB.woff2") format("woff2"),url("./media/Chillax-Light-W7Q5OMRC.woff") format("woff"),url("./media/Chillax-Light-N2TWVACI.ttf") format("truetype");font-weight:300;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Regular;src:url("./media/Chillax-Regular-IWU2LEHA.woff2") format("woff2"),url("./media/Chillax-Regular-TUYLHPBG.woff") format("woff"),url("./media/Chillax-Regular-VS7UYA5O.ttf") format("truetype");font-weight:400;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Medium;src:url("./media/Chillax-Medium-NIVAGDSI.woff2") format("woff2"),url("./media/Chillax-Medium-L3WKJ3CU.woff") format("woff"),url("./media/Chillax-Medium-SLJUWLYH.ttf") format("truetype");font-weight:500;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Semibold;src:url("./media/Chillax-Semibold-YNVWM5XA.woff2") format("woff2"),url("./media/Chillax-Semibold-FLECUI7S.woff") format("woff"),url("./media/Chillax-Semibold-WIH2KCOD.ttf") format("truetype");font-weight:600;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Bold;src:url("./media/Chillax-Bold-ARM3VHIE.woff2") format("woff2"),url("./media/Chillax-Bold-VBOOD3LC.woff") format("woff"),url("./media/Chillax-Bold-V26PTJET.ttf") format("truetype");font-weight:700;font-display:swap;font-style:normal}[_nghost-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:2fr 6fr 3fr;gap:0px 0px;grid-template-areas:"." "editor" "frame-list";margin:var(--space-5)}app-code-editor[_ngcontent-%COMP%]{grid-area:editor}.frame-list[_ngcontent-%COMP%]{grid-area:frame-list;position:relative;display:grid;grid-auto-flow:column;grid-auto-columns:min-content;overflow-x:auto;align-items:center;border-radius:var(--space-4)}.frame-list[_ngcontent-%COMP%]:has(p:only-child){display:flex;justify-content:center;align-items:center;gap:10px;overflow-x:auto}.frame-list[_ngcontent-%COMP%]:not(:has(p:only-child)){mask:linear-gradient(90deg,rgba(0,0,0,0),#fff var(--space-5) calc(100% - var(--space-5)),rgba(0,0,0,0))}.frame[_ngcontent-%COMP%]{position:relative}.frame-previous[_ngcontent-%COMP%], .frame-next[_ngcontent-%COMP%]{position:sticky;top:-50%;z-index:1}.frame-previous[_ngcontent-%COMP%]{left:5%}.frame-next[_ngcontent-%COMP%]{right:5%}.frame-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;border:1px solid var(--text-background);border-radius:12px;overflow:hidden;margin:1rem}.frame-actions[_ngcontent-%COMP%]{position:absolute;top:0;right:0;border-radius:50px;font-size:18px;padding:.5rem}.tools-area[_ngcontent-%COMP%]{position:fixed;top:5%;left:50%;translate:-50% 0;background:rgba(var(--secondary-rgb),40%);border-radius:var(--space-3);padding:var(--padding-4)}.tools-bar[_ngcontent-%COMP%]{display:flex;gap:var(--space-3);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.tools-bar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.tools-bar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(input:not(.tools-bar > div[type=checkbox])[_ngcontent-%COMP%], select)[_ngcontent-%COMP%]{width:100px}.tools-bar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-bottom:var(--space-2)}.tools-bar[_ngcontent-%COMP%]   .export-and-save[_ngcontent-%COMP%]{gap:var(--space-3)}.tools-bar[_ngcontent-%COMP%]   .export-container[_ngcontent-%COMP%]{position:relative}.tools-bar[_ngcontent-%COMP%]   .export-type[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;translate:-50% -50%;display:flex;flex-direction:column;gap:var(--space-2);list-style:none;border:1px solid white;border-radius:var(--space-3);background-color:var(--primary);margin:0;padding:var(--padding-2);width:100%}.tools-bar[_ngcontent-%COMP%]   .export-type[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}


















`],changeDetection:0});let t=e;return t})();var E0=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=ve({type:e,selectors:[["app-logo"]],hostVars:4,hostBindings:function(i,o){i&2&&Xo("--logo-color",o.color)("--logo-background",o.background)},inputs:{color:"color",background:"background"},standalone:!0,features:[Ce],decls:61,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","version","1.1","viewBox","0.00 0.00 1060.00 310.00",2,"--bg","var(--logo-background, transparent)","--col","var(--logo-color, red)"],["fill","var(--bg)","d",`
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
  Z`]],template:function(i,o){i&1&&(ar(),A(0,"svg",0),ce(1,"path",1)(2,"rect",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7)(8,"path",8)(9,"path",9)(10,"path",10)(11,"path",11)(12,"path",12)(13,"path",13)(14,"path",14)(15,"path",15)(16,"path",16)(17,"path",17)(18,"path",18)(19,"path",19)(20,"path",20)(21,"path",21)(22,"path",22)(23,"path",23)(24,"path",24)(25,"path",25)(26,"path",26)(27,"path",27)(28,"path",28)(29,"rect",29)(30,"path",30)(31,"path",31)(32,"path",32)(33,"path",33)(34,"path",34)(35,"path",35)(36,"path",36)(37,"rect",37)(38,"path",38)(39,"path",39)(40,"path",40)(41,"path",41)(42,"path",42)(43,"path",43)(44,"path",44)(45,"path",45)(46,"path",46)(47,"path",47)(48,"rect",48)(49,"path",49)(50,"path",50)(51,"path",51)(52,"path",52)(53,"ellipse",53)(54,"ellipse",54)(55,"path",55)(56,"path",56)(57,"path",57)(58,"path",58)(59,"path",59)(60,"path",60),I())},dependencies:[we],encapsulation:2,changeDetection:0});let t=e;return t})();var I0=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=ve({type:e,selectors:[["app-footer"]],standalone:!0,features:[Ce],decls:11,vars:0,consts:[[1,"social-networks"],["href","https://twitter.com/_evayann_","target","_blank","rel","noopener noreferrer"],["href","https://github.com/evayann","target","_blank","rel","noopener noreferrer"],["color","var(--logo)",1,"logo"]],template:function(i,o){i&1&&(A(0,"footer")(1,"div",0)(2,"a",1),re(3," X "),I(),A(4,"a",2),re(5," Github "),I()(),ce(6,"app-logo",3),A(7,"p"),re(8," Made by "),A(9,"span"),re(10,"Yann Zavattero"),I()()())},dependencies:[we,E0],styles:["footer[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);align-items:center;justify-items:center;height:100%}.social-networks[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:var(--space-2)}.logo[_ngcontent-%COMP%]{width:20vw;border-radius:12px}"],changeDetection:0});let t=e;return t})();var _0=(()=>{let e=class e{constructor(n){n.loadDefaultTheme()}};e.\u0275fac=function(i){return new(i||e)(L(zs))},e.\u0275cmp=ve({type:e,selectors:[["app-root"]],standalone:!0,features:[Ce],decls:2,vars:0,consts:[[1,"page"]],template:function(i,o){i&1&&ce(0,"app-code-to-gif",0)(1,"app-footer")},dependencies:[we,b0,I0],styles:['[_nghost-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:9fr 1fr;grid-template-areas:"page" "footer";width:100%;height:100%;overflow:auto;background-blend-mode:multiply;background-color:var(--background);background-image:url("./media/noise-LBHUHC7E.svg")}.page[_ngcontent-%COMP%]{grid-area:page}app-footer[_ngcontent-%COMP%]{grid-area:footer}']});let t=e;return t})();Qp(_0,Ag).catch(t=>console.error(t));
