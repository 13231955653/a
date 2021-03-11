
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

function repeatedlyPage (p = '') {
    if (!p) {
        console.log('repeatedlyPage page is null，so no will to do');
        return;
    }

    let f = '';
    switch (p) {
        case sForumPage:
            f = 'repeatedly' + ucfirst(p) + 'Page';
            break;
        case sChatPage:
            f = 'repeatedly' + ucfirst(p) + 'Page';
            break;
        case sFriendPage:
            f = 'repeatedly' + ucfirst(p) + 'Page';
            break;
        case sSettingPage:
            f = 'repeatedly' + ucfirst(p) + 'Page';
            break;
    }

    ///////////////////////////////////////////////////////
    // typeof window[f]
    // console.log(f);
    // console.log(typeof window[f] == 'undefined');
    if (!f) {
        console.log('repeatedlyPage window ' + f + ' is null, so no to do ');
        return;
    }

    if (typeof window[f] == 'undefined') {
        console.log('repeatedlyPage window ' + f + ' is undefined, so settimeout retry ');
        setTimeoutFunction('repeatedlyPage', p);
        return;
    }
    console.log('repeatedlyPage window ' + f + ' is defined, so will to do ');
    let t = setTimeout(function () {
        clearTimeout(t);

        window[f](sLastPage === p);
    }, 0);
    // window[f]();

    sLastPage = p;
}

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

    if (typeof bLoadFunctionJs == 'undefined') {
        console.log('replaceWindowTitle bLoadFunctionJs is false, so settimtoue retry ');
        setTimeoutFunction('replaceWindowTitle', t);
        return;
    }

    replaceTitle(t);
}

function logicBegin () {
    // showPageShade();

    if (typeof window['writePublicDom'] == 'undefined') {
        console.log('logicBegin writePublicDom is undefined, so settimeout retry to logicBegin ');
        setTimeoutFunction('logicBegin');
        return;
    }
    // writePublicDom();

    if (typeof window['updateUrlPage'] == 'undefined') {
        console.log('logicBegin updateUrlPage is undefined, so settimeout retry to logicBegin ');
        setTimeoutFunction('logicBegin');
        return;
    }
    updateUrlPage();
}