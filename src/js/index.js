/* import toggle from './toggle';
import menuTabs from './tabs';
import move from './vendor/move' */

/* tabLinks, tabImages, tabs */

const tabs = [...document.querySelectorAll('div.tab')];
const tabLinks = [...document.querySelectorAll('a.menu-link')];

menuTabs(tabLinks, tabs);

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
  $('.press').slick({
    dots: false,
    arrows: false,
    pauseOnHover: false,
    speed: 500,
    autoplaySpeed: 5000,
    infinite: false,
    autoplay: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          infinite: true,
          autoplay: true,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        }
      }
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
