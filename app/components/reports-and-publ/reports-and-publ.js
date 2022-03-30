let InitPubSlide = function () {
    let $pubSlider = $('.publications .items-wrap');
    $(window).on('resize', function () {
        if (matchMedia('(min-width: 1025px)').matches) {
            $pubSlider.each(function () {
                $pubSlider.addClass('owl-carousel');
                $pubSlider.owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    items: 3,
                    dots: false,
                    autoplay: false
                });
            });

        } else {
            $pubSlider.removeClass('owl-carousel');
            $pubSlider.owlCarousel('destroy');
        }
    }).trigger('resize');

    $(window).on('load', function () {
        $(window).on('resize', function () {
            setTimeout(function () {
                $('#site_loader').hide();
            }, 200);
        }).trigger('resize');
    });
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        InitPubSlide();
    });
} else {
    $(function () {
        InitPubSlide();
    });
}
