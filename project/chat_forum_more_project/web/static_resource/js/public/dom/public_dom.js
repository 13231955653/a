/**
 *
 * 清除 遮罩层
 *
 * @param o 遮罩层 dom
 */
function clearShade (o = false) {
    if (!o) {
        console.log('clearShade o is null, so no to do ');
        return;
    }
    console.log('clearShade ' + o.id + ' is true, will to clear shade ');

    if (typeof window['animates'] == 'undefined') {
        console.log('clearShade animates is undefined, so settimeout retry clearShade ');

        let t = setTimeout(function () {
            clearTimeout(t);

            setTimeoutFunction('clearShade', o);
        })
        return;
    }

    animates(o, {opacity: 0}, iSpeed, function () {
        let p1 = new RegExp('\\s+' + sInvisibleClass,'gm');
        let p2 = new RegExp('\\s+' + sVisibleClass,'gm');
        o.className = o.className.replace(p1, '');
        o.className = o.className.replace(p2, '');
        o.className += ' ' + sInvisibleClass;

        o.style.zIndex = 0;
    });
}

let oShadeFather = '';
function getPublicShadeDom () {
    oShadeFather = oShadeFather ? oShadeFather : document.getElementById(sPublicShadeId);
    return oShadeFather;
}

let bWriteShade = false;
function writePublicShade () {
    if (bWriteShade) {
        console.log('writePublicShade bWriteShade is true, so no to do ');
        return;
    }
    bWriteShade = true;
    console.log('writePublicShade bWriteShade is false, so will to write shades ');

    let a = [
        sBaseShadeId,
        sIndexShadeId,
        sPlatformShadeId,
        sPageShadeId,
    ];

    let o = document.createDocumentFragment();
    let m = '';
    for (let i in a) {
        m = document.createElement('div');
        m.id = a[i];
        m.className = sShadeClass + ' ' + sInvisibleClass;
        m.style.zIndex = 0;
        if (m) {
            o.appendChild(m);
        }
    }
    getPublicShadeDom().appendChild(o);
}

function showBaseShade () {
    let o = document.getElementById(sBaseShadeId);
    if (!o) {
        console.log('showBaseShade ' + sBaseShadeId + ' shade dom no get, will to settimeout retry showBaseShade ');

        setTimeoutFunction('showBaseShade');
        return;
    }

    showShade(o);
}
/**
 *
 * 清除 未读取到 index js 遮罩层
 *
 */
function clearBaseShade () {
    let o = document.getElementById(sBaseShadeId);
    if (!o) {
        console.log('clearBaseShade o is null, so no to do ');
        setTimeoutFunction('clearBaseShade');
        return;
    }
    console.log('clearBaseShade o is true, so will clear shade ' + sBaseShadeId);

    clearShade(o);
}

function showIndexShade () {
    let o = document.getElementById(sIndexShadeId);
    if (!o) {
        console.log('showIndexShade ' + sIndexShadeId + ' shade dom no get, will to settimeout retry showIndexShade ');

        setTimeoutFunction('showIndexShade');
        return;
    }

    showShade(o);
}
/**
 *
 * 清除 未读取到 index js 遮罩层
 *
 */
function clearIndexShade () {
    let o = document.getElementById(sIndexShadeId);
    if (!o) {
        console.log('clearIndexShade o is null, so will settimeout retry clearIndexShade ');
        setTimeoutFunction('clearIndexShade');
        return;
    }

    clearShade(o);
}

function showPlatformShade () {
    let o = document.getElementById(sPlatformShadeId);
    if (!o) {
        console.log('showPlatformShade ' + sPlatformShadeId + ' shade dom no get, will to settimeout retry showPlatformShade ');

        setTimeoutFunction('showPlatformShade');
        return;
    }

    showShade(o);
}
/**
 *
 * 清除品台遮罩层
 *
 */
function clearPlatformShade () {
    let o = document.getElementById(sPlatformShadeId);
    if (!o) {
        console.log('clearPlatformShade o id null, so no to do ');
        return;
    }

    clearShade(o);
}

function showPageShade () {
    let o = document.getElementById(sPageShadeId);
    if (!o) {
        console.log('showPageShade page shade dom no get, will to write page shade and retry');

        setTimeoutFunction('showPageShade');
        return;
    }

    showShade(o);
}
/**
 *
 * 清除 page 遮罩层
 *
 */
function clearPageShade () {
    let o = document.getElementById(sPageShadeId);
    if (!o) {
        console.log('clearPageShade o is null, so no to do ');

        return;
    }

    clearShade(o);
}

function showShade (o = false) {
    if (!o) {
        console.log('showShade o dom is null, so no to do');
        return;
    }
    if (!o) {
        console.log(o);
        console.log('showShade shade dom no get, will to settimeout retry showShade ');

        setTimeoutFunction('showShade', o);
        return;
    }
    console.log('showShade ' + o.id + ', will to show shade ');

    iShadeBeginZIndex += parseInt(1);

    let p1 = new RegExp('\\s+' + sInvisibleClass,'gm');
    let p2 = new RegExp('\\s+' + sVisibleClass,'gm');
    o.className = o.className.replace(p1, '');
    o.className = o.className.replace(p2, '');

    o.className += ' ' + sVisibleClass;
    o.style.zIndex = iShadeBeginZIndex;

    asyn('domAnimate', o, {opacity: 100});
}

function domAnimate (o, j) {
    if (typeof window['animates'] == 'undefined') {
        console.log('domAnimate animates is undefined, so settimeout retry to do domAnimate ');
        setTimeoutFunction('domAnimate', o, j);
        return;
    }
    console.log('domAnimate animates is defined, so to do domAnimate ');

    animates(o, j, iSpeed);
}

function showDomFather () {
    let h = sOpacityShowClass;
    let g = new RegExp('\\s*' + sOpacityHiddenClass,'gm');
    fatherDom().className = fatherDom().className.toString().replace(g, '');
    fatherDom().className += fatherDom().className.toString().length > 0 ? ' ' + h : h;
}
