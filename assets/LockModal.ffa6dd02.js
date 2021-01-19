import{d as e,u as s,N as r,s as i,cp as o,g as t,i as a,o as d,j as n,w as c,k as l,m,n as p,y as f}from"./index.871a73d0.js";import{_ as u,a as j}from"./index.ebf495ed.js";import{_ as x}from"./index.c1fdb1c2.js";import{h as b}from"./header.3041aac3.js";import{u as g}from"./useForm.abc982be.js";import"./useTimeout.da8cb4b6.js";import"./useAttrs.fe97cbc4.js";import"./useWindowSizeFn.78593242.js";import"./index.763e570f.js";import"./index.3ab8cadf.js";import"./domUtils.f6df7058.js";import"./RightOutlined.726ff22e.js";import"./index.8d91dadc.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./FullscreenOutlined.e76c502b.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.a45b2b74.js";import"./index.2fc715fb.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.2fd06b65.js";var h=e({name:"LockModal",components:{BasicModal:u,BasicForm:x},setup(){const{t:e}=s(),{prefixCls:a}=r("header-lock-modal"),d=i((()=>{var e;return null==(e=t.getUserInfoState)?void 0:e.realName})),[n,{closeModal:c}]=j(),[l,{validateFields:m,resetFields:p}]=g({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:a,getRealName:d,register:n,registerForm:l,handleLock:async function(){const e=(await m()).password;c(),o.commitLockInfoState({isLock:!0,pwd:e}),await p()},headerImg:b}}});h.render=function(e,s,r,i,o,t){const u=a("BasicForm"),j=a("a-button"),x=a("BasicModal");return d(),n(x,f({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:c((()=>[l("div",{class:`${e.prefixCls}__entry`},[l("div",{class:`${e.prefixCls}__header`},[l("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),l("p",{class:`${e.prefixCls}__header-name`},m(e.getRealName),3)],2),l(u,{onRegister:e.registerForm},null,8,["onRegister"]),l("div",{class:`${e.prefixCls}__footer`},[l(j,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:c((()=>[p(m(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default h;