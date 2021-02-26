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
    console.log('收到' + event.origin + '消息');
    console.log(event.data);
    console.log('#######################################');
    // console.log(event.data.action);

    switch (event.data.action) {
        case 'get' :
            top.postMessage({after: event.data.after, message: myStorage.get(event.data.key)}, event.origin);
            break;
        case 'set' :
            top.postMessage({after: event.data.after, message: myStorage.set(event.data.key, event.data.message, event.data.leftTime)}, event.origin);
            break;
    }
    // console.log('========================');
}, false);

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