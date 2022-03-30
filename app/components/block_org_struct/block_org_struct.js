initChilds = function($this, bCheckToggle = true) {
    if ($($this).parent().children('ul').length) {
        $($this).parent().toggleClass('opened');
        $($this).siblings('ul').toggle();
    }
};

initPopupBlock = function ($this, bCheckToggle = true) {
    if ($($this).parent().children('.b').length) {
        $('.label.open_p').removeClass('open_p');
        $($this).addClass('open_p');
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
                footer = $('.site-footer'),
                ContBlocks = document.querySelector('.step_four__wrap'),
                topOfBlockPopup = window.pageYOffset - ContBlocks.offsetTop - footer.height(),
                wrapHeight = ContBlocks.offsetHeight - divB.offsetHeight;

            $openB.css({
                'top': topOfBlockPopup
            });

            const drawConnector = function () {
                let posnALeft = {
                    x: divA.offsetLeft + divA.offsetWidth + 10,
                    y: divA.offsetTop + divA.offsetHeight / 2 + 5
                };
                let posnBLeft;
                if (divB.offsetTop >= 1) {
                    if (divB.offsetTop >= wrapHeight) {
                        $openB.css({
                            'top': 'auto',
                            'bottom': '0'
                        });
                        posnBLeft = {
                            x: divB.offsetLeft - 10,
                            y: window.pageYOffset - ContBlocks.offsetTop + divB.offsetHeight / 2 - 50
                        };
                    } else {
                        $openB.css({
                            'top': window.pageYOffset - ContBlocks.offsetTop - 50 - footer.height(),
                            'bottom': 'auto'
                        });
                        posnBLeft = {
                            x: divB.offsetLeft - 10,
                            y: window.pageYOffset - ContBlocks.offsetTop + divB.offsetHeight / 2 - 50
                        };
                    }
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
                    posnBLeft = {
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
                        'top': '0',
                        'bottom': 'auto'
                    });

                };
            };

            drawConnector();

            $(window).off('scroll').on('scroll', function () {
                $arrowLeft.css('transition', 'unset');
                $openB.css({
                    'top': window.pageYOffset - ContBlocks.offsetTop - 50,
                    'bottom': 'auto'
                });

                drawConnector();
                let currentScroll = window.pageYOffset;
                let windowHeight = window.innerHeight;

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

let initCloseWpopup = function () {
    $('.label.open_p').removeClass('open_p');
    $('.s_hasstr.open_p').removeClass('open_p');
    $('.step-two_m__wrap').css('z-index', '30');
    $('.blocks-wrapper-org').css('z-index', 'auto');
};

$(document).on('click', '.btn-close_wpopup', function (e) {
    initCloseWpopup();
});

$(document).on('click', 'p.label', function (e) {
    initChilds(this);
    initPopupBlock(this);
});

let trimLabel = function () {
    let label = $('.step_blocks .label .jpost');
    $(label).each(function () {
        let $this = $(this);
        let text = $this.text();
        if (text.length > 60) {
            $this.text($(this).text().substr(0, 60) + '...');
        }
    });
}

let initTemplateIcon = function () {
    $('[data-tmpl]').click( function (e) {
        e.preventDefault();
        let $this = $(this);
        let tmpl = $this.data('tmpl');
        $('.step_blocks').attr('class', 'step_blocks ' + tmpl);
    });
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        // initPopupBlock();
        // initBlockOrg();
        trimLabel();
        initTemplateIcon();
    });
} else {
    $(function () {
        // initPopupBlock();
        // initBlockOrg();
        trimLabel();
        initTemplateIcon();
    });
}