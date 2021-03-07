let iQueryApiNumber     = 0;
let sendQueryTimer;
const sQueryEncodeFeild = 'encode_data';
const sCheckId          = 'check_id';
const sCheckString      = 'rsa_encode_check_id';
const sLocalstorageData = 'localstorage_data';
const sQueryStatus      = 'status';
const sQueryError       = 'error';
const sQueryWebAction   = 'web_action';
const  sDelLocalstorage = 'del_localstorage';
const  sEncodeKeyExplain = 'encode_key_explain';
const sResponseDataFeild = 'data';
function nowQueryApi (sApi)
{
    iQueryApiNumber += parseInt(1);
    return aApiUrl[ iQueryApiNumber % iApiUrlArrayLength ] + '/route/' + sApi;
}
//限制频率
let sJsonRequestUrl = {};
const iLimitFrequencySecond = 5000;
let aQueryTimer = new Array();
function limitFrequency (sApi) {
    let iNowTimeSecond = getNowTime();
    if (typeof sJsonRequestUrl[md5(sApi)] == 'undefined') {
        sJsonRequestUrl[md5(sApi)] = iNowTimeSecond;
        
        // clearUplimitFrequency();
        
        return true;
    }
    
    let iTimeOut = iNowTimeSecond - sJsonRequestUrl[md5(sApi)];
    if (iTimeOut > iLimitFrequencySecond) {
        sJsonRequestUrl[md5(sApi)] = iNowTimeSecond;
        return true;
    }
    
    // consoleLog(parseInt(iTimeOut));
    // let sIntervalKey = md5(getNowTime() + randomString(1000, sRandString));
    // aQueryTimer[sIntervalKey] = setTimeout(function () {
    //     sendQuery (sApi, sMethod, sJsonData, sFuncName, bShowLoading, bEncodeData);
    //     clearTimeout(aQueryTimer[sIntervalKey]);
    // }, parseInt(iTimeOut) + parseInt(10));
    
    return parseInt(iTimeOut) + parseInt(10);
}
// function clearUplimitFrequency ()
// {
//     let iNowTimeSecond = getNowTimeSecond();
//     for (let i in sJsonRequestUrl) {
//         if (iNowTimeSecond - sJsonRequestUrl[i] > iLimitFrequencySecond) {
//             delete(sJsonRequestUrl[i]);
//         }
//     }
// }
function reSendQuery (sApi = '', sMethod = '', sJsonData = '', sFuncName = '', bShowLoading = false, bEncodeData = true) {
    sendQueryTimer = setTimeout(function ()
                                {
                                    sendQuery(sApi, sMethod, sJsonData, sFuncName, bShowLoading, bEncodeData);
                                }, 10);
}
function sendQuery (sApi = '', sMethod = '', sJsonData = '', sFuncName = '', bShowLoading = false, bEncodeData = true)
{
    iLastRequestTime = getNowTimeSecond();
    if (bShowLoading) {
        showLoading(true);
    }

    if (!sApi || !sMethod) {
        showLoading(false);
        consoleLog('zzzzzzzzzzzzzzzzz');
        return;
    }
    
    if (sendQueryTimer) {
        clearTimeout(sendQueryTimer);
    }
    
    if (bInMakeSessionKey) {
        consoleLog('qqqqqqqqqqqqqqq');
        reSendQuery (sApi, sMethod, sJsonData, sFuncName, bShowLoading, bEncodeData);
        return;
    }
    
    sSessionKey = myStorage.get(localstorageSessionKey());
    sMd5SessionKey = myStorage.get(localstorageSessionMd5Key());
    if (!sSessionKey || !sMd5SessionKey) {
        consoleLog('rrrrrrrrrrrrrrrr');
        doHook('makeSessionKey');
        reSendQuery (sApi, sMethod, sJsonData, sFuncName, false, bEncodeData);
        return;
    }
    
    sMethod = sMethod.toUpperCase() === 'POST' ? 'POST' : 'GET';
    
    let sSendJsonData         = sJsonData ? (bEncodeData ? {data: rsaEncode(sJsonData)} : {data: sJsonData}) : {};
    sSendJsonData[ sCheckId ] = sMd5SessionKey;
    sSendJsonData[ sCheckString ] = rsaEncode(sSessionKey);
    
    let iTimeOut = limitFrequency(sApi);
    if (iTimeOut !== true) {
        // consoleLog(parseInt(iTimeOut));
        let sIntervalKey = md5(getNowTime() + randStr(1000, sRandString));
        aQueryTimer[sIntervalKey] = setTimeout(function () {
            sendQuery (sApi, sMethod, sJsonData, sFuncName, bShowLoading, bEncodeData);
            clearTimeout(aQueryTimer[sIntervalKey]);
        }, parseInt(iTimeOut) + parseInt(10));
        return;
    }
    
    let sUrl = nowQueryApi(sApi);
    
    $.ajax({
               url: sUrl, data: sSendJsonData, type: sMethod, dataType: 'json', success: function (sJsonData)
        {
            consoleLog(sJsonData);
            if (!afterQueryError(sJsonData)) {
                return false;
            }
            
            if (sFuncName) {
                if (sJsonData[ sQueryEncodeFeild ]) {
                    sDecodeKeyExplain = sJsonData[sEncodeKeyExplain];
                    for (let i in sJsonData[ sQueryEncodeFeild ]) {
                        if (!sJsonData[ sJsonData[ sQueryEncodeFeild ][ i ] ]) {
                            continue;
                        }
                        
                        sJsonData[ sJsonData[ sQueryEncodeFeild ][ i ] ] =
                            rsaDecode(sJsonData[ sJsonData[ sQueryEncodeFeild ][ i ] ]);
                        sJsonData[ sJsonData[ sQueryEncodeFeild ][ i ] ] =
                            sJsonData[ sJsonData[ sQueryEncodeFeild ][ i ] ] ? JSON.parse(sJsonData[ sJsonData[ sQueryEncodeFeild ][ i ] ]) : sJsonData[ sJsonData[ sQueryEncodeFeild ][ i ] ];
                        delete (
                            sJsonData[ sQueryEncodeFeild ]
                        );
                    }
                }
                
                if (sJsonData[ sLocalstorageData ]) {
                    doHook('query', sJsonData);
                }
                doHook(sFuncName, sJsonData);
            }
            return;
        },
        
               complete: function (XMLHttpRequest, textStatus)
               {
               },
        
               error: function ()
               {
               }
           });
}

function afterQueryError (sJsonData)
{
    showLoading(false);
    
    if (!sJsonData[ sQueryStatus ]) {
        // let sError = sJsonData[ sQueryError ] ? sJsonData[ sQueryError ] : 'web_error';
        // Alert(typeof aLang[sError] != 'undefined' ? aLang[sError] :
        // aLang['web_error']);
        // Alert(typeof aLang[ sError ] != 'undefined' ? aLang[ sError ] : sError);
        Alert(feildNowLangvageValue(sJsonData[ sQueryError ] ? sJsonData[ sQueryError ] : 'web_error'));
        
        if (sJsonData[sQueryWebAction]) {
            doQueryErrorAction(sJsonData[ sQueryWebAction ]);
        }
        
        return false;
    }
    
    return true;
}

function doQueryErrorAction (aAction = [])
{
    if (!aAction) {
        return false;
    }
    
    for (let i in aAction) {
        consoleLog(i);
        consoleLog(aAction[ i ]);
        switch (i) {
            case sDelLocalstorage :
                for (let j in aAction[ i ]) {
                    consoleLog(aAction[ i ][ j ]);
                    myStorage.remove(aAction[ i ][ j ]);
                }
                window.location.reload();
                break;
        }
    }
}