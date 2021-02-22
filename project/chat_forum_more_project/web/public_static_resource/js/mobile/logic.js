
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

function selectLang () {
    let sLang = queryLang();
    sLang = sLang ? sLang : sDefaultLangvage;

    if (!setLang(sLang)) {
        console.log('selectLang setLang faild');
        return false;
    }

    return sLang;
}
