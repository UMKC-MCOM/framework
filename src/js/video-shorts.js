const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const video_shorts = document.querySelectorAll('.video-shorts__embed[data-src]') !== null ? document.querySelectorAll('.video-shorts__embed[data-src]') : null;
const video_shorts_btns = document.querySelectorAll('.video-shorts__button') !== null ? document.querySelectorAll('.video-shorts__button') : null;

if ( video_shorts !== null && video_shorts_btns !== null ) {
  video_shorts_btns.forEach(function(item, idx) {
     item.addEventListener('click', function(e){
       e.preventDefault();
       e.target.classList.add("video-shorts__button--hidden");
       let parent = e.target.parentNode;
       let video = parent.querySelector(`.video-shorts__embed`);
       let vid = video.getAttribute('id');
       // Show the video
       video.classList.add("video-shorts__embed--visible");
       showVideo(YT.get(vid));
     });
  });
}
function createVideos(video_shorts) {
  window.onYouTubeIframeAPIReady = function(){
    video_shorts.forEach(function(item) {
      let parent = item.parentNode;
      let vi = item.dataset.src;
      let vs = parent.querySelector(`[data-src='${vi}']`);

      let player = new YT.Player(vs, {
        height: '432',
        width: '352',
        videoId: vi,
        playerVars: {
          'rel': 0,
          'color': 'white',
          'controls' : 1
        },
        events: {
          'onStateChange': onStateChange,
        }
      });
    });
  }
}

function showVideo(video) {
  video.playVideo();
}

function onStateChange(event) {
  if ( event.data == YT.PlayerState.ENDED ){
    let parent = event.target.g.parentNode;
    let button = parent.querySelector(".video-shorts__button");
    button.classList.remove("video-shorts__button--hidden");
    event.target.g.classList.remove("video-shorts__embed--visible");
  }
}

if ( video_shorts !== null && video_shorts_btns !== null ) {
  video_shorts_btns.forEach(function(item, idx) {
     item.addEventListener('click', function(e){
       e.preventDefault();
       e.target.classList.add("video-shorts__button--hidden");
       let parent = e.target.parentNode;
       let video = parent.querySelector(`.video-shorts__embed`);
       let vid = video.getAttribute('id');
       // Show the video
       video.classList.add("video-shorts__embed--visible");
       showVideo(YT.get(vid));
     });
  });

  createVideos(video_shorts);
}
