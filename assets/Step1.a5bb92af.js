import{d as e,cr as t,cs as i,h as s,o as a,i as o,j as r,bz as n,m as p}from"./index.a0c33e6e.js";import{D as m}from"./index.35c9450f.js";import{I as d}from"./index.4e5ad320.js";import{a as c}from"./index.e8f6a548.js";import{_ as l}from"./index.7e3a34b7.js";import{step1Schemas as u}from"./data.2505cb7f.js";import{u as j}from"./useForm.c84c148f.js";import"./SearchOutlined.503f9ea6.js";import"./EyeOutlined.b06a5359.js";import"./DownOutlined.69023226.js";import"./CheckOutlined.dc4c859a.js";import"./index.1a355b4a.js";import"./responsiveObserve.c545f1cc.js";import"./index.9f30ce73.js";import"./findIndex.b72f3a96.js";import"./isEqual.679122bc.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.93ab6b75.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./UpOutlined.94383fff.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./RightOutlined.0b237a08.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./Tree.9588fb8b.js";import"./util.57d7f00b.js";import"./useAttrs.02e0acfe.js";import"./index.bed999aa.js";import"./index.6eab8075.js";import"./uuid.a965114a.js";import"./index.e933c892.js";import"./index.5107361b.js";import"./useTimeout.131c739b.js";import"./useWindowSizeFn.760a84ec.js";import"./index.201f35c2.js";import"./index.3c33663f.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./RightOutlined.520da2d9.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./FullscreenOutlined.7cc846ae.js";import"./index.792349ea.js";import"./index.00300e64.js";import"./LeftOutlined.662c68ae.js";import"./download.8d304dc4.js";var f=e({components:{BasicForm:l,[c.name]:c,ASelectOption:c.Option,[d.name]:d,[d.Group.name]:d.Group,[m.name]:m},emits:["next"],setup(e,{emit:t}){const[i,{validate:s}]=j({labelWidth:100,schemas:u,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:i}}});const b=n("data-v-c22ef27a");t("data-v-c22ef27a");const x={class:"step1"},v={class:"step1-form"},O=p(" 支付宝 "),h=p(" 银联 "),y=r("h3",null,"说明",-1),_=r("h4",null,"转账到支付宝账户",-1),g=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),F=r("h4",null,"转账到银行卡",-1),U=r("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);i();const w=b(((e,t,i,n,p,m)=>{const d=s("a-select-option"),c=s("a-select"),l=s("a-input"),u=s("a-input-group"),j=s("BasicForm"),f=s("a-divider");return a(),o("div",x,[r("div",v,[r(j,{onRegister:e.register},{fac:b((({model:e,field:t})=>[r(u,{compact:""},{default:b((()=>[r(c,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:b((()=>[r(d,{value:"zfb"},{default:b((()=>[O])),_:1}),r(d,{value:"yl"},{default:b((()=>[h])),_:1})])),_:2},1032,["value","onUpdate:value"]),r(l,{class:"pay-input",value:e[t],"onUpdate:value":i=>e[t]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),r(f),y,_,g,F,U])}));f.render=w,f.__scopeId="data-v-c22ef27a";export default f;