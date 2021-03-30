const debug = true;
const bGetStaticResourceFromCache = true;

const sIncrementControlJs = 'http://1.js.you.com/increment_control_50468b10091957db.js';
const sFileControlJs = 'http://2.js.you.com/file_control_fasfqr34234.js';

const sScriptTagDomId = 'script_tag';

//编码相关-----------------
const sCharset = 'utf-8'; // 编码格式
//编码相关===============

/**
 *
 * 引入 js 文件
 *
 * @param s 文件完整路径 type string
 * @param c callback 函数  type string
 * @returns {boolean}
 */
function loadJs (s = '', c = false) {
    if (!s) {
        return false;
    }

    let o = document.createElement('script');
    o.type = 'text/javascript';
    o.src = s + (debug ? '?ver=' + new Date().getTime() : '');
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

    document.getElementById(sScriptTagDomId).appendChild(o);
}

function indexBegin () {
    console.log('-----------------indexBegin');

    loadJs(sIncrementControlJs, 'staticResourceAddress');

    loadJs(sFileControlJs, 'fileControlBegin');
}

window.onload = indexBegin();
