import{_ as e}from"./index.7e3a34b7.js";import{a as o}from"./index.201f35c2.js";import{_ as t}from"./index.68673cbc.js";import{d as i,h as s,o as n,i as l,w as p,j as a}from"./index.a0c33e6e.js";import{u as r}from"./useForm.c84c148f.js";import"./index.1a355b4a.js";import"./responsiveObserve.c545f1cc.js";import"./index.9f30ce73.js";import"./findIndex.b72f3a96.js";import"./isEqual.679122bc.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.93ab6b75.js";import"./index.e8f6a548.js";import"./SearchOutlined.503f9ea6.js";import"./DownOutlined.69023226.js";import"./CheckOutlined.dc4c859a.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./UpOutlined.94383fff.js";import"./index.4e5ad320.js";import"./EyeOutlined.b06a5359.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./RightOutlined.0b237a08.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./Tree.9588fb8b.js";import"./util.57d7f00b.js";import"./useAttrs.02e0acfe.js";import"./index.bed999aa.js";import"./index.6eab8075.js";import"./uuid.a965114a.js";import"./index.e933c892.js";import"./index.5107361b.js";import"./useTimeout.131c739b.js";import"./useWindowSizeFn.760a84ec.js";import"./FullscreenOutlined.7cc846ae.js";import"./index.35c9450f.js";import"./index.792349ea.js";import"./index.00300e64.js";import"./LeftOutlined.662c68ae.js";import"./download.8d304dc4.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./index.3c33663f.js";import"./RightOutlined.520da2d9.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./index.24bc2e8e.js";import"./index.aea690b6.js";import"./usePageContext.a7cfbe9e.js";import"./transButton.38e67fb4.js";var c=i({components:{BasicForm:e,CollapseContainer:o,PageWrapper:t},setup(){const[e]=r({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=r({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});c.render=function(e,o,t,i,r,c){const d=s("BasicForm"),m=s("CollapseContainer"),f=s("PageWrapper");return n(),l(f,{title:"可折叠表单示例"},{default:p((()=>[a(m,{title:"基础收缩示例"},{default:p((()=>[a(d,{onRegister:e.register},null,8,["onRegister"])])),_:1}),a(m,{title:"超过3行自动收起",class:"mt-4"},{default:p((()=>[a(d,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])),_:1})};export default c;