let initHeaderSlider = function () {
    var owl = $('.header_slider_main');

    owl.addClass('owl-carousel');

    owl.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        animateIn: 'fadesIn',
        mouseDrag: false,
        touchDrag: false
    });

    $(window).on('load', function () {
        setTimeout(function () {
            $('.header_slider .owl-dots .owl-dot').each(function (index, item) {
                $(this).addClass('dot-icon-' + index);
            });
        }, 200);
    });
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initHeaderSlider();
    });
} else {
    $(function () {
        initHeaderSlider();
    });
}