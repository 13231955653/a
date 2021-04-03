/*44a9158ca09f7c51*/const sApiProtocol = 'http://';
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

let iRequestNumber = 0;/*44a9158ca09f7c51*/

/*392c80add10ed4ce*//**
 *
 * ajax请求
 *
 * @param a 路由 type string
 * @param b 参数 type json
 * @param c 方法 post get type string
 * @returns {boolean}
 */
function apiQuery (a = '', b = '', c = 'post') {
    console.log('apiQuery request');
    if (!a) {
        console.log('apiQuery request a is null ');
        return false;
    }

    console.log(b);
    if (b && !isJson(b)) {
        console.log('apiQuery request b is not json ');
        return false;
    }

    iRequestNumber += parseInt(1);

    let sHost = sApiProtocol + aApiHost[iRequestNumber % aApiHostLength];

    let d = sHost + a;

    console.log('ajax begin');
    $.ajax({
        url: d,
        data: b,
        type: c,
        dataType: 'json',
        success: function (sJsonData) {
        },

        complete: function (XMLHttpRequest, textStatus) {
        },

        error: function () {
        }
    });
}/*392c80add10ed4ce*/

/*e0f13888647a8520*/function apiBegin () {
    console.log('8888888888888888888888888apiBegin');
}/*e0f13888647a8520*/
