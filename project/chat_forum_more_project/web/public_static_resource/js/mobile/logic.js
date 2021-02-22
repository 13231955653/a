
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

// function testSetLocalstorage () {
//     let sStr = '123456789';
//     myStorage.set('test', sStr);
//     // console.log(sStr);
//     // let a = localstorageEncodeConfuse(sStr, 'encode');
//     // console.log('=============');
//     // console.log(a);
//     // console.log('==============');
//
//     return false;
// }
function localstorageEncodeValue (sValue = '') {
    if (!isRealString(sValue)) {
        console.log('localstorageEncodeValue sValue is not real string');
        return false;
    }

    // testSetLocalstorage();

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

function queryUserLang () {
    if (sUserLangvage) {
        return sUserLangvage;
    }

    sUserLangvage = queryLang();
    sUserLangvage = sUserLangvage ? sUserLangvage : sDefaultLangvage;

    if (!setLang(sUserLangvage)) {
        console.log('queryUserLang setLang faild');
        return false;
    }

    return sUserLangvage;
}

function replaceLangs () {
    console.log(sUserLangvage);
}

function logicBegin (bLogicBegin = false) {
    if (queryUserLang()) {
        if (bLogicBegin) {
            loadLang();
        }
    }

    if (typeof aLang === 'undefined') {
        setTimeoutFunction('logicBegin');
        return;
    }

    writePublicDom();

    // selectPage();
}