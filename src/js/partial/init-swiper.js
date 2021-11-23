var swiper = new Swiper(".diet-list", {
    slidesPerView: 1,
    watchOverflow: true,
    // loop: true,

    pagination: {
        el: ".diet-list__pagination",
        clickable: true,
    },
    breakpoints: {
        767: {
            // loop: false,
            slidesPerView: 2,
        },
    }
});


var swiper = new Swiper(".food", {
    slidesPerView: 1.5,
    watchOverflow: true,
    spaceBetween: 20,

    pagination: {
        el: ".diet-list__pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            // loop: false,
            slidesPerView: 2.5,
        },
        1024: {
            // loop: false,
            slidesPerView: 4,
        },
    }
});