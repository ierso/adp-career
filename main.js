import Headroom from 'headroom.js';
import filterToggle from './src/js/filterToggle';
import initSlider from './src/js/slider';
import navToggle from './src/js/navToggle';
import initHeroVideo from './src/js/heroVideo';

navToggle();
filterToggle();
initSlider();
initHeroVideo();

const myElement = document.querySelector('.c-nav');
const headroom = new Headroom(myElement);
headroom.init();
