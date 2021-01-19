import{_ as e}from"./index.c1fdb1c2.js";import{a as s}from"./index.763e570f.js";import{d as o,r as t,h as l,i,o as a,j as n,w as r,k as c,n as p}from"./index.871a73d0.js";import{_ as d}from"./index.472abbb9.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.fe97cbc4.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.ebf495ed.js";import"./useTimeout.da8cb4b6.js";import"./useWindowSizeFn.78593242.js";import"./FullscreenOutlined.e76c502b.js";import"./index.a45b2b74.js";import"./index.2fc715fb.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.2fd06b65.js";import"./domUtils.f6df7058.js";import"./index.3ab8cadf.js";import"./RightOutlined.726ff22e.js";import"./useScrollTo.25bb0b32.js";import"./animation.36cf3c57.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.8b8441ee.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=o({components:{BasicForm:e,CollapseContainer:s,PageWrapper:d},setup(){const e=t(null),{createMessage:s}=l();return{formElRef:e,schemas:m,handleSubmit:e=>{s.success("click search,values:"+JSON.stringify(e))},setProps(s){const o=e.value;o&&o.setProps(s)}}}});const f={class:"mb-4"},b=p("更改labelWidth"),j=p("还原labelWidth"),P=p("更改Size"),x=p("还原Size"),C=p("禁用表单"),h=p("解除禁用"),k=p("紧凑表单"),_=p("还原正常间距"),S=p(" 操作按钮位置 "),v={class:"mb-4"},w=p(" 隐藏操作按钮 "),B=p(" 显示操作按钮 "),g=p(" 隐藏重置按钮 "),W=p(" 显示重置按钮 "),O=p(" 隐藏查询按钮 "),R=p(" 显示查询按钮 "),z=p(" 修改重置按钮 "),F=p(" 修改查询按钮 ");u.render=function(e,s,o,t,l,p){const d=i("a-button"),m=i("BasicForm"),u=i("CollapseContainer"),G=i("PageWrapper");return a(),n(G,{title:"Ref操作示例"},{default:r((()=>[c("div",f,[c(d,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:r((()=>[b])),_:1}),c(d,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:r((()=>[j])),_:1}),c(d,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:r((()=>[P])),_:1}),c(d,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:r((()=>[x])),_:1}),c(d,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:r((()=>[C])),_:1}),c(d,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:r((()=>[h])),_:1}),c(d,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:r((()=>[k])),_:1}),c(d,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:r((()=>[_])),_:1}),c(d,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:r((()=>[S])),_:1})]),c("div",v,[c(d,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:r((()=>[w])),_:1}),c(d,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:r((()=>[B])),_:1}),c(d,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:r((()=>[g])),_:1}),c(d,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:r((()=>[W])),_:1}),c(d,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:r((()=>[O])),_:1}),c(d,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:r((()=>[R])),_:1}),c(d,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:r((()=>[z])),_:1}),c(d,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:r((()=>[F])),_:1})]),c(u,{title:"使用ref调用表单内部函数示例"},{default:r((()=>[c(m,{schemas:e.schemas,ref:"formElRef",labelWidth:100,onSubmit:e.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;