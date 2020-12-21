let bAlreadyQueryIndexHeaderActions = false;
function queryIndexHeaderActions () {
    if (bAlreadyQueryIndexHeaderActions) {
        return false;
    }
    bAlreadyQueryIndexHeaderActions = true;
    
    consoleLog('aaaaaaaaaaaaaaaaaaaaaa');
    
    let sApi = 'home/menu/index_header';
    
    sendQuery (sApi, 'post', false, 'queryIndexHeaderActions', true);
}