// document.querySelector("#main")
// .addEventListener("mousemove", function(dets){
//     document.querySelector("#cursor").style.left = dets.x + "px";
//     document.querySelector("#cursor").style.top = dets.x + "px";
// })

var cursor = document.querySelector('#cursor');
var cursorinner = document.querySelector('#cursor2');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.querySelector(".menu2").addEventListener("click", function () {
  document.querySelector(".side-box").style.right = "0";
  document.querySelector(".menu3").style.display = "initial";
});

document.querySelector(".menu3").addEventListener("click", function () {
  document.querySelector(".side-box").style.right = "-50%";
  document.querySelector(".menu3").style.display = "none";
});

var close = document.querySelectorAll(".side-box a");
for (var i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    document.querySelector(".side-box").style.right = "-50%";
    document.querySelector(".menu3").style.display = "none";
  });
}


function home2Animation(){
  var t2 = gsap.timeline({
    scrollTrigger:{
      trigger: "#home2",
      start: "top top",
      end: "+=600px",
      pin: true,
      // markers: true,
      scrub: 1
    }
  })

  t2.to("#boxes .box1",{
    left: '-60%',
    top: "-60%",
    duration: 3,
    ease: "power0",
  },'home2')

  t2.to("#boxes .box2",{
    left: '-35%',
    top: "-55%",
    duration: 3,
    ease: "power0",
  },'home2')

  t2.to("#boxes .box3",{
    left: '-35%',
    top: "-5%",
    duration: 3,
    ease: "power0",
  },'home2')

  t2.to("#boxes .box4",{
    height: "100%",
    width: "100%",
    duration: 2,
    ease: "power0",
  },'home2')

  t2.to("#boxes .box5",{
    left: '120%',
    top: "-60%",
    duration: 3,
    ease: "power0",
  },'home2')

  t2.to("#boxes .box6",{
    right: '-60%',
    top: "-55%",
    duration: 3,
    ease: "power0",
  },'home2')

}

function home3Animation(){
  var h3 = gsap.timeline({
    scrollTrigger:{
      trigger: "#home3",
      start: "-350px",
      end: "+500px",
      scrub: 1,
      // markers: true,
    }
  })

  h3.to("#home3 .strip-one",{
    left: "120%",
    top: "-30%",
    delay: .2,
    duration: 4
  },"home3")

  h3.to("#home3 .strip-two",{
    left: "-200%",
    top: "150%",
    delay: .2,
    duration: 4
  },"home3")

  h3.to("#home3 .strip-three",{
    left: "-200%",
    top: "-55%",
    delay: .2,
    duration: 4
  },"home3")

  h3.to("#home3 .strip-four",{
    left: "-200%",
    top: "5%",
    delay: .2,
    duration: 4
  },"home3")
  
  h3.to("#home3 .strip-five",{
    left: "120%",
    top: "75%",
    delay: .2,
    duration: 4
  },"home3")

  h3.to(".home3-text h1 .c",{
    opacity: 1,
    scale: 1,
  },"home3")

  h3.to(".home3-text h1 .r",{
    opacity: 1,
    scale: 1,
    delay: .1
  },"home3")

  h3.to(".home3-text h1 .a",{
    opacity: 1,
    scale: 1,
    delay: .3
  },"home3")

  h3.to(".home3-text h1 .f",{
    opacity: 1,
    scale: 1,
    delay: .5
  },"home3")

  h3.to(".home3-text h1 .t",{
    opacity: 1,
    scale: 1,
    delay: .7
  },"home3")

  h3.to(".home3-text h1 .i",{
    opacity: 1,
    scale: 1,
    delay: .9
  },"home3")

  h3.to(".home3-text h1 .n",{
    opacity: 1,
    scale: 1,
    delay: 1.1
  },"home3")

  h3.to(".home3-text h1 .g",{
    opacity: 1,
    scale: 1,
    delay: 1.3
  },"home3")

  h3.to(".home3-text h1 .ma",{
    opacity: 1,
    scale: 1,
    delay: 1.5
  },"home3")

  h3.to(".home3-text h1 .ag",{
    opacity: 1,
    scale: 1,
    delay: 1.7
  },"home3")

  h3.to(".home3-text h1 .gi",{
    opacity: 1,
    scale: 1,
    delay: 1.9
  },"home3")

  h3.to(".home3-text h1 .ic",{
    opacity: 1,
    scale: 1,
    delay: 2.1
  },"home3")

  h3.to(".home3-text h1 .cs",{
    opacity: 1,
    scale: 1,
    delay: 2.3
  },"home3")
  
  h3.to(".home3-text h2",{
    opacity: .8,
    delay: 2.3
  },"home3")

}

function projectAnimation(){
  var p1 = gsap.timeline({
    scrollTrigger:{
      trigger: "#proj-text-area",
      start: "-600px",
      end: "-400px",
      scrub: 1,
      // stagger: 1,
      // markers: true
    }
  })

  p1.to("#proj-text-area h1 .p",{
    top: "45%",
    opacity: 1,
    duration: 1
  },"same1")

  p1.to("#proj-text-area h1 .r",{
    top: "45%",
    opacity: 1,
    duration: 1,
    delay: 1,
  },"same1")

  p1.to("#proj-text-area h1 .o",{
    top: "45%",
    opacity: 1,
    duration: 1,
    delay: 1,
  },"same1")

  p1.to("#proj-text-area h1 .j",{
    top: "45%",
    opacity: 1,
    duration: 1,
    delay: 1.5
  },"same1")

  p1.to("#proj-text-area h1 .e",{
    top: "45%",
    opacity: 1,
    duration: 1,
    delay: 1.5,
  },"same1")

  p1.to("#proj-text-area h1 .c",{
    top: "45%",
    opacity: 1,
    duration: 1,
    delay: 2,
  },"same1")

  p1.to("#proj-text-area h1 .t",{
    top: "45%",
    opacity: 1,
    duration: 1,
    delay: 2,
  },"same1")

  p1.to("#proj-text-area h1 .s",{
    top: "45%",
    opacity: 1,
    duration: 1,
    delay: 2.25,
  },"same1")

}

function projectShowCaseAnimation(){
  var b1 = gsap.timeline({
    scrollTrigger:{
      trigger: "#proj-show-case .box1",
      start: "-700px",
      end: "-350px",
      scrub: 1,
      // markers: true,
      // pin: true
    }
  })

  b1.to("#proj-show-case .box1",{
    top: "3.5%",
    scale: 1,
    duration: .5
  },"box1")

  b1.to("#proj-show-case .box1 .img-box .overlay",{
    width: "0%",
    duration: .1,
  },"box1")

  var b2 = gsap.timeline({
    scrollTrigger:{
      trigger: "#proj-show-case .box2",
      start: "-700px",
      end: "-350px",
      scrub: 1,
      // markers: true,
      // pin: true
    }
  })

  b2.to("#proj-show-case .box2",{
    top: "28%",
    scale: 1,
    duration: .5
  },"box2")

  b2.to("#proj-show-case .box2 .img-box .overlay",{
    width: "0%",
    duration: .1,
  },"box2")

  var b3 = gsap.timeline({
    scrollTrigger:{
      trigger: "#proj-show-case .box3",
      start: "-700px",
      end: "-350px",
      scrub: 1,
      // markers: true,
      // pin: true
    }
  })

  b3.to("#proj-show-case .box3",{
    top: "52.5%",
    scale: 1,
    duration: .5
  },"box3")

  b3.to("#proj-show-case .box3 .img-box .overlay",{
    width: "0%",
    duration: .1,
  },"box3")

}

function openClose(){
  
  document.querySelector("#proj-show-case .box1").addEventListener("click", function(){
    document.querySelector(".proj1-details").style.display = "initial";
    document.querySelector("#proj-details").style.display = "initial";
    document.querySelector("body").style.overflow = "hidden";
  })
  document.querySelector(".proj1-details .close span").addEventListener("click", function(){
    document.querySelector(".proj1-details").style.display = "none";
    document.querySelector("#proj-details").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  })
  
  document.querySelector("#proj-show-case .box2").addEventListener("click", function(){
    document.querySelector(".proj2-details").style.display = "initial";
    document.querySelector("#proj-details").style.display = "initial";
    document.querySelector("body").style.overflow = "hidden";
  })
  document.querySelector(".proj2-details .close span").addEventListener("click", function(){
    document.querySelector(".proj2-details").style.display = "none";
    document.querySelector("#proj-details").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  })
  
  document.querySelector("#proj-show-case .box3").addEventListener("click", function(){
    document.querySelector(".proj3-details").style.display = "initial";
    document.querySelector("#proj-details").style.display = "initial";
    document.querySelector("body").style.overflow = "hidden";
  })
  document.querySelector(".proj3-details .close span").addEventListener("click", function(){
    document.querySelector(".proj3-details").style.display = "none";
    document.querySelector("#proj-details").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  })

  document.querySelector("#proj-show-case .box4-1").addEventListener("click", function(){
    document.querySelector(".proj4-details").style.display = "initial";
    document.querySelector("#proj-details").style.display = "initial";
    document.querySelector("body").style.overflow = "hidden";
  })
  document.querySelector(".proj4-details .close span").addEventListener("click", function(){
    document.querySelector(".proj4-details").style.display = "none";
    document.querySelector("#proj-details").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  })
 
  document.querySelector("#proj-show-case .box4-2").addEventListener("click", function(){
    document.querySelector(".proj5-details").style.display = "initial";
    document.querySelector("#proj-details").style.display = "initial";
    document.querySelector("body").style.overflow = "hidden";
  })
  document.querySelector(".proj5-details .close span").addEventListener("click", function(){
    document.querySelector(".proj5-details").style.display = "none";
    document.querySelector("#proj-details").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  })
 
  document.querySelector("#proj-show-case .box4-3").addEventListener("click", function(){
    document.querySelector(".proj6-details").style.display = "initial";
    document.querySelector("#proj-details").style.display = "initial";
    document.querySelector("body").style.overflow = "hidden";
  })
  document.querySelector(".proj6-details .close span").addEventListener("click", function(){
    document.querySelector(".proj6-details").style.display = "none";
    document.querySelector("#proj-details").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  })
 
  document.querySelector("#proj-show-case .box4-4").addEventListener("click", function(){
    document.querySelector(".proj7-details").style.display = "initial";
    document.querySelector("#proj-details").style.display = "initial";
    document.querySelector("body").style.overflow = "hidden";
  })
  document.querySelector(".proj7-details .close span").addEventListener("click", function(){
    document.querySelector(".proj7-details").style.display = "none";
    document.querySelector("#proj-details").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  })
 
}


home2Animation();

home3Animation();

projectAnimation();

projectShowCaseAnimation();

openClose();