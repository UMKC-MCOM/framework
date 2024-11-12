// Get the heroVideo
const heroVideo = document.querySelector("#hero-video") !== null ? document.querySelector("#hero-video") : false;
// Get the sources for the video
if ( heroVideo ) {
  var sources   = heroVideo.querySelectorAll("source");
}
// If there is a video, run the code!
if ( heroVideo && sources.length > 0 ){
  if ( !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    [...sources].forEach((video) => {
      video.setAttribute('src', video.dataset.src);
    })
    document.querySelector(".hero__buttons").classList.add("hero__buttons--visible");
    heroVideo.load();
  }
}
// Code for the video controls (play/pause)
const videoButton = document.querySelectorAll("[data-video]") > 0 ? document.querySelectorAll("[data-video") : false ;
if ( videoButton ) {
  [...videoButton].forEach((button) => {
    button.addEventListener('click', function(e){
      e.preventDefault();
      let video = document.querySelector(button.dataset.video);
      let icons = document.querySelectorAll(".hero__video--toggle .hero__icon");
      let srO = document.querySelector(".hero__video--toggle .sr-only");
      if ( video.paused ){
        video.play();
        srO.innerText = "Pause Video";
      } else {
        video.pause();
        srO.innerText = "Play Video";
      }
      [...icons].forEach((icon) => {
        icon.classList.toggle("hero__icon--active");
      })
    });
  });
}

// Code for overlayed videos within the HTML code.
// Only works with the "SHARE" links from YouTube (e.g. youtu.be/[link_id])
const vo = document.createElement("div");
      vo.setAttribute("id", "video-overlay");
const vb = document.createElement("button");
      vb.classList.add("o-btn");
      vb.classList.add("video__close");
      vb.setAttribute("id", "close-video-overlay");
      vb.setAttribute("aria-label", "Close Video Overlay")
      vb.innerHTML = `<svg class="icon menu__icon"><use xlink:href="#close"></use></svg>`;
vo.appendChild(vb);
const vw = document.createElement("div");
      vw.classList.add("video");
const voc = document.createElement("div");
      voc.classList.add("embed-container");
      voc.innerHTML = `<div class="video-embed" id="player"><iframe frameborder="0" src="" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>`;
      vw.appendChild(voc);
      vo.appendChild(vw);
      document.body.appendChild(vo);
// Searches the page for any youtu.be links
const videoLinks = document.querySelectorAll(`a[href*="youtu.be"]`);
if ( videoLinks !== null ) {
  [...videoLinks].forEach((videoLink) => {
    videoLink.addEventListener('click', function(e) {
      e.preventDefault();
      vo.classList.add("is-visible--flex");
      let video = e.target.getAttribute("href");
      let iframe = document.querySelector("#player iframe");
      iframe.setAttribute("src", "//www.youtube.com/embed/"+getId(video));
    })
  });
}
// Click Event for using the video overlay to close
vo.addEventListener("click", function(e) {
  e.preventDefault();
  vo.classList.remove("is-visible--flex");
  let iframe = document.querySelector("#player iframe");
  iframe.setAttribute("src", "");
});
// Click Event for using the close button
vb.addEventListener("click", function(e) {
  e.preventDefault();
  vo.classList.remove("is-visible--flex");
  let iframe = document.querySelector("#player iframe");
  iframe.setAttribute("src", "");
});

// Snags the ID from the youtu.be URL.
function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? match[2]
      : null;
}
