/*d9e455cad2bbadaf*///url-------------
const sUrlAddressSignEncodeSalt = '_&*uh124jKzS645s(^$%a87123_';
const sUrlAddressPageKey = 'page';
const sUrlAddressSignKey = 'sign';
const sUrlAddressChangeTimeKey = 'change_time';

const sLangTitlePostfix = '_title';
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

/*304b98b4bf14d1b5*//**
 *
 * 获取现在页面  page 信息
 *
 * @returns {*}
 */
function getNowPage () {
    let p = getUrlArgs('page');

    return p ? p : sDefaultPage;
}/*304b98b4bf14d1b5*/

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

    document.title = t;
}
/**
 *
 *  改写 浏览器 title
 * @param t window title type string
 */
function replaceTitle (t = '') {
    if (!t) {
        // console.log('replaceTitle t is null, so no to do ');
        return;
    }
    // console.log('replaceTitle t is true, will to replace browser title lang ');

    if (typeof window['aLang'] == 'undefined') {
        // console.log('replaceTitle aLang is false, so settimtout retry to repalce browser title lang ');
        setTimeoutFunction('replaceTitle', t);
        return;
    }
    // console.log('replaceTitle aLang is true, so replace browser title lang ');

    setBrowserTitle(aLang[t]);
}/*49f8fbda0f7844f5*/

/*f7d3dc4ea25d7fd7*//**
 *
 *
 *
 * @param o 对象 dom  type object
 * @param s 样式 type json
 * @param p 改变样式速度 type number
 * @param c 回调函数 type string
 */
function animates (o = false, s = false, p = false, c = false) {
    if (typeof jQuery != 'undefined') {
        $(o).animate(s, p, c);
        return;
    }

    if (!o || !s || !p) {
        // console.log(o);
        // console.log(s);
        // console.log(p);
        // console.log('animates o or s or p is null');
        return;
    }

    // console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    // console.log(bJquery);

    // setTimeoutFunction('animates');
    let t = setTimeout(function () {
        clearTimeout(t);

        animates(o, s, p, c);
    }, aTimer['animates']);

    // jsAnimate (o, s, parseInt(p / 20));
}/*f7d3dc4ea25d7fd7*/

/*a79393a0a8409b61*/function functionBegin () {
    console.log('3333333333333333333functionBegin');
}/*a79393a0a8409b61*/
