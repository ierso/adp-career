import { TimelineMax } from 'gsap';

const animations = {
  navSlideAnimation: new TimelineMax({ paused: true }),
  initNavSlide(navLinks) { this.navSlideAnimation.to(navLinks, 0.5, { ease: Power2.easeOut, right: '0px', left: '20%' }); },
  playNavSlide() { this.navSlideAnimation.restart(); },
  restartNavSlide() { this.navSlideAnimation.progress(1, false); },
};

export default animations;
