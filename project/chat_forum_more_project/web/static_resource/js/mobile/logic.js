/*f8a2b197f36a6a16*/var sDefaultPageHtml = 'index.html';/*f8a2b197f36a6a16*/
/*85d5758838981137*//**
 *
 * 更新 url page 参数
 *
 * p url page 更新为 p type sting
 *
 * @type {string}
 */
let sLastPage = '';
function updUrlPage (p = '') {
    console.log('点击过后需要检测当前页面是否需要刷新');
    if (!p) {
        return;
    }

    if (sLastPage === p) {
        asyn('againOnlickFooter');
        return;
    }
    sLastPage = p;

    requires([sPubDomJ], function () {
        asyn('showBaseShade');
    });

    requires([sEncodeJ, sFuncJ, sStrFunc], function () {
        asyn('updateUrlPage', p);
    });

    requires([sPubDomJ], function () {
        asyn('clearBaseShade');
    });
}/*85d5758838981137*/

/*0e74c111e9d2fa99*//**
 *
 * 多次点击同一个脚步事件
 *
 */
function againOnlickFooter () {
    // console.log('/////////////////////////////////////////////////');
    // asyn('clearPageShade');
    // clearPageShade();
}/*0e74c111e9d2fa99*/

/*21d687462e6ef990*//**
 *
 *  改写 浏览器 title
 * @param t window title type string
 */
function replaceWindowTitle (t = '') {
    if (!t) {
        // console.log('replaceWindowTitle t is null, so no to do ');
        return;
    }

    if (typeof window['replaceTitle'] == 'undefined') {
        // console.log('replaceWindowTitle bLoadFunctionJs is false, so settimtoue retry ');
        setTimeoutFunction('replaceWindowTitle', t);
        return;
    }

    // replaceTitle(t);
    asyn('replaceTitle', t);
}/*21d687462e6ef990*/

/*e96fd5eaf9f56b36*//**
 *
 * 更新url page 参数
 *
 * p page 更新为 p type sting
 *
 * @type {Array}
 */
let aAllreadyLoadPageJs = [];
function updateUrlPage (p = '') {
    console.log(getUrlArgs());

    p = p ? p : getNowPage();

    let t = '';
    asyn('replaceWindowTitle', p + sLangTitlePostfix);

    let f = ''; // 回调函数
    if (typeof aAllreadyLoadPageJs[p] == 'undefined') {
        f = 'loadPageJs';
    } else {
        f = 'afterLoadPageJs';
    }
    aAllreadyLoadPageJs[p] = getMillisecondTime();

    requires([sArrFuncJ], function () {
        updateUrlArg (sUrlAddressPageKey, p, t, f);
    });

    requires([sJqueryJ, sMobileDomFuncJ], function () {
        showNowPageBody();
    });
}/*e96fd5eaf9f56b36*/

/*da46708147e27910*//**
 *
 * 改变url 地址栏
 *
 * @param k 需改变的 url 键
 * @param v 改变的值
 * @param t 浏览器标题
 * @param c 回调函数
 * @returns {boolean}
 */
function updateUrlArg (k = '', v = '', t = '', c = false) {
    if (!k || !v) {
        console.log('updateUrlArg k or v is null');
        return false;
    }

    let l = window.location;

    let p = l.pathname;
    p = p !== '/' ? p : '';
    p = p ? p : '/' + sDefaultPageHtml;

    let h = l.origin + p;

    let a = getUrlArgs();

    a[k] = v;
    if (typeof a[sUrlAddressPageKey] === 'undefined') {
        a[sUrlAddressPageKey] = sDefaultPage;
    }
    a = arrayDelValByKey(a, sUrlAddressChangeTimeKey);
    a = arrayDelValByKey(a, sUrlAddressSignKey);

    a[sUrlAddressChangeTimeKey] = getMillisecondTime();

    let s = '';
    for (let i in a) {
        if (i === k) {
            a[i] = v;
        }

        s += i + '=' + a[i] + '&';
    }

    s = s + sUrlAddressSignKey + '=' + urlSign(a);
    s = urlEncode(s);

    let g = h + '?' + s;

    let o = {};
    window.history.pushState(o, t, g);

    setBrowserTitle(t);

    if (c) {
        asyn(c);
    }
}/*da46708147e27910*/

/*efd16af9fb242e81*/function logicBegin () {
    console.log('666666666666666666logicBegin');
    // asyn('updateUrlPage');
    requires([sEncodeJ, sMd5J, sFuncJ, sStrFunc], function () {
        // console.log('zxcccccccccccccccccccccccccccccccccccccc');
        asyn('updateUrlPage');
    });
}/*efd16af9fb242e81*/
