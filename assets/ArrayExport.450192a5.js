import{_ as e}from"./index.11f321e7.js";import"./index.b19684c7.js";import{c as i,d as t,a as o,b as s,e as r}from"./data.7587eeaf.js";import{_ as a}from"./index.68673cbc.js";import{d as m,h as p,o as d,i as n,w as c,j,m as b}from"./index.a0c33e6e.js";import"./index.e8f6a548.js";import"./SearchOutlined.503f9ea6.js";import"./DownOutlined.69023226.js";import"./CheckOutlined.dc4c859a.js";import"./index.7e3a34b7.js";import"./index.1a355b4a.js";import"./responsiveObserve.c545f1cc.js";import"./index.9f30ce73.js";import"./findIndex.b72f3a96.js";import"./isEqual.679122bc.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.93ab6b75.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./UpOutlined.94383fff.js";import"./index.4e5ad320.js";import"./EyeOutlined.b06a5359.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./RightOutlined.0b237a08.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./Tree.9588fb8b.js";import"./util.57d7f00b.js";import"./useAttrs.02e0acfe.js";import"./index.bed999aa.js";import"./index.6eab8075.js";import"./uuid.a965114a.js";import"./index.e933c892.js";import"./index.5107361b.js";import"./useTimeout.131c739b.js";import"./useWindowSizeFn.760a84ec.js";import"./index.201f35c2.js";import"./index.3c33663f.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./RightOutlined.520da2d9.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./FullscreenOutlined.7cc846ae.js";import"./index.35c9450f.js";import"./index.792349ea.js";import"./index.00300e64.js";import"./LeftOutlined.662c68ae.js";import"./download.8d304dc4.js";import"./index.45038be4.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.41351325.js";import"./scrollTo.c9242ea7.js";import"./transButton.38e67fb4.js";import"./clickOutside.5baabbc1.js";import"./useSortable.d3f9a0f7.js";import"./CheckOutlined.cb3bea7f.js";import"./SettingOutlined.621dbb5c.js";import"./useExpose.09f50fef.js";import"./useForm.c84c148f.js";import"./index.24bc2e8e.js";import"./index.aea690b6.js";import"./usePageContext.a7cfbe9e.js";var l=m({components:{BasicTable:e,PageWrapper:a},setup:()=>({aoaToExcel:function(){o({data:s,header:r,filename:"二维数组方式导出excel.xlsx"})},columns:i,data:t})});const f=b("导出");l.render=function(e,i,t,o,s,r){const a=p("a-button"),m=p("BasicTable"),b=p("PageWrapper");return d(),n(b,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:c((()=>[j(m,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(a,{onClick:e.aoaToExcel},{default:c((()=>[f])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default l;