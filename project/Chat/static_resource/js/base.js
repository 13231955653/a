function selectPlatForm () {
    let aHrefInfo = window.location.pathname.split('/');
    switch (aHrefInfo[aHrefInfo.length - 1]) {
        case 'chat.html' :
            loadJsCss('js', './static_resource/js/chat.js');
            break;
    }
}

let loadVariableJsFileTimer = false;
var bInLoadVariableJsFile = false;
function loadVariableJsFile () {
    if (bInLoadVariableJsFile) {
        return true;
    }
    bInLoadVariableJsFile = true;

    if (bLoadVariableJsFile) {
        if (loadVariableJsFileTimer) {
            clearTimeout(loadVariableJsFileTimer);
        }
        return true;
    }

    toLoadVariableJsFile();

    loadVariableJsFileTimer = setTimeout(function () {
        loadVariableJsFile();
    }, typeof aTimerOutTime !== 'undefined' ? aTimerOutTime['loadVariableJsFile'] : 30);
}
function toLoadVariableJsFile () {
    if (bLoadVariableJsFile) {
        return true;
    }

    loadJsCss('js', './static_resource/js/variable.js');
}

let loadFunctionJsFileTimer = false;
var bInLoadFunctionJsFile = false;
function loadFunctionJsFile () {
    if (bInLoadFunctionJsFile) {
        return true;
    }
    bInLoadFunctionJsFile = true;

    if (bLoadFunctionJsFile) {
        if (loadFunctionJsFileTimer) {
            clearTimeout(loadFunctionJsFileTimer);
        }
        return true;
    }

    toLoadFunctionJsFile();

    loadFunctionJsFileTimer = setTimeout(function () {
        loadFunctionJsFile();
    }, typeof aTimerOutTime !== 'undefined' ? aTimerOutTime['loadFunctionJsFile'] : 30);
}
function toLoadFunctionJsFile () {
    if (bLoadFunctionJsFile) {
        return true;
    }

    loadJsCss('js', './static_resource/js/function.js');
}

let aAllreadyLoadJsCss = []; //已经引入的 js css
function loadJsCss (sType = '', sPath = '') {
    if (!sType || !sPath) {
        return false;
    }

    if (aAllreadyLoadJsCss[sPath]) {
        return  true;
    }

    aAllreadyLoadJsCss[sPath] = true;

    let sVer = '0';
    switch (sPath) {
        case './static_resource/js/function.js' :
            sVer = '2';
            break;
        case './static_resource/js/variable.js' :
            sVer = '1';
            break;
        case './static_resource/js/chat.js' :
            sVer = '3';
            break;
    }

    let dom;
    switch (sType) {
        case 'js' :
            dom = document.createElement('script');
            dom.type = 'text/javascript';
            dom.src = sPath + '?ver=' + sVer;
            break;
        case 'css' :
            dom = document.createElement('css');
            dom.type = 'text/css';
            dom.rel = 'stylesheet';
            dom.link = sPath + '?ver=' + sVer;
            break;
    }

    let head = document.getElementsByTagName('head')[0];
    dom.charset = typeof sCharset !== 'undefined' ? sCharset : 'utf-8';
    head.appendChild(dom);
}

function setMeta () {
    setMetaContent();
}
function setMetaContent () {
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.httpEquiv = 'content-type';
    meta.content = 'text/html; charset=' + sCharset;
    insertAfter(meta, head[0].getElementsByTagName('meta')[0]);
}

function setCharset () {
    sCharset = typeof sCharset !== 'undefined' ? sCharset : 'utf-8';
}

function notice (sMessage = '') {
    if (typeof sMessage !== 'string') {
        return false;
    }

    sMessage = typeof aLang[sMessage] != 'undefined' ? aLang[sMessage] : sMessage;
    alert(sMessage);
}

let beginTimer = false;
function begin () {
    loadVariableJsFile();

    if (!bLoadVariableJsFile) {
        beginTimer = setTimeout(function () {
            begin();
        }, typeof aTimerOutTime !== 'undefined' ? aTimerOutTime['begin'] : 30);
        return false;
    }

    loadFunctionJsFile();
    if (!bLoadFunctionJsFile) {
        beginTimer = setTimeout(function () {
            begin();
        }, typeof aTimerOutTime !== 'undefined' ? aTimerOutTime['begin'] : 30);
        return false;
    }

    if (beginTimer) {
        clearTimeout(beginTimer);
    }

    setCharset();

    setMeta();

    selectPlatForm();

    return true;
}

var bLoadVariableJsFile = false; //是否引入变量定义文件
var bLoadFunctionJsFile = false; //是否引入function定义文件
window.onload = function () {
    begin();
}