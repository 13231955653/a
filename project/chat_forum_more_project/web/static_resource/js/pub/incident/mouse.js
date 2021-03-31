/*1fdbb88c63aaf153*/// 检测滑动方向
let a, g;
//获得角度
function getAngle(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
}
//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(a, g, c, d) {
    let x = c - a;
    let y = d - g;
    let e = 0;
    //如果滑动距离太短
    let h = typeof iFontSize != 'undefined' ? iFontSize : 16;
    if (Math.abs(x) < h && Math.abs(y) < h) {
        return e;
    }
    let f = getAngle(x, y);
    if (f >= -135 && f <= -45) {
        e = 1;
    } else if (f > 45 && f < 135) {
        e = 2;
    } else if ((f >= 135 && f <= 180) || (f >= -180 && f < -135)) {
        e = 3;
    } else if (f >= -45 && f <= 45) {
        e = 4;
    }
    return e;
}
let iTouchStartTime = 0;
let iTouchEndTime = 0;
//手指接触屏幕
document.addEventListener('touchstart', function(e){
    a = e.touches[0].pageX;
    g = e.touches[0].pageY;
    iTouchStartTime = getMillisecondTime();
}, false);
//手指离开屏幕
document.addEventListener('touchend', function(e) {
    let c, d;
    c = e.changedTouches[0].pageX;
    d = e.changedTouches[0].pageY;
    iTouchEndTime = getMillisecondTime();
    let direction = getDirection(a, g, c, d);
    switch (direction) {
        case 0:
            asyn('mouseClick');
            break;
        case 1:
            asyn('mouseTop');
            break;
        case 2:
            asyn('mouseDown');
            break;
        case 3:
            asyn('mouseLeft');
            break;
        case 4:
            asyn('mouseRight');
            break;
        default:
    }
}, false);
// 检测滑动方向/*1fdbb88c63aaf153*/

/*f0d205357b724edc*//**
 *
 * 归零鼠标点击开始结束时间
 *
 */
function makeZeroToutchTime () {
    iTouchEndTime = iTouchStartTime = 0;
}/*f0d205357b724edc*/

/*dbaa3a9198636bd9*//**
 *
 * 鼠标向右滑动
 *
 * p page type string
 */
let iLongShortClickLimit = 1000;
function mouseClick () {
    console.log('点击');

    let a = iTouchEndTime - iTouchStartTime;
    makeZeroToutchTime();
    if (a > iLongShortClickLimit) {
        console.log('长按');
        requires([sFuncJsTag], function () {
            let p = getNowPage();

            window[p + 'LongClick']();
        });

        return;
    }
    //
    // console.log('短按');
    // requires([sFuncJsTag], function () {
    //     let p = getNowPage();
    //
    //     window[p + 'ShortClick']();
    // });
    // return;
}/*dbaa3a9198636bd9*/
/*dbaa3a9198636bd9*//**
 *
 * 鼠标向右滑动
 *
 * p page type string
 */
function mouseRight (p = '') {
    console.log('向右');
    requires([sFuncJsTag], function () {
        let p = getNowPage();

        window[p + 'Right']();
    });
}/*dbaa3a9198636bd9*/
/*2df7d865a656d6ed*//**
 *
 * 鼠标向左滑动
 *
 * p page type string
 */
function mouseLeft (p = '') {
    console.log('向左');
    requires([sFuncJsTag], function () {
        let p = getNowPage();

        window[p + 'Left']();
    });
}/*2df7d865a656d6ed*/
/*b2d3ec5a93497094*//**
 *
 * 鼠标向下滑动
 *
 * p page type string
 */
function mouseDown (p = '') {
    console.log('向下');
    requires([sFuncJsTag], function () {
        let p = getNowPage();

        window[p + 'Down']();
    });
}/*b2d3ec5a93497094*/
/*928fab2ec727b4bf*//**
 *
 * 鼠标向上滑动
 *
 * p page type string
 */
function mouseTop (p = '') {
    console.log('向上');
    requires([sFuncJsTag], function () {
        let p = getNowPage();

        window[p + 'Top']();
    });
}/*928fab2ec727b4bf*/

/*b9ebf53180071994*/function mouseBegin () {
    console.log('======================mouseBegin');
}/*b9ebf53180071994*/
