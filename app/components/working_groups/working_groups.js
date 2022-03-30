let initWGSlider = function () {
    let $wgslider = $('.wg__slider');
    $wgslider.not('.slick-initialized').slick({
        slidesToShow: 2,
        arrows: true,
        adaptiveHeight: true,
        dots: false,
        slidesPerRow: 1,
        rows: 2,
        variableWidth: true,
        prevArrow: '<button type="button" class="wg__arrow wg__arrow--prev"><span></span></button>',
        nextArrow: '<button type="button" class="wg__arrow wg__arrow--next"><span></span></button>',
        responsive: [{
            breakpoint: 1100,
            settings: {
                variableWidth: false
            },
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesPerRow: 1,
                rows: 1,
                variableWidth: false
            },
            breakpoint: 640,
            settings: 'unslick'
        }]
    });
};

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initWGSlider();
    });
} else {
    $(function () {
        initWGSlider();
    });
}