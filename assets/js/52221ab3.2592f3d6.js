"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1053],{7747:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=n(4848),c=n(8453);const t={},a="Real-Time Global Illumination(screen space)",l={id:"GAMES202/08/08",title:"Real-Time Global Illumination(screen space)",description:"Screen Space Ambient Occlusion (SSAO)",source:"@site/docs/GAMES202/08/08.md",sourceDirName:"GAMES202/08",slug:"/GAMES202/08/",permalink:"/docs/GAMES202/08/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/GAMES202/08/08.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Real-Time Global Illumination (in 3D)",permalink:"/docs/GAMES202/07/"},next:{title:"Real-Time Physically-Based Materials (surface models)",permalink:"/docs/GAMES202/09/"}},r={},o=[{value:"Screen Space Ambient Occlusion (SSAO)",id:"screen-space-ambient-occlusion-ssao",level:2}];function d(e){const i={h1:"h1",h2:"h2",img:"img",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"real-time-global-illuminationscreen-space",children:"Real-Time Global Illumination(screen space)"}),"\n",(0,s.jsx)(i.h2,{id:"screen-space-ambient-occlusion-ssao",children:"Screen Space Ambient Occlusion (SSAO)"}),"\n",(0,s.jsx)(i.p,{children:"an approximation of global illumination in screen space"}),"\n",(0,s.jsx)(i.p,{children:"direct light\u52a0\u4e0aambient\uff0cambient\u57fa\u4e8e\u906e\u6321\u5f62\u6210\u7684visibility"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image-20240418153350554",src:n(6599).A+"",width:"1118",height:"727"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image-20240418153422692",src:n(9766).A+"",width:"1082",height:"600"})}),"\n",(0,s.jsx)(i.p,{children:"\u600e\u4e48\u6c42visibility\uff1f"}),"\n",(0,s.jsx)(i.p,{children:"\u8868\u9762\u7684\u70b9\u53d6\u4e00\u4e2a\u7403\u7684\u8303\u56f4\u91c7\u6837\u4e00\u7cfb\u5217\u70b9"}),"\n",(0,s.jsx)(i.p,{children:"\u6839\u636edepth map\u5224\u65ad\u70b9\u662f\u5426\u88ab\u906e\u6321\uff0c\u8d85\u8fc7\u534a\u6570\u88ab\u906e\u6321\u5c31\u8003\u8651AO"}),"\n",(0,s.jsx)(i.p,{children:"\u7b2c\u4e09\u4e2a\u7403\u4e3a\u4f8b\uff1a10\u4e2a\u70b9\uff0c9\u4e2a\u88ab\u906e\u6321\uff0c\u8003\u8651AO\uff0cvisibility=1/5"}),"\n",(0,s.jsx)(i.p,{children:"\u4f1a\u6709\u9519\u8bef\u5224\u65ad\u906e\u6321\u7684\u60c5\u51b5\uff0c\u8fd9\u662f\u56e0\u4e3a\u6ca1\u6709\u8003\u8651\u6cd5\u5411"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image-20240418153502120",src:n(5175).A+"",width:"1126",height:"798"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image-20240418153855641",src:n(9936).A+"",width:"1105",height:"594"})}),"\n",(0,s.jsx)(i.p,{children:"HBAO(Horizon based ambient occlusion)\u53ef\u4ee5\u907f\u514d\u8fd9\u79cd\u9519\u8bef\u906e\u6321\u7684\u60c5\u51b5"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image-20240418154011430",src:n(6205).A+"",width:"1075",height:"825"})}),"\n",(0,s.jsx)(i.p,{children:"SSDO\uff08Screen Space Directional Occlusion\uff09"}),"\n",(0,s.jsx)(i.p,{children:"\u4e0eSSAO\u76f8\u53cd\uff0c\u91c7\u6837\u4e2d\u88ab\u906e\u6321\u7684\u90e8\u5206\u8d21\u732e\u6b21\u7ea7\u5149\u7167\uff0c\u6ca1\u906e\u6321\u7684\u90e8\u5206\u4e0d\u8d21\u732e"}),"\n",(0,s.jsx)(i.p,{children:"\u90fd\u53ea\u80fd\u7b97\u5c0f\u8303\u56f4\u5185\u7684\u5168\u5c40\u5149"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image-20240524220233991",src:n(4187).A+"",width:"995",height:"643"})}),"\n",(0,s.jsx)(i.p,{children:"\u7b97\u66f4\u5927\u8303\u56f4\u7684\u5168\u5c40\u5149\uff0c\u53ef\u4ee5\u7528SSR"}),"\n",(0,s.jsx)(i.p,{children:"SSR\uff08Screen Space Reflection\uff09"}),"\n",(0,s.jsx)(i.p,{children:"\u7c7b\u4f3c\u4e8eray tracing\uff0c\u5149\u7ebf\u4e0e\u5c4f\u5e55\u7a7a\u95f4\u7684\u58f3\u6c42\u4ea4"}),"\n",(0,s.jsx)(i.p,{children:"\u6c42\u4ea4\u65f6\u6b65\u957f\u53ef\u4ee5\u8bd5\u63a2\u6027\u5730\u52a8\u6001\u53d8\u5316\uff0c\u5c4f\u5e55\u7a7a\u95f4\u6df1\u5ea6\u7684\u58f3\u91c7\u7528min pooling\u7684mipmap\u8bb0\u5f55\uff0c\u4ece\u6700\u7ec6\u7684\u5c42\u5f00\u59cb\uff0c\u5982\u679c\u6ca1\u6709\u76f8\u4ea4\u5c31\u7528\u66f4\u7c97\u7684\u5c42\u589e\u8fdb\u6b65\u957f\uff0c\u4ece\u800c\u52a0\u901f\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image-20240524221852618",src:n(8067).A+"",width:"967",height:"486"})}),"\n",(0,s.jsx)(i.p,{children:"\u51e0\u4f55\u4f1a\u6709\u95ee\u9898\uff0c\u56e0\u4e3a\u53ea\u53cd\u5c04\u4e86\u5c4f\u5e55\u7a7a\u95f4\u80fd\u770b\u5230\u7684\u90e8\u5206\uff0c\u5176\u4f59\u90e8\u5206\u88abcut\u4e86\uff0c\u4e22\u5931\u4e86\u5c4f\u5e55\u7a7a\u95f4\u4ee5\u5916\u7684\u4fe1\u606f\uff0c\u5728\u505adiffuse\u65f6\u6bd4\u8f83\u56f0\u96be"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"image-20240524222031102",src:n(8317).A+"",width:"1003",height:"561"})})]})}function p(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6599:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-20240418153350554-8c1c6c8fbffd97df3d8b2588aef56ee1.png"},9766:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-20240418153422692-4ad0623725f5f8ef93f7d2bb7189f260.png"},5175:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-20240418153502120-0467bb242e51d9f13d6916275cd78bf4.png"},9936:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-20240418153855641-9ce6b6fb785a62732f64e7d916e72487.png"},6205:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-20240418154011430-860d73b48377f87e6fec900273d36676.png"},4187:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-20240524220233991-5ed8929144ce7526bcb76cec645ce898.png"},8067:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-20240524221852618-f6a588e87ccfcda596b9be0c8869e0a6.png"},8317:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-20240524222031102-b3dbe1b7a32b4f49f125474a14e121d7.png"},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var s=n(6540);const c={},t=s.createContext(c);function a(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);