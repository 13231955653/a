const a4 = [];
a4[''] = '';
const aRoute = a4;

const sApiProtocol = 'http://';
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

let iRequestNumber = 0;

function apiQuery (sUrl = '', sSendJsonData = '', sMethod = 'post') {
    // if (typeof jQuery == 'undefined') {
    if (!bJquery) {
        // loadLocalJquery();
        asyn('loadLocalJquery');

        // console.log('apiQuery jQuery undefined. so settimeout retry ');
        aBaseTimer[sFunction] = setTimeout(function () {
            apiQuery (sUrl, sSendJsonData, sMethod);
        }, aTimer['apiQuery']);
        return;
    }

    if (
        !sUrl
        ||
        !sSendJsonData
    ) {
        // console.log('apiQuery sUrl or sSendJsonData is null. so not to do ');
        return false;
    }

    if (!isJson(sSendJsonData)) {
        // console.log('apiQuery sSendJsonData is not json. so not to do ');
        return false;
    }

    if (!inArrayByKey(sUrl, aRoute)) {
        // console.log('apiQuery inArrayByKey sUrl not in aRoute. so not to do ');
        return false;
    }

    iRequestNumber += parseInt(1);

    let sHost = sApiProtocol + aApiHost[iRequestNumber % aApiHostLength];

    let sRoute = aRoute[sUrl];

    let sRequestUrl = sHost + sRoute;

    $.ajax({
        url: sRequestUrl,
        data: sSendJsonData,
        type: sMethod,
        dataType: 'json',
        success: function (sJsonData) {
        },

        complete: function (XMLHttpRequest, textStatus) {
        },

        error: function () {
        }
    });
}

function apiBegin () {
    console.log('8888888888888888888888888apiBegin');
}
