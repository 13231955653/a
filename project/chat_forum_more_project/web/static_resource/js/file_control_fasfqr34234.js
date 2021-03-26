//url地址相关---------------------
const sBaseProtocol = window.location.protocol + '/' + '/';

const sBaseHostSonNumber = 15; //静态文件子域名数量
//url地址相关=================================

//meta标签相关----------------
const sFinalMetaTagId = 'copyright_content';
//meta标签相关=====================

//时间相关---------------------
const sUserLastUseTimeTag = 'user_last_use';
const iRequertTimeout = 9000;
// const iRequertLangJsTimeout = 5000;
// const iMaxLoadOriginJqueryWaitTime = 5000;
const iCheckJqueryLimitTime = 5000;
//时间相关=======================

//语言相关-----------
let sLangNow = '';
//语言相关===========

//id class tag相关--------------------
const oDomStorageId = 'storage_father';
const sOriginJqueryId = 'origin_jquery';
//id class tag相关=================

//localstorage相关----------------------------
const iMaxLocalstorageSize = 3670016;
const sOriginLocalstorageSizeKey = 'origin_localstorage_size';
const sStorageOriginsSonPrefix = 'storage';
const sStoragePage = 'storage.html';
// const sLocalstorageTagMd5Salt = '______9*^&*%^$%$67dasy~`<>?dg';
const sLocalstorageLangTag = 'user_lang';
const sLocalstorgaeUserPersonalizedColorKey = 'user_personlized_color';
// const sLocalstorgaeNowPageTag = 'localstorage_cache_now_page';
const sLocalstorageBeginPage = 0;
//localstorage相关=============================

//用户自定义相关-------------------
const iDefaultUserPersonalizedColor = 1;
const sDefaultLangvage = 'cn';
let sUserLangvage = '';
let sPersonlizedColor = '';
//用户自定义相关===================

//平台 相关----------------
/**
 *
 * 检查是否手机端
 *
 * @type {string}
 */
let sPlatformTag = false;
const sMobileTag = 'mobile';
const sComputerTag = 'computer';
function platformTag () {
    if (sPlatformTag) {
        return sPlatformTag;
    }

    let u = navigator.userAgent;
    let m = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    sPlatformTag = sComputerTag;

    //根据userAgent判断是否是手机
    for (let v = 0; v < m.length; v++) {
        if (u.indexOf(m[v]) > 0) {
            sPlatformTag = sMobileTag;
            break;
        }
    }

    return sPlatformTag;
}
platformTag();
//平台 相关================

//class id tag 相关----------------
const sIndexScriptTagId = 'first_js_script'; // 第一个 script 标签
//class id tag 相关===============

//静态文件相关---------------------------
const sBaseJs = '/static_resource/js/base.js'; // base js 路径
const sIndexJs = '/static_resource/js/index.js';
const sFunctionJs = '/static_resource/js/public/function.js';
const sJqueryJs = '/static_resource/js/public/jquery.js';
const sLogicJs = '/static_resource/js/' + platformTag() + '/logic.js';
const sDomJs = '/static_resource/js/public/dom/public_dom.js';
const sBaseEncodeJs = '/static_resource/js/public/encode.js';
const sCnLang = '/static_resource/js/lang/cn.js';
const sEnLang = '/static_resource/js/lang/en.js';
const sPlatformDomJs = '/static_resource/js/' + platformTag() + '/dom/public_dom.js';
const sForumJs = '/static_resource/js/' + platformTag() + '/page/forum.js';
const sChatJs = '/static_resource/js/' + platformTag() + '/page/chat.js';
const sFriendJs = '/static_resource/js/' + platformTag() + '/page/friend.js';
const sSettingJs = '/static_resource/js/' + platformTag() + '/page/setting.js';
const sAboutMeJs = '/static_resource/js/' + platformTag() + '/page/about_me.js';
const sApiJs = '/static_resource/js/public/query/query.js';

const sResetCss = '/static_resource/css/public/reset.css';
const sPublicCss = '/static_resource/css/public/' + platformTag() + '/public.css';
const sUserColor1 = '/static_resource/css/personalized/color/1.css';
const sUserColor2 = '/static_resource/css/personalized/color/2.css';
const sUserColor3 = '/static_resource/css/personalized/color/3.css';
//静态文件相关============================

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
 * @param p 文件类型 type string
 */
function cacheStaticResource (j = '', v = '', p = '') {
    let t = setTimeout(function () {
        clearTimeout(t);

        iAllreadyLoadStaticResource += parseInt(1);

        setLocalstorage(j, v, false, false, true);
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
            console.log('ssssssssssssssssssssssss');
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
//定时器===============

// /**
//  *
//  * 写dom，次最大父dom
//  *
//  * @type {boolean}
//  */
// function wirteStorgaeDom () {
//     let a = [
//         oDomStorageId,
//     ];
//
//     let s = '';
//     for (let i in a) {
//         s += '<div id="' + a[i] + '"></div>';
//     }
//
//     bodyDom().innerHTML = s;
//
//     storageDom().style.display = 'none';
//     asyn('writeLocalstorageIframe');
// }

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
// /**
//  * 先读取本地localstorage，写对应远程storage页面 iframe dom
//  */
// function writeLocalstorageIframe () {
//     let s = queryLocalstorageCache(sOriginLocalstorageSizeKey);
//
//     let a = jsonConvertFormatForReadNumberKey(s);
//     for (let i in a) {
//         writeStorageDom (storagePage(i));
//     }
// }
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
 * @param k localstorage key  string
 * @param f localstorage callback  string
 * @returns {boolean}
 */
function queryLocalstorage (k = '', f = '') {
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

        localstoragePostMessage(p, {action: 'get', key: k, after: f});
    }, 0);
}
/**
 *
 * 从远程 localstorage 中获取静态资源
 *
 * @param j 文件完整路径 type string
 * @param f 回调函数 type string
 * @returns {string}
 */
function getStaticResourceFromLocalstorage (j = '', f = '') {
    if (!j) {
        return '';
    }

    asyn('queryLocalstorage', j, f);
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
 */
function initStaticResource (j = '', t = '', c = '') {
    if (!j || !t) {
        return false;
    }

    var xhr = '';
    if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    } else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }

    if (!xhr) {
        return;
    }

    xhr.open('GET', allocationHost(j) + incrementArg(t, j), true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let v = xhr.responseText;
            v = v == null ? '' : v;

            asyn('writeStaticResourceToPage', v, t);

            let z = setTimeout(function () {
                clearTimeout(z);

                cacheStaticResource(j, v, t);
            }, 0);
        }
    };

    if (c) {
        asyn(c);
    }
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
        o.innerHTML = v;

        f = firstScriptTag();
    } else if (t === 'css') {
        if (!finalMeta()) {
            setTimeoutFunction('writeStaticResourceToPage', v, t);
            return;
        }

        o = document.createElement('style');
        o.type = 'text/css';
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
    if (q && !checkRequestJsCssLimit(f)) {
        setTimeoutFunction('loadStaticResource', f, q);
        return false;
    }

    let a = '';
    let b = '';
    let c = '';
    switch (f) {
        case sUserColor1 :
            a = 'afterLoadUserColor';
            b = 'afterLoadUserColor1';
            c = 'css';
            break;
        case sUserColor2 :
            a = 'afterLoadUserColor';
            b = 'afterLoadUserColor1';
            c = 'css';
            break;
        case sUserColor3 :
            a = 'afterLoadUserColor';
            b = 'afterLoadUserColor1';
            c = 'css';
            break;
        case sPublicCss :
            a = 'afterLoadPublicCss';
            b = 'afterLoadPublicCss1';
            c = 'css';
            break;
        case sResetCss :
            a = 'afterLoadResetCss';
            b = 'afterLoadResetCss1';
            c = 'css';
            break;
        case sJqueryJs :
            a = 'afterLoadLocalJquery';
            b = 'afterLoadLocalJquery1';
            c = 'js';
            break;
        case sBaseJs :
            a = 'afterLoadBaseJs';
            b = 'afterLoadBaseJs1';
            c = 'js';
            break;
        case sIndexJs :
            a = 'afterLoadIndexJs';
            b = 'afterLoadIndexJs1';
            c = 'js';
            break;
        case sFunctionJs :
            a = 'afterLoadFunctionJs';
            b = 'afterLoadFunctionJs1';
            c = 'js';
            break;
        case sDomJs :
            a = 'afterLoadDomJs';
            b = 'afterLoadDomJs1';
            c = 'js';
            break;
        case sPlatformDomJs :
            a = 'afterLoadPlatformDomJs';
            b = 'afterLoadPlatformDomJs1';
            c = 'js';
            break;
        case sLogicJs :
            a = 'afterLoadLogicJs';
            b = 'afterLoadLogicJs1';
            c = 'js';
            break;
        case sCnLang :
            a = 'afterLoadLang';
            b = 'afterLoadLang1';
            c = 'js';
            break;
        case sEnLang :
            a = 'afterLoadLang';
            b = 'afterLoadLang1';
            c = 'js';
            break;
        case sApiJs :
            a = 'afterLoadApi';
            b = 'afterLoadApi1';
            c = 'js';
            break;
        case sBaseEncodeJs :
            a = 'afterLoadEncode';
            b = 'afterLoadEncode1';
            c = 'js';
            break;
        case sForumJs:
            a = 'afterLoadPage';
            b = 'afterLoadPage1';
            c = 'js';
            break;
        case sChatJs:
            a = 'afterLoadPage';
            b = 'afterLoadPage1';
            c = 'js';
            break;
        case sFriendJs:
            a = 'afterLoadPage';
            b = 'afterLoadPage1';
            c = 'js';
            break;
        case sSettingJs:
            a = 'afterLoadPage';
            b = 'afterLoadPage1';
            c = 'js';
            break;
        case sAboutMeJs:
            a = 'afterLoadPage';
            b = 'afterLoadPage1';
            c = 'js';
            break;
    }

    getIncrementUpdateTag(f);

    if (q) {
        let t = setTimeout(function () {
            clearTimeout(t);

            initStaticResource(f, c, a);
        }, 0);
    } else {
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
}
function afterLoadUserColor1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'css');

        asyn('afterLoadUserColor');

        return;
    }

    asyn('loadStaticResource', sPersonalizedCss, true);
}
function afterLoadPublicCss () {
}
function afterLoadPublicCss1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'css');

        asyn('afterLoadPublicCss');

        return;
    }

    asyn('loadStaticResource', sPublicCss, true);
}
function afterLoadResetCss () {
}
function afterLoadResetCss1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'css');

        asyn('afterLoadResetCss');

        return;
    }

    asyn('loadStaticResource', sResetCss, true);
}
function afterLoadPage () {
    asyn('afterLoadPageJs');
}
function afterLoadPage1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadPageJs');

        return;
    }

    asyn('loadStaticResource', sNowPageJs, true);
}
function afterLoadLocalJquery () {
}
function afterLoadLocalJquery1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadLocalJquery');

        return;
    }

    asyn('loadStaticResource', sJqueryJs, true);
}
function afterLoadEncode () {
    asyn('encodeBegin');
}
function afterLoadEncode1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadEncode');

        return;
    }

    asyn('loadStaticResource', sBaseEncodeJs, true);
}
function afterLoadApi () {
    asyn('apiBegin');
}
function afterLoadApi1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadApi');

        return;
    }

    asyn('loadStaticResource', sApiJs, true);
}
function afterLoadLang () {
    asyn('langBegin');
}
function afterLoadLang1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadLang');

        return;
    }

    let s = '';
    switch (sLangNow) {
        case 'cn' :
            s = sCnLang;
            break;
        case sEnLang :
            s = 'en';
            break;
        default:
            s = sCnLang;
            break;
    }
    asyn('loadStaticResource', s, true);
}
function afterLoadBaseJs () {
    asyn('baseBegins');
}
function afterLoadBaseJs1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadBaseJs');

        return;
    }

    asyn('loadStaticResource', sBaseJs, true);
}
/**
 *
 * index js 加载完回调函数
 *
 */
function afterLoadIndexJs () {
    asyn('indexBegin');
}
function afterLoadIndexJs1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadIndexJs');

        return;
    }

    asyn('loadStaticResource', sIndexJs, true);
}
/**
 *
 * function js 加载完回调函数
 *
 */
function afterLoadFunctionJs () {
    asyn('functionBegin');
}
function afterLoadFunctionJs1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadFunctionJs');

        return;
    }

    asyn('loadStaticResource', sFunctionJs, true);
}
/**
 *
 * 加载完 dom js 函数回调函数
 *
 */
function afterLoadDomJs () {
    asyn('domBegin');
}
function afterLoadDomJs1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadDomJs');

        return;
    }

    asyn('loadStaticResource', sDomJs, true);
}
/**
 *
 * 加载 平台 dom js 回调函数
 *
 */
function afterLoadPlatformDomJs () {
    asyn('platformBegin');
}
function afterLoadPlatformDomJs1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadPlatformDomJs');

        return;
    }

    asyn('loadStaticResource', sPlatformDomJs, true);
}
/**
 *
 * 加载 逻辑 logic js 回调函数
 *
 */
function afterLoadLogicJs () {
    asyn('logicBegin');
}
function afterLoadLogicJs1 (v = '') {
    if (v) {
        asyn('afterLoadStaticResource', v, 'js');

        asyn('afterLoadLogicJs');

        return;
    }

    asyn('loadStaticResource', sLogicJs, true);
}
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
 * 加载用户自定义主题css
 *
 * @param c
 * @returns {boolean}
 */
let sPersonalizedCss = '';
function loadPersonalizedCss (c = false) {
    c = c ? c : queryUserPersonalizedColor();

    sPersonalizedCss = '/static_resource/css/personalized/color/' + c + '.css';

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
    sLangNow = l;
    let y = '';
    switch (l) {
        case 'cn' :
            y = sCnLang;
            break;
        case 'en' :
            y = sEnLang;
            break;
    }
    if (!y) {
        return false;
    }

    asyn('loadStaticResource', y);
}

/**
 *
 * 加载 js 文件
 *
 */
function loadStaticFile () {
    asyn('loadStaticResource', sBaseJs);

    asyn('loadStaticResource', sIndexJs);

    asyn('loadStaticResource', sFunctionJs);

    asyn('loadStaticResource', sDomJs);

    asyn('loadStaticResource', sPlatformDomJs);

    asyn('loadStaticResource', sLogicJs);

    asyn('loadLang');

    asyn('loadStaticResource', sApiJs);

    asyn('loadStaticResource', sBaseEncodeJs);

    let t = setTimeout(function () {
        clearTimeout(t);

        asyn('loadLocalJquery');
    }, iCheckJqueryLimitTime);

    asyn('loadStaticResource', sResetCss);

    asyn('loadStaticResource', sPublicCss);

    asyn('loadPersonalizedCss');
}

function loadLocalJquery () {
    if (typeof jQuery == 'undefined') {
        asyn('loadStaticResource', sJqueryJs);

        let o = domById(sOriginJqueryId);
        o.parentNode.removeChild(o);
    }
}

function localstorageError1 () {
    alert('localstorage error, please retry reload !!! ');
}

function setUserLastUseTime () {
    let t = date();
    let y = t.getFullYear();
    let m = parseInt(t.getMonth()) + parseInt(1);
    m = m < 10 ? '0' + m : m;
    let d = t.getDate();
    let h = t.getHours();
    h = h < 10 ? '0' + h : h;
    myStorage.set(sUserLastUseTimeTag, y + m + d + h);
}

function getUserLastUseTime () {
    iUserLastUsedTime = myStorage.get(sUserLastUseTimeTag);
    return iUserLastUsedTime ? iUserLastUsedTime : 0;
}

let iUserLastUsedTime = 0;
let iBeginTime = 0;
function fileControlBegin () {
    console.log('0000000000000000000000000000000fileControlBegin');
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

    getUserLastUseTime();

    asyn('setUserLastUseTime');

    asyn('showBaseShade');

    asyn('setHosts');

    asyn('loadStaticFile');
}

window.onload = fileControlBegin();
// 修改文件要修改文件名跟版本号
