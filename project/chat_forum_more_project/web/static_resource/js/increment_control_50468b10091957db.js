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

const sBaseJsTag = 'base';
const sFuncJsTag = 'func';
const sJqueryJsTag = 'jquery';
const sLogicJsTag = 'logic';
const sPubDomJsTag = 'pub_dom';
const sEncodeJsTag = 'encode';
const sCnLangJsTag = 'cn_lang';
const sEnLangJsTag = 'en_lang';
const sPlatDomJsTag = 'plat_dom';
const sForumJsTag = 'forum';
const sChatJsTag = 'chat';
const sFriendJsTag = 'friend';
const sSetJsTag = 'set';
const sAboutJsTag = 'about';
const sApiJsTag = 'api';
const sDomFuncJsTag = 'dom_func';
const sStrFunc = 'str_func';
const sArrayFuncJsTag = 'array_func';
const sMd5JsTag = 'md5';
const sRsaJs = 'rsa';

const sResetCssTag = 'reset_css';
const sPubCssTag = 'pub_css';
const sUserCss1Tag = 'user_css_1';
const sUserCss2Tag = 'user_css_2';
const sUserCss3Tag = 'user_css_3';
function userCss (c) {
    return 'user_css_' + c;
}

function staticResourceAddress () {
    let p = platformTag();

    let a = [];
    a[sBaseJsTag] = 'base.js';
    a[sFuncJsTag] = 'public/function.js';
    a[sDomFuncJsTag] = 'public/func/dom_func.js';
    a[sStrFunc] = 'public/func/string_func.js';
    a[sArrayFuncJsTag] = 'public/func/array_func.js';
    a[sJqueryJsTag] = 'public/jquery.js';
    a[sLogicJsTag] = p + '/logic.js';
    a[sPubDomJsTag] = 'public/dom/public_dom.js';
    a[sMd5JsTag] = 'encode/md5.js';
    a[sEncodeJsTag] = 'encode/encode.js';
    a[sRsaJs] = 'encode/rsa.js';
    a[sCnLangJsTag] = 'lang/cn.js';
    a[sEnLangJsTag] = 'lang/en.js';
    a[sPlatDomJsTag] = p + '/dom/public_dom.js';
    a[sForumJsTag] = p + '/page/forum.js';
    a[sChatJsTag] = p + '/page/chat.js';
    a[sFriendJsTag] = p + '/page/friend.js';
    a[sSetJsTag] = p + '/page/setting.js';
    a[sAboutJsTag] = p + '/page/about_me.js';
    a[sApiJsTag] = 'public/query/query.js';

    a[sResetCssTag] = 'public/reset.css';
    a[sPubCssTag] = 'public/' + p + '/public.css';
    a[sUserCss1Tag] = 'personalized/color/1.css';
    a[sUserCss2Tag] = 'personalized/color/2.css';
    a[sUserCss3Tag] = 'personalized/color/3.css';
    aStaticResourceAddress = a;
    a = null;
}
//静态文件相关============================

//值格式 0000 00 00 00 年月日时
const aVersion = {
    'base': {
        'updtae': {
            // '2021042612': {
            //     1:'999999999999999999',
            //     2:'88888888888',
            // },
        },
        'increment': {
            // '2021042611': {
            //     1:'111111111111111111111',
            //     2:'22222222222222222',
            //     3:'333333333333333333333',
            // },
        },
    },
    'func': {
        'updtae': {},
        'increment': {},
    },
    'pub_dom': {
        'updtae': {},
        'increment': {},
    },
    'plat_dom': {
        'updtae': {},
        'increment': {},
    },
    'logic': {
        'updtae': {},
        'increment': {},
    },
    'api': {
        'updtae': {},
        'increment': {},
    },
    'encode': {
        'updtae': {},
        'increment': {},
    },
    'reset_css': {
        'updtae': {},
        'increment': {},
    },
    'pub_css': {
        'updtae': {},
        'increment': {},
    },
    'cn_lang': {
        'updtae': {},
        'increment': {},
    },
    'user_css_1': {
        'updtae': {},
        'increment': {},
    },
};

/**
 *
 * 所有静态文件 js css
 *
 */
// function setStaticResource () {
//     aStaticResourceContainers = [];
//     for (let i in aVersion) {
//         aStaticResourceContainers.push(i);
//     }
// }

let iAllreadyLoadStaticResource = 0;

/**
 *
 * 获取用户上次访问时间后的更新或新增
 *
 * @param f
 */
function getIncrementUpdateTag (f) {
    if (!bGetStaticResourceFromCache) {
        return '&a=true';
    }

    if (typeof aVersion[f] == 'undefined') {
        return false;
    }

    let t = getStaticResourceLastCacheTime(f);
    if (!t) {
        // console.log('zzzzzzzzzzzzzzzzrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
        // console.log(f);
        return '&a=true';
    }

    let v = aVersion[f];
    let sUpdtae = '';
    let sIncrement = '';
    for (let k in v['updtae']) {
        if (parseInt(k) < parseInt(t)) {
            continue;
        }

        for (let l in v['updtae'][k]) {
            sUpdtae += v['updtae'][k][l] + '_';
        }
    }
    sUpdtae = sUpdtae.substring(0, sUpdtae.length - 1);

    for (let k in v['increment']) {
        if (parseInt(k) < parseInt(t)) {
            continue;
        }

        for (let l in v['increment'][k]) {
            sIncrement += v['increment'][k][l] + '_';
        }
    }
    sIncrement = sIncrement.substring(0, sIncrement.length - 1);

    let s = '';
    if (sUpdtae) {
        s += '&u=' + sUpdtae;
    }
    if (sIncrement) {
        s += '&i=' + sIncrement;
    }

    return  s ? s : false;
}

const bConstraintRequest = false; //强制请求
if (bConstraintRequest) {
    localStorage.clear();
}

//避免出现 同注释字符串 // 相同的字符串
//新添加文件必须添加到版本变量中
//版本号注释标志为/*版本号*/ 切记不要换行符（暂时）
//版本号示例
//    /*版本号*/代码块/*版本号*/
// 修改文件、添加文件要修改updtae文件版本号或添加increment文件版本号
// 版本号示例
// '/base.js': {
//     'updtae': {
//         // '2021042612': {
//         //     1:'999999999999999999',
//         // },
//     },
//     'increment': {
//         '2021042611': {
//             1:'111111111111111111111',
//             2:'22222222222222222',
//             3:'333333333333333333333',
//         },
//     },
// },
