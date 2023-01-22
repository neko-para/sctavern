import{b as re,v as de,a6 as fe,u as ce,c as y,b8 as J,r as p,h as ve,k as me,i as t,n as j,a7 as F,aG as Q,y as pe,a9 as ge,aa as ke,af as E,ad as s,ae as n,ab as A,b9 as G,a8 as f,ba as _,al as M,bb as H,bc as X,ah as Y,ac as Z,bd as ee,be as Ce,ak as ye,ap as be,bf as Ve,bg as $e,bh as Se,bi as Pe}from"./index-4cfa9691.js";import{u as xe,W as we,_ as Ie,V as O,C as Ue,a as c}from"./save-54e3d9dc.js";import{m as Be,i as Fe,f as ze,j as Re,k as De,g as he,l as Ae,a as _e,h as ae}from"./VChip-afee66e7.js";import{c as Ke,d as Ne}from"./VOverlay-a5e45837.js";const Te=re({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:o=>typeof o=="boolean"||[1e3,1024].includes(o)},...Be({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:o=>de(o).every(P=>P!=null&&typeof P=="object")},...Fe({clearable:!0})},emits:{"click:control":o=>!0,"update:modelValue":o=>!0},setup(o,P){let{attrs:x,emit:L,slots:r}=P;const{t:d}=fe(),u=ce(o,"modelValue"),b=y(()=>typeof o.showSize!="boolean"?o.showSize:void 0),V=y(()=>(u.value??[]).reduce((e,l)=>{let{size:i=0}=l;return e+i},0)),k=y(()=>J(V.value,b.value)),z=y(()=>(u.value??[]).map(e=>{const{name:l="",size:i=0}=e;return o.showSize?`${l} (${J(i,b.value)})`:l})),R=y(()=>{var e;const l=((e=u.value)==null?void 0:e.length)??0;return o.showSize?d(o.counterSizeString,l,k.value):d(o.counterString,l)}),w=p(),I=p(),g=p(!1),m=p(),D=y(()=>o.messages.length?o.messages:o.persistentHint?o.hint:"");function $(){if(m.value!==document.activeElement){var e;(e=m.value)==null||e.focus()}g.value||(g.value=!0)}function U(e){Q(o["onClick:prepend"],e),K(e)}function K(e){var l;(l=m.value)==null||l.click(),L("click:control",e)}function a(e){e.stopPropagation(),$(),pe(()=>{u.value=[],m!=null&&m.value&&(m.value.value=""),Q(o["onClick:clear"],e)})}return ve(()=>{const e=!!(r.counter||o.counter),l=!!(e||r.details),[i,C]=me(x),[{modelValue:B,...v}]=ze(o),[le]=Re(o);return t(_e,j({ref:w,modelValue:u.value,"onUpdate:modelValue":h=>u.value=h,class:"v-file-input","onClick:prepend":U,"onClick:append":o["onClick:append"]},i,v,{focused:g.value,messages:D.value}),{...r,default:h=>{let{id:N,isDisabled:T,isDirty:W,isReadonly:te,isValid:ne}=h;return t(De,j({ref:I,"prepend-icon":o.prependIcon,"onClick:control":K,"onClick:clear":a,"onClick:prependInner":o["onClick:prependInner"],"onClick:appendInner":o["onClick:appendInner"]},le,{id:N.value,active:W.value||g.value,dirty:W.value,focused:g.value,error:ne.value===!1}),{...r,default:oe=>{var q;let{props:{class:se,...ue}}=oe;return t(F,null,[t("input",j({ref:m,type:"file",readonly:te.value,disabled:T.value,multiple:o.multiple,name:o.name,onClick:S=>{S.stopPropagation(),$()},onChange:S=>{if(!S.target)return;const ie=S.target;u.value=[...ie.files??[]]},onFocus:$,onBlur:()=>g.value=!1},ue,C),null),t("div",{class:se},[!!((q=u.value)!=null&&q.length)&&(r.selection?r.selection({fileNames:z.value,totalBytes:V.value,totalBytesReadable:k.value}):o.chips?z.value.map(S=>t(he,{key:S,size:"small",color:o.color},{default:()=>[S]})):z.value.join(", "))])])}})},details:l?h=>{var N,T;return t(F,null,[(N=r.details)==null?void 0:N.call(r,h),e&&t(F,null,[t("span",null,null),t(Ae,{active:!!((T=u.value)!=null&&T.length),value:R.value},r.counter)])])}:void 0})}),Ke({},w,I,m)}}),Ge={class:"d-flex flex-column"},Le={class:"d-flex flex-column"},je={class:"d-flex flex-column"},Ee={class:"d-flex flex-column"},qe=ge({__name:"LocalGame",props:{config:null},setup(o){const P=o,x=ke(),L=be(),r=xe();r.LoadStorage();const d=new we,u=new Ue(0,d);d.init(P.config),d.game.start();const b=p({canUndo:!1,canRedo:!1}),V=p(d.game.getState()),k=y(()=>V.value.player[0]);d.server.notify.push(a=>{V.value=a}),d.saveStateChanged=()=>{b.value=d.getState()};function z(){L.back()}document.onkeydown=a=>{var e,l;if(!(a.shiftKey||a.altKey)){if(a.ctrlKey){switch(a.key){case"z":b.value.canUndo&&d.undo();break;case"y":b.value.canRedo&&d.redo();break}return}switch(a.key){case"w":u.autoPost({msg:"$upgrade"});break;case"z":u.autoPost({msg:"$finish"});break;case"c":u.autoPost({msg:(e=u.getPlayer())!=null&&e.locked?"$unlock":"$lock"});break;case"r":u.autoPost({msg:"$refresh"});break;default:{const i=V.value.player[u.pos];if(!i||i.selected.area==="none")break;for(const C of((l=i[i.selected.area][i.selected.place])==null?void 0:l.actions)||[])if(a.key===C.acckey){u.post(C.msg);break}}}}};const R=p(!1),w=p(""),I=y(()=>V.value.config.ActivePack.map(a=>Ve[a]).reduce((a,e)=>a.concat(e),[]).map(a=>$e[a]).map((a,e)=>({card:a,find:a.pinyin.indexOf(w.value),index:e})).filter(({find:a})=>a!==-1).sort((a,e)=>a.find!==e.find?a.find-e.find:a.index-e.index).map(({card:a})=>a).slice(0,10)),g=p(!1),m=p(""),D=y(()=>Se.map(a=>Pe[a]).map((a,e)=>({unit:a,find:a.pinyin.indexOf(m.value),index:e})).filter(({find:a})=>a!==-1).sort((a,e)=>a.find!==e.find?a.find-e.find:a.index-e.index).map(({unit:a})=>a).slice(0,10)),$=p(!1),U=p([]);function K(){r.Upload(U.value[0]),$.value=!1}return(a,e)=>(A(),E(F,null,[t(Ie,{state:V.value,client:n(u)},{default:s(()=>{var l,i,C,B;return[G("div",Ge,[t(c,{variant:"flat",onClick:e[0]||(e[0]=v=>z())},{default:s(()=>[f(" 返回 ")]),_:1}),t(c,{variant:"flat",onClick:e[1]||(e[1]=v=>R.value=!0),disabled:((l=n(k))==null?void 0:l.status)!=="normal"},{default:s(()=>[f(" 卡牌 ")]),_:1},8,["disabled"]),t(c,{variant:"flat",disabled:((i=n(k))==null?void 0:i.selected.area)!=="present"||((C=n(k))==null?void 0:C.status)!=="normal",onClick:e[2]||(e[2]=v=>g.value=!0)},{default:s(()=>[f(" 单位 ")]),_:1},8,["disabled"]),t(c,{variant:"flat",disabled:((B=n(k))==null?void 0:B.status)!=="normal",onClick:e[3]||(e[3]=v=>n(u).autoPost({msg:"$cheat",type:"resource"}))},{default:s(()=>[f(" 资源 ")]),_:1},8,["disabled"]),t(c,{variant:"flat",class:"mt-auto",onClick:e[4]||(e[4]=v=>n(x).toggleFullScreen())},{default:s(()=>[f(_(n(x).isFullScreen?"窗口":"全屏"),1)]),_:1})]),G("div",Le,[t(c,{variant:"flat",disabled:!b.value.canUndo,onClick:e[5]||(e[5]=v=>n(d).undo())},{default:s(()=>[f(" 撤销 ")]),_:1},8,["disabled"]),t(c,{variant:"flat",disabled:!b.value.canRedo,onClick:e[6]||(e[6]=v=>n(d).redo())},{default:s(()=>[f(" 重做 ")]),_:1},8,["disabled"]),t(c,{variant:"flat",onClick:e[7]||(e[7]=v=>n(r).SaveStorage(n(d).save))},{default:s(()=>[f(" 保存 ")]),_:1}),t(c,{variant:"flat",disabled:!n(r).save,onClick:e[8]||(e[8]=v=>n(r).save?n(d).load(n(r).save):void 0)},{default:s(()=>[f(" 读取 ")]),_:1},8,["disabled"]),t(c,{variant:"flat",disabled:!n(r).save,onClick:e[9]||(e[9]=v=>n(r).CleanStorage())},{default:s(()=>[f(" 清除 ")]),_:1},8,["disabled"]),t(c,{variant:"flat",disabled:!n(r).save,onClick:e[10]||(e[10]=v=>n(r).Download())},{default:s(()=>[f(" 导出 ")]),_:1},8,["disabled"]),t(c,{variant:"flat",onClick:e[11]||(e[11]=v=>$.value=!0)},{default:s(()=>[f(" 导入 ")]),_:1})])]}),_:1},8,["state","client"]),t(O,{modelValue:R.value,"onUpdate:modelValue":e[14]||(e[14]=l=>R.value=l)},{default:s(()=>[t(M,null,{default:s(()=>[t(H,null,{default:s(()=>[t(ae,{"hide-details":"",density:n(x).isMobile?"compact":"default",modelValue:w.value,"onUpdate:modelValue":e[12]||(e[12]=l=>w.value=l),onKeyup:e[13]||(e[13]=X(l=>n(I).length>0&&n(u).autoPost({msg:"$cheat",type:"card",cardt:n(I)[0].name}),["enter"]))},null,8,["density","modelValue"]),G("div",je,[(A(!0),E(F,null,Y(n(I),(l,i)=>(A(),Z(c,{variant:"flat",class:ee({enterSelect:i===0}),key:`GCChoice-${i}`,onClick:C=>n(u).autoPost({msg:"$cheat",type:"card",cardt:l.name})},{default:s(()=>[f(_(l.pinyin)+" "+_(l.name),1)]),_:2},1032,["class","onClick"]))),128))])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(O,{modelValue:g.value,"onUpdate:modelValue":e[17]||(e[17]=l=>g.value=l)},{default:s(()=>[t(M,null,{default:s(()=>[t(H,null,{default:s(()=>[t(ae,{"hide-details":"",density:n(x).isMobile?"compact":"default",modelValue:m.value,"onUpdate:modelValue":e[15]||(e[15]=l=>m.value=l),onKeyup:e[16]||(e[16]=X(l=>{var i;return n(D).length>0&&n(u).autoPost({msg:"$cheat",type:"unit",units:[n(D)[0].name],place:((i=n(k))==null?void 0:i.selected.place)||0})},["enter"]))},null,8,["density","modelValue"]),G("div",Ee,[(A(!0),E(F,null,Y(n(D),(l,i)=>(A(),Z(c,{variant:"flat",class:ee({enterSelect:i===0}),key:`GUChoice-${i}`,onClick:C=>{var B;return n(u).autoPost({msg:"$cheat",type:"unit",units:[l.name],place:((B=n(k))==null?void 0:B.selected.place)||0})}},{default:s(()=>[f(_(l.pinyin)+" "+_(l.name),1)]),_:2},1032,["class","onClick"]))),128))])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(O,{modelValue:$.value,"onUpdate:modelValue":e[20]||(e[20]=l=>$.value=l)},{default:s(()=>[t(M,null,{default:s(()=>[t(Ce,null,{default:s(()=>[f(" 导入 ")]),_:1}),t(H,null,{default:s(()=>[t(Te,{modelValue:U.value,"onUpdate:modelValue":e[18]||(e[18]=l=>U.value=l),accept:".SCTReplay"},null,8,["modelValue"])]),_:1}),t(ye,null,{default:s(()=>[t(Ne,{color:"primary",disabled:U.value.length!==1,onClick:e[19]||(e[19]=l=>K())},{default:s(()=>[f(" 确定 ")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});export{qe as default};
