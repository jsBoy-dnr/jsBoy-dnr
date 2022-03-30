/* eslint-disable eqeqeq */
/* eslint-disable guard-for-in */
/* eslint-disable no-return-assign */
/* eslint-disable default-case */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable new-cap */
/* eslint-disable radix */
/* eslint-disable no-shadow */
/* eslint-disable no-redeclare */
/* eslint-disable no-multi-str */
/* eslint-disable camelcase */
/* eslint-disable no-shadow-restricted-names */
/* eslint-disable no-undefined */
let g_feb_chart_width = 1200;
let disable_draw_chart = true;

let quotation_info = {
    'Уголь': {
        'items': [{
            'line_1': ['API 2', 'down'],
            'line_2': '70,0',
            'line_3': '$ / тонну'
        },
        {
            'line_1': ['API 8', 'up'],
            'line_2': '75,0',
            'line_3': '$ / тонну'
        },
        {
            'line_1': ['GC NEWC', 'up'],
            'line_2': '73,0',
            'line_3': '$ / тонну'
        },
        {
            'line_1': ['CCI5500', 'down'],
            'line_2': '67,0',
            'line_3': '$ / тонну'
        }
        ]
    },
    'Энергетика': {
        'items': [{
            'line_1': 'РСВ',
            'line_2': '5,56',
            'line_3': 'МЛН. КВТ'
        },
        {
            'line_1': 'мощность',
            'line_2': '6,32',
            'line_3': 'МЛН. КВТ'
        },
        {
            'line_1': 'тариф',
            'line_2': '0,32',
            'line_3': 'МЛН. КВТ'
        }
        ]
    },
    'Нефть и валюта': {
        'items': [{
            'line_1': ['Brent', 'down'],
            'line_2': '70,0',
            'line_3': '$ / баррель'
        },
        {
            'line_1': ['URALS', 'up'],
            'line_2': '75,0',
            'line_3': '$ / баррель'
        },
        {
            'line_1': ['US Dollar', 'up'],
            'line_2': '65,8',
            'line_3': '$ / баррель'
        },
        {
            'line_1': ['EURO', 'down'],
            'line_2': '73,4',
            'line_3': '$ / баррель'
        }
        ]
    },
    'Газ': {
        'items': [{
            'line_1': ['TTF', 'down'],
            'line_2': '5,56',
            'line_3': '€ / MBtu'
        },
        {
            'line_1': ['NBP', 'up'],
            'line_2': '6,32',
            'line_3': '€ / MBtu'
        },
        {
            'line_1': ['Henry Hub', 'up'],
            'line_2': '1,75',
            'line_3': '€ / MBtu'
        }
        ]
    },
    'Ставки': {
        'btns': [
            ['Mosprime', [{
                'line_1': 'ВАЛЮТА',
                'line_2': 'EURO',
                'line_3': '01.04.2020'
            },
            {
                'line_1': ['3M', 'down'],
                'line_2': '-0,36%',
                'line_3': ''
            },
            {
                'line_1': ['6М', 'down'],
                'line_2': '-0,29%',
                'line_3': ''
            }
            ]],
            ['Libor/US', [{
                'line_1': 'ВАЛЮТА',
                'line_2': 'EURO',
                'line_3': '08.06.2020'
            },
            {
                'line_1': ['3M', 'down'],
                'line_2': '-0,21%',
                'line_3': ''
            },
            {
                'line_1': ['6М', 'down'],
                'line_2': '-0,25%',
                'line_3': ''
            }
            ]],
            ['Libor/EURO', [{
                'line_1': 'ВАЛЮТА',
                'line_2': 'EURO',
                'line_3': '01.05.2020'
            },
            {
                'line_1': ['3M', 'up'],
                'line_2': '-0,16%',
                'line_3': ''
            },
            {
                'line_1': ['6М', 'down'],
                'line_2': '-0,09%',
                'line_3': ''
            }
            ]],
            ['Euribor', [{
                'line_1': 'ВАЛЮТА',
                'line_2': 'EURO',
                'line_3': '01.04.2020'
            },
            {
                'line_1': ['3M', 'up'],
                'line_2': '-0,30%',
                'line_3': ''
            },
            {
                'line_1': ['6М', 'up'],
                'line_2': '-0,15%',
                'line_3': ''
            }
            ]],
        ]
    },
    'Кредитные рейтинги': {
        'items': [{
            'line_1': 'Moody’s',
            'line_2': 'Ba2',
            'line_3': 'POSITIVE'
        },
        {
            'line_1': 'PA',
            'line_2': 'BB',
            'line_3': 'Stable'
        },
        {
            'line_1': 'FITCH',
            'line_2': 'ruAA-',
            'line_3': 'Stable'
        }
        ]
    }
};



function __resetTopTab_1() {
    $('#feb_top_btn_1').removeClass('feb_top_btns_choose_show_data_current');
    $('#feb_top_btn_1 > img:first').attr('src', '/local/templates/suek.new/images/feb-top-btn-icon_1.svg');
    $('#feb_top_btn_1 > div > img').attr('src', '/local/templates/suek.new/images/safety-down-icon-black.svg');
}

function __activeTopTab_1() {
    $('#feb_top_btn_1').addClass('feb_top_btns_choose_show_data_current');
    $('#feb_top_btn_1 > img:first').attr('src', '/local/templates/suek.new/images/feb-top-btn-icon_1-white.svg');
    $('#feb_top_btn_1 > div > img').attr('src', '/local/templates/suek.new/images/up-arrow.svg');
}

function __resetTopTab_2() {
    $('#feb_top_btn_2').removeClass('feb_top_btns_choose_show_data_current');
    $('#feb_top_btn_2 > img:first').attr('src', '/local/templates/suek.new/images/feb-top-btn-icon_2.svg');
    $('#feb_top_btn_2 > div > img').attr('src', '/local/templates/suek.new/images/safety-down-icon-black.svg');
}

function __activeTopTab_2() {
    $('#feb_top_btn_2').addClass('feb_top_btns_choose_show_data_current');
    $('#feb_top_btn_2 > img:first').attr('src', '/local/templates/suek.new/images/feb-top-btn-icon_2-white.svg');
    $('#feb_top_btn_2 > div > img').attr('src', '/local/templates/suek.new/images/up-arrow.svg');
}

function feb_showTab(index) {
    if (index === 1) {
        if ($('#feb_top_btn_1').hasClass('feb_top_btns_choose_show_data_current')) {
            __resetTopTab_1();

            $('#feb_content_top_info_1').hide();
            $('.feb_content_top_info_hide').hide();
        } else {
            __activeTopTab_1();
            __resetTopTab_2();

            $('#feb_content_top_info_1').show();
            $('#feb_content_top_info_2').hide();

            $('.feb_content_top_info_hide').show();
        }
    } else {
        if ($('#feb_top_btn_2').hasClass('feb_top_btns_choose_show_data_current')) {
            __resetTopTab_2();

            $('#feb_content_top_info_2').hide();
            $('.feb_content_top_info_hide').hide();
        } else {
            __activeTopTab_2();
            __resetTopTab_1();

            $('#feb_content_top_info_2').show();
            $('#feb_content_top_info_1').hide();

            $('.feb_content_top_info_hide').show();
        }
    }
}

function hideAllOpenedTopInfo() {
    __resetTopTab_1();
    __resetTopTab_2();

    $('#feb_content_top_info_1').hide();
    $('#feb_content_top_info_2').hide();
    $('.feb_content_top_info_hide').hide();
}

function __showTabByIndex(dom_obj, index) {
    $(dom_obj).parent().parent().find('.feb_q_tabs > div').hide();
    $(dom_obj).parent().parent().find('.feb_q_tabs > div:nth-child(' + index + ')').show();

    $(dom_obj).parent().find('div').removeClass('feb_q_item_title_btn_current');
    $(dom_obj).addClass('feb_q_item_title_btn_current');
}

function renderQuotation() {
    var ss = '';

    for (var key in quotation_info) {
        var item = quotation_info[key];

        ss += '<div class="feb_q_item">';

        let add_class = '';
        if (item.btns !== undefined && item.btns.length > 0) {
            // в css нкжно добавить 10 пискелей снизу, для варианта с кнопками
            // только для этого
            add_class = 'feb_q_item_title_with_btns';
        }

        ss += '<div class="feb_q_item_title ' + add_class + '">';
        ss += '<span>' + key + '</span>';

        if (item.btns !== undefined) {
            ss += '<div class="feb_q_item_title_vline"></div>';

            var _l = item.btns.length;
            var _c = '';

            for (var f in item.btns) {
                _c = '';
                if (parseInt(f) + 1 == _l) {
                    _c = 'feb_q_item_title_btn_current';
                }

                ss += '<div class="feb_q_item_title_btn ' + _c + '" onclick="__showTabByIndex(this,' + (parseInt(f) + 1) + ')">' +
                    item.btns[f][0] +
                    '</div>';
            }
        }

        ss += '</div>';

        if (item.items !== undefined) {
            ss += '<div class="feb_q_item_row">';

            for (var line_info in item.items) {
                var line_1 = line_info.line_1;
                var line_2 = line_info.line_2;
                var line_3 = line_info.line_3;

                ss += '<div class="feb_q_item_row_v">';

                if (typeof line_1 == 'string') {
                    ss += '<div class="feb_q_item_row_vl1"><span>' + line_1 + '</span></div>';
                } else if (Array.isArray(line_1)) {
                    ss += '<div class="feb_q_item_row_vl1">' +
                        '<span>' + line_1[0] + '</span>' +
                        '<img src="/local/templates/suek.new/images/quotation-move-' + line_1[1] + '.svg" />' +
                        '</div>';
                }

                ss += '<div class="feb_q_item_row_vl2">' + line_2 + '</div>';
                ss += '<div class="feb_q_item_row_vl3">' + line_3 + '</div>';

                ss += '</div>';
                ss += '<div class="feb_q_item_title_vline2"></div>';
            }

            ss += '</div>';
        } else if (item.btns !== undefined) {
            ss += '<div class="feb_q_tabs">';

            var _l = item.btns.length;
            var _c = '';

            for (var i in item.btns) {
                var _v = item.btns[i];

                _c = 'style="display:none"';
                if (parseInt(i) + 1 == _l) {
                    _c = '';
                }

                ss += '<div class="feb_q_item_row" ' + _c + '>';

                for (var line_info in _v[1]) {
                    var line_1 = line_info.line_1;
                    var line_2 = line_info.line_2;
                    var line_3 = line_info.line_3;

                    ss += '<div class="feb_q_item_row_v">';

                    if (typeof line_1 == 'string') {
                        ss += '<div class="feb_q_item_row_vl1"><span>' + line_1 + '</span></div>';
                    } else if (Array.isArray(line_1)) {
                        ss += '<div class="feb_q_item_row_vl1">' +
                            '<span>' + line_1[0] + '</span>' +
                            '<img src="/local/templates/suek.new/images/quotation-move-' + line_1[1] + '.svg" />' +
                            '</div>';
                    }

                    ss += '<div class="feb_q_item_row_vl2">' + line_2 + '</div>';
                    ss += '<div class="feb_q_item_row_vl3">' + line_3 + '</div>';

                    ss += '</div>';
                    ss += '<div class="feb_q_item_title_vline2"></div>';
                }

                ss += '</div>';
            }

            ss += '</div>';
        }

        ss += '</div>';
    }

    $('#feb_content_top_info_1').html(ss);
}
//---------------------------------------------------------------------------
const REVENUE = 'REVENUE';
const EBITDA = 'EBITDA';
const NET_DEBT = 'NET_DEBT';
const CAPEX = 'CAPEX';
const NET_DEBT_EBITDA = 'NET_DEBT_EBITDA';

const colorsColumsCharts = {
    REVENUE: '#F6C358',
    EBITDA: '#949300',
    NET_DEBT: '#009696',
    CAPEX: '#2E7CC4',
    NET_DEBT_EBITDA: '#333333'
};

// по месяцам
let _by_moths = {
    '12_2019': {
        legend: 'Декабрь, 2019',
        REVENUE: 7500,
        EBITDA: 2625,
        NET_DEBT: 1200,
        CAPEX: 4500,
        NET_DEBT_EBITDA: 1250
    },
    '11_2019': {
        legend: 'Ноябрь, 2019',
        REVENUE: 2500,
        EBITDA: 1625,
        NET_DEBT: 6200,
        CAPEX: 350,
        NET_DEBT_EBITDA: 8200
    },
    '10_2019': {
        legend: 'Октябрь, 2019',
        REVENUE: 500,
        EBITDA: 625,
        NET_DEBT: 200,
        CAPEX: 350,
        NET_DEBT_EBITDA: 200
    },
    '9_2019': {
        legend: 'Сентябрь, 2019',
        REVENUE: 500,
        EBITDA: 625,
        NET_DEBT: 200,
        CAPEX: 3350,
        NET_DEBT_EBITDA: 1850
    },
    '8_2019': {
        legend: 'Август, 2019',
        REVENUE: 600,
        EBITDA: 825,
        NET_DEBT: 200,
        CAPEX: 3350,
        NET_DEBT_EBITDA: 1850
    },
    '7_2019': {
        legend: 'Июль, 2019',
        REVENUE: 1400,
        EBITDA: 625,
        NET_DEBT: 900,
        CAPEX: 350,
        NET_DEBT_EBITDA: 1850
    },
    '6_2019': {
        legend: 'Июнь, 2019',
        REVENUE: 1800,
        EBITDA: 905,
        NET_DEBT: 3200,
        CAPEX: 3250,
        NET_DEBT_EBITDA: 1850
    },
    '5_2019': {
        legend: 'Май, 2019',
        REVENUE: 1800,
        EBITDA: 905,
        NET_DEBT: 3200,
        CAPEX: 3250,
        NET_DEBT_EBITDA: 1850
    }
};

// полугодия
let _half_a_year = {
    '2019_2': {
        legend: '2019 2 полугодие',
        REVENUE: 6500,
        EBITDA: 3625,
        NET_DEBT: 4200,
        CAPEX: 1350,
        NET_DEBT_EBITDA: 1200
    },
    '2019_1': {
        legend: '2019 1 полугодие',
        REVENUE: 5500,
        EBITDA: 3325,
        NET_DEBT: 2200,
        CAPEX: 1550,
        NET_DEBT_EBITDA: 1000
    },
    '2018_2': {
        legend: '2018 2 полугодие',
        REVENUE: 3500,
        EBITDA: 2325,
        NET_DEBT: 1400,
        CAPEX: 7250,
        NET_DEBT_EBITDA: 1200
    },
    '2018_1': {
        legend: '2018 1 полугодие',
        REVENUE: 3500,
        EBITDA: 6525,
        NET_DEBT: 9500,
        CAPEX: 1850,
        NET_DEBT_EBITDA: 7200
    },
    '2017_2': {
        legend: '2017 2 полугодие',
        REVENUE: 500,
        EBITDA: 225,
        NET_DEBT: 400,
        CAPEX: 750,
        NET_DEBT_EBITDA: 1000
    },
    '2017_1': {
        legend: '2017 1 полугодие',
        REVENUE: 1500,
        EBITDA: 6525,
        NET_DEBT: 9500,
        CAPEX: 1850,
        NET_DEBT_EBITDA: 8200
    },
};

// только по годам
let _only_years_data = {
    2020: {
        legend: '2020 год',
        REVENUE: 7547,
        EBITDA: 2115,
        NET_DEBT: 1241,
        CAPEX: 5839,
        NET_DEBT_EBITDA: 1043
    },
    2019: {
        legend: '2019 год',
        REVENUE: 9547,
        EBITDA: 2515,
        NET_DEBT: 1241,
        CAPEX: 5339,
        NET_DEBT_EBITDA: 1543
    },
    2018: {
        legend: '2018 год',
        REVENUE: 5547,
        EBITDA: 115,
        NET_DEBT: 1041,
        CAPEX: 3839,
        NET_DEBT_EBITDA: 1243
    },
    2017: {
        legend: '2017 год',
        REVENUE: 5047,
        EBITDA: 1150,
        NET_DEBT: 1441,
        CAPEX: 6839,
        NET_DEBT_EBITDA: 3243
    }
};

function getCountTopCheckBox() {
    return $('#fbe_charts_title_line_1 .fbe_checkbox_checked').length;
}

let CHECKBOXS_IDS_MAP = {
    'revenue': 'fbe_checkbox_revenue',
    'ebitda': 'fbe_checkbox_ebitda',
    'net_debt': 'fbe_checkbox_net_debt',
    'capex': 'fbe_checkbox_capex',
    'net_debt_ebitda': 'fbe_checkbox_net_debt_ebitda',

    'year_n1': 'fbe_checkbox_year_n1',
    'year_n2': 'fbe_checkbox_year_n2',
    'year_n3': 'fbe_checkbox_year_n3',

    'half_year': 'fbe_checkbox_half_year',
    'month_year': 'fbe_checkbox_month_year',
};

function isCheckBoxChecked(id_name_checkbox) {
    return $('#' + CHECKBOXS_IDS_MAP[id_name_checkbox]).hasClass('fbe_checkbox_checked');
}

function setValueCheckBox(id_name_checkbox, value) {
    if (value) {
        return $('#' + CHECKBOXS_IDS_MAP[id_name_checkbox]).addClass('fbe_checkbox_checked');
    } else {
        return $('#' + CHECKBOXS_IDS_MAP[id_name_checkbox]).removeClass('fbe_checkbox_checked');
    }
}

function buildData() {
    if (disable_draw_chart) {
        return;
    }

    let data_draw = [];

    // получим значение верхних фильтров
    let ch_revenue = isCheckBoxChecked('revenue');
    let ch_ebitda = isCheckBoxChecked('ebitda');
    let net_debt = isCheckBoxChecked('net_debt');
    let capex = isCheckBoxChecked('capex');
    let net_debt_ebitda = isCheckBoxChecked('net_debt_ebitda');

    // получим значение фильтров нижнего ряда
    let ch_year_n1 = isCheckBoxChecked('year_n1');
    let ch_year_n2 = isCheckBoxChecked('year_n2');
    let ch_year_n3 = isCheckBoxChecked('year_n3');
    let ch_half_year = isCheckBoxChecked('half_year');
    let ch_month_year = isCheckBoxChecked('month_year');

    if (ch_year_n1) {
        var value_year_1 = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_1'));
        var item_found = _only_years_data[value_year_1];

        if (item_found !== undefined) {
            let tmp = {};
            tmp.legend = item_found.legend;
            tmp.items = [];

            if (ch_revenue) {
                tmp.items.push([item_found[REVENUE], colorsColumsCharts.REVENUE, '$' + item_found[REVENUE] + '<br/>млн.']);
            }

            if (ch_ebitda) {
                tmp.items.push([item_found[EBITDA], colorsColumsCharts.EBITDA, '$' + item_found[EBITDA] + '<br/>млн.']);
            }

            if (net_debt) {
                tmp.items.push([item_found[NET_DEBT], colorsColumsCharts.NET_DEBT, '$' + item_found[NET_DEBT] + '<br/>млн.']);
            }

            if (capex) {
                tmp.items.push([item_found[CAPEX], colorsColumsCharts.CAPEX, '$' + item_found[CAPEX] + '<br/>млн.']);
            }

            if (net_debt_ebitda) {
                tmp.items.push([item_found[NET_DEBT_EBITDA], colorsColumsCharts.NET_DEBT_EBITDA, '$' + item_found[NET_DEBT_EBITDA] + '<br/>млн.']);
            }

            data_draw.push(tmp);
        }
    }

    if (ch_year_n2) {
        var value_year_2 = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_2'));
        var item_found = _only_years_data[value_year_2];

        if (item_found !== undefined) {
            let tmp = {};
            tmp.legend = item_found.legend;
            tmp.items = [];

            if (ch_revenue) {
                tmp.items.push([item_found[REVENUE], colorsColumsCharts.REVENUE, '$' + item_found[REVENUE] + '<br/>млн.']);
            }

            if (ch_ebitda) {
                tmp.items.push([item_found[EBITDA], colorsColumsCharts.EBITDA, '$' + item_found[EBITDA] + '<br/>млн.']);
            }

            if (net_debt) {
                tmp.items.push([item_found[NET_DEBT], colorsColumsCharts.NET_DEBT, '$' + item_found[NET_DEBT] + '<br/>млн.']);
            }

            if (capex) {
                tmp.items.push([item_found[CAPEX], colorsColumsCharts.CAPEX, '$' + item_found[CAPEX] + '<br/>млн.']);
            }

            if (net_debt_ebitda) {
                tmp.items.push([item_found[NET_DEBT_EBITDA], colorsColumsCharts.NET_DEBT_EBITDA, '$' + item_found[NET_DEBT_EBITDA] + '<br/>млн.']);
            }

            data_draw.push(tmp);
        }
    }

    if (ch_year_n3) {
        var value_year_3 = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_3'));
        var item_found = _only_years_data[value_year_3];

        if (item_found !== undefined) {
            let tmp = {};
            tmp.legend = item_found.legend;
            tmp.items = [];

            if (ch_revenue) {
                tmp.items.push([item_found[REVENUE], colorsColumsCharts.REVENUE, '$' + item_found[REVENUE] + '<br/>млн.']);
            }

            if (ch_ebitda) {
                tmp.items.push([item_found[EBITDA], colorsColumsCharts.EBITDA, '$' + item_found[EBITDA] + '<br/>млн.']);
            }

            if (net_debt) {
                tmp.items.push([item_found[NET_DEBT], colorsColumsCharts.NET_DEBT, '$' + item_found[NET_DEBT] + '<br/>млн.']);
            }

            if (capex) {
                tmp.items.push([item_found[CAPEX], colorsColumsCharts.CAPEX, '$' + item_found[CAPEX] + '<br/>млн.']);
            }

            if (net_debt_ebitda) {
                tmp.items.push([item_found[NET_DEBT_EBITDA], colorsColumsCharts.NET_DEBT_EBITDA, '$' + item_found[NET_DEBT_EBITDA] + '<br/>млн.']);
            }

            data_draw.push(tmp);
        }
    }

    if (ch_half_year) {
        var value = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_half_year'));

        if (value == undefined) {
            return;
        }

        for (var key in value) {
            var item_found = _half_a_year[key];

            if (item_found !== undefined) {
                let tmp = {};
                tmp.legend = item_found.legend;
                tmp.items = [];

                if (ch_revenue) {
                    tmp.items.push([item_found[REVENUE], colorsColumsCharts.REVENUE, '$' + item_found[REVENUE] + '<br/>млн.']);
                }

                if (ch_ebitda) {
                    tmp.items.push([item_found[EBITDA], colorsColumsCharts.EBITDA, '$' + item_found[EBITDA] + '<br/>млн.']);
                }

                if (net_debt) {
                    tmp.items.push([item_found[NET_DEBT], colorsColumsCharts.NET_DEBT, '$' + item_found[NET_DEBT] + '<br/>млн.']);
                }

                if (capex) {
                    tmp.items.push([item_found[CAPEX], colorsColumsCharts.CAPEX, '$' + item_found[CAPEX] + '<br/>млн.']);
                }

                if (net_debt_ebitda) {
                    tmp.items.push([item_found[NET_DEBT_EBITDA], colorsColumsCharts.NET_DEBT_EBITDA, '$' + item_found[NET_DEBT_EBITDA] + '<br/>млн.']);
                }

                data_draw.push(tmp);
            } else {
                console.log('not found ' + key);
            }
        }
    }

    if (ch_month_year) {
        let value = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_month_year'));

        if (value == undefined) {
            return;
        }

        // console.log( value );

        for (var key in value) {
            var item_found = _by_moths[key];

            if (item_found !== undefined) {
                let tmp = {};
                tmp.legend = item_found.legend;
                tmp.items = [];

                if (ch_revenue) {
                    tmp.items.push([item_found[REVENUE], colorsColumsCharts.REVENUE, '$' + item_found[REVENUE] + '<br/>млн.']);
                }

                if (ch_ebitda) {
                    tmp.items.push([item_found[EBITDA], colorsColumsCharts.EBITDA, '$' + item_found[EBITDA] + '<br/>млн.']);
                }

                if (net_debt) {
                    tmp.items.push([item_found[NET_DEBT], colorsColumsCharts.NET_DEBT, '$' + item_found[NET_DEBT] + '<br/>млн.']);
                }

                if (capex) {
                    tmp.items.push([item_found[CAPEX], colorsColumsCharts.CAPEX, '$' + item_found[CAPEX] + '<br/>млн.']);
                }

                if (net_debt_ebitda) {
                    tmp.items.push([item_found[NET_DEBT_EBITDA], colorsColumsCharts.NET_DEBT_EBITDA, '$' + item_found[NET_DEBT_EBITDA] + '<br/>млн.']);
                }

                data_draw.push(tmp);
            }
        }
    }

    // console.log('data_draw', data_draw);

    createBarChart(
        document.getElementById('frb_main_chart'), data_draw, {
            width: g_feb_chart_width,
            height: 500,
            hideTitle: true,
            labelPos: 'top',
            axisColor: '#B8B9BA',
            axisWidth: 1,
            ticks: 10,
            legendfooterHeight: 40,
            ticksAreaWidth: 70,
            ticksFormatNum: 'int',
            ticksShowHLine: true,
            widthSpaceBetweenCharts: g_feb_chart_width > 724 ? 72 : 50
        });
}

function autoResizeChartAndDraw() {
    disable_draw_chart = false;

    let w = $('#frb_main_chart').parent().parent().width();

    if (g_feb_chart_width > w) {
        g_feb_chart_width = w < 724 ? 724 : w;
        buildData();
    } else if (g_feb_chart_width < w) {
        g_feb_chart_width = w > 1200 ? 1200 : w;
        buildData();
    }
}

//* *****************************************************************************
$(function (dropDownMenu) {

    let isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isSafari || iOS) {
        $('.feb_title_years_reports_carousel_item_img img').css('transform', 'none');
    }

    //------------------------------------------------------------
    feb_showTab(2);
    renderQuotation();
    //------------------------------------------------------------

    if (window.innerWidth <= 768) {
        slider_menu.init($('#frb_main_chart_c > div'));
    }

    if (window.innerWidth <= 571) {
        slider_menu.init($('#header_content_top_menu'));
    }




    // ++ DROP DOWN

    // по годам
    let dd_years_data = [{
        type: 'item',
        txt: '2020',
        value: 2020
    },
    {
        type: 'item',
        txt: '2019',
        value: 2019
    },
    {
        type: 'item',
        txt: '2018',
        value: 2018
    },
    {
        type: 'item',
        txt: '2017',
        value: 2017
    },
    {
        type: 'item',
        txt: '2016',
        value: 2016
    },
    ];

    // по полугодиям
    let dd_half_a_year = [{
        type: 'item',
        txt: '2019 2 полугодие',
        value: '2019_2'
    },
    {
        type: 'item',
        txt: '2019 1 полугодие',
        value: '2019_1'
    },
    {
        type: 'item',
        txt: '2018 2 полугодие',
        value: '2018_2'
    },
    {
        type: 'item',
        txt: '2018 1 полугодие',
        value: '2018_2'
    },
    {
        type: 'item',
        txt: '2017 2 полугодие',
        value: '2017_2'
    },
    {
        type: 'item',
        txt: '2017 1 полугодие',
        value: '2017_1'
    }
    ];

    // по месяцам
    let dd_months_year = [{
        type: 'item',
        txt: 'Декабрь, 2019',
        value: '12_2019'
    },
    {
        type: 'item',
        txt: 'Ноябрь, 2019',
        value: '11_2019'
    },
    {
        type: 'item',
        txt: 'Октябрь, 2019',
        value: '10_2019'
    },
    {
        type: 'item',
        txt: 'Сентябрь, 2019',
        value: '9_2019'
    },
    {
        type: 'item',
        txt: 'Август, 2019',
        value: '8_2019'
    },
    {
        type: 'item',
        txt: 'Июль, 2019',
        value: '7_2019'
    },
    {
        type: 'item',
        txt: 'Июнь, 2019',
        value: '6_2019'
    },
    {
        type: 'item',
        txt: 'Май, 2019',
        value: '5_2019'
    }
    ];

    // год 1
    dropDownMenu.create(
        document.getElementById('fbe_charts_cddm_1'), dd_years_data, {
            width: 50,
            height: 'auto',
            heightPopupList: 'auto',
            maxHeightPopupList: 100,
            initCheckedDefautValue: 2020
        },
        function (value, txt) {
            // console.log('1', value, txt);

            // Нальзя выбрать год, если он ВЫБРАН в других списках
            let value_year_2 = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_2'));
            let value_year_3 = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_3'));

            if (value == value_year_2 || value == value_year_3) {
                return false;
            }
        },
        function (value, txt) {
            // console.log('2', value, txt);

            if (isCheckBoxChecked('year_n1')) {
                buildData();
            }
        });

    // год 2
    dropDownMenu.create(
        document.getElementById('fbe_charts_cddm_2'), dd_years_data, {
            width: 50,
            height: 'auto',
            heightPopupList: 'auto',
            maxHeightPopupList: 100,
            initCheckedDefautValue: 2019
        },
        function (value, txt) {
            let value_year_1 = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_1'));
            let value_year_3 = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_3'));

            if (value == value_year_1 || value == value_year_3) {
                return false;
            }
        },
        function (value, txt) {
            // console.log('2', value, txt);

            if (isCheckBoxChecked('year_n2')) {
                buildData();
            }
        });

    // год 3
    dropDownMenu.create(
        document.getElementById('fbe_charts_cddm_3'), dd_years_data, {
            width: 50,
            height: 'auto',
            heightPopupList: 'auto',
            maxHeightPopupList: 100,
            initCheckedDefautValue: 2018
        },
        function (value, txt) {
            let value_year_1 = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_1'));
            let value_year_2 = dropDownMenu.getValue(document.getElementById('fbe_charts_cddm_2'));

            if (value == value_year_1 || value == value_year_2) {
                return false;
            }
        },
        function (value, txt) {
            // console.log('2', value, txt);

            if (isCheckBoxChecked('year_n3')) {
                buildData();
            }
        });

    // полугодие
    dropDownMenu.create(
        document.getElementById('fbe_charts_cddm_half_year'), dd_half_a_year, {
            width: 166,
            height: 'auto',
            heightPopupList: 'auto',
            defaultPlaceholder: 'Выбрать полугодие',
            textPopupTop: 'Выбрать полугодие',
            maxHeightPopupList: 200,
            multiSelect: true,
            widthPopupList: 'auto',
            multiSelectCountLimit: 3
        },
        function (value, txt) {

            if (isCheckBoxChecked('half_year')) {
                buildData();
            }
        });

    // месяцы
    dropDownMenu.create(
        document.getElementById('fbe_charts_cddm_month_year'), dd_months_year, {
            width: 150,
            height: 'auto',
            heightPopupList: 'auto',
            defaultPlaceholder: 'Выбрать месяц',
            textPopupTop: 'Выбрать месяц',
            maxHeightPopupList: 150,
            widthPopupList: 'auto',
            multiSelect: true,
            multiSelectCountLimit: 3,
            multiSelectStylePrintValue: {
                'type': 'pattern',
                value: 'Выбрано {num_select} {suffix_1}',
                suffix_by_num: [{
                    str_replace: '{suffix_1}',
                    values_3: ['месяц', 'месяца', 'месяцев']
                }]
            },
        },
        function (value, txt) {
            if (isCheckBoxChecked('month_year')) {
                buildData();
            }
        });

    // -- DROP DOWN
    //    CHECKBOX

    $('#fbe_charts_title_line_1 .fbe_checkbox').click(function () {

        let has_class = $(this).hasClass('fbe_checkbox_checked');
        let status = 0;

        // что будет если отработает этоа функция (+1 или -1). Вид наперед
        let count = getCountTopCheckBox() + (has_class ? -1 : 1);

        // оставим один чекбокс активным. Если да, то отмена выполнения
        if (count === 0) {
            return;
        }

        if (has_class) {
            $(this).removeClass('fbe_checkbox_checked');
        } else {
            $(this).addClass('fbe_checkbox_checked');
            status = 1;
        }

        buildData();
    });

    $('#fbe_charts_title_line_2 .fbe_checkbox').click(function () {

        let has_class = $(this).hasClass('fbe_checkbox_checked');
        let value = $(this).data('value');
        let status = 0;

        // щас будет установлено в активное знаяение "Полугодие"
        if (!has_class && value === 'half_year') {
            // сделать неавтивным отсальные checkbox
            setValueCheckBox('year_n1', false);
            setValueCheckBox('year_n2', false);
            setValueCheckBox('year_n3', false);
            setValueCheckBox('month_year', false);
        } else if (!has_class && value === 'month_year') {
            setValueCheckBox('year_n1', false);
            setValueCheckBox('year_n2', false);
            setValueCheckBox('year_n3', false);
            setValueCheckBox('half_year', false);
        } else if (!has_class &&
            (
                value === 'year_n1' ||
                value === 'year_n2' ||
                value === 'year_n3'
            )
        ) {
            setValueCheckBox('month_year', false);
            setValueCheckBox('half_year', false);
        }

        if (has_class) {
            $(this).removeClass('fbe_checkbox_checked');
        } else {
            $(this).addClass('fbe_checkbox_checked');
            status = 1;
        }

        // console.log( '>>>', $(this).data('type'), $(this).data('value'), status );

        buildData();

    });
    let doit;
    window.onresize = function () {
        clearTimeout(doit);
        doit = setTimeout(autoResizeChartAndDraw, 200);
    };

    setTimeout(autoResizeChartAndDraw, 100);

    $('.feb_title_calendar_events_carousel').owlCarousel({
        margin: 30,
        autoWidth: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            770: {
                items: 3,

                margin: 10
            },
            1024: {
                items: 4,
                margin: 30
            }
        }
    });

    $('.feb_title_years_reports_carousel').owlCarousel({
        margin: 30,
        autoWidth: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            770: {
                items: 3,
                margin: 10
            },
            1024: {
                items: 4,
                margin: 30
            }
        }
    });
});
