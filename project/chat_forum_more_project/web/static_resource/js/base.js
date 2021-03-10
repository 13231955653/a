const debug = true;

const sBaseProtocol = window.location.protocol + '//';

const sBaseHostSonPrefix = 'static_resource';
const sBaseHostSonNumber = 21;

const sQueryOneMmPxId = 'get_one_mms_px';

const aAllreadyLoadIframe = [];

const iDefaultFontSize = 16; //默认pc字体大小
const iDefaultOneFontMms = 2.5; //默认一个中文字占多宽，单位毫米

//localstorage相关
const iMaxLocalstorageSize = 4718592;
const sOriginLocalstorageSizeKey = 'origin_localstorage_size';
const sStorageOriginsSonPrefix = 'storage';
const sStoragePage = 'storage.html';
const sLocalstorageTagMd5Salt = '______9*^&*%^$%$67dasy~`<>?dg';
const sLocalstorageLangTag = 'localstorage_lang';
const sLocalstorgaeUserPersonalizedColorKey = 'user_personlized_color';
const sLocalstorgaeNowPageTag = 'localstorage_cache_now_page';
const sLocalstorgaeBeginTag = 0;
//localstorage相关

const sNoShowIframeCLass = 'iframe_no_show';

const iDefaultUserPersonalizedColor = 1;
let iFontSize = 16;

const sDefaultLangvage = 'cn';
let sUserLangvage = '';
let sPersonlizedColor = '';

const oDomFatherId = 'dom_father';

let sOrigin = '';

const sHtmlLang = 'zh-cn';
let sCharset = 'utf-8';

const sIsPhone = 'phone';
const sIsTablet = 'tablet';
const sIsPc = 'pc';

const iRequertTimeout = 9000;
const iRequertLangJsTimeout = 5000;
const iMaxLoadOriginJqueryWaitTime = 5000;

const iNoticeTimeLimit = 3600000;

let aBaseTimer = []; //基础定时器
const b = []; //基础定时器间隔时间
// const t = 1000;
const t = 15;
// const t2 = 1000;
const t2 = 16;
b['winResize'] = t2;
b['loadEncodeJs'] = t;
b['loadLogicJs'] = t;
b['loadDomJs'] = t;
b['loadFunctionJs'] = t;
b['loadOriginJquery'] = t;
b['loadLang'] = t;
b['logicBegin'] = t;
b['loadPlatformDomJs'] = t;
b['baseBegin'] = t;
b['loadResetCss'] = t;
b['checkLoadCss'] = t;
b['writeStorageDom'] = t;
b['loadLocalJquery'] = t;
b['replaceLangs'] = t;
b['loadPublicCss'] = t;
b['loadPersonalizedCss'] = t;
b['loadVariableCss'] = t;
b['writePublicDom'] = t;
b['shade'] = t;
b['individuationUuid'] = t;
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
b['logicBegin'] = t;
b['writePublicDom'] = t;
b['afterLoadPageJs'] = t;
b['updateUrlPage'] = t;
b['setContent'] = t;
b['base'] = t;
b['loadIndexJs'] = t;
b['showUseTimeLimitNotice'] = t;
b['checkUseTime'] = 60000;
b['checkSessionIdOutTime'] = 181652;
b['checkSessionKeyFormat'] = 253648;
const aTimer = b; //基础定时器间隔时间

const sIndexScriptTagId = 'index_js_script';
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

let sBaseJsFile = '';
let sIndexJsFullName = '';
let sFunctionJsFile = '';
let sJqueryJsFile = '';
let sLogicJsFile = '';
let sDomJsFile = '';
let sPlatformDomJsFile = '';
let sEncodeJsFile = '';
let sApiJsFile = '';
let sOriginJquery = '';
let sCnLangFile = '';
let sEnLangFile = '';
let sForumJsFile = '';
let sChatJsFile = '';
let sFriendJsFile = '';
let sSettingJsFile = '';

const aCssVersion = []; // css 文件版本号
let sResetCssFile = '';
let sPublicCssFile = '';
let sPersonalizedCssFile = '';

function isMobile () {
    let u = navigator.userAgent;
    let m = [ 'Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad','iPod'];
    let b = false;

    //根据userAgent判断是否是手机
    for (let v = 0; v < m.length; v++) {
        if (u.indexOf(m[v]) > 0) {
            b = true;
            break;
        }
    }

    return b;
}
function platformTag () {
    return isMobile ? 'mobile' : 'computer';
}
const sPlatformTag = platformTag();

const sBaseJs = '/static_resource/js/public/base.js';
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
const sApiJs = '/static_resource/js/public/query/query.js';
sOriginJquery = 'http://code.jquery.com/jquery-1.9.1.min.js'; ////////////国内外需要更换适用的地址
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
c[sSettingJs] = 'oooooooo';
c[sApiJs] = 'ppppppp';
const aJsVersion = c; // js 文件版本号

let bAllreadyLoadBaseCss = false;
function loadBaseCss () {
    if (bAllreadyLoadBaseCss) {
        return;
    }
    bAllreadyLoadBaseCss = true;

    let t2 = setTimeout(function () {
        clearTimeout(t2);

        loadPersonalizedCss();
    }, 1);

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        loadResetCss();
    }, 1);

    let t3 = setTimeout(function () {
        clearTimeout(t3);

        loadPublicCss();
    }, 1);
}

let bLoadPublicCss = false;
function loadPublicCss () {
    if (bLoadPublicCss) {
        return true;
    }

    if (!checkRequestJsCssLimit('css', 'loadPublicCss')) {
        return false;
    }

    loadCss(sPublicCssFile, 'afterloadPublicCss');

    setTimeoutFunction('loadPublicCss');
}
function afterloadPublicCss () {
    bLoadPublicCss = true;
}

let bLoadResetCss = false;
function loadResetCss () {
    if (bLoadResetCss) {
        return true;
    }

    if (!checkRequestJsCssLimit('css', 'loadResetCss')) {
        return false;
    }

    loadCss(sResetCssFile, 'afterloadResetCss');

    setTimeoutFunction('loadResetCss');
}
function afterloadResetCss () {
    bLoadResetCss = true;
}

let bLoadPersonalizedCss = false;
function loadPersonalizedCss (c = false) {
    if (!c) {
        queryUserPersonalizedColor();
        return;
    }

    if (bLoadPersonalizedCss) {
        console.log('loadPersonalizedCss bLoadPersonalizedCss in loading, so no to do ');
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

    loadCss(sPersonalizedCssFile, 'afterloadPersonalizedCss');

    setTimeoutFunction('loadPersonalizedCss', c);
}
function afterloadPersonalizedCss () {
    bLoadPersonalizedCss = false;
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
        console.log('loadCss r is null');
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

    oHead.insertBefore(l, document.getElementById(sIndexScriptTagId));
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
        console.log('checkLoadCss c or d is null');
        return false;
    }

    let k = 'checkLoadCss' + '--' + c;
    if (document.getElementById(d)) {
        clearTimeout(aBaseTimer[k]);

        clearTimeout(aBaseTimer[k]);

        window[c]();
        return;
    }

    aBaseTimer[k] = setTimeout(function () {
        checkLoadCss(c, d);
    }, aTimer['checkLoadCss']);
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
        p.insertBefore(n,j.nextSibling);
    }
}


let bInloadUserPersonalizedColorFromLocalstorage = false;
function queryUserPersonalizedColor () {
    if (sPersonlizedColor) {
        console.log('queryUserPersonalizedColor sPersonlizedColor is defined, so no to load user personlized color css file');
        return sPersonlizedColor;
    }

    if (bInloadUserPersonalizedColorFromLocalstorage) {
        console.log('queryUserPersonalizedColor bInloadUserPersonalizedColorFromLocalstorage is true, so no to load user personlized color css file');
        return;
    }
    bInloadUserPersonalizedColorFromLocalstorage = true;

    queryLocalstorage(sLocalstorgaeUserPersonalizedColorKey, 'afterQueryUserPersonalizedColor');
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

        setPersonlizedColor(sPersonlizedColor);
    }
    bInloadUserPersonalizedColorFromLocalstorage = false;

    loadPersonlizedColorCss(sPersonlizedColor);
}
/**
 *
 * @param c localstorage key string
 * @returns {boolean}
 */
function setPersonlizedColor (c = '') {
    if (!c) {
        console.log('setPersonlizedColor c is null');
        return false;
    }

    setLocalstorage(sLocalstorgaeUserPersonalizedColorKey, c, false, 'loadPersonlizedColorCss');
}
/**
 *
 * @param c personnalzed color
 * @returns {boolean}
 */
function loadPersonlizedColorCss (c = '') {
    c = c ? c : iDefaultUserPersonalizedColor;
    if (!c) {
        console.log('loadPersonlizedColorCss c is null');
        return false;
    }

    loadPersonalizedCss(c);
}

function loadJs (s = '', b = true, c = false) {
    if (!s) {
        return false;
    }

    let o = document.createElement('script');
    o.type = 'text/javascript';
    o.src = s;
    o.async = b;
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

    oHead.appendChild(o);
    insertAfter(o, document.getElementById(sIndexScriptTagId));
}

function setCssPathAndVersion () {
    let sResetCss = '/static_resource/css/public/reset.css';
    let sPublicCss = '/static_resource/css/public/' + sPlatformTag + '/public.css';

    aCssVersion[sResetCss] = 'zzzzzzz';
    aCssVersion[sPublicCss] = 'yyyyyy';

    sResetCssFile = setJsCssSrc('css', sResetCss);
    sPublicCssFile = setJsCssSrc('css', sPublicCss);
}

// hash 求余
function hashFunc(sStr, iSize){
    if (!sStr ||!iSize) {
        console.log(sStr);
        console.log(iSize);
        console.log('hashFunc sStr or iSize is null');
        return false;
    }

    //1.定义iHashCode变量
    let iHashCode = 0;

    //2.霍纳算法，来计算 iHashCode的值
    for (let i = 0; i < sStr.length; i++) {
        iHashCode = 37 * iHashCode + sStr.charCodeAt(i) //获取编码
    }
    iHashCode = parseInt(iHashCode);

    //3.取余状态
    return iHashCode % iSize
}

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

function allocationHost (u = '') {
    if (!u) {
        console.log('hashFunc sStr or iSize is null');
        return false;
    }

    return aHost[hashFunc(u, iHostNumber)];
}

//获取毫秒时间戳
function getNowTime () {
    return new Date().getTime();
}
//获取时间戳
function getTime () {
    return parseInt(getNowTime() / 1000);
}

function setJsCssSrc (sType = '', sSrc = '') {
    if (!sType ||!sSrc) {
        console.log('hashFunc sType or sSrc is null');
        return false;
    }

    let sVersion = getNowTime();
    switch (sType) {
        case 'js' :
            sVersion = aJsVersion[sSrc];
            break;
        case 'css' :
            sVersion = aCssVersion[sSrc];
            break;
    }

    return allocationHost(sSrc) + sSrc + '?v=' + sVersion + jsCssVersionSuffix();
}
function jsCssVersionSuffix () {
    return debug ? getNowTime() : '';
}

function setJsPathAndVersion () {
    sBaseJsFile = setJsCssSrc('js', sBaseJs);
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
    sApiJsFile = setJsCssSrc('js', sApiJs);
}

function checkUseTime () {
    if (getTime() - iBeginTime > iNoticeTimeLimit) {
        iBeginTime = getTime();

        showUseTimeLimitNotice();
    }

    setTimeoutFunction('checkUseTime');
}
function showUseTimeLimitNotice () {
    if (typeof aLang == 'undefined') {
        console.log('showUseTimeLimitNotice aLang is undefined, so settimeout retry ');

        setTimeoutFunction('showUseTimeLimitNotice');
        return;
    }

    alert(aLang['use_time_out_limit']);
}

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
        console.log(f);
        console.log('setTimeoutFunction f is null');
        return false;
    }

    if (typeof aTimer[f] == 'undefined') {
        console.log(f);
        console.log('setTimeoutFunction aTimer ' + f + ' undefined');
    }

    if (typeof window[f] != 'function') {
        console.log(f);
        console.log('setTimeoutFunction ' + f + ' is not function');

        setTimeoutFunction(f, a, b);
        return;
    }

    aBaseTimer[f] = setTimeout(function () {
        if (!a) {
            window[f]();
        } else {
            if (b) {
                window[f](a, b);
            } else {
                window[f](a);
            }
        }
    }, aTimer[f]);

    return true;
}

let aRequestJsCssLastTime = [];
function checkRequestJsCssLimit (sType = '', f = '') {
    if (!f) {
        console.log('checkRequestJsCssLimit sType or f is null');
        return false;
    }

    let iNowTime = getNowTime();
    let iLastRequestTime = typeof aRequestJsCssLastTime[f] !== 'undefined' ? aRequestJsCssLastTime[f] : 0;
    if (iNowTime - iLastRequestTime < iRequertTimeout) {
        console.log('checkRequestJsCssLimit ' + f + ' time last ' + iRequertTimeout + ' millisecond, so wait a minutes retry ');
        setTimeoutFunction(f);
        return false;
    }
    aRequestJsCssLastTime[f] = iNowTime;

    return true;
}

function queryMasterOrigin () {
    let t = '.';
    let o = window.location.origin;
    let a = o.split(t);
    let l = a.length;
    let s = window.location.protocol;
    o = a[l - 2] + t + a[l - 1];
    o = o.replace(s + '//', '');
    o = s + '//' + o;

    sOrigin = o;
    return o;
}

let bLoadIndexJs = false;
function loadIndexJs () {
    if (bLoadIndexJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadIndexJs')) {
        return false;
    }

    loadJs(sIndexJsFullName, true, 'afterloadIndexJs');

    setTimeoutFunction('loadIndexJs');
}
function afterloadIndexJs () {
    bLoadIndexJs = true;
}

function setHtmlLang () {
    oHtml.lang = sHtmlLang;
}

let bSetMeta = false;
function setMeta () {
    if (bSetMeta) {
        return;
    }
    bSetMeta = true;

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

    for (let i in a) {
        setContent(a[i]);
    }
}
function finalMeta () {
    return document.getElementById(sFinalMetaTagId);
}
/**
 *
 * 设置 meta 标签
 *
 * @param n meta name type string
 */
function setContent (n = '') {
    let o = finalMeta();
    let m = '';
    if (n !== sCopyright) {
        m = document.createElement('meta');
    }
    switch (n) {
        case sCopyright :
            o.name = 'Copyright';
            o.content = sCopyrightContent;
            return;
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
    oHead.insertBefore(m, finalMeta());
}

function fatherDom () {
    let o = document.getElementById(oDomFatherId);
    if (o) {
        return o;
    }

    o = document.createElement('div');
    o.id = oDomFatherId;

    oBody.appendChild(o);

    return o;
}

let bAllreadyLoadUserLang = false;
function queryUserLang () {
    if (sUserLangvage) {
        console.log('queryUserLang sUserLangvage is defined, so rerturn sUserLangvage, no get user lang from localstorage ');
        return sUserLangvage;
    }

    if (bAllreadyLoadUserLang) {
        console.log('queryUserLang bAllreadyLoadUserLang is true, so no to load user lang from localstorage ');
        return;
    }
    bAllreadyLoadUserLang = true;

    queryLocalstorage(sLocalstorageLangTag, 'afterQueryLang');
}
function afterQueryLang (sLang = '') {
    if (sLang) {
        sUserLangvage = sLang;
    } else {
        sUserLangvage = sDefaultLangvage;
        setLang(sUserLangvage);
    }
    bAllreadyLoadUserLang = false;

    loadLang(sUserLangvage);
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
        console.log('loadLang l is null, so no to load lang js ');
        return false;
    }

    let t = getNowTime();
    if (t - iLastRequestLangTime < iRequertLangJsTimeout) {
        console.log('loadLang l last time limit, so no to load lang js ');
        setTimeoutFunction('loadLang');
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
        console.log('loadLang y is null, so no to load lang js ');
        return false;
    }

    loadJs(y, true, 'replaceLangs');
}

window.addEventListener('message', function(event){
    if (!event.data) {
        return false;
    }

    if (!event.data || !event.data.after) {
        console.log('addEventListener data or data.after is null');
        return false;
    }

    console.log('^^^^^^^^^^^^^^^^^^^^^');
    console.log('get form ' + event.origin + ' message, will to do after load localstorage function');
    console.log(event.data);
    console.log('^^^^^^^^^^^^^^^^^^^^^');

    window[event.data.after](event.data.message);
}, false);

/**
 *
 * @param v value string
 * @param t lefttime
 * @returns {*}
 */
function disposeLocalstorageValue (v, t = false) {
    v = typeof v != 'object' ? v : JSON.stringify(v);

    return t ? {'v': v, 't': t * 1000, 'st': getNowTime()} : {'v': v};
}

/**
 *
 * @param k localstorage key string
 * @returns {boolean}
 */
function localstoragePage (k) {
    if (!k) {
        console.log('localstoragePage k is null');
        return false;
    }

    let i = myStorage.get(k);

    if (!i) {
        i = sLocalstorgaeBeginTag;
        localstorageLocalCache (k, i);
    }

    return i;
}

function localstorageNowPage () {
    let i = myStorage.get(sLocalstorgaeNowPageTag);
    return i ? i : sLocalstorgaeBeginTag;
}

/**
 *
 * @param k localstorage key  string
 * @param f localstorage callback  string
 * @returns {boolean}
 */
function queryLocalstorage (k = '', f = '') {
    if (!k || !f) {
        console.log('queryLocalstorage k or f is null');
        return false;
    }

    let p = localstoragePage(k);

    p = storagePage(p);
    if (!p) {
        window[f](false);
        console.log('queryLocalstorage setLocalstorageOrigins p is null');
        return false;
    }

    localstoragePostMessage(p, {action: 'get', key: k, after: f});
}

function localstoragePostMessage (p = '', m = '') {
    if (!m || !p) {
        console.log('localstoragePostMessage m or p is null');
        return false;
    }

    let o = document.getElementById(p);
    if (typeof aAllreadyLoadIframe[p] != 'undefined') {
        o.contentWindow.postMessage(m, p);
        return true;
    }

    if (!o) {
        writeStorageDom(p);
    }

    let t = setTimeout(function () {
        console.log('localstoragePostMessage o is null, so settimeout retry ');
        localstoragePostMessage (p, m);

        clearTimeout(t);
    }, aTimer['localstoragePostMessage']);

    return false;
}

let myStorage = (function myStorage () {
    if (!window.localStorage ) {
        console.log('myStorage localstorage error');
        return false;
    }

    let set = function (sKey, sValue, iLeftTime = false) {
        if (!sKey) {
            console.log('myStorage set sKey or sValue is null');
            return false;
        }

        sValue = disposeLocalstorageValue (sValue, iLeftTime);

        sValue = JSON.stringify(sValue);

        let bResult = localStorage.setItem(sKey, sValue);
        return bResult == undefined ? true : false;
    };

    let get = function (sKey, bUpdateLifttime = true) {
        //读取
        let oData = localStorage.getItem(sKey);
        if (!oData) {
            return false;
        }
        oData = JSON.parse(oData);
        if (!oData) {
            return false;
        }

        if (typeof oData.t !== 'undefined') {
            if (getNowTime() - oData.st > oData.t) {
                remove(sKey);
                return false;
            } else {
                if (bUpdateLifttime) {
                    set(sKey, oData.v, oData.t / 1000);
                }
            }
        }

        return oData.v;
    };

    let remove = function (sKey) {
        //读取
        let oData = localStorage.getItem(sKey);
        if(!oData){
            return true;
        }

        return localStorage.removeItem(sKey);
    };

    let clear = function() {
        //清除对象
        localStorage.clear();
    };

    return {
        set : set,
        get : get,
        remove : remove,
        clear : clear
    };
})();

function isJson (sStr = '') {
    if (!sStr) {
        return false;
    }

    if (typeof sStr == 'sString') {
        try {
            JSON.parse(sStr);
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}

/**
 *
 * json 转成 字符串
 *
 * @param s 需要转换的json type json
 * @returns {Array|any}
 */
function jsonConvertFormatForReadNumberKey (s = '') {
    if (!s) {
        console.log('jsonToArray s is null, so return []');
        return [];
    }

    return eval('(' + s + ')');
}

/**
 *
 * @param k local localstorage key
 * @param v local localstorage value
 */
function localstorageLocalCache (k = '', v = '') {
    if (!k) {
        console.log('localstorageLocalCache k or v is null, so no to do');
        return false;
    }

    myStorage.set(k, v);
}
/**
 *
 * @param k local localstorage key
 */
function queryLocalstorageCache (k = '') {
    if (!k) {
        console.log('queryLocalstorageCache k is null, so no to do');
        return false;
    }

    return myStorage.get(k);
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
    if (document.getElementById(d)) {
        console.log('writeStorageDom ' + p + ' is allready exist, so retrun true ');
        return true;
    }

    let o = document.createElement('iframe');
    o.src = p;
    o.className = sNoShowIframeCLass;
    o.id = d;

    fatherDom().appendChild(o);

    if (o.attachEvent) {
        o.attachEvent('onload', function() {
            aAllreadyLoadIframe[o.id] = true;
        });
    } else {
        o.onload = function() {
            aAllreadyLoadIframe[o.id] = true;
        };
    }

    return true;
}

let os = function() {
    let ua = navigator.userAgent;
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;

    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
}();

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

// 获取每毫米的像素值
function getOneMmsPx (){
    let d = sQueryOneMmPxId;

    // 创建一个1mm宽的元素插入到页面，然后坐等出结果
    let o = document.createElement('div');
    o.id = d;
    o.style.width = '1mm';

    fatherDom().appendChild(o);

    // 原生方法获取浏览器对元素的计算值
    o = document.getElementById(d);
    let w = o.getBoundingClientRect().width;
    o.parentNode.removeChild(o);
    return w;
}

/**
 *
 * 根据每毫米px大小 设置字体大小
 */
function initializeFontSize () {
    let p = checkPlatform();

    // if (p === sIsPhone) {
    //     iFontSize = Math.ceil(iDefaultOneFontMms * getOneMmsPx());
    // }

    // if (p === sIsTablet) {
    iFontSize = Math.ceil(iDefaultOneFontMms * getOneMmsPx());
    // }

    if (p === sIsPc) {
        iFontSize = iDefaultFontSize;
    }

    oHtml.style.fontSize = iFontSize + 'px';
}

let bLoadOriginJquery = false;
let iLoadOriginJqueryLastTime = 0;
let bAllreadyLoadOriginJquery = false;
function loadOriginJquery () {
    if (bLoadOriginJquery) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadOriginJquery')) {
        return false;
    }
    iLoadOriginJqueryLastTime = getNowTime();

    if (bAllreadyLoadOriginJquery) {
        return true;
    }
    bLoadOriginJquery = true;

    loadJs(sOriginJquery, true, 'afterloadOriginJquery');

    setTimeoutFunction('loadOriginJquery');
}
function afterloadOriginJquery () {
    bLoadOriginJquery = true;
}

let iBeginTime = 0;
let oHtml = false;
let oHead = false;
let oBody = false;
function base () {
    console.log('base begin');

    if (!oHtml || typeof oHtml == 'undefined') {
        oHtml = document.getElementsByTagName('html')[0];

        setTimeoutFunction('base');
        return;
    }
    if (!oHead || typeof oHead == 'undefined') {
        oHead = document.getElementsByTagName('head')[0];

        setTimeoutFunction('base');
        return;
    }
    if (!oBody || typeof oBody == 'undefined') {
        oBody = document.getElementsByTagName('body')[0];

        setTimeoutFunction('base');
        return;
    }

    let t4 = setTimeout(function () {
        clearTimeout(t4);

        setHtmlLang();
    }, 1);

    let t5 = setTimeout(function () {
        clearTimeout(t5);

        initializeFontSize();
    }, 1);

    let t8 = setTimeout(function () {
        clearTimeout(t8);

        setMeta();
    }, 1);

    let t10 = setTimeout(function () {
        clearTimeout(t10);

        fatherDom();
    }, 1);

    let t6 = setTimeout(function () {
        clearTimeout(t6);

        writeLocalstorageIframe();
    }, 1);

    let t9 = setTimeout(function () {
        clearTimeout(t9);

        queryMasterOrigin();
    }, 1);

    let t14 = setTimeout(function () {
        clearTimeout(t14);

        setHosts();
    }, 1);

    let t15 = setTimeout(function () {
        clearTimeout(t15);

        setCssPathAndVersion();
    }, 1);

    let t16 = setTimeout(function () {
        clearTimeout(t16);

        setJsPathAndVersion();
    }, 1);

    let t2 = setTimeout(function () {
        clearTimeout(t2);

        loadBaseCss();
    }, 1);

    if (typeof aLang == 'undefined') {
        let t7 = setTimeout(function () {
            clearTimeout(t7);

            queryUserLang();
        }, 1);
    }

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        loadOriginJquery();
    });

    let t3 = setTimeout(function () {
        clearTimeout(t3);

        iBeginTime = getTime();
        checkUseTime();
    }, 1);

    let t13 = setTimeout(function () {
        clearTimeout(t13);

        loadIndexJs();
    }, 1);
}

window.onload = base();