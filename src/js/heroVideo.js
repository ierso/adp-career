import YouTubePlayer from 'youtube-player';

const player1 = YouTubePlayer('c-video__iframe', {
  videoId: 'XEfDYMngJeE',
});

function initHeroVideo() {
  const playBtn = document.querySelector('.c-hero__play');
  const hero = document.querySelector('.c-hero');
  const video = document.querySelector('.c-video');

  function playVideo(event) {
    event.preventDefault();
    hero.classList.add('c-hero--hide');
    video.classList.add('c-video--show');
    player1.playVideo();
  }
  playBtn.addEventListener('click', playVideo);
}

export default initHeroVideo;
