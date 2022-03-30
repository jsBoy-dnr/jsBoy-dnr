let initDocTabs = function () {
    let $tabHeader = $('.safety_docs_tabs_header');
    let $tabHead = $tabHeader.find('div');
    $tabHead.on('click', function () {
        $tabHead.each(function () {
            let $this = $(this);
            $this.removeClass('safety_docs_tabs_header_current');
        });

        $(this).addClass('safety_docs_tabs_header_current');
    });
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initDocTabs();
    });
} else {
    $(function () {
        initDocTabs();
    });
}