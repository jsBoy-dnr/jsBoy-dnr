let initJsFilter = function () {
    let $search = $('#jsSearch');
    let $searchContent = $('.search-content .item');
    $search.on('keyup', function () {
        let $this = $(this);
        let value = $this.val().toLowerCase();
        let $searchDataUser = $search.data('user')
        let $searchDataOrg = $search.data('org')
        let $heading = $('.pagerblock__heading');
        $heading.text($searchDataUser);
        $('.search-content').addClass('active');
        $('.tab-content > .desc-area').hide();
        if (!$search.val()) {
            $('.search-content').removeClass('active');
            $('.tab-content').show();
            $heading.text($searchDataOrg);
        }
        $searchContent.filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
}
let initAccordeon = function () {
    // let accItem = $('.docContent');

    // $('.dropContent').on('click', function () {
    //     let $btn = $(this);
    //     let $content = $btn.parent().parent();
    //     let iParent = $content.find('.docContent');
    //     if (iParent.hasClass('open')) {
    //         iParent.removeClass('open');
    //         $btn.removeClass('active');
    //         $content.removeClass('open');
    //     } else {
    //         iParent.addClass('open');
    //         $btn.addClass('active');
    //         $content.addClass('open');
    //     }
    // });
};

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initAccordeon();
        initJsFilter();
    });
} else {
    $(function () {
        initAccordeon();
        initJsFilter();
    });
};