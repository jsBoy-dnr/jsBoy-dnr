// eslint-disable-next-line camelcase
function menu2Change(dom_obj, index) {
    $('.lk_ds_menu_2 > span').removeClass('lk_ds_menu_2_current');

    $(dom_obj).addClass('lk_ds_menu_2_current');

    $('#page_tabs > div').hide();
    $('#page_tab_' + index).show();
}

$(function () {

    var owl = $('.bt_o_top_slider_c').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        autoplay: false,
        mouseDrag: true,
        touchDrag: true
    });

    owl.on('changed.owl.carousel', function (event) {

        if (event.item.index === 0) {
            $('#bk_1').css({
                'background': 'url(/local/templates/suek.new/images/my-company-1_bk.jpg) 0 0',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            });
        } else if (event.item.index === 1) {
            $('#bk_1').css({
                'background': 'url(/local/templates/suek.new/images/my-company-2_bk.jpg) 0 0',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            });
        } else if (event.item.index === 2) {
            $('#bk_1').css({
                'background': 'url(/local/templates/suek.new/images/my-company-3_bk.jpg) 0 0',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            });
        }

    });

});
