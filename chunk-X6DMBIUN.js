import{a as Z,b as P,c as U,d as S,e as W,f as Q,g as N}from"./chunk-73XXCCGC.js";import{$ as E,Aa as O,Ba as y,Da as L,Fa as v,G as x,Ga as H,K as s,L as m,Ma as G,Na as z,Pa as j,Z as u,_,_a as w,a as F,aa as C,c as T,da as V,fa as p,ja as M,ka as k,kb as B,la as D,ma as R,na as A,oa as l,pa as c,qa as I,ta as h,wa as g,xa as a}from"./chunk-Z2EWHTV7.js";import{d as K}from"./chunk-VHCA6YAO.js";var X=()=>({numberRow:1,numberColumn:64,isEditable:!1,hideTextSelection:!1});function q(o,i){if(o&1){let n=h();l(0,"div",0)(1,"div",1)(2,"button",2),g("click",function(){let r=s(n).$index,d=a();return m(d.onDeleteFrame(r))}),y(3," X "),c()(),l(4,"div",3)(5,"p"),y(6),c(),I(7,"app-window",4),c()()}if(o&2){let n=i.$implicit,e=i.$index,t=a();u(6),L("Frame ",e,""),u(),p("theme",t.theme)("title",n.title)("code",n.code)("language",t.languageSelected)("windowConfiguration",H(6,X))}}function ee(o,i){o&1&&(l(0,"p",5),y(1,"No frame yet ! Try something :)"),c())}var J=(()=>{let i=class i{constructor(){this.onDelete=new C,this.onMove=new C}onDeleteFrame(e){this.onDelete.emit(e)}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=x({type:i,selectors:[["app-code-animation-visualisation"]],inputs:{languageSelected:"languageSelected",animation:"animation",theme:"theme"},outputs:{onDelete:"onDelete",onMove:"onMove"},standalone:!0,features:[v],decls:3,vars:1,consts:[[1,"frame"],[1,"frame-actions"],["aria-label","Delete frame",1,"secondary","icon",3,"click"],[1,"frame-card"],[3,"theme","title","code","language","windowConfiguration"],[1,"xl"],["class","frame"]],template:function(t,r){t&1&&R(0,q,8,7,"div",6,D,!1,ee,2,0),t&2&&A(r.animation.frameList)},dependencies:[w,P],styles:["[_nghost-%COMP%]{position:relative;display:grid;grid-auto-flow:column;grid-auto-columns:min-content;overflow-x:auto;align-items:center;border-radius:var(--space-4)}[_nghost-%COMP%]:has(p:only-child){display:flex;justify-content:center;align-items:center;gap:10px;overflow-x:auto}[_nghost-%COMP%]:not(:has(p:only-child)){mask:linear-gradient(90deg,rgba(0,0,0,0),#fff var(--space-5) calc(100% - var(--space-5)),rgba(0,0,0,0))}.frame[_ngcontent-%COMP%]{position:relative}.frame-previous[_ngcontent-%COMP%], .frame-next[_ngcontent-%COMP%]{position:sticky;top:-50%;width:36px;aspect-ratio:1;stroke:var(--text-background);z-index:1}.frame-previous[_ngcontent-%COMP%]{left:5%}.frame-next[_ngcontent-%COMP%]{right:5%}.frame-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;border:1px solid var(--text-background);border-radius:var(--border-radius-4);overflow:hidden;margin:1rem}.frame-actions[_ngcontent-%COMP%]{position:absolute;top:0;right:0;border-radius:var(--border-radius-5);font-size:18px;padding:.5rem}"],changeDetection:0});let o=i;return o})();var te=["codeContainer"];function ne(o,i){if(o&1){let n=h();l(0,"app-window",2),g("codeHasChange",function(t){s(n);let r=a();return m(r.updateCode(t.value))})("titleChange",function(t){s(n);let r=a();return m(r.updateTitle(t))})("languageDetected",function(t){s(n);let r=a();return m(r.updateLanguage(t))}),c()}if(o&2){let n=a();p("code",n.code)("title",n.title)("theme",n.theme)("language",n.languageSelected)("windowConfiguration",n.codeConfiguration)}}function oe(o,i){if(o&1){let n=h();l(0,"app-code-recorder",3),g("onRecordFinish",function(){s(n);let t=a();return m(t.finishRecord())}),c()}if(o&2){let n=a(),e;p("delayInMs",n.delayInMs)("title",n.title)("theme",n.theme)("language",(e=n.languageSelected)!==null&&e!==void 0?e:n.language)("codeAnimation",n.codeAnimation)}}function ie(o,i){if(o&1){let n=h();l(0,"div",4)(1,"button",5),g("click",function(){s(n);let t=a();return m(t.addFrameToAnimation())}),y(2," Add frame "),c(),l(3,"button",6),g("click",function(){s(n);let t=a();return m(t.saveCodeAnimation())}),y(4," Save "),c()()}if(o&2){let n=a();u(3),p("disabled",n.codeAnimation.hasNoFrame)}}var Y=(()=>{let i=class i{constructor(){this.delayInMs=100,this.codeHasChange=new C,this.titleHasChange=new C,this.animation=new C,this.isRecording=!1,this.codeWidth="64ch",this.codeConfiguration={numberRow:1,numberColumn:64,isEditable:!0,hideTextSelection:!1},this.codeAnimation=new S,this.codeChangeFromAnimation$=new T}set initialCode(e){this.title=e.title,this.code=e.code}deleteFrame(e){this.codeAnimation.removeFrame(e),this.emitCodeAnimationInformation()}updateCode(e){this.codeAnimation.hasStart||(this.code=e,this.codeHasChange.emit(e),this.codeConfiguration.numberRow=S.nbRowForCode(this.code))}domHasChange(){this.codeAnimation.hasStart&&this.codeChangeFromAnimation$.next()}addFrameToAnimation(){this.codeAnimation.addFrame({title:this.title,code:this.code,caretPosition:0}),this.emitCodeAnimationInformation()}saveCodeAnimation(){this.codeAnimation.hasNoFrame||(this.isRecording=!0)}finishRecord(){this.isRecording=!1}updateTitle(e){this.titleHasChange.emit(e)}updateLanguage(e){this.language=e}emitCodeAnimationInformation(){this.animation.emit({frameList:this.codeAnimation.frameList,maxRow:this.codeAnimation.nbMaxRow})}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=x({type:i,selectors:[["app-code-editor"]],viewQuery:function(t,r){if(t&1&&z(te,5),t&2){let d;G(d=j())&&(r.codeContainer=d.first)}},inputs:{initialCode:"initialCode",theme:"theme",languageSelected:"languageSelected",delayInMs:"delayInMs"},outputs:{codeHasChange:"codeHasChange",titleHasChange:"titleHasChange",animation:"animation"},standalone:!0,features:[v],decls:3,vars:2,consts:[[3,"code","title","theme","language","windowConfiguration"],["class","animation-controller"],[3,"code","title","theme","language","windowConfiguration","codeHasChange","titleChange","languageDetected"],[3,"delayInMs","title","theme","language","codeAnimation","onRecordFinish"],[1,"animation-controller"],[1,"secondary",3,"click"],[1,"primary",3,"disabled","click"]],template:function(t,r){t&1&&M(0,ne,1,5,"app-window",0)(1,oe,1,5)(2,ie,5,1,"div",1),t&2&&(k(0,r.isRecording?1:0),u(2),k(2,r.isRecording?-1:2))},dependencies:[w,P,U],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.animation-controller[_ngcontent-%COMP%]{display:flex;gap:var(--space-3);padding:var(--padding-3)}app-code-recorder[_ngcontent-%COMP%]{min-height:160px}"],changeDetection:0});let o=i;return o})();var f=K(Z());function re(o,i){if(o&1){let n=h();l(0,"app-code-animation-visualisation",3),g("onDelete",function(t){s(n);let r=a(),d=O(1);return m(r.onDeleteAnimationKey(d,t))}),c()}if(o&2){let n=a();p("animation",n.animation)("theme",n.menuFormGroup.theme)("languageSelected",n.menuFormGroup.language)}}var Re=(()=>{let i=class i{set menuForm(e){this.menuFormGroup=e,this.subscriptions.add(e?.valueChanges.subscribe(()=>this.changeDetectorRef.detectChanges()))}get hasFrame(){return this.animation.frameList.length>0}constructor(e,t,r,d,b){this.hljsLoader=e,this.placeholderCodeService=t,this.changeDetectorRef=r,this.codeEditorThemeService=d,this.urlService=b,this.animation={frameList:[],maxRow:0},this.subscriptions=new F}ngOnInit(){if(this.updateEditorTheme(),this.title===""&&this.code===""){this.initialCode=this.placeholderCodeService.getRandomExample("auto"),this.urlService.updateQuery({code:(0,f.compressToBase64)(this.initialCode.code),title:(0,f.compressToBase64)(this.initialCode.title)});return}this.initialCode={title:this.title,code:this.code}}ngOnDestroy(){this.subscriptions.unsubscribe()}loadAnimation(e){this.animation={frameList:[...e.frameList],maxRow:e.maxRow}}onDeleteAnimationKey(e,t){e.deleteFrame(t)}updateCodeInUrl(e){this.urlService.updateQuery({code:(0,f.compressToBase64)(e)})}updateTitleInUrl(e){this.urlService.updateQuery({title:(0,f.compressToBase64)(e)})}updateEditorTheme(){this.hljsLoader.setTheme(this.codeEditorThemeService.editorOf(this.menuFormGroup.themeName,this.menuFormGroup.variant))}};i.\u0275fac=function(t){return new(t||i)(_(B),_(W),_(E),_(Q),_(N))},i.\u0275cmp=x({type:i,selectors:[["app-frame-per-frame-code-to-gif-page"]],inputs:{title:["title","title",e=>(0,f.decompressFromBase64)(e)],code:["code","code",e=>(0,f.decompressFromBase64)(e)],menuForm:"menuForm"},standalone:!0,features:[V,v],decls:3,vars:5,consts:[[3,"theme","initialCode","delayInMs","languageSelected","animation","codeHasChange","titleHasChange"],["codeEditor",""],[3,"animation","theme","languageSelected"],[3,"animation","theme","languageSelected","onDelete"]],template:function(t,r){if(t&1&&(l(0,"app-code-editor",0,1),g("animation",function(b){return r.loadAnimation(b)})("codeHasChange",function(b){return r.updateCodeInUrl(b)})("titleHasChange",function(b){return r.updateTitleInUrl(b)}),c(),M(2,re,1,3,"app-code-animation-visualisation",2)),t&2){let d=O(1);p("theme",r.menuFormGroup.theme)("initialCode",r.initialCode)("delayInMs",r.menuFormGroup.delayInMs)("languageSelected",r.menuFormGroup.language),u(2),k(2,d.isRecording?-1:2)}},dependencies:[w,Y,J],styles:[`@charset "UTF-8";.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%]{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%]{transition:none}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}body[_ngcontent-%COMP%]{margin:0;width:100dvw;height:100dvh}[_ngcontent-%COMP%]:root[theme=blue-dark]{--background: hsl(218, 10%, 15%);--text-background: #f4f5f8;--gradient: linear-gradient(140deg, rgb(142 199 251), rgb(51 91 237));--logo: hsl(218, 100%, 61%);--primary: hsl(218, 100%, 40%);--primary-rgb: 0, 75, 204;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #f4f5f8;--secondary: hsl(218, 100%, 20%);--secondary-rgb: 0, 37, 102;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #f4f5f8}[_ngcontent-%COMP%]:root[theme=blue-light]{--background: hsl(218, 60%, 90%);--text-background: #222428;--gradient: linear-gradient(140deg, rgb(142 199 251), rgb(51 91 237));--logo: hsl(218, 35%, 51%);--primary: hsl(218, 35%, 70%);--primary-rgb: 152, 171, 205;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #222428;--secondary: hsl(218, 51%, 80%);--secondary-rgb: 178, 197, 230;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #222428}[_ngcontent-%COMP%]:root[theme=green-light]{--background: #ecfcec;--text-background: #222428;--gradient: linear-gradient(140deg, #74D680, #378B29);--logo: #4d9759;--primary: #55ab63;--primary-rgb: 85, 171, 99;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #222428;--secondary: #88d1b6;--secondary-rgb: 136, 209, 182;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #222428}[_ngcontent-%COMP%]:root[theme=green-dark]{--background: #062606;--text-background: #f4f5f8;--gradient: linear-gradient(140deg, #74D680, #378B29);--logo: #54ab63;--primary: #54ab63;--primary-rgb: 84, 171, 99;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #222428;--secondary: #2d5c4b;--secondary-rgb: 45, 92, 75;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #f4f5f8}[_ngcontent-%COMP%]:root[theme=red-light]{--background: hsl(0, 73%, 96%);--text-background: #222428;--gradient: linear-gradient(140deg, hsl(0, 76%, 92%), hsl(0, 76%, 72%));--logo: hsl(0, 64%, 51%);--primary: hsl(0, 76%, 52%);--primary-rgb: 226, 40, 40;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #222428;--secondary: hsl(0, 76%, 77%);--secondary-rgb: 241, 152, 152;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #222428}[_ngcontent-%COMP%]:root[theme=red-dark]{--background: hsl(0, 73%, 9%);--text-background: #f4f5f8;--gradient: linear-gradient(140deg, hsl(0, 86%, 38%), hsl(0, 76%, 52%));--logo: hsl(0, 64%, 44%);--primary: hsl(0, 76%, 42%);--primary-rgb: 188, 26, 26;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #f4f5f8;--secondary: hsl(0, 76%, 27%);--secondary-rgb: 121, 17, 17;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #f4f5f8}[_ngcontent-%COMP%]:root[theme=rainbow-light]{--background: hsl(291, 73%, 96%);--text-background: #222428;--gradient: linear-gradient(45deg, #f9ccff 0%, #e6bbf9 11%, #9ec6f9 32%, #55e6ee 60%, #91f5d1 74%, #f9ffbf 98%);--logo: hsl(291, 64%, 51%);--primary: hsl(291, 64%, 61%);--primary-rgb: 200, 92, 219;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #222428;--secondary: hsl(291, 64%, 81%);--secondary-rgb: 228, 176, 238;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #222428}[_ngcontent-%COMP%]:root[theme=rainbow-dark]{--background: hsl(291, 73%, 9%);--text-background: #f4f5f8;--gradient: linear-gradient(-45deg, #652487 0%, #443ac3 35%, #0174b7 68%, #04988e 100%);--logo: hsl(291, 64%, 31%);--primary: hsl(291, 74%, 41%);--primary-rgb: 159, 27, 182;--primary-dark: color-mix(in srgb, var(--primary), black 30%);--primary-light: color-mix(in srgb, var(--primary), white 30%);--text-primary: #f4f5f8;--secondary: hsl(291, 74%, 31%);--secondary-rgb: 120, 21, 138;--secondary-dark: color-mix(in srgb, var(--secondary), black 30%);--secondary-light: color-mix(in srgb, var(--secondary), white 30%);--text-secondary: #f4f5f8}[_ngcontent-%COMP%]:root{--space-1: 2px;--space-2: 4px;--space-3: 8px;--space-4: 16px;--space-5: 32px;--padding-1: 2px;--padding-2: 4px;--padding-3: 8px;--padding-4: 16px;--padding-5: 32px;--border-radius-1: 2px;--border-radius-2: 4px;--border-radius-3: 8px;--border-radius-4: 16px;--border-radius-5: 32px}@font-face{font-family:Chillax-Variable;src:url("./media/Chillax-Variable-5TZBJ6RH.woff2") format("woff2"),url("./media/Chillax-Variable-GUTGERYV.woff") format("woff"),url("./media/Chillax-Variable-XJZMLVRM.ttf") format("truetype");font-weight:200 700;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Extralight;src:url("./media/Chillax-Extralight-VMLRC4XP.woff2") format("woff2"),url("./media/Chillax-Extralight-OY23W4QL.woff") format("woff"),url("./media/Chillax-Extralight-Z6EZPJ5D.ttf") format("truetype");font-weight:200;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Light;src:url("./media/Chillax-Light-7N5LKZDB.woff2") format("woff2"),url("./media/Chillax-Light-W7Q5OMRC.woff") format("woff"),url("./media/Chillax-Light-N2TWVACI.ttf") format("truetype");font-weight:300;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Regular;src:url("./media/Chillax-Regular-IWU2LEHA.woff2") format("woff2"),url("./media/Chillax-Regular-TUYLHPBG.woff") format("woff"),url("./media/Chillax-Regular-VS7UYA5O.ttf") format("truetype");font-weight:400;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Medium;src:url("./media/Chillax-Medium-NIVAGDSI.woff2") format("woff2"),url("./media/Chillax-Medium-L3WKJ3CU.woff") format("woff"),url("./media/Chillax-Medium-SLJUWLYH.ttf") format("truetype");font-weight:500;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Semibold;src:url("./media/Chillax-Semibold-YNVWM5XA.woff2") format("woff2"),url("./media/Chillax-Semibold-FLECUI7S.woff") format("woff"),url("./media/Chillax-Semibold-WIH2KCOD.ttf") format("truetype");font-weight:600;font-display:swap;font-style:normal}@font-face{font-family:Chillax-Bold;src:url("./media/Chillax-Bold-ARM3VHIE.woff2") format("woff2"),url("./media/Chillax-Bold-VBOOD3LC.woff") format("woff"),url("./media/Chillax-Bold-V26PTJET.ttf") format("truetype");font-weight:700;font-display:swap;font-style:normal}.stack-child[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;grid-template-columns:1fr}.stack-child[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{grid-row:1;grid-column:1}button[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]{cursor:pointer;color:var(--_btn-color);background-color:var(--_btn-bg);border:var(--btn-border-width) solid var(--btn-border-color);border-radius:var(--border-radius-3);font-weight:var(--btn-font-weight);padding:var(--padding-3);transition:all .3s ease-in-out,font-weight .4s ease-in-out;--btn-color: var(--text-background);--_btn-color: var(--btn-color);--btn-bg: var(--background);--_btn-bg: var(--btn-bg);--btn-border-width: 1px;--btn-border-color: var(--btn-color);--btn-font-weight: normal}button[_ngcontent-%COMP%]:disabled, button.disabled[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:disabled, .button.disabled[_ngcontent-%COMP%]{cursor:auto;opacity:.6}button[_ngcontent-%COMP%]:hover:not(button:disabled, button.disabled[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:disabled, .button.disabled)[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:hover:not(button:disabled, button.disabled[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:disabled, .button.disabled)[_ngcontent-%COMP%]{--_btn-color: color-mix(in srgb, var(--btn-color), var(--btn-bg) 80%);--_btn-bg: color-mix(in srgb, var(--btn-bg), var(--btn-color) 20%)}button.primary[_ngcontent-%COMP%], .button.primary[_ngcontent-%COMP%]{--btn-color: var(--primary)}button.secondary[_ngcontent-%COMP%], .button.secondary[_ngcontent-%COMP%]{--btn-color: var(--secondary)}button.invisible[_ngcontent-%COMP%], .button.invisible[_ngcontent-%COMP%]{--btn-border-width: 0}*[_ngcontent-%COMP%]:not(code   *[_ngcontent-%COMP%], dialog)[_ngcontent-%COMP%]{font-family:Chillax-Regular;color:var(--text-background);margin:0}*[_ngcontent-%COMP%]:not(code   *[_ngcontent-%COMP%], dialog).label[_ngcontent-%COMP%]{font-family:Chillax-Light;font-size:12px}*[_ngcontent-%COMP%]:not(code   *[_ngcontent-%COMP%], dialog).xl[_ngcontent-%COMP%]{font-family:Chillax-Medium;font-size:24px}*[_ngcontent-%COMP%]:not(code   *[_ngcontent-%COMP%], dialog).text-primary[_ngcontent-%COMP%]{color:var(--primary)}a[_ngcontent-%COMP%]{cursor:pointer}a[_ngcontent-%COMP%]:hover{text-decoration:none}select[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;appearance:none;padding-left:1rem;padding-right:2rem;font-size:.875rem;line-height:1.25rem;line-height:2;border-radius:var(--rounded-btn, .5rem);border-width:1px;border-color:transparent;background-color:var(--background);background-image:linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-size:4px 4px,4px 4px;background-repeat:no-repeat}select.primary[_ngcontent-%COMP%]{border-color:var(--primary)}input[type=checkbox][_ngcontent-%COMP%]{appearance:none;--checkbox-background: var(--background);--checkbox-foreground: var(--text-background);cursor:pointer;border-width:1px;border-style:solid;border-color:var(--checkbox-foreground);border-radius:var(--border-radius-2);width:1rem;height:1rem}input[type=checkbox][_ngcontent-%COMP%]:checked{background-repeat:no-repeat;animation:checkmark var(--animation-input, .2s) ease-out;background-color:var(--background);background-image:linear-gradient(-45deg,transparent 65%,var(--checkbox-background) 65.99%),linear-gradient(45deg,transparent 75%,var(--checkbox-background) 75.99%),linear-gradient(-45deg,var(--checkbox-background) 40%,transparent 40.99%),linear-gradient(45deg,var(--checkbox-background) 30%,var(--checkbox-foreground) 30.99%,var(--checkbox-foreground) 40%,transparent 40.99%),linear-gradient(-45deg,var(--checkbox-foreground) 50%,var(--checkbox-background) 50.99%)}input[type=checkbox].primary[_ngcontent-%COMP%]{--checkbox-background: var(--primary);--checkbox-foreground: var(--text-primary)}input[_ngcontent-%COMP%]:not([type=checkbox]){appearance:none;padding-left:1rem;font-size:1rem;line-height:2;line-height:1.5rem;border-radius:var(--rounded-btn, .5rem);border-width:1px;border-color:transparent;border-style:solid;color:var(--text-background);background-color:var(--background)}input.primary[_ngcontent-%COMP%]{border-color:var(--primary)}a.button[_ngcontent-%COMP%]{display:block;text-decoration:none}*[_ngcontent-%COMP%]:not(code, code[_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]:not(.cdk-overlay-connected-position-bounding-box, .no-animation[_ngcontent-%COMP%], .no-animation[_ngcontent-%COMP%]   *)[_ngcontent-%COMP%]{transition-property:color,background,background-color,padding,border-radius,border-color;transition-duration:.35s;transition-timing-function:ease-in-out}.page[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{height:100%}*[_ngcontent-%COMP%]::selection{background-color:rgba(var(--primary-rgb),30%)}*[_ngcontent-%COMP%]{box-sizing:border-box}table.hljs-ln[_ngcontent-%COMP%]   td.hljs-ln-numbers[_ngcontent-%COMP%]{text-align:center;color:#ccc;border-right:1px solid var(--border-color, #999);padding-right:5px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}table.hljs-ln[_ngcontent-%COMP%]   td.hljs-ln-code[_ngcontent-%COMP%]{padding-left:10px}[_nghost-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:2fr auto 3fr;gap:0px 0px;grid-template-areas:"." "editor" "frame-list";margin:var(--space-5);padding:var(--space-5);height:100%}app-code-editor[_ngcontent-%COMP%]{grid-area:editor}app-code-animation-visualisation[_ngcontent-%COMP%]{grid-area:frame-list}app-menu[_ngcontent-%COMP%]{position:absolute;top:var(--space-5);right:var(--space-5)}


















`],changeDetection:0});let o=i;return o})();export{Re as FramePerFrameCodeToGifPageComponent};
