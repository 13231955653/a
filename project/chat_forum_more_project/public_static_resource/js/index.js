const sBaseProtocol = window.location.protocol;
const aBaseHost = [
    'you.com',
    'host.you.com',
    'master.you.com',
    'you.com',
    'host.you.com',
    'master.you.com',
    'you.com',
    'host.you.com',
    'master.you.com',
    'you.com',
    'host.you.com',
    'master.you.com',
];
var aHost = [];
function setHosts () {
    for (let i in aBaseHost) {
        aHost.push(sBaseProtocol + '//' + aBaseHost[i]);
    }
}
setHosts();
const iHostNumber = aHost.length;

// hash 求余
function hashFunc(sStr, iSize){
    if (!sStr ||!iSize) {
        console.log('hashFunc sStr or iSize is null');
        return false;
    }

    //1.定义iHashCode变量
    let iHashCode = 0;

    //2.霍纳算法，来计算 iHashCode的值
    for (let i = 0; i < sStr.length; i++) {
        iHashCode = 37 * iHashCode + sStr.charCodeAt(i) //获取编码
    }
    iHashCode = parseInt(iHashCode);

    //3.取余状态
    return iHashCode % iSize
}

function allocationHost (sUrl = '') {
    if (!sUrl) {
        console.log('hashFunc sStr or iSize is null');
        return false;
    }

    return aHost[hashFunc(sUrl, iHostNumber)];
}

function isMobile () {
    let userAgentInfo = navigator.userAgent;
    let mobileAgents = [ 'Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad','iPod'];
    let bIsMobile = false;

    //根据userAgent判断是否是手机
    for (let v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            bIsMobile = true;
            break;
        }
    }

    return bIsMobile;
}
function platformTag () {
    return isMobile ? 'mobile' : 'computer';
}

const sBaseJs = '/public_static_resource/js/' + platformTag() + '/base.js';
const sBaseJsFullName = allocationHost(sBaseJs) + sBaseJs;
const sBaseVariableJs = '/public_static_resource/js/' + platformTag() + '/variable.js';
const sBaseVariableJsFullName = allocationHost(sBaseVariableJs) + sBaseVariableJs;
const sBaseFunctionJs = '/public_static_resource/js/' + platformTag() + '/function.js';
const sBaseFunctionJsFullName = allocationHost(sBaseFunctionJs) + sBaseFunctionJs;
const sBaseJqueryJs = '/public_static_resource/js/' + platformTag() + '/jquery.js';
const sBaseJqueryJsFullName = allocationHost(sBaseJqueryJs) + sBaseJqueryJs;
const sBaseLogicJs = '/public_static_resource/js/' + platformTag() + '/logic.js';
const sBaseLogicJsFullName = allocationHost(sBaseLogicJs) + sBaseLogicJs;
const sBaseDomJs = '/public_static_resource/js/' + platformTag() + '/dom.js';
const sBaseDomJsFullName = allocationHost(sBaseDomJs) + sBaseDomJs;
const sBaseEncodeJs = '/public_static_resource/js/public/encode.js';
const sBaseEncodeJsFullName = allocationHost(sBaseEncodeJs) + sBaseEncodeJs;

const sDefaultVersionNumber = 'null';
var aJsVersion = []; // js 文件版本号
aJsVersion[sBaseJsFullName] = 'fsdgsdgsdvbcvher';

window.onload = loadJs(sBaseJsFullName);
