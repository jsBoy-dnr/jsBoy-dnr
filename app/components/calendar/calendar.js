/* eslint-disable radix */
/* eslint-disable no-shadow */
/* eslint-disable no-redeclare */
/* eslint-disable no-multi-str */
/* eslint-disable camelcase */
/* eslint-disable no-shadow-restricted-names */
/* eslint-disable no-undefined */
var d = new Date();
var d_return_back = new Date(); // текущая дата
var current_day = d.getDate();

(function (calendar, $, undefined) {

    let holidays = {
        2020: {
            1: [1, 2, 3, 4, 5, 6, 7, 8],
            2: [23, 24],
            3: [8, 9],
            4: [30],
            5: [8],
            6: [11, 12],
            11: [3, 4],
            12: [31]
        }
    };

    let year_events = {
        2020: {
            1: [1, 2, 3, 4, 5, 6, 7, 8],
            2: [23, 24],
            3: [8, 9],
            4: [30],
            5: [8],
            6: [11, 12],
            11: [3, 4],
            12: [31]
        }
    };

    let server_date = new Date(); // need remove
    calendar.current_selected_month = 0;
    calendar.current_your = '';

    let current_id_element = '';
    let monthNames = 'Январь Февраль Март Апрель Май Июнь Июль Август Сентябрь Октябрь Ноябрь Декабрь'.split(' ');
    let monthNames2 = 'Января Февраля Марта Апреля Май Июня Июля Августа Сентября Октября Ноября Декабря'.split(' ');

    /**
     * получить номер дня недели для date, от 0(пн) до 6(вс)
     * @param date
     */
    function getDay(date) { //
        let day = date.getDay();
        if (day === 0) {
            day = 7;
        }
        return day - 1;
    }

    calendar.prevMonth = function (dateObj) {
        let tempDateObj = new Date(dateObj);

        if (tempDateObj.getMonth) {
            tempDateObj.setMonth(tempDateObj.getMonth() - 1);
        } else {
            tempDateObj.setYear(tempDateObj.getYear() - 1);
            tempDateObj.setMonth(12);
        }

        return tempDateObj;
    };

    calendar.renderCalendarTable_V2 = function (year, month) {
        let dt = new Date(year, month);
        dt.setHours(0, 0, 0, 0);

        let __holidays = holidays[year] === undefined ? [] : holidays[year][month + 1];
        let __year_events = year_events[year] === undefined ? [] : year_events[year][month + 1];

        if (__year_events !== undefined) {
            console.log('__year_events.length', __year_events.length);
        }

        let table = [
            '<div class="caledar2_box">\
                <div class="caledar2_header_month_name"><span>' + calendar.getMonthNameByIndex(month) +
            (__year_events !== undefined && __year_events.length > 0 ? ('<label>' + __year_events.length + '</label>') : '') +
            '</span></div>\
                <div class="calendar2_table">\
                <div class="calendar2_days_of_week">\
                 <div class="calendar2_dw_name">пн</div>\
                 <div class="calendar2_dw_name">вт</div>\
                 <div class="calendar2_dw_name">ср</div>\
                 <div class="calendar2_dw_name">чт</div>\
                 <div class="calendar2_dw_name">пт</div>\
                 <div class="calendar2_dw_name">сб</div>\
                 <div class="calendar2_dw_name">вс</div>\
                </div>\
                <div class="calendar2_grid_row">'
        ];

        for (var i = 0; i < getDay(dt); i++) {
            table.push('<div class="calendar2_grid_col"></div>');
        }

        // ячейки календаря с датами
        while (dt.getMonth() === month) {
            let t = getDay(dt);

            table.push('<div id="cal2_cell_' + $.format.date(dt, 'd_M_yyyy') + '" class="calendar2_grid_col ' + (t === 5 || t === 6 ? 'date-weekend' : 'date-in_active-month') +
                ' ' + (server_date.getTime() === dt.getTime() ? 'date_current' : '') +
                ' ' + ($.inArray(dt.getDate(), __holidays) >= 0 ? 'holiday' : '') +
                ' ' + ($.inArray(dt.getDate(), __year_events) >= 0 ? 'year_event' : '') +
                '">' + $.format.date(dt, 'dd') + '</div>');

            if (t % 7 === 6) {
                table.push('</div><div class="calendar2_grid_row">');
            }

            dt.setDate(dt.getDate() + 1);
        }

        // добить таблицу пустыми ячейками, если нужно
        if (getDay(d) !== 0) {
            for (var i = getDay(d); i < 7; i++) {
                table.push('<div class="calendar2_grid_col"></div>');
            }
        }

        table.push('</div></div></div>');

        return table.join('');
    };

    function renderCalendarTable(year, month) {
        let d = new Date(year, month);
        d.setHours(0, 0, 0, 0);
        server_date.setHours(0, 0, 0, 0);

        let __holidays = holidays[year] === undefined ? [] : holidays[year][month + 1];

        let table = ['<div class="calendar_grid_header_row"><div class="calendar_grid_col">пн</div>\
            <div class="calendar_grid_col">вт</div>\
            <div class="calendar_grid_col">ср</div>\
            <div class="calendar_grid_col">чт</div>\
            <div class="calendar_grid_col">пт</div>\
            <div class="calendar_grid_col">сб</div>\
            <div class="calendar_grid_col">вс</div>\
            </div><div class="calendar_grid_row">'];

        let prev = calendar.prevMonth(d);
        let lastDayOfMonth = new Date(prev.getFullYear(), prev.getMonth() + 1, 0);
        lastDayOfMonth.setDate(lastDayOfMonth.getDate() - (getDay(d) - 1));

        for (var i = 0; i < getDay(d); i++) {
            var t = getDay(lastDayOfMonth);

            table.push('<div class="calendar_grid_col ' + (t === 5 || t === 6 ? 'date-weekend' : '') + '" id="cal_cell_' + $.format.date(lastDayOfMonth, 'd_M_yyyy') + '"><div class="ccell_day_line"><span>' + lastDayOfMonth.getDate() + '</span></div><div class="ccell_day_data"></div></div>');

            lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1);
        }

        // ячейки календаря с датами
        while (d.getMonth() === month) {
            var t = getDay(d);

            table.push('<div id="cal_cell_' + $.format.date(d, 'd_M_yyyy') + '" class="calendar_grid_col date-in_active-month ' + (t === 5 || t === 6 ? 'date-weekend' : '') + ' ' + (server_date.getTime() === d.getTime() ? 'date_current' : '') + ' ' + ($.inArray(d.getDate(), __holidays) >= 0 ? 'holiday' : '') + '"><div class="ccell_day_line"><span>' + d.getDate() + '</span></div><div class="ccell_day_data"></div></div>');

            if (t % 7 === 6) {
                table.push('</div><div class="calendar_grid_row">');
            }

            d.setDate(d.getDate() + 1);
        }

        // добить таблицу пустыми ячейками, если нужно
        if (getDay(d) !== 0) {
            for (var i = getDay(d); i < 7; i++) {
                var t = getDay(d);

                table.push('<div class="calendar_grid_col ' + (t === 5 || t === 6 ? 'date-weekend' : '') + '" id="cal_cell_' + $.format.date(d, 'd_M_yyyy') + '"><div class="ccell_day_line"><span>' + d.getDate() + '</span></div><div class="ccell_day_data"></div></div>');

                d.setDate(d.getDate() + 1);
            }
        }

        table.push('</div>');

        return table.join('');
    }

    calendar.draw = function (id_name, year, month, callback) {
        current_id_element = id_name;

        $('#' + id_name).html(renderCalendarTable(year, month));
    };

    calendar.getDomDayOfThisMoth = function (day) {
        return $('#cal_cell_' + day + '_' + (calendar.current_selected_month + 1) + '_' + calendar.current_your);
    };

    calendar.getDomDayOfThisMoth2 = function (day, month, year) {
        return $('#cal_cell_' + day + '_' + month + '_' + year);
    };

    calendar.listInDayAdd = function (day, color_point_class, text) {
        let dom_obj = calendar.getDomDayOfThisMoth(day);
        let width = $('#calendar_grid_data').width() / 7 - 10;

        dom_obj.find('.ccell_day_data').append('<div class="ccell_day_data_line" style="width:' + width + 'px"><span class="color_point ' + color_point_class + '">•</span><span>' + text + '</span></div>');

        calendar.updateWidthDataLineDivs();
    };

    calendar.listInDayAddMoree = function (day, count_moree) {
        let dom_obj = calendar.getDomDayOfThisMoth(day);
        let width = $('#calendar_grid_data').width() / 7 - 10;

        dom_obj.find('.ccell_day_data').append('<div class="ccell_day_data_line_moree" style="width:' + width + 'px"><span>Ещё +' + count_moree + '</span></div>');
    };

    calendar.updateWidthDataLineDivs = function () {
        let width = $('#calendar_grid_data').width() / 7 - 10;

        $('#' + current_id_element + ' .ccell_day_data_line').each(function () {
            $(this).css({
                width: width + 'px'
            });
        });
        $('#' + current_id_element + ' .ccell_day_data_line_moree').each(function () {
            $(this).css({
                width: width + 'px'
            });
        });
    };

    calendar.setHoliday = function (day) {
        let dom_obj = calendar.getDomDayOfThisMoth(day);
        dom_obj.addClass('holiday');
    };

    calendar.clearHoliday = function (day) {
        let dom_obj = calendar.getDomDayOfThisMoth(day);
        dom_obj.removeClass('holiday');
    };

    calendar.addClass = function (day, class_name) {
        let dom_obj = calendar.getDomDayOfThisMoth(day);
        dom_obj.addClass(class_name);
    };

    calendar.removeClass = function (day, class_name) {
        let dom_obj = calendar.getDomDayOfThisMoth(day);
        dom_obj.removeClass(class_name);
    };

    calendar.setCurrentDay = function (day) {
        $('#' + current_id_element + ' .date_current').each(function () {
            $(this).removeClass('date_current');
        });

        let dom_obj = calendar.getDomDayOfThisMoth(day);
        dom_obj.addClass('date_current');
    };

    calendar.getMonthNameByIndex = function (index) {
        return monthNames[index];
    };

    calendar.getMonthNameByIndex2 = function (index) {
        return monthNames2[index];
    };

})(window.calendar = window.calendar || {}, jQuery);

function cal_setToday() {
    d = new Date(d_return_back);

    calendar.current_your = d.getFullYear();
    calendar.current_selected_month = d.getMonth();

    drawCalendarYear(calendar.current_your);
    calendar.draw('calendar_grid_data', d.getFullYear(), calendar.current_selected_month);

    $('#calendar_header_top_current_month_year').html(calendar.getMonthNameByIndex(calendar.current_selected_month) + ', ' + calendar.current_your);
    $('#calendar_header_top_current_day').html(d.getDate() + ' ' + calendar.getMonthNameByIndex2(d.getMonth()).toLowerCase());
}

function cal_nextYear() {
    calendar.current_your = d.getFullYear() + 1;
    drawCalendarYear(calendar.current_your);

    d.setFullYear(calendar.current_your);
    calendar.draw('calendar_grid_data', d.getFullYear(), calendar.current_selected_month);

    $('#calendar_header_top_current_month_year').html(calendar.getMonthNameByIndex(calendar.current_selected_month) + ', ' + calendar.current_your);
}

function cal_prevYear() {
    calendar.current_your = d.getFullYear() - 1;
    drawCalendarYear(calendar.current_your);

    d.setFullYear(calendar.current_your);
    calendar.draw('calendar_grid_data', d.getFullYear(), calendar.current_selected_month);

    $('#calendar_header_top_current_month_year').html(calendar.getMonthNameByIndex(calendar.current_selected_month) + ', ' + calendar.current_your);
}

function cal_nextMonth() {
    d.setMonth(d.getMonth() + 1);
    calendar.current_your = d.getFullYear();
    calendar.current_selected_month = d.getMonth();

    calendar.draw('calendar_grid_data', d.getFullYear(), calendar.current_selected_month);
    $('#calendar_header_top_current_month_year').html(calendar.getMonthNameByIndex(calendar.current_selected_month) + ', ' + calendar.current_your);
}

function cal_prevMonth() {
    d.setMonth(d.getMonth() - 1);
    calendar.current_your = d.getFullYear();
    calendar.current_selected_month = d.getMonth();

    calendar.draw('calendar_grid_data', d.getFullYear(), calendar.current_selected_month);
    $('#calendar_header_top_current_month_year').html(calendar.getMonthNameByIndex(calendar.current_selected_month) + ', ' + calendar.current_your);
}

function cal_nextDay() {
    let last_of_day_month = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();

    current_day += 1;

    if (current_day > last_of_day_month) {
        // /d.setMonth(d.getMonth() + 1, 0);
        d.setDate(d.getDate() + 1);

        calendar.current_selected_month = d.getMonth();
        calendar.current_your = $.format.date(d, 'yyyy');

        calendar.draw('calendar_grid_data', d.getFullYear(), calendar.current_selected_month);

        current_day = new Date(d.getFullYear(), d.getMonth(), 1).getDate();

        calendar.setCurrentDay(current_day);

        $('#calendar_header_top_current_month_year').html(calendar.getMonthNameByIndex(calendar.current_selected_month) + ', ' + calendar.current_your);
    } else {
        calendar.setCurrentDay(current_day);
        d.setDate(d.getDate() + 1);
    }

    $('#calendar_header_top_current_day').html(d.getDate() + ' ' + calendar.getMonthNameByIndex2(d.getMonth()).toLowerCase());
}

function cal_prevDay() {
    current_day -= 1;

    if (current_day <= 0) {
        // d.setMonth(d.getMonth() - 1);
        d.setDate(d.getDate() - 1);

        calendar.current_selected_month = d.getMonth();
        calendar.current_your = $.format.date(d, 'yyyy');

        calendar.draw('calendar_grid_data', d.getFullYear(), calendar.current_selected_month);

        current_day = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();

        calendar.setCurrentDay(current_day);

        $('#calendar_header_top_current_month_year').html(calendar.getMonthNameByIndex(calendar.current_selected_month) + ', ' + calendar.current_your);
    } else {
        calendar.setCurrentDay(current_day);
        d.setDate(d.getDate() - 1);
    }

    $('#calendar_header_top_current_day').html(d.getDate() + ' ' + calendar.getMonthNameByIndex2(d.getMonth()).toLowerCase());
}

function setActiveTab(index) {
    $('.calendar_selector_second span').each(function () {
        $(this).removeClass('calendar_selector_second_selected');
    });
    $('#calendar_selector_second_' + index).addClass('calendar_selector_second_selected');

    $('.work_services_block .page_tab').each(function () {
        if (index === parseInt($(this).data('index'))) {
            $(this).show();
        } else {
            $(this).hide();
        }

        if (index === 2) {
            calendar.updateWidthDataLineDivs();
        }
    });
}

function drawCalendarYear(year_YYYY) {
    var ss = '';

    for (var i = 0; i < 12; i++) {
        ss += calendar.renderCalendarTable_V2(year_YYYY, i);
    }
    $('#calendar2_header_top_current_year').html(year_YYYY + ' год');
    $('#page_tab_3_content').html(ss);
}

function drawDayPage() {
    var data = [{
        img_url: '/local/templates/suek.new/images/temp/calendar_1.png',
        type: 'Мероприятия',
        datename: '11 марта',
        title: 'Всемирная универсиада-2019 в Красноярске (СУЭК поддерживает различные социально значимые акции)',
        hashtags: '#работа, #развитие, #ярмарка',
        favorites: 153,
        messages: 36,
        visited: 255,
        shareded: 56
    },
    {
        img_url: '/local/templates/suek.new/images/temp/calendar_2.png',
        type: 'Мероприятия',
        datename: '11 марта',
        title: 'Добыча 470-миллионной тонны угля с начала эксплуатации разреза',
        hashtags: '#работа, #развитие, #ярмарка',
        favorites: 153,
        messages: 36,
        visited: 255,
        shareded: 56
    },
    {
        img_url: '/local/templates/suek.new/images/temp/calendar_3.png',
        type: 'Мероприятия',
        datename: '11 марта',
        title: 'Проведение конкурсов  "А ну-ка,  девушки", посвященных  Международному женскому дню',
        hashtags: '#работа, #развитие, #ярмарка',
        favorites: 23,
        messages: 10,
        visited: 105,
        shareded: 2
    },
    {
        img_url: '/local/templates/suek.new/images/temp/calendar_4.png',
        type: 'Мероприятия',
        datename: '11 марта',
        title: 'Итоги конкурса среди посетителей фотовыставки фестиваля «Первозданная Россия» на объектах Универсиады',
        hashtags: '#работа, #развитие, #ярмарка',
        favorites: 23,
        messages: 10,
        visited: 105,
        shareded: 2
    },
    {
        img_url: '/local/templates/suek.new/images/temp/calendar_5.png',
        type: 'Корпоративный университет',
        datename: '11 марта',
        title: 'Первый обучающий семинар «Школа впереди перемен: новое видение места СОШ в жизни социума»',
        hashtags: '#работа, #развитие, #ярмарка',
        favorites: 23,
        messages: 10,
        visited: 105,
        shareded: 2
    },
    {
        img_url: '/local/templates/suek.new/images/temp/calendar_6.png',
        type: 'Охрана труда',
        datename: '11 марта',
        title: 'Начало предприятий подготовки к паводку',
        hashtags: '#работа, #развитие, #ярмарка',
        favorites: 23,
        messages: 10,
        visited: 105,
        shareded: 2
    },
    {
        img_url: '/local/templates/suek.new/images/temp/calendar_7.png',
        type: 'Мероприятия',
        datename: '11 марта',
        title: 'Соревнования по зимней рыбалке среди предприятий СУЭК-Красноярск',
        hashtags: '#работа, #развитие, #ярмарка',
        favorites: 231,
        messages: 530,
        visited: 1025,
        shareded: 138
    },
    ];

    for (let item of data) {
        var ss = '';

        ss += '<div class="item_day_info">';
        ss += '<div class="item_day_info_img_c">';
        ss += '<div class="item_day_info_img_type">' + item.type + '</div>';
        ss += '<img class="item_day_info_img" src="' + item.img_url + '"/>';
        ss += '</div>';
        ss += '<div class="item_day_info_p2">';
        ss += '<div class="item_day_info_datename">';
        ss += '<img src="/local/templates/suek.new/images/day-info-clock.svg"/><span>' + item.datename + '</span>';
        ss += '</div>';
        ss += '<div class="item_day_info_titlename">';
        ss += item.title;
        ss += '</div>';
        ss += '<div class="item_day_info_hashtags">';
        ss += item.hashtags;
        ss += '</div>';
        ss += '</div>';
        ss += '<div class="item_day_info_footerIcons">';
        ss += '<div class="item_day_info_footerIcons_section1">';
        ss += '<div class="item_day_info_footerIcons_item"><img src="/local/templates/suek.new/images/day-info-favorites.svg"/><span>' + item.favorites + '</span></div>';
        ss += '<div class="item_day_info_footerIcons_item"><img src="/local/templates/suek.new/images/day-info-messages.svg"/><span>' + item.messages + '</span></div>';
        ss += '<div class="item_day_info_footerIcons_item"><img src="/local/templates/suek.new/images/day-info-visited.svg"/><span>' + item.visited + '</span></div>';
        ss += '</div>';
        ss += '<div class="item_day_info_footerIcons_section2">';
        ss += '<div class="item_day_info_footerIcons_item"><img src="/local/templates/suek.new/images/day-info-shareded.svg"/><span>' + item.shareded + '</span></div>';
        ss += '</div>';
        ss += '</div>';
        ss += '</div>';

        $('#page_tab_1_c').append(ss);
    }
}

function initDropdownLists() {
    if ($('.calendar_top_filter_dectop').is(':visible')) {
        $('.calendar_top_filter_dectop select').styler();
    }

    if ($('.calendar_top_filter_line2').is(':visible')) {
        $('.calendar_top_filter_line2 select').styler();
    }
}

function synhronizeRegionValue(type_select, dom_obj) {
    if (type_select === 1) {
        $('#filter_region').val($(dom_obj).val());
        $('#filter_region').trigger('refresh');
    } else {
        $('#filter_region_top').val($(dom_obj).val());
        $('#filter_region_top').trigger('refresh');
    }
}

$(function () {
    calendar.current_selected_month = d.getMonth();
    calendar.current_your = $.format.date(d, 'yyyy');

    $('#calendar_header_top_current_day').html(d.getDate() + ' ' + calendar.getMonthNameByIndex2(d.getMonth()).toLowerCase());

    calendar.draw('calendar_grid_data', d.getFullYear(), calendar.current_selected_month);

    calendar.listInDayAdd(8, 'color_point_green', '«Первозданная Россия»');
    calendar.listInDayAdd(8, 'color_point_red', 'Объем добычи алмазов в 2018 году');
    calendar.listInDayAdd(8, 'color_point_blue', 'Производство: вклад Газпрома в развитие страны');
    calendar.listInDayAddMoree(8, 3);

    calendar.listInDayAdd(20, 'color_point_yellow', 'По Балтийскому морю яхтсмены пройдут 1000 морских миль');
    calendar.listInDayAdd(20, 'color_point_darkcyan', 'Всероссийская Универсиада 2020');
    calendar.listInDayAdd(21, 'color_point_darkcyan', 'Всероссийская Универсиада 2020');
    calendar.listInDayAdd(22, 'color_point_black', 'Всероссийская Универсиада 2020');

    // calendar.addClass(23, 'bk_color_cell_1')

    // calendar.setHoliday(11);
    // calendar.setHoliday(25);

    $('#calendar_header_top_current_month_year').html(calendar.getMonthNameByIndex(calendar.current_selected_month) + ', ' + calendar.current_your);


    drawDayPage();
    drawCalendarYear(d.getFullYear());

    $('#choose_day_in_filter').datepicker();
    $('#choose_day_calendar').on('click', function () {
        $('#choose_day_in_filter').datepicker('show');
    });

    initDropdownLists();

    $(window).resize(function () {
        calendar.updateWidthDataLineDivs();

        initDropdownLists();
    });

});

(function (calendar_popup, $, undefined) {

    var monthNames11 = 'Январь Февраль Март Апрель Май Июнь Июль Август Сентябрь Октябрь Ноябрь Декабрь'.split(' ');
    var monthNames22 = 'Января Февраля Марта Апреля Май Июня Июля Августа Сентября Октября Ноября Декабря'.split(' ');

    var server_date = new Date(); // need remove

    /**
     * получить номер дня недели для date, от 0(пн) до 6(вс)
     * @param date
     */
    function getDay(date) { //
        var day = date.getDay();
        if (day === 0) {
            day = 7;
        }
        return day - 1;
    }

    function prevMonth(dateObj) {
        var tempDateObj = new Date(dateObj);

        if (tempDateObj.getMonth) {
            tempDateObj.setMonth(tempDateObj.getMonth() - 1);
        } else {
            tempDateObj.setYear(tempDateObj.getYear() - 1);
            tempDateObj.setMonth(12);
        }
        return tempDateObj;
    }

    calendar_popup.getWeekNumber = function (d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        // Return array of year and week number
        return [d.getUTCFullYear(), weekNo];
    };

    calendar_popup.renderCalendarTable = function (year, month) {
        var d = new Date(year, month);
        d.setHours(0, 0, 0, 0);
        server_date.setHours(0, 0, 0, 0);

        var prev = prevMonth(d);
        var lastDayOfMonth = new Date(prev.getFullYear(), prev.getMonth() + 1, 0);
        lastDayOfMonth.setDate(lastDayOfMonth.getDate() - (getDay(d) - 1));


        var table = ['<div class="popup_calendar_grid_header_row"><div class="popup_calendar_grid_col">пн</div>\
            <div class="popup_calendar_grid_col">вт</div>\
            <div class="popup_calendar_grid_col">ср</div>\
            <div class="popup_calendar_grid_col">чт</div>\
            <div class="popup_calendar_grid_col">пт</div>\
            <div class="popup_calendar_grid_col">сб</div>\
            <div class="popup_calendar_grid_col">вс</div>\
            </div><div class="popup_calendar_grid_row" data-yearAndNumWeek="' + calendar_popup.getWeekNumber(d).join('-') + '">'];

        for (var i = 0; i < getDay(d); i++) {
            var t = getDay(lastDayOfMonth);

            table.push('<div class="popup_calendar_grid_col ' + (t === 5 || t === 6 ? 'date-weekend' : '') + '" id="cal_cell_' + $.format.date(lastDayOfMonth, 'd_M_yyyy') + '"><span>' + ('0' + lastDayOfMonth.getDate()).slice(-2) + '</span></div>');

            lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1);
        }

        while (d.getMonth() === month) {
            var t = getDay(d);

            table.push('<div id="cal_cell_' + $.format.date(d, 'd_M_yyyy') + '" class="popup_calendar_grid_col date-in_active-month ' + (t === 5 || t === 6 ? 'date-weekend' : '') + ' ' + (server_date.getTime() === d.getTime() ? 'date_current' : '') + '"><span>' + ('0' + d.getDate()).slice(-2) + '</span></div>');

            d.setDate(d.getDate() + 1);

            if (t % 7 === 6) {
                table.push('</div><div class="popup_calendar_grid_row" data-yearAndNumWeek="' + calendar_popup.getWeekNumber(d).join('-') + '">');
            }
        }

        if (getDay(d) !== 0) {
            for (var i = getDay(d); i < 7; i++) {
                var t = getDay(d);

                table.push('<div class="popup_calendar_grid_col ' + (t === 5 || t === 6 ? 'date-weekend' : '') + '" id="cal_cell_' + $.format.date(d, 'd_M_yyyy') + '"><span>' + ('0' + d.getDate()).slice(-2) + '</span></div>');

                d.setDate(d.getDate() + 1);
            }
        }

        table.push('</div>');

        return table.join('');
    };

    calendar_popup.getMonthNameByIndex = function (index) {
        return monthNames11[index];
    };

    calendar_popup.getMonthNameByIndex2 = function (index) {
        return monthNames22[index];
    };



})(window.calendar_popup = window.calendar_popup || {}, jQuery);

$(function (calendar_archive, $, undefined) {

    var monthNames111 = 'Январь Февраль Март Апрель Май Июнь Июль Август Сентябрь Октябрь Ноябрь Декабрь'.split(' ');
    var monthNames222 = 'Января Февраля Марта Апреля Май Июня Июля Августа Сентября Октября Ноября Декабря'.split(' ');

    var server_date = new Date();

    /**
     * получить номер дня недели для date, от 0(пн) до 6(вс)
     * @param date
     */
    function getDay(date) { //
        var day = date.getDay();
        if (day === 0) {
            day = 7;
        }
        return day - 1;
    }

    function prevMonth(dateObj) {
        var tempDateObj = new Date(dateObj);

        if (tempDateObj.getMonth) {
            tempDateObj.setMonth(tempDateObj.getMonth() - 1);
        } else {
            tempDateObj.setYear(tempDateObj.getYear() - 1);
            tempDateObj.setMonth(12);
        }

        return tempDateObj;
    }

    calendar_archive.getWeekNumber = function (d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        // Return array of year and week number
        return [d.getUTCFullYear(), weekNo];
    };

    calendar_archive.renderCalendarTable = function (year, month, data) {
        const d = new Date(year, month);
        d.setHours(0, 0, 0, 0);
        server_date.setHours(0, 0, 0, 0);

        const prev = prevMonth(d);
        const lastDayOfMonth = new Date(prev.getFullYear(), prev.getMonth() + 1, 0);
        lastDayOfMonth.setDate(lastDayOfMonth.getDate() - (getDay(d) - 1));


        const table = ['<div class="archive_calendar_grid_header_row"><div class="archive_calendar_grid_col">пн</div>\
            <div class="archive_calendar_grid_col">вт</div>\
            <div class="archive_calendar_grid_col">ср</div>\
            <div class="archive_calendar_grid_col">чт</div>\
            <div class="archive_calendar_grid_col">пт</div>\
            <div class="archive_calendar_grid_col">сб</div>\
            <div class="archive_calendar_grid_col">вс</div>\
            </div><div class="archive_calendar_grid_row" data-yearAndNumWeek="' + calendar_archive.getWeekNumber(d).join('-') + '">'];

        for (var i = 0; i < getDay(d); i++) {
            var t = getDay(lastDayOfMonth);

            table.push('<div class="archive_calendar_grid_col ' +
                (t === 5 || t === 6 ? 'date-weekend' : '') +
                '" id="cal_cell_' + $.format.date(lastDayOfMonth, 'd_M_yyyy') + '"><span>' + ('0' + lastDayOfMonth.getDate()).slice(-2) + '</span></div>');

            lastDayOfMonth.setDate(lastDayOfMonth.getDate() + 1);
        }

        const keys_data = Object.keys(data);

        // ячейки календаря с датами
        while (d.getMonth() === month) {
            var t = getDay(d);

            var ss = '<div id="cal_cell_' + $.format.date(d, 'd_M_yyyy') + '" class="archive_calendar_grid_col date-in_active-month ' +
                (t === 5 || t === 6 ? 'date-weekend' : '') +
                ' ' +
                ($.inArray('' + d.getDate(), keys_data) >= 0 ? 'archive_found' : '') +
                ' ' +
                (server_date.getTime() === d.getTime() ? 'date_current' : '') + '">';

            if ($.inArray('' + d.getDate(), keys_data) >= 0) {
                ss += '<a href="' + data[d.getDate()] + '">' + ('0' + d.getDate()).slice(-2) + '</a>';
            } else {
                ss += '<span>' + ('0' + d.getDate()).slice(-2) + '</span>';
            }
            ss += '</div>';

            table.push(ss);

            d.setDate(d.getDate() + 1);

            if (t % 7 === 6) {
                table.push('</div><div class="archive_calendar_grid_row" data-yearAndNumWeek="' + calendar_archive.getWeekNumber(d).join('-') + '">');
            }
        }

        // добить таблицу пустыми ячейками, если нужно
        if (getDay(d) !== 0) {
            for (var i = getDay(d); i < 7; i++) {
                var t = getDay(d);

                table.push('<div class="archive_calendar_grid_col ' + (t === 5 || t === 6 ? 'date-weekend' : '') + '" id="cal_cell_' + $.format.date(d, 'd_M_yyyy') + '"><span>' + ('0' + d.getDate()).slice(-2) + '</span></div>');

                d.setDate(d.getDate() + 1);
            }
        }

        table.push('</div>');

        return table.join('');
    };

    calendar_archive.getMonthNameByIndex = function (index) {
        return monthNames111[index];
    };

    calendar_archive.getMonthNameByIndex2 = function (index) {
        return monthNames222[index];
    };

    window.calendar_archive = window.calendar_archive || {};

});

