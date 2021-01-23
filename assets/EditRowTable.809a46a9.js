import{_ as e,a as t}from"./index.11f321e7.js";import{o as i}from"./select.08455c4c.js";import{d as o}from"./table.cceb959c.js";import{d as n,r as a,h as d,o as s,i as r,j as l,w as m}from"./index.a0c33e6e.js";import{g as p}from"./index.7e3a34b7.js";import{u as c}from"./useTable.c5b1b2e5.js";import"./index.e8f6a548.js";import"./SearchOutlined.503f9ea6.js";import"./DownOutlined.69023226.js";import"./CheckOutlined.dc4c859a.js";import"./index.9f30ce73.js";import"./index.1a355b4a.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.b72f3a96.js";import"./isEqual.679122bc.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.46e4dce7.js";import"./RightOutlined.0b237a08.js";import"./types.bc7cc0a6.js";import"./index.45038be4.js";import"./LeftOutlined.662c68ae.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.41351325.js";import"./uuid.a965114a.js";import"./util.57d7f00b.js";import"./EyeOutlined.b06a5359.js";import"./index.e933c892.js";import"./index.792349ea.js";import"./index.bed999aa.js";import"./scrollTo.c9242ea7.js";import"./transButton.38e67fb4.js";import"./RightOutlined.520da2d9.js";import"./clickOutside.5baabbc1.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./UpOutlined.94383fff.js";import"./index.4e5ad320.js";import"./useSortable.d3f9a0f7.js";import"./index.5107361b.js";import"./useTimeout.131c739b.js";import"./useAttrs.02e0acfe.js";import"./useWindowSizeFn.760a84ec.js";import"./index.201f35c2.js";import"./index.3c33663f.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./FullscreenOutlined.7cc846ae.js";import"./CheckOutlined.cb3bea7f.js";import"./index.35c9450f.js";import"./SettingOutlined.621dbb5c.js";import"./useExpose.09f50fef.js";import"./useForm.c84c148f.js";import"./index.93ab6b75.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./Tree.9588fb8b.js";import"./index.6eab8075.js";import"./index.00300e64.js";import"./download.8d304dc4.js";const u=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:i},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var j=n({components:{BasicTable:e,EditTableHeaderIcon:t,TableAction:p},setup(){const e=a(""),[t]=c({title:"可编辑行示例",api:o,columns:u,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function i(t){var i;e.value=t.key,null==(i=t.onEdit)||i.call(t,!0)}function n(t){var i;e.value="",null==(i=t.onEdit)||i.call(t,!1,!0)}async function d(t){var i;await(null==(i=t.onEdit)?void 0:i.call(t,!1,!0))&&(e.value="")}return{registerTable:t,handleEdit:i,createActions:function(t,o){return t.editable?[{label:"保存",onClick:d.bind(null,t,o)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:n.bind(null,t,o)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==t.key,onClick:i.bind(null,t)}]}}}});const b={class:"p-4"};j.render=function(e,t,i,o,n,a){const p=d("TableAction"),c=d("BasicTable");return s(),r("div",b,[l(c,{onRegister:e.registerTable},{action:m((({record:t,column:i})=>[l(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default j;