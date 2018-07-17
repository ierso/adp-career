import $ from 'jquery';
import 'slick-carousel';

function initSlider() {
  $('.c-testimonials').not('.slick-initialized').slick({
    dots: true,
    arrows: false,
  });
}

export default initSlider;
