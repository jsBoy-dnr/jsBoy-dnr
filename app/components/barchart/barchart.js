/* eslint-disable no-unused-expressions */
/* eslint-disable radix */
/* eslint-disable no-shadow */
/* eslint-disable new-cap */
/* eslint-disable eqeqeq */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */
/* eslint-disable dot-notation */
/* eslint-disable camelcase */

var numCharts = 0;

function createBarChart(element, data, options = {}) {
    // Global Variables & Init
    numCharts++;
    var el = element;
    var numBars = 0;
    var numSpaceBetweenBar = 0;
    var numBigSpace = data.length - 1;
    var max = 0;
    for (let _obj of data) {
        numSpaceBetweenBar += _obj['items'].length - 1;
        numBars += _obj['items'].length;

        for (var _a in _obj['items']) {
            max < _a[0] ? max = _a[0] : null;
        }
    }

    if (typeof options.width == 'string' && options.width == '100%') {
        options.width = $(el).width();
    }

    const opt = initOptions(options, numBars, max, numBigSpace, numSpaceBetweenBar);

    // If element is a DOM element, convert to jQuery. If it is neither, log an error message
    if (!(el instanceof jQuery) && !isDOM(el)) {
        console.log('Please use a valid DOM or jQuery element when you use createBarChart()');
    } else if (isDOM(el)) {
        el = $(el);
    }

    el.html('');
    el.addClass('chart-container');
    el.css({
        width: opt.width,
        height: opt.height
    });

    el.append('<div class="chart-ticks" id="chart-' + numCharts + '-ticks"></div>');
    let ticksEl = $('#chart-' + numCharts + '-ticks');
    ticksEl.css({
        color: opt.borderColor,
        width: opt.ticksAreaWidth,
        height: opt.height - opt.legendfooterHeight - opt.paddingTop,
        'margin-top': opt.paddingTop
    });

    let maxBarHeight = appendTicks(opt, ticksEl, opt.height - opt.legendfooterHeight - opt.paddingTop, max);

    let offset_left = opt.startPaddingDrawHorizontal + opt.ticksAreaWidth;

    for (let _i of data) {
        let _obj = data[_i];

        let w_label = opt.widthSpaceBetweenBars * (_obj['items'].length - 1) // numSpaceBetweenBar
            +
            opt.barWidth * _obj['items'].length; // numBars

        el.append('<div class="chart-labels" id="chart-' + numCharts + '-' + _i + '-labels"></div>');
        let labelsEl = $('#chart-' + numCharts + '-' + _i + '-labels');
        labelsEl.css({
            width: w_label,
            height: opt.legendfooterHeight,
            top: opt.height - opt.legendfooterHeight,
            left: offset_left
        });
        labelsEl.html('<div class="chart-label">' + _obj['legend'] + '</div>');

        offset_left += w_label + opt.widthSpaceBetweenCharts;
    }

    el.append('<div class="chart" id="chart-' + numCharts + '"></div>');
    let chartEl = $('#chart-' + numCharts);
    chartEl.css({
        width: opt.width - opt.ticksAreaWidth,
        height: opt.height - opt.legendfooterHeight - opt.paddingTop,
        'border-left': opt.axisWidth + 'px solid ' + opt.axisColor,
        'border-bottom': opt.axisWidth + 'px solid ' + opt.axisColor,
        'margin-top': opt.paddingTop
    });

    appendBars(opt, data, maxBarHeight, chartEl, max);

    // Function to check if the input is a DOM element
    function isDOM(input) {
        if (typeof HTMLElement === 'object') {
            // Check using W3 DOM2
            return input instanceof HTMLElement;
        } else {
            // Check using duck typing for older browsers
            return input && typeof input === 'object' && input !== null && input.nodeType === 1 && typeof input.nodeName === 'string';
        }
    }

    // Initialize options object
    function initOptions(options, numBars, max, numBigSpace, numSpaceBetweenBar) {
        let opt = {
            width: 320,
            height: 320,
            barColors: ['grey'],
            labelColors: ['black'],
            labelPos: 'center',
            axisColor: 'black',
            axisWidth: 3,
            timeAnimationUpBars: 1400,
            legendfooterHeight: 40,
            ticksAreaWidth: 50,
            ticksFormatNum: false,
            ticksShowHLine: true,
            startPaddingDrawHorizontal: 20, // start | end chart
            widthSpaceBetweenCharts: 72,
            widthSpaceBetweenBars: 10,
            paddingTop: 10,
        };

        // Replace defaults with any selected options
        for (var prop in options) {
            if (opt.hasOwnProperty(prop)) {
                opt[prop] = options[prop];
            }
        }

        // Calculate bar width using spacing option
        opt.barWidth =
            (opt.width -
                opt.ticksAreaWidth -
                opt.widthSpaceBetweenCharts * numBigSpace -
                opt.widthSpaceBetweenBars * numSpaceBetweenBar -
                opt.startPaddingDrawHorizontal * 2) /
            numBars;

        return opt;
    }

    function appendTicks(options, ticksEl, available_h, max) {
        let step = 10;

        if (max > 1000) {
            step = 1000;
        } else if (max > 100) {
            step = 100;
        }

        let _hmax = Math.ceil(max / step) * step;

        let tickVal = 0,
            bottom = 0;
        let tickHeight = step * available_h / _hmax;
        let tickEl;
        let fontSize = options.ticksAreaWidth * 0.25;
        let fontSize_3 = fontSize / 4;

        for (let i = 0; i <= _hmax; i += step) {
            ticksEl.append('<div class="chart-tick" id="chart-' + numCharts + '-tick-' + i + '"><span>' + formatNum(tickVal) + '</span> ' + (options.ticksShowHLine ? '_' : '&nbsp;') + '</div>');
            tickEl = $('#chart-' + numCharts + '-tick-' + i);
            tickEl.css({
                bottom: bottom - fontSize_3,
                'font-size': fontSize
            });
            tickVal += step;

            if (i != _hmax) {
                bottom += tickHeight;
            }
        }

        return max * available_h / _hmax;
    }

    function appendLabels(opt, labels, labelsEl) {
        let space = (labelsEl.width() - opt.barWidth * labels.length) / (labels.length + 1);
        let left = space;
        let labelEl;
        for (let i = 1; i <= labels.length; i++) {
            // Inside div added for styling purposes
            labelsEl.append('<div class="chart-label" id="chart-' + numCharts + '-label-' + i + '"><div>' + labels[i - 1] + '</div>');
            labelEl = $('#chart-' + numCharts + '-label-' + i);
            if (!opt.labelColors[i - 1]) {
                labelColor = opt.labelColors[0];
            } else {
                labelColor = opt.labelColors[i - 1];
            }
            labelEl.css({
                width: opt.barWidth,
                left: left,
                color: labelColor,
                'font-size': opt.barWidth * 0.2
            });
            left += space + opt.barWidth;
        }
    }

    function appendBars(opt, data, maxBarHeight, chartEl, max) {
        // Let the positioning from the left initially be equal to one space
        let left = opt.startPaddingDrawHorizontal;
        let barEl;
        let barHeight;
        let barColor;

        for (var _i in data) {
            let _o = data[_i];

            for (var _j in _o['items']) {
                let _array = _o['items'][_j];
                let uuid = '' + _i + '' + _j;

                chartEl.append('<div class="chart-bar" id="chart-' + numCharts + '-bar-' + uuid + '"></div>');
                barEl = $('#chart-' + numCharts + '-bar-' + uuid);

                // Calculating height in individual bars
                barHeight = _array[0] / (Math.ceil(max / 1) * 1) * maxBarHeight;

                // Adding dynamic css
                barEl.css({
                    width: opt.barWidth,
                    left: left,
                    background: _array[1],
                    'font-size': opt.barWidth * 0.2
                });

                // Animating the height in the bars
                barEl.animate({
                    height: barHeight
                }, opt.timeAnimationUpBars);

                left += opt.barWidth;

                if (parseInt(_j) < _o['items'].length - 1) {
                    left += opt.widthSpaceBetweenBars;
                }
                appendBarValue(opt, barEl, _array[2], uuid, barHeight);
            }

            left += opt.widthSpaceBetweenCharts;
        }

    }

    function appendBarValue(opt, barEl, value, i, barHeight) {
        barEl.append('<div class="chart-in-bar-label" id="chart-' + numCharts + '-bar-val-' + i + '">' + value + '</div>');
        valEl = $('#chart-' + numCharts + '-bar-val-' + i);
        if (opt.labelPos === 'bottom') {
            valEl.css({
                'align-self': 'flex-end'
            });
        } else if (opt.labelPos === 'top') {
            valEl.css({
                'align-self': 'flex-start'
            });
        } else {
            valEl.css({
                'align-self': 'center'
            });
        }

        if (valEl.height() > barHeight) {
            valEl.css({
                'margin-top': -42,
                'color': '#333'
            });
        }
    }

    // Format larger numbers so they fit on bars and ticks
    function formatNum(num) {
        if (options.ticksFormatNum == 'int') {
            return parseInt(num).toString();
        }

        if (num >= 100000000000000) {
            return (num / 1000000000000).toPrecision(3).toString() + 'T';
        } else if (num >= 1000000000000) {
            return (num / 1000000000000).toPrecision(2).toString() + 'T';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toPrecision(3).toString() + 'B';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toPrecision(2).toString() + 'B';
        } else if (num >= 100000000) {
            return (num / 1000000).toPrecision(3).toString() + 'M';
        } else if (num >= 1000000) {
            return (num / 1000000).toPrecision(2).toString() + 'M';
        } else if (num >= 10000) {
            return (num / 1000).toPrecision(3).toString() + 'K';
        } else if (num >= 1000) {
            return (num / 1000).toPrecision(2).toString() + 'K';
        } else {
            return num;
        }
    }

}

function createBarChart_2(element, data, options = {}) {
    var numCharts = ID();
    var el = element;
    var numBars = 0;
    var numSpaceBetweenBar = 0;
    var max = 0;

    numBars = data['legends'].length;
    numSpaceBetweenBar = data['legends'].length - 1;

    var summ_colums = [];
    var colums_list = [];

    for (let _obj of data['items']) {
        for (var j in _obj['values']) {
            if (summ_colums[j] === 'undefined') {
                summ_colums[j] = _obj['values'][j];
                colums_list[j] = [
                    [_obj['values'][j], _obj['color']]
                ];
            } else {
                summ_colums[j] += _obj['values'][j];
                colums_list[j].push([_obj['values'][j], _obj['color']]);
            }
        }
    }

    max = maxArray(summ_colums);

    if (typeof options.width == 'string' && options.width == '100%') {
        options.width = $(el).width();
    }

    const opt = initOptions(options, numBars, max, numSpaceBetweenBar);

    // If element is a DOM element, convert to jQuery. If it is neither, log an error message
    if (!(el instanceof jQuery) && !isDOM(el)) {
        console.log('Please use a valid DOM or jQuery element when you use createBarChart()');
    } else if (isDOM(el)) {
        el = $(el);
    }


    el.html('');
    el.addClass('chart2-container');
    el.css({
        width: opt.width,
        height: opt.height
    });

    el.append('<div class="chart2-ticks" id="chart2-' + numCharts + '-ticks"></div>');
    var ticksEl = $('#chart2-' + numCharts + '-ticks');
    ticksEl.css({
        color: opt.borderColor,
        width: opt.ticksAreaWidth,
        height: opt.height - opt.legendfooterHeight - opt.paddingTop,
        'margin-top': opt.paddingTop
    });

    var maxBarHeight = appendTicks(opt, ticksEl, opt.height - opt.legendfooterHeight - opt.paddingTop, max);

    var offset_left = opt.startPaddingDrawHorizontal + opt.ticksAreaWidth;

    for (var _i in data['legends']) {
        let v = data['legends'][_i];

        el.append('<div class="chart2-labels" id="chart2-' + numCharts + '-' + _i + '-labels"></div>');
        var labelsEl = $('#chart2-' + numCharts + '-' + _i + '-labels');
        labelsEl.css({
            width: opt.barWidth,
            height: opt.legendfooterHeight,
            top: opt.height - opt.legendfooterHeight,
            left: offset_left
        });
        labelsEl.html('<div class="chart2-label">' + v + '</div>');

        offset_left += opt.barWidth + opt.widthSpaceBetweenBars;
    }

    el.append('<div class="chart2" id="chart2-' + numCharts + '"></div>');
    let chart2El = $('#chart2-' + numCharts);
    chart2El.css({
        width: opt.width - opt.ticksAreaWidth,
        height: opt.height - opt.legendfooterHeight - opt.paddingTop,
        'border-left': opt.axisWidth + 'px solid ' + opt.axisColor,
        'border-bottom': opt.axisWidth + 'px solid ' + opt.axisColor,
        'margin-top': opt.paddingTop
    });

    appendBars(opt, summ_colums, colums_list, maxBarHeight, chart2El, max);

    function isDOM(input) {
        if (typeof HTMLElement === 'object') {
            // Check using W3 DOM2
            return input instanceof HTMLElement;
        } else {
            // Check using duck typing for older browsers
            return input && typeof input === 'object' && input !== null && input.nodeType === 1 && typeof input.nodeName === 'string';
        }
    }

    // Initialize options object
    function initOptions(options, numBars, max, numSpaceBetweenBar) {
        let opt = {
            width: 320,
            height: 320,
            barColors: ['grey'],
            labelColors: ['black'],
            axisColor: 'black',
            axisWidth: 3,
            timeAnimationUpBars: 1400,
            legendfooterHeight: 40,
            ticksAreaWidth: 50,
            ticksFormatNum: false,
            ticksShowHLine: true,
            startPaddingDrawHorizontal: 60, // start | end chart2
            widthSpaceBetweenBars: 40,
            paddingTop: 15,
        };

        // Replace defaults with any selected options
        for (var prop in options) {
            if (opt.hasOwnProperty(prop)) {
                opt[prop] = options[prop];
            }
        }


        // Calculate bar width using spacing option
        opt.barWidth =
            (opt.width -
                opt.ticksAreaWidth -
                opt.widthSpaceBetweenBars * numSpaceBetweenBar -
                opt.startPaddingDrawHorizontal * 2) / numBars;

        return opt;
    }

    function appendTicks(options, ticksEl, available_h, max) {
        let step = 10;

        if (max > 1000) {
            step = 1000;
        } else if (max > 100) {
            step = 100;
        }

        if (step == 100 && max < 500) {
            step = 50;
        }

        let _hmax = Math.ceil(max / step) * step;

        let tickVal = 0,
            bottom = 0;
        let tickHeight = step * available_h / _hmax;
        let tickEl;
        let fontSize = options.ticksAreaWidth * 0.25;
        let fontSize_3 = fontSize / 4;

        for (let i = 0; i <= _hmax; i += step) {
            ticksEl.append('<div class="chart2-tick" id="chart2-' + numCharts + '-tick-' + i + '"><span>' + formatNum(tickVal) + '</span> ' + (options.ticksShowHLine ? '_' : '&nbsp;') + '</div>');
            tickEl = $('#chart2-' + numCharts + '-tick-' + i);
            tickEl.css({
                bottom: bottom - fontSize_3,
                'font-size': fontSize
            });
            tickVal += step;

            if (i != _hmax) {
                bottom += tickHeight;
            }
        }

        return max * available_h / _hmax;
    }

    function appendLabels(opt, labels, labelsEl) {
        let space = (labelsEl.width() - opt.barWidth * labels.length) / (labels.length + 1);
        let left = space;
        let labelEl;
        for (let i = 1; i <= labels.length; i++) {
            // Inside div added for styling purposes
            labelsEl.append('<div class="chart2-label" id="chart2-' + numCharts + '-label-' + i + '"><div>' + labels[i - 1] + '</div>');
            labelEl = $('#chart2-' + numCharts + '-label-' + i);
            if (!opt.labelColors[i - 1]) {
                labelColor = opt.labelColors[0];
            } else {
                labelColor = opt.labelColors[i - 1];
            }
            labelEl.css({
                width: opt.barWidth,
                left: left,
                color: labelColor,
                'font-size': opt.barWidth * 0.2
            });
            left += space + opt.barWidth;
        }
    }

    function appendBars(opt, summ_colums, colums_list, maxBarHeight, chart2El, max) {
        // Let the positioning from the left initially be equal to one space
        let left = opt.startPaddingDrawHorizontal;
        let barEl;
        let barHeight;
        let barColor;

        for (var _j in summ_colums) {
            let uuid = _j;

            chart2El.append('<div class="chart2-bar" id="chart2-' + numCharts + '-bar-' + uuid + '"></div>');
            barEl = $('#chart2-' + numCharts + '-bar-' + uuid);

            // Calculating height in individual bars
            barHeight = summ_colums[_j] / (Math.ceil(max / 1) * 1) * maxBarHeight;

            // Adding dynamic css
            barEl.css({
                width: opt.barWidth,
                left: left
            });

            // Animating the height in the bars
            barEl.animate({
                height: barHeight
            }, opt.timeAnimationUpBars);

            left += opt.barWidth;
            left += opt.widthSpaceBetweenBars;


            // Add the bar value on to the bar
            appendBarValue(opt, barEl, summ_colums[_j], uuid, barHeight);

            let top_offset = 0;

            for (var index in colums_list[_j]) {
                let p = colums_list[_j][index];

                let h = p[0] * barHeight / summ_colums[_j];

                let id = ID();
                let add_class_name = '';

                if (index == 0) {
                    add_class_name = 'chart2-in-bar-subbar-first';
                } else if (index == colums_list[_j].length - 1) {
                    add_class_name = 'chart2-in-bar-subbar-last';
                }

                barEl.append('<div class="chart2-in-bar-subbar ' + add_class_name + '" id="chart2-in-bar-subbar-' + id + '"></div>');

                let subbar = $('#chart2-in-bar-subbar-' + id);
                subbar.css({
                    background: p[1],
                    height: h + 'px',
                    top: top_offset
                });

                top_offset += h;

                subbar.append('<label>' + p[0] + '</label>');
            }

        }


    }


    function ID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    function appendBarValue(opt, barEl, value, i, barHeight) {
        barEl.append('<div class="chart2-in-bar-label" id="chart2-' + numCharts + '-bar-val-' + i + '">' + value + '</div>');
    }

    // Format larger numbers so they fit on bars and ticks
    function formatNum(num) {
        if (options.ticksFormatNum == 'int') {
            return parseInt(num).toString();
        }

        if (num >= 100000000000000) {
            return (num / 1000000000000).toPrecision(3).toString() + 'T';
        } else if (num >= 1000000000000) {
            return (num / 1000000000000).toPrecision(2).toString() + 'T';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toPrecision(3).toString() + 'B';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toPrecision(2).toString() + 'B';
        } else if (num >= 100000000) {
            return (num / 1000000).toPrecision(3).toString() + 'M';
        } else if (num >= 1000000) {
            return (num / 1000000).toPrecision(2).toString() + 'M';
        } else if (num >= 10000) {
            return (num / 1000).toPrecision(3).toString() + 'K';
        } else if (num >= 1000) {
            return (num / 1000).toPrecision(2).toString() + 'K';
        } else {
            return num;
        }
    }

    function maxArray(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];
        var maxIndex = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }

        return max;
    }

}

function createBarChart_3(element, data, options = {}) {
    // Global Variables & Init
    var numCharts = ID();
    var el = element;
    var numBars = 0;
    var numSpaceBetweenBar = 0;
    var numBigSpace = data.length - 1;
    var max = 0;
    var max_first = 0;
    var max_last = 0;

    for (var _obj in data) {
        numSpaceBetweenBar += _obj['items'].length - 1;
        numBars += _obj['items'].length;

        for (var _a in _obj['items']) {
            let _f = _a[0] + _a[1];

            max < _f ? max = _f : null;
            max_first < _a[0] ? max_first = _a[0] : null;
            max_last < _a[1] ? max_last = _a[1] : null;
        }
    }

    if (typeof options.width == 'string' && options.width == '100%') {
        options.width = $(el).width();
    }

    const opt = initOptions(options, numBars, max, numBigSpace, numSpaceBetweenBar);

    // If element is a DOM element, convert to jQuery. If it is neither, log an error message
    if (!(el instanceof jQuery) && !isDOM(el)) {
        console.log('Please use a valid DOM or jQuery element when you use createBarChart()');
    } else if (isDOM(el)) {
        el = $(el);
    }

    el.html('');
    el.addClass('chart3-container');
    el.css({
        width: opt.width,
        height: opt.height
    });

    el.append('<div class="chart3-ticks" id="chart3-' + numCharts + '-ticks"></div>');
    let ticksEl = $('#chart3-' + numCharts + '-ticks');
    ticksEl.css({
        color: opt.borderColor,
        width: opt.ticksAreaWidth,
        height: opt.height - opt.legendfooterHeight - opt.paddingTop,
        'margin-top': opt.paddingTop
    });

    let real_hChartInner = opt.height - opt.legendfooterHeight - opt.paddingTop;

    let res = appendTicks(opt, ticksEl, real_hChartInner, max, max_first, max_last);
    let maxBarHeight = res[0];
    let center_pos = res[1];

    let offset_left = opt.startPaddingDrawHorizontal + opt.ticksAreaWidth;

    for (var _i in data) {
        let _obj = data[_i];

        for (var k = 0; k < _obj['items'].length; k++) {
            el.append('<div class="chart3-labels" id="chart3-' + numCharts + '-' + _i + '-' + k + '-labels"></div>');
            let labelsEl = $('#chart3-' + numCharts + '-' + _i + '-' + k + '-labels');
            labelsEl.css({
                width: opt.barWidth,
                height: opt.legendfooterHeight,
                top: opt.height - opt.legendfooterHeight,
                left: offset_left
            });

            if ((k + 1) % 2 == 0 && !opt.xLegendHideEven) {
                labelsEl.html('<div class="chart3-label">' + (k + 1) + '</div>');
            } else if (!opt.xLegendHideOdd) {
                labelsEl.html('<div class="chart3-label">' + (k + 1) + '</div>');
            }

            offset_left += opt.barWidth + opt.widthSpaceBetweenBars;
        }

        offset_left += opt.widthSpaceBetweenCharts;
    }

    el.append('<div class="chart3" id="chart3-' + numCharts + '"></div>');
    let chart3El = $('#chart3-' + numCharts);
    chart3El.css({
        width: opt.width - opt.ticksAreaWidth,
        height: opt.height - opt.legendfooterHeight - opt.paddingTop,
        'border-left': opt.axisWidth + 'px solid ' + opt.axisColor,
        'border-bottom': opt.axisWidth + 'px solid ' + opt.axisColor,
        'margin-top': opt.paddingTop
    });

    let points_top = appendBars(opt, data, maxBarHeight, chart3El, max, center_pos, real_hChartInner);

    chart3El.append('<canvas class="chart3-canvas" id="chart3-' + numCharts + '_hover" width="' + (opt.width - opt.ticksAreaWidth) + '" height="' + (real_hChartInner - center_pos) + '"></canvas>');
    let chart3El_hover = $('#chart3-' + numCharts + '_hover');

    setTimeout(function () {

        drawC = document.getElementById('chart3-' + numCharts + '_hover');

        if (drawC && drawC.getContext) {
            let ctx = drawC.getContext('2d');
            ctx.strokeStyle = '#FF0000';
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 2;

            drawCurve(ctx, points_top);

        }

    }, 1000);

    function ID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    // Function to check if the input is a DOM element
    function isDOM(input) {
        if (typeof HTMLElement === 'object') {
            // Check using W3 DOM2
            return input instanceof HTMLElement;
        } else {
            // Check using duck typing for older browsers
            return input && typeof input === 'object' && input !== null && input.nodeType === 1 && typeof input.nodeName === 'string';
        }
    }

    // Initialize options object
    function initOptions(options, numBars, max, numBigSpace, numSpaceBetweenBar) {
        let opt = {
            width: 320,
            height: 320,
            barColors: ['grey'],
            labelColors: ['black'],
            labelPos: 'center',
            axisColor: 'black',
            axisWidth: 3,
            timeAnimationUpBars: 1400,
            legendfooterHeight: 40,
            ticksAreaWidth: 50,
            ticksFormatNum: false,
            ticksShowHLine: true,
            startPaddingDrawHorizontal: 50, // start | end chart3
            widthSpaceBetweenCharts: 25,
            widthSpaceBetweenBars: 10,
            paddingTop: 10,
            paddingInnerTopBottom: 10,
            xLegendHideOdd: false, // нечетные
            xLegendHideEven: false // четные
        };

        // Replace defaults with any selected options
        for (var prop in options) {
            if (opt.hasOwnProperty(prop)) {
                opt[prop] = options[prop];
            }
        }

        // Calculate bar width using spacing option
        opt.barWidth =
            (opt.width -
                opt.ticksAreaWidth -
                opt.widthSpaceBetweenCharts * numBigSpace -
                opt.widthSpaceBetweenBars * numSpaceBetweenBar -
                opt.startPaddingDrawHorizontal * 2) /
            numBars;

        return opt;
    }

    function appendTicks(options, ticksEl, available_h, max, max_first, max_last) {
        let step = Math.ceil(max / 10);
        step = Math.ceil(step / 10) * 10;

        let _hmax = Math.ceil(max / step) * step;

        let tickVal = 0,
            bottom = 0;
        let tickHeight = step * (available_h - options.paddingInnerTopBottom * 2) / _hmax;
        let tickEl;
        let fontSize = options.ticksAreaWidth * 0.25;
        let fontSize_3 = fontSize / 4;
        let center_pos = max_last * available_h / max;

        bottom = center_pos;

        for (let i = 0; i <= _hmax && bottom < (available_h - options.paddingInnerTopBottom); i += step) {
            let id = ID();

            ticksEl.append('<div class="chart3-tick" id="chart3-' + numCharts + '-tick-' + i + id + '"><span>' + formatNum(tickVal) + '</span> ' + (options.ticksShowHLine ? '_' : '&nbsp;') + '</div>');
            tickEl = $('#chart3-' + numCharts + '-tick-' + i + id);
            tickEl.css({
                bottom: bottom - fontSize_3,
                'font-size': fontSize
            });
            tickVal += step;

            if (i != _hmax) {
                bottom += tickHeight;
            }
        }

        bottom = center_pos;
        tickVal = 0;

        for (let i = 0; i <= _hmax && bottom > options.paddingInnerTopBottom; i += step) {
            let id = ID();

            ticksEl.append('<div class="chart3-tick" id="chart3-' + numCharts + '-tick-' + i + id + '"><span>' + formatNum(tickVal) + '</span> ' + (options.ticksShowHLine ? '_' : '&nbsp;') + '</div>');
            tickEl = $('#chart3-' + numCharts + '-tick-' + i + id);
            tickEl.css({
                bottom: bottom - fontSize_3,
                'font-size': fontSize
            });
            tickVal += step;

            if (i != _hmax) {
                bottom -= tickHeight;
            }
        }

        return [max * (available_h - options.paddingInnerTopBottom * 2) / _hmax, center_pos];
    }

    function appendLabels(opt, labels, labelsEl) {
        let space = (labelsEl.width() - opt.barWidth * labels.length) / (labels.length + 1);
        let left = space;
        let labelEl;
        for (let i = 1; i <= labels.length; i++) {
            // Inside div added for styling purposes
            labelsEl.append('<div class="chart3-label" id="chart3-' + numCharts + '-label-' + i + '"><div>' + labels[i - 1] + '</div>');
            labelEl = $('#chart3-' + numCharts + '-label-' + i);
            if (!opt.labelColors[i - 1]) {
                labelColor = opt.labelColors[0];
            } else {
                labelColor = opt.labelColors[i - 1];
            }
            labelEl.css({
                width: opt.barWidth,
                left: left,
                color: labelColor,
                'font-size': opt.barWidth * 0.2
            });
            left += space + opt.barWidth;
        }
    }

    function appendBars(opt, data, maxBarHeight, chart3El, max, center_pos, real_hChartInner) {
        let result = [];

        // Let the positioning from the left initially be equal to one space
        let left = opt.startPaddingDrawHorizontal;
        let barEl;
        let barHeight;
        let barColor;

        for (var _i in data) {
            let _o = data[_i];

            let left_start = left;

            for (var _j in _o['items']) {

                let _array = _o['items'][_j];

                let uuid = ID();

                chart3El.append('<div class="chart3-bar" id="chart3-' + numCharts + '-bar-' + uuid + '"></div>');
                barEl = $('#chart3-' + numCharts + '-bar-' + uuid);

                // Calculating height in individual bars
                barHeight = _array[0] / (Math.ceil(max / 1) * 1) * maxBarHeight;

                // Adding dynamic css
                barEl.css({
                    width: opt.barWidth,
                    left: left,
                    bottom: center_pos - 1,
                    background: '#F6C358',
                    'font-size': opt.barWidth * 0.2
                });

                // Animating the height in the bars
                barEl.animate({
                    height: barHeight
                }, opt.timeAnimationUpBars);

                result.push({
                    x: left + opt.barWidth / 2,
                    y: real_hChartInner - center_pos - barHeight
                });

                uuid = ID();

                chart3El.append('<div class="chart3-bar2" id="chart3-' + numCharts + '-bar-' + uuid + '"></div>');
                barEl = $('#chart3-' + numCharts + '-bar-' + uuid);

                // Calculating height in individual bars
                barHeight = _array[1] / (Math.ceil(max / 1) * 1) * (maxBarHeight - 1);

                // Adding dynamic css
                barEl.css({
                    width: opt.barWidth,
                    left: left,
                    top: real_hChartInner - center_pos + 1,
                    'font-size': opt.barWidth * 0.2,
                    height: 0
                });

                // Animating the height in the bars
                barEl.animate({
                    height: barHeight
                }, opt.timeAnimationUpBars);

                left += opt.barWidth;

                // Incrementing the positioning from the left
                if (parseInt(_j) < _o['items'].length - 1) {
                    left += opt.widthSpaceBetweenBars;
                }
            }

            let legendTop = $('<div class="chart3-inner-legend-top">' + _o.legend + '</div>');
            chart3El.append(legendTop);

            legendTop.css({
                left: left_start + (left - left_start) / 2 - legendTop.width() / 2
            });


            left += opt.widthSpaceBetweenCharts;
        }

        return result;
    }

    // Format larger numbers so they fit on bars and ticks
    function formatNum(num) {
        if (options.ticksFormatNum == 'int') {
            return parseInt(num).toString();
        }

        if (num >= 100000000000000) {
            return (num / 1000000000000).toPrecision(3).toString() + 'T';
        } else if (num >= 1000000000000) {
            return (num / 1000000000000).toPrecision(2).toString() + 'T';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toPrecision(3).toString() + 'B';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toPrecision(2).toString() + 'B';
        } else if (num >= 100000000) {
            return (num / 1000000).toPrecision(3).toString() + 'M';
        } else if (num >= 1000000) {
            return (num / 1000000).toPrecision(2).toString() + 'M';
        } else if (num >= 10000) {
            return (num / 1000).toPrecision(3).toString() + 'K';
        } else if (num >= 1000) {
            return (num / 1000).toPrecision(2).toString() + 'K';
        } else {
            return num;
        }
    }

    function drawCurve(ctx, points, tension) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        var t = (tension != null) ? tension : 1;
        for (let i = 0; i < points.length - 1; i++) {
            var p0 = (i > 0) ? points[i - 1] : points[0];
            var p1 = points[i];
            var p2 = points[i + 1];
            var p3 = (i != points.length - 2) ? points[i + 2] : p2;

            var cp1x = p1.x + (p2.x - p0.x) / 6 * t;
            var cp1y = p1.y + (p2.y - p0.y) / 6 * t;

            var cp2x = p2.x - (p3.x - p1.x) / 6 * t;
            var cp2y = p2.y - (p3.y - p1.y) / 6 * t;

            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
        }
        ctx.stroke();
    }

}

function createBarChart_4(element, data, options = {}) {
    // Global Variables & Init
    var numCharts = ID();
    var el = element;
    var numBars = 0;
    var numSpaceBetweenBar = 0;
    var max = 0;

    numBars = data['legends'].length;
    numSpaceBetweenBar = data['legends'].length - 1;

    max = Math.max(maxArray(data['items']), maxArray(data['support']));

    if (typeof options.width == 'string' && options.width == '100%') {
        options.width = $(el).width();
    }

    const opt = initOptions(options, numBars, max, numSpaceBetweenBar);

    // If element is a DOM element, convert to jQuery. If it is neither, log an error message
    if (!(el instanceof jQuery) && !isDOM(el)) {
        console.log('Please use a valid DOM or jQuery element when you use createBarChart()');
    } else if (isDOM(el)) {
        el = $(el);
    }


    el.html('');
    el.addClass('chart4-container');
    el.css({
        width: opt.width,
        height: opt.height
    });

    el.append('<div class="chart4-ticks" id="chart4-' + numCharts + '-ticks"></div>');
    let ticksEl = $('#chart4-' + numCharts + '-ticks');
    ticksEl.css({
        color: opt.borderColor,
        width: opt.ticksAreaWidth,
        height: opt.height - opt.legendfooterHeight - opt.paddingTop,
        'margin-top': opt.paddingTop
    });


    let maxBarHeight = appendTicks(opt, ticksEl, opt.height - opt.legendfooterHeight - opt.paddingTop, max);

    let offset_left = opt.startPaddingDrawHorizontal + opt.ticksAreaWidth;

    for (var _i in data['legends']) {
        let v = data['legends'][_i];

        el.append('<div class="chart4-labels" id="chart4-' + numCharts + '-' + _i + '-labels"></div>');
        let labelsEl = $('#chart4-' + numCharts + '-' + _i + '-labels');
        labelsEl.css({
            width: opt.barWidth,
            height: opt.legendfooterHeight,
            top: opt.height - opt.legendfooterHeight,
            left: offset_left
        });
        labelsEl.html('<div class="chart4-label">' + v + '</div>');

        offset_left += opt.barWidth + opt.widthSpaceBetweenBars;
    }

    el.append('<div class="chart4" id="chart4-' + numCharts + '"></div>');
    let chart4El = $('#chart4-' + numCharts);
    chart4El.css({
        width: opt.width - opt.ticksAreaWidth,
        height: opt.height - opt.legendfooterHeight - opt.paddingTop,
        'border-left': opt.axisWidth + 'px solid ' + opt.axisColor,
        'border-bottom': opt.axisWidth + 'px solid ' + opt.axisColor,
        'margin-top': opt.paddingTop
    });

    let canvas_w = opt.width - opt.ticksAreaWidth;
    let canvas_h = opt.height - opt.legendfooterHeight - opt.paddingTop;

    chart4El.append('<canvas class="chart4-canvas" id="chart4-' + numCharts + '_hover" width="' + (canvas_w) + '" height="' + (canvas_h) + '"></canvas>');
    let chart3El_hover = $('#chart4-' + numCharts + '_hover');

    let points_top = appendBars(opt, data['items'], data['support'], maxBarHeight, chart4El, max);

    let min_pos_hline_y = opt.height - opt.legendfooterHeight - opt.paddingTop - (minArray(data['support']) / (Math.ceil(max / 1) * 1) * maxBarHeight);

    setTimeout(function () {

        drawC = document.getElementById('chart4-' + numCharts + '_hover');

        if (drawC && drawC.getContext) {
            let ctx = drawC.getContext('2d');

            let length = canvas_h;
            let angle = 90 * (Math.PI / 180);

            var grd = ctx.createLinearGradient(0, 0, 0 + Math.cos(angle) * length, 0 + Math.sin(angle) * length);
            grd.addColorStop(0, '#9a9896');
            grd.addColorStop(0.2, 'rgba(154, 152, 150, 0.5)');
            grd.addColorStop(1.0, 'rgba(154, 152, 150, 0.1)');
            ctx.fillStyle = grd;

            drawPolygon(
                ctx, points_top, points_top[0].x, opt.height - opt.legendfooterHeight - opt.paddingTop, points_top[points_top.length - 1].x, opt.height - opt.legendfooterHeight - opt.paddingTop);

            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 3;

            ctx.beginPath();
            ctx.strokeStyle = '#8e9da7';
            ctx.lineWidth = 3;
            ctx.moveTo(points_top[0].x, min_pos_hline_y);
            ctx.lineTo(points_top[points_top.length - 1].x, min_pos_hline_y);
            ctx.stroke();

            ctx.strokeStyle = '#FFFFFF';
            drawCurve(ctx, points_top);
        }

    }, 1000);

    function isDOM(input) {
        if (typeof HTMLElement === 'object') {
            // Check using W3 DOM2
            return input instanceof HTMLElement;
        } else {
            // Check using duck typing for older browsers
            return input && typeof input === 'object' && input !== null && input.nodeType === 1 && typeof input.nodeName === 'string';
        }
    }

    // Initialize options object
    function initOptions(options, numBars, max, numSpaceBetweenBar) {
        let opt = {
            width: 320,
            height: 320,
            barColors: ['grey'],
            labelColors: ['black'],
            axisColor: 'black',
            axisWidth: 3,
            timeAnimationUpBars: 1400,
            legendfooterHeight: 40,
            ticksAreaWidth: 50,
            ticksFormatNum: false,
            ticksShowHLine: true,
            startPaddingDrawHorizontal: 60, // start | end chart4
            widthSpaceBetweenBars: 40,
            paddingTop: 15,
        };

        // Replace defaults with any selected options
        for (var prop in options) {
            if (opt.hasOwnProperty(prop)) {
                opt[prop] = options[prop];
            }
        }


        // Calculate bar width using spacing option
        opt.barWidth =
            (opt.width -
                opt.ticksAreaWidth -
                opt.widthSpaceBetweenBars * numSpaceBetweenBar -
                opt.startPaddingDrawHorizontal * 2) / numBars;

        return opt;
    }

    function appendTicks(options, ticksEl, available_h, max) {
        let step = 10;

        if (max > 1000) {
            step = 1000;
        } else if (max > 100) {
            step = 100;
        }

        if (step == 100 && max < 500) {
            step = 50;
        }

        if (max < 50) {
            step = 5;
        }

        let _hmax = Math.ceil(max / step) * step;

        let tickVal = 0,
            bottom = 0;
        let tickHeight = step * available_h / _hmax;
        let tickEl;
        let fontSize = options.ticksAreaWidth * 0.25;
        let fontSize_3 = fontSize / 4;

        for (let i = 0; i <= _hmax; i += step) {
            ticksEl.append('<div class="chart4-tick" id="chart4-' + numCharts + '-tick-' + i + '"><span>' + formatNum(tickVal) + '</span> ' + (options.ticksShowHLine ? '_' : '&nbsp;') + '</div>');
            tickEl = $('#chart4-' + numCharts + '-tick-' + i);
            tickEl.css({
                bottom: bottom - fontSize_3,
                'font-size': fontSize
            });
            tickVal += step;

            if (i != _hmax) {
                bottom += tickHeight;
            }
        }

        return max * available_h / _hmax;
    }

    function appendLabels(opt, labels, labelsEl) {
        let space = (labelsEl.width() - opt.barWidth * labels.length) / (labels.length + 1);
        let left = space;
        let labelEl;
        for (let i = 1; i <= labels.length; i++) {
            // Inside div added for styling purposes
            labelsEl.append('<div class="chart4-label" id="chart4-' + numCharts + '-label-' + i + '"><div>' + labels[i - 1] + '</div>');
            labelEl = $('#chart4-' + numCharts + '-label-' + i);
            if (!opt.labelColors[i - 1]) {
                labelColor = opt.labelColors[0];
            } else {
                labelColor = opt.labelColors[i - 1];
            }
            labelEl.css({
                width: opt.barWidth,
                left: left,
                color: labelColor,
                'font-size': opt.barWidth * 0.2
            });
            left += space + opt.barWidth;
        }
    }

    function appendBars(opt, items, support, maxBarHeight, chart4El, max) {
        let result = [];

        // Let the positioning from the left initially be equal to one space
        let left = opt.startPaddingDrawHorizontal;
        let barEl;
        let barHeight, lineHeight;
        let barColor;

        for (var _j in items) {
            let uuid = _j;

            chart4El.append('<div class="chart4-bar" id="chart4-' + numCharts + '-bar-' + uuid + '"></div>');
            barEl = $('#chart4-' + numCharts + '-bar-' + uuid);

            // Calculating height in individual bars
            barHeight = items[_j] / (Math.ceil(max / 1) * 1) * maxBarHeight;

            lineHeight = support[_j] / (Math.ceil(max / 1) * 1) * maxBarHeight;

            // Adding dynamic css
            barEl.css({
                width: opt.barWidth,
                left: left
            });

            // Animating the height in the bars
            barEl.animate({
                height: barHeight
            }, opt.timeAnimationUpBars);

            result.push({
                x: left + (parseInt(_j) + 1 == items.length ? opt.barWidth + opt.widthSpaceBetweenBars : 0),
                y: opt.height - opt.legendfooterHeight - opt.paddingTop - lineHeight
            });

            left += opt.barWidth;
            left += opt.widthSpaceBetweenBars;

            // Add the bar value on to the bar
            appendBarValue(opt, barEl, items[_j], uuid, barHeight);



        }

        return result;
    }


    function ID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    /* Values: Append child divs with class .chart4-bar-val and id
     * #chart4-bar-val-i and add values/CSS settings */
    function appendBarValue(opt, barEl, value, i, barHeight) {
        barEl.append('<div class="chart4-in-bar-label" id="chart4-' + numCharts + '-bar-val-' + i + '">' + value + '</div>');
    }

    // Format larger numbers so they fit on bars and ticks
    function formatNum(num) {
        if (options.ticksFormatNum == 'int') {
            return parseInt(num).toString();
        }

        if (num >= 100000000000000) {
            return (num / 1000000000000).toPrecision(3).toString() + 'T';
        } else if (num >= 1000000000000) {
            return (num / 1000000000000).toPrecision(2).toString() + 'T';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toPrecision(3).toString() + 'B';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toPrecision(2).toString() + 'B';
        } else if (num >= 100000000) {
            return (num / 1000000).toPrecision(3).toString() + 'M';
        } else if (num >= 1000000) {
            return (num / 1000000).toPrecision(2).toString() + 'M';
        } else if (num >= 10000) {
            return (num / 1000).toPrecision(3).toString() + 'K';
        } else if (num >= 1000) {
            return (num / 1000).toPrecision(2).toString() + 'K';
        } else {
            return num;
        }
    }

    function maxArray(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }

    function minArray(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var min = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return min;
    }

    //--------------------------------------------------------------------------
    function drawPolygon(ctx, points, x1, y1, x2, y2, tension) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(points[0].x, points[0].y);

        var t = (tension != null) ? tension : 1;
        for (let i = 0; i < points.length - 1; i++) {
            var p0 = (i > 0) ? points[i - 1] : points[0];
            var p1 = points[i];
            var p2 = points[i + 1];
            var p3 = (i != points.length - 2) ? points[i + 2] : p2;

            var cp1x = p1.x + (p2.x - p0.x) / 6 * t;
            var cp1y = p1.y + (p2.y - p0.y) / 6 * t;

            var cp2x = p2.x - (p3.x - p1.x) / 6 * t;
            var cp2y = p2.y - (p3.y - p1.y) / 6 * t;

            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
        }

        ctx.lineTo(x2, y2);
        ctx.fill();
    }

    function drawCurve(ctx, points, tension) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        var t = (tension != null) ? tension : 1;
        for (let i = 0; i < points.length - 1; i++) {
            var p0 = (i > 0) ? points[i - 1] : points[0];
            var p1 = points[i];
            var p2 = points[i + 1];
            var p3 = (i != points.length - 2) ? points[i + 2] : p2;

            var cp1x = p1.x + (p2.x - p0.x) / 6 * t;
            var cp1y = p1.y + (p2.y - p0.y) / 6 * t;

            var cp2x = p2.x - (p3.x - p1.x) / 6 * t;
            var cp2y = p2.y - (p3.y - p1.y) / 6 * t;

            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
        }
        ctx.stroke();
    }

}

function createBarChart_5(element, data, options = {}) {
    // Global Variables & Init
    var numCharts = ID();
    var el = element;
    var max = 0,
        max2 = 0;

    for (let obj of data['axis_1']['items']) {
        max = Math.max(max, maxArray(obj.values));
    }

    var axis_2 = null;

    if (data['axis_2']) {
        axis_2 = data['axis_2'];

        for (let obj1 of data['axis_2']['items']) {
            max2 = Math.max(max2, maxArray(obj1.values));
        }
    }


    if (typeof options.width == 'string' && options.width == '100%') {
        options.width = $(el).width();
    }

    const opt = initOptions(options);

    // If element is a DOM element, convert to jQuery. If it is neither, log an error message
    if (!(el instanceof jQuery) && !isDOM(el)) {
        console.log('Please use a valid DOM or jQuery element when you use createBarChart()');
    } else if (isDOM(el)) {
        el = $(el);
    }

    el.html('');
    el.addClass('chart5-container');
    el.css({
        width: opt.width,
        height: opt.height
    });

    el.append('<div class="chart5-ticks" id="chart5-' + numCharts + '-ticks"></div>');
    let ticksEl = $('#chart5-' + numCharts + '-ticks');
    ticksEl.css({
        color: opt.borderColor,
        width: opt.ticksAreaWidth,
        height: opt.height - opt.legendfooterHeight - opt.paddingTop,
        'margin-top': opt.paddingTop
    });

    let ticksEl2 = null;

    if (axis_2) {
        el.append('<div class="chart5-ticks-2" id="chart5-' + numCharts + '-ticks_2"></div>');
        ticksEl2 = $('#chart5-' + numCharts + '-ticks_2');
        ticksEl2.css({
            color: opt.borderColor,
            width: opt.ticksAreaWidth,
            height: opt.height - opt.legendfooterHeight - opt.paddingTop,
            'margin-top': opt.paddingTop
        });
    }

    let prefix_ticks = (data['axis_1'].prefix_axis_x) ? data['axis_1'].prefix_axis_x : '';

    let maxBarHeight = appendTicks(opt, ticksEl, prefix_ticks, opt.height - opt.legendfooterHeight - opt.paddingTop - opt.topInnerPadding, max);

    let maxBarHeight2 = null;

    if (axis_2) {
        let prefix_ticks2 = (data['axis_2'].prefix_axis_x) ? data['axis_2'].prefix_axis_x : '';

        maxBarHeight2 = appendTicks(opt, ticksEl2, prefix_ticks2, opt.height - opt.legendfooterHeight - opt.paddingTop - opt.topInnerPadding, max2);
    }

    let offset_left = opt.startPaddingDrawHorizontal + opt.ticksAreaWidth;
    let size_one = (opt.width - opt.ticksAreaWidth - ((axis_2) ? opt.ticksAreaWidth : 0) - opt.startPaddingDrawHorizontal * 2) / data['legends'].length;

    for (let _i of data['legends']) {
        let v = data['legends'][_i];

        el.append('<div class="chart5-labels" id="chart5-' + numCharts + '-' + _i + '-labels"></div>');
        let labelsEl = $('#chart5-' + numCharts + '-' + _i + '-labels');
        labelsEl.css({
            width: size_one,
            height: opt.legendfooterHeight,
            top: opt.height - opt.legendfooterHeight,
            left: offset_left
        });
        labelsEl.html('<div class="chart5-label">' + v + '</div>');

        offset_left += size_one;
    }

    el.append('<div class="chart5" id="chart5-' + numCharts + '"></div>');
    let chart5El = $('#chart5-' + numCharts);
    chart5El.css({
        width: opt.width - opt.ticksAreaWidth - ((axis_2) ? opt.ticksAreaWidth : 0),
        height: opt.height - opt.legendfooterHeight - opt.paddingTop,
        'border-left': opt.axisWidth + 'px solid ' + opt.axisColor,
        'border-bottom': opt.axisWidth + 'px solid ' + opt.axisColor,
        'margin-top': opt.paddingTop,
        left: opt.ticksAreaWidth
    });

    if (axis_2) {
        chart5El.css({
            'border-right': opt.axisWidth + 'px solid ' + opt.axisColor
        });
    }

    let canvas_w = opt.width - opt.ticksAreaWidth - ((axis_2) ? opt.ticksAreaWidth : 0);
    let canvas_h = opt.height - opt.legendfooterHeight - opt.paddingTop;

    chart5El.append('<canvas class="chart5-canvas" id="chart5-' + numCharts + '_hover" width="' + (canvas_w) + '" height="' + (canvas_h) + '"></canvas>');
    let chart3El_hover = $('#chart5-' + numCharts + '_hover');

    drawC = document.getElementById('chart5-' + numCharts + '_hover');

    if (drawC && drawC.getContext) {
        let ctx = drawC.getContext('2d');
        ctx.lineWidth = 2;

        let work_width = (opt.width - opt.ticksAreaWidth - ((axis_2) ? opt.ticksAreaWidth : 0) - opt.startPaddingDrawHorizontal * 2);

        for (let obj of data['axis_1']['items']) {
            let _step = work_width / (obj.values.length - 1);
            let x = opt.startPaddingDrawHorizontal;

            let points_mass = [];

            for (var _v in obj.values) {
                let pos_h = canvas_h - (_v / (Math.ceil(max / 1) * 1) * maxBarHeight);

                points_mass.push({
                    x: x,
                    y: pos_h
                });

                x += _step;
            }

            ctx.strokeStyle = obj.color;
            drawCurve(ctx, points_mass, 0.8);
        }

        if (axis_2) {
            for (let obj of data['axis_2']['items']) {
                let _step = work_width / (obj.values.length - 1);
                let x = opt.startPaddingDrawHorizontal;

                let points_mass = [];

                for (let _v of obj.values) {
                    let pos_h = canvas_h - (_v / (Math.ceil(max2 / 1) * 1) * maxBarHeight2);

                    points_mass.push({
                        x: x,
                        y: pos_h
                    });

                    x += _step;
                }

                ctx.strokeStyle = obj.color;
                drawCurve(ctx, points_mass, 0.8);
            }
        }
    }

    // Function to check if the input is a DOM element
    function isDOM(input) {
        if (typeof HTMLElement === 'object') {
            // Check using W3 DOM2
            return input instanceof HTMLElement;
        } else {
            // Check using duck typing for older browsers
            return input && typeof input === 'object' && input !== null && input.nodeType === 1 && typeof input.nodeName === 'string';
        }
    }

    // Initialize options object
    function initOptions(options) {
        let opt = {
            width: 320,
            height: 320,
            barColors: ['grey'],
            labelColors: ['black'],
            axisColor: 'black',
            axisWidth: 3,
            timeAnimationUpBars: 1400,
            legendfooterHeight: 40,
            ticksAreaWidth: 50,
            ticksFormatNum: false,
            ticksShowHLine: true,
            startPaddingDrawHorizontal: 60, // start | end chart5
            widthSpaceBetweenBars: 40,
            paddingTop: 15,
            topInnerPadding: 20
        };

        // Replace defaults with any selected options
        for (var prop in options) {
            if (opt.hasOwnProperty(prop)) {
                opt[prop] = options[prop];
            }
        }

        return opt;
    }

    function appendTicks(options, ticksEl, prefix_ticks, available_h, max) {
        let step = 10;

        if (max > 1000) {
            step = 1000;
        } else if (max > 100) {
            step = 100;
        }

        if (step == 100 && max < 500) {
            step = 50;
        }

        if (max < 50) {
            step = 5;
        }

        var _hmax = Math.ceil(max / step) * step;

        var tickVal = 0,
            bottom = 0;
        var tickHeight = step * available_h / _hmax;
        var tickEl;
        var fontSize = options.ticksAreaWidth * 0.25;
        var fontSize_3 = fontSize / 4;

        for (let i = 0; i <= _hmax; i += step) {
            var _id = ID();

            ticksEl.append('<div class="chart5-tick" id="chart5-' + numCharts + _id + '-tick-' + i + '"><span>' + prefix_ticks + formatNum(tickVal) + '</span> ' + (options.ticksShowHLine ? '_' : '&nbsp;') + '</div>');
            tickEl = $('#chart5-' + numCharts + _id + '-tick-' + i);
            tickEl.css({
                bottom: bottom - fontSize_3,
                'font-size': fontSize
            });
            tickVal += step;

            if (i != _hmax) {
                bottom += tickHeight;
            }
        }

        return max * available_h / _hmax;
    }

    function appendLabels(opt, labels, labelsEl) {
        let space = (labelsEl.width() - opt.barWidth * labels.length) / (labels.length + 1);
        let left = space;
        let labelEl;
        for (let i = 1; i <= labels.length; i++) {
            // Inside div added for styling purposes
            labelsEl.append('<div class="chart5-label" id="chart5-' + numCharts + '-label-' + i + '"><div>' + labels[i - 1] + '</div>');
            labelEl = $('#chart5-' + numCharts + '-label-' + i);
            if (!opt.labelColors[i - 1]) {
                labelColor = opt.labelColors[0];
            } else {
                labelColor = opt.labelColors[i - 1];
            }
            labelEl.css({
                width: opt.barWidth,
                left: left,
                color: labelColor,
                'font-size': opt.barWidth * 0.2
            });
            left += space + opt.barWidth;
        }
    }


    function ID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    // Format larger numbers so they fit on bars and ticks
    function formatNum(num) {
        if (options.ticksFormatNum == 'int') {
            return parseInt(num).toString();
        }

        if (num >= 100000000000000) {
            return (num / 1000000000000).toPrecision(3).toString() + 'T';
        } else if (num >= 1000000000000) {
            return (num / 1000000000000).toPrecision(2).toString() + 'T';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toPrecision(3).toString() + 'B';
        } else if (num >= 1000000000) {
            return (num / 1000000000).toPrecision(2).toString() + 'B';
        } else if (num >= 100000000) {
            return (num / 1000000).toPrecision(3).toString() + 'M';
        } else if (num >= 1000000) {
            return (num / 1000000).toPrecision(2).toString() + 'M';
        } else if (num >= 10000) {
            return (num / 1000).toPrecision(3).toString() + 'K';
        } else if (num >= 1000) {
            return (num / 1000).toPrecision(2).toString() + 'K';
        } else {
            return num;
        }
    }

    function maxArray(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }

    function minArray(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var min = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return min;
    }

    function drawCurve(ctx, points, tension) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        var t = (tension != null) ? tension : 1;
        for (let i = 0; i < points.length - 1; i++) {
            var p0 = (i > 0) ? points[i - 1] : points[0];
            var p1 = points[i];
            var p2 = points[i + 1];
            var p3 = (i != points.length - 2) ? points[i + 2] : p2;

            var cp1x = p1.x + (p2.x - p0.x) / 6 * t;
            var cp1y = p1.y + (p2.y - p0.y) / 6 * t;

            var cp2x = p2.x - (p3.x - p1.x) / 6 * t;
            var cp2y = p2.y - (p3.y - p1.y) / 6 * t;

            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
        }
        ctx.stroke();
    }

}
