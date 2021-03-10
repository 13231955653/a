/**
 *
 * 用户提示信息
 *
 * @param s 提示信息 type string
 * @returns {boolean}
 */
function notice (s = '') {
    if (!s) {
        console.log('notice s is null');
        return false;
    }

    alert(s);
}

/**
 *
 * 反转字符串
 *
 * @param s 需反转的字符串 type string
 * @returns {string}
 */
function reverseString (s = '') {
    if (!s) {
        console.log('reverseString s is null');
        return;
    }

    return s.split('').reverse().join('');
}

/**
 *
 * 检查是否字符串格式
 *
 * @param s 需检查的字符串 type string
 * @returns {boolean}
 */
function isRealString (s = '') {
    if (s && (typeof s === 'string' || typeof s === 'number')) {
        return true;
    }

    console.log('isRealString s is not real string');
    return false;
}

/**
 *
 * 获取现在页面  page 信息
 *
 * @returns {*}
 */
function getNowPage () {
    let p = getUrlArgs('page');

    return p ? p : sDefaultPage;
}

/**
 *
 * 检查数组中是否包含某值
 *
 * @param s 检查的字符串
 * @param aArray 待检查的数组
 * @returns {string|boolean}
 */
function inArray ( s, a ) {
    for ( let i in a ) {
        if ( a[i] === s ) {
            return i;
        }
    }

    return false;
}

/**
 *
 * 检查数组中是否包含某键
 *
 * @param k 待检查的键
 * @param a 待检查的数组
 * @returns {string|boolean}
 */
function inArrayByKey ( k, a ) {
    for ( let i in a ) {
        if ( i === k ) {
            return i;
        }
    }

    return false;
}

/**
 *
 * 根据键值删除数组中的值
 *
 * @param a 待删除的数组
 * @param k 要删除的键值
 * @returns {string|*}
 */
function arrayDelValByKey (a = [], k = '') {
    if (!a || !k) {
        console.log('arrayDelValByKey a or k is null');
        return '';
    }
    for (let i in a) {
        if (i !== k) {
            continue;
        }

        delete a[k];
    }

    return a;
}

/**
 *
 * 获取url参数
 *
 * @param w 获取参数 的键 type string
 * @returns {*}
 */
function getUrlArgs (w = '') {
    let h = window.location.href;

    let s = h.split('?');
    if (s.length < 2) {
        console.log('getUrlArgs s.length < 2');
        return w ? '' : [];
    }

    let sArg = s[1];
    sArg = urlDecode(sArg);
    if (sArg) {
        let aArg = sArg.split('&');
        let aUrlArgs = [];
        let aOneArg = [];
        for (let i in aArg) {
            aOneArg = aArg[i].split('=');
            aUrlArgs[aOneArg[0]] = aOneArg[1];
        }

        if (!checkUrlSign(aUrlArgs)) {
            console.log('do not change url args');
            return w ? '' : [];
        }

        return w ? (typeof aUrlArgs[w] !== 'undefined' ? aUrlArgs[w] : '') : aUrlArgs;
    }

    return w ? '' : [];
}

/**
 *
 * 检查url sign 值
 *
 * @param u url ? 后字符串 type string
 * @returns {boolean}
 */
function checkUrlSign (u = []) {
    if (!u) {
        console.log('checkUrlSign u is null');
        return false;
    }

    let s = urlSign(u);

    return s === u[sUrlAddressSignKey];
}

/**
 *
 * 设置url sign 值
 *
 * @param u url ? 后字符串 type string
 * @returns {string}
 */
function urlSign (u = []) {
    if (!u) {
        console.log('urlSign u is null');
        return '';
    }

    u.sort();

    let sArg = '';
    for (let i in u) {
        if (i !== sUrlAddressSignKey) {
            sArg += i + '=' + u[i] + '&';
        }
    }
    sArg = sArg.substr(0, sArg.length - 1);

    let s = hex_md5(sUrlAddressSignEncodeSalt + hex_md5(sArg + sUrlAddressSignEncodeSalt));
    s = s.toLowerCase();

    return s;
}

/**
 *
 * 改变url 地址栏
 *
 * @param k 需改变的 url 键
 * @param v 改变的值
 * @param t 浏览器标题
 * @param c 回调函数
 * @returns {boolean}
 */
function updateUrlArg (k = '', v = '', t = '', c = false) {
    if (!k || !v) {
        console.log('updateUrlArg k or v is null');
        return false;
    }

    let l = window.location;

    let p = l.pathname;
    p = p !== '/' ? p : '';
    p = p ? p : '/' + sDefaultPageHtml;

    let h = l.origin + p;

    let a = getUrlArgs();

    a[k] = v;
    if (typeof a[sUrlAddressPageKey] === 'undefined') {
        a[sUrlAddressPageKey] = sDefaultPage;
    }
    a = arrayDelValByKey(a, sUrlAddressChangeTimeKey);
    a = arrayDelValByKey(a, sUrlAddressSignKey);

    a[sUrlAddressChangeTimeKey] = getNowTime();

    let s = '';
    for (let i in a) {
        if (i === k) {
            a[i] = v;
        }

        s += i + '=' + a[i] + '&';
    }

    s = s + sUrlAddressSignKey + '=' + urlSign(a);
    s = urlEncode(s);

    let g = h + '?' + s;

    let o = {};
    window.history.pushState(o, t, g);

    setBrowserTitle(t);

    if (c) {
        window[c]();
    }
}

/**
 *
 * 字符串首字母大写
 *
 * @param s 带处理的字符串 type string
 * @returns {string|boolean}
 */
function ucfirst (s = '') {
    if (!s) {
        console.log('ucfirst s is null, so no to do');
        return false;
    }

    return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 *
 * 设置浏览器title
 *
 * @param t 浏览器title type string
 * @returns {boolean}
 */
function setBrowserTitle (t = '') {
    if (!t) {
        console.log('setPageTitle t is null, so no to do');
        return false;
    }
    console.log('setPageTitle t is true, so will set browser title ');

    document.title = t;
}

/**
 *
 *  改写 浏览器 title
 * @param t window title type string
 */
function replaceTitle (t = '') {
    if (!t) {
        console.log('replaceTitle t is null, so no to do ');
        return;
    }
    console.log('replaceTitle t is true, will to replace browser title lang ');

    if (typeof window['aLang'] == 'undefined') {
        console.log('replaceTitle aLang is false, so settimtout retry to repalce browser title lang ');
        setTimeoutFunction('replaceTitle', t);
        return;
    }
    console.log('replaceTitle aLang is true, so replace browser title lang ');

    setBrowserTitle(aLang[t]);
}

/**
 *
 * 修改 page  dom father 透明度
 *
 * @param b 显示或隐藏  bool true 显示  false 隐藏
 */
function changeDomFatherOpacity (b = false) {
    console.log('修改 page dom father opacity');
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
 * 替换dom语言
 *
 * @param p 传入第二参数的类型 type string id/class/tag
 * @param d 需要替换语言的dom的 id/class/tag type sting
 */
function replaceLang (p = '', d = '') {
    if (!p || !d) {
        console.log('replaceLang p or d is null, so no to do ');
        return;
    }
    console.log('replaceLang, will to do replace lang ');

    if (typeof aLang == 'undefined') {
        console.log('replaceLang aLang is false, so settimtoue retry replace lang ');
        setTimeoutFunction('replaceLang', p, d);
        return;
    }
    console.log('replaceLang aLang is true, will to replace lang ');

    let o = false;
    switch (p) {
        case sReplaceLangIdType :
            o = document.getElementById(d);
            break;
    }

    if (!o) {
        console.log('replaceLang dom is null, so no to do ');
        return;
    }
    console.log('replaceLang dom is true, will to replace lang ');

    let s = o.getElementsByClassName(sReLangClass);
    for (let i in s) {
        s[i].innerHTML = aLang[s[i].id];
    }
}

/**
 *
 * 更新 url page 参数
 *
 * p url page 更新为 p type sting
 *
 * @type {string}
 */
let sLastPage = '';
function uodateUrlPageArg (p = '') {
    if (!p) {
        console.log('uodateUrlPageArg page is null，so no will to do');
        return;
    }

    if (sLastPage === p) {
        console.log('uodateUrlPageArg sLastPage === ' + p + ' ，so no change url and after action');
        console.log('uodateUrlPageArg dispose show now page or reload now page dom');

        repeatedlyPage(p);
        return;
    }
    sLastPage = p;

    writePageShade();

    updateUrlPage(p);
}

function replaceLangs () {
    if (typeof jQuery === 'undefined') {
        console.log('replaceLangs jQuery is undefined, so settimeout retry to replaceLangs ');

        setTimeoutFunction('replaceLangs');
        return;
    }
    console.log('replaceLangs jQuery is defined, so to replaceLangs ');

    let a = $('.' + sReLangClass);
    if (!a.length) {
        console.log('replaceLangs class ' + sReLangClass + ' dom no get, so no to do replace lang');
        // setTimeoutFunction('replaceLangs');
        return false;
    }

    let s = '';
    for (let i in a) {
        s = typeof a[i].id != 'undefined' ? a[i].id : 'error';
        s = typeof aLang[s] != 'undefined' ? aLang[s] : aLang['error'];
        a[i].innerHTML = s;
    }
}

/**
 *
 * 更新url page 参数
 *
 * p page 更新为 p type sting
 *
 * @type {Array}
 */
let aAllreadyLoadPageJs = [];
function updateUrlPage (p = '') {
    if (typeof window['urlDecode'] == 'undefined') {
        console.log('updateUrlPage urlDecode is undefined, so settimtoue retry ');

        setTimeoutFunction('updateUrlPage', p);
        return;
    }
    console.log('updateUrlPage urlDecode is defined, so will to do ');

    p = p ? p : getNowPage();

    let t = '';
    replaceWindowTitle(p + '_title');

    let f = ''; // 回调函数
    if (typeof aAllreadyLoadPageJs[p] == 'undefined') {
        console.log('updateUrlPage aAllreadyLoadPageJs ' + p + ' is undefined, so load page js ');
        f = 'loadPageJs';
    } else {
        console.log('updateUrlPage aAllreadyLoadPageJs ' + p + ' is defined, so load afterLoadPageJs ');
        f = 'afterLoadPageJs';
    }
    aAllreadyLoadPageJs[p] = getNowTime();

    updateUrlArg (sUrlAddressPageKey, p, t, f);
}

/**
 *
 * 获取旧的session id
 *
 * @returns {*|string}
 */
function oldSessionId () {
    return cookie.get(sOldSessionIdCookieKey);
}
/**
 *
 * 获取新的session id
 *
 * @returns {*|string}
 */
function newSessionId () {
    return cookie.get(sNewSessionIdCookieKey);
}
/**
 *
 * 检查session
 *
 */
function sessionId () {
    console.log('sessionId, begin to do ');
    sOldSessionId = oldSessionId();
    sNewSessionId = newSessionId();
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
        clearTimeout(t);

        sessionId();
    }, i);
}

/**
 *
 * 生成 session id
 *
 * @returns {boolean}
 */
function makeSessionid () {
    let s = individuationUuid();
    if (!s) {
        console.log('makeSessionid individuationUuid is false, so settimeout to do ');

        setTimeoutFunction('makeSessionid');
        return;
    }
    console.log('makeSessionid individuationUuid is true, so to do ');

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
/**
 *
 * 生成自定义 uuid
 *
 * @returns {string|boolean}
 */
function individuationUuid () {
    if (typeof window['hex_md5'] == 'undefined') {
        console.log('individuationUuid hex_md5 undefined, so settimeout to do ');
        return false;
    }
    console.log('individuationUuid hex_md5 is defined, so individuationUuid to do ');

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
    s += d + getNowTime();
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
    // s += t + n.geolocation;
    s += t + n.language;
    s += t + n.onLine;
    s += t + n.platform;
    s += t + n.product;
    s += t + n.userAgent;
    s += t + n.hardwareConcurrency;

    return s;
}
function generateUUID () {
    let d = getNowTime();
    let i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return i;
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
function cacheSessionId () {
    if (!sNewSessionId) {
        console.log('cacheSessionId sNewSessionId is false, so settimeout to retry ');

        setTimeoutFunction('cacheSessionId');
        return;
    }
    console.log('cacheSessionId sNewSessionId is true, so to do ');

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
        }, aTimer['checkSessionKeyFormat']);
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
    return(i + Math.round((Math.random()) * (a - i)));
}

function illegality () {
    window.location.href = sAstrictJumpUrl;
}

const bLoadFunctionJs = true;
