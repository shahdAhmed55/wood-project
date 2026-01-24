document.addEventListener("DOMContentLoaded", (event) => {
  // gsap.registerPlugin(ScrollTrigger);
  gsap.from(".title", {
    x: 100,
  });
  gsap.from("nav", {
    y: -100,
  });
  gsap.from(".box", {
    scale: 0,
  });

 
});
