import{d as e,aJ as s,aQ as t,a1 as a,bU as i,h as r,o,i as p,j as n,w as m,b4 as c,aR as l,aS as d,aH as u,bA as g}from"./index.a0c33e6e.js";import{I as f}from"./index.00300e64.js";import{_ as j}from"./index.68673cbc.js";import"./LeftOutlined.662c68ae.js";import"./RightOutlined.0b237a08.js";import"./index.24bc2e8e.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./isEqual.679122bc.js";import"./toInteger.8b9af448.js";import"./DownOutlined.69023226.js";import"./index.bed999aa.js";import"./index.aea690b6.js";import"./usePageContext.a7cfbe9e.js";import"./transButton.38e67fb4.js";var b=e({name:"ImagePreview",components:{Image:f,PreviewGroup:f.PreviewGroup},props:{functional:s.bool,imageList:{type:Array}},setup(e){const{prefixCls:s}=t("image-preview");return{prefixCls:s,getImageList:a((()=>{const{imageList:s}=e;return s?s.map((e=>i(e)?{src:e,placeholder:!1}:e)):[]}))}}});b.render=function(e,s,t,a,i,f){const j=r("Image"),b=r("PreviewGroup");return o(),p("div",{class:e.prefixCls},[n(b,null,{default:m((()=>[!e.imageList||e.$slots.default?c(e.$slots,"default",{key:0}):(o(!0),p(l,{key:1},d(e.getImageList,(e=>(o(),p(j,u({key:e.src},e),g({_:2},[e.placeholder?{name:"placeholder",fn:m((()=>[n(j,u(e,{src:e.placeholder,preview:!1}),null,16,["src"])]))}:void 0]),1040)))),128))])),_:1})],2)};const h=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"];var v=e({components:{PageWrapper:j,ImagePreview:b},setup:()=>({imgList:h})});v.render=function(e,s,t,a,i,c){const l=r("ImagePreview"),d=r("PageWrapper");return o(),p(d,{title:"图片预览示例"},{default:m((()=>[n(l,{imageList:e.imgList},null,8,["imageList"])])),_:1})};export default v;