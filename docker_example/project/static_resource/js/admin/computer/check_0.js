var bLoadAdminCheckJs = true;

const sAdminAlreadyLoginLocalstorageTag = 'admin_cache';
// const sAdminLoginPageName = 'login.html';
const sAdminLastVisitPageLocalstorageKey = 'admin_last_visit_page';

function adminCheck () {
    let sAdminLoginData = myStorage.get(sAdminAlreadyLoginLocalstorageTag);

    let sNowPage = queryWhatPage();
    if (!sAdminLoginData) {
        if (sNowPage !== sAdminLoginPageName) {
            myStorage.set(sAdminLastVisitPageLocalstorageKey, sNowPage);
            window.location.href = setUrl('/admin/' + sAdminLoginPageName);
            return false;
        }
    } else {
        let sLastViewPage = myStorage.get(sAdminLastVisitPageLocalstorageKey);
        if (sNowPage === sAdminLoginPageName) {
            window.location.href = setUrl('/admin/' + (sLastViewPage ? sLastViewPage : sAdminHomePage));
        }
        return true;
    }
}

function adminLoginIn ()
{
    let sName = document.getElementById('admin_name').value;
    let sPwd  = document.getElementById('admin_password').value;
    
    // if (!sName || !sPwd) {
    //     Alert(aLang['admin_login_error']);
    //     return false;
    // }
    
    // consoleLog(checkInput('admin_name', sName));
    // consoleLog(checkInput('admin_password', sPwd));
    if (!checkInput('admin_name', sName) || !checkInput('admin_password', sPwd)) {
        Alert(aLang[ 'admin_login_error' ]);
        return false;
    }
    
    loginInAdmin(sName, sPwd);
}