/*9429d793fa750360*//**
 *
 * 测试写页面dom
 *
 */
function writeForumHead () {
    requires([sPlatDomJ], function () {
        asyn('doWriteForumHead');
    });
}
/**
 *
 * 头部
 *
 */
function doWriteForumHead () {
    let d = sBHeadD + sForumPage;
    let o = domById(d);
    if (!o) {
        setTimeoutFunction('doWriteForumHead');
        return;
    }

    let s = '';
    s += '<div class="' + sOneHead + '">';
    s += '<span class="' + sReLangClass + '" id="' + sForumPage + sPageTitSuffix + '"></span>';
    s += '</div>';

    s += '<div class="' + sTwoHead + '">';
    s += '<ul>';
    s += '<li>';
    s += '<span class="' + sReLangClass + '" id="sort"></span>';
    s += '<li>';
    s += '<li>';
    s += '<span class="' + sReLangClass + '" id="hot"></span>';
    s += '<li>';
    s += '<li>';
    s += '<span class="' + sReLangClass + '" id="new"></span>';
    s += '<li>';
    s += '<li>';
    s += '<span class="' + sReLangClass + '" id="re"></span>';
    s += '<li>';
    s += '<ul>';
    s += '</div>';

    s += '<div class="' + sThreeHead + '">';
    s += '<ul>';
    s += '<li>';
    s += '<span class="' + sReLangClass + '" id="type"></span>';
    s += '<li>';
    s += '<li>';
    s += '<span class="' + sReLangClass + '" id="all"></span>';
    s += '<li>';
    s += '<li>';
    s += '<span class="' + sReLangClass + '" id="img"></span>';
    s += '<li>';
    s += '<li>';
    s += '<span class="' + sReLangClass + '" id="text"></span>';
    s += '<li>';
    s += '<ul>';
    s += '</div>';

    o.innerHTML = s;

    requires([sNowLang, sDomFunc], function () {
        asyn('replaceLang', sReplaceLangIdType, d);
    });
}/*9429d793fa750360*/

/*4449254a38cf9a8a*/function forumBegin () {
    console.log('forumBegin begin');

    asyn('writeForumHead');

    testWriteForumBodyDom();

    asyn('pageBegin');
}/*4449254a38cf9a8a*/



/*74270304a58783b3*//**
 *
 * 测试写页面dom
 *
 */
function testWriteForumBodyDom () {
    requires([sPlatDomJ], function () {

    });
}/*74270304a58783b3*/
