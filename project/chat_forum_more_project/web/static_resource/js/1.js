const sIndexScriptTagId = 'first_js_script'; // 第一个 script 标签
let sCharset = 'utf-8'; // 编码格式
const debug = true; // debug
// const debug = false; // debug
const sBaseJs = '/static_resource/js/base.js?ver=1'; // base js 路径
const sAstrictJumpUrl = 'https://www.baidu.com';
const sFinalMetaTagId = 'copyright_content';

const sBodyDomFatherId = 'body';
const oDomFatherId = 'dom_father';
const oDomStorageId = 'storage_father';
const sDomNoticeId = 'notice_father';
const sInvisibleClass = 'invisible';
const sVisibleClass = 'gradually_visible';

const sShadeClass = 'shades';
const sDomShadeId = 'shade_father';

//localstorage相关
const iMaxLocalstorageSize = 3670016;
const sOriginLocalstorageSizeKey = 'origin_localstorage_size';
const sStorageOriginsSonPrefix = 'storage';
const sStoragePage = 'storage.html';
const sLocalstorageTagMd5Salt = '______9*^&*%^$%$67dasy~`<>?dg';
const sLocalstorageLangTag = 'localstorage_lang';
const sLocalstorgaeUserPersonalizedColorKey = 'user_personlized_color';
const sLocalstorgaeNowPageTag = 'localstorage_cache_now_page';
const sLocalstorgaeBeginTag = 0;
//localstorage相关

// const sNoShowIframeCLass = 'iframe_no_show';

const sIsPhone = 'phone';
const sIsTablet = 'tablet';
const sIsPc = 'pc';

let sIp = '';
let sCid = '';
let sIpCityName = '';
const sQueryUserIpAddress = 'http://pv.sohu.com/cityjson?ie=' + sCharset;

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

let oFinalMeta = '';
function finalMeta () {
    oFinalMeta = oFinalMeta ? oFinalMeta : domById(sFinalMetaTagId);
    return oFinalMeta;
}

let bSetMeta = false;
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

function getUserIp () {
    loadJs(sQueryUserIpAddress, false, 'setUserIp');
}
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
 * 插入script 标签节点
 *
 * @param o
 */
function asynLoadJs (o) {
    insertAfter(o, firstScriptTag());
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
/**
 *
 * 根据tag 获取节点
 *
 * @param c
 * @returns {boolean}
 */
function domByTag (c) {
    let o = oBodyDom.getElementsByTagName(c);
    return o.length > 0 ? o : false;
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
 * 在 j 之前插入 新节点o
 *
 * @param o 新节点 type dom object
 * @param j 要插入哪个节点之前 type dom object
 */
// function insertBefores (o, j) {
//     console.log(o.parentNode);
//     o.parentNode[0].insertBefore(o, j);
// }

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

/**
 *
 * 是否添加时间戳字符串静态文件版本号
 *
 * @type {string}
 */
let sFileVersionSuffix = '';
function jsCssVersionSuffix () {
    sFileVersionSuffix = sFileVersionSuffix ? sFileVersionSuffix : debug ? '-' + getMillisecondTime() : '';
    return sFileVersionSuffix;
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
 */
function cacheStaticResource (j = '', v = '') {
    v = compressJs(v);

    let t = setTimeout(function () {
        clearTimeout(t);

        setLocalstorage(j, v, false);
    }, 0);
}

let myStorage = (function myStorage () {
    if (!window.localStorage ) {
        // console.log('myStorage localstorage error');
        return false;
    }

    let set = function (k, v, t = false) {
        if (!k) {
            // console.log('myStorage set k or v is null');
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

    return {
        set : set,
        get : get,
        remove : remove,
        clear : clear
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
    console.log('*****************************************');
    if (!k || !m) {
        return false;
    }

    let p = localstoragePage (k);

    let s = disposeLocalstorageValue (m, t);
    let l = parseInt(JSON.stringify(s).length) + parseInt(k.length);

    p = localstorageNowPage();

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

    console.log(c);
    console.log(p);
    console.log(iMaxLocalstorageSize);

    p = storagePage(p);
    console.log('post data to son address ' + p);

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
    console.log('*****************************************');
}
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
        window[event.data.after](event.data.message);
    }
}, false);
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
 * @param k local localstorage key
 */
function queryLocalstorageCache (k = '') {
    if (!k) {
        // console.log('queryLocalstorageCache k is null, so no to do');
        return false;
    }

    return myStorage.get(k);
}
function localstorageNowPage () {
    let i = myStorage.get(sLocalstorgaeNowPageTag);
    return i ? i : sLocalstorgaeBeginTag;
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
        // console.log('writeStorageDom ' + p + ' is allready exist, so retrun true ');
        return true;
    }

    let o = document.createElement('iframe');
    o.src = p;
    // o.className = sNoShowIframeCLass;
    o.id = d;
    // o.style.display = 'none';

    storageDom().appendChild(o);

    if (o.attachEvent) {
        o.attachEvent('onload', function() {
            // aAllreadyLoadIframe[o.id] = true;
        });
    } else {
        o.onload = function() {
            // aAllreadyLoadIframe[o.id] = true;
        };
    }

    return true;
}

/**
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
        i = sLocalstorgaeBeginTag;
        localstorageLocalCache (k, i);
    }

    return i;
}
/**
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

function compressJs (v = '') {
    if (!v) {
        return '';
    }

    // v = replaceMoreAnnotationToNull(v);
    //
    // v = replaceOneAnnotationToNull(v);
    //
    // v = replaceLineFeedToOneSpace(v);
    //
    // v = replaceTabulationToOneSpace(v);
    //
    // v = replaceSpaceToOne(v);

    return v;
}

/**
 *
 * 去除js多行注释
 *
 * @param v
 * @returns {string|*}
 */
function replaceMoreAnnotationToNull (v = '') {
    if (!v) {
        return '';
    }

    return v.replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g, ' ');
}

/**
 *
 * 去除js单行注释
 *
 * @param v
 * @returns {string|*}
 */
function replaceOneAnnotationToNull (v = '') {
    if (!v) {
        return '';
    }

    return v.replace(/(\r|\n|\r\n)*\s*\/\/.*(?:\r|\n|\r\n|$)/g, ' ');
}

/**
 *
 * 替换制表符为一个空格
 *
 * @param v
 * @returns {string|*}
 */
function replaceTabulationToOneSpace (v = '') {
    if (!v) {
        return '';
    }

    let d = new RegExp('\t+','g');
    v = v.replace(d, ' ');

    return v;
}

/**
 *
 * 替换换行符为一个空格
 *
 * @param v
 * @returns {string|*}
 */
function replaceLineFeedToOneSpace (v = '') {
    if (!v) {
        return '';
    }

    let g = new RegExp('(\r\n)+','g');
    v = v.replace(g, ' ');

    let c = new RegExp('(\n)+','g');
    v = v.replace(c, ' ');
    let z = new RegExp('(\r)+','g');
    v = v.replace(z, ' ');

    return v;
}

/**
 *
 * 多空格替换为一个空格
 *
 * @param v 内容 type string
 */
function replaceSpaceToOne (v = '') {
    if (!v) {
        return '';
    }

    let g = new RegExp('\s{1, }','g');
    v = v.replace(g, ' ');

    return v;
}

/**
 *
 * 加载 js
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

    var xhr = '';
    let v = getStaticResourceFromLocalstorage(j);
    if (v == null || v.length == 0) {
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

                asyn('cacheStaticResource', j, v);
            }
        };
    } else {
        asyn('writeStaticResourceToPage', v, t);
    }

    if (c) {
        asyn(c);
    }
}

/**
 *
 * 辅助方法2：动态添加js，css文件内容
 *
 * @param v 静态文件内容 type string
 * @param t 类型 type string
 */
function writeStaticResourceToPage(v, t) {
    if (!v || !t) {
        return;
    }

    let o = '';
    if (t === 'js') {
        o = document.createElement('script');
        o.type = 'text/javascript';
        o.innerHTML = v;
    } else if (t === 'css') {
        o = document.createElement('style');
        o.type = 'text/css';
        o.innerHTML = v;
    }
    if (!o) {
        return;
    }

    asyn('addHeadTag', o);
}
function addHeadTag (o = '') {
    if (!o) {
        return;
    }
    // oHead.appendChild(o);
    insertAfter(o, firstScriptTag());
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

        illegality();
        return false;
    }

    return true;
}
function illegality () {
    window.location.href = sAstrictJumpUrl;
}

// function setHtmlLang () {
//     oHtml.lang = sHtmlLang;
// }

let bWriteFatherDom = false;
function bodyAppendDom () {
    if (bWriteFatherDom) {
        return true;
    }
    bWriteFatherDom = true;

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
    asyn('shadeDom');
    asyn('storageDom');
    storageDom().style.display = 'none';
    asyn('noticeDom');
}
// let oBody = false;
// function body () {
//     oBody = oBody ? oBody : domByTag('body');
//     return oBody;
// }
let oBodyDom = false;
function bodyDom () {
    oBodyDom = oBodyDom ? oBodyDom : domById(sBodyDomFatherId);
    return oBodyDom;
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
let oStorageDom = '';
function storageDom () {
    oStorageDom = oStorageDom ? oStorageDom : domById(oDomStorageId);
    return oStorageDom;
}
let oNoticeDom = '';
function noticeDom () {
    oNoticeDom = oNoticeDom ? oNoticeDom : domById(sDomNoticeId);
    return oNoticeDom;
}

function setHtmlTag () {
    asyn('setMeta');
}

function baseDomAction () {
    asyn('changeBodyStatus', false);

    asyn('bodyAppendDom');

    asyn('bodyDom');

    asyn('writePublicShade');

    asyn('writePublicDom');
}

/**
 *
 * 修改body状态，是否显示或隐藏
 *
 * @param b 显示或隐藏 type bool true 显示
 */
function changeBodyStatus (b = true) {
    let h = b ? sVisibleClass : sInvisibleClass;

    let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
    let p2 = new RegExp('\\s*' + sVisibleClass,'gm');

    let o = bodyDom();
    // console.log(oBodyDom);
    let s = o.className;
    // console.log('sssssssssssssssssss');
    // console.log(s);
    s = s.replace(p1, '');
    s = s.replace(p2, '');

    o.className = s ? s + ' ' + h : h;
    // console.log(oBodyDom.className);
}

let oHtml = false;
let oHead = false;
let oBody = false;
function begin () {
    if (!astrict()) {
        return false;
    }

    if (!window.localStorage) {
        asyn('localstorageIsForbidden');
        return false;
    }

    oHtml = document.getElementsByTagName('html')[0];
    oHead = document.getElementsByTagName('head')[0];
    oBody = document.getElementsByTagName('body')[0];

    try {
        let sTestStorageKey = 'private_test';
        localStorage.setItem(sTestStorageKey, 1);
        localStorage.removeItem(sTestStorageKey);
    } catch (e) {
        //无痕模式
        asyn('localstorageIsForbidden');
        return;
    }

    asyn('setHtmlTag');

    let t= setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sBaseJs + jsCssVersionSuffix(), 'js', 'baseBegins');
    }, 0);

    asyn('baseDomAction');

    asyn('getUserIp');
}

function localstorageIsForbidden () {
    console.log('localstorage is forbidden, web can not normal use, so we nothing to do ');
    alert('localstorage is forbidden, web can not normal use, so we nothing to do ');
}

window.onload = begin();
