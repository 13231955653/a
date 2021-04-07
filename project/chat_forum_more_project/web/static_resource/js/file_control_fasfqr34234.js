//编码相关-----------------
const sCharset = 'utf-8'; // 编码格式
//编码相关===============
//静态文件相关-----------------
const sJsDynamicPrefix = 'js_dynamic';
const sJsDynamicHostNumber = 7;
const sCssDynamicPrefix = 'css_dynamic';
const sCssDynamicHostNumber = 7;
//静态文件相关==========================
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

    // let p = localstoragePage (k);s
    // p = p ? p : sLocalstorageBeginPage;

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
            console.log('zzzzzzzzzzzzaaaaaaaaaaasssccdfeweeee');
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
        // if (typeof event.data.after == 'undefined') {
        //     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        //     console.log(event.data.after);
        //     console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        // }

        // console.log(typeof event.data.after);
        // if (typeof event.data.after == 'function') {
            window[event.data.after](event.data.message);
            // return;
        // }

        // console.log(event.data.after);
        // setTimeoutFunction(event.data.after, event.data.message);
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
    console.log('11111111111111111111111');
    // console.log(k);
    // console.log(f);
    if (!k || !f) {
        console.log('22222222222222');
        return false;
    }

    console.log('3333333333333333');
    let p = localstoragePage(k);
    // if (!p) {
    //     window[f](k);
    //     return;
    // }

    console.log('44444444444444');
    p = storagePage(p);
    if (!p) {
        console.log('55555555555555');
        window[f](false);
        return false;
    }

    console.log('66666666666666666666666');
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

    // console.log('zzzzzzzzzzzzz-----------aaaaaaaaa==========2222222222');
    // console.log(j);
    // console.log(f);
    // console.log(b);
    let t = setTimeout(function () {
        clearTimeout(t);

        queryLocalstorage(sStaticResourceLocalstoragePrefix + j, f, b);
        // queryLocalstorage(j, f, b);
    }, 1);
}
/**
 *
 * 设置js host数组
 *
 * @returns {boolean}
 */
let aJsHost = [];
let iJsHostNumber = 0;
function setJsHosts () {
    let i = 0;
    let o = window.location.host;
    for (i; i < sJsDynamicHostNumber; i++) {
        aJsHost.push(sBaseProtocol + i + '.' + sJsDynamicPrefix + '.' + o);
    }
    iJsHostNumber = aJsHost.length;

    return true;
}
/**
 *
 * 设置css host数组
 *
 * @returns {boolean}
 */
let aCssHost = [];
let iCssHostNumber = 0;
function setCssHosts () {
    let i = 0;
    let o = window.location.host;
    for (i; i < sCssDynamicHostNumber; i++) {
        aCssHost.push(sBaseProtocol + i + '.' + sCssDynamicPrefix + '.' + o);
    }
    iCssHostNumber = aCssHost.length;

    return true;
}
/**
 *
 * hash 计算当前应该请求哪个js地址
 *
 * @param u
 * @returns {boolean|*}
 */
function allocationJsHost (u = '') {
    if (!u) {
        return false;
    }

    return aJsHost[hashFunc(u, iJsHostNumber)];
}
/**
 *
 * hash 计算当前应该请求哪个css地址
 *
 * @param u
 * @returns {boolean|*}
 */
function allocationCssHost (u = '') {
    if (!u) {
        return false;
    }

    return aCssHost[hashFunc(u, iCssHostNumber)];
}
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
    return '&v=' + a + md5(a + '_jhj978)_**%42' + b) + '_' + b;
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
    console.log('dasdasdasdasd-----------------------');
    console.log(j);
    console.log(t);
    console.log(c);
    console.log(r);
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

    let u = '';
    switch (t) {
        case 'js' :
            u = allocationJsHost(j) + '/a.php?' + j;
            break;
        case 'css' :
            u = allocationCssHost(j) + '/a.php?' + j;
            break;
    }
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

                // b = true;

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
        console.log('zzzzzzzzzzzzppppppppppqqqqqqqqqqqqqqquuuuu');
        console.log(aNeedIncrementstaticResourceCache);
        // console.log(b);
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
    console.log(aNeedIncrementstaticResourceCache[k]);
    console.log('zzzzzzzzzzzzzzzuuuuuuuuuuuuaaaaaaaaaaaaaaa');

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

    // console.log(v);
    // console.log('sssssssssssllllllllzzzzzzzzzzzziiiiiiiiiii');
    // console.log(aNeedIncrementstaticResourceCache);
    // console.log(aNeedIncrementstaticResourceCache[k]);
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
    // if (f === sJqueryJ) {
    //     console.log(aInstaticResource);
    //     console.log(aAllreadystaticResource);
    //     console.log('zzzzzzzzzzzzzzzz');
    // }
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
            // a = 'afterLoadMouseFriend';
            // b = 'afterLoadMouseFriend1';
            // c = 'js';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'js';
            break;
        case sAboutC :
            // a = 'afterLoadAboutC';
            // b = 'afterLoadAboutC1';
            // c = 'css';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sChatC :
            // a = 'afterLoadChatC';
            // b = 'afterLoadChatC1';
            // c = 'css';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sForumC :
            // a = 'afterLoadForumC';
            // b = 'afterLoadForumC1';
            // c = 'css';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sForumSlideC :
            // a = 'afterLoadForumSlideC';
            // b = 'afterLoadForumSlideC1';
            // c = 'css';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sFriendC :
            // a = 'afterLoadFriendC';
            // b = 'afterLoadFriendC1';
            // c = 'css';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sSetC :
            // a = 'afterLoadSetC';
            // b = 'afterLoadSetC1';
            // c = 'css';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sMouseSetJ :
            // a = 'afterLoadMouseSet';
            // b = 'afterLoadMouseSet1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sMouseForumJ :
            // a = 'afterLoadMouseForum';
            // b = 'afterLoadMouseForum1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sMouseChatJ :
            // a = 'afterLoadMouseChat';
            // b = 'afterLoadMouseChat1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sMouseAboutMeJ :
            // a = 'afterLoadMouseAboutMe';
            // b = 'afterLoadMouseAboutMe1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sFuncForumJ :
            // a = 'afterLoadFuncForum';
            // b = 'afterLoadFuncForum1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sMouseJ :
            // a = 'afterLoadMouse';
            // b = 'afterLoadMouse1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sRsaJ :
            // a = 'afterLoadRsa';
            // b = 'afterLoadRsa1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sArrFuncJ :
            // a = 'afterLoadArrayFunc';
            // b = 'afterLoadArrayFunc1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sFuncDomJ :
            // a = 'afterLoadDomFunc';
            // b = 'afterLoadDomFunc1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sStyleFuncJ :
            // a = 'afterLoadStyleFunc';
            // b = 'afterLoadStyleFunc1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        // case sMd5J :
        //     // a = 'afterLoadMd5';
        //     // b = 'afterLoadMd51';
        //     // c = 'js';
        //     a = false;
        //     b = 'writeJsStaticResourceToPage';
        //     c = 'js';
        //     break;
        case sStrFunc :
            // a = 'afterLoadStrFunc';
            // b = 'afterLoadStrFunc1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sMobileDomFuncJ :
            // a = 'afterLoadMobileDomFunc';
            // b = 'afterLoadMobileDomFunc1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sUserC1 :
            // a = 'afterLoadUserColor';
            // b = 'afterLoadUserColor1';
            // c = 'css';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sPubC :
            // a = 'afterLoadPublicCss';
            // b = 'afterLoadPublicCss1';
            // c = 'css';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sResetC :
            // a = 'afterLoadResetCss';
            // b = 'afterLoadResetCss1';
            // c = 'css';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sSizeC :
            // a = 'afterLoadSizeC';
            // b = 'afterLoadSizeC1';
            // c = 'css';
            a = false;
            b = 'writeCssStaticResourceToPage';
            c = 'css';
            break;
        case sJqueryJ :
            // console.log('***************************');
            // a = 'afterLoadLocalJquery';
            // b = 'afterLoadLocalJquery1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sBaseJ :
        //     a = 'afterLoadBaseJs';
        //     b = 'afterLoadBaseJs1';
        //     c = 'js';
                a = false;
                b = 'writeJsStaticResourceToPage';
                c = 'js';
            break;
        case sFuncJ :
            // a = 'afterLoadFunctionJs';
            // b = 'afterLoadFunctionJs1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
            break;
        case sPubDomJ :
            // a = 'afterLoadDomJs';
            // b = 'afterLoadDomJs1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sPlatDomJ :
            // a = 'afterLoadPlatformDomJs';
            // b = 'afterLoadPlatformDomJs1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sPlatDomLogic :
        //     a = 'afterLoadPlatDomLogic';
        //     b = 'afterLoadPlatDomLogic1';
        //     c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sLogicJ :
            // a = 'afterLoadLogicJs';
            // b = 'afterLoadLogicJs1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sCnLangJ :
            // a = 'afterLoadLang';
            // b = 'afterLoadLang1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sApiJ :
            // a = 'afterLoadApi';
            // b = 'afterLoadApi1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sForumQueryJ :
            // a = 'afterLoadForumQuery';
            // b = 'afterLoadForumQuery1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sForumApiJ :
            // a = 'afterLoadForumApi';
            // b = 'afterLoadForumApi1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sEncodeJ :
            // a = 'afterLoadEncode';
            // b = 'afterLoadEncode1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sForum:
            // a = 'afterLoadPage';
            // b = 'afterLoadPage1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sChatJ:
            // a = 'afterLoadPage';
            // b = 'afterLoadPage1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sFriendJ:
            // a = 'afterLoadPage';
            // b = 'afterLoadPage1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sSetJ:
            // a = 'afterLoadPage';
            // b = 'afterLoadPage1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
        case sAboutJ:
            // a = 'afterLoadPage';
            // b = 'afterLoadPage1';
            // c = 'js';
            a = false;
            b = 'writeJsStaticResourceToPage';
            c = 'js';
            break;
    }
    let n = getIncrementUpdateTag(f);
    if (n || q) {
        console.log('=====================');
        let t = setTimeout(function () {
            clearTimeout(t);

            let g = n ? 'f=' + astaticResourceAddress[f] + n : 'f=' + astaticResourceAddress[f];
            initstaticResource(g, c, a, f);
        }, 0);
    } else {
        console.log('dasdasdaaaaaaaaaaaaaaa');
        let t = setTimeout(function () {
            clearTimeout(t);

            getstaticResourceFromLocalstorage(f, b, true);
        }, 0);
    }
}
// function afterstaticResource (v = '', t = '') {
//     iAllreadystaticResource += parseInt(1);
//
//     asyn('writeStaticResourceToPage', v, t);
// }
// function afterLoadUserColor () {
//     setInstaticResource(sPersonalizedCss, false);
// }
// function afterLoadUserColor1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'css');
//
//         asyn('afterLoadUserColor');
//
//         return;
//     }
//
//     aInstaticResource[sPersonalizedCss] = false;
//     asyn('staticResource', sPersonalizedCss, true);
// }
// function afterLoadSetC () {
//     setInstaticResource(sSetC, false);
// }
// function afterLoadSetC1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'css');
//
//         asyn('afterLoadSetC');
//
//         return;
//     }
//
//     aInstaticResource[sSetC] = false;
//     asyn('staticResource', sSetC, true);
// }
// function afterLoadAboutC () {
//     setInstaticResource(sAboutC, false);
// }
// function afterLoadAboutC1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'css');
//
//         asyn('afterLoadAboutC');
//
//         return;
//     }
//
//     aInstaticResource[sAboutC] = false;
//     asyn('staticResource', sAboutC, true);
// }
// function afterLoadFriendC () {
//     setInstaticResource(sFriendC, false);
// }
// function afterLoadFriendC1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'css');
//
//         asyn('afterLoadFriendC');
//
//         return;
//     }
//
//     aInstaticResource[sFriendC] = false;
//     asyn('staticResource', sFriendC, true);
// }
// function afterLoadChatC () {
//     setInstaticResource(sChatC, false);
// }
// function afterLoadChatC1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'css');
//
//         asyn('afterLoadChatC');
//
//         return;
//     }
//
//     aInstaticResource[sChatC] = false;
//     asyn('staticResource', sChatC, true);
// }
// function afterLoadForumC () {
//     aAllreadyLoadCss[sForumC] = true;
//     setInstaticResource(sForumC, false);
// }
// function afterLoadForumC1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'css');
//
//         asyn('afterLoadForumC');
//
//         return;
//     }
//
//     aInstaticResource[sForumC] = false;
//     asyn('staticResource', sForumC, true);
// }
// function afterLoadForumSlideC () {
//     aAllreadyLoadCss[sForumSlideC] = true;
//     setInstaticResource(sForumSlideC, false);
// }
// function afterLoadForumSlideC1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'css');
//
//         asyn('afterLoadForumSlideC');
//
//         return;
//     }
//
//     aInstaticResource[sForumSlideC] = false;
//     asyn('staticResource', sForumSlideC, true);
// }
// function afterLoadPublicCss () {
//     aAllreadyLoadCss[sPubC] = true;
//     setInstaticResource(sPubC, false);
// }
// function afterLoadPublicCss1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'css');
//
//         asyn('afterLoadPublicCss');
//
//         return;
//     }
//
//     aInstaticResource[sPubC] = false;
//     asyn('staticResource', sPubC, true);
// }
// function afterLoadSizeC () {
//     aAllreadyLoadCss[sSzieC] = true;
//     setInstaticResource(sSzieC, false);
// }
// function afterLoadSizeC1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'css');
//
//         asyn('afterLoadSizeC');
//
//         return;
//     }
//
//     aInstaticResource[sSzieC] = false;
//     asyn('staticResource', sSzieC, true);
// }
// function afterLoadResetCss () {
//     aAllreadyLoadCss[sResetC] = true;
//     setInstaticResource(sResetC, false);
// }
// function afterLoadResetCss1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'css');
//
//         asyn('afterLoadResetCss');
//
//         return;
//     }
//
//     aInstaticResource[sResetC] = false;
//     asyn('staticResource', sResetC, true);
// }
// function afterLoadPage () {
//     asyn('afterLoadPageJs');
//
//     setInstaticResource(sNowPageJs, false);
// }
// function afterLoadPage1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadPageJs');
//
//         return;
//     }
//
//     aInstaticResource[sNowPageJs] = false;
//     asyn('staticResource', sNowPageJs, true);
// }
// function afterLoadLocalJquery () {
//     setInstaticResource(sJqueryJ, false);
// }
// function afterLoadLocalJquery1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadLocalJquery');
//
//         return;
//     }
//
//     aInstaticResource[sJqueryJ] = false;
//     asyn('staticResource', sJqueryJ, true);
// }
// function afterLoadEncode () {
//     setInstaticResource(sEncodeJ, false);
//     asyn('encodeBegin');
// }
// function afterLoadEncode1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadEncode');
//
//         return;
//     }
//
//     aInstaticResource[sEncodeJ] = false;
//     asyn('staticResource', sEncodeJ, true);
// }
// function afterLoadForumApi () {
//     setInstaticResource(sForumApiJ, false);
//     asyn('forumApiBegin');
// }
// function afterLoadForumApi1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadForumApi');
//
//         return;
//     }
//
//     aInstaticResource[sForumApiJ] = false;
//     asyn('staticResource', sForumApiJ, true);
// }
// function afterLoadForumQuery () {
//     setInstaticResource(sForumQueryJ, false);
//     asyn('forumQueryBegin');
// }
// function afterLoadForumQuery1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadForumQuery');
//
//         return;
//     }
//
//     aInstaticResource[sForumQueryJ] = false;
//     asyn('staticResource', sForumQueryJ, true);
// }
// function afterLoadApi () {
//     setInstaticResource(sApiJ, false);
//     asyn('apiBegin');
// }
// function afterLoadApi1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadApi');
//
//         return;
//     }
//
//     aInstaticResource[sApiJ] = false;
//     asyn('staticResource', sApiJ, true);
// }
// function afterLoadLang () {
//     setInstaticResource(sNowLang, false);
//     asyn(sNowLang + 'Begin');
// }
// function afterLoadLang1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadLang');
//
//         return;
//     }
//
//     aInstaticResource[sNowLang] = false;
//     asyn('staticResource', sNowLang, true);
// }
// function afterLoadBaseJs () {
//     setInstaticResource(sBaseJ, false);
//     asyn('baseBegins');
// }
// function afterLoadBaseJs1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadBaseJs');
//
//         return;
//     }
//
//     aInstaticResource[sBaseJ] = false;
//     asyn('staticResource', sBaseJ, true);
// }
// function afterLoadMd5 () {
//     asyn('md5Begin');
//     setInstaticResource(sMd5J, false);
// }
// function afterLoadMd51 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadMd5');
//
//         return;
//     }
//
//     aInstaticResource[sMd5J] = false;
//     asyn('staticResource', sMd5J, true);
// }
// function afterLoadMouseSet () {
//     asyn('mouseSetBegin');
//     setInstaticResource(sMouseSetJ, false);
// }
// function afterLoadMouseSet1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadMouseSet');
//
//         return;
//     }
//
//     aInstaticResource[sMouseSetJ] = false;
//     asyn('staticResource', sMouseSetJ, true);
// }
// function afterLoadMouseFriend () {
//     asyn('mouseFriendBegin');
//     setInstaticResource(sMouseFriendJ, false);
// }
// function afterLoadMouseFriend1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadMouseFriend');
//
//         return;
//     }
//
//     aInstaticResource[sMouseFriendJ] = false;
//     asyn('staticResource', sMouseFriendJ, true);
// }
// function afterLoadMouseForum () {
//     asyn('mouseForumBegin');
//     setInstaticResource(sMouseForumJ, false);
// }
// function afterLoadMouseForum1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadMouseForum');
//
//         return;
//     }
//
//     aInstaticResource[sMouseForumJ] = false;
//     asyn('staticResource', sMouseForumJ, true);
// }
// function afterLoadMouseChat () {
//     asyn('mouseChatBegin');
//     setInstaticResource(sMouseChatJ, false);
// }
// function afterLoadMouseChat1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadMouseChat');
//
//         return;
//     }
//
//     aInstaticResource[sMouseChatJ] = false;
//     asyn('staticResource', sMouseChatJ, true);
// }
// function afterLoadFuncForum () {
//     asyn('funcForumBegin');
//     setInstaticResource(sFuncForumJ, false);
// }
// function afterLoadFuncForum1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadFuncForum');
//
//         return;
//     }
//
//     aInstaticResource[sFuncForumJ] = false;
//     asyn('staticResource', sFuncForumJ, true);
// }
// function afterLoadMouseAboutMe () {
//     asyn('mouseAboutMeBegin');
//     setInstaticResource(sMouseAboutMeJ, false);
// }
// function afterLoadMouseAboutMe1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadMouseAboutMe');
//
//         return;
//     }
//
//     aInstaticResource[sMouseAboutMeJ] = false;
//     asyn('staticResource', sMouseAboutMeJ, true);
// }
// function afterLoadMouse () {
//     asyn('mouseBegin');
//     setInstaticResource(sMouseJ, false);
// }
// function afterLoadMouse1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadMouse');
//
//         return;
//     }
//
//     aInstaticResource[sMouseJ] = false;
//     asyn('staticResource', sMouseJ, true);
// }
// function afterLoadRsa () {
//     asyn('arrayFunctionBegin');
//     setInstaticResource(sRsaJ, false);
// }
// function afterLoadRsa1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadRsa');
//
//         return;
//     }
//
//     aInstaticResource[sRsaJ] = false;
//     asyn('staticResource', sRsaJ, true);
// }
// function afterLoadStyleFunc () {
//     asyn('styleFuncBegin');
//     setInstaticResource(sStyleFuncJ, false);
// }
// function afterLoadStyleFunc1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadStyleFunc');
//
//         return;
//     }
//
//     aInstaticResource[sStyleFuncJ] = false;
//     asyn('staticResource', sStyleFuncJ, true);
// }
// function afterLoadDomFunc () {
//     asyn('arrayFunctionBegin');
//     setInstaticResource(sFuncDomJ, false);
// }
// function afterLoadDomFunc1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadDomFunc');
//
//         return;
//     }
//
//     aInstaticResource[sFuncDomJ] = false;
//     asyn('staticResource', sFuncDomJ, true);
// }
// function afterLoadArrayFunc () {
//     asyn('arrayFunctionBegin');
//     setInstaticResource(sArrFuncJ, false);
// }
// function afterLoadArrayFunc1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadArrayFunc');
//
//         return;
//     }
//
//     aInstaticResource[sArrFuncJ] = false;
//     asyn('staticResource', sArrFuncJ, true);
// }
// function afterLoadStrFunc () {
//     asyn('stringFunctionBegin');
//     setInstaticResource(sStrFunc, false);
// }
// function afterLoadStrFunc1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadStrFunc');
//
//         return;
//     }
//
//     aInstaticResource[sStrFunc] = false;
//     asyn('staticResource', sStrFunc, true);
// }
// function afterLoadMobileDomFunc () {
//     asyn('mebileDomBegin');
//     setInstaticResource(sMobileDomFuncJ, false);
// }
// function afterLoadMobileDomFunc1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadMobileDomFunc');
//
//         return;
//     }
//
//     aInstaticResource[sMobileDomFuncJ] = false;
//     asyn('staticResource', sMobileDomFuncJ, true);
// }
// /**
//  *
//  * function js 加载完回调函数
//  *
//  */
// function afterLoadFunctionJs () {
//     asyn('functionBegin');
//     setInstaticResource(sFuncJ, false);
// }
// function afterLoadFunctionJs1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadFunctionJs');
//
//         return;
//     }
//
//     aInstaticResource[sFuncJ] = false;
//     asyn('staticResource', sFuncJ, true);
// }
// /**
//  *
//  * 加载完 dom js 函数回调函数
//  *
//  */
// function afterLoadDomJs () {
//     setInstaticResource(sPubDomJ, false);
//     asyn('domBegin');
// }
// function afterLoadDomJs1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadDomJs');
//
//         return;
//     }
//
//     aInstaticResource[sPubDomJ] = false;
//     asyn('staticResource', sPubDomJ, true);
// }
// function afterLoadPlatDomLogic () {
//     setInstaticResource(sPlatDomLogic, false);
//     asyn('platformBegin');
// }
// function afterLoadPlatDomLogic1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadPlatDomLogic');
//
//         return;
//     }
//
//     aInstaticResource[sPlatDomLogic] = false;
//     asyn('staticResource', sPlatDomLogic, true);
// }
// function afterLoadPlatformDomJs () {
//     setInstaticResource(sPlatDomJ, false);
//     asyn('platformBegin');
// }
// function afterLoadPlatformDomJs1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadPlatformDomJs');
//
//         return;
//     }
//
//     aInstaticResource[sPlatDomJ] = false;
//     asyn('staticResource', sPlatDomJ, true);
// }
// /**
//  *
//  * 加载 逻辑 logic js 回调函数
//  *
//  */
// function afterLoadLogicJs () {
//     setInstaticResource(sLogicJ, false);
//     asyn('logicBegin');
// }
// function afterLoadLogicJs1 (v = '') {
//     if (v) {
//         asyn('afterstaticResource', v, 'js');
//
//         asyn('afterLoadLogicJs');
//
//         return;
//     }
//
//     aInstaticResource[sLogicJ] = false;
//     asyn('staticResource', sLogicJ, true);
// }
//用户语言
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

    asyn('staticResource', sJqueryJ);

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
    // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
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

    setStatusResourceHost();

    requires([sPubDomJ], function () {
        asyn('showBaseShade');
    });

    // requires([sMd5J], function () {
        asyn('loadStaticFile');
    // });
}

function setStatusResourceHost () {
    setJsHosts();

    setCssHosts();
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
    for (let i in j) {
        if (aAllreadystaticResource[j[i]] && checkstaticResource(j[i])) {
            n = parseInt(n) + parseInt(1);
        } else {
            y.push(j[i]);
        }

        if (n == l) {
            c();
            return;
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
            a = window['stringFunctionBegin'];
            break;
        case sArrFuncJ :
            a = window['arrayFunctionBegin'];
            break;
        // case sMd5J :
        //     a = window['md5Begin'];
        //     break;
        case sMouseAboutMeJ :
            a = window['mouseAboutMeBegin'];
            break;
        case sMouseChatJ :
            a = window['mouseChatBegin'];
            break;
        case sMouseForumJ :
            a = window['mouseForumBegin'];
            break;
        case sMouseFriendJ :
            a = window['mouseFriendBegin'];
            break;
        case sMouseSetJ :
            a = window['mouseSetBegin'];
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
            a = typeof jQuery != 'undefined' ? true : false;
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

    return a || typeof a != 'undefined' ? true : false;
}
// let aAllreadyLoadCss = [];

window.onload = fileControlBegin();
