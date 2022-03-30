/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
// Global center
$(function () {
    jQuery.fn.center_v2 = function () {
        this.css('position', 'absolute');

        var _top_calc = (($(window).height() - this.outerHeight()) / 2);

        if (_top_calc < 0) {
            _top_calc = 100;
        } else {
            _top_calc = _top_calc + $(window).scrollTop();
        }

        this.css('top', _top_calc + 'px');
        this.css('left', (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + 'px');
        return this;
    };
});

function topMenuAction(dom_obj) {
    $('.s_kom_header_buttons > span').removeClass('s_kom_header_buttons_current');
    $(dom_obj).addClass('s_kom_header_buttons_current');
}

function showPopupInfo_1(zIndex) {
    var _z_index = 1;
    if (zIndex != 'undefined') {
        _z_index = zIndex;
    }

    $('.popup_fade').css({
        'z-index': _z_index
    });
    $('.popup_info_1').css({
        'z-index': _z_index + 1
    });

    $('.popup_info_1').center_v2();

    $('.popup_fade').show();
    $('.popup_info_1').show();

}

function hidePopupInfo_1() {
    $('.popup_fade').hide();
    $('.popup_info_1').hide();
}

function showTab1() {
    $('#s_kom_tab_2').hide();
    $('#s_kom_tab_1').show();
}

function showTab2() {
    $('#s_kom_tab_1').hide();
    $('#s_kom_tab_2').show();

    if (window.innerWidth <= 680) {
        var h = $('.s_kom_table_docs').outerHeight();

        $('.s_kom_table_docs_c').css({
            height: h,
            position: 'relative',
            overflow: 'hidden'
        });

        $('.s_kom_table_docs_c > div').css({
            position: 'absolute'
        });

        slider_menu.init($('.s_kom_table_docs_c > div'));
    }
}

function showHideResult(dom_obj) {
    var txt = $.trim($(dom_obj).val());

    if (txt.length > 0) {
        $('.s_kom_search_result').show();
    } else {
        $('.s_kom_search_result').hide();
    }
}

$(function () {
    $(window).resize(function () {
        $('.popup_info_1').center_v2();
    });
});
