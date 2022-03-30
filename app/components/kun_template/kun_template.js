let initSelectVal = function () {
    let $select = $('.sort_bl select');
    $select.each(function () {
        let $this = $(this);
        $this.on('change', function (ev) {
            let $value = $this.children(':selected').val();
            window.location = $value;
        });
    });
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initSelectVal();
    });
} else {
    $(function () {
        initSelectVal();
    });
}