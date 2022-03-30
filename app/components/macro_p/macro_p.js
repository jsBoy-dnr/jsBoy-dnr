/* eslint-disable camelcase */
function topMenuChange(dom_obj) {
    $('.macro_p_top_menu > span').removeClass('macro_p_top_menu_current');

    $(dom_obj).addClass('macro_p_top_menu_current');
}

function hideShowInfo(dom_obj) {
    if ($(dom_obj).parent().parent().find('.macro_p_table_info_table').is(':visible')) {
        $(dom_obj).parent().parent().find('.macro_p_table_info_table').hide();
        $(dom_obj).parent().parent().find('.macro_p_table_info_h').css('border-bottom-width', 0);
        $(dom_obj).parent().parent().find('.macro_p_table_info_h2').addClass('macro_p_table_info_h2_closed');
        $(dom_obj).attr('src', '/local/templates/suek.new/images/icons/arrow_down_circle_black.svg');
    } else {
        $(dom_obj).parent().parent().find('.macro_p_table_info_table').show();
        $(dom_obj).parent().parent().find('.macro_p_table_info_h').css('border-bottom-width', 1);
        $(dom_obj).parent().parent().find('.macro_p_table_info_h2').removeClass('macro_p_table_info_h2_closed');
        $(dom_obj).attr('src', '/local/templates/suek.new/images/icons/arrow_up_circle.svg');
    }
}

function hideShowInfo2(dom_obj) {
    if ($(dom_obj).parent().parent().find('.macro_p_table_info_table_c').is(':visible')) {
        $(dom_obj).parent().parent().find('.macro_p_table_info_table_c').hide();
        $(dom_obj).parent().parent().find('.macro_p_table_info_h').css('border-bottom-width', 0);
        $(dom_obj).parent().parent().find('.macro_p_table_info_h2').addClass('macro_p_table_info_h2_closed');
        $(dom_obj).attr('src', '/local/templates/suek.new/images/icons/arrow_down_circle_black.svg');
    } else {
        $(dom_obj).parent().parent().find('.macro_p_table_info_table_c').show();
        $(dom_obj).parent().parent().find('.macro_p_table_info_h').css('border-bottom-width', 1);
        $(dom_obj).parent().parent().find('.macro_p_table_info_h2').removeClass('macro_p_table_info_h2_closed');
        $(dom_obj).attr('src', '/local/templates/suek.new/images/icons/arrow_up_circle.svg');

        uiUpdateInitUiSlidedTables();
    }
}

function hideShowInfo3(dom_obj) {
    if ($(dom_obj).parent().parent().find('.macro_p_table_info_table').is(':visible')) {
        $(dom_obj).parent().parent().find('.macro_p_table_info_table').hide();
        $(dom_obj).parent().parent().find('.macro_p_table_info_h').css('border-bottom-width', 0);
        $(dom_obj).parent().parent().find('.macro_p_table_info_h2').addClass('macro_p_table_info_h2_closed');
        $(dom_obj).attr('src', '/local/templates/suek.new/images/icons/arrow_down_circle_black.svg');

        $(dom_obj).parent().parent().removeClass('macro_p_table_info_selected_2');
    } else {
        $(dom_obj).parent().parent().find('.macro_p_table_info_table').show();
        $(dom_obj).parent().parent().find('.macro_p_table_info_h').css('border-bottom-width', 1);
        $(dom_obj).parent().parent().find('.macro_p_table_info_h2').removeClass('macro_p_table_info_h2_closed');
        $(dom_obj).attr('src', '/local/templates/suek.new/images/icons/arrow_up_circle.svg');

        $(dom_obj).parent().parent().addClass('macro_p_table_info_selected_2');
    }
}

function showTab(dom_obj, index) {
    $('.macro_p_menu_tabs > nav > span').removeClass('macro_p_menu_tabs_current');

    $(dom_obj).addClass('macro_p_menu_tabs_current');

    $('.macro_p_tabs > div').hide();

    $('#macro_p_tabs_' + index).show();
}

function checkBoxClick(dom_obj) {
    if ($(dom_obj).hasClass('checked')) {
        $(dom_obj).removeClass('checked');
        $(dom_obj).find('img').attr('src', '/local/templates/suek.new/images/fbe-checkbox-unchecked.svg');
    } else {
        $(dom_obj).addClass('checked');
        $(dom_obj).find('img').attr('src', '/local/templates/suek.new/images/fbe-checkbox-checked.svg');
    }

    if ($(dom_obj).hasClass('checked')) {
        $('#macro_p_tabs_2_subpage_1').hide();
        $('#macro_p_tabs_2_subpage_2').show();

        uiUpdateInitUiSlidedTables_2();
    } else {
        $('#macro_p_tabs_2_subpage_1').show();
        $('#macro_p_tabs_2_subpage_2').hide();
    }
}

function uiUpdateInitUiSlidedTables_2() {
    if (window.innerWidth <= 486) {
        $('.macro_p_table_info_table_2_c:visible').each(function () {

            var el = $(this).find('> div:first');

            $(this).css('height', el.height());

            el.css('position', 'absolute');

            slider_menu.init(el);
        });
    }
}

function uiUpdateInitUiSlidedTables() {
    if (window.innerWidth <= 486) {
        $('.macro_p_table_info_table_c:visible').each(function () {

            var el = $(this).find('> div:first');

            $(this).css('height', el.height());

            el.css('position', 'absolute');

            slider_menu.init(el);
        });
    }
}

$(function () {

    if (window.innerWidth <= 486) {
        slider_menu.init($('.macro_p_menu_tabs > nav'));
    }

    uiUpdateInitUiSlidedTables();

});
