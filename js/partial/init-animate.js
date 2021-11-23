"use strict";

var itemsAnimate = document.querySelectorAll('.js-scroll');

var scrollAnimation = function scrollAnimation() {
  var windowPosition = window.innerHeight / 5 * 3;
  itemsAnimate.forEach(function (item) {
    var topBox = item.getBoundingClientRect().top;

    if (topBox < windowPosition) {
      item.classList.add('js-init-animation');
    }
  });
};

scrollAnimation();
window.addEventListener('scroll', function () {
  scrollAnimation();
});