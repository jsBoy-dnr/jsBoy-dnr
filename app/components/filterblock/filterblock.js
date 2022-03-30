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
        initCollapseFilter();
    });
} else {
    $(function () {
        initCollapseFilter();
    });
}