/*pbh*/const aApiHost = [
    'http://1.api1.com',
    'http://2.api1.com',
    'http://3.api1.com',
    'http://1.api2.com',
    'http://2.api2.com',
    'http://3.api2.com',
    'http://1.api3.com',
    'http://2.api3.com',
    'http://3.api3.com',
];
const aApiHostLength = 3;/*pbh*/

/*uuu*/const sApiArgPage = 'page';/*uuu*/

/*syc*/let h = [];
h['announcement/show'] = requireJs([sForum, sForumC, sForumApiJ]);
h['announcement/one'] = requireJs([sForum, sForumC, sFuncDomJ, sPlatDomJ]);
h['post/recommend'] = requireJs([sForum, sForumC, sFuncDomJ, sPlatDomJ]);
h['attention'] = '';
h['hot'] = '';
h['uclassify'] = '';
h['classify'] = '';
h['joke'] = '';
h['sport'] = '';
h['bike'] = '';
h['music'] = '';
h['video'] = '';
h['musique'] = '';
h['mas'] = '';
const aAfterRequertRely = h; //请求后处理函数依赖
h = null;/*syc*/
/*syc*/let i = [];
i['announcement/show'] = 'afterRequestAnnouncement';
i['announcement/one'] = 'afterRequestAnnouncementSon';
i['post/recommend'] = 'afterRequestRecommend';
i['attention'] = '';
i['hot'] = '';
i['uclassify'] = '';
i['classify'] = '';
i['joke'] = '';
i['sport'] = '';
i['bike'] = '';
i['music'] = '';
i['video'] = '';
i['musique'] = '';
i['mas'] = '';
const aAfterRequertFunc = i; // 请求后处理函数
i = null;/*syc*/

// /*rrr*/const sAddVerifyVal1Slat = '_~987&^%%#_+Sasq+';/*rrr*/

/*aaa*/const sTokenFeild = 'token';
// const sRouteEncode = 'route';
// const sRouteEncodeSlat = 'route_slat';
const sArgVerify = 'arg_verify';
/*aaa*/
// /*ccc*//**
//  *
//  * hash 计算当前应该请求哪个地址
//  *
//  * @param a 请求路由
//  * @returns {boolean|*}
//  */
// function allocationApiHost (a = '') {
//     return aApiHost[hashFunc(a, aApiHostLength)];
// }/*ccc*/
/*bbb*//**
 *
 * 后端验证方法3 验证 参数
 *
 * @param a
 * @returns {{}}
 */
function argEncode (a) {
    let b = [];
    for (let c in a) {
        b.push(c);
    }
    b = b.sort();

    let d = '';
    for (let e in b) {
        d += a[b[e]];
    }

    let h = 7;
    let f = randStr(h);

    let g = md5(d + f + a[sTokenFeild]).toLowerCase() + f;
    a[sArgVerify] = g.substring(h);

    return a;
}/*bbb*/
// /*aaa*//**
//  *
//  * 后端验证方法2 验证token
//  *
//  * @param a 请求路由 type string
//  * @param b 请求参数 type json
//  */
// function routeEncode (a, b) {
//     let d = 5;
//     let c = randStr(d);
//
//     let e = md5(c + a + b[sTokenFeild]).toLowerCase() + c;
//     b[sRouteEncode] = e.substring(d);
//
//     a = c = d = e = null;
//     return b;
// }/*aaa*/
/*bbb*//**
 *
 * 后端验证方法1 验证token
 *
 * @param a
 * @returns {{}}
 */
function tokens (a) {
    a = a ? a : {};
    a[sTokenFeild] = makeToken();

    return a;
}/*bbb*/
/*ife*//**
 *
 * ajax请求
 *
 * @param a 路由 type string
 * @param b 参数 type json
 * @param c 方法 post get type string
 * @returns {boolean}
 */
let iNowApiQueryNum = 0;
function apiQuery (a = '', b = '', c = 'post') {
    console.log('apiQuery request');
    b = tokens(b);

    // b = routeEncode(a, b);

    b = argEncode(b);

    iNowApiQueryNum += parseInt(1);
    let d = aApiHost[iNowApiQueryNum % aApiHostLength] + '/' + a;

    console.log('ajax begin');
    showBaseShade();
    $.ajax({
        url: d,
        data: b,
        type: c,
        dataType: 'json',
        success: function (sJson) {
            afterApiQuery(sJson, a, b, c);
            return;
        },

        // complete: function (XMLHttpRequest, textStatus) {
        //     alert(2);
        //     clearBaseShade();
        // },

        error: function (sJson) {
            afterApiQuery(false, a, b, c);
        }
    });
}/*ife*/
/*uup*/let aRequestError = [];
const iMaxRequestErrorNumber = 1;
const iRequestErrorLimit = 5000;
function afterApiQuery (sJson, a, b, c) {
    clearBaseShade();

    if (sJson) {
        afterApiResponse(a, sJson);
        return;
    }

    if (typeof aRequestError[a] == 'undefined') {
        aRequestError[a] = 0;
    }

    aRequestError[a] += parseInt(1);

    if (aRequestError[a] > iMaxRequestErrorNumber) {
        aRequestError[a] = 0;
        afterApiResponse(a, false);
        return;
    }

    let z = setTimeout(function () {
        clearTimeout(z);

        apiQuery (a, b, c);
    }, iRequestErrorLimit);
}/*uup*/
/*uon*//**
 *
 * 请求后处理函数
 *
 * @param a 请求路由 type string
 * @param b 请求返回数据 type json
 */
function afterApiResponse (a = '', b = '') {
    if (!a) {
        return;
    }

    let c = aAfterRequertRely[a];
    console.log('kkkkkkkkkkkkkkkkk');
    console.log(c);
    console.log(a);
    console.log(aAfterRequertRely);
    if (!c || typeof c == 'undefined') {
        throw new Error('z');
        return;
    }

    let d = aAfterRequertFunc[a];
    if (!d || typeof d == 'undefined') {
        throw new Error('q');
        return;
    }

    requires(c, function () {
        asyn(d, b)
    });
    a = b = c = d = null;
}/*uon*/
/*nca*/function apiBegin () {
    console.log('8888888888888888888888888apiBegin');
}/*nca*/
/*ggg*/apiBegin()/*ggg*/
