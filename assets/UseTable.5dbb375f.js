import{_ as e}from"./index.11f321e7.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.7aa0192c.js";import{d as o,g as s,h as n,o as a,i as c,j as r,w as l,m}from"./index.a0c33e6e.js";import{d}from"./table.cceb959c.js";import{u as p}from"./useTable.c5b1b2e5.js";import"./index.e8f6a548.js";import"./SearchOutlined.503f9ea6.js";import"./DownOutlined.69023226.js";import"./CheckOutlined.dc4c859a.js";import"./index.7e3a34b7.js";import"./index.1a355b4a.js";import"./responsiveObserve.c545f1cc.js";import"./index.9f30ce73.js";import"./findIndex.b72f3a96.js";import"./isEqual.679122bc.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.93ab6b75.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./UpOutlined.94383fff.js";import"./index.4e5ad320.js";import"./EyeOutlined.b06a5359.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./RightOutlined.0b237a08.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./Tree.9588fb8b.js";import"./util.57d7f00b.js";import"./useAttrs.02e0acfe.js";import"./index.bed999aa.js";import"./index.6eab8075.js";import"./uuid.a965114a.js";import"./index.e933c892.js";import"./index.5107361b.js";import"./useTimeout.131c739b.js";import"./useWindowSizeFn.760a84ec.js";import"./index.201f35c2.js";import"./index.3c33663f.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./RightOutlined.520da2d9.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./FullscreenOutlined.7cc846ae.js";import"./index.35c9450f.js";import"./index.792349ea.js";import"./index.00300e64.js";import"./LeftOutlined.662c68ae.js";import"./download.8d304dc4.js";import"./index.45038be4.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.41351325.js";import"./scrollTo.c9242ea7.js";import"./transButton.38e67fb4.js";import"./clickOutside.5baabbc1.js";import"./useSortable.d3f9a0f7.js";import"./CheckOutlined.cb3bea7f.js";import"./SettingOutlined.621dbb5c.js";import"./useExpose.09f50fef.js";import"./useForm.c84c148f.js";var u=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:c,getDataSource:r,reload:l,getPaginationRef:m,setPagination:u,getSelectRows:f,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=p({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:d,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),l({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){u({current:2}),l()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const f={class:"p-4"},j={class:"mb-4"},b=m("还原"),g=m("开启loading"),C=m("更改Columns"),k=m("获取Columns"),x=m("获取表格数据"),S=m("跳转到第2页"),w={class:"mb-4"},T=m("获取选中行"),R=m("获取选中行Key"),_=m("设置选中行"),y=m("清空选中行"),h=m("获取分页信息");u.render=function(e,t,i,o,s,m){const d=n("a-button"),p=n("BasicTable");return a(),c("div",f,[r("div",j,[r(d,{class:"mr-2",onClick:e.reloadTable},{default:l((()=>[b])),_:1},8,["onClick"]),r(d,{class:"mr-2",onClick:e.changeLoading},{default:l((()=>[g])),_:1},8,["onClick"]),r(d,{class:"mr-2",onClick:e.changeColumns},{default:l((()=>[C])),_:1},8,["onClick"]),r(d,{class:"mr-2",onClick:e.getColumn},{default:l((()=>[k])),_:1},8,["onClick"]),r(d,{class:"mr-2",onClick:e.getTableData},{default:l((()=>[x])),_:1},8,["onClick"]),r(d,{class:"mr-2",onClick:e.setPaginationInfo},{default:l((()=>[S])),_:1},8,["onClick"])]),r("div",w,[r(d,{class:"mr-2",onClick:e.getSelectRowList},{default:l((()=>[T])),_:1},8,["onClick"]),r(d,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:l((()=>[R])),_:1},8,["onClick"]),r(d,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:l((()=>[_])),_:1},8,["onClick"]),r(d,{class:"mr-2",onClick:e.clearSelect},{default:l((()=>[y])),_:1},8,["onClick"]),r(d,{class:"mr-2",onClick:e.getPagination},{default:l((()=>[h])),_:1},8,["onClick"])]),r(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default u;