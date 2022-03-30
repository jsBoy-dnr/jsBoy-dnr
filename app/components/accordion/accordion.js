let initAccordion = function () {
    $('.accordion__header').on('click', function () {
        $(this).toggleClass('open').parent().find('.accordion__body').slideToggle();
    });
}

if (typeof BX != "undefined") {
    BX.ready(function () {
        initAccordion();
    });
} else {
    $(function () {
        initAccordion();
    });
}
