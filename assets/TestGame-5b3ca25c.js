import{u as _,W as p,_ as b,a as o,C as g}from"./save-42fe1b6b.js";import{a9 as C,bn as S,r as f,ab as x,i as n,af as a,ac as l,ad as k,a7 as $,ae as w,ag as c,a8 as d}from"./index-b2246e2d.js";import"./VOverlay-8548d152.js";const V=c("span",{class:"Label mx-auto"},"调试",-1),y={class:"d-flex flex-column"},T=C({__name:"TestGame",setup(B){S();const s=_();s.LoadStorage();const e=new p,m=new g(0,e);e.init({Pack:["核心"],Seed:Math.floor(Math.random()*1e6),Role:["白板"],Mutation:[]}),e.game.start();const r=f({canUndo:!1,canRedo:!1}),v=f(e.game.getState());return e.server.notify.push(u=>{v.value=u}),e.saveStateChanged=()=>{r.value=e.getState()},(u,t)=>(w(),x($,null,[n(b,{state:v.value,client:a(m)},null,8,["state","client"]),n(k,{class:"Debug d-flex flex-column"},{default:l(()=>[V,c("div",y,[n(o,{variant:"elevated",disabled:!r.value.canUndo,onClick:t[0]||(t[0]=i=>a(e).undo())},{default:l(()=>[d(" 撤销 ")]),_:1},8,["disabled"]),n(o,{variant:"elevated",disabled:!r.value.canRedo,onClick:t[1]||(t[1]=i=>a(e).redo())},{default:l(()=>[d(" 重做 ")]),_:1},8,["disabled"]),n(o,{variant:"elevated",onClick:t[2]||(t[2]=i=>a(s).SaveStorage(a(e).save))},{default:l(()=>[d(" 保存 ")]),_:1}),n(o,{variant:"elevated",disabled:!a(s).save,onClick:t[3]||(t[3]=i=>a(s).save?a(e).load(a(s).save):void 0)},{default:l(()=>[d(" 读取 ")]),_:1},8,["disabled"]),n(o,{variant:"elevated",disabled:!a(s).save,onClick:t[4]||(t[4]=i=>a(s).CleanStorage())},{default:l(()=>[d(" 清除 ")]),_:1},8,["disabled"])])]),_:1})],64))}});export{T as default};