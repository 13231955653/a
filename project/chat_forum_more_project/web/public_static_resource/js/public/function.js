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


let myStorage = (function myStorage () {
    if (!window.localStorage ) {
        console.log('localstorage error');
        return false;
    }

    let set = function (sKey, sValue, iLeftTime = false) {
        //存储
        sValue = iLeftTime ? {'sData': sValue, 'iLiftTime': iLeftTime * 1000, 'iSetTime': getNowTime()} : {'sData': sValue};

        // console.log(sValue);
        sValue = JSON.stringify(sValue);
        // console.log(sValue);
        sValue = localstorageEncodeValue(sValue);

        sKey = setLocalstorageKey(sKey);

        // console.log('set storage key ' + sKey);
        // console.log('set storage value ' + sValue);
        let bResult = localStorage.setItem(sKey, sValue);
        return bResult === undefined ? true : false;
    };

    let get = function (sKey, bUpdateLifttime = true) {
        //读取
        let oData = localStorage.getItem(setLocalstorageKey(sKey));
        if (!oData) {
            return false;
        }
        oData = localstorageDecodeValue(oData);
        oData = JSON.parse(oData);
        // console.log('get storage key ' + sKey);
        // console.log('get storage value ');
        // console.log(oData);
        if (!oData) {
            return false;
        }

        try {
            if (typeof oData.iLiftTime !== 'undefined') {
                if (getNowTime() - oData.iSetTime > oData.iLiftTime) {
                    remove(sKey);
                    return false;
                } else {
                    if (bUpdateLifttime) {
                        set(sKey, oData.sData, oData.iLiftTime / 1000);
                    }
                }
            }

            return oData.sData;
        } catch (e) {}
    };

    let remove = function (sKey) {
        //读取
        sKey = setLocalstorageKey(sKey);
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

function queryLang () {
    return myStorage.get(sLocalstorageLangTag);
}

function setLang (sLang = '') {
    if (!sLang) {
        console.log('setLang sLang is null');
        return false;
    }

    return myStorage.set(sLocalstorageLangTag, sLang);
}

function strToBinary(str){
    let result = [];
    let list = str.split('');
    let binaryStr = '';
    for(let i = 0; i < list.length; i++){
        if(i != 0){
            result.push(' ');
        }
        let item = list[i];
        binaryStr = item.charCodeAt().toString(2);
        result.push(binaryStr);
    }
    return result.join('');
}

//将二进制字符串转换成Unicode字符串
function binaryToStr(str){
    let result = [];
    let list = str.split(' ');
    let charValue = '';
    for(let i = 0; i < list.length; i++){
        let item = list[i];
        let asciiCode = parseInt(item,2);
        charValue = String.fromCharCode(asciiCode);
        result.push(charValue);
    }
    return result.join('');
}

let bInLoadLocalJquery = false;
function loadLocalJquery () {
    if (typeof jQuery === 'undefined') {
        if (!bInLoadLocalJquery) {
            bInLoadLocalJquery = true;
            loadJs(sBaseJqueryJsFullName);
        }

        aBaseTimer['loadLocalJquery'] = setTimeout(function () {
            baseBegin();
        }, typeof aBaseTimerOutTime['loadLocalJquery'] !== 'undefined' ? aBaseTimerOutTime['loadLocalJquery'] : 30);
        return;
    }
}
