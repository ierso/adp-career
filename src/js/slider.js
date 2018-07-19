import $ from 'jquery';
import 'slick-carousel';

function initSlider() {
  const breakpointWidth = 970;
  $('.c-testimonials').not('.slick-initialized').slick({
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: breakpointWidth,
        settings: {
          arrows: false,
        },
      },
    ],
  });
}

export default initSlider;
