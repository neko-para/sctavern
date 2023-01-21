import{e as ae,K as Ne,b as ze,L as He,M as We,E as we,m as le,H as qe,J as ie,z as je,P as Ge,T as Ue,U as Ye,k as mt,t as W,l as Q,n as x,p as q,a3 as K,g as gt,i as pe,y as xe,h as S,a2 as Xe,a7 as V,aq as Se,f as Ze,aA as Je,a as ht,A as yt,aJ as bt,aK as wt,q as Qe,O as Ke,r as A,W as et,B as Ee,aL as pt,aM as xt,a1 as $,aN as ee,C as Y,R as St,I as Oe,a6 as tt,aD as kt,aO as Ct,aP as Et,N as Ot,Q as Pt,a8 as nt,aE as _t,aQ as Bt,aR as At,X as It,w as ot,v as at,Y as Rt,Z as se,V as re,x as G,av as me,aS as N,aT as Lt,aU as ke,j,S as Vt,aV as Tt,aW as Pe,aX as ce,aY as ue,aZ as _e,a_ as Dt,a$ as Be,b0 as Ae,b1 as $t,aB as lt,b2 as Mt,ab as Ft,b3 as Nt,a0 as zt,b4 as Ht,b5 as de,b6 as Wt,ax as qt,_ as jt,ad as Gt,b7 as Ut,D as Yt}from"./index-4d976010.js";class U{constructor(t){let{x:o,y:n,width:a,height:l}=t;this.x=o,this.y=n,this.width=a,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ie(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function it(e){const t=e.getBoundingClientRect(),o=getComputedStyle(e),n=o.transform;if(n){let a,l,s,i,r;if(n.startsWith("matrix3d("))a=n.slice(9,-1).split(/, /),l=+a[0],s=+a[5],i=+a[12],r=+a[13];else if(n.startsWith("matrix("))a=n.slice(7,-1).split(/, /),l=+a[0],s=+a[3],i=+a[4],r=+a[5];else return new U(t);const f=o.transformOrigin,u=t.x-i-(1-l)*parseFloat(f),g=t.y-r-(1-s)*parseFloat(f.slice(f.indexOf(" ")+1)),d=l?t.width/l:e.offsetWidth+1,v=s?t.height/s:e.offsetHeight+1;return new U({x:u,y:g,width:d,height:v})}else return new U(t)}function Z(e,t,o){if(typeof e.animate>"u")return{finished:Promise.resolve()};const n=e.animate(t,o);return typeof n.finished>"u"&&(n.finished=new Promise(a=>{n.onfinish=()=>{a(n)}})),n}function st(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const ge="cubic-bezier(0.4, 0, 0.2, 1)",Xt="cubic-bezier(0.0, 0, 0.2, 1)",Zt="cubic-bezier(0.4, 0, 1, 1)";function Jt(e){for(;e;){if(Ce(e))return e;e=e.parentElement}return document.scrollingElement}function ne(e,t){const o=[];if(t&&e&&!t.contains(e))return o;for(;e&&(Ce(e)&&o.push(e),e!==t);)e=e.parentElement;return o}function Ce(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Qt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Kt=ae({name:"VBtnGroup",props:{divided:Boolean,...Ne(),...ze(),...He(),...We(),...we(),...le(),...qe()},setup(e,t){let{slots:o}=t;const{themeClasses:n}=ie(e),{densityClasses:a}=je(e),{borderClasses:l}=Ge(e),{elevationClasses:s}=Ue(e),{roundedClasses:i}=Ye(e);mt({VBtn:{height:"auto",color:W(e,"color"),density:W(e,"density"),flat:!0,variant:W(e,"variant")}}),Q(()=>x(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,l.value,a.value,s.value,i.value]},o))}}),en=q({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),tn=q({value:null,disabled:Boolean,selectedClass:String},"group-item");function nn(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=K("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=gt();pe(Symbol.for(`${t.description}:id`),a);const l=xe(t,null);if(!l){if(!o)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const s=W(e,"value"),i=S(()=>l.disabled.value||e.disabled);l.register({id:a,value:s,disabled:i},n),Xe(()=>{l.unregister(a)});const r=S(()=>l.isSelected(a)),f=S(()=>r.value&&[l.selectedClass.value,e.selectedClass]);return V(r,u=>{n.emit("group:selected",{value:u})}),{id:a,isSelected:r,toggle:()=>l.select(a,!r.value),select:u=>l.select(a,u),selectedClass:f,value:s,disabled:i,group:l}}function on(e,t){let o=!1;const n=Se([]),a=Ze(e,"modelValue",[],d=>d==null?[]:rt(n,yt(d)),d=>{const v=ln(n,d);return e.multiple?v:v[0]}),l=K("useGroup");function s(d,v){const h=d,m=Symbol.for(`${t.description}:id`),b=bt(m,l==null?void 0:l.vnode).indexOf(v);b>-1?n.splice(b,0,h):n.push(h)}function i(d){if(o)return;r();const v=n.findIndex(h=>h.id===d);n.splice(v,1)}function r(){const d=n.find(v=>!v.disabled);d&&e.mandatory==="force"&&!a.value.length&&(a.value=[d.id])}Je(()=>{r()}),Xe(()=>{o=!0});function f(d,v){const h=n.find(m=>m.id===d);if(!(v&&h!=null&&h.disabled))if(e.multiple){const m=a.value.slice(),w=m.findIndex(y=>y===d),b=~w;if(v=v??!b,b&&e.mandatory&&m.length<=1||!b&&e.max!=null&&m.length+1>e.max)return;w<0&&v?m.push(d):w>=0&&!v&&m.splice(w,1),a.value=m}else{const m=a.value.includes(d);if(e.mandatory&&m)return;a.value=v??!m?[d]:[]}}function u(d){if(e.multiple&&wt('This method is not supported when using "multiple" prop'),a.value.length){const v=a.value[0],h=n.findIndex(b=>b.id===v);let m=(h+d)%n.length,w=n[m];for(;w.disabled&&m!==h;)m=(m+d)%n.length,w=n[m];if(w.disabled)return;a.value=[n[m].id]}else{const v=n.find(h=>!h.disabled);v&&(a.value=[v.id])}}const g={register:s,unregister:i,selected:a,select:f,disabled:W(e,"disabled"),prev:()=>u(n.length-1),next:()=>u(1),isSelected:d=>a.value.includes(d),selectedClass:S(()=>e.selectedClass),items:S(()=>n),getItemIndex:d=>an(n,d)};return pe(t,g),g}function an(e,t){const o=rt(e,[t]);return o.length?e.findIndex(n=>n.id===o[0]):-1}function rt(e,t){const o=[];for(let n=0;n<e.length;n++){const a=e[n];a.value!=null?t.find(l=>ht(l,a.value))!=null&&o.push(a.id):t.includes(n)&&o.push(a.id)}return o}function ln(e,t){const o=[];for(let n=0;n<e.length;n++){const a=e[n];t.includes(a.id)&&o.push(a.value!=null?a.value:n)}return o}const ct=Symbol.for("vuetify:v-btn-toggle");Qe()({name:"VBtnToggle",props:en(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const{isSelected:n,next:a,prev:l,select:s,selected:i}=on(e,ct);return Q(()=>{var r;return x(Kt,{class:"v-btn-toggle"},{default:()=>[(r=o.default)==null?void 0:r.call(o,{isSelected:n,next:a,prev:l,select:s,selected:i})]})}),{next:a,prev:l,select:s}}});const sn=ae({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Ke(),...we({tag:"div"}),...le()},setup(e,t){let{slots:o}=t;const n=20,a=2*Math.PI*n,l=A(),{themeClasses:s}=ie(e),{sizeClasses:i,sizeStyles:r}=et(e),{textColorClasses:f,textColorStyles:u}=Ee(W(e,"color")),{textColorClasses:g,textColorStyles:d}=Ee(W(e,"bgColor")),{intersectionRef:v,isIntersecting:h}=pt(),{resizeRef:m,contentRect:w}=xt(),b=S(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),y=S(()=>Number(e.width)),c=S(()=>r.value?Number(e.size):w.value?w.value.width:Math.max(y.value,32)),I=S(()=>n/(1-y.value/c.value)*2),_=S(()=>y.value/c.value*I.value),T=S(()=>$((100-b.value)/100*a));return ee(()=>{v.value=l.value,m.value=l.value}),Q(()=>x(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},s.value,i.value,f.value],style:[r.value,u.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:b.value},{default:()=>[x("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[x("circle",{class:["v-progress-circular__underlay",g.value],style:d.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":_.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),x("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":_.value,"stroke-dasharray":a,"stroke-dashoffset":T.value},null)]),o.default&&x("div",{class:"v-progress-circular__content"},[o.default({value:b.value})])]})),{}}});function rn(e,t){V(()=>{var o;return(o=e.isActive)==null?void 0:o.value},o=>{e.isLink.value&&o&&t&&Y(()=>{t(!0)})},{immediate:!0})}const Fn=ae({name:"VBtn",directives:{Ripple:St},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:ct},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Oe,appendIcon:Oe,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Ne(),...We(),...ze(),...tt(),...He(),...tn(),...kt(),...Ct(),...Et(),...Ot(),...Ke(),...we({tag:"button"}),...le(),...qe({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,t){let{attrs:o,slots:n}=t;const{themeClasses:a}=ie(e),{borderClasses:l}=Ge(e),{colorClasses:s,colorStyles:i,variantClasses:r}=Pt(e),{densityClasses:f}=je(e),{dimensionStyles:u}=nt(e),{elevationClasses:g}=Ue(e),{loaderClasses:d}=_t(e),{locationStyles:v}=Bt(e),{positionClasses:h}=At(e),{roundedClasses:m}=Ye(e),{sizeClasses:w,sizeStyles:b}=et(e),y=nn(e,e.symbol,!1),c=It(e,o),I=S(()=>{var R;return e.active!==!1&&(e.active||((R=c.isActive)==null?void 0:R.value)||(y==null?void 0:y.isSelected.value))}),_=S(()=>(y==null?void 0:y.disabled.value)||e.disabled),T=S(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border));return rn(c,y==null?void 0:y.select),Q(()=>{var R,z,H,D;const O=c.isLink.value?"a":e.tag,E=!y||y.isSelected.value,p=!!(e.prependIcon||n.prepend),k=!!(e.appendIcon||n.append),B=!!(e.icon&&e.icon!==!0);return ot(x(O,{type:O==="a"?void 0:"button",class:["v-btn",y==null?void 0:y.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":_.value,"v-btn--elevated":T.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,l.value,E?s.value:void 0,f.value,g.value,d.value,h.value,m.value,w.value,r.value],style:[E?i.value:void 0,u.value,v.value,b.value],disabled:_.value||void 0,href:c.href.value,onClick:L=>{var M;_.value||((M=c.navigate)==null||M.call(c,L),y==null||y.toggle())}},{default:()=>[Rt(!0,"v-btn"),!e.icon&&p&&x(se,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>[x("span",{class:"v-btn__prepend"},[((R=n.prepend)==null?void 0:R.call(n))??x(re,null,null)])]}),x("span",{class:"v-btn__content","data-no-activator":""},[x(se,{key:"content",defaults:{VIcon:{icon:B?e.icon:void 0}}},{default:()=>[((z=n.default)==null?void 0:z.call(n))??(B&&x(re,{key:"icon"},null))]})]),!e.icon&&k&&x(se,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>[x("span",{class:"v-btn__append"},[((H=n.append)==null?void 0:H.call(n))??x(re,null,null)])]}),!!e.loading&&x("span",{key:"loader",class:"v-btn__loader"},[((D=n.loader)==null?void 0:D.call(n))??x(sn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[at("ripple"),!_.value&&e.ripple,null]])}),{}}}),Nn=ae({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:o}=t;const n={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,l){var s;await new Promise(v=>requestAnimationFrame(v)),await new Promise(v=>requestAnimationFrame(v)),a.style.visibility="";const{x:i,y:r,sx:f,sy:u,speed:g}=Le(e.target,a),d=Z(a,[{transform:`translate(${i}px, ${r}px) scale(${f}, ${u})`,opacity:0},{}],{duration:225*g,easing:Xt});(s=Re(a))==null||s.forEach(v=>{Z(v,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*g,easing:ge})}),d.finished.then(()=>l())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,l){var s;await new Promise(v=>requestAnimationFrame(v));const{x:i,y:r,sx:f,sy:u,speed:g}=Le(e.target,a);Z(a,[{},{transform:`translate(${i}px, ${r}px) scale(${f}, ${u})`,opacity:0}],{duration:125*g,easing:Zt}).finished.then(()=>l()),(s=Re(a))==null||s.forEach(v=>{Z(v,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*g,easing:ge})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?x(me,G({name:"dialog-transition"},n,{css:!1}),o):x(me,{name:"dialog-transition"},o)}});function Re(e){var t;const o=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return o&&[...o]}function Le(e,t){const o=e.getBoundingClientRect(),n=it(t),[a,l]=getComputedStyle(t).transformOrigin.split(" ").map(b=>parseFloat(b)),[s,i]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let r=o.left+o.width/2;s==="left"||i==="left"?r-=o.width/2:(s==="right"||i==="right")&&(r+=o.width/2);let f=o.top+o.height/2;s==="top"||i==="top"?f-=o.height/2:(s==="bottom"||i==="bottom")&&(f+=o.height/2);const u=o.width/n.width,g=o.height/n.height,d=Math.max(1,u,g),v=u/d||0,h=g/d||0,m=n.width*n.height/(window.innerWidth*window.innerHeight),w=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:r-(a+n.left),y:f-(l+n.top),sx:v,sy:h,speed:w}}const fe=Symbol("Forwarded refs");function zn(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];return e[fe]=o,new Proxy(e,{get(a,l){if(Reflect.has(a,l))return Reflect.get(a,l);for(const s of o)if(s.value&&Reflect.has(s.value,l)){const i=Reflect.get(s.value,l);return typeof i=="function"?i.bind(s.value):i}},getOwnPropertyDescriptor(a,l){const s=Reflect.getOwnPropertyDescriptor(a,l);if(s)return s;if(!(typeof l=="symbol"||l.startsWith("__"))){for(const i of o){if(!i.value)continue;const r=Reflect.getOwnPropertyDescriptor(i.value,l);if(r)return r;if("_"in i.value&&"setupState"in i.value._){const f=Reflect.getOwnPropertyDescriptor(i.value._.setupState,l);if(f)return f}}for(const i of o){let r=i.value&&Object.getPrototypeOf(i.value);for(;r;){const f=Reflect.getOwnPropertyDescriptor(r,l);if(f)return f;r=Object.getPrototypeOf(r)}}for(const i of o){const r=i.value&&i.value[fe];if(!r)continue;const f=r.slice();for(;f.length;){const u=f.shift(),g=Reflect.getOwnPropertyDescriptor(u.value,l);if(g)return g;const d=u.value&&u.value[fe];d&&f.push(...d)}}}}})}const cn=q({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function un(e,t){const o={},n=a=>()=>{if(!N)return Promise.resolve(!0);const l=a==="openDelay";return o.closeDelay&&window.clearTimeout(o.closeDelay),delete o.closeDelay,o.openDelay&&window.clearTimeout(o.openDelay),delete o.openDelay,new Promise(s=>{const i=parseInt(e[a]??0,10);o[a]=window.setTimeout(()=>{t==null||t(l),s(l)},i)})};return{runCloseDelay:n("closeDelay"),runOpenDelay:n("openDelay")}}const dn=Symbol.for("vuetify:v-menu"),fn=q({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...cn()},"v-overlay-activator");function vn(e,t){let{isActive:o,isTop:n}=t;const a=A();let l=!1,s=!1,i=!0;const r=S(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=S(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!r.value),{runOpenDelay:u,runCloseDelay:g}=un(e,c=>{c===(e.openOnHover&&l||r.value&&s)&&!(e.openOnHover&&o.value&&!n.value)&&(o.value!==c&&(i=!0),o.value=c)}),d={click:c=>{c.stopPropagation(),a.value=c.currentTarget||c.target,o.value=!o.value},mouseenter:c=>{l=!0,a.value=c.currentTarget||c.target,u()},mouseleave:c=>{l=!1,g()},focus:c=>{Vt&&!c.target.matches(":focus-visible")||(s=!0,c.stopPropagation(),a.value=c.currentTarget||c.target,u())},blur:c=>{s=!1,c.stopPropagation(),g()}},v=S(()=>{const c={};return f.value&&(c.click=d.click),e.openOnHover&&(c.mouseenter=d.mouseenter,c.mouseleave=d.mouseleave),r.value&&(c.focus=d.focus,c.blur=d.blur),c}),h=S(()=>{const c={};if(e.openOnHover&&(c.mouseenter=()=>{l=!0,u()},c.mouseleave=()=>{l=!1,g()}),e.closeOnContentClick){const I=xe(dn,null);c.click=()=>{o.value=!1,I==null||I.closeParents()}}return c}),m=S(()=>{const c={};return e.openOnHover&&(c.mouseenter=()=>{i&&(l=!0,i=!1,u())},c.mouseleave=()=>{l=!1,g()}),c});V(n,c=>{c&&(e.openOnHover&&!l&&(!r.value||!s)||r.value&&!s&&(!e.openOnHover||!l))&&(o.value=!1)});const w=A();ee(()=>{w.value&&Y(()=>{const c=w.value;a.value=Lt(c)?c.$el:c})});const b=K("useActivator");let y;return V(()=>!!e.activator,c=>{c&&N?(y=ke(),y.run(()=>{mn(e,b,{activatorEl:a,activatorEvents:v})})):y&&y.stop()},{flush:"post",immediate:!0}),j(()=>{var c;(c=y)==null||c.stop()}),{activatorEl:a,activatorRef:w,activatorEvents:v,contentEvents:h,scrimEvents:m}}function mn(e,t,o){let{activatorEl:n,activatorEvents:a}=o;V(()=>e.activator,(r,f)=>{if(f&&r!==f){const u=i(f);u&&s(u)}r&&Y(()=>l())},{immediate:!0}),V(()=>e.activatorProps,()=>{l()}),j(()=>{s()});function l(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&(Object.entries(a.value).forEach(u=>{let[g,d]=u;r.addEventListener(g,d)}),Object.keys(f).forEach(u=>{f[u]==null?r.removeAttribute(u):r.setAttribute(u,f[u])}))}function s(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&(Object.entries(a.value).forEach(u=>{let[g,d]=u;r.removeEventListener(g,d)}),Object.keys(f).forEach(u=>{r.removeAttribute(u)}))}function i(){var r;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(f)if(f==="parent"){var g,d;let v=t==null||(g=t.proxy)==null||(d=g.$el)==null?void 0:d.parentNode;for(;v.hasAttribute("data-no-activator");)v=v.parentNode;u=v}else typeof f=="string"?u=document.querySelector(f):"$el"in f?u=f.$el:u=f;return n.value=((r=u)==null?void 0:r.nodeType)===Node.ELEMENT_NODE?u:null,n.value}}const gn=q({eager:Boolean},"lazy");function hn(e,t){const o=A(!1),n=S(()=>o.value||e.eager||t.value);V(t,()=>o.value=!0);function a(){e.eager||(o.value=!1)}return{isBooted:o,hasContent:n,onAfterLeave:a}}function ve(e,t){return{x:e.x+t.x,y:e.y+t.y}}function yn(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ve(e,t){if(e.side==="top"||e.side==="bottom"){const{side:o,align:n}=e,a=n==="left"?0:n==="center"?t.width/2:n==="right"?t.width:n,l=o==="top"?0:o==="bottom"?t.height:o;return ve({x:a,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:o,align:n}=e,a=o==="left"?0:o==="right"?t.width:o,l=n==="top"?0:n==="center"?t.height/2:n==="bottom"?t.height:n;return ve({x:a,y:l},t)}return ve({x:t.width/2,y:t.height/2},t)}const ut={static:pn,connected:Sn},bn=q({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in ut},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function wn(e,t){const o=A({}),n=A();let a;ee(async()=>{var s;(s=a)==null||s.stop(),n.value=void 0,N&&t.isActive.value&&e.locationStrategy&&(a=ke(),e.locationStrategy!=="connected"&&await Y(),a.run(()=>{if(typeof e.locationStrategy=="function"){var i;n.value=(i=e.locationStrategy(t,e,o))==null?void 0:i.updateLocation}else{var r;n.value=(r=ut[e.locationStrategy](t,e,o))==null?void 0:r.updateLocation}}))}),N&&window.addEventListener("resize",l,{passive:!0}),j(()=>{var s;N&&window.removeEventListener("resize",l),n.value=void 0,(s=a)==null||s.stop()});function l(s){var i;(i=n.value)==null||i.call(n,s)}return{contentStyles:o,updateLocation:n}}function pn(){}function xn(e){const t=it(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Sn(e,t,o){const n=Qt(e.activatorEl.value);n&&Object.assign(o.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:l}=Tt(()=>{const h=Pe(t.location,e.isRtl.value),m=t.origin==="overlap"?h:t.origin==="auto"?ce(h):Pe(t.origin,e.isRtl.value);return h.side===m.side&&h.align===ue(m).align?{preferredAnchor:_e(h),preferredOrigin:_e(m)}:{preferredAnchor:h,preferredOrigin:m}}),[s,i,r,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(h=>S(()=>{const m=parseFloat(t[h]);return isNaN(m)?1/0:m})),u=S(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const h=t.offset.split(" ").map(parseFloat);return h.length<2&&h.push(0),h}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let g=!1;const d=new ResizeObserver(()=>{g&&v()});V([e.activatorEl,e.contentEl],(h,m)=>{let[w,b]=h,[y,c]=m;y&&d.unobserve(y),w&&d.observe(w),c&&d.unobserve(c),b&&d.observe(b)},{immediate:!0}),j(()=>{d.disconnect()});function v(){if(g=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>g=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const h=e.activatorEl.value.getBoundingClientRect(),m=xn(e.contentEl.value),w=ne(e.contentEl.value),b=12;w.length||(w.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(m.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),m.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const y=w.reduce((O,E)=>{const p=E.getBoundingClientRect(),k=new U({x:E===document.documentElement?0:p.x,y:E===document.documentElement?0:p.y,width:E.clientWidth,height:E.clientHeight});return O?new U({x:Math.max(O.left,k.left),y:Math.max(O.top,k.top),width:Math.min(O.right,k.right)-Math.max(O.left,k.left),height:Math.min(O.bottom,k.bottom)-Math.max(O.top,k.top)}):k},void 0);y.x+=b,y.y+=b,y.width-=b*2,y.height-=b*2;let c={anchor:a.value,origin:l.value};function I(O){const E=new U(m),p=Ve(O.anchor,h),k=Ve(O.origin,E);let{x:B,y:L}=yn(p,k);switch(O.anchor.side){case"top":L-=u.value[0];break;case"bottom":L+=u.value[0];break;case"left":B-=u.value[0];break;case"right":B+=u.value[0];break}switch(O.anchor.align){case"top":L-=u.value[1];break;case"bottom":L+=u.value[1];break;case"left":B-=u.value[1];break;case"right":B+=u.value[1];break}return E.x+=B,E.y+=L,E.width=Math.min(E.width,r.value),E.height=Math.min(E.height,f.value),{overflows:Ie(E,y),x:B,y:L}}let _=0,T=0;const R={x:0,y:0},z={x:!1,y:!1};let H=-1;for(;;){if(H++>10){Dt("Infinite loop detected in connectedLocationStrategy");break}const{x:O,y:E,overflows:p}=I(c);_+=O,T+=E,m.x+=O,m.y+=E;{const k=Be(c.anchor),B=p.x.before||p.x.after,L=p.y.before||p.y.after;let M=!1;if(["x","y"].forEach(P=>{if(P==="x"&&B&&!z.x||P==="y"&&L&&!z.y){const C={anchor:{...c.anchor},origin:{...c.origin}},F=P==="x"?k==="y"?ue:ce:k==="y"?ce:ue;C.anchor=F(C.anchor),C.origin=F(C.origin);const{overflows:te}=I(C);(te[P].before<=p[P].before&&te[P].after<=p[P].after||te[P].before+te[P].after<(p[P].before+p[P].after)/2)&&(c=C,M=z[P]=!0)}}),M)continue}p.x.before&&(_+=p.x.before,m.x+=p.x.before),p.x.after&&(_-=p.x.after,m.x-=p.x.after),p.y.before&&(T+=p.y.before,m.y+=p.y.before),p.y.after&&(T-=p.y.after,m.y-=p.y.after);{const k=Ie(m,y);R.x=y.width-k.x.before-k.x.after,R.y=y.height-k.y.before-k.y.after,_+=k.x.before,m.x+=k.x.before,T+=k.y.before,m.y+=k.y.before}break}const D=Be(c.anchor);Object.assign(o.value,{"--v-overlay-anchor-origin":`${c.anchor.side} ${c.anchor.align}`,transformOrigin:`${c.origin.side} ${c.origin.align}`,top:$(Te(T)),left:$(Te(_)),minWidth:$(D==="y"?Math.min(s.value,h.width):s.value),maxWidth:$(De(Ae(R.x,s.value===1/0?0:s.value,r.value))),maxHeight:$(De(Ae(R.y,i.value===1/0?0:i.value,f.value)))})}return V(()=>[a.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>v(),{immediate:!n}),n&&Y(()=>v()),requestAnimationFrame(()=>{o.value.maxHeight&&v()}),{updateLocation:v}}function Te(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function De(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let he=!0;const oe=[];function kn(e){!he||oe.length?(oe.push(e),ye()):(he=!1,e(),ye())}let $e=-1;function ye(){cancelAnimationFrame($e),$e=requestAnimationFrame(()=>{const e=oe.shift();e&&e(),oe.length?ye():he=!0})}const be={none:null,close:On,block:Pn,reposition:_n},Cn=q({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in be}},"v-overlay-scroll-strategies");function En(e,t){if(!N)return;let o;ee(async()=>{var n;(n=o)==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(o=ke(),await Y(),o.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e);else{var a;(a=be[e.scrollStrategy])==null||a.call(be,t,e)}}))}),j(()=>{var n;(n=o)==null||n.stop()})}function On(e){function t(o){e.isActive.value=!1}dt(e.activatorEl.value??e.contentEl.value,t)}function Pn(e,t){var o;const n=(o=e.root.value)==null?void 0:o.offsetParent,a=[...new Set([...ne(e.activatorEl.value,t.contained?n:void 0),...ne(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),l=window.innerWidth-document.documentElement.offsetWidth,s=(i=>Ce(i)&&i)(n||document.documentElement);s&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((i,r)=>{i.style.setProperty("--v-body-scroll-x",$(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",$(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",$(l)),i.classList.add("v-overlay-scroll-blocked")}),j(()=>{a.forEach((i,r)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-u}),s&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function _n(e){let t=!1,o=-1;function n(a){kn(()=>{var l,s;const i=performance.now();(l=(s=e.updateLocation).value)==null||l.call(s,a),t=(performance.now()-i)/(1e3/60)>2})}dt(e.activatorEl.value??e.contentEl.value,a=>{t?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{n(a)})})):n(a)})}function dt(e,t){const o=[document,...ne(e)];o.forEach(n=>{n.addEventListener("scroll",t,{passive:!0})}),j(()=>{o.forEach(n=>{n.removeEventListener("scroll",t)})})}function Bn(){if(!N)return A(!1);const{ssr:e}=$t();if(e){const t=A(!1);return Je(()=>{t.value=!0}),t}else return A(!0)}function An(){const t=K("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const Me=Symbol.for("vuetify:stack"),X=Se([]);function In(e,t,o){const n=K("useStack"),a=!o,l=xe(Me,void 0),s=Se({activeChildren:new Set});pe(Me,s);const i=A(+t.value);lt(e,()=>{var u;const g=(u=X.at(-1))==null?void 0:u[1];i.value=g?g+10:+t.value,a&&X.push([n.uid,i.value]),l==null||l.activeChildren.add(n.uid),j(()=>{if(a){const d=X.findIndex(v=>v[0]===n.uid);X.splice(d,1)}l==null||l.activeChildren.delete(n.uid)})});const r=A(!0);a&&ee(()=>{var u;const g=((u=X.at(-1))==null?void 0:u[0])===n.uid;setTimeout(()=>r.value=g)});const f=S(()=>!s.activeChildren.size);return{globalTop:Mt(r),localTop:f,stackStyles:S(()=>({zIndex:i.value}))}}function J(e){return{teleportTarget:S(()=>{const o=e.value;if(o===!0||!N)return;const n=o===!1?document.body:typeof o=="string"?document.querySelector(o):o;if(n!=null){if(!J.cache.has(n)){const a=document.createElement("div");a.className="v-overlay-container",n.appendChild(a),J.cache.set(n,a)}return J.cache.get(n)}})}}J.cache=new WeakMap;function Rn(){return!0}function ft(e,t,o){if(!e||vt(e,o)===!1)return!1;const n=st(t);if(typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&n.host===e.target)return!1;const a=(typeof o.value=="object"&&o.value.include||(()=>[]))();return a.push(t),!a.some(l=>l==null?void 0:l.contains(e.target))}function vt(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Rn)(e)}function Ln(e,t,o){const n=typeof o.value=="function"?o.value:o.value.handler;t._clickOutside.lastMousedownWasOutside&&ft(e,t,o)&&setTimeout(()=>{vt(e,o)&&n&&n(e)},0)}function Fe(e,t){const o=st(e);t(document),typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&t(o)}const Vn={mounted(e,t){const o=a=>Ln(a,e,t),n=a=>{e._clickOutside.lastMousedownWasOutside=ft(a,e,t)};Fe(e,a=>{a.addEventListener("click",o,!0),a.addEventListener("mousedown",n,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:o,onMousedown:n}},unmounted(e,t){e._clickOutside&&(Fe(e,o=>{var n;if(!o||!((n=e._clickOutside)!=null&&n[t.instance.$.uid]))return;const{onClick:a,onMousedown:l}=e._clickOutside[t.instance.$.uid];o.removeEventListener("click",a,!0),o.removeEventListener("mousedown",l,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Tn(e){const{modelValue:t,color:o,...n}=e;return x(me,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&x("div",G({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},n),null)]})}const Dn=q({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...fn(),...tt(),...gn(),...bn(),...Cn(),...le(),...Ft()},"v-overlay"),$n=Qe()({name:"VOverlay",directives:{ClickOutside:Vn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Dn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:o,attrs:n,emit:a}=t;const l=Ze(e,"modelValue"),s=S({get:()=>l.value,set:C=>{C&&e.disabled||(l.value=C)}}),{teleportTarget:i}=J(S(()=>e.attach||e.contained)),{themeClasses:r}=ie(e),{rtlClasses:f,isRtl:u}=Nt(),{hasContent:g,onAfterLeave:d}=hn(e,s),v=zt(S(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:h,localTop:m,stackStyles:w}=In(s,W(e,"zIndex"),e._disableGlobalStack),{activatorEl:b,activatorRef:y,activatorEvents:c,contentEvents:I,scrimEvents:_}=vn(e,{isActive:s,isTop:m}),{dimensionStyles:T}=nt(e),R=Bn(),{scopeId:z}=An();V(()=>e.disabled,C=>{C&&(s.value=!1)});const H=A(),D=A(),{contentStyles:O,updateLocation:E}=wn(e,{isRtl:u,contentEl:D,activatorEl:b,isActive:s});En(e,{root:H,contentEl:D,activatorEl:b,isActive:s,updateLocation:E});function p(C){a("click:outside",C),e.persistent?P():s.value=!1}function k(){return s.value&&h.value}N&&V(s,C=>{C?window.addEventListener("keydown",B):window.removeEventListener("keydown",B)},{immediate:!0});function B(C){C.key==="Escape"&&h.value&&(e.persistent?P():s.value=!1)}const L=Ht();lt(()=>e.closeOnBack,()=>{Ut(L,C=>{h.value&&s.value?(C(!1),e.persistent?P():s.value=!1):C()})});const M=A();V(()=>s.value&&(e.absolute||e.contained)&&i.value==null,C=>{if(C){const F=Jt(H.value);F&&F!==document.scrollingElement&&(M.value=F.scrollTop)}});function P(){e.noClickAnimation||D.value&&Z(D.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ge})}return Q(()=>{var C,F;return x(Gt,null,[(C=o.activator)==null?void 0:C.call(o,{isActive:s.value,props:G({ref:y},de(c.value),e.activatorProps)}),R.value&&x(Wt,{disabled:!i.value,to:i.value},{default:()=>[g.value&&x("div",G({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},r.value,f.value],style:[w.value,{top:$(M.value)}],ref:H},z,n),[x(Tn,G({color:v,modelValue:s.value&&!!e.scrim},de(_.value)),null),x(qt,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:()=>{d(),a("afterLeave")}},{default:()=>[ot(x("div",G({ref:D,class:["v-overlay__content",e.contentClass],style:[T.value,O.value]},de(I.value),e.contentProps),[(F=o.default)==null?void 0:F.call(o,{isActive:s})]),[[jt,s.value],[at("click-outside"),{handler:p,closeConditional:k,include:()=>[b.value]}]])]})])]})])}),{activatorEl:b,animateClick:P,contentEl:D,globalTop:h,localTop:m,updateLocation:E}}});function Hn(e){return Yt(e,Object.keys($n.props))}export{Nn as V,tn as a,nn as b,Dn as c,An as d,dn as e,Hn as f,$n as g,zn as h,Fn as i,Z as j,en as m,it as n,ge as s,on as u};
