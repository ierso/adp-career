import ScrollReveal from 'scrollreveal';

const slideIn = {
  settings_01: {
    distance: '200px',
    duration: 800,
    viewFactor: 0.35,
    origin: 'top',
  },
  settings_02: {
    distance: '200px',
    duration: 800,
    viewFactor: 0.35,
    origin: 'bottom',
  },
  initSlide() {
    window.sr = ScrollReveal({ reset: true });
    window.sr.reveal('.c-cards__card--mission', this.settings_01);
    window.sr.reveal('.c-cards__card--vision', this.settings_02);
  },
};

export default slideIn;
