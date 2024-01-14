var tl = gsap.timeline();

tl.from("nav,  #nav-part2 img", {
    x:-1980,
    opacity:0,
    delay:.6,
    duration:0.4
})
tl.from("#logo", {
    y:-100,
    opacity:0,
    duration:.4,
})
tl.from("#nav-part2 h1, #nav-part2 button", {
    y:-100,
    opacity:0,
    duration:.4,
    stagger:0.1
})
tl.from("#left h1, #left p", {
    x:-800,
    duration:0.5,
    stagger:0.3
})
tl.from("#left button", {
    y:20,
    opacity:0,
    duration:.4
})
tl.from("#right img", {
    y:30,
    opacity:0,
    // scale:0,
    duration:0.4
})



var flag = 0;
var nav = document.querySelector("nav");
var mobileNav = document.querySelector("#nav-mobile");

document.querySelector("#nav-part2 img").addEventListener("click", ()=>{
    
    var navTl = gsap.timeline();

    if(flag == 0){
        navTl.to("#nav-mobile",{
            y:0,
        })
        flag = 1
        navTl.from("#nav-mobile h1", {
            x:-100,
            opacity:0,
            duration:0.2,
            stagger:0.1
        })
    }
    else{
        gsap.to("#nav-mobile",{
            transform:"translateY(-120%)"
        })
        flag = 0
    }
})