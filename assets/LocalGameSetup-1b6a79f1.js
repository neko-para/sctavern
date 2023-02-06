import{p as z,I as G,d as Ue,m as ce,a as J,u as H,g as oe,c as p,b as ee,o as Lt,e as Ne,t as C,f as N,h as i,i as Q,r as w,j as Re,w as he,k as Ge,l as D,n as te,q as ge,S as _e,s as Ot,v as de,x as Ee,y as Mt,z as be,A as Le,B as je,C as Dt,D as Ft,E as Oe,F as He,G as j,H as Ke,J as Tt,K as Z,L as R,M as We,N as Ut,O as ie,P as $,Q as T,R as V,T as W,U as pe,V as ue,W as Me,X as me,Y,Z as Nt,_ as Rt,$ as Gt,a0 as Et,a1 as jt,a2 as Ht,a3 as Kt,a4 as Wt}from"./index-39f435d6.js";import{m as Ve,R as qe,V as ke,a as qt,u as Ce,b as ze,c as zt,d as Jt,f as Qt,e as Xt,g as se,h as Je,i as ne,j as Yt,k as Qe,l as Xe,n as Ye,o as Ze,p as et,q as Zt,r as tt,s as el,t as lt,v as tl,w as nt,x as at,y as ot,z as ll,A as De,B as nl,C as st,D as al,E as Fe,F as ol,G as sl,H as ut,I as ul,J as il,K as rl,L as cl,M as dl,N as it,O as vl,P as q,Q as fl}from"./VOverlay-cad0c7e9.js";const rt=Symbol.for("vuetify:selection-control-group"),ct=z({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:G,trueIcon:G,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:Ue},...ce(),...Ve()},"v-selection-control-group");J({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...ct()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const l=H(e,"modelValue"),o=oe(),n=p(()=>e.id||`v-selection-control-group-${o}`),s=p(()=>e.name||n.value),u=new Set;return ee(rt,{modelValue:l,forceUpdate:()=>{u.forEach(f=>f())},onForceUpdate:f=>{u.add(f),Lt(()=>{u.delete(f)})}}),Ne({[e.defaultsTarget]:{color:C(e,"color"),disabled:C(e,"disabled"),density:C(e,"density"),error:C(e,"error"),inline:C(e,"inline"),modelValue:l,multiple:p(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:s,falseIcon:C(e,"falseIcon"),trueIcon:C(e,"trueIcon"),readonly:C(e,"readonly"),ripple:C(e,"ripple"),type:C(e,"type"),valueComparator:C(e,"valueComparator")}}),N(()=>{var f;return i("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline}],role:e.type==="radio"?"radiogroup":void 0},[(f=t.default)==null?void 0:f.call(t)])}),{}}});const dt=z({label:String,trueValue:null,falseValue:null,value:null,...ct()},"v-selection-control");function ml(e){const a=te(rt,void 0),{densityClasses:t}=Ce(e),l=H(e,"modelValue"),o=p(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),n=p(()=>e.falseValue!==void 0?e.falseValue:!1),s=p(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),u=p({get(){const r=a?a.modelValue.value:l.value;return s.value?r.some(d=>e.valueComparator(d,o.value)):e.valueComparator(r,o.value)},set(r){if(e.readonly)return;const d=r?o.value:n.value;let g=d;s.value&&(g=r?[...ge(l.value),d]:ge(l.value).filter(v=>!e.valueComparator(v,o.value))),a?a.modelValue.value=g:l.value=g}}),{textColorClasses:f,textColorStyles:y}=ze(p(()=>u.value&&!e.error&&!e.disabled?e.color:void 0)),S=p(()=>u.value?e.trueIcon:e.falseIcon);return{group:a,densityClasses:t,trueValue:o,falseValue:n,model:u,textColorClasses:f,textColorStyles:y,icon:S}}const yl=Q()({name:"VSelectionControl",directives:{Ripple:qe},inheritAttrs:!1,props:dt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:t,slots:l}=a;const{group:o,densityClasses:n,icon:s,model:u,textColorClasses:f,textColorStyles:y,trueValue:S}=ml(e),r=oe(),d=p(()=>e.id||`input-${r}`),g=w(!1),v=w(!1),c=w();o?.onForceUpdate(()=>{c.value&&(c.value.checked=u.value)});function m(O){g.value=!0,(!_e||_e&&O.target.matches(":focus-visible"))&&(v.value=!0)}function P(){g.value=!1,v.value=!1}function B(O){e.readonly&&o&&Ot(()=>o.forceUpdate()),u.value=O.target.checked}return N(()=>{var O,K;const k=l.label?l.label({label:e.label,props:{for:d.value}}):e.label,[b,I]=Re(t);return i("div",D({class:["v-selection-control",{"v-selection-control--dirty":u.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":g.value,"v-selection-control--focus-visible":v.value,"v-selection-control--inline":e.inline},n.value]},b),[i("div",{class:["v-selection-control__wrapper",f.value],style:y.value},[(O=l.default)==null?void 0:O.call(l),he(i("div",{class:["v-selection-control__input"]},[s.value&&i(ke,{key:"icon",icon:s.value},null),i("input",D({ref:c,checked:u.value,disabled:e.disabled,id:d.value,onBlur:P,onFocus:m,onInput:B,"aria-disabled":e.readonly,type:e.type,value:S.value,name:e.name,"aria-checked":e.type==="checkbox"?u.value:void 0},I),null),(K=l.input)==null?void 0:K.call(l,{model:u,textColorClasses:f,textColorStyles:y,props:{onFocus:m,onBlur:P,id:d.value}})]),[[Ge("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),k&&i(qt,{for:d.value,clickable:!0},{default:()=>[k]})])}),{isFocused:g,input:c}}}),vt=z({indeterminate:Boolean,indeterminateIcon:{type:G,default:"$checkboxIndeterminate"},...dt({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),Pe=J({name:"VCheckboxBtn",props:vt(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:t}=a;const l=H(e,"indeterminate"),o=H(e,"modelValue");function n(f){l.value&&(l.value=!1)}const s=p(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),u=p(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return N(()=>i(yl,D(e,{modelValue:o.value,"onUpdate:modelValue":[f=>o.value=f,n],class:"v-checkbox-btn",type:"checkbox",inline:!0,falseIcon:s.value,trueIcon:u.value,"aria-checked":e.indeterminate?"mixed":void 0}),t)),{}}});function gl(e){return de(e,Object.keys(Pe.props))}const ye=J({name:"VCheckbox",inheritAttrs:!1,props:{...zt(),...vt()},emits:{"update:focused":e=>!0},setup(e,a){let{attrs:t,slots:l}=a;const{isFocused:o,focus:n,blur:s}=Jt(e),u=oe(),f=p(()=>e.id||`checkbox-${u}`);return N(()=>{const[y,S]=Re(t),[r,d]=Qt(e),[g,v]=gl(e);return i(Xt,D({class:"v-checkbox"},y,r,{id:f.value,focused:o.value}),{...l,default:c=>{let{id:m,messagesId:P,isDisabled:B,isReadonly:O}=c;return i(Pe,D(g,{id:m.value,"aria-describedby":P.value,disabled:B.value,readonly:O.value},S,{onFocus:n,onBlur:s}),l)}})}),{}}});const Ie=["sm","md","lg","xl","xxl"],ft=(()=>Ie.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),mt=(()=>Ie.reduce((e,a)=>(e["offset"+Ee(a)]={type:[String,Number],default:null},e),{}))(),yt=(()=>Ie.reduce((e,a)=>(e["order"+Ee(a)]={type:[String,Number],default:null},e),{}))(),Te={col:Object.keys(ft),offset:Object.keys(mt),order:Object.keys(yt)};function pl(e,a,t){let l=e;if(!(t==null||t===!1)){if(a){const o=a.replace(e,"");l+=`-${o}`}return e==="col"&&(l="v-"+l),e==="col"&&(t===""||t===!0)||(l+=`-${t}`),l.toLowerCase()}}const kl=["auto","start","end","center","baseline","stretch"],M=J({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...ft,offset:{type:[String,Number],default:null},...mt,order:{type:[String,Number],default:null},...yt,alignSelf:{type:String,default:null,validator:e=>kl.includes(e)},...se()},setup(e,a){let{slots:t}=a;const l=p(()=>{const o=[];let n;for(n in Te)Te[n].forEach(u=>{const f=e[u],y=pl(n,u,f);y&&o.push(y)});const s=o.some(u=>u.startsWith("v-col-"));return o.push({"v-col":!s||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return Mt(e.tag,{class:l.value},(o=t.default)==null?void 0:o.call(t))}}});const Sl=J({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ce()},setup(e,a){let{attrs:t}=a;const{themeClasses:l}=be(e),{backgroundColorClasses:o,backgroundColorStyles:n}=Je(C(e,"color")),s=p(()=>{const u={};return e.length&&(u[e.vertical?"maxHeight":"maxWidth"]=Le(e.length)),e.thickness&&(u[e.vertical?"borderRightWidth":"borderTopWidth"]=Le(e.thickness)),u});return N(()=>i("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,o.value],style:[s.value,n.value],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),Se=Symbol.for("vuetify:list");function gt(){const e=te(Se,{hasPrepend:w(!1),updateHasPrepend:()=>null}),a={hasPrepend:w(!1),updateHasPrepend:t=>{t&&(a.hasPrepend.value=t)}};return ee(Se,a),e}function pt(){return te(Se,null)}const hl={open:e=>{let{id:a,value:t,opened:l,parents:o}=e;if(t){const n=new Set;n.add(a);let s=o.get(a);for(;s!=null;)n.add(s),s=o.get(s);return n}else return l.delete(a),l},select:()=>null},kt={open:e=>{let{id:a,value:t,opened:l,parents:o}=e;if(t){let n=o.get(a);for(l.add(a);n!=null&&n!==a;)l.add(n),n=o.get(n);return l}else l.delete(a);return l},select:()=>null},bl={open:kt.open,select:e=>{let{id:a,value:t,opened:l,parents:o}=e;if(!t)return l;const n=[];let s=o.get(a);for(;s!=null;)n.push(s),s=o.get(s);return new Set(n)}},xe=e=>{const a={select:t=>{let{id:l,value:o,selected:n}=t;if(e&&!o){const s=Array.from(n.entries()).reduce((u,f)=>{let[y,S]=f;return S==="on"?[...u,y]:u},[]);if(s.length===1&&s[0]===l)return n}return n.set(l,o?"on":"off"),n},in:(t,l,o)=>{let n=new Map;for(const s of t||[])n=a.select({id:s,value:!0,selected:new Map(n),children:l,parents:o});return n},out:t=>{const l=[];for(const[o,n]of t.entries())n==="on"&&l.push(o);return l}};return a},St=e=>{const a=xe(e);return{select:l=>{let{selected:o,id:n,...s}=l;const u=o.has(n)?new Map([[n,o.get(n)]]):new Map;return a.select({...s,id:n,selected:u})},in:(l,o,n)=>{let s=new Map;return l!=null&&l.length&&(s=a.in(l.slice(0,1),o,n)),s},out:(l,o,n)=>a.out(l,o,n)}},Vl=e=>{const a=xe(e);return{select:l=>{let{id:o,selected:n,children:s,...u}=l;return s.has(o)?n:a.select({id:o,selected:n,children:s,...u})},in:a.in,out:a.out}},Cl=e=>{const a=St(e);return{select:l=>{let{id:o,selected:n,children:s,...u}=l;return s.has(o)?n:a.select({id:o,selected:n,children:s,...u})},in:a.in,out:a.out}},Pl=e=>{const a={select:t=>{let{id:l,value:o,selected:n,children:s,parents:u}=t;const f=new Map(n),y=[l];for(;y.length;){const r=y.shift();n.set(r,o?"on":"off"),s.has(r)&&y.push(...s.get(r))}let S=u.get(l);for(;S;){const r=s.get(S),d=r.every(v=>n.get(v)==="on"),g=r.every(v=>!n.has(v)||n.get(v)==="off");n.set(S,d?"on":g?"off":"indeterminate"),S=u.get(S)}return e&&!o&&Array.from(n.entries()).reduce((d,g)=>{let[v,c]=g;return c==="on"?[...d,v]:d},[]).length===0?f:n},in:(t,l,o)=>{let n=new Map;for(const s of t||[])n=a.select({id:s,value:!0,selected:new Map(n),children:l,parents:o});return n},out:(t,l)=>{const o=[];for(const[n,s]of t.entries())s==="on"&&!l.has(n)&&o.push(n);return o}};return a},ae=Symbol.for("vuetify:nested"),ht={id:w(),root:{register:()=>null,unregister:()=>null,parents:w(new Map),children:w(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:w(new Set),selected:w(new Map),selectedValues:w([])}},Il=z({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),xl=e=>{let a=!1;const t=w(new Map),l=w(new Map),o=H(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=p(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Cl(e.mandatory);case"leaf":return Vl(e.mandatory);case"independent":return xe(e.mandatory);case"single-independent":return St(e.mandatory);case"classic":default:return Pl(e.mandatory)}}),s=p(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return bl;case"single":return hl;case"multiple":default:return kt}}),u=H(e,"selected",e.selected,r=>n.value.in(r,t.value,l.value),r=>n.value.out(r,t.value,l.value));je(()=>{a=!0});function f(r){const d=[];let g=r;for(;g!=null;)d.unshift(g),g=l.value.get(g);return d}const y=Dt("nested"),S={id:w(),root:{opened:o,selected:u,selectedValues:p(()=>{const r=[];for(const[d,g]of u.value.entries())g==="on"&&r.push(d);return r}),register:(r,d,g)=>{d&&r!==d&&l.value.set(r,d),g&&t.value.set(r,[]),d!=null&&t.value.set(d,[...t.value.get(d)||[],r])},unregister:r=>{if(a)return;t.value.delete(r);const d=l.value.get(r);if(d){const g=t.value.get(d)??[];t.value.set(d,g.filter(v=>v!==r))}l.value.delete(r),o.value.delete(r)},open:(r,d,g)=>{y.emit("click:open",{id:r,value:d,path:f(r),event:g});const v=s.value.open({id:r,value:d,opened:new Set(o.value),children:t.value,parents:l.value,event:g});v&&(o.value=v)},openOnSelect:(r,d,g)=>{const v=s.value.select({id:r,value:d,selected:new Map(u.value),opened:new Set(o.value),children:t.value,parents:l.value,event:g});v&&(o.value=v)},select:(r,d,g)=>{y.emit("click:select",{id:r,value:d,path:f(r),event:g});const v=n.value.select({id:r,value:d,selected:new Map(u.value),children:t.value,parents:l.value,event:g});v&&(u.value=v),S.root.openOnSelect(r,d,g)},children:t,parents:l}};return ee(ae,S),S.root},bt=(e,a)=>{const t=te(ae,ht),l=p(()=>e.value??Symbol(oe())),o={...t,id:l,open:(n,s)=>t.root.open(l.value,n,s),openOnSelect:(n,s)=>t.root.openOnSelect(l.value,n,s),isOpen:p(()=>t.root.opened.value.has(l.value)),parent:p(()=>t.root.parents.value.get(l.value)),select:(n,s)=>t.root.select(l.value,n,s),isSelected:p(()=>t.root.selected.value.get(l.value)==="on"),isIndeterminate:p(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:p(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,a),je(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),a&&ee(ae,o),o},Al=()=>{const e=te(ae,ht);ee(ae,{...e,isGroupActivator:!0})},wl=J({name:"VListGroupActivator",setup(e,a){let{slots:t}=a;return Al(),()=>{var l;return(l=t.default)==null?void 0:l.call(t)}}}),$l=z({activeColor:String,color:String,collapseIcon:{type:G,default:"$collapse"},expandIcon:{type:G,default:"$expand"},prependIcon:G,appendIcon:G,fluid:Boolean,subgroup:Boolean,value:null,...se()},"v-list-group"),Vt=Q()({name:"VListGroup",props:{title:String,...$l()},setup(e,a){let{slots:t}=a;const{isOpen:l,open:o,id:n}=bt(C(e,"value"),!0),s=p(()=>`v-list-group--id-${String(n.value)}`),u=pt();function f(r){o(!l.value,r)}const y=p(()=>({onClick:f,class:"v-list-group__header",id:s.value})),S=p(()=>l.value?e.collapseIcon:e.expandIcon);return N(()=>{var r;return i(e.tag,{class:["v-list-group",{"v-list-group--prepend":u?.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":l.value}]},{default:()=>[t.activator&&i(ne,{defaults:{VListItem:{active:l.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&S.value,appendIcon:e.appendIcon||!e.subgroup&&S.value,title:e.title,value:e.value}}},{default:()=>[i(wl,null,{default:()=>[t.activator({props:y.value,isOpen:l})]})]}),i(Yt,null,{default:()=>[he(i("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(r=t.default)==null?void 0:r.call(t)]),[[Ft,l.value]])]})]})}),{}}});function Bl(e){return de(e,Object.keys(Vt.props))}const _l=Qe("v-list-item-subtitle"),Ll=Qe("v-list-item-title"),re=Q()({name:"VListItem",directives:{Ripple:qe},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:G,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:G,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Oe,onClickOnce:Oe,...Xe(),...Ve(),...Ye(),...Ze(),...et(),...Zt(),...se(),...ce(),...tt({variant:"text"})},emits:{click:e=>!0},setup(e,a){let{attrs:t,slots:l,emit:o}=a;const n=el(e,t),s=p(()=>e.value??n.href.value),{select:u,isSelected:f,isIndeterminate:y,isGroupActivator:S,root:r,parent:d,openOnSelect:g}=bt(s,!1),v=pt(),c=p(()=>{var A;return e.active!==!1&&(e.active||((A=n.isActive)==null?void 0:A.value)||f.value)}),m=p(()=>e.link!==!1&&n.isLink.value),P=p(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||e.value!=null&&!!v)),B=p(()=>e.rounded||e.nav),O=p(()=>({color:c.value?e.activeColor??e.color:e.color,variant:e.variant}));He(()=>{var A;return(A=n.isActive)==null?void 0:A.value},A=>{A&&d.value!=null&&r.open(d.value,!0),A&&g(A)},{immediate:!0});const{themeClasses:K}=be(e),{borderClasses:k}=lt(e),{colorClasses:b,colorStyles:I,variantClasses:h}=tl(O),{densityClasses:_}=Ce(e),{dimensionStyles:X}=nt(e),{elevationClasses:x}=at(e),{roundedClasses:U}=ot(B),E=p(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),L=p(()=>({isActive:c.value,select:u,isSelected:f.value,isIndeterminate:y.value}));function F(A){var le;o("click",A),!(S||!P.value)&&((le=n.navigate)==null||le.call(n,A),e.value!=null&&u(!f.value,A))}function ve(A){(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),F(A))}return N(()=>{var A,le,Ae,we,$e;const wt=m.value?"a":e.tag,Be=!v||f.value||c.value,$t=l.title||e.title,Bt=l.subtitle||e.subtitle,_t=!!(l.append||e.appendAvatar||e.appendIcon),fe=!!(l.prepend||e.prependAvatar||e.prependIcon);return v?.updateHasPrepend(fe),he(i(wt,{class:["v-list-item",{"v-list-item--active":c.value,"v-list-item--disabled":e.disabled,"v-list-item--link":P.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!fe&&v?.hasPrepend.value,[`${e.activeClass}`]:e.activeClass&&c.value},K.value,k.value,Be?b.value:void 0,_.value,x.value,E.value,U.value,h.value],style:[Be?I.value:void 0,X.value],href:n.href.value,tabindex:P.value?0:void 0,onClick:F,onKeydown:P.value&&!m.value&&ve},{default:()=>[ll(P.value||c.value,"v-list-item"),fe&&i(ne,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[i("div",{class:"v-list-item__prepend"},[e.prependAvatar&&i(De,{key:"prepend-avatar"},null),e.prependIcon&&i(ke,{key:"prepend-icon"},null),(A=l.prepend)==null?void 0:A.call(l,L.value)])]}),i("div",{class:"v-list-item__content","data-no-activator":""},[$t&&i(Ll,{key:"title"},{default:()=>[((le=l.title)==null?void 0:le.call(l,{title:e.title}))??e.title]}),Bt&&i(_l,{key:"subtitle"},{default:()=>[((Ae=l.subtitle)==null?void 0:Ae.call(l,{subtitle:e.subtitle}))??e.subtitle]}),(we=l.default)==null?void 0:we.call(l,L.value)]),_t&&i(ne,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[i("div",{class:"v-list-item__append"},[($e=l.append)==null?void 0:$e.call(l,L.value),e.appendIcon&&i(ke,{key:"append-icon"},null),e.appendAvatar&&i(De,{key:"append-avatar"},null)])]})]}),[[Ge("ripple"),P.value]])}),{}}}),Ol=J({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...se()},setup(e,a){let{slots:t}=a;const{textColorClasses:l,textColorStyles:o}=ze(C(e,"color"));return N(()=>{var n;const s=!!(t.default||e.title);return i(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},l.value],style:{textColorStyles:o}},{default:()=>[s&&i("div",{class:"v-list-subheader__text"},[((n=t.default)==null?void 0:n.call(t))??e.title])]})}),{}}}),Ct=Q()({name:"VListChildren",props:{items:Array},setup(e,a){let{slots:t}=a;return gt(),()=>{var l,o;return((l=t.default)==null?void 0:l.call(t))??((o=e.items)==null?void 0:o.map(n=>{let{children:s,props:u,type:f,raw:y}=n;if(f==="divider"){var S;return((S=t.divider)==null?void 0:S.call(t,{props:u}))??i(Sl,u,null)}if(f==="subheader"){var r;return((r=t.subheader)==null?void 0:r.call(t,{props:u}))??i(Ol,u,{default:t.subheader})}const d={subtitle:t.subtitle?c=>{var m;return(m=t.subtitle)==null?void 0:m.call(t,{...c,item:y})}:void 0,prepend:t.prepend?c=>{var m;return(m=t.prepend)==null?void 0:m.call(t,{...c,item:y})}:void 0,append:t.append?c=>{var m;return(m=t.append)==null?void 0:m.call(t,{...c,item:y})}:void 0,default:t.default?c=>{var m;return(m=t.default)==null?void 0:m.call(t,{...c,item:y})}:void 0,title:t.title?c=>{var m;return(m=t.title)==null?void 0:m.call(t,{...c,item:y})}:void 0},[g,v]=Bl(u);return s?i(Vt,D({value:u?.value},g),{activator:c=>{let{props:m}=c;return t.header?t.header({...u,...m}):i(re,D(u,m),d)},default:()=>i(Ct,{items:s},t)}):t.item?t.item(u):i(re,u,d)}))}}}),Pt=z({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function It(e,a){const t=j(a,e.itemTitle,a),l=e.returnObject?a:j(a,e.itemValue,t),o=j(a,e.itemChildren),n=e.itemProps===!0?typeof a=="object"&&a!=null&&!Array.isArray(a)?"children"in a?de(a,["children"])[1]:a:void 0:j(a,e.itemProps),s={title:t,value:l,...n};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(o)?xt(e,o):void 0,raw:a}}function xt(e,a){const t=[];for(const l of a)t.push(It(e,l));return t}function Ml(e){const a=p(()=>xt(e,e.items));function t(o){return o.map(n=>It(e,n))}function l(o){return o.map(n=>{let{props:s}=n;return s.value})}return{items:a,transformIn:t,transformOut:l}}function Dl(e,a){const t=j(a,e.itemType,"item"),l=typeof a=="string"?a:j(a,e.itemTitle),o=j(a,e.itemValue,void 0),n=j(a,e.itemChildren),s=e.itemProps===!0?de(a,["children"])[1]:j(a,e.itemProps),u={title:l,value:o,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?At(e,n):void 0,raw:a}}function At(e,a){const t=[];for(const l of a)t.push(Dl(e,l));return t}function Fl(e){return{items:p(()=>At(e,e.items))}}const Tl=Q()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Il({selectStrategy:"single-leaf",openStrategy:"list"}),...Xe(),...Ve(),...Ye(),...Ze(),itemType:{type:String,default:"type"},...Pt(),...et(),...se(),...ce(),...tt({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,a){let{slots:t}=a;const{items:l}=Fl(e),{themeClasses:o}=be(e),{backgroundColorClasses:n,backgroundColorStyles:s}=Je(C(e,"bgColor")),{borderClasses:u}=lt(e),{densityClasses:f}=Ce(e),{dimensionStyles:y}=nt(e),{elevationClasses:S}=at(e),{roundedClasses:r}=ot(e),{open:d,select:g}=xl(e),v=p(()=>e.lines?`v-list--${e.lines}-line`:void 0),c=C(e,"activeColor"),m=C(e,"color");gt(),Ne({VListGroup:{activeColor:c,color:m},VListItem:{activeClass:C(e,"activeClass"),activeColor:c,color:m,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),variant:C(e,"variant")}});const P=w(!1),B=w();function O(h){P.value=!0}function K(h){P.value=!1}function k(h){var _;!P.value&&!(h.relatedTarget&&(_=B.value)!=null&&_.contains(h.relatedTarget))&&I()}function b(h){if(B.value){if(h.key==="ArrowDown")I("next");else if(h.key==="ArrowUp")I("prev");else if(h.key==="Home")I("first");else if(h.key==="End")I("last");else return;h.preventDefault()}}function I(h){if(!B.value)return;const _=[...B.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(L=>!L.hasAttribute("disabled")),X=_.indexOf(document.activeElement);if(h)if(h==="first"){var U;(U=_[0])==null||U.focus()}else if(h==="last"){var E;(E=_.at(-1))==null||E.focus()}else{let L,F=X;const ve=h==="next"?1:-1;do F+=ve,L=_[F];while((!L||L.offsetParent==null)&&F<_.length&&F>=0);L?L.focus():I(h==="next"?"first":"last")}else if(!B.value.contains(document.activeElement)){var x;(x=_[0])==null||x.focus()}}return N(()=>i(e.tag,{ref:B,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},o.value,n.value,u.value,f.value,S.value,v.value,r.value],style:[s.value,y.value],role:"listbox","aria-activedescendant":void 0,onFocusin:O,onFocusout:K,onFocus:k,onKeydown:b},{default:()=>[i(Ct,{items:l.value},t)]})),{open:d,select:g,focus:I}}});const Ul=Q()({name:"VMenu",props:{id:String,...Ke(nl({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:st}}),["absolute"])},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const l=H(e,"modelValue"),{scopeId:o}=al(),n=oe(),s=p(()=>e.id||`v-menu-${n}`),u=w(),f=te(Fe,null);let y=0;ee(Fe,{register(){++y},unregister(){--y},closeParents(){setTimeout(()=>{y||(l.value=!1,f?.closeParents())},40)}}),He(l,r=>{r?f?.register():f?.unregister()});function S(){f?.closeParents()}return N(()=>{const[r]=ol(e);return i(sl,D({ref:u,class:["v-menu"]},r,{modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,absolute:!0,activatorProps:D({"aria-haspopup":"menu","aria-expanded":String(l.value),"aria-owns":s.value},e.activatorProps),"onClick:outside":S},o),{activator:t.activator,default:function(){for(var d,g=arguments.length,v=new Array(g),c=0;c<g;c++)v[c]=arguments[c];return i(ne,{root:!0},{default:()=>[(d=t.default)==null?void 0:d.call(t,...v)]})}})}),ut({id:s},u)}}),Nl=z({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:G,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:Ue},...Pt({itemChildren:!1})},"v-select"),Rl=Q()({name:"VSelect",props:{...Nl(),...Ke(ul({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...il({transition:{component:st}})},emits:{"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,a){let{slots:t}=a;const{t:l}=Tt(),o=w(),n=H(e,"menu"),{items:s,transformIn:u,transformOut:f}=Ml(e),y=H(e,"modelValue",[],k=>u(ge(k)),k=>{const b=f(k);return e.multiple?b:b[0]??null}),S=rl(),r=p(()=>y.value.map(k=>s.value.find(b=>e.valueComparator(b.value,k.value))||k)),d=p(()=>r.value.map(k=>k.props.value)),g=p(()=>e.hideSelected?s.value.filter(k=>!r.value.some(b=>b===k)):s.value),v=w();function c(k){y.value=[],e.openOnClear&&(n.value=!0)}function m(){e.hideNoData&&!s.value.length||e.readonly||S!=null&&S.isReadonly.value||(n.value=!n.value)}function P(k){if(!(e.readonly||S!=null&&S.isReadonly.value)){if(["Enter","ArrowDown"," "].includes(k.key)&&(k.preventDefault(),n.value=!0),["Escape","Tab"].includes(k.key)&&(n.value=!1),k.key==="ArrowDown"){var b;(b=v.value)==null||b.focus("next")}else if(k.key==="ArrowUp"){var I;k.preventDefault(),(I=v.value)==null||I.focus("prev")}else if(k.key==="Home"){var h;k.preventDefault(),(h=v.value)==null||h.focus("first")}else if(k.key==="End"){var _;k.preventDefault(),(_=v.value)==null||_.focus("last")}}}function B(k){if(e.multiple){const b=d.value.findIndex(I=>e.valueComparator(I,k.value));if(b===-1)y.value=[...y.value,k];else{const I=[...y.value];I.splice(b,1),y.value=I}}else y.value=[k],n.value=!1}function O(k){var b;(b=v.value)!=null&&b.$el.contains(k.relatedTarget)||(n.value=!1)}function K(k){if(k.relatedTarget==null){var b;(b=o.value)==null||b.focus()}}return N(()=>{const k=!!(e.chips||t.chip),b=!!(!e.hideNoData||g.value.length||t.prepend||t.append||t["no-data"]),[I]=cl(e);return i(it,D({ref:o},I,{modelValue:y.value.map(h=>h.props.value).join(", "),"onUpdate:modelValue":h=>{h==null&&(y.value=[])},validationValue:y.externalValue,dirty:y.value.length>0,class:["v-select",{"v-select--active-menu":n.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":y.value.length}],appendInnerIcon:e.menuIcon,readonly:!0,"onClick:clear":c,"onClick:control":m,onBlur:O,onKeydown:P}),{...t,default:()=>{var h,_,X;return i(Z,null,[i(Ul,D({modelValue:n.value,"onUpdate:modelValue":x=>n.value=x,activator:"parent",contentClass:"v-select__content",eager:e.eager,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[b&&i(Tl,{ref:v,selected:d.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:x=>x.preventDefault(),onFocusout:K},{default:()=>[!g.value.length&&!e.hideNoData&&(((h=t["no-data"])==null?void 0:h.call(t))??i(re,{title:l(e.noDataText)},null)),(_=t["prepend-item"])==null?void 0:_.call(t),g.value.map((x,U)=>{if(t.item){var E;return(E=t.item)==null?void 0:E.call(t,{item:x,index:U,props:D(x.props,{onClick:()=>B(x)})})}return i(re,D({key:U},x.props,{onClick:()=>B(x)}),{prepend:L=>{let{isSelected:F}=L;return e.multiple&&!e.hideSelected?i(Pe,{modelValue:F,ripple:!1},null):void 0}})}),(X=t["append-item"])==null?void 0:X.call(t)]})]}),r.value.map((x,U)=>{function E(F){F.stopPropagation(),F.preventDefault(),B(x)}const L={"onClick:close":E,modelValue:!0,"onUpdate:modelValue":void 0};return i("div",{key:x.value,class:"v-select__selection"},[k?i(ne,{defaults:{VChip:{closable:e.closableChips,size:"small",text:x.title}}},{default:()=>[t.chip?t.chip({item:x,index:U,props:L}):i(dl,L,null)]}):t.selection?t.selection({item:x,index:U}):i("span",{class:"v-select__selection-text"},[x.title,e.multiple&&U<r.value.length-1&&i("span",{class:"v-select__selection-comma"},[R(",")])])])})])}})}),ut({menu:n,select:B},o)}}),Gl={class:"d-flex"},El={class:"d-flex"},jl={key:1,class:"d-flex"},Hl={key:2,class:"d-flex"},Kl={key:3,class:"d-flex"},Wl=pe("div",{style:{"min-width":"500px"}},null,-1),ql=We({__name:"GameConfig",props:{Pack:null,Seed:null,Role:null,Mutation:null,Pve:{type:Boolean}},emits:["update:Pack","update:Seed","update:Role","update:Pve","ok"],setup(e,{emit:a}){const t=e,l=Ut(),o=w("packseed"),n=p({get(){return t.Seed},set(v){a("update:Seed",v)}}),s=p({get(){return t.Pack},set(v){a("update:Pack",v)}}),u=p({get(){return t.Role},set(v){a("update:Role",v)}}),f=p({get(){return t.Pve},set(v){a("update:Pve",v)}}),y=new Nt(S());function S(){return Math.round(Math.random()*1e8)}function r(){return["核心",...y.shuffle(me.slice(1)).slice(0,2)]}const d=p(()=>["白板","执政官","狂热者","陆战队员","收割者","幽灵","感染虫","SCV","阿巴瑟","工蜂","王虫","蟑螂","副官","混合体"]);function g(){return y.shuffle(d.value).slice(0,u.value.length)}return(v,c)=>(T(),ie(vl,null,{default:$(()=>[!V(l).isMobile||o.value==="packseed"?(T(),W(Z,{key:0},[pe("div",Gl,[i(M,{cols:"1"}),i(M,{cols:"8"},{default:$(()=>[i(it,{modelValue:V(n),"onUpdate:modelValue":c[0]||(c[0]=m=>ue(n)?n.value=m:null),density:"compact","hide-details":""},null,8,["modelValue"])]),_:1}),i(M,{cols:"2"},{default:$(()=>[i(q,{onClick:c[1]||(c[1]=m=>n.value=S())},{default:$(()=>[R(" 随机 ")]),_:1})]),_:1})]),pe("div",El,[i(M,{cols:"1"}),i(M,{cols:"4",class:"d-flex flex-column"},{default:$(()=>[(T(!0),W(Z,null,Me(V(me).slice(0,4),m=>(T(),ie(ye,{modelValue:V(s),"onUpdate:modelValue":c[2]||(c[2]=P=>ue(s)?s.value=P:null),key:`Pack-${m}`,label:m,value:m,density:"compact","hide-details":""},null,8,["modelValue","label","value"]))),128))]),_:1}),i(M,{cols:"4",class:"d-flex flex-column"},{default:$(()=>[(T(!0),W(Z,null,Me(V(me).slice(4),m=>(T(),ie(ye,{modelValue:V(s),"onUpdate:modelValue":c[3]||(c[3]=P=>ue(s)?s.value=P:null),key:`Pack-${m}`,label:m,value:m,density:"compact","hide-details":""},null,8,["modelValue","label","value"]))),128))]),_:1}),i(M,{cols:"2"},{default:$(()=>[i(q,{onClick:c[4]||(c[4]=m=>s.value=r())},{default:$(()=>[R(" 随机 ")]),_:1})]),_:1})])],64)):Y("",!0),!V(l).isMobile||o.value==="role"?(T(),W("div",jl,[V(u).length===1?(T(),W(Z,{key:0},[i(M,{cols:"1"}),i(M,{cols:"8"},{default:$(()=>[i(Rl,{"hide-details":"",density:"compact",modelValue:V(u)[0],"onUpdate:modelValue":c[5]||(c[5]=m=>V(u)[0]=m),items:V(d)},null,8,["modelValue","items"])]),_:1}),i(M,{cols:"2"},{default:$(()=>[i(q,{onClick:c[6]||(c[6]=m=>u.value=g())},{default:$(()=>[R(" 随机 ")]),_:1})]),_:1})],64)):Y("",!0)])):Y("",!0),!V(l).isMobile||o.value==="mutation"?(T(),W("div",Hl,[i(M,{cols:"1"}),i(M,{cols:"8"},{default:$(()=>[R(" 暂时不支持选突变因子 ")]),_:1})])):Y("",!0),!V(l).isMobile||o.value==="pve"?(T(),W("div",Kl,[i(M,{cols:"1"}),i(M,{cols:"8"},{default:$(()=>[i(ye,{modelValue:V(f),"onUpdate:modelValue":c[7]||(c[7]=m=>ue(f)?f.value=m:null),density:"compact","hide-details":"",label:"启用PVE内容"},null,8,["modelValue"])]),_:1})])):Y("",!0),Wl,i(fl,null,{default:$(()=>[V(l).isMobile?(T(),W(Z,{key:0},[i(q,{onClick:c[8]||(c[8]=m=>o.value="packseed")},{default:$(()=>[R(" 种子卡包 ")]),_:1}),i(q,{onClick:c[9]||(c[9]=m=>o.value="role")},{default:$(()=>[R(" 角色 ")]),_:1}),i(q,{onClick:c[10]||(c[10]=m=>o.value="mutation")},{default:$(()=>[R(" 突变因子 ")]),_:1}),i(q,{onClick:c[11]||(c[11]=m=>o.value="pve")},{default:$(()=>[R(" PVE ")]),_:1})],64)):Y("",!0),i(q,{class:"ml-auto",color:"primary",onClick:c[12]||(c[12]=m=>v.$emit("ok"))},{default:$(()=>[R(" 启动 ")]),_:1})]),_:1})]),_:1}))}}),Ql=We({__name:"LocalGameSetup",setup(e){const a=Et(),t=Rt({Pack:["核心"],Seed:Math.round(Math.random()*1e8),Role:["白板"],Mutation:[],Pve:!1,PoolPack:Gt,ActivePack:p(()=>t.Pve?jt:Ht),ActiveUnit:p(()=>t.Pve?Kt:Wt)});function l(){a.push({name:"local-player",query:{config:JSON.stringify(t)}})}return(o,n)=>(T(),ie(ql,{class:"justify-center",Pack:V(t).Pack,"onUpdate:Pack":n[0]||(n[0]=s=>V(t).Pack=s),Seed:V(t).Seed,"onUpdate:Seed":n[1]||(n[1]=s=>V(t).Seed=s),Role:V(t).Role,"onUpdate:Role":n[2]||(n[2]=s=>V(t).Role=s),Mutation:V(t).Mutation,"onUpdate:Mutation":n[3]||(n[3]=s=>V(t).Mutation=s),Pve:V(t).Pve,"onUpdate:Pve":n[4]||(n[4]=s=>V(t).Pve=s),onOk:n[5]||(n[5]=s=>l())},null,8,["Pack","Seed","Role","Mutation","Pve"]))}});export{Ql as default};
