import Headroom from 'headroom.js';
import filterToggle from './src/js/filterToggle';
import initSlider from './src/js/slider';
import navToggle from './src/js/navToggle';

navToggle();
filterToggle();
initSlider();


const myElement = document.querySelector('.c-nav');
const headroom = new Headroom(myElement);
headroom.init();