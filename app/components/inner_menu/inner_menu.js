let initDropMenu = function () {
    $('li.submenu').on('click', function () {
        let $this = $(this);
        $this.toggleClass('active').focus();
        $this.find('.dropdown-content').toggleClass('show');
    });
    $('li.submenu').on('focusout', function () {
        let $this = $(this);
        $this.removeClass('active');
        $this.find('.dropdown-content').removeClass('show');
    });
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initDropMenu();
    });
} else {
    $(function () {
        initDropMenu();
    });
}