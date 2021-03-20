//检测手机端还是电脑端
let bMobile = false; // 是否手机端
let iWinWidth = 0;
let iWinHeight = 0;

let beginTimer;
const bLoacl = true; //本地修改测试
//api 地址 列表
const aApiUrl = !bLoacl ? [
    'http://a.project.ren',
    'http://b.project.ren',
    'http://c.project.ren',
    'http://d.project.ren',
    'http://e.project.ren',
    'http://f.project.ren',
    'http://g.project.ren',
    'http://h.project.ren',
    'http://i.project.ren',
    'http://j.project.ren',
    'http://k.project.ren',
    'http://l.project.ren',
    'http://m.project.ren',
    'http://n.project.ren',
    'http://o.project.ren',
    'http://p.project.ren',
    'http://q.project.ren',
    'http://r.project.ren',
    'http://s.project.ren',
    'http://t.project.ren',
    'http://u.project.ren',
    'http://v.project.ren',
    'http://w.project.ren',
    'http://x.project.ren',
    'http://y.project.ren',
    'http://z.project.ren',
] : [
    'http://a.project.ren',
    'http://b.project.ren',
    'http://c.project.ren',
    'http://d.project.ren',
    'http://e.project.ren',
    'http://f.project.ren',
    'http://g.project.ren',
    'http://h.project.ren',
    'http://i.project.ren',
    'http://j.project.ren',
    'http://k.project.ren',
    'http://l.project.ren',
    'http://m.project.ren',
    'http://n.project.ren',
    'http://o.project.ren',
    'http://p.project.ren',
    'http://q.project.ren',
    'http://r.project.ren',
    'http://s.project.ren',
    'http://t.project.ren',
    'http://u.project.ren',
    'http://v.project.ren',
    'http://w.project.ren',
    'http://x.project.ren',
    'http://y.project.ren',
    'http://z.project.ren',
];

//静态资源 地址列表
const aStaticResouresUrl = aApiUrl;
//api 地址列表 数组 长度
const iApiUrlArrayLength = 25;
//静态资源 地址列表 数组 长度
const iStaticResouresUrlArrayLength = 25;


// const sStaticResouresPathName = 'static_resource'; //静态资源目录
const aAllowStaticResouresTyep = ['js', 'css']; //允许的静态资源类型
let iBrowserDefaultFontSize = 0;
const iLineMinFontNumber = 26; // 每行最少显示字数
//设置 css rem
let iFontSize;
// js 版本号
const oJsFileVersion = new Object();
oJsFileVersion.jquery = 0;
oJsFileVersion.rsa = 0;
oJsFileVersion.lang = 0;
oJsFileVersion.encode = 0;
oJsFileVersion.write_dom = 0;
oJsFileVersion.admin_write_dom = 0;
oJsFileVersion.query = 0;
oJsFileVersion.check = 0;
oJsFileVersion.admin_check = 0;
oJsFileVersion.public_check = 0;
oJsFileVersion.home_query = 0;
oJsFileVersion.admin_query = 0;
oJsFileVersion.rsa = 0;
// css 版本号
const oCssFileVersion = new Object();
oCssFileVersion.reset = 0;
oCssFileVersion.css_index = 0;
oCssFileVersion.one = 0;
oCssFileVersion.platform_reset = 0;
oCssFileVersion.admin_index = 0;
oCssFileVersion.admin_one = 0;
oCssFileVersion.admin_platform_reset = 0;
oCssFileVersion.home_public_css = 0;
oCssFileVersion.admin_public_css = 0;
const sDefaultLangguage = 'cn'; // 默认语言包
let aLoadLangvage = new Array();
let bAlreadyLoadEncodeJs = false;
let bAlreadyLoadQueryJs = false;
let bAlreadyLoadPlatQueryJs = false;
let aLoadWriteDomJs = new Array();
let aLoadPublicCheckJs = new Array();
let aLoadCheckJs = new Array();
//写页面
let writePageTimer;
const sHttp = 'http';

//引用对应页面的css
const sAdminHomePage = 'admin_index.html'; // 后台home页面
const sAdminLoginPageName = 'login.html'; // 后台home页面
const sAdminMoreActionPage = 'more_action.html'; // 后台添加home菜单页面
//引用个性化页面的css
const sDefaultStyle = '1'; // 默认样式
const iLongTouchTime = 3000; // 确认屏幕长按时间
const sIndexPageName = 'index.html'; //index 页面文件名字
//重写 alert 框
let alertTimer;
let bAlreadyInWrite = false; //是否在写页面中
// let bLoadLangJs = false; //是否在引用语言包
let aLoadNeedCss = new Array();
let iNowZIndex = 1;
//滚动浏览器标题
let rollBrowserTitleTimer;//滚动浏览器标题定时器
let rollBrowserTitleInterval = 500;//滚动浏览器标题定时器间隔时间
let switchIndexPageActionTimer; //index 页面选择操作定时器
const sIndexPageNameTag = 0;
const sCahtPageName = 'chat.html'; //聊天页面文件名字
const sMorePageName = 'more.html'; //more页面文件名字
const sSetPageName = 'set.html'; //set页面文件名字
const aPageFileName = [
    sIndexPageName,
    sCahtPageName,
    sMorePageName,
    sSetPageName
];
const aPageFileTitle = [
    'host_title',
    'chat_title',
    'more_title',
    'setting_title',
];
let changeUrlAndUpdateActionTimer;
const iBottomHiddenPx = 500;// 向下隐藏像素
let noticeTimer;
// let iNoticeTimerInterval = 30;
const aLoadingImage = [
    'loading.png',
    'loading1.png',
    'loading2.png',
    'loading3.png',
    'loading4.png',
    'loading5.png',
    'loading6.png',
    'loading7.png'
];
const iLoadingImageLength = 7;
const iMoveSpeed = 200;// 运动速度
const iShowLoadingTime = 3000; //show loading 时间
//缓冲dom
let showLoadingTimer; // loading 定时器
//钩子
const aHook = {
    begin: {
        loadPublicCheckJs: 'loadPublicCheckJs',
        loadCheckJs: 'loadCheckJs',
        loadQueryJs: 'loadQueryJs',
        loadPlatQueryJs: 'loadPlatQueryJs',
        findDimensions: 'findDimensions',
        checkBrowserDefaultFontSize: 'checkBrowserDefaultFontSize',
        setOneRemSize: 'setOneRemSize',
    },
    
    loginInAdmin: {
        afterLoginInAdmin: 'afterLoginInAdmin',
    },
    
    query: {
        cache: 'cache',
    },
    
    makeSessionKey : {
        makeSessionKey: 'makeSessionKey',
    },
    
    queryAdminMenus : {
        queryAdminMenus: 'writeAdminMeunu',
    },
    
    outAdmin : {
        afterOutAdmin : 'afterOutAdmin',
    },
    
    menuList : {
        showMenuList : 'showMenuList',
    },
    
    oneMenuDetail : {
        oneMenuDetail : 'oneMenuDetail',
    },
};
//获取函数名
Function.prototype.getName = function(){
    return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]
}

// let writeBodyTimer; // 写页面定时器
const iWriteBodyInterval = 30; // 写页面定时器时间
const bProduction = false; //是否生产环境
let bLoadOriginJquery = false;
let bLoadLocalJquery = false;
let bInLoadOriginJquery = false;
// let bLoadLocalQuery = false;
// let bAlreadyLoadEncodeJs = false;
let iLoadLocalJqueryNumber = 0; //load local jquery number
let iMaxLoadLocalJqueryNumber = 99; //load local jquery number
let loadLocalJqueyTimer; // 写页面定时器
let loadOriginJqueyTimer; // 写页面定时器
const iLoadLocalJqueryInterval = 3000; // load local jquery interval time
const iLoadOriginJqueryInterval = 500; // load local jquery interval time
const iCheckResizeEndInterVal = 300; // check resize end interval time
let checkResizeEndtimer; // check resize end interval
let sSessionKey = ''; // session key
let sMd5SessionKey = '';
let sCharset = 'utf-8';
// let sIp = '';
// let sIpCityName = '';
let sSessionAdminKey = 'admin_session_tag';
let sSessionAdminMd5Key = 'admin_session_tag_md5';
let sSessionAdminKeyLeftTime = 60 * 60 * 3;
let sSessionUserKey = 'user_session_tag';
let sSessionUserMd5Key = 'user_session_tag_md5';
let sSessionUserKeyLeftTime = 60 * 60 * 72;
// let sIpRandString = '';
let bInMakeSessionKey = false;
let sTag = '_';
const sRandString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let iLastRequestTime = getNowTimeSecond();
let iUserNoActionTimeOut = 60 * 60 * 3;
// let iUserNoActionTimeOut = 1;
let iCheckUserIsSleepInterval = (parseInt(iUserNoActionTimeOut) - 60) * 1000;
// let iCheckUserIsSleepInterval = 1000;
let queryTimer;
const sSonTreeSonFeild = 'sons';
// let userIp = ''
// let userIpTimer;
// let makeSessionKeyTimer;

// function getIp () {
//     dynamicLoadJs('http://pv.sohu.com/cityjson?ie=' + sCharset, function () {
//         sIp = returnCitySN.cip;
//         sIpCityName = returnCitySN.cname;
//     });
// }
// getIp();
// function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
//     //compatibility for firefox and chrome
//     var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
//     var pc = new myPeerConnection({
//                                       iceServers: []
//                                   }),
//         noop = function() {},
//         localIPs = {},
//         ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
//         key;
//
//     function iterateIP(ip) {
//         if (!localIPs[ip]) onNewIP(ip);
//         localIPs[ip] = true;
//     }
//
//     //create a bogus data channel
//     pc.createDataChannel("");
//
//     // create offer and set local description
//     pc.createOffer().then(function(sdp) {
//         sdp.sdp.split('\n').forEach(function(line) {
//             if (line.indexOf('candidate') < 0) return;
//             line.match(ipRegex).forEach(iterateIP);
//         });
//
//         pc.setLocalDescription(sdp, noop, noop);
//     }).catch(function(reason) {
//         // An error occurred, so handle the failure to connect
//     });
//
//     //sten for candidate events
//     pc.onicecandidate = function(ice) {
//         if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
//         ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
//     };
// }
//
// // Usage
//
// getUserIP(function(ip){
//     alert("Got IP! :" + ip);
// });
// Usage

// getUserIP(function(ip){
//     // consoleLog("Got IP! :" + ip);
//     userIp = ip;
// });
// const userIpTimerInterval = 1000;
// if (!userIP) {

// userIpTimer = setTimeout(function () {
//     getUserIP();
// consoleLog(userIp);
// }, userIpTimerInterval);
// }

function consoleLog (sInfo) {
    if (!bProduction) {
        console.log(sInfo);
    }
}

//唯一字符串
function uuid() {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    
    let uuid = s.join("");
    return uuid;
}
// consoleLog(uuid());
// consoleLog(uuid());
// consoleLog(uuid());
// consoleLog(uuid());
// consoleLog(uuid());
// consoleLog(sIp);
//////////////////////////////////
// ip 修改 重新生成 session key 后台信息也要同步 删除
const sSessionKeyMd5Salt = 'dasdasmksg45654678(*^&*%@@#';
function makeSessionKey () {
    // consoleLog(userIp);
    // if (!userIp) {
    //     getUserIP();
    //
    //     consoleLog('fffffffffffff');
    //     makeSessionKeyTimer = setTimeout(function () {
    //         makeSessionKey();
    //     }, 20);
    //
    //     return false;
    // }
    
    if (bInMakeSessionKey) {
        return false;
    }
    bInMakeSessionKey = true;
    //
    let sKey = localstorageSessionKey();
    let sMd5Key = localstorageSessionMd5Key();
    // consoleLog(sKey);
    // consoleLog(sMd5Key);
    let iTime = localstorageSessionKeyLiftTime();
    let sSessionLocalKey = myStorage.get(sKey);
    let sSessionLocalMd5Key = myStorage.get(sMd5Key);
    if (sSessionLocalKey && sSessionLocalMd5Key && checkSessionKeyFormat(sSessionLocalKey)) {
        sSessionKey = sSessionLocalKey;
        sMd5SessionKey = sSessionLocalMd5Key;
        
        bInMakeSessionKey = false;
        
        return false;
    }
    
    let sIpRandString = randomString(108, sRandString);
    // sSessionKey = sIp + sTag + sIpCityName + sTag + parseInt(getNowTime() / 1000) + sTag + sIpRandString;
    sSessionKey = md5(uuid()) + sTag + parseInt(getNowTimeSecond()) + sTag + md5(sIpRandString);
    sSessionKey = sSessionKey.toLowerCase();
    // consoleLog(sSessionKey);
    sMd5SessionKey = md5(md5(sSessionKey) + sSessionKeyMd5Salt);
    sMd5SessionKey = sMd5SessionKey.toLowerCase();
    
    myStorage.set(sKey, sSessionKey, iTime);
    myStorage.set(sMd5Key, sMd5SessionKey, iTime);
    
    bInMakeSessionKey = false;
}
function localstorageSessionKeyLiftTime ()
{
    return typeof bAdmin == 'undefined' || !bAdmin ? sSessionUserKeyLeftTime : sSessionAdminKeyLeftTime;
}
function localstorageSessionKey () {
    return typeof bAdmin == 'undefined' || !bAdmin ? sSessionUserKey : sSessionAdminKey;
}
function localstorageSessionMd5Key () {
    return typeof bAdmin == 'undefined' || !bAdmin ? sSessionUserMd5Key : sSessionAdminMd5Key;
}
function checkSessionKeyFormat (sSessionLocalKey) {
    let aSessionKey = sSessionLocalKey.split(sTag);
    if (aSessionKey.length !== 3) {
        return false;
    }
    
    if (aSessionKey[0].length !== 32) {
        return false;
    }
    
    if (aSessionKey[2].length !== 32) {
        return false;
    }
    
    return true;
}

//判断是否为数字
function isRealNum (iValue) {
    // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除，
    if(iValue === '' || iValue ==null){
        return false;
    }
    
    if(!isNaN(iValue)){
        //对于空数组和只有一个数值成员的数组或全是数字组成的字符串，isNaN返回false，例如：'123'、[]、[2]、['123'],isNaN返回false,
        //所以如果不需要val包含这些特殊情况，则这个判断改写为if(!isNaN(val) && typeof val === 'number' )
        return true;
    }
    
    let reg = /^[\d]+$/;
    if (reg.test(iValue)) {
        return true;
    }

    return false;
}

//获取 border-radius
function getObjBorderRadius (sId = '') {
    if (!sId) {
        return 0;
    }
    
    return $('#' + sId).css('border-radius')||bai$('#xx').css('-webkit-border-radius')||$('#xx').css('-moz-border-radius')||$('#xx').css('-o-border-radius');
}

const aTimeField = [
    'add_time',
    'update_time',
    'delete_time',
];
//检查是否时间字段
function judgeWhetherTimeField (sField = '')
{
    if (!sField) {
        return false;
    }
    
    return inArray(sField, aTimeField);
}

//格式化时间 秒
// secondToDate ('YYYY-mm-dd HH:MM:SS', sJsonData[i]);
function secondToDate (sFormat = '', iSecond = 0) {
    if (!iSecond) {
        return false;
    }
    iSecond *= 1000;
    let oDate = new Date(iSecond);
    
    let ret;
    const opt = {
        "Y+": oDate.getFullYear().toString(),        // 年
        "m+": (oDate.getMonth() + 1).toString(),     // 月
        "d+": oDate.getDate().toString(),            // 日
        "H+": oDate.getHours().toString(),           // 时
        "M+": oDate.getMinutes().toString(),         // 分
        "S+": oDate.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(sFormat);
        if (ret) {
            sFormat = sFormat.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return sFormat;
}

let feildNowLangvageValueTimer = [];
//语言
function feildNowLangvageValue (sKey = '')
{
    if (!sKey) {
        return sKey;
    }
    
    // sKey = formatLangKey (sKey);
    sKey = sKey.toLowerCase();
    
    if (typeof aLang[sKey] != 'undefined') {
        return aLang[sKey];
    }
    
    let sTimerKey = md5(getMillisecondTime() + randomString(100, sRandString));
    feildNowLangvageValueTimer[sTimerKey] = setTimeout(function () {
        statisticsNoExistLangFeild(sKey);
        
        clearTimeout(feildNowLangvageValueTimer[sTimerKey]);
    }, 10);
    
    return sKey;
}
const aRepalce = [
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '+',
    '{',
    '}',
    '\|',
    '\\',
    '=',
    ';',
    ':',
    '"',
    '\'',
    '/',
    '?',
    '.',
    '>',
    '<',
    '<',
    '/',
    '*',
    '-',
    '+',
    '·',
    '~',
    '！',
    '@',
    '#',
    '￥',
    '%',
    '……',
    '&',
    '*',
    '）',
    '（',
    '-',
    '_',
    '—',
    '-',
    '=',
    '+',
    '、',
    '’',
    '”',
    '：',
    '；',
    '？',
    '、',
    '》',
    '。',
    '《',
    '，',
    '/',
    '*',
    '-',
    '+',
    ',',
    '\\s*',
    '\\b*',
    '\\d*',
    ',',
];
// let sReg = '';
let aAlreadyStatisticsString = [];
//统计语言包不包含字段
function statisticsNoExistLangFeild (sVal = '')
{
    if (!sVal) {
        return;
    }
    
    if (typeof(sVal) !='string') {
        return;
    }
    
    
    // if (!sReg) {
    //     for (let i in aRepalce) {
    //         sReg += aRepalce[i] + '|';
    //     }
    //     sReg = sReg.substring(0, sReg.length - 1);
    //     sReg = '/[' + sReg + ']+/g';
    //     // consoleLog(sReg)
    // }
    
    let sVal1;
    // for (let i in aRepalce) {
    //     sVal1 = sVal.replace(aRepalce[i], '');
    // }
    // console.log(sReg);
    // console.log('1,94'.replace(/[~|`|!|@|#|$|%|^|&|*|(|)|-|+|{|}|||\|=|;|:|"|'|/|?|.|>|<|<|/|*|-|+|·|~|！|@|#|￥|%|……|&|*|）|（|-|_|—|-|=|+|、|’|”|：|；|？|、|》|。|《|，|/|*|-|+|,|\s*|\b*|\d*|,]+/g, ''));
    // consoleLog(sReg)
    sVal1 = sVal.replace(/[~|`|!|@|#|$|%|^|&|*|(|)|-|+|{|}|||\|=|;|:|"|'|/|?|.|>|<|<|/|*|-|+|·|~|！|@|#|￥|%|……|&|*|）|（|-|_|—|-|=|+|、|’|”|：|；|？|、|》|。|《|，|/|*|-|+|,|\s*|\b*|\d*|,]+/g, '');
    // console.log(sVal1);
    if (!sVal1) {
        return;
    }
    // if (isRealNum(sVal1)) {
    //     return;
    // }
    
    // sVal = formatLangKey (sVal);
    if (inArray(sVal, aAlreadyStatisticsString)) {
        return;
    }
    aAlreadyStatisticsString.push(sVal);
    
    let sApi = 'api/lang/statistics_no_existLang_feild';
    
    
    sendQuery (sApi, 'post', sVal.toLowerCase(), false, false, false);
}
function formatLangKey (sVal) {
    if (typeof(sVal) !='string') {
        return sVal;
    }
    
    // consoleLog(sVal);
    sVal = sVal.replace(/[~|`|!|@|#|$|%|^|&|*|(|)|-|+|{|}|||\|=|;|:|"|'|/|?|.|>|<|<|/|*|-|+|·|~|！|@|#|￥|%|……|&|*|）|（|-|_|—|-|=|+|、|’|”|：|；|？|、|》|。|《|，|/|*|-|+|,|\s*|\b*|\d*|,]+/g, '_');
    return sVal.toLowerCase();
}

//子孙树
function sonTree (sJsonData, iMaxFatherId = 0, sSortFeild, sIdFeild) {
    if (!sJsonData) {
        return false;
    }
    
    let sJsonSonTree = [];
    for (let i in sJsonData) {
        if (sJsonData[i][sSortFeild] == iMaxFatherId) {
            
            let sJsonNow = sJsonData[i];
            delete(sJsonData[i]);
            
            sJsonNow[sSonTreeSonFeild] = sonTree(sJsonData, sJsonNow[sIdFeild], sSortFeild, sIdFeild);
            
            sJsonSonTree.push(sJsonNow);
        }
    }
    
    return sJsonSonTree;
}
//子孙树反转为二维数组
// 格式  son1 / son1-son1 / son1-son1-son1 / son1-son2 / son1-son3
// son1-son3-son1 son1-son3-son2 son1-son3-son2-son1
let aSortData = [];
function sonTreeConvertArray (sJsonData = [], bReset = false)
{
    // console.log(doSonTreeConvertArray(sJsonData, bReset));
    return doSonTreeConvertArray(sJsonData, bReset);
}
function doSonTreeConvertArray (sJsonData = [], bReset = false) {
    if (bReset) {
        aSortData = [];
    }
    
    if (!sJsonData) {
        return [];
    }
    
    for (let i in sJsonData) {
        // delete sJsonData[i][sSonTreeSonFeild];
        aSortData.push(sJsonData[i]);
        
        if (sJsonData[i][sSonTreeSonFeild].length > 0) {
            doSonTreeConvertArray (sJsonData[i][sSonTreeSonFeild]);
        }
    }
    
    for (let i in aSortData) {
        delete aSortData[i][sSonTreeSonFeild];
    }
    
    return aSortData;
}
//检查 二维 json 是否 存在 某一值
//返回键
function checkExistInJson (sKey = '', sValue = '', sJsonData = '') {
    if (!sKey || !sValue || !sJsonData) {
        return false;
    }
    
    for (let i in sJsonData) {
        if (sJsonData[i][sKey] == sValue) {
            return i;
        }
    }
    
    return false;
}
//监听localstorage变化
let listenStorageTimer = [];
function listenStorageChange () {
    if (typeof md5 == 'undefined') {
        let sKey = getMillisecondTime() + randomString(10, sRandString);
        listenStorageTimer[sKey] = setTimeout(function () {
            listenStorageChange ();
            clearTimeout(listenStorageTimer[sKey]);
        }, 10);
        return;
    }
    
    window.addEventListener("storage", function (e) {
        listenStorage(e);
    });
}
listenStorageChange();
function listenStorage (e) {
    consoleLog('storage change');
    // if (typeof md5 == 'undefined') {
    //     listenStorageTimer = setTimeout(function () {
    //         listenStorage (e);
    //     }, 10);
    //     return;
    // }
    
    switch (e.key) {
        // admin out
        case setLocalstorageKey(sAdminOutLcalstorageTag) :
            // consoleLog(e.key);
            // consoleLog(setLocalstorageKey(sAdminAlreadyLoginLocalstorageTag));
            adminCheck();
            break;
        // admin in
        case setLocalstorageKey(sAdminInLcalstorageTag) :
            // consoleLog(e.key);
            // consoleLog(setLocalstorageKey(sAdminAlreadyLoginLocalstorageTag));
            adminCheck();
            break;
    }
}

//提示无权限
function showNoJurisdiction ()
{
    Alert(aLang['jurisdiction_can_see_is_empty']);
}

/////////////////////////////////////////////
function sorts (sJsonData = '', sSortFeild = '', bAsc = 1) {
    if (!sJsonData || !sSortFeild) {
        return false;
    }
    
    let arr = [];
    for (let i in sJsonData) {
        arr.push(sJsonData[i][sSortFeild]);
    }
    
    arr = unique(arr);
    arr = bAsc ? arr.sort(orderAsc) : arr.sort(orderDesc);
    // consoleLog(arr);
    // consoleLog(sJsonData);
    
    // consoleLog(arr);
    let aNewArr = [];
    for (let j in arr) {
        for (let k in sJsonData) {
            if (arr[j] == sJsonData[k][sSortFeild]) {
                aNewArr.push(sJsonData[k]);
            }
        }
    }
    // consoleLog(aNewArr);
    
    return aNewArr;
}
//顺序排序
function orderAsc (a, b) {
    return a - b;
}
//倒序排序
function orderDesc (a, b) {
    return b - a;
}
//数组去重
function unique(arr) {
    return Array.from(new Set(arr))
}

function setUrl (sUri) {
    sUri = sUri ? sUri : '/' + sAdminHomePage;
    sUri = window.location.host + sUri;
    sUri = sUri.replace('//', '/');
    sUri = sHttp + '://' + sUri;
    
    consoleLog(sUri);
    return sUri;
}


//随机字符串
function randomString(length, chars) {
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function isMobile () {
    let pReg = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;

    let u = navigator.userAgent;

    if (null == u) {
        return true;
    }

    let result = pReg.exec(u);
    if (null == result) {
        bMobile = false;
    } else {
        bMobile = true;
    }

    // return typeof bAdmin == 'undefined' ? bMobile : true;
    return bMobile;
}

//用户长时间不操作跳转页面
function checkUserSleep () {
    if (queryTimer) {
        clearTimeout(queryTimer);
    }
    
    if (getNowTimeSecond() - iLastRequestTime > iUserNoActionTimeOut) {
        window.location.href = 'https://www.baidu.com/';
        return false;
    }
    
    queryTimer = setTimeout(function () {
        checkUserSleep();
    }, iCheckUserIsSleepInterval);
}
checkUserSleep();

//按长度分割字符串为数组
function splitLengthArray (sSrting) {
    let aSrting = [];
    let n = 3;
    for (let i = 0, l = sSrting.length; i < l/n; i++) {
        let a = sSrting.slice(n*i, n*(i+1));
        aSrting.push(a);
    }
    
    return aSrting;
}

//函数：获取尺寸
function findDimensions() {
//获取窗口宽度
    if (window.innerWidth)
        iWinWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        iWinWidth = document.body.clientWidth;
//获取窗口高度
    if (window.innerHeight)
        iWinHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        iWinHeight = document.body.clientHeight;
//通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        iWinHeight = document.documentElement.clientHeight;
        iWinWidth = document.documentElement.clientWidth;
    }
}
// findDimensions();
//获取字符串的 哈希值
function getHashCode (sStr, bCaseSensitive = false) {
    if(!bCaseSensitive){
        sStr = sStr.toLowerCase();
    }

    let hash = 1315423911,i,ch;
    for (i = sStr.length - 1; i >= 0; i--) {
        ch = sStr.charCodeAt(i);
        hash ^= ((hash << 5) + ch + (hash >> 2));
    }

    return  (hash & 0x7FFFFFFF);
}

// 设置 请求 静态资源 地址
function setStaticResouresAddress (sResouresName = '', sType = '') {
    if (
        !inArray(sType, aAllowStaticResouresTyep)
        ||
        sResouresName === ''
    ) {
        return false;
    }

    // return aStaticResouresUrl[getHashCode(sResouresName) % iStaticResouresUrlArrayLength] + '/' + sStaticResouresPathName + '/' + sType + '/' + sResouresName + '.' + sType;
    return aStaticResouresUrl[getHashCode(sResouresName) % iStaticResouresUrlArrayLength] + '/' + sResouresName + '.' + sType;
}
// consoleLog(setStaticResouresAddress('sasa', 'js'));

// 设置 请求 api 地址
function setApitAddress () {

}

function inArray (sSearch, aArray) {
    for(var i in aArray){
        if(aArray[i] == sSearch){
            return true;
        }
    }

    return false;
}

// 动态加载JS
function dynamicLoadJs (sUrl, sCallback) {
    let oHead = document.getElementsByTagName('head')[0];
    let oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.src = sUrl;
    oScript.async = 'async';
    oScript.charset = sCharset;
    if(typeof(sCallback)=='function'){
        oScript.onload = oScript.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete'){
                sCallback();
                oScript.onload = oScript.onreadystatechange = null;
            }
        };
    }
    oHead.appendChild(oScript);
}

// 动态加载CSS
function dynamicLoadCss (sUrl) {
    let oHead = document.getElementsByTagName('head')[0];
    let oLink = document.createElement('link');
    oLink.type='text/css';
    oLink.rel = 'stylesheet';
    oLink.href = sUrl;
    oLink.charset = sCharset;
    oHead.appendChild(oLink);
}

function checkBrowserDefaultFontSize () {
    iBrowserDefaultFontSize = window.getComputedStyle(document.body,null).getPropertyValue('font-size');//浏览器默认字体大小
    // consoleLog(iBrowserDefaultFontSize);
    iBrowserDefaultFontSize = iBrowserDefaultFontSize == 'undefined' || iBrowserDefaultFontSize == '' || !iBrowserDefaultFontSize ? '' : iBrowserDefaultFontSize;
    iBrowserDefaultFontSize = parseInt(iBrowserDefaultFontSize);
}

function setOneRemSize () {
    // consoleLog(iWinWidth);
    // consoleLog(iWinHeight);
    // let iLineShowFontNumber = parseInt(iWinWidth / iBrowserDefaultFontSize);
    // if (bMobile) {
    //     iLineShowFontNumber = iLineShowFontNumber > iLineMinFontNumber ? iLineShowFontNumber : iLineMinFontNumber;
    // }
    // iFontSize = parseInt(iWinWidth / iLineShowFontNumber);
    iFontSize = iBrowserDefaultFontSize ? parseInt(iBrowserDefaultFontSize) : parseInt(iWinWidth / iLineMinFontNumber);

    document.getElementsByTagName('html')[0].style.fontSize = iFontSize + 'px';
    // document.getElementsByTagName('html')[0].style.fontSize = 45 + 'px';
}

//设置头高度
// const iHeaderHeightProportion = 0.1;//头占总高比例
// let iHeaderHeight;
// function setHeadHeight () {
//     let iHieght1 = iWinHeight * iHeaderHeightProportion;
//     let iHieght2 = iFontSize * 3;
//     iHeaderHeight = iHieght1 > iHieght2 ? iHieght1 : iHieght2;
// }
// setOneRemSize();


// let iLoadOriginJqueryNowNumber = 0; //当前请求远程jquery次数
// const iLoadOriginJqueryMaxNumber = 2; //最大请求远程jquery次数
// const iLoadJqueryInterval = 3000; //请求jquery 时间间隔
// let loadOriginJqueryTimer; //请求远程jquery定时器
// let bAlreadyLoadLoaclJquery = false;
//检查 jquery 是否加载
// function checkAlreadyLoadJquery () {
    // if (loadOriginJqueryTimer) {
    //     clearTimeout(loadOriginJqueryTimer);
    // }
    //
    // try {
    //     if (typeof jQuery == 'undefined') {
    //         if (iLoadOriginJqueryNowNumber < iLoadOriginJqueryMaxNumber) {
    //             iLoadOriginJqueryNowNumber += 1;
    //             dynamicLoadJs('http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js');
    //         } else {
    //             if (!bAlreadyLoadLoaclJquery) {
    //                 dynamicLoadJs(setStaticResouresAddress('public/jquery_' + oJsFileVersion.jquery, 'js'));
    //                 bAlreadyLoadLoaclJquery = true;
    //             }
    //         }
    //
    //         loadOriginJqueryTimer = setTimeout(function () {
    //             checkAlreadyLoadJquery();
    //         }, iLoadJqueryInterval);
    //     }
    // } catch (e) {}
// }

function loadDefaultLangvageJs () {
    let sLangvageFileName = setStaticResouresAddress('public/lang/' + sDefaultLangguage + '_' + oJsFileVersion.lang, 'js');
    if (!inArray (sLangvageFileName, aLoadLangvage)) {
        aLoadLangvage.push(sLangvageFileName);
        
        dynamicLoadJs(sLangvageFileName);
    }
}

function loadLanguageJs () {
    let sLanguage = myStorage.get('individuationLangguage');
    if (sLanguage) {
        let sLangvageFileName = setStaticResouresAddress('public/lang/' + sLanguage + '_' + oJsFileVersion.lang, 'js');
        if (inArray (sLangvageFileName, aLoadLangvage)) {
            aLoadLangvage.push(sLangvageFileName);
    
            dynamicLoadJs(sLangvageFileName);
        }
    }
}

function loadEncodeJs () {
    if (bAlreadyLoadEncodeJs) {
        return false;
    }
    bAlreadyLoadEncodeJs = true;

    dynamicLoadJs(setStaticResouresAddress('public/encode_' + oJsFileVersion.encode, 'js'));
    // dynamicLoadJs(setStaticResouresAddress('public/rsa_' + oJsFileVersion.rsa, 'js'));
}

function loadQueryJs () {
    if (bAlreadyLoadQueryJs) {
        return false;
    }
    bAlreadyLoadQueryJs = true;

    dynamicLoadJs(setStaticResouresAddress('public/query_' + oJsFileVersion.query, 'js'));
}

function loadPlatQueryJs () {
    if (bAlreadyLoadPlatQueryJs) {
        return false;
    }
    bAlreadyLoadPlatQueryJs = true;

    let sFileName;
    let sVersion;
    if (typeof bAdmin == 'undefined') {
        sFileName = 'home/query';
        sVersion = oJsFileVersion.home_query;
    } else {
        sFileName = 'admin/query';
        sVersion = oJsFileVersion.admin_query;
    }

    dynamicLoadJs(setStaticResouresAddress(sFileName + '_' + sVersion, 'js'));
}

function loadWriteDomJs () {
    let sPlat;
    let sVersion;
    let sPath;
    if (typeof bAdmin == 'undefined') {
        sPlat = 'home';
        sPath = isMobile() ? 'mobile' : 'computer';
        sVersion = oJsFileVersion.write_dom;
    } else {
        sPlat = 'admin';
        sPath = 'computer';
        sVersion = oJsFileVersion.admin_write_dom;
    }

    let sDomFileName = setStaticResouresAddress(sPlat + '/' + sPath + '/write_dom_' + sVersion, 'js');
    // consoleLog(sDomFileName);
    if (inArray (sDomFileName, aLoadWriteDomJs)) {
        // return false;
        // consoleLog('true');
        return true;
    }
    aLoadWriteDomJs.push(sDomFileName);
    // consoleLog('===');
    // consoleLog(aLoadWriteDomJs);

    dynamicLoadJs(sDomFileName);

    // consoleLog('false');
    return false;
}

function loadPublicCheckJs () {
    let sFile = 'public_check';
    let sPath = 'public';

    let sCheckJsFileName = setStaticResouresAddress(sPath + '/' + sFile + '_' + oJsFileVersion.public_check, 'js');
    if (inArray (sCheckJsFileName, aLoadPublicCheckJs)) {
        return true;
    }
    aLoadPublicCheckJs.push(sCheckJsFileName);

    dynamicLoadJs(sCheckJsFileName);

    return false;
}

function loadCheckJs () {
    let sFile;
    let sVersion;
    let sPath = 'public';
    if (typeof bAdmin == 'undefined') {
        // sPlat = 'home';
        sPath = isMobile() ? 'home/mobile' : 'home/computer';
        sVersion = oJsFileVersion.check;
        sFile = 'check';
    } else {
        // sPlat = 'admin';
        sPath = 'admin/computer';
        sVersion = oJsFileVersion.admin_check;
        sFile = 'check';
    }

    let sCheckJsFileName = setStaticResouresAddress(sPath + '/' + sFile + '_' + sVersion, 'js');
    // consoleLog(sCheckJsFileName);
    // consoleLog(aLoadCheckJs);
    if (inArray (sCheckJsFileName, aLoadCheckJs)) {
        // return false;
        // consoleLog('true');
        return true;
    }
    aLoadCheckJs.push(sCheckJsFileName);
    // consoleLog('===');
    // consoleLog(aLoadCheckJs);

    dynamicLoadJs(sCheckJsFileName);

    // consoleLog('false');
    return false;
}

function loadResetCss () {
    // dynamicLoadCss(setStaticResouresAddress('public/reset_' + oCssFileVersion.reset, 'css'));
    let sResetCssFile = setStaticResouresAddress('public/reset_' + oCssFileVersion.reset, 'css');
    if (!inArray (sResetCssFile, aLoadNeedCss)) {
        dynamicLoadCss(sResetCssFile);
        aLoadNeedCss.push(sResetCssFile);
    }
}
function loadPlatformResetCss () {
    let sPlat;
    let sVersion;
    let sPath = ''
    if (typeof bAdmin == 'undefined') {
        sPlat = 'home';
        sPath = isMobile() ? 'mobile' : 'computer';
        sVersion = oCssFileVersion.platform_reset;
    } else {
        sPlat = 'admin';
        sPath = 'computer';
        sVersion = oCssFileVersion.admin_platform_reset;
    }

    // dynamicLoadCss(setStaticResouresAddress(sPlat + '/' + sPath +  '/platform_reset_' + sVersion, 'css'));
    let sPlatformResetCss = setStaticResouresAddress(sPlat + '/' + sPath +  '/platform_reset_' + sVersion, 'css');
    if (!inArray (sPlatformResetCss, aLoadNeedCss)) {
        dynamicLoadCss(sPlatformResetCss);
        aLoadNeedCss.push(sPlatformResetCss);
    }
}

//获取访问的是那个页面
function queryWhatPage () {
    let aLocation = window.location.href.split('?');
    aLocation = aLocation[0].split('/');
    let sNowPageFileName = aLocation[aLocation.length - 1].split('?')[0];
    sNowPageFileName = sNowPageFileName ? sNowPageFileName : sIndexPageName;
    return sNowPageFileName;
}

function loadNowCss () {
    consoleLog(queryWhatPage());
    let sNowCssFileName = '';
    let sNowCssFileVersion = '';
    let sSTaticFilePath = '';
    switch (queryWhatPage()) {
        case sIndexPageName :
            sNowCssFileName = 'index';
            sNowCssFileVersion = oCssFileVersion.css_index;
            sSTaticFilePath = isMobile() ? 'home/mobile' : 'home/computer';
            break;
        case sCahtPageName :
            sNowCssFileName = 'index';
            sNowCssFileVersion = oCssFileVersion.css_index;
            sSTaticFilePath = isMobile() ? 'home/mobile' : 'home/computer';
            break;
        case sMorePageName :
            sNowCssFileName = 'index';
            sNowCssFileVersion = oCssFileVersion.css_index;
            sSTaticFilePath = isMobile() ? 'home/mobile' : 'home/computer';
            break;
        case sSetPageName :
            sNowCssFileName = 'index';
            sNowCssFileVersion = oCssFileVersion.css_index;
            sSTaticFilePath = isMobile() ? 'home/mobile' : 'home/computer';
            break;
        case sAdminHomePage :
            sNowCssFileName = 'admin_index';
            sNowCssFileVersion = oCssFileVersion.admin_index;
            // sSTaticFilePath = isMobile() ? 'admin/mobile' : 'admin/computer';
            sSTaticFilePath = 'admin/computer';
            break;
        case sAdminLoginPageName :
            sNowCssFileName = 'admin_index';
            sNowCssFileVersion = oCssFileVersion.admin_index;
            // sSTaticFilePath = isMobile() ? 'admin/mobile' : 'admin/computer';
            sSTaticFilePath = 'admin/computer';
            break;
        case sAdminMoreActionPage :
            sNowCssFileName = 'admin_index';
            sNowCssFileVersion = oCssFileVersion.admin_index;
            // sSTaticFilePath = isMobile() ? 'admin/mobile' : 'admin/computer';
            sSTaticFilePath = 'admin/computer';
            break;
    }

    if (sNowCssFileName) {
        // dynamicLoadCss(setStaticResouresAddress(sSTaticFilePath + '/' + sNowCssFileName + '_' + sNowCssFileVersion, 'css'));
        let sNowCss = setStaticResouresAddress(sSTaticFilePath + '/' + sNowCssFileName + '_' + sNowCssFileVersion, 'css');
        // consoleLog('ppppppppppppppppppppp');
        // consoleLog(sNowCss);
        if (!inArray (sNowCss, aLoadNeedCss)) {
            // consoleLog('lllllllllllll');
            dynamicLoadCss(sNowCss);
            aLoadNeedCss.push(sNowCss);
        }
    }
}
function loadNowPublicCss () {
    consoleLog(queryWhatPage());
    let sNowCssFileName = 'public';
    let sNowCssFileVersion = '';
    let sSTaticFilePath = '';
    switch (queryWhatPage()) {
        case sIndexPageName :
            // sNowCssFileName = 'index';
            sNowCssFileVersion = oCssFileVersion.home_public_css;
            sSTaticFilePath = isMobile() ? 'home/mobile' : 'home/computer';
            break;
        case sCahtPageName :
            // sNowCssFileName = 'index';
            sNowCssFileVersion = oCssFileVersion.home_public_css;
            sSTaticFilePath = isMobile() ? 'home/mobile' : 'home/computer';
            break;
        case sMorePageName :
            // sNowCssFileName = 'index';
            sNowCssFileVersion = oCssFileVersion.home_public_css;
            sSTaticFilePath = isMobile() ? 'home/mobile' : 'home/computer';
            break;
        case sSetPageName :
            // sNowCssFileName = 'index';
            sNowCssFileVersion = oCssFileVersion.home_public_css;
            sSTaticFilePath = isMobile() ? 'home/mobile' : 'home/computer';
            break;
        case sAdminHomePage :
            // sNowCssFileName = 'admin_index';
            sNowCssFileVersion = oCssFileVersion.admin_public_css;
            // sSTaticFilePath = isMobile() ? 'admin/mobile' : 'admin/computer';
            sSTaticFilePath = 'admin/computer';
            break;
        case sAdminLoginPageName :
            // sNowCssFileName = 'admin_index';
            sNowCssFileVersion = oCssFileVersion.admin_public_css;
            // sSTaticFilePath = isMobile() ? 'admin/mobile' : 'admin/computer';
            sSTaticFilePath = 'admin/computer';
            break;
        case sAdminMoreActionPage :
            // sNowCssFileName = 'admin_index';
            sNowCssFileVersion = oCssFileVersion.admin_public_css;
            // sSTaticFilePath = isMobile() ? 'admin/mobile' : 'admin/computer';
            sSTaticFilePath = 'admin/computer';
            break;
    }

    // if (sNowCssFileName) {
        // dynamicLoadCss(setStaticResouresAddress(sSTaticFilePath + '/' + sNowCssFileName + '_' + sNowCssFileVersion, 'css'));
        let sNowPublicCss = setStaticResouresAddress(sSTaticFilePath + '/' + sNowCssFileName + '_' + sNowCssFileVersion, 'css');
    // consoleLog('***************');
    consoleLog(sNowPublicCss);
        if (!inArray (sNowPublicCss, aLoadNeedCss)) {
            dynamicLoadCss(sNowPublicCss);
            aLoadNeedCss.push(sNowPublicCss);
        }
    // }
}

function loadIndividuationCss () {
    let sPath;
    let sStyle;
    let sNowCssFileVersion;
    if (typeof bAdmin == 'undefined') {
        sPath = 'home';
        sStyle = myStorage.get('individuationStyle');
        sStyle = sStyle ? sStyle : sDefaultStyle;
        sNowCssFileVersion = '';
        switch (sStyle) {
            case '1' :
                sNowCssFileVersion = oCssFileVersion.one;
                break;
        }
    } else {
        sPath = 'admin';
        sStyle = '1';
        sNowCssFileVersion = oCssFileVersion.admin_one;
    }

    // dynamicLoadCss(setStaticResouresAddress('individuation_style/' + 'color_' + sStyle + '_' + sNowCssFileVersion, 'css'));
    let sIndividuationCss = setStaticResouresAddress(sPath + '/individuation_style/' + 'color_' + sStyle + '_' + sNowCssFileVersion, 'css');
    if (!inArray (sIndividuationCss, aLoadNeedCss)) {
        dynamicLoadCss(sIndividuationCss);
        aLoadNeedCss.push(sIndividuationCss);
    }
}

// function testRsa () {
//     consoleLog(1);
//     dynamicLoadJs(setStaticResouresAddress('public/rsa_' + oJsFileVersion.rsa, 'js'), testDoRsa);
// }

/*
存储localstorage时候最好是封装一个自己的键值，在这个值里存储自己的内容对象，封装一个方法针对自己对象进行操作。避免冲突也会在开发中更方便。
*/
/////////////////////////////////////////////////////////
function setLocalstorageKey (sKey) {
    let sSalt = sKey.substring(0, parseInt(sKey.length / 2));
    // return md5(sSalt + '-' + window.location.host + '-' + sKey);
    return sKey;
}
let myStorage = (function myStorage () {
    if (!window.localStorage ) {
        Alert('localstorage error');
        return '';
    }

    let set = function (sKey, sValue, iLeftTime = false) {
        //存储
        sValue = iLeftTime ? {'sData': sValue, 'iLiftTime': iLeftTime * 1000, 'iSetTime': getMillisecondTime()} : {'sData': sValue};

        sValue = JSON.stringify(sValue);
        /////////////////////////////////////
        // sValue = encodeLocalstorageData(sValue);
        sValue = sValue;

        return localStorage.setItem(setLocalstorageKey(sKey), sValue);
    };

    let get = function (sKey, bUpdateLifttime = true) {
        //读取
        let sKey1 = sKey;
        let oData = localStorage.getItem(setLocalstorageKey(sKey));
        if (!oData) {
            return '';
        }
        ////////////////////////////////////////
        // oData = decodeLocalstorageData(oData);
        oData = oData;
        oData = JSON.parse(oData);

        try {
            if (typeof oData.iLiftTime != 'undefined') {
                if (getMillisecondTime() - oData.iSetTime > oData.iLiftTime) {
                    remove(sKey1);
                    return '';
                } else {
                    if (bUpdateLifttime) {
                        set(sKey1, oData.sData, oData.iLiftTime / 1000);
                    }
                }
            }

            return oData.sData;
        } catch (e) {}
    };

    let remove = function (sKey) {
        //读取
        sKey = setLocalstorageKey(sKey);
        let oData = localStorage.getItem(sKey);
        if(!oData){
            return true;
        }

        return localStorage.removeItem(sKey);
    };

    let clear = function() {
        //清除对象
        localStorage.clear();
    };

    return {
        set : set,
        get : get,
        remove : remove,
        clear : clear
    };
})();

//更新语言包后操作
function afterRelang () {
    writePublicHeader();
}

// 设置 图片 请求地址
function setStaticResouresImageAddress (sResouresName) {
    return aStaticResouresUrl[getHashCode(sResouresName) % iStaticResouresUrlArrayLength] + '/' + sResouresName;
}

// var d = new ArrayKeyValPairObject();
// d.put("CN", "China");
// d.put("US", "America");
//数组键值对
function ArrayKeyValPairObject(){
    this.data = new Array();

    this.put = function(key,value){
        this.data[key] = value;
    };

    this.get = function(key){
        return this.data[key];
    };

    this.remove = function(key){
        this.data[key] = null;
    };

    this.isEmpty = function(){
        return this.data.length == 0;
    };

    this.size = function(){
        return this.data.length;
    };
}

//获取现在操作的URL 不包含host
function queryNowActionUrl () {
    let aNowUrl = window.location.href.split('/');
    return aNowUrl[aNowUrl.length - 1];
}
//检查滑动方向
function examineOrientation () {
    $('body').on('touchstart', function(e) {
        iTouchStartTime = getMillisecondTime();

        e.preventDefault();

        fStartX = e.originalEvent.changedTouches[0].pageX;
        fStartY = e.originalEvent.changedTouches[0].pageY;
    });
    $('body').on('touchend', function(e) {
        iTouchEndTime = getMillisecondTime();

        e.preventDefault();

        fEndX = e.originalEvent.changedTouches[0].pageX;
        fEndY = e.originalEvent.changedTouches[0].pageY;

        let X = fEndX - fStartX;
        let Y = fEndY - fStartY;

        //上下滑动
        if (Math.abs(Y) > Math.abs(X)) {
            if (Y >= 0) {
                downFunction();
                return false;
            }

            topFunction();
            return false;
        }

        if (Math.abs(X) > Math.abs(Y)) {
            //左右划
            if (X >= 0) {
                rightFunction();
                return false;
            }

            leftFunction();
            return false;
        }

        if (iTouchEndTime - iTouchStartTime >= iLongTouchTime) {
            longTouchFunction();
            return false;
        }
    });

    return false;
}
//下滑操作
function downFunction () {
    consoleLog('bottom');

    if (typeof window[queryWhatPage().split('.')[0] + 'DownFunction'] === 'undefined') {
        consoleLog('no ' + queryWhatPage().split('.')[0] + ' DownFunction');
        return false;
    }

    window[queryWhatPage().split('.')[0] + 'DownFunction']();
}
//上滑操作
function topFunction () {
    consoleLog('top');

    if (typeof window[queryWhatPage().split('.')[0] + 'TopFunction'] === 'undefined') {
        consoleLog('no ' + queryWhatPage().split('.')[0] + ' TopFunction');
        return false;
    }

    window[queryWhatPage().split('.')[0] + 'TopFunction']();
}
//右滑操作
function rightFunction () {
    consoleLog('right');

    if (typeof window[queryWhatPage().split('.')[0] + 'RightFunction'] === 'undefined') {
        consoleLog('no ' + queryWhatPage().split('.')[0] + ' RightFunction');
        return false;
    }

    window[queryWhatPage().split('.')[0] + 'RightFunction']();
}
//左滑操作
function leftFunction () {
    consoleLog('left');

    if (typeof window[queryWhatPage().split('.')[0] + 'LeftFunction'] === 'undefined') {
        consoleLog('no ' + queryWhatPage().split('.')[0] + ' LeftFunction');
        return false;
    }

    window[queryWhatPage().split('.')[0] + 'LeftFunction']();
}
//长按操作
function longTouchFunction () {
    consoleLog('long');

    if (typeof window[queryWhatPage().split('.')[0] + 'LongTouchFunction'] === 'undefined') {
        consoleLog('no ' + queryWhatPage().split('.')[0] + ' LongTouchFunction');
        return false;
    }

    window[queryWhatPage().split('.')[0] + 'LongTouchFunction']();
}

// set页面右滑
function setRightFunction () {
    consoleLog('set right function');
    if (bInSetBodyChangeLangvage) {
        consoleLog('set change langvage right function');
        showChangeLangvage(false);
    }
}

//index页面右滑
function indexRightFunction () {
    consoleLog('index right');
    headerRightFunction();
}
let iIndexHeaderRightNumber = 0;
function headerRightFunction () {
    consoleLog('header right');
    iIndexHeaderRightNumber -= 1;

    let oIndexHeaderUl = document.getElementById('index_header_actions_ul');
    let oIndexHeaderLi = oIndexHeaderUl.getElementsByTagName('li');

    iIndexHeaderRightNumber = iIndexHeaderRightNumber >= 0 ? iIndexHeaderRightNumber : oIndexHeaderLi.length - 1;

    afterChangeIndexHeaderAction(oIndexHeaderUl, oIndexHeaderLi, iIndexHeaderRightNumber);
}
function indexLeftFunction (iOnclickIndex = false) {
    consoleLog('index left');
    headerLeftFunction(iOnclickIndex);
}
function headerLeftFunction (iOnclickIndex = false) {
    consoleLog('header left');
    let oIndexHeaderUl = document.getElementById('index_header_actions_ul');
    let oIndexHeaderLi = oIndexHeaderUl.getElementsByTagName('li');

    if (iOnclickIndex === false) {
        iIndexHeaderRightNumber = parseInt(iIndexHeaderRightNumber) + parseInt(1);

        iIndexHeaderRightNumber = iIndexHeaderRightNumber >= oIndexHeaderLi.length ? 0 : iIndexHeaderRightNumber;
    } else {
        iIndexHeaderRightNumber = iOnclickIndex;
    }

    afterChangeIndexHeaderAction(oIndexHeaderUl, oIndexHeaderLi, iIndexHeaderRightNumber);
}
function afterChangeIndexHeaderAction (oIndexHeaderUl, oIndexHeaderLi, iIndexHeaderRightNumber) {
    $(oIndexHeaderLi).removeClass('now_index_header_actions');
    $(oIndexHeaderLi[iIndexHeaderRightNumber]).addClass('now_index_header_actions');

    let oNowIndexHeaderAction = oIndexHeaderLi[iIndexHeaderRightNumber];
    let iIndexHeaderActionsLeft = oNowIndexHeaderAction.getAttribute('_left');
    $(oIndexHeaderUl).animate({left: '-' + iIndexHeaderActionsLeft}, iMoveSpeed);

    let oIndexBodyUl = document.getElementById('index_data_body_ul');
    let oIndexBodyLi = oIndexBodyUl.getElementsByTagName('li');
    let iIndexBodyLeft = oIndexBodyLi[iIndexHeaderRightNumber].getAttribute('_left');
    $(oIndexBodyUl).animate({left: '-' + iIndexBodyLeft}, iMoveSpeed);

    // consoleLog('---');
    let aUrlArgs = getAllQueryVariable();
    aUrlArgs['now_index_page_action_index'] = oNowIndexHeaderAction.getAttribute('_replace_index_url_now_action');
    // consoleLog(aUrlArgs);
    // consoleLog(aUrlArgs['now_index_page_action_index']);
    // let oArray = new ArrayKeyValPairObject();
    // oArray.put('now_index_page_action_index', oNowIndexHeaderAction.getAttribute('_replace_index_url_now_action'));
    changeIndexUrlArgs(aUrlArgs, oNowIndexHeaderAction);
}
function changeIndexUrlArgs (aUrlArgs, oNowIndexHeaderAction) {
    // consoleLog(aUrlArgs);
    let sUrlArg = '';
    for (let i in aUrlArgs) {
        sUrlArg += i + '=' + aUrlArgs[i] + '&';
    }
    sUrlArg = sUrlArg.substring(0, sUrlArg.length - 1);
    let sTitle = aLang['host_title'] + aLang['browser_title_interval_tag'] + aLang[oNowIndexHeaderAction.getElementsByTagName('span')[0].getAttribute('_origin_lang')] + aLang['browser_title_end_tag'];

    // let aNowUrl = queryNowActionUrl();
    // if (aNowUrl[aNowUrl.length - 1] === sUrl) {
    //     return false;
    // }
    // consoleLog(sTitle, sIndexPageName, sUrlArg);

    setCurrentUrl(sTitle, sIndexPageName, sUrlArg);
}
function indexDownFunction () {
    consoleLog('index down');
}
function indexTopFunction () {
    consoleLog('index top');
}
function indexLongTouchFunction () {
    consoleLog('index long touch');
}

//检查需要的js文件已经加载
// function checkNeedJsAlreadyLoad () {
//     let sPalt = isMobile() ? 'Mobile' : 'Computer';
//     // consoleLog(typeof jQuery);
//     // consoleLog('bLoadEncodeJs' + sPalt);
//     // consoleLog(typeof window['bLoadEncodeJs' + sPalt]);
//     // consoleLog('bLoadWriteDom' + sPalt);
//     // consoleLog(window['bLoadWriteDomsComputer']);
//     // consoleLog(typeof bLoadWriteDomComputer);
//     // consoleLog(typeof window['bLoadWriteDom' + sPalt]);
//     // try {
//         if (
//             // bResize === true
//             // ||
//             // typeof jQuery == 'undefined'
//             // ||
//             typeof window['bAlreadyLoadLangJs'] == 'undefined'
//             ||
//             // typeof window['bLoadEncodeJs'] == 'undefined'
//             // ||
//             typeof window['bLoadWriteDom' + sPalt] == 'undefined'
//         ) {
//             consoleLog('======');
//             return false;
//         }
//     // } catch(e) {}
//
//     return true;
// }

// const iALertTimerInterval = 30;
function Alert (sNotice = '') {
    if (!sNotice) {
        // consoleLog(999);
        return false;
    }

    if (!document.getElementById('notice_father')) {
        // consoleLog(9999);
        writeNoticeDom();

        alertTimer = setTimeout(function () {
            Alert(sNotice);
        }, 10);

        return false;
    }

    showLoading(false);

    // consoleLog(99999);
    // consoleLog('-----' + sNotice);
    document.getElementById('notice_info').innerHTML = sNotice;
    centerNoticeDom();
}



// let bInLoadNeedJs = false;
// function loadNeedJs () {
//     // if (bInLoadNeedJs) {
//     //     return false;
//     // }
//
//     // checkAlreadyLoadJquery();
//
//     // loadEncodeJs();
//
//     loadWriteDomJs();
//
//     // bInLoadNeedJs = true;
// }

// function loadNeedCss () {
//     loadResetCss();
//
//     loadPlatformResetCss();
//
//     loadNowPublicCss();
//
//     loadNowCss();
//
//     loadIndividuationCss();
// }

//获取对象样式规则信息，IE下使用currentStyle
function getStyle (obj, style) {
    return obj.currentStyle?obj.currentStyle[style]:getComputedStyle(obj,false)[style];
}
//原生js动画类似jquery--animate
function jsAnimate (obj, styleJson, callback) {
    clearInterval(obj.timer);
    // 开启定时器
    obj.timer = setInterval(function () {
        var flag = true;//假设所有动作都已完成成立。
        for (var styleName in styleJson) {
            //1.取当前属性值
            var iMov = 0;
            // 透明度是小数，所以得单独处理
            iMov=styleName=='opacity'?Math.round(parseFloat(getStyle(obj,styleName))*100):parseInt(getStyle(obj,styleName));

            //2.计算速度
            var speed=0;
            speed=(styleJson[styleName]-iMov)/8;//缓冲处理，这边也可以是固定值
            speed=speed>0?Math.ceil(speed):Math.floor(speed);//区分透明度及小数点，向上取整，向下取整

            //3.判断是否到达预定值
            if(styleJson[styleName]!=iMov){
                flag=false;
                if(styleName=='opacity'){//判断结果是否为透明度
                    obj.style[styleName]=(iMov+speed)/100;
                    obj.style.filter='alpha(opacity:'+(iMov+speed)+')';
                }else{
                    obj.style[styleName]=iMov+speed+'px';
                }
            }
        }
        if(flag){//到达设定值，停止定时器，执行回调
            clearInterval(obj.timer);
            if(callback){callback();}
        }
    },30)
}

function incrZIndex () {
    iNowZIndex += 1;

    return iNowZIndex;
}

//生成从iMinNum到iMaxNum的随机数
function randomNum (iMinNum, iMaxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * iMinNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * ( iMaxNum - iMinNum + 1 ) + iMinNum, 10);
            //或者 Math.floor(Math.random()*( iMaxNum - iMinNum + 1 ) + iMinNum );
            break;
        default:
            return 0;
            break;
    }
}

function rollBrowserTitle () {
    if (rollBrowserTitleTimer) {
        clearTimeout(rollBrowserTitleTimer);
    }
    let sBrowserTitle = document.title;//获得页面的标题

    document.title = sBrowserTitle.substring(1, sBrowserTitle.length) + sBrowserTitle.substring(0, 1);//截取字符重新赋值给title
    // sBrowserTitle = document.title.substring(0, sBrowserTitle.length);

    rollBrowserTitleTimer = setTimeout(function () {
        rollBrowserTitle();
    }, rollBrowserTitleInterval);
}

//选择index页面操作
function switchIndexPageAction (bCompel = false) {
    if (switchIndexPageActionTimer) {
        clearTimeout(switchIndexPageActionTimer);
    }

    if (!document.getElementById('index_data_body')) {
        writeBodyFather();
        switchIndexPageActionTimer = setTimeout(function () {
            switchIndexPageAction(bCompel);
        }, 10);
        return false;
    }

    let sIndexPageNowAction = getQueryVariable('now_index_page_action_index');
    consoleLog(sIndexPageNowAction);
    if (sIndexPageNowAction !== false) {
        switch (sIndexPageNowAction) {
            case '0' :
                indexPageRootAction(sIndexPageNowAction, bCompel);
                break;
            case '1' :
                indexPageRootAction(sIndexPageNowAction, bCompel);
                break;
            case '2' :
                indexPageRootAction(sIndexPageNowAction, bCompel);
                break;
            case '3' :
                indexPageRootAction(sIndexPageNowAction, bCompel);
                break;
            case '4' :
                indexPageRootAction(sIndexPageNowAction, bCompel);
                break;
        }
    }
}
//index 页面根操作
function indexPageRootAction (sIndexPageNowAction, bCompel) {
    let oIndexPageNowAction = $('.index_header_actions_li')[sIndexPageNowAction];
    let sTitle = aLang['host_title'] + aLang['browser_title_interval_tag'] + aLang[oIndexPageNowAction.getElementsByTagName('span')[0].getAttribute('_origin_lang')] + aLang['browser_title_end_tag'];

    setBrowserTitle(sTitle);
    indexLeftFunction(sIndexPageNowAction);

    // consoleLog('indexPageRootActions' + oIndexPageNowAction.getAttribute('_replace_index_url_now_action'));
    window['indexPageRootActions' + oIndexPageNowAction.getAttribute('_replace_index_url_now_action')](bCompel);
}
function indexPageRootActions0 (bCompel = false) {
    consoleLog('action 0 check');
    if (
        typeof $('.index_data_body_li_0')[0].getElementsByTagName('div')[0].getElementsByTagName('li')[0] === 'undefined'
        ||
        bCompel
    ) {
        consoleLog('send qing qiu 0');
        return false;
    }
}
function indexPageRootActions1 (bCompel = false) {
    consoleLog('action 1 check');
    if (
        typeof $('.index_data_body_li_1')[0].getElementsByTagName('div')[0].getElementsByTagName('li')[0] === 'undefined'
        ||
        bCompel
    ) {
        consoleLog('send qing qiu 1');
        return false;
    }
}
function indexPageRootActions2 (bCompel = false) {
    consoleLog('action 2 check');
    if (
        typeof $('.index_data_body_li_2')[0].getElementsByTagName('div')[0].getElementsByTagName('li')[0] === 'undefined'
        ||
        bCompel
    ) {
        consoleLog('send qing qiu 2');
        return false;
    }
}
function indexPageRootActions3 (bCompel = false) {
    consoleLog('action 3 check');
    if (
        typeof $('.index_data_body_li_3')[0].getElementsByTagName('div')[0].getElementsByTagName('li')[0] === 'undefined'
        ||
        bCompel
    ) {
        consoleLog('send qing qiu 3');
        return false;
    }
}
function indexPageRootActions4 (bCompel = false) {
    consoleLog('action 4 check');
    if (
        typeof $('.index_data_body_li_4')[0].getElementsByTagName('div')[0].getElementsByTagName('li')[0] === 'undefined'
        ||
        bCompel
    ) {
        consoleLog('send qing qiu 4');
        return false;
    }
}


//替换URL显示页面
function replaceUrlPageFileName (iFooterActionIndexTag, bCompel = false) {
    consoleLog(iFooterActionIndexTag, bCompel);
    // setCurrentUrl();
    let sNowShowPage = queryWhatPage();
    consoleLog(sNowShowPage);
    consoleLog(aPageFileName[iFooterActionIndexTag]);
    consoleLog(sNowShowPage === aPageFileName[iFooterActionIndexTag]);
    if (sNowShowPage === aPageFileName[iFooterActionIndexTag]) {
        consoleLog('no change url, compel quest');
        writePage(bCompel);
        return false;
    }

    consoleLog('change url');
    consoleLog(iFooterActionIndexTag);
    changeUrlAndUpdateAction(iFooterActionIndexTag);
}
//更新URL并更更新操作
function changeUrlAndUpdateAction (iFooterActionIndexTag) {
    if (changeUrlAndUpdateActionTimer) {
        clearTimeout(changeUrlAndUpdateActionTimer);
    }

    if (aPageFileName[iFooterActionIndexTag] === queryWhatPage()) {
        consoleLog('url changed and update page');
        writePage();
        return false;
    }

    consoleLog('change url and update action');
    consoleLog(iFooterActionIndexTag);
    setCurrentUrl(aLang[aPageFileTitle[iFooterActionIndexTag]], aPageFileName[iFooterActionIndexTag], false);

    changeUrlAndUpdateActionTimer = setTimeout(function () {
        changeUrlAndUpdateAction (iFooterActionIndexTag);
    }, 10);
}

//监听浏览器返回操作
window.addEventListener('popstate', function(e) {
    consoleLog(queryWhatPage());
    let iBackShowPageTag = 0;
    switch (queryWhatPage()) {
        case sIndexPageName :
            iBackShowPageTag = 0;
            break;
    }
    replaceUrlPageFileName (iBackShowPageTag, false);
    // replaceUrlPageFileName (iFooterActionIndexTag, false);
    consoleLog('我监听到了浏览器的返回按钮事件啦');//根据自己的需求实现自己的功能
}, false);

//整理URL参数
function neatenUrlArgs (sUrlArg = false) {
    let aUrlArgs = getAllQueryVariable();
    if (!sUrlArg) {
        sUrlArg = '';
        for (let i in aUrlArgs) {
            sUrlArg += i + '=' + aUrlArgs[i] + '&';
        }

        return sUrlArg.substring(0, sUrlArg.length - 1);
    }

    let aNeedSetUrlArgs = getAllQueryVariable(sUrlArg);
    for (let i in aNeedSetUrlArgs) {
        aUrlArgs[i] = aNeedSetUrlArgs[i];
    }

    sUrlArg = '';
    for (let j in aUrlArgs) {
        sUrlArg += j + '=' + aUrlArgs[j] + '&';
    }
    return sUrlArg.substring(0, sUrlArg.length - 1);
}

// 改变URL
function setCurrentUrl (sTitle, sPageName, sUrlArg) {
    consoleLog(sTitle, sPageName, sUrlArg);
    sUrlArg = neatenUrlArgs(sUrlArg);
    let sUrl = sPageName + '?' + encodeLocalstorageData(sUrlArg);

    let aNowUrl = window.location.href.split('/');
    if (aNowUrl[aNowUrl.length - 1] === sUrl) {
        return false;
    }

    let stateObject = {};
    history.pushState(stateObject, sTitle, sUrl);

    setBrowserTitle();
    afterChangeBrowserUrl();
}
//URL变化后操作
function afterChangeBrowserUrl () {
    switch (queryWhatPage()) {
        // case 'index.html' :
        case sIndexPageName :
            // sIndexPageName
            switchIndexPageAction();
            break;
    }
}
//设置浏览器标题
function setBrowserTitle (sTitle = '') {
    document.title = sTitle ? sTitle : aLang['host_title'];

    rollBrowserTitle();
}

//获取url ? 后 参数 字符串
function urlArgString () {
    return (!checkIsAdminPage() ? decodeLocalstorageData(window.location.search.substring(1)) : window.location.search.substring(1));
}
//获取URL指定参数
function getQueryVariable (sArg = false) {
    if (!sArg) {
        return false;
    }

    let sQuery = urlArgString();
    let aVars = sQuery.split("&");
    for (let i = 0; i < aVars.length; i++) {
        let aArgKeyAndVal = aVars[i].split("=");
        if (aArgKeyAndVal[0] == sArg) {
            return aArgKeyAndVal[1];
        }
    }

    return false;
}
//获取URL所有参数
function getAllQueryVariable (sArg = false) {
    // consoleLog(sArg);
    let sQuery = sArg ? sArg : urlArgString();
    // consoleLog(sQuery);
    let aVars = sQuery.split("&");
    // consoleLog(aVars);

    let oArray = new ArrayKeyValPairObject();

    let aArgKeyAndVal;
    for (let i = 0; i < aVars.length; i++) {
        // consoleLog(aVars[i]);
        // consoleLog(aVars[i].split("="));
        aArgKeyAndVal = aVars[i].split("=");
        // consoleLog(aArgKeyAndVal[0]);
        // consoleLog(aArgKeyAndVal[1]);
        oArray.put(aArgKeyAndVal[0], aArgKeyAndVal[1]);
    }
    consoleLog(oArray);

    return oArray.data;
}

//检查是否后台页面
function checkIsAdminPage ()
{
    return typeof bAdmin == 'undefined' ? false : true;
}

//重写 alert 样式
function writeNoticeDom () {
    if (document.getElementById('notice_father')) {
        return false;
    }

    let sInfo = '';
    sInfo += '<div id="notice_info">';
    sInfo += '</div>';

    sInfo += '<div id="notice_button" ontouchstart="closeNotice();" onclick="closeNotice();">';
    sInfo += '<span class="relang_tag" _origin_lang="close">' + aLang['close'] + '</span>';
    sInfo += '</div>';

    let oNoticeFather = document.createElement('div');
    oNoticeFather.id = 'notice_father';
    oNoticeFather.innerHTML = sInfo;

    // $('body').append(sInfo);
    document.getElementsByTagName('body')[0].appendChild(oNoticeFather);
    // document.getElementById('notice_father').style.top = parseInt(iWinHeight) + parseInt(iBottomHiddenPx) + 'px';
}
function centerNoticeDom () {
    if (noticeTimer) {
        clearTimeout(noticeTimer);
    }

    let oNoticeFatherDom = document.getElementById('notice_father');
    if (!oNoticeFatherDom) {
        writeNoticeDom();

        noticeTimer = setTimeout(function () {
            centerNoticeDom();
        }, 10);
        return false;
    }

    oNoticeFatherDom.style.zIndex = iMaxZIndexForLoadIng;

    let iTop = ((iWinHeight - oNoticeFatherDom.offsetHeight) / 2) + 'px';
    
    if (typeof jQuery != 'undefined') {
        $(oNoticeFatherDom).animate({top: iTop}, iMoveSpeed);
        $(oNoticeFatherDom).animate({opacity: 1}, iMoveSpeed);
    } else {
        jsAnimate (oNoticeFatherDom, {top: iTop}, function () {
            jsAnimate (oNoticeFatherDom, {opacity: 100}, false);
        });
    }

    // let iTop = ((iWinHeight - oNoticeFatherDom.offsetHeight) / 2);
    // jsAnimate (oNoticeFatherDom, {top: iTop}, false);
    // jsAnimate (oNoticeFatherDom, {opacity: 100}, false);
}
function closeNotice () {
    // consoleLog(11);
    if (noticeTimer) {
        clearTimeout(noticeTimer);
    }

    let oNoticeFatherDom = document.getElementById('notice_father');
    if (!oNoticeFatherDom) {
        writeNoticeDom();

        noticeTimer = setTimeout(function () {
            closeNotice();
        }, 10);
        return false;
    }

    let iTop = (parseInt(iWinHeight) + parseInt(iBottomHiddenPx)) + 'px';
    
    if (typeof jQuery != 'undefined') {
        $(oNoticeFatherDom).animate({opacity: 0}, iMoveSpeed);
        $(oNoticeFatherDom).animate({top: iTop}, iMoveSpeed);
    } else {
        jsAnimate (oNoticeFatherDom, {opacity: 0}, function () {
            jsAnimate (oNoticeFatherDom, {top: iTop}, false);
        });
    }
}
const iMaxZIndexForLoadIng = 9999999999999;
function showLoading (bShow = false, bResize = false) {
    if (showLoadingTimer) {
        clearTimeout(showLoadingTimer);
    }

    let iTop = parseInt(iWinHeight) + parseInt(iWinHeight / 2);

    let oLoadingDom = document.getElementById('loading');
    if (!oLoadingDom) {
        let oDiv = document.createElement('div');
        oDiv.id = 'loading';
        let oImg = document.createElement('img');
        oImg.id = 'loading_img';
        oImg.src = setStaticResouresImageAddress((isMobile() ? 'moblie' : 'computer') + '/' + aLoadingImage[randomNum(0, iLoadingImageLength)]);
        oDiv.appendChild(oImg);
        document.getElementsByTagName('body')[0].appendChild(oDiv);

        oLoadingDom = document.getElementById('loading');
        oLoadingDom.style.width = '100%';
        oLoadingDom.style.height = '100%';
        oLoadingDom.style.position = 'absolute';
        oLoadingDom.style.backgroundColor = 'grey';
        oLoadingDom.style.top = iTop + 'px';
        oLoadingDom.style.left = '0px';
    } else {
    }
    
    oLoadingDom.style.zIndex = iMaxZIndexForLoadIng;
    if (bShow) {
        let oImg = oLoadingDom.getElementsByTagName('img')[0];
        if (oLoadingDom.offsetWidth > oLoadingDom.offsetHeight) {
            oImg.style.marginTop = '';
            oImg.style.marginLeft = ((parseInt(oLoadingDom.offsetWidth) - parseInt(oImg.offsetWidth)) / 2) + 'px';
            oImg.style.width = '';
            oImg.style.height = '100%';
        } else {
            oImg.style.width = '100%';
            oImg.style.height = '';
            oImg.style.marginTop = ((parseInt(oLoadingDom.offsetHeight) - parseInt(oImg.offsetHeight)) / 2) + 'px';
            oImg.style.marginLeft = '';
        }
        
        if (oLoadingDom.offsetTop != 0) {
            oLoadingDom.style.opacity = '0';
            showLoadingTimer = setTimeout(function () {
                oLoadingDom.style.top = '0px';
                    jsAnimate (oLoadingDom, {opacity: 100}, false);
            }, 1);
        }

        // oLoadingDom.style.zIndex = incrZIndex();

        if (bResize) {
            showLoadingTimer = setTimeout(function () {
                showLoading(false);
            }, iShowLoadingTime);
        }
        
        return false;
    } else {
        showLoadingTimer = setTimeout(function () {
            jsAnimate (oLoadingDom, {opacity: 0}, function () {
                oLoadingDom.style.top = iTop + 'px';
            });
        }, 1);
    }
}

function cache (sJsonData = '') {
    if (!sJsonData) {
        return false;
    }
    
    consoleLog(sJsonData);
    if (!sJsonData.localstorage_data || !sJsonData.localstorage_data_time) {
        consoleLog('/////////////');
        return false;
    }
    // consoleLog(sJsonData.localstorage_data.length);
    // consoleLog(sJsonData.localstorage_data_time.length);
    // if (!sJsonData.localstorage_data.length !== sJsonData.localstorage_data_time.length) {
    //     consoleLog('(((((((((((((((((');
    //     Alert(aLang['cache_error']);
    //     return false;
    // }
    
    // consoleLog('ssssssssssssssssssssssss');
    for (let i in sJsonData.localstorage_data) {
        // consoleLog(i);
        // consoleLog(sJsonData.localstorage_data[i]);
        // consoleLog(sJsonData.localstorage_data_time[i]);
        if (!sJsonData.localstorage_data_time[i]) {
            Alert(aLang['cache_error']);
            return false;
        }
        
        myStorage.set(i, sJsonData.localstorage_data[i], sJsonData.localstorage_data_time[i]);
    }
}

function doHook (sHookName = false, jsonArgs = false) {
    if (!sHookName) {
        return false;
    }
    
    if (aHook[sHookName]) {
        for (let i in aHook[sHookName]) {
            if (typeof window[aHook[sHookName][i]] == 'undefined') {
                console.log(aHook[sHookName][i] + ' no undefined');
                continue;
            }
    
            window[aHook[sHookName][i]](jsonArgs);
        }
        
        return;
    }
    
    console.log('no hook ' + sHookName);
}
function reBeginTimer (bOnload = false, bResize = false) {
    if (beginTimer) {
        clearTimeout(beginTimer);
    }
    
    beginTimer = setTimeout(function () {
        begin(bOnload);
    }, 20);
}
function begin (bOnload = false, bResize = false) {
    consoleLog('begin');
    
    // consoleLog('b-a');
    // if (bProduction) {
    //     consoleLog('bProduction');
        showLoading(true, bResize);
    // }
    
    if (typeof window['aLang'] == 'undefined') {
        loadDefaultLangvageJs();
        
        // reBegin(bOnload);
        reBeginTimer(bOnload, bResize);
        
        return false;
    }
    
    if (typeof bAdmin == 'undefined' && !isMobile()) {
        // Alert(aLang['computer_is_null']);
        alert(aLang['computer_is_null']);
        
        return false;
    }
    
    doHook('begin');
    
    if (!loadWriteDomJs()) {
        consoleLog('loadWriteDomJs');
        // reBegin(bOnload);
        reBeginTimer(bOnload, bResize);

        return false;
    }
    
    loadResetCss();
    
    loadPlatformResetCss();
    
    loadNowPublicCss();
    
    loadNowCss();
    // loadNeedCss();
    
    // checkAlreadyLoadJquery();
    if (typeof jQuery == 'undefined' && !bLoadOriginJquery) {
        bLoadOriginJquery = true;
        consoleLog('bLoadOriginJquery');

        dynamicLoadJs('http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js');
    
        // reBegin(bOnload);
        reBeginTimer(bOnload, bResize);
    
        bInLoadOriginJquery = true;
        loadOriginJqueyTimer = setTimeout(function () {
            bInLoadOriginJquery = false;
        }, iLoadOriginJqueryInterval);

        return false;
    }
    if (bInLoadOriginJquery) {
        // reBegin(bOnload);
        consoleLog('bInLoadOriginJquery');
        reBeginTimer(bOnload, bResize);
    
        return false;
    }
    if (typeof jQuery == 'undefined') {
        if (bLoadLocalJquery) {
            // reBegin(bOnload);
            reBeginTimer(bOnload, bResize);
        
            return false;
        }
    
        if (iLoadLocalJqueryNumber < iMaxLoadLocalJqueryNumber) {
            bLoadLocalJquery = true;
        
            dynamicLoadJs(setStaticResouresAddress('public/jquery_' + oJsFileVersion.jquery, 'js'));
    
            // reBegin(bOnload);
            reBeginTimer(bOnload, bResize);
    
            loadLocalJqueyTimer = setTimeout(function () {
                bLoadLocalJquery = false;
            }, iLoadLocalJqueryInterval);
        
            return false;
        }
    }

    // loadEncodeJs();
    if (typeof window['bLoadEncodeJs'] == 'undefined') {
        // bAlreadyLoadEncodeJs = true;
        loadEncodeJs();
        // dynamicLoadJs(setStaticResouresAddress('public/encode_' + oJsFileVersion.encode, 'js'));
    
        // reBegin(bOnload);
        reBeginTimer(bOnload, bResize);

        return false;
    }

    consoleLog(3);
    
    loadLanguageJs();
    
    loadIndividuationCss();

    if (isMobile()) {
        examineOrientation();
    }

    consoleLog('jjjjjjjjjjjjjjjjj');
    // writeBody(bOnload);
    // consoleLog('vvvvvvvvvv');
// }
// 写页面
// function writeBody (bOnload = true) {
//     consoleLog('ttttttttttt');
    writePublicDom();
    
    // consoleLog(1);
    // // if (writeBodyTimer) {
    //     // consoleLog(2);
    // //     clearTimeout(writeBodyTimer);
    // }
    
    // consoleLog(3);
    // if (bOnload && bAlreadyInWrite) {
        // consoleLog(4);
        // return false;
    // }
    // bAlreadyInWrite = true;
    
    // writePage();
//
// }
// function writePage (bCompel = false) {
//     consoleLog('bbbbbbbbbbbbbbbbb');
    let sNowPage = queryWhatPage();
    if (typeof bAdmin == 'undefined') {
        consoleLog('qian');
        writeFrontPage (sNowPage, bCompel);
        return false;
    }
    
    consoleLog('hou');
    writeAdminPage(bOnload, bResize);
}
function writePublicDom ()
{
    writeNoticeDom();
}
// let bResize = false;
function afterResize () {
    // $('body').animate({opacity: 1}, iMoveSpeed);
    // $('body').css('display', 'block');
    // showShadeDom(true);
    // bResize = true;

    closeNotice();

    begin(false, true);
}

window.onresize = function() {
    // showShadeDom(true);
    // $('body').css('opacity', 0);
    // $('body').css('display', 'none');

    if (checkResizeEndtimer) {
        clearTimeout(checkResizeEndtimer);
    }

    checkResizeEndtimer = setTimeout(function () {
        // begin(false);
        afterResize();
    }, iCheckResizeEndInterVal);
};

window.onload = function () {
    begin(true);
};

// window.onresize = function () {
//     begin(false);
// };
