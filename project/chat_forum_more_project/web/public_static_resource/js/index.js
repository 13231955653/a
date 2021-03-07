const sBaseProtocol = window.location.protocol + '//';

let sOrigin = '';

const oHtml = document.getElementsByTagName('html')[0];
const oHead = document.getElementsByTagName('head')[0];
const oBody = document.getElementsByTagName('body')[0];

let sCharset = 'utf-8';

const iDefaultFontSize = 16; //默认pc字体大小
const iDefaultOneFontMms = 3; //默认一个中文字占多宽，单位毫米

const sUniquiueStringPrefix = 'uniquiue';
const sGuidSplitTag = '-';
const sUuidSplitTag = '-';
const sUuidString = '0123456789abcdef';
const sUniquiueStringSplitTag = '=';
const sIndividuationUuidTag = '*';
const sRandString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const sIndividuationUuidStringRepeatNumber = 100;
const iIndividuationUniqueStrLength = 100;
const iIndividuationUniqueStrNumberMin = 0;
const iIndividuationUniqueStrNumberMax = 999999999999999999;
const iIndividuationUniqueStrMinLength = 32;
const iSessionBeforeFormatLength = 32;

const sSessionSplitTag  = '_';
const sSessionSalt  = '__()9789*&^%$sKUYsah98';
// let sSessionId = false;
let sOldSessionId = false;
let sNewSessionId = false;
const iUpdateSessionMinTime = 1800000;
const iUpdateSessionMaxTime = 5400000;
const iSessionOutTime = 5410;
const sSessionIdSplitLength =8;
// const updateSessionMinTime = 1000;
// const updateSessionMaxTime = 3000;
const sOldSessionIdCookieKey = 'o_t';
const sNewSessionIdCookieKey = 'n_t';

//localstorage相关
// const aLocalstorageAddressSize = [];
const iMaxLocalstorageSize = 4718592;
const sOriginLocalstorageSizeKey = 'origin_localstorage_size';
// const iMaxLocalstorageSize1 = 4718593;
const sStorageOriginsSonPrefix = 'storage';
// const iStorageOriginLength = aStorageOrigins.length;
const sStoragePage = 'storage.html';
const sLocalstorageTagMd5Salt = '______9*^&*%^$%$67dasy~`<>?dg';
const sLocalstorageLangTag = 'localstorage_lang';
const sLocalstorgaeUserPersonalizedColorKey = 'user_personlized_color';
const sLocalstorgaeNowPageTag = 'localstorage_cache_now_page';
const sLocalstorgaeBeginTag = 0;
// const sLocalstorgaeSessionId = 'session_id';
//localstorage相关

const iDefaultUserPersonalizedColor = 1;
let iFontSize = 16;

const oDomFatherId = 'dom_father';
const sShadeIndex = 'index_shade';
const sIndexPlatform = 'platform_shade';
const sIndexPage = 'page_shade';
// const iMaxZIndex = 2000000001;
let iShadeZIndex = 1000000000;
const sInvisibleClass = 'invisible';
const sVisibleClass = 'gradually_visible';

const sPublicFootId = 'public_footer';
const sPublicHeaderId = 'public_header';
const sPublicBodyId = 'public_body';
// const sStoragePageBodyId = 'storage_body';
const sPublicLeftId = 'public_left';
const sPublicRightId = 'public_right';
const sPublicNoticeId = 'public_notice';
const sPublicShadeId = 'public_shade';
// const sShadeClass = 'shades';
const sFootTag = '_foot';
const sFootLiSuffix = '_li';
const sActiveFootTag = 'foot_active';
const sReLangClass = 're_lang';
const sSettingBodyId = 'setting_body';
const sForumBodyId = 'forum_body';
const sChatBodyId = 'chat_body';
const sFriendBodyId = 'friend_body';
const sNoShowIframeCLass = 'iframe_now_show';

const aAllreadyLoadIframe = [];

const sReplaceLangIdType = 'id';

const sUrlAddressSignEncodeSalt = '_&*uh124jKYUSa87123_';
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
// let iBottomHiddenHeight = 0;

const sIsPhone = 'phone';
const sIsTablet = 'tablet';
const sIsPc = 'pc';

const sDefaultLangvage = 'cn';
let sUserLangvage = '';
let sPersonlizedColor = '';

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
const aBaseHost = [
    'you.com',
    '0.son.you.com',
    '1.son.you.com',
    '2.son.you.com',
    '3.son.you.com',
    '4.son.you.com',
    '5.son.you.com',
    '6.son.you.com',
];

const iRequertTimeout = 9000;
const iRequertLangJsTimeout = 5000;
const iMaxLoadOriginJqueryWaitTime = 5000;

const iSpeed = 300;

let aBaseTimer = []; //基础定时器
const b = []; //基础定时器间隔时间
// const t = 2000;
const t = 15;
b['winResize'] = 100;
b['loadBaseEncodeJs'] = t;
b['loadBaseLogicJs'] = t;
b['loadBaseDomJs'] = t;
b['loadBaseFunctionJs'] = t;
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
b['loadApiQueryJs'] = t;
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
b['checkSessionIdOutTime'] = 120000;
b['checkSessionKeyFormat'] = 180000;
const aBaseTimerOutTime = b; //基础定时器间隔时间

let sBaseJsFullName = '';
// let sBaseVariableJsFullName = '';
let sBaseFunctionJsFullName = '';
let sBaseJqueryJsFullName = '';
let sBaseLogicJsFullName = '';
let sBaseDomJsFullName = '';
let sPlatformDomJsFullName = '';
let sBaseEncodeJsFullName = '';
let sApiQueryJsFullName = '';
let sOriginJquery = '';
let sCnLangs = '';
let sEnLangs = '';
let sForumFullJs = '';
let sChatFullJs = '';
let sFriendFullJs = '';
let sSettingFullJs = '';

const aCssVersion = []; // css 文件版本号
let sResetCssFullPath = '';
let sPublicCssFullPath = '';
let sVariableCssFullPath = '';
let sPersonalizedCssFullPath = '';

const sBaseJs = '/public_static_resource/js/public/base.js';
// const sBaseVariableJs = '/public_static_resource/js/public/variable.js';
const sBaseFunctionJs = '/public_static_resource/js/public/function.js';
const sBaseJqueryJs = '/public_static_resource/js/public/jquery.js';
const sBaseLogicJs = '/public_static_resource/js/' + platformTag() + '/logic.js';
const sBaseDomJs = '/public_static_resource/js/public/dom/public_dom.js';
const sBaseEncodeJs = '/public_static_resource/js/public/encode.js';
const sCnLang = '/public_static_resource/js/lang/cn.js';
const sEnLang = '/public_static_resource/js/lang/en.js';
const sPlatformDomJs = '/public_static_resource/js/' + platformTag() + '/dom/public_dom.js';
const sForumJs = '/public_static_resource/js/' + platformTag() + '/page/forum.js';
const sChatJs = '/public_static_resource/js/' + platformTag() + '/page/chat.js';
const sFriendJs = '/public_static_resource/js/' + platformTag() + '/page/friend.js';
const sSettingJs = '/public_static_resource/js/' + platformTag() + '/page/setting.js';
const sApiQueryJs = '/public_static_resource/js/public/query/query.js';
// sOriginJquery = 'http://libs.baidu.com/jquery/2.1.4/jquery.min.js'; ////////////国内外需要更换适用的地址
sOriginJquery = 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'; ////////////国内外需要更换适用的地址

const c = [];  // js 文件版本号
c[sBaseJs] = '11111111111111111111111111111111';
// c[sBaseVariableJs] = '222222222222222222222222222222';
c[sBaseFunctionJs] = '3333333333333333333333333333333333333';
c[sBaseJqueryJs] = '4444444444444444444444444444444444444444444';
c[sBaseLogicJs] = '55555555555555555555555555555555555555555555555555';
c[sBaseDomJs] = '6666666666666666666666666666666666666666666';
c[sBaseEncodeJs] = '77777777777777777777777777777777777';
c[sCnLang] = '888888888888888888888';
c[sEnLang] = '9999999999999999999999999999';
c[sPlatformDomJs] = 'ssssssssssssssssssssssssssssssssssssssssssssssssss';
c[sForumJs] = 'dasdasdasdasdasdadasdasd11111111';
c[sChatJs] = '2222222222dfsdfsdfsdfsdfffffffffff';
c[sFriendJs] = '333333333eeeeeeeeeeeeeeeeeeeee';
c[sSettingJs] = '44444444444fewrrrrrrrrrrrrrrr';
c[sApiQueryJs] = 'kkkkkkkkkkkkkkkkdasdasdkkkkkkkkkkkkkkkkkkkkkkk';
c[sOriginJquery] = 'dasdasdwqe214124';
const aJsVersion = c; // js 文件版本号

function setJsPathAndVersion () {
    sOriginJquery = sOriginJquery + '?ver=' + aJsVersion[sOriginJquery];
    // sOriginJquery = sOriginJquery;
    sBaseJsFullName = setJsCssSrc('js', sBaseJs);
    // sBaseVariableJsFullName = setJsCssSrc('js', sBaseVariableJs);
    sBaseFunctionJsFullName = setJsCssSrc('js', sBaseFunctionJs);
    sBaseJqueryJsFullName = setJsCssSrc('js', sBaseJqueryJs);
    sBaseLogicJsFullName = setJsCssSrc('js', sBaseLogicJs);
    sBaseDomJsFullName = setJsCssSrc('js', sBaseDomJs);
    sBaseEncodeJsFullName = setJsCssSrc('js', sBaseEncodeJs);
    sCnLangs = setJsCssSrc('js', sCnLang);
    sEnLangs = setJsCssSrc('js', sEnLang);
    sPlatformDomJsFullName = setJsCssSrc('js', sPlatformDomJs);
    sForumFullJs = setJsCssSrc('js', sForumJs);
    sChatFullJs = setJsCssSrc('js', sChatJs);
    sFriendFullJs = setJsCssSrc('js', sFriendJs);
    sSettingFullJs = setJsCssSrc('js', sSettingJs);
    sApiQueryJsFullName = setJsCssSrc('js', sApiQueryJs);
}

function setCssPathAndVersion () {
    let sResetCss = '/public_static_resource/css/public/reset.css';
    let sPublicCss = '/public_static_resource/css/public/' + platformTag() + '/public.css';
    let sVariableCss = '/public_static_resource/css/public/' + platformTag() + '/variable.css';

    aCssVersion[sResetCss] = 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
    aCssVersion[sPublicCss] = 'dddddddddddddddddddddddddddddddddddddddddddddddddd';
    aCssVersion[sVariableCss] = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';

    sResetCssFullPath = setJsCssSrc('css', sResetCss);
    sPublicCssFullPath = setJsCssSrc('css', sPublicCss);
    sVariableCssFullPath = setJsCssSrc('css', sVariableCss);
}

function setStaticResouresPathVersion () {
    setJsPathAndVersion();

    setCssPathAndVersion();
}

function winSize() {
    //获取窗口宽度
    // console.log(window.innerWidth);
    if (window.innerWidth) {
        iWinWidth = window.innerWidth;
    }else if ((document.body) && (document.body.clientWidth)) {
        iWinWidth = document.body.clientWidth;
    }
    // console.log(iWinWidth);

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
    // console.log(iWinWidth);

    // iBottomHiddenHeight = iWinHeight * 2;
}

function loadCss (sSrc = '', sCallback = '') {
    if (!sSrc) {
        console.log('loadCss sSrc is null');
        return false;
    }

    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = sSrc;
    link.charset = sCharset;
    link.id = window.btoa(sSrc);

    if (sCallback) {
        checkLoadCss(sCallback, link.id);
    }

    oHead.appendChild(link);
}
function checkLoadCss (sCallback = '', id = '') {
    if (!sCallback || !id) {
        console.log('checkLoadCss sCallback or id is null');
        return false;
    }

    let sTimerKey = 'checkLoadCss' + '--' + sCallback;
    if (document.getElementById(id)) {
        clearTimeout(aBaseTimer[sTimerKey]);

        window[sCallback]();
        return;
    }

    aBaseTimer[sTimerKey] = setTimeout(function () {
        checkLoadCss(sCallback, id);
    }, aBaseTimerOutTime['checkLoadCss']);
}

function loadBaseJs () {
    // loadOriginJquery();

    // loadBaseVariableJs();

    loadBaseEncodeJs();

    loadBaseFunctionJs();

    loadBaseDomJs();

    loadPlatformDomJs();

    loadBaseLogicJs();
}

let bInLoadPageJs = false;
function loadPageJs () {
    if (bInLoadPageJs) {
        console.log('loadPageJs bInLoadPageJs in load, so no to do');
        return ;
    }
    bInLoadPageJs = true;

    let sPage = getNowPage();

    let sPageJs = '';
    switch (sPage) {
        case sForumPage:
            sPageJs = sForumFullJs;
            break;
        case sChatPage:
            sPageJs = sChatFullJs;
            break;
        case sFriendPage:
            sPageJs = sFriendFullJs;
            break;
        case sSettingPage:
            sPageJs = sSettingFullJs;
            break;
    }

    if (!sPageJs) {
        console.log('loadPageJs sPageJs is null, no to do');
        return false;
    }

    if (!checkRequestJsCssLimit('js', 'loadPageJs_' + sPageJs)) {
        console.log('loadPageJs checkRequestJsCssLimit loadPageJs_' + sPageJs + ', limit, so no to load');
        return false;
    }

    changeDomFatherOpacity();

    writePageShade();

    loadJs(sPageJs, true, 'afterLoadPageJs');
}
function afterLoadPageJs () {
    bInLoadPageJs = false;

    let sPage = getNowPage();

    let oFootActive = document.getElementById(sPage + sFootTag + sFootLiSuffix);
    if (!oFootActive) {
        console.log('afterLoadPageJs oFootActive is null, no to do');
        return false;
    }

    let oFooters = document.getElementsByClassName(sFootTag);
    if (oFooters.length) {
        let sPreg = new RegExp('\\s+' + sActiveFootTag,'gm');
        for (let i in oFooters) {
            if (!oFooters[i].className) {
                continue;
            }

            oFooters[i].className = oFooters[i].className.toString().replace(sPreg, '');
        }
    }

    oFootActive.className += ' ' + sActiveFootTag;

    changeDomFatherOpacity(true);

    repeatedlyPage(getUrlArgs(sUrlAddressPageKey));

    clearPageShade();
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

    // queryLocalstorgaeUserPersonalizedColor(sLocalstorgaeUserPersonalizedColorKey, 'afterQueryUserPersonalizedColor');
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

/**
 *
 * 替换dom语言
 *
 * @param p 传入第二参数的类型 type string id/class/tag
 * @param d 需要替换语言的dom的 id/class/tag type sting
 */
function replaceDomLang (p = '', d = '') {
    if (!p || !d) {
        console.log('replaceDomLang p or d is null, so no to do ');
        return;
    }

    if (typeof bLoadFunctionJs == 'undefined') {
        console.log('replaceDomLang bLoadFunctionJs is false, so settimtoue retry ');
        setTimeoutFunction('replaceDomLang', p, d);
        return;
    }

    replaceLang(p, d);
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
 * @param k localstorage key
 * @param m localstorage message
 * @param t localstorage lefttime
 * @param f localstorage callback function
 * @returns {boolean}
 */
function setLocalstorage (k = '', m = '', t = false, f = '') {
    if (!k || !f || !m) {
        console.log('queryLocalstorage k or f or m is null');
        return false;
    }

    let p = localstoragePage (k);

    let s = disposeLocalstorageValue (m, t);
    let l = parseInt(JSON.stringify(s).length) + parseInt(k.length);

    p = localstorageNowPage();

    let q = 1;
    let z = 0;
    let sss = sOriginLocalstorageSizeKey;
    let c = queryLocalstorageCache(sss);
    c = eval('(' + z + ')');
    c = c ? c : {};
    while (!z || iMaxLocalstorageSize < z) {
        p = z ? parseInt(p) + parseInt(1) : p;

        if (!c || typeof c[p] == 'undefined') {
            z = l;
            c[p] = z;
        } else {
            q = parseInt(c[p]);

            z = parseInt(q) + parseInt(l);
            c[p] = z;
        }
    }

    localstorageLocalCache(k, p);

    localstorageLocalCache(sss, c);

    p = storagePage(p);

    localstoragePostMessage(p, {action: 'set', key: k, message: m, leftTime: t, after: f});
}
// function localstorageLocalCache () {
//
// }

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
    // console.log(sLang);
    if (sLang) {
        sUserLangvage = sLang;
    } else {
        sUserLangvage = sDefaultLangvage;
        setLang(sUserLangvage);
    }
    bAllreadyLoadUserLang = false;
    // console.log(sUserLangvage);

    loadLang(sUserLangvage);
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
    }, aBaseTimerOutTime['localstoragePostMessage']);

    return false;
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

let cookie = {
    set:function (sKey, sVal, iTime) {
        //设置cookie方法
        let iOutTime = parseInt(getNowTime()) + parseInt(iTime); //获取当前时间
        document.cookie = sKey + '=' + sVal + ';expires=' + iOutTime;  //设置cookie
    },

    get:function (sKey) {//获取cookie方法
        /*获取cookie参数*/
        let sCookie = document.cookie.replace(/[ ]/g,'');
        //获取cookie，并且将获得的cookie格式化，去掉空格字符
        let aArrCookie = sCookie.split(';')
        //将获得的cookie以"分号"为标识 将cookie保存到aArrCookie的数组中
        let tips = 'false';  //声明变量tips
        let arr = [];
        for(let i = 0; i < aArrCookie.length; i++){   //使用for循环查找cookie中的tips变量
            arr =aArrCookie[i].split('=');   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
            if (sKey == arr[0]) {
                //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                tips = arr[1];   //将cookie的值赋给变量tips
                break;   //终止for循环遍历
            }
        }
        return tips;
    }
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

        // isJson(oData.v);
        //
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

function loadBaseCss () {
    // queryUserPersonalizedColor();

    loadResetCss();

    loadPersonalizedCss();

    loadVariableCss();

    loadPublicCss();
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

    let sPersonalizedCss = '/public_static_resource/css/personalized/color/' + sPersonalizedColor + '.css';
    aCssVersion[sPersonalizedCss] = 'ppppppppppppppppppsssssssssssssssss';
    sPersonalizedCssFullPath = setJsCssSrc('css', sPersonalizedCss);

    loadCss(sPersonalizedCssFullPath, 'afterloadPersonalizedCss');

    setTimeoutFunction('loadPersonalizedCss', c);
}
function afterloadPersonalizedCss () {
    bLoadPersonalizedCss = false;
}
let bLoadVariableCss = false;
function loadVariableCss () {
    if (bLoadVariableCss) {
        return true;
    }

    if (!checkRequestJsCssLimit('css', 'loadVariableCss')) {
        return false;
    }

    loadCss(sVariableCssFullPath, 'afterloadVariableCss');

    setTimeoutFunction('loadVariableCss');
}
function afterloadVariableCss () {
    bLoadVariableCss = true;
}
let bLoadPublicCss = false;
function loadPublicCss () {
    if (bLoadPublicCss) {
        return true;
    }

    if (!checkRequestJsCssLimit('css', 'loadPublicCss')) {
        return false;
    }

    loadCss(sPublicCssFullPath, 'afterloadPublicCss');

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

    loadCss(sResetCssFullPath, 'afterloadResetCss');

    setTimeoutFunction('loadResetCss');
}
function afterloadResetCss () {
    bLoadResetCss = true;
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

    return allocationHost(sSrc) + sSrc + '?v=' + sVersion;
}

let aHost = [];
let iHostNumber = 0;
function setHosts () {
    for (let i in aBaseHost) {
        aHost.push(sBaseProtocol + aBaseHost[i]);
    }
    iHostNumber = aHost.length;

    return true;
}

// hash 求余
function hashFunc(sStr, iSize){
    if (!sStr ||!iSize) {
        // console.log(sStr);
        // console.log(iSize);
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

function allocationHost (sUrl = '') {
    if (!sUrl) {
        console.log('hashFunc sStr or iSize is null');
        return false;
    }

    return aHost[hashFunc(sUrl, iHostNumber)];
}

function isMobile () {
    let userAgentInfo = navigator.userAgent;
    let mobileAgents = [ 'Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad','iPod'];
    let bIsMobile = false;

    //根据userAgent判断是否是手机
    for (let v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            bIsMobile = true;
            break;
        }
    }

    return bIsMobile;
}
function platformTag () {
    return isMobile ? 'mobile' : 'computer';
}

//获取时间戳
function getNowTime () {
    return new Date().getTime();
}
//获取时间戳
function getTime () {
    return parseInt(getNowTime() / 1000);
}

let aRequestJsCssLastTime = [];
function checkRequestJsCssLimit (sType = '', sFunction = '') {
    if (!sFunction) {
        console.log('checkRequestJsCssLimit sType or sFunction is null');
        return false;
    }

    let iNowTime = getNowTime();
    let iLastRequestTime = typeof aRequestJsCssLastTime[sFunction] !== 'undefined' ? aRequestJsCssLastTime[sFunction] : 0;
    if (iNowTime - iLastRequestTime < iRequertTimeout) {
        console.log('checkRequestJsCssLimit ' + sFunction + ' time last ' + iRequertTimeout + ' millisecond, so wait a minutes retry ');
        setTimeoutFunction(sFunction);
        return false;
    }
    aRequestJsCssLastTime[sFunction] = iNowTime;

    return true;
}

// let bLoadBaseVariableJs = false;
// function loadBaseVariableJs () {
//     if (bLoadBaseVariableJs) {
//         return true;
//     }
//
//     if (!checkRequestJsCssLimit('js', 'loadBaseVariableJs')) {
//         return false;
//     }
//
//     loadJs(sBaseVariableJsFullName, true, 'afterloadBaseVariableJs');
//
//     setTimeoutFunction('loadBaseVariableJs');
// }
// function afterloadBaseVariableJs () {
//     bLoadBaseVariableJs = true;
// }
let bLoadApiQueryJs = false;
function loadApiQueryJs () {
    if (bLoadApiQueryJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadApiQueryJs')) {
        return false;
    }

    loadJs(sApiQueryJsFullName, true, 'afterloadApiQueryJs');

    setTimeoutFunction('loadApiQueryJs');
}
function afterloadApiQueryJs () {
    bLoadApiQueryJs = true;
}
let bLoadBaseEncodeJs = false;
function loadBaseEncodeJs () {
    if (bLoadBaseEncodeJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadBaseEncodeJs')) {
        return false;
    }

    loadJs(sBaseEncodeJsFullName, true, 'afterloadBaseEncodeJs');

    setTimeoutFunction('loadBaseEncodeJs');
}
function afterloadBaseEncodeJs () {
    bLoadBaseEncodeJs = true;
}
let bLoadBaseLogicJs = false;
function loadBaseLogicJs () {
    if (bLoadBaseLogicJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadBaseLogicJs')) {
        return false;
    }

    loadJs(sBaseLogicJsFullName, true, 'afterloadBaseLogicJs');

    setTimeoutFunction('loadBaseLogicJs');
}
function afterloadBaseLogicJs () {
    bLoadBaseLogicJs = true;
}
let bLoadBaseDomJs = false;
function loadBaseDomJs () {
    if (bLoadBaseDomJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadBaseDomJs')) {
        return false;
    }

    loadJs(sBaseDomJsFullName, true, 'afterloadBaseDomJs');

    setTimeoutFunction('loadBaseDomJs');
}
function afterloadBaseDomJs () {
    bLoadBaseDomJs = true;
}
let bLoadPlatformDomJs = false;
function loadPlatformDomJs () {
    if (bLoadPlatformDomJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadPlatformDomJs')) {
        return false;
    }

    loadJs(sPlatformDomJsFullName, true, 'afterloadPlatformDomJs');

    setTimeoutFunction('loadPlatformDomJs');
}
function afterloadPlatformDomJs () {
    bLoadPlatformDomJs = true;
}
let bLoadBaseFunctionJs = false;
function loadBaseFunctionJs () {
    if (bLoadBaseFunctionJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadBaseFunctionJs')) {
        return false;
    }

    loadJs(sBaseFunctionJsFullName, true, 'afterloadBaseFunctionJs');

    setTimeoutFunction('loadBaseFunctionJs');
}
function afterloadBaseFunctionJs () {
    bLoadBaseFunctionJs = true;
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
        return;
    }
    bLoadOriginJquery = true;

    loadJs(sOriginJquery, true, 'afterloadOriginJquery');

    setTimeoutFunction('loadOriginJquery');
}
function afterloadOriginJquery () {
    bLoadOriginJquery = true;
}
let bLoadLocalJquery = false;
function loadLocalJquery () {
    if (bLoadLocalJquery) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadLocalJquery')) {
        return false;
    }

    loadJs(sBaseJqueryJsFullName, true, 'afterloadLocalJquery');

    setTimeoutFunction('loadLocalJquery');
}
function afterloadLocalJquery () {
    bLoadLocalJquery = true;
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
    // console.log(l);
    l = l ? l : sUserLangvage;
    // console.log(l);
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
            y = sCnLangs;
            break;
        case 'en' :
            y = sEnLangs;
            break;
    }
    if (!y) {
        console.log('loadLang y is null, so no to load lang js ');
        return false;
    }

    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
    loadJs(y, true, 'replaceLangs');
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

let bSetHeader = false;
function setHeader () {
    if (bSetHeader) {
        return;
    }
    bSetHeader = true;

    if (isMobile()) {
        let m = document.createElement('meta');
        m.name = 'viewport';
        m.content = 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0';
        oHead.appendChild(m);
    }
}

// const ua = navigator;
// console.log(ua);
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
    let d = 'get_one_mms_px';

    // 创建一个1mm宽的元素插入到页面，然后坐等出结果
    let o = document.createElement('div');
    o.id = d;
    o.style.width = '1mm';

    fatherFom().appendChild(o);

    // 原生方法获取浏览器对元素的计算值
    o = document.getElementById(d);
    // let o1 = o.getBoundingClientRect();
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

// 利用js计算当前设备的DPR，动态设置在html标签上，并动态设置html的font-size，利用css的选择器根据DPR来设置不同DPR下的字体大小（这个方法很不错哦~）
//
// !function(win, lib) {
//     var timer,
//         doc     = win.document,
//         docElem = doc.documentElement,
//
//         vpMeta   = doc.querySelector('meta[name="viewport"]'),
//         flexMeta = doc.querySelector('meta[name="flexible"]'),
//
//         dpr   = 0,
//         scale = 0,
//
//         flexible = lib.flexible || (lib.flexible = {});
//
//     // 设置了 viewport meta
//     if (vpMeta) {
//         console.warn("将根据已有的meta标签来设置缩放比例");
//         var initial = vpMeta.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
//         if (initial) {
//             scale = parseFloat(initial[1]); // 已设置的 initialScale
//             dpr = parseInt(1 / scale);      // 设备像素比 devicePixelRatio
//         }
//
//     }
//     // 设置了 flexible Meta
//     else if (flexMeta) {
//         var flexMetaContent = flexMeta.getAttribute("content");
//         if (flexMetaContent) {
//
//             var initial = flexMetaContent.match(/initial\-dpr=([\d\.]+)/),
//                 maximum = flexMetaContent.match(/maximum\-dpr=([\d\.]+)/);
//
//             if (initial) {
//                 dpr = parseFloat(initial[1]);
//                 scale = parseFloat((1 / dpr).toFixed(2));
//             }
//
//             if (maximum) {
//                 dpr = parseFloat(maximum[1]);
//                 scale = parseFloat((1 / dpr).toFixed(2));
//             }
//         }
//     }
//
//     // viewport 或 flexible
//     // meta 均未设置
//     if (!dpr && !scale) {
//         // QST
//         // 这里的 第一句有什么用 ?
//         // 和 Android 有毛关系 ?
//         var u = (win.navigator.appVersion.match(/android/gi), win.navigator.appVersion.match(/iphone/gi)),
//             _dpr = win.devicePixelRatio;
//
//         // 所以这里似乎是将所有 Android 设备都设置为 1 了
//         dpr = u ? ( (_dpr >= 3 && (!dpr || dpr >= 3))
//                 ? 3
//                 : (_dpr >= 2 && (!dpr || dpr >= 2))
//                     ? 2
//                     : 1
//             )
//             : 1;
//
//         scale = 1 / dpr;
//     }
//
//     docElem.setAttribute("data-dpr", dpr);
//
//     // 插入 viewport meta
//     if (!vpMeta) {
//         vpMeta = doc.createElement("meta");
//
//         vpMeta.setAttribute("name", "viewport");
//         vpMeta.setAttribute("content",
//             "initial-scale=" + scale + ", maximum-scale=" + scale + ", minimum-scale=" + scale + ", user-scalable=no");
//
//         if (docElem.firstElementChild) {
//             docElem.firstElementChild.appendChild(vpMeta)
//         } else {
//             var div = doc.createElement("div");
//             div.appendChild(vpMeta);
//             doc.write(div.innerHTML);
//         }
//     }
//
//     function setFontSize() {
//         var winWidth = docElem.getBoundingClientRect().width;
//         console.log(winWidth);
//         console.log(dpr);
//
//         if (winWidth / dpr > 540) {
//             (winWidth = 540 * dpr);
//         }
//
//         // 根节点 fontSize 根据宽度决定
//         var baseSize = winWidth / 10;
//
//         docElem.style.fontSize = baseSize + "px";
//         flexible.rem = win.rem = baseSize;
//     }
//
//     // // 调整窗口时重置
//     // win.addEventListener("resize", function() {
//     //     clearTimeout(timer);
//     //     timer = setTimeout(setFontSize, 300);
//     // }, false);
//
//
//     // 这一段是我自己加的
//     // orientationchange 时也需要重算下吧
//     // win.addEventListener("orientationchange", function() {
//     //     clearTimeout(timer);
//     //     timer = setTimeout(setFontSize, 300);
//     // }, false);
//
//
//     // pageshow
//     // keyword: 倒退 缓存相关
//     // win.addEventListener("pageshow", function(e) {
//     //     if (e.persisted) {
//     //         clearTimeout(timer);
//     //         timer = setTimeout(setFontSize, 300);
//     //     }
//     // }, false);
//
//     // 设置基准字体
//     if ("complete" === doc.readyState) {
//         doc.body.style.fontSize = 12 * dpr + "px";
//     } else {
//         doc.addEventListener("DOMContentLoaded", function() {
//             doc.body.style.fontSize = 12 * dpr + "px";
//         }, false);
//     }
//
//     setFontSize();
//
//     flexible.dpr = win.dpr = dpr;
//
//     flexible.refreshRem = setFontSize;
//
//     flexible.rem2px = function(d) {
//         var c = parseFloat(d) * this.rem;
//         if ("string" == typeof d && d.match(/rem$/)) {
//             c += "px";
//         }
//         return c;
//     };
//
//     flexible.px2rem = function(d) {
//         var c = parseFloat(d) / this.rem;
//
//         if ("string" == typeof d && d.match(/px$/)) {
//             c += "rem";
//         }
//         return c;
//     }
// }(window, window.lib || (window.lib = {}));

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
        console.log('setTimeoutFunction f is null');
        return false;
    }

    if (typeof aBaseTimerOutTime[f] === 'undefined') {
        console.log('setTimeoutFunction aBaseTimerOutTime ' + f + ' undefined');
    }

    // console.log(f);
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
    }, aBaseTimerOutTime[f]);

    return true;
}

// function htmlBodyDom () {
//     return document.getElementsByTagName('body')[0];
// }

// function storageBody () {
//     return document.getElementById(sStoragePageBodyId);
// }
// function getStorageBodyDom () {
//     let oDom = document.getElementById(sStoragePageBodyId);
//     return oDom !== null ? oDom : false;
// }
// function checkExissStorageBodyDom () {
//     return document.getElementById(sStoragePageBodyId) ? true : false;
// }
// function writeStorageDody() {
//     let oDom = getStorageBodyDom();
//     if (oDom) {
//         return true;
//     }
//
//     let o = document.createElement('div');
//     o.id = sStoragePageBodyId;
//     o.className = sDisplayNoneClass;
//
//     bodyDom().appendChild(o);
// }
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
    // o.width = 0;
    // o.height = 0;

    fatherFom().appendChild(o);

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

function fatherFom () {
    let o = document.getElementById(oDomFatherId);
    if (o) {
        return o;
    }

    o = document.createElement('div');
    o.id = oDomFatherId;

    // let oBody = htmlBodyDom();
    oBody.appendChild(o);

    return o;
}

/**
 *
 * 获取对象样式规则信息，IE下使用currentStyle
 *
 * @param o 对象 dom type object
 * @param s 样式 type string
 * @returns {string}
 */
function getStyle (o, s) {
    return o.currentStyle ? o.currentStyle[s] : getComputedStyle(o,false)[s];
}

/**
 *
 * 原生js动画类似jquery--animate
 *
 * @param o 对象 dom type object
 * @param s 样式 type json
 * @param p 改变样式速度  number
 * @param c 回调函数 type strting
 */
function jsAnimate (o, s, p, c) {
    if (!o || !s || !p) {
        console.log('jsAnimate o or s or p is null');
        return;
    }

    clearInterval(o.timer);
    // 开启定时器
    o.timer = setInterval(function () {
        let f = true;//假设所有动作都已完成成立。
        for (let n in s) {
            //1.取当前属性值
            let m = 0;
            // 透明度是小数，所以得单独处理
            m = n == 'opacity' ? Math.round(parseFloat(getStyle(o, n)) * 100) : parseInt(getStyle(o, n));

            //2.计算速度
            let p = 0;
            p = (s[n] - m) / 8;//缓冲处理，这边也可以是固定值
            p = p > 0 ? Math.ceil(p) : Math.floor(p);//区分透明度及小数点，向上取整，向下取整

            //3.判断是否到达预定值
            if (s[n] != m) {
                f = false;
                if (n == 'opacity' ) {//判断结果是否为透明度
                    o.style[n] = (m + p) / 100;
                    o.style.filter = 'alpha(opacity:' + (m + p) + ')';
                }else{
                    o.style[n] = m + p + 'px';
                }
            }
        }
        if(f){//到达设定值，停止定时器，执行回调
            clearInterval(o.timer);
            if (c) {
                c();
            }
        }
    }, p)
}

/**
 *
 *
 *
 * @param o 对象 dom  type object
 * @param s 样式 type json
 * @param p 改变样式速度 type number
 * @param c 回调函数 type string
 */
function animates (o = false, s = false, p = false, c = false) {
    if (!o || !s || !p) {
        console.log('animates o or s or p is null');
        return;
    }

    if (typeof jQuery != 'undefined') {
        $(o).animate(s, p, c);
        return;
    }

    jsAnimate (o, s, parseInt(p / 20));
}

/**
 *
 * 修改 page  dom father 透明度
 *
 * @param b 显示或隐藏  bool true 显示  false 隐藏
 */
function changeDomFatherOpacity (b = false) {
    //////////////////////////
    console.log('修改 page dom father opacity');
    // let oBody = bodyDom();
    //
    // let iOpacity = b ? 100 : 0;
    // animates(oBody, {opacity: iOpacity}, iSpeed);
}

function getPublicShadeDom () {
    let oDom = document.getElementById(sPublicShadeId);
    return oDom !== null ? oDom : false;
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
    // o.className = sShadeClass;

    // let oDom = bodyDom();
    fatherFom().appendChild(o);
}
function shade () {
    if (!checkExistPublicShadeDom()) {
        console.log('shade checkExistPublicShadeDom is false, no shade father dom, will write shade father dom, settimeout retry to write shade ');
        writePublicShade();

        setTimeoutFunction('shade');
        return;
    }
    console.log('shade checkExistPublicShadeDom is true, will write son shade');

    writeIndexShade();

    writePlatformShade();

    writePageShade();
}
function checkExistShade (d = '') {
    if (!d) {
        console.log('checkExistShade ' + d + ' is null');
        return false;
    }

    return document.getElementById(d);
}
function writeIndexShade () {
    if (checkExistShade(sShadeIndex)) {
        console.log('writeIndexShade checkExistShade id ' + sShadeIndex + ' allready exist, so no write and now to show');
        console.log('need to show');
        return;
    }

    // let oDiv = writeShade(sShadeIndex);
    appendShade(writeShade(sShadeIndex));
}
function writePlatformShade () {
    if (checkExistShade(sIndexPlatform)) {
        console.log('writePlatformShade checkExistShade id ' + sIndexPlatform + ' allready exist, so no write and now to show');
        console.log('need to show');
        return;
    }

    // let oDiv = writeShade(sIndexPlatform);
    appendShade(writeShade(sIndexPlatform));
}
function showPageShade () {
    // let oDiv = document.createElement('div');
    // animates(oDiv, {top: iBottomHiddenHeight}, iSpeed);
    let o = document.getElementById(sIndexPage);
    if (!o) {
        console.log('showPageShade page shade dom no get, will to write page shade and retry');

        writePageShade('writePageShade');
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
    if (checkExistShade(sIndexPage)) {
        console.log('writePageShade checkExistShade id ' + sIndexPage + ' allready exist, so no write and now to show');
        showPageShade();
        return;
    }

    let oDiv = writeShade(sIndexPage);
    appendShade(oDiv);

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
    iShadeZIndex += parseInt(1);

    let o = document.createElement('div');
    o.id = d;
    o.className = d;
    // o.style.width = '100%';
    // o.style.height = '100%';
    // o.style.position = 'absolute';
    // o.style.top = '0px';
    // o.style.left = '0px';
    o.style.zIndex = iShadeZIndex;
    // o.style.backgroundColor = 'green';
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

    // let o = getPublicShadeDom();
    getPublicShadeDom().appendChild(d);
    // oDiv.style.backgroundColor = sShadeBackgroundColor;
}

function showShade (o = false) {
    if (!o) {
        console.log('showShade o dom is null, so no to do');
        return;
    }
    console.log('showShade ' + o.id + ', will to show shade ');

    iShadeZIndex += parseInt(1);

    let p1 = new RegExp('\\s+' + sInvisibleClass,'gm');
    let p2 = new RegExp('\\s+' + sVisibleClass,'gm');
    o.className = o.className.replace(p1, '');
    o.className = o.className.replace(p2, '');

    o.className += ' ' + sVisibleClass;
    o.style.zIndex = iShadeZIndex;

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

    animates(o, {opacity: 0}, iSpeed, function () {
        let p1 = new RegExp('\\s+' + sInvisibleClass,'gm');
        let p2 = new RegExp('\\s+' + sVisibleClass,'gm');
        o.className = o.className.replace(p1, '');
        o.className = o.className.replace(p2, '');
        o.className += ' ' + sInvisibleClass;
    });
}
/**
 *
 * 清除 未读取到 index js 遮罩层
 *
 */
function clearIndexShade () {
    let o = document.getElementById(sShadeIndex);
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
    let o = document.getElementById(sIndexPlatform);
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
    let o = document.getElementById(sIndexPage);
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

function fourBitString() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
// Generate a pseudo-GUID by concatenating random hexadecimal.
function guid () {
    let s = sGuidSplitTag;
    return (fourBitString() + fourBitString() + s + fourBitString() + s + fourBitString() + s + fourBitString() + s + fourBitString() + fourBitString() + fourBitString());
}
function uuid () {
    let s = [];
    for (let i = 0; i < 36; i++) {
        s[i] = sUuidString.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = sUuidString.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = sUuidSplitTag;

    // let uuid = s.join('');
    return s.join('');
}

function individuationUuid () {
    if (typeof window['hex_md5'] == 'undefined') {
        console.log('individuationUuid hex_md5 undefined, so settimeout to do ');
        return false;
    }
    console.log('individuationUuid hex_md5 is defined, so individuationUuid to do ');

    // if (typeof window['reverseString'] == 'undefined') {
    //     console.log('individuationUuid reverseString undefined, so settimeout to do ');
    //     return false;
    // }
    // console.log('individuationUuid reverseString is defined, so individuationUuid to do ');

    let a = uniquiueString();

    let b = uniquiueString();

    let s = sIndividuationUuidTag;

    let c = a + s + b;

    c = hex_md5(c);

    while (c.length < iIndividuationUniqueStrMinLength) {
        c += s + randStr(1);
    }

    c = c.toLowerCase();

    return c;
}
function uniquiueString () {
    let s = sUniquiueStringPrefix;
    let a = iIndividuationUniqueStrLength;
    let b = iIndividuationUniqueStrNumberMin;
    let c = iIndividuationUniqueStrNumberMax;
    let d = sUniquiueStringSplitTag;

    s += d + randStr(a);
    s += d + randNum(b, c);
    s += d + getNowTime();
    s += d + uuid();
    s += d + guid();

    s += d + randStr(a);
    s += d + randNum(b, c);
    s += d + getNowTime();
    s += d + uuid();
    s += d + guid();

    return s;
}

function queryOldSessionId () {
    return cookie.get(sOldSessionIdCookieKey);
}

function queryNewSessionId () {
    return cookie.get(sNewSessionIdCookieKey);
}
function sessionId () {
    console.log('sessionId, begin to do ');
    sOldSessionId = queryOldSessionId();
    sNewSessionId = queryNewSessionId();
    if (sNewSessionId != 'false') {
        console.log('sessionId sNewSessionId is true, will check new session format ');

        checkSessionIdOutTime();

        checkSessionKeyFormat();
    } else {
        console.log('sessionId sNewSessionId is false, will make session id ');

        makeSessionid();
    }

    let i = randNum(iUpdateSessionMinTime, iUpdateSessionMaxTime);
    let t = setTimeout(function () {
        sessionId();

        clearTimeout(t);
    }, i);
}
function checkSessionIdOutTime () {
    if (!sNewSessionId) {
        console.log('checkSessionIdOutTime sNewSessionId is false, so will to make session id ');

        makeSessionid();
        return false;
    }
    console.log('checkSessionIdOutTime sNewSessionId is true, so will to check session id out time ');

    let s = sNewSessionId.split(sSessionSplitTag);

    if (parseInt(getTime()) - parseInt(s[s.length - 1]) > iSessionOutTime) {
        console.log('checkSessionIdOutTime session id is timeout, so will to makeSessionid ');
        makeSessionid();
    }

    console.log('checkSessionIdOutTime settimeout check, settimeout recheck ');
    setTimeoutFunction('checkSessionIdOutTime');
}
function makeSessionid () {
    let s = individuationUuid();
    if (!s) {
        console.log('makeSessionid individuationUuid is false, so settimeout to do ');

        setTimeoutFunction('makeSessionid');
        return;
    }
    console.log('makeSessionid individuationUuid is defined, so to do ');

    if (typeof window['reverseString'] == 'undefined') {
        console.log('makeSessionid reverseString undefined, so settimeout to do ');

        setTimeoutFunction('makeSessionid');
        return false;
    }
    console.log('makeSessionid reverseString is defined, so individuationUuid to do ');

    let n = setSessionIdFormat(s);
    if (!n) {
        console.log('makeSessionid setSessionIdFormat is false, so settimeout to do ');

        setTimeoutFunction('makeSessionid');
        return;
    }

    sOldSessionId = sNewSessionId ? sNewSessionId : sOldSessionId;
    sNewSessionId = n;

    if (sNewSessionId) {
        console.log('makeSessionid sNewSessionId is true, so will to cache session and update old session ');

        cacheSessionId();
        return;
    }

    console.log('makeSessionid sNewSessionId is false, so settimeout to retry ');
    setTimeoutFunction('makeSessionid');
}
function cacheSessionId () {
    if (!sNewSessionId) {
        console.log('cacheSessionId sNewSessionId is false, so settimeout to retry ');

        setTimeoutFunction('cacheSessionId');
        return;
    }

    cookie.set(sOldSessionIdCookieKey, sOldSessionId, iUpdateSessionMaxTime);
    cookie.set(sNewSessionIdCookieKey, sNewSessionId, iUpdateSessionMaxTime);
}
function setSessionIdFormat (sSessionId1 = '') {
    if (typeof window['hex_md5'] == 'undefined') {
        // setTimeoutFunction('setSessionIdFormat');
        console.log('setSessionIdFormat hex_md5 undefined, so settimeout to do ');
        return false;
    }

    let a = sSessionId1;
    if (!a) {
        console.log('setSessionIdFormat sSessionId is null, so to do ');
        return false;
    }

    while (a.length < iSessionBeforeFormatLength) {
        a += randStr(1);
    }

    let p = sSessionSplitTag;

    let aS = a.split('');
    let s = '';
    let z = '';
    let q = sSessionIdSplitLength;
    for (let i in aS) {
        z = i % q ? aS[i] : p + aS[i];
        s += z;
    }
    s = s.substr(1, s.length - 1);

    s = setSessionIdPrefix(s) + p + s + p + setSessionIdSuffix(s);

    return s.toLowerCase() + sSessionSplitTag + getTime();
}
function setSessionIdPrefix (s) {
    let q = sSessionIdSplitLength;

    let t = s;
    t = hex_md5(t + sSessionSalt);
    return t.substring(t.length - parseInt(q)).toLowerCase();
}
function setSessionIdSuffix (s) {
    let q = sSessionIdSplitLength;

    let r = reverseString(s);
    r = hex_md5(r + sSessionSalt);
    return r.substr(0, q).toLowerCase();
}
function checkSessionKeyFormat () {
    if (typeof window['hex_md5'] == 'undefined') {
        console.log('checkSessionKeyFormat hex_md5 undefined, so settimeout to recheck session format ');

        let t = setTimeout(function () {
            checkSessionKeyFormat();

            clearTimeout(t);
        }, 20);
        return false;
    }



    let t = sSessionSplitTag;
    if (sOldSessionId != 'false') {
        if (!doCheckSessionId(sOldSessionId.split(t), 'old')) {
            console.log('checkSessionKeyFormat old session is false, so make new session id');
            makeSessionid();

            console.log('checkSessionKeyFormat settimeout check, settimeout check ');
            setTimeoutFunction('checkSessionKeyFormat');
            return;
        }
    }

    if (sNewSessionId != 'false') {
        if (!doCheckSessionId(sNewSessionId.split(t), 'new')) {
            console.log('checkSessionKeyFormat new session is false, so make new session id');
            makeSessionid();

            console.log('checkSessionKeyFormat settimeout check, settimeout check ');
            setTimeoutFunction('checkSessionKeyFormat');
            return;
        }
    }

    setTimeoutFunction('checkSessionKeyFormat');
    console.log('checkSessionKeyFormat settimeout check, settimeout check ');
}

/**
 *
 * 检查 session id 格式
 *
 * @param s session id type string
 * @param t 类型 新老session type string
 * @returns {boolean}
 */
function doCheckSessionId (s, t) {
    if (typeof window['hex_md5'] == 'undefined') {
        console.log('doCheckSessionId hex_md5 undefined, so settimeout to do ');

        setTimeoutFunction('doCheckSessionId', s, t);
        return false;
    }
    console.log('doCheckSessionId hex_md5 is defined, so sttimeout to check session id ');

    if (typeof window['reverseString'] == 'undefined') {
        console.log('doCheckSessionId reverseString undefined, so settimeout to do ');

        setTimeoutFunction('doCheckSessionId', s, t);
        return false;
    }
    console.log('doCheckSessionId reverseString is defined, so individuationUuid to do ');

    let a = s[0];
    let b = s[s.length - 2];
    s.pop();
    s.pop();
    s.shift();
    s = s.join(sSessionSplitTag);
    let c = setSessionIdPrefix(s);
    let d = setSessionIdSuffix(s);

    if (
        (a !== c)
        ||
        (b !== d)
    ) {
        console.log('checkSessionKeyFormat ' + t + ' format error, so makeSessionId');

        makeSessionid();
        return false;
    }

    return true;
}

/**
 *
 * 随机字符串
 *
 * @param l 随机字符串 长度 type int
 * @returns {string|string}
 */
function randStr (l) {
    l = l || 32;
    let s = sRandString;
    let a = s.length,
        n = '';
    for (let i = 0; i < l; i++) {
        n += s.charAt(Math.floor(Math.random() * a));
    }

    return n;
}

/**
 *
 * 随机数字
 *
 * @param i 最小数字 type int
 * @param a 最大数字 type int
 * @returns {*}
 */
function randNum (i, a) {
    // let iRange = a - i;
    // let iRand = Math.random();
    return(i + Math.round((Math.random()) * (a - i)));
}

function illegality () {
    window.location.href = sAstrictJumpUrl;
}

// function initializeBody () {
    // console.log('ssssssssssssssssssss');
    // let
// }

function baseBegin (bOnload = false) {
    try {
        if (bOnload) {
            console.log('-1');
            queryMasterOrigin();

            console.log(0);
            fatherFom();

            console.log(1);
            loadOriginJquery();

            console.log(2);
            writeLocalstorageIframe();

            console.log(3);
            sessionId();

            // console.log(4);
            // initializeBody();

            console.log(5);
            winResize();

            console.log(6);
            setHosts();

            console.log(7);
            setStaticResouresPathVersion();
        }

        console.log(8);
        if (typeof jQuery === 'undefined') {
            console.log(9);
            if (getNowTime() - iLoadOriginJqueryLastTime > iMaxLoadOriginJqueryWaitTime) {
                console.log(10);
                loadLocalJquery();
            }

            console.log(11);
            setTimeoutFunction('baseBegin');
            return;
        }

        console.log(12);
        loadBaseCss();

        console.log(13);
        loadBaseJs();

        console.log(14);
        if (typeof aLang == 'undefined') {
            console.log(15);
            queryUserLang();
        }

        console.log(17);
        afterLoadIndexJs();

        console.log(18);
        if (typeof window['apiQuery'] === 'undefined') {
            console.log(19);
            loadApiQueryJs();

            console.log('baseBegin query is undefined. will to load query js file ');
        }

        console.log(20);
        if (typeof window['logicBegin'] === 'undefined') {
            console.log(22);
            setTimeoutFunction('baseBegin');
            return;
        }

        logicBegin(true);
    } catch (e) {
        console.log('catch exception');
        console.log(e);
        exceptionHandle(e);
        console.log('catch exception');
    }
}

function exceptionHandle (e) {
    console.log('exceptionHandle exception handle, need to do ');
    console.log(e);
}

function afterLoadIndexJs () {
    bFirstLoad = false;

    clearIndexShade();
}

function winResize () {
    shade();

    astrict();

    winSize();

    setHeader();

    initializeFontSize();

    clearPageShade();
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
    }, aBaseTimerOutTime['winResize']);
}
