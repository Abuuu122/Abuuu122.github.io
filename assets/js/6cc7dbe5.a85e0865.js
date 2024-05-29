"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4440],{3385:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(4848),a=s(8453);const t={},r="Real-Time Shadows 1",c={id:"GAMES202/03/03",title:"Real-Time Shadows 1",description:"Rasterization\u4e0d\u540c\u4e8eRay tracing\uff0c\u662flocal\u7684\uff0c\u96be\u4ee5\u505a\u5230\u5168\u5c40\u7684\u6548\u679c\uff0c\u6bd4\u5982\u9634\u5f71",source:"@site/docs/GAMES202/03/03.md",sourceDirName:"GAMES202/03",slug:"/GAMES202/03/",permalink:"/docs/GAMES202/03/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/GAMES202/03/03.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recap of CG Basics",permalink:"/docs/GAMES202/02/"},next:{title:"Real-Time Shadows 2",permalink:"/docs/GAMES202/04/"}},l={},d=[{value:"Recap: shadow mapping",id:"recap-shadow-mapping",level:2}];function h(e){const n={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"real-time-shadows-1",children:"Real-Time Shadows 1"}),"\n",(0,i.jsx)(n.p,{children:"Rasterization\u4e0d\u540c\u4e8eRay tracing\uff0c\u662flocal\u7684\uff0c\u96be\u4ee5\u505a\u5230\u5168\u5c40\u7684\u6548\u679c\uff0c\u6bd4\u5982\u9634\u5f71"}),"\n",(0,i.jsx)(n.h2,{id:"recap-shadow-mapping",children:"Recap: shadow mapping"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A 2-Pass Algorithm"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The light pass generates the SM"}),"\n",(0,i.jsx)(n.li,{children:"The camera pass uses the SM"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240318200302547",src:s(4577).A+"",width:"657",height:"423"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Issues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Self occlusion"}),"\n",(0,i.jsx)(n.p,{children:"SM\u7684\u7cbe\u5ea6\u9020\u6210\u7684\uff0c\u6bcf\u4e2afragment\u5bf9\u5e94\u4e00\u4e2a\u6700\u6d45\u6df1\u5ea6\uff0c\u5f53\u5149\u6e90\u63a5\u8fd1\u6c34\u5e73\u5c04\u5411shading point\u65f6\u5bb9\u6613\u4ea7\u751f\u906e\u6321\uff0c\u4ea7\u751f\u9519\u8bef\u7684\u9634\u5f71\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u89e3\u51b3\u65b9\u6848\uff1a\u6dfb\u52a0bias(\u6839\u636e\u89d2\u5ea6\u52a8\u6001\u8c03\u6574bias\u957f\u5ea6)\uff0c\u5728bias\u4e4b\u5185\u8ba4\u4e3a\u6ca1\u6709\u906e\u6321\uff0c\u4e0d\u4f1a\u4ea7\u751f\u9634\u5f71\uff0c\u4f46\u8fc7\u5ea6\u4f1a\u5bfc\u81f4detached shadow\uff0c\u672c\u8be5\u4ea7\u751f\u9634\u5f71\u7684\u5730\u65b9\u65ad\u5f00\u4e86\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240318200720549",src:s(3455).A+"",width:"796",height:"358"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Aliasing",(0,i.jsx)(n.img,{alt:"image-20240318201048468",src:s(6511).A+"",width:"590",height:"370"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The math behind shadow mapping"}),"\n",(0,i.jsx)(n.p,{children:"\u5728RTR\u4e2d\uff0c\u66f4\u91cd\u89c6approximately equal"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u4e2a\u91cd\u8981\u7684\u5f0f\u5b50\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240318201134833",src:s(3547).A+"",width:"704",height:"147"})}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u5c06\u4e58\u79ef\u7684\u79ef\u5206\u62c6\u6210\u79ef\u5206\u7684\u4e58\u79ef\uff0c\u76f8\u5bf9\u4e0efx\u53d6\u4e86\u5e73\u5747"}),"\n",(0,i.jsx)(n.p,{children:"\u8981\u6c42\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"small support\uff08\u79ef\u5206\u57df\uff09"}),"\n",(0,i.jsx)(n.li,{children:"smooth integrand\uff08\u88ab\u79ef\u51fd\u6570\u5e73\u6ed1\uff09"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5e94\u7528\u5728shadow mapping\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240318201542701",src:s(4190).A+"",width:"814",height:"357"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Percentage closer soft shadows\uff08PCSS\uff09"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Percentage Closer Filtering\uff08PCF\uff09"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6765anti-aliasing\uff0c\u4e0d\u662fsoft shadow"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u6bcf\u4e2ashading point\uff0c\u5728shadow map\u4e0a\u7684\u4e00\u4e2a\u5468\u56f4\u8303\u56f4\u5185filtering"}),"\n",(0,i.jsx)(n.p,{children:"filter size\u4f1a\u5f71\u54cd\u8f6f\u786c\uff0c\u8d8a\u5927\u8d8a\u8f6f"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240318202028354",src:s(7380).A+"",width:"808",height:"454"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Percentage Closer Soft Shadows\uff08PCSS\uff09"}),"\n",(0,i.jsx)(n.p,{children:"Key\uff1a\u79bbblocker\u8d8a\u8fd1\uff0c\u9634\u5f71\u8d8a\u786c\uff0c\u6839\u636eblocker\u76f8\u5bf9\u8ddd\u79bb\u786e\u5b9aPCF\u7684filter size"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240318202249684",src:s(7137).A+"",width:"803",height:"559"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Step 1: Blocker search (getting the average blocker depth in a certain region)"}),"\n",(0,i.jsx)(n.li,{children:"Step 2: Penumbra estimation (use the average blocker depth to determine filter size)"}),"\n",(0,i.jsx)(n.li,{children:"Step 3: Percentage Closer Filtering"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4577:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20240318200302547-7bfad2d99ad990c39989d8973fa28156.png"},3455:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20240318200720549-d3c279790862371abd35098a487a75c1.png"},6511:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20240318201048468-53701386941fc31571f71ab8826f1927.png"},3547:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20240318201134833-1b1548cc1a778b0eb57f4de56f8568f0.png"},4190:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20240318201542701-ea8e9a82c3856d192f53a13ff80adb8e.png"},7380:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20240318202028354-8345c037b5fbe56d65690cd731e08ee3.png"},7137:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20240318202249684-f26611388c0dad1a09052d729184d63f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(6540);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);