const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/Iphone|Ipad|Ipod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};
// SubMenu
if (isMobile.any()) {
    document.body.classList.add('touch');

    let menuArrows = document.querySelectorAll('.arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('subActive');
            });
        }
    }

} else {
    document.body.classList.add('pc');
}

// BurgerMenu
const iconBurger = document.querySelector('.burger-menu');
if (iconBurger) {
    const catalogHeader = document.querySelector('.catalog-header');
    iconBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconBurger.classList.toggle('burgerActive');
        catalogHeader.classList.toggle('burgerActive');
    })
}

// TopButton
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});