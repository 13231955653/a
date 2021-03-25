//静态文件相关-----------------
const sBaseHostSonPrefix = 'static_resource';

//版本相关-----------------
const debug = true;
const i = []; //值格式 0000 00 00 00 年月日时
i['/static_resource/js/base.js'] = [
    '2021032415',
    '2021032416',
];
i['/static_resource/js/base.js']['2021032415'] = [
    'f006d583f78d543e',
    'b2a48573767f9334',
];
// version_begin
const aVersion = i;

const sFullLoadStaticResourceTag = 'full';
//版本相关=============

//用户信息相关--------------
const sUserLastLoginTimeLocalstorageKey = 'user_last_login_time';
//用户信息相关============

//原生localstorage相关-------------------
function localstorageSet (k = '', v = '') {
    if (!k || !v) {
        return;
    }

    localStorage.setItem(k, v);
}
function localstoragGet(k = '') {
    if (!k) {
        return '';
    }

    let v = localStorage.getItem(k);
    return v ? v : '';
}
//原生localstorage相关========================


const iStaticResourceTotal= 5;
let iAllreadyLoadStaticResource = 0;

/**
 *
 * 检查已经读取的静态文件数量
 *
 */
function checkAllreadyLaodStaticResource () {
    // if () {
    //
    // }


    // console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ');
    // console.log(iStaticResourceTotal);
    // console.log(iAllreadyLoadStaticResource);
    // console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ');
    //
    // let t = setTimeout(function () {
    //     clearTimeout(t);
    //
    //     checkAllreadyLaodStaticResource();
    // }, 20);
}

/**
 *
 * 获取文件增量更新tag
 *
 * @param t 文件类型 type syting
 * @param f 文件地址 type string
 */
function staticResourceIncrement (t = '', f = '') {
    if (!t || !f) {
        return '';
    }

    checkAllreadyLaodStaticResource();

    let l = localstoragGet(sUserLastLoginTimeLocalstorageKey);
    if (!l) {
        return sFullLoadStaticResourceTag;
    }

    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    console.log(l);
    console.log(t);
    console.log(f);
    console.log(aVersion);
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
}

function localstorageError () {
    alert('localstorage error, please retry reload !!! ');
}

/**
 *
 * 设置静态文件地址
 *
 * @param t 文件类型 type string
 * @param s 文件地址 type string
 * @returns {string|boolean}
 */
function incrementArg (t = '', s = '') {
    if (!t ||!s) {
        return false;
    }

    let z = staticResourceIncrement(t, s);

    return '/index.php?f=' + s + '&z=' + z;
}

//避免出现 同注释字符串 // 相同的字符串
// 修改文件要修改文件名跟版本号
