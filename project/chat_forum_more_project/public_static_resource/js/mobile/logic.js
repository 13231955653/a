
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

function test () {
    let sStr = '123456789';
    console.log(sStr);
    let a = localstorageEncodeConfuse(sStr, 'encode');
    console.log('=============');
    console.log(a);
    console.log('==============');

    return false;
}
function localstorageEncodeValue (sValue = '') {
    if (!isRealString(sValue)) {
        console.log('localstorageEncodeValue sValue is not real string');
        return false;
    }

    test();

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
function localstorageEncodeConfuse (sString = '', sType = '') {
    if (!isRealString(sString)) {
        console.log('localstorageEncodeConfuse sString is not real string');
        return false;
    }

    switch (sType) {
        case 'encode' :
            sString = confuseStringEncode(sString);

            for (let i in aLocalstorageEncodeConfuseEncode) {
                sString = sString.replace(i, aLocalstorageEncodeConfuseEncode[i]);
            }
            // for (let j in aLocalstorageEncodeConfuseDecode) {
            //     sString = sString.replace(j, aLocalstorageEncodeConfuseDecode[j]);
            // }
            console.log('******************');
            console.log(sString);
            console.log('******************');
            break;
        case 'decode' :
            sString = confuseStringDecode(sString);

            for (let j in aLocalstorageEncodeConfuseDecode) {
                sString = sString.replace(j, aLocalstorageEncodeConfuseDecode[j]);
            }
            //
            // for (let j in aLocalstorageEncodeConfuseEncode) {
            //     sString = sString.replace(j, aLocalstorageEncodeConfuseEncode[j]);
            // }
            //
            // for (let j in aLocalstorageEncodeConfuseDecode) {
            //     sString = sString.replace(j, aLocalstorageEncodeConfuseDecode[j]);
            // }

            // console.log(sString);
            //
            console.log('^^^^^^^^^^^^^^^^^^^^^');
            console.log(sString);
            console.log('^^^^^^^^^^^^^^^^^^^^^');
            break;
        default :
            return false;
            break;
    }

    return sString;
}

function confuseStringEncode (sString = '') {
    if (!isRealString(sString)) {
        console.log('confuseStringEncode sString is not real string');
        return false;
    }

    let iLength2 = sString.length.toString();
    let sSplitLength2 = iLength2.substr(0, 1);
    let sSplitString2 = sString.substr(iLength2 - sSplitLength2, sSplitLength2);
    sString = sString.substr(0, iLength2 - sSplitLength2);
    if (sString) {
        sString = reverseString(sString);
    }
    sString += sSplitString2;

    return sString;
}

function confuseStringDecode (sString = '') {
    if (!isRealString(sString)) {
        console.log('confuseStringDecode sString is not real string');
        return false;
    }

    let iLength = sString.length.toString();
    let sSplitLength = iLength.substr(0, 1);
    let sSplitString = sString.substr(iLength - sSplitLength, sSplitLength);
    sString = sString.substr(0, iLength - sSplitLength);
    if (sString) {
        sString = reverseString(sString);
    }
    sString += sSplitString;

    return sString;
}

function selectLang () {
    let sLang = queryLang();
    // sLang = sLang ? sLang : sDefaultLangvage;

    if (!setLang((sLang ? sLang : sDefaultLangvage))) {
        console.log('selectLang setLang faild');
        return false;
    }

    console.log(sLang);

}

var bLoadBaseLogicJsFile = true; //已引入 logic js文件