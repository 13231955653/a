const bLoadWriteDom         = true; // load wirte dom js file tag
let bInWriteAdminBodyFather = false;
let bInWriteAddHomeMenu     = false;
let writeAdminPageTimer;

function reWriteAdminPage (bOnload)
{
    if (writeAdminPageTimer) {
        clearTimeout(writeAdminPageTimer);
    }
    
    writeAdminPageTimer = setTimeout(function ()
                                     {
                                         writeAdminPage(bOnload);
                                     }, 10);
}

function writeAdminPage (bOnload = false, bResize = false)
{
    // consoleLog('ppppppppppppppp');
    showLoading(true);
    
    if (!checkExistsBody()) {
        writeBody();
        
        reWriteAdminPage(bOnload);
        return;
    }
    
    consoleLog('a1');
    consoleLog(typeof bLoadAdminCheckJs);
    if (typeof window[ 'bLoadAdminCheckJs' ] == 'undefined') {
        consoleLog('a2');
        reWriteAdminPage(bOnload);
        return;
    }
    
    consoleLog('a3');
    consoleLog(queryWhatPage());
    switch (queryWhatPage()) {
        // case 'login.html' :
        case sAdminLoginPageName :
            consoleLog('zzzzzzzzzzzzzzz');
            
            consoleLog('eeeeeeeeee');
            writeAdminLogin();
            break;
        // case 'more_action.html' :
        case sAdminMoreActionPage :
            consoleLog('22222222222222222222');
            
            writeMoreActionPage();
            break;
        // case 'admin_index.html' :
        case sAdminHomePage :
            consoleLog('ssss');
            writeAdminBodyFather();
            break;
    }
    
    // consoleLog('aaaaa');
    
    // showLoading (false);
}

function checkExistsBody ()
{
    return document.getElementById('data_body');
}

function writeBody ()
{
    let sInfo = '<div id="data_body">';
    
    let sNowPage = queryWhatPage();
    if (sNowPage !== sAdminLoginPageName) {
        sInfo += writeHeader();
        
        if (sNowPage === sAdminHomePage) {
            sInfo += writeFooter();
        }
    }
    
    sInfo += '</div>';
    $('body').append(sInfo);
    
    updateNowActionTitle();
}

const sNowActionIntervalTag = '&nbsp;&nbsp;>>>&nbsp;&nbsp;';

function updateNowActionTitle ()
{
    let oNowActionDom = document.getElementById(sAdminPageNowActionId);
    if (!oNowActionDom) {
        return;
    }
    
    let sNowAction = getQueryVariable(sUriRequestUriFeild);
    sNowAction = sNowAction ? sNowAction : 'admin_page_home';
    // console.log('===================');
    // consoleLog(getQueryVariable(sUriRequestUriFeild'));
    // switch (getQueryVariable(sUriRequestUriFeild)) {
    //     case 'admin/admin_menu/admin_list' :
    //         sNowAction = 'admin/admin_menu/admin_list';
    //         break;
    //     case 'admin/admin_menu/one_detail' :
    //         sNowAction = 'admin/admin_menu/one_detail';
    //         break;
    //     default:
    //         sNowAction = 'admin_page_home';
    //         break;
    // }
    sNowAction = feildNowLangvageValue(sNowAction);
    
    oNowActionDom.innerHTML =
        oNowActionDom.innerHTML + sNowActionIntervalTag + sNowAction;
}

const sAdminPageHeaderName  = 'admin_header';
const sAdminPageNowActionId = 'now_action';
function writeHeader ()
{
    let sInfo = '';
    sInfo += '<div class="' + sAdminPageHeaderName + '">';
    sInfo += '<ul>';
    
    sInfo += '<li class="' + sAdminPageHeaderName + '_left">';
    sInfo +=
        '<span class="relang_tag" _origin_lang="admin_page_title" id="' + sAdminPageNowActionId + '">' + feildNowLangvageValue('admin_page_title') + '</span>';
    sInfo += '</li>';
    
    sInfo +=
        '<li class="' + sAdminPageHeaderName + '_right" onclick="outAdmin();">';
    sInfo +=
        '<span class="relang_tag" _origin_lang="out">' + feildNowLangvageValue('out') + '</span>';
    sInfo += '</li>';
    
    if (queryWhatPage() !== sAdminHomePage) {
        sInfo += '<li class="' + sAdminPageHeaderName + '_right">';
        sInfo += '<a onclick="goHome();">';
        sInfo +=
            '<span class="relang_tag" _origin_lang="home">' + feildNowLangvageValue('home') + '</span>';
        sInfo += '</a>';
        sInfo += '</li>';
    }
    
    sInfo += '</ul>';
    sInfo += '</div>';
    
    return sInfo;
}

const sAdminPageFooterName = 'admin_footer';

function writeFooter ()
{
    let sInfo = '';
    sInfo += '<div class="' + sAdminPageFooterName + '">';
    sInfo += '</div>';
    
    return sInfo;
}

function goHome ()
{
    window.location.href = setUrl('/admin/' + sAdminHomePage);
}

function showAdminPage ()
{
    let oDom = document.getElementById('data_body');
    $(oDom).animate({opacity: 100}, iMoveSpeed, false, function ()
    {
        showLoading(false);
    });
}

function writeMoreActionPage ()
{
    if (bInWriteAddHomeMenu) {
        return false;
    }
    bInWriteAddHomeMenu = true;
    
    if (!adminCheck()) {
        return false;
    }
    
    let sNowId = '';
    switch (getQueryVariable(sUriRequestUriFeild)) {
        case sAdminPageShowOneMenuDetail :
            sNowId = sOneAdminMenuDetail;
            break;
        default:
            sNowId = sAdminMenuListName;
            break;
    }
    if (!document.getElementById(sNowId)) {
        menuList();
        
        bInWriteAddHomeMenu = false;
        return;
    }
    
    showAdminPage();
    bInWriteAddHomeMenu = false;
    // showLoading(false);
}
const sOneAdminMenuDetail = 'one_admin_menu_detail';

function writeAdminLogin ()
{
    if (adminCheck()) {
        return false;
    }
    
    let oAdminLoginDom = document.getElementById('admin_login');
    if (!oAdminLoginDom) {
        let sInfo = '<div id="admin_login">';
        
        sInfo +=
            '<input type="name" id="admin_name" placeholder="' + feildNowLangvageValue('admin_name') + '" class="relang_tag" _origin_lang="admin_name">';
        sInfo +=
            '<input type="password" id="admin_password" placeholder="' + feildNowLangvageValue('admin_password') + '" class="relang_tag" _origin_lang="admin_password">';
        
        sInfo +=
            '<button type="button" class="relang_tag" _origin_lang="admin_login_in" ontouchstart="adminLoginIn();" onclick="adminLoginIn();">' + feildNowLangvageValue('admin_login_in') + '</button>';
        
        sInfo += '</div>';
        
        $(sInfo).appendTo($('#data_body'));
    }
    
    let oDom = document.getElementById('data_body');
    $(oDom).animate({opacity: 100}, iMoveSpeed);
    
    showLoading(false);
}

function writeAdminBodyFather ()
{
    if (bInWriteAdminBodyFather) {
        return false;
    }
    bInWriteAdminBodyFather = true;
    
    if (!adminCheck()) {
        consoleLog('gggggggggggggggggggggg');
        return false;
    }
    
    if ($('.' + sAdminMenuClassNameFeild).length < 1) {
        queryAdminMenus();
        
        bInWriteAdminBodyFather = false;
        return;
    }
    
    bInWriteAdminBodyFather = false;
    showAdminPage();
}

function judgeAdminMenuUrlExists (sUrl)
{
    if (sUrl == 0 || sUrl == '') {
        return false;
    }
    
    if (isRealNum(sUrl)) {
        return false;
    }
    
    return true;
}
const sUriRequestUriFeild = 'request_url';
function showSonMenu (oObj)
{
    let sUrl = oObj.getAttribute('_url');
    if (judgeAdminMenuUrlExists(sUrl)) {
        queryAdminMenuRequert(sUriRequestUriFeild + '=' + sUrl);
        return;
    }
    
    let iNowPlies = oObj.getAttribute('_plies');
    let i         = iMaxMenu;
    for (i; i >= iNowPlies; i--) {
        let sClassName = adminMenuSonIdClass(adminMenuIdClass(i));
        
        let oDom = document.getElementById(sClassName);
        if (!oDom) {
            continue;
        }
        $(oDom).animate({left: oDom.getAttribute('_left')}, iMoveSpeed);
    }
    
    let sIdClass = adminMenuSonIdClass(adminMenuIdClass(iNowPlies));
    showMenu(sIdClass, iNowPlies, oObj.getAttribute('_self'));
}

function showMenu (sIdClass, iNowPlies, sShowClassName)
{
    let iWdith = 0;
    let i      = 0;
    for (i; i < iNowPlies; i++) {
        iWdith +=
            parseInt($('#' + adminMenuSonIdClass(adminMenuIdClass(i)))[ 0 ].getAttribute('_width'));
    }
    
    if ($('.' + adminMenuSonIdClass(sShowClassName)).length < 1) {
        return;
    }
    
    $('.' + sIdClass).css('display', 'none');
    $('.' + adminMenuSonIdClass(sShowClassName)).css('display', 'block');
    $('#' + sIdClass).animate({left: iWdith}, iMoveSpeed);
}

let iMaxMenu                   = 0;
const sAdminMenuClassNameFeild = 'admin_menus';
const sClassIntervalTag        = '_';

function sonTreeHtml (sJsonData = '', sSortFeild = '', sFatherIdFeild = '')
{
    if (!sJsonData || !sSortFeild) {
        return false;
    }
    
    sJsonData = sorts(sJsonData, sAdminMenuOrderFeild, 1);
    
    let aRes       = [];
    let aFatherIds = [];
    for (let i in sJsonData) {
        aRes.push(sJsonData[ i ][ sSortFeild ]);
        aFatherIds.push(sJsonData[ i ][ sFatherIdFeild ]);
    }
    
    aRes       = unique(aRes);
    aFatherIds = unique(aFatherIds);
    if (!aRes || !aFatherIds) {
        return false;
    }
    aRes = aRes.sort();
    
    let iZIndex = parseInt(aRes.length) + parseInt(100000);
    
    let sInfo = '';
    for (let i in aRes) {
        let z    = iZIndex - i;
        let sId  = adminMenuIdClass(i);
        let sId1 = adminMenuSonIdClass(sId);
        sInfo +=
            '<div class="' + sAdminMenuClassNameFeild + '" id="' + sId1 + '" style="z-index:' + z + ';">';
        sInfo += '<ul>';
        for (let j in sJsonData) {
            if (sJsonData[ j ][ sSortFeild ] == aRes[ i ]) {
                let sMenuId  = sJsonData[ j ][ sAdminMenuIdFeild ];
                let sMenuUrl = sJsonData[ j ][ sAdminMenuUrlFeild ];
                sInfo += '<li onclick="showSonMenu(this);"';
                sInfo += '_plies="' + (
                         parseInt(i) + parseInt(1)
                ) + '"';
                sInfo += '_url="' + sMenuUrl + '"';
                sInfo += '_self="' + sMenuId + '"';
                sInfo += 'class="';
                sInfo += sId1;
                sInfo +=
                    ' ' + sJsonData[ j ][ sAdminMenuFatherIdFeild ] + sClassIntervalTag + sSonTreeSonFeild;
                sInfo += '"';
                sInfo += '>';
                
                let sMoreSonTag = inArray(sMenuId, aFatherIds) ? sAdminMenuShowMoreSonTag : (
                    judgeAdminMenuUrlExists(sMenuUrl) ? sAdminMenuActionTag : ''
                );
                let sName       = sJsonData[ j ][ sAdminMenuNameFeild ];
                sInfo += '<span class="relang_tag"';
                sInfo += '_origin_lang="' + sName + '"';
                sInfo += '>';
                sInfo += feildNowLangvageValue(sName);
                sInfo += sMoreSonTag;
                sInfo += '</span>';
                sInfo += '</li>';
            }
        }
        
        sInfo += '</ul>';
        sInfo += '</div>';
        iMaxMenu = i;
    }
    
    return sInfo;
}

function adminMenuIdClass (iPlies)
{
    return sAdminMenuClassNameFeild + sClassIntervalTag + iPlies;
}

function adminMenuSonIdClass (sId)
{
    return sId + sClassIntervalTag + sSonTreeSonFeild;
}


//无极限
const sAdminMenuFatherIdFeild  = 'father_id';
const sAdminMenuIdFeild        = 'id';
const sAdminMenuShowMoreSonTag = '&nbsp;&nbsp;➜';
const sAdminMenuActionTag      = '&nbsp;&nbsp;👊';
const sAdminMenuUrlFeild       = 'url';
const sAdminMenuNameFeild      = 'name';
const sAdminMenuPliesFeild     = 'plies';
const sAdminMenuOrderFeild     = 'order_';
const sAdminMenuStatusFeild    = 'status';
let iLeftMenuWidth             = 0;

function writeAdminMeunu (sJsonData)
{
    if (!sJsonData[ sResponseDataFeild ] || typeof sJsonData[ sResponseDataFeild ] == 'undefined') {
        showAdminPage();
        
        showNoJurisdiction();
        return false;
    }
    sJsonData = sJsonData[ sResponseDataFeild ];
    
    let sHtml = sonTreeHtml(sJsonData, sAdminMenuPliesFeild, sAdminMenuFatherIdFeild);
    if (!sHtml) {
        showAdminPage();
        
        showLoading(false);
        
        return false;
    }
    
    let oDom = document.getElementById('data_body');
    $(sHtml).appendTo(oDom);
    
    let oDoms      = $('.admin_menus');
    iLeftMenuWidth = oDoms[ 0 ].offsetWidth;
    let i          = oDoms.length;
    let j          = 0;
    for (j; j < i; j++) {
        oDoms[ j ].setAttribute('_width', oDoms[ j ].offsetWidth);
        oDoms[ j ].setAttribute('_left', '-' + oDoms[ j ].offsetWidth);
        oDoms[ j ].style.left = '-' + oDoms[ j ].offsetWidth * 2 + 'px';
    }
    oDoms[ 0 ].style.left = '0px';
    
    showAdminPage();
    
    resetHeaderFooterWidth(iLeftMenuWidth);
}

function resetHeaderFooterWidth (iWidth = 0)
{
    iWidth = iWidth ? iWinWidth - iWidth : iWidth;
    
    $('.' + sAdminPageHeaderName).css('width', iWidth);
    $('.' + sAdminPageFooterName).css('width', iWidth);
}

function searachAdminOneSon (iFatherId = 0, sJsonData = '', sFatherFeild = '', sIdFeild = '')
{
    if (!iFatherId || !sJsonData || !sFatherFeild || !sIdFeild) {
        return [];
    }
    
    let aData    = [];
    let sJsonSon = {};
    for (let i in sJsonData) {
        if (sJsonData[ i ][ sFatherFeild ] == iFatherId) {
            aData.push(sJsonData[ i ]);
            
            sJsonSon = sJsonData[ i ];
            delete sJsonData[ i ];
            
            searachAdminOneSon(sJsonSon[ sIdFeild ], sJsonData, sFatherFeild, sIdFeild);
        }
    }
    
    return aData;
}

const sAdminMenuListName = 'admin_admin_menu_show_list';

function sonTreeHtml1 (sJsonData = '')
{
    if (!sJsonData) {
        return false;
    }
    
    let sHtml = '';
    sHtml +=
        '<div id="' + sAdminMenuListName + '" onscroll="topTableTh(this, sTableThDomName, sTableTh);">';
    
    sHtml += '<table>';
    
    sHtml += '<thead>';
    sHtml += '<tr class="' + sTableTh + '">';
    for (let i in sJsonData[ 0 ]) {
        sHtml +=
            '<th class="td_column ' + i + '" onmouseenter="changeTdColumnBackgroundColor(this, sAdminMenuListName);">';
        sHtml +=
            '<span _origin_lang="' + i + '">' + feildNowLangvageValue(i) + '</span>';
        sHtml += '</th>';
    }
    sHtml += '<th>';
    sHtml +=
        '<span _origin_lang="operation">' + feildNowLangvageValue('operation') + '</span>';
    sHtml += '</th>';
    sHtml += '</tr>';
    sHtml += '</thead>';
    
    sHtml += '<tbody>';
    sHtml += writeAdminMenuTr(sJsonData);
    sHtml += '</tbody>';
    
    sHtml += '</table>';
    
    sHtml += '</div>';
    
    return sHtml;
}

const sTableThDomName = 'table_header';
const sTableTh        = 'table_th';

function topTableTh (obj, sHeaderId, sTableThClassName)
{
    if (document.getElementById(sHeaderId)) {
        return;
    }
    
    let oThDom = obj.getElementsByClassName(sTableThClassName)[ 0 ];
    
    let sHtml = '';
    sHtml += '<div id="' + sHeaderId + '">';
    sHtml += '</div>';
    
    let oDom = document.getElementById('data_body');
    $(sHtml).appendTo(oDom);
    
    let oTableThDom = document.getElementById(sHeaderId);
    oTableThDom.appendChild(oThDom.cloneNode(true));
    
    oTableThDom.style.left = obj.offsetLeft + 'px';
    oTableThDom.style.top = obj.offsetTop + 'px';
    oTableThDom.style.height = oThDom.offsetHeight + 'px';
    oTableThDom.style.lineHeight = oThDom.offsetHeight + 'px';
    oTableThDom.style.borderTopLeftRadius = getObjBorderRadius(obj.id);
    oTableThDom.style.borderTopRightRadius = getObjBorderRadius(obj.id);
    
    let oHeaderTh = oTableThDom.getElementsByTagName('th');
    let oObjTh = oThDom.getElementsByTagName('th');
    
    console.log(oHeaderTh[oHeaderTh.length - 1]);
    for (let i in oObjTh) {
        if (typeof oHeaderTh[i] != 'object') {
            continue;
        }
        
        oHeaderTh[i].style.width = oObjTh[i].offsetWidth + 'px';
    }
}

function writeAdminMenuTr (sJsonData = '')
{
    if (!sJsonData) {
        return '';
    }
    
    let aFatherIds = [];
    for (let i in sJsonData) {
        aFatherIds.push(sJsonData[ i ][ sAdminMenuFatherIdFeild ]);
    }
    
    aFatherIds = unique(aFatherIds);
    if (!aFatherIds) {
        return false;
    }
    aFatherIds = aFatherIds.sort();
    
    sJsonData =
        sonTree(sJsonData, aFatherIds[ 0 ], sAdminMenuFatherIdFeild, sAdminMenuIdFeild);
    sJsonData = sorts(sJsonData, sAdminMenuOrderFeild, 1);
    sJsonData = sonTreeConvertArray(sJsonData, 1);
    
    let sKey = [];
    for (let k in sJsonData[ 0 ]) {
        sKey.push(k);
    }
    
    let sTrClass;
    let sHtml = '';
    let sString = '';
    let sOriginLang = '';
    for (let j in sJsonData) {
        sTrClass = sAdminMenuListName + (
            j % 2 ? '_tr_1' : '_tr_2'
        );
        sHtml += '<tr class="' + sTrClass + '"';
        sHtml += '>';
        for (let i in sKey) {
            sHtml +=
                '<td class="td_column ' + sKey[ i ] + '" onmouseenter="changeTdColumnBackgroundColor(this, sAdminMenuListName);">';
    
    
            if (!judgeWhetherTimeField(i)) {
                sString = feildNowLangvageValue(sJsonData[ j ][ sKey[ i ] ]);
                sOriginLang = ' _origin_lang="' + sJsonData[ j ][ sKey[ i ] ] + '"';
            } else {
                sString = secondToDate ('YYYY-mm-dd HH:MM:SS', sJsonData[i]);
                sOriginLang = '';
            }
            sHtml +=
                '<span' + sOriginLang + '>' + sString + '</span>';
            sHtml += '</td>';
        }
        
        sHtml += '<td class="' + sAdminMenuListName + '_td_a">';
        sHtml +=
            adminMenuListOperation(sJsonData[ j ]);
        sHtml += '</td>';
        
        sHtml += '</tr>';
    }
    
    return sHtml;
}

function adminMenuListOperation (obj)
{
    let sHtml = '';
    sHtml += '<a onclick="showOneAdminMenuDetail(' + obj[sAdminMenuIdFeild] + ');">';
    sHtml +=
        '<span _origin_lang="show_one_admin_menu_detail">' + feildNowLangvageValue('show_one_admin_menu_detail') + '</span>';
    sHtml += '</a>';
    
    sHtml += '<a onclick="delAdminMenu(' + obj[sAdminMenuIdFeild] + ');">';
    sHtml +=
        '<span _origin_lang="add_son">' + feildNowLangvageValue('add_son') + '</span>';
    sHtml += '</a>';
    
    sHtml += '<a onclick="delAdminMenu(' + obj[sAdminMenuIdFeild] + ');">';
    sHtml +=
        '<span _origin_lang="del">' + feildNowLangvageValue('del') + '</span>';
    sHtml += '</a>';
    
    sHtml += '<a onclick="ssssss();">';
    sHtml +=
        '<span _origin_lang="update">' + feildNowLangvageValue('update') + '</span>';
    sHtml += '</a>';
    return sHtml;
}
const sAdminPageDelMenu = 'admin/admin_menu/del_menu';
function delAdminMenu (iId = 0) {
    if (!iId) {
        return;
    }
    
    sendQuery (sAdminPageDelMenu + '/' + iId, 'post', false, 'afterDelAdminMenu', true);
}
function afterDelAdminMenu (sJsonData)
{

}
const sAdminPageShowOneMenuDetail = 'admin/admin_menu/one_detail';
function showOneAdminMenuDetail (iId = 0) {
    if (!iId) {
        return;
    }
    
    queryAdminMenuRequert(sUriRequestUriFeild + '=' + sAdminPageShowOneMenuDetail + '&id=' + iId);
}
function oneMenuDetail  (sJsonData = [])
{
    if (!sJsonData[ sResponseDataFeild ] || typeof sJsonData[ sResponseDataFeild ] == 'undefined') {
        showAdminPage();
        
        showNoJurisdiction();
        return false;
    }
    sJsonData = sJsonData [sResponseDataFeild];
    if (sJsonData.length < 1) {
        return ;
    }
    sJsonData = sJsonData[0];
    
    console.log(sJsonData);
    
    let sHtml = '<div id="' + sOneAdminMenuDetail + '">';
    
    sHtml += '<table>';
    
    sHtml += '<thead>';
    sHtml += '<tr>';
    
    sHtml += '<th class="field td_column" onmouseenter="changeTdColumnBackgroundColor(this, sOneAdminMenuDetail);">';
    sHtml += '<span _origin_lang="field">' + feildNowLangvageValue('field') + '</span>';
    sHtml += '</th>';
    
    sHtml += '<th class="default_value td_column" onmouseenter="changeTdColumnBackgroundColor(this, sOneAdminMenuDetail);">';
    sHtml += '<span _origin_lang="default_value">' + feildNowLangvageValue('default_value') + '</span>';
    sHtml += '</th>';
    
    sHtml += '</tr>';
    sHtml += '</thead>';
    
    sHtml += '<tbody>';
    let j = 0;
    let sTrClass = '';
    let sString = '';
    let sOriginLang = '';
    for (let i in sJsonData) {
        sTrClass = sOneAdminMenuDetail + (
            j % 2 ? '_tr_1' : '_tr_2'
        );
        
        sHtml += '<tr class="' + sTrClass + '">';
        
        sHtml += '<td class="field td_column" onmouseenter="changeTdColumnBackgroundColor(this, sOneAdminMenuDetail);">';
        sHtml += '<span _origin_lang="' + i + '">' + feildNowLangvageValue(i) + '</span>';
        sHtml += '</td>';
    
        if (!judgeWhetherTimeField(i)) {
            sString = feildNowLangvageValue(sJsonData[i]);
            sOriginLang = ' _origin_lang="' + sJsonData[i] + '"';
        } else {
            sString = secondToDate ('YYYY-mm-dd HH:MM:SS', sJsonData[i]);
            sOriginLang = '';
        }
        
        sHtml += '<td class="default_value td_column" onmouseenter="changeTdColumnBackgroundColor(this, sOneAdminMenuDetail);">';
        sHtml += '<span' + sOriginLang + '>' + sString + '</span>';
        sHtml += '</td>';
        
        sHtml += '</tr>';
        
        j += parseInt(1);
    }
    sHtml += '</tbody>';
    
    sHtml += '</table>';
    
    let oDom = document.getElementById('data_body');
    $(sHtml).appendTo(oDom);
    
    showAdminPage();
}

function showMenuList (sJsonData)
{
    if (!sJsonData[ sResponseDataFeild ] || typeof sJsonData[ sResponseDataFeild ] == 'undefined') {
        showAdminPage();
        
        showNoJurisdiction();
        return false;
    }
    
    sJsonData = sJsonData[ sResponseDataFeild ];
    sJsonData = sJsonData.sort(function (a, b)
                               {
                                   return a[ sAdminMenuOrderFeild ] - b[ sAdminMenuOrderFeild ];
                               });
    
    let sHtml = sonTreeHtml1(sJsonData);
    if (!sHtml) {
        return false;
    }
    
    let oDom = document.getElementById('data_body');
    $(sHtml).appendTo(oDom);
    
    showAdminPage();
}

function changeTdColumnBackgroundColor (obj = false, sId = '')
{
    if (!obj) {
        return;
    }
    
    let sTdClassNmae = 'td_column';
    let sNowTag      = '_td_column_now';
    
    $('.' + sTdClassNmae).removeClass(sId + sNowTag);
    $('.' + sTdClassNmae).removeClass(sId + sNowTag + '_hover');
    $('.' + sTdClassNmae).removeClass(sId + sNowTag + '_hover_i');
    
    $('.' + obj.className.replace(sTdClassNmae, '').replace(' ', '')).addClass(sId + sNowTag);
    $(obj).addClass(sId + sNowTag + '_hover');
    $(obj).addClass(sId + sNowTag + '_hover_i');
}