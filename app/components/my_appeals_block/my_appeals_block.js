let initResize = function (element, height) {
    let $elem = $(element);
    let elHeight = $elem.height();
    if (elHeight >= 680) {
        $elem.addClass('obsSize');
    } else {
        console.log(elHeight);
        $elem.removeClass('obsSize');
    };
};

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initResize('.table__block');
    });
} else {
    $(function () {
        initResize('.table__block');
    });
};