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


// let myStorage = (function myStorage () {
//     if (!window.localStorage ) {
//         console.log('localstorage error');
//         return false;
//     }
//
//     let set = function (sKey, sValue, iLeftTime = false) {
//         //存储
//         sValue = iLeftTime ? {'sData': sValue, 'iLiftTime': iLeftTime * 1000, 'iSetTime': getNowTime()} : {'sData': sValue};
//
//         // console.log(sValue);
//         sValue = JSON.stringify(sValue);
//         // console.log(sValue);
//         sValue = localstorageEncodeValue(sValue);
//
//         sKey = setLocalstorageKey(sKey);
//
//         // console.log('set storage key ' + sKey);
//         // console.log('set storage value ' + sValue);
//         let bResult = localStorage.setItem(sKey, sValue);
//         return bResult === undefined ? true : false;
//     };
//
//     let get = function (sKey, bUpdateLifttime = true) {
//         //读取
//         let oData = localStorage.getItem(setLocalstorageKey(sKey));
//         if (!oData) {
//             return false;
//         }
//         oData = localstorageDecodeValue(oData);
//         oData = JSON.parse(oData);
//         // console.log('get storage key ' + sKey);
//         // console.log('get storage value ');
//         // console.log(oData);
//         if (!oData) {
//             return false;
//         }
//
//         try {
//             if (typeof oData.iLiftTime !== 'undefined') {
//                 if (getNowTime() - oData.iSetTime > oData.iLiftTime) {
//                     remove(sKey);
//                     return false;
//                 } else {
//                     if (bUpdateLifttime) {
//                         set(sKey, oData.sData, oData.iLiftTime / 1000);
//                     }
//                 }
//             }
//
//             return oData.sData;
//         } catch (e) {}
//     };
//
//     let remove = function (sKey) {
//         //读取
//         sKey = setLocalstorageKey(sKey);
//         let oData = localStorage.getItem(sKey);
//         if(!oData){
//             return true;
//         }
//
//         return localStorage.removeItem(sKey);
//     };
//
//     let clear = function() {
//         //清除对象
//         localStorage.clear();
//     };
//
//     return {
//         set : set,
//         get : get,
//         remove : remove,
//         clear : clear
//     };
// })();

function queryLang () {
    // return myStorage.get(sLocalstorageLangTag);
    queryLocalstorage(sLocalstorageLangTag, 'afterQueryLang');
}
function afterQueryLang (sLang = '') {
    console.log(sLang);
}

function queryLocalstorage (sKey = '', sAfterFunc = '') {
    if (!sKey || !sAfterFunc) {
        console.log('queryLocalstorage sKey or sAfterFunc is null');
        return false;
    }

    // console.log(sKey);
    sKey = setLocalstorageKey(sKey);
    if (!sKey) {
        console.log('queryLocalstorage setLocalstorageKey sKey is null');
        return false;
    }
    // console.log(sKey);

    let sPage = setLocalstoragePostMessagePage(sKey);
    if (!sPage) {
        console.log('queryLocalstorage setLocalstoragePostMessagePage sPage is null');
        return false;
    }
    // console.log(sPage);

    localstoragePostMessage(sPage, {action: 'get', key: sKey, after: sAfterFunc});
}

function setLocalstoragePostMessagePage (sKey = '') {
    if (!sKey) {
        console.log('setLocalstoragePostMessagePage sKey is null');
        return false;
    }

    return aStorageOrigins[hashFunc(sKey, iStorageOriginLength)];
}

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
    console.log(event.data);
    console.log(event.data.func);

    console.log("收到" + event.origin + "消息：" + event.data);

    window[event.data.func](event.data.message);
}, false);


function setLang (sLang = '') {
    if (!sLang) {
        console.log('setLang sLang is null');
        return false;
    }

    // return myStorage.set(sLocalstorageLangTag, sLang);
}

function queryOrigin () {
    return window.location.origin;
}
