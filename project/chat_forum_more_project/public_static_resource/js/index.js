const sBaseProtocol = window.location.protocol;
const aBaseHost = [
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
        throw 'hashFunc sStr or iSize is null';
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
        throw 'hashFunc sStr or iSize is null';
        return false;
    }

    return aHost[hashFunc(sUrl, iHostNumber)];
}

const sBaseJs = '/public_static_resource/js/base.js';
const sBaseJsFullName = allocationHost(sBaseJs) + sBaseJs;
const sBaseVariableJs = '/public_static_resource/js/variable.js';
const sBaseVariableJsFullName = allocationHost(sBaseVariableJs) + sBaseVariableJs;
const sBaseFunctionJs = '/public_static_resource/js/function.js';
const sBaseFunctionJsFullName = allocationHost(sBaseFunctionJs) + sBaseFunctionJs;

const sDefaultVersionNumber = 'null';
var aJsVersion = []; // js 文件版本号
aJsVersion[sBaseJsFullName] = 'fsdgsdgsdvbcvher';
aJsVersion[sBaseVariableJsFullName] = 'hdfhretw4536';
aJsVersion[sBaseFunctionJsFullName] = 'gret4364yerh';

window.onload = loadJs(sBaseVariableJsFullName);
window.onload = loadJs(sBaseFunctionJsFullName);
window.onload = loadJs(sBaseJsFullName);
