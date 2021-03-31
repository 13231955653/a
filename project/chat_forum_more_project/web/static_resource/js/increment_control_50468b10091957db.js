const bGetStaticResourceFromCache = false;
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
const sBaseJ = 'base';
const sFuncJ = 'func';
const sJqueryJ = 'jquery';
const sLogicJ = 'logic';
const sPubDomJ = 'pub_dom';
const sEncodeJ = 'encode';
const sCnLangJ = 'cn_lang';
const sEnLangJ = 'en_lang';
const sPlatDomJ = 'plat_dom';
const sForum = 'forum';
const sChatJ = 'chat';
const sFriendJ = 'friend';
const sSetJ = 'set';
const sAboutJ = 'about';
const sApiJ = 'api';
const sDomFunc = 'dom_func';
const sStrFunc = 'str_func';
const sArrFuncJ = 'array_func';
const sMd5J = 'md5';
const sRsaJs = 'rsa';
const sMouseJ = 'mouse';
const sMouseAboutMe = 'mouse_about';
const sMouseChat = 'mouse_chat';
const sMouseForum = 'mouse_forum';
const sMouseFriend = 'mouse_friend';
const sMouseSet = 'mouse_set';
const sResetC = 'reset_css';
const sPubC = 'pub_css';
const sUserC1 = 'user_c_1';
const sAboutC = 'about_c';
const sChatC = 'chat_c';
const sForumC = 'forum_c';
const sFriendC = 'friend_c';
const sSetC = 'set_c';
function userCss (c) {
    return 'user_c_' + c;
}
function staticResourceAddress () {
    let p = platformTag();

    let a = [];
    a[sBaseJ] = 'base.js';

    a[sFuncJ] = 'pub/func/func.js';
    a[sDomFunc] = 'pub/func/dom.js';
    a[sStrFunc] = 'pub/func/str.js';
    a[sArrFuncJ] = 'pub/func/array.js';

    a[sJqueryJ] = 'pub/jquery.js';

    a[sLogicJ] = p + '/logic.js';

    a[sMd5J] = 'encode/md5.js';
    a[sEncodeJ] = 'encode/encode.js';
    a[sRsaJs] = 'encode/rsa.js';

    a[sCnLangJ] = 'lang/cn.js';
    a[sEnLangJ] = 'lang/en.js';

    a[sPubDomJ] = 'pub/dom/pub.js';
    a[sPlatDomJ] = p + '/dom/pub.js';

    a[sForum] = p + '/page/dom/forum.js';
    a[sChatJ] = p + '/page/dom/chat.js';
    a[sFriendJ] = p + '/page/dom/friend.js';
    a[sSetJ] = p + '/page/dom/set.js';
    a[sAboutJ] = p + '/page/dom/about.js';

    a[sMouseJ] = 'pub/incident/mouse.js';

    a[sMouseAboutMe] = p + '/page/mouse/about.js';
    a[sMouseChat] = p + '/page/mouse/chat.js';
    a[sMouseForum] = p + '/page/mouse/forum.js';
    a[sMouseFriend] = p + '/page/mouse/friend.js';
    a[sMouseSet] = p + '/page/mouse/set.js';

    a[sApiJ] = 'pub/query/query.js';

    a[sResetC] = 'pub/reset.css';
    a[sPubC] = 'pub/' + p + '/pub.css';

    a[sAboutC] = 'pub/' + p + '/page/about.css';
    a[sChatC] = 'pub/' + p + '/page/chat.css';
    a[sForumC] = 'pub/' + p + '/page/forum.css';
    a[sFriendC] = 'pub/' + p + '/page/friend.css';
    a[sSetC] = 'pub/' + p + '/page/set.css';

    a[sUserC1] = 'personalized/color/1.css';

    aStaticResourceAddress = a;
    a = null;
}
//值格式 0000 00 00 00 00 00  年月日时分秒
const aVersion = {
    'base': {
        'updtae': {
            // '20210331235900': {
            //     1:'e15d60c9775f21fe1',
            // },
        },
        'increment': {
            // '20210331235900': {
            //     1:'e15d60c9775f21fe1',
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
 * 获取用户上次访问时间后的更新或新增
 *
 * @param f
 */
function getIncrementUpdateTag (f) {
    if (!bGetStaticResourceFromCache) {
        return '&a=1';
    }

    let v = aVersion[f];
    if (typeof v == 'undefined') {
        return false;
    }

    let t = getStaticResourceLastCacheTime(f);
    if (!t) {
        return '&a=1';
    }

    let w = v['updtae'];
    let x = v['increment'];
    let u = '';
    let i = '';
    for (let k in w) {
        if (parseInt(k) < parseInt(t)) {
            continue;
        }

        for (let l in w[k]) {
            u += w[k][l] + '_';
        }
    }
    u = u.substring(0, u.length - 1);

    for (let k in x) {
        if (parseInt(k) < parseInt(t)) {
            continue;
        }

        for (let l in x[k]) {
            i += x[k][l] + '_';
        }
    }
    i = i.substring(0, i.length - 1);

    let s = '';
    if (u) {
        s += '&u=' + u;
    }
    if (i) {
        s += '&i=' + i;
    }

    w = x = v =null;

    return  s ? s : false;
}

const bConstraintRequest = false; //强制请求
function reloadStaticResource () {
    if (bConstraintRequest) {
        localStorage.clear();
    }
}

function incrementBegin () {
    reloadStaticResource();

    staticResourceAddress();
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

window.onload = incrementBegin();
