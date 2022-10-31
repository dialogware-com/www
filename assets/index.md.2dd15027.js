import{_ as A,r as a,o as i,c as r,a as e,j as y,v as x,k as m,p as W,i as I,b as d,e as n,w,u,d as P,g as E,f as T,h as S}from"./app.ec4312dd.js";const o=c=>(W("data-v-93a5d898"),c=c(),I(),c),V={class:"newsletter"},N={key:0,method:"get",class:"email_form",id:"email_form"},D=o(()=>e("div",null,"Name:",-1)),L=o(()=>e("div",null,"E-mail:",-1)),R={key:1},$={key:2,class:"tip custom-block info_message"},j=o(()=>e("p",{class:"custom-block-title"},"Info",-1)),G=o(()=>e("p",null,[d("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),M=[j,G],z={key:3,class:"warning custom-block warning_message"},C=o(()=>e("p",{class:"custom-block-title"},"Error",-1)),B=o(()=>e("p",null,"Please fill the fields with min. 6 characters",-1)),q=[C,B],H={key:4,class:"warning custom-block error_message"},J=o(()=>e("p",{class:"custom-block-title"},"Error",-1)),U=o(()=>e("p",null,[d("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),Y=[J,U],F={__name:"Newsletter",setup(c){const h=a(""),s=a(""),v=a(""),l=a(""),p=a(!1),_=a(!1),k=a(!1),f=a(!0);function O(){if(h.value="Thank You "+l.value+" for a registration on DIALOGWARE NEWSLETTER.",_.value=!1,p.value=!1,l.value.length<2||s.value.length<4||h.value.length<4)p.value=!0;else{p.value=!1;var b=`https://email.dialogware.com/?type=NEWSLETTER&name=${l.value}&message=${h.value}&email=${s.value}`;fetch(b,{method:"get"}).then(t=>t.json()).then(t=>{s.value=t.email,v.value=t.text,l.value=t.name,t.found>5?_.value=!0:(_.value=!1,p.value=!1,f.value=!1,k.value=!0)})}}return(b,t)=>(i(),r("div",V,[f.value?(i(),r("form",N,[e("div",null,[e("fieldset",null,[e("label",null,[D,y(e("input",{"onUpdate:modelValue":t[0]||(t[0]=g=>l.value=g),placeholder:"name"},null,512),[[x,l.value]])])]),e("fieldset",null,[e("label",null,[L,y(e("input",{"onUpdate:modelValue":t[1]||(t[1]=g=>s.value=g),placeholder:"@"},null,512),[[x,s.value]])])])])])):m("",!0),f.value?(i(),r("div",R,[e("fieldset",{class:"button_send"},[e("p",null,[e("button",{onClick:O},"get updates about project")])])])):m("",!0),k.value?(i(),r("div",$,M)):m("",!0),p.value?(i(),r("div",z,q)):m("",!0),_.value?(i(),r("div",H,Y)):m("",!0)]))}},K=A(F,[["__scopeId","data-v-93a5d898"]]),Q=P('<h1 id="dialogware" tabindex="-1"><a href="http://www.dialogware.com/" target="_blank" rel="noreferrer">DIALOGWARE</a> <a class="header-anchor" href="#dialogware" aria-hidden="true">#</a></h1><p>Build any software in a few minutes with that simple steps:</p><ul><li>catch the Idea</li><li>write description</li><li>deploy with a click</li><li>use your app online</li></ul><p>We provide a platform <a href="https://www.text2software.com/" target="_blank" rel="noreferrer">#text2software</a> to prepare your first MVP application in a minutes.</p><p><a href="http://www.dialogware.com/" target="_blank" rel="noreferrer"><img src="http://logo.dialogware.com/dialogware-2lines.png" alt="DIALOGWARE"></a></p><p>After you answer on our questions with few sentences of your expectation, we will deploy your first MVP version of web/mobile application. It&#39;s much cheaper and easy way than no-code or low-code solutions.</p><p>With such automatization, you can save more time and money than with another solutions such #lowcode or #nocode. We &quot;twitterize&quot; the software development and will build any software just with the (con)text (specification, documentation).</p><p>Please find more details in <a href="http://docs.dialogware.com/" target="_blank" rel="noreferrer">Documentation</a></p><p>We are on <a href="https://pioneer.app/join/dialogware.com" target="_blank" rel="noreferrer">Pioneer</a></p><h2 id="newsletter" tabindex="-1">NEWSLETTER <a class="header-anchor" href="#newsletter" aria-hidden="true">#</a></h2><p>Leave your email to be the first DIALOGWARE-ian \u{1F603}</p>',11),X=e("h2",{id:"our-story",tabindex:"-1"},[d("Our Story "),e("a",{class:"header-anchor",href:"#our-story","aria-hidden":"true"},"#")],-1),Z=e("p",null,"We started in 2019 as Software House with an idea to build developer tools. During the Years we have created modularized tools for frontend and backend development. Today we want to bring the software development to the next level.",-1),ee=e("p",null,"Our goal is building software in minutes with humanless software development systems.",-1),te=e("h2",{id:"our-team",tabindex:"-1"},[d("Our Team "),e("a",{class:"header-anchor",href:"#our-team","aria-hidden":"true"},"#")],-1),ae=e("p",null,"The development of DIALOGWARE is guided by an international team, some of whom have chosen to be featured below.",-1),oe=e("h2",{id:"our-partners",tabindex:"-1"},[d("Our Partners "),e("a",{class:"header-anchor",href:"#our-partners","aria-hidden":"true"},"#")],-1),se=e("p",null,"Organization they support our project",-1),le=e("h2",{id:"our-hashtags",tabindex:"-1"},[d("Our Hashtags "),e("a",{class:"header-anchor",href:"#our-hashtags","aria-hidden":"true"},"#")],-1),ne=e("ul",null,[e("li",null,"text2software"),e("li",null,"text2app"),e("li",null,"text2srs"),e("li",null,"text2api"),e("li",null,"domain-specific language")],-1),ue=JSON.parse('{"title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","description":"","frontmatter":{"layout":"docs","title":"DIALOGWARE is a text2software platform, build any app MVP in minutes","lang":"en-US"},"headers":[{"level":2,"title":"NEWSLETTER","slug":"newsletter","link":"#newsletter","children":[]},{"level":2,"title":"Our Story","slug":"our-story","link":"#our-story","children":[]},{"level":2,"title":"Our Team","slug":"our-team","link":"#our-team","children":[]},{"level":2,"title":"Our Partners","slug":"our-partners","link":"#our-partners","children":[]},{"level":2,"title":"Our Hashtags","slug":"our-hashtags","link":"#our-hashtags","children":[]}],"relativePath":"index.md"}'),ie={name:"index.md"},de=Object.assign(ie,{setup(c){const h=[{avatar:"https://avatars.githubusercontent.com/u/5669657?s=96&v=4",name:"Tom Sapletta",title:"Creator",links:[{icon:"linkedin",link:"https://www.linkedin.com/in/tom-sapletta-com"}]},{avatar:"https://logo.dialogware.com/dialogware-logo-pivot.png",name:"Join us!",title:"Software Developer",links:[{icon:"linkedin",link:"https://www.linkedin.com/showcase/dialogware/"}]}],s=[{avatar:"/assets/ionos.png",name:"Ionos",title:"Service provider",links:[{icon:"linkedin",link:"https://www.ionos.de"}]},{avatar:"https://softreck.pl/wp-content/uploads/2020/10/softreck-logo-kwadrat-biale-tlo-1024x1024.png",name:"softreck.com",title:"DevOps",links:[{icon:"linkedin",link:"https://softreck.pl"}]}];return(v,l)=>(i(),r("div",null,[Q,n(K),X,Z,ee,te,ae,n(u(S),null,{default:w(()=>[n(u(E),null,{members:w(()=>[n(u(T),{size:"small",members:h})]),_:1})]),_:1}),oe,se,n(u(S),null,{default:w(()=>[n(u(E),null,{members:w(()=>[n(u(T),{size:"small",members:s})]),_:1})]),_:1}),le,ne]))}});export{ue as __pageData,de as default};
