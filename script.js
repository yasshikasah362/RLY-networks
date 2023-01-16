function abc() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

abc();


var tl = gsap.timeline()
tl.to(".circle1", {
  duration: 1,
  y: -2,
  delay: 3,
  opacity: 1
})
  .to(".circle1 h3", {
    opacity: 1
  })
  .from(".circle1 h3", {

    duration: 2,
    y: 400,

  })
  .to(".circle1 h1", {
    opacity: 1
  })
  .from(".circle1 h1", {

    duration: 2,
    y: 400
  })
  .to(".circle1 h2", {
    opacity: 1
  })
  .from(".circle1 h2", {

    duration: 1,
    y: 400
  })

gsap.to("#nav1", {
  duration: 3,
  ease: Expo.easeInOut,
  width: "100%"
})
gsap.to("#nav2", {
  duration: 3,
  ease: Expo.easeInOut,
  width: "100%"
})
let ti = gsap.timeline()
ti.to(".ele1", {
  duration: 4,
  ease: Expo.easeInOut,
  y: -10,
  delay: 2,
  opacity: 1
})
gsap.to(".ele2", {
  duration: 4,
  ease: Expo.easeInOut,
  y: -10,
  delay: 2,
  opacity: 1
})
gsap.to("#nav2 h4", {
  duration: 4,
  ease: Expo.easeInOut,
  y: 2,
  delay: 2,
  opacity: 1
})


document.querySelectorAll(".section2_text_div")
gsap.to(".section2_text_div", {
  scrollTrigger: {
    trigger: ".section2_text_div",
    start: "top 80%",
    //  markers:true,
    scroller: "#main"
  },
  duration: 2,
  height: "50vh",
  opacity: 1,
  ease: Expo.easeInOut
})

document.querySelectorAll("#section3> h1")
gsap.to("#section3> h1", {
  scrollTrigger: {
    trigger: "#section3>h1",
    start: "top 90%",
    //  markers:true,
    scroller: "#main"
  },
  duration: 2,
  // height:"50vh",
  opacity: 1,
  ease: Expo.easeInOut
})

document.querySelectorAll("#section3> .section3_circle1")
gsap.to("#section3> .section3_circle1", {
  scrollTrigger: {
    trigger: "#section3>.section3_circle1",
    start: "top 90%",
    // markers: true,
    scroller: "#main"
  },
  duration: 2,
  height: "30vh",
  opacity: 1,
  ease: Expo.easeInOut
})

document.querySelectorAll("#section3> .section3_circle2")
gsap.to("#section3> .section3_circle2", {
  scrollTrigger: {
    trigger: "#section3>.section3_circle2",
    start: "top 60%",
    // markers: true,
    scroller: "#main"
  },
  duration: 2,
  height: "30vh",
  opacity: 1,
  ease: Expo.easeInOut
})

document.querySelectorAll("#section3> .section3_circle3")
gsap.to("#section3> .section3_circle3", {
  scrollTrigger: {
    trigger: "#section3>.section3_circle3",
    start: "top 70%",
    // markers: true,
    scroller: "#main"
  },
  duration: 2,
  height: "30vh",
  opacity: 1,
  ease: Expo.easeInOut
}) 

document.querySelectorAll("#section4> h1")
gsap.to("#section4> h1", {
  scrollTrigger: {
    trigger: "#section4>h1",
    start: "top 90%",
    // markers: true,
    scroller: "#main"
  },
  duration: 2,
  // height: "30vh",
  opacity: 1,
  ease: Expo.easeInOut
})

document.querySelectorAll("#section5> h3")
gsap.to("#section5> h3", {
  scrollTrigger: {
    trigger: "#section5>h3",
    start: "top 90%",
    // markers: true,
    scroller: "#main"
  },
  duration: 2,
  width: "160px",
  opacity: 1,
  ease: Expo.easeInOut
})

document.querySelectorAll("#section5> h1")
gsap.to("#section5> h1", {
  scrollTrigger: {
    trigger: "#section5>h1",
    start: "top 70%",
    // markers: true,
    scroller: "#main"
  },
  duration: 2,
  // width: "160px",
  opacity: 1,
  ease: Expo.easeInOut
})

document.querySelectorAll("#section5> .section5_square1")
gsap.to("#section5>.section5_square1", {
  scrollTrigger: {
    trigger: "#section5>.section5_square1",
    start: "top 70%",
    // markers: true,
    scroller: "#main"
  },
  duration: 2,
  width: "90%",
  opacity: 1,
  ease: Expo.easeInOut
})

document.querySelectorAll("#section5> .section5_square2")
gsap.to("#section5>.section5_square2", {
  scrollTrigger: {
    trigger: "#section5>.section5_square2",
    start: "top 70%",
    // markers: true,
    scroller: "#main"
  },
  duration: 2,
  width: "90%",
  opacity: 1,
  ease: Expo.easeInOut
})

document.querySelectorAll("#section5> .section5_square3")
gsap.to("#section5>.section5_square3", {
  scrollTrigger: {
    trigger: "#section5>.section5_square3",
    start: "top 70%",
    // markers: true,
    scroller: "#main"
  },
  duration: 2,
  width: "90%",
  opacity: 1,
  ease: Expo.easeInOut
})

