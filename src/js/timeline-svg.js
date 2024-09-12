import { loadScript } from './load-script.js';

var svgLoads = function(){
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".timeline__rocket", {
    scrollTrigger: {
      trigger: '.timeline__rocket',
      start: "top bottom",
      scrub: 1,
      anticipatePin: true,
    },
    y: -400
  });

  gsap.to(".timeline__ai", {
    scrollTrigger: {
      trigger: '.timeline__ai',
      start: "top center",
      end: "bottom bottom",
    },
    onStart: () => {
      let animation = document.querySelector(".timeline__ai");
          animation.classList.add("animate");
    }
  });
};

loadScript('https://unpkg.com/gsap@3/dist/gsap.min.js', false);
loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js', false, svgLoads);
