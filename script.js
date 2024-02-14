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

var t3 = gsap.timeline({
  scrollTrigger:{
    trigger: "#home",
    start: "top",
    end: "6600px",
    scrub: 1,
  }
})

t3.to("#circle",{
  rotation: "360deg",
  ease: "power1"
})

var t4 = gsap.timeline({
  scrollTrigger:{
    trigger: "#home",
    start: "+500px",
    end: "bottom",
    scrub: 1,
  }
})

t4.to(".upper-box .box",{
  backgroundColor: "rgb(63, 59, 55)",
})


function homeAnimation(){
  
  var t1 = gsap.timeline();

    t1.from(".cen-text h1 .am",{
        rotationZ: "90deg",
        rotationX: "90deg",
        left: "15%",
        top: "-15%",
        scale: 3,
        opacity: 0,
        duration: 2.5,
        ease: "power1",
      },"home");

    t1.from(".cen-text h1 .mi",{
        rotationX: "90deg",
        rotationY: "90deg",
        rotationZ: "45deg",
        top: "-15%",
        scale: 3,
        opacity: 0,
        duration: 2.5,
        ease: "power1",
      },"home");

    t1.from(".cen-text h1 .it",{
        rotationX: "90deg",
        rotationY: "90deg",
        scale: 3,
        opacity: 0,
        duration: 2.5,
        ease: "power1",
      },"home");

    t1.from(".cen-text h1 .ta",{
        rotationZ: "-90deg",
        rotationY: "-90deg",
        right: "15%",
        scale: 3,
        opacity: 0,
        duration: 2.5,
        ease: "power1",
      },"home");

    t1.from(".cen-text h1 .ma",{
        rotation: 200,
        left: "-1%",
        top: "80%",
        scale: 3,
        opacity: 0,
        duration: 2.5,
        ease: "power1",
      },"home");

    t1.from(".cen-text h1 .ar",{
      rotationZ: "-120deg",
      rotationY: "-120deg",
      left: '30%',
      top: '70%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h1 .ra",{
      rotation: 230,
      top: '90%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h1 .at",{
      rotationZ: "145deg",
      rotationX: "145deg",
      top: '70%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h1 .th",{
      rotationZ: "180deg",
      rotationX: "180deg",
      left: '70%',
      top: '70%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");
    
    t1.from(".cen-text h1 .he",{
      rotationY: "360deg",
      left: '80%',
      top: '10%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");
    
    t1.from(".cen-text h1 .em",{
      rotationZ: "180deg",
      rotationX: "180deg",
      rotationY: "180deg",
      left: '80%',
      top: '80%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

// =================================== frontend ============================================================== 

    t1.from(".cen-text h3 .f",{
      rotationZ: "180deg",
      rotationX: "180deg",
      left: '55%',
      top: '100%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .r",{
      rotationY: "180deg",
      rotationX: "180deg",
      left: '50%',
      top: '70%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .o",{
      rotationY: "180deg",
      rotationZ: "180deg",
      left: '55%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .n",{
      rotationY: "90deg",
      rotationZ: "90deg",
      rotationX: "-90deg",
      left: '50%',
      top: "100%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .t",{
      rotationY: "-90deg",
      rotationZ: "90deg",
      rotationX: "-90deg",
      left: '65%',
      top: "70%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .e",{
      rotationY: "-90deg",
      rotationZ: "-90deg",
      rotationX: "-90deg",
      left: '65%',
      top: "95%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");
    
    t1.from(".cen-text h3 .end",{
      rotationY: "-45deg",
      rotationZ: "-45deg",
      rotationX: "-45deg",
      top: "90%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");
    
    t1.from(".cen-text h3 .d",{
      rotationY: "-90deg",
      rotationZ: "-90deg",
      rotationX: "-90deg",
      left: '70%',
      top: "65%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

// ====================================== developer =========================================================== 
    
    t1.from(".cen-text h3 .deve",{
      rotationZ: "180deg",
      rotationX: "180deg",
      left: '75%',
      top: '100%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .ev",{
      rotationY: "180deg",
      rotationX: "180deg",
      left: '70%',
      top: '70%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .ve",{
      rotationY: "180deg",
      rotationZ: "180deg",
      left: '70%',
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .el",{
      rotationY: "90deg",
      rotationZ: "90deg",
      rotationX: "-90deg",
      left: '70%',
      top: "100%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .lo",{
      rotationY: "-90deg",
      rotationZ: "90deg",
      rotationX: "-90deg",
      left: '75%',
      top: "70%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .op",{
      rotationY: "180deg",
      rotationZ: "180deg",
      left: "80%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");
    
    t1.from(".cen-text h3 .pe",{
      rotationY: "-45deg",
      rotationZ: "-45deg",
      rotationX: "-45deg",
      top: "90%",
      left: "88%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");
    
    t1.from(".cen-text h3 .er",{
      rotationY: "-90deg",
      rotationZ: "-90deg",
      rotationX: "-90deg",
      left: '90%',
      top: "75%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

    t1.from(".cen-text h3 .rd",{
      rotationY: "180deg",
      rotationZ: "180deg",
      left: "90%",
      scale: 3,
      opacity: 0,
      duration: 2.5,
      ease: "power1",
    },"home");

// ==================================================================================================================== 

    var t2 = gsap.timeline({
      scrollTrigger:{
        trigger: "#home",
        start: "+=50px",
        end: "+=2000px",
        scrub: 1,
      }
    })
    
    t2.to(".cen-text h1 .am, .mi, .it, .ta",{
      x: '-1000',
      duration: 3,
    },"home")
    
    t2.to(".cen-text h1 .ma, .ar, .ra, .at, .th, .he, .em",{
      x: '1000',
      duration: 3,
    },"home")
    
    t2.to(".cen-text h3 .f",{
      y: '-200',
    },"home")
    
    t2.to(".cen-text h3 .r",{
      y: '-200',
      delay: .02
    },"home")
    
    t2.to(".cen-text h3 .o",{
      y: '-200',
      delay: .04
    },"home")
    
    t2.to(".cen-text h3 .n",{
      y: '-200',
      delay: .06
    },"home")
    
    t2.to(".cen-text h3 .t",{
      y: '-200',
      delay: .08
    },"home")
    
    t2.to(".cen-text h3 .e",{
      y: '-200',
      delay: .1
    },"home")
    
    t2.to(".cen-text h3 .end",{
      y: '-200',
      delay: .12
    },"home")
    
    t2.to(".cen-text h3 .d",{
      y: '-200',
      delay: .14
    },"home")
    
    t2.to(".cen-text h3 .deve",{
      y: '-200',
      delay: .17
    },"home")
    
    t2.to(".cen-text h3 .ev",{
      y: '-200',
      delay: .19
    },"home")
    
    t2.to(".cen-text h3 .ve",{
      y: '-200',
      delay: .21
    },"home")
    
    t2.to(".cen-text h3 .el",{
      y: '-200',
      delay: .23
    },"home")
    
    t2.to(".cen-text h3 .lo",{
      y: '-200',
      delay: .25
    },"home")
    
    t2.to(".cen-text h3 .op",{
      y: '-200',
      delay: .27
    },"home")
    
    t2.to(".cen-text h3 .pe",{
      y: '-200',
      delay: .29
    },"home")
    
    t2.to(".cen-text h3 .er",{
      y: '-200',
      delay: .31
    },"home")
    
    t2.to(".cen-text h3 .rd",{
      y: '-200',
      delay: .33
    },"home")
     
}

function home2Animation(){
  var h2 = gsap.timeline({
    scrollTrigger:{
      trigger: "#home2",
      start: "top top",
      end: "+=600px",
      pin: true,
      // markers: true,
      scrub: 1
    }
  })

  h2.to("#boxes .box1",{
    left: '-60%',
    top: "-60%",
    duration: 3,
    ease: "power0",
  },'home2')

  h2.to("#boxes .box2",{
    left: '-35%',
    top: "-55%",
    duration: 3,
    ease: "power0",
  },'home2')

  h2.to("#boxes .box3",{
    left: '-35%',
    top: "-5%",
    duration: 3,
    ease: "power0",
  },'home2')

  h2.to("#boxes .box4",{
    height: "90%",
    width: "90%",
    duration: 2,
    ease: "power0",
  },'home2')

  h2.to("#boxes .box5",{
    left: '120%',
    top: "-60%",
    duration: 3,
    ease: "power0",
  },'home2')

  h2.to("#boxes .box6",{
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
      start: "-600px",
      end: "+500px",
      scrub: 1,
      // markers: true,
    }
  })

  h3.to("#home3 .strip-one",{
    left: "120%",
    top: "-30%",
    delay: .7,
    duration: 4
  },"home3")

  h3.to("#home3 .strip-two",{
    left: "-200%",
    top: "150%",
    delay: .7,
    duration: 4
  },"home3")

  h3.to("#home3 .strip-three",{
    left: "-200%",
    top: "-55%",
    delay: .7,
    duration: 4
  },"home3")

  h3.to("#home3 .strip-four",{
    left: "-200%",
    top: "5%",
    delay: .7,
    duration: 4
  },"home3")
  
  h3.to("#home3 .strip-five",{
    left: "120%",
    top: "75%",
    delay: .7,
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
    delay: 2.2
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

function projectShowCase(){
  
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

homeAnimation();

home2Animation();

home3Animation();

projectAnimation();

projectShowCaseAnimation();

projectShowCase();

/* =============================================== Media-Querry ===================================================================== */

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector(".menu3").addEventListener("click", function(){
      document.querySelector(".side-box").style.right = "-100%";
      document.querySelector(".menu2").style.display = "initial";
    })
  } else {
    console.error(error);
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 480px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});
