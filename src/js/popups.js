const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelectorAll('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;


//Поиск для открытие попапа
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

//Поиск для закрытие попапа
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const element = popupCloseIcon[index];
        element.addEventListener('click', function (e) {
            popupClose(element.closest('.popup'));
            e.preventDefault();
        });
    }
}

// Функция открытия попапа
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            // bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

// Функция закрытия попапа
function popupClose(popupActive, doUnlock = true) {
    popupActive.classList.remove('open');
    // if (unlock) {
        
    //     if (doUnlock) {
    //         bodyUnlock();
    //     }
    // }
}


// Скрытие скрола
// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//     if (lockPadding.length > 0) {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const element = lockPadding[index];
//             element.getElementsByClassName.paddingRight = lockPaddingValue;
//         }   
//     }

//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

// function bodyUnlock() {
//     setTimeout(function() {
//         if (lockPadding.length > 0) {
//             for (let index = 0; index < lockPadding.length; index++) {
//                 const element = lockPadding[index];
//                 element.style.paddingRight = '0px';
//             }
//         }

//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     }, timeout);

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});