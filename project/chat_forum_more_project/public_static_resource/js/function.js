function functionBegin () {
    if (typeof jQuery == 'undefined') {
        loadLocalJquery();

        aBaseTimer['baseBegin']['jquery'] = setTimeout(function () {
            baseBegin();
        }, aBaseTimerOutTime['baseBegin']['jquery']);

        return;
    }
}

var bLoadBaseVariableJsFile = true; //已引入基础变量js文件
