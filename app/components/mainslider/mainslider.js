let initMainSlider = function () {
    let $mainSlider = $('.MainSlider');
    $mainSlider.not('.slick-initialized').slick({
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0" class="slick-slide'+ i +'"></button>';
        },
        fade: true,
        autoplay: true,
        autoplaySpeed: 8000,
    });
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initMainSlider();
    });
} else {
    $(function () {
        initMainSlider();
    });
}
