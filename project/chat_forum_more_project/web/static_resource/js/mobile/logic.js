
function selectPage () {
    switch (window.location.host) {
        case 'chat.you.com' :
            loadJs('./static_resource/js/chat.js');
            break;
    }
}

function setLocalstorageKey (sKey = '') {
    if (!sKey) {
        notice('setLocalstorageKey sKey is null');
        return false;
    }

    sKey = reverseString(sKey);
    sKey = hex_md5(sKey + sLocalstorageTagMd5Salt);
    sKey = reverseString(sKey);
    sKey = hex_md5(sKey);

    return sKey;
}

function localstorageEncodeValue (sValue = '') {
    if (!isRealString(sValue)) {
        console.log('localstorageEncodeValue sValue is not real string');
        return false;
    }

    console.log(sValue);
    sValue = rsaEncode(sValue, RSA_LOCALSTORAGE_PUBLIC);
    sValue = localstorageEncodeConfuse(sValue, 'encode');
    return sValue;
}
function localstorageDecodeValue (sValue = '') {
    if (!isRealString(sValue)) {
        console.log('localstorageEncodeValue sValue is not real string');
        return false;
    }

    sValue = localstorageEncodeConfuse(sValue, 'decode');
    sValue = rsaDecode(sValue, RSA_LOCALSTORAGE_PRIVATE);
    return sValue;
}

// function queryUserLang () {
//     if (sUserLangvage) {
//         return sUserLangvage;
//     }
//
//     sUserLangvage = queryLang();
//     sUserLangvage = sUserLangvage ? sUserLangvage : sDefaultLangvage;
//
//     if (!setLang(sUserLangvage)) {
//         console.log('queryUserLang setLang faild');
//         return false;
//     }
//
//     return sUserLangvage;
// }

// function replaceLangs () {
//     let aReLangDom = $('.' + sReLangClass);
//     if (!aReLangDom.length) {
//         console.log('replaceLangs class ' + sReLangClass + ' dom no get, so no to do replace lang');
//         // setTimeoutFunction('replaceLangs');
//         return false;
//     }
//
//     let sString = '';
//     for (let i in aReLangDom) {
//         sString = typeof aReLangDom[i].id != 'undefined' ? aReLangDom[i].id : 'error';
//         sString = typeof aLang[sString] != 'undefined' ? aLang[sString] : aLang['error'];
//         aReLangDom[i].innerHTML = sString;
//     }
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
        console.log('uodateUrlPageArg page is null，so no will to do');
        return;
    }

    // if (sLastPage === p) {
    //     console.log('uodateUrlPageArg sLastPage === ' + p + ' ，so no change url and after action');
    //     console.log('uodateUrlPageArg dispose show now page or reload now page dom');
    //
    //     // repeatedlyPage(p);
    //     return;
    // }
    sLastPage = p;

    // writePageShade();

    updateUrlPage(p);
}

// function repeatedlyPage (p = '') {
//     if (!p) {
//         console.log('repeatedlyPage page is null，so no will to do');
//         return;
//     }
//     console.log('repeatedlyPage page is true，so will to do');
//
//     let f = '';
//     let g = ucfirst(p);
//     switch (p) {
//         case sForumPage:
//             f = 'repeatedly' + g + 'Page';
//             break;
//         case sChatPage:
//             f = 'repeatedly' + g + 'Page';
//             break;
//         case sFriendPage:
//             f = 'repeatedly' + g + 'Page';
//             break;
//         case sSettingPage:
//             f = 'repeatedly' + g + 'Page';
//             break;
//     }
//
//     ///////////////////////////////////////////////////////
//     // typeof window[f]
//     // console.log(f);
//     // console.log(typeof window[f] == 'undefined');
//     if (!f) {
//         console.log('repeatedlyPage window ' + f + ' is null, so no to do ');
//         return;
//     }
//
//     if (typeof window[f] == 'undefined') {
//         console.log('repeatedlyPage window ' + f + ' is undefined, so settimeout retry ');
//         setTimeoutFunction('repeatedlyPage', p);
//         return;
//     }
//     console.log('repeatedlyPage window ' + f + ' is defined, so will to do ');
//     let t = setTimeout(function () {
//         clearTimeout(t);
//
//         window[f](sLastPage === p);
//     }, 0);
//     // window[f]();
//
//     sLastPage = p;
// }

/**
 *
 *  改写 浏览器 title
 * @param t window title type string
 */
function replaceWindowTitle (t = '') {
    if (!t) {
        console.log('replaceWindowTitle t is null, so no to do ');
        return;
    }

    if (typeof window['replaceTitle'] == 'undefined') {
        console.log('replaceWindowTitle bLoadFunctionJs is false, so settimtoue retry ');
        setTimeoutFunction('replaceWindowTitle', t);
        return;
    }

    replaceTitle(t);
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

    if (typeof window['getNowPage'] == 'undefined') {
        console.log('updateUrlPage getNowPage is undefined, so settimtoue retry ');

        setTimeoutFunction('updateUrlPage', p);
        return;
    }
    console.log('updateUrlPage getNowPage is defined, so will to do ');
    console.log(getUrlArgs());
    console.log('updateUrlPage console lod url args, maybe to hidden ');

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

function logicBegin () {
    console.log('logicBegin begin');
    asyn('updateUrlPage');
}