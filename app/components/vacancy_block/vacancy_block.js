let initCollapseButton = function () {
    const hidContent = $('.hidden__content');
    const btnR = $('.hidden__link');
    
    if (hidContent.length) {
        let dataBtnDown = btnR.data('slideDown');
        let dataBtnUp = btnR.data('slideUp');
        $(hidContent).addClass('hidden');
        $(btnR).on('click', function () {
            if (hidContent.hasClass('hidden')) {
                hidContent.removeClass('hidden');
                $(this).addClass('read-up').html(dataBtnUp);
            } else {
                hidContent.addClass('hidden');
                $(this).removeClass('read-up').html(dataBtnDown);
            }
        });
    }
}
let initCollapseFilter = function () {
    const hidFilter = $('.filterBlock');
    const btnF = $('.filterBtn');
    const sortFilter = $('.sort_bl--filter');
    const subsc = $('.selectStyler.filterBlock__subscribe');
    
    if (hidFilter.length) {
        $(hidFilter).addClass('hidden');
        $(btnF).on('click', function () {
            $(this).toggleClass('active');
            if (hidFilter.hasClass('hidden')) {
                hidFilter.removeClass('hidden');
                sortFilter.addClass('hidden');
                subsc.addClass('hidden');
            } else {
                hidFilter.addClass('hidden');
                sortFilter.removeClass('hidden');
                subsc.removeClass('hidden');
            }
        });
    }
}

if (typeof BX != "undefined") {
    BX.ready(function () {
        initCollapseButton();
        initCollapseFilter();
    });
} else {
    $(function () {
        initCollapseButton();
        initCollapseFilter();
    });
}

