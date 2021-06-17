gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
        // pin: ".panel1",
        // pinSpacing: true
    }
});
tl.to(".box", { x: 500, duration: 5 }).to(".box", { duration: 3, y: 200 }).to(".box", { duration: 4, x: 0 })