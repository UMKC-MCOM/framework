import { loadScript } from './load-script.js';

var loadSC = function(){
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".content-row.sc",
      start: "center center",
      end: "bottom bottom",
      scrub: 1,
      anticipatePin: true,
    }
  });
  let title = ( window.innerWidth >= 965 ? 502 : 50 );
  let car = ( window.innerWidth >= 965 ? 0 : -300 );
  tl.fromTo(".sc__title", { x: window.innerWidth, autoAlpha: 0.75 }, { x: title, duration: 2, autoAlpha: 1 });
  tl.fromTo(".sc__car", { x: window.innerWidth, autoAlpha: 0.75 }, { x: car, duration: 3, autoAlpha: 1 });
};

loadScript('https://unpkg.com/gsap@3/dist/gsap.min.js', false);
loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js', false, loadSC);
