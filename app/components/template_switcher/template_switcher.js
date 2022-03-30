let initTemplateSwithcer = function () {
    $('[data-tmpl-btn]').click( function (e) {
        e.preventDefault();
        let $this = $(this);
        let tmpl = $this.data('tmpl-btn'),
            tmplName = $this.data('tmpl-name'),
            tmplText = $this.data('tmpl-text'),
            tmplLink = $this.data('tmpl-link'),
            tmplPhone = $this.data('tmpl-phone'),
            tmplLogo = $this.data('tmpl-logo'),
            tmplBg = $this.data('tmpl-bg'),
            tmplBgFooter = $this.data('tmpl-bgfooter'),
            tmplVk = $this.data('tmpl-vk'),
            tmplFb = $this.data('tmpl-fb'),
            tmplInst = $this.data('tmpl-inst'),
            tmplYoutube = $this.data('tmpl-youtube');
        $('body').attr('class', tmpl);
        $('.site-header').attr('class', 'site-header with-bg site-header-' + tmpl + '');
        $('.site-footer').attr('class', 'site-footer site-footer-' + tmpl + '');
        if ($('.site-header').is('.site-header-' + tmpl)) {
            $('.site-header').append('<style>.site-header.with-bg:before{background-image:url(../../images/' + tmplBg + ')}</style>');
            $('.site-logo').html('<a href="/"><img src="../images/' + tmplLogo + '" alt="' + tmplName + '" /></a>');
            $('.site-footer').css({backgroundImage : 'url("../../images/' + tmplBgFooter + '")'});
            $('.site-footer .right .link-site a').attr('href', 'tel:'+ tmplLink).text(tmplText);
            $('.site-footer .right .phones a').attr('href', 'tel:'+ tmplPhone).text(tmplPhone);
            $('.site-footer .center .social a.vk').attr('href', tmplVk);
            $('.site-footer .center .social a.fb').attr('href', tmplFb);
            $('.site-footer .center .social a.inst').attr('href', tmplInst);
            $('.site-footer .center .social a.youtube').attr('href', tmplYoutube);
            // $('.site-footer .left .copyright').text('©' + (new Date).getFullYear() + ' ' + tmplName);
            // if ($(tmplSocial).is('true')) {
            //     tmplSocial;
            // }
        }
    });
}

let initTemplateData = function () {
    let $header = $('header.site-header');
    let tmpl = $header.data('tmpl-btn'),
        tmplName = $header.data('tmpl-name'),
        tmplText = $header.data('tmpl-text'),
        tmplLink = $header.data('tmpl-link'),
        tmplPhone = $header.data('tmpl-phone'),
        tmplLogo = $header.data('tmpl-logo'),
        // tmplSocial = $('header.site-header').data('tmpl-social'),
        tmplBg = $header.data('tmpl-bg'),
        tmplBgFooter = $header.data('tmpl-bgfooter'),
        tmplVk = $header.data('tmpl-vk'),
        tmplFb = $header.data('tmpl-fb'),
        tmplInst = $header.data('tmpl-inst'),
        tmplYoutube = $header.data('tmpl-youtube');
    $('body').attr('class', tmpl);
    $('.site-header').attr('class', 'site-header with-bg site-header-' + tmpl + '');
    $('.site-footer').attr('class', 'site-footer site-footer-' + tmpl + '');
    if ($('.site-header').is('.site-header-' + tmpl)) {
        $('.site-header').append('<style>.site-header.with-bg:before{background-image:url(../../images/' + tmplBg + ')}</style>');
        $('.site-logo').html('<a href="/"><img src="../images/' + tmplLogo + '" alt="' + tmplName + '" /></a>');
        $('.site-footer').css({backgroundImage : 'url("../../images/' + tmplBgFooter + '")'});
        $('.site-footer .right .link-site a').attr('href', 'tel:' + tmplLink).text(tmplText);
        $('.site-footer .right .phones a').attr('href', 'tel:' + tmplPhone).text(tmplPhone);
        $('.site-footer .center .social a.vk').attr('href', tmplVk);
        $('.site-footer .center .social a.fb').attr('href', tmplFb);
        $('.site-footer .center .social a.inst').attr('href', tmplInst);
        $('.site-footer .center .social a.youtube').attr('href', tmplYoutube);
    }
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initTemplateSwithcer();
        initTemplateData();
    });
} else {
    $(function () {
        initTemplateSwithcer();
        initTemplateData();
    });
}