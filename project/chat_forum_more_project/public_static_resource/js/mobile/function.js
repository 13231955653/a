function beginBase () {
    if (typeof jQuery === 'undefined') {
        loadLocalJquery();

        aBaseTimer['beginBase'] = setTimeout(function () {
            baseBegin();
        }, typeof aBaseTimerOutTime['beginBase'] !== 'undefined' ? aBaseTimerOutTime['beginBase'] : 30);
        return;
    }

    selectLang();

    // writePublicDom();

    // selectPage();
}

function notice (sStr = '') {
    if (!sStr) {
        throw 'notice sStr is null';
        return;
    }

    alert(sStr);
}

function reverseString (sStr = '') {
    if (!sStr) {
        throw 'ss sStr is null';
        return;
    }

    return sStr.split('').reverse().join('');
}

//获取时间戳
function getNowTime () {
    return new Date().getTime();
}
function getNowTimeSecond () {
    return parseInt(getNowTime() / 1000);
}

function setLocalstorageKey (sKey = '') {
    if (!sKey) {
        notice('setLocalstorageKey sKey is null');
        return ;
    }

    sKey = reverseString(sKey);
    sKey = hex_md5(sKey + sLocalstorageTagMd5Salt);
    sKey = reverseString(sKey);
    sKey = hex_md5(sKey);

    return sKey;
}

let myStorage = (function myStorage () {
    if (!window.localStorage ) {
        notice('localstorage error');
        return ;
    }

    let set = function (sKey, sValue, iLeftTime = false) {
        //存储
        sValue = iLeftTime ? {'sData': sValue, 'iLiftTime': iLeftTime * 1000, 'iSetTime': getNowTime()} : {'sData': sValue};

        sValue = JSON.stringify(sValue);
        // sValue = sValue;

        sKey = setLocalstorageKey(sKey);

        console.log(sKey, sValue);
        return localStorage.setItem(sKey, sValue);
    };

    let get = function (sKey, bUpdateLifttime = true) {
        //读取
        let oData = localStorage.getItem(setLocalstorageKey(sKey));
        if (!oData) {
            return false;
        }
        // sValue = sValue;
        oData = JSON.parse(oData);
        console.log(sKey);
        console.log(oData);

        try {
            if (typeof oData.iLiftTime !== 'undefined') {
                if (getNowTime() - oData.iSetTime > oData.iLiftTime) {
                    remove(sKey);
                    return '';
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

function selectLang () {
    let sLang = queryLang();
    if (!sLang) {
        sLang = sDefaultLangguage;

    }
    myStorage.set(sLocalstorageLangTag, sLang);
    console.log(sLang);

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

var bLoadBaseFunctionJsFile = true; //已引入function js文件
