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

    let set = function (k, v, t = false) {
        if (!k) {
            console.log('myStorage set k or v is null');
            return false;
        }

        v = disposeLocalstorageValue (v, t);

        v = JSON.stringify(v);

        let b = localStorage.setItem(k, v);
        return b == undefined ? true : false;
    };

    let get = function (k, t = true) {
        //读取
        let d = localStorage.getItem(k);
        if (!d) {
            return false;
        }
        d = JSON.parse(d);
        if (!d) {
            return false;
        }

        if (typeof d.t !== 'undefined') {
            if (getNowTime() - d.st > d.t) {
                remove(k);
                return false;
            } else {
                if (t) {
                    set(k, d.v, d.t / 1000);
                }
            }
        }

        return d.v;
    };

    let remove = function (k) {
        //读取
        // let oData = localStorage.getItem(k);
        if(!localStorage.getItem(k)){
            return true;
        }

        return localStorage.removeItem(k);
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