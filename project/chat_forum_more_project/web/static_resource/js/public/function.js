//url-------------
const sUrlAddressSignEncodeSalt = '_&*uh124jKzS645s(^$%a87123_';
const sUrlAddressPageKey = 'page';
const sUrlAddressSignKey = 'sign';
const sUrlAddressChangeTimeKey = 'change_time';

const sLangTitlePostfix = '_title';
//url===================

//localstorage相关----------------------------
// const sLocalstorageTagMd5Salt = '______9*^&*%^$%$67dasy~`<>?dg';
// const sLocalstorgaeNowPageTag = 'localstorage_cache_now_page';
//localstorage相关=============================

const sDefaultPage = 'forum';

/*6147b904ddeba7bc*//**
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
}/*6147b904ddeba7bc*/

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

function generateUUID () {
    let d = getMillisecondTime();
    let i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return i;
}


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
 * 在 j 之前插入 新节点o
 *
 * @param o 新节点 type dom object
 * @param j 要插入哪个节点之前 type dom object
 */
function insertBefores (o, j) {
    o.parentNode[0].insertBefore(o, j);
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
 * 用户提示信息
 *
 * @param s 提示信息 type string
 * @returns {boolean}
 */
function notice (s = '') {
    if (!s) {
        // console.log('notice s is null');
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
        // console.log('reverseString s is null');
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

    // console.log('isRealString s is not real string');
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
        // console.log('arrayDelValByKey a or k is null');
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
        // console.log('getUrlArgs s.length < 2');
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
            // console.log('do not change url args');
            return w ? '' : [];
        }

        console.log(aUrlArgs);
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
        // console.log('checkUrlSign u is null');
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
        // console.log('urlSign u is null');
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
 * 字符串首字母大写
 *
 * @param s 带处理的字符串 type string
 * @returns {string|boolean}
 */
function ucfirst (s = '') {
    if (!s) {
        // console.log('ucfirst s is null, so no to do');
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
        return false;
    }

    document.title = t;
}

/**
 *
 *  改写 浏览器 title
 * @param t window title type string
 */
function replaceTitle (t = '') {
    if (!t) {
        // console.log('replaceTitle t is null, so no to do ');
        return;
    }
    // console.log('replaceTitle t is true, will to replace browser title lang ');

    if (typeof window['aLang'] == 'undefined') {
        // console.log('replaceTitle aLang is false, so settimtout retry to repalce browser title lang ');
        setTimeoutFunction('replaceTitle', t);
        return;
    }
    // console.log('replaceTitle aLang is true, so replace browser title lang ');

    setBrowserTitle(aLang[t]);
}

/**
 *
 * 修改 page  dom father 透明度
 *
 * @param b 显示或隐藏  bool true 显示  false 隐藏
 */
function changeDomFatherOpacity (b = false) {
    // console.log('修改 page dom father opacity');
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
// function jsAnimate (o, s, p, c) {
//     if (!o || !s || !p) {
//         console.log('jsAnimate o or s or p is null');
//         return;
//     }
//
//     clearInterval(o.timer);
//     // 开启定时器
//     o.timer = setInterval(function () {
//         let f = true;//假设所有动作都已完成成立。
//         for (let n in s) {
//             //1.取当前属性值
//             let m = 0;
//             // 透明度是小数，所以得单独处理
//             m = n == 'opacity' ? Math.round(parseFloat(getStyle(o, n)) * 100) : parseInt(getStyle(o, n));
//
//             //2.计算速度
//             let p = 0;
//             p = (s[n] - m) / 8;//缓冲处理，这边也可以是固定值
//             p = p > 0 ? Math.ceil(p) : Math.floor(p);//区分透明度及小数点，向上取整，向下取整
//
//             //3.判断是否到达预定值
//             if (s[n] != m) {
//                 f = false;
//                 if (n == 'opacity' ) {//判断结果是否为透明度
//                     o.style[n] = (m + p) / 100;
//                     o.style.filter = 'alpha(opacity:' + (m + p) + ')';
//                 }else{
//                     o.style[n] = m + p + 'px';
//                 }
//             }
//         }
//         if(f){//到达设定值，停止定时器，执行回调
//             clearInterval(o.timer);
//             if (c) {
//                 c();
//             }
//         }
//     }, p)
// }



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
 *
 *
 * @param o 对象 dom  type object
 * @param s 样式 type json
 * @param p 改变样式速度 type number
 * @param c 回调函数 type string
 */
function animates (o = false, s = false, p = false, c = false) {
    if (typeof jQuery != 'undefined') {
        $(o).animate(s, p, c);
        return;
    }

    if (!o || !s || !p) {
        // console.log(o);
        // console.log(s);
        // console.log(p);
        // console.log('animates o or s or p is null');
        return;
    }

    // console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    // console.log(bJquery);

    // setTimeoutFunction('animates');
    let t = setTimeout(function () {
        clearTimeout(t);

        animates(o, s, p, c);
    }, aTimer['animates']);

    // jsAnimate (o, s, parseInt(p / 20));
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
        // console.log('replaceDomLang p or d is null, so no to do ');
        return;
    }

    // if (typeof bLoadFunctionJs == 'undefined') {
    //     console.log('replaceDomLang bLoadFunctionJs is false, so settimtoue retry ');
    //     setTimeoutFunction('replaceDomLang', p, d);
    //     return;
    // }

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
    // console.log('(((((((((((((((((((((((((((((((((((((');
    // console.log(p);
    // console.log(d);
    if (!p || !d) {
        // console.log('replaceLang p or d is null, so no to do ');
        return;
    }
    // console.log('replaceLang, will to do replace lang ');

    if (typeof aLang == 'undefined') {
        // console.log('replaceLang aLang is false, so settimtoue retry replace lang ');
        setTimeoutFunction('replaceLang', p, d);
        return;
    }
    // console.log('replaceLang aLang is true, will to replace lang ');

    let o = false;
    switch (p) {
        case sReplaceLangIdType :
            o = domById(d);
            break;
    }

    if (!o) {
        // console.log('replaceLang dom is null, so settimtoue retry replace lang ');
        setTimeoutFunction('replaceLang', p, d);
        return;
    }
    // console.log('replaceLang dom is true, will to replace lang ');

    let s = o.getElementsByClassName(sReLangClass);
    for (let i in s) {
        s[i].innerHTML = aLang[s[i].id];
    }
    // console.log(')))))))))))))))))))))))))))))))');
}
function replaceLangs () {
    if (typeof window['aLang'] === 'undefined') {
        setTimeoutFunction('replaceLangs');
        return;
    }

    let a = bodyDom().getElementsByClassName(sReLangClass);
    if (!a.length) {
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
 * 是否json 数据格式
 *
 * @param s 待检查字符串
 * @returns {boolean}
 */
function isJson (s = '') {
    if (!s) {
        return false;
    }

    if (typeof s == 'sString') {
        try {
            JSON.parse(s);
            return true;
        } catch(e) {
            return false;
        }
    }
}



function functionBegin () {
    console.log('3333333333333333333functionBegin');
}
