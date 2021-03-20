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
        // console.log(f);
        // console.log('asyn f is null');
        return false;
    }

    if (typeof window[f] != 'function') {
        // console.log('==========================asyn ' + f + ' is not function, so settimeout retry to asyn ');

        let t = setTimeout(function () {
            clearTimeout(t);

            asyn(f, a, b);
        }, 0);
        return;
    }
    // console.log('asyn ' + f + ' is function, so will to do ' + f + ' ');

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
    }, 0);
}

/**
 *
 * 引入 js 文件
 *
 * @param s 文件完整路径 type string
 * @param b
 * @param c callback 函数  type string
 * @returns {boolean}
 */
function loadJs (s = '', b = true, c = false) {
    if (!s) {
        return false;
    }

    let o = document.createElement('script');
    o.type = 'text/javascript';
    o.src = s;
    // if (b) {
    //     o.async = 'async';
    // }
    // o.defer = 'defer';
    o.charset = sCharset;

    if (c) {
        if (o.addEventListener) {
            o.addEventListener('load', function () {
                if (typeof window[c] == 'undefined') {
                    setTimeoutFunction(c);
                    return;
                }

                window[c]();
            }, false);
        } else if (o.attachEvent) {
            o.attachEvent('onreadystatechange', function () {
                var target = window.event.srcElement;
                if (target.readyState == 'loaded') {
                    window[c]();
                }
            });
        }
    }

    asyn('asynLoadJs', o);
}

/**
 *
 * 插入script 标签节点
 *
 * @param o
 */
function asynLoadJs (o) {
    insertAfter(o, FirstScriptTag());
}

/**
 *
 * 第一个 script 标签 节点
 *
 * @type {string}
 */
let oIndexScriptTag = '';
function FirstScriptTag () {
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
 * 根据class 获取节点
 *
 * @param c
 * @returns {boolean}
 */
function domByClass (c) {
    let o = oBodyDom.getElementsByClassName(c);
    return o.length > 0 ? o : false;
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
        p.insertBefore(n,j.nextSibling);
    }
}

/**
 *
 * 获取毫秒时间戳
 *
 * @returns {number}
 */
function getMillisecondTime () {
    return new Date().getTime();
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
 * 是否添加时间戳字符串静态文件版本号
 *
 * @type {string}
 */
let sFileVersionSuffix = '';
function jsCssVersionSuffix () {
    sFileVersionSuffix = sFileVersionSuffix ? sFileVersionSuffix : debug ? '-' + getMillisecondTime() : '';
    return sFileVersionSuffix;
}

const sIndexScriptTagId = 'first_js_script'; // 第一个 script 标签
let sCharset = 'utf-8'; // 编码格式
const debug = true; // debug
const sBaseJs = '/static_resource/js/base.js?ver=1' + jsCssVersionSuffix(); // base js 路径
loadJs(sBaseJs);
