import{d as e,u as o,aW as t,aQ as i,a1 as s,bj as a,e as r,bk as n,cr as d,cs as p,h as c,o as l,i as m,j as u,l as j,k as f,bz as b}from"./index.a0c33e6e.js";import{L as x}from"./index.dcdafbb1.js";import{D as _,G as g,S as h}from"./siteSetting.2daee9f0.js";import{G as C}from"./GithubFilled.e494be49.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.0b237a08.js";import"./LeftOutlined.662c68ae.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./isEqual.679122bc.js";import"./toInteger.8b9af448.js";import"./index.bed999aa.js";import"./useTimeout.131c739b.js";import"./useHeaderSetting.74357c4f.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./useSortable.d3f9a0f7.js";import"./index.201f35c2.js";import"./index.3c33663f.js";import"./RightOutlined.520da2d9.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./index.ef64392a.js";import"./useWindowSizeFn.760a84ec.js";import"./usePageContext.a7cfbe9e.js";import"./index.fd7a4b05.js";import"./clickOutside.5baabbc1.js";import"./index.a3ecbb5c.js";import"./UpOutlined.94383fff.js";import"./DownOutlined.69023226.js";import"./index.792349ea.js";var F=e({name:"LayoutFooter",components:{Footer:x.Footer,GithubFilled:C},setup(){const{t:e}=o(),{getShowFooter:d}=n(),{currentRoute:p}=t(),{prefixCls:c}=i("layout-footer");return{getShowLayoutFooter:s((()=>{var e;return r(d)&&!(null==(e=r(p).meta)?void 0:e.hiddenFooter)})),prefixCls:c,t:e,DOC_URL:_,GITHUB_URL:g,SITE_URL:h,openWindow:a}}});const L=b("data-v-47369c67");d("data-v-47369c67");const S=u("div",null,"Copyright ©2020 Vben Admin",-1);p();const w=L(((e,o,t,i,s,a)=>{const r=c("GithubFilled"),n=c("Footer");return e.getShowLayoutFooter?(l(),m(n,{key:0,class:e.prefixCls},{default:L((()=>[u("div",{class:`${e.prefixCls}__links`},[u("a",{onClick:o[1]||(o[1]=o=>e.openWindow(e.SITE_URL))},j(e.t("layout.footer.onlinePreview")),1),u(r,{onClick:o[2]||(o[2]=o=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),u("a",{onClick:o[3]||(o[3]=o=>e.openWindow(e.DOC_URL))},j(e.t("layout.footer.onlineDocument")),1)],2),S])),_:1},8,["class"])):f("",!0)}));F.render=w,F.__scopeId="data-v-47369c67";export default F;