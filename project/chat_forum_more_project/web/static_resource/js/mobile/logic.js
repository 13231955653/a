/*rdl*/var sDefaultPageHtml = 'index.html';/*rdl*/
/*ybp*//**
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
}/*ybp*/
/*aoe*//**
 *
 * 多次点击同一个脚步事件
 *
 */
function againOnlickFooter () {
    let a = sLastPage;
    let b = a ? a : getNowPage();
    if (!b) {
        return;
    }

    switch (b) {
        case sForumPage :
            forumChangeLevelMove('', false, 1);
            break;
        // case sChatPage :
        //     c = '';
        //     break;
        // case sFriendPage :
        //     c = '';
        //     break;
        // case sAboutMePage :
        //     c = '';
        //     break;
        // case sSetPage :
        //     c = '';
        //     break;
    }
}/*aoe*/
/*slu*//**
 *
 *  改写 浏览器 title
 * @param t window title type string
 */
function replaceWindowTitle (t = '') {
    if (!t) {
        return;
    }

    // if (typeof window['replaceTitle'] == 'undefined') {
    //     setTimeoutFunction('replaceWindowTitle', t);
    //     return;
    // }

    requires([sFuncJ], function () {
        asyn('replaceTitle', t);
    });
}/*slu*/
/*zza*//**
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

    let t = p + sLangTitlePostfix;
    // asyn('replaceWindowTitle', p + sLangTitlePostfix);

    let f = ''; // 回调函数
    if (typeof aAllreadyLoadPageJs[p] == 'undefined') {
        f = 'loadPageJs';
    } else {
        f = 'afterLoadPageJs';
    }
    aAllreadyLoadPageJs[p] = getMillisecondTime();

    requires([sArrFuncJ], function () {
        updateUrlArg (sUrlAddressPageKey, p, t, f);

        setBrowserTitle(t);
    });

    requires([sJqueryJ, sMobileDomFuncJ], function () {
        showNowPageBody();
    });
}/*zza*/
/*vgz*//**
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

    // setBrowserTitle(t);

    if (c) {
        asyn(c);
    }
}/*vgz*/
/*euq*/function logicBegin () {
    console.log('666666666666666666logicBegin');
    requires([sEncodeJ, sMd5J, sFuncJ, sStrFunc], function () {
        asyn('updateUrlPage');
    });
}/*euq*/
