"use strict";

var overlay = document.querySelector('.popup__overlay');
var closePopupBtns = document.querySelectorAll('.popup__close');
var orderPopup = document.querySelector('.popup__order');
var specificationPopup = document.querySelector('.popup__specification');
var openCalcPopupLink = document.querySelectorAll('.js-calc');
var openOrderPopupLink = document.querySelector('.js-order');
var footList = document.querySelector('.food-list');

function showPopup(popupClassName) {
  var popupActive = document.querySelector(popupClassName);
  popupActive.classList.add('show');
  overlay.classList.add('show');
} //close popups click to overlay


overlay.onclick = function () {
  var popupsList = document.querySelectorAll('.popup');
  this.classList.remove('show');

  for (var i = 0; i < popupsList.length; i++) {
    var el = popupsList[i];
    el.classList.remove('show');
    el.classList.remove('popup--delay');
  }
}; //close popups click to btn close


var _loop = function _loop(i) {
  var el = closePopupBtns[i];
  el.addEventListener('click', function () {
    overlay.classList.remove('show');
    el.closest('.popup').classList.remove('show');
    el.closest('.popup').classList.remove('popup--delay');
  });
};

for (var i = 0; i < closePopupBtns.length; i++) {
  _loop(i);
} //open calculate popup


if (openCalcPopupLink.length > 0) {
  for (var _i = 0; _i < openCalcPopupLink.length; _i++) {
    var el = openCalcPopupLink[_i];
    el.addEventListener('click', function () {
      showPopup('.popup__calculation');
    });
  }
}

function insertItemTextToPopup(target) {
  var parentBox = target.closest('.food-list__item');
  var imgSrc = parentBox.querySelector('.food-list__item-img img');
  var webpSrc = parentBox.querySelector('.food-list__item-img source');
  var imgPath = imgSrc.getAttribute('src');
  var webpPath = webpSrc.getAttribute('srcset');
  var itemTitle = parentBox.querySelector('.food-list__item-title').innerText;
  var itemDesc = parentBox.querySelector('.food-list__item-desc').innerText;
  var itemContent = parentBox.querySelector('.food-list__item-content').innerText;
  var itemWeight = parentBox.querySelector('.food-list__item-diet').innerText;
  var itemCompound = parentBox.querySelector('.food-list__item-compound').innerHTML;
  var itemValue = parentBox.querySelector('.food-list__item-value').innerHTML;
  var popupImgBox = specificationPopup.querySelector('.food-list__item-img img');
  popupImgBox.setAttribute('src', imgPath);
  var popupWebpBox = specificationPopup.querySelector('.food-list__item-img source');
  popupWebpBox.setAttribute('srcset', webpPath);
  var popupItemTitle = specificationPopup.querySelector('.food-list__item-title');
  popupItemTitle.textContent = itemTitle;
  var popupItemDesc = specificationPopup.querySelector('.food-list__item-desc');
  popupItemDesc.textContent = itemDesc;
  var popupItemContent = specificationPopup.querySelector('.food-list__item-content');
  popupItemContent.textContent = itemContent;
  var popupItemWeight = specificationPopup.querySelector('.food-list__item-diet');
  popupItemWeight.textContent = itemWeight;
  var popupItemCompound = specificationPopup.querySelector('.food-list__item-compound');
  popupItemCompound.innerHTML = itemCompound;
  var popupItemValue = specificationPopup.querySelector('.food-list__item-value');
  popupItemValue.innerHTML = itemValue;
} //open diet and order popups


footList.onclick = function (event) {
  var target = event.target;

  if (target.tagName === 'IMG' || target.className === "food-list__item-title") {
    insertItemTextToPopup(target);
    showPopup('.popup__specification');
  } else if (target.className === "btn btn--white btn--order") {
    showPopup('.popup__order');
  } else {
    return;
  }
};

function insertSelect(arr) {
  // console.log(arr.length);
  var select = document.querySelector('.customSelect');
  var nativeJsSelect = document.querySelector('.nativejs-select');
  console.log(select);

  if (select) {
    select.remove();
    nativeJsSelect.remove();
  }

  var selectArea = document.querySelector('.js-select-area');
  var selectElement = document.createElement('select');
  selectElement.classList.add('customSelect');

  for (var _i2 = 0; _i2 < arr.length; _i2++) {
    var option = document.createElement('option');
    option.text = option.value = arr[_i2];
    selectElement.appendChild(option, 0);
  }

  selectArea.appendChild(selectElement);
} //show order popup from diet popup


openOrderPopupLink.addEventListener('click', function (event) {
  var target = event.target;
  console.log(target);
  var parentBox = target.closest('.food-list__item-text');
  var itemWeight = parentBox.querySelector('.food-list__item-diet').innerText.replace(/\s/g, "");
  var weightArr = itemWeight.split('/'); // weightArr = weightArr.replace( /\s/g, "");
  // let parentBox = target.closest('.food-list__item');
  // let weight = this.previousSibling.innerText;

  insertSelect(weightArr);
  new NativejsSelect({
    selector: '.customSelect'
  });
  this.closest('.popup').classList.remove('show');
  orderPopup.classList.add('show');
  orderPopup.classList.add('popup--delay');
});