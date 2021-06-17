gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    // x: 700,
    duration: 8,
    scrollTrigger: {

        trigger: ".square2",
        start: "top 80%",
        end: () => `+=${document.querySelector(".square").offsetHeight}`,
        // end: "top 30%",
        scrub: 4,
        pin: ".square",
        pinSpacing: true,
        toggleActions: "restart none none none",
        //              onEnter onLeave OnEnterBack OnLeaveBack       
        // markers: {
        //     startColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "4rem",
        //     indent: 200
        // }
        markers: "true",
        // toggleClass: "red",
    }
})