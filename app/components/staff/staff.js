let initStaffSlider = function () {
    let $staff = $('.Staff--slider');
    $staff.not('.slick-initialized').slick({
        slidesToShow: 3,
        arrows: true,
        adaptiveHeight: true,
        dots: false,
        prevArrow: '<button type="button" class="Staff--arrow Staff--arrow__prev"><span></span></button>',
        nextArrow: '<button type="button" class="Staff--arrow Staff--arrow__next"><span></span></button>',
        responsive: [{
            breakpoint: 1201,
            settings: {
                slidesToShow: 4
            },
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            },
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                draggable: false,
                swipe:false,
                arrows: false,
                unslick: true
            }
        }]
    });
}

let initShowFullText = function () {
    let staffText = $('.Staff--position');
    $(staffText).each(function () {
        // $(this).text($(this).text().substr(0, 60) + '...');
        let $this = $(this);
        let sText = $this.text();
        if (sText.length > 40) {
            $this.addClass('trim');
            $this.append('<div class="trim--btn"></div>');
        }
        $this.hover(function () {
            $('.Staff--slider').addClass('origin');
        }, function () {
            $('.Staff--slider').removeClass('origin');
        });
    });
    // $(document).click( function (event) {
    //     var $target = $(event.target);
    //     if (!$target.closest('.trim--open').length) {
    //         $('.trim--btn').parent().parent().removeClass('trim--open');
    //         $('.trim--btn').removeClass('trim--btn__close');
    //     }
    // });
}

let initTrimBtn = function () {
    let $trimBtn = $('.trim--btn');
    $trimBtn.click( function () {
        let $this = $(this);
        $this.addClass(function( currentClass ) {
            if ( currentClass !== 'trim--btn__close' ) {
                $this.toggleClass('trim--btn__close');
                $this.parent().parent().toggleClass('trim--open');
            }
        });
    });
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initStaffSlider();
        initShowFullText();
        initTrimBtn();
    });
} else {
    $(function () {
        initStaffSlider();
        initShowFullText();
        initTrimBtn();
    });
}