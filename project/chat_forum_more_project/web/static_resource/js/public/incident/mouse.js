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
//手指接触屏幕
document.addEventListener('touchstart', function(e){
    a = e.touches[0].pageX;
    g = e.touches[0].pageY;
}, false);
//手指离开屏幕
document.addEventListener('touchend', function(e) {
    let c, d;
    c = e.changedTouches[0].pageX;
    d = e.changedTouches[0].pageY;
    let direction = getDirection(a, g, c, d);
    switch (direction) {
        case 0:
            // alert("未滑动！");
            break;
        case 1:
            alert("向上！");
            break;
        case 2:
            alert("向下！");
            break;
        case 3:
            alert("向左！");
            break;
        case 4:
            alert("向右！");
            break;
        default:
    }
}, false);
// 检测滑动方向/*1fdbb88c63aaf153*/

/*b9ebf53180071994*/function mouseBegin () {
    console.log('======================mouseBegin');
}/*b9ebf53180071994*/
