/*9429d793fa750360*//**
 *
 * 测试写页面dom
 *
 */
function writeChatHead () {
    requires([sPlatDomJ], function () {
        asyn('doWriteChatHead');
    });
}
/**
 *
 * 头部
 *
 */
function doWriteChatHead () {
    let d = sBHeadD + sChatPage;
    let o = domById(d);
    if (!o) {
        setTimeoutFunction('doWriteChatHead');
        return;
    }

    let s = '';
    s += '<div class="' + sOneHead + '"></div>';
    // s += '<div class="' + sTwoHead + '"></div>';
    // s += '<div class="' + sThreeHead + '"></div>';

    o.innerHTML = s;
}/*9429d793fa750360*/
/*9429d793fa750360*/function chatBegin () {
    console.log('chatBegin begin');

    asyn('writeChatHead');

    // testWriteChatBodyDom();

    asyn('pageBegin');
}/*9429d793fa750360*/
