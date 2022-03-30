/* eslint-disable eqeqeq */
/* eslint-disable radix */
/* eslint-disable camelcase */
function showTab(dom_obj, index) {
    $('.workgroup_header_menu_tabs span').each(function () {
        $(this).removeClass('workgroup_header_menu_tabs_current');
    });

    $(dom_obj).addClass('workgroup_header_menu_tabs_current');

    $('.workgroup_header_tabs_c > div').each(function () {
        if (parseInt($(this).data('index')) == index) {
            $(this).show();
            closeSearchAreaTop_2();

            if (index === 3 && window.innerWidth <= 992) {
                $('#workgroup_task_tabs_c').css({
                    position: 'relative',
                    height: $('#workgroup_task_tabs_c > div').height() + 20
                });
                $('#workgroup_task_tabs_c > div').css({
                    position: 'absolute'
                });

                slider_menu.init($('#workgroup_task_tabs_c > div'));
            }
        } else {
            $(this).hide();
        }
    });

}

var topSearchBarIsOpeden = false;

function openSearchAreaTop() {
    if (topSearchBarIsOpeden) {
        return;
    }

    $('.workgroup_header_menu_tabs > nav').hide(100);
    $('#workgroup_header_menu_tabs_btn_area > span').hide(30);
    $('#workgroup_header_menu_tabs_btn_area > input').show(30);
    $('#workgroup_header_menu_tabs_btn_area > img:last').show(30);

    $('#workgroup_header_menu_tabs_btn_area').animate({
        width: $('.workgroup_header_menu_tabs').width() - 10,
        top: 16
    },
        1000,
        function () {
            $('#workgroup_header_menu_tabs_btn_area > input').focus();
            $('#workgroup_header_menu_tabs_btn_area > input').css('opacity', 1);
            topSearchBarIsOpeden = true;
        });
}

function closeSearchAreaTop() {
    $('#workgroup_header_menu_tabs_btn_area > input').hide();
    $('#workgroup_header_menu_tabs_btn_area > img:last').hide();
    $('#workgroup_header_menu_tabs_btn_area > span').show(100);

    $('#workgroup_header_menu_tabs_btn_area').animate({
        width: 80,
        top: 19
    },
        500,
        function () {
            topSearchBarIsOpeden = false;
            $('#workgroup_header_menu_tabs_btn_area').css('width', 'auto');
            $('.workgroup_header_menu_tabs > nav').show(50);
            $('#workgroup_header_menu_tabs_btn_area > input').css('opacity', 0.5);
        });
}

//------------------------------------------------------------------------------
var topSearchBarIsOpeden_2 = false;

function openSearchAreaTop_2() {
    if (topSearchBarIsOpeden_2) {
        return;
    }

    $('#workgroup_header_tabs_search > span').hide(30);
    $('#workgroup_header_tabs_search > input').show(30);
    $('#workgroup_header_tabs_search > img:last').show(30);
    $('#workgroup_header_tabs_search').css('opacity', 1);


    $('#workgroup_header_tabs_search').animate({
        width: window.innerWidth > 1024 ? $('.workgroup_header_menu_tabs').width() - 20 : window.innerWidth - (window.innerWidth > 480 ? 100 : 60)
    },
        1000,
        function () {
            $('#workgroup_header_tabs_search > input').focus();

            topSearchBarIsOpeden_2 = true;
        });
}

function closeSearchAreaTop_2() {
    $('#workgroup_header_tabs_search > input').hide();
    $('#workgroup_header_tabs_search > img:last').hide();

    if (window.innerWidth > 480) {
        $('#workgroup_header_tabs_search > span').show(100);
    }

    $('#workgroup_header_tabs_search').animate({
        width: 80
    },
        500,
        function () {
            topSearchBarIsOpeden_2 = false;
            $('#workgroup_header_tabs_search').css('width', 'auto');
            $('#workgroup_header_tabs_search').css('opacity', 0.5);
        });
}
//------------------------------------------------------------------------------

function _showVoteResult(dom_obj) {
    $(dom_obj).parent().hide();
    $(dom_obj).parent().parent().find('.workgroup_vote_tab_2').show();
}

$(function () {

    if (window.innerWidth <= 1298) {
        slider_menu.init($('.workgroup_header_menu_tabs > nav'));
    }

    if (window.innerWidth <= 1120) {
        slider_menu.init($('#header_content_list_users > nav'));
    }



    $('#workgroup_header_tab_1').show();

    $('#workgroup_task_tabs_select_drop_down_list select').styler();

    $('.workgroup_task_tabs_header > div').click(function () {

        var v = parseInt($(this).data('type'));

        if (v == 1) {
            $('#workgroup_task_tabs_header_vline_1').hide();
            $('#workgroup_task_tabs_header_vline_2').show();
        } else if (v == 2) {
            $('#workgroup_task_tabs_header_vline_1').hide();
            $('#workgroup_task_tabs_header_vline_2').hide();
        } else if (v == 3) {
            $('#workgroup_task_tabs_header_vline_1').show();
            $('#workgroup_task_tabs_header_vline_2').hide();
        }

        $('.workgroup_task_tabs_header > div').each(function () {
            $(this).removeClass('workgroup_task_tabs_header_current');
        });

        $(this).addClass('workgroup_task_tabs_header_current');
    });

    $(window).resize(function () {
        if (topSearchBarIsOpeden_2) {
            $('#workgroup_header_tabs_search').css({
                width: window.innerWidth > 1024 ? $('.workgroup_header_menu_tabs').width() - 20 : window.innerWidth - (window.innerWidth > 480 ? 100 : 60)
            });
        }
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

});
