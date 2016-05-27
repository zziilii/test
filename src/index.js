/*
 * @Author: zziil
 * @Date:   2016-05-24 19:28:59
 * @Last Modified by:   zziil
 * @Last Modified time: 2016-05-27 21:22:13
 */

'use strict';

var mDatePoint = 1458316800000;

var delay = 500;

var now = new Date(),
    mDate = new Date(mDatePoint),
    lastDay = Math.ceil((now.getTime() - mDate.getTime()) / 86400000);

var ten = Math.floor(lastDay / 10),
    unit = Math.ceil(lastDay % 10);

var tenDeg = 90,
    unitDeg = 90;

var $ten = $('.ten'),
    $unit = $('.unit');

function initDate() {
    setNumber(ten, $ten, 90);
    setTimeout(function() {
        setNumber(unit, $unit, 270);
    }, 100)
}

function setNumber(number, el, deg) {
    var oldNum = parseInt(el.text());

    if (oldNum < number - 1) {
        deg = deg - 180;
        el.css('transform', 'rotateX(' + deg + 'deg)');

        setTimeout(function() {
            el.text(oldNum + 1);
            setNumber(number, el, deg);
        }, delay);
    } else if (oldNum == number - 1) {
        deg = deg - 180;
        el.css('transform', 'rotateX(' + deg + 'deg)');
        setTimeout(function() {
            el.text(oldNum + 1);
            setNumber(number, el, deg);
        }, delay);
    } else if (oldNum == number) {
        el.css('transition', '1.5s');
        if ((deg - 90) % 360 == 0) {
            deg = deg - 90;
        } else {
            deg = deg - 270;
        }
        el.css('transform', 'rotateX(' + deg + 'deg)');
    }
}

function fadeIn(el, delay) {
    if (delay === undefined) {
        delay = '500ms';
    }
    el.css('transition', delay);
    el.css({
        transform: 'translateY(-50px)',
        opacity: '1'
    });
}

function opacityIn(el, delay){
    if (delay === undefined) {
        delay = '500ms';
    }
    el.css('transition', delay);
    el.css({
        opacity: '1'
    });
}
function fadeOut(el, delay) {
    if (delay === undefined) {
        delay = '500ms';
    }
    el.css('transition', delay);
    el.css({
        transform: 'translateY(-50px)',
        opacity: '0'
    });
}

function blurIn(el, delay) {
    if (delay === undefined) {
        delay = '500ms';
    }
    el.css('transition', delay);
    el.css({
        '-webkit-filter': 'blur(10px)',
        opacity: '1'
    });
}

function blurOut(el, delay) {
    if (delay === undefined) {
        delay = '500ms';
    }
    el.css('transition', delay);
    el.css({
        '-webkit-filter': 'blur(10px)',
        opacity: '0'
    });
}

function spreadOut(el, delay) {
    if (delay === undefined) {
        delay = '500ms';
    }
    el.css({
        'transform': 'scaleX(0)',
        opacity: '1'
    });
    el.css('transition', delay);
    el.width();
    el.css({
        'transform': 'scaleX(1)',
        opacity: '1'
    });
}

function addClass(el, className) {
    el.addClass(className)
}
/**
 * [timeLine description]
 * @param  {[type]} list [{callback:fun,argu:[a,b]}]
 * @return {[type]}      [description]
 */
function timeLine(list) {
    for (var i = 0, len = list.length; i < len; i++) {
        doSetTimeout(i, list);
    }
}

function doSetTimeout(i, list) {
    if(list[i].argu === undefined){
        list[i].argu = [];
    }
    setTimeout(function() {
        var el = list[i];
        el.fuc.apply(this, list[i].argu);
    }, list[i].delay);
}

// timeLine([{
//     fuc: fadeOut,
//     argu: [$('.stage'), '500ms'],
//     delay: '1100'
// }, {
//     fuc: initDate,
//     argu: [],
//     delay: '2100'
// }]);
function stage0() {
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-0'), '400ms'],
        delay: '0'
    }, {
        fuc: addClass,
        argu: [$('.base-line'), 'spreadX'],
        delay: '1200'
    },{
        fuc: addClass,
        argu: [$('.you'), 'red'],
        delay: '500'
    },{
        fuc: fadeOut,
        argu: [$('.stage-0'), '400ms'],
        delay: '2600'
    }]);
}

function stage1() {
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-1'), '400ms'],
        delay: '0'
    },{
        fuc: opacityIn,
        argu: [$('.stage-1-1'), '400ms'],
        delay: '400'
    }, {
        fuc: initDate,
        delay: '1400'
    },{
        fuc: opacityIn,
        argu: [$('.stage-1-2'), '1000ms'],
        delay: '7000'
    },{
        fuc: fadeOut,
        argu: [$('.stage-1'), '500ms'],
        delay: '8000'
    }]);
}

function stage1() {
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-1'), '400ms'],
        delay: '0'
    },{
        fuc: opacityIn,
        argu: [$('.stage-1-1'), '400ms'],
        delay: '400'
    }, {
        fuc: initDate,
        delay: '1400'
    },{
        fuc: opacityIn,
        argu: [$('.stage-1-2'), '1000ms'],
        delay: '7000'
    },{
        fuc: fadeOut,
        argu: [$('.stage-1'), '500ms'],
        delay: '8000'
    }]);
}
function stage1() {
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-1'), '400ms'],
        delay: '0'
    },{
        fuc: opacityIn,
        argu: [$('.stage-1-1'), '400ms'],
        delay: '400'
    }, {
        fuc: initDate,
        delay: '1400'
    },{
        fuc: opacityIn,
        argu: [$('.stage-1-2'), '1000ms'],
        delay: '7000'
    },{
        fuc: fadeOut,
        argu: [$('.stage-1'), '500ms'],
        delay: '8000'
    }]);
}
function stage2(){
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-2'), '400ms'],
        delay: '0'
    },{
        fuc: opacityIn,
        argu: [$('.stage-2-1'), '500ms'],
        delay: '800'
    },{
        fuc: opacityIn,
        argu: [$('.stage-2-2'), '500ms'],
        delay: '2000'
    },{
        fuc: opacityIn,
        argu: [$('.stage-2-3'), '500ms'],
        delay: '5000'
    },{
        fuc: opacityIn,
        argu: [$('.stage-2-4'), '1000ms'],
        delay: '6000'
    },{
        fuc: fadeOut,
        argu: [$('.stage-2'), '500ms'],
        delay: '9000'
    }]);
}
function stage3(){
    
}
function stage4(){
    
}
function stage5(){
    
}
function stage6(){
    
}
function stage7(){
    
}
// 主时间线
timeLine([{
    fuc: stage0,
    delay: '200'
}, {
    fuc: stage1,
    delay: '4000'
}, {
    fuc: stage2,
    delay: '13000'
}, {
    fuc: stage3,
    delay: '4000'
}, {
    fuc: stage4,
    delay: '4000'
}]);
