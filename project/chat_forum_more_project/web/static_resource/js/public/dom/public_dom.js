/*6ba4d8ef878f4609*/let oBaseShade = '';/*6ba4d8ef878f4609*/

/*16da63640be0a4c9*/var sBaseShadeId = 'base_shade';/*16da63640be0a4c9*/

/*f0196c4afb85054e*/let sBaseShadeCenterDomClass = 'base_shade_center';
let sBaseShadeCenterSonDomClass = 'base_shade_center_son';
let sBaseShadeCenterSonClass = 'base_shade_center_sons';
let sBaseShadeCenterSonNowClass = 'base_shade_center_son_now';
/*f0196c4afb85054e*/

/*ab201f54fc997f78*/let sNoticeTitleClass = 'notice_head';
let sNoticeBodyClass = 'notice_body';
let sNoticeFootClass = 'notice_foot';
/*ab201f54fc997f78*/

/*605df86f799e4bd9*//**
 *
 * 写notice页面
 *
 */
let bWriteNotice = false;
function writeNotice () {
    if (bWriteNotice) {
        return;
    }
    bWriteNotice = true;

    let a = [
        sNoticeTitleClass,
        sNoticeBodyClass,
        sNoticeFootClass,
    ];

    let s = '';
    for (let i in a) {
        s += '<div class="' + a[i] + '">';
        if (a[i] !== sNoticeBodyClass) {
            s += '<span id="' + a[i] + '_span" class="' + sReLangClass + '"></span>';
        } else {
            s += '<span id="' + a[i] + '_span"></span>';
        }

        s += '</div>';
    }

    noticeDom().innerHTML = s;

    domById(sNoticeTitleClass + '_span').innerHTML = 'ss';
    domById(sNoticeFootClass + '_span').innerHTML = 'ss';

    requires([sFuncJsTag], function () {
        asyn('replaceLang', sReplaceLangIdType, sDomNoticeId);
    });

    requires([sFuncJsTag], function () {
        asyn('bindNoticeFoot');
    });
}/*605df86f799e4bd9*/
/*28f646c3b0eaccc8*//**
 *
 * 绑定提示信息脚步事件
 *
 */
function bindNoticeFoot () {
    // console.log('zzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaaqqqqqqqqqqqqqqqq');
    // console.log(sNoticeFootClass);
    // console.log(oneDomByClass(sNoticeFootClass));
    oneDomByClass(sNoticeFootClass).onclick = function () {
        asyn('hiddenNotice');
    }
}/*28f646c3b0eaccc8*/

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
        // s += '<div id="' + a[i] + '" class="' + sShadeClass + ' ' + sInvisibleClass + '">';
        s += '<div id="' + a[i] + '" class="' + sInvisibleClass + '">';

        s += '<div class="' + sBaseShadeCenterDomClass + '">';
        s += writeLoadAnimation();
        s += '</div>';

        s += '</div>';
    }

    let o = shadeDom();
    o.innerHTML = s;

    requires([sFuncJsTag], function () {
        // replaceClassNameToShow(o);
        asyn('replaceClassNameToShow', o);
    })
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

    let n = Math.ceil(w / l) - 1;

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

    requires([sFuncJsTag], function () {
        // asyn('showShade', o);
        showShade(o);
    });
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

    // asyn('clearShade', o);
    requires([sFuncJsTag], function () {
        // asyn('clearShade', o);
        clearShade(o);
    });
}/*3db2ab832db6559f*/

/*dac55309121d59cf*/let aShades = [];
function showShade (o = false) {
    // if (typeof window['animates'] == 'undefined') {
    //     setTimeoutFunction('showShade', o);
    //     return;
    // }
    // console.log(window['animates']);

    // let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
    // let p2 = new RegExp('\\s*' + sVisibleClass,'gm');
    //
    // let s = o.className;
    // s = s.replace(p1, '');
    // s = s.replace(p2, '');
    //
    // o.className = s ? s + ' ' + sVisibleClass : sVisibleClass;
    replaceClassNameToShow(o);

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
    // if (typeof window['animates'] == 'undefined') {
    //     setTimeoutFunction('clearShade', o);
    //     return;
    // }

    o.style.filter = 'alpha(opacity:' + 100 + ')';
    o.style.opacity = 1;
    o.className += ' ' + sVisibleClass;

    animates(o, {opacity: 0}, iSpeed, function () {
        // let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
        // let p2 = new RegExp('\\s*' + sVisibleClass,'gm');
        //
        // let s = o.className;
        // s = s.replace(p1, '');
        // s = s.replace(p2, '');
        // o.className = s ? s + ' ' + sInvisibleClass : sInvisibleClass;
        replaceClassNameToHidden(o);

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
