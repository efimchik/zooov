let overlay = document.querySelector('.popup__overlay');
let closePopupBtns = document.querySelectorAll('.popup__close');
let orderPopup = document.querySelector('.popup__order');
let specificationPopup = document.querySelector('.popup__specification');

let openCalcPopupLink = document.querySelectorAll('.js-calc');
let openOrderPopupLink = document.querySelector('.js-order');
let footList = document.querySelector('.food-list');

function showPopup(popupClassName) {
    let popupActive = document.querySelector(popupClassName);

    popupActive.classList.add('show');
    overlay.classList.add('show');
}


//close popups click to overlay
overlay.onclick = function() {
    let popupsList = document.querySelectorAll('.popup');

    this.classList.remove('show');

    for(let i = 0; i < popupsList.length; i++) {
        let el = popupsList[i];
        el.classList.remove('show');
        el.classList.remove('popup--delay');
    }
}


//close popups click to btn close
for(let i = 0; i < closePopupBtns.length; i++) {
    let el = closePopupBtns[i];
    el.addEventListener('click', function() {

        overlay.classList.remove('show');
        el.closest('.popup').classList.remove('show');
        el.closest('.popup').classList.remove('popup--delay');
    });
}



//open calculate popup
if(openCalcPopupLink.length > 0) {
    for(let i = 0; i < openCalcPopupLink.length; i++) {
        let el = openCalcPopupLink[i];
        el.addEventListener('click', function() {
            showPopup('.popup__calculation');
        });
    }
}


function insertItemTextToPopup(target) {
    let parentBox = target.closest('.food-list__item');

    let imgSrc = parentBox.querySelector('.food-list__item-img img');
    let webpSrc = parentBox.querySelector('.food-list__item-img source');
    let imgPath = imgSrc.getAttribute('src');
    let webpPath = webpSrc.getAttribute('srcset');

    let itemTitle = parentBox.querySelector('.food-list__item-title').innerText;
    let itemDesc = parentBox.querySelector('.food-list__item-desc').innerText;
    let itemContent = parentBox.querySelector('.food-list__item-content').innerText;
    let itemWeight = parentBox.querySelector('.food-list__item-diet').innerText;
    let itemCompound = parentBox.querySelector('.food-list__item-compound').innerHTML;
    let itemValue = parentBox.querySelector('.food-list__item-value').innerHTML;

    let popupImgBox = specificationPopup.querySelector('.food-list__item-img img');
    popupImgBox.setAttribute('src', imgPath);
    let popupWebpBox = specificationPopup.querySelector('.food-list__item-img source');
    popupWebpBox.setAttribute('srcset', webpPath);
    let popupItemTitle = specificationPopup.querySelector('.food-list__item-title');
    popupItemTitle.textContent = itemTitle;
    let popupItemDesc = specificationPopup.querySelector('.food-list__item-desc');
    popupItemDesc.textContent = itemDesc;
    let popupItemContent = specificationPopup.querySelector('.food-list__item-content');
    popupItemContent.textContent = itemContent;
    let popupItemWeight = specificationPopup.querySelector('.food-list__item-diet');
    popupItemWeight.textContent = itemWeight;
    let popupItemCompound = specificationPopup.querySelector('.food-list__item-compound');
    popupItemCompound.innerHTML = itemCompound;
    let popupItemValue = specificationPopup.querySelector('.food-list__item-value');
    popupItemValue.innerHTML = itemValue;
}



//open diet and order popups
footList.onclick = function(event) {
    let target = event.target;

    if(target.tagName === 'IMG' || target.className === "food-list__item-title") {
        insertItemTextToPopup(target);
        showPopup('.popup__specification');
    } else if(target.className === "btn btn--white btn--order") {
        showPopup('.popup__order');
    } else {
        return;
    }
}


function insertSelect(arr) {
    // console.log(arr.length);
    let select = document.querySelector('.customSelect');
    let nativeJsSelect = document.querySelector('.nativejs-select');
    console.log(select);
    if(select) {
        select.remove();
        nativeJsSelect.remove();
    }
    let selectArea = document.querySelector('.js-select-area');
    let selectElement = document.createElement('select');
    selectElement.classList.add('customSelect');

    for(let i = 0; i < arr.length; i ++) {
        let option = document.createElement('option');
        option.text = option.value = arr[i];
        selectElement.appendChild(option, 0);
    }
    selectArea.appendChild(selectElement);
}

//show order popup from diet popup
openOrderPopupLink.addEventListener('click', function(event) {

    let target = event.target;

    console.log(target);

    let parentBox = target.closest('.food-list__item-text');
    let itemWeight = parentBox.querySelector('.food-list__item-diet').innerText.replace( /\s/g, "");

    let weightArr = itemWeight.split('/');
    // weightArr = weightArr.replace( /\s/g, "");
    // let parentBox = target.closest('.food-list__item');
    // let weight = this.previousSibling.innerText;




    insertSelect(weightArr);


    new NativejsSelect({
        selector: '.customSelect',
    });

    this.closest('.popup').classList.remove('show');
    orderPopup.classList.add('show');
    orderPopup.classList.add('popup--delay');
});


