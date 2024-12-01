(function(){"use strict";var e={5273:function(e,t,a){var n=a(3751),o=a(641),s=a(33);const r={id:"app"},i={class:"main-content"},l={class:"footer"};function c(e,t,a,n,c,u){const d=(0,o.g2)("nav-bar"),p=(0,o.g2)("hero-section"),h=(0,o.g2)("about-page"),v=(0,o.g2)("projects-page"),m=(0,o.g2)("contact-page");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(d,{"show-nav":c.showNav},null,8,["show-nav"]),(0,o.Lk)("main",i,[(0,o.bF)(p),(0,o.bF)(h),(0,o.bF)(v),(0,o.bF)(m)]),(0,o.Lk)("footer",l,[(0,o.Lk)("p",null,"© "+(0,s.v_)(u.currentYear)+" John Medlock. All rights reserved.",1)])])}const u={id:"about",class:"about-section"},d={class:"about-container"},p={class:"education"},h={class:"timeline-item"},v={class:"timeline-content"},m={class:"emphasis"},f={class:"date"},g={class:"skills"},k={class:"skills-grid"},y={class:"timeline"},b={class:"timeline-container"},L={class:"timeline-content"},E={class:"date"};function w(e,t,a,n,r,i){return(0,o.uX)(),(0,o.CE)("div",u,[(0,o.Lk)("div",d,[t[3]||(t[3]=(0,o.Lk)("section",{class:"intro"},[(0,o.Lk)("h1",null,"About Me"),(0,o.Lk)("div",{class:"bio"},[(0,o.Lk)("div",{class:"bio-content"},[(0,o.Lk)("p",null,"Hi, I'm John Medlock, a Computer Science student at The University of Georgia passionate about creating innovative web solutions. With expertise in modern web technologies, I focus on building scalable and user-friendly applications."),(0,o.Lk)("p",null,"My journey in tech started with a curiosity for problem-solving and has evolved into a career crafting digital experiences.")])])],-1)),(0,o.Lk)("section",p,[t[0]||(t[0]=(0,o.Lk)("h2",null,"Education",-1)),(0,o.Lk)("div",h,[(0,o.Lk)("div",v,[(0,o.Lk)("h3",null,(0,s.v_)(r.education.degree),1),(0,o.Lk)("h4",null,(0,s.v_)(r.education.school),1),(0,o.Lk)("p",m,"Emphasis: "+(0,s.v_)(r.education.emphasis),1),(0,o.Lk)("p",f,"Graduating: "+(0,s.v_)(r.education.graduation),1)])])]),(0,o.Lk)("section",g,[t[1]||(t[1]=(0,o.Lk)("h2",null,"Technical Skills",-1)),(0,o.Lk)("div",k,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.skills,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"skill-category",key:t},[(0,o.Lk)("h3",null,(0,s.v_)(e.title),1),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.items,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t},(0,s.v_)(e),1)))),128))])])))),128))])]),(0,o.Lk)("section",y,[t[2]||(t[2]=(0,o.Lk)("h2",null,"Experience",-1)),(0,o.Lk)("div",b,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.experience,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"timeline-item",key:t},[(0,o.Lk)("div",L,[(0,o.Lk)("h3",null,(0,s.v_)(e.role),1),(0,o.Lk)("h4",null,(0,s.v_)(e.company),1),(0,o.Lk)("p",E,(0,s.v_)(e.period),1),(0,o.Lk)("p",null,(0,s.v_)(e.description),1)])])))),128))])])])])}var _={name:"AboutPage",data(){return{skills:[{title:"Frontend",items:["Vue.js","React","JavaScript","HTML/CSS","TypeScript","Responsive Design"]},{title:"Backend",items:["Node.js","Spring-Boot","Java","C/C++","Python","SQL","Postgres","REST APIs"]},{title:"Tools & Others",items:["Git","MySQL","pgAdmin","Postman","R","Agile/Scrum"]}],education:{school:"University of Georgia",degree:"Bachelor of Science, Computer Science",emphasis:"Software Design",graduation:"December 2025"},experience:[{role:"Software Engineer Intern",company:"Sepia Innovations",location:"Tokyo, Japan",period:"June 2024 - July 2024",description:"Developing responsive web applications using React and modern JavaScript frameworks. Creating reusable components and optimizing application performance to enhance user experience across platforms."},{role:"IT Support Specialist",company:"The University of Georgia College of Agricultural and Environmental Sciences",period:"2024 - Present",description:"Helped faculty and staff with their daily technical needs, from software troubleshooting to hardware setup. Worked with a variety of systems and equipment, ensuring everyone has the tools they need to do their jobs effectively. My role involves everything from setting up new computers to solving complex network issues."},{role:"Undergraduate Research Assistant",company:"The University of Georgia School of Computing",period:"2024 - Present",description:"Working on exciting data prediction project using R and the Shiny framework. Helped create interactive tools that make complex data more accessible and understandable. My work involves both frontend development with React and maintaining our codebase through version control systems."}]}}},S=a(6262);const A=(0,S.A)(_,[["render",w],["__scopeId","data-v-91d0043e"]]);var I=A;const C={id:"contact",class:"contact-section"},x={class:"contact-container"},P={class:"form-group"},j={class:"form-group"},T={class:"form-group"},M={key:0,class:"success-message"},X={key:1,class:"error-message"},F=["disabled"],U={key:0,class:"loader"},J={key:1};function R(e,t,a,r,i,l){return(0,o.uX)(),(0,o.CE)("div",C,[t[14]||(t[14]=(0,o.Lk)("h1",null,"Get In Touch",-1)),(0,o.Lk)("div",x,[(0,o.Lk)("form",{class:"contact-form",onSubmit:t[9]||(t[9]=(0,n.D$)(((...e)=>l.handleSubmit&&l.handleSubmit(...e)),["prevent"]))},[(0,o.Lk)("div",P,[t[10]||(t[10]=(0,o.Lk)("label",{for:"email"},"Email",-1)),(0,o.bo)((0,o.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>i.form.email=e),required:"",class:(0,s.C4)({"portal-glow":"email"===i.focused}),onFocus:t[1]||(t[1]=e=>i.focused="email"),onBlur:t[2]||(t[2]=e=>i.focused=null)},null,34),[[n.Jo,i.form.email]])]),(0,o.Lk)("div",j,[t[11]||(t[11]=(0,o.Lk)("label",{for:"subject"},"Subject",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"subject","onUpdate:modelValue":t[3]||(t[3]=e=>i.form.subject=e),required:"",class:(0,s.C4)({"portal-glow":"subject"===i.focused}),onFocus:t[4]||(t[4]=e=>i.focused="subject"),onBlur:t[5]||(t[5]=e=>i.focused=null)},null,34),[[n.Jo,i.form.subject]])]),(0,o.Lk)("div",T,[t[12]||(t[12]=(0,o.Lk)("label",{for:"message"},"Message",-1)),(0,o.bo)((0,o.Lk)("textarea",{id:"message","onUpdate:modelValue":t[6]||(t[6]=e=>i.form.message=e),required:"",rows:"6",class:(0,s.C4)({"portal-glow":"message"===i.focused}),onFocus:t[7]||(t[7]=e=>i.focused="message"),onBlur:t[8]||(t[8]=e=>i.focused=null)},null,34),[[n.Jo,i.form.message]])]),i.success?((0,o.uX)(),(0,o.CE)("div",M," Message sent successfully! I'll get back to you soon. ")):(0,o.Q3)("",!0),i.error?((0,o.uX)(),(0,o.CE)("p",X,(0,s.v_)(i.error),1)):(0,o.Q3)("",!0),(0,o.Lk)("button",{type:"submit",class:"submit-btn",disabled:i.loading},[i.loading?((0,o.uX)(),(0,o.CE)("span",U)):((0,o.uX)(),(0,o.CE)("span",J,"Send Message"))],8,F)],32),t[13]||(t[13]=(0,o.Fv)('<div class="contact-info" data-v-1eb1e343><h2 data-v-1eb1e343>Other Ways to Connect</h2><div class="social-links" data-v-1eb1e343><a href="https://github.com/JohnMedlock" target="_blank" rel="noopener noreferrer" data-v-1eb1e343><i class="fab fa-github" data-v-1eb1e343></i> GitHub </a><a href="https://linkedin.com/in/jwmedlock" target="_blank" rel="noopener noreferrer" data-v-1eb1e343><i class="fab fa-linkedin" data-v-1eb1e343></i> LinkedIn </a></div></div>',1))])])}var V=a(676),D={name:"ContactPage",created(){const e=["VUE_APP_EMAILJS_PUBLIC_KEY","VUE_APP_EMAILJS_SERVICE_ID","VUE_APP_EMAILJS_TEMPLATE_ID","VUE_APP_RECIPIENT_EMAIL"],t=e.filter((e=>!{NODE_ENV:"production",VUE_APP_EMAILJS_PUBLIC_KEY:"t7y0wMm0R1q4o8zbu",VUE_APP_EMAILJS_SERVICE_ID:"service_u3w8pt3",VUE_APP_EMAILJS_TEMPLATE_ID:"template_a9goz66",VUE_APP_RECIPIENT_EMAIL:"jwmedlock@icloud.com",BASE_URL:"/"}[e]));if(t.length>0)return console.error("Missing required environment variables:",t),void(this.error="Contact form configuration error. Please try again later.");try{V.Ay.init("t7y0wMm0R1q4o8zbu")}catch(a){console.error("EmailJS initialization error:",a),this.error="Failed to initialize contact form. Please try again later."}},data(){return{focused:null,form:{email:"",subject:"",message:""},loading:!1,error:null,success:!1}},methods:{async handleSubmit(){if(!this.error){this.loading=!0,this.error=null,this.success=!1;try{const e=await V.Ay.send("service_u3w8pt3","template_a9goz66",{from_email:this.form.email,to_email:"jwmedlock@icloud.com",subject:this.form.subject,message:this.form.message});if(200!==e.status)throw new Error("Failed to send email");this.form.email="",this.form.subject="",this.form.message="",this.success=!0}catch(e){console.error("Email error:",e),this.error="Failed to send message. Please try again."}finally{this.loading=!1}}}}};const B=(0,S.A)(D,[["render",R],["__scopeId","data-v-1eb1e343"]]);var O=B;const N={id:"hero",class:"hero"},W={class:"typewriter"},G={class:"typed-text"};function H(e,t,a,n,r,i){return(0,o.uX)(),(0,o.CE)("div",N,[t[3]||(t[3]=(0,o.Lk)("div",{class:"particles"},null,-1)),t[4]||(t[4]=(0,o.Lk)("div",{class:"glow-orb orange"},null,-1)),t[5]||(t[5]=(0,o.Lk)("div",{class:"glow-orb blue"},null,-1)),t[6]||(t[6]=(0,o.Lk)("div",{class:"portal-rings"},null,-1)),(0,o.Lk)("div",{class:"hero-content",style:(0,s.Tr)(r.contentTransform)},[t[0]||(t[0]=(0,o.Lk)("h1",{class:"title"},"John Medlock",-1)),t[1]||(t[1]=(0,o.Lk)("h2",{class:"fade-in"},"Computer Science Student at The University of Georgia",-1)),(0,o.Lk)("p",W,[(0,o.Lk)("span",G,(0,s.v_)(r.typeValue),1),(0,o.Lk)("span",{class:(0,s.C4)(["cursor",{typing:r.typeStatus}])}," ",2)]),t[2]||(t[2]=(0,o.Fv)('<div class="social-links" data-v-26e478eb><a href="https://github.com/JohnMedlock" target="_blank" rel="noopener noreferrer" class="hover-effect" data-v-26e478eb><i class="fab fa-github" data-v-26e478eb></i></a><a href="https://linkedin.com/in/jwmedlock" target="_blank" rel="noopener noreferrer" class="hover-effect" data-v-26e478eb><i class="fab fa-linkedin" data-v-26e478eb></i></a></div>',1))],4),t[7]||(t[7]=(0,o.Lk)("div",{class:"scroll-indicator"},[(0,o.Lk)("div",{class:"mouse"},[(0,o.Lk)("div",{class:"wheel"})]),(0,o.Lk)("div",{class:"arrows"},[(0,o.Lk)("span"),(0,o.Lk)("span"),(0,o.Lk)("span")])],-1))])}a(8992),a(3949);var z={name:"HeroSection",data(){return{typeValue:"",typeStatus:!1,typeArray:["Building Digital Portals","Coding the Future","Full Stack Developer","Problem Solver","Tech Explorer","UGA Software Engineer"],typingSpeed:100,erasingSpeed:100,newTextDelay:2e3,typeArrayIndex:0,charIndex:0,contentTransform:{transform:"translate(0px, 0px) rotateX(0deg) rotateY(0deg)",transition:"all 0.3s ease"}}},mounted(){document.addEventListener("mousemove",this.handleMouseMove),this.typeText()},beforeUnmount(){document.removeEventListener("mousemove",this.handleMouseMove)},methods:{handleMouseMove(e){const t=document.querySelectorAll(".glow-orb"),a=e.clientX/window.innerWidth,n=e.clientY/window.innerHeight;t.forEach((e=>{const t=50*(a-.5),o=50*(n-.5);e.style.transform=`translate(${t}px, ${o}px)`}));const o=20*(a-.5),s=-20*(n-.5);this.contentTransform.transform=`translate(${10*a}px, ${10*n}px) rotateX(${s}deg) rotateY(${o}deg)`},async typeText(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},async eraseText(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}}};const Y=(0,S.A)(z,[["render",H],["__scopeId","data-v-26e478eb"]]);var q=Y;function K(e,t,a,n,r,i){return(0,o.uX)(),(0,o.CE)("nav",{class:(0,s.C4)(["navbar",{"navbar-visible":a.showNav}])},t[0]||(t[0]=[(0,o.Fv)('<div class="nav-brand" data-v-51f6443e>JM</div><div class="nav-links" data-v-51f6443e><a href="#hero" id="nav-home" data-v-51f6443e>Home</a><a href="#about" id="nav-about" data-v-51f6443e>About</a><a href="#projects" id="nav-projects" data-v-51f6443e>Projects</a><a href="#contact" id="nav-contact" data-v-51f6443e>Contact</a></div>',2)]),2)}var $={name:"NavBar",props:{showNav:{type:Boolean,default:!1}}};const Q=(0,S.A)($,[["render",K],["__scopeId","data-v-51f6443e"]]);var Z=Q;const ee={id:"projects",class:"projects-section"},te={class:"projects-grid"},ae={class:"project-content"},ne={class:"project-header"},oe={class:"project-links"},se=["href"],re=["href"],ie={class:"project-description"},le={key:0,class:"features-list"},ce={class:"tech-stack"};function ue(e,t,a,n,r,i){return(0,o.uX)(),(0,o.CE)("div",ee,[t[3]||(t[3]=(0,o.Lk)("h1",null,"My Projects",-1)),(0,o.Lk)("div",te,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.projects,(e=>((0,o.uX)(),(0,o.CE)("div",{class:"project-card",key:e.id},[(0,o.Lk)("div",ae,[(0,o.Lk)("div",ne,[(0,o.Lk)("h3",null,(0,s.v_)(e.title),1),(0,o.Lk)("div",oe,[(0,o.Lk)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},t[0]||(t[0]=[(0,o.Lk)("i",{class:"fab fa-github"},null,-1),(0,o.eW)(" GitHub ")]),8,se),e.demo?((0,o.uX)(),(0,o.CE)("a",{key:0,href:e.demo,target:"_blank",rel:"noopener noreferrer"},t[1]||(t[1]=[(0,o.Lk)("i",{class:"fas fa-external-link-alt"},null,-1),(0,o.eW)(" Live Demo ")]),8,re)):(0,o.Q3)("",!0)])]),(0,o.Lk)("p",ie,(0,s.v_)(e.description),1),e.features?((0,o.uX)(),(0,o.CE)("div",le,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.features,((e,a)=>((0,o.uX)(),(0,o.CE)("span",{key:a,class:"feature"},[t[2]||(t[2]=(0,o.Lk)("i",{class:"fas fa-check"},null,-1)),(0,o.eW)(" "+(0,s.v_)(e),1)])))),128))])):(0,o.Q3)("",!0),(0,o.Lk)("div",ce,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.technologies,((e,t)=>((0,o.uX)(),(0,o.CE)("span",{key:t},(0,s.v_)(e),1)))),128))])])])))),128))])])}var de={name:"ProjectsPage",data(){return{projects:[{id:1,title:"WikiType",description:"A dynamic web application that transforms Wikipedia articles into engaging typing exercises. Users can practice typing with any Wikipedia article while tracking their performance and customizing their experience.",github:"https://github.com/dylancrter/wikitype",demo:"https://wikitype.demo.com",features:["Real-time typing metrics","Progress tracking","Theme customization","Wikipedia integration","Save and resume sessions"],technologies:["React","TypeScript","Context API","SCSS","React Router"]}]}}};const pe=(0,S.A)(de,[["render",ue],["__scopeId","data-v-699a0276"]]);var he=pe,ve={name:"App",components:{NavBar:Z,HeroSection:q,AboutPage:I,ProjectsPage:he,ContactPage:O},data(){return{showNav:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const e=document.getElementById("about");if(e){const t=e.offsetTop;this.showNav=window.scrollY>=t-100}}},computed:{currentYear(){return(new Date).getFullYear()}}};const me=(0,S.A)(ve,[["render",c]]);var fe=me,ge=a(5220);const ke=[{path:"/",component:q},{path:"/about",component:I},{path:"/projects",component:he},{path:"/contact",component:O}];var ye=(0,ge.aE)({history:(0,ge.LA)(),routes:ke});const be=(0,n.Ef)(fe);be.use(ye),be.mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,s){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<r&&(r=s));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var u=l(a)}for(t&&t(n);c<r.length;c++)s=r[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(5273)}));n=a.O(n)})();
//# sourceMappingURL=app.b2e67a08ca29a4f7.js.map