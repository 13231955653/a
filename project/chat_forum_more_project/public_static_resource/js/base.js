// function selectPlatForm () {
//     let aHrefInfo = window.location.pathname.split('/');
//     switch (aHrefInfo[aHrefInfo.length - 1]) {
//         case 'chat.html' :
//             loadJsCss('js', './static_resource/js/chat.js');
//             break;
//     }
// }
//


//
// let loadFunctionJsFileTimer = false;
// var bInLoadFunctionJsFile = false;
// function loadFunctionJsFile () {
//     if (bInLoadFunctionJsFile) {
//         return true;
//     }
//     bInLoadFunctionJsFile = true;
//
//     if (bLoadFunctionJsFile) {
//         if (loadFunctionJsFileTimer) {
//             clearTimeout(loadFunctionJsFileTimer);
//         }
//         return true;
//     }
//
//     toLoadFunctionJsFile();
//
//     loadFunctionJsFileTimer = setTimeout(function () {
//         loadFunctionJsFile();
//     }, typeof aBaseTimerOutTime !== 'undefined' ? aBaseTimerOutTime['loadFunctionJsFile'] : 30);
// }
// function toLoadFunctionJsFile () {
//     if (bLoadFunctionJsFile) {
//         return true;
//     }
//
//     loadJsCss('js', './static_resource/js/function.js');
// }
//

//
// function setMeta () {
//     setMetaContent();
// }
// function setMetaContent () {
//     let head = document.getElementsByTagName('head');
//     let meta = document.createElement('meta');
//     meta.httpEquiv = 'content-type';
//     meta.content = 'text/html; charset=' + sCharset;
//     insertAfter(meta, head[0].getElementsByTagName('meta')[0]);
// }
//
// function setCharset () {
//     sCharset = typeof sCharset !== 'undefined' ? sCharset : 'utf-8';
// }
//
// function notice (sMessage = '') {
//     if (typeof sMessage !== 'string') {
//         return false;
//     }
//
//     sMessage = typeof aLang[sMessage] != 'undefined' ? aLang[sMessage] : sMessage;
//     alert(sMessage);
// }
//
// let beginTimer = false;
// function begin () {
//     loadVariableJsFile();
//
//     if (!bLoadVariableJsFile) {
//         beginTimer = setTimeout(function () {
//             begin();
//         }, typeof aBaseTimerOutTime !== 'undefined' ? aBaseTimerOutTime['begin'] : 30);
//         return false;
//     }
//
//     loadFunctionJsFile();
//     if (!bLoadFunctionJsFile) {
//         beginTimer = setTimeout(function () {
//             begin();
//         }, typeof aBaseTimerOutTime !== 'undefined' ? aBaseTimerOutTime['begin'] : 30);
//         return false;
//     }
//
//     if (beginTimer) {
//         clearTimeout(beginTimer);
//     }
//
//     setCharset();
//
//     setMeta();
//
//     selectPlatForm();
//
//     return true;
// }

// let loadBaseVariableJsFileTimer = false;
// let bInLoadBaseVariableJsFile = false;
// function loadBaseVariableJsFile () {
//     if (bInLoadBaseVariableJsFile) {
//         return true;
//     }
//     bInLoadBaseVariableJsFile = true;
//
//     if (bLoadBaseVariableJsFile) {
//         if (loadBaseVariableJsFileTimer) {
//             clearTimeout(loadBaseVariableJsFileTimer);
//         }
//         return true;
//     }
//
//     toLoadBaseVariableJsFile();
//
//     loadBaseVariableJsFileTimer = setTimeout(function () {
//         loadBaseVariableJsFile();
//     }, typeof aBaseTimerOutTime !== 'undefined' ? aBaseTimerOutTime['loadBaseVariableJsFileTimer'] : 30);
// }
// function toLoadBaseVariableJsFile () {
//     if (bLoadBaseVariableJsFile) {
//         return true;
//     }
//
//     loadJsCss('js', '/public_static_resource/js/variable.js');
// }
//
// let aAllreadyLoadJsCss = []; //已经引入的 js css
// function loadJsCss (sType = '', sPath = '') {
//     if (!sType || !sPath) {
//         return false;
//     }
//
//     if (aAllreadyLoadJsCss[sPath]) {
//         return  true;
//     }
//
//     aAllreadyLoadJsCss[sPath] = true;
//
//     let sVer = '0';
//     switch (sPath) {
//         case './static_resource/js/function.js' :
//             sVer = '2';
//             break;
//         case './static_resource/js/variable.js' :
//             sVer = '1';
//             break;
//         case './static_resource/js/chat.js' :
//             sVer = '3';
//             break;
//     }
//
//     let dom;
//     switch (sType) {
//         case 'js' :
//             dom = document.createElement('script');
//             dom.type = 'text/javascript';
//             dom.src = sPath + '?ver=' + sVer;
//             break;
//         case 'css' :
//             dom = document.createElement('css');
//             dom.type = 'text/css';
//             dom.rel = 'stylesheet';
//             dom.link = sPath + '?ver=' + sVer;
//             break;
//     }
//
//     let head = document.getElementsByTagName('head')[0];
//     dom.charset = typeof sCharset !== 'undefined' ? sCharset : 'utf-8';
//     head.appendChild(dom);
// }
function queryPage () {
    let sVariableJsFile = '';
    switch (window.location.host) {
        case sBaseHost :
            sVariableJsFile = sBaseVariableJs;
            break;
        default:
            throw 'queryPage host url is not allowed';
            return false;
            break;
    }

    loadVariableJs(sVariableJsFile);
}


function loadVariableJs (sPath = '', bForce = false) {
    if (!sPath) {
        throw 'loadVariableJs sPath is null';
        return false;
    }

    if (!bForce && typeof aLoadingJs[sPath] !== 'undefined') {
        return
    }
    aLoadingJs[sPath] = true;

    if (typeof aAlreadyLoadJs[sPath] !== 'undefined') {
        return
    }
    aAlreadyLoadJs[sPath] = true;

    loadJs(sHost + sPath);

    console.log(this);
    // aBaseTimer[]
}

function loadLocalJquery () {
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
}

let bInLoadBaseVariableJsFile = false; //引入基础变量js文件中
function baseBegin () {
    if (!bInLoadBaseVariableJsFile) {
        bInLoadBaseVariableJsFile = true;
        loadBaseFunction();
    }

    if (!bLoadBaseVariableJsFile) {
        aBaseTimer['loadBaseFunctionJs'] = setTimeout(function () {
            baseBegin();
        }, aBaseTimerOutTime['loadBaseFunctionJs']);
        return;
    }
}

function loadBaseFunction () {
    loadJs(sHost + sBaseFunctionJs);
}

const sBaseVariableJs = '/public_static_resource/js/variable.js';
const sBaseFunctionJs = '/public_static_resource/js/function.js';
var aJsVersion = []; // js 文件版本号
aJsVersion[sBaseFunctionJs] = '4444444444444444';
let aAlreadyLoadJs = []; //已经load的js文件
let aLoadingJs = []; //loading的js文件
let aBaseTimer = []; //基础定时器
const aBaseTimerOutTime = []; //基础定时器间隔时间
aBaseTimerOutTime['loadVariableJs'] = 10;
aBaseTimerOutTime['loadBaseFunctionJs'] = 10;
// aBaseTimerOutTime['loadBaseVariableJsFileTimer'] = 30; // 基础变量定时器时间间隔
var bLoadBaseVariableJsFile = false; //已引入基础变量js文件
// var bLoadVariableJsFile = false; //是否引入变量定义文件
// var bLoadFunctionJsFile = false; //是否引入function定义文件
window.onload = baseBegin();