"use strict";

//open/close mob menu on click to mob nav btn
btnMobMenu.addEventListener('click', function () {
  var positionTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  this.classList.toggle('nav-list--show');

  if (!headerBox.classList.contains('header--show')) {
    headerBox.classList.add('header--show');
  } else {
    if (positionTop == 0) {
      headerBox.classList.remove('header--show');
    }
  }
}); //close mob menu on click to outside block

document.addEventListener('click', function (event) {
  var positionTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (!btnMobMenu.contains(event.target)) {
    if (positionTop == 0 && headerBox.classList.contains('header--show')) {
      headerBox.classList.remove('header--show');
      btnMobMenu.classList.remove('nav-list--show');
    } else {
      btnMobMenu.classList.remove('nav-list--show');
    }
  }
}); //close mob menu on resize

function closeResizeMobMenu() {
  var screenWidth = document.documentElement.clientWidth;
  var positionTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (screenWidth > 767) {
    btnMobMenu.classList.remove('nav-list--show');

    if (headerBox.classList.contains('header--show') && positionTop == 0) {
      headerBox.classList.remove('header--show');
    }
  }
}

window.addEventListener('resize', function (event) {
  closeResizeMobMenu();
}, true);