const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function locoScrollCode(){
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
locoScrollCode();

function cursorEffect(){
    var cursor = document.querySelector("#cursor");
var page1 = document.querySelector("#page1-content");


page1.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:1,
        opacity:1,
        duration:0.2
    })
})
page1.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:0.5,
        opacity:0,
        duration:0.2
    })
})


page1.addEventListener("mousemove",(dets)=>{
    // console.log(xval);
    var xval = gsap.utils.mapRange(
        0,
        page1.offsetWidth,
        -150,
        page1.offsetWidth+150,
        dets.clientX
    )
    var yval = gsap.utils.mapRange(
        0,
        page1.offsetHeight,
        -80,
        page1.offsetHeight+80,
        dets.clientY
    )

    gsap.to("#cursor",{
        left:xval-cursor.offsetWidth/2,
        top:yval-cursor.offsetHeight/2-page1.getBoundingClientRect().top,
    })
}) 

}
cursorEffect();

function page2Anumation(){
    let tl = gsap.timeline();
    tl.from("#page2-part1 h3, #page2-part2 h1",{
        y:120,
        stagger:0.2,
        duration:1,
        opacity:0,
        borderBottom:"0px solid #fff",
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 47%",
            end:"top 30%",
            scrub:2
    }
})


}
page2Anumation();


function posterAnimation(){

    document.querySelectorAll("#part2-images div img").
    forEach((val)=>{
        val.addEventListener("mouseenter",()=>{
            gsap.to(val,{
                opacity:0,
                duration:.6
            })
        })
        val.addEventListener("mouseleave",()=>{
            gsap.to(val,{
                opacity:1,
                duration:.6
            })
        })
    })
}
posterAnimation();


function page4Animation(){

    gsap.from("#page4 div #border",{
        width:0,
        diration:3,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            scrub:2,
            start:"top 50%",
            end:"top 20%",
        }
    })
    gsap.from("#page4 div h3, #page4 h1",{
        y:150,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            // markers:true,
            scrub:2,
            start:"top 50%",
            end:"top 20%",
        }
    })
    
}
page4Animation();


function page5Animation(){
    
gsap.to("#numbers-div",{
    delay:1,
    transform:"translateY(-80%)",
    duration:1,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        start:"top 20%",
        end:"top 10%",
        scrub:2
    }
})
gsap.from("#circle h3",{
    delay:1.2,
    opacity:0,
    duration:1.5,
    stagger:2,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        start:"top 20%",
        end:"top 10%",
        scrub:5
    }
})
var p5Cursor = document.querySelector("#p5Cursor");
var page5 = document.querySelector("#page5");
page5.addEventListener("mousemove",(dets)=>{
    console.log(page5.getBoundingClientRect().top);
    gsap.to("#p5Cursor",{
        y:dets.clientY-p5Cursor.getBoundingClientRect().height/2-page5.getBoundingClientRect().top,
        x:dets.clientX-p5Cursor.getBoundingClientRect().width/2,
    })
})
page5.addEventListener("mouseenter",()=>{
    gsap.to(p5Cursor,{
        opacity:1,
        duration:.4,
        delay:1
    })
})
page5.addEventListener("mouseleave",()=>{
    gsap.to(p5Cursor,{
        opacity:0,
        duration:.4,
    })
})
}
page5Animation();


function page6Animation(){

    gsap.from("#page6 div #border2",{
        width:0,
        diration:3,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:2,
            start:"top 50%",
            end:"top 20%",
        }
    })
    gsap.from("#page6 div h3, #page6 h1",{
        y:150,
        opacity:0,
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            // markers:true,
            scrub:2,
            start:"top 50%",
            end:"top 20%",
        }
    })
    
}
page6Animation();




var loderTL = gsap.timeline();

loderTL.from("#loader h2",{
    delay:.6,
    opacity:0,
    x:50,
    duration:1,
    stagger:.2
})
loderTL.to("#loader h2",{
    opacity:0,
    x:-50,
    duration:.8,
    stagger:.2
})
loderTL.to("#loader",{
    opacity:0,
    duration:1,
})
loderTL.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:.1,
    delay:-0.5
})
loderTL.to("#loader",{
    display:"none"
})