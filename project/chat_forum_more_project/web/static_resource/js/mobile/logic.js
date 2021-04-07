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
    console.log('1111111111111111111111111');
    if (!p) {
        console.log('222222222222222222222');
        return;
    }

    // setBrowserTitle(aLang[p + sLangTitlePostfix]);
    //
    // requires([sArrFuncJ], function () {
    //     updateUrlArg (sUrlAddressPageKey, p, '', 'loadPageJs');
    // });

    console.log('33333333333333333');
    console.log(sLastPage);
    console.log(p);
    if (sLastPage === p) {
        console.log('44444444444444444444444444444');
        asyn('againOnlickFooter');
        return;
    }
    sLastPage = p;
    console.log('555555555555555555555555555555');

    requires([sPubDomJ], function () {
        console.log('66666666666666666666666666');
        asyn('showBaseShade');
    });

    requires([sEncodeJ, sFuncJ, sStrFunc], function () {
        console.log('777777777777777777777');
        asyn('showPage', p);
    });

    requires([sPubDomJ], function () {
        console.log('888888888888888888888888888888888');
        asyn('clearBaseShade');
    });
    console.log('999999999999999999999999999999999');
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
            forumChangeLevelMove('', '', 1);
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
// /*slu*//**
//  *
//  *  改写 浏览器 title
//  * @param t window title type string
//  */
// function replaceWindowTitle (t = '') {
//     if (!t) {
//         return;
//     }
//
//     // if (typeof window['replaceTitle'] == 'undefined') {
//     //     setTimeoutFunction('replaceWindowTitle', t);
//     //     return;
//     // }
//
//     requires([sFuncJ], function () {
//         asyn('replaceTitle', t);
//     });
// }/*slu*/
/*zza*//**
 *
 * 更新url page 参数
 *
 * p page 更新为 p type sting
 *
 * @type {Array}
 */
let aAllreadyLoadPageJs = [];
function showPage (p = '') {
    console.log(getUrlArgs());

    p = p ? p : getNowPage();

    let t = p + sLangTitlePostfix;
    setBrowserTitle(aLang[t]);

    if (typeof aAllreadyLoadPageJs[p] == 'undefined') {
        // alert('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
        requires([sArrFuncJ], function () {
            updateUrlArg (sUrlAddressPageKey, p, t, 'loadPageJs');
        });
    } else {
        // alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        asyn(p + 'Begin');
    }
    aAllreadyLoadPageJs[p] = getMillisecondTime();

    requires([sJqueryJ, sMobileDomFuncJ], function () {
        updateActiveFoot(p);

        showNowPageBody(p);
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
    console.log('zzzzzzzzzzzzzzz=============================');
    if (!k || v === false) {
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

    console.log(c);
    if (c) {
        asyn(c);
    }
}/*vgz*/
/*euq*/function logicBegin () {
    console.log('666666666666666666logicBegin');
    requires([sResetC, sPubC, sSizeC, sEncodeJ, sMd5J, sFuncJ], function () {
        // requires([sEncodeJ, sMd5J, sFuncJ], function () {
        asyn('showPage');
    });
}/*euq*/
/*aaa*/logicBegin()/*aaa*/
