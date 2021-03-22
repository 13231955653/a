
// function selectPage () {
//     switch (window.location.host) {
//         case 'chat.you.com' :
//             loadJs('./static_resource/js/chat.js');
//             break;
//     }
// }
//
// function setLocalstorageKey (sKey = '') {
//     if (!sKey) {
//         notice('setLocalstorageKey sKey is null');
//         return false;
//     }
//
//     sKey = reverseString(sKey);
//     sKey = hex_md5(sKey + sLocalstorageTagMd5Salt);
//     sKey = reverseString(sKey);
//     sKey = hex_md5(sKey);
//
//     return sKey;
// }
//
// function localstorageEncodeValue (sValue = '') {
//     if (!isRealString(sValue)) {
//         console.log('localstorageEncodeValue sValue is not real string');
//         return false;
//     }
//
//     console.log(sValue);
//     sValue = rsaEncode(sValue, RSA_LOCALSTORAGE_PUBLIC);
//     sValue = localstorageEncodeConfuse(sValue, 'encode');
//     return sValue;
// }
// function localstorageDecodeValue (sValue = '') {
//     if (!isRealString(sValue)) {
//         console.log('localstorageEncodeValue sValue is not real string');
//         return false;
//     }
//
//     sValue = localstorageEncodeConfuse(sValue, 'decode');
//     sValue = rsaDecode(sValue, RSA_LOCALSTORAGE_PRIVATE);
//     return sValue;
// }

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
    console.log('uodateUrlPageArg begin, p ' + p);
    if (!p) {
        // console.log('uodateUrlPageArg page is null，so no will to do');
        return;
    }

    if (sLastPage === p) {
        // console.log('uodateUrlPageArg sLastPage === ' + p + ' ，so no change url and after action');
        // console.log('uodateUrlPageArg dispose show now page or reload now page dom');
        // console.log('/////////////////////////////////////////////////');
        // repeatedlyPage(p);

        asyn('showPageShade');
        // showPageShade();

        asyn('againOnlickFooter');
        return;
    }
    sLastPage = p;

    // writePageShade();

    // updateUrlPage(p);
    asyn('updateUrlPage', p);

    console.log('点击过后需要检测当前页面是否需要刷新');
}

/**
 *
 * 多次点击同一个脚步事件
 *
 */
function againOnlickFooter () {
    // console.log('/////////////////////////////////////////////////');
    asyn('clearPageShade');
    // clearPageShade();
}

/**
 *
 *  改写 浏览器 title
 * @param t window title type string
 */
function replaceWindowTitle (t = '') {
    if (!t) {
        // console.log('replaceWindowTitle t is null, so no to do ');
        return;
    }

    if (typeof window['replaceTitle'] == 'undefined') {
        // console.log('replaceWindowTitle bLoadFunctionJs is false, so settimtoue retry ');
        setTimeoutFunction('replaceWindowTitle', t);
        return;
    }

    // replaceTitle(t);
    asyn('replaceTitle', t);
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
    // console.log('ggggggggggggggggggggggggggggggggggggggggggg');
    // console.log('updateUrlPage, begin ');
    if (typeof window['urlDecode'] == 'undefined') {
        // console.log('updateUrlPage urlDecode is no laod, so settimtoue retry ');

        setTimeoutFunction('updateUrlPage', p);
        return;
    }
    // console.log('updateUrlPage urlDecode is defined, so will to do ');

    if (typeof window['getNowPage'] == 'undefined') {
        // console.log('updateUrlPage getNowPage is no load, so settimtoue retry ');

        setTimeoutFunction('updateUrlPage', p);
        return;
    }
    // console.log('updateUrlPage getNowPage is defined, so will to do ');
    console.log(getUrlArgs());
    // console.log('updateUrlPage console lod url args, maybe to hidden ');

    p = p ? p : getNowPage();

    let t = '';
    // replaceWindowTitle(p + '_title');
    asyn('replaceWindowTitle', p + sLangTitlePostfix);

    let f = ''; // 回调函数
    if (typeof aAllreadyLoadPageJs[p] == 'undefined') {
        // console.log('updateUrlPage aAllreadyLoadPageJs ' + p + ' is no load, so load page js ');
        f = 'loadPageJs';
    } else {
        // console.log('updateUrlPage aAllreadyLoadPageJs ' + p + ' is load, so load afterLoadPageJs ');
        f = 'afterLoadPageJs';
    }
    aAllreadyLoadPageJs[p] = getMillisecondTime();

    let z = setTimeout(function () {
        clearTimeout(z);

        updateUrlArg (sUrlAddressPageKey, p, t, f);
    }, 0);
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

    a[sUrlAddressChangeTimeKey] = getMillisecondTime();

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
        asyn(c);
    }
}

function logicBegin () {
    // console.log('logicBegin begin');
    asyn('updateUrlPage');
}