/*33f00aeae2406ffe*/const sIndividuationUuidTag = '*';
const sUniqueStrSplitTag = '_';
const iIndividuationUniqueStrLength = 1000;
const iIndividuationUniqueStrNumberMin = 0;
const iIndividuationUniqueStrNumberMax = 999999999999999999;
const iIndividuationUniqueStrMinLength = 32;/*33f00aeae2406ffe*/

/*9d8f73176201b827*///meta标签相关----------------
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
//meta标签相关==============/*9d8f73176201b827*/

/*4df730057a2f2f29*///定时器相关----------
let aBaseTimer = []; //基础定时器
let b = []; //基础定时器间隔时间
// const t = 1000;
b['checkUseTime'] = 60000;
// b['checkSessionIdOutTime'] = 181652;
// b['checkSessionKeyFormat'] = 253648;
const aTimer = b; //基础定时器间隔时间
b = null;
//定时器相关========================/*4df730057a2f2f29*/

/*a4fb1441abb8ade0*///fontsize 相关--------------
let iFontSize = 16;
const iDefaultFontSize = 16; //默认pc字体大小
const iDefaultOneFontMms = 2.5; //默认一个中文字占多宽，单位毫米
//fontsize 相关===============/*a4fb1441abb8ade0*/

/*3d6db13f8bf8dde2*///class id tag 相关----------------
var sBaseShadeId = 'base_shade';

const sBodyDomFatherId = 'body';
const oDomFatherId = 'dom_f';
const sDomNoticeId = 'notice_f';
const sDomShadeId = 'shade_f';

const sFullWidthClass = 'full_w';
const sFullWidthForFatherClass = 'full_w_for_father';
const sFullHeightClass = 'full_h';
const sFullHeightForFatherClass = 'full_h_for_father';

const sTextCenterC = 'text_center';

const sQueryOneMmPxId = 'get_one_mms_px';

const sInvisibleClass = 'invisible'; //不显示dom的class
const sVisibleClass = 'visible';//显示dom的class
const sHiddenClass = 'hidden'; //不显示dom的class
const sShowClass = 'show';//显示dom的class
//class id tag 相关============/*3d6db13f8bf8dde2*/

/*aaa*/const sGray = 'gray';
const sColours = 'colours';/*aaa*/

/*bbb*/let iNowIndex = 1;/*bbb*/

/*3d6db13f8bf8dde2*///尺寸相关----------------
let iWinWidth = 0;
let iWinHeight = 0;
//尺寸相关============
/*3d6db13f8bf8dde2*/

/*6d0af007b1b15e5c*///时间相关---------------------
const iNoticeTimeLimit = 3600000;
//时间相关=======================/*6d0af007b1b15e5c*/

/*2355292fdec0dbed*///class id tag 相关----------------
const sReLangC = 're_lang';
//class id tag 相关====================/*2355292fdec0dbed*/

/*e1a6417e3b08ff43*///动画相关-------------------
const iSpeed = 150; //动画速度
//动画相关==========================/*e1a6417e3b08ff43*/

/*e2c9f2a15be30df1*///用户ip-----------
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
}/*e2c9f2a15be30df1*/

/*05a159c046b3a0ba*//**
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
}/*05a159c046b3a0ba*/

/*00485a3b371e8b13*//**
 *
 * 插入script 标签节点
 *
 * @param o 新插入节点 type dom object
 */
function asynLoadJs (o) {
    insertAfter(o, firstScriptTag());
}/*00485a3b371e8b13*/

/*a9a1e62034e2ca93*//**
 *
 * 随机数字
 *
 * @param i 最小数字 type int
 * @param a 最大数字 type int
 * @returns {*}
 */
function randNum (i, a) {
    return(i + Math.round((Math.random()) * (a - i)));
}/*a9a1e62034e2ca93*/

/*3ed8ed97f79fa3d8*//**
 *
 * 引入页面js文件
 *
 * @type {boolean}
 */
let sNowPageJs = '';
function loadPageJs () {
    sPageNow = getNowPage();

    let m = '';
    let c = '';
    let n = '';
    switch (sPageNow) {
        case sForumPage:
            c = sForum;
            m = sSideForumJ;
            n = sForumC;
            break;
        case sChatPage:
            c = sChatJ;
            m = sMouseChatJ;
            n = sChatC;
            break;
        case sFriendPage:
            c = sFriendJ;
            m = sMouseFriendJ;
            n = sFriendC;
            break;
        case sSetPage:
            c = sSetJ;
            m = sMouseSetJ;
            n = sSetC;
            break;
        case sAboutMePage:
            c = sAboutJ;
            m = sMouseAboutMeJ;
            n = sAboutC;
            break;
    }
    if (!c) {
        return false;
    }
    sNowPageJs = c;

    asyn('staticResource', m);
    asyn('staticResource', c);
    asyn('staticResource', n);
}/*3ed8ed97f79fa3d8*/
/*032a659ac3907d66*//**
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
}/*032a659ac3907d66*/
/*e40fd4b7d8973e42*//**
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

    //通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        iWinHeight = document.documentElement.clientHeight;
        iWinWidth = document.documentElement.clientWidth;
    }
}/*e40fd4b7d8973e42*/
/*fd0f21b2c39c868e*/function sizes () {
    asyn('winSize');
}/*fd0f21b2c39c868e*/

/*23bdfcfa6e6ef41b*//**
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
}/*23bdfcfa6e6ef41b*/

/*05b110c27cc260de*/let os = function() {
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
}/*05b110c27cc260de*/

/*76d24ccd8f14aad0*//**
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
}/*76d24ccd8f14aad0*/
/*3876aa63f297d6af*//**
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
        sDomNoticeId,
    ];

    let b = myFragment();
    let c = '';
    for (let i in a) {
        c = createDiv();
        c.id = a[i];
        c.class = sInvisibleClass;

        b.appendChild(c);
    }

    let o = bodyDom();
    o.appendChild(b);

    asyn('threeBodyDom');

    asyn('writeShades');

    asyn('writeNotice');

    replaceClassNameToShow(o);
    o.style.display = 'block';

    a = b = c = i = o = null;
}
let oFatherDom = '';
function fatherDom () {
    if (oFatherDom) {
        return oFatherDom;
    }
    oFatherDom = domById(oDomFatherId);
    return oFatherDom;
}
let oShadeFather = '';
function shadeDom () {
    if (oShadeFather) {
        return oShadeFather;
    }
    oShadeFather = domById(sDomShadeId);
    return oShadeFather;
}
let oNoticeDom = '';
function noticeDom () {
    if (oNoticeDom) {
        return oNoticeDom;
    }
    oNoticeDom = domById(sDomNoticeId);
    return oNoticeDom;
}
let oBodyDom = false;
function bodyDom () {
    if (oBodyDom) {
        return oBodyDom;
    }
    oBodyDom = domById(sBodyDomFatherId);
    return oBodyDom;
}/*3876aa63f297d6af*/
/*f5cbcc6172ee0659*/function winResize (bOnload = false) {
    if (!bOnload) {
        if (sPlatformTag === sMobileTag) {
            alert('mobile is can not rezie, so we no to do nothings !!! ');
            return;
        }
    }

    asyn('sizes');
}/*f5cbcc6172ee0659*/
/*d03267fc2f3b3729*/function localstorageIsForbidden () {
    console.log('localstorage is forbidden, web can not normal use, so we nothing to do !!! ');
    alert('localstorage is forbidden, web can not normal use, so we nothing to do !!! ');
}/*d03267fc2f3b3729*/
/*3de6df3eb7ca4333*//**
 *
 * 设置meta标签
 *
 */
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

    let o = myFragment();
    let m = '';
    for (let i in a) {
        m = setContent(a[i]);
        o.appendChild(m);
    }
    oHead.appendChild(o);
    a = o = i = m = null;
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
}/*3de6df3eb7ca4333*/
/*6253f7ef57dc3560*/let oHtml = false;
let oBody = false;
let oHead = false;
// let bOnload = true;
function baseBegins () {
    console.log('11111111111111111111111111basebegin');
    asyn('checkUseTime');

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

    asyn('initializeFontSize');

    requires([sFuncDomJ], function () {
        asyn('setMeta');
    });

    asyn('winResize', true);

    requires([sFuncDomJ, sStrFunc], function () {
        asyn('secondDom');
    });
}/*6253f7ef57dc3560*/
/*aaa*/baseBegins();/*aaa*/
