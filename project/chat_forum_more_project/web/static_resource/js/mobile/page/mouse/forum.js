/*mkz*/const sForumLeftClass = 'left_slide_';
const sForumRightClass = 'right_slide_';/*mkz*/
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
    requires([sForum, sJqueryJ, sMobileDomFuncJ, sForumSlideC], function () {
        asyn('doForumRight');
    });
}
function doForumRight () {
    let o = domById(sForumBodyD);
    if (!o) {
        return;
    }

    // if (sOrientation !== 'right') {
    //     iLeftTag -= parseInt(1);
    // }
    // sOrientation = 'right';

    let b = iForumListLength;

    iLeftTag -= parseInt(1);
    iLeftTag = iLeftTag < 0 ? b - 1 : iLeftTag;

    iLeftTag = iLeftTag % b;

    let c = sForumRightClass;

    let a = 0;
    for (a; a < b; a++) {
        $(o).removeClass(c + a);
        $(o).removeClass(sForumLeftClass + a);
    }
    $(o).addClass(c + Math.abs(iLeftTag));
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
    requires([sForum, sJqueryJ, sMobileDomFuncJ, sForumSlideC], function () {
        asyn('doForumLeft');
    });
}
let sOrientation = '';
function doForumLeft () {
    let o = domById(sForumBodyD);
    if (!o) {
        return;
    }

    iLeftTag += parseInt(1);

    let b = iForumListLength;

    iLeftTag = iLeftTag % b;

    // if (sOrientation !== 'left') {
    //     iLeftTag -= parseInt(1);
    // }
    // sOrientation = 'left';

    let c = sForumLeftClass;

    let a = 0;
    for (a; a < b; a++) {
        $(o).removeClass(c + a);
        $(o).removeClass(sForumRightClass + a);
    }
    $(o).addClass(c + iLeftTag);
}/*nmo*/
/*yeb*/function mouseForumBegin () {
    console.log('mouseForumBegin begin');
}/*yeb*/
