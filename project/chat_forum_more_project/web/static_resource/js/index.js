// const sUniqueStrPrefix = 'uniquiue';
// const sGuidSplitTag = '-';
// const sUuidSplitTag = '-';
// const sUuidString = '0123456789abcdef';
const sIndividuationUuidTag = '*';
const sUniqueStrSplitTag = '_';
const sRandString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const iIndividuationUniqueStrLength = 1000;
const iIndividuationUniqueStrNumberMin = 0;
const iIndividuationUniqueStrNumberMax = 999999999999999999;
const iIndividuationUniqueStrMinLength = 32;
const iSessionBeforeFormatLength = 32;

const sSessionSplitTag  = '_';
const sSessionSalt  = '__()9789*&^%$sKUYsah98';
let sOldSessionId = false;
let sNewSessionId = false;
const iUpdateSessionMinTime = 1800000;
const iUpdateSessionMaxTime = 5400000;
const iSessionOutTime = 5410;
const sSessionIdSplitLength =8;
const sOldSessionIdCookieKey = 'o_t';
const sNewSessionIdCookieKey = 'n_t';

const sIndexShadeId = 'index_shade';
const sPlatformShadeId = 'platform_shade';
const sPageShadeId = 'page_shade';
let iShadeBeginZIndex = 1000000000;
const sInvisibleClass = 'invisible';
const sVisibleClass = 'gradually_visible';

const sPublicFootId = 'public_footer';
const sPublicHeaderId = 'public_header';
const sPublicBodyId = 'public_body';
const sPublicLeftId = 'public_left';
const sPublicRightId = 'public_right';
const sPublicNoticeId = 'public_notice';
const sPublicShadeId = 'public_shade';
const sFootTag = '_foot';
const sFootLiSuffix = '_li';
const sActiveFootTag = 'foot_active';
const sReLangClass = 're_lang';
const sSettingBodyId = 'setting_body';
const sForumBodyId = 'forum_body';
const sChatBodyId = 'chat_body';
const sFriendBodyId = 'friend_body';

const sReplaceLangIdType = 'id';

const sUrlAddressSignEncodeSalt = '_&*uh124jKzS645s(^$%a87123_';
const sUrlAddressPageKey = 'page';
const sUrlAddressSignKey = 'sign';
const sUrlAddressChangeTimeKey = 'change_time';

const sDefaultPage = 'forum';
const sForumPage = 'forum';
const sChatPage = 'chat';
const sFriendPage = 'friend';
const sSettingPage = 'setting';
const a3 = [];
a3[sForumPage] = "uodateUrlPageArg('" + sForumPage + "')";
a3[sChatPage] = "uodateUrlPageArg('" + sChatPage + "')";
a3[sFriendPage] = "uodateUrlPageArg('" + sFriendPage + "')";
a3[sSettingPage] = "uodateUrlPageArg('" + sSettingPage + "')";
const aFooterAction = a3;

const sDefaultPageHtml = 'index.html';

let bFirstLoad = true; // 新打开窗口

let iWinWidth = 0;
let iWinHeight = 0;

//RSA公钥
const RSA_DEFAULT_PUBLIC = 'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0lPvdk7Kbuxesr97W/rEqEsvhFBM6Uk/9GELq/b8aWyzbO9Zf1Z9St9EqWr7U26t9mQoZOuUQLMu7ijp/AsXOR7ojZIzdJ/QESptMHrlcSmRRHf2nUzeh1SCs8xveKNNuoJjqcGXcoUPzrtrQbtpcgNY3rofkIIi/xdSDDiGVxk8yrkFZIAdPi0w6oUwOedcnp9bosnURR42i7RcEX4/KUkN2pcd26nZGrrMGqOrOmLayx3GWBrRQ6dvBW/fM1a065SUiGlpCaG6lR0P1zRp7RPX/J73b47oaBCoOf8CVMjR5Nhdggduflu5nYVn0GRG8hGDlo0pRL+DwiI6NH6WloOgp4QYyVlczVs6gHYU5oW6AiwD8dp00IYQmJGhh8H9koO4+K1v1BdHvlNx+TcXRCWiqxqrkRAh80hRAvX1Ybhax+eV1ADr1PKR8TlJTUFrCIO9FrC42Hh/JFQITkzGzGFo1ZIfPY60kMsKyG/jGbs969/A4xz9UJaU0WuqRrjZd1HSiGd800FC4tragVPY8fLoIJs21bPuVKRwjRBO061CM6JyODzClUPN8iT20TaASWGQuLlBssZnUWrpU4Hgx1KIFm7reaXsaxsPZGiKkULBrFKeZoxUsnNSKoPBZGqm7dCqCeGSzjEOuvpyNx3gLz3vLPkrPYyw61kWVUxDGBECAwEAAQ==';
//RSA私钥
const RSA_DEFAULT_PRIVATE = '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';
//RSA localstorage 公钥
const RSA_LOCALSTORAGE_PUBLIC = 'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAr60h9IsmDzmyzPgbVxUK3mQI9ZkMocD6v9lHAi2hxEAoadWbVjbA/UDMYY5S6hLTUnq1XqFiPEfnlGxD8djwiOfeOPCs6cClKrCbxUBqtrGZsAbkMHFIEnY00M6Tj907JkVqq8VwGj9KKKNSZcXYhHQ4qGQITShK0gnYDRDfhKL78hM8JM0u8uoGLqpcPkxZYpVplxeEDLf379Es5VFjcf+QHZiGGvZbobzUw9Qx0X1m0xOebuGuG1/wTHCRpVPaGlTVRd261biIVdtYXCmizyNltOKGla3wQdAmnGDbPRy01GgD+ZHx7mdHC26lZ0TSIdIoLFVRryD30PRfha0ZEHqXuvRk12izQgIx29ZUql3Y2a21MiZQTplcbHcAgSShSafiGWGGg5MZXPydMCqFUcZ00Zb8dpiDSNUDvu+THJoi1EOS/7QSMaSC/SRylMN3gshkoNmMjlJhh6O51oH6DV1lk3gxjRyhVKaPL67An+E8IHl+TdkNWfhVi2//omWO1qX41qowu0/28zSPNjTSPd2YMeG8eWH4jvVKCA56/BmHej+DI5f3F79GLhCpole8NuqNQr23NShYyTFkoazkWoWCNpVbQWp/aBx1pFL2HswT1wpe6zFc7t2VQFXmEzRD9KH2J7RIPDLUceITCHaSPz+vu21lDNgHaJDW3TzPKKUCAwEAAQ==';
//RSA localstorage 私钥
const RSA_LOCALSTORAGE_PRIVATE = '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';

const a1 = [];//localstorage 混淆加密
a1['a'] = '一';
a1['b'] = '二';
a1['c'] = '三';
a1['d'] = '四';
a1['e'] = '五';
a1['f'] = '六';
a1['g'] = '七';
a1['h'] = '八';
a1['i'] = '九';
a1['j'] = '零';
a1['k'] = '壹';
a1['l'] = '贰';
a1['m'] = '叁';
a1['n'] = '肆';
a1['o'] = '伍';
a1['p'] = '陆';
a1['q'] = '柒';
a1['r'] = '捌';
a1['s'] = '玖';
a1['t'] = '百';
a1['u'] = '千';
a1['v'] = '万';
a1['w'] = '亿';
a1['x'] = '兆';
a1['y'] = '京';
a1['z'] = '垓';

a1['A'] = '秭';
a1['B'] = '穰';
a1['C'] = '沟';
a1['D'] = '涧';
a1['E'] = '正';
a1['F'] = '载';
a1['G'] = '极';
a1['H'] = '赤';
a1['I'] = '橙';
a1['J'] = '黄';
a1['K'] = '绿';
a1['L'] = '青';
a1['M'] = '蓝';
a1['N'] = '紫';
a1['O'] = '白';
a1['P'] = '黑';
a1['Q'] = '红';
a1['R'] = '黯';
a1['S'] = '赫';
a1['T'] = '靛';
a1['U'] = '黛';
a1['V'] = '丹';
a1['W'] = '朱';
a1['X'] = '彤';
a1['Y'] = '绯';
a1['Z'] = '绛';

a1['='] = '等';
a1['/'] = '斜';

a1['0'] = '东';
a1['1'] = '南';
a1['2'] = '西';
a1['3'] = '北';
a1['4'] = '上';
a1['5'] = '中';
a1['6'] = '下';
a1['7'] = '指';
a1['8'] = '位';
a1['9'] = '向';
const aLocalstorageEncodeConfuseEncode = a1;//localstorage 混淆加密

const sAstrictJumpUrl = 'https://www.baidu.com';

const iSpeed = 300; //动画速度

/**
 *
 * 浏览器尺寸
 *
 */
function winSize() {
    //获取窗口宽度
    if (window.innerWidth) {
        iWinWidth = window.innerWidth;
    }else if ((document.body) && (document.body.clientWidth)) {
        iWinWidth = document.body.clientWidth;
    }

    //获取窗口高度
    if (window.innerHeight) {
        iWinHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        iWinHeight = document.body.clientHeight;
    }

    // //通过深入Document内部对body进行检测，获取窗口大小
    // if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth) {
    //     iWinHeight = document.documentElement.clientHeight;
    //     iWinWidth = document.documentElement.clientWidth;
    // }
}

let bInLoadPageJs = false;
function loadPageJs () {
    if (bInLoadPageJs) {
        console.log('loadPageJs bInLoadPageJs in load, so no to do');
        return ;
    }
    bInLoadPageJs = true;

    // let sPage = getNowPage();
    let j = '';
    switch (getNowPage()) {
        case sForumPage:
            j = sForumJsFile;
            break;
        case sChatPage:
            j = sChatJsFile;
            break;
        case sFriendPage:
            j = sFriendJsFile;
            break;
        case sSettingPage:
            j = sSettingJsFile;
            break;
    }

    if (!j) {
        console.log('loadPageJs j is null, no to do');
        return false;
    }

    if (!checkRequestJsCssLimit('js', 'loadPageJs_' + j)) {
        console.log('loadPageJs checkRequestJsCssLimit loadPageJs_' + j + ', limit, so no to load');
        return false;
    }

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        changeDomFatherOpacity();
    }, 0);

    let t2 = setTimeout(function () {
        clearTimeout(t2);

        writePageShade();
    }, 0);

    let t3 = setTimeout(function () {
        clearTimeout(t3);

        loadJs(j, true, 'afterLoadPageJs');
    }, 0);
}
function afterLoadPageJs () {
    if (typeof window['urlDecode'] == 'undefined') {
        console.log('afterLoadPageJs urlDecode is undefined, so settimtoue retry ');

        setTimeoutFunction('afterLoadPageJs');
        return;
    }
    console.log('afterLoadPageJs urlDecode is defined, so will to do ');

    bInLoadPageJs = false;

    // let sPage = getNowPage();
    let f = document.getElementById(getNowPage() + sFootTag + sFootLiSuffix);
    if (!f) {
        console.log('afterLoadPageJs f is null, no to do');
        return false;
    }

    let o = document.getElementsByClassName(sFootTag);
    if (o.length) {
        let sPreg = new RegExp('\\s+' + sActiveFootTag,'gm');
        for (let i in o) {
            if (!o[i].className) {
                continue;
            }

            o[i].className = o[i].className.toString().replace(sPreg, '');
        }
    }
    f.className += ' ' + sActiveFootTag;

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        changeDomFatherOpacity(true);
    }, 0);

    let t2 = setTimeout(function () {
        clearTimeout(t2);

        repeatedlyPage(getUrlArgs(sUrlAddressPageKey));
    }, 0);
}

function getPublicShadeDom () {
    let o = document.getElementById(sPublicShadeId);
    return o !== null ? o : false;
}
function checkExistPublicShadeDom () {
    return document.getElementById(sPublicShadeId) ? true : false;
}
function writePublicShade () {
    let o = getPublicShadeDom();
    if (o) {
        console.log('writePublicShade public shade is true, so no to do ');

        return true;
    }

    o = document.createElement('div');
    o.id = sPublicShadeId;

    fatherDom().appendChild(o);
}
function shade () {
    if (!checkExistPublicShadeDom()) {
        console.log('shade checkExistPublicShadeDom is false, no shade father dom, will write shade father dom, settimeout retry to write shade ');
        let t1 = setTimeout(function () {
            clearTimeout(t1);

            writePublicShade();
        }, 0);

        let t2 = setTimeout(function () {
            clearTimeout(t2);

            setTimeoutFunction('shade');
        }, 0);
        return;
    }
    console.log('shade checkExistPublicShadeDom is true, will write son shade');

    let t3 = setTimeout(function () {
        clearTimeout(t3);

        writeIndexShade();
    }, 0);

    let t4 = setTimeout(function () {
        clearTimeout(t4);

        writePlatformShade();
    }, 0);

    let t5 = setTimeout(function () {
        clearTimeout(t5);

        writePageShade();
    }, 0);
}
function checkExistShade (d = '') {
    if (!d) {
        console.log('checkExistShade ' + d + ' is null');
        return false;
    }

    return document.getElementById(d);
}
function writeIndexShade () {
    if (checkExistShade(sIndexShadeId)) {
        console.log('writeIndexShade checkExistShade id ' + sIndexShadeId + ' allready exist, so no write and now to show');
        console.log('need to show');
        return;
    }

    appendShade(writeShade(sIndexShadeId));
}
function writePlatformShade () {
    if (checkExistShade(sPlatformShadeId)) {
        console.log('writePlatformShade checkExistShade id ' + sPlatformShadeId + ' allready exist, so no write and now to show');
        console.log('need to show');
        return;
    }

    appendShade(writeShade(sPlatformShadeId));
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
 * page 遮罩层
 *
 * @param c 回调函数 function name type string
 */
function writePageShade (c = false) {
    if (checkExistShade(sPageShadeId)) {
        console.log('writePageShade checkExistShade id ' + sPageShadeId + ' allready exist, so no write and now to show');

        let t = setTimeout(function () {
            clearTimeout(t);

            showPageShade();
        }, 0);
        return;
    }

    let o = writeShade(sPageShadeId);
    appendShade(o);

    if (c) {
        window[c]();
    }
}

/**
 *
 * 写遮罩层
 * @param d 遮罩层 id type string
 * @returns {HTMLDivElement}
 */
function writeShade (d = '') {
    iShadeBeginZIndex += parseInt(1);

    let o = document.createElement('div');
    o.id = d;
    o.className = d;
    o.style.zIndex = iShadeBeginZIndex;

    return o;
}
/**
 *
 * 添加遮罩层 dom
 *
 * @param d 遮罩层 dom
 */
function appendShade (d = false) {
    if (!d) {
        console.log('appendShade d is null, so no to do ');
        return;
    }

    getPublicShadeDom().appendChild(d);
}

function showShade (o = false) {
    if (!o) {
        console.log('showShade o dom is null, so no to do');
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

        setTimeoutFunction('clearShade');
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
/**
 *
 * 清除 未读取到 index js 遮罩层
 *
 */
function clearIndexShade () {
    let o = document.getElementById(sIndexShadeId);
    if (!o) {
        console.log('clearIndexShade o is null, so no to do ');
        return;
    }

    clearShade(o);
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

let bNoticeAstrict = false;
function astrict () {
    if (bNoticeAstrict) {
        return;
    }
    bNoticeAstrict = true;

    if (!isMobile()) {
        alert('The computer side is not enabled yet, will jump to ' + sAstrictJumpUrl);

        illegality();
        return false;
    }

    return true;
}

function sessId () {
    if (typeof window['sessionId'] == 'undefined') {
        console.log('sessId sessionId is undefined, so settimeout retry sessId ');

        setTimeoutFunction('sessId');
        return;
    }
    console.log('sessId sessionId is defined, so to sessionId ');

    sessionId();
}

function baseBegin (bOnload = false) {
    console.log('11111111111');
    if (bOnload) {
        console.log('22222222222');
        sessId();

        console.log('3333333333333333');
        winResize();
    }

    console.log('4444444444444444444');
    if (typeof jQuery == 'undefined') {
        console.log('555555555555555555555');
        if (getNowTime() - iLoadOriginJqueryLastTime > iMaxLoadOriginJqueryWaitTime) {
            console.log('6666666666666666666');
            loadLocalJquery();
        }
    }

    console.log('7777777777777777777');
    afterLoadIndexJs();

    console.log('8888888888888888888');
    if (typeof window['logicBegin'] == 'undefined') {
        console.log('9999999999999999999');
        console.log('baseBegin logicBegin is undefined, so settimeout retry baseBegin');

        setTimeoutFunction('baseBegin');
        return;
    }

    console.log('00000000000000000');
    logicBegin(true);
}

function afterLoadIndexJs () {
    bFirstLoad = false;

    clearIndexShade();
}

function winResize () {
    shade();

    astrict();

    winSize();

    initializeFontSize();
}

window.onload = baseBegin(true);

window.onresize = function () {
    if (!bFirstLoad) {
        console.log('window load but use resize, no use resize function');
        return false;
    }
    console.log('window resize, will do resize function');

    if (aBaseTimer['winResize']) {
        clearTimeout(aBaseTimer['winResize']);
    }

    aBaseTimer['winResize'] = setTimeout(function () {
        winResize();
    }, aTimer['winResize']);
}
