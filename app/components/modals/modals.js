function parentRemove(event) {
    let target = $( event.target );
    if ( target.is('.del') ) {
        target.parent('li').remove();
    }
}
let initToggler = function () {
    const togBtn = $('[data-togg-trigger]');
    $(togBtn).click(function (e) {
        const toggId = $(this).data('togg-trigger');
        const togglerWrap = $('.toggler_wrap[data-togg="' + toggId + '"]');
        // const check = $(this).next('input[type="checkbox"]');
        if (togglerWrap.length > 0) {
            e.preventDefault();
            togglerWrap.toggleClass('active');
            $(this).toggleClass('active');
        } else {
            $(this).remove();
        }
    });
}

let initModalsFunction = function () {
    $('[data-popup-trigger]').click(function (e) {
        let $this = $(this);
        let $window = $(window);
        let $id = $this.data('popup-trigger');
        let $self = $('.modal[data-popup="' + $id + '"]');
        $('body .modal').nextAll().removeClass('modal--active');
        $('body .modal').prevAll().removeClass('modal--active');
        if ($self.length > 0) {
            // e.preventDefault();
            // window.location.hash = $id;
            $self.addClass('modal--active');
            // $('body').addClass('-disable-scroll-');
            // window.togglerState = $id;
            // sessionStorage.reloadAfterPageLoad = true;
            // window.scrollPositionMemory = $window.scrollTop();
        }
    });
    $('.modal_close').on('click', function () {
        $('.modal[data-popup]').removeClass('modal--active');
        // window.location.hash = '';
        $('body').removeClass('-disable-scroll-');
    });
    $('#btn-2').click(function () {
        const guestSum = $('#guestSum').val();
        let guestInput = $('#guests').val();
        let companyInput = $('#guestsCompany').val();
        $('#guestList > ol').append($('<li>' + guestInput + ' (' + companyInput + ')' + '<input type="hidden" val="' + guestInput + '"/><input type="hidden" val="' + companyInput + '"/><span class="del">&#215;</span></li>'));
        var gLi = $('#guestList > ol li').length;
        if ( gLi < guestSum ) {
            let gCal = guestSum - gLi;
            $('.m_zayavka_complete__btn').attr('disabled', true);
            $(this).attr('disabled', false);
            $('#errorText').html('Вы не ввели еще ' + gCal + ' ФИО');
        } else {
            $(this).attr('disabled', true);
            $('.m_zayavka_complete__btn').attr('disabled', false).prepend('');
            $('#errorText').html('');
        }
        $('span.del').click(parentRemove);
        setTimeout(function () {
            $('#guests').val('');
            $('#guestsCompany').val('');
        }, 200);

    });

    $('#groupEventForm').on('change', function () {
        const guestSum = $('#guestSum').val();
        let gLi = $('#guestList > ol li').length;
        let gCalMinus = guestSum - gLi;
        if ( gLi < guestSum ) {
            $('.m_zayavka_complete__btn').attr('disabled', true);
            $('#btn-2').attr('disabled', false);
            $('#errorText').html('Вы не ввели еще ' + gCalMinus + ' ФИО');
        } else if ( gLi > guestSum ) {
            $('#btn-2').attr('disabled', true);
            $('.m_zayavka_complete__btn').attr('disabled', true);
            $('#errorText').html('Удалите лишние ФИО');
        } else {
            $('#btn-2').attr('disabled', true);
            $('.m_zayavka_complete__btn').attr('disabled', false).prepend('');
            $('#errorText').html('');
        }
    });

    $('#autotransport_radio_b1').on('click', function () {
        $('.autotransport_field').slideUp();
    });
    $('#autotransport_radio_b2').on('click', function () {
        $('.autotransport_field').slideDown();
    });
    $('#autotransport_radio_c1').on('click', function () {
        $('.autotransport_field').slideUp();
        $('#passenger').val('');
    });
    $('#autotransport_radio_c2').on('click', function () {
        $('.autotransport_field').slideDown();
        $('#passenger').attr('value', 'Пассажир');
    });
}

let initValidationForm = function () {
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('form--validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initModalsFunction();
        initToggler();
        initValidationForm();
    });
} else {
    $(function () {
        initModalsFunction();
        initToggler();
        initValidationForm();
    });
}

