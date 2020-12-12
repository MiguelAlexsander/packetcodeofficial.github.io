const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text" , { y: "0%" ,
duration: 2 ,stagger: 0.5});

 tl.to(".slider",{y: "-100%",
  duration: 1.5, delay: 0.5});

  tl.to(".intro", {y: "-100%",
   duration: 1.25}, "-=1");

  
   tl.fromTo("nav",
   { opacity: 0 },{opacity: 1, duration:1 });

   tl.fromTo(".big-text",
   { opacity: 0 },{opacity: 1, duration:1 } , "-=1");

  
  
  
   tl.fromTo(".eu",
   { opacity: 0 },{opacity: 1, duration:1.57 } , "-=1");

   tl.fromTo(".HTML",
   { opacity: 0 },{opacity: 1, duration:1.57 } , "-=1");

   tl.fromTo(".JS",
   { opacity: 0 },{opacity: 1, duration:1.57 } , "-=1");

   tl.fromTo(".CSS",
   { opacity: 0 },{opacity: 1, duration:1.57 } , "-=1");

   tl.fromTo(".PHP",
   { opacity: 0 },{opacity: 1, duration:1.57 } , "-=1");

   tl.fromTo(".GSAP",
   { opacity: 0 },{opacity: 1, duration:1.57 } , "-=1");

   
   /*second section*/

   
   
   tl.fromTo(".skills",
   { opacity: 0 },{opacity: 1, duration: 0 }, "-=1" );

   tl.fromTo(".aboutme",
   { opacity: 0 },{opacity: 1, duration: 2 }, "-=1" );

   
   

   tl.fromTo(".aboutmecontent",
   { opacity: 0 },{opacity: 1, duration:2 }, "-=1" );


 /*third section*/

 tl.fromTo(".contact",
   { opacity: 0 },{opacity: 1, duration:0 } , "-=1");

   tl.fromTo(".contatos",
   { opacity: 0 },{opacity: 1, duration:2 } , "-=1");

   tl.fromTo(".email",
   { opacity: 0 },{opacity: 1, duration:2 } , "-=1");









