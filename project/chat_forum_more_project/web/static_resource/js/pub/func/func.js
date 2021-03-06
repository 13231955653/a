/*d9e455cad2bbadaf*///url-------------
const sUrlAddressSignEncodeSalt = '_&*uh124jKzS645s(^$%a87123_';
const sUrlAddressPageKey = 'page';
const sUrlAddressClassifyKey = 'forum_classify';
const sUrlAddressForumLevelMoveTagKey = 'forum_level_move';
const iDefaultForumLevelMoveTag = 0;
const sUrlAddressSignKey = 'sign';
const sUrlAddressChangeTimeKey = 'change_time';

const sLangTitlePostfix = '_t';
//url===================/*d9e455cad2bbadaf*/

/*0fa89c1025f592ab*///localstorage相关----------------------------
// const sLocalstorageTagMd5Salt = '______9*^&*%^$%$67dasy~`<>?dg';
// const sLocalstorgaeNowPageTag = 'localstorage_cache_now_page';
//localstorage相关=============================/*0fa89c1025f592ab*/

/*b2fffac7074f6660*/const sDefaultPage = 'forum';/*b2fffac7074f6660*/

/*c94c23e37dc10b12*//**
 *
 * location 信息
 *
 */
function screenInfo () {
    let t = '+';
    let s = '';
    let n = screen;

    s += t + n.availHeight;
    s += t + n.availWidth;
    s += t + n.width;
    s += t + n.height;
    s += t + n.pixelDepth;
    s += t + n.colorDepth;

    return s;
}
/**
 *
 * navigator 信息
 *
 * @returns {string}
 */
function navigatorInfo () {
    let t = '~';
    let s = '';
    let n = navigator;

    s += t + n.appCodeName;
    s += t + n.appName;
    s += t + n.appVersion;
    s += t + n.cookieEnabled;
    s += t + n.language;
    s += t + n.onLine;
    s += t + n.platform;
    s += t + n.product;
    s += t + n.userAgent;
    s += t + n.hardwareConcurrency;

    return s;
}/*c94c23e37dc10b12*/

/*0aaa1d3a8252b634*/function userIpInfo () {
    let t = '*';
    let s = '';

    s += t + sIp;
    s += t + sCid;
    s += t + sIpCityName;

    return s;
}/*0aaa1d3a8252b634*/

/*3182c8b17d05c5f7*//**
 *
 * 获取函数名
 *
 * @param c 调用函数的函数 type function
 * @returns {string|boolean}
 */
let getFnName = function(c){
    let _c = c.toString().replace(/[\s\?]*/g,''),
        comb = _c.length >= 50 ? 50 :_c.length;
    _c = _c.substring(0,comb);
    let n = _c.match(/^function([^\(]+?)\(/);
    if(n && n[1]){
        return n[1];
    }

    let caller = c.caller,
        _caller = caller.toString().replace(/[\s\?]*/g,'');
    let last = _caller.indexOf(_c),
        str = _caller.substring(last-30,last);
    n = str.match(/var([^\=]+?)\=/);
    if(n && n[1]){
        return n[1];
    }

    return false;
};/*3182c8b17d05c5f7*/

/*ogb*//**
 *
 * 获取现在页面  page 信息
 *
 * @returns {*}
 */
let sPageNow = '';
function getNowPage () {
    if (sPageNow) {
        return sPageNow;
    }

    let a = getUrlArgs(sUrlAddressPageKey);
    a = a ? a : sDefaultPage;
    sPageNow = a;

    return sPageNow;
}
function updateNowPage (a) {
    sPageNow = a;
}/*ogb*/
/*jay*//**
 *
 * 获取现在页面  page 信息
 *
 * @returns {*}
 */
function getNowForumLevelMoveTag () {
    let p = getUrlArgs(sUrlAddressForumLevelMoveTagKey);

    return p ? p : iDefaultForumLevelMoveTag;
}
let sForumNowShow = '';
function getForumNowShow () {
    if (sForumNowShow) {
        return sForumNowShow;
    }

    let p = getUrlArgs(sUrlAddressClassifyKey);
    sForumNowShow = p ? p : '';

    return sForumNowShow;
}
function updateForumNowShow (a) {
    sForumNowShow = a;
}/*jay*/

/*142e9c58bb5afaca*//**
 *
 * 获取url参数
 *
 * @param w 获取参数 的键 type string
 * @returns {*}
 */
function getUrlArgs (w = '') {
    let h = window.location.href;

    let s = h.split('?');
    if (s.length < 2) {
        // console.log('getUrlArgs s.length < 2');
        return w ? '' : [];
    }

    let a = s[1];
    a = urlDecode(a);
    if (a) {
        let b = a.split('&');
        let c = [];
        let d = [];
        for (let i in b) {
            d = b[i].split('=');
            c[d[0]] = d[1];
        }

        if (!checkUrlSign(c)) {
            // console.log('do not change url args');
            return w ? '' : [];
        }

        console.log(c);
        return w ? (typeof c[w] !== 'undefined' ? c[w] : '') : c;
    }

    return w ? '' : [];
}/*142e9c58bb5afaca*/

/*5edfd5e74d9d4475*//**
 *
 * 检查url sign 值
 *
 * @param u url ? 后字符串 type string
 * @returns {boolean}
 */
function checkUrlSign (u = []) {
    if (!u) {
        // console.log('checkUrlSign u is null');
        return false;
    }

    let s = urlSign(u);

    return s === u[sUrlAddressSignKey];
}/*5edfd5e74d9d4475*/

/*91b2f16790d560a4*//**
 *
 * 设置url sign 值
 *
 * @param u url ? 后字符串 type string
 * @returns {string}
 */
function urlSign (u = []) {
    if (!u) {
        // console.log('urlSign u is null');
        return '';
    }

    u.sort();

    let sArg = '';
    for (let i in u) {
        if (i !== sUrlAddressSignKey) {
            sArg += i + '=' + u[i] + '&';
        }
    }
    sArg = sArg.substr(0, sArg.length - 1);

    let s = md5(sUrlAddressSignEncodeSalt + md5(sArg + sUrlAddressSignEncodeSalt));
    s = s.toLowerCase();

    return s;
}/*91b2f16790d560a4*/

/*49f8fbda0f7844f5*//**
 *
 * 设置浏览器title
 *
 * @param t 浏览器title type string
 * @returns {boolean}
 */
function setBrowserTitle (t = '') {
    if (!t) {
        return false;
    }

    t = typeof aLang != 'undefined' && typeof aLang[t] != 'undefined' ? aLang[t] : t;

    document.title = t;
}
/**
 *
 *  改写 浏览器 title
 * @param t window title type string
 */
function replaceTitle (t = '') {
    if (!t) {
        return;
    }

    if (typeof window['aLang'] == 'undefined') {
        setTimeoutFunction('replaceTitle', t);
        return;
    }

    setBrowserTitle(aLang[t]);
}/*49f8fbda0f7844f5*/

// const iTokenMinLiftTime = 1800;
// const iTokenMaxLiftTime = 3600;
// function checkToken () {
//     let a = sToken;
//     if (!a) {
//         asyn('makeToken');
//         return;
//     }
//
//     let e = iTokenMinLiftTime;
//     let f = iTokenMaxLiftTime;
//     let d = randNum(e, f);
//
//     let b = a.split(sTokenSplitTag);
//     b = b[b.length - 1];
//     console.log('///////////////////////////////////////////////////////////checkToken');
//     console.log(b);
//
//     let c = getSecondTime();
//     if (c - b > d) {
//         asyn('makeToken');
//         return;
//     }
//
//     let h = randNum(e, f) * 1000;
//     let g = setTimeout(function () {
//         clearTimeout(g);
//
//         checkToken();
//     }, h);
// }

/*a79393a0a8409b61*/function functionBegin () {
    console.log('3333333333333333333functionBegin');

    // requires([sFuncJ, sMd5J, sStrFunc], function () {
    //     asyn('checkToken');
    // });
}/*a79393a0a8409b61*/

/*aaa*/functionBegin()/*aaa*/
