let menu2Change = function (dom_obj, index) {
    let span = $('.lk_ds_menu_2 > span');
    $(span).on('click', function () {
        let $this = $(this);
        $this.nextAll().removeClass('lk_ds_menu_2_current');
        $this.prevAll().removeClass('lk_ds_menu_2_current');

        $(dom_obj).addClass('lk_ds_menu_2_current');

        $('#page_tabs > div').hide();
        $('#page_tab_' + index).show();
    });
}

if (typeof BX != "undefined") {
    BX.ready(function () {
        menu2Change();
    });
} else {
    $(function () {
        menu2Change();
    });
}