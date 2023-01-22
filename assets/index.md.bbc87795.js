import{_ as P,r as a,o as i,c as l,b as e,j as T,v as O,k as w,p as I,i as E,d as u,e as o,w as g,u as n,a as D,g as k,f as y,h as x}from"./app.0de8b606.js";const s=d=>(I("data-v-df0ef695"),d=d(),E(),d),L={class:"newsletter"},R={key:0,method:"get",class:"email_form",id:"email_form",action:"#",onsubmit:"return false;"},W={key:0},M={key:1,class:"tip custom-block info_message"},V=s(()=>e("p",{class:"custom-block-title"},"Info",-1)),G=s(()=>e("p",null,[u("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),N=[V,G],C={key:2,class:"warning custom-block warning_message"},j=s(()=>e("p",{class:"custom-block-title"},"Error",-1)),B=s(()=>e("p",null,"Please fill the fields with min. 6 characters",-1)),F=[j,B],q={key:3,class:"warning custom-block error_message"},z=s(()=>e("p",{class:"custom-block-title"},"Error",-1)),H=s(()=>e("p",null,[u("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),$=[z,H],J={__name:"Newsletter",setup(d){const h=a(""),r=a(""),_=a(""),c=a(""),p=a(!1),m=a(!1),b=a(!1),f=a(!0);function S(){if(c.value="DIALOGWARE-ian",h.value="Thank You  for a registration on DIALOGWARE NEWSLETTER.",m.value=!1,p.value=!1,c.value.length<2||r.value.length<4||h.value.length<4)p.value=!0;else{p.value=!1;var v=`https://email.dialogware.com/?type=NEWSLETTER&name=${c.value}&message=${h.value}&email=${r.value}`;fetch(v,{method:"get"}).then(t=>t.json()).then(t=>{r.value=t.email,_.value=t.text,c.value=t.name,t.found>5?m.value=!0:(m.value=!1,p.value=!1,f.value=!1,b.value=!0)})}}return(v,t)=>(i(),l("div",L,[f.value?(i(),l("form",R,[e("div",null,[e("fieldset",null,[T(e("input",{"onUpdate:modelValue":t[0]||(t[0]=A=>r.value=A),placeholder:"@"},null,512),[[O,r.value]])])]),f.value?(i(),l("div",W,[e("fieldset",{class:"button_send"},[e("button",{onClick:S},"Subscribe")])])):w("",!0)])):w("",!0),b.value?(i(),l("div",M,N)):w("",!0),p.value?(i(),l("div",C,F)):w("",!0),m.value?(i(),l("div",q,$)):w("",!0)]))}},U=P(J,[["__scopeId","data-v-df0ef695"]]);const Y=D('<h1 id="dialogware" tabindex="-1"><a href="http://www.dialogware.com/" target="_blank" rel="noreferrer">DIALOGWARE</a> <a class="header-anchor" href="#dialogware" aria-hidden="true">#</a></h1><h2 id="build-any-software-in-minutes-with-these-simple-steps" tabindex="-1">Build any software in minutes with these simple steps <a class="header-anchor" href="#build-any-software-in-minutes-with-these-simple-steps" aria-hidden="true">#</a></h2><ul><li>grab the &quot;Idea&quot;</li><li>describe it</li><li>implement it with a single click</li><li>use your application</li></ul><p><strong>DIALOGWARE</strong> is a <a href="https://www.text2software.com/" target="_blank" rel="noreferrer">#text2software</a> platform for building your first MVP application in minutes.</p><p><a href="http://www.dialogware.com/" target="_blank" rel="noreferrer"><img src="http://logo.dialogware.com/dialogware-2lines.png" alt="DIALOGWARE"></a></p><h2 id="how-it-work-s" tabindex="-1">How it work&#39;s? <a class="header-anchor" href="#how-it-work-s" aria-hidden="true">#</a></h2><p>After you have answered our questions with a few sentences about your expectations, you will implement your first MVP version of a web/mobile application yourself and within minutes rather than weeks.</p><h2 id="benefits" tabindex="-1">Benefits? <a class="header-anchor" href="#benefits" aria-hidden="true">#</a></h2><p>This is a much cheaper and easier way than no-code or low-code solutions, you can save much more time and money than today. We &quot;twitterize&quot; the software development and will build any software just with the (con)text of description, specification, documentation...</p><h2 id="try-it" tabindex="-1">Try it! <a class="header-anchor" href="#try-it" aria-hidden="true">#</a></h2><p>Our demo version is currently available only for linux distributions on desktop: <a href="http://download.dialogware.com/" target="_blank" rel="noreferrer">download.dialogware.com</a></p><p>Please find more details about desktop application: <a href="https://www.dialogware.com/app/desktop.html" target="_blank" rel="noreferrer">Desktop Application</a></p><p><img src="https://img.dialogware.com/animation.png" alt="dialogware-opened-tab.png"></p><h2 id="why-dialogware" tabindex="-1">Why DIALOGWARE? <a class="header-anchor" href="#why-dialogware" aria-hidden="true">#</a></h2><p>We are the first global #text2software provider!</p><p>We are appreciated on <a href="https://pioneer.app/join/dialogware.com" target="_blank" rel="noreferrer">Pioneer</a> voting platform over worldwide community.</p><p>Our impressive progress every week bring us among 30 startups out of hundreds of participants.</p><h3 id="video-presentation" tabindex="-1"><a href="https://www.dialogware.com/about/review.html" target="_blank" rel="noreferrer">Video presentation</a> <a class="header-anchor" href="#video-presentation" aria-hidden="true">#</a></h3><p>Please find more details about DIALOGWARE Review on our video presentation</p><video controls="controls" src="https://www.dialogware.com/DIALOGWARE-Review-2--29-11-2022.mp4"></video><ul><li><a href="https://www.dialogware.com/about/review.html" target="_blank" rel="noreferrer">Project Review</a></li></ul><h2 id="dialogware-ecosystem" tabindex="-1">Dialogware ecosystem <a class="header-anchor" href="#dialogware-ecosystem" aria-hidden="true">#</a></h2><h3 id="libraries" tabindex="-1">Libraries <a class="header-anchor" href="#libraries" aria-hidden="true">#</a></h3><table><thead><tr><th>Project</th><th>Description</th><th>More ...</th></tr></thead><tbody><tr><td><strong>DialogSchema</strong></td><td>Schema to create a conversation as DialogMap file</td><td><a href="http://www.DialogSchema.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.DialogSchema.com" target="_blank" rel="noreferrer">docs</a></td></tr><tr><td><strong>DialogMap</strong></td><td>Map of dialog generated through conversation based on dialogSchema File format for shell execution</td><td><a href="http://www.DialogMap.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.DialogMap.com" target="_blank" rel="noreferrer">docs</a></td></tr><tr><td><strong>DialogChain</strong></td><td>DialogMap files archived in blockchain, history of transactions based on blockchain</td><td><a href="http://www.DialogChain.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.DialogChain.com" target="_blank" rel="noreferrer">docs</a></td></tr></tbody></table><h3 id="api-gateway" tabindex="-1">API Gateway <a class="header-anchor" href="#api-gateway" aria-hidden="true">#</a></h3><table><thead><tr><th>Project</th><th>Description</th><th>More ...</th></tr></thead><tbody><tr><td><strong>apiContext</strong></td><td>nonFree API, convert Text To APIDSL</td><td><a href="http://apiContext.com" target="_blank" rel="noreferrer">API</a>, <a href="http://docs.apiContext.com" target="_blank" rel="noreferrer">docs</a></td></tr><tr><td><strong>deploymat</strong></td><td>nonFree API, deploy APIDSL</td><td><a href="http://www.deploymat.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.deploymat.com" target="_blank" rel="noreferrer">docs</a></td></tr></tbody></table><h3 id="saas-services" tabindex="-1">SaaS Services <a class="header-anchor" href="#saas-services" aria-hidden="true">#</a></h3><table><thead><tr><th>Project</th><th>Description</th><th>More ...</th></tr></thead><tbody><tr><td><strong>autoDeployer</strong></td><td>Free Marketplace, one APP per USER</td><td><a href="http://www.autoDeployer.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.autoDeployer.com" target="_blank" rel="noreferrer">docs</a></td></tr><tr><td><strong>TextToWeb</strong></td><td>nonFree Marketplace, deployment in browser</td><td><a href="http://www.TextToWeb.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.TextToWeb.com" target="_blank" rel="noreferrer">docs</a></td></tr><tr><td><strong>OneDay.Run</strong></td><td>nonFree deployment environment per user, deployment local with app</td><td><a href="http://www.OneDay.Run" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.OneDay.Run" target="_blank" rel="noreferrer">docs</a></td></tr><tr><td><strong>coDialog</strong></td><td>multichat app</td><td><a href="http://www.coDialog.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.coDialog.com" target="_blank" rel="noreferrer">docs</a></td></tr></tbody></table><h3 id="others" tabindex="-1">Others <a class="header-anchor" href="#others" aria-hidden="true">#</a></h3><table><thead><tr><th>Project</th><th>Description</th><th>More ...</th></tr></thead><tbody><tr><td><strong>PoLoShell</strong></td><td>AI powered shell, deploy on local system in terminal</td><td><a href="http://www.PoLoShell.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.PoLoShell.com" target="_blank" rel="noreferrer">docs</a>, <a href="http://download.PoLoShell.com" target="_blank" rel="noreferrer">download</a></td></tr><tr><td><strong>PoLoGoS</strong></td><td>AI Operating System</td><td><a href="http://www.PoLoGoS.com" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.PoLoGoS.com" target="_blank" rel="noreferrer">docs</a>, <a href="http://download.PoLoShell.com" target="_blank" rel="noreferrer">download</a></td></tr><tr><td><strong>OneDay.Run</strong></td><td>App to deployment local on pc</td><td><a href="http://www.OneDay.Run" target="_blank" rel="noreferrer">www</a>, <a href="http://docs.OneDay.Run" target="_blank" rel="noreferrer">docs</a></td></tr></tbody></table><h2 id="newsletter" tabindex="-1">NEWSLETTER <a class="header-anchor" href="#newsletter" aria-hidden="true">#</a></h2><p>Leave your email to be the first DIALOGWARE-ian \u{1F603}</p>',32),K=e("h2",{id:"our-story",tabindex:"-1"},[u("Our Story "),e("a",{class:"header-anchor",href:"#our-story","aria-hidden":"true"},"#")],-1),Q=e("p",null,"We started in 2019 as Software House with an idea to build developer tools. During the Years we have created modularized tools for frontend and backend development. Today we want to bring the software development to the next level.",-1),X=e("p",null,"Our goal is building software in minutes with humanless software development systems.",-1),Z=e("h2",{id:"our-team",tabindex:"-1"},[u("Our Team "),e("a",{class:"header-anchor",href:"#our-team","aria-hidden":"true"},"#")],-1),ee=e("p",null,"The development of DIALOGWARE is guided by an international team, some of whom have chosen to be featured below.",-1),te=e("h2",{id:"our-partners",tabindex:"-1"},[u("Our Partners "),e("a",{class:"header-anchor",href:"#our-partners","aria-hidden":"true"},"#")],-1),ae=e("p",null,"Organization they support our project",-1),re=D('<h2 id="hashtags" tabindex="-1">Hashtags <a class="header-anchor" href="#hashtags" aria-hidden="true">#</a></h2><ul><li>text2software</li><li>text2app</li><li>text2srs</li><li>text2api</li><li>domain-specific language</li></ul><h2 id="privacy" tabindex="-1">Privacy <a class="header-anchor" href="#privacy" aria-hidden="true">#</a></h2><ul><li><a href="./.html"></a></li></ul>',4),le=JSON.parse(`{"title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","description":"","frontmatter":{"layout":"docs","title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","lang":"en-US"},"headers":[{"level":2,"title":"Build any software in minutes with these simple steps","slug":"build-any-software-in-minutes-with-these-simple-steps","link":"#build-any-software-in-minutes-with-these-simple-steps","children":[]},{"level":2,"title":"How it work's?","slug":"how-it-work-s","link":"#how-it-work-s","children":[]},{"level":2,"title":"Benefits?","slug":"benefits","link":"#benefits","children":[]},{"level":2,"title":"Try it!","slug":"try-it","link":"#try-it","children":[]},{"level":2,"title":"Why DIALOGWARE?","slug":"why-dialogware","link":"#why-dialogware","children":[{"level":3,"title":"Video presentation","slug":"video-presentation","link":"#video-presentation","children":[]}]},{"level":2,"title":"Dialogware ecosystem","slug":"dialogware-ecosystem","link":"#dialogware-ecosystem","children":[{"level":3,"title":"Libraries","slug":"libraries","link":"#libraries","children":[]},{"level":3,"title":"API Gateway","slug":"api-gateway","link":"#api-gateway","children":[]},{"level":3,"title":"SaaS Services","slug":"saas-services","link":"#saas-services","children":[]},{"level":3,"title":"Others","slug":"others","link":"#others","children":[]}]},{"level":2,"title":"NEWSLETTER","slug":"newsletter","link":"#newsletter","children":[]},{"level":2,"title":"Our Story","slug":"our-story","link":"#our-story","children":[]},{"level":2,"title":"Our Team","slug":"our-team","link":"#our-team","children":[]},{"level":2,"title":"Our Partners","slug":"our-partners","link":"#our-partners","children":[]},{"level":2,"title":"Hashtags","slug":"hashtags","link":"#hashtags","children":[]},{"level":2,"title":"Privacy","slug":"privacy","link":"#privacy","children":[]}],"relativePath":"index.md"}`),oe={name:"index.md"},ne=Object.assign(oe,{setup(d){const h=[{avatar:"https://avatars.githubusercontent.com/u/5669657?s=96&v=4",name:"Tom Sapletta",title:"Creator",links:[{icon:"linkedin",link:"https://www.linkedin.com/in/tom-sapletta-com"}]},{avatar:"https://logo.dialogware.com/dialogware-logo-pivot.png",name:"Join us!",title:"Software Developer",links:[{icon:"linkedin",link:"https://www.linkedin.com/showcase/dialogware/"}]}],r=[{avatar:"https://img.dialogware.com/ionos.png",name:"Ionos",title:"Service provider",links:[{icon:"linkedin",link:"https://www.ionos.de"}]},{avatar:"https://softreck.pl/wp-content/uploads/2020/10/softreck-logo-kwadrat-biale-tlo-1024x1024.png",name:"softreck.com",title:"DevOps",links:[{icon:"linkedin",link:"https://softreck.pl"}]}];return(_,c)=>(i(),l("div",null,[Y,o(U),K,Q,X,Z,ee,o(n(x),null,{default:g(()=>[o(n(k),null,{members:g(()=>[o(n(y),{size:"small",members:h})]),_:1})]),_:1}),te,ae,o(n(x),null,{default:g(()=>[o(n(k),null,{members:g(()=>[o(n(y),{size:"small",members:r})]),_:1})]),_:1}),re]))}});export{le as __pageData,ne as default};
