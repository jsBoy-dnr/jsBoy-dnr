let initTopSlider = function () {

    let owl = $('.bt_o_top_slider_c').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        onInitialize: callback
    });

    function callback(event) {
        let item_count = $('.bt_o_top_slider_c_item_c').length;
        if (item_count <= 1) {
            this.options.dots = false;
            this.options.autoplay = false;
            this.options.mouseDrag = false;
            this.options.touchDrag = false;
        }
    }

    owl.on('changed.owl.carousel', function (event) {
        if (event.item.index == 0) {
            $('#bk_1').css({
                'background': 'url(../../images/my-company-1_bk.jpg) 0 0',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            });
        } else if (event.item.index == 1) {
            $('#bk_1').css({
                'background': 'url(../../images/my-company-2_bk.jpg) 0 0',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            });
        } else if (event.item.index == 2) {
            $('#bk_1').css({
                'background': 'url(../../images/my-company-3_bk.jpg) 0 0',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            });
        }

    });

}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initTopSlider();
    });
} else {
    $(function () {
        initTopSlider();
    });
}
