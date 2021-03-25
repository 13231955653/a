//编码相关-----------------
const sCharset = 'utf-8'; // 编码格式
//编码相关===============

//url地址相关----------------------

//url地址相关======================

const sIndividuationUuidTag = '*';
const sUniqueStrSplitTag = '_';
const sRandString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const iIndividuationUniqueStrLength = 1000;
const iIndividuationUniqueStrNumberMin = 0;
const iIndividuationUniqueStrNumberMax = 999999999999999999;
const iIndividuationUniqueStrMinLength = 32;

const sAstrictJumpUrl = 'https://www.baidu.com';

//meta标签相关----------------

const sContentAndCharset = 'content_charset';
const sContentAndCharsetType = 'Content-Type';
const sContentAndCharsetContent = 'text/html; charset=utf-8';
const sCopyright = 'copyright';
const sAuther = 'auther';
const sKeywords = 'keywords';
const sDescription = 'description';
const sApplicationName = 'application-name';
const sRobots = 'robots';
const sAllowCurlPage = 'noindex';
const sAllowIndexOther = 'nofollow';
const sAboutIe = 'about_ie';
const sAboutIeHttpEquiv = 'x-ua-compatible';
const sAboutIeContent = 'ie=edge';
const sClearType = 'cleartype';
const sClearTypeHttpEquiv = 'cleartype';
const sClearTypeContent = 'on';
// Pinned Site
const sSkypeToolbar = 'skype_toolbar';
const sSkypeToolbarContent = 'skype_toolbar_parser_compatible';
const sWin8Ie10_1 = 'msapplication-TileImage';
const sWin8Ie10_1Content = 'pinned-tile-144.png';
const sWin8Ie10_2 = 'msapplication-TileColor';
const sWin8Ie10_2Content = '#009900';
const sWin9_1Ie11 = 'msapplication-config';
const sWin9_1Ie11Content = 'ieconfig.xml';
// Pinned Site
// <!-- 优先使用最新的chrome版本 -->
const sGoogleBrowser = 'google_browser';
const sGoogleBrowserHttpEquiv = 'X-UA-Compatible';
const sGoogleBrowserContent = 'chrome=1';
// 360浏览器
// <!-- 选择使用的浏览器解析内核 -->
const s360 = '360_nei_he';
const s360Name = 'renderer';
const s360Content = 'webkit|ie-comp|ie-stand';
// UC手机浏览器
// <!-- 将屏幕锁定在特定的方向 -->
const sUc = 'uc_';
const sUcName = 'screen-orientation';
const sUcContent = 'landscape/portrait';
// <!-- 全屏显示页面 -->
const sFullScreen = 'full-screen';
const sFullScreenName = 'full-screen';
const sFullScreenContent = 'yes';
// <!-- 应用模式，默认将全屏，禁止长按菜单，禁止手势，标准排版，强制图片显示。 -->
const sAppMode = 'app_mode';
const sAppModeName = 'browsermode';
const sAppModeContent = 'application';
// <!-- 禁止夜间模式显示 -->
const sForbidNight = 'forbid_night';
const sForbidNightName = 'nightmode';
const sForbidNightContent = 'disable';
// <!-- 使用适屏模式显示 -->
const sAdaptScreen = 'adapt_screen';
const sAdaptScreenName = 'layoutmode';
const sAdaptScreenContent = 'fitscreen';
// QQ手机浏览器
// <!-- 锁定屏幕在特定方向 -->
const sQqImmobilizationOrientation = 'qq_orientation';
const sQqImmobilizationOrientationName = 'x5-orientation';
const sQqImmobilizationOrientationContent = 'landscape/portrait';
// <!-- 全屏显示 -->
const sQqFullScreen = 'qq_fullscreen';
const sQqFullScreenName = 'x5-fullscreen';
const sQqFullScreenContent = 'true';
// <!-- 页面将以应用模式显示 -->
// <meta name="x5-page-mode" content="app">
const sQqAppMode = 'qq_app_mode';
const sQqAppModeName = 'x5-page-mode';
const sQqAppModeContent = 'app';
// Apple iOS
// <!-- Smart App Banner -->
const sIosAppBanner = 'apple-ios-itunes-app';
const sIosAppBannerName = 'apple-itunes-app';
const sIosAppBannerContent = 'app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT';
// <!-- 禁止自动探测并格式化手机号码 -->
const sForbidQueryTelNumber = 'query_tel_num_and_format';
const sForbidQueryTelNumberName = 'format-detection';
const sForbidQueryTelNumberContent = 'telephone=no';
// <!-- 忽略识别邮箱 -->
const sNeglectEmail = 'neglect_email';
const sNeglectEmailName = 'format-detection';
const sNeglectEmailContent = 'email=no';
// <!-- 是否启用 WebApp 全屏模式 -->
const sAppFullScreenMode = 'app_full_screen_mode';
const sAppFullScreenModeName = 'apple-mobile-web-app-capable';
const sAppFullScreenModeContent = 'yes';
// <!-- 设置状态栏的背景颜色,只有在 “apple-mobile-web-app-capable” content=”yes” 时生效 -->
const sAppleMobileWebBarColor = 'apple_mobile_web_bar_color';
const sAppleMobileWebBarColorName = 'apple-mobile-web-app-status-bar-style';
const sAppleMobileWebBarColorContent = 'black';
// 移动端
// <!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边  -->
const sMobileFullScreen = 'mobile_full_screen';
const sMobileFullScreenName = 'viewport';
const sMobileFullScreenContent = 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0';

const sAutherInfo = 'white 小白 邮箱';
const sKeyword = '关键词1，关键词2，关键词3';
const sDescriptionContent = '规定页面的描述。搜索引擎会把这个描述显示在搜索结果中。';
const sApplicationNameContent = '规定页面所代表的 Web 应用程序的名称。';
const sCopyrightContent = '版权所有，保留一切权利。';
//meta标签相关==============

//定时器相关----------
let aBaseTimer = []; //基础定时器
const b = []; //基础定时器间隔时间
// const t = 1000;
const t = 15;
// const t2 = 1000;
const t2 = 15;
b['winResize'] = t2;
b['loadEncodeJs'] = t;
b['loadLogicJs'] = t;
b['animates'] = t;
b['loadDomJs'] = t;
b['loadFunctionJs'] = t;
b['loadOriginJquery'] = t;
b['loadLang'] = t;
b['logicBegin'] = t;
b['loadPlatformDomJs'] = t;
// b['showPageShade'] = t;
b['loadResetCss'] = t;
b['checkLoadCss'] = t;
b['writeStorageDom'] = t;
b['localstorageIsForbidden'] = t;
b['loadBaseJsFile'] = t;
b['pageBegin'] = t;
b['loadLocalJquery'] = t;
b['replaceLangs'] = t;
b['loadPublicCss'] = t;
b['loadPersonalizedCss'] = t;
b['loadVariableCss'] = t;
b['threeClassBodyDom'] = t;
// b['showIndexShade'] = t;
b['loadLocalJquery1'] = t;
// b['clearIndexShade'] = t;
// b['showPlatformShade'] = t;
b['individuationUuid'] = t;
b['platformBegin'] = t;
b['makeSessionid'] = t;
b['cacheSessionId'] = t;
b['repeatedlySettingPage'] = t;
b['repeatedlyFriendPage'] = t;
b['repeatedlyForumPage'] = t;
b['repeatedlyChatPage'] = t;
b['loadApiJs'] = t;
b['sessionId'] = t;
b['repeatedlyPage'] = t;
b['localstoragePostMessage'] = t;
b['doCheckSessionId'] = t;
b['checkSessionKeyFormat1'] = t;
b['replaceWindowTitle'] = t;
b['replaceDomLang'] = t;
b['replaceLang'] = t;
b['replaceTitle'] = t;
b['afterLoadPageJs'] = t;
b['updateUrlPage'] = t;
b['setContent'] = t;
b['baseBegins'] = t;
b['loadIndexJs'] = t;
b['showUseTimeLimitNotice'] = t;
b['clearShade'] = t;
b['sessId'] = t;
b['indexBeginLogic'] = t;
b['indexBegin'] = t;
b['loadOriginJquery'] = t;
b['baseShade'] = t;
b['platformBegin'] = t;
b['showBaseShade'] = t;
b['showShade'] = t;
b['loadPageJs'] = t;
b['clearPlatformShade'] = t;
b['clearPageShade'] = t;
b['bindFooterOnclick'] = t;
b['clearBaseShade'] = t;
b['loadStaticResource'] = t;
b['checkUseTime'] = 60000;
b['checkSessionIdOutTime'] = 181652;
b['checkSessionKeyFormat'] = 253648;
const aTimer = b; //基础定时器间隔时间
//定时器相关========================

//fontsize 相关--------------
let iFontSize = 16;
const iDefaultFontSize = 16; //默认pc字体大小
const iDefaultOneFontMms = 2.5; //默认一个中文字占多宽，单位毫米
//fontsize 相关===============

/*increment_version_2*/
//class id tag 相关----------------
var sBaseShadeId = 'base_shade';
// var sIndexShadeId = 'index_shade';
// var sPlatformShadeId = 'platform_shade';
// var sPageShadeId = 'page_shade';

const sBodyDomFatherId = 'body';
const oDomFatherId = 'dom_father';
const sDomNoticeId = 'notice_father';
const sDomShadeId = 'shade_father';

const sQueryOneMmPxId = 'get_one_mms_px';

const sInvisibleClass = 'invisible'; //不显示dom的class
const sVisibleClass = 'gradually_visible';//显示dom的class
//class id tag 相关============
/*increment_version_2*/

/*increment_version_3*/
//尺寸相关----------------
let iWinWidth = 0;
let iWinHeight = 0;
//尺寸相关============
/*increment_version_3*/

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

//用户ip-----------
//IP相关------------
let sIp = randNum(1, 100) + '.' + randNum(1, 100) + '.' + randNum(1, 100);
let sCid = randNum(000000000, 999999999);
let sIpCityName = 'known';
const sQueryUserIpAddress = 'http://pv.sohu.com/cityjson?ie=' + sCharset;
//IP相关==========================
/**
 *
 * 获取用户IP
 *
 */
function getUserIp () {
    loadJs(sQueryUserIpAddress, 'setUserIp');
}
/**
 *
 * 设置用户IP
 *
 */
function setUserIp () {
    sIp = returnCitySN.cip;
    sCid = returnCitySN.cid;
    sIpCityName = returnCitySN.cname;
}
/**
 *
 * 引入 js 文件
 *
 * @param s 文件完整路径 type string
 * @param c callback 函数  type string
 * @returns {boolean}
 */
function loadJs (s = '', c = false) {
    if (!s) {
        return false;
    }

    let o = document.createElement('script');
    o.type = 'text/javascript';
    o.src = s;
    o.charset = sCharset;

    if (c) {
        if (o.addEventListener) {
            o.addEventListener('load', function () {
                if (typeof window[c] == 'undefined') {
                    setTimeoutFunction(c);
                    return;
                }

                window[c]();
            }, false);
        } else if (o.attachEvent) {
            o.attachEvent('onreadystatechange', function () {
                var target = window.event.srcElement;
                if (target.readyState == 'loaded') {
                    window[c]();
                }
            });
        }
    }

    asyn('asynLoadJs', o);
}

/**
 *
 * 插入script 标签节点
 *
 * @param o 新插入节点 type dom object
 */
function asynLoadJs (o) {
    insertAfter(o, firstScriptTag());
}
//用户ip================

/**
 *
 * 随机数字
 *
 * @param i 最小数字 type int
 * @param a 最大数字 type int
 * @returns {*}
 */
function randNum (i, a) {
    return(i + Math.round((Math.random()) * (a - i)));
}

/**
 *
 * 引入页面js文件
 *
 * @type {boolean}
 */
let bInLoadPageJs = false;
let sPageNow = '';
let sNowPageJs = '';
function loadPageJs () {
    if (bInLoadPageJs) {
        return ;
    }
    bInLoadPageJs = true;

    // asyn('showPageShade');

    sPageNow = getNowPage();
    switch (sPageNow) {
        case sForumPage:
            sNowPageJs = sForumJs;
            break;
        case sChatPage:
            sNowPageJs = sChatJs;
            break;
        case sFriendPage:
            sNowPageJs = sFriendJs;
            break;
        case sSettingPage:
            sNowPageJs = sSettingJs;
            break;
        case sAboutMePage:
            sNowPageJs = sAboutMeJs;
            break;
    }

    if (!sNowPageJs) {
        return false;
    }

    // if (!checkRequestJsCssLimit('js', 'loadPageJs_' + j)) {
    //     return false;
    // }

    // let t1 = setTimeout(function () {
    //     clearTimeout(t1);
    //
    //     changeDomFatherOpacity();
    // }, 0);

    let t3 = setTimeout(function () {
        clearTimeout(t3);

        asyn('loadStaticResource', sNowPageJs);
        // initStaticResource(j, 'js', 'afterLoadPageJs');
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
//dom--------------
/**
 *
 * 修改最大级父状态，是否显示或隐藏
 *
 * @param b 显示或隐藏 type bool true 显示
 */
function changeBodyStatus (b = true) {
    let h = b ? sVisibleClass : sInvisibleClass;

    let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
    let p2 = new RegExp('\\s*' + sVisibleClass,'gm');

    let o = bodyDom();
    let s = o.className;
    s = s.replace(p1, '');
    s = s.replace(p2, '');

    o.className = s ? s + ' ' + h : h;
}
//dom===================
/**
 *
 * 跳转其他地址
 *
 */
function jump (u) {
    window.location.href = u;
}
/*increment_version_58*/
//限制----------------
/**
 *
 * 电脑端限制
 *
 * @returns {boolean}
 */
function astrict () {
    if (sPlatformTag !== sMobileTag) {
        alert('The computer side is not enabled yet, will jump to ' + sAstrictJumpUrl);

        jump(sAstrictJumpUrl);
        return false;
    }

    return true;
}
//限制==================
/*increment_version_58*/

/*increment_version_79*/
//尺寸相关------------------------
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
/*increment_version_79*/

/*increment_version_80*/
function size () {
    asyn('winSize');
}
/*increment_version_80*/
/*increment_version_81*/
/**
 *
 * 获取每毫米的像素值
 *
 * @returns {number}
 */
function getOneMmsPx (){
    let d = sQueryOneMmPxId;

    // 创建一个1mm宽的元素插入到页面，然后坐等出结果
    let o = document.createElement('div');
    o.id = d;
    o.style.width = '1mm';

    oBody.appendChild(o);

    // 原生方法获取浏览器对元素的计算值
    o = domById(d);
    let w = o.getBoundingClientRect().width;
    o.parentNode.removeChild(o);
    return w;
}
/*increment_version_81*/
//平台相关------------------
let os = function() {
    let a = navigator.userAgent;
    isWindowsPhone = /(?:Windows Phone)/.test(a),
        isSymbian = /(?:SymbianOS)/.test(a) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(a),
        isFireFox = /(?:Firefox)/.test(a),
        isChrome = /(?:Chrome|CriOS)/.test(a),
        isTablet = /(?:iPad|PlayBook)/.test(a) || (isAndroid && !/(?:Mobile)/.test(a)) || (isFireFox && /(?:Tablet)/.test(a)),
        isPhone = /(?:iPhone)/.test(a) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;

    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
}();
/**
 *
 * 检查平台
 *
 * @returns {string}
 */
const sIsPhone = 'phone';
const sIsTablet = 'tablet';
const sIsPc = 'pc';
function checkPlatform () {
    if (os.isAndroid || os.isPhone) {
        return sIsPhone;
    }

    if (os.isTablet) {
        return sIsTablet;
    }

    if (os.isPc) {
        return sIsPc;
    }
}
//平台相关================
/*increment_version_82*/
/**
 *
 * 根据每毫米px大小 设置字体大小
 *
 */
function initializeFontSize () {
    let p = checkPlatform();

    // if (p === sIsPhone) {
    //     z = Math.ceil(iDefaultOneFontMms * getOneMmsPx());
    // }

    // if (p === sIsTablet) {
    iFontSize = Math.ceil(iDefaultOneFontMms * getOneMmsPx());
    // }

    if (p === sIsPc) {
        iFontSize = iDefaultFontSize;
    }

    oHtml.style.fontSize = iFontSize + 'px';
}
//尺寸相关====================
/*increment_version_82*/


//json===============

//dom相关------------
/**
 *
 * 写dom，次最大父dom
 *
 * @type {boolean}
 */
let bWriteFatherDom = false;
function secondDom () {
    if (bWriteFatherDom) {
        return true;
    }
    bWriteFatherDom = true;

    let a = [
        oDomFatherId,
        sDomShadeId,
        // oDomStorageId,
        sDomNoticeId,
    ];

    let s = '';
    for (let i in a) {
        s += '<div id="' + a[i] + '"></div>';
    }

    let o = bodyDom();
    o.innerHTML = o.innerHTML + s;

    // asyn('fatherDom');
    asyn('threeClassBodyDom');

    // asyn('shadeDom');
    asyn('writeShades');

    // asyn('noticeDom');

    o.style.display = 'block';
}
/*increment_version_77*/
/*increment_version_78*/
let oFatherDom = '';
function fatherDom () {
    oFatherDom = oFatherDom ? oFatherDom : domById(oDomFatherId);
    return oFatherDom;
}
let oShadeFather = '';
function shadeDom () {
    oShadeFather = oShadeFather ? oShadeFather : domById(sDomShadeId);
    return oShadeFather;
}
let oNoticeDom = '';
function noticeDom () {
    oNoticeDom = oNoticeDom ? oNoticeDom : domById(sDomNoticeId);
    return oNoticeDom;
}
let oBodyDom = false;
function bodyDom () {
    oBodyDom = oBodyDom ? oBodyDom : domById(sBodyDomFatherId);
    return oBodyDom;
}


//dom相关==========
/*increment_version_78*/

/*increment_version_84*/
function winResize (bOnload = false) {
    if (!bOnload) {
        // asyn('showBaseShade');

        if (!astrict()) {
            return false;
        }
    }

    asyn('size');
}
/*increment_version_84*/


/*increment_version_73*/

/*increment_version_73*/

/*increment_version_85*/
window.onresize = function () {
    // asyn('showBaseShade');

    if (aBaseTimer['winResize']) {
        clearTimeout(aBaseTimer['winResize']);
    }

    aBaseTimer['winResize'] = setTimeout(function () {
        winResize();
    }, aTimer['winResize']);
}
/*increment_version_85*/

/*increment_version_87*/
function localstorageIsForbidden () {
    console.log('localstorage is forbidden, web can not normal use, so we nothing to do !!! ');
    alert('localstorage is forbidden, web can not normal use, so we nothing to do !!! ');
}
/*increment_version_87*/



//meta-------------------
let bSetMeta = false;

/**
 *
 * 设置meta标签
 *
 */
function setMeta () {
    if (bSetMeta) {
        return;
    }
    bSetMeta = true;

    // oHead.style.visibility = 'hidden';

    let a = [
        sContentAndCharset,
        sRobots,
        sAboutIe,
        sClearType,
        sSkypeToolbar,
        sWin8Ie10_1,
        sWin8Ie10_2,
        sWin9_1Ie11,
        sGoogleBrowser,
        s360,
        sUc,
        sFullScreen,
        sAppMode,
        sForbidNight,
        sAdaptScreen,
        sQqImmobilizationOrientation,
        sQqFullScreen,
        sQqAppMode,
        sIosAppBanner,
        sForbidQueryTelNumber,
        sNeglectEmail,
        sAppFullScreenMode,
        sAppleMobileWebBarColor,
        sMobileFullScreen,
        sAuther,
        sKeywords,
        sDescription,
        sApplicationName,
        sCopyright,
    ];

    let o = document.createDocumentFragment();
    let m = '';
    for (let i in a) {
        m = setContent(a[i]);
        if (m) {
            o.appendChild(m);
        }
    }
    oHead.appendChild(o);

    // oHead.style.visibility = 'visible';
}
/**
 *
 * 设置 meta 标签
 *
 * @param n meta name type string
 */
function setContent (n = '') {
    let m = document.createElement('meta');
    switch (n) {
        case sCopyright :
            m.id = sFinalMetaTagId;
            m.name = 'Copyright';
            m.content = sCopyrightContent;
            break;
        case sAuther :
            m.name = 'author';
            m.content = sAutherInfo;
            break;
        case sKeywords :
            m.name = 'keywords';
            m.content = sKeyword;
            break;
        case sDescription :
            m.name = 'description';
            m.content = sDescriptionContent;
            break;
        case sApplicationName :
            m.name = 'application-name';
            m.content = sApplicationNameContent;
            break;
        case sRobots :
            m.name = 'robots';
            m.content = sAllowCurlPage + ',' + sAllowIndexOther;
            break;
        case sContentAndCharset :
            m.httpEquiv = sContentAndCharsetType;
            m.content = sContentAndCharsetContent;
            break;
        case sAboutIe :
            m.httpEquiv = sAboutIeHttpEquiv;
            m.content = sAboutIeContent;
            break;
        case sClearType :
            m.httpEquiv = sClearTypeHttpEquiv;
            m.content = sClearTypeContent;
            break;
        case sSkypeToolbar :
            m.name = sSkypeToolbar;
            m.content = sSkypeToolbarContent;
            break;
        case sWin8Ie10_1 :
            m.name = sWin8Ie10_1;
            m.content = sWin8Ie10_1Content;
            break;
        case sWin8Ie10_2 :
            m.name = sWin8Ie10_2;
            m.content = sWin8Ie10_2Content;
            break;
        case sWin9_1Ie11 :
            m.name = sWin9_1Ie11;
            m.content = sWin9_1Ie11Content;
            break;
        case sGoogleBrowser :
            m.httpEquiv = sGoogleBrowserHttpEquiv;
            m.content = sGoogleBrowserContent;
            break;
        case s360 :
            m.name = s360Name;
            m.content = s360Content;
            break;
        case sUc :
            m.name = sUcName;
            m.content = sUcContent;
            break;
        case sFullScreen :
            m.name = sFullScreenName;
            m.content = sFullScreenContent;
            break;
        case sAppMode :
            m.name = sAppModeName;
            m.content = sAppModeContent;
            break;
        case sForbidNight :
            m.name = sForbidNightName;
            m.content = sForbidNightContent;
            break;
        case sAdaptScreen :
            m.name = sAdaptScreenName;
            m.content = sAdaptScreenContent;
            break;
        case sQqImmobilizationOrientation :
            m.name = sQqImmobilizationOrientationName;
            m.content = sQqImmobilizationOrientationContent;
            break;
        case sQqFullScreen :
            m.name = sQqFullScreenName;
            m.content = sQqFullScreenContent;
            break;
        case sQqAppMode :
            m.name = sQqAppModeName;
            m.content = sQqAppModeContent;
            break;
        case sIosAppBanner :
            m.name = sIosAppBannerName;
            m.content = sIosAppBannerContent;
            break;
        case sForbidQueryTelNumber :
            m.name = sForbidQueryTelNumberName;
            m.content = sForbidQueryTelNumberContent;
            break;
        case sNeglectEmail :
            m.name = sNeglectEmailName;
            m.content = sNeglectEmailContent;
            break;
        case sAppFullScreenMode :
            m.name = sAppFullScreenModeName;
            m.content = sAppFullScreenModeContent;
            break;
        case sAppleMobileWebBarColor :
            m.name = sAppleMobileWebBarColorName;
            m.content = sAppleMobileWebBarColorContent;
            break;
        case sMobileFullScreen :
            m.name = sMobileFullScreenName;
            m.content = sMobileFullScreenContent;
            break;
    }
    return m;
}
//meta===============

function pageBegin () {
    console.log('pageBegin 1111111111111');
    // asyn('showPageShade');
    // showPageShade();

    console.log('pageBegin 222222222222');
    asyn('afterPageAction');

    console.log('pageBegin 444444444444444444');
    // asyn('clearPlatformShade');
    // clearPlatformShade();
    // asyn('clearPageShade');
    asyn('clearBaseShade');
}

/*increment_version_83*/
let oHtml = false;
let oBody = false;
let oHead = false;
function baseBegins () {
    console.log('11111111111111111111111111basebegin');
    // asyn('clearBaseShade');

    // asyn('sessId');

    asyn('checkUseTime');

    if (!astrict()) {
        return false;
    }

    oHtml = document.getElementsByTagName('html')[0];
    oHead = document.getElementsByTagName('head')[0];
    oBody = document.getElementsByTagName('body')[0];

    let b = false;
    try {
        let sTestStorageKey = 'private_test';
        localStorage.setItem(sTestStorageKey, 1);
        localStorage.removeItem(sTestStorageKey);

        b = true;
    } catch (e) {
        //无痕模式
        asyn('localstorageIsForbidden');

        b = false;

        return;
    }
    if (!b) {
        return;
    }

    asyn('setMeta');

    asyn('initializeFontSize');

    asyn('winResize', true);

    asyn('getUserIp');

    asyn('secondDom');
}
/*increment_version_83*/
