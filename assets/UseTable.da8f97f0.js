import{_ as e}from"./index.39235e88.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.7aa0192c.js";import{d as o,h as s,i as n,o as a,j as c,k as l,w as r,n as d}from"./index.871a73d0.js";import{d as m}from"./table.fcb71720.js";import{u}from"./useTable.e7fb3ab0.js";import"./index.47fbc714.js";import"./index.c1fdb1c2.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.fe97cbc4.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.ebf495ed.js";import"./useTimeout.da8cb4b6.js";import"./useWindowSizeFn.78593242.js";import"./index.763e570f.js";import"./index.3ab8cadf.js";import"./domUtils.f6df7058.js";import"./RightOutlined.726ff22e.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./FullscreenOutlined.e76c502b.js";import"./index.a45b2b74.js";import"./index.2fc715fb.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.2fd06b65.js";import"./index.27bb0464.js";import"./clickOutside.8866c869.js";import"./CheckOutlined.75872468.js";import"./useSortable.3bcb7928.js";import"./SettingOutlined.19405a5f.js";import"./useExpose.a20cf1d1.js";import"./useForm.abc982be.js";var f=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:c,getDataSource:l,reload:r,getPaginationRef:d,setPagination:f,getSelectRows:p,getSelectRowKeys:b,setSelectedRowKeys:j,clearSelectedRowKeys:g}]=u({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:m,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),r({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),r()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){j(["0","1","2"])},clearSelect:function(){g()}}}});const p={class:"p-4"},b={class:"mb-4"},j=d("还原"),g=d("开启loading"),C=d("更改Columns"),k=d("获取Columns"),x=d("获取表格数据"),S=d("跳转到第2页"),w={class:"mb-4"},R=d("获取选中行"),T=d("获取选中行Key"),_=d("设置选中行"),y=d("清空选中行"),h=d("获取分页信息");f.render=function(e,t,i,o,s,d){const m=n("a-button"),u=n("BasicTable");return a(),c("div",p,[l("div",b,[l(m,{class:"mr-2",onClick:e.reloadTable},{default:r((()=>[j])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeLoading},{default:r((()=>[g])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeColumns},{default:r((()=>[C])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getColumn},{default:r((()=>[k])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getTableData},{default:r((()=>[x])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:r((()=>[S])),_:1},8,["onClick"])]),l("div",w,[l(m,{class:"mr-2",onClick:e.getSelectRowList},{default:r((()=>[R])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:r((()=>[T])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:r((()=>[_])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.clearSelect},{default:r((()=>[y])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getPagination},{default:r((()=>[h])),_:1},8,["onClick"])]),l(u,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;