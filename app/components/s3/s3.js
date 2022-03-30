/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable new-cap */
/* eslint-disable no-unused-expressions */
/* masalygin 0.0.1 */
'use strict';

(function (factory) {

    if (typeof define === 'function' && define.amd) {

        define(['jquery'], factory);

    } else {

        factory(jQuery);

    }

})(function ($) {

    $.s3Eventable = function (obj) {

        obj = obj || {};
        obj._events = {};
        obj._lock = false;

        obj.on = function (type, func) {

            if (!obj._lock) {

                if ($.type(type) === 'object') {

                    $.each(type, function (key, value) {
                        obj.on(key, value);
                    });

                    return this;
                }

                if (!this._events[type]) {
                    this._events[type] = $.Callbacks();
                }

                this._events[type].add(func);

            }

            return this;
        };

        obj.off = function (type, func) {

            if (this._events[type] && !obj._lock) {
                func ? this._events[type].remove(func) : this._events[type].empty();
            }

            return this;
        };

        obj.trigger = function (type) {
            if (this._events[type]) {
                this._events[type].fireWith(obj, [].slice.call(arguments, 1));
            }
            return this;
        };

        obj.lock = function () {
            obj._lock = true;
        };

        obj.unlock = function () {
            obj._lock = false;
        };

        return obj;

    };
    function Line(a, b) {
        this.a = a;
        this.b = b;
    }

    Line.prototype.len = function () {
        var dx = this.a.x - this.b.x,
            dy = this.a.y - this.b.y;

        return Math.sqrt(dx * dx + dy * dy);
    };

    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    Triangle.prototype.square = function () {
        var ab = (new Line(this.a, this.b)).len(),
            bc = (new Line(this.b, this.c)).len(),
            ac = (new Line(this.a, this.c)).len(),
            p = (ab + bc + ac) / 2;

        return Math.sqrt(p * (p - ab) * (p - bc) * (p - ac));
    };

    Triangle.prototype.hasPoint = function (p, d) {
        var abp = (new Triangle(this.a, this.b, p)).square(),
            acp = (new Triangle(this.a, this.c, p)).square(),
            bcp = (new Triangle(this.b, this.c, p)).square(),
            sum = abp + acp + bcp,
            dS = Math.abs(sum - this.square());

        d = (typeof d === 'undefined') ? 0 : d;

        if (dS < d) {
            return true;
        } else {
            return false;
        }
    };

    window.s3Math = {
        Line: Line,
        Triangle: Triangle
    };

    return window.s3Math;

});

/* masalygin 0.0.1 */
'use strict';

(function (factory) {

    if (typeof define === 'function' && define.amd) {

        define([], factory);

    } else {

        factory();

    }

})(function () {

    function Line(a, b) {
        this.a = a;
        this.b = b;
    }

    Line.prototype.len = function () {
        var dx = this.a.x - this.b.x,
            dy = this.a.y - this.b.y;

        return Math.sqrt(dx * dx + dy * dy);
    };

    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    Triangle.prototype.square = function () {
        var ab = (new Line(this.a, this.b)).len(),
            bc = (new Line(this.b, this.c)).len(),
            ac = (new Line(this.a, this.c)).len(),
            p = (ab + bc + ac) / 2;

        return Math.sqrt(p * (p - ab) * (p - bc) * (p - ac));
    };

    Triangle.prototype.hasPoint = function (p, d) {
        var abp = (new Triangle(this.a, this.b, p)).square(),
            acp = (new Triangle(this.a, this.c, p)).square(),
            bcp = (new Triangle(this.b, this.c, p)).square(),
            sum = abp + acp + bcp,
            dS = Math.abs(sum - this.square());

        d = (typeof d === 'undefined') ? 0 : d;

        if (dS < d) {
            return true;
        } else {
            return false;
        }
    };

    window.s3Math = {
        Line: Line,
        Triangle: Triangle
    };

    return window.s3Math;

});
/* masalygin 0.0.2 */

/*
 * ошибки:
 * exitTimeout не всегда работает работает
 *
 * */

'use strict';

(function (factory) {

    if (typeof define === 'function' && define.amd) {

        define(['jquery', 's3/misc/math/0.0.1/s3.math', 's3/misc/eventable/0.0.1/s3.eventable'], factory);

    } else {

        factory(jQuery, s3Math);

    }

})(function ($, math) {

    var points;

    function debug() {

        var menu = this;

        if (!menu.settings.debug && document.location.search.indexOf('test') == -1) {
            return false;
        }

        if (!points) {

            points = {};

            $.each(['a', 'b', 'c'], function (key, value) {

                var attr = {
                    id: 's3-menu-allin-point-' + value,
                    'class': 's3-menu-allin-point',
                    html: value
                };

                points[value] = $('<div></div>', attr);

                $(document.body).append(points[value]);

            });

        }

        $.each(points, function (name, point) {

            point.css({
                left: menu.triangle[name].x,
                top: menu.triangle[name].y
            });

        });

    }

    $.s3MenuAllInTypes = {

        _popup: {

            activate: function (params) {

                var $siblings = params.$item.siblings();
                params.$item.addClass(this.settings.activeClass);
                $siblings.removeClass(this.settings.activeClass);
                this.hide($siblings.children('ul'));
                this.show(params.$sub);
                this.hide(params.$sub.find('ul'));

            },

            deactivate: function (params) {

                params.$item.removeClass(this.settings.activeClass);
                this.hide(params.$sub);

            },

            exit: function () {

                this.$li.removeClass(this.settings.activeClass);
                this.hide(this.$ul);

            }

        },

        bottom: function (menu) {

            menu.on('activate', function (params) {

                var $sub = params.$sub;

                if (!$sub.length) {
                    return;
                }

                var winWidth = $(window).width();
                var $item = params.$item;
                var isHidden = $sub.is(':hidden');

                $sub.show();

                var iPos = $item.position();
                var iOffset = $item.offset();
                var iWidth = $item.width();
                var sWidth = $sub.width();
                var sPos = {};

                var b = this.triangle.b;
                var c = this.triangle.c;

                var left;
                var revert = false;

                if (params.level === 1) {

                    left = iOffset.left + sWidth;

                    if (left > winWidth) {

                        sPos.left = iPos.left + iWidth - sWidth;

                    } else {

                        sPos.left = iPos.left;

                    }

                    sPos.top = iPos.top + $item.height();

                } else {

                    left = iOffset.left + iWidth + sWidth;

                    if (left > winWidth) {

                        sPos.left = iPos.left - sWidth;
                        revert = true;

                    } else {

                        sPos.left = iPos.left + iWidth;

                    }

                    sPos.top = iPos.top;

                }

                $sub.css(sPos);

                var sOffset = $sub.offset();

                if (params.level === 1) {

                    b.y = c.y = sOffset.top;
                    b.x = sOffset.left;
                    c.x = sOffset.left + sWidth;

                } else {

                    b.y = sOffset.top;
                    c.y = sOffset.top + $sub.height();
                    b.x = c.x = revert ? sOffset.left + sWidth : sOffset.left;

                }

                if (isHidden) {
                    $sub.hide();
                }


            });

            menu.on(this._popup);

        },

        top: function (menu) {

            menu.on('activate', function (params) {

                var $sub = params.$sub;

                if (!$sub.length) {
                    return;
                }

                var winWidth = $(window).width();
                var $item = params.$item;
                var isHidden = $sub.is(':hidden');

                $sub.show();

                var iPos = $item.position();
                var iOffset = $item.offset();
                var iWidth = $item.width();
                var iHeight = $item.height();
                var sWidth = $sub.width();
                var sHeight = $sub.height();
                var sPos = {};

                var b = this.triangle.b;
                var c = this.triangle.c;

                var left;
                var revert = false;

                if (params.level === 1) {

                    left = iOffset.left + sWidth;

                    if (left > winWidth) {

                        sPos.left = iPos.left + iWidth - sWidth;

                    } else {

                        sPos.left = iPos.left;

                    }

                    sPos.top = iPos.top - sHeight;

                } else {

                    left = iOffset.left + iWidth + sWidth;

                    if (left > winWidth) {

                        sPos.left = iPos.left - sWidth;
                        revert = true;

                    } else {

                        sPos.left = iPos.left + iWidth;

                    }

                    sPos.top = iPos.top - sHeight + iHeight;

                }

                $sub.css(sPos);

                var sOffset = $sub.offset();

                if (params.level === 1) {

                    b.y = c.y = sOffset.top + sHeight;
                    b.x = sOffset.left;
                    c.x = sOffset.left + sWidth;

                } else {

                    b.y = sOffset.top;
                    c.y = sOffset.top + $sub.height();
                    b.x = c.x = revert ? sOffset.left + sWidth : sOffset.left;

                }

                if (isHidden) {
                    $sub.hide();
                }

            });

            menu.on(this._popup);

        },

        right: function (menu) {

            menu.on('activate', function (params) {

                var $sub = params.$sub;

                if (!$sub.length) {
                    return;
                }

                var winWidth = $(window).width();
                var $item = params.$item;
                var isHidden = $sub.is(':hidden');

                $sub.show();

                var iPos = $item.position();
                var iOffset = $item.offset();
                var iWidth = $item.width();
                var sWidth = $sub.width();
                var sPos = {};

                var b = this.triangle.b;
                var c = this.triangle.c;

                var left;
                var revert = false;

                left = iOffset.left + iWidth + sWidth;

                sPos.top = iPos.top;

                if (left > winWidth) {

                    sPos.left = iPos.left - sWidth;
                    revert = true;

                } else {

                    sPos.left = iPos.left + iWidth;

                }

                $sub.css(sPos);

                var sOffset = $sub.offset();

                b.y = sOffset.top;
                c.y = sOffset.top + $sub.height();
                b.x = c.x = revert ? sOffset.left + sWidth : sOffset.left;

                if (isHidden) {
                    $sub.hide();
                }


            });

            menu.on(this._popup);

        },

        left: function (menu) {

            menu.on('activate', function (params) {

                var $sub = params.$sub;

                if (!$sub.length) {
                    return;
                }

                var $item = params.$item;
                var isHidden = $sub.is(':hidden');

                $sub.show();

                var iPos = $item.position();
                var iOffset = $item.offset();
                var iWidth = $item.width();
                var sWidth = $sub.width();
                var sPos = {};

                var b = this.triangle.b;
                var c = this.triangle.c;

                var left;
                var revert = false;

                left = iOffset.left - sWidth;

                sPos.top = iPos.top;

                if (left < 0) {

                    sPos.left = iPos.left + sWidth;
                    revert = true;

                } else {

                    sPos.left = iPos.left - iWidth;

                }

                $sub.css(sPos);

                var sOffset = $sub.offset();

                b.y = sOffset.top;
                c.y = sOffset.top + $sub.height();
                b.x = c.x = revert ? sOffset.left : sOffset.left + sWidth;

                if (isHidden) {
                    $sub.hide();
                }

            });

            menu.on(this._popup);

        },

        dropdown: function (menu, selector) {

            selector = selector || 'a';

            menu.$el.on({

                click: function () {

                    var $a = $(this);
                    var $item = $a.closest('li');
                    var $sub = $item.children('ul');

                    if (!$sub.length) {
                        return true;
                    }

                    if ($sub.is(':animated')) {
                        return false;
                    }

                    if ($sub.is(':hidden')) {

                        menu.show($sub, function () {
                            $a.addClass(menu.settings.openClass);
                        });

                    } else {

                        menu.hide($sub, function () {
                            $a.removeClass(menu.settings.openClass);
                        });

                    }

                    return false;

                }

            }, selector);

        },

        _dropdownPlus: function (menu, direction) {

            var $el = menu.$el.children('li');

            var dropDownMenu = $.extend({}, menu, {
                $el: $el
            });

            $.s3MenuAllInTypes.dropdown(dropDownMenu, '> a');

            $el.children('ul').s3MenuAllIn($.extend({}, menu.settings, {
                type: direction
            }));

        },

        'dropdown+left': function (menu) {
            this._dropdownPlus(menu, 'left');
        },

        'dropdown+right': function (menu) {
            this._dropdownPlus(menu, 'right');
        }

    };

    $.fn.s3MenuAllIn = function (settings) {

        settings = $.extend({

            deviation: 10,
            type: 'right',
            exitTimeout: 250,
            activateTimeout: 0,
            deactivateTimeout: 100,
            exclude: 'ul',
            debug: false,
            showFn: $.fn.show,
            showTime: 0,
            hideFn: $.fn.hide,
            hideTime: 0,
            activeClass: 's3-menu-allin-active',
            hasClass: 's3-menu-allin-has',
            openClass: 's3-menu-allin-open'

        }, settings);

        return this.each(function () {

            var $el = $(this);

            var menu = $.s3Eventable({

                settings: settings,
                triangle: new math.Triangle({}, {}, {}),
                $el: $el,
                $li: $el.find('li'),
                $ul: $el.find('ul'),
                isBlocked: false,
                isExit: true,
                active: {}

            });

            $.each(['show', 'hide'], function (key, value) {
                menu[value] = function ($el, callback) {
                    if ($el.length) {
                        $el.stop(true, true);
                        this.settings[value + 'Fn'].call($el, this.settings[value + 'Time'], callback || $.noop);
                    }
                };
            });

            if (settings.hasClass) {
                menu.$ul.parent('li').addClass(settings.hasClass);
            }

            $(document).on('mousemove', function (e) {

                if (menu.isBlocked) {

                    var $target = $(e.target);
                    var $item = $target.not(settings.exclude).closest('li');
                    var hasPoint = menu.triangle.hasPoint({
                        x: e.pageX,
                        y: e.pageY
                    }, settings.deviation);
                    var isMenu = !!menu.$el.has($target).length;
                    var isSub = false;

                    if ($item.length && menu.active.$sub) {
                        isSub = $item.closest('ul').get(0) === menu.active.$sub.get(0);
                    }

                    if (isMenu) {

                        menu.isExit = false;
                        clearTimeout(menu.exitTimeoutId);
                        clearTimeout(menu.deactivateTimeoutId);

                    }

                    if (isSub) {

                        menu.isBlocked = false;
                        $item.trigger('mouseenter');

                    } else if (isMenu) {

                        var params = $.extend({}, menu.active);

                        if (hasPoint) {

                            (function (params) {

                                menu.deactivateTimeoutId = setTimeout(function () {

                                    menu.isBlocked = false;
                                    menu.trigger('deactivate', params);
                                    $item.trigger('mouseenter');

                                }, settings.deactivateTimeout);

                            })(params);

                        } else {

                            menu.isBlocked = false;
                            menu.trigger('deactivate', params);
                            $item.trigger('mouseenter');

                        }

                    } else {

                        if (hasPoint) {

                            clearTimeout(menu.exitTimeoutId);
                            menu.exitTimeoutId = setTimeout(function () {

                                menu.isBlocked = false;
                                menu.trigger('exit');

                            }, settings.deactivateTimeout);

                        } else {

                            //							if (!menu.isExit) {

                            menu.isExit = true;
                            menu.isBlocked = false;

                            clearTimeout(menu.exitTimeoutId);
                            menu.exitTimeoutId = setTimeout(function () {

                                if (menu.isExit) {
                                    menu.trigger('exit');
                                }


                            }, settings.exitTimeout);

                            //							}

                        }

                    }

                }

            });

            menu.$el.on({

                mouseenter: function (e) {

                    e.stopPropagation();
                    menu.isExit = false;

                    if (menu.isBlocked) {
                        return;
                    }

                    var $item = $(this);
                    var $sub = $item.children('ul');
                    var $parents = $sub.parentsUntil(menu.$el, 'li');

                    (function (params) {

                        clearTimeout(menu.activateTimeoutId);
                        menu.activateTimeoutId = setTimeout(function () {

                            if (menu.isExit) {
                                return;
                            }

                            menu.isBlocked = false;
                            menu.trigger('activate', params);
                            menu.active = params;

                        }, menu.settings.activateTimeout);

                    })({
                        $item: $item,
                        $sub: $sub,
                        $parents: $parents,
                        $ul: $item.parent(),
                        level: $parents.length
                    });

                },

                mouseleave: function (e) {

                    e.stopPropagation();

                    if (menu.isBlocked) {
                        return;
                    }

                    menu.triangle.a.x = e.pageX;
                    menu.triangle.a.y = e.pageY;
                    menu.isBlocked = true;

                    var $item = $(this);
                    var $sub = $item.children('ul');
                    var $parents = $sub.parentsUntil(menu.$el, 'li');

                    menu.active = {
                        $item: $item,
                        $sub: $sub,
                        $parents: $parents,
                        $ul: $item.parent(),
                        level: $parents.length
                    };

                }

            }, 'li');

            $.s3MenuAllInTypes[settings.type](menu);
            menu.on('activate', debug);

        });

    };
});
