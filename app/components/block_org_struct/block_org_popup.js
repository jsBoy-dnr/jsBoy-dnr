initPopupBlock = function ($this, bCheckToggle = true) {
    if (bCheckToggle && ($this.parent().children('ul').length || $this.parent().hasClass(that.classParentSection))) {
        $this.parent().toggleClass('opened');
        $this.siblings('ul').slideToggle();
    }

    if ($this.parent().children('.b').length) {

        $('.label.open_p').removeClass('open_p');
        $this.addClass('open_p');
        let $arrowLeft = $('.arrowLeft'),
            $arrow = $('.arrow'),
            $openB = $('.open_p + .b');

        $arrowLeft.css('transition', '.3s');
        $arrowLeft.css('opacity', '1');
        $arrow.show().css('opacity', '1');
        $('.blocks-wrapper-org').css('z-index', '20');
        $('.site-header').css('z-index', 'auto');
        $openB.css('opacity', '1');
        setTimeout(function () {
            let divA = document.querySelector('.open_p'),
                divB = document.querySelector('.open_p + .b'),
                arrowLeft = document.querySelector('.arrowLeft'),
                ContBlocks = document.querySelector('.step_four__wrap'),
                topOfBlockPopup = window.pageYOffset - ContBlocks.offsetTop;

            $openB.css({
                'top': topOfBlockPopup
            });

            const drawConnector = function () {
                if (divB.offsetTop >= 1) {
                    $openB.css({
                        'top': (window.pageYOffset - ContBlocks.offsetTop - 50)
                    });
                    let posnALeft = {
                        x: divA.offsetLeft + divA.offsetWidth + 10,
                        y: divA.offsetTop + divA.offsetHeight / 2 + 5
                    };
                    let posnBLeft = {
                        x: divB.offsetLeft - 10,
                        y: window.pageYOffset - ContBlocks.offsetTop + divB.offsetHeight / 2 - 50
                    };

                    let dStrLeft =
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
                    let posnALeft = {
                        x: divA.offsetLeft + divA.offsetWidth + 10,
                        y: divA.offsetTop + divA.offsetHeight / 2 + 5
                    };
                    let posnBLeft = {
                        x: divB.offsetLeft - 10,
                        y: divB.offsetHeight / 2 - 20
                    };
                    let dStrLeft =
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
                    $openB.css({
                        'top': '0'
                    });

                };
            };

            drawConnector();

            $(window).off('scroll').on('scroll', function () {
                $arrowLeft.css('transition', 'unset');
                $openB.css({
                    'top': (window.pageYOffset - ContBlocks.offsetTop - 50)
                });

                drawConnector();
                var currentScroll = window.pageYOffset;
                var windowHeight = window.innerHeight;

                if (
                    currentScroll <= divA.offsetTop + divA.offsetHeight * 3 - windowHeight + ContBlocks.offsetTop ||
                    currentScroll >= divA.offsetTop + divA.offsetHeight * 3 + ContBlocks.offsetTop
                ) {
                    $arrow.css('opacity', '0');
                    $openB.css('opacity', '0');
                } else {
                    $arrow.css('opacity', '1');
                    $openB.css('opacity', '1');
                    return false;
                }
            });

        }, 1);
        return false;
    } else {
        $('.arrow').hide();
        $('.label.open_p').removeClass('open_p');
        $('.s_hasstr.open_p').removeClass('open_p');
        $('.step-two_m__wrap').css('z-index', '30');
        $('.blocks-wrapper-org').css('z-index', 'auto');
    };
};
