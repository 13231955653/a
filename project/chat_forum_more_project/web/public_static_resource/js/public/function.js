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

function disposeLocalstorageValue (sKey, sValue, iLeftTime = false) {
    return iLeftTime ? {'v': sValue, 't': iLeftTime * 1000, 'st': getNowTime()} : {'v': sValue};
}

let myStorage = (function myStorage () {
    if (!window.localStorage ) {
        console.log('myStorage localstorage error');
        return false;
    }

    let set = function (sKey, sValue, iLeftTime = false) {
        if (!sKey || !sValue) {
            console.log('myStorage set sKey or sValue is null');
            return false;
        }

        sValue = disposeLocalstorageValue (sKey, sValue, iLeftTime);

        sValue = JSON.stringify(sValue);

        let bResult = localStorage.setItem(sKey, sValue);
        return bResult == undefined ? true : false;
    };

    let get = function (sKey, bUpdateLifttime = true) {
        //读取
        let oData = localStorage.getItem(sKey);
        if (!oData) {
            return false;
        }
        oData = JSON.parse(oData);
        if (!oData) {
            return false;
        }

        if (typeof oData.t !== 'undefined') {
            if (getNowTime() - oData.st > oData.t) {
                remove(sKey);
                return false;
            } else {
                if (bUpdateLifttime) {
                    set(sKey, oData.v, oData.t / 1000);
                }
            }
        }

        return oData.v;
    };

    let remove = function (sKey) {
        //读取
        let oData = localStorage.getItem(sKey);
        if(!oData){
            return true;
        }

        return localStorage.removeItem(sKey);
    };

    let clear = function() {
        //清除对象
        localStorage.clear();
    };

    return {
        set : set,
        get : get,
        remove : remove,
        clear : clear
    };
})();

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

function isJson (sStr = '') {
    if (!sStr) {
        return false;
    }

    if (typeof sStr == 'sString') {
        try {
            JSON.parse(sStr);
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }
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

function queryLocalstorage (sKey = '', sAfterFunc = '') {
    if (!sKey || !sAfterFunc) {
        console.log('queryLocalstorage sKey or sAfterFunc is null');
        return false;
    }

    let sPage = localstoragePage(sKey);
    if (!sPage) {
        window[sAfterFunc](false);
        console.log('queryLocalstorage setLocalstoragePostMessagePage sPage is null');
        return false;
    }

    localstoragePostMessage(sPage, {action: 'get', key: sKey, after: sAfterFunc});
}

function localstoragePage (sKey) {
    if (!sKey) {
        console.log('localstoragePage sKey is null');
        return false;
    }

    return myStorage.get(sKey);
}

function setLocalstorage (sKey = '', sMessage = '', iLeftTime = false, sAfterFunc = '') {
    if (!sKey || !sAfterFunc || !sMessage) {
        console.log('queryLocalstorage sKey or sAfterFunc or sMessage is null');
        return false;
    }

    let sPage = localstoragePage (sKey);
    if (!sPage) {
        let sString = disposeLocalstorageValue (sKey, sMessage, iLeftTime);
        let iLocalstorageNowCacheLength = parseInt(JSON.stringify(sString).length) + parseInt(sKey.length);
        let iSize = 0;
        for (let i in aLocalstorageAddressSize) {
            iSize = parseInt(aLocalstorageAddressSize[i]) + parseInt(iLocalstorageNowCacheLength);
            if (iMaxLocalstorageSize >= iSize) {
                sPage = i;
                myStorage.set(sKey, i);
                break;
            }
        }
    }

    if (!sPage) {
        console.log('queryLocalstorage setLocalstoragePostMessagePage sPage is null');
        return false;
    }

    localstoragePostMessage(sPage, {action: 'set', key: sKey, message: sMessage, leftTime: iLeftTime, after: sAfterFunc});
}

// function setLocalstoragePostMessagePage (sKey = '') {
//     if (!sKey) {
//         console.log('setLocalstoragePostMessagePage sKey is null');
//         return false;
//     }
//
//     return aStorageOrigins[hashFunc(sKey, iStorageOriginLength)];
// }

function localstoragePostMessage (sPage = '', sMessage = '') {
    if (!sMessage || !sPage) {
        console.log('localstoragePostMessage sMessage or sPage is null');
        return false;
    }

    let o = document.getElementById(sPage);
    o.contentWindow.postMessage(sMessage, sPage);
}
window.addEventListener('message', function(event){
    if (!event.data) {
        return false;
    }

    if (!event.data || !event.data.after) {
        console.log('addEventListener data or data.after is null');
        return false;
    }

    console.log('^^^^^^^^^^^^^^^^^^^^^');
    console.log('get form ' + event.origin + ' message, will to do after load localstorage function');
    console.log(event.data);
    console.log('^^^^^^^^^^^^^^^^^^^^^');

    window[event.data.after](event.data.message);
}, false);

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

function queryUserPersonalizedColor () {
    if (sPersonlizedColor) {
        return sPersonlizedColor;
    }

    queryLocalstorgaeUserPersonalizedColor(sLocalstorgaeUserPersonalizedColorKey, 'afterQueryUserPersonalizedColor');
}
function queryLocalstorgaeUserPersonalizedColor (sKey = '', sAfterFunc = '') {
    if (!sKey || !sAfterFunc) {
        console.log('queryLocalstorgaeUserPersonalizedColor sKey or sAfterFunc is null');
        return false;
    }

    let sPage = localstoragePage(sKey);
    if (!sPage) {
        window[sAfterFunc](false);
        console.log('queryLocalstorgaeUserPersonalizedColor localstoragePage sPage is null');
        return false;
    }

    localstoragePostMessage(sPage, {action: 'get', key: sKey, after: sAfterFunc});
}
function afterQueryUserPersonalizedColor (sPersonlizedColor1 = '') {
    if (sPersonlizedColor1) {
        sPersonlizedColor = sPersonlizedColor1;
    } else {
        sPersonlizedColor = iDefaultUserPersonalizedColor;

        setPersonlizedColor(sPersonlizedColor);
    }

    loadPersonlizedColorCss(sPersonlizedColor);
}
function setPersonlizedColor (sPersonlizedColor1 = '') {
    if (!sPersonlizedColor1) {
        console.log('setPersonlizedColor sPersonlizedColor1 is null');
        return false;
    }

    setLocalstorage(sLocalstorgaeUserPersonalizedColorKey, sPersonlizedColor1, false, 'loadPersonlizedColorCss');
}
function loadPersonlizedColorCss (sPersonlizedColor1 = '') {
    sPersonlizedColor1 = sPersonlizedColor1 ? sPersonlizedColor1 : iDefaultUserPersonalizedColor;
    if (!sPersonlizedColor1) {
        console.log('loadPersonlizedColorCss sPersonlizedColor1 is null');
        return false;
    }

    loadPersonalizedCss(sPersonlizedColor1);
}
