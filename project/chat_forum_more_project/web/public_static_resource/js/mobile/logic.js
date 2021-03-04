
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

function replaceLangs () {
    let aReLangDom = $('.' + sReLangClass);
    if (!aReLangDom.length) {
        console.log('replaceLangs class ' + sReLangClass + ' dom no get, so no to do replace lang');
        // setTimeoutFunction('replaceLangs');
        return false;
    }

    let sString = '';
    for (let i in aReLangDom) {
        sString = typeof aReLangDom[i].id != 'undefined' ? aReLangDom[i].id : 'error';
        sString = typeof aLang[sString] != 'undefined' ? aLang[sString] : aLang['error'];
        aReLangDom[i].innerHTML = sString;
    }
}

function repeatedlyPage (sPage = '') {
    if (!sPage) {
        console.log('repeatedlyPage page is null，so no will to do');
        return;
    }

    let sFunc = '';
    switch (sPage) {
        case sForumPage:
            sFunc = 'repeatedly' + ucfirst(sPage) + 'Page';
            break;
        case sChatPage:
            sFunc = 'repeatedly' + ucfirst(sPage) + 'Page';
            break;
        case sFriendPage:
            sFunc = 'repeatedly' + ucfirst(sPage) + 'Page';
            break;
        case sSettingPage:
            sFunc = 'repeatedly' + ucfirst(sPage) + 'Page';
            break;
    }

    ///////////////////////////////////////////////////////
    // typeof window[sFunc]
    // console.log(sFunc);
    // console.log(typeof window[sFunc] == 'undefined');
    if (sFunc) {
        if (typeof window[sFunc] == 'undefined') {
            console.log('repeatedlyPage window ' + sFunc + ' is undefined, so settimeout retry ');
            setTimeoutFunction('repeatedlyPage', sPage);
            return;
        }

        console.log('repeatedlyPage window ' + sFunc + ' is defined, so will to do ');
        window[sFunc](sLastPage === sPage);
    }
}

let sLastPage = '';
function uodateUrlPageArg (sPage = '') {
    if (!sPage) {
        console.log('uodateUrlPageArg page is null，so no will to do');
        return;
    }

    if (sLastPage === sPage) {
        console.log('uodateUrlPageArg sLastPage === ' + sPage + ' ，so no change url and after action');
        console.log('uodateUrlPageArg dispose show now page or reload now page dom');

        repeatedlyPage(sPage);
        return;
    }
    sLastPage = sPage;

    writePageShade();

    updateUrlPage(sPage);
}

let aAllreadyLoadPageJs = [];
function updateUrlPage (sPage = '') {
    sPage = sPage ? sPage : getNowPage();

    let sTitle = aLang[sPage + '_title'];

    let sAfterFunc = '';
    if (typeof aAllreadyLoadPageJs[sPage] === 'undefined') {
        sAfterFunc = 'loadPageJs';
    } else {
        sAfterFunc = 'afterLoadPageJs';
    }
    aAllreadyLoadPageJs[sPage] = getNowTime();

    updateUrlArg (sUrlAddressPageKey, sPage, sTitle, sAfterFunc);
}

function logicBegin () {
    showPageShade();

    writePublicDom();

    updateUrlPage();
}