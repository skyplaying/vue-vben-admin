import{_ as e,a as i}from"./index.5107361b.js";import{_ as o}from"./index.7e3a34b7.js";import{d as t,r as s,h as r,o as a,i as n,w as d,j as m,aH as p}from"./index.a0c33e6e.js";import{u as c}from"./useForm.c84c148f.js";import"./useTimeout.131c739b.js";import"./useAttrs.02e0acfe.js";import"./useWindowSizeFn.760a84ec.js";import"./index.201f35c2.js";import"./index.3c33663f.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./RightOutlined.520da2d9.js";import"./index.bed999aa.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./FullscreenOutlined.7cc846ae.js";import"./isEqual.679122bc.js";import"./index.1a355b4a.js";import"./responsiveObserve.c545f1cc.js";import"./index.9f30ce73.js";import"./findIndex.b72f3a96.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.93ab6b75.js";import"./index.e8f6a548.js";import"./SearchOutlined.503f9ea6.js";import"./DownOutlined.69023226.js";import"./CheckOutlined.dc4c859a.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./UpOutlined.94383fff.js";import"./index.4e5ad320.js";import"./EyeOutlined.b06a5359.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./RightOutlined.0b237a08.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./Tree.9588fb8b.js";import"./util.57d7f00b.js";import"./index.6eab8075.js";import"./uuid.a965114a.js";import"./index.e933c892.js";import"./index.35c9450f.js";import"./index.792349ea.js";import"./index.00300e64.js";import"./LeftOutlined.662c68ae.js";import"./download.8d304dc4.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var l=t({components:{BasicModal:e,BasicForm:o},setup(){const e=s({}),[o,{}]=c({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=i((i=>{e.value={field2:i.data,field1:i.info}}));return{register:t,schemas:j,registerForm:o,model:e}}});l.render=function(e,i,o,t,s,c){const j=r("BasicForm"),l=r("BasicModal");return a(),n(l,p(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:d((()=>[m(j,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default l;