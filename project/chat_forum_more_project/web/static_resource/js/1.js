//url地址相关---------------------
const sBaseProtocol = window.location.protocol + '//';
//url地址相关=================================

//class id tag 相关----------------
const sBodyDomFatherId = 'body';
const oDomStorageId = 'storage_father';
const oDomFatherId = 'dom_father';
const sDomNoticeId = 'notice_father';
const sDomShadeId = 'shade_father';
//class id tag 相关============

//尺寸相关----------------
let iWinWidth = 0;
let iWinHeight = 0;
//尺寸相关============

/**
 *
 * 获取 url origin
 *
 * @returns {string}
 */
function queryMasterOrigin () {
    let s = window.location.protocol;

    let t = '.';

    let o = window.location.origin;
    let a = o.split(t);
    let l = a.length;
    o = a[l - 2] + t + a[l - 1];
    o = o.replace(s + '//', '');
    o = s + '//' + o;

    return o;
}
let sOrigin = queryMasterOrigin();

const sAstrictJumpUrl = 'https://www.baidu.com';
//url地址相关========================

//编码相关-----------------
const sCharset = 'utf-8'; // 编码格式
//编码相关===============

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
/**
 *
 * 检查是否手机端
 *
 * @type {string}
 */
let bMobile = '';
function isMobile () {
    let u = navigator.userAgent;
    let m = [ 'Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad','iPod'];
    bMobile = false;

    //根据userAgent判断是否是手机
    for (let v = 0; v < m.length; v++) {
        if (u.indexOf(m[v]) > 0) {
            bMobile = true;
            break;
        }
    }

    return bMobile;
}

function platformTag () {
    return (bMobile !== '' ? bMobile : isMobile())  ? 'mobile' : 'computer';
}
const sPlatformTag = platformTag();

const sIsPhone = 'phone';
const sIsTablet = 'tablet';
const sIsPc = 'pc';
//平台相关================

//静态文件相关---------------------------
let sBaseJsFile = '';
let sIndexJsFullName = '';
let sFunctionJsFile = '';
let sJqueryJsFile = '';
let sLogicJsFile = '';
let sDomJsFile = '';
let sPlatformDomJsFile = '';
let sEncodeJsFile = '';
let sApiJsFile = '';
// let sOriginJquery = '';
let sCnLangFile = '';
let sEnLangFile = '';
let sForumJsFile = '';
let sChatJsFile = '';
let sFriendJsFile = '';
let sSettingJsFile = '';
let sAboutMeJsFile = '';

const sBaseJs = '/static_resource/js/base.js'; // base js 路径
const sIndexJs = '/static_resource/js/index.js';
const sFunctionJs = '/static_resource/js/public/function.js';
const sJqueryJs = '/static_resource/js/public/jquery.js';
const sLogicJs = '/static_resource/js/' + sPlatformTag + '/logic.js';
const sDomJs = '/static_resource/js/public/dom/public_dom.js';
const sBaseEncodeJs = '/static_resource/js/public/encode.js';
const sCnLang = '/static_resource/js/lang/cn.js';
const sEnLang = '/static_resource/js/lang/en.js';
const sPlatformDomJs = '/static_resource/js/' + sPlatformTag + '/dom/public_dom.js';
const sForumJs = '/static_resource/js/' + sPlatformTag + '/page/forum.js';
const sChatJs = '/static_resource/js/' + sPlatformTag + '/page/chat.js';
const sFriendJs = '/static_resource/js/' + sPlatformTag + '/page/friend.js';
const sSettingJs = '/static_resource/js/' + sPlatformTag + '/page/setting.js';
const sAboutMeJs = '/static_resource/js/' + sPlatformTag + '/page/about_me.js';
const sApiJs = '/static_resource/js/public/query/query.js';
// sOriginJquery = 'http://code.jquery.com/jquery-1.9.1.min.js'; ////////////国内外需要更换适用的地址
// sOriginJquery = 'http://libs.baidu.com/jquery/2.1.4/jquery.min.js'; ////////////国内外需要更换适用的地址
// sOriginJquery = 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'; ////////////国内外需要更换适用的地址

const c = [];  // js 文件版本号
c[sBaseJs] = 'aaaaaaa';
c[sIndexJs] = 'bbbbbbbb';
c[sFunctionJs] = 'ddddddd';
c[sJqueryJs] = 'eeeeeeee';
c[sLogicJs] = 'ffffffff';
c[sDomJs] = 'gggggggg';
c[sBaseEncodeJs] = 'hhhhhhhhh';
c[sCnLang] = 'iiiiiii';
c[sEnLang] = 'jjjjjjjj';
c[sPlatformDomJs] = 'kkkkkkkkk';
c[sForumJs] = 'lllllll';
c[sChatJs] = 'mmmmmmmm';
c[sFriendJs] = 'nnnnnnnn';
c[sAboutMeJs] = 'zzzzzzzzzzzz';
c[sSettingJs] = 'oooooooo';
c[sApiJs] = 'ppppppp';
const aJsVersion = c; // js 文件版本号

const aCssVersion = []; // css 文件版本号
let sResetCssFile = '';
let sPublicCssFile = '';
let sPersonalizedCssFile = '';

const sBaseHostSonPrefix = 'static_resource';
const sBaseHostSonNumber = 7;
//静态文件相关============================

//localstorage相关----------------------------
const iMaxLocalstorageSize = 3670016;
const sOriginLocalstorageSizeKey = 'origin_localstorage_size';
const sStorageOriginsSonPrefix = 'storage';
const sStoragePage = 'storage.html';
const sLocalstorageTagMd5Salt = '______9*^&*%^$%$67dasy~`<>?dg';
const sLocalstorageLangTag = 'localstorage_lang';
const sLocalstorgaeUserPersonalizedColorKey = 'user_personlized_color';
// const sLocalstorgaeNowPageTag = 'localstorage_cache_now_page';
const sLocalstorageBeginPage = 0;
//localstorage相关=============================

//meta标签相关----------------
const sFinalMetaTagId = 'copyright_content';

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
<!-- 将屏幕锁定在特定的方向 -->
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
<!-- 锁定屏幕在特定方向 -->
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
b['showPageShade'] = t;
b['loadResetCss'] = t;
b['checkLoadCss'] = t;
b['writeStorageDom'] = t;
b['localstorageIsForbidden'] = t;
// b['personalizedCssFromLocalstorage'] = t;
b['pageBegin'] = t;
b['loadLocalJquery'] = t;
b['replaceLangs'] = t;
b['loadPublicCss'] = t;
b['loadPersonalizedCss'] = t;
b['loadVariableCss'] = t;
b['threeClassBodyDom'] = t;
b['showIndexShade'] = t;
b['loadLocalJquery1'] = t;
b['clearIndexShade'] = t;
b['showPlatformShade'] = t;
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
b['checkUseTime'] = 60000;
b['checkSessionIdOutTime'] = 181652;
b['checkSessionKeyFormat'] = 253648;
const aTimer = b; //基础定时器间隔时间
//定时器相关========================

//时间相关---------------------
const iRequertTimeout = 9000;
const iRequertLangJsTimeout = 5000;
const iMaxLoadOriginJqueryWaitTime = 5000;
//时间相关=======================

//dom id class 相关-----------------
const sQueryOneMmPxId = 'get_one_mms_px';

const sInvisibleClass = 'invisible'; //不显示dom的class
const sVisibleClass = 'gradually_visible';//显示dom的class
//dom id class 相关===================

//fontsize 相关--------------
let iFontSize = 16;
const iDefaultFontSize = 16; //默认pc字体大小
const iDefaultOneFontMms = 2.5; //默认一个中文字占多宽，单位毫米
//fontsize 相关===============

//用户自定义相关-------------------
const iDefaultUserPersonalizedColor = 1;
const sDefaultLangvage = 'cn';
let sUserLangvage = '';
let sPersonlizedColor = '';
//用户自定义相关===================

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

//IP相关------------
let sIp = randNum(1, 100) + '.' + randNum(1, 100) + '.' + randNum(1, 100);
let sCid = randNum(000000000, 999999999);
let sIpCityName = 'known';
const sQueryUserIpAddress = 'http://pv.sohu.com/cityjson?ie=' + sCharset;
//IP相关==========================

//meta-------------------
let oFinalMeta = '';

/**
 *
 * 最后的meta标签
 *
 * @returns {*|string}
 */
function finalMeta () {
    oFinalMeta = oFinalMeta ? oFinalMeta : domById(sFinalMetaTagId);
    return oFinalMeta;
}
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

    oHead.style.display = 'none';

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

    oHead.style.display = 'block';
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

//请求--------------------
/**
 *
 * 请求静态文件时间限制
 *
 * @param p 类型 type string
 * @param f 文件 type string
 * @returns {boolean}
 */
let aRequestJsCssLastTime = [];
function checkRequestJsCssLimit (p = '', f = '') {
    if (!f) {
        return false;
    }

    let t = getMillisecondTime();
    let l = typeof aRequestJsCssLastTime[f] !== 'undefined' ? aRequestJsCssLastTime[f] : 0;
    if (t - l < iRequertTimeout) {
        setTimeoutFunction(f);
        return false;
    }
    aRequestJsCssLastTime[f] = t;

    return true;
}
//请求===================

//定时器------------------------
/**
 *
 * 定时处理函数
 *
 * @param f 函数名 type string
 * @param a 参数1 type string
 * @param b 参数2 type string
 * @returns {boolean}
 */
function setTimeoutFunction (f = '', a = '', b = '') {
    if (!f) {
        return false;
    }

    if (typeof window[f] != 'function') {
        let t = setTimeout(function () {
            clearTimeout(t);

            setTimeoutFunction(f, a, b);
        }, 0);
        return;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        if (!a) {
            window[f]();
            return;
        } else {
            if (b) {
                window[f](a, b);
                return;
            } else {
                window[f](a);
                return;
            }
        }
    }, aTimer[f]);

    return true;
}
/**
 *
 * 定时器执行
 *
 * @param f function  type  string
 * @param a arg 1 type string
 * @param b arg 2 string
 * @returns {boolean}
 */
function asyn (f = '', a = '', b = '') {
    if (!f) {
        return false;
    }

    if (typeof window[f] != 'function') {
        let t = setTimeout(function () {
            clearTimeout(t);

            asyn(f, a, b);
        }, 0);
        return;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        if (b) {
            window[f](a, b);
            return;
        }

        if (a) {
            window[f](a);
            return;
        }

        window[f]();
    }, 0);
}
//定时器===============

//用户ip-----------
/**
 *
 * 获取用户IP
 *
 */
function getUserIp () {
    loadJs(sQueryUserIpAddress, false, 'setUserIp');
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
//用户ip================

//加载静态文件---------------
/**
 *
 * 设置静态文件地址
 *
 * @param t 文件类型 type string
 * @param s 文件地址 type string
 * @returns {string|boolean}
 */
function setJsCssSrc (t = '', s = '') {
    if (!t ||!s) {
        // console.log('hashFunc t or s is null');
        return false;
    }

    let v = getMillisecondTime();
    switch (t) {
        case 'js' :
            v = aJsVersion[s];
            break;
        case 'css' :
            v = aCssVersion[s];
            break;
    }

    let u = allocationHost(s);
    return u + '/index.php?v=' + s;
}
/**
 *
 * 设置 js 地址 跟版本号
 *
 */
function setJsPathAndVersion () {
    // sBaseJsFile = setJsCssSrc('js', sBaseJs);
    sIndexJsFullName = setJsCssSrc('js', sIndexJs);
    sFunctionJsFile = setJsCssSrc('js', sFunctionJs);
    sJqueryJsFile = setJsCssSrc('js', sJqueryJs);
    sLogicJsFile = setJsCssSrc('js', sLogicJs);
    sDomJsFile = setJsCssSrc('js', sDomJs);
    sEncodeJsFile = setJsCssSrc('js', sBaseEncodeJs);
    sCnLangFile = setJsCssSrc('js', sCnLang);
    sEnLangFile = setJsCssSrc('js', sEnLang);
    sPlatformDomJsFile = setJsCssSrc('js', sPlatformDomJs);
    sForumJsFile = setJsCssSrc('js', sForumJs);
    sChatJsFile = setJsCssSrc('js', sChatJs);
    sFriendJsFile = setJsCssSrc('js', sFriendJs);
    sSettingJsFile = setJsCssSrc('js', sSettingJs);
    sAboutMeJsFile = setJsCssSrc('js', sAboutMeJs);
    sApiJsFile = setJsCssSrc('js', sApiJs);
}
/**
 *
 * 设置css地址跟版本号
 *
 */
function setCssPathAndVersion () {
    let sResetCss = '/static_resource/css/public/reset.css';
    let sPublicCss = '/static_resource/css/public/' + sPlatformTag + '/public.css';

    aCssVersion[sResetCss] = 'zzzzzzz';
    aCssVersion[sPublicCss] = 'yyyyyy';

    sResetCssFile = setJsCssSrc('css', sResetCss);
    sPublicCssFile = setJsCssSrc('css', sPublicCss);
}
/**
 *
 * 设置静态文件地址跟版本号
 *
 */
function staticResourceVersion () {
    asyn('setCssPathAndVersion');

    asyn('setJsPathAndVersion');
}

/**
 *
 *加载 css 文件
 *
 * @param r link src type string
 * @param c 回调函数 type string
 * @returns {boolean}
 */
function loadCss (r = '', c = '') {
    if (!r) {
        return false;
    }

    let l = document.createElement('link');
    l.type = 'text/css';
    l.rel = 'stylesheet';
    l.href = r;
    l.charset = sCharset;
    l.id = r;

    if (c) {
        checkLoadCss(c, l.id);
    }

    asyn('asynLoadCss', l);
}
/**
 *
 * 检查 css 是否加载
 *
 * @param c 回调函数 type  string
 * @param d css link 标签 id type string
 * @returns {boolean}
 */
function checkLoadCss (c = '', d = '') {
    if (!c || !d) {
        // console.log('checkLoadCss c or d is null');
        return false;
    }

    let k = 'checkLoadCss' + '--' + c;
    if (domById(d)) {
        clearTimeout(aBaseTimer[k]);

        clearTimeout(aBaseTimer[k]);

        window[c]();
        return;
    }

    aBaseTimer[k] = setTimeout(function () {
        checkLoadCss(c, d);
    }, aTimer['checkLoadCss']);
}
function asynLoadCss (l) {
    insertAfter(l, oFinalMeta ? oFinalMeta : finalMeta());
}
/**
 *
 * 引入 js 文件
 *
 * @param s 文件完整路径 type string
 * @param b
 * @param c callback 函数  type string
 * @returns {boolean}
 */
function loadJs (s = '', b = true, c = false) {
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
 * 加载css
 *
 */
let bAllreadyLoadBaseCss = false;
function loadBaseCss () {
    if (bAllreadyLoadBaseCss) {
        return;
    }
    bAllreadyLoadBaseCss = true;

    asyn('loadPersonalizedCss');

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sResetCssFile, 'css', 'afterloadResetCss');
    }, 0);

    let z = setTimeout(function () {
        clearTimeout(z);

        initStaticResource(sPublicCssFile, 'css', 'afterloadPublicCss');
    }, 0);
}

// //加载public css
// let bLoadPublicCss = false;
// function loadPublicCss () {
//     if (bLoadPublicCss) {
//         return true;
//     }
//
//     if (!checkRequestJsCssLimit('css', 'loadPublicCss')) {
//         return false;
//     }
//
//     asyn('loadCss', sPublicCssFile, 'afterloadPublicCss');
//
//     setTimeoutFunction('loadPublicCss');
// }
// //加载public css 回调函数
// function afterloadPublicCss () {
//     bLoadPublicCss = true;
// }

// /**
//  *
//  * 加载reset css
//  *
//  * @returns {boolean}
//  */
// let bLoadResetCss = false;
// function loadResetCss () {
//     if (bLoadResetCss) {
//         return true;
//     }
//
//     if (!checkRequestJsCssLimit('css', 'loadResetCss')) {
//         return false;
//     }
//
//     asyn('loadCss', sResetCssFile, 'afterloadResetCss');
//
//     setTimeoutFunction('loadResetCss');
// }
// /**
//  *
//  * 加载reset css 回调函数
//  *
//  */
// function afterloadResetCss () {
//     bLoadResetCss = true;
// }

/**
 *
 * 加载用户自定义主题css
 *
 * @param c
 * @returns {boolean}
 */
let bLoadPersonalizedCss = false;
function loadPersonalizedCss (c = false) {
    if (!c) {
        queryUserPersonalizedColor();
        return;
    }

    if (bLoadPersonalizedCss) {
        return true;
    }
    bLoadPersonalizedCss = true;

    let sPersonalizedColor = c;

    if (!checkRequestJsCssLimit('css', 'loadPersonalizedCss')) {
        return false;
    }

    let sPersonalizedCss = '/static_resource/css/personalized/color/' + sPersonalizedColor + '.css';
    aCssVersion[sPersonalizedCss] = 'ggggggggd';
    sPersonalizedCssFile = setJsCssSrc('css', sPersonalizedCss);

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sPersonalizedCssFile, 'css', 'afterloadPersonalizedCss');
    }, 0);

    setTimeoutFunction('loadPersonalizedCss', c);
}
/**
 *
 * 加载用户自定义主题css 回调函数
 *
 */
function afterloadPersonalizedCss () {
    bLoadPersonalizedCss = false;
}
//加载静态文件=====================

//节点---------
/**
 *
 * 插入script 标签节点
 *
 * @param o
 */
function asynLoadJs (o) {
    insertAfter(o, firstScriptTag());
}

/**
 *
 * 在 j 之后插入 新节点n
 *
 * @param n 新节点 type dom
 * @param j
 */
function insertAfter (n, j) {
    let p = j.parentNode;
    if (p.lastChild == j) {
        p.appendChild(n);
    } else {
        p.insertBefore(n, j.nextSibling);
    }
}

/**
 *
 * 第一个 script 标签 节点
 *
 * @type {string}
 */
let oIndexScriptTag = '';
function firstScriptTag () {
    oIndexScriptTag = oIndexScriptTag ? oIndexScriptTag : domById(sIndexScriptTagId);
    return oIndexScriptTag;
}
/**
 *
 * 根据id获取dom
 *
 * @param d
 * @returns {any}
 */
function domById (d) {
    let o = document.getElementById(d);
    return o != null ? o : false;
}
/**
 *
 * 根据class 获取节点
 *
 * @param c
 * @returns {boolean}
 */
function domByClass (c) {
    let o = oBodyDom.getElementsByClassName(c);
    return o.length > 0 ? o : false;
}
//节点=================

//时间------------------
/**
 *
 * 获取毫秒时间戳
 *
 * @returns {number}
 */
function getMillisecondTime () {
    return new Date().getTime();
}
/**
 *
 * 获取秒时间戳
 *
 * @returns {number}
 */
function getSecondTime () {
    return parseInt(getMillisecondTime() / 1000);
}
//时间===============


//localstorage---------------------
// 从子iframe localstorage 获取 用户自定义主题
let bInloadUserPersonalizedColorFromLocalstorage = false;
function queryUserPersonalizedColor () {
    if (sPersonlizedColor) {
        return sPersonlizedColor;
    }

    if (bInloadUserPersonalizedColorFromLocalstorage) {
        return;
    }
    bInloadUserPersonalizedColorFromLocalstorage = true;

    asyn('queryLocalstorage', sLocalstorgaeUserPersonalizedColorKey, 'afterQueryUserPersonalizedColor');
}
/**
 *
 * @param k localstorage key  string
 * @param f localstorage callback  string
 * @returns {boolean}
 */
function queryLocalstorage (k = '', f = '') {
    if (!k || !f) {
        return false;
    }

    let p = localstoragePage(k);

    p = storagePage(p);
    if (!p) {
        window[f](false);
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        localstoragePostMessage(p, {action: 'get', key: k, after: f});
    }, 0);
}

/**
 *
 * @param c color string
 */
function afterQueryUserPersonalizedColor (c = '') {
    if (c) {
        sPersonlizedColor = c;
    } else {
        sPersonlizedColor = iDefaultUserPersonalizedColor;

        asyn('setPersonlizedColor', sPersonlizedColor);
    }
    bInloadUserPersonalizedColorFromLocalstorage = false;

    asyn('loadPersonlizedColorCss', sPersonlizedColor);
}
/**
 *
 * @param c localstorage key string
 * @returns {boolean}
 */
function setPersonlizedColor (c = '') {
    if (!c) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        setLocalstorage(sLocalstorgaeUserPersonalizedColorKey, c, false, 'loadPersonlizedColorCss');
    }, 0);
}
/**
 *
 * @param c personnalzed color
 * @returns {boolean}
 */
function loadPersonlizedColorCss (c = '') {
    c = c ? c : iDefaultUserPersonalizedColor;
    if (!c) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        loadPersonalizedCss(c);
    }, 0);
}

/**
 *
 * 从localstorage 中获取静态资源
 *
 * @param j 文件完整路径 type string
 * @returns {string}
 */
function getStaticResourceFromLocalstorage (j = '') {
    if (!j) {
        return '';
    }

    return window.localStorage ? localStorage.getItem(name) : '';
}
/**
 *
 * 缓存 读取到的静态文件
 *
 * @param j 文件完整目录 type string
 * @param v 文件内容 type string
 * @param p 文件类型 type string
 */
function cacheStaticResource (j = '', v = '', p = '') {
    let t = setTimeout(function () {
        clearTimeout(t);

        setLocalstorage(j, v, false);
    }, 0);
}

let myStorage = (function myStorage () {
    if (!window.localStorage ) {
        return false;
    }

    let set = function (k, v, t = false) {
        if (!k) {
            return false;
        }

        v = disposeLocalstorageValue (v, t);

        v = JSON.stringify(v);

        let b = localStorage.setItem(k, v);
        return b == undefined ? true : false;
    };

    let get = function (k, t = true) {
        //读取
        let d = localStorage.getItem(k);
        if (!d) {
            return false;
        }
        d = JSON.parse(d);
        if (!d) {
            return false;
        }

        if (typeof d.t !== 'undefined') {
            if (getMillisecondTime() - d.st > d.t) {
                remove(k);
                return false;
            } else {
                if (t) {
                    set(k, d.v, d.t / 1000);
                }
            }
        }

        return d.v;
    };

    let remove = function (k) {
        //读取
        if(!localStorage.getItem(k)){
            return true;
        }

        return localStorage.removeItem(k);
    };

    let clear = function() {
        //清除对象
        localStorage.clear();
    };

    let size = function () {
        let z = 0;
        for(let i in localStorage) {
            if(localStorage.hasOwnProperty(i)) {
                z += localStorage.getItem(i).length;
            }
        }

        return z;
    };

    return {
        set : set,
        get : get,
        remove : remove,
        clear : clear,
        size : size,
    };
})();

/**
 *
 * 添加localstorage缓存
 *
 * @param k localstorage key
 * @param m localstorage message
 * @param t localstorage lefttime
 * @param f localstorage callback function
 * @returns {boolean}
 */
function setLocalstorage (k = '', m = '', t = false, f = '') {
    if (!k || !m) {
        return false;
    }

    let p = localstoragePage (k);

    let s = disposeLocalstorageValue (m, t);
    let l = parseInt(JSON.stringify(s).length) + parseInt(k.length) + parseInt(100);

    p = sLocalstorageBeginPage;

    let z = 0;
    let d = sOriginLocalstorageSizeKey;
    let c = queryLocalstorageCache(d);
    c = eval('(' + c + ')');
    c = c ? c : {};
    while (!z || iMaxLocalstorageSize < z) {
        p = z ? parseInt(p) + parseInt(1) : p;

        if (c && c[p]) {
            z = parseInt(c[p]) + parseInt(l);
        } else {
            z = l;
        }
    }
    c[p] = z;
    asyn('localstorageLocalCache', d, c);

    p = storagePage(p);

    let a = {};
    a = {action: 'set', key: k, message: m};
    if (t) {
        a.leftTime = t;
    }
    if (f) {
        a.after = f;
    }

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        localstoragePostMessage(p, a);
    }, 0);
}

/**
 *
 *  与子iframe交互 localstorage
 *
 * @param p
 * @param m
 * @returns {boolean}
 */
function localstoragePostMessage (p = '', m = '') {
    if (!m || !p) {
        return false;
    }

    let o = domById(p);
    if (o) {
        if (aIframeSonReady[p]) {
            o.contentWindow.postMessage(m, p);
            return true;
        }

        setTimeoutFunction('localstoragePostMessage', p, m);
        return true;
    }

    writeStorageDom(p);

    setTimeoutFunction('localstoragePostMessage', p, m);

    return false;
}

/**
 *
 * 监听子iframe发过来的消息
 *
 */
window.addEventListener('message', function(event){
    if (!event.data) {
        return false;
    }

    if (!event.data) {
        return false;
    }

    console.log('^^^^^^^^^^^^^^^^^^^^^');
    console.log('get form ' + event.origin + ' message, will to do after load localstorage function');
    console.log(event.data);
    console.log('^^^^^^^^^^^^^^^^^^^^^');

    if (event.data.after) {
        if (typeof event.data.after == 'undefined') {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
            console.log(event.data.after);
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }

        window[event.data.after](event.data.message);
    }
}, false);

/**
 *
 * 更新本地存储的远程localstorage size
 *
 * @param z size type int
 */
function updateOriginLocalstorageSize (z = '') {
    if (!z) {
        return;
    }

    if (
        typeof z.host == 'undefined'
        ||
        typeof z.size == 'undefined'
    ) {
        return;
    }

    let d = sOriginLocalstorageSizeKey;
    let c = queryLocalstorageCache(d);
    c = eval('(' + c + ')');
    c = c ? c : {};
    c[z.host] = z.size;
    asyn('localstorageLocalCache', d, c);
}
/**
 *
 * 子iframe发送消息，回调函数
 *
 * @param p
 */
let aIframeSonReady = [];
function sonIsReady (p = '') {
    aIframeSonReady[p] = true;
}

/**
 * 设置storage 页面 url
 *
 * @param i page 远程storage 子域名 序号 type number
 * @returns {string}
 */
function storagePage (i = 0) {
    let p = sBaseProtocol;

    let o = sOrigin ? sOrigin : queryMasterOrigin();
    o = o.replace(p, '');
    return p + i + '.' + sStorageOriginsSonPrefix + '.' + o + '/' + sStoragePage;
}

/**
 *
 * 获取本地localstorage信息
 *
 * @param k local localstorage key
 */
function queryLocalstorageCache (k = '') {
    if (!k) {
        return false;
    }

    return myStorage.get(k);
}

/**
 *
 * 处理localstorage 数据
 *
 * @param v value string
 * @param t lefttime 生存时间
 * @returns {*}
 */
function disposeLocalstorageValue (v, t = false) {
    v = typeof v != 'object' ? v : JSON.stringify(v);

    return t ? {'v': v, 't': t * 1000, 'st': getMillisecondTime()} : {'v': v};
}

/**
 * 先读取本地localstorage，写对应远程storage页面 iframe dom
 */
function writeLocalstorageIframe () {
    let s = queryLocalstorageCache(sOriginLocalstorageSizeKey);

    let a = jsonConvertFormatForReadNumberKey(s);

    for (let i in a) {
        if (a[i] > 0) {
            writeStorageDom (storagePage(i));
        }
    }
}
/**
 *
 * 写远程 storage 页面 iframe
 * @param p 远程 storage 页面完整 url type string
 * @returns {boolean}
 */
function writeStorageDom (p = 0) {
    let d = p;
    if (domById(d)) {
        return true;
    }

    let o = document.createElement('iframe');
    o.src = p;
    o.id = d;

    storageDom().appendChild(o);

    return true;
}

/**
 *
 * 获取子iframe localstorage key 的 域名tag
 *
 * @param k localstorage key string
 * @returns {boolean}
 */
function localstoragePage (k) {
    if (!k) {
        return false;
    }

    let i = myStorage.get(k);

    if (!i) {
        i = sLocalstorageBeginPage;
        localstorageLocalCache (k, i);
    }

    return i;
}
/**
 *
 * 本地localstorage 存储
 *
 * @param k local localstorage key
 * @param v local localstorage value
 */
function localstorageLocalCache (k = '', v = '') {
    if (!k) {
        return false;
    }

    myStorage.set(k, v);
}
//localstorage==================

//json---------------------
/**
 *
 * json 转成 字符串
 *
 * @param s 需要转换的json type json
 * @returns {Array|any}
 */
function jsonConvertFormatForReadNumberKey (s = '') {
    if (!s) {
        return [];
    }

    return eval('(' + s + ')');
}
//json===============

//加载---------------
/**
 *
 * 加载 静态文件
 *
 * @param j 文件完整路径 type string
 * @param t 文件类型 type string
 * @param c 回调函数 type string
 */
let aAllreadyLoadStaticResourceFile = [];
function initStaticResource (j = '', t = '', c = '') {
    if (!j || !t) {
        return false;
    }

    if (aAllreadyLoadStaticResourceFile[j]) {
        return;
    }
    aAllreadyLoadStaticResourceFile[j] = true;

    let v = getStaticResourceFromLocalstorage(j);
    if (v) {
        asyn('writeStaticResourceToPage', v, t);
    } else {
        var xhr = '';
        if (window.ActiveXObject) {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        } else if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }

        if (!xhr) {
            return;
        }

        xhr.open('GET', j, true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                v = xhr.responseText;

                v = v == null ? '' : v;

                asyn('writeStaticResourceToPage', v, t);

                let z = setTimeout(function () {
                    clearTimeout(z);

                    cacheStaticResource(j, v, t);
                }, 0);
            }
        };
    }

    if (c) {
        asyn(c);
    }
}

/**
 *
 * 动态添加js，css文件内容
 *
 * @param v 静态文件内容 type string
 * @param t 类型 type string
 */
function writeStaticResourceToPage(v, t) {
    if (!v || !t) {
        return;
    }

    if (t === 'js') {
        writeJsTag(v);
    } else if (t === 'css') {
        let o = document.createElement('style');
        o.type = 'text/css';
        o.innerHTML = v;

        asyn('addPageStaticResourceData', o, finalMeta());
    }
}
/**
 *
 * 添加静态内容到页面
 *
 * @param o 添加的标签 type string
 * @param f 在哪个标签后添加 type string
 */
function addPageStaticResourceData (o, f) {
    insertAfter(o, f);
}
//加载===================

//限制----------------
/**
 *
 * 电脑端限制
 *
 * @returns {boolean}
 */
function astrict () {
    let b = bMobile !== '' ? bMobile : isMobile();
    if (!b) {
        alert('The computer side is not enabled yet, will jump to ' + sAstrictJumpUrl);

        jump(sAstrictJumpUrl);
        return false;
    }

    return true;
}
//限制==================

//跳转---------------
/**
 *
 * 跳转其他地址
 *
 */
function jump (u) {
    window.location.href = u;
}
//跳转=====================

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

//加载js----------------
/**
 *
 * 加载 index js
 *
 * @returns {boolean}
 */
let bLoadIndexJs = false;
function loadIndexJs () {
    if (bLoadIndexJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadIndexJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sIndexJsFullName, 'js', 'afterloadIndexJs');
    }, 0);

    setTimeoutFunction('loadIndexJs');
}
/**
 *
 * index js 加载完回调函数
 *
 */
function afterloadIndexJs () {
    bLoadIndexJs = true;

    asyn('indexBegin');
}

/**
 *
 * 加载 function js
 *
 * @returns {boolean}
 */
let bLoadFunctionJs1 = false;
function loadFunctionJs () {
    if (bLoadFunctionJs1) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadFunctionJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sFunctionJsFile, 'js', 'afterloadFunctionJs');
    }, 0);

    setTimeoutFunction('loadFunctionJs');
}
/**
 *
 * function js 加载完回调函数
 *
 */
function afterloadFunctionJs () {
    bLoadFunctionJs1 = true;
}

/**
 *
 * 记载本地 jquery
 *
 * @returns {boolean}
 */
let bJquery = false;
let bLoadLocalJquery = false;
function loadLocalJquery () {
    if (bLoadLocalJquery) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadLocalJquery')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sJqueryJsFile, 'js', 'afterloadLocalJquery');
    }, 0);

    setTimeoutFunction('loadLocalJquery');
}
/**
 *
 * 加载本地jquery回调函数
 *
 */
function afterloadLocalJquery () {
    bLoadLocalJquery = true;
    bJquery = true;
}

/**
 *
 * 加载dom js
 *
 * @returns {boolean}
 */
let bLoadDomJs = false;
function loadDomJs () {
    if (bLoadDomJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadDomJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sDomJsFile, 'js', 'afterloadDomJs');
    }, 0);

    setTimeoutFunction('loadDomJs');
}
/**
 *
 * 加载完 dom js 函数回调函数
 *
 */
function afterloadDomJs () {
    bLoadDomJs = true;
}

/**
 *
 * 加载 平台 dom js
 *
 * @returns {boolean}
 */
let bLoadPlatformDomJs = false;
function loadPlatformDomJs () {
    if (bLoadPlatformDomJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadPlatformDomJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sPlatformDomJsFile, 'js', 'afterloadPlatformDomJs');
    }, 0);

    setTimeoutFunction('loadPlatformDomJs');
}
/**
 *
 * 加载 平台 dom js 回调函数
 *
 */
function afterloadPlatformDomJs () {
    bLoadPlatformDomJs = true;

    asyn('platformBegin');
}

/**
 *
 * 加载 逻辑 logic js
 *
 * @returns {boolean}
 */
let bLoadLogicJs = false;
function loadLogicJs () {
    if (bLoadLogicJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadLogicJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sLogicJsFile, 'js', 'afterloadLogicJs');
    }, 0);

    setTimeoutFunction('loadLogicJs');
}
/**
 *
 * 加载 逻辑 logic js 回调函数
 *
 */
function afterloadLogicJs () {
    bLoadLogicJs = true;

    asyn('logicBegin');
}

/**
 *
 * 加载 api js
 *
 * @returns {boolean}
 */
let bLoadApiJs = false;
function loadApiJs () {
    if (bLoadApiJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadApiJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sApiJsFile, 'js', 'afterloadApiJs');
    }, 0);

    setTimeoutFunction('loadApiJs');
}
/**
 *
 * 加载 api js 回调函数
 *
 */
function afterloadApiJs () {
    bLoadApiJs = true;
}

/**
 *
 * 加载 加密函数 js
 *
 * @returns {boolean}
 */
let bLoadEncodeJs = false;
function loadEncodeJs () {
    if (bLoadEncodeJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadEncodeJs')) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sEncodeJsFile, 'js', 'afterloadEncodeJs');
    }, 0);

    setTimeoutFunction('loadEncodeJs');
}
/**
 *
 * 加载 加密函数 js 回调函数
 *
 */
function afterloadEncodeJs () {
    bLoadEncodeJs = true;
}

/**
 *
 * 加载 js 文件
 *
 */
function loadBaseJs () {
    asyn('loadLocalJquery');

    asyn('loadIndexJs');

    asyn('loadFunctionJs');

    asyn('loadEncodeJs');

    asyn('loadDomJs');

    asyn('loadPlatformDomJs');

    asyn('loadLogicJs');

    asyn('queryUserLang');

    asyn('loadApiJs');
}
//用户语言
let bAllreadyLoadUserLang = false;
function queryUserLang () {
    if (sUserLangvage) {
        return sUserLangvage;
    }

    if (bAllreadyLoadUserLang) {
        return;
    }
    bAllreadyLoadUserLang = true;

    asyn('queryLocalstorage', sLocalstorageLangTag, 'afterQueryLang');
}
/**
 *
 *
 *
 * @param l lang
 */
function afterQueryLang (l = '') {
    if (l) {
        sUserLangvage = l;
    } else {
        sUserLangvage = sDefaultLangvage;
        asyn('setLang', sUserLangvage);
    }
    bAllreadyLoadUserLang = false;

    asyn('loadLang', sUserLangvage);
}
/**
 *
 * 加载语言包
 *
 * l 语言包 名字 type string
 *
 * @type {number}
 */
let iLastRequestLangTime = 0;
function loadLang (l = '') {
    l = l ? l : sUserLangvage;
    if (!l) {
        return false;
    }

    let t = getMillisecondTime();
    if (t - iLastRequestLangTime < iRequertLangJsTimeout) {
        setTimeoutFunction('loadLang', l);
        return false;
    }
    iLastRequestLangTime = t;

    let y = '';
    switch (l) {
        case 'cn' :
            y = sCnLangFile;
            break;
        case 'en' :
            y = sEnLangFile;
            break;
    }
    if (!y) {
        return false;
    }

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        initStaticResource(y, 'js', 'replaceLangs');
    }, 0);
}
/**
 *
 * set localstorage lang 之后操作
 *
 * @param b 结果 type bool
 * @returns {boolean}
 */
function afterSetLang (b = '') {
    if (!b) {
        return false;
    }
}
/**
 *
 * set localstorage lang
 *
 * @param l 语言 type string
 * @returns {boolean}
 */
function setLang (l = '') {
    if (!l) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        setLocalstorage(sLocalstorageLangTag, l, false, 'afterSetLang');
    }, 0);
}
//加载js==================

//host---------------
/**
 *
 * 设置host数组
 *
 * @returns {boolean}
 */
let aHost = [];
let iHostNumber = 0;
function setHosts () {
    let i = 0;
    let o = window.location.host;
    for (i; i < sBaseHostSonNumber; i++) {
        aHost.push(sBaseProtocol + i + '.' + sBaseHostSonPrefix + '.' + o);
    }
    iHostNumber = aHost.length;

    return true;
}

/**
 *
 * hash 计算当前应该请求哪个地址
 *
 * @param u
 * @returns {boolean|*}
 */
function allocationHost (u = '') {
    if (!u) {
        return false;
    }

    return aHost[hashFunc(u, iHostNumber)];
}
//host===================

//hash------------------
/**
 *
 * hash 求余
 *
 * @param s  带求余字符串
 * @param i 余数
 * @returns {boolean|number}
 */
function hashFunc(s, i){
    if (!s ||!i) {
        return false;
    }

    //1.定义iHashCode变量
    let h = 0;

    //2.霍纳算法，来计算 h的值
    for (let i = 0; i < s.length; i++) {
        h = 37 * h + s.charCodeAt(i) //获取编码
    }
    h = parseInt(h);

    //3.取余状态
    return h % i;
}
//hash=======================

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

    asyn('changeBodyStatus', false);

    let a = [
        oDomFatherId,
        sDomShadeId,
        oDomStorageId,
        sDomNoticeId,
    ];

    let s = '';
    for (let i in a) {
        s += '<div id="' + a[i] + '"></div>';
    }

    bodyDom().innerHTML = s;

    asyn('fatherDom');
    asyn('threeClassBodyDom');

    asyn('shadeDom');
    asyn('writeShades');

    asyn('noticeDom');

    asyn('storageDom');
    storageDom().style.display = 'none';
    asyn('writeLocalstorageIframe');
}
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
let oStorageDom = '';
function storageDom () {
    oStorageDom = oStorageDom ? oStorageDom : domById(oDomStorageId);
    return oStorageDom;
}
//dom相关==========

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

function size () {
    asyn('winSize');
}
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

    bodyDom().appendChild(o);

    // 原生方法获取浏览器对元素的计算值
    o = domById(d);
    let w = o.getBoundingClientRect().width;
    o.parentNode.removeChild(o);
    return w;
}

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

let oHtml = false;
let oHead = false;
let oBody = false;
function begin () {
    asyn('showBaseShade');

    if (!astrict()) {
        return false;
    }

    oHtml = document.getElementsByTagName('html')[0];
    oHead = document.getElementsByTagName('head')[0];
    oBody = document.getElementsByTagName('body')[0];

    let b = true;
    try {
        let sTestStorageKey = 'private_test';
        localStorage.setItem(sTestStorageKey, 1);
        localStorage.removeItem(sTestStorageKey);
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

    asyn('setHosts');

    asyn('staticResourceVersion');

    let t= setTimeout(function () {
        clearTimeout(t);

        sBaseJsFile = setJsCssSrc('js', sBaseJs);
        initStaticResource(sBaseJsFile, 'js', 'baseBegins');
    }, 0);

    asyn('getUserIp');

    asyn('loadBaseJs');

    asyn('loadBaseCss');

    asyn('secondDom');
}

function winResize (bOnload = false) {
    if (!bOnload) {
        asyn('showBaseShade');

        if (!astrict()) {
            return false;
        }
    }

    asyn('size');
}

// window.onload = begin();

window.onresize = function () {
    asyn('showBaseShade');

    if (aBaseTimer['winResize']) {
        clearTimeout(aBaseTimer['winResize']);
    }

    aBaseTimer['winResize'] = setTimeout(function () {
        winResize();
    }, aTimer['winResize']);
}
