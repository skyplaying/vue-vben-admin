import{aO as e,aP as t,d as a,cr as s,cs as i,h as r,o,i as l,j as d,l as m,bz as c,m as n}from"./index.a0c33e6e.js";import{D as p}from"./index.35c9450f.js";import{_ as u}from"./index.68673cbc.js";import"./index.24bc2e8e.js";import"./index.46e4dce7.js";import"./RightOutlined.0b237a08.js";import"./types.bc7cc0a6.js";import"./isEqual.679122bc.js";import"./toInteger.8b9af448.js";import"./DownOutlined.69023226.js";import"./index.bed999aa.js";import"./index.aea690b6.js";import"./usePageContext.a7cfbe9e.js";import"./transButton.38e67fb4.js";const _=e((()=>t((()=>import("./index.15af4139.js")),["/assets/index.15af4139.js","/assets/index.5ddcb78c.css","/assets/index.a0c33e6e.js","/assets/index.94daecd6.css"]))),j=(()=>{const e=[];for(let t=1;t<2e4;t++)e.push({title:"列表项"+t});return e})();var f=a({components:{VScroll:_,Divider:p,PageWrapper:u},setup:()=>({data:j})});const v=c("data-v-ee54a078");s("data-v-ee54a078");const b=n("基础滚动示例"),h={class:"virtual-scroll-demo-wrap"},x={class:"virtual-scroll-demo__item"},g=n("即使不可见，也预先加载50条数据，防止空白"),w={class:"virtual-scroll-demo-wrap"},D={class:"virtual-scroll-demo__item"};i();const P=v(((e,t,a,s,i,c)=>{const n=r("Divider"),p=r("VScroll"),u=r("PageWrapper");return o(),l(u,{class:"virtual-scroll-demo"},{default:v((()=>[d(n,null,{default:v((()=>[b])),_:1}),d("div",h,[d(p,{itemHeight:41,items:e.data,height:300,width:300},{default:v((({item:e})=>[d("div",x,m(e.title),1)])),_:1},8,["items"])]),d(n,null,{default:v((()=>[g])),_:1}),d("div",w,[d(p,{itemHeight:41,items:e.data,height:300,width:300,bench:50},{default:v((({item:e})=>[d("div",D,m(e.title),1)])),_:1},8,["items"])])])),_:1})}));f.render=P,f.__scopeId="data-v-ee54a078";export default f;