const sBaseProtocol = window.location.protocol;
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
const iRequertTimeout = 9000;
const iRequertLangJsTimeout = 5000;
const iMaxLoadOriginJqueryWaitTime = 5000;
let aBaseTimer = []; //基础定时器
const aBaseTimerOutTime = []; //基础定时器间隔时间
aBaseTimerOutTime['loadBaseVariableJs'] = 555;
aBaseTimerOutTime['loadBaseEncodeJs'] = 555;
aBaseTimerOutTime['loadBaseLogicJs'] = 555;
aBaseTimerOutTime['loadBaseDomJs'] = 555;
aBaseTimerOutTime['loadBaseFunctionJs'] = 555;
aBaseTimerOutTime['loadOriginJquery'] = 555;
aBaseTimerOutTime['loadLang'] = 555;
aBaseTimerOutTime['logicBegin'] = 555;
aBaseTimerOutTime['loadPlatformDomJs'] = 555;
aBaseTimerOutTime['baseBegin'] = 555;
aBaseTimerOutTime['loadResetCss'] = 555;
aBaseTimerOutTime['checkLoadCss'] = 555;
aBaseTimerOutTime['setLocalstorageOrigins'] = 555;
aBaseTimerOutTime['loadLocalJquery'] = 555;
const aJsVersion = []; // js 文件版本号
let sBaseJsFullName = '';
let sBaseVariableJsFullName = '';
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
    const sBaseVariableJs = '/public_static_resource/js/public/variable.js';
    const sBaseFunctionJs = '/public_static_resource/js/public/function.js';
    const sBaseJqueryJs = '/public_static_resource/js/public/jquery.js';
    const sBaseLogicJs = '/public_static_resource/js/' + platformTag() + '/logic.js';
    const sBaseDomJs = '/public_static_resource/js/public/dom.js';
    const sBaseEncodeJs = '/public_static_resource/js/public/encode.js';
    const sCnLang = '/public_static_resource/js/lang/cn.js';
    const sEnLang = '/public_static_resource/js/lang/cn.js';
    const sPlatformDomJs = '/public_static_resource/js/' + platformTag() + '/dom.js';

    aJsVersion[sBaseJs] = '11111111111111111111111111111111';
    aJsVersion[sBaseVariableJs] = '222222222222222222222222222222';
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
    sBaseVariableJsFullName = setJsCssSrc('js', sBaseVariableJs);
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
function setCssPathAndVersion () {
    let sResetCss = '/public_static_resource/css/public/reset.css';

    aCssVersion[sResetCss] = 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';

    sResetCssFullPath = setJsCssSrc('css', sResetCss);
}

function setStaticResouresPathVersion () {
    setJsPathAndVersion();

    setCssPathAndVersion();
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

    document.getElementsByTagName('head')[0].appendChild(link);
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

    loadBaseVariableJs();

    loadBaseEncodeJs();

    loadBaseLogicJs();

    loadBaseDomJs();

    loadPlatformDomJs();

    loadBaseFunctionJs();
}

function loadBaseCss () {
    loadResetCss();

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

let bLoadBaseVariableJs = false;
function loadBaseVariableJs () {
    if (bLoadBaseVariableJs) {
        return true;
    }

    if (!checkRequestJsCssLimit('js', 'loadBaseVariableJs')) {
        return false;
    }

    loadJs(sBaseVariableJsFullName, true, 'afterloadBaseVariableJs');

    setTimeoutFunction('loadBaseVariableJs');
}
function afterloadBaseVariableJs () {
    bLoadBaseVariableJs = true;
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
function setLocalstorageOrigins () {
    let sProtocol = window.location.protocol + '//';

    let sMasterOrigin = sOrigin ? sOrigin : queryMasterOrigin();
    sMasterOrigin = sMasterOrigin.replace(sProtocol, '');
    let oIframe = '';
    let oBody = document.getElementsByTagName('body')[0];
    let sPage = '';
    for (let i in aStorageOrigins) {
        aStorageOrigins[i] = sPage = sProtocol + aStorageOrigins[i] + '.' + sMasterOrigin + '/' + sStoragePage;
        oIframe = document.createElement('iframe');
        oIframe.src = sPage;
        oIframe.className = 'display_none';
        oIframe.id = sPage;
        oBody.appendChild(oIframe);
    }
}

// let bOnloadLoadLang = false;
function baseBegin (bOnload = false) {
    if (bOnload) {
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

window.onload = baseBegin(true);
