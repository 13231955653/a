function notice (sStr = '') {
    if (!sStr) {
        console.log('notice sStr is null');
        return false;
    }

    alert(sStr);
}

function reverseString (sStr = '') {
    if (!sStr) {
        console.log('reverseString sStr is null');
        return;
    }

    return sStr.split('').reverse().join('');
}

function getNowTimeSecond () {
    return parseInt(getNowTime() / 1000);
}

function isRealString (sString = '') {
    if (sString && (typeof sString === 'string' || typeof sString === 'number')) {
        return true;
    }

    console.log('isRealString sString is not real string');
    return false;
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

function getNowPage () {
    let sPage = getUrlArgs('page');

    return sPage ? sPage : sDefaultPage;
}

function inArray ( sSearch, aArray ) {
    for ( let i in aArray ) {
        if ( aArray[i] === sSearch ) {
            return i;
        }
    }

    return false;
}
function inArrayByKey ( sSearch, aArray ) {
    for ( let i in aArray ) {
        if ( i === sSearch ) {
            return i;
        }
    }

    return false;
}
function arrayDelValByKey (aArray = [], sKey = '') {
    if (!aArray || !sKey) {
        console.log('arrayDelValByKey aArray or sKey is null');
        return '';
    }
    for (let i in aArray) {
        if (i !== sKey) {
            continue;
        }

        delete aArray[sKey];
    }

    return aArray;
}

function getUrlArgs (sGetWhat = '') {
    let sHref = window.location.href;

    let aHref = sHref.split('?');
    if (aHref.length < 2) {
        console.log('getUrlArgs aHref.length < 2');
        return sGetWhat ? '' : [];
    }

    let sArg = aHref[1];
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
            // alert('do not change url args');
            //
            // illegality();
            return sGetWhat ? '' : [];
        }

        return sGetWhat ? (typeof aUrlArgs[sGetWhat] !== 'undefined' ? aUrlArgs[sGetWhat] : '') : aUrlArgs;
    }

    return sGetWhat ? '' : [];
}

function checkUrlSign (aUrlArgs = []) {
    if (!aUrlArgs) {
        console.log('checkUrlSign aUrlArgs is null');
        return false;
    }

    let sSign = urlSign(aUrlArgs);

    return sSign === aUrlArgs[sUrlAddressSignKey];
}
function urlSign (aUrlArgs = []) {
    if (!aUrlArgs) {
        console.log('urlSign aUrlArgs is null');
        return '';
    }

    aUrlArgs.sort();

    let sArg = '';
    for (let i in aUrlArgs) {
        if (i !== sUrlAddressSignKey) {
            sArg += i + '=' + aUrlArgs[i] + '&';
        }
    }
    sArg = sArg.substr(0, sArg.length - 1);

    let sSign = hex_md5(sUrlAddressSignEncodeSalt + hex_md5(sArg + sUrlAddressSignEncodeSalt));
    sSign = sSign.toLowerCase();

    return sSign;
}

// 改变url 地址栏
function updateUrlArg (sArgKey = '', sArgValue = '', sTitle = '', callback = false) {
    if (!sArgKey || !sArgValue) {
        console.log('updateUrlArg sArgKey or sArgValue is null');
        return false;
    }

    let oLocation = window.location;

    let sPageHtml = oLocation.pathname;
    sPageHtml = sPageHtml !== '/' ? sPageHtml : '';
    sPageHtml = sPageHtml ? sPageHtml : '/' + sDefaultPageHtml;

    let sHref = oLocation.origin + sPageHtml;

    let aArg = getUrlArgs();

    aArg[sArgKey] = sArgValue;
    if (typeof aArg[sUrlAddressPageKey] === 'undefined') {
        aArg[sUrlAddressPageKey] = sDefaultPage;
    }
    aArg = arrayDelValByKey(aArg, sUrlAddressChangeTimeKey);
    aArg = arrayDelValByKey(aArg, sUrlAddressSignKey);

    aArg[sUrlAddressChangeTimeKey] = getNowTime();

    let sArg = '';
    for (let i in aArg) {
        if (i === sArgKey) {
            aArg[i] = sArgValue;
        }

        sArg += i + '=' + aArg[i] + '&';
    }

    sArg = sArg + sUrlAddressSignKey + '=' + urlSign(aArg);
    sArg = urlEncode(sArg);

    let sChangeUrl = sHref + '?' + sArg;

    let stateObject = {};
    window.history.pushState(stateObject, sTitle, sChangeUrl);

    setBrowserTitle(sTitle);

    if (callback) {
        window[callback]();
    }
}

function ucfirst (sString = '') {
    if (!sString) {
        console.log('ucfirst sString is null, so no to do');
        return false;
    }

    return sString.charAt(0).toUpperCase() + sString.slice(1)
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

// window.onpopstate = function(event) {
//     console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
// };


// function setLocalstoragePostMessagePage (sKey = '') {
//     if (!sKey) {
//         console.log('setLocalstoragePostMessagePage sKey is null');
//         return false;
//     }
//
//     return aStorageOrigins[hashFunc(sKey, iStorageOriginLength)];
// }

function setLang (sLang = '') {
    if (!sLang) {
        console.log('setLang sLang is null, so no to do');
        return false;
    }

    setLocalstorage(sLocalstorageLangTag, sLang, false, 'afterSetLang');
}
function afterSetLang (bSetLangResult = '') {
    if (!bSetLangResult) {
        console.log('afterSetLang bSetLangResult is null');
        return false;
    }

    if (!bSetLangResult) {
        console.log('afterSetLang bSetLangResult false');
        return false;
    }
    //
    // loadLang(sUserLangvage);
}

// function queryLocalstorgaeUserPersonalizedColor (sKey = '', sAfterFunc = '') {
//     if (!sKey || !sAfterFunc) {
//         console.log('queryLocalstorgaeUserPersonalizedColor sKey or sAfterFunc is null');
//         return false;
//     }
//
//     let sPage = localstoragePage(sKey);
//     if (!sPage) {
//         window[sAfterFunc](false);
//         console.log('queryLocalstorgaeUserPersonalizedColor localstoragePage sPage is null');
//         return false;
//     }
//
//     localstoragePostMessage(sPage, {action: 'get', key: sKey, after: sAfterFunc});
// }

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
    p = p ? p : getNowPage();

    ////////////////////////////////////
    // let sTitle = aLang[p + '_title'];
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

const bLoadFunctionJs = true;
