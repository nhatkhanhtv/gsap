gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    // x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        // markers: {
        //     startColor: "purple",
        //     endColor: "fuchsia",
        //     fontSize: "4rem",
        //     indent: 200
        // }
        markers: "true",
        toggleClass: "red",
        end: () => `+=${document.querySelector(".square").offsetHeight}`
    }
})