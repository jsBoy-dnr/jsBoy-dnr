/* eslint-disable guard-for-in */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */
/* eslint-disable radix */
function showTab(dom_obj, index) {
    $('.bank_znanii_header_menu_tabs a').each(function () {
        $(this).removeClass('bank_znanii_header_menu_tabs_current');
    });

    $(dom_obj).addClass('bank_znanii_header_menu_tabs_current');

    $('.bank_znanii_header_tabs_c > div').each(function () {
        // eslint-disable-next-line eqeqeq
        if (parseInt($(this).data('index')) == index) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

var files_info = [{
    type: 'dir',
    name: 'Памфилова отреагировала на случайную победу уборщицы на выборах',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'dir',
    name: 'Рамочный договор',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'dir',
    name: 'Очень очень длинное название которое не умsdfa dsgfs fgdsfh',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'file',
    name: 'Лицензионные договоры',
    ext: 'xls',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'dir',
    name: 'Лицензионные договоры',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'dir',
    name: 'Лицензионные договоры',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'file',
    name: 'Лицензионные договоры',
    ext: 'zip',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'file',
    name: 'Рамочный договор',
    ext: 'pdf',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'dir',
    name: 'Очень очень длинное название которое не умsdfa dsgfs fgdsfh',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'dir',
    name: 'Лицензионные договоры',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'file',
    name: 'Лицензионные договоры',
    ext: 'doc',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}, {
    type: 'dir',
    name: 'Лицензионные договоры',
    datatime: '04.08.2020 13:08',
    size: '1.5 GB'
}];

function uiUpdateTopName(dom_obj) {
    $('#title_1').html($(dom_obj).find('.dist_files_item_name').html());
}

function buildPage(type) {
    $('#disk_panel_2_body').html('');
    $('#disk_panel_2_body').removeClass('dist_files_draw_type_1');
    $('#disk_panel_2_body').removeClass('dist_files_draw_type_2');
    $('#disk_panel_2_body').removeClass('dist_files_draw_type_3');

    $('.disk_panel_2_icon').removeClass('disk_panel_2_icon_active');

    if (type === 1) {
        $('#disk_panel_2_body').addClass('dist_files_draw_type_1');
        $('#disk_panel_2_icon_1').addClass('disk_panel_2_icon_active');

        var ss = '<div class="dist_files_table_c"><div><div class="dist_files_table">';

        // row 0 - header
        ss += '<div class="dist_files_table_table_row dist_files_table_table_row_h">';
        ss += '<div><input type="checkbox" /></div>';
        ss += '<div><img class="dist_files_table_icon_1" src="../../images/icons/disk-settings.svg" /></div>';
        ss += '<div></div>';
        ss += '<div class="dist_files_table_header">Название</div>';
        ss += '<div class="dist_files_table_header">Дата изменения</div>';
        ss += '<div class="dist_files_table_header">Размер</div>';
        ss += '</div>';

        for (var obj in files_info) {
            ss += '<div class="dist_files_table_table_row">';

            ss += '<div><input type="checkbox" /></div>';
            ss += '<div><img class="dist_files_table_icon_1" src="../../images/icons/disk-sort-1.svg" /></div>';
            ss += '<div class="dist_files_table_fileicon">';
            if (obj.type === 'dir') {
                ss += '<img src="../../images/file-type/folder.svg" />';
            } else {
                if (obj.ext === 'xls') {
                    ss += '<img src="../../images/file-type/xls.svg" />';
                } else if (obj.ext === 'zip') {
                    ss += '<img src="../../images/file-type/zip.svg" />';
                } else if (obj.ext === 'doc') {
                    ss += '<img src="../../images/file-type/doc-blue.svg" />';
                } else if (obj.ext === 'pdf') {
                    ss += '<img src="../../images/file-type/pdf.svg" />';
                }
            }
            ss += '</div>';
            ss += '<div class="dist_files_table_filename">' + obj.name + '</div>';
            ss += '<div class="dist_files_table_info">' + obj.datatime + '</div>';
            ss += '<div class="dist_files_table_info">' + obj.size + '</div>';

            ss += '</div>';
        }

        ss += '</div></div></div>';

        $('#disk_panel_2_body').html(ss);

        if (window.innerWidth <= 736) {
            var h = $('.dist_files_table').outerHeight();

            $('.dist_files_table_c').css({
                height: h + 20,
                position: 'relative',
                overflow: 'hidden'
            });

            $('.dist_files_table_c > div').css({
                position: 'absolute'
            });

            slider_menu.init($('.dist_files_table_c > div'));
        }
    } else if (type === 2) {
        $('#disk_panel_2_body').addClass('dist_files_draw_type_2');
        $('#disk_panel_2_icon_2').addClass('disk_panel_2_icon_active');

        var ss = '';

        for (var obj in files_info) {
            ss += '<div class="dist_files_item" onclick="uiUpdateTopName(this)">';

            ss += '<img class="dist_files_item_menu_icon" src="../../images/icons/disk-sort-1.svg" />';
            if (obj.type === 'dir') {
                ss += '<img class="dist_files_item_inner_icon" src="../../images/file-type/folder.svg" />';
            } else {
                if (obj.ext === 'xls') {
                    ss += '<img class="dist_files_item_inner_icon" src="../../images/file-type/xls.svg" />';
                } else if (obj.ext === 'zip') {
                    ss += '<img class="dist_files_item_inner_icon" src="../../images/file-type/zip.svg" />';
                } else if (obj.ext === 'doc') {
                    ss += '<img class="dist_files_item_inner_icon" src="../../images/file-type/doc-blue.svg" />';
                } else if (obj.ext === 'pdf') {
                    ss += '<img class="dist_files_item_inner_icon" src="../../images/file-type/pdf.svg" />';
                }
            }

            ss += '<div class="dist_files_item_name">';
            ss += obj.name;
            ss += '</div>';

            ss += '</div>';
        }

        $('#disk_panel_2_body').html(ss);
    } else if (type === 3) {
        $('#disk_panel_2_body').addClass('dist_files_draw_type_3');
        $('#disk_panel_2_icon_3').addClass('disk_panel_2_icon_active');

        var ss = '';

        for (var obj in files_info) {
            ss += '<div class="dist_files_item">';

            ss += '<img class="dist_files_item_menu_icon" src="../../images/icons/disk-sort-1.svg" />';
            if (obj.type === 'dir') {
                ss += '<img class="dist_files_item_inner_icon" src="../../images/file-type/folder.svg" />';
            } else {
                if (obj.ext === 'xls') {
                    ss += '<img class="dist_files_item_inner_icon" src="../../images/file-type/xls.svg" />';
                } else if (obj.ext === 'zip') {
                    ss += '<img class="dist_files_item_inner_icon" src="../../images/file-type/zip.svg" />';
                } else if (obj.ext === 'doc') {
                    ss += '<img class="dist_files_item_inner_icon" src="../../images/file-type/doc-blue.svg" />';
                } else if (obj.ext === 'pdf') {
                    ss += '<img class="dist_files_item_inner_icon" src="../../images/file-type/pdf.svg" />';
                }
            }

            ss += '<div class="dist_files_item_name">';
            ss += obj.name;
            ss += '</div>';

            ss += '</div>';
        }

        $('#disk_panel_2_body').html(ss);
    }
}

function topMenuGotoLeft() {
    var left = parseInt($('.disk_menu_tabs').css('padding-left'), 10);

    $('.disk_menu_tabs > nav').animate({
        left: left
    }, 500, function () {
        $('#disk_menu_tabs_left_btn_scroll').hide();
        $('#disk_menu_tabs_right_btn_scroll').css('display', 'flex');
    });
}

function topMenuGotoRight() {
    var wbtn = $('#disk_menu_tabs_right_btn_scroll').width();
    var nav_w = $('.disk_menu_tabs > nav').width();
    var c = $('.disk_menu_tabs').width();

    $('.disk_menu_tabs > nav').animate({
        left: c - nav_w - wbtn
    }, 500, function () {
        $('#disk_menu_tabs_right_btn_scroll').hide();
        $('#disk_menu_tabs_left_btn_scroll').css('display', 'flex');
    });
}

$(function () {

    $('.disk_panel_2 > select').styler();

    if (window.innerWidth <= 807) {
        slider_menu.init($('.disk_menu_tabs > nav'));
    }

    buildPage(2);
});
