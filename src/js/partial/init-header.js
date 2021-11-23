//add/remove bg to header on horizontal scroll
function toggleClassOnScroll(el, pxAmount) {

    let topScroll = document.documentElement.scrollTop;

    if(topScroll > pxAmount || btnMobMenu.classList.contains('nav-list--show')) {
        el.classList.add('header--show');
    } else {
        el.classList.remove('header--show');
    }
}

window.addEventListener('scroll', function() {
    toggleClassOnScroll(headerBox, 0);
});

toggleClassOnScroll(headerBox, 0);