let initBgSlider = function () {
    $('.slick_position').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true
    });
    $('.slick_people_filter_block').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        responsive: [{
                breakpoint: 1090,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slick_opros').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        responsive: [{
                breakpoint: 1090,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
if (typeof BX != 'undefined') {
    BX.ready(function () {
        initBgSlider();
    });
} else {
    $(function () {
        initBgSlider();
    });
}