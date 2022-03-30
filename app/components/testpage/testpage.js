let initJsFilter = function () {
    let $search = $('#jsSearch');
    let $searchContent = $('.testpages *');
    $search.on('keyup', function () {
        let $this = $(this);
        let value = $this.val().toLowerCase();
        // $('.testpages').toggleClass('asd');
        $searchContent.filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
}


if (typeof BX != 'undefined') {
    BX.ready(function () {
        initJsFilter();
    });
} else {
    $(function () {
        initJsFilter();
    });
}