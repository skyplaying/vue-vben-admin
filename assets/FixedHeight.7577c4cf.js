import{_ as e,F as i}from"./index.11f321e7.js";import{getCustomHeaderColumns as s}from"./tableData.7aa0192c.js";import{d as t}from"./table.cceb959c.js";import{B as o}from"./index.201f35c2.js";import{d as r,h as m,o as a,i as p,j as d,w as n,m as c}from"./index.a0c33e6e.js";import{u as j}from"./useTable.c5b1b2e5.js";import"./index.e8f6a548.js";import"./SearchOutlined.503f9ea6.js";import"./DownOutlined.69023226.js";import"./CheckOutlined.dc4c859a.js";import"./index.7e3a34b7.js";import"./index.1a355b4a.js";import"./responsiveObserve.c545f1cc.js";import"./index.9f30ce73.js";import"./findIndex.b72f3a96.js";import"./isEqual.679122bc.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.93ab6b75.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./UpOutlined.94383fff.js";import"./index.4e5ad320.js";import"./EyeOutlined.b06a5359.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./RightOutlined.0b237a08.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./Tree.9588fb8b.js";import"./util.57d7f00b.js";import"./useAttrs.02e0acfe.js";import"./index.bed999aa.js";import"./index.6eab8075.js";import"./uuid.a965114a.js";import"./index.e933c892.js";import"./index.5107361b.js";import"./useTimeout.131c739b.js";import"./useWindowSizeFn.760a84ec.js";import"./FullscreenOutlined.7cc846ae.js";import"./index.35c9450f.js";import"./index.792349ea.js";import"./index.00300e64.js";import"./LeftOutlined.662c68ae.js";import"./download.8d304dc4.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./index.45038be4.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.41351325.js";import"./scrollTo.c9242ea7.js";import"./transButton.38e67fb4.js";import"./RightOutlined.520da2d9.js";import"./clickOutside.5baabbc1.js";import"./useSortable.d3f9a0f7.js";import"./CheckOutlined.cb3bea7f.js";import"./SettingOutlined.621dbb5c.js";import"./useExpose.09f50fef.js";import"./useForm.c84c148f.js";import"./index.3c33663f.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";var l=r({components:{BasicTable:e,FormOutlined:i,BasicHelp:o},setup(){const[e]=j({title:"定高/头部自定义",api:t,columns:s(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const b={class:"p-4"},f=c(" 姓名 "),u=c(" 地址 ");l.render=function(e,i,s,t,o,r){const c=m("BasicHelp"),j=m("FormOutlined"),l=m("BasicTable");return a(),p("div",b,[d(l,{onRegister:e.registerTable},{customTitle:n((()=>[d("span",null,[f,d(c,{class:"ml-2",text:"姓名"})])])),customAddress:n((()=>[u,d(j,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default l;