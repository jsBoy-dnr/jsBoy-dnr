let initHeroTab = function () {
    $('[data-tabs-trigger]').click(function (e) {
        const id = $(this).data('tabs-trigger');
        const self = $('[data-tabs="' + id + '"]');
        self.nextAll().removeClass('active');
        self.prevAll().removeClass('active');
        $(this).prevAll().removeClass('active');
        $(this).nextAll().removeClass('active');
        if (self.length) {
            e.preventDefault();
            self.addClass('active');
            $(this).addClass('active');
        }
    });
}

let initJsFilter = function () {
    let $search = $('#jsSearch');
    let $searchContent = $('.tab__el .item');
    $search.on('keyup', function () {
        let $this = $(this);
        let value = $this.val().toLowerCase();
        string = value;
        $searchContent.filter(function () {
            let is_compare = $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
}

let initJqFilter = function () {
    let $searchContent = $('.tab__el .item .itemtext');
    let $searchContentItem = $searchContent.find('.item');
    let $search = $('#jsSearch');
    $search.on('keyup', function () {
        let $this = $(this);
        $searchContent.find('.highlight').removeClass('highlight');
        let searchword = $this.val().toLowerCase();
        let custfilter = new RegExp('(' + searchword + ')', 'gi');
        let repstr = '<mark>' + searchword + '</mark>';
        // $searchContent.filter(function () {
            // $(this).html($(this).html().replace(custfilter, repstr));
            // $('.tab__el .item .itemtext').each(function () {
            //     $(this).html($(this).html().replace(custfilter, repstr));
            // })
        // });
        $searchContent.filter(function () {
            $(this).html($(this).html().replace(custfilter, repstr));
            return false;
        });
        // if (searchword != '') {
        //     $searchContent.each(function () {
        //         $(this).html($(this).html().replace(custfilter, repstr));
        //     })
        // }
        // $searchContent.filter(function () {
        //     let is_compare = $(this).toggle($(this).text().toLowerCase().indexOf(searchword) > -1);

        //     $searchContentItem.each(function () {
        //         let custfilter = new RegExp('(' + searchword + ')', 'gi');
        //         let repstr = '<mark>' + searchword + '</mark>';
        //         $(this).html($(this).html().replace(custfilter, repstr));
        //     })
        //     // $(this).html($(this).html().replace(custfilter, repstr));
        //     // let text = $(this).text().replace(value, (match, $1) => {
        //     //     // Return the replacement
        //     //     return '<mark>' + match + '</mark>';
        //     // });
        //     // $(this).html(text);
        //     // if(is_compare) {
        //     //     $(this).css('background', 'yellow');
        //     // }
        //     // return is_compare;
        // });
    });
};

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initHeroTab();
        initJsFilter();
    });
} else {
    $(function () {
        initHeroTab();
        initJsFilter();
    });
}