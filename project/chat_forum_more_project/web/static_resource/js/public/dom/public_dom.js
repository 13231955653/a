function writePublicDom() {
    // asyn('pubShade');

    asyn('pubHeader');

    asyn('pubBody');

    asyn('pubFooter');

    asyn('pubLeft');

    asyn('pubRight');

    asyn('pubNotice');
}

// function pubShade () {
//     console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmasdas');
//     writePublicShade();
// }
function pubHeader () {
    // if (typeof jQuery == 'undefined') {
    if (!bJquery) {
        setTimeoutFunction('pubHeader');
        console.log('pubHeader jQuery is undefined, so settimeout retry to pubHeader ');
        return;
    }
    console.log('pubHeader jQuery is defined, so will to do ');

    if (typeof window['writeHeader'] == 'undefined') {
        setTimeoutFunction('pubHeader');
        console.log('pubHeader writeHeader is undefined, so settimeout retry to pubHeader ');
        return;
    }
    console.log('pubHeader writeHeader is defined, so will to do ');

    // writeHeader();
    asyn('writeHeader');
}
function pubBody () {
    if (!bJquery) {
    // if (typeof jQuery == 'undefined') {
        setTimeoutFunction('pubBody');
        console.log('pubBody jQuery is undefined, so settimeout retry to pubBody ');
        return;
    }
    console.log('pubBody jQuery is defined, so will to do ');

    if (typeof window['writeBody'] == 'undefined') {
        setTimeoutFunction('pubBody');
        console.log('pubBody writeBody is undefined, so settimeout retry to pubBody ');
        return;
    }
    console.log('pubBody writeBody is defined, so will to do ');

    // writeBody();
    asyn('writeBody');
}
function pubFooter () {
    if (!bJquery) {
    // if (typeof jQuery == 'undefined') {
        setTimeoutFunction('pubFooter');
        console.log('pubFooter jQuery is undefined, so settimeout retry to pubFooter ');
        return;
    }
    console.log('pubFooter jQuery is defined, so will to do ');

    if (typeof window['writeFooter'] == 'undefined') {
        setTimeoutFunction('pubFooter');
        console.log('pubFooter writeFooter is undefined, so settimeout retry to pubFooter ');
        return;
    }
    console.log('pubFooter writeFooter is defined, so will to do ');

    // writeFooter();
    asyn('writeFooter');
}
function pubLeft () {
    if (!bJquery) {
    // if (typeof jQuery == 'undefined') {
        setTimeoutFunction('pubLeft');
        console.log('pubLeft jQuery is undefined, so settimeout retry to pubLeft ');
        return;
    }
    console.log('pubLeft jQuery is defined, so will to do ');

    if (typeof window['writeLeft'] == 'undefined') {
        setTimeoutFunction('pubLeft');
        console.log('pubLeft writeLeft is undefined, so settimeout retry to pubLeft ');
        return;
    }
    console.log('pubLeft writeLeft is defined, so will to do ');

    // writeLeft();
    asyn('writeLeft');
}
function pubRight () {
    if (!bJquery) {
    // if (typeof jQuery == 'undefined') {
        setTimeoutFunction('pubRight');
        console.log('pubRight jQuery is undefined, so settimeout retry to pubRight ');
        return;
    }
    console.log('pubRight jQuery is defined, so will to do ');

    if (typeof window['writeRight'] == 'undefined') {
        setTimeoutFunction('pubRight');
        console.log('pubRight writeRight is undefined, so settimeout retry to pubRight ');
        return;
    }
    console.log('pubRight writeRight is defined, so will to do ');

    // writeRight();
    asyn('writeRight');
}
function pubNotice () {
    if (!bJquery) {
    // if (typeof jQuery == 'undefined') {
        setTimeoutFunction('pubNotice');
        console.log('writeNotice jQuery is undefined, so settimeout retry to writeNotice ');
        return;
    }
    console.log('writeNotice jQuery is defined, so will to do ');

    if (typeof window['writeNotice'] == 'undefined') {
        setTimeoutFunction('pubNotice');
        console.log('writeNotice writeNotice is undefined, so settimeout retry to writeNotice ');
        return;
    }
    console.log('writeNotice writeNotice is defined, so will to do ');

    // writeNotice();
    asyn('writeNotice');
}

// function checkAllreadyWritePublicDom () {
//     return checkExistPublicFootDom() && checkExistPublicHeaderDom() && checkExistPublicBodyDom() && checkExistPublicLeftDom() && checkExistPublicRightDom() && checkExistPublicNoticeDom();
// }

function getPublicFootDom () {
    let oDom = document.getElementById(sPublicFootId);
    return oDom !== null ? oDom : false;
}
// function checkExistPublicFootDom () {
//     return document.getElementById(sPublicFootId) ? true : false;
// }

function getPublicHeaderDom () {
    let oDom = document.getElementById(sPublicHeaderId);
    return oDom !== null ? oDom : false;
}
// function checkExistPublicHeaderDom () {
//     return document.getElementById(sPublicHeaderId) ? true : false;
// }

function getPublicBodyDom () {
    let oDom = document.getElementById(sPublicBodyId);
    return oDom !== null ? oDom : false;
}
// function checkExistPublicBodyDom () {
//     return document.getElementById(sPublicBodyId) ? true : false;
// }


function getPublicLeftDom () {
    let oDom = document.getElementById(sPublicLeftId);
    return oDom !== null ? oDom : false;
}
// function checkExistPublicLeftDom () {
//     return document.getElementById(sPublicLeftId) ? true : false;
// }

function getPublicRightDom () {
    let oDom = document.getElementById(sPublicRightId);
    return oDom !== null ? oDom : false;
}
// function checkExistPublicRightDom () {
//     return document.getElementById(sPublicRightId) ? true : false;
// }

function getPublicNoticeDom () {
    let oDom = document.getElementById(sPublicNoticeId);
    return oDom !== null ? oDom : false;
}
// function checkExistPublicNoticeDom () {
//     return document.getElementById(sPublicNoticeId) ? true : false;
// }

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

// function shade (d = '') {
//     // console.log('===================');
//     // console.log(d);
//     if (!d) {
//         console.log('shade d is null, so no to do ');
//         return;
//     }
//     console.log('shade d is ' + d + ', so will to write shade ');
//
//     if (document.getElementById(d)) {
//         console.log('shade dom ' + d + ' is exist, so not to do ');
//         return;
//     }
//     let f = '';
//     switch (d) {
//         case sBaseShadeId :
//             f = 'writeBaseShade';
//             break;
//         case sIndexShadeId :
//             f = 'writeIndexShade';
//             break;
//         case sPlatformShadeId :
//             f = 'writePlatformShade';
//             break;
//         case sPlatformShadeId :
//             f = 'writePlatformShade';
//             break;
//     }
//     if (!f) {
//         console.log('shade f is null, so no to do ');
//         return;
//     }
//     console.log('shade f is true, so will to write shade ');
//
//     window[f]();
// }
let oShadeFather = '';
function getPublicShadeDom () {
    oShadeFather = oShadeFather ? oShadeFather : document.getElementById(sPublicShadeId);
    return oShadeFather;
}
// getPublicShadeDom();
// function checkExistPublicShadeDom () {
//     return document.getElementById(sPublicShadeId) ? true : false;
// }
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

// function checkExistShade (d = '') {
//     if (!d) {
//         console.log('checkExistShade ' + d + ' is null');
//         return false;
//     }
//
//     return document.getElementById(d);
// }

/**
 *
 * 写遮罩层
 * @param d 遮罩层 id type string
 * @returns {HTMLDivElement}
 */
// function writeShade (d = '') {
//     iShadeBeginZIndex += parseInt(1);
//
//     let o = document.createElement('div');
//     o.id = d;
//     o.className = sShadeClass;
//     o.style.zIndex = iShadeBeginZIndex;
//
//     return o;
// }

/**
 *
 * 添加遮罩层 dom
 *
 * @param d 遮罩层 dom
 */
// function appendShade (d = false) {
//     if (!d) {
//         console.log('appendShade d is null, so no to do ');
//         return;
//     }
//
//     let o = oShadeFather ? oShadeFather : getPublicShadeDom();
//     o.appendChild(d);
// }

// function writeBaseShade () {
//     if (checkExistShade(sBaseShadeId)) {
//         console.log('uuuuuuuuuuuuuuuuuuuuuuuu');
//         console.log('writeIndexShade checkExistShade id ' + sBaseShadeId + ' allready exist, so no write and now to show');
//         console.log('need to show');
//         return;
//     }
//
//     let t = setTimeout(function () {
//         clearTimeout(t);
//
//         appendShade(writeShade(sBaseShadeId));
//     }, 0);
// }


// function writeIndexShade () {
//     if (checkExistShade(sIndexShadeId)) {
//         console.log('writeIndexShade checkExistShade id ' + sIndexShadeId + ' allready exist, so no write and now to show');
//         console.log('need to show');
//         return;
//     }
//
//     appendShade(writeShade(sIndexShadeId));
// }

// function writePlatformShade () {
//     if (checkExistShade(sPlatformShadeId)) {
//         console.log('writePlatformShade checkExistShade id ' + sPlatformShadeId + ' allready exist, so no write and now to show');
//         console.log('need to show');
//         return;
//     }
//
//     appendShade(writeShade(sPlatformShadeId));
// }


/**
 *
 * page 遮罩层
 *
 * @param c 回调函数 function name type string
 */
// function writePageShade (c = false) {
//     if (checkExistShade(sPageShadeId)) {
//         console.log('writePageShade checkExistShade id ' + sPageShadeId + ' allready exist, so no write and now to show');
//
//         let t = setTimeout(function () {
//             clearTimeout(t);
//
//             showPageShade();
//         }, 0);
//         return;
//     }
//
//     let o = writeShade(sPageShadeId);
//     appendShade(o);
//
//     if (c) {
//         window[c]();
//     }
// }






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
// let iClearBaseShadeInterval = 100;
function clearBaseShade () {
    let o = document.getElementById(sBaseShadeId);
    if (!o) {
        console.log('clearBaseShade o is null, so no to do ');
        // let t = setTimeout(function () {
        //     clearTimeout(t);
        //
        //     clearBaseShade();
        // }, iClearBaseShadeInterval);
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

        let t = setTimeout(function () {
            clearTimeout(t);

            writePageShade('writePageShade');
        }, 0);
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

    animates(o, {opacity: 100}, iSpeed);
}
