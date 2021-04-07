/*pbh*/const sApiProtocol = 'http://';
const aApiHost = [
    'api1.you.com/',
    'api2.you.com/',
    'api3.you.com/',
    'api4.you.com/',
    'api5.you.com/',
    'api6.you.com/',
    'api7.you.com/',
];
const aApiHostLength = 7;

// let iRequestNumber = 0;/*pbh*/

/*uuu*/const sApiArgPage = 'page';/*uuu*/

/*syc*/let h = [];
h['announcement/show'] = [sForum, sForumC, sForumApiJ];
h['attention'] = '';
h['recommend'] = '';
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
i['attention'] = '';
i['recommend'] = '';
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

/*aaa*/const sRouteEncode = 'route';
const sRouteEncodeSlat = 'route_slat';
const sTokenFeild = 'token';
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
/*aaa*//**
 *
 * 添加验证方法1
 *
 * @param a 请求路由 type string
 * @param b 请求参数 type json
 */
function routeEncode (a, b) {
    let c = randStr(17);

    b[sRouteEncode] = md5(c + a + c + b[sTokenFeild]).toLowerCase();

    b[sRouteEncodeSlat] = reverseString(c);

    return b;
}
function tokens (a, b) {
    b = b ? b : {};
    b[sTokenFeild] = makeToken();

    return b;
}/*aaa*/
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
    b = tokens(a, b);

    b = routeEncode(a, b);

    iNowApiQueryNum += parseInt(1);
    let d = sApiProtocol + aApiHost[iNowApiQueryNum % aApiHostLength] + a;

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
const iMaxRequestErrorNumber = 3;
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
    if (!c || typeof c == 'undefined') {
        return;
    }

    let d = aAfterRequertFunc[a];
    if (!d || typeof d == 'undefined') {
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
