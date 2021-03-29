/*c7640c5f267b11b6*///编码相关-----------------
const sCharset = 'utf-8'; // 编码格式
//编码相关===============/*c7640c5f267b11b6*/

//静态文件相关-----------------
const sBaseHostSonPrefix = 'static_resource';

//版本相关-----------------
const debug = true;

//url地址相关---------------------
const sBaseProtocol = window.location.protocol + '/' + '/';

const sBaseHostSonNumber = 13; //静态文件子域名数量
//url地址相关=================================

//localstorage相关----------------------------
const sLocalstorageBeginPage = 0;
const sLocalstorageLangTag = 'user_lang';
const sLocalstorgaeUserPersonalizedColorKey = 'user_personlized_color';
const sOriginLocalstorageSizeKey = 'origin_localstorage_size';
const iMaxLocalstorageSize = 3670016;
const sStorageOriginsSonPrefix = 'storage';
const sStoragePage = 'storage.html';
const sStaticResourceLocalstoragePrefix = 'static_resource_';
//localstorage相关=============================

//meta标签相关----------------
const sFinalMetaTagId = 'copyright_content';
//meta标签相关=====================

//class id tag 相关----------------
const sIndexScriptTagId = 'first_js_script'; // 第一个 script 标签
//class id tag 相关===============

//时间相关---------------------
const sLastCacheStaticResourceTimeTag = 'last_cache_static_resource_';
const iRequertTimeout = 9000;
// const iRequertLangJsTimeout = 5000;
// const iMaxLoadOriginJqueryWaitTime = 5000;
const iCheckJqueryLimitTime = 5000;
//时间相关=======================

//语言相关-----------
// let sLangNow = '';
let sNowLang = '';
//语言相关===========

//id class tag相关--------------------
const oDomStorageId = 'storage_father';
const sOriginJqueryId = 'origin_jquery';
//id class tag相关=================

//用户自定义相关-------------------
const iDefaultUserPersonalizedColor = 1;
const sDefaultLangvage = 'cn';
let sUserLangvage = '';
let sPersonlizedColor = '';
//用户自定义相关===================

/**
 *
 * 第一个 script 标签 节点
 *
 * @type {string}
 */
let oIndexScriptTag = '';
function firstScriptTag () {
    oIndexScriptTag = oIndexScriptTag ? oIndexScriptTag : domById(sIndexScriptTagId);
    return oIndexScriptTag;
}

/**
 *
 * 根据id获取dom
 *
 * @param d
 * @returns {any}
 */
function domById (d) {
    let o = document.getElementById(d);
    return o != null ? o : false;
}
/**
 *
 * 处理localstorage 数据
 *
 * @param v value string
 * @param t lefttime 生存时间
 * @returns {*}
 */
function disposeLocalstorageValue (v, t = false) {
    v = typeof v != 'object' ? v : JSON.stringify(v);

    return t ? {'v': v, 't': t * 1000, 'st': getMillisecondTime()} : {'v': v};
}
let myStorage = (function myStorage () {
    let set = function (k, v, t = false) {
        if (!k) {
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
            if (getMillisecondTime() - d.st > d.t) {
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
        size : size,
    };
})();
/**
 *
 * 缓存 读取到的静态文件
 *
 * @param j 文件完整目录 type string
 * @param v 文件内容 type string
 */
function cacheStaticResource (j = '', v = '') {
    let t = setTimeout(function () {
        clearTimeout(t);

        iAllreadyLoadStaticResource += parseInt(1);

        setLocalstorage(sStaticResourceLocalstoragePrefix + j, v, false, false, true);
    }, 0);
}
/**
 *
 * 添加localstorage缓存
 *
 * @param k localstorage key
 * @param m localstorage message
 * @param t localstorage lefttime
 * @param f localstorage callback function
 * @param o 是否保存当前存储时间
 * @returns {boolean}
 */
function setLocalstorage (k = '', m = '', t = false, f = '', o = '') {
    if (!k || !m) {
        return false;
    }

    let p = localstoragePage (k);

    let s = disposeLocalstorageValue (m, t);
    let l = parseInt(JSON.stringify(s).length) + parseInt(k.length) + parseInt(100);

    p = sLocalstorageBeginPage;

    let z = 0;
    let d = sOriginLocalstorageSizeKey;
    let c = queryLocalstorageCache(d);
    c = eval('(' + c + ')');
    c = c ? c : {};
    while (!z || iMaxLocalstorageSize < z) {
        p = z ? parseInt(p) + parseInt(1) : p;

        if (c && c[p]) {
            z = parseInt(c[p]) + parseInt(l);
        } else {
            z = l;
        }
    }
    c[p] = z;
    asyn('localstorageLocalCache', d, c);

    p = storagePage(p);

    let a = {};
    a = {action: 'set', key: k, message: m};
    if (t) {
        a.leftTime = t;
    }
    if (f) {
        a.after = f;
    }

    let t1 = setTimeout(function () {
        clearTimeout(t1);

        localstoragePostMessage(p, a);
    }, 0);
}
/**
 *
 * 定时器执行
 *
 * @param f function  type  string
 * @param a arg 1 type string
 * @param b arg 2 string
 * @returns {boolean}
 */
function asyn (f = '', a = '', b = '') {
    if (!f) {
        return false;
    }

    if (typeof window[f] != 'function') {
        console.log('sssssssssssssssssssssssssssssssssssssssssssssssss');
        console.log(f);
        let t = setTimeout(function () {
            clearTimeout(t);

            asyn(f, a, b);
        }, 15);
        return;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        if (b) {
            window[f](a, b);
            return;
        }

        if (a) {
            window[f](a);
            return;
        }

        window[f]();
    }, 1);
}
/**
 *
 * 定时处理函数
 *
 * @param f 函数名 type string
 * @param a 参数1 type string
 * @param b 参数2 type string
 * @returns {boolean}
 */
function setTimeoutFunction (f = '', a = '', b = '') {
    if (!f) {
        return false;
    }

    if (typeof window[f] != 'function') {
        let t = setTimeout(function () {
            clearTimeout(t);

            setTimeoutFunction(f, a, b);
        }, 0);
        return;
    }

    let d = 15;
    if (typeof window['aTimer'] != 'undefined') {
        if (typeof aTimer[f] == 'undefined') {
            console.log(f);
        } else {
            d = aTimer[f];
        }
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        if (!a) {
            window[f]();
            return;
        } else {
            if (b) {
                window[f](a, b);
                return;
            } else {
                window[f](a);
                return;
            }
        }
    }, d);

    return true;
}

/**
 *
 * 获取 url origin
 *
 * @returns {string}
 */
function queryMasterOrigin () {
    let s = window.location.protocol;

    let t = '.';

    let o = window.location.origin;
    let a = o.split(t);
    let l = a.length;
    o = a[l - 2] + t + a[l - 1];
    o = o.replace(s + '/' + '/', '');
    o = s + '/' + '/' + o;

    return o;
}
let sOrigin = queryMasterOrigin();

/**
 * 设置storage 页面 url
 *
 * @param i page 远程storage 子域名 序号 type number
 * @returns {string}
 */
function storagePage (i = 0) {
    let p = sBaseProtocol;

    let o = sOrigin ? sOrigin : queryMasterOrigin();
    o = o.replace(p, '');
    return p + i + '.' + sStorageOriginsSonPrefix + '.' + o + '/' + sStoragePage;
}
/**
 *
 * 本地localstorage 存储
 *
 * @param k local localstorage key
 * @param v local localstorage value
 */
function localstorageLocalCache (k = '', v = '') {
    if (!k) {
        return false;
    }

    myStorage.set(k, v);
}
/**
 *
 * 获取本地localstorage信息
 *
 * @param k local localstorage key
 */
function queryLocalstorageCache (k = '') {
    if (!k) {
        return false;
    }

    return myStorage.get(k);
}
/**
 *
 * 获取子iframe localstorage key 的 域名tag
 *
 * @param k localstorage key string
 * @returns {boolean}
 */
function localstoragePage (k) {
    if (!k) {
        return false;
    }

    let i = myStorage.get(k);

    if (!i) {
        i = sLocalstorageBeginPage;
        localstorageLocalCache (k, i);
    }

    return i;
}
let oStorageDom = '';
function storageDom () {
    oStorageDom = oStorageDom ? oStorageDom : domById(oDomStorageId);
    return oStorageDom;
}
/**
 *
 * 写远程 storage 页面 iframe
 * @param p 远程 storage 页面完整 url type string
 * @returns {boolean}
 */
function writeStorageDom (p = 0) {
    let d = p;
    if (domById(d)) {
        return true;
    }

    let o = document.createElement('iframe');
    o.src = p;
    o.id = d;

    storageDom().appendChild(o);

    return true;
}
/**
 *
 *  与子iframe交互 localstorage
 *
 * @param p
 * @param m
 * @returns {boolean}
 */
function localstoragePostMessage (p = '', m = '') {
    if (!m || !p) {
        return false;
    }

    let o = domById(p);
    if (o) {
        if (aIframeSonReady[p]) {
            o.contentWindow.postMessage(m, p);
            return true;
        }

        setTimeoutFunction('localstoragePostMessage', p, m);
        return true;
    }

    writeStorageDom(p);

    setTimeoutFunction('localstoragePostMessage', p, m);

    return false;
}
/**
 *
 * 监听子iframe发过来的消息
 *
 */
window.addEventListener('message', function(event){
    if (!event.data) {
        return false;
    }

    if (!event.data) {
        return false;
    }

    console.log('^^^^^^^^^^^^^^^^^^^^^');
    console.log('get form ' + event.origin + ' message, will to do after load localstorage function');
    console.log(event.data);
    console.log('^^^^^^^^^^^^^^^^^^^^^');

    if (event.data.after) {
        if (typeof event.data.after == 'undefined') {
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
            console.log(event.data.after);
            console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }

        if (typeof event.data.after == 'function') {
            window[event.data.after](event.data.message);
            return;
        }

        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log(event.data.after);
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        setTimeoutFunction(event.data.after, event.data.message);
    }
}, false);
/*increment_version_48*/

/*increment_version_49*/
/**
 *
 * 更新本地存储的远程localstorage size
 *
 * @param z size type int
 */
function updateOriginLocalstorageSize (z = '') {
    if (!z) {
        return;
    }

    if (
        typeof z.host == 'undefined'
        ||
        typeof z.size == 'undefined'
    ) {
        return;
    }

    let d = sOriginLocalstorageSizeKey;
    let c = queryLocalstorageCache(d);
    c = eval('(' + c + ')');
    c = c ? c : {};
    c[z.host] = z.size;
    asyn('localstorageLocalCache', d, c);
}
/**
 *
 * 子iframe发送消息，回调函数
 *
 * @param p
 */
let aIframeSonReady = [];
function sonIsReady (p = '') {
    aIframeSonReady[p] = true;
}
/**
 *
 * @param k localstorage key  type string
 * @param f localstorage callback  type string
 * @param b 是否返回key type string
 * @returns {boolean}
 */
function queryLocalstorage (k = '', f = '', b = false) {
    if (!k || !f) {
        return false;
    }

    let p = localstoragePage(k);

    p = storagePage(p);
    if (!p) {
        window[f](false);
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        let j = {action: 'get', key: k, after: f};
        if (b) {
            j.returnKey = true;
        }

        localstoragePostMessage(p, j);
    }, 0);
}
/**
 *
 * 从远程 localstorage 中获取静态资源
 *
 * @param j 文件完整路径 type string
 * @param f 回调函数 type string
 * @param b 是否返回key type string
 * @returns {string}
 */
function getStaticResourceFromLocalstorage (j = '', f = '', b = false) {
    if (!j) {
        return '';
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        queryLocalstorage(sStaticResourceLocalstoragePrefix + j, f, b);
    }, 1);
}

//host---------------
/**
 *
 * 设置host数组
 *
 * @returns {boolean}
 */
let aHost = [];
let iHostNumber = 0;
function setHosts () {
    let i = 0;
    let o = window.location.host;
    for (i; i < sBaseHostSonNumber; i++) {
        aHost.push(sBaseProtocol + i + '.' + sBaseHostSonPrefix + '.' + o);
    }
    iHostNumber = aHost.length;

    return true;
}

/**
 *
 * hash 计算当前应该请求哪个地址
 *
 * @param u
 * @returns {boolean|*}
 */
function allocationHost (u = '') {
    if (!u) {
        return false;
    }

    return aHost[hashFunc(u, iHostNumber)];
}
//host===================

//hash------------------
/**
 *
 * hash 求余
 *
 * @param s  带求余字符串
 * @param i 余数
 * @returns {boolean|number}
 */
function hashFunc(s, i){
    if (!s ||!i) {
        return false;
    }

    //1.定义iHashCode变量
    let h = 0;

    //2.霍纳算法，来计算 h的值
    for (let i = 0; i < s.length; i++) {
        h = 37 * h + s.charCodeAt(i) //获取编码
    }
    h = parseInt(h);

    //3.取余状态
    return h % i;
}
//hash=======================

//加载---------------
/**
 *
 * 加载 静态文件
 *
 * @param j 文件完整路径 type string
 * @param t 文件类型 type string
 * @param c 回调函数 type string
 * @param r 真实文件地址 type string
 */
let bWriteToPage = [];
function initStaticResource (j = '', t = '', c = '', r = '') {
    if (!j || !t) {
        return false;
    }

    if (bWriteToPage[j]) {
        return;
    }
    bWriteToPage[j] = true;

    var xhr = '';
    if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    } else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }

    if (!xhr) {
        return;
    }

    // console.log('ssssssssssssasdasdasdasdsad');
    // console.log(j);
    // console.log(allocationHost(j) + '/index.php?' + aStaticResourceAddress[j]);
    // return ;
    xhr.open('GET', allocationHost(j) + '/index.php?' + j, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // bWriteToPage[j] = true;

            let v = xhr.responseText;
            v = v == null ? '' : v;
            v = JSON.parse(v);

            // if (bWriteToPage[j] != true) {
                let z = setTimeout(function () {
                    clearTimeout(z);

                    disposeResponse(v, t, r);
                }, 0);

                asyn('setStaticResourceLastCacheTime', r);
            // }
        }
    };

    if (c) {
        asyn(c);
    }
}

/**
 *
 * 处理请求回来的静态资源
 *
 * @param v 请求回来的资源 type json
 * @param v t 文件类型 type string
 * @param f 文件路径 type string
 */
function disposeResponse (v = '', t = '', f = '') {
    if (!v.t || !v.s) {
        return;
    }

    let p = v.t;
    let s = v.s;
    if (p === 'a') {
        asyn('writeStaticResourceToPage', s, t);

        asyn('cacheStaticResource', f, s);
        return;
    }

    if (p === 'i') {
        aNeedIncrementStaticResourceCache[f] = s.i;
        aNeedIncrementStaticResourceCacheFileType[f] = t;

        let b = 'incrememtStaticResourceCache';
        getStaticResourceFromLocalstorage(f, b, true);
        return;
    }

    if (p === 'u') {
        aNeedUpdateStaticResourceCache[f] = s.u;
        aNeedUpdateStaticResourceCacheVerion[f] = v.g;
        aNeedUpdateStaticResourceCacheFileType[f] = t;

        let b = 'updateStaticResourceCache';
        getStaticResourceFromLocalstorage(f, b, true);
        return;
    }

    if (p === 'ui') {
        aNeedIncrementStaticResourceCache[f] = s.i;
        aNeedIncrementStaticResourceCacheFileType[f] = t;

        aNeedUpdateStaticResourceCache[f] = s.u;
        aNeedUpdateStaticResourceCacheVerion[f] = v.g;
        aNeedUpdateStaticResourceCacheFileType[f] = t;

        let b = 'incrementAndUpdateStaticResourceCache';
        getStaticResourceFromLocalstorage(f, b, true);
        return;
    }
}

/**
 *
 * 静态文件添加并更新
 *
 * @param v
 */
function incrementAndUpdateStaticResourceCache (v = '') {
    let k = v.key;
    if (!k) {
        return;
    }

    let s = v.message;

    s = updateStaticResourceCache(v, false, true);

    s = s + aNeedIncrementStaticResourceCache[k];

    asyn('writeStaticResourceToPage', s, aNeedIncrementStaticResourceCacheFileType[k]);

    asyn('cacheStaticResource', k, s);
}
/**
 *
 * 静态文件增加内容，更新缓存
 *
 * @param v
 * @param w 是否写入页面
 * @param b 是否返回信息
 */
let aNeedUpdateStaticResourceCacheFileType = [];
let aNeedUpdateStaticResourceCache = [];
let aNeedUpdateStaticResourceCacheVerion = [];
function updateStaticResourceCache (v = '', w = true, b = false) {
    let k = v.key;
    if (!k) {
        return;
    }

    let s = v.message;
    if (s) {
        let a = aNeedUpdateStaticResourceCacheVerion[k];
        let g = '';
        for (let i in a) {
            g = new RegExp('\\/\\*' + a[i] + '\\*\\/.*?\\/\\*' + a[i] + '\\*\\/');
            s = s.replace(g, aNeedUpdateStaticResourceCache[k][i]);
        }

        if (b) {
            return s;
        }

        if (w) {
            asyn('writeStaticResourceToPage', s, aNeedUpdateStaticResourceCacheFileType[k]);

            asyn('cacheStaticResource', k, s);
        }
    }

    if (b) {
        return '';
    }
}
/**
 *
 * 静态文件增加内容，更新缓存
 *
 * @param v
 */
let aNeedIncrementStaticResourceCacheFileType = [];
let aNeedIncrementStaticResourceCache = [];
function incrememtStaticResourceCache (v = '') {
    let k = v.key;

    if (!k) {
        return;
    }

    let s = v.message + aNeedIncrementStaticResourceCache[k];

    asyn('writeStaticResourceToPage', s, aNeedIncrementStaticResourceCacheFileType[k]);

    asyn('cacheStaticResource', k, s);
}

/**
 *
 * 最后的meta标签
 *
 * @returns {*|string}
 */
let oFinalMeta = '';
function finalMeta () {
    oFinalMeta = oFinalMeta ? oFinalMeta : domById(sFinalMetaTagId);
    return oFinalMeta;
}
/**
 *
 * 动态添加js，css文件内容
 *
 * @param v 静态文件内容 type string
 * @param t 类型 type string
 */
function writeStaticResourceToPage(v, t) {
    if (!v || !t) {
        return;
    }

    let f = '';
    let o = '';
    if (t === 'js') {
        o = document.createElement('script');
        o.type = 'text/javascript';
        o.language = 'JavaScript';
        o.charset = sCharset;
        o.innerHTML = v;

        f = firstScriptTag();
    } else if (t === 'css') {
        if (!finalMeta()) {
            setTimeoutFunction('writeStaticResourceToPage', v, t);
            return;
        }

        o = document.createElement('style');
        o.type = 'text/css';
        o.charset = sCharset;
        o.innerHTML = v;

        f = finalMeta();
    }

    asyn('insertAfter', o, f);
}
/**
 *
 * 在 j 之后插入 新节点n
 *
 * @param n 新节点 type dom
 * @param j
 */
function insertAfter (n, j) {
    let p = j.parentNode;
    if (p.lastChild == j) {
        p.appendChild(n);
    } else {
        p.insertBefore(n, j.nextSibling);
    }
}
//加载js----------------
function date () {
    return new Date();
}
/**
 *
 * 获取毫秒时间戳
 *
 * @returns {number}
 */
function getMillisecondTime () {
    return date().getTime();
}
/**
 *
 * 获取秒时间戳
 *
 * @returns {number}
 */
function getSecondTime () {
    return parseInt(getMillisecondTime() / 1000);
}
/**
 *
 * 请求静态文件时间限制
 *
 * @param p 类型 type string
 * @param f 文件 type string
 * @returns {boolean}
 */
let aRequestJsCssLastTime = [];
function checkRequestJsCssLimit (f = '') {
    if (!f) {
        return false;
    }

    let t = getMillisecondTime();
    let l = typeof aRequestJsCssLastTime[f] != 'undefined' ? aRequestJsCssLastTime[f] : 0;
    if (t - l < iRequertTimeout) {
        return false;
    }
    aRequestJsCssLastTime[f] = t;

    return true;
}
/**
 *
 * f 文件地址 type string
 * q xhr 请求 type boolean
 * @param f
 * @param q
 * @returns {boolean}
 */
function loadStaticResource (f, q = false) {
    if (aInLoadStaticResource[f] || aAllreadyLoadStaticResource[f]) {
        return false;
    }

    if (q && !checkRequestJsCssLimit(f)) {
        setTimeoutFunction('loadStaticResource', f, q);
        return false;
    }

    setInLoadStaticResource(f, true);

    let a = '';
    let b = '';
    let c = '';
    switch (f) {
        case sUserCss1Tag :
            a = 'afterLoadUserColor';
            b = 'afterLoadUserColor1';
            c = 'css';
            break;
        case sUserCss2Tag :
            a = 'afterLoadUserColor';
            b = 'afterLoadUserColor1';
            c = 'css';
            break;
        case sUserCss3Tag :
            a = 'afterLoadUserColor';
            b = 'afterLoadUserColor1';
            c = 'css';
            break;
        case sPubCssTag :
            a = 'afterLoadPublicCss';
            b = 'afterLoadPublicCss1';
            c = 'css';
            break;
        case sResetCssTag :
            a = 'afterLoadResetCss';
            b = 'afterLoadResetCss1';
            c = 'css';
            break;
        case sJqueryJsTag :
            a = 'afterLoadLocalJquery';
            b = 'afterLoadLocalJquery1';
            c = 'js';
            break;
        case sBaseJsTag :
            a = 'afterLoadBaseJs';
            b = 'afterLoadBaseJs1';
            c = 'js';
            break;
        case sFuncJsTag :
            a = 'afterLoadFunctionJs';
            b = 'afterLoadFunctionJs1';
            c = 'js';
            break;
        case sPubDomJsTag :
            a = 'afterLoadDomJs';
            b = 'afterLoadDomJs1';
            c = 'js';
            break;
        case sPlatDomJsTag :
            a = 'afterLoadPlatformDomJs';
            b = 'afterLoadPlatformDomJs1';
            c = 'js';
            break;
        case sLogicJsTag :
            a = 'afterLoadLogicJs';
            b = 'afterLoadLogicJs1';
            c = 'js';
            break;
        case sCnLangJsTag :
            // sNowLang = sCnLangJsTag;
            // console.log(q);
            // console.log('dasssssssssssssssssszzzzzzzzzzzzzzzzzzzzzzzz');
            a = 'afterLoadLang';
            b = 'afterLoadLang1';
            c = 'js';
            break;
        // case sEnLangJsTag :
        //     a = 'afterLoadLang';
        //     b = 'afterLoadLang1';
        //     c = 'js';
        //     break;
        case sApiJsTag :
            a = 'afterLoadApi';
            b = 'afterLoadApi1';
            c = 'js';
            break;
        case sEncodeJsTag :
            a = 'afterLoadEncode';
            b = 'afterLoadEncode1';
            c = 'js';
            break;
        case sForumJsTag:
            // console.log('dddddddddddddddddddddasssssssssssssssssrqrqwwwwwwwwwwwwwwwwwwww');
            a = 'afterLoadPage';
            b = 'afterLoadPage1';
            c = 'js';
            break;
        case sChatJsTag:
            a = 'afterLoadPage';
            b = 'afterLoadPage1';
            c = 'js';
            break;
        case sFriendJsTag:
            a = 'afterLoadPage';
            b = 'afterLoadPage1';
            c = 'js';
            break;
        case sSetJsTag:
            a = 'afterLoadPage';
            b = 'afterLoadPage1';
            c = 'js';
            break;
        case sAboutJsTag:
            a = 'afterLoadPage';
            b = 'afterLoadPage1';
            c = 'js';
            break;
    }

    // if (f == sForumJsTag) {
    //     console.log('zzzzzzzzzzzzzzzzzzzaassssssssssssssqqq');
    // }
    let n = getIncrementUpdateTag(f);
    // if (f == sForumJsTag) {
    //     console.log('zzzzzzzzzzzzzzzzzzzaassssssssssssssqqq');
    //     console.log(n);
    // }
    // if (a === 'afterLoadLang') {
    //     console.log(n);
    //     console.log('aaaaaaaaaaaaaddddddddddddddeeeeeeeeeeeegggggggggggggggggggg');
    // }
    if (n || q || debug) {
        // console.log('sssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaa');
        let t = setTimeout(function () {
            clearTimeout(t);

            let g = n ? 'f=' + aStaticResourceAddress[f] + n : 'f=' + aStaticResourceAddress[f];
            initStaticResource(g, c, a, f);
        }, 0);
    } else {
        // console.log('zzzzzzzzzzzzzzzzzzzzzqqqqqqqqqqqqqqqqqqqqqqqqq');
        let t = setTimeout(function () {
            clearTimeout(t);

            getStaticResourceFromLocalstorage(f, b);
        }, 0);
    }
}
function afterLoadStaticResource (v = '', t = '') {
    iAllreadyLoadStaticResource += parseInt(1);

    asyn('writeStaticResourceToPage', v, t);
}
function afterLoadUserColor () {
    // asyn('setInLoadStaticResource', sPersonalizedCss, false);
    setInLoadStaticResource(sPersonalizedCss, false);
}
function afterLoadUserColor1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'css');

        asyn('afterLoadUserColor');

        return;
    }

    aInLoadStaticResource[sPersonalizedCss] = false;
    asyn('loadStaticResource', sPersonalizedCss, true);
}
function afterLoadPublicCss () {
    // asyn('setInLoadStaticResource', sPubCssTag, false);
    setInLoadStaticResource(sPubCssTag, false);
}
function afterLoadPublicCss1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'css');

        asyn('afterLoadPublicCss');

        return;
    }

    aInLoadStaticResource[sPubCssTag] = false;
    asyn('loadStaticResource', sPubCssTag, true);
}
function afterLoadResetCss () {
    // asyn('setInLoadStaticResource', sResetCssTag, false);
    setInLoadStaticResource(sResetCssTag, false);
}
function afterLoadResetCss1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'css');

        asyn('afterLoadResetCss');

        return;
    }

    aInLoadStaticResource[sResetCssTag] = false;
    asyn('loadStaticResource', sResetCssTag, true);
}
function afterLoadPage () {
    // asyn('setInLoadStaticResource', sNowPageJs, false);
    setInLoadStaticResource(sNowPageJs, false);

    asyn('afterLoadPageJs');
}
function afterLoadPage1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadPageJs');

        return;
    }


    aInLoadStaticResource[sNowPageJs] = false;
    console.log('cxcxcsdddddddddddddddddddqqqqqqqqqqqqqqqqqhhhhhhhhhhhhh');
    console.log(sNowPageJs);
    asyn('loadStaticResource', sNowPageJs, true);
}
function afterLoadLocalJquery () {
    // asyn('setInLoadStaticResource', sJqueryJsTag, false);
    setInLoadStaticResource(sJqueryJsTag, false);
}
function afterLoadLocalJquery1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadLocalJquery');

        return;
    }

    aInLoadStaticResource[sJqueryJsTag] = false;
    asyn('loadStaticResource', sJqueryJsTag, true);
}
function afterLoadEncode () {
    // asyn('setInLoadStaticResource', sEncodeJsTag, false);
    setInLoadStaticResource(sEncodeJsTag, false);
    asyn('encodeBegin');
}
function afterLoadEncode1 (v = '') {
    // if (typeof window['encodeBegin'] != 'undefined') {
    //     return;
    // }
    // console.log('sssssssssdzcfewreddddddddddddddddddddddddd');
    // console.log(typeof window['encodeBegin']);
    // console.log(window['encodeBegin']);

    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadEncode');

        return;
    }

    aInLoadStaticResource[sEncodeJsTag] = false;
    asyn('loadStaticResource', sEncodeJsTag, true);
}
function afterLoadApi () {
    // asyn('setInLoadStaticResource', sApiJsTag, false);
    setInLoadStaticResource(sApiJsTag, false);
    asyn('apiBegin');
}
function afterLoadApi1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadApi');

        return;
    }

    aInLoadStaticResource[sApiJsTag] = false;
    asyn('loadStaticResource', sApiJsTag, true);
}
function afterLoadLang () {
    // console.log('dasdasdasssssssssssssssssssssssssssssssss');
    // console.log(sNowLang);
    // asyn('setInLoadStaticResource', sNowLang, false);
    setInLoadStaticResource(sNowLang, false);
    asyn('langBegin');
}
function afterLoadLang1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadLang');

        return;
    }

    // switch (sLangNow) {
    //     case sDefaultLangvage :
    //         sNowLang = sCnLangJsTag;
    //         break;
    //     // case 'en' :
    //     //     sNowLang = sEnLangJsTag;
    //     //     break;
    //     default:
    //         sNowLang = sCnLangJsTag;
    //         break;
    // }
    aInLoadStaticResource[sNowLang] = false;
    asyn('loadStaticResource', sNowLang, true);
}
function afterLoadBaseJs () {
    // asyn('setInLoadStaticResource', sBaseJsTag, false);
    setInLoadStaticResource(sBaseJsTag, false);
    asyn('baseBegins');
}
function afterLoadBaseJs1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadBaseJs');

        return;
    }

    aInLoadStaticResource[sBaseJsTag] = false;
    asyn('loadStaticResource', sBaseJsTag, true);
}
// /**
//  *
//  * index js 加载完回调函数
//  *
//  */
// function afterLoadIndexJs () {
//     asyn('indexBegin');
// }
// function afterLoadIndexJs1 (v = '') {
//     if (v) {
//         asyn('afterLoadStaticResource', v, 'js');
//
//         asyn('afterLoadIndexJs');
//
//         return;
//     }
//
//     asyn('loadStaticResource', sIndexJs, true);
// }
/**
 *
 * function js 加载完回调函数
 *
 */
function afterLoadFunctionJs () {
    // asyn('setInLoadStaticResource', sFuncJsTag, false);
    setInLoadStaticResource(sFuncJsTag, false);
    asyn('functionBegin');
}
function afterLoadFunctionJs1 (v = '') {
    // if (typeof window['functionBegin'] != 'undefined') {
    //     return;
    // }

    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadFunctionJs');

        return;
    }

    aInLoadStaticResource[sFuncJsTag] = false;
    asyn('loadStaticResource', sFuncJsTag, true);
}
/**
 *
 * 加载完 dom js 函数回调函数
 *
 */
function afterLoadDomJs () {
    // asyn('setInLoadStaticResource', sPubDomJsTag, false);
    setInLoadStaticResource(sPubDomJsTag, false);
    asyn('domBegin');
}
function afterLoadDomJs1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadDomJs');

        return;
    }

    aInLoadStaticResource[sPubDomJsTag] = false;
    asyn('loadStaticResource', sPubDomJsTag, true);
}
/**
 *
 * 加载 平台 dom js 回调函数
 *
 */
function afterLoadPlatformDomJs () {
    // asyn('setInLoadStaticResource', sPlatDomJsTag, false);
    setInLoadStaticResource(sPlatDomJsTag, false);
    asyn('platformBegin');
}
function afterLoadPlatformDomJs1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadPlatformDomJs');

        return;
    }

    aInLoadStaticResource[sPlatDomJsTag] = false;
    asyn('loadStaticResource', sPlatDomJsTag, true);
}
/**
 *
 * 加载 逻辑 logic js 回调函数
 *
 */
function afterLoadLogicJs () {
    // asyn('setInLoadStaticResource', sLogicJsTag, false);
    setInLoadStaticResource(sLogicJsTag, false);
    asyn('logicBegin');
}
function afterLoadLogicJs1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadLogicJs');

        return;
    }

    aInLoadStaticResource[sLogicJsTag] = false;
    asyn('loadStaticResource', sLogicJsTag, true);
}
//用户语言
function queryUserLang () {
    if (sUserLangvage) {
        // sNowLang = sUserLangvage;
        return sUserLangvage;
    }

    let l = myStorage.get(sLocalstorageLangTag);
    if (!l) {
        l = sDefaultLangvage;

        asyn('setLang', l);
    }
    // sNowLang = sUserLangvage;

    return l;
}
/**
 *
 * set localstorage lang
 *
 * @param l 语言 type string
 * @param j 是否加载语言包 type string
 * @returns {boolean}
 */
function setLang (l = '', j = false) {
    if (!l) {
        return false;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        myStorage.set(sLocalstorageLangTag, l);
    }, 0);

    if (j) {
        asyn('loadLang');
    }
}
/**
 *
 * 加载用户自定义主题css
 *
 * @param c
 * @returns {boolean}
 */
let sPersonalizedCss = '';
function loadPersonalizedCss (c = false) {
    c = c ? c : queryUserPersonalizedColor();

    // sPersonalizedCss = '/static_resource/css/personalized/color/' + c + '.css';
    // switch (c) {
    //     case 1 :
    //         sPersonalizedCss = sUserCss1Tag;
    //         break;
    //     case 2 :
    //         sPersonalizedCss = sUserCss2Tag;
    //         break;
    //     case 3 :
    //         sPersonalizedCss = sUserCss3Tag;
    //         break;
    // }

    sPersonalizedCss = userCss(c);

    asyn('loadStaticResource', sPersonalizedCss);
}
// 从localstorage 获取 用户自定义主题
function queryUserPersonalizedColor () {
    if (sPersonlizedColor) {
        return sPersonlizedColor;
    }

    let c = myStorage.get(sLocalstorgaeUserPersonalizedColorKey);
    if (!c) {
        c = iDefaultUserPersonalizedColor;

        asyn('setPersonlizedColor', c, false);
    }

    return c;
}
/**
 *
 * 设置用户自定义主题
 *
 * @param c localstorage key string
 * @param c localstorage key string
 * @returns {boolean}
 */
function setPersonlizedColor (c = '', n = false) {
    if (!c) {
        return false;
    }

    myStorage.set(sLocalstorgaeUserPersonalizedColorKey, c);

    if (n) {
        loadPersonalizedCss(c);
    }
}

/**
 *
 * 加载语言包
 *
 * l 语言包 名字 type string
 *
 * @type {number}
 */
function loadLang (l = '') {
    l = l ? l : queryUserLang();
    // let y = '';
    switch (l) {
        case sDefaultLangvage :
            sNowLang = sCnLangJsTag;
            // sNowLang = l;
            break;
        // case 'en' :
        //     y = sEnLangJsTag;
        //     break;
        default :
            sNowLang = sCnLangJsTag;
            // sNowLang = l;
            break;
    }
    if (!sNowLang) {
        return false;
    }

    // console.log('dddddddddddddddddddddasdasdasd');
    // console.log(y);
    asyn('loadStaticResource', sNowLang);
}

/**
 *
 * 加载 js 文件
 *
 */
function loadStaticFile () {
    asyn('loadStaticResource', sResetCssTag);

    asyn('loadPersonalizedCss');

    asyn('loadStaticResource', sBaseJsTag);

    asyn('loadStaticResource', sPubDomJsTag);

    asyn('loadStaticResource', sPlatDomJsTag);

    // asyn('loadStaticResource', sIndexJs);

    // asyn('loadStaticResource', sFuncJsTag);

    asyn('loadStaticResource', sLogicJsTag);

    asyn('loadLang');

    // asyn('loadStaticResource', sApiJsTag);

    // asyn('loadStaticResource', aStaticResourceAddress[sEncodeJsTag][');

    let t = setTimeout(function () {
        clearTimeout(t);

        asyn('loadLocalJquery');
    }, iCheckJqueryLimitTime);

    asyn('loadStaticResource', sPubCssTag);
}

function loadLocalJquery () {
    if (typeof jQuery == 'undefined') {
        asyn('loadStaticResource', sJqueryJsTag);

        let o = domById(sOriginJqueryId);
        o.parentNode.removeChild(o);
    }
}

function localstorageError1 () {
    alert('localstorage error, please retry reload !!! ');
}

/**
 *
 * 缓存上一次静态文件缓存时间
 *
 * @param k 静态文件地址
 */
function setStaticResourceLastCacheTime (k = '') {
    let t = date();
    let y = t.getFullYear();
    let m = parseInt(t.getMonth()) + parseInt(1);
    m = m < 10 ? '0' + m : m;
    let d = t.getDate();
    let h = t.getHours();
    h = h < 10 ? '0' + h : h;

    myStorage.set(sLastCacheStaticResourceTimeTag + k, y + m + d + h);
}
/**
 *
 * 获取上一次静态文件缓存时间
 *
 * @param k
 * @returns {*}
 */
function getStaticResourceLastCacheTime (k = '') {
    let t = myStorage.get(sLastCacheStaticResourceTimeTag + k);
    return t ? t : 0;
}

let iBeginTime = 0;
function fileControlBegin () {
    console.log('0000000000000000000000000000000fileControlBegin');
    if (
        (typeof window['getIncrementUpdateTag'] == 'undefined')
        // ||
        // (typeof window['requiresBegin'] == 'undefined')
    ) {
        setTimeoutFunction('fileControlBegin');
        return;
    }

    iBeginTime = getSecondTime();

    if (!window.localStorage) {
        localstorageError1();
        return;
    }

    let b = false;
    try {
        let sTestStorageKey = 'private_test';
        localStorage.setItem(sTestStorageKey, 1);
        localStorage.removeItem(sTestStorageKey);
        b = true;
    } catch (e) {
        //无痕模式
        b = false;
        localstorageError1();
        return;
    }
    if (!b) {
        return;
    }

    // asyn('setrequires');

    // asyn('setStaticResourceInLoadAndAllready');

    setHosts();

    asyn('showBaseShade');

    asyn('loadStaticFile');
}

// /**
//  *
//  * 设置文件别名
//  *
//  */
// function setrequires () {
//     let a = [];
//
//     a[sFuncJsTag] = sFuncJsTag;
//     a[sEncodeJsTag] = sEncodeJsTag;
//     arequires = a;
// }

// function setStaticResourceInLoadAndAllready () {
//     setStaticResource();
//
//     for (let i in aStaticResourceContainers) {
//         aInLoadStaticResource.push(aStaticResourceContainers[i]);
//         aAllreadyLoadStaticResource.push(aStaticResourceContainers[i]);
//     }
// }

/**
 *
 * 设置正在读取的静态资源
 *
 * @param j 文件路径 type string
 * @param b 加载中 type boole
 */
function setInLoadStaticResource (j = '', b = false) {
    if (b) {
        aInLoadStaticResource[j] = true;
        aAllreadyLoadStaticResource[j] = false;
        return;
    }

    aInLoadStaticResource[j] = false;
    aAllreadyLoadStaticResource[j] = true;
}

/**
 *
 * 动态加载js
 *
 * @param j 依赖文件 type array
 * @param c 回调函数 type function
 */
let aAllreadyLoadStaticResource = [];
let aInLoadStaticResource = [];
function requires (j = '', c = '') {
    // console.log('pppppppppppppppppppppppppppppppppppppppppp');
    let l = j.length;
    let n = 0;
    let y = [];
    for (let i in j) {
        // console.log(j[i]);
        // console.log('vvvvvvvvvvvvvvvvvvvvvvv');
        // console.log(aAllreadyLoadStaticResource);
        // console.log(aAllreadyLoadStaticResource['base']);
        // console.log(aAllreadyLoadStaticResource['func']);
        // console.log(aAllreadyLoadStaticResource['encode']);
        if (aAllreadyLoadStaticResource[j[i]]) {
            n = parseInt(n) + parseInt(1);
        } else {
            y.push(j[i]);
        }

        // console.log(n);
        // console.log(l);
        if (n == l) {
            // console.log(c);
            c();
            // console.log('kkkkkkkkkkkkkkkkkkkkkkkkkk');
            return;
        }
    }

    // console.log('qqqqqqqqqqqqqqqqqqqqqq');
    if (y) {
        for (let i in y) {
            asyn('loadStaticResource', y[i]);
        }
    }

    asyn('requires', j, c);
}

window.onload = fileControlBegin();
// 修改文件要修改文件名跟版本号
