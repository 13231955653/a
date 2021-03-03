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

let cookie = {
    set:function (sKey, sVal, iTime) {
        //设置cookie方法
        let iOutTime = parseInt(getNowTime()) + parseInt(iTime); //获取当前时间
        document.cookie = sKey + '=' + sVal + ';expires=' + iOutTime;  //设置cookie
    },

    get:function (sKey) {//获取cookie方法
        /*获取cookie参数*/
        let sCookie = document.cookie.replace(/[ ]/g,'');
        //获取cookie，并且将获得的cookie格式化，去掉空格字符
        let aArrCookie = sCookie.split(';')
        //将获得的cookie以"分号"为标识 将cookie保存到aArrCookie的数组中
        let tips = 'false';  //声明变量tips
        let arr = [];
        for(let i = 0; i < aArrCookie.length; i++){   //使用for循环查找cookie中的tips变量
            arr =aArrCookie[i].split('=');   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
            if (sKey == arr[0]) {
                //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                tips = arr[1];   //将cookie的值赋给变量tips
                break;   //终止for循环遍历
            }
        }
        return tips;
    }
}

function queryOldSessionId () {
    return cookie.get(sOldSessionIdCookieKey);
}

function queryNewSessionId () {
    return cookie.get(sNewSessionIdCookieKey);
}

function queryUserLang () {
    if (sUserLangvage) {
        return sUserLangvage;
    }

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

    setPageTitle(sTitle);

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

function setPageTitle (sTitle = '') {
    if (!sTitle) {
        console.log('setPageTitle sTitle is null, so no to do');
        return false;
    }

    document.title = sTitle;
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

