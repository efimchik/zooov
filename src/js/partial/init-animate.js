"use strict";

let itemsAnimate = document.querySelectorAll('.js-scroll');

let scrollAnimation = function scrollAnimation() {
    const windowPosition = window.innerHeight / 5 * 3;

    itemsAnimate.forEach(item => {
        const topBox = item.getBoundingClientRect().top;

        if(topBox < windowPosition) {
            item.classList.add('js-init-animation');
        }
    });
};

scrollAnimation();
window.addEventListener('scroll', function () {
  scrollAnimation();
});