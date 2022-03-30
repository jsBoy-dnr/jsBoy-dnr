let initLike = function () {
    $('a.favorite, a.author__like, a.like-it').on('click', function (e) {
        let $this = $(this);
        e.preventDefault();
        $this.toggleClass('active');
    });
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initLike();
    });
} else {
    $(function () {
        initLike();
    });
}