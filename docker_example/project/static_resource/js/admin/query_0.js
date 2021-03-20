function loginInAdmin (sName = '', sPassword = '') {
    if (!sName || !sPassword) {
        return false;
    }

    let sApi = 'admin/admin/login_in';

    let sJsonData = {sName: sName, sPwd: sPassword};

    // let callBack = 'afterLoginInAdmin';

    sendQuery (sApi, 'post', sJsonData, 'loginInAdmin', true);
}

const sAdminInLcalstorageTag = 'admin_log_in_tag';
function afterLoginInAdmin () {
    // consoleLog(sJosnLoginData);
    // consoleLog(sJosnLoginData.localstorage_data);
    // return;
    // if (sJosnLoginData.localstorage_data) {
    //     myStorage.set(sAdminAlreadyLoginLocalstorageTag, sJosnLoginData.localstorage_data, 60 * 60 * 24);
    // }
    // consoleLog(myStorage.get(sAdminAlreadyLoginLocalstorageTag));
    // return;
    
    myStorage.set(sAdminInLcalstorageTag, getMillisecondTime());
    
    let sUri = myStorage.get(sAdminLastVisitPageLocalstorageKey);
    sUri = setUrl('/admin/' + sUri);
    // consoleLog(sUri);
    
    // setTimeout(function () {
        window.location.href = sUri;
    // }, 100000);
}

function queryAdminMenus () {
    if (!adminCheck()) {
        consoleLog('azzzzzzz');
        return false;
    }
    
    let sApi = 'admin/admin_menu/index';
    
    let sJsonData = {};
    
    sendQuery (sApi, 'post', sJsonData, 'queryAdminMenus', true);
}
function menuList (sJsonData = false) {
    if (!adminCheck()) {
        return false;
    }
    
    // sJsonData = sJsonData ? sJsonData : {};
    
    let sApi = getQueryVariable(sUriRequestUriFeild);
    console.log(sApi);
    let callFunc = '';
    switch (sApi) {
        case sAdminPageShowOneMenuDetail :
            sApi += '/' + getQueryVariable('id');
            callFunc = 'oneMenuDetail';
            break;
        default:
            callFunc = 'menuList';
            break;
    }
    
    sendQuery (sApi, 'post', sJsonData, callFunc, true);
}

const sAdminMoreActionsPage = 'admin/more_action.html';
function queryAdminMenuRequert (sUrl = false) {
    if (!sUrl) {
        return false;
    }
    
    sUrl = window.location.origin + '/' + sAdminMoreActionsPage + '?' + sUrl;
    
    window.open(sUrl, '_blank');
}

//管理员退出
function outAdmin () {
    if (!adminCheck()) {
        return false;
    }
    
    let sApi = 'admin/admin/out';
    
    let sJsonData = {};
    
    sendQuery (sApi, 'post', sJsonData, 'outAdmin', true);
}
const sAdminOutLcalstorageTag = 'admin_log_out_tag';
function afterOutAdmin () {
    if (myStorage.remove(sAdminAlreadyLoginLocalstorageTag) || myStorage.remove(sAdminAlreadyLoginLocalstorageTag)) {
        // consoleLog(myStorage.remove(sAdminAlreadyLoginLocalstorageTag));
        myStorage.clear();
    
        myStorage.set(sAdminOutLcalstorageTag, getMillisecondTime());
    
        adminCheck();
        
        return false;
    }
    
    // consoleLog(aLang['localstorage_remove_faild']);
    Alert(aLang['localstorage_remove_faild']);
}