/*mkz*/const sForumLeftClass = 'left_slide_';
const sForumRightClass = 'right_slide_';
const sLevelLeftMove = 'left';
const sLevelRightMove = 'right';/*mkz*/
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
    asyn('leftRightMoveRely', 'doForumRight');
}
function doForumRight () {
    let o = domById(sForumBodyD);
    if (!o) {
        return;
    }

    let d = iLeftTag;

    let b = iForumListLength;

    d -= parseInt(1);
    d = d < 0 ? b - 1 : d;

    d = iLeftTag = d % b;

    asyn('levelMoveForumHead', d);

    levelMoveForumBody(o, d, sLevelRightMove);
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
    asyn('leftRightMoveRely', 'doForumLeft');
}/*nmo*/
/*fpk*/function doForumLeft () {
    let o = domById(sForumBodyD);
    if (!o) {
        return;
    }
    let d = iLeftTag;
    d += parseInt(1);

    let b = iForumListLength;

    d = iLeftTag = d % b;

    asyn('levelMoveForumHead', d);

    levelMoveForumBody(o, d, sLevelLeftMove);
}/*fpk*/
/*iol*//**
 *
 * 水平移动forum
 *
 * @param t 当前水平移动tag
 */
function levelMoveForumHead (t) {
    let d = sForumHeadActiveClass;
    let e = sForumHeadClass;

    let f = $('.' + e)[t];
    $('.' + e).removeClass(d);
    $(f).addClass(d);

    let c = sHiddenClass;
    $('.' + e).removeClass(c);
    t = t > 0 ? t : 0;
    let b = 0;
    for (b; b < t; b++) {
        $($('.' + e)[b]).addClass(c);
    }
}/*iol*/
/*khj*//**
 *
 * 水平一定forum body
 *
 * @param o forum body dom type dom object
 * @param t 水平移动tag type int
 * @param e 左右移动 type string left right
 */
function levelMoveForumBody (o, t, e) {
    let d = sForumRightClass;
    let f = sForumLeftClass;

    let b = '';
    let c = '';
    switch (e) {
        case sLevelLeftMove :
            t = t;
            b = d;
            c = f;
            break;
        case sLevelRightMove :
            t = Math.abs(t);
            b = f;
            c = d;
            break;
    }

    let a = 0;
    for (a; a < iForumListLength; a++) {
        $(o).removeClass(c + a);
        $(o).removeClass(b + a);
    }

    $(o).addClass(c + t);
}/*khj*/
/*wao*/
/**
 *
 * 左右移动依赖js css
 *
 * @param a 回调函数
 */
function leftRightMoveRely (a) {
    requires([sForum, sJqueryJ, sMobileDomFuncJ, sForumSlideC, sMouseForumJ], function () {
        asyn(a);
    });
}/*wao*/
/*yeb*/function mouseForumBegin () {
    console.log('mouseForumBegin begin');
}/*yeb*/
