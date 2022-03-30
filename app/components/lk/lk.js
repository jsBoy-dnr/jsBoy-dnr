/* eslint-disable no-undefined */
/* eslint-disable no-shadow-restricted-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable radix */
/* eslint-disable no-shadow */
/* eslint-disable new-cap */
/* eslint-disable eqeqeq */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */
/* eslint-disable dot-notation */
/* eslint-disable camelcase */

(function (down_menu, $, undefined) {
    down_menu.init = function (jquery_dom_obj, container, callback_end) {
        let isDown = false;
        let startY;
        let scrollLeft;
        let dist;

        const end = (e) => {

            isDown = false;
            jquery_dom_obj.removeClass('active');
        };

        const start = (e) => {

            startY = e.pageY || e.originalEvent.touches[0].pageY;

            isDown = true;
            jquery_dom_obj.addClass('active');
            scrollLeft = parseInt(jquery_dom_obj.css('left'));
        };

        const move = (e) => {

            if (!isDown) {
                return;
            }

            e.preventDefault();
            const x = e.pageY || e.originalEvent.touches[0].pageY;
            dist = (x - startY);

            // console.log(x - startY, startY, x);

            if (dist < 0) {
                $(container).css('bottom', 0);
            } else {
                $(container).css('bottom', -1 * dist);
            }

            if (dist > $(container).height() * 0.3) {
                isDown = false;

                $(container).animate({
                    bottom: -1 * $(container).height()
                }, 500, function () {
                    if (callback_end != undefined) {
                        callback_end();
                    }
                });
            }
        };

        jquery_dom_obj.on('touchstart mousedown', function (event) {
            // event.preventDefault();
            start(event);
        });

        jquery_dom_obj.on('touchmove mousemove', function (event) {
            // event.preventDefault();
            move(event);
        });

        jquery_dom_obj.on('touchend mouseup mouseleave', function (event) {
            // event.preventDefault();
            end(event);
        });
    };

})(window.down_menu = window.down_menu || {}, jQuery);

function getBodyScrollTop() {
    var el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
}

//  Global center
(function ($) {
    jQuery.fn.center_v2 = function () {
        this.css('position', 'absolute');

        var _top_calc = (($(window).height() - this.outerHeight()) / 2);

        if (_top_calc < 0) {
            _top_calc = $(window).scrollTop() + 25;
        } else {
            _top_calc = _top_calc + $(window).scrollTop();
        }

        this.css('top', _top_calc + 'px');
        this.css('left', (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + 'px');
        return this;
    };
})(jQuery);

function menu2Change(dom_obj) {
    $('.lk_ds_menu_2 > span').removeClass('lk_ds_menu_2_current');

    $(dom_obj).addClass('lk_ds_menu_2_current');
}



var data_draw = {
    'SH. Them. CM. Kirov': {
        name: 'Шахта им. С.М. Кирова',
        site_url: 'https:// ya.ru',
        address: '662200, г. Назарово, ул. Березовая роща, д. 1.',
        about: 'В 1963-1970 годах была произведена реконструкция шахты с доведением производственной мощности до 3,0 млн тонн в год. Пласты угля газоносные. Категория шахты по метану — сверхкатегорийная. Рабочие пласты угля, их мощность и угол залегания: пл. «Болдыревский» — мощность 1,8-2,4 м, угол залегания от 0 до 10°.; пл. «Поленовский» — мощность 1,4-1,8 м, угол залегания от 0 до 12°. Абсолютная газообильность шахты — 181,7 м3 /мин. Производственная мощность шахты — 4 000 тыс. тонн угля в год. Объем остаточных запасов угля составляет около 956 млн тонн. Используемое очистное оборудование: комплексы JOY, комбайны SL-300, 4LS-20. Добыча в 2009 году: 4,7 млн.тонн.',
        photos: [
            '/local/templates/suek.new/images/lk_bg.png',
            '/local/templates/suek.new/images/bk_top_feb.jpeg',
            '/local/templates/suek.new/images/bg-bank-znanii.png'
        ],
        info: {
            produced_by: '9 млн.т.',
            brand: 'ГР',
            cv: '3020',
            a: '19,5%',
            list: [{
                type: 1,
                name: 'ОФ им. С.М. Кирова №1',
                power: '9,0  млн.т./г'
            },
            {
                type: 1,
                name: 'ОФ им. С.М. Кирова №2',
                power: '2,7  млн.т./г'
            },
            {
                type: 2,
                name: 'Ст. ленинск-кузнецкий 1',
                data: ['987 ваг/сутки', '4,6 млн.т/г']
            }
            ]
        }
    },
    'SH. Komsomolets': {
        name: 'Шахта «Комсомолец»',
        site_url: 'https:// ya.ru',
        address: '662200, г. Назарово, ул. Березовая роща, д. 1.',
        about: 'В 1963-1970 годах была произведена реконструкция шахты с доведением производственной мощности до 3,0 млн тонн в год. Пласты угля газоносные. Категория шахты по метану — сверхкатегорийная. Рабочие пласты угля, их мощность и угол залегания: пл. «Болдыревский» — мощность 1,8-2,4 м, угол залегания от 0 до 10°.; пл. «Поленовский» — мощность 1,4-1,8 м, угол залегания от 0 до 12°. Абсолютная газообильность шахты — 181,7 м3 /мин. Производственная мощность шахты — 4 000 тыс. тонн угля в год. Объем остаточных запасов угля составляет около 956 млн тонн. Используемое очистное оборудование: комплексы JOY, комбайны SL-300, 4LS-20. Добыча в 2009 году: 4,7 млн.тонн.',
        photos: [
            '/local/templates/suek.new/images/lk_bg.png',
            '/local/templates/suek.new/images/bk_top_feb.jpeg',
            '/local/templates/suek.new/images/bg-bank-znanii.png'
        ],
        info: {
            produced_by: '9 млн.т.',
            brand: 'ГР',
            cv: '3020',
            a: '19,5%',
            list: [{
                type: 1,
                name: 'ОФ им. С.М. Кирова №1',
                power: '10,0  млн.т./г'
            },
            {
                type: 1,
                name: 'ОФ им. С.М. Кирова №2',
                power: '3,7  млн.т./г'
            },
            {
                type: 2,
                name: 'Ст. ленинск-кузнецкий 1',
                data: ['887 ваг/сутки', '5,6 млн.т/г']
            }
            ]
        }
    },
    'SH. im. A.D. Rubana': {
        name: 'Шахта им. А.Д. Рубана',
        site_url: 'https:// ya.ru',
        address: '662200, г. Назарово, ул. Березовая роща, д. 1.',
        about: 'В 1963-1970 годах была произведена реконструкция шахты с доведением производственной мощности до 3,0 млн тонн в год. Пласты угля газоносные. Категория шахты по метану — сверхкатегорийная. Рабочие пласты угля, их мощность и угол залегания: пл. «Болдыревский» — мощность 1,8-2,4 м, угол залегания от 0 до 10°.; пл. «Поленовский» — мощность 1,4-1,8 м, угол залегания от 0 до 12°. Абсолютная газообильность шахты — 181,7 м3 /мин. Производственная мощность шахты — 4 000 тыс. тонн угля в год. Объем остаточных запасов угля составляет около 956 млн тонн. Используемое очистное оборудование: комплексы JOY, комбайны SL-300, 4LS-20. Добыча в 2009 году: 4,7 млн.тонн.',
        photos: [
            '/local/templates/suek.new/images/lk_bg.png',
            '/local/templates/suek.new/images/bk_top_feb.jpeg',
            '/local/templates/suek.new/images/bg-bank-znanii.png'
        ],
        info: {
            produced_by: '9 млн.т.',
            brand: 'ГР',
            cv: '3020',
            a: '19,5%',
            list: [{
                type: 1,
                name: 'ОФ им. С.М. Кирова №1',
                power: '11,0  млн.т./г'
            },
            {
                type: 1,
                name: 'ОФ им. С.М. Кирова №2',
                power: '2,0  млн.т./г'
            },
            {
                type: 2,
                name: 'Ст. ленинск-кузнецкий 1',
                data: ['905 ваг/сутки', '3,2 млн.т/г']
            }
            ]
        }
    },
    'IM. November 7': {
        name: 'Шахта им. 7 Ноября',
        site_url: 'https:// ya.ru',
        address: '662200, г. Назарово, ул. Березовая роща, д. 1.',
        about: 'В 1963-1970 годах была произведена реконструкция шахты с доведением производственной мощности до 3,0 млн тонн в год. Пласты угля газоносные. Категория шахты по метану — сверхкатегорийная. Рабочие пласты угля, их мощность и угол залегания: пл. «Болдыревский» — мощность 1,8-2,4 м, угол залегания от 0 до 10°.; пл. «Поленовский» — мощность 1,4-1,8 м, угол залегания от 0 до 12°. Абсолютная газообильность шахты — 181,7 м3 /мин. Производственная мощность шахты — 4 000 тыс. тонн угля в год. Объем остаточных запасов угля составляет около 956 млн тонн. Используемое очистное оборудование: комплексы JOY, комбайны SL-300, 4LS-20. Добыча в 2009 году: 4,7 млн.тонн.',
        photos: [
            '/local/templates/suek.new/images/lk_bg.png',
            '/local/templates/suek.new/images/bk_top_feb.jpeg',
            '/local/templates/suek.new/images/bg-bank-znanii.png'
        ],
        info: {
            produced_by: '9 млн.т.',
            brand: 'ГР',
            cv: '3020',
            a: '19,5%',
            list: [{
                type: 1,
                name: 'ОФ им. С.М. Кирова №1',
                power: '9,0  млн.т./г'
            },
            {
                type: 1,
                name: 'ОФ им. С.М. Кирова №2',
                power: '2,7  млн.т./г'
            },
            {
                type: 2,
                name: 'Ст. ленинск-кузнецкий 1',
                data: ['787 ваг/сутки', '5,6 млн.т/г']
            }
            ]
        }
    },
    'SH. Polysaevskaya': {
        name: 'Шахта «Полысаевская»',
        site_url: 'https:// ya.ru',
        address: '662200, г. Назарово, ул. Березовая роща, д. 1.',
        about: 'В 1963-1970 годах была произведена реконструкция шахты с доведением производственной мощности до 3,0 млн тонн в год. Пласты угля газоносные. Категория шахты по метану — сверхкатегорийная. Рабочие пласты угля, их мощность и угол залегания: пл. «Болдыревский» — мощность 1,8-2,4 м, угол залегания от 0 до 10°.; пл. «Поленовский» — мощность 1,4-1,8 м, угол залегания от 0 до 12°. Абсолютная газообильность шахты — 181,7 м3 /мин. Производственная мощность шахты — 4 000 тыс. тонн угля в год. Объем остаточных запасов угля составляет около 956 млн тонн. Используемое очистное оборудование: комплексы JOY, комбайны SL-300, 4LS-20. Добыча в 2009 году: 4,7 млн.тонн.',
        photos: [
            '/local/templates/suek.new/images/lk_bg.png',
            '/local/templates/suek.new/images/bk_top_feb.jpeg',
            '/local/templates/suek.new/images/bg-bank-znanii.png'
        ],
        info: {
            produced_by: '9 млн.т.',
            brand: 'ГР',
            cv: '3020',
            a: '19,5%',
            list: [{
                type: 1,
                name: 'ОФ им. С.М. Кирова №1',
                power: '8,0  млн.т./г'
            },
            {
                type: 1,
                name: 'ОФ им. С.М. Кирова №2',
                power: '3,7  млн.т./г'
            },
            {
                type: 2,
                name: 'Ст. ленинск-кузнецкий 1',
                data: ['900 ваг/сутки', '4,0 млн.т/г']
            }
            ]
        }
    }
};

function gallaryGotoLeft() {
    let v = $('#lk_ds_gallary_items .lk_ds_gallary_item:last')[0].outerHTML;
    $('#lk_ds_gallary_items .lk_ds_gallary_item:last').remove();

    $('#lk_ds_gallary_items').css('left', -270);
    $('#lk_ds_gallary_items').prepend(v);

    $('#lk_ds_gallary_items').animate({
        left: '+=270'
    }, 1000);
}

function gallaryGotoRight() {
    $('#lk_ds_gallary_items').animate({
        left: '-=270'
    }, 1000, function () {

        let v = $('#lk_ds_gallary_items .lk_ds_gallary_item:first')[0].outerHTML;
        $('#lk_ds_gallary_items .lk_ds_gallary_item:first').remove();
        $('#lk_ds_gallary_items').css('left', 0);
        $('#lk_ds_gallary_items').append(v);
    });
}

function openInfoOnjectInPopup(name) {
    let item = data_draw[name];

    if (item == undefined) {
        return;
    }

    var ss = '<div id="lk_ds_gallary_items">';

    for (let url of item.photos) {
        ss += '<div class="lk_ds_gallary_item"><img src="' + url + '" /></div>';
    }

    ss += '</div>';

    ss += '<div id="lk_ds_gallary_arrow_left" onclick="gallaryGotoLeft()"><img src="/local/templates/suek.new/images/icons/gallary_arrow_left.svg" /></div>';
    ss += '<div id="lk_ds_gallary_arrow_right" onclick="gallaryGotoRight()"><img src="/local/templates/suek.new/images/icons/gallary_arrow_right.svg" /></div>';

    $('#popup_map_info_wrapper_left_images').html(ss);

    ss = '';

    for (var i = 0; i < item.photos.length; i++) {
        if (i < 3) {
            ss += '<a target="_blank" href="' + item.photos[i] + '" class="popup_map_info_wrapper_left_images_2_item" data-lightbox="gallery_1">';
            ss += '<img src="' + item.photos[i] + '" />';
            ss += '</a>';
        } else {
            ss += '<a target="_blank" href="' + item.photos[i] + '" class="popup_map_info_wrapper_left_images_2_item" style="display:none" data-lightbox="gallery_1">';
            ss += '<img src="' + item.photos[i] + '" />';
            ss += '</a>';
        }
    }

    $('#popup_map_info_wrapper_left_images_2').html(ss);

    $('.popup_map_info_wrapper_right_header > span').html(item.name);
    $('.popup_map_info_wrapper_right_address').html(item.address);
    $('.popup_map_info_wrapper_right_about').html(item.about);

    let _z_index = 100;

    $('.popup_fade').css({
        'z-index': _z_index
    });
    $('.popup_info_1').css({
        'z-index': _z_index + 1
    });

    $('.popup_fade').show();
    $('.popup_info_1').show();

    setTimeout(function () {
        $('.popup_info_1').center_v2();
    }, 300);

    $('.popup_info_1').center_v2();
}

function hidePopupInfo_1() {
    $('.popup_fade').hide();
    $('.popup_info_1').hide();
}

function selectObject(name) {
    let item = data_draw[name];

    if (item == undefined) {
        return;
    }

    $('#lk_ds_map .lk_ds_map_item').each(function () {
        $(this).find('> *:first').attr('fill-opacity', '0.6');
    });
    $('#lk_ds_map .lk_ds_map_item[data-name="' + name + '"] > *:first').attr('fill-opacity', '1');

    var ss = '';

    ss += '<div class="lk_ds_map_info_header">';
    ss += '<span class="circle"></span><span>' + item.name + '</span>';
    ss += '</div>';
    ss += '<div class="lk_ds_map_info_about"><span onclick="openInfoOnjectInPopup(\'' + name + '\')">Подробнее о шахте</span></div>';

    ss += '<div><div class="lk_ds_map_info_table_1">';

    ss += '<div class="lk_ds_map_info_h_grid">Произведено</div>';
    ss += '<div class="lk_ds_map_info_h_grid">Марка</div>';
    ss += '<div class="lk_ds_map_info_h_grid">CV</div>';
    ss += '<div class="lk_ds_map_info_h_grid">A</div>';

    ss += '<div class="lk_ds_map_info_v_grid">' + item.info.produced_by + '</div>';
    ss += '<div class="lk_ds_map_info_v_grid">' + item.info.brand + '</div>';
    ss += '<div class="lk_ds_map_info_v_grid">' + item.info.cv + '</div>';
    ss += '<div class="lk_ds_map_info_v_grid">' + item.info.a + '</div>';

    ss += '</div></div>';

    for (var v in item.info.list) {
        if (v.type == 1) {
            ss += '<div class="lk_ds_map_info_type_1">';
            ss += '<div class="lk_ds_map_info_type_n_header">';
            ss += '<span class="triangle-up"></span><span>' + v.name + '</span>';
            ss += '</div>';
            ss += '<div class="lk_ds_map_info_h_grid">Мощность</div>';
            ss += '<div class="lk_ds_map_info_type_power">' + v.power + '</div>';
            ss += '</div>';
        } else {
            ss += '<div class="lk_ds_map_info_type_2">';
            ss += '<div class="lk_ds_map_info_type_n_header">';
            ss += '<span class="square"></span><span>' + v.name + '</span>';
            ss += '</div>';
            ss += '<div class="lk_ds_map_info_type_grid2">';
            ss += '<div class="lk_ds_map_info_h_grid">ЕТП</div>';
            ss += '<div class="lk_ds_map_info_h_grid">ЕТП</div>';
            ss += '<div class="lk_ds_map_info_v_grid">' + v.data[0] + '</div>';
            ss += '<div class="lk_ds_map_info_v_grid">' + v.data[1] + '</div>';
            ss += '</div>';
            ss += '</div>';
        }
    }

    ss += '<div class="lk_ds_map_info_show_lenegd_map"><span>Смотреть легенду карты</span></div>';

    $('#lk_ds_map_info_2').html(ss);
}

var d = new Date();

function initWeekClick() {
    $('#lk_ds_calendar_popup .popup_calendar_grid_row').click(function () {

        $('#lk_ds_calendar_popup .popup_calendar_grid_row').removeClass('popup_calendar_grid_row_current');
        $(this).addClass('popup_calendar_grid_row_current');

    });
}

function cal_nextMonth() {
    d.setMonth(d.getMonth() + 1);
    $('#lk_ds_calendar_popup_header > span').html(calendar_popup.getMonthNameByIndex(d.getMonth()) + ', ' + d.getFullYear());
    $('#lk_ds_calendar_popup').html(calendar_popup.renderCalendarTable(d.getFullYear(), d.getMonth()));
    initWeekClick();
}

function cal_prevMonth() {
    d.setMonth(d.getMonth() - 1);
    $('#lk_ds_calendar_popup_header > span').html(calendar_popup.getMonthNameByIndex(d.getMonth()) + ', ' + d.getFullYear());
    $('#lk_ds_calendar_popup').html(calendar_popup.renderCalendarTable(d.getFullYear(), d.getMonth()));
    initWeekClick();
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randChartValues(limit) {
    let result = [];
    let y = randomIntFromInterval(10, 120);

    for (var i = 0; i < limit; i += 1) {
        let add = randomIntFromInterval(-30, 30);

        while (y + add < 10) {
            add = randomIntFromInterval(-30, 30);
        }

        y += add;
        result.push(y);
    }

    return result;
}

//  верхний график
var data11 = {
    legends: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    items: [18.5, 19.5, 21.0, 19.5, 22.5, 23.5, 23.5, 23.5, 24.5, 25],
    support: [20, 22, 23, 23.3, 24, 26, 26, 27, 27, 26.8]
};

//  другие графики ниже
var data2_1 = {
    legends: ['Янв,15', 'Июл,15', 'Янв,16', 'Июл,16', 'Янв,17', 'Июл,17', 'Янв,18', 'Июл,18', 'Янв,19', 'Июл,19', 'Янв,20', 'Июл,20'],
    legendsOutOfChart: [{
        color: '#949300',
        label: 'gC NEWCFOB Newcastle, Australia6000globalCOALUSD/t'
    },
    {
        color: '#707274',
        label: 'API 2CIF ARA, NW Europe6000Argus/McCloskeyUSD/t'
    },
    {
        color: '#F6C358',
        label: 'API 8 @ 6000 NARCFR South ChinaArgus/McCloskeyUSD/t'
    }
    ],
    axis_1: {
        prefix_axis_x: '$',
        items: [{
            color: '#949300',
            values: randChartValues(100)
        },
        {
            color: '#707274',
            values: randChartValues(100)
        },
        {
            color: '#F6C358',
            values: randChartValues(100)
        }
        ]
    }
};

var data2_2 = {
    legends: ['Янв,15', 'Июл,15', 'Янв,16', 'Июл,16', 'Янв,17', 'Июл,17', 'Янв,18', 'Июл,18', 'Янв,19', 'Июл,19', 'Янв,20', 'Июл,20'],
    legendsOutOfChart: [{
        color: '#949300',
        label: 'API 8 CFR South China 5500Argus/McCloskey USD/t'
    },
    {
        color: '#707274',
        label: 'BSPI FOB Bohai-rim, North China 5500 NDRC CNY/t'
    }
    ],
    axis_1: {
        prefix_axis_x: '$',
        items: [{
            color: '#949300',
            values: randChartValues(100)
        }]
    },
    axis_2: {
        prefix_axis_x: '¥',
        items: [{
            color: '#707274',
            values: randChartValues(100)
        }]
    },
};

var data2_3 = {
    legends: ['Янв,15', 'Июл,15', 'Янв,16', 'Июл,16', 'Янв,17', 'Июл,17', 'Янв,18', 'Июл,18', 'Янв,19', 'Июл,19', 'Янв,20', 'Июл,20'],
    legendsOutOfChart: [{
        color: '#F6C358',
        label: 'CNY / USD'
    },
    {
        color: '#333333',
        label: 'RUB / USD'
    }
    ],
    axis_1: {
        prefix_axis_x: '$',
        items: [{
            color: '#F6C358',
            values: randChartValues(100)
        }]
    },
    axis_2: {
        prefix_axis_x: '¥',
        items: [{
            color: '#333333',
            values: randChartValues(100)
        }]
    },
};


function randChart_2() {
    createBarChart_5(
        document.getElementById('lk_ds_tab_2_chart_2'), data2_2, {
            width: '100%',
            height: 400,
            axisColor: '#B8B9BA',
            axisWidth: 1,
            ticks: 10,
            legendfooterHeight: 40,
            ticksAreaWidth: 60,
            ticksFormatNum: 'int',
            ticksShowHLine: false,
            startPaddingDrawHorizontal: 24,
            widthSpaceBetweenBars: 12,
            paddingTop: 15
        });
}

function randChart_3() {
    createBarChart_5(
        document.getElementById('lk_ds_tab_2_chart_3'), data2_3, {
            width: '100%',
            height: 400,
            axisColor: '#B8B9BA',
            axisWidth: 1,
            ticks: 10,
            legendfooterHeight: 40,
            ticksAreaWidth: 60,
            ticksFormatNum: 'int',
            ticksShowHLine: false,
            startPaddingDrawHorizontal: 24,
            widthSpaceBetweenBars: 12,
            paddingTop: 15
        });
}

function randChart_1() {
    createBarChart_5(
        document.getElementById('lk_ds_tab_2_chart_1'), data2_1, {
            // width: 1200,
            width: '100%',
            height: 400,
            axisColor: '#B8B9BA',
            axisWidth: 1,
            ticks: 10,
            legendfooterHeight: 40,
            ticksAreaWidth: 60,
            ticksFormatNum: 'int',
            ticksShowHLine: false,
            startPaddingDrawHorizontal: 24,
            widthSpaceBetweenBars: 12,
            paddingTop: 15
        });
}

function chooseChartDraw(dom_obj, index) {
    if (dom_obj != null) {
        $(dom_obj).parent().find('img').attr('src', '/local/templates/suek.new/images/work-group-radiobtn-uncheck.svg');
        $(dom_obj).find('img').attr('src', '/local/templates/suek.new/images/work-group-radiobtn-check.svg');
    }

    var data = null;

    if (index == 1) {
        data = data2_1;
    } else if (index == 2) {
        data = data2_2;
    } else {
        data = data2_3;
    }

    createBarChart_5(
        document.getElementById('lk_ds_tab_2_chart_4'), data, {
            // width: 1200,
            width: '100%',
            height: 400,
            axisColor: '#B8B9BA',
            axisWidth: 1,
            ticks: 10,
            legendfooterHeight: 40,
            ticksAreaWidth: 60,
            ticksFormatNum: 'int',
            ticksShowHLine: false,
            startPaddingDrawHorizontal: 24,
            widthSpaceBetweenBars: 12,
            paddingTop: 15
        });

    // draw_lenegd
    var ss = '';

    for (var obj in data.legendsOutOfChart) {
        ss += '<div>';
        ss += '<label class="lk_ds_tab_2_header_legend_circle" style="background: ' + obj.color + '"></label>';
        ss += '<span>' + obj.label + '</span>';
        ss += '</div>';
    }

    $('#lk_ds_tab_2_legend_4_c').html(ss);

    if (window.innerWidth <= 931) {
        var el = $('#lk_ds_tab_2_chart_4_c > div');

        $('#lk_ds_tab_2_chart_4_c').css('height', el.height());
        el.css('position', 'absolute');

        slider_menu.init(el);
    }
}

var initCharts = false;

function subPageTabFooterChange(dom_obj, index) {
    $('#lk_ds_header_coal_index_table_btn_choose_type > span').removeClass('lk_ds_header_coal_index_table_btn_choose_type_current');

    $(dom_obj).addClass('lk_ds_header_coal_index_table_btn_choose_type_current');

    if (index == 1) {
        $('#lk_ds_tab_1').show();
        $('#lk_ds_tab_2').hide();
    } else {
        $('#lk_ds_tab_1').hide();
        $('#lk_ds_tab_2').show();

        if (!initCharts) {
            initCharts = true;

            if ($('#lk_ds_tab_2_1').is(':visible')) {
                randChart_1();
                randChart_2();
                randChart_3();

                if (window.innerWidth <= 931) {
                    $('.lk_ds_tab_2_chart_c > div').each(function () {

                        $(this).parent().css('height', $(this).height());
                        $(this).css('position', 'absolute');

                        slider_menu.init($(this));

                    });
                }
            } else {
                chooseChartDraw(null, 1);
            }
        }
    }
}

function showDownPopupMenu_1(zIndex) {
    let _z_index = 100;
    if (zIndex != undefined) {
        _z_index = zIndex;
    }

    $('.popup_fade').css({
        'z-index': _z_index
    });
    $('#footer_menu_popup_1').css({
        'z-index': _z_index + 1,
        bottom: 0
    });

    $('.popup_fade').show();
    $('#footer_menu_popup_1').show();
}

$(function () {

    selectObject('SH. Them. CM. Kirov');

    $('#lk_ds_map .lk_ds_map_item').click(function () {

        selectObject($(this).data('name'));

    });

    $('#safety_docs_tabs_select_drop_down_list select').styler();

    $('.safety_docs_tabs_header > div').click(function () {

        $('.safety_docs_tabs_header > div').each(function () {
            $(this).removeClass('safety_docs_tabs_header_current');
        });

        $(this).addClass('safety_docs_tabs_header_current');

    });

    $('#lk_ds_calendar_popup_header > span').html(calendar_popup.getMonthNameByIndex(d.getMonth()) + ', ' + d.getFullYear());
    $('#lk_ds_calendar_popup').html(calendar_popup.renderCalendarTable(d.getFullYear(), d.getMonth()));
    initWeekClick();

    var _v = calendar_popup.getWeekNumber(d);

    $('#lk_ds_calendar_popup .popup_calendar_grid_row[data-yearandnumweek="' + _v.join('-') + '"]').addClass('popup_calendar_grid_row_current');

    $(window).resize(function () {
        $('.popup_info_1').center_v2();
    });

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    var chart_w = 600;
    var chart_h = 300;

    if (window.innerWidth <= 350) {
        chart_h = 250;
        chart_w = 350;
    } else if (window.innerWidth <= 390) {
        chart_h = 250;
        chart_w = 370;
    } else if (window.innerWidth <= 480) {
        chart_h = 250;
        chart_w = 400;
    } else if (window.innerWidth <= 616) {
        chart_h = 280;
        chart_w = 450;
    } else if (window.innerWidth <= 642) {
        chart_h = 280;
        chart_w = 550;
    }

    createBarChart_4(
        document.getElementById('top_main_chart_3'), data11, {
            width: chart_w,
            height: chart_h,
            axisColor: '#B8B9BA',
            axisWidth: 1,
            ticks: 10,
            legendfooterHeight: 40,
            ticksAreaWidth: 50,
            ticksFormatNum: 'int',
            ticksShowHLine: false,
            startPaddingDrawHorizontal: 24,
            widthSpaceBetweenBars: 12,
            paddingTop: 15
        });


    $('#header_content_slider').addClass('owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        items: 2,
        nav: false,
        dots: true,
        autoplay: false,
        //  animateOut: 'fadeOut',
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            1290: {
                items: 2,
                margin: 10
            }
        }
    });

    $('#lk_ds_tab_2_header_select_1').styler();
    $('#lk_ds_tab_2_header_select_2').styler();
    $('#lk_ds_tab_2_header_select_3').styler();
    $('#lk_ds_tab_2_header_select_4').styler();
    $('#lk_ds_tab_2_header_select_5').styler();
    $('#lk_ds_tab_2_header_select_6').styler();
    $('#lk_ds_tab_2_2_btn_choose_currency > select').styler();

    if (window.innerWidth <= 1422) {
        slider_menu.init($('.lk_ds_top_menu > nav'));
    }

    if (window.innerWidth <= 1455) {
        slider_menu.init($('.lk_ds_coal_index_c > nav'));
    }

    if (window.innerWidth <= 796) {
        var el = $('#safety_docs_tabs_body_1 > div');
        let h = el.height();

        $('#safety_docs_tabs_body_1').css({
            height: h
        });

        el.css('position', 'absolute');
        slider_menu.init(el);

        // ----------------------------------------------

        el = $('#lk_ds_footer_table_c > div');
        h = el.height();

        $('#lk_ds_footer_table_c').css({
            height: h
        });

        el.css('position', 'absolute');
        slider_menu.init(el);
    }

    down_menu.init($('#footer_menu_popup_1_touch'), $('#footer_menu_popup_1'), function () {
        $('.popup_fade').hide();
        $('#footer_menu_popup_1').hide();
        $('#footer_menu_popup_1').css('bottom', 0);
    });

});
