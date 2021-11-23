let accardionList = document.querySelectorAll('.section-full__faq-item');

accardionList.forEach(function(el) {
    el.addEventListener('click', function() {
        for(let i = 0; i < accardionList.length; i++) {
            accardionList[i].classList.remove('section-full__faq-item--show');
            this.classList.add('section-full__faq-item--show');
        }
    });
});