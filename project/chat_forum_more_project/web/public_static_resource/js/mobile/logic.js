
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
        console.log('replaceLangs class ' + sReLangClass + ' dom no get');
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

function updateUrlToPage () {
    let sPage = getNowPage();

    let sTitle = aLang[sPage + '_title'];

    updateUrlArg (sUrlAddressPageKey, sPage, sTitle, 'loadPageJs');
}

function logicBegin () {
    updateUrlToPage();

    writePublicDom();
}