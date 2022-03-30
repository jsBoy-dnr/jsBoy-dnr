function showTab(dom_obj, index) {
    $('.bank_znanii_header_menu_tabs a').each(function () {
        $(this).removeClass('bank_znanii_header_menu_tabs_current');
    });

    $(dom_obj).addClass('bank_znanii_header_menu_tabs_current');

    $('.bank_znanii_header_tabs_c > div').each(function () {
        if (parseInt($(this).data('index')) == index) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

function swapView1() {
    $('#bank_znanii_header_tab_1_wrapper_1').hide();
    $('#bank_znanii_header_tab_1_wrapper_2').show();
}

function swapView2() {
    $('#bank_znanii_header_tab_1_wrapper_1').show();
    $('#bank_znanii_header_tab_1_wrapper_2').hide();
}



$(function () {

    $('.bank_z_search_f select').styler();
    $('#bank_znanii_filter_1 > select').styler();

    if (window.innerWidth <= 550) {
        slider_menu.init($('.bank_znanii_header_menu_tabs > nav'));
    }

    $('#bank_znanii_references > div').click(function () {

        $('#bank_znanii_header_tab_1_wrapper_2_title_name').html($(this).find('.bz-tab-1-item-title').html());

        swapView1();
    });

});