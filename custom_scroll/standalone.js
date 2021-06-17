gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".box",
    start: "top 80%",
    end: "top 50%",
    markers: true,
    toggleClass: "box-red",
    // onEnter: () => console.log("enter!"),
    // onLeave: () => console.log("Leave!"),
    // onEnterBack: () => console.log("Enter back!"),
    // onLeaveBack: () => console.log("Leave back!"),
    onUpdate: (self) => console.log(self)
})

// ScrollTrigger.create({
//     start: "top 6%",
//     trigger: ".panel",
//     toggleClass: {
//         targets: "nav",
//         className: "nav-active"
//     },
//     markers: true
// })