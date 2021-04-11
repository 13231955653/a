//编码相关-----------------
const sCharset = 'utf-8'; // 编码格式
//编码相关===============
//url地址相关---------------------
const sBaseProtocol = window.location.protocol + '/' + '/';
//url地址相关=================================
//localstorage相关----------------------------
const sLocalstorageBeginPage = 1;
const sLocalstorageLangTag = 'user_lang';
const sLocalstorgaeUserPersonalizedColorKey = 'user_personlized_color';
const sOriginLocalstorageSizeKey = 'origin_localstorage_size';
const iMaxLocalstorageSize = 3670016;
const sStorageOriginsSonPrefix = 'storage';
const sStoragePage = 'storage.html';
const sStaticResourceLocalstoragePrefix = 'static_resource_';
//localstorage相关=============================
//meta标签相关----------------
const sFinalMetaTagId = 'copy_cont';
//meta标签相关=====================
//class id tag 相关----------------
const sIndexScriptTagId = 'final_js_tag'; // 第一个 script 标签
//class id tag 相关===============
//时间相关---------------------
const sLastcacheStaticResourceTimeTag = 'last_cache_static_resource_';
const iRequertTimeout = 9000;
//时间相关=======================
//语言相关-----------
let sNowLang = '';
//语言相关===========
//id class tag相关--------------------
const oDomStorageId = 'storage_f';
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
let iAllreadystaticResource = 0;
function cacheStaticResource (j = '', v = '') {
    let t = setTimeout(function () {
        clearTimeout(t);

        iAllreadystaticResource += parseInt(1);

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

    let s = disposeLocalstorageValue (m, t);
    let l = parseInt(JSON.stringify(s).length) + parseInt(k.length) + parseInt(100);

    let p = sLocalstorageBeginPage;

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
        console.log(f + ' is no function ');
        let t = setTimeout(function () {
            clearTimeout(t);

            asyn(f, a, b);
        }, 15);
        return;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        if (b !== false) {
            window[f](a, b);
            return;
        }

        if (a !== false) {
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

        if (a === false) {
            window[f]();
            return;
        } else {
            if (b !== false) {
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
        window[event.data.after](event.data.message);
    }
}, false);
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
 * @param j  文件路径 键 type string
 * @param f 回调函数 type string
 * @param b 是否返回key type string
 * @returns {string}
 */
function getstaticResourceFromLocalstorage (j = '', f = '', b = false) {
    if (!j) {
        return '';
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        queryLocalstorage(sStaticResourceLocalstoragePrefix + j, f, b);
    }, 1);
}
const aStaticResourceHost = [
    'http://1.static_resource_1.com',
    'http://2.static_resource_1.com',
    'http://3.static_resource_1.com',
    'http://1.static_resource_2.com',
    'http://2.static_resource_2.com',
    'http://3.static_resource_2.com',
    'http://1.static_resource_3.com',
    'http://2.static_resource_3.com',
    'http://3.static_resource_3.com',
];
const iStaticResourceHostNumber = 3;
let iStaticResourceRquestNum = 1;
function allocationStaticResourceHost (u = '') {
    if (!u) {
        return false;
    }

    iStaticResourceRquestNum += parseInt(1);

    return aStaticResourceHost[iStaticResourceRquestNum % iStaticResourceHostNumber];
}
/**
 *
 * 随机字符串
 *
 * @param l 随机字符串 长度 type int
 * @returns {string|string}
 */
const sRandString = 'abcdefghijklmnopqrstuvwxyz';
function randStr (l) {
    l = l || 32;
    let s = sRandString;
    let a = s.length,
        n = '';
    for (let i = 0; i < l; i++) {
        n += s.charAt(Math.floor(Math.random() * a));
    }

    return n;
}
function initStaticVerifyFeild () {
    let a = randStr(1);
    let b = getSecondTime();
    let c = md5(a + '_jhj978)_**%42' + b);
    return '&v=' + a + c.substring(0, 31) + '_' + b;
}
/**
 *
 * 加载 静态文件
 *
 * @param j 文件完整路径 type string
 * @param t 文件类型 type string
 * @param c 回调函数 type string
 * @param r 文件 变量key  type string
 */
let bWriteToPage = [];
const iInitstaticResourceErrorLimit = 5000;
const iInitstaticResourceErrorMaxRetryNum = 3;
let aInitstaticResourceErrorNum = [];
function initstaticResource (j = '', t = '', c = '', r = '') {
    if (typeof window['md5'] == 'undefined') {
        let z = setTimeout(function () {
            clearTimeout(z);

            initstaticResource(j, t, c, r);
        }, 15);
        return;
    }

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

    let u = allocationStaticResourceHost(j) + '/a.php?' + j;
    if (!u) {
        return;
    }

    u += initStaticVerifyFeild();

    xhr.open('GET', u, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                setInstaticResource(r, false);

                let v = xhr.responseText;
                v = v == null ? '' : v;
                v = JSON.parse(v);

                let z = setTimeout(function () {
                    clearTimeout(z);

                    disposeResponse(v, t, r);
                }, 0);

                asyn('setStaticResourceLastCacheTime', r);

                if (c) {
                    asyn(c);
                }
            } else {
                if (typeof aInitstaticResourceErrorNum[j] == 'undefined') {
                    aInitstaticResourceErrorNum[j] = 0;
                }
                aInitstaticResourceErrorNum[j] += parseInt(1);

                if (aInitstaticResourceErrorNum[j] > iInitstaticResourceErrorMaxRetryNum) {
                    alert('static resource load error, please refresh to retry !!!');
                    return;
                }

                let z = setTimeout(function () {
                    clearTimeout(z);

                    bWriteToPage[j] = false;

                    initstaticResource (j, t, c, r);
                }, iInitstaticResourceErrorLimit);
            }
        }
    };
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
        aNeedIncrementstaticResourceCache[f] = s.i;
        aNeedIncrementstaticResourceCacheFileType[f] = t;

        let b = 'incrememtstaticResourceCache';
        getstaticResourceFromLocalstorage(f, b, true);
        return;
    }

    if (p === 'u') {
        aNeedUpdatestaticResourceCache[f] = s.u;
        aNeedUpdatestaticResourceCacheVerion[f] = v.g;
        aNeedUpdatestaticResourceCacheFileType[f] = t;

        let b = 'updatestaticResourceCache';
        getstaticResourceFromLocalstorage(f, b, true);
        return;
    }

    if (p === 'ui') {
        aNeedIncrementstaticResourceCache[f] = s.i;
        aNeedIncrementstaticResourceCacheFileType[f] = t;

        aNeedUpdatestaticResourceCache[f] = s.u;
        aNeedUpdatestaticResourceCacheVerion[f] = v.g;
        aNeedUpdatestaticResourceCacheFileType[f] = t;

        let b = 'incrementAndUpdatestaticResourceCache';
        getstaticResourceFromLocalstorage(f, b, true);
        return;
    }
}
/**
 *
 * 静态文件添加并更新
 *
 * @param v
 */
function incrementAndUpdatestaticResourceCache (v = '') {
    let k = v.key;
    if (!k) {
        return;
    }
    k = k.replace(sStaticResourceLocalstoragePrefix, '');

    let s = v.message;

    s = updatestaticResourceCache(v, false, true);

    s = s + aNeedIncrementstaticResourceCache[k];

    asyn('writeStaticResourceToPage', s, aNeedIncrementstaticResourceCacheFileType[k]);

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
let aNeedUpdatestaticResourceCacheFileType = [];
let aNeedUpdatestaticResourceCache = [];
let aNeedUpdatestaticResourceCacheVerion = [];
function updatestaticResourceCache (v = '', w = true, b = false) {
    let k = v.key;
    if (!k) {
        return;
    }
    k = k.replace(sStaticResourceLocalstoragePrefix, '');

    let s = v.message;
    if (s) {
        let a = aNeedUpdatestaticResourceCacheVerion[k];
        let g = '';
        for (let i in a) {
            g = new RegExp('\\/\\*' + a[i] + '\\*\\/.*?\\/\\*' + a[i] + '\\*\\/');
            s = s.replace(g, aNeedUpdatestaticResourceCache[k][i]);
        }

        if (b) {
            return s;
        }

        if (w) {
            asyn('writeStaticResourceToPage', s, aNeedUpdatestaticResourceCacheFileType[k]);

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
let aNeedIncrementstaticResourceCacheFileType = [];
let aNeedIncrementstaticResourceCache = [];
function incrememtstaticResourceCache (v = '') {
    let k = v.key;

    if (!k) {
        return;
    }
    k = k.replace(sStaticResourceLocalstoragePrefix, '');

    let s = v.message + aNeedIncrementstaticResourceCache[k];

    asyn('writeStaticResourceToPage', s, aNeedIncrementstaticResourceCacheFileType[k]);

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
function writeJsStaticResourceToPage (v) {
    let c = sStaticResourceLocalstoragePrefix;
    if (
        (typeof v.key == 'undefined')
        ||
        (typeof v.message == 'undefined' || !v.message)
    ) {
        let a = typeof v.key != 'undefined' ? v.key.replace(c, '') : v;
        aInstaticResource[a] = false;

        asyn('staticResource', a, true);
        return;
    }

    let a = v.key.replace(c, '');
    let b = v.message;

    aInstaticResource[a] = false;

    if (b) {
        asyn('writeStaticResourceToPage', b, 'js');

        setInstaticResource(a, false);
        return;
    }
}
function writeCssStaticResourceToPage (v) {
    let c = sStaticResourceLocalstoragePrefix;
    if (
        (typeof v.key == 'undefined')
        ||
        (typeof v.message == 'undefined' || !v.message)
    ) {
        let a = typeof v.key != 'undefined' ? v.key.replace(c, '') : v;
        aInstaticResource[a] = false;

        asyn('staticResource', a, true);
        return;
    }

    let a = v.key.replace(c, '');
    let b = v.message;

    aInstaticResource[a] = false;

    if (b) {
        aAllreadystaticResource[a] = true;

        asyn('writeStaticResourceToPage', b, 'css');

        setInstaticResource(a, false);
        return;
    }
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
function myDate () {
    return new Date();
}
/**
 *
 * 获取毫秒时间戳
 *
 * @returns {number}
 */
function getMillisecondTime () {
    return myDate().getTime();
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
function staticResource (f, q = false) {
    if (aInstaticResource[f] || aAllreadystaticResource[f]) {
        return false;
    }

    if (q && !checkRequestJsCssLimit(f)) {
        setTimeoutFunction('staticResource', f, q);
        return false;
    }

    setInstaticResource(f, true);

    let a = '';
    let b = '';
    let c = '';
    switch (f) {
        case sMouseFriendJ :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'js';
            break;
        case sAboutC :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sChatC :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sForumC :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sForumSlideC :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sFriendC :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sSetC :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sScrollIncidentForumJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sMouseSetJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sSideForumJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sMouseChatJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sMouseAboutMeJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sFuncForumJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sMouseJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sRsaJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sArrFuncJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sFuncDomJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sStyleFuncJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sStrFunc :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sNumFunc :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sMobileDomFuncJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sUserC1 :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sPubC :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sResetC :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sSizeC :
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sJqueryJ :
            // return;
            // console.log('}}}}}}}}}}}}}}}}}>>>>');
            // console.log(jQuery);
            // console.log(typeof jQuery);
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';

            let z = domById('origin_jquery');
            if (z) {
                z.parentNode.removeChild(z);
            }
            break;
        case sBaseJ :
                a = false;
                b = 'writeJsStaticResourceToPage';
                c = 'js';
            break;
        case sFuncJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sPubDomJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sPlatDomJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sPlatDomLogic :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sLogicJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sCnLangJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sApiJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sForumQueryJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sForumApiJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sEncodeJ :
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sForum:
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sChatJ:
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sFriendJ:
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sSetJ:
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sAboutJ:
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        default :
            throw new Error(f);
            break;
    }
    let n = getIncrementUpdateTag(f);
    if (n || q) {
        let t = setTimeout(function () {
            clearTimeout(t);

            let g = n ? 'f=' + astaticResourceAddress[f] + n : 'f=' + astaticResourceAddress[f];
            initstaticResource(g, c, a, f);
        }, 0);
    } else {
        let t = setTimeout(function () {
            clearTimeout(t);

            getstaticResourceFromLocalstorage(f, b, true);
        }, 0);
    }
}
function queryUserLang () {
    if (sUserLangvage) {
        return sUserLangvage;
    }

    let l = myStorage.get(sLocalstorageLangTag);
    if (!l) {
        l = sDefaultLangvage;

        asyn('setLang', l);
    }

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

    sPersonalizedCss = userCss(c);

    asyn('staticResource', sPersonalizedCss);
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
    switch (l) {
        case sDefaultLangvage :
            sNowLang = sCnLangJ;
            break;
        default :
            sNowLang = sCnLangJ;
            break;
    }
    if (!sNowLang) {
        return false;
    }

    asyn('staticResource', sNowLang);
}
/**
 *
 * 加载 js 文件
 *
 */
function loadStaticFile () {
    if (sPlatformTag === sMobileTag) {
        asyn('staticResource', sMouseJ);
    }

    asyn('staticResource', sResetC);

    asyn('staticResource', sSizeC);

    asyn('loadPersonalizedCss');

    asyn('staticResource', sBaseJ);

    asyn('staticResource', sPubDomJ);

    asyn('staticResource', sPlatDomJ);

    asyn('staticResource', sLogicJ);

    asyn('loadLang');

    asyn('staticResource', sPubC);
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
    let t = myDate();
    let y = t.getFullYear();
    let m = parseInt(t.getMonth()) + parseInt(1);
    m = m < 10 ? '0' + m : m;
    let d = t.getDate();
    let h = t.getHours();
    let i = t.getMinutes();
    let s = t.getSeconds();

    myStorage.set(sLastcacheStaticResourceTimeTag + k, y + m + d + h + i + s);
}

/**
 *
 * 跳转其他地址
 *
 */
function jump (u) {
    window.location.href = u;
}
/**
 *
 * 电脑端限制
 *
 * @returns {boolean}
 */
const sAstrictJumpUrl = 'https://www.baidu.com';
function astrict () {
    if (sPlatformTag !== sMobileTag) {
        alert('The computer side is not enabled yet, will jump to ' + sAstrictJumpUrl);

        jump(sAstrictJumpUrl);
        return false;
    }

    return true;
}
/**
 *
 * 获取上一次静态文件缓存时间
 *
 * @param k
 * @returns {*}
 */
function getstaticResourceLastCacheTime (k = '') {
    let t = myStorage.get(sLastcacheStaticResourceTimeTag + k);
    return t ? t : 0;
}
let iBeginTime = 0;
function fileControlBegin () {
    console.log('0000000000000000000000000000000fileControlBegin');
    if (typeof window['getIncrementUpdateTag'] == 'undefined') {
        setTimeoutFunction('fileControlBegin');
        return;
    }

    if (!astrict()) {
        return false;
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

    requires([sPubDomJ], function () {
        asyn('showBaseShade');
    });

    asyn('loadStaticFile');
}

/**
 *
 * 设置正在读取的静态资源
 *
 * @param j 文件路径 type string
 * @param b 加载中 type boole
 */
function setInstaticResource (j = '', b = false) {
    if (b) {
        aInstaticResource[j] = true;
        aAllreadystaticResource[j] = false;
        return;
    }

    aInstaticResource[j] = false;
    aAllreadystaticResource[j] = true;
}
/**
 *
 * 动态加载js
 *
 * @param j 依赖文件 type array
 * @param c 回调函数 type function
 */
let aAllreadystaticResource = [];
let aInstaticResource = [];
function requires (j = '', c = '') {
    let l = j.length;
    let n = 0;
    let y = [];
    let a = [];
    for (let i in j) {
        if (aAllreadystaticResource[j[i]] && checkstaticResource(j[i])) {
            n = parseInt(n) + parseInt(1);
            a.push(j[i]);
        } else {
            y.push(j[i]);
            // console.log(y);
        }

        if (n == l) {
            c();
            return;
        }
    }

    if (a) {
        for (let b in a) {
            for (let c in j) {
                if (j[c] == a[b]) {
                    j.splice(c, 1);
                }
            }
        }
    }

    if (y) {
        for (let i in y) {
            asyn('staticResource', y[i]);
        }
    }

    asyn('requires', j, c);
}
/**
 *
 * 检查静态资源是否加载完成
 *
 * @param j
 */
function checkstaticResource (j) {
    let a = '';
    switch (j) {
        case sFuncJ :
            a = window['functionBegin'];
            break;
        case sEncodeJ :
            a = window['encodeBegin'];
            break;
        case sMobileDomFuncJ :
            a = window['mebileDomBegin'];
            break;
        case sStrFunc :
            a = window['strFuncegin'];
            break;
        case sNumFunc :
            a = window['numBegin'];
            break;
        case sArrFuncJ :
            a = window['arrFuncBegin'];
            break;
        case sMouseAboutMeJ :
            a = window['mouseAboutMeBegin'];
            break;
        case sMouseChatJ :
            a = window['mouseChatBegin'];
            break;
        case sSideForumJ :
            a = window['sideForumBegin'];
            break;
        case sMouseFriendJ :
            a = window['mouseFriendBegin'];
            break;
        case sMouseSetJ :
            a = window['mouseSetBegin'];
            break;
        case sScrollIncidentForumJ :
            a = window['forumScrollBegin'];
            break;
        case sCnLangJ :
            a = window['cn_langBegin'];
            break;
        case sFuncForumJ :
            a = window['funcForumBegin'];
            break;
        case sPlatDomLogic :
            a = window['platDomLogicBegin'];
            break;
        case sApiJ :
            a = window['apiBegin'];
            break;
        case sLogicJ :
            a = window['logicBegin'];
            break;
        case sPubDomJ :
            a = window['platformBegin'];
            break;
        case sJqueryJ :
            console.log('{{{{{{{{{{{{{{{{{{{{{{');
            if (typeof jQuery == 'undefined') {
                a = false;
            } else {
                a = typeof jQuery == 'function' ? true : false;
            }
            console.log(typeof jQuery);
            console.log(a);
            break;
        case sPlatDomJ :
            a = window['platformBegin'];
            break;
        case sForum :
            a = window['forumBegin'];
            break;
        case sForumQueryJ :
            a = window['forumQueryBegin'];
            break;
        case sForumApiJ :
            a = window['forumApiBegin'];
            break;
        case sFuncDomJ :
            a = window['funcDomBegin'];
            break;
        case sMouseJ :
            a = window['mouseBegin'];
            break;
        case sStyleFuncJ :
            a = window['styleFuncBegin'];
            break;
        case sBaseJ :
            a = window['baseBegins'];
            break;
        case sForumSlideC :
            a = aAllreadystaticResource[sForumSlideC];
            break;
        case sForumC :
            a = aAllreadystaticResource[sForumC];
            break;
        case sResetC :
            a = aAllreadystaticResource[sResetC];
            break;
        case sPubC :
            a = aAllreadystaticResource[sPubC];
            break;
        case sSizeC :
            a = aAllreadystaticResource[sSizeC];
            break;
        default :
            throw new Error(j);
            break;
    }

    // return a || typeof a != 'undefined' ? true : false;
    if (a) {
        return true;
    }

    if (!a) {
        return false;
    }

    if (typeof a != 'undefined') {
        return false;
    }
}

window.onload = fileControlBegin();
