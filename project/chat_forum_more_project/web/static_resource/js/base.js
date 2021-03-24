const sIndividuationUuidTag = '*';
const sUniqueStrSplitTag = '_';
const sRandString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const iIndividuationUniqueStrLength = 1000;
const iIndividuationUniqueStrNumberMin = 0;
const iIndividuationUniqueStrNumberMax = 999999999999999999;
const iIndividuationUniqueStrMinLength = 32;

// const iSessionBeforeFormatLength = 32;
// const sSessionSplitTag  = '_';
// const sSessionSalt  = '__()9789*&^%$sKUYsah98';
// let sOldSessionId = '';
// let sNewSessionId = '';
// const iUpdateSessionMinTime = 1800000;
// const iUpdateSessionMaxTime = 5400000;
// const iSessionOutTime = 5410;
// const sSessionIdSplitLength =8;
// const sOldSessionIdStorageKey = 'old_session_id';
// const sNewSessionIdStorageKey = 'new_session_id';

//url-------------
const sUrlAddressSignEncodeSalt = '_&*uh124jKzS645s(^$%a87123_';
const sUrlAddressPageKey = 'page';
const sUrlAddressSignKey = 'sign';
const sUrlAddressChangeTimeKey = 'change_time';

const sLangTitlePostfix = '_title';
//url===================

//时间相关---------------------
const iNoticeTimeLimit = 3600000;
//时间相关=======================

//class id tag 相关----------------
const sBaseShadeId = 'base_shade';
const sIndexShadeId = 'index_shade';
const sPlatformShadeId = 'platform_shade';
const sPageShadeId = 'page_shade';

const sForumBodyId = 'forum_body';
const sChatBodyId = 'chat_body';
const sFriendBodyId = 'friend_body';
const sSettingBodyId = 'setting_body';
const sAboutMeBodyId = 'about_me_body';

const sDefaultPage = 'forum';
const sForumPage = 'forum';
const sChatPage = 'chat';
const sFriendPage = 'friend';
const sAboutMePage = 'about_me';
const sSettingPage = 'setting';
const sDefaultPageHtml = 'index.html';

const sFootTag = '_foot';
const sFootLiSuffix = '_li';
const sActiveFootTag = 'foot_active';

const sReLangClass = 're_lang';
const sReplaceLangIdType = 'id';

const sShadeClass = 'shades';
//class id tag 相关====================

//动画相关-------------------
const iSpeed = 150; //动画速度
//动画相关==========================

//尺寸相关----------------
//尺寸相关============

/**
 *
 * 引入页面js文件
 *
 * @type {boolean}
 */
let bInLoadPageJs = false;
let sPageNow = '';
function loadPageJs () {
    if (bInLoadPageJs) {
        return ;
    }
    bInLoadPageJs = true;

    asyn('showPageShade');

    let j = '';
    sPageNow = getNowPage();
    switch (sPageNow) {
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
        case sAboutMePage:
            j = sAboutMeJsFile;
            break;
    }

    if (!j) {
        return false;
    }

    if (!checkRequestJsCssLimit('js', 'loadPageJs_' + j)) {
        return false;
    }

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        changeDomFatherOpacity();
    }, 0);

    let t3 = setTimeout(function () {
        clearTimeout(t3);

        initStaticResource(j, 'js', 'afterLoadPageJs');
    }, 0);
}
function afterLoadPageJs () {
    if (typeof window['urlDecode'] == 'undefined') {
        setTimeoutFunction('afterLoadPageJs');
        return;
    }

    bInLoadPageJs = false;

    asyn(sPageNow + 'Begin');

    asyn('updateActiveFooter');
}

/**
 *
 * 检查用户登录时间
 *
 */
function checkUseTime () {
    if (getSecondTime() - iBeginTime > iNoticeTimeLimit) {
        iBeginTime = getSecondTime();

        showUseTimeLimitNotice();
    }

    setTimeoutFunction('checkUseTime');
}
function showUseTimeLimitNotice () {
    if (typeof aLang == 'undefined') {
        setTimeoutFunction('showUseTimeLimitNotice');
        return;
    }

    alert(aLang['use_time_out_limit']);
}

// /**
//  *
//  * 生成 session id
//  *
//  * @returns {boolean}
//  */
// function makeSessionid () {
//     let s = individuationUuid();
//     if (!s) {
//         setTimeoutFunction('makeSessionid');
//         return;
//     }
//
//     let n = setSessionIdFormat(s);
//     if (!n) {
//         setTimeoutFunction('makeSessionid');
//         return;
//     }
//
//     sOldSessionId = sNewSessionId ? sNewSessionId : sOldSessionId;
//     sNewSessionId = n;
//
//     if (sNewSessionId) {
//         cacheSessionId();
//         return;
//     }
//
//     setTimeoutFunction('makeSessionid');
// }
/**
 *
 * 生成自定义 uuid
 *
 * @returns {string|boolean}
 */
function individuationUuid () {
    // if (typeof window['hex_md5'] == 'undefined') {
    //     return false;
    // }

    let a = individuationUuidUniqueStr();

    while (a.length < iIndividuationUniqueStrMinLength) {
        a += sIndividuationUuidTag + '---' + randStr(1);
    }

    a = hex_md5(a);
    a = a.toLowerCase();

    return a;
}
/**
 *
 * 生成自定义 uuid 唯一字符串 md5 字符串
 *
 * @returns {string|boolean}
 */
function individuationUuidUniqueStr () {
    let d = sUniqueStrSplitTag;

    let s = randStr(iIndividuationUniqueStrLength);
    s += d + randNum(iIndividuationUniqueStrNumberMin, iIndividuationUniqueStrNumberMax);
    s += d + getMillisecondTime();
    s += d + navigatorInfo();
    s += d + screenInfo();
    s += d + generateUUID();
    s += d + userIpInfo();

    s = hex_md5(s);

    return s;
}
function userIpInfo () {
    let t = '*';
    let s = '';

    s += t + sIp;
    s += t + sCid;
    s += t + sIpCityName;

    return s;
}
/**
 *
 * location 信息
 *
 */
function screenInfo () {
    let t = '+';
    let s = '';
    let n = screen;

    s += t + n.availHeight;
    s += t + n.availWidth;
    s += t + n.width;
    s += t + n.height;
    s += t + n.pixelDepth;
    s += t + n.colorDepth;

    return s;
}
/**
 *
 * navigator 信息
 *
 * @returns {string}
 */
function navigatorInfo () {
    let t = '~';
    let s = '';
    let n = navigator;

    s += t + n.appCodeName;
    s += t + n.appName;
    s += t + n.appVersion;
    s += t + n.cookieEnabled;
    s += t + n.language;
    s += t + n.onLine;
    s += t + n.platform;
    s += t + n.product;
    s += t + n.userAgent;
    s += t + n.hardwareConcurrency;

    return s;
}
function generateUUID () {
    let d = getMillisecondTime();
    let i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return i;
}

//sesionid---------------------
// function setSessionIdFormat (sSessionId1 = '') {
//     // if (typeof window['hex_md5'] == 'undefined') {
//     //     return false;
//     // }
//
//     let a = sSessionId1;
//     if (!a) {
//         return false;
//     }
//
//     while (a.length < iSessionBeforeFormatLength) {
//         a += randStr(1);
//     }
//
//     let p = sSessionSplitTag;
//
//     let aS = a.split('');
//     let s = '';
//     let z = '';
//     let q = sSessionIdSplitLength;
//     for (let i in aS) {
//         z = i % q ? aS[i] : p + aS[i];
//         s += z;
//     }
//     s = s.substr(1, s.length - 1);
//
//     s = setSessionIdPrefix(s) + p + s + p + setSessionIdSuffix(s);
//
//     return s.toLowerCase() + sSessionSplitTag + getSecondTime();
// }
// function setSessionIdPrefix (s) {
//     let q = sSessionIdSplitLength;
//
//     let t = s;
//     t = hex_md5(t + sSessionSalt);
//     return t.substring(t.length - parseInt(q)).toLowerCase();
// }
// function setSessionIdSuffix (s) {
//     let q = sSessionIdSplitLength;
//
//     let r = reverseString(s);
//     r = hex_md5(r + sSessionSalt);
//     return r.substr(0, q).toLowerCase();
// }
// function checkSessionKeyFormat () {
//     // if (typeof window['hex_md5'] == 'undefined') {
//     //     let t = setTimeout(function () {
//     //         checkSessionKeyFormat();
//     //
//     //         clearTimeout(t);
//     //     }, aTimer['checkSessionKeyFormat']);
//     //     return false;
//     // }
//
//     let t = sSessionSplitTag;
//     if (sOldSessionId) {
//         if (!doCheckSessionId(sOldSessionId.split(t), 'old')) {
//             makeSessionid();
//
//             setTimeoutFunction('checkSessionKeyFormat');
//             return;
//         }
//     }
//
//     if (sNewSessionId) {
//         if (!doCheckSessionId(sNewSessionId.split(t), 'new')) {
//             makeSessionid();
//
//             setTimeoutFunction('checkSessionKeyFormat');
//             return;
//         }
//     }
//
//     setTimeoutFunction('checkSessionKeyFormat');
// }
// /**
//  *
//  * 检查 session id 格式
//  *
//  * @param s session id type string
//  * @param t 类型 新老session type string
//  * @returns {boolean}
//  */
// function doCheckSessionId (s, t) {
//     if (typeof window['hex_md5'] == 'undefined') {
//         setTimeoutFunction('doCheckSessionId', s, t);
//         return false;
//     }
//
//     let a = s[0];
//     let b = s[s.length - 2];
//     s.pop();
//     s.pop();
//     s.shift();
//     s = s.join(sSessionSplitTag);
//     let c = setSessionIdPrefix(s);
//     let d = setSessionIdSuffix(s);
//
//     if (
//         (a !== c)
//         ||
//         (b !== d)
//     ) {
//         makeSessionid();
//         return false;
//     }
//
//     return true;
// }
// function cacheSessionId () {
//     if (!sNewSessionId) {
//         setTimeoutFunction('cacheSessionId');
//         return;
//     }
//
//     sOldSessionId = sOldSessionId ? sOldSessionId : sNewSessionId;
//     aBaseTimer['cacheSessionId_sOldSessionId'] = setTimeout(function () {
//         clearTimeout(aBaseTimer['cacheSessionId_sOldSessionId']);
//
//         setLocalstorage(sOldSessionIdStorageKey, sOldSessionId, iUpdateSessionMaxTime, 'afterCacheSessionId');
//     }, aTimer['cacheSessionId_sOldSessionId']);
//
//     aBaseTimer['cacheSessionId_sNewSessionId'] = setTimeout(function () {
//         clearTimeout(aBaseTimer['cacheSessionId_sNewSessionId']);
//
//         setLocalstorage(sNewSessionIdStorageKey, sNewSessionId, iUpdateSessionMaxTime, 'afterCacheSessionId');
//     }, aBaseTimer['cacheSessionId_sNewSessionId']);
// }
// function afterCacheSessionId (b = '') {
//     if (!b) {
//         return false;
//     }
// }
// /**
//  *
//  * 检查 session 超时时间
//  *
//  * @returns {boolean}
//  */
// function checkSessionIdOutTime () {
//     if (!sNewSessionId) {
//         makeSessionid();
//         return false;
//     }
//
//     let s = sNewSessionId.split(sSessionSplitTag);
//
//     if (parseInt(getSecondTime()) - parseInt(s[s.length - 1]) > iSessionOutTime) {
//         makeSessionid();
//     }
//
//     setTimeoutFunction('checkSessionIdOutTime');
// }
// /**
//  *
//  * 获取新的session id
//  *
//  * @returns {*|string}
//  */
// let bAllreadyQueryNewSessionId = false;
// function queryNewSessonId () {
//     if (sNewSessionId) {
//         return sNewSessionId;
//     }
//
//     if (bAllreadyQueryNewSessionId) {
//         return;
//     }
//     bAllreadyQueryNewSessionId = true;
//
//     asyn('queryLocalstorage', sNewSessionIdStorageKey, 'afterQueryNewSessonId');
// }
// function afterQueryNewSessonId (s) {
//     sNewSessionId = s;
// }
// /**
//  *
//  * 获取旧的session id
//  *
//  * @returns {*|string}
//  */
// let bAllreadyQueryOldSessionId = false;
// function queryOldSessonId () {
//     if (sOldSessionId) {
//         return sOldSessionId;
//     }
//
//     if (bAllreadyQueryOldSessionId) {
//         return;
//     }
//     bAllreadyQueryOldSessionId = true;
//
//     asyn('queryLocalstorage', sOldSessionIdStorageKey, 'afterQueryOldSessonId');
// }
// function afterQueryOldSessonId (s) {
//     sOldSessionId = s;
// }
// /**
//  *
//  * 检查session
//  *
//  */
// function sessionId () {
//     if (sNewSessionId === '') {
//         asyn('queryNewSessonId');
//
//         setTimeoutFunction('sessionId');
//         return;
//     }
//
//     if (sOldSessionId === '') {
//         asyn('queryOldSessonId');
//
//         setTimeoutFunction('sessionId');
//         return;
//     }
//
//     if (sNewSessionId) {
//         checkSessionIdOutTime();
//
//         checkSessionKeyFormat();
//     } else {
//         makeSessionid();
//     }
//
//     let i = randNum(iUpdateSessionMinTime, iUpdateSessionMaxTime);
//     let t = setTimeout(function () {
//         clearTimeout(t);
//
//         sessionId();
//     }, i);
// }
// function sessId () {
//     if (
//         (
//             typeof window['bLoadFunctionJs'] == 'undefined'
//             ||
//             !window['bLoadFunctionJs']
//         )
//         ||
//         (
//             (
//                 typeof window['bAllreadyLoadEncodeJs'] == 'undefined'
//                 ||
//                 !window['bAllreadyLoadEncodeJs']
//             )
//         )
//     ) {
//         setTimeoutFunction('sessId');
//         return;
//     }
//
//     asyn('sessionId');
// }
//sesionid====================

//dom------------------
//dom===================

let iBeginTime = 0;
function baseBegins () {
    asyn('clearBaseShade');

    // asyn('sessId');

    iBeginTime = getSecondTime();
    asyn('checkUseTime');
}
