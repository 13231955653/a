let oShadeFather = '';
function getPublicShadeDom () {
    oShadeFather = oShadeFather ? oShadeFather : document.getElementById(sPublicShadeId);
    return oShadeFather;
}

let oBaseShade = '';
let oIndexShade = '';
let oPlatformShade = '';
let oPageShade = '';
let bWriteShade = false;
function writePublicShade () {
    if (bWriteShade) {
        console.log('writePublicShade bWriteShade is true, so no to do ');
        return;
    }
    bWriteShade = true;

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
        if (m) {
            o.appendChild(m);
        }
    }
    asyn('asynAppendShade', o);
}
function asynAppendShade (o) {
    getPublicShadeDom().appendChild(o);
}
function baseShades () {
    oBaseShade = oBaseShade ? oBaseShade : domById(sBaseShadeId);
    return oBaseShade;
}
function indexShade () {
    oIndexShade = oIndexShade ? oIndexShade : domById(sIndexShadeId);
    return oIndexShade;
}
function platformShade () {
    oPlatformShade = oPlatformShade ? oPlatformShade : domById(sPlatformShadeId);
    return oPlatformShade;
}
function pageShade () {
    oPageShade = oPageShade ? oPageShade : domById(sPageShadeId);
    return oPageShade;
}

function showBaseShade () {
    if (aShades[sBaseShadeId]) {
        console.log('!!!!!!!!!!!!!in show base shade, settimeout retry to do showBaseShade ');
        setTimeoutFunction('showBaseShade');
        return;
    }

    let o = baseShades();
    if (!o) {
        console.log('showBaseShade ' + sBaseShadeId + ' shade dom no get, will to settimeout retry showBaseShade ');

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
        console.log('!!!!!!!!!!!!!in clear base shade, settimeout retry to do clearBaseShade ');
        setTimeoutFunction('clearBaseShade');
        return;
    }

    let o = baseShades();
    if (!o) {
        console.log('clearBaseShade o is null, so no to do ');
        setTimeoutFunction('clearBaseShade');
        return;
    }

    asyn('clearShade', o);
}

function showIndexShade () {
    if (aShades[sIndexShadeId]) {
        console.log('!!!!!!!!!!!!!in show index shade, settimeout retry to do showIndexShade ');
        setTimeoutFunction('showIndexShade');
        return;
    }

    let o = indexShade();
    if (!o) {
        console.log('showIndexShade ' + sIndexShadeId + ' shade dom no get, will to settimeout retry showIndexShade ');

        setTimeoutFunction('showIndexShade');
        return;
    }

    asyn('showShade', o);
}
/**
 *
 * 清除 未读取到 index js 遮罩层
 *
 */
function clearIndexShade () {
    if (!aShades[sIndexShadeId]) {
        console.log('!!!!!!!!!!!!!in clear index shade, settimeout retry to do clearIndexShade ');
        setTimeoutFunction('clearIndexShade');
        return;
    }

    let o = indexShade();
    if (!o) {
        console.log('clearIndexShade o is null, so will settimeout retry clearIndexShade ');
        setTimeoutFunction('clearIndexShade');
        return;
    }

    asyn('clearShade', o);
}

function showPlatformShade () {
    if (aShades[sIndexShadeId]) {
        console.log('!!!!!!!!!!!!!in show platform shade, settimeout retry to do showPlatformShade ');
        setTimeoutFunction('showPlatformShade');
        return;
    }

    let o = platformShade();
    if (!o) {
        console.log('showPlatformShade ' + sPlatformShadeId + ' shade dom no get, will to settimeout retry showPlatformShade ');

        setTimeoutFunction('showPlatformShade');
        return;
    }

    asyn('showShade', o);
}
/**
 *
 * 清除品台遮罩层
 *
 */
function clearPlatformShade () {
    if (!aShades[sPlatformShadeId]) {
        console.log('!!!!!!!!!!!!!in clear platform shade, settimeout retry to do clearPlatformShade ');
        setTimeoutFunction('clearPlatformShade');
        return;
    }

    let o = platformShade();
    if (!o) {
        console.log('clearPlatformShade o id null, so no to do, meybe error ');
        return;
    }

    asyn('clearShade', o);
}

function showPageShade () {
    if (aShades[sPlatformShadeId]) {
        console.log('!!!!!!!!!!!!!in show page shade, settimeout retry to do showPageShade ');
        setTimeoutFunction('showPageShade');
        return;
    }

    let o = pageShade();
    if (!o) {
        console.log('showPageShade page shade dom no get, will to write page shade and retry');

        setTimeoutFunction('showPageShade');
        return;
    }

    asyn('showShade', o);
}
/**
 *
 * 清除 page 遮罩层
 *
 */
function clearPageShade () {
    if (!aShades[sPlatformShadeId]) {
        console.log('!!!!!!!!!!!!!in clear page shade, settimeout retry to do clearPageShade ');
        setTimeoutFunction('clearPageShade');
        return;
    }

    let o = pageShade();
    if (!o) {
        console.log('clearPageShade o is null, so no to do, meybe error ');

        return;
    }

    asyn('clearShade', o);
}

let aShades = [];
aShades[sBaseShadeId] = false;
aShades[sIndexShadeId] = false;
aShades[sPlatformShadeId] = false;
aShades[sPageShadeId] = false;
function showShade (o = false) {
    // if (!o) {
    //     console.log('showShade o dom is null, so no to do');
    //     return;
    // }
    // afterShowShade(true, o.id);

    if (typeof window['animates'] == 'undefined') {
        console.log('showShade animates is undefined, so settimeout retry to do showShade ');
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
    o.style.opacity = 0 / 100;

    animates(o, {opacity: 100}, iSpeed, function () {
        // afterShowShade(false, o.id);
        aShades[o.id] = true;
    });
}
// let bInShowBaseShade = false;
// let bInClearBaseShade = false;
// let bInShowIndexShade = false;
// let bInClearIndexShade = false;
// let bInShowPlatformShade = false;
// let bInClearPlatformShade = false;
// let bInShowPageShade = false;
// let bInClearPageShade = false;
// function afterShowShade (s, d) {
//     switch (d) {
//         case sBaseShadeId :
//             if (s) {
//                 bInShowBaseShade = true;
//             } else {
//                 bInClearBaseShade = false;
//             }
//             break;
//         case sIndexShadeId :
//             if (s) {
//                 bInShowIndexShade = true;
//             } else {
//                 bInClearIndexShade = false;
//             }
//             break;
//         case sPlatformShadeId :
//             if (s) {
//                 bInShowPlatformShade = true;
//             } else {
//                 bInClearPlatformShade = false;
//             }
//             break;
//         case sPageShadeId :
//             if (s) {
//                 bInShowPageShade = true;
//             } else {
//                 bInClearPageShade = false;
//             }
//             break;
//     }
// }
/**
 *
 * 清除 遮罩层
 *
 * @param o 遮罩层 dom
 */
function clearShade (o = false) {
    // if (!o) {
    //     console.log('clearShade o is null, so no to do ');
    //     return;
    // }
    // afterShowShade(false, o.id);

    if (typeof window['animates'] == 'undefined') {
        console.log('clearShade animates is undefined, so settimeout retry clearShade ');
        setTimeoutFunction('clearShade', o);
        return;
    }

    o.style.filter = 'alpha(opacity:' + 100 + ')';
    o.style.opacity = 100 / 100;
    o.className += ' ' + sVisibleClass;

    animates(o, {opacity: 0}, iSpeed, function () {
        let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
        let p2 = new RegExp('\\s*' + sVisibleClass,'gm');

        let s = o.className;
        s = s.replace(p1, '');
        s = s.replace(p2, '');
        o.className = s ? s + ' ' + sInvisibleClass : sInvisibleClass;

        aShades[o.id] = false;
        // afterShowShade(true, o.id);
    });
}

// function showDomFather () {
//     let h = sOpacityShowClass;
//     let g = new RegExp('\\s*' + sOpacityHiddenClass,'gm');
//     fatherDom().className = fatherDom().className.toString().replace(g, '');
//     fatherDom().className += fatherDom().className.toString().length > 0 ? ' ' + h : h;
// }
