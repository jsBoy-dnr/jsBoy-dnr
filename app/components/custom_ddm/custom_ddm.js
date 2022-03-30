/* eslint-disable guard-for-in */
/* eslint-disable radix */
/* eslint-disable no-shadow */
/* eslint-disable no-redeclare */
/* eslint-disable no-multi-str */
/* eslint-disable camelcase */
/* eslint-disable no-shadow-restricted-names */
/* eslint-disable no-undefined */
$(function (dropDownMenu, $, undefined) {
    dropDownMenu.getValue = function (element) {
        var el = element;

        // If element is a DOM element, convert to jQuery. If it is neither, log an error message
        if (!(el instanceof jQuery) && !isDOM(el)) {
            console.log('Please use a valid DOM or jQuery element when you use createBarChart()');
        } else if (isDOM(el)) {
            el = $(el);
        }

        return el.find('.cddm-container-header-title').data('value');
    };

    // class name frepix = 'cddm'
    dropDownMenu.create = function (element, data, options, callbackAfterSelect, callbackBeforeSelect) {
        var el = element;

        // If element is a DOM element, convert to jQuery. If it is neither, log an error message
        if (!(el instanceof jQuery) && !isDOM(el)) {
            console.log('Please use a valid DOM or jQuery element when you use createBarChart()');
        } else if (isDOM(el)) {
            el = $(el);
        }

        const opt = initOptions(options);

        el.html('');
        el.addClass('cddm-container');
        el.css({
            width: opt.width,
            height: opt.height,
            'z-index': opt.zIndex
        });

        var el_header = $('<div class="cddm-container-header"></div>');

        el_header.append('<span class="cddm-container-header-title cddm-status-nochoose">' + opt.defaultPlaceholder + '</span>');

        if ($.trim(opt.urlImgDownArrow).length > 0) {
            var img_arrow = $('<img class="cddm-container-header-img" src="' + opt.urlImgDownArrow + '" />');
            img_arrow.css({
                width: opt.imgIconArrowWidth,
                height: opt.imgIconArrowHeight
            });

            el_header.append(img_arrow);
        }

        el.append(el_header);

        var drop_down_el_list = $('<div class="cddm-container-drop-down-list-list nano"><div class="nano-content"></div></div>');
        var drop_down_el_fix_top = $('<div class="cddm-container-drop-down-list-fix-top">' + opt.textPopupTop + '</div>');

        var drop_down_el = $('<div class="cddm-container-drop-down-list"></div>');
        drop_down_el.css({
            'z-index': (opt.zIndex + 1)
        });

        if ($.trim(opt.urlImgDownArrow).length > 0) {
            var img_arrow1 = $('<img class="cddm-container-header-img" src="' + opt.urlImgDownArrow + '" />');
            img_arrow1.css({
                width: opt.imgIconArrowWidth,
                height: opt.imgIconArrowHeight
            });

            drop_down_el_fix_top.append(img_arrow1);
        }

        var temp = drop_down_el_list.find('.nano-content');
        var item_need_ckick = [];

        for (var _obj in data) {
            if (_obj.type === 'item') {
                var item = $('<div class="cddm-container-drop-down-list-row-item" data-value="' + _obj.value + '">' + _obj.txt + '</div>');

                if (
                    opt.initCheckedDefautValue != null &&
                    (
                        (opt.multiSelect && (opt.multiSelectCountLimit === 0 || item_need_ckick.length < opt.multiSelectCountLimit)) ||
                        (!opt.multiSelect && item_need_ckick.length === 0)
                    )
                ) {
                    if (Array.isArray(opt.initCheckedDefautValue) && $.inArray(_obj.value, opt.initCheckedDefautValue) !== -1) {
                        item_need_ckick.push(item);
                    } else if (_obj.value === opt.initCheckedDefautValue) {
                        item_need_ckick.push(item);
                    }
                }

                if (_obj.status !== undefined) {
                    item.addClass(_obj.status);
                }

                item.click(function (e) {
                    e.stopPropagation();

                    if ($(this).hasClass('disabled-select')) {
                        return;
                    }

                    let result = callbackAfterSelect($(this).data('value'), $(this).html());

                    if (result !== undefined && result === false) {
                        return;
                    }

                    el_header.find('span').removeClass('cddm-status-nochoose');
                    el_header.find('span').addClass('cddm-status-choose');

                    if (opt.multiSelect) {
                        $(this).toggleClass('cddm-container-drop-down-list-row-item-active');

                        let count = drop_down_el_list.find('.nano-content > div.cddm-container-drop-down-list-row-item-active').length;

                        if (opt.multiSelectCountLimit > 0 && count > opt.multiSelectCountLimit) {
                            $(this).toggleClass('cddm-container-drop-down-list-row-item-active');
                            return;
                        }

                        if (count === 0) {
                            el_header.find('span').html(opt.defaultPlaceholder);
                        } else if (opt.multiSelectStylePrintValue.type === 'pattern') {
                            el_header.find('span').html(opt.multiSelectStylePrintValue.value.replace(/{num_select}/gi, count));

                            if (opt.multiSelectStylePrintValue.suffix_by_num !== undefined) {
                                for (var _p in opt.multiSelectStylePrintValue.suffix_by_num) {
                                    let _str = el_header.find('span').html();
                                    let regex = new RegExp(_p.str_replace, 'igm');

                                    el_header.find('span').html(_str.replace(regex, __get_correct_str_suffix(count, _p.values_3)));
                                }
                            }
                        }

                        var _save_data = [];

                        drop_down_el_list.find('.nano-content > div.cddm-container-drop-down-list-row-item-active').each(function () {

                            _save_data.push($(this).data('value'));
                        });

                        el_header.find('span').data('value', _save_data);
                    } else {
                        el_header.find('span').html($(this).html());
                        el_header.find('span').data('value', $(this).data('value'));
                        drop_down_el.fadeOut(100);
                    }

                    callbackBeforeSelect($(this).data('value'), $(this).html());

                });

                temp.append(item);
            } else if (_obj.type === 'div') {
                var item = $('<div class="cddm-container-drop-down-list-row-item-div">' + _obj.txt + '</div>');
                temp.append(item);
            }
        }

        drop_down_el.append(drop_down_el_fix_top);
        drop_down_el.append(drop_down_el_list);

        el.append(drop_down_el);

        el_header.click(function (e) {
            e.stopPropagation();

            $('.cddm-container-drop-down-list').hide();

            el.css('z-index', drop_down_el.css('z-index') + 1);

            drop_down_el.show();
            drop_down_el_list.nanoScroller();
        });

        drop_down_el_list.css({
            width: opt.widthPopupList,
            height: opt.heightPopupList - drop_down_el_fix_top.height(),
            'max-height': opt.maxHeightPopupList - drop_down_el_fix_top.height()
        });

        $(document).click(function () {
            drop_down_el.hide();
            el.css('z-index', drop_down_el.css('z-index') - 1);
        });

        console.log('item_need_ckick', item_need_ckick);

        for (var __el in item_need_ckick) {
            __el.click();
        }
    };

    // Initialize options object
    function initOptions(options, numBars, max, numBigSpace, numSpaceBetweenBar) {
        let opt = {
            width: 120,
            height: 150,
            multiSelect: false,
            multiSelectCountLimit: 0,
            multiSelectStylePrintValue: {
                'type': 'pattern',
                value: 'Выбрано {num_select} {suffix_1}',
                suffix_by_num: [{
                    str_replace: '{suffix_1}',
                    values_3: ['полугодие', 'полугодия', 'полугодий']
                }]
            },
            urlImgDownArrow: 'data:image/svg+xml,%3Csvg width=\'14\' height=\'8\' viewBox=\'0 0 14 8\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M13.6533 0.317611C14.1156 0.767329 14.1156 1.51839 13.6533 1.9681L7.77916 7.68239C7.34383 8.10587 6.65618 8.10587 6.22086 7.68239L0.346742 1.9681L0.779755 1.47957L0.346741 1.9681C-0.115556 1.51838 -0.115556 0.767329 0.346741 0.31761L0.779755 0.806139L0.346742 0.317609C0.782068 -0.10587 1.46971 -0.10587 1.90504 0.317609L1.47583 0.801851L1.90504 0.31761L7.00001 5.27395L12.095 0.317611C12.5303 -0.10587 13.218 -0.10587 13.6533 0.317611Z\' fill=\'%23333333\'/%3E%3C/svg%3E%0A',
            urlImgUpArrow: 'data:image/svg+xml,%3Csvg width=\'14\' height=\'9\' viewBox=\'0 0 14 9\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill-rule=\'evenodd\' clip-rule=\'evenodd\' d=\'M13.6533 8.18239C14.1156 7.73267 14.1156 6.98161 13.6533 6.5319L7.77916 0.817611C7.34383 0.39413 6.65618 0.39413 6.22086 0.817612L0.346742 6.5319L0.779755 7.02043L0.346741 6.5319C-0.115556 6.98162 -0.115556 7.73267 0.346741 8.18239L0.779755 7.69386L0.346742 8.18239C0.782068 8.60587 1.46971 8.60587 1.90504 8.18239L1.47583 7.69815L1.90504 8.18239L7.00001 3.22605L12.095 8.18239C12.5303 8.60587 13.218 8.60587 13.6533 8.18239Z\' fill=\'%23333333\'/%3E%3C/svg%3E%0A',
            defaultPlaceholder: 'Выбрать',
            textPopupTop: 'Выбрать',
            zIndex: 9999,
            imgIconArrowWidth: 'auto',
            imgIconArrowHeight: 'auto',
            widthPopupList: 150,
            heightPopupList: 150,
            maxHeightPopupList: 100,
            initCheckedDefautValue: null
        };

        // Replace defaults with any selected options
        for (var prop in options) {
            if (opt.hasOwnProperty(prop)) {
                opt[prop] = options[prop];
            }
        }

        return opt;
    }

    // Function to check if the input is a DOM element
    function isDOM(input) {
        if (typeof HTMLElement === 'object') {
            // Check using W3 DOM2
            return input instanceof HTMLElement;
        } else {
            // Check using duck typing for older browsers
            return input && typeof input === 'object' && input !== null && input.nodeType === 1 && typeof input.nodeName === 'string';
        }
    }

    /**
     * @example g_get_correct_str_suffix(10, "день","дня", "дней")
     */
    function __get_correct_str_suffix(num, values3) {
        let val = num % 100;

        if (val > 10 && val < 20) {
            return values3[2];
        } else {
            val = num % 10;
            if (val === 1) {
                return values3[0];
            } else if (val > 1 && val < 5) {
                return values3[1];
            } else {
                return values3[2];
            }
        }
    }
    window.dropDownMenu = window.dropDownMenu || {};
});
