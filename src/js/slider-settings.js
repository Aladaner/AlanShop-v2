$(document).ready(function () {
    $('.main-banner').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.news-banner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.goods-slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]
    });
})