let initFaqBlock = function () {
	$('.faq select').styler();
	$('.filter_btn').on('click', function () {
	    let $this = $(this);
		$this.toggleClass('open');
	});

	var faqItem = $('.faq-item');

	$(faqItem).each(function () {
        let $this = $(this);
		var HeaderHeight = $this.find('.faq-item__header').height();
		$this.height(HeaderHeight);
	});


	$('.btn_pluse').on('click', function () {
        let $this = $(this);
		var iParent = $this.closest('.faq-item');
		var fbHeight = iParent.find('.faq-item__body').height();
		var fhHeight = iParent.find('.faq-item__header').height();;
		var fHeight = fhHeight + fbHeight;
		if (iParent.hasClass('open')) {
			iParent.height(fhHeight).removeClass('open')
		} else {
			$(faqItem).each(function () {
                let $this = $(this);
				var HeaderHeight = $this.find('.faq-item__header').height();
				$this.height(HeaderHeight).removeClass('open');
			});
			iParent.css('height', fHeight).addClass('open');
		}
	});
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initFaqBlock();
    });
} else {
    $(function () {
        initFaqBlock();
    });
}