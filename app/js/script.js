/* eslint-disable new-cap */
$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};

// ЛК КПЭ
$(function () {
    $('.monthpicker-input').Monthpicker();
    $('.yearpicker input').yearpicker({
        year: null,
        startYear: 2010,
        endYear: 2080,
    });

    $('#daterange1').daterangepicker({
        'autoApply': true,
        autoUpdateInput: false,
        'locale': {
            'format': 'DD.MM.YYYY',
            'separator': ' - ',
            'applyLabel': 'ОК',
            'cancelLabel': 'Отмена',
            'fromLabel': 'От',
            'toLabel': 'До',
            'customRangeLabel': 'Custom',
            'weekLabel': 'Н',
            'daysOfWeek': [
                'Вс',
                'Пн',
                'Вт',
                'Ср',
                'Чт',
                'Пт',
                'Сб'
            ],
            'monthNames': [
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
            ],
            'firstDay': 1
        },
        'opens': 'center',
        'drops': 'auto'
    });
    $('#daterange2').daterangepicker({
        'autoApply': true,
        autoUpdateInput: false,
        cancelLabel: 'Выберите период',
        'locale': {
            'format': 'DD.MM.YYYY',
            'separator': ' - ',
            'applyLabel': 'ОК',
            'cancelLabel': 'Отмена',
            'fromLabel': 'От',
            'toLabel': 'До',
            'weekLabel': 'Н',
            'daysOfWeek': [
                'Вс',
                'Пн',
                'Вт',
                'Ср',
                'Чт',
                'Пт',
                'Сб'
            ],
            'monthNames': [
                'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
            ],
            'firstDay': 1
        },
        'opens': 'right',
        'drops': 'auto'
    });

    $('#daterange2').on('apply.daterangepicker', function (ev, picker) {
        if (picker.startDate.format('DD.MM.YYYY') === picker.endDate.format('DD.MM.YYYY')) {
            $(this).val(picker.startDate.format('DD.MM.YYYY'));
        } else {
            $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));

        }
    });

    var $iTooltip = $('.i-tooltip');
    var $iTooltipBG = $('.i-tooltip__overlay');
    var $iTooltipClose = $('.i-tooltip__close');


    $iTooltipBG.on('click', function () {
        $iTooltip.removeClass('open');
    });
    $iTooltipClose.on('click', function () {
        $iTooltip.removeClass('open');
    });

    $(window).on('resize', function () {
        if (matchMedia('(max-width: 767px)').matches) {
            $('#d_item1_btn').on('click', function () {
                $('#d_item1').addClass('open');
            });
            $('#d_item2_btn').on('click', function () {
                $('#d_item2').addClass('open');
            });
            $('#d_item3_btn').on('click', function () {
                $('#d_item3').addClass('open');
            });
            $('#counts1_btn').on('click', function () {
                $('#counts1').addClass('open');
            });
            $('#counts2_btn').on('click', function () {
                $('#counts2').addClass('open');
            });
            $('#counts3_btn').on('click', function () {
                $('#counts3').addClass('open');
            });
        }
    }).trigger('resize');

});

// MODALS

$(function () {
    var $modal = $('.modal');
    var $modalBG = $('.modal__bg');
    var $modalClose = $('.modal_close');

    $modalBG.on('click', function () {
        $modal.removeClass('open');
        $('.header-right').removeClass('open_popup');
        $('.header-right .item').removeClass('opened');
        $('.header-right .item-title').removeClass('active');
        $('.header-right .item-body').removeClass('opened');
    });
    $modalClose.on('click', function () {
        $modal.removeClass('open');

        $('.header-right').removeClass('open_popup');
        $('.header-right .item').removeClass('opened');
        $('.header-right .item-title').removeClass('active');
        $('.header-right .item-body').removeClass('opened');
    });

    $('.m_task_info_btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_task_info').addClass('open');
    });
    $('.m_project_info_btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_project_info').addClass('open');
    });
    $('.m_kpe_form_btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_kpe_form').addClass('open');
    });
    $('.m_kpe_form_btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_kpe_form').addClass('open');
    });
    $('.m_aggreements_btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_aggreements').addClass('open');
    });
    $('#m_ku_letter__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_ku_letter').addClass('open');
    });
    $('#m_prof_bl__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_prof_bl').addClass('open');
    });
    $('#m_prof_dr__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_prof_dr').addClass('open');
    });
    $('#m_prof_ngr__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_prof_ngr').addClass('open');
    });
    $('#m_zayavka_types__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_zayavka_types').addClass('open');
    });
    $('.m_zayavka_kanctovary__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_zayavka_kanctovary').addClass('open');
    });
    $('.m_zayavka_propusk__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_zayavka_propusk').addClass('open');
    });
    $('.m_zayavka_auto__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_zayavka_auto').addClass('open');
    });
    $('.m_zayavka_complete__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_zayavka_complete').addClass('open');
    });
    $('#m_svod_complete__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_svod_complete').addClass('open');
    });
    $('#m_zayavka_agreed__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_zayavka_agreed').addClass('open');
    });
    $('#m_zayavka_canceled__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_zayavka_canceled').addClass('open');
    });
    $('#m_zayavka_canceled_avto__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_zayavka_canceled_avto').addClass('open');
    });
    $('#m_spravka_sended__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_spravka_sended').addClass('open');
    });
    $('#m_spravka_error__btn').on('click', function () {
        $modal.removeClass('open');
        $('#m_spravka_error').addClass('open');
    });
    $('#form-wrapper1_1_btn').on('click', function () {
        $modal.removeClass('open');
        $('#form-wrapper1_1').addClass('open');
        $('.header-right').removeClass('open_popup');
        $('.header-right .item').removeClass('opened');
        $('.header-right .item-title').removeClass('active');
        $('.header-right .item-body').removeClass('opened');
    });
    $('#form-wrapper1_2_btn').on('click', function () {
        $modal.removeClass('open');
        $('#form-wrapper1_2').addClass('open');
        $('.header-right').removeClass('open_popup');
        $('.header-right .item').removeClass('opened');
        $('.header-right .item-title').removeClass('active');
        $('.header-right .item-body').removeClass('opened');
    });
    $('.btn_cards_open').on('click', function () {
        $(this).toggleClass('open');
    });

    $(window).on('resize', function () {
        if (matchMedia('(min-width: 768px)').matches) {
            $('.info-body__gallery .items').addClass('owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                items: 3,
                nav: true,
                autoplay: false,
            });
        }
        if (matchMedia('(max-width: 767px)').matches) {
            $('.info-body__gallery .items').removeClass('owl-carousel').owlCarousel('destroy');
        }
        if (matchMedia('(max-width: 1024px)').matches) {
            var titleMobTheme = $('.select-theme').data('mob');
            $('.select-theme .jq-selectbox__select-text').text(titleMobTheme);
            var titleMobCennost = $('.select_cennost').data('mob');
            $('.select_cennost .jq-selectbox__select-text').text(titleMobCennost);
        }
    }).trigger('resize');

});

// ММТП

$(function () {
    $('.mmtp select').styler();

    var ddBtn = $('.publications .jq-selectbox__dropdown li');
    var sliderItem = $('.mmtp .publications .items__wrap');
    sliderItem.removeClass('show').css({
        display: 'none'
    }).eq(0).fadeIn(500).addClass('show');

    ddBtn.on('click', function () {
        if (ddBtn.eq(0).hasClass('sel')) {
            sliderItem.removeClass('show').css({
                display: 'none'
            }).eq(0).fadeIn(500).addClass('show');
        } else if (ddBtn.eq(1).hasClass('sel')) {
            sliderItem.removeClass('show').css({
                display: 'none'
            }).eq(1).fadeIn(500).addClass('show');
        }
    });

    var jPost = $('.jpost');

    $(jPost).each(function () {
        if ($(this).parent('.label')) {
            if ($(this).text().length > 60) {
                var content = $(this).text();
                var short = $(this).text().substr(0, 60);
                $(this).parent().addClass('jpost_wrap');
                $(this).html(short).append('<div class="jpost_popup"></div>');
                $(this).find('.jpost_popup').html(content);
            }
        }
        if ($(this).parent('.safety_docs_tabs_body_doc_item')) {
            var content1 = $(this).text();
            var short1 = $(this).text().substr(0, 60);
            $(this).parent().addClass('jpost_wrap');
            $(this).html(short1).append('<div class="jpost_popup"></div><i class="dots"></i>');
            $(this).find('.jpost_popup').html(content1);
        } else {
            if ($(this).text().length > 48) {
                var content2 = $(this).text();
                var short2 = $(this).text().substr(0, 45);
                $(this).parent().addClass('jpost_wrap');
                $(this).html(short).append('<div class="jpost_popup"></div>');
                $(this).find('.jpost_popup').html(content2);
            }
        }
    });
    var jPopup = $('.jpopup');

    $(jPopup).each(function () {
        if ($(this).parent('.links') && $(this).text().length > 38) {
            var content = $(this).text();
            var short = $(this).text().substr(0, 38);
            $(this).parent().addClass('jpopup_wrap');
            $(this).html(short).append('<div class="jpopup_popup"></div>');
            $(this).find('.jpopup_popup').html(content);
            $(this).on('click', function () {
                $(this).addClass('open');
            });
        }
    });
    $('.jpopup_close').on('click', function () {
        $(this).parent().parent().toggleClass('open');
    });

    $(document).click(function (event) {
        if ($(event.target).closest('.jpopup').length) {
            return;
        }
        $('.jpopup').removeClass('open');
    });

    var jModal = $('.jmodal');

    $(jModal).each(function (i) {
        if ($(this).text().length > 55) {
            var content = $(this).closest('.item').html();
            var short = $(this).text().substr(0, 55);
            $(this).parent().addClass('jmodal_wrap');
            $(this).addClass('jmodal' + i + '_btn').html(short);
            $('.notification-block-body').append('<div class="jmodal_popup jmodal' + i + '_popup"></div>');
            $('.jmodal' + i + '_popup').append('<div class="jmodal_overlay"></div><div class="wrap"><button class="jmodal_close"></button></div>');
            $('.jmodal' + i + '_popup .wrap').append(content);
            $('.jmodal' + i + '_btn').on('click', function () {
                $('.jmodal' + i + '_popup').addClass('open');
            });
        }
        if ($(this).parent('.links')) {
            $('.jmodal_popup').addClass('congratulation');
        }
    });
    $('.jmodal_close').on('click', function () {
        $('.jmodal_popup').removeClass('open');
    });
    $('.jmodal_overlay').on('click', function () {
        $('.jmodal_popup').removeClass('open');
    });

});

// Доска объявлений

$(function () {
    $(document).on('click', function (e) {
        if ($(e.target).closest('.form-news').length) {
            $('.form-news').parent().addClass('open_search');
            return;
        }
        $('.form-news').parent().removeClass('open_search');
    });

    $('.select-custom').styler();
});

// Доска объявлений. Детальная

$(function () {
    var ph = $('.gallery_img');
    var phCount = ph.length;
    ph.each(function () {
        if ($(this).index() >= 3) {
            $(this).addClass('hide');
        }
    });
    $('.img_link .count').html(phCount);
    $('.img_link').on('click', function (e) {
        $('.gallery_img:first-child').click();
        e.preventDefault();
    });

    $(window).on('resize', function () {
        if (matchMedia('(max-width: 700px)').matches) {
            $('.img_link').addClass('hide').remove();
            $('.innpage_gallery').addClass('owl-carousel').owlCarousel({
                loop: false,
                margin: 0,
                items: 1,
                dots: true,
                nav: true,
                autoplay: false,
            });

        }
    }).trigger('resize');
});

// Комплаенс-команда

// Вопрос-ответ

$(function () {
    $('.faq select').styler();
    $('.filter_btn').on('click', function () {
        $(this).toggleClass('open');
    });

    var faqItem = $('.faq-item');

    $(faqItem).each(function () {
        var HeaderHeight = $(this).find('.faq-item__header').height();
        $(this).height(HeaderHeight);
    });


    $('.btn_pluse').on('click', function () {
        var iParent = $(this).closest('.faq-item');
        var fbHeight = iParent.find('.faq-item__body').height();
        var fhHeight = iParent.find('.faq-item__header').height();
        var fHeight = fhHeight + fbHeight;
        if (iParent.hasClass('open')) {
            iParent.height(fhHeight).removeClass('open');
        } else {
            $(faqItem).each(function () {
                var HeaderHeight = $(this).find('.faq-item__header').height();
                $(this).height(HeaderHeight).removeClass('open');
            });
            iParent.css('height', fHeight).addClass('open');
        }
    });
});


// Отчеты ПУ

$(function () {

    var iTabBtn = $('.itabs_header .btn_tab');
    var iTab = $('.itabs_content');

    iTabBtn.eq(0).addClass('active');
    iTab.eq(0).addClass('active');

    if ($('.site-wrapper').hasClass('search')) { // Для страницы поиска
        iTabBtn.on('click', function () {
            var activeNum = ($(this).index());
            if ($(this).hasClass('active')) {
                iTabBtn.removeClass('active');
                iTab.removeClass('active');
                iTabBtn.eq(0).addClass('active');
                iTab.eq(0).addClass('active');
            } else {
                iTabBtn.removeClass('active');
                $(this).addClass('active');
                iTab.removeClass('active');
                iTab.eq(activeNum).addClass('active');
            }
        });
        var sResBlockTitle = iTab.eq(0).find($('.search_block__title'));
        sResBlockTitle.on('click', function (e) {
            e.preventDefault();
            var activeBlock = ($(this).parent().index());
            iTabBtn.eq(activeBlock).trigger('click');
        });
    } else {
        iTabBtn.on('click', function () {
            var activeNum = ($(this).index());

            iTabBtn.removeClass('active');
            $(this).addClass('active');

            iTab.removeClass('active');
            iTab.eq(activeNum).addClass('active');
        });
    }
    if (iTab.find('.card').length > 0) {
        iTab.each(function (i) {
            var count = $(this).find('.card').length;
            iTabBtn.eq(i).find('span').html('(' + count + ')');
        });
    }
    if ($('.itabs_wrap.carousel').length > 0) {
        var bHeight = $('.itabs_content .card').outerHeight();
        $('.itabs_wrap.carousel').css('height', bHeight);
    }

    $('.ur_step_blocks').find(iTabBtn).removeClass('active');
    $('.ur_step_blocks').find(iTabBtn).on('click', function (e) {
        e.preventDefault();
        $('.blocks-wrapper').css('zindex', '30000');
        $('html').css({
            'overflow': 'hidden',
            'padding-right': '16px'
        });
        $('.blocks-wrapper').css('zindex', '30000');
        $('.step-two_m').addClass('open');
    });

    var lineTabBtn = $('.linetabs_header .btn_tab');
    var lineTab = $('.linetabs_content');

    lineTabBtn.eq(0).addClass('active');
    lineTab.eq(0).show().addClass('active');

    lineTabBtn.on('click', function () {
        var activeNum = ($(this).index());

        lineTabBtn.removeClass('active');
        $(this).addClass('active');

        lineTab.hide().removeClass('active');
        lineTab.eq(activeNum).fadeIn().addClass('active');
    });

    $('.m_report_btn').on('click', function () {
        $('#m_report').addClass('open');
    });

    $(window).on('resize', function () {
        if (matchMedia('(min-width: 1025px)').matches) {
            $('.preports-cards').each(function (i) {
                $(this).addClass('owl-carousel owl-loaded');
                $(this).owlCarousel({
                    loop: false,
                    margin: 0,
                    responsive: {
                        1025: {
                            items: 3,
                            center: false,
                            nav: true,
                        },
                        1431: {
                            items: 4,
                            center: false,
                            nav: true,
                        },
                    }
                });
            });

        } else {
            $('.preports-cards').removeClass('owl-carousel');
            $('.preports-cards').owlCarousel('destroy');
        }
    }).trigger('resize');
});


// ДС Обхода

$(function () {

    var innTabBtn = $('.inntabs_header .btn_tab');
    var innTab = $('.inntabs_content');

    innTabBtn.eq(0).addClass('active');
    innTab.eq(0).show().addClass('active');

    innTabBtn.on('click', function () {
        var activeNum = ($(this).index());

        innTabBtn.removeClass('active');
        $(this).addClass('active');

        innTab.hide().removeClass('active');
        innTab.eq(activeNum).fadeIn().addClass('active');
    });

});

// Соц. политика
$(function () {
    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isSafari || iOS) {
        $('.feb_title_years_reports_carousel_item_img img').css('transform', 'none');
    }


    $(window).on('resize', function () {
        if (matchMedia('(min-width: 767px)').matches) {
            $('.feb_title_years_reports_carousel').addClass('owl-carousel').owlCarousel({
                margin: 30,
                nav: true,
                // autoWidth: true,
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

        } else {
            $('.feb_title_years_reports_carousel').removeClass('owl-carousel').owlCarousel('destroy');
        }
    }).trigger('resize');

    $('.soc-year-reports select').styler();

    var ddBtn = $('.soc-year-reports .jq-selectbox__dropdown li');
    var sliderItem = $('.soc-year-reports .items__wrap');
    sliderItem.removeClass('show').css({
        display: 'none'
    }).eq(0).addClass('show').fadeIn(500);

    ddBtn.on('click', function () {

        var activeNum = ($(this).index());
        sliderItem.removeClass('show').css({
            display: 'none'
        }).eq(activeNum).addClass('show').fadeIn(500);
    });

    $('.btn-delete').on('click', function () {
        $(this).parent().hide();
        return false;
    });
});


// Заявки. Канцтовары
$(function () {

    $('.tabSvod a').on('click', function () {
        $('.top_link').addClass('transparent');
        $('.top_link .btn').attr('disabled', 'true');
    });
    $('.tabMainZ a').on('click', function () {
        $('.top_link').removeClass('transparent');
        $('.top_link .btn').attr('disabled', 'false');
    });
});

// Заявки. Административные. Создание
$(function () {
    $('#autotransport_radio_1').on('click', function () {
        $('.autotransport_field').slideUp();
    });
    $('#autotransport_radio_2').on('click', function () {
        $('.autotransport_field').slideDown();
    });
});

// Справки и доки.
$(function () {
    $('#access_code').keyup(function () {

        var empty = false;
        $('#access_code').each(function () {
            if ($(this).val() === '') {
                empty = true;
            }
        });

        if (empty) {
            $('#spravki_auth_entry').attr('disabled', 'disabled').addClass('disabled');
        } else {
            $('#spravki_auth_entry').removeAttr('disabled').removeClass('disabled');
        }
    });

    $('#form-auth-complete__btn').on('click', function () {
        $('#form-auth').hide();
        $('#form-auth-complete').show();
    });
    $('.accordion__header').on('click', function () {
        $(this).toggleClass('open').parent().find('.accordion__body').slideToggle();

    });

    var $maskPhone = $('.mask_phone');
    $maskPhone.each(function (i) {
        $.mask.definitions['9'] = false;
        $.mask.definitions['0'] = '[0-9]';
        $(this).on('click', function () {
            $(this).setCursorPosition(4);
        }).mask('+7(900)-000-00-00');
    });
});
$(function () {
    $('.slick_position').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true
    });
    $('.slick_people_filter_block').slick({
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slick_opros').slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


