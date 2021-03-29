/*6ba4d8ef878f4609*/let oBaseShade = '';/*6ba4d8ef878f4609*/

/*16da63640be0a4c9*/var sBaseShadeId = 'base_shade';/*16da63640be0a4c9*/

/*f0196c4afb85054e*/let sBaseShadeCenterDomClass = 'base_shade_center';
let sBaseShadeCenterSonDomClass = 'base_shade_center_son';
let sBaseShadeCenterSonClass = 'base_shade_center_sons';
let sBaseShadeCenterSonNowClass = 'base_shade_center_son_now';
/*f0196c4afb85054e*/

/*4de1e35a389a1e25*/let bWriteShade = false;
function writeShades () {
    if (bWriteShade) {
        return;
    }
    bWriteShade = true;

    let a = [
        sBaseShadeId,
    ];

    let s = '';
    for (let i in a) {
        s += '<div id="' + a[i] + '" class="' + sShadeClass + ' ' + sInvisibleClass + '">';

        s += '<div class="' + sBaseShadeCenterDomClass + '">';
        s += writeLoadAnimation();
        s += '</div>';

        s += '</div>';
    }

    shadeDom().innerHTML = s;
}
function baseShades () {
    oBaseShade = oBaseShade ? oBaseShade : domById(sBaseShadeId);
    return oBaseShade;
}/*4de1e35a389a1e25*/

/*4de1e35a389a1e25*//**
 *
 * 读取等待条
 *
 */
function writeLoadAnimation () {
    if (!iWinWidth) {
        winSize();
    }

    let z = iFontSize;

    let w = parseInt(iWinWidth) - parseInt(z * 2);

    let m = parseInt(z * 0.5);
    let l = parseInt(z * 1.5) + m;

    let n = Math.ceil(w / l);

    let i = 0;
    let s = '<div class="' + sBaseShadeCenterSonDomClass + '" style="width:' + (l * n - m)  + 'px;">';
    for (i; i < n; i++) {
        s += '<span class="' + sBaseShadeCenterSonClass + '"></span>';
    }
    s += '</div>';

    return s;
}/*4de1e35a389a1e25*/

/*3db2ab832db6559f*/function showBaseShade () {
    if (aShades[sBaseShadeId]) {
        setTimeoutFunction('showBaseShade');
        return;
    }

    let o = baseShades();
    if (!o) {
        setTimeoutFunction('showBaseShade');
        return;
    }

    asyn('showShade', o);
}
/**
 *
 * 清除 未读取到 index js 遮罩层
 *
 */
function clearBaseShade () {
    if (!aShades[sBaseShadeId]) {
        setTimeoutFunction('clearBaseShade');
        return;
    }

    let o = baseShades();
    if (!o) {
        setTimeoutFunction('clearBaseShade');
        return;
    }

    asyn('clearShade', o);
}/*3db2ab832db6559f*/

/*dac55309121d59cf*/let aShades = [];
function showShade (o = false) {
    if (typeof window['animates'] == 'undefined') {
        setTimeoutFunction('showShade', o);
        return;
    }

    let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
    let p2 = new RegExp('\\s*' + sVisibleClass,'gm');

    let s = o.className;
    s = s.replace(p1, '');
    s = s.replace(p2, '');

    o.className = s ? s + ' ' + sVisibleClass : sVisibleClass;

    o.style.filter = 'alpha(opacity:' + 0 + ')';
    o.style.opacity = 0;

    animates(o, {opacity: 100}, iSpeed, function () {
        aShades[o.id] = true;

        asyn('showShades', o.id);
    });
}
/**
 *
 * 清除 遮罩层
 *
 * @param o 遮罩层 dom
 */
function clearShade (o = false) {
    if (typeof window['animates'] == 'undefined') {
        setTimeoutFunction('clearShade', o);
        return;
    }

    o.style.filter = 'alpha(opacity:' + 100 + ')';
    o.style.opacity = 1;
    o.className += ' ' + sVisibleClass;

    animates(o, {opacity: 0}, iSpeed, function () {
        let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
        let p2 = new RegExp('\\s*' + sVisibleClass,'gm');

        let s = o.className;
        s = s.replace(p1, '');
        s = s.replace(p2, '');
        o.className = s ? s + ' ' + sInvisibleClass : sInvisibleClass;

        aShades[o.id] = false;

        asyn('clearShades', o.id);
    });
}/*dac55309121d59cf*/
/*b60da723c82a7f1e*//**
 *
 * 根据显示的遮罩层不同显示不同遮罩
 *
 * @param d
 */
function clearShades (d) {
    switch (d) {
        case sBaseShadeId :
            bTimeOutBaseShade = false;
            break;
    }
}/*b60da723c82a7f1e*/
/*9c98598f92998834*//**
 *
 * 根据显示的遮罩层不同显示不同遮罩
 *
 * @param d
 */
function showShades (d) {
    switch (d) {
        case sBaseShadeId :
            requires([sFuncJsTag], function () {
                asyn('baseShade');
            });
            break;
    }
}/*9c98598f92998834*/
/*97da65db36a14a6e*//**
 *
 * 展示 base shade
 *
 */
function baseShade () {
    let o = domByClass(sBaseShadeCenterSonClass);
    if (!o) {
        return;
    }

    let l = o.length;

    iNowBaseShadeTag = 0;
    asyn('timeOutBaseShade', o, l);
}
/**
 *
 * 定时器展示shade
 *
 * @param o shade 对象 type shade dom array
 * @param l shade dom 长度
 * @param b 是否第一次
 */
let iNowBaseShadeTag = 0;
let iTimeOutBaseShadeTime = 180;
let bTimeOutBaseShade = true;
function timeOutBaseShade (o, l) {
    if (!bTimeOutBaseShade) {
        return;
    }

    let n = sBaseShadeCenterSonNowClass;
    if (typeof jQuery != 'undefined') {
        $(o).removeClass(n);
        $(o[iNowBaseShadeTag % l]).addClass(n);
    } else {
        let g = new RegExp('\s+');
        for (let i in o) {
            o[i].className = o[i].className.replace(n, '').replace(g, ' ');
        }
        o[iNowBaseShadeTag].className = o[iNowBaseShadeTag].className + ' ' + n;
    }

    iNowBaseShadeTag += parseInt(1);
    let t = setTimeout(function () {
        clearTimeout(t);

        timeOutBaseShade (o, l, false);
    }, iTimeOutBaseShadeTime);
}/*97da65db36a14a6e*/

/*baee8d2085edcee0*/function domBegin () {
    console.log('444444444444444444444domBegin');
}/*baee8d2085edcee0*/
