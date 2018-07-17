import $ from 'jquery';
import 'slick-carousel';

function initSlider() {
  $('.c-testimonials').slick({
    dots: true,
    arrows: false,
  });
}

export default initSlider;
