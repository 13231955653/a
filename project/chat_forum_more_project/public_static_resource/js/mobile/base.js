let bInLoadBaseVariableJsFile = false; //引入基础变量js文件中
let bInLoadBaseFunctionJsFile = false; //引入基础 function js文件中
let bInLoadBaseLogicJsFile = false; //引入基础 logic js文件中
let bInLoadBaseDomJsFile = false; //引入基础 dom js文件中
let bInLoadBaseEncodeJsFile = false; //引入基础 encode js文件中
function baseBegin () {
    if (!bLoadBaseVariableJsFile && !bInLoadBaseVariableJsFile) {
        if (!bInLoadBaseVariableJsFile) {
            bInLoadBaseVariableJsFile = true;
            loadJs(sBaseVariableJsFullName);

            aBaseTimer['loadBaseVariableJs'] = setTimeout(function () {
                baseBegin();
            }, typeof aBaseTimerOutTime['loadBaseVariableJs'] !== 'undefined' ? aBaseTimerOutTime['loadBaseVariableJs'] : 30);
            return;
        }
    }

    if (!bLoadBaseEncodeJsFile && !bInLoadBaseEncodeJsFile) {
        if (!bInLoadBaseEncodeJsFile) {
            bInLoadBaseEncodeJsFile = true;
            loadJs(sBaseEncodeJsFullName);

            aBaseTimer['loadEncodeJs'] = setTimeout(function () {
                baseBegin();
            }, typeof aBaseTimerOutTime['loadEncodeJs'] !== 'undefined' ? aBaseTimerOutTime['loadEncodeJs'] : 30);
            return;
        }
    }

    if (!bLoadBaseLogicJsFile && !bInLoadBaseLogicJsFile) {
        if (!bInLoadBaseLogicJsFile) {
            bInLoadBaseLogicJsFile = true;
            loadJs(sBaseLogicJsFullName);

            aBaseTimer['loadBaseLogicJs'] = setTimeout(function () {
                baseBegin();
            }, typeof aBaseTimerOutTime['loadBaseLogicJs'] !== 'undefined' ? aBaseTimerOutTime['loadBaseLogicJs'] : 30);
            return;
        }
    }

    if (!bLoadBaseDomJsFile && !bInLoadBaseDomJsFile) {
        if (!bInLoadBaseDomJsFile) {
            bInLoadBaseDomJsFile = true;
            loadJs(sBaseDomJsFullName);

            aBaseTimer['loadBaseDomJs'] = setTimeout(function () {
                baseBegin();
            }, typeof aBaseTimerOutTime['loadBaseDomJs'] !== 'undefined' ? aBaseTimerOutTime['loadBaseDomJs'] : 30);
            return;
        }
    }

    if (!bLoadBaseFunctionJsFile && !bInLoadBaseFunctionJsFile) {
        if (!bInLoadBaseFunctionJsFile) {
            bInLoadBaseFunctionJsFile = true;
            loadJs(sBaseFunctionJsFullName);

            aBaseTimer['loadBaseFunctionJs'] = setTimeout(function () {
                baseBegin();
            }, typeof aBaseTimerOutTime['loadBaseFunctionJs'] !== 'undefined' ? aBaseTimerOutTime['loadBaseFunctionJs'] : 30);
            return;
        }
    }

    beginBase();
}

var aJsVersion = []; // js 文件版本号
aJsVersion[sBaseVariableJsFullName] = 'hdfhretw4536';
let aBaseTimer = []; //基础定时器
var aBaseTimerOutTime = []; //基础定时器间隔时间
var bLoadBaseVariableJsFile = false; //已引入基础变量js文件
var bLoadBaseFunctionJsFile = false; //已引入function js文件
var bLoadBaseLogicJsFile = false; //已引入 logic js文件
var bLoadBaseDomJsFile = false; //已引入 dom js文件
var bLoadBaseEncodeJsFile = false; //已引入 encode js文件
window.onload = baseBegin();