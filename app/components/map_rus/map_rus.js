let initMapRus = function () {
	$(document).on('click', '.city_main', function(){
		var name = $(this).data('city-name'),
			classNmae = '.' + name;
		var city = $('.map_rus').find(classNmae);

		$('.block_pop').removeClass('opened');
		$('.city_main').removeClass('active');
        $('.map_block_rus .inner .map_rus path').removeClass('active');

		$(this).addClass('active');

		city.addClass('active');

		$('.popup_list_block .block_pop').each(function(){
			var dataName = $(this).data('city-popup');

			if (name == dataName) {
				$(this).addClass('opened');
			}
		});
	});

	$(document).on('click', '.map_block_rus .inner .map_rus path', function(){
		var $this = $(this),
			thisClass = $this.attr('class');

		$('.block_pop').removeClass('opened');
		$('.city_main').removeClass('active');
        $('.map_block_rus .inner .map_rus path').removeClass('active');

		$('.list_city .city_main').each(function(){
			var dataName = $(this).data('city-name');

			if (thisClass == dataName) {
				$(this).addClass('active');
				$this.addClass('active');
			}
		});

		$('.popup_list_block .block_pop').each(function(){
			var dataNameP = $(this).data('city-popup');

			if (thisClass == dataNameP) {
				$(this).addClass('opened');
			}
		});
	});

	$(document).on('click touchstart', function(e){
        if( $(e.target).closest('.city_main').length || $(e.target).closest('.map_block_rus .inner .map_rus path').length || $(e.target).closest('.block_pop').length) 
          return;
        if ($('.city_main').hasClass('active')){

        	$('.block_pop').removeClass('opened');
            $('.city_main').removeClass('active');
            $('.map_block_rus .inner .map_rus path').removeClass('active');
        }
    });

	// if ( window.matchMedia('(min-width : 1025px)').matches ) {
	//     $(".map_block_rus .items_block").mCustomScrollbar();
	// }

    $(document).on('click', '.close', function(){

    	if ($('.city_main').hasClass('active')){
    		$('.block_pop').removeClass('opened');
            $('.city_main').removeClass('active');
            $('.map_block_rus .inner .map_rus path').removeClass('active');
        }
    })
}

if (typeof BX != 'undefined') {
    BX.ready(function () {
        initMapRus();
    });
} else {
    $(function () {
        initMapRus();
    });
}