import{b as de,v as re,a6 as ce,u as fe,c as C,b8 as J,r as p,h as ve,k as me,i as t,n as j,a7 as z,aG as Q,y as pe,a9 as ge,aa as ke,af as E,ae as s,ad as o,al as T,ab as D,b9 as H,ba as X,bb as w,ah as Y,ac as Z,a8 as c,bc as G,bd as ee,be as ye,ak as Ce,ap as be,bf as Ve,bg as $e,bh as Se,bi as xe}from"./index-8bdc9f28.js";import{u as Pe,W as _e,_ as Ie,V as O,C as Ue,a as f}from"./save-454b6411.js";import{m as we,i as ze,f as Be,j as he,k as Fe,g as Re,l as De,a as Ae,h as ae}from"./VChip-c7b54587.js";import{c as Ke,d as Le}from"./VOverlay-54b686d0.js";const Ne=de({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:n=>typeof n=="boolean"||[1e3,1024].includes(n)},...we({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:n=>re(n).every(x=>x!=null&&typeof x=="object")},...ze({clearable:!0})},emits:{"click:control":n=>!0,"update:modelValue":n=>!0},setup(n,x){let{attrs:A,emit:M,slots:d}=x;const{t:r}=ce(),u=fe(n,"modelValue"),b=C(()=>typeof n.showSize!="boolean"?n.showSize:void 0),V=C(()=>(u.value??[]).reduce((e,l)=>{let{size:i=0}=l;return e+i},0)),k=C(()=>J(V.value,b.value)),B=C(()=>(u.value??[]).map(e=>{const{name:l="",size:i=0}=e;return n.showSize?`${l} (${J(i,b.value)})`:l})),h=C(()=>{var e;const l=((e=u.value)==null?void 0:e.length)??0;return n.showSize?r(n.counterSizeString,l,k.value):r(n.counterString,l)}),P=p(),_=p(),g=p(!1),v=p(),F=C(()=>n.messages.length?n.messages:n.persistentHint?n.hint:"");function $(){if(v.value!==document.activeElement){var e;(e=v.value)==null||e.focus()}g.value||(g.value=!0)}function I(e){Q(n["onClick:prepend"],e),K(e)}function K(e){var l;(l=v.value)==null||l.click(),M("click:control",e)}function a(e){e.stopPropagation(),$(),pe(()=>{u.value=[],v!=null&&v.value&&(v.value.value=""),Q(n["onClick:clear"],e)})}return ve(()=>{const e=!!(d.counter||n.counter),l=!!(e||d.details),[i,y]=me(A),[{modelValue:U,...m}]=Be(n),[le]=he(n);return t(Ae,j({ref:P,modelValue:u.value,"onUpdate:modelValue":R=>u.value=R,class:"v-file-input","onClick:prepend":I,"onClick:append":n["onClick:append"]},i,m,{focused:g.value,messages:F.value}),{...d,default:R=>{let{id:L,isDisabled:N,isDirty:W,isReadonly:te,isValid:ne}=R;return t(Fe,j({ref:_,"prepend-icon":n.prependIcon,"onClick:control":K,"onClick:clear":a,"onClick:prependInner":n["onClick:prependInner"],"onClick:appendInner":n["onClick:appendInner"]},le,{id:L.value,active:W.value||g.value,dirty:W.value,focused:g.value,error:ne.value===!1}),{...d,default:se=>{var q;let{props:{class:oe,...ue}}=se;return t(z,null,[t("input",j({ref:v,type:"file",readonly:te.value,disabled:N.value,multiple:n.multiple,name:n.name,onClick:S=>{S.stopPropagation(),$()},onChange:S=>{if(!S.target)return;const ie=S.target;u.value=[...ie.files??[]]},onFocus:$,onBlur:()=>g.value=!1},ue,y),null),t("div",{class:oe},[!!((q=u.value)!=null&&q.length)&&(d.selection?d.selection({fileNames:B.value,totalBytes:V.value,totalBytesReadable:k.value}):n.chips?B.value.map(S=>t(Re,{key:S,size:"small",color:n.color},{default:()=>[S]})):B.value.join(", "))])])}})},details:l?R=>{var L,N;return t(z,null,[(L=d.details)==null?void 0:L.call(d,R),e&&t(z,null,[t("span",null,null),t(De,{active:!!((N=u.value)!=null&&N.length),value:h.value},d.counter)])])}:void 0})}),Ke({},P,_,v)}}),Te={class:"d-flex flex-column"},Ge={class:"d-flex flex-column"},Me=w("span",{class:"Label mx-auto"},"菜单",-1),je={class:"d-flex"},Ee={class:"d-flex flex-column"},He={class:"d-flex flex-column"},Qe=ge({__name:"LocalGame",props:{config:null},setup(n){const x=n,A=ke(),M=be(),d=Pe();d.LoadStorage();const r=new _e,u=new Ue(0,r);r.init(x.config),r.game.start();const b=p({canUndo:!1,canRedo:!1}),V=p(r.game.getState()),k=C(()=>V.value.player[0]);r.server.notify.push(a=>{V.value=a}),r.saveStateChanged=()=>{b.value=r.getState()};function B(){M.back()}document.onkeydown=a=>{var e,l;if(!(a.shiftKey||a.altKey)){if(a.ctrlKey){switch(a.key){case"z":b.value.canUndo&&r.undo();break;case"y":b.value.canRedo&&r.redo();break}return}switch(a.key){case"w":u.autoPost({msg:"$upgrade"});break;case"z":u.autoPost({msg:"$finish"});break;case"c":u.autoPost({msg:(e=u.getPlayer())!=null&&e.locked?"$unlock":"$lock"});break;case"r":u.autoPost({msg:"$refresh"});break;default:{const i=V.value.player[u.pos];if(!i||i.selected.area==="none")break;for(const y of((l=i[i.selected.area][i.selected.place])==null?void 0:l.actions)||[])if(a.key===y.acckey){u.post(y.msg);break}}}}};const h=p(!1),P=p(""),_=C(()=>V.value.config.ActivePack.map(a=>Ve[a]).reduce((a,e)=>a.concat(e),[]).map(a=>$e[a]).map((a,e)=>({card:a,find:a.pinyin.indexOf(P.value),index:e})).filter(({find:a})=>a!==-1).sort((a,e)=>a.find!==e.find?a.find-e.find:a.index-e.index).map(({card:a})=>a).slice(0,10)),g=p(!1),v=p(""),F=C(()=>Se.map(a=>xe[a]).map((a,e)=>({unit:a,find:a.pinyin.indexOf(v.value),index:e})).filter(({find:a})=>a!==-1).sort((a,e)=>a.find!==e.find?a.find-e.find:a.index-e.index).map(({unit:a})=>a).slice(0,10)),$=p(!1),I=p([]);function K(){d.Upload(I.value[0]),$.value=!1}return(a,e)=>(D(),E(z,null,[t(Ie,{state:V.value,client:s(u)},null,8,["state","client"]),t(O,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=l=>h.value=l)},{default:o(()=>[t(T,null,{default:o(()=>[t(H,null,{default:o(()=>[t(ae,{"hide-details":"",density:s(A).isMobile?"compact":"default",modelValue:P.value,"onUpdate:modelValue":e[0]||(e[0]=l=>P.value=l),onKeyup:e[1]||(e[1]=X(l=>s(_).length>0&&s(u).autoPost({msg:"$cheat",type:"card",cardt:s(_)[0].name}),["enter"]))},null,8,["density","modelValue"]),w("div",Te,[(D(!0),E(z,null,Y(s(_),(l,i)=>(D(),Z(f,{variant:"flat",class:ee({enterSelect:i===0}),key:`GCChoice-${i}`,onClick:y=>s(u).autoPost({msg:"$cheat",type:"card",cardt:l.name})},{default:o(()=>[c(G(l.pinyin)+" "+G(l.name),1)]),_:2},1032,["class","onClick"]))),128))])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(O,{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=l=>g.value=l)},{default:o(()=>[t(T,null,{default:o(()=>[t(H,null,{default:o(()=>[t(ae,{"hide-details":"",density:s(A).isMobile?"compact":"default",modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=l=>v.value=l),onKeyup:e[4]||(e[4]=X(l=>{var i;return s(F).length>0&&s(u).autoPost({msg:"$cheat",type:"unit",units:[s(F)[0].name],place:((i=s(k))==null?void 0:i.selected.place)||0})},["enter"]))},null,8,["density","modelValue"]),w("div",Ge,[(D(!0),E(z,null,Y(s(F),(l,i)=>(D(),Z(f,{variant:"flat",class:ee({enterSelect:i===0}),key:`GUChoice-${i}`,onClick:y=>{var U;return s(u).autoPost({msg:"$cheat",type:"unit",units:[l.name],place:((U=s(k))==null?void 0:U.selected.place)||0})}},{default:o(()=>[c(G(l.pinyin)+" "+G(l.name),1)]),_:2},1032,["class","onClick"]))),128))])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(O,{modelValue:$.value,"onUpdate:modelValue":e[8]||(e[8]=l=>$.value=l)},{default:o(()=>[t(T,null,{default:o(()=>[t(ye,null,{default:o(()=>[c(" 导入 ")]),_:1}),t(H,null,{default:o(()=>[t(Ne,{modelValue:I.value,"onUpdate:modelValue":e[6]||(e[6]=l=>I.value=l),accept:".SCTReplay"},null,8,["modelValue"])]),_:1}),t(Ce,null,{default:o(()=>[t(Le,{color:"primary",disabled:I.value.length!==1,onClick:e[7]||(e[7]=l=>K())},{default:o(()=>[c(" 确定 ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(T,{class:"Debug d-flex flex-column"},{default:o(()=>{var l,i,y,U;return[Me,w("div",je,[w("div",Ee,[t(f,{variant:"elevated",onClick:e[9]||(e[9]=m=>B())},{default:o(()=>[c(" 返回 ")]),_:1}),t(f,{variant:"elevated",onClick:e[10]||(e[10]=m=>h.value=!0),disabled:((l=s(k))==null?void 0:l.status)!=="normal"},{default:o(()=>[c(" 卡牌 ")]),_:1},8,["disabled"]),t(f,{variant:"elevated",disabled:((i=s(k))==null?void 0:i.selected.area)!=="present"||((y=s(k))==null?void 0:y.status)!=="normal",onClick:e[11]||(e[11]=m=>g.value=!0)},{default:o(()=>[c(" 单位 ")]),_:1},8,["disabled"]),t(f,{variant:"elevated",disabled:((U=s(k))==null?void 0:U.status)!=="normal",onClick:e[12]||(e[12]=m=>s(u).autoPost({msg:"$cheat",type:"resource"}))},{default:o(()=>[c(" 资源 ")]),_:1},8,["disabled"])]),w("div",He,[t(f,{variant:"elevated",disabled:!b.value.canUndo,onClick:e[13]||(e[13]=m=>s(r).undo())},{default:o(()=>[c(" 撤销 ")]),_:1},8,["disabled"]),t(f,{variant:"elevated",disabled:!b.value.canRedo,onClick:e[14]||(e[14]=m=>s(r).redo())},{default:o(()=>[c(" 重做 ")]),_:1},8,["disabled"]),t(f,{variant:"elevated",onClick:e[15]||(e[15]=m=>s(d).SaveStorage(s(r).save))},{default:o(()=>[c(" 保存 ")]),_:1}),t(f,{variant:"elevated",disabled:!s(d).save,onClick:e[16]||(e[16]=m=>s(d).save?s(r).load(s(d).save):void 0)},{default:o(()=>[c(" 读取 ")]),_:1},8,["disabled"]),t(f,{variant:"elevated",disabled:!s(d).save,onClick:e[17]||(e[17]=m=>s(d).CleanStorage())},{default:o(()=>[c(" 清除 ")]),_:1},8,["disabled"]),t(f,{variant:"elevated",disabled:!s(d).save,onClick:e[18]||(e[18]=m=>s(d).Download())},{default:o(()=>[c(" 导出 ")]),_:1},8,["disabled"]),t(f,{variant:"elevated",onClick:e[19]||(e[19]=m=>$.value=!0)},{default:o(()=>[c(" 导入 ")]),_:1})])])]}),_:1})],64))}});export{Qe as default};