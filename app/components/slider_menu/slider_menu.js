(function (slider_menu, $, undefined) {
    slider_menu.init = function (jquery_dom_obj, callbackMoveYAxis) {
        var isDown = false;
        var startX, startY;
        var scrollLeft;
        var distX, distY;
        var maxOffsetLeft;
        const slider = jquery_dom_obj;

        const start_left = $(slider).parent().css('paddingLeft');

        var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        var items = jquery_dom_obj.find('a');

        items.on('touchstart mousedown', function (event) {
            var eventType = event.type;
            var condition = (eventType === 'touchstart' || eventType === 'mousedown');

            start(event, eventType, condition);
            event.preventDefault();
        });

        const end = (e) => {

            isDown = false;

            slider.removeClass('active');
            items.off('touchmove mousemove touchend mouseup');
        };

        const start = (e, etype, condition) => {
            if (!condition) {
                e.preventDefault();
            }
            items.off('click');
            items.on({
                ['touchmove mousemove']: (e) => move(e, etype, condition),
                ['touchend mouseup']: (e) => end(e)
            });

            startY = e.pageY || e.originalEvent.touches[0].pageY;
            startX = e.pageX || e.originalEvent.touches[0].pageX;

            isDown = true;
            slider.addClass('active');
            scrollLeft = parseInt(slider.css('left'));

            if ($(slider).find('> *').length == 1) {
                maxOffsetLeft = -1 * ($(slider).outerWidth(true) - $(slider).parent().outerWidth(true));
            } else {
                maxOffsetLeft = -1 * ($(slider).outerWidth(true)) + $(slider).parent().width() - 10;
            }
        };

        const move = (e, etype, condition) => {

            if (condition) {
                e.preventDefault();
            }
            items.on('click', function (event) {
                event.preventDefault();
            });

            if (!isDown) {
                return;
            }


            const x = e.pageX || e.originalEvent.touches[0].pageX;
            const y = e.pageY || e.originalEvent.touches[0].pageY;
            distX = (x - startX);
            distY = (y - startY);

            if (Math.abs(distY) > 30 && Math.abs(distY) > Math.abs(distX) * 2) {
                if (!(isSafari || iOS) && e.type === 'touchmove') {
                    return;
                } else {
                    if (callbackMoveYAxis != undefined) {
                        callbackMoveYAxis(distY > 0);
                    } else if (e.type === 'mousemove') {
                        var _v = distY > 0;
                        var _y = $(window).scrollTop();
                        $(window).scrollTop(_v ? _y - 4 : _y + 4);
                    } else {
                        return;
                    }
                }
            }

            let r = scrollLeft + distX;

            if (Math.abs(distX) > 20) {
                e.preventDefault();

                if (r > 0) {
                    $(slider).css('left', start_left);
                } else {
                    $(slider).css('left', r > maxOffsetLeft ? r : maxOffsetLeft);
                }
            }
        };

        slider.on('touchstart mousedown', function (event) {

            var eventType = event.type;
            var condition = (eventType === 'touchstart' || eventType === 'mousedown');

            start(event, eventType, condition);
        });

        slider.on('touchmove mousemove', function (event) {

            var eventType = event.type;
            var condition = (eventType === 'touchstart' || eventType === 'mousedown');

            move(event, eventType, condition);
        });

        slider.on('touchend mouseup mouseleave', function (event) {
            end(event);
        });
    };

})(window.slider_menu = window.slider_menu || {}, jQuery);
