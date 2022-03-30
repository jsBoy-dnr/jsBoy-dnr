var polls_item = {
    user_info: {
        photo_url: '../images/manager.jpg',
        fio: 'Васюкович Юлия Анатольевна',
        position: 'Зам. начальника управления по <br />подбору, развитию...',
        location: 'АО "СУЭК-Красноярск"'
    },
    items: [{
            type: 'first', // первый вопрос - приветсвие
            title: 'Исследование корпоративной культуры и эффективности системы исполнения Кодекса корпоративной этики на предприятиях группы компаний СУЭК',
            text: '<p>Уважаемые коллеги!</p><p>Предлагаем Вам высказать свое мнение о Вашем предприятии и Вашей работе, а также нам важно Ваше мнение о Кодексе корпоративной этики и отношение к корпоративным ценностям. Анкета анонимная, Блок по работе с персоналом гарантирует сохранение конфиденциальности полученных ответов.</p>',
            hashtag: 'Кодекс Корпоративной этики',
            required: true // --> Обязательный опрос
        },
        {
            id: 1,
            type: 'single_radio_selector',
            title: 'Как вы оцениваете положение дел на вашем предприятии в настоящее время?',
            items: [{
                    id: 1,
                    txt: 'Отличное',
                    need_input: false, // поле ввода если выбрать этот пункт меню
                    placeholder: 'Введите количество дней' // demo
                },
                {
                    id: 2,
                    txt: 'Хорошее'
                },
                {
                    id: 3,
                    txt: 'Нормальное',
                },
                {
                    id: 4,
                    txt: 'Тяжелое'
                },
                {
                    id: 5,
                    txt: 'Безнадежное'
                }
            ]
        },
        {
            id: 2,
            type: 'input_value',
            title: 'В 3-х словах описание отношения в вашем коллективе',
            placeholder: 'Н/р: Активный, Целеустременный, Жизнерадостный'
        },
        {
            id: 3,
            type: 'multi_rows',
            title: 'Насколько вы согласны с приведенными ниже суждениями?',
            tooltip: 'Насколько вы согласны с приведенными ниже суждениями?',
            items: [{
                    id: 1,
                    type: 'single_radio_list_horizontal',
                    txt: 'Я горжусь, что работаю в компании, которая имеет самое совеременное оборудование',
                    items: ['Полностью НЕ согласен', 'Скорее НЕ согласен', 'Скорее согласен', 'Полностью согласен']
                },
                {
                    id: 2,
                    type: 'single_radio_list_horizontal',
                    txt: 'Я горжусь, что работаю в компании, которая стабильно выплачивает заработную плату, предоставляет социальные льготы работникам',
                    items: ['Полностью НЕ согласен', 'Скорее НЕ согласен', 'Скорее согласен', 'Полностью согласен']
                }
            ]
        },
        {
            id: 4,
            type: 'single_checkbox_selector',
            title: 'По каким темам по кодексу вы хотели бы получать больше информации в газете и на сайте СУЭК, на встречах с руководтством предприятия?',
            minimal_count_check: 1,
            items: [{
                    id: 1,
                    txt: 'Как применять Кодекс корпоративной этики в работе',
                    need_input: false, // поле ввода если выбрать этот пункт меню
                    placeholder: 'text text'
                },
                {
                    id: 2,
                    txt: 'Примеры применения Кодекса на вашем предприятии'
                },
                {
                    id: 3,
                    txt: 'Как строится работа с Кодексом на других предприятиях группы компаний СУЭК'
                },
                {
                    id: 4,
                    txt: 'Как применяют Кодекс этики коллеги из других компаний, не входящих в состав группы компаний СУЭК'
                },
                {
                    id: 5,
                    txt: 'Конкурсы о Кодексе'
                },
                {
                    id: 6,
                    txt: 'Другое (напишите)',
                    need_input: true
                }
            ]
        },
        {
            id: 5,
            type: 'multi_rows',
            title: 'Знаете ли вы, в течение какого срока будет рассмотрено обращение:',
            items: [{
                    id: 1,
                    type: 'single_radio_list_vertical', // вертикальный список radio
                    txt: 'а) На горячую линию СУЭК',
                    items: [{
                            id: 1,
                            txt: 'Да, знаю',
                            need_input: true, // поле ввода если выбрать этот пункт меню
                            placeholder: 'Введите количество дней'
                        },
                        {
                            id: 2,
                            txt: 'Знаю, что будет рассмотрено оперативно, но точное количество дней назвать не могу'
                        },
                        {
                            id: 3,
                            txt: 'Нет, не знаю'
                        }
                    ]
                },
                {
                    id: 2,
                    type: 'single_radio_list_vertical', // вертикальный список radio
                    txt: 'б) К координатору по этике',
                    items: [{
                            id: 1,
                            txt: 'Да, знаю',
                            need_input: true, // поле ввода если выбрать этот пункт меню
                            placeholder: 'Введите количество дней'
                        },
                        {
                            id: 2,
                            txt: 'Знаю, что будет рассмотрено оперативно, но точное количество дней назвать не могу'
                        },
                        {
                            id: 3,
                            txt: 'Нет, не знаю'
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            type: 'single_radio_selector',
            title: 'Выберите ваш пол',
            items: [{
                    id: 1,
                    txt: 'Мужской',
                    need_input: false // поле ввода если выбрать этот пункт меню
                },
                {
                    id: 2,
                    txt: 'Женский'
                }
            ]
        },
        {
            id: 7,
            type: 'single_radio_selector',
            title: 'Выберите ваш возраст',
            items: [{
                    id: 1,
                    txt: '25 и менее',
                    need_input: false // поле ввода если выбрать этот пункт меню
                },
                {
                    id: 2,
                    txt: 'от 26 до 35'
                },
                {
                    id: 3,
                    txt: 'от 36 до 40'
                },
                {
                    id: 4,
                    txt: 'от 41 до 50'
                },
                {
                    id: 5,
                    txt: '51 и старше'
                }
            ]
        },
        {
            id: 8,
            type: 'multi_rows',
            title: 'Заполните данные о себе',
            items: [{
                    id: 1,
                    type: 'single_radio_list_horizontal',
                    txt: 'Выберите ваш пол',
                    items: ['Мужской', 'Женский']
                },
                {
                    id: 2,
                    type: 'single_radio_list_horizontal',
                    txt: 'Выберите ваш возраст',
                    items: ['25 и менее', 'от 26 до 35', 'от 36 до 40', 'от 41 до 50', '51 и старше']
                },
                {
                    id: 3,
                    type: 'single_radio_list_horizontal',
                    txt: 'Выберите ваш регион',
                    items: ['Бурятия', 'Забайкалье', 'Красноярский край', 'Кузбасс', 'Приморье', 'Хакасия', 'Хабаровский край', 'Мурманская область', 'Москва', 'Другое']
                }
            ]
        },
        {
            id: 9,
            type: 'single_radio_selector',
            title: 'Выберите ваш регион',
            items: [{
                    id: 1,
                    txt: 'Бурятия',
                    need_input: false // поле ввода если выбрать этот пункт меню
                },
                {
                    id: 2,
                    txt: 'Забайкалье'
                },
                {
                    id: 3,
                    txt: 'Красноярский край'
                },
                {
                    id: 4,
                    txt: 'Кузбасс'
                },
                {
                    id: 5,
                    txt: 'Приморье'
                },
                {
                    id: 6,
                    txt: 'Хакасия'
                },
                {
                    id: 7,
                    txt: 'Хабаровский край'
                },
                {
                    id: 8,
                    txt: 'Мурманская область'
                },
                {
                    id: 9,
                    txt: 'Москва'
                },
                {
                    id: 10,
                    txt: 'Другое (укажите)',
                    need_input: true
                }
            ]
        },
        /*{
            type: 'end',
            title: 'Спасибо за участие в опросе!',
            text: 'В современном мире честность становится ценнее и важнее взглядов. Развитое общество разрешает человеку иметь какие угодно взгляды или убеждения, но всегда честно о них заявлять, не быть ханжой. Можно иметь открытые отношения, но нельзя изменять. Можно не усыновлять, но нельзя врать детям об их происхождении. Нельзя врать пациентам и врачам. Но все же человек слаб и продолжает иногда врать. Более того, в некоторых случаях люди делают это сознательно, считая, что так все же лучше для них самих или их близких. «Медуза» предлагает читателям представить себе ряд ситуаций и ответить, можно ли в них соврать или нет.'
        }*/
        {
            type: 'end_2',
            title: 'Спасибо за участие в опросе!',
            text_1: 'Результаты голосования на 06.08.2020',
            text_2: 'Знаете ли вы, в течение какого срока будет рассмотрено обращение?',
            chart: [
                [39, "39.0%", "Да", "#949300"],
                [35.5, "35.5%", "Нет", "#F6C358"],
                [25.5, "25.5%", "Не знаю", "#707274"]
            ]
        }

    ]
};

var answers_list = [];
var current_poll_index = 0;

function checkMultiRow_v2(dom_obj) {
    let flag = true;

    $('.poll_single_radio_list_vertical_item_list').each(function () {

        let flag_2 = false;

        $(this).find('.poll_single_radio_list_vertical_item_list_radio').each(function () {

            let el = $('#poll_single_radio_list_vertical_item_input' + $(this).data('input_id'));

            if (
                ($(this).data('status') === 'checked' && !el.is(':visible')) ||
                (
                    $(this).data('status') === 'checked' &&
                    el.is(':visible') &&
                    $.trim(el.find('input').val()).length > 0
                )
            ) {
                flag_2 = true;
                return;
            }

        });

        if (!flag_2) {
            flag = false;
            return false;
        }

    });

    if (flag) {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', false);
    } else {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', true);
    }
}

function onKeyUpMultiRow_2(dom_obj) {
    checkMultiRow_v2();
}

function onClickMultiRow_2(dom_obj, need_input) {
    $(dom_obj).parent().find('.poll_single_radio_list_vertical_item_list_radio').data('status', 'unchecked');
    $(dom_obj).parent().find('.poll_single_radio_list_vertical_item_list_radio > img').attr('src', '../images/icons/radiobtn-uncheck-v2.svg');
    $(dom_obj).parent().find('.poll_single_radio_list_vertical_item_input').hide();

    $(dom_obj).find('img').attr('src', '../images/icons/radiobtn-check-v2.svg');
    $(dom_obj).data('status', 'checked');

    if (need_input === true) {
        let el = $('#poll_single_radio_list_vertical_item_input' + $(dom_obj).data('input_id'));
        el.show();
    }

    checkMultiRow_v2();
}

function pollSingleCheckboxSelector_Check(dom_obj, minimal_count_check) {
    let count_checked = 0;
    let errors = false;

    $(dom_obj).parent().find('.poll_single_checkbox_selector_item').each(function () {

        if ($(this).data('status') === 'checked') {
            let el = $('#poll_single_checkbox_selector_item_input' + $(this).data('input_id'));

            if (el.is(':visible') && $.trim(el.find('input').val()).length < 1) {
                errors = true;
                return false;
            }

            count_checked += 1;
        }
    });

    if (!errors && count_checked >= minimal_count_check) {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', false);
    } else {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', true);
    }
}

function onKeyUpCheckBoxBnt_1(dom_obj, minimal_count_check) {
    pollSingleCheckboxSelector_Check($(dom_obj).parent().parent(), minimal_count_check);
}

function pollMultiSwtichSelector_Check(dom_obj, minimal_count_check) {
    let count_checked = 0;
    let errors = false;

    $(dom_obj).parent().find('.poll_multi_switch_selector_item').each(function () {

        if ($(this).data('status') === 'checked') {
            let el = $('#poll_multi_switch_selector_item_input' + $(this).data('input_id'));

            if (el.is(':visible') && $.trim(el.find('input').val()).length < 1) {
                errors = true;
                return false;
            }

            count_checked += 1;
        }
    });

    if (!errors && count_checked >= minimal_count_check) {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', false);
    } else {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', true);
    }
}

function onKeyUpMultiSwitchBnt(dom_obj, minimal_count_check) {
    pollMultiSwtichSelector_Check($(dom_obj).parent().parent(), minimal_count_check);
}

function pollClickMultiSwitchBnt(dom_obj, need_input, minimal_count_check) {
    if ($(dom_obj).data('status') === 'unchecked') {
        $(dom_obj).find('img').attr('src', '../images/icons/switch-check.svg');
        $(dom_obj).data('status', 'checked');

        if (need_input === true) {
            let el = $('#poll_multi_switch_selector_item_input' + $(dom_obj).data('input_id'));
            el.show();
        }
    } else {
        $(dom_obj).find('img').attr('src', '../images/icons/switch-uncheck.svg');
        $(dom_obj).data('status', 'unchecked');

        if (need_input === true) {
            let el = $('#poll_multi_switch_selector_item_input' + $(dom_obj).data('input_id'));
            el.hide();
        }
    }

    pollMultiSwtichSelector_Check(dom_obj, minimal_count_check);
}

function pollClickCheckBoxBnt_1(dom_obj, need_input, minimal_count_check) {
    if ($(dom_obj).data('status') === 'unchecked') {
        $(dom_obj).find('img').attr('src', '../images/icons/checkbox-checked.svg');
        $(dom_obj).data('status', 'checked');

        if (need_input === true) {
            let el = $('#poll_single_checkbox_selector_item_input' + $(dom_obj).data('input_id'));
            el.show();
        }
    } else {
        $(dom_obj).find('img').attr('src', '../images/icons/checkbox-unchecked.svg');
        $(dom_obj).data('status', 'unchecked');

        if (need_input === true) {
            let el = $('#poll_single_checkbox_selector_item_input' + $(dom_obj).data('input_id'));
            el.hide();
        }
    }

    pollSingleCheckboxSelector_Check(dom_obj, minimal_count_check);
}

function onClickMultiRow_1(dom_obj, _count) {
    $(dom_obj).parent().find('.poll_single_radio_list_horizontal_item_list_radio').data('status', 'unchecked').removeClass('check');
    $(dom_obj).parent().find('.poll_single_radio_list_horizontal_item_list_radio > img').attr('src', '../images/icons/radiobtn-uncheck-v2.svg');

    $(dom_obj).find('img').attr('src', '../images/icons/radiobtn-check-v2.svg');
    $(dom_obj).data('status', 'checked').addClass('check');

    let counter = 0;

    $(dom_obj).parent().parent().parent().find('.poll_single_radio_list_horizontal_item_list_radio').each(function () {

        if ($(this).data('status') === 'checked') {
            counter += 1;
        }

    });

    if (counter === _count) {
        $(dom_obj).parent().parent().parent().find('.poll_page_buttom').prop('disabled', false);
    }
}

function onKeyUpRadioBnt_1(dom_obj) {
    if ($.trim($(dom_obj).val()).length > 0) {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', false);
    } else {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', true);
    }
}

function pollClickRadioBnt_1(dom_obj, need_input) {
    $(dom_obj).parent().find('.poll_single_radio_selector_item').data('status', 'unchecked').removeClass('check');
    $(dom_obj).parent().find('.poll_single_radio_selector_item > img').attr('src', '../images/icons/radiobtn-uncheck-v2.svg');
    $(dom_obj).parent().find('.poll_single_radio_selector_item_input').hide();

    $(dom_obj).find('img').attr('src', '../images/icons/radiobtn-check-v2.svg');
    $(dom_obj).data('status', 'checked').addClass('check');

    if (need_input === true) {
        let el = $('#poll_single_radio_selector_item_input' + $(dom_obj).data('input_id'));
        el.show();

        onKeyUpRadioBnt_1(el.find('input'));
    } else {
        $(dom_obj).parent().parent().find('.poll_page_buttom').prop('disabled', false);
    }
}
function onKeyUpSwitchBtn(dom_obj) {
    if ($.trim($(dom_obj).val()).length > 0) {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', false);
    } else {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', true);
    }
}

function pollClickSwitchBnt(dom_obj, need_input) {
    $(dom_obj).parent().find('.poll_single_switch_selector_item').data('status', 'unchecked').removeClass('check');
    $(dom_obj).parent().find('.poll_single_switch_selector_item > img').attr('src', '../images/icons/switch-uncheck.svg');
    $(dom_obj).parent().find('.poll_single_switch_selector_item_input').hide();

    $(dom_obj).find('img').attr('src', '../images/icons/switch-check.svg');
    $(dom_obj).data('status', 'checked').addClass('check');

    if (need_input === true) {
        let el = $('#poll_single_switch_selector_item_input' + $(dom_obj).data('input_id'));
        el.show();

        onKeyUpSwitchBtn(el.find('input'));
    } else {
        $(dom_obj).parent().parent().find('.poll_page_buttom').prop('disabled', false);
    }
}

function onKeyUpNumBtn(dom_obj) {
    if ($.trim($(dom_obj).val()).length > 0) {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', false);
    } else {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', true);
    }
}

function pollClickNumBnt(dom_obj, need_input) {
    $(dom_obj).parent().find('.poll_single_switch_selector_item').data('status', 'unchecked').removeClass('check');
    $(dom_obj).parent().find('.poll_single_switch_selector_item > img').attr('src', '../images/icons/switch-uncheck.svg');
    $(dom_obj).parent().find('.poll_single_switch_selector_item_input').hide();

    $(dom_obj).find('img').attr('src', '../images/icons/switch-check.svg');
    $(dom_obj).data('status', 'checked').addClass('check');

    if (need_input === true) {
        let el = $('#poll_single_switch_selector_item_input' + $(dom_obj).data('input_id'));
        el.show();

        onKeyUpNumBtn(el.find('input'));
    } else {
        $(dom_obj).parent().parent().find('.poll_page_buttom').prop('disabled', false);
    }
}
function onKeyUpInputValue_1(dom_obj) {
    if ($.trim($(dom_obj).val()).length > 0) {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', false);
    } else {
        $('.poll_page_left').find('.poll_page_buttom').prop('disabled', true);
    }
}

function saveCurrentPoll() {
    var obj = polls_item.items[current_poll_index];

    if (obj.type === 'single_radio_selector') {
        $('.poll_single_radio_selector_item').each(function () {

            if ($(this).data('status') === 'checked') {
                let _save = {
                    id: obj.id,
                    type: obj.type
                };

                if ($(this).data('needinput')) {
                    _save.values = [{
                        id: $(this).data('id'),
                        txt: $.trim($('#poll_single_radio_selector_item_input' + $(this).data('input_id')).find('input').val())
                    }];
                } else {
                    _save.values = [{
                        id: $(this).data('id')
                    }];
                }

                answers_list.push(_save);
            }

        });
    } else if (obj.type === 'single_switch_selector') {
        $('.poll_single_switch_selector_item').each(function () {

            if ($(this).data('status') === 'checked') {
                let _save = {
                    id: obj.id,
                    type: obj.type
                };

                if ($(this).data('needinput')) {
                    _save.values = [{
                        id: $(this).data('id'),
                        txt: $.trim($('#poll_single_switch_selector_item_input' + $(this).data('input_id')).find('input').val())
                    }];
                } else {
                    _save.values = [{
                        id: $(this).data('id')
                    }];
                }

                answers_list.push(_save);
            }

        });
    } else if (obj.type === 'input_value') {
        let txt = $.trim($('.poll_input_value > input').val());

        answers_list.push({
            id: obj.id,
            type: obj.type,
            txt: txt
        });
    } else if (obj.type === 'multi_rows') {
        let _save = {
            id: obj.id,
            type: obj.type,
            values: []
        };

        $('.poll_single_radio_list_horizontal_item_list_radio').each(function () {

            if ($(this).data('status') === 'checked') {
                _save.values.push({
                    id: $(this).data('id')
                });
            }
        });
        
        $('.poll_single_radio_list_horizontal_item_list_numeric').each(function () {

            if ($(this).data('status') === 'checked') {
                _save.values.push({
                    id: $(this).data('id')
                });
            }
        });

        $('.poll_single_radio_list_vertical_item_list_radio').each(function () {

            if ($(this).data('status') === 'checked') {
                if ($(this).data('needinput')) {
                    _save.values.push({
                        id: $(this).data('id'),
                        txt: $.trim($('#poll_single_radio_list_vertical_item_input' + $(this).data('input_id')).find('input').val())
                    });
                } else {
                    _save.values.push({
                        id: $(this).data('id')
                    });
                }
            }
        });

        answers_list.push(_save);
    } else if (obj.type === 'multi_switch_selector') {
        let _save = {
            id: obj.id,
            type: obj.type,
            values: []
        };

        $('.poll_multi_switch_selector_item').each(function () {

            if ($(this).data('status') === 'checked') {
                if ($(this).data('needinput')) {
                    _save.values.push({
                        id: $(this).data('id'),
                        txt: $.trim($('#poll_multi_switch_selector_item_input' + $(this).data('input_id')).find('input').val())
                    });
                } else {
                    _save.values.push({
                        id: $(this).data('id')
                    });
                }
            }
        });

        answers_list.push(_save);
    } else if (obj.type === 'single_checkbox_selector') {
        let _save = {
            id: obj.id,
            type: obj.type,
            values: []
        };

        $('.poll_single_checkbox_selector_item').each(function () {

            if ($(this).data('status') === 'checked') {
                if ($(this).data('needinput')) {
                    _save.values.push({
                        id: $(this).data('id'),
                        txt: $.trim($('#poll_single_checkbox_selector_item_input' + $(this).data('input_id')).find('input').val())
                    });
                } else {
                    _save.values.push({
                        id: $(this).data('id')
                    });
                }
            }
        });

        answers_list.push(_save);
    }
}

function openCloseFooterUserInfo(dom_obj) {
    if ($('.poll_page_right').is(':visible')) {
        $('.poll_page_right').hide();
        $(dom_obj).find('img').attr('src', '../images/icons/arrow-down-gold.svg');
    } else {
        $('.poll_page_right').show();
        $(dom_obj).find('img').attr('src', '../images/icons/arrow-up-gold.svg');
    }
}

function ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function buildPoll(index) {
    var _index = 0;
    var data = polls_item;

    if (index !== undefined) {
        _index = index;
    }

    current_poll_index = _index;

    let ss = '';

    ss += '<div class="poll_page">';

    ss += '<div class="poll_page_left">';

    //------------------------------------------------------------------
    let objSF = data.static_form;

    if (objSF !== undefined) {
        ss += '<div class="poll_static_form">';
        for (let sf in objSF.items) {
            let dat = objSF.items[sf];
            ss += '<div class="poll_input_value">';
            ss += '<div class="poll_title">' + dat.txt + '</div>';
            if (dat.need_input === true) {
                ss += '<textarea type="text" placeholder="' + dat.placeholder + '"></textarea>';
            }
            ss += '</div>';
        }
        ss += '</div>';
    }
    //------------------------------------------------------------------

    let obj = data.items[_index];

    if (obj.type === 'first') {
        if (obj.hashtag !== undefined) {
            ss += '<div class="poll_page_left_top_line">';

            if (obj.required !== undefined) {
                ss += '<span class="poll_page_left_top_line_required">Обязательный опрос</span>';
            }

            if (obj.required !== undefined) {
                ss += '<span class="poll_page_left_top_line_hashtag">' + obj.hashtag + '</span>';
            }

            ss += '</div>';
        }

        ss += '<div class="poll_page_left_main_title">';
        ss += obj.title;

        if (obj.tooltip) {
            ss += '<button aria-label="' + obj.tooltip + '" data-microtip-position="bottom-right" role="tooltip">\
                                <img src="../images/info-icon-black.svg" />\
                              </button>';
        }

        ss += '</div>';

        ss += '<div class="poll_page_left_main_page_first_text">';
        ss += obj.text;
        ss += '</div>';

        ss += '<div class="poll_page_buttom_c"><button class="poll_page_buttom btn btn-primary" onclick="buildPoll(' + (_index + 1) + ')">Начать</button>';
        ss += '<div class="poll_page_menu_footer" onclick="openCloseFooterUserInfo(this)">';
        ss += '<span>Есть вопросы?</span><img src="../images/icons/arrow-down-gold.svg" />';
        ss += '</div>';
        ss += '</div>';
    } else if (obj.type === 'single_radio_selector') {
        ss += '<div class="poll_top_counter">';
        ss += 'Вопрос ' + (_index) + '/' + data.items.length;
        ss += '</div>';

        ss += '<div class="poll_page_left_main_title">';
        ss += obj.title;

        if (obj.tooltip) {
            ss += '<button aria-label="' + obj.tooltip + '" data-microtip-position="bottom-right" role="tooltip">\
                                <img src="../images/info-icon-black.svg" />\
                              </button>';
        }

        ss += '</div>';
        for (let tt of obj.items) {
            let _id = ID();
            ss += '<div class="poll_single_radio_selector_item_input" id="poll_single_radio_selector_item_input' + _id + '" style="display:none"><input type="text" onkeyup="onKeyUpRadioBnt_1(this)" placeholder="' + (tt.placeholder != undefined ? tt.placeholder : '') + '" /></div>';
            ss += '<div class="poll_single_radio_selector_item" data-id="' + obj.id + '-' + tt.id + '" data-input_id="' + _id + '" data-needinput="' + (tt.need_input != undefined && tt.need_input) + '" onclick="pollClickRadioBnt_1(this, ' + (tt.need_input != undefined && tt.need_input ? tt.need_input : null) + ')">';
            ss += '<img src="../images/icons/radiobtn-uncheck-v2.svg" />';
            ss += '<span>' + tt.txt + '</span>';
            ss += '</div>';
        }
        ss += '<div class="poll_page_buttom_c"><button class="poll_page_buttom btn btn-primary" disabled="disabled" onclick="saveCurrentPoll();buildPoll(' + (_index + 1) + ')">Далее</button>';
        ss += '<div class="poll_page_menu_footer" onclick="openCloseFooterUserInfo(this)">';
        ss += '<span>Есть вопросы?</span><img src="../images/icons/arrow-down-gold.svg" />';
        ss += '</div>';
        ss += '</div>';
    } else if (obj.type === 'single_switch_selector') {
        ss += '<div class="poll_top_counter">';
        ss += 'Вопрос ' + (_index) + '/' + data.items.length;
        ss += '</div>';

        ss += '<div class="poll_page_left_main_title">';
        ss += obj.title;

        if (obj.tooltip) {
            ss += '<button aria-label="' + obj.tooltip + '" data-microtip-position="bottom-right" role="tooltip">\
                                <img src="../images/info-icon-black.svg" />\
                              </button>';
        }

        ss += '</div>';
        for (let tt of obj.items) {
            let _id = ID();
            ss += '<div class="poll_single_switch_selector_item_input" id="poll_single_switch_selector_item_input' + _id + '" style="display:none"><input type="text" onkeyup="onKeyUpSwitchBtn(this)" placeholder="' + (tt.placeholder != undefined ? tt.placeholder : '') + '" /></div>';
            ss += '<div class="poll_single_switch_selector_item" data-id="' + obj.id + '-' + tt.id + '" data-input_id="' + _id + '" data-needinput="' + (tt.need_input != undefined && tt.need_input) + '" onclick="pollClickSwitchBnt(this, ' + (tt.need_input != undefined && tt.need_input ? tt.need_input : null) + ')">';
            ss += '<img src="../images/icons/switch-uncheck.svg" />';
            ss += '<span>' + tt.txt + '</span>';
            ss += '</div>';
        }
        ss += '<div class="poll_page_buttom_c"><button class="poll_page_buttom btn btn-primary" disabled="disabled" onclick="saveCurrentPoll();buildPoll(' + (_index + 1) + ')">Далее</button>';
        ss += '<div class="poll_page_menu_footer" onclick="openCloseFooterUserInfo(this)">';
        ss += '<span>Есть вопросы?</span><img src="../images/icons/arrow-down-gold.svg" />';
        ss += '</div>';
        ss += '</div>';
    } else if (obj.type === 'numeric_selector') {
        ss += '<div class="poll_top_counter">';
        ss += 'Вопрос ' + (_index) + '/' + data.items.length;
        ss += '</div>';

        ss += '<div class="poll_page_left_main_title">';
        ss += obj.title;

        if (obj.tooltip) {
            ss += '<button aria-label="' + obj.tooltip + '" data-microtip-position="bottom-right" role="tooltip">\
                                <img src="../images/info-icon-black.svg" />\
                              </button>';
        }

        ss += '</div>';
        for (let tt of obj.items) {
            if (tt.type === 'single_radio_list_horizontal') {
                ss += '<div class="poll_items_container">';
                ss += '<div class="poll_single_radio_list_horizontal_item_title">';
                ss += tt.txt;
                ss += '</div>';
                ss += '<div class="poll_single_radio_list_horizontal_item_list">';
                for (var i in tt.items) {
                    let _v = tt.items[i];

                    ss += '<div class="poll_single_radio_list_horizontal_item_list_radio" data-id="' + obj.id + '-' + tt.id + '-' + i + '" onclick="onClickMultiRow_1(this, ' + obj.items.length + ')">';
                    ss += '<img src="../images/icons/radiobtn-uncheck-v2.svg" />';
                    ss += '<span>' + _v + '</span>';
                    ss += '</div>';
                }
                ss += '</div>';
                ss += '</div>';
            } else if (tt.type === 'single_radio_list_horizontal_flex') {
                ss += '<div class="poll_items_container">';
                ss += '<div class="poll_single_radio_list_horizontal_flex_item_title">';
                ss += tt.txt;
                ss += '</div>';
                ss += '<div class="poll_single_radio_list_horizontal_flex_item_list">';
                for (var i in tt.items) {
                    let _v = tt.items[i];

                    ss += '<div class="poll_single_radio_list_horizontal_item_list_radio" data-id="' + obj.id + '-' + tt.id + '-' + i + '" onclick="onClickMultiRow_1(this, ' + obj.items.length + ')">';
                    ss += '<img src="../images/icons/radiobtn-uncheck-v2.svg" />';
                    ss += '<span>' + _v + '</span>';
                    ss += '</div>';
                }
                ss += '</div>';
                ss += '</div>';
            } else if (tt.type === 'single_radio_list_vertical') {
                ss += '<div class="poll_single_radio_list_vertical_item">';
                ss += '<div class="poll_single_radio_list_vertical_item_title">';
                ss += tt.txt;
                ss += '</div>';
                ss += '<div class="poll_single_radio_list_vertical_item_list">';
                for (var i in tt.items) {
                    let _v = tt.items[i];
                    let _id = ID();

                    ss += '<div class="poll_single_radio_list_vertical_item_list_radio" data-input_id="' + _id + '" data-id="' + obj.id + '-' + tt.id + '-' + i + '" data-needinput="' + (_v.need_input != undefined && _v.need_input) + '" onclick="onClickMultiRow_2(this,' + (_v.need_input != undefined && _v.need_input ? _v.need_input : null) + ')">';
                    ss += '<img src="../images/icons/radiobtn-uncheck-v2.svg" />';
                    ss += '<span>' + _v.txt + '</span>';
                    ss += '</div>';
                    ss += '<div class="poll_single_radio_list_vertical_item_input" id="poll_single_radio_list_vertical_item_input' + _id + '" style="display:none"><input type="text" placeholder="' + (_v.placeholder != undefined ? _v.placeholder : '') + '" onkeyup="onKeyUpMultiRow_2(this)" /></div>';
                }
                ss += '</div>';
                ss += '</div>';
            }
        }
        ss += '<div class="poll_page_buttom_c"><button class="poll_page_buttom btn btn-primary" disabled="disabled" onclick="saveCurrentPoll();buildPoll(' + (_index + 1) + ')">Далее</button>';
        ss += '<div class="poll_page_menu_footer" onclick="openCloseFooterUserInfo(this)">';
        ss += '<span>Есть вопросы?</span><img src="../images/icons/arrow-down-gold.svg" />';
        ss += '</div>';
        ss += '</div>';
    } else if (obj.type === 'input_value') {
        ss += '<div class="poll_top_counter">';
        ss += 'Вопрос ' + (_index) + '/' + data.items.length;
        ss += '</div>';

        ss += '<div class="poll_page_left_main_title">';
        ss += obj.title;

        if (obj.tooltip) {
            ss += '<button aria-label="' + obj.tooltip + '" data-microtip-position="bottom-right" role="tooltip">\
                                <img src="../images/info-icon-black.svg" />\
                              </button>';
        }

        ss += '</div>';

        ss += '<div class="poll_input_value">'
        ss += '<textarea type="text" data-id="' + obj.id + '" placeholder="' + (obj.placeholder != undefined ? obj.placeholder : '') + '" onkeyup="onKeyUpInputValue_1(this)"></textarea>'
        ss += '</div>'

        ss += '<div class="poll_page_buttom_c"><button class="poll_page_buttom btn btn-primary" disabled="disabled" onclick="saveCurrentPoll();buildPoll(' + (_index + 1) + ')">Далее</button>';
        ss += '<div class="poll_page_menu_footer" onclick="openCloseFooterUserInfo(this)">';
        ss += '<span>Есть вопросы?</span><img src="../images/icons/arrow-down-gold.svg" />';
        ss += '</div>';
        ss += '</div>';
    } else if (obj.type === 'multi_rows') {
        ss += '<div class="poll_top_counter">';
        ss += 'Вопрос ' + (_index) + '/' + data.items.length;
        ss += '</div>';

        ss += '<div class="poll_page_left_main_title">';
        ss += obj.title;

        if (obj.tooltip) {
            ss += '<button aria-label="' + obj.tooltip + '" data-microtip-position="bottom-right" role="tooltip">\
                                <img src="../images/info-icon-black.svg" />\
                              </button>';
        }

        ss += '</div>';

        for (let tt of obj.items) {
            if (tt.type === 'single_radio_list_horizontal') {
                ss += '<div class="poll_items_container">';
                ss += '<div class="poll_single_radio_list_horizontal_item_title">';
                ss += tt.txt;
                ss += '</div>';
                ss += '<div class="poll_single_radio_list_horizontal_item_list">';
                for (var i in tt.items) {
                    let _v = tt.items[i];

                    ss += '<div class="poll_single_radio_list_horizontal_item_list_radio" data-id="' + obj.id + '-' + tt.id + '-' + i + '" onclick="onClickMultiRow_1(this, ' + obj.items.length + ')">';
                    ss += '<img src="../images/icons/radiobtn-uncheck-v2.svg" />';
                    ss += '<span>' + _v + '</span>';
                    ss += '</div>';
                }
                ss += '</div>';
                ss += '</div>';
            } else if (tt.type === 'single_radio_list_horizontal_flex') {
                ss += '<div class="poll_items_container">';
                ss += '<div class="poll_single_radio_list_horizontal_flex_item_title">';
                ss += tt.txt;
                ss += '</div>';
                ss += '<div class="poll_single_radio_list_horizontal_flex_item_list">';
                for (var i in tt.items) {
                    let _v = tt.items[i];

                    ss += '<div class="poll_single_radio_list_horizontal_item_list_radio" data-id="' + obj.id + '-' + tt.id + '-' + i + '" onclick="onClickMultiRow_1(this, ' + obj.items.length + ')">';
                    ss += '<img src="../images/icons/radiobtn-uncheck-v2.svg" />';
                    ss += '<span>' + _v + '</span>';
                    ss += '</div>';
                }
                ss += '</div>';
                ss += '</div>';
            } else if (tt.type === 'single_radio_list_vertical') {
                ss += '<div class="poll_single_radio_list_vertical_item">';
                ss += '<div class="poll_single_radio_list_vertical_item_title">';
                ss += tt.txt;
                ss += '</div>';
                ss += '<div class="poll_single_radio_list_vertical_item_list">';
                for (var i in tt.items) {
                    let _v = tt.items[i];
                    let _id = ID();

                    ss += '<div class="poll_single_radio_list_vertical_item_list_radio" data-input_id="' + _id + '" data-id="' + obj.id + '-' + tt.id + '-' + i + '" data-needinput="' + (_v.need_input != undefined && _v.need_input) + '" onclick="onClickMultiRow_2(this,' + (_v.need_input != undefined && _v.need_input ? _v.need_input : null) + ')">';
                    ss += '<img src="../images/icons/radiobtn-uncheck-v2.svg" />';
                    ss += '<span>' + _v.txt + '</span>';
                    ss += '</div>';
                    ss += '<div class="poll_single_radio_list_vertical_item_input" id="poll_single_radio_list_vertical_item_input' + _id + '" style="display:none"><input type="text" placeholder="' + (_v.placeholder != undefined ? _v.placeholder : '') + '" onkeyup="onKeyUpMultiRow_2(this)" /></div>';
                }
                ss += '</div>';
                ss += '</div>';
            } else if (tt.type === 'numeric_selector') {
                ss += '<div class="poll_items_container poll_items_container--numeric">';
                ss += '<div class="poll_single_radio_list_horizontal_flex_item_title">';
                ss += tt.txt;
                ss += '</div>';
                ss += '<div class="poll_single_radio_list_horizontal_numeric_item_list">';
                for (var i in tt.items) {
                    let _v = tt.items[i];

                    ss += '<div class="poll_single_radio_list_horizontal_item_list_radio" data-id="' + obj.id + '-' + tt.id + '-' + i + '" onclick="onClickMultiRow_1(this, ' + obj.items.length + ')">';
                    ss += _v;
                    ss += '</div>';
                }
                ss += '</div>';
                ss += '</div>';
            }
        }

        ss += '<div class="poll_page_buttom_c"><button class="poll_page_buttom btn btn-primary" disabled="disabled" onclick="saveCurrentPoll();buildPoll(' + (_index + 1) + ')">Далее</button>';
        ss += '<div class="poll_page_menu_footer" onclick="openCloseFooterUserInfo(this)">';
        ss += '<span>Есть вопросы?</span><img src="../images/icons/arrow-down-gold.svg" />';
        ss += '</div>';
        ss += '</div>';
    } else if (obj.type === 'single_checkbox_selector') {
        ss += '<div class="poll_top_counter">';
        ss += 'Вопрос ' + (_index) + '/' + data.items.length;
        ss += '</div>';

        ss += '<div class="poll_page_left_main_title">';
        ss += obj.title;

        if (obj.tooltip) {
            ss += '<button aria-label="' + obj.tooltip + '" data-microtip-position="bottom-right" role="tooltip">\
                                <img src="../images/info-icon-black.svg" />\
                              </button>';
        }

        ss += '</div>';

        for (let tt of obj.items) {
            let _id = ID();

            ss += '<div class="poll_single_checkbox_selector_item" data-status="unchecked" data-input_id="' + _id + '" data-id="' + obj.id + '-' + tt.id + '" data-needinput="' + (tt.need_input != undefined && tt.need_input) + '" onclick="pollClickCheckBoxBnt_1(this, ' + (tt.need_input != undefined && tt.need_input ? tt.need_input : null) + ',' + (obj.minimal_count_check ? obj.minimal_count_check : 1) + ')">';
            ss += '<img src="../images/icons/checkbox-unchecked.svg" />';
            ss += '<span>' + tt.txt + '</span>';
            ss += '</div>';
            ss += '<div class="poll_single_checkbox_selector_item_input" id="poll_single_checkbox_selector_item_input' + _id + '" style="display:none"><input type="text" placeholder="' + (tt.placeholder != undefined ? tt.placeholder : '') + '" onclick="event.stopPropagation()" onkeyup="onKeyUpCheckBoxBnt_1(this,' + (obj.minimal_count_check ? obj.minimal_count_check : 1) + ')" /></div>';
        }
        ss += '<div class="poll_page_buttom_c"><button class="poll_page_buttom btn btn-primary" disabled="disabled" onclick="saveCurrentPoll();buildPoll(' + (_index + 1) + ')">Далее</button>';
        ss += '<div class="poll_page_menu_footer" onclick="openCloseFooterUserInfo(this)">';
        ss += '<span>Есть вопросы?</span><img src="../images/icons/arrow-down-gold.svg" />';
        ss += '</div>';
        ss += '</div>';
    } else if (obj.type === 'multi_switch_selector') {
        ss += '<div class="poll_top_counter">';
        ss += 'Вопрос ' + (_index) + '/' + data.items.length;
        ss += '</div>';

        ss += '<div class="poll_page_left_main_title">';
        ss += obj.title;

        if (obj.tooltip) {
            ss += '<button aria-label="' + obj.tooltip + '" data-microtip-position="bottom-right" role="tooltip">\
                                <img src="../images/info-icon-black.svg" />\
                              </button>';
        }

        ss += '</div>';

        for (let tt of obj.items) {
            let _id = ID();

            ss += '<div class="poll_multi_switch_selector_item" data-status="unchecked" data-input_id="' + _id + '" data-id="' + obj.id + '-' + tt.id + '" data-needinput="' + (tt.need_input != undefined && tt.need_input) + '" onclick="pollClickMultiSwitchBnt(this, ' + (tt.need_input != undefined && tt.need_input ? tt.need_input : null) + ',' + (obj.minimal_count_check ? obj.minimal_count_check : 1) + ')">';
            ss += '<img src="../images/icons/switch-uncheck.svg" />';
            ss += '<span>' + tt.txt + '</span>';
            ss += '</div>';
            ss += '<div class="poll_multi_switch_selector_item_input" id="poll_multi_switch_selector_item_input' + _id + '" style="display:none"><input type="text" placeholder="' + (tt.placeholder != undefined ? tt.placeholder : '') + '" onclick="event.stopPropagation()" onkeyup="onKeyUpMultiSwitchBnt(this,' + (obj.minimal_count_check ? obj.minimal_count_check : 1) + ')" /></div>';
        }
        ss += '<div class="poll_page_buttom_c"><button class="poll_page_buttom btn btn-primary" disabled="disabled" onclick="saveCurrentPoll();buildPoll(' + (_index + 1) + ')">Далее</button>';
        ss += '<div class="poll_page_menu_footer" onclick="openCloseFooterUserInfo(this)">';
        ss += '<span>Есть вопросы?</span><img src="../images/icons/arrow-down-gold.svg" />';
        ss += '</div>';
        ss += '</div>';
    } else if (obj.type === 'end') {
        ss += '<div class="poll_page_left_main_title">';
        ss += obj.title;

        if (obj.tooltip) {
            ss += '<button aria-label="' + obj.tooltip + '" data-microtip-position="bottom-right" role="tooltip">\
                                <img src="../images/info-icon-black.svg" />\
                              </button>';
        }

        ss += '</div>';

        ss += '<div class="poll_page_left_main_text_end">';
        ss += obj.text;
        ss += '</div>';

        ss += '<div class="poll_page_buttom_c"><button class="poll_page_buttom btn btn-primary">Архив опросов</button>';
        ss += '<div class="poll_page_menu_footer" onclick="openCloseFooterUserInfo(this)">';
        ss += '<span>Есть вопросы?</span><img src="../images/icons/arrow-down-gold.svg" />';
        ss += '</div>';
        ss += '</div>';
    } else if (obj.type === 'end_2') {
        ss += '<div class="poll_page_left_main_title">';
        ss += obj.title;

        if (obj.tooltip) {
            ss += '<button aria-label="' + obj.tooltip + '" data-microtip-position="bottom-right" role="tooltip">\
                                <img src="../images/info-icon-black.svg" />\
                              </button>';
        }

        ss += '</div>';

        ss += '<div class="poll_page_left_main_text_end_2">';
        ss += obj.text_1;
        ss += '</div>';

        ss += '<div class="poll_page_left_main_text_end">';
        ss += obj.text_2;
        ss += '</div>';

        if (obj.chart.length > 0) {
            ss += '<div class="poll_page_left_chart">';
            let max = obj.chart[0][0];

            for (let _h of obj.chart) {
                if (max < _h[0]) {
                    max = _h[0];
                }
            }

            for (let _h of obj.chart) {
                let pr = _h[0] * 60 / max;

                ss += '<div class="poll_page_left_chart_item">';

                ss += '<div class="poll_page_left_chart_item_bar_c">';
                ss += '<div class="poll_page_left_chart_item_bar" style="width:' + pr + '%;background:' + _h[3] + '">';
                ss += '<label>' + _h[1] + '</label>';
                ss += '</div>';
                ss += '<div class="poll_page_left_chart_item_txt">';
                ss += _h[2];
                ss += '</div>';
                ss += '</div>';



                ss += '</div>';
            }
            ss += '</div>';
        }

        ss += '<div class="poll_page_buttom_c"><button class="poll_page_buttom btn btn-primary">Архив опросов</button>';
        ss += '<div class="poll_page_menu_footer" onclick="openCloseFooterUserInfo(this)">';
        ss += '<span>Есть вопросы?</span><img src="../images/icons/arrow-down-gold.svg" />';
        ss += '</div>';
        ss += '</div>';
    }
    //------------------------------------------------------------------

    ss += '</div>';

    ss += '<div class="poll_page_right">';
    ss += '<div class="poll_page_right_header">';
    ss += 'Есть вопросы?';
    ss += '</div>';
    ss += '<div class="poll_page_right_user_info">';
    ss += '<img class="poll_page_right_user_info_avatar" src="' + data.user_info.photo_url + '" />';

    ss += '<a href="#" class="poll_page_right_user_info_fio">';
    ss += data.user_info.fio;
    ss += '</a>';

    ss += '<div class="poll_page_right_user_info_position">';
    ss += data.user_info.position;
    ss += '</div>';

    ss += '<div class="poll_page_right_user_info_location">';
    ss += '<img src="../images/icons/geolocation.svg" />';
    ss += '<a href="#">' + data.user_info.location + '</a>';
    ss += '</div>';

    ss += '<div class="poll_page_right_user_info_hline"></div>';

    ss += '<div class="poll_page_right_user_info_footer_btn">';
    ss += '<a href="#">Написать</a>';
    ss += '</div>';



    ss += '</div>';

    ss += '</div>';

    ss += '</div>';

    $('#poll_data').html(ss);
}

$(function () {

    answers_list = [];
    buildPoll();

});