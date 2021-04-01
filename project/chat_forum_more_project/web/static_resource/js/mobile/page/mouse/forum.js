/*mkz*/const sForumLeftClass = 'left_slide_';/*mkz*/
/*emj*//**
 *
 * 长按事件
 *
 */
function forumLongClick() {
    console.log('forumLongClick');
}/*emj*/
/*mbo*//**
 *
 * 上滑时间事件
 *
 */
function forumTop() {
    console.log('forumTop');
}/*mbo*/
/*ukb*//**
 *
 * 右滑时间事件
 *
 */
function forumRight() {
    console.log('forumRight');
}/*ukb*/
/*xjc*//**
 *
 * 下滑时间事件
 *
 */
function forumDown() {
    console.log('forumDown');
}/*xjc*/
/*nmo*//**
 *
 * 左滑时间事件
 *
 */
let iLeftTag = 0;
function forumLeft() {
    console.log('forumLeft');
    requires([sForum, sJqueryJ, sMobileDomFuncJ], function () {
        asyn('doForumLeft');
    });
}
function doForumLeft () {
    let o = domById(sForumBodyD);
    if (!o) {
        return;
    }
    iLeftTag += parseInt(1);

    let c = sForumLeftClass;

    let a = 0;
    let b = iForumListLength;
    for (a; a < b; a++) {
        $(o).removeClass(c + a);
    }
    $(o).addClass(c + parseInt(iLeftTag % b));
}/*nmo*/
/*yeb*/function mouseForumBegin () {
    console.log('mouseForumBegin begin');
}/*yeb*/
