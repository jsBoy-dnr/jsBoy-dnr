var IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (IS_IOS) {
    document.documentElement.classList.add('ios');
}

$(function () {
    $('.rblock-top .buttons a').on('click', function (e) {
        e.preventDefault();
        var thisId = $(this).data('blid');

        $('.rblock-top .buttons a').removeClass('active');
        $(this).addClass('active');

        $('.rblock .rblock-middle').removeClass('active');
        $('.rblock .rblock-middle[data-blid=' + thisId + ']').addClass('active');

    });

    $(document).on('click', '.header-right .item .item-body .item.mobile > div.top span', function () {
        $(this).parents('.header-right .item .item-body').removeClass('opened');
        $('.header-right .last-but.active').click();
    });
    var MenuTop = $('.menu-mobile-wr'),
        $body = $(document.body),
        $html = $(document.documentElement);

    $('.menu-burger').on('click', function () {
        setTimeout(function () {
            MenuTop.addClass('opened');
            $html.addClass('overflowHidden');
        });
    });

    MenuTop.find('.close-menu').on('click', function () {
        MenuTop.removeClass('opened');
        $html.removeClass('overflowHidden');
    });

    $body.on('click', function (event) {
        if ($(event.target).closest(MenuTop.find('.mobile-menu-in').add('.menu-burger')).length) {
            return;
        }
        if (MenuTop.hasClass('opened')) {
            MenuTop.removeClass('opened');
            $html.removeClass('overflowHidden');
        }
    });

    $(document).keydown(function (event) {
        if (event.which === 27) {
            if (MenuTop.hasClass('opened')) {
                MenuTop.removeClass('opened');
                $html.removeClass('overflowHidden');
            }
            $('.notification-block-title').removeClass('active');
            $('.notification-block-body').removeClass('opened');
            $('.notification-block-body .blocks-body a').removeClass('opened');
            $('.account-block-title').removeClass('active');
            $('.account-block-body').removeClass('opened');
            $('.header-right .item .item-title').removeClass('active');
            $('.header-right .item .item-body').removeClass('opened');
            $('html').removeClass('owhidden');
            $('.header-right').removeClass('opened');
            $('.header-right .last-but').removeClass('active');
            $('.site-header').removeClass('opened');
        }
    });

    $('.notification-block-title').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.notification-block').find('.notification-block-body').toggleClass('opened');
    });

    $('.account-block-title').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.account-block').find('.account-block-body').toggleClass('opened');
    });

    $('.header-right .last-but').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.header-right').toggleClass('opened');
        $('.site-header').toggleClass('opened');
    });

    $(document).click(function (event) {
        if ($(event.target).closest('.header-right').length) {
            return;
        }
        $('.header-right').removeClass('opened');
        $('.header-right .last-but').removeClass('active');
        $('.site-header').removeClass('opened');
    });

    $('.header-right .item .item-title').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.item').find('.item-body').toggleClass('opened');
    });

    $(document).click(function (event) {
        if ($(event.target).closest('.account-block, .notification-block').length) {
            return;
        }
        $('html').removeClass('owhidden');
    });

    $(document).click(function (event) {
        if ($(event.target).closest('.notification-block').length) {
            return;
        }
        $('.notification-block-title').removeClass('active');
        $('.notification-block-body').removeClass('opened');
    });
    $(document).click(function (event) {
        if ($(event.target).closest('.account-block').length) {
            return;
        }
        $('.account-block-title').removeClass('active');
        $('.account-block-body').removeClass('opened');
    });

    $(document).click(function (event) {
        if ($(event.target).closest('.header-right .button1, .form-top-popup').length) {
            return;
        }
        $('.header-right .button1 .item-title').removeClass('active');
        $('.header-right .button1 .item-body').removeClass('opened');
    });
    $(document).click(function (event) {
        if ($(event.target).closest('.header-right .button2, .form-top-popup').length) {
            return;
        }
        $('.header-right .button2 .item-title').removeClass('active');
        $('.header-right .button2 .item-body').removeClass('opened');
    });
    $(document).click(function (event) {
        if ($(event.target).closest('.header-right .button3, .form-top-popup').length) {
            return;
        }
        $('.header-right .button3 .item-title').removeClass('active');
        $('.header-right .button3 .item-body').removeClass('opened');
    });

    $('.cont-block .title .info, .cont-block-in .title .info').hover(function () {
        $(this).find('.text').show();
    },
        function () {
            $(this).find('.text').hide();
        }
    );
    $('.news-block a.favorite, a.like').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('.lk-kpe select').styler();
    $('.head-form .fbody select').styler();
    $('.sort_bl_body select').styler();
    $('.sort-bl .search select').styler();
    $('.result-block .sort_bl select').styler();
    $('.sort-alphavite-mobile select').styler();
    $('.appeals_block .top_link select').styler();

    if (matchMedia('(max-width: 640px)').matches) {
        $('.blocks-wrapper.page-phonebook .sort-bl .jq-selectbox .jq-selectbox__select .jq-selectbox__select-text').text('Везде');
        $('.blocks-wrapper.page-phonebook .sort-bl form input').attr('placeholder', 'Поиск');
        $('.filter-phonebook .fil-title').on('click', function () {
            $('.sort-alphavite-mobile').slideToggle();
        });
    }

    $('.sort-alphavite a').on('click', function (e) {
        e.preventDefault();
        $('.sort-alphavite a').removeClass('active');
        $(this).addClass('active');
    });

    if (matchMedia('(max-width: 768px)').matches) {
        $('.department .image').on('click', function () {
            $(this).closest('.department').find('.body').addClass('fixed');
        });
        $('.department .close').on('click', function () {
            $(this).closest('.department').find('.body').removeClass('fixed');
        });

        $('.location .image').on('click', function () {
            $(this).closest('.location').find('.body').addClass('fixed');
        });
        $('.location .close').on('click', function () {
            $(this).closest('.location').find('.body').removeClass('fixed');
        });
        $('.blocks-wrapper-org .choose-button .info').on('click', function () {
            $('.blocks-wrapper-org .choose-button .info .text').show();
        });
    }

    if (matchMedia('(max-width: 641px)').matches) {

        $('.hide_more_but').on('click', function () {

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).text('Раскрыть все информацию');
                $(this).closest('.item').removeClass('actitem');
            } else {
                $(this).addClass('active');
                $(this).text('Скрыть всю информацию');
                $(this).closest('.item').addClass('actitem');
            }
        });

    }

    $('.form_button').click(function () {
        $('.form-wrapper1').addClass('opened');
        return false;
    });
    $('.form_button2').click(function () {
        $('.form-wrapper2').addClass('opened');
        return false;
    });
    $('.form-wrapper .close-icon').click(function () {
        $('.form-wrapper').removeClass('opened');
        return false;
    });
    $(document).click(function (event) {
        if ($(event.target).closest('.form-top-popup').length) {
            return;
        }
        $('.form-wrapper').removeClass('opened');
        event.stopPropagation();
    });
    $(document).keydown(function (event) {
        if (event.which === 27) {
            $('.form-wrapper').removeClass('opened');
        }
    });

    $('.form-top-popup form .form-text select').styler();
    $('.form-top-popup .agree a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    var owl = $('.header_slider_main');

    owl.addClass('owl-carousel');

    owl.owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        autoplay: false,
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false
    });

    $(window).on('load', function () {
        setTimeout(function () {
            $('.header_slider .owl-dots .owl-dot').each(function (i, item) {
                $(this).addClass('dot-icon-' + i);
            });
        }, 200);
    });

    $(window).on('resize', function () {
        if (matchMedia('(min-width: 980px)').matches) {

            var owl1 = $('.header_slider_proj1');

            owl1.addClass('owl-carousel');

            owl1.owlCarousel({
                loop: false,
                margin: 50,
                items: 2,
                nav: false,
                dots: true,
                autoplay: false,
                animateOut: 'fadeOut',
                autoHeight: true
            });
        }
        if (matchMedia('(max-width: 768px)').matches) {

            $('.header_slider_proj1 li.first_hide').remove();

            var owl2 = $('.header_slider_proj1');

            owl2.addClass('owl-carousel');

            owl2.owlCarousel({
                loop: false,
                margin: 50,
                items: 1,
                nav: false,
                dots: true,
                autoplay: false,
                animateOut: 'fadeOut',
                autoHeight: true
            });

        }
    }).trigger('resize');

    $(window).on('resize', function () {
        if (matchMedia('(max-width: 768px)').matches) {

            var owl3 = $('.header_slider_proj2');

            owl3.addClass('owl-carousel');

            owl3.owlCarousel({
                loop: false,
                margin: 50,
                items: 1,
                nav: false,
                dots: true,
                autoplay: false,
                animateOut: 'fadeOut',
                autoHeight: true
            });

        }
    }).trigger('resize');

    $('.congratulation').addClass('owl-carousel');

    $('.congratulation').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        autoplay: false
    });

    $('.hnblock-in-mobile').addClass('owl-carousel');

    $('.hnblock-in-mobile').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        autoplay: false,
        autoHeight: true
    });

    $(window).on('resize', function () {

        if (matchMedia('(max-width: 701px)').matches) {
            $('.notification-block-title, .account-block-title').on('click', function () {
                $('html').toggleClass('owhidden');
            });
            $('.project_direct_page_sec .show_right_side').on('click', function (e) {
                e.preventDefault();
                $('.project_direct_page_sec .site-header .block_in_header .sides-wrap .right-side').addClass('opened');
            });
            $('.project_direct_page_sec .site-header .block_in_header .sides-wrap .right-side .close').on('click', function () {
                $('.project_direct_page_sec .site-header .block_in_header .sides-wrap .right-side').removeClass('opened');
            });
        }

        if (matchMedia('(max-width: 1024px)').matches) {
            var nblHeight = $('.news-block.news-block-new .big_news').height();
            $('.news-block.news-block-new .right-side .popular-news').css('min-height', nblHeight);
        }

        if (matchMedia('(min-width: 1025px)').matches) {

            $('.quiz-block .items-wrap, .event-block .items-wrap, .news_slider .items-wrap, .curator-desc .items-wrap, .important-info__cards').addClass('owl-carousel');

            $('.curator-desc .items-wrap').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                items: 4,
                dots: false,
                autoplay: false
            });
            $('.news_slider .items-wrap').owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                autoplay: false,
                responsiveClass: true,
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


            $('.quiz-block .items-wrap, .event-block .items-wrap').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 3,
                dots: false,
                autoplay: false,
                center: true
            });

            $('.important-info__cards').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                dots: false,
                autoplay: false,
                responsive: {
                    750: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1250: {
                        items: 4
                    }
                }
            });

            $('.slider_top_sides ul').addClass('owl-carousel');

            $('.slider_top_sides ul').owlCarousel({
                loop: false,
                margin: 30,
                items: 4,
                nav: true,
                dots: false,
                autoplay: false,
                animateOut: 'fadeOut',
                autoHeight: true
            });

        } else {
            $('.staff-block .items-wrap, .reports .items-wrap, .quiz-block .items-wrap, .event-block .items-wrap, .important-info__cards').removeClass('owl-carousel');
            $('.quiz-block .items-wrap, .staff-block .items-wrap, .event-block .items-wrap, .important-info__cards').owlCarousel('destroy');

        }
    }).trigger('resize');

    $(window).on('load', function () {
        $(window).on('resize', function () {
            setTimeout(function () {
                $('#site_loader').hide();
            }, 200);
        }).trigger('resize');
    });

    $('.popup-block-active .image-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.popup-block-active .image-gallery'
    });
    $('.popup-block-active .image-gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.popup-block-active .image-slick',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });
    const blockTabs = $('.my_tasks_block .block-data-tab');
    blockTabs.responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: false,
        scrollToAccordion: false
    });
    $('.services_block_tab, .curator-tabs-wr, .appeals_block_tab, .tabs_block_ul_wrap').responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: false,
        scrollToAccordion: false
    });
    $('.sort_bl_title').on('click', function () {

        $(this).closest('.sort_bl').toggleClass('opened');

        var blHeight = $('.blocks-wrapper.blocks-news .sort_bl .sort_bl_body').height();

        if ($(this).closest('.sort_bl').hasClass('opened')) {
            $('.sort-news').css('margin-bottom', blHeight + 50);
        } else {
            $('.sort-news').css('margin-bottom', '50');
        }

    });
    $('.items-wrap p').on('mousedown touchstart', function () {
        $('.items-wrap p').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });
    $('.step_one_blocks .item').on('click', function (e) {
        e.preventDefault();
        $('.step_one_blocks .item').removeClass('active');
        $(this).addClass('active');
        $('.step_blocks .step_two').show();
    });
    $('.step_two_blocks li a').on('click', function (e) {
        e.preventDefault();
        $('.step_two_blocks li a').removeClass('active');
        $(this).addClass('active');
        $('.step_blocks .step_three').show();
    });
    $('.step_three_blocks li a, .step_blocks.division .step_one_blocks a').on('click', function (e) {
        e.preventDefault();
        $('.step_three_blocks li a').removeClass('active');
        $(this).addClass('active');
        $('.step_blocks .step_four').show();
    });
    $('#birthday_popup').on('keyup', function (e) {
        $(this).closest('.birthday_popup_in').find('button').addClass('act');
    });
    $('.happy_b_day .item .link a, .happy_b_day .items-wrap .item .image .notifications').on('click', function () {
        var thName = $(this).closest('.item').find('.name').text();
        $('.birthday_popup_title span').text(thName);
        $('.birthday_popup').addClass('opened');
        return false;
    });
    $('.staff-block .items-wrap .item .image .label').on('click', function () {
        var thName = $(this).closest('.item').find('.title').text();
        $('.birthday_popup_title span').text(thName);
        $('.birthday_popup').addClass('opened');
        return false;
    });
    $('.birthday_popup .birthday_popup_close').click(function () {
        $('.birthday_popup').removeClass('opened');
        return false;
    });
    $(document).click(function (event) {
        if ($(event.target).closest('.birthday_popup_in').length) {
            return;
        }
        $('.birthday_popup').removeClass('opened');
        event.stopPropagation();
    });
    $(document).keydown(function (event) {
        if (event.which === 27) {
            $('.birthday_popup').removeClass('opened');
        }
    });
    $('.happy_b_day .notifications').on('click', function (e) {
        e.preventDefault();
    });

    $('.overlook-news .item .bottom a.arxiv').on('click', function (e) {
        e.preventDefault();
    });

    $(this).on('click', 'li.step_popup a', function () {
        $(this).siblings('div').show();
        return false;
    }).on('click', 'ul.menu-top-divizion li.s3-menu-allin-has a', function () {
        $(this).siblings('div').toggleClass('opened');
        $('.header-bottom').css('zIndex', '10');
    }).on('click', '.menu-top-divizion div.mobile.opened div.top span', function () {
        $(this).parents('.opened:first').removeClass('opened');
        $('.header-bottom').css('zIndex', '2');
    });
    $('.hasstr').on('click', function (e) {
        e.preventDefault();
        $('.arrowLeft').css('transition', '.3s');
        $('.arrow').css('opacity', '1');
        $('.blocks-wrapper-org').css('z-index', '20');
        $('.site-header').css('z-index', '20');
        $('.open_p + .b').css('opacity', '1');
        $('.hasstr.open_p').removeClass('open_p');
        $(this).addClass('open_p');

        const divA = document.querySelector('.open_p');
        const divB = document.querySelector('.open_p + .b');
        const arrowLeft = document.querySelector('.arrowLeft');
        const ContBlocks = document.querySelector('.step_four_blocks');

        $('.open_p + .b').css({
            'top': (window.pageYOffset - ContBlocks.offsetTop)
        });
        const drawConnector = function () {
            if (divB.offsetTop >= 1) {
                $('.open_p + .b').css({
                    'top': (window.pageYOffset - ContBlocks.offsetTop)
                });
                const posnALeft = {
                    x: divA.offsetLeft + divA.offsetWidth + 10,
                    y: divA.offsetTop + divA.offsetHeight / 2 + 5
                };
                const posnBLeft = {
                    x: divB.offsetLeft - 10,
                    y: window.pageYOffset - ContBlocks.offsetTop + divB.offsetHeight / 2 - 20
                };
                const dStrLeft =
                    'M' +
                    posnALeft.x +
                    ',' +
                    posnALeft.y +
                    ' ' +
                    'C' +
                    (posnALeft.x + 100) +
                    ',' +
                    posnALeft.y +
                    ' ' +
                    (posnBLeft.x - 100) +
                    ',' +
                    posnBLeft.y +
                    ' ' +
                    posnBLeft.x +
                    ',' +
                    posnBLeft.y;

                arrowLeft.setAttribute('d', dStrLeft);
            } else {

                const posnALeft = {
                    x: divA.offsetLeft + divA.offsetWidth + 10,
                    y: divA.offsetTop + divA.offsetHeight / 2 + 5
                };
                const posnBLeft = {
                    x: divB.offsetLeft - 10,
                    y: divB.offsetHeight / 2 - 20
                };
                const dStrLeft =
                    'M' +
                    posnALeft.x +
                    ',' +
                    posnALeft.y +
                    ' ' +
                    'C' +
                    (posnALeft.x + 100) +
                    ',' +
                    posnALeft.y +
                    ' ' +
                    (posnBLeft.x - 100) +
                    ',' +
                    posnBLeft.y +
                    ' ' +
                    posnBLeft.x +
                    ',' +
                    posnBLeft.y;

                arrowLeft.setAttribute('d', dStrLeft);
                $('.open_p + .b').css({
                    'top': '0'
                });
            }

        };

        drawConnector();

        window.addEventListener('scroll', function () {
            $('.arrowLeft').css('transition', 'unset');
            $('.open_p + .b').css({
                'top': (window.pageYOffset - ContBlocks.offsetTop)
            });

            drawConnector();
            var currentScroll = window.pageYOffset;
            var windowHeight = window.innerHeight;

            if (
                currentScroll <= divA.offsetTop + divA.offsetHeight * 3 - windowHeight + ContBlocks.offsetTop ||
                currentScroll >= divA.offsetTop + divA.offsetHeight * 3 + ContBlocks.offsetTop
            ) {
                $('.arrow').css('opacity', '0');
                $('.open_p + .b').css('opacity', '0');
            } else {
                $('.arrow').css('opacity', '1');
                $('.open_p + .b').css('opacity', '1');
                return false;
            }
        });
        return false;
    });

    $('.step-two_m__wrap .hasstr').on('click', function (e) {
        e.preventDefault();
        $('.arrowLeft').css('transition', '.3s');
        $('.arrow').css('opacity', '1');
        $('.blocks-wrapper-org').css('z-index', '20');
        $('.site-header').css('z-index', '20');
        $('.open_p + .b').css('opacity', '1');
        $('.hasstr.open_p').removeClass('open_p');
        $(this).addClass('open_p');
        $('.step-two_m__wrap').css('zIndex', '32');

        const divA = document.querySelector('.open_p');
        const divB = document.querySelector('.open_p + .b');
        const arrowLeft = document.querySelector('.arrowLeft');
        const ContBlocks = document.querySelector('.step_four_blocks');
        const ContTWO = document.querySelector('.step-two_m__wrap');

        $('.open_p + .b').css({
            'top': (ContTWO.scrollTop - ContBlocks.offsetTop + (window.innerHeight - divB.offsetHeight) / 2)
        });

        const drawConnector = function () {
            if (divB.offsetTop >= 1) {
                $('.open_p + .b').css({
                    'top': (ContTWO.scrollTop - ContBlocks.offsetTop + (window.innerHeight - divB.offsetHeight) / 2)
                });
                const posnALeft = {
                    x: divA.offsetLeft + divA.offsetWidth + 10,
                    y: divA.offsetTop + divA.offsetHeight / 2 + 5
                };
                const posnBLeft = {
                    x: divB.offsetLeft - 10,
                    y: ContTWO.scrollTop - ContBlocks.offsetTop + window.innerHeight / 2
                };
                const dStrLeft =
                    'M' +
                    posnALeft.x +
                    ',' +
                    posnALeft.y +
                    ' ' +
                    'C' +
                    (posnALeft.x + 100) +
                    ',' +
                    posnALeft.y +
                    ' ' +
                    (posnBLeft.x - 100) +
                    ',' +
                    posnBLeft.y +
                    ' ' +
                    posnBLeft.x +
                    ',' +
                    posnBLeft.y;

                arrowLeft.setAttribute('d', dStrLeft);
            } else {

                const posnALeft = {
                    x: divA.offsetLeft + divA.offsetWidth + 10,
                    y: divA.offsetTop + divA.offsetHeight / 2 + 5
                };
                const posnBLeft = {
                    x: divB.offsetLeft - 10,
                    y: divB.offsetHeight / 2 - 20
                };
                const dStrLeft =
                    'M' +
                    posnALeft.x +
                    ',' +
                    posnALeft.y +
                    ' ' +
                    'C' +
                    (posnALeft.x + 100) +
                    ',' +
                    posnALeft.y +
                    ' ' +
                    (posnBLeft.x - 100) +
                    ',' +
                    posnBLeft.y +
                    ' ' +
                    posnBLeft.x +
                    ',' +
                    posnBLeft.y;

                arrowLeft.setAttribute('d', dStrLeft);
                $('.open_p + .b').css({
                    'top': '0'
                });
                return false;
            }

        };

        drawConnector();

        ContTWO.addEventListener('scroll', function () {

            $('.arrowLeft').css('transition', 'unset');
            $('.open_p + .b').css({
                'top': (ContTWO.scrollTop - ContBlocks.offsetTop + (window.innerHeight - divB.offsetHeight) / 2)
            });

            drawConnector();
            var currentScroll = ContTWO.scrollTop;
            var windowHeight = window.innerHeight;

            if (
                currentScroll <= divA.offsetTop + divA.offsetHeight / 2 - windowHeight + ContBlocks.offsetTop ||
                currentScroll >= divA.offsetTop + divA.offsetHeight / 2 + ContBlocks.offsetTop
            ) {
                $('.arrow').css('opacity', '0');
                $('.open_p + .b').css('opacity', '0');
            } else {
                $('.arrow').css('opacity', '1');
                $('.open_p + .b').css('opacity', '1');
                return false;
            }
        });
        return false;
    });
    $('.btn-close_wpopup').on('click', function (e) {
        $('.hasstr.open_p').removeClass('open_p');
        $('.step-two_m__wrap').css('zIndex', '30');
        $('.site-header').css('z-index', 'auto');
        $('.blocks-wrapper-org').css('z-index', 'auto');
    });

    $('.profile-page-buttons .item .count').on('click', function () {

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).closest('.item').find('.block-body').hide();
            $(this).closest('.item').removeClass('active');
        } else {
            $('.profile-page-buttons .item .count').removeClass('active');
            $('.profile-page-buttons .item').removeClass('active');
            $('.profile-page-buttons .item .block-body').hide();
            $(this).addClass('active');
            $(this).closest('.item').find('.block-body').show();
            $(this).closest('.item').addClass('active');
        }
    });
    $('.items_block .items_main .items .row a').on('click', function (e) {
        e.preventDefault();
        $('.form-wrapper2').addClass('opened');
        return false;
    });
    $('.desc-area.documents .items-wrap .item .to-open').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.items-wrap').find('.body').toggleClass('opened');
    });

    $('.menu-sec-area li a.one').on('click', function (e) {
        e.preventDefault();
        $('.menu-sec-area li').removeClass('active');
        $('.tblocks .items-wrap').removeClass('active');
        $(this).closest('li').addClass('active');
        $(this).closest('.tblocks').find('.items-wrap1').addClass('active');
    });
    $('.menu-sec-area li a.two').on('click', function (e) {
        e.preventDefault();
        $('.menu-sec-area li').removeClass('active');
        $('.tblocks .items-wrap').removeClass('active');
        $(this).closest('li').addClass('active');
        $(this).closest('.tblocks').find('.items-wrap2').addClass('active');
    });
    $('.menu-sec-area li a.three').on('click', function (e) {
        e.preventDefault();
        $('.menu-sec-area li').removeClass('active');
        $('.tblocks .items-wrap').removeClass('active');
        $(this).closest('li').addClass('active');
        $(this).closest('.tblocks').find('.items-wrap3').addClass('active');
    });
    $(window).on('resize', function () {
        if (matchMedia('(max-width: 640px)').matches) {
            $('.blocks-wrapper .inner .menu-inner-top ul li.submenu > a').on('click', function () {
                $(this).closest('.submenu').find('ul').addClass('fixed');
            });
            $('.blocks-wrapper .inner .menu-inner-top ul li.submenu ul .close_m').on('click', function () {
                $(this).closest('.submenu').find('ul').removeClass('fixed');
            });
        }
    }).trigger('resize');
});
