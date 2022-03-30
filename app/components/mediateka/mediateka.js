let showTab = function (dom_obj, index) {
    $('.mediateka_header_menu_tabs a').each(function () {
        $(this).removeClass('mediateka_header_menu_tabs_current');
    });

    $(dom_obj).addClass('mediateka_header_menu_tabs_current');

    $('.mediateka_content .mediateka_content_tab').each(function () {
        if (parseInt($(this).data('index')) === index) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

let clearInputSearch = function () {
    $('#mediateka_search_text').val('');

    showTab(document.getElementById('mediateka_header_menu_tabs_first_menu'), 1);
    $('#mediateka_header_menu_tabs_search_menu').hide();
    $('#mediateka_content_tab_5').hide();

    $('#mediateka_header_menu_search_icon').show();
    $('#mediateka_header_menu_clean_search').hide();
}

let hidePopupMenuPreviewImag = function () {
    $('#fade').hide();
    $('#popup_preview_img').hide();
}

let showPopupMenuPreviewImag = function () {
    $('#popup_preview_img').center();
    $('#fade').show();
    $('#popup_preview_img').show();
}

let showHideMenuFilters = function (dom_obj) {
    if ($('#btn_filter_2_sub').is(':visible')) {
        $(dom_obj).css('background', '#ebebeb');
        $('#btn_filter_2_sub').hide();
    } else {
        $(dom_obj).css('background', '#B8B9BA');
        $('#btn_filter_2_sub').show();
    }
}

let img_box = function (self) {
    var namepic_img_box = typeof self === 'string' ? self : self.src;
    vopa_img_box = 0;
    var hwin_img_box = window.innerHeight;
    var wwin_img_box = window.innerWidth;
    var himg_img_box, padtop_img_box, idfadein_img_box;
    var img_img_box = new Image();
    img_img_box.src = namepic_img_box;
    img_img_box.onload = function () {
        himg_img_box = img_img_box.height;
        wimg_img_box = img_img_box.width;
        idpopup_img_box.innerHTML = '<img src=' + namepic_img_box + '>';

        if (wimg_img_box > wwin_img_box) {
            idpopup_img_box.getElementsByTagName('img')[0].style.width = '90%';
        } else if (himg_img_box > hwin_img_box) {
            idpopup_img_box.getElementsByTagName('img')[0].style.height = '90%';
            himg_img_box = hwin_img_box * 90 / 100;
        }

        if (himg_img_box < hwin_img_box) {
            padtop_img_box = (hwin_img_box / 2) - (himg_img_box / 2);
            idpopup_img_box.style.paddingTop = padtop_img_box + 'px';
        } else {
            idpopup_img_box.style.paddingTop = '0px';
        }

        if (allow_hide_scroll_img_box === 'yes') {
            document.body.style.overflow = 'hidden';
        }
        idpopup_img_box.style.display = 'block';
    };

    if (use_fade_inout_img_box === 'yes') {
        idfadein_img_box = setInterval(function () {
            if (vopa_img_box <= 1.1) {
                idpopup_img_box.style.opacity = vopa_img_box;
                vopa_img_box += speed_img_box;
            } else {
                idpopup_img_box.style.opacity = 1;
                clearInterval(idfadein_img_box);
            }
        }, 10);
    } else {
        idpopup_img_box.style.opacity = 1;
    }

    idpopup_img_box.onclick = function () {
        if (use_fade_inout_img_box === 'yes') {
            var idfadeout_img_box = setInterval(function () {
                if (vopa_img_box >= 0) {
                    idpopup_img_box.style.opacity = vopa_img_box;
                    vopa_img_box -= speed_img_box;
                } else {
                    idpopup_img_box.style.opacity = 0;
                    clearInterval(idfadeout_img_box);
                    idpopup_img_box.style.display = 'none';
                    idpopup_img_box.innerHTML = '';
                    document.body.style.overflow = 'visible';
                    vopa_img_box = 0;
                }
            }, 10);
        } else {
            idpopup_img_box.style.opacity = 0;
            idpopup_img_box.style.display = 'none';
            idpopup_img_box.innerHTML = '';
            document.body.style.overflow = 'visible';
        }
    };
}

let initMediatekaFunctions = function (){
    jQuery.fn.center = function () {
        this.css('position', 'absolute');

        var _top_calc = (($(window).height() - this.outerHeight()) / 3);

        if (_top_calc < 0) {
            _top_calc = 0;
        }

        this.css('top', _top_calc + $(window).scrollTop() + 'px');
        this.css('left', (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + 'px');
        return this;
    };

    function uiShowHideClearSearchIcon(text) {
        if (text.length > 0) {
            $('#mediateka_header_menu_search_icon').hide();
            $('#mediateka_header_menu_clean_search').show();

            showTab(document.getElementById('mediateka_header_menu_tabs_search_menu'), 5);
            $('#mediateka_header_menu_tabs_search_menu').show();
            $('#mediateka_content_tab_5').show();
            $('#mediateka_content_tab_5 .mediateka_content_tab_head_title span').html(text);
        } else {
            $('#mediateka_header_menu_search_icon').show();
            $('#mediateka_header_menu_clean_search').hide();

            showTab(document.getElementById('mediateka_header_menu_tabs_first_menu'), 1);
            $('#mediateka_header_menu_tabs_search_menu').hide();
            $('#mediateka_content_tab_5').hide();
        }
    }

    function initDropdownLists() {
        if ($('.mediateka_header_menu_2').is(':visible')) {
            $('.mediateka_header_menu_2 select').styler();
        }

        if ($('.mediateka_header_menu').is(':visible')) {
            $('.mediateka_header_menu select').styler();
        }

        if ($('.mediateka_top_filter_line2').is(':visible')) {
            $('.mediateka_top_filter_line2 select').styler();
        }
    }

    function initSlick() {
        if (window.innerWidth <= 1242) {
            slider_menu.init($('#menu_1 > nav'));
            slider_menu.init($('#menu_2 > nav'));
        }
    }
    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isSafari || iOS) {
        $('.mediateka_documents_list_item_img img').css('transform', 'none');
    }

    if (window.innerWidth <= 576) {
        $('#filter_region_top option[value="0"]').text('Везде');
    }

    $('.mediateka_header_menu select').styler();
    $('.mediateka_content_tab_head select').styler();

    uiShowHideClearSearchIcon($('#mediateka_search_text').val());

    $('#mediateka_search_text').keyup(function () {
        var text = $.trim($(this).val());
        uiShowHideClearSearchIcon(text);
    });
    initDropdownLists();
    initSlick();
    $(window).resize(function () {
        $('#popup_preview_img').center();
        initDropdownLists();
    });

    var bg_color_img_box = 'rgba(0,0,0,0.9)';
    var allow_hide_scroll_img_box = 'yes';
    var use_fade_inout_img_box = 'yes';
    var speed_img_box = 0.08;
    var z_index_dv_img_box = 1002;
    var vopa_img_box, idpopup_img_box;

    window.onload = function () {
        var crtdv_img_box = document.createElement('div');
        crtdv_img_box.id = 'img_box';
        document.getElementsByTagName('body')[0].appendChild(crtdv_img_box);
        idpopup_img_box = document.getElementById('img_box');
        idpopup_img_box.style.top = 0;
        idpopup_img_box.style.left = 0;
        idpopup_img_box.style.opacity = 0;
        idpopup_img_box.style.width = '100%';
        idpopup_img_box.style.height = '100%';
        idpopup_img_box.style.display = 'none';
        idpopup_img_box.style.position = 'fixed';
        idpopup_img_box.style.cursor = 'pointer';
        idpopup_img_box.style.textAlign = 'center';
        idpopup_img_box.style.zIndex = z_index_dv_img_box;
        idpopup_img_box.style.backgroundColor = bg_color_img_box;
    };

}


if (typeof BX != 'undefined') {
    BX.ready(function () {
        initMediatekaFunctions();
        // showTab();
        // clearInputSearch();
        // hidePopupMenuPreviewImag();
        // showPopupMenuPreviewImag();
        // showHideMenuFilters();
        // img_box();
    });
} else {
    $(function () {
        initMediatekaFunctions();
        // showTab();
        // clearInputSearch();
        // hidePopupMenuPreviewImag();
        // showPopupMenuPreviewImag();
        // showHideMenuFilters();
        // img_box();
    });
}
