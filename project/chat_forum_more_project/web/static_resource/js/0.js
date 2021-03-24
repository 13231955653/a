//静态文件相关-----------------
const sEntranceJs = '/static_resource/js/1.js';//入口文件
//静态文件相关=============

//版本相关-----------------
const i = []; //值格式 0000 00 00 00 年月日时
i[sEntranceJs] = [
    '20210324150102',
    '20210324160304',
    '20210324170506',
];
const aVersion = i;
console.log(aVersion[sEntranceJs]);
//版本相关=============

//class id tag 相关----------------
const sIndexScriptTagId = 'first_js_script'; // 第一个 script 标签
//class id tag 相关===================

//原生localstorage-----------------------
function localstorageSet (k, v) {
    try {
        localStorage.setItem(k, v);
    } catch (e) {
        console.log('localstorage set error, we can not to do what, retry reload please !!! ');
        alert('localstorage set error, we can not to do what, retry reload please !!! ');
    }
}
function localstorageGet (k) {
    let v = localStorage.getItem(k);

    return v ? v : false;
}
//原生localstorage===================

function localstorageIsForbidden () {
    console.log('localstorage is forbidden, web can not normal use, so we nothing to do !!! ');
    alert('localstorage is forbidden, web can not normal use, so we nothing to do !!! ');
}

//加载-----------------
/**
 *
 * 加载 入口 静态文件
 *
 */
function loadEntranceJs () {
    if (!window.localStorage) {
        asyn('localstorageIsForbidden');
        return false;
    }

    let j = sEntranceJs;

    console.log(j);
    let v = localstorageGet(j);
    if (v) {
        let t = setTimeout(function () {
            clearTimeout(t);

            writeJsTag(v);
        }, 0);
    } else {
        var xhr = '';
        if (window.ActiveXObject) {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        } else if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }

        if (!xhr) {
            return;
        }

        xhr.open('GET', j, true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                v = xhr.responseText;
                v = v == null ? '' : v;

                let t = setTimeout(function () {
                    clearTimeout(t);

                    writeJsTag(v);
                }, 0);

                localstorageSet (j, v);
            }
        };
    }

    let z = setTimeout(function () {
        clearTimeout(z);

        entranceBegin();
    }, 0);
}

//加载=====================

//begin----------------
/**
 *
 * begin
 *
 */
function entranceBegin () {
    if (typeof window['begin'] != 'undefined') {
        begin();
        return;
    }

    let t = setTimeout(function () {
        clearTimeout(t);

        entranceBegin();
    }, 15);
}
//begin==============

//dom-----------------

/**
 *
 * 写js标签
 *
 * @param v js文件内容
 */
function writeJsTag (v = '') {
    if (!v || typeof v == 'undefined') {
        return;
    }

    let o = document.createElement('script');
    o.type = 'text/javascript';
    o.innerHTML = v;

    let j = document.getElementById(sIndexScriptTagId);
    let t = setTimeout(function () {
        clearTimeout(t);

        j.parentNode.appendChild(o);
    }, 0);
}
//dom=================

window.onload = loadEntranceJs();
