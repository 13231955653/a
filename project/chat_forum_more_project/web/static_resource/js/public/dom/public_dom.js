let oBaseShade = '';
// let oIndexShade = '';
// let oPlatformShade = '';
// let oPageShade = '';

var sBaseShadeId = 'base_shade';
// var sIndexShadeId = 'index_shade';
// var sPlatformShadeId = 'platform_shade';
// var sPageShadeId = 'page_shade';

let bWriteShade = false;
function writeShades () {
    if (bWriteShade) {
        return;
    }
    bWriteShade = true;

    let a = [
        sBaseShadeId,
        // sIndexShadeId,
        // sPlatformShadeId,
        // sPageShadeId,
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
    shadeDom().appendChild(o);
}
function baseShades () {
    oBaseShade = oBaseShade ? oBaseShade : domById(sBaseShadeId);
    return oBaseShade;
}
// function indexShade () {
//     oIndexShade = oIndexShade ? oIndexShade : domById(sIndexShadeId);
//     return oIndexShade;
// }
// function platformShade () {
//     oPlatformShade = oPlatformShade ? oPlatformShade : domById(sPlatformShadeId);
//     return oPlatformShade;
// }
// function pageShade () {
//     oPageShade = oPageShade ? oPageShade : domById(sPageShadeId);
//     return oPageShade;
// }

function showBaseShade () {
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
}

// function showIndexShade () {
//     if (aShades[sIndexShadeId]) {
//         setTimeoutFunction('showIndexShade');
//         return;
//     }
//
//     let o = indexShade();
//     if (!o) {
//         setTimeoutFunction('showIndexShade');
//         return;
//     }
//
//     asyn('showShade', o);
// }
// /**
//  *
//  * 清除 未读取到 index js 遮罩层
//  *
//  */
// function clearIndexShade () {
//     if (!aShades[sIndexShadeId]) {
//         setTimeoutFunction('clearIndexShade');
//         return;
//     }
//
//     let o = indexShade();
//     if (!o) {
//         setTimeoutFunction('clearIndexShade');
//         return;
//     }
//
//     asyn('clearShade', o);
// }

// function showPlatformShade () {
//     if (aShades[sPlatformShadeId]) {
//         setTimeoutFunction('showPlatformShade');
//         return;
//     }
//
//     let o = platformShade();
//     if (!o) {
//         setTimeoutFunction('showPlatformShade');
//         return;
//     }
//
//     asyn('showShade', o);
// }
// /**
//  *
//  * 清除品台遮罩层
//  *
//  */
// function clearPlatformShade () {
//     if (!aShades[sPlatformShadeId]) {
//         setTimeoutFunction('clearPlatformShade');
//         return;
//     }
//
//     let o = platformShade();
//     if (!o) {
//         return;
//     }
//
//     asyn('clearShade', o);
// }

// function showPageShade () {
//     if (aShades[sPageShadeId]) {
//         setTimeoutFunction('showPageShade');
//         return;
//     }
//
//     let o = pageShade();
//     if (!o) {
//         setTimeoutFunction('showPageShade');
//         return;
//     }
//
//     asyn('showShade', o);
// }
// /**
//  *
//  * 清除 page 遮罩层
//  *
//  */
// function clearPageShade () {
//     if (!aShades[sPageShadeId]) {
//         setTimeoutFunction('clearPageShade');
//         return;
//     }
//
//     let o = pageShade();
//     if (!o) {
//         return;
//     }
//
//     asyn('clearShade', o);
// }

let aShades = [];
// aShades[sBaseShadeId] = false;
// aShades[sIndexShadeId] = false;
// aShades[sPlatformShadeId] = false;
// aShades[sPageShadeId] = false;
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
    });
}

function domBegin () {
    console.log('444444444444444444444domBegin');
}
