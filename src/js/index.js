/* import toggle from './toggle';
import menuTabs from './tabs';
import move from './vendor/move' */

/* tabLinks, tabImages, tabs */


$(document).ready(function () {
  $('.banner-sliders').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    speed: 500,
    autoplaySpeed: 5000,
    dotsClass: 'slider-dots'
  });
});

$(document).ready(function () {
  $('.program-slider').slick({
    dots: true,
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a>' + (i+1) + '</a>';
    },
    arrows: false,
    infinite: true,
    autoplay: false,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    speed: 500,
    autoplaySpeed: 5000,
    dotsClass: 'program-dots'
  });
});
