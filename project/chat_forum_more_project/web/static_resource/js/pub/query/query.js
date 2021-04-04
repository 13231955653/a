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

let iRequestNumber = 0;/*pbh*/

/*syc*/let h = [];
h['forum_announcement'] = [sForum, sForumC];
h['forum_attention'] = '';
h['forum_recommend'] = '';
h['forum_hot'] = '';
h['forum_uclassify'] = '';
h['forum_classify'] = '';
h['forum_joke'] = '';
h['forum_sport'] = '';
h['forum_bike'] = '';
h['forum_music'] = '';
h['forum_video'] = '';
h['forum_musique'] = '';
h['forum_mas'] = '';
const aAfterRequertRely = h; //请求后处理函数依赖
h = null;/*syc*/
/*syc*/let i = [];
i['forum_announcement'] = 'afterRequestAnnouncement';
i['forum_attention'] = '';
i['forum_recommend'] = '';
i['forum_hot'] = '';
i['forum_uclassify'] = '';
i['forum_classify'] = '';
i['forum_joke'] = '';
i['forum_sport'] = '';
i['forum_bike'] = '';
i['forum_music'] = '';
i['forum_video'] = '';
i['forum_musique'] = '';
i['forum_mas'] = '';
const aAfterRequertFunc = i; // 请求后处理函数
i = null;/*syc*/

/*ife*//**
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
        success: function (sJson) {
            afterApiRequest(a, sJson);
            return;
        },

        complete: function (XMLHttpRequest, textStatus) {
        },

        error: function () {
            afterApiRequest(a, false);
            return;
        }
    });
}/*ife*/
/*uon*//**
 *
 * 请求后处理函数
 *
 * @param a 请求路由 type string
 * @param b 请求返回数据 type json
 */
function afterApiRequest (a = '', b = '') {
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
