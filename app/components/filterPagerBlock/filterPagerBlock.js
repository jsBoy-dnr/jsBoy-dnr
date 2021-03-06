let initPagerActive = function () {
    $(document).on('click', '.pagerblock__item', function () {
        let $thisBtn = $(this);
        $('.pagerblock__item').removeClass('active');
        $thisBtn.addClass('active');
    });
};

let initSelected = function () {
    let $select = $('.top_filter_form select');
    let $button = $('.top_filter_form button.btn.disabled');
    $select.each(function () {
        let $this = $(this);
        $this.on('change', function () {
            let $value = $this.children(':selected').val();
            if ($value !== 'default') {
                $button.removeClass('disabled');
                $button.removeAttr('disabled');
            } else {
                $button.addClass('disabled');
                $button.attr('disabled', 'true');
            }
        });
    });
};

let initShowPass = function () {
    let $x = $('input[type="password"]');
    $(document).on('click', '.showpass', function () {
        let $spbtn = $(this);
        let $inputpass = $spbtn.parent().find($x);
        if ($inputpass.attr('type') === 'password') {
            $inputpass.attr('type', 'text');
            $spbtn.addClass('show');
        } else {
            $inputpass.attr('type', 'password');
            $spbtn.removeClass('show');
        }
    });
};

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initPagerActive();
        initSelected();
        initShowPass();
    });
} else {
    $(function () {
        initPagerActive();
        initSelected();
        initShowPass();
    });
};