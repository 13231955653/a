window.addEventListener('message',function(event){
    if (window.parent !== event.source) {
        return false;
    }

    if (!event.data) {
        top.postMessage({after: event.data.after, message:false}, event.origin);
        return false;
    }

    if (!event.data.action || !event.data.key || !event.data.after ) {
        top.postMessage({after: event.data.after, message: false}, event.origin);
        return false;
    }

    console.log('#######################################');
    console.log('get form ' + event.origin + ' message, will do origin localstorage');
    console.log(event.data);
    console.log('#######################################');

    switch (event.data.action) {
        case 'get' :
            top.postMessage({after: event.data.after, message: myStorage.get(event.data.key)}, event.origin);
            break;
        case 'set' :
            top.postMessage({after: event.data.after, message: myStorage.set(event.data.key, event.data.message, event.data.leftTime)}, event.origin);
            break;
    }
}, false);

function disposeLocalstorageValue (v, t = false) {
    v = typeof v != 'object' ? v : JSON.stringify(v);

    return t ? {'v': v, 't': t * 1000, 'st': getNowTime()} : {'v': v};
}

//获取时间戳
function getNowTime () {
    return new Date().getTime();
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

        console.log(sKey, sValue, iLeftTime);
        sValue = disposeLocalstorageValue (sValue, iLeftTime);

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