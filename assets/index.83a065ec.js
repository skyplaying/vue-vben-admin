import{d as a,cr as s,cs as t,h as i,o as e,i as r,j as o,aR as l,aS as n,bz as d}from"./index.a0c33e6e.js";import"./index.1a355b4a.js";import m from"./GrowCard.56416596.js";import p from"./TrendLine.77a56e4e.js";import f from"./AnalysisLine.c05c3a9f.js";import c from"./AnalysisPie.9fe42714.js";import j from"./AnalysisBar.81eba2cf.js";import u from"./TaskCard.cb6ab1c6.js";import b from"./FlowAnalysis.ead3a42d.js";import{a as y}from"./index.201f35c2.js";import{R as _,C as x}from"./index.93ab6b75.js";import{growCardList as C,taskList as A}from"./data.c1894424.js";import"./responsiveObserve.c545f1cc.js";import"./_stringToArray.37fb13d5.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.9eda793d.js";import"./useECharts.21684d2b.js";import"./useTimeout.131c739b.js";import"./props.f48aca0b.js";import"./index.aea690b6.js";import"./index.e933c892.js";import"./CheckOutlined.dc4c859a.js";import"./types.bc7cc0a6.js";import"./index.35c9450f.js";import"./index.a3ecbb5c.js";import"./UpOutlined.94383fff.js";import"./DownOutlined.69023226.js";import"./LeftOutlined.662c68ae.js";import"./RightOutlined.0b237a08.js";import"./index.3c33663f.js";import"./domUtils.8a0aa844.js";import"./RightOutlined.520da2d9.js";import"./index.bed999aa.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";var g=a({components:{GrowCard:m,CollapseContainer:y,TrendLine:p,AnalysisLine:f,AnalysisPie:c,AnalysisBar:j,TaskCard:u,FlowAnalysis:b,[_.name]:_,[x.name]:x},setup:()=>({growCardList:C,taskList:A})});const w=d("data-v-24ff8a0a");s("data-v-24ff8a0a");const L={class:"analysis p-4"};t();const k=w(((a,s,t,d,m,p)=>{const f=i("GrowCard"),c=i("ACol"),j=i("a-row"),u=i("AnalysisLine"),b=i("CollapseContainer"),y=i("AnalysisPie"),_=i("a-col"),x=i("AnalysisBar"),C=i("TaskCard"),A=i("FlowAnalysis");return e(),r("div",L,[o(j,{class:"pl-2"},{default:w((()=>[(e(!0),r(l,null,n(a.growCardList,(a=>(e(),r(c,{key:a.title,sm:24,md:12,lg:6},{default:w((()=>[o(f,{info:a},null,8,["info"])])),_:2},1024)))),128))])),_:1}),o(j,null,{default:w((()=>[o(_,{md:24,lg:17,class:"my-3"},{default:w((()=>[o(b,{class:"mr-3",title:"产品成交额",canExpan:!1},{default:w((()=>[o(u)])),_:1}),o(j,{class:"mt-3"},{default:w((()=>[o(_,{md:24,lg:12,class:"product-total"},{default:w((()=>[o(b,{class:"mr-3",title:"产品成交额",canExpan:!1},{default:w((()=>[o(y)])),_:1})])),_:1}),o(_,{md:24,lg:12},{default:w((()=>[o(b,{class:"mr-3",title:"用户来源",canExpan:!1},{default:w((()=>[o(x)])),_:1})])),_:1})])),_:1})])),_:1}),o(_,{md:24,lg:7},{default:w((()=>[o(b,{class:"mt-3",title:"项目进度",canExpan:!1},{default:w((()=>[(e(!0),r(l,null,n(a.taskList,(a=>(e(),r(C,{key:a.title,info:a},null,8,["info"])))),128))])),_:1})])),_:1})])),_:1}),o(j,null,{default:w((()=>[o(A)])),_:1})])}));g.render=k,g.__scopeId="data-v-24ff8a0a";export default g;