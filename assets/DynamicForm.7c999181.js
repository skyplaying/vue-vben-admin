import{_ as e}from"./index.7e3a34b7.js";import{a as i}from"./index.201f35c2.js";import{_ as o}from"./index.68673cbc.js";import{d as l,h as t,o as s,i as a,w as n,j as p,m as r}from"./index.a0c33e6e.js";import{u as d}from"./useForm.c84c148f.js";import"./index.1a355b4a.js";import"./responsiveObserve.c545f1cc.js";import"./index.9f30ce73.js";import"./findIndex.b72f3a96.js";import"./isEqual.679122bc.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.93ab6b75.js";import"./index.e8f6a548.js";import"./SearchOutlined.503f9ea6.js";import"./DownOutlined.69023226.js";import"./CheckOutlined.dc4c859a.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./UpOutlined.94383fff.js";import"./index.4e5ad320.js";import"./EyeOutlined.b06a5359.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./RightOutlined.0b237a08.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./Tree.9588fb8b.js";import"./util.57d7f00b.js";import"./useAttrs.02e0acfe.js";import"./index.bed999aa.js";import"./index.6eab8075.js";import"./uuid.a965114a.js";import"./index.e933c892.js";import"./index.5107361b.js";import"./useTimeout.131c739b.js";import"./useWindowSizeFn.760a84ec.js";import"./FullscreenOutlined.7cc846ae.js";import"./index.35c9450f.js";import"./index.792349ea.js";import"./index.00300e64.js";import"./LeftOutlined.662c68ae.js";import"./download.8d304dc4.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./index.3c33663f.js";import"./RightOutlined.520da2d9.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./index.24bc2e8e.js";import"./index.aea690b6.js";import"./usePageContext.a7cfbe9e.js";import"./transButton.38e67fb4.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],m=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:i=>{e.f2=i.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:i})=>({placeholder:"值改变时执行查询,查看控制台",onChange:async()=>{const{validate:i}=e;await i()}})}];var f=l({components:{BasicForm:e,CollapseContainer:i,PageWrapper:o},setup(){const[e,{setProps:i,updateSchema:o,appendSchemaByField:l,removeSchemaByFiled:t}]=d({labelWidth:120,schemas:c,actionColOptions:{span:24}}),[s]=d({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:e,register1:s,schemas:c,setProps:i,changeLabel3:function(){o({field:"field3",label:"字段3 New"})},changeLabel34:function(){o([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])},appendField:function(){l({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")},deleteField:function(){t("field11")}}}});const b={class:"mb-4"},u=r("更改字段3label"),j=r("同时更改字段3,4label"),h=r("往字段3后面插入字段10"),x=r("删除字段11");f.render=function(e,i,o,l,r,d){const c=t("a-button"),m=t("BasicForm"),f=t("CollapseContainer"),P=t("PageWrapper");return s(),a(P,{title:"动态表单示例"},{default:n((()=>[p("div",b,[p(c,{onClick:e.changeLabel3,class:"mr-2"},{default:n((()=>[u])),_:1},8,["onClick"]),p(c,{onClick:e.changeLabel34,class:"mr-2"},{default:n((()=>[j])),_:1},8,["onClick"]),p(c,{onClick:e.appendField,class:"mr-2"},{default:n((()=>[h])),_:1},8,["onClick"]),p(c,{onClick:e.deleteField,class:"mr-2"},{default:n((()=>[x])),_:1},8,["onClick"])]),p(f,{title:"动态表单示例,动态根据表单内其他值改变"},{default:n((()=>[p(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(f,{class:"mt-5",title:"componentProps动态改变"},{default:n((()=>[p(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default f;