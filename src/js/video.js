// Get the heroVideo
const heroVideo = document.querySelector("#hero-video");
// Get the sources for the video
if ( heroVideo !== null) {
  const sources   = heroVideo.querySelectorAll("source");
}
// If there is a video, run the code!
if ( heroVideo && sources.length != 0 ){
  if ( !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    [...sources].forEach((video) => {
      video.setAttribute('src', video.dataset.src);
    })
    document.querySelector(".hero__buttons").classList.add("hero__buttons--visible");
    heroVideo.load();
  }
}
// Code for the video controls (play/pause)
const videoButton = document.querySelectorAll("[data-video]");
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
