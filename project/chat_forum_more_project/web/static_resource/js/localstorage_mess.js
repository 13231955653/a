let getParentUrl = function() {
    let u = null;
    if (parent !== window) {
        try {
            u = parent.location.href;
        }catch (e) {
            u = document.referrer;
        }
    }
    return u;
}
let u = getParentUrl();
u = u.trim();
let l = u.length;
if (u.charAt(l - 1) === '/') {
    u = u.substring(0, l - 1);
}

function checkOrigin () {
    let q = event.origin;
    q = q.trim();
    let i = q.length;
    if (q.charAt(i - 1) === '/') {
        q = q.substring(0, i - 1);
    }

    return u === q;
}

window.addEventListener('message',function(event){
    console.log('##############################################################################');
    console.log('post father address ' + window.location.href);
    if (!checkOrigin()) {
        console.log('postMessage error');
        return;
    }

    let a= {};

    if (!event.data) {
        a.message = false;
        top.postMessage(a, u);
        return false;
    }

    if (event.data.after) {
        a.after = event.data.after;
    }

    if (!event.data.action || !event.data.key) {
        a.message = false;
        top.postMessage(a, u);
        return false;
    }

    console.log('get form ' + event.origin + ' message, will do origin localstorage');
    console.log(event.data);
    console.log('##############################################################################');

    let k = event.data.key;
    switch (event.data.action) {
        case 'get' :

            if (!event.data.returnKey) {
                a.message = myStorage.get(k);
            } else {
                a.message = {message: myStorage.get(k), key: k};
            }

            if (event.data.after) {
                top.postMessage(a, u);
            }
            break;
        case 'set' :
            a.message = myStorage.set(k, event.data.message, event.data.leftTime);
            if (event.data.after) {
                top.postMessage(a, u);
            }

            let b = {};
            b.after = 'updateOriginLocalstorageSize';
            b.message = {size: myStorage.size(), host: window.location.host.split('.')[0]};
            top.postMessage(b, u);
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
    // if (!window.localStorage ) {
    //     console.log('myStorage localstorage error');
    //     return false;
    // }

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

    let size = function () {
        let z = 0;
        for(let i in localStorage) {
            if(localStorage.hasOwnProperty(i)) {
                z = parseInt(z) + parseInt(i.length) + parseInt(localStorage.getItem(i).length);
            }
        }

        return z;
    };

    return {
        set : set,
        get : get,
        remove : remove,
        clear : clear,
        size : size
    };
})();

function setJsAllreadyLoadTag () {
    console.log('!!!!!!!!!!!!!!!!!!!!iframe is ok, now can post message ' + window.location.href);
    top.postMessage({after: 'sonIsReady', message: window.location.href}, u);
}

window.onload = setJsAllreadyLoadTag();
