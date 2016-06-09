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
        setNumber(unit, $unit, 90);
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
function opacityOut(el, delay){
    if (delay === undefined) {
        delay = '500ms';
    }
    el.css('transition', delay);
    el.css({
        opacity: '0'
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
        delay: '700'
    }, {
        fuc: initDate,
        delay: '1700'
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
        delay: '4500'
    },{
        fuc: opacityIn,
        argu: [$('.stage-2-4'), '1000ms'],
        delay: '5500'
    },{
        fuc: fadeOut,
        argu: [$('.stage-2'), '500ms'],
        delay: '8500'
    }]);
}
function stage3(){
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-3'), '400ms'],
        delay: '0'
    },{
        fuc: opacityIn,
        argu: [$('.stage-3-1'), '500ms'],
        delay: '800'
    },{
        fuc: opacityIn,
        argu: [$('.stage-3-2'), '500ms'],
        delay: '2000'
    },{
        fuc: opacityIn,
        argu: [$('.stage-3-3'), '500ms'],
        delay: '3000'
    },{
        fuc: opacityIn,
        argu: [$('.stage-3-4'), '1000ms'],
        delay: '4000'
    },{
        fuc: opacityIn,
        argu: [$('.stage-3-5'), '700ms'],
        delay: '6000'
    },{
        fuc: fadeOut,
        argu: [$('.stage-3'), '500ms'],
        delay: '8000'
    }]);
}
function stage4(){
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-4'), '400ms'],
        delay: '0'
    },{
        fuc: opacityIn,
        argu: [$('.stage-4-1'), '500ms'],
        delay: '800'
    },{
        fuc: opacityIn,
        argu: [$('.stage-4-2'), '500ms'],
        delay: '2000'
    },{
        fuc: opacityIn,
        argu: [$('.stage-4-3'), '500ms'],
        delay: '2100'
    },{
        fuc: opacityIn,
        argu: [$('.stage-4-4'), '500ms'],
        delay: '3500'
    },{
        fuc: opacityIn,
        argu: [$('.stage-4-5'), '500ms'],
        delay: '4000'
    },{
        fuc: opacityOut,
        argu: [$('.stage-4-6'), '100ms'],
        delay: '4000'
    },{
        fuc: addClass,
        argu: [$('.stage-4-5'), 'pulse'],
        delay: '4400'
    },{
        fuc: addClass,
        argu: [$('.stage-4-5'), 'animated'],
        delay: '4400'
    },{
        fuc: fadeOut,
        argu: [$('.stage-4'), '500ms'],
        delay: '5500'
    }]);
}
function stage5(){
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-5'), '400ms'],
        delay: '0'
    },{
        fuc: opacityIn,
        argu: [$('.stage-5-1'), '500ms'],
        delay: '800'
    },{
        fuc: opacityIn,
        argu: [$('.stage-5-2'), '500ms'],
        delay: '2000'
    },{
        fuc: opacityIn,
        argu: [$('.stage-5-3'), '500ms'],
        delay: '3000'
    },{
        fuc: opacityIn,
        argu: [$('.stage-5-4'), '1000ms'],
        delay: '4000'
    },{
        fuc: opacityIn,
        argu: [$('.stage-5-5'), '700ms'],
        delay: '6000'
    },{
        fuc: fadeOut,
        argu: [$('.stage-5'), '500ms'],
        delay: '8000'
    }]);
}
function stage6(){
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-6'), '400ms'],
        delay: '0'
    },{
        fuc: addClass,
        argu: [$('.stage-6-3'), 'rollIn'],
        delay: '1000'
    },{
        fuc: addClass,
        argu: [$('.stage-6-4'), 'rollIn'],
        delay: '1400'
    },{
        fuc: addClass,
        argu: [$('.stage-6-5'), 'rollIn'],
        delay: '1600'
    },{
        fuc: opacityIn,
        argu: [$('.stage-6-6'), '500ms'],
        delay: '2600'
    },{
        fuc: fadeOut,
        argu: [$('.stage-6'), '500ms'],
        delay: '6000'
    }]);
}
function stage7(){
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-7'), '400ms'],
        delay: '0'
    },{
        fuc: function () {
            $('body').css('background', '#333');
        },
        delay: '1000'
    },{
        fuc: opacityIn,
        argu: [$('.stage-7-1'), '500ms'],
        delay: '400'
    },{
        fuc: opacityIn,
        argu: [$('.stage-7-2'), '500ms'],
        delay: '2000'
    },{
        fuc: fadeOut,
        argu: [$('.stage-7'), '500ms'],
        delay: '4000'
    }]);
}
function stage8(){
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-8'), '400ms'],
        delay: '0'
    },{
        fuc: opacityIn,
        argu: [$('.stage-8-1'), '500ms'],
        delay: '1000'
    },{
        fuc: opacityOut,
        argu: [$('.stage-8-1'), '500ms'],
        delay: '2000'
    },{
        fuc: opacityOut,
        argu: [$('.stage-8-0'), '500ms'],
        delay: '2000'
    },{
        fuc: fadeIn,
        argu: [$('.stage-8-2'), '500ms'],
        delay: '2500'
    },{
        fuc: fadeIn,
        argu: [$('.stage-8-3'), '500ms'],
        delay: '2500'
    }]);
}
function  stageX () {
    timeLine([{
        fuc: fadeIn,
        argu: [$('.stage-X'), '400ms'],
        delay: '0'
    },{
        fuc: fadeOut,
        argu: [$('.stage-X'), '500ms'],
        delay: '15000'
    }]);
}
// 主时间线
timeLine([{
    fuc: stage0,
    delay: '200'
},{
    fuc: stageX,
    delay: '4000'
}, {
    fuc: stage1,
    delay: '24000'
}, {
    fuc: stage2,
    delay: '33000'
}, {
    fuc: stage3,
    delay: '42000'
}, {
    fuc: stage4,
    delay: '51000'
}, {
    fuc: stage5,
    delay: '57000'
}, {
    fuc: stage6,
    delay: '66000'
}, {
    fuc: stage7,
    delay: '73000'
}, {
    fuc: stage8,
    delay: '88000'
}]);
// timeLine( [{
//     fuc: stage5,
//     delay: '10'
// }]);
