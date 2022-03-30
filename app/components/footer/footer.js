let copyToClipboard = function (text, el) {
    let copyTest = document.queryCommandSupported('copy');
    let elOriginalText = el.attr('data-original-title');
    let copied = el.attr('data-copied');
    let errCopied = el.attr('data-err-copied');

    if (copyTest === true) {
        let copyTextArea = document.createElement('textarea');
        copyTextArea.value = text;
        document.body.appendChild(copyTextArea);
        copyTextArea.select();
        try {
            let successful = document.execCommand('copy');
            let msg = successful ? copied : errCopied;
            el.attr('data-original-title', msg).tooltip();
        } catch (err) {
            console.log(errCopied);
        }
        document.body.removeChild(copyTextArea);
        el.attr('data-original-title', elOriginalText);
    }
}

let initTools = function () {
    // $('#myTab a').on('click', function (event) {
    //     event.preventDefault()
    //     $(this).tab('show')
    // });
    let $inputtel = $('.custom-input--tel');
    $('.selectStyler select').styler();
    $('.select-custom').styler();
    $('[data-toggle="tooltip"]').tooltip()
    $('a.copy').click(function () {
        let text = $(this).attr('data-copy');
        let el = $(this);
        let copied = el.attr('data-copied');
        $('.ui-tooltip').text(copied);
        copyToClipboard(text, el);
    });
    $inputtel.each(function () {
        if ($inputtel.length) {
            $inputtel.mask('+7 (999) 999-99-99');
        }
    });
}

let initTabSwitcher = function () {
    $('[data-sec-trigger]').click(function (e) {
        const id = $(this).data('sec-trigger');
        const parnetId = $(this).parent();
        const self = $('.sec[data-sec="' + id + '"]');
        $('body .sec').nextAll().removeClass('sec_active');
        $('body .sec').prevAll().removeClass('sec_active');
        $('.with-nav__item').removeClass('active');
        if (self.length > 0) {
            e.preventDefault();
            self.addClass('sec_active');
            $(this).parent().addClass('active');
            window.togglerState = id;
            window.scrollPositionMemory = $(window).scrollTop();
        }
    });
}
// let initRetinaImages = function () {
//     if ('devicePixelRatio' in window && window.devicePixelRatio > 1) {
//         console.log(window.devicePixelRatio);
//         let lowresImages = $('img.replace-2x', this);

//         lowresImages.each(function () {
//             let $this = $(this);
//             console.log($this);
//             let lowres = $this.attr('src');
//             let highres = lowres.replace('/', '@2x.');
//             $this.attr('src', highres);
//             // $this.attr('src', $this.attr('src').replace('', '@2x.'));
//         });
//     }
// }
// let menu2Change = function (dom_obj, index) {
//     let span = $('.lk_ds_menu_2 > span');
//     $(span).on('click', function () {
//         $(this).nextAll().removeClass('lk_ds_menu_2_current');
//         $(this).prevAll().removeClass('lk_ds_menu_2_current');

//         $(dom_obj).addClass('lk_ds_menu_2_current');

//         $('#page_tabs > div').hide();
//         $('#page_tab_' + index).show();
//     });
// }

let initAllCommonFunctions = function () {
    // window.retinajs();
    initTools();
    // initRetinaImages();
    initTabSwitcher();
    // menu2Change();
}

if (typeof BX != "undefined") {
    BX.ready(function () {
        initAllCommonFunctions();
    });
} else {
    $(function () {
        initAllCommonFunctions();
    });
}