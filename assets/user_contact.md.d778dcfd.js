import{k as l,o as a,c as o,a as e,b as g,t as x,l as p,v as f,m as d,_ as y,p as S,n as V}from"./app.61af216b.js";const s=r=>(S("data-v-0fdc30a5"),r=r(),V(),r),E={id:"frontmatter-title",tabindex:"-1"},I=s(()=>e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1)),N={key:0,method:"get",class:"email_form",id:"email_form"},C=s(()=>e("div",null,"Name:",-1)),U=s(()=>e("div",null,"E-mail:",-1)),$=s(()=>e("div",null,"Message:",-1)),B={key:1},D={key:2,class:"tip custom-block info_message"},M=s(()=>e("p",{class:"custom-block-title"},"Info",-1)),j=s(()=>e("p",null,[g("We got your Email! What can be the next step? Join us on "),e("a",{href:"https://www.linkedin.com/showcase/dialogware/"},"linkedin")],-1)),F=[M,j],J={key:3,class:"warning custom-block warning_message"},O=s(()=>e("p",{class:"custom-block-title"},"Error",-1)),P=s(()=>e("p",null,"Please fill the fields with min. 6 characters",-1)),T=[O,P],W={key:4,class:"warning custom-block error_message"},q=s(()=>e("p",{class:"custom-block-title"},"Error",-1)),z=s(()=>e("p",null,[g("Sending message is not possible, contact me please on "),e("a",{href:"https://www.linkedin.com/in/tom-sapletta-com"},"linkedin")],-1)),A=[q,z],L=JSON.parse('{"title":"Contact Form","description":"","frontmatter":{"layout":"doc","title":"Contact Form","lang":"en-US","tags":["configuration","theme","indexing"]},"headers":[],"relativePath":"user/contact.md"}'),G={name:"user/contact.md"},H=Object.assign(G,{setup(r){const n=l(""),i=l(""),b=l(""),c=l(""),_=l(!1),m=l(!1),k=l(!1),h=l(!0);function w(){if(c.value.length<3||i.value.length<5||n.value.length<5)_.value=!0;else{_.value=!1;var v=`https://email.dialogware.com/?name=${c.value}&message=${n.value}&email=${i.value}`;fetch(v,{method:"get"}).then(t=>t.json()).then(t=>{console.log(t),n.value=t.message,i.value=t.email,b.value=t.text,c.value=t.name,t.found>5?m.value=!0:(m.value=!1,_.value=!1,h.value=!1,k.value=!0)})}}return(v,t)=>(a(),o("div",null,[e("h1",E,[g(x(v.$frontmatter.title)+" ",1),I]),h.value?(a(),o("form",N,[e("div",null,[e("fieldset",null,[e("label",null,[C,p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>c.value=u),placeholder:"name"},null,512),[[f,c.value]])])]),e("fieldset",null,[e("label",null,[U,p(e("input",{"onUpdate:modelValue":t[1]||(t[1]=u=>i.value=u),placeholder:"@"},null,512),[[f,i.value]])])]),e("fieldset",null,[e("label",null,[$,p(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=u=>n.value=u),placeholder:"message"},null,512),[[f,n.value]])])])])])):d("",!0),h.value?(a(),o("div",B,[e("fieldset",{class:"button_send"},[e("button",{onClick:w},"Send Message")])])):d("",!0),k.value?(a(),o("div",D,F)):d("",!0),_.value?(a(),o("div",J,T)):d("",!0),m.value?(a(),o("div",W,A)):d("",!0)]))}}),Q=y(H,[["__scopeId","data-v-0fdc30a5"]]);export{L as __pageData,Q as default};
