const sBaseProtocol = window.location.protocol;
const iDefaultFontSize = 16; //默认pc字体大小
const iDefaultOneFontMms = 3; //默认一个中文字占多宽，单位毫米
const sLocalstorageLangTag = 'localstorage_lang';
const sLocalstorgaeUserPersonalizedColorKey = 'user_personlized_color';
const iDefaultUserPersonalizedColor = 1;
let iFontSize = 16;
const oHtml = document.getElementsByTagName('html')[0];
let iWinWidth = 0;
let iWinHeight = 0;
const sIsPhone = 'phone';
const sIsTablet = 'tablet';
const sIsPc = 'pc';
const sReLangClass = 're_lang';
const sLocalstorageTagMd5Salt = '______9*^&*%^$%$67dasy~`<>?dg';

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
    'map.you.com',
    'shop.you.com',
    'bike.you.com',
    'person.you.com',
    'play.you.com',
    'music.you.com',
    'vedio.you.com',
    // 'forum.you.com',
    // 'friend.you.com',
    // 'setting.you.com',
    // 'chat.you.com',
];
//localstorage相关
const aLocalstorageAddressSize = [];
// const aLocalstorageAddress = [];
const iMaxLocalstorageSize = 4718592;
const aStorageOrigins = [
    'storage1',
    'storage2',
    'storage3',
    'storage4',
    'storage5',
    'storage6',
    'storage7',
    'storage8',
    'storage9',
];
const iStorageOriginLength = aStorageOrigins.length;
const sStoragePage = 'storage.html';
//localstorage相关
const iRequertTimeout = 9000;
const iRequertLangJsTimeout = 5000;
const iMaxLoadOriginJqueryWaitTime = 5000;
let aBaseTimer = []; //基础定时器
const aBaseTimerOutTime = []; //基础定时器间隔时间
aBaseTimerOutTime['winResize'] = 100;
// aBaseTimerOutTime['loadBaseVariableJs'] = 70;
aBaseTimerOutTime['loadBaseEncodeJs'] = 70;
aBaseTimerOutTime['loadBaseLogicJs'] = 70;
aBaseTimerOutTime['loadBaseDomJs'] = 70;
aBaseTimerOutTime['loadBaseFunctionJs'] = 70;
aBaseTimerOutTime['loadOriginJquery'] = 70;
aBaseTimerOutTime['loadLang'] = 70;
aBaseTimerOutTime['logicBegin'] = 70;
aBaseTimerOutTime['loadPlatformDomJs'] = 70;
aBaseTimerOutTime['baseBegin'] = 70;
aBaseTimerOutTime['loadResetCss'] = 70;
aBaseTimerOutTime['checkLoadCss'] = 70;
aBaseTimerOutTime['setLocalstorageOrigins'] = 70;
aBaseTimerOutTime['loadLocalJquery'] = 70;
aBaseTimerOutTime['replaceLangs'] = 70;
aBaseTimerOutTime['loadPublicCss'] = 70;
aBaseTimerOutTime['loadPersonalizedCss'] = 70;
aBaseTimerOutTime['loadVariableCss'] = 70;
const aJsVersion = []; // js 文件版本号
let sBaseJsFullName = '';
// let sBaseVariableJsFullName = '';
let sBaseFunctionJsFullName = '';
let sBaseJqueryJsFullName = '';
let sBaseLogicJsFullName = '';
let sBaseDomJsFullName = '';
let sPlatformDomJsFullName = '';
let sBaseEncodeJsFullName = '';
let sOriginJquery = '';
let sCnLangs = '';
let sEnLangs = '';
function setJsPathAndVersion () {
    const sBaseJs = '/public_static_resource/js/public/base.js';
    // const sBaseVariableJs = '/public_static_resource/js/public/variable.js';
    const sBaseFunctionJs = '/public_static_resource/js/public/function.js';
    const sBaseJqueryJs = '/public_static_resource/js/public/jquery.js';
    const sBaseLogicJs = '/public_static_resource/js/' + platformTag() + '/logic.js';
    const sBaseDomJs = '/public_static_resource/js/public/dom.js';
    const sBaseEncodeJs = '/public_static_resource/js/public/encode.js';
    const sCnLang = '/public_static_resource/js/lang/cn.js';
    const sEnLang = '/public_static_resource/js/lang/cn.js';
    const sPlatformDomJs = '/public_static_resource/js/' + platformTag() + '/dom.js';

    aJsVersion[sBaseJs] = '11111111111111111111111111111111';
    // aJsVersion[sBaseVariableJs] = '222222222222222222222222222222';
    aJsVersion[sBaseFunctionJs] = '3333333333333333333333333333333333333';
    aJsVersion[sBaseJqueryJs] = '4444444444444444444444444444444444444444444';
    aJsVersion[sBaseLogicJs] = '55555555555555555555555555555555555555555555555555';
    aJsVersion[sBaseDomJs] = '6666666666666666666666666666666666666666666';
    aJsVersion[sBaseEncodeJs] = '77777777777777777777777777777777777';
    aJsVersion[sCnLang] = '888888888888888888888';
    aJsVersion[sEnLang] = '9999999999999999999999999999';
    aJsVersion[sPlatformDomJs] = 'ssssssssssssssssssssssssssssssssssssssssssssssssss';

    sOriginJquery = 'http://libs.baidu.com/jquery/2.0.0/jquery.min.js';
    aJsVersion[sOriginJquery] = 'dasdasdwqe214124';

    sOriginJquery = sOriginJquery + '?ver=' + aJsVersion[sOriginJquery];
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
}
const aCssVersion = []; // css 文件版本号
let sResetCssFullPath = '';
let sPublicCssFullPath = '';
let sVariableCssFullPath = '';
let sPersonalizedCssFullPath = '';
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

    head.appendChild(link);
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
    loadOriginJquery();

    // loadBaseVariableJs();

    loadBaseEncodeJs();

    loadBaseLogicJs();

    loadBaseDomJs();

    loadPlatformDomJs();

    loadBaseFunctionJs();
}

function loadBaseCss () {
    loadResetCss();

    loadPersonalizedCss();

    loadPublicCss();

    loadVariableCss();
}
let bLoadPersonalizedCss = false;
function loadPersonalizedCss (sPersonlizedColor1 = false) {
    if (bLoadPersonalizedCss) {
        return true;
    }

    if (typeof window['queryUserPersonalizedColor'] === 'undefined') {
        console.log('function.js queryUserPersonalizedColor no load');
        setTimeoutFunction('loadPersonalizedCss');
        return;
    }

    let sPersonalizedColor = sPersonlizedColor1 ? sPersonlizedColor1 : queryUserPersonalizedColor();
    // console.log(sPersonalizedColor);
    if (!sPersonalizedColor) {
        console.log('loadPersonalizedCss sPersonalizedColor id null');
        setTimeoutFunction('loadPersonalizedCss');
        return;
    }

    if (!checkRequestJsCssLimit('css', 'loadPersonalizedCss')) {
        return false;
    }

    let sPersonalizedCss = '/public_static_resource/css/personalized/color/' + sPersonalizedColor + '.css';
    aCssVersion[sPersonalizedCss] = 'ppppppppppppppppppsssssssssssssssss';
    sPersonalizedCssFullPath = setJsCssSrc('css', sPersonalizedCss);

    loadCss(sPersonalizedCssFullPath, 'afterloadPersonalizedCss');

    setTimeoutFunction('loadPersonalizedCss');
}
function afterloadPersonalizedCss () {
    bLoadPersonalizedCss = true;
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
        aHost.push(sBaseProtocol + '//' + aBaseHost[i]);
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

let aRequestJsCssLastTime = [];
function checkRequestJsCssLimit (sType = '', sFunction = '') {
    if (!sFunction) {
        console.log('checkRequestJsCssLimit sType or sFunction is null');
        return false;
    }

    let iNowTime = getNowTime();
    let iLastRequestTime = typeof aRequestJsCssLastTime[sFunction] !== 'undefined' ? aRequestJsCssLastTime[sFunction] : 0;
    if (iNowTime - iLastRequestTime < iRequertTimeout) {
        console.log('checkRequestJsCssLimit ' + sFunction + ' time last ' + iRequertTimeout + ' millisecond');
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

let iLastRequestLangTime = 0;
function loadLang (sLang = '') {
    sLang = sLang ? sLang : sUserLangvage;
    if (!sLang) {
        console.log('loadLang sLang is null');
        return false;
    }

    let iTime = getNowTime();
    if (iTime - iLastRequestLangTime < iRequertLangJsTimeout) {
        setTimeoutFunction('loadLang');
        return false;
    }
    iLastRequestLangTime = iTime;

    let sLangJs = '';
    switch (sLang) {
        case 'cn' :
            sLangJs = sCnLangs;
            break;
        case 'en' :
            sLangJs = sEnLangs;
            break;
    }
    if (!sLangJs) {
        console.log('loadLang sLangJs is null');
        return false;
    }

    loadJs(sLangJs, true, 'replaceLangs');
}

let bSetHeader = false;
function setHeader () {
    if (bSetHeader) {
        return;
    }
    bSetHeader = true;

    if (isMobile()) {
        let oMeta = document.createElement('meta');
        oMeta.name = 'viewport';
        oMeta.content = 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0';
        head.appendChild(oMeta);
    }
}

const ua = navigator;
// console.log(ua);
let os = function() {
    let sUserAgent = ua.userAgent;
    isWindowsPhone = /(?:Windows Phone)/.test(sUserAgent),
    isSymbian = /(?:SymbianOS)/.test(sUserAgent) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(sUserAgent),
    isFireFox = /(?:Firefox)/.test(sUserAgent),
    isChrome = /(?:Chrome|CriOS)/.test(sUserAgent),
    isTablet = /(?:iPad|PlayBook)/.test(sUserAgent) || (isAndroid && !/(?:Mobile)/.test(sUserAgent)) || (isFireFox && /(?:Tablet)/.test(sUserAgent)),
    isPhone = /(?:iPhone)/.test(sUserAgent) && !isTablet,
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
    let sId = 'get_one_mms_px';

    // 创建一个1mm宽的元素插入到页面，然后坐等出结果
    let oDiv = document.createElement('div');
    oDiv.id = sId;
    oDiv.style.width = '1mm';

    document.getElementsByTagName('body')[0].appendChild(oDiv);

    // 原生方法获取浏览器对元素的计算值
    oDiv = document.getElementById(sId).getBoundingClientRect();
    return oDiv.width;
}

function initializeFontSize () {
    let sPlatform = checkPlatform();

    // if (sPlatform === sIsPhone) {
    //     iFontSize = Math.ceil(iDefaultOneFontMms * getOneMmsPx());
    // }

    // if (sPlatform === sIsTablet) {
        iFontSize = Math.ceil(iDefaultOneFontMms * getOneMmsPx());
    // }

    if (sPlatform === sIsPc) {
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

function setTimeoutFunction (sFunction = '') {
    if (!sFunction) {
        console.log('setTimeoutFunction sFunction is null');
        return false;
    }

    if (typeof aBaseTimerOutTime[sFunction] === 'undefined') {
        console.log('setTimeoutFunction aBaseTimerOutTime ' + sFunction + ' undefined');
    }

    aBaseTimer[sFunction] = setTimeout(function () {
        window[sFunction]();
    }, typeof aBaseTimerOutTime[sFunction] !== 'undefined' ? aBaseTimerOutTime[sFunction] : 10);

    return true;
}

function setLocalstorageOrigins () {
    let sProtocol = window.location.protocol + '//';

    let sMasterOrigin = sOrigin ? sOrigin : queryMasterOrigin();
    sMasterOrigin = sMasterOrigin.replace(sProtocol, '');
    let oIframe = '';
    let oBody = document.getElementsByTagName('body')[0];
    let sPage = '';
    let sStoragePage1 = '';
    for (let i in aStorageOrigins) {
        sStoragePage1 = sPage = sProtocol + aStorageOrigins[i] + '.' + sMasterOrigin + '/' + sStoragePage;
        aStorageOrigins[i] = sStoragePage1;
        aLocalstorageAddressSize[sStoragePage1] = 0;
        oIframe = document.createElement('iframe');
        oIframe.src = sPage;
        oIframe.className = 'display_none';
        oIframe.id = sPage;
        oIframe.width = 0;
        oIframe.height = 0;
        oBody.appendChild(oIframe);
    }
}
function bodyDom() {
    let sDomId = 'page_dom';
    let sInfo = '<div id="' + sDomId + '"></div>';
    let oBody = document.getElementsByTagName('body')[0];
    $(oBody).append(sInfo);

    let oDom = document.getElementById(sDomId);
    return oDom;
}

function shade () {

}

let bNoticeAstrict = false;
function astrict () {
    if (bNoticeAstrict) {
        return;
    }
    bNoticeAstrict = true;

    if (!isMobile()) {
        alert('The computer side is not enabled yet');
        window.location.href = sAstrictJumpUrl;

        return false;
    }

    return true;
}

// let bOnloadLoadLang = false;
function baseBegin (bOnload = false) {
    if (bOnload) {
        winResize();

        setHosts();

        setStaticResouresPathVersion();

        setLocalstorageOrigins();

        setTimeoutFunction('baseBegin');

        return false;
    }

    loadBaseCss();

    loadBaseJs();

    if (typeof jQuery === 'undefined') {
        if (getNowTime() - iLoadOriginJqueryLastTime > iMaxLoadOriginJqueryWaitTime) {
            loadLocalJquery();
        }

        setTimeoutFunction('baseBegin');
        return;
    }

    if (typeof window['queryUserLang'] === 'undefined') {
        setTimeoutFunction('baseBegin');
        return;
    }

    queryUserLang();
    // if (queryUserLang()) {
    //     if (!bOnloadLoadLang) {
    //         bOnloadLoadLang = true;
    //         loadLang();
    //     }
    // }

    if (typeof aLang === 'undefined') {
        setTimeoutFunction('baseBegin');
        return;
    }

    if (typeof window['logicBegin'] === 'undefined') {
        setTimeoutFunction('baseBegin');
        return;
    }

    logicBegin(true);
}

function winResize () {
    shade();

    astrict();

    winSize();

    setHeader();

    initializeFontSize();
}

window.onload = baseBegin(true);

window.onresize = function () {
    if (aBaseTimer['winResize']) {
        clearTimeout(aBaseTimer['winResize']);
    }

    aBaseTimer['winResize'] = setTimeout(function () {
        winResize();
    }, aBaseTimerOutTime['winResize']);
}
