/* eslint-disable camelcase */
/* eslint-disable no-undef */
function loadingArchive_1() {
    $('#inline-calendar-archive-1 .inline-calendar-archive-boby').hide();
    $('#inline-calendar-archive-1 .inline-calendar-archive-loading').show();
    $('#inline-calendar-archive-1').show();

    setTimeout(function () {

        var data = {
            '1': '/local/templates/suek.new/fonts/ProximaNova-ExtrabldIt.woff',
            '2': '/local/templates/suek.new/fonts/ProximaNova-ExtrabldIt.woff',
            '15': '/local/templates/suek.new/fonts/ProximaNova-ExtrabldIt.woff',
            '28': '/local/templates/suek.new/fonts/ProximaNova-ExtrabldIt.woff',
        };

        $('#inline-calendar-archive-1 .inline-calendar-archive-controls span').html(calendar_archive.getMonthNameByIndex(1) + ' 2018');

        $('#inline-calendar-archive-1 .inline-calendar-archive-boby').html(calendar_archive.renderCalendarTable(2018, 1, data));
        $('#inline-calendar-archive-1 .inline-calendar-archive-boby').show();
        $('#inline-calendar-archive-1 .inline-calendar-archive-controls').css('display', 'flex');
        $('#inline-calendar-archive-1 .inline-calendar-archive-loading').hide();

    }, 1000);
}

function loadingArchive_2() {
    $('#inline-calendar-archive-2 .inline-calendar-archive-boby').hide();
    $('#inline-calendar-archive-2 .inline-calendar-archive-loading').show();
    $('#inline-calendar-archive-2').show();

    setTimeout(function () {

        var data = {
            '1': '/local/templates/suek.new/fonts/ProximaNova-ExtrabldIt.woff',
            '2': '/local/templates/suek.new/fonts/ProximaNova-ExtrabldIt.woff',
            '15': '/local/templates/suek.new/fonts/ProximaNova-ExtrabldIt.woff',
            '28': '/local/templates/suek.new/fonts/ProximaNova-ExtrabldIt.woff',
        };

        $('#inline-calendar-archive-2 .inline-calendar-archive-controls span').html(calendar_archive.getMonthNameByIndex(1) + ' 2018');

        $('#inline-calendar-archive-2 .inline-calendar-archive-boby').html(calendar_archive.renderCalendarTable(2018, 1, data));
        $('#inline-calendar-archive-2 .inline-calendar-archive-boby').show();
        $('#inline-calendar-archive-2 .inline-calendar-archive-controls').css('display', 'flex');
        $('#inline-calendar-archive-2 .inline-calendar-archive-loading').hide();

    }, 1000);
}

function prevMonth(index) {
    if (index === 1) {
        loadingArchive_1();
    } else {
        loadingArchive_2();
    }

}

function nextMonth(index) {
    if (index === 1) {
        loadingArchive_1();
    } else {
        loadingArchive_2();
    }
}

$(function () {
    var date = new Date(2018, 1);
    $(".init-calendar").datepicker();
});
