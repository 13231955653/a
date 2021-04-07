/*mkz*/const sForumLeftClass = 'left_slide_';
const sForumRightClass = 'right_slide_';
const sLevelLeftMove = 'left';
const sLevelRightMove = 'right';/*mkz*/
// /*mkz*/const iFinalSonMinDistanceFoot = parseInt(iWinHeight * 2);
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

    requires([sFuncJ, sForumApiJ, sArrFuncJ, sForum], function () {
        asyn('doForumTop');
    });
}
function doForumTop () {
    let a = getForumNowShow();
    console.log(a);
    if (!a) {
        return;
    }

    if (aForumLastResponsePageNum[a] < aForumRequestPageNum[a]) {
        return;
    }

    let b = '';
    switch (a) {
        case sAnnouncement :
            b = announcementDom();
            break;
    }
    if (!b) {
        return;
    }

    let c = parseInt(b.scrollHeight) - parseInt(b.offsetHeight) - parseInt(b.scrollTop);
    let d = parseInt(b.offsetHeight * 2);
    if (c > d) {
        return;
    }

    asyn('forumRequest', inArray(a, aForumClassify));
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
    let d = iLevelMoveT;

    let b = iForumListLength;

    d = parseInt(d) - parseInt(1);
    d = d < 0 ? b - 1 : d;

    d = iLevelMoveT = d % b;

    asyn('forumChangeLevelMove', d, sLevelRightMove);
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
let iLevelMoveT = 0;
function forumLeft() {
    console.log('forumLeft');
    asyn('leftRightMoveRely', 'doForumLeft');
}/*nmo*/
/*fpk*/function doForumLeft () {
    let d = iLevelMoveT;
    d = parseInt(1) + parseInt(d);

    let b = iForumListLength;

    d = iLevelMoveT = d % b;

    asyn('forumChangeLevelMove', d, sLevelLeftMove);
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
    if (!bSetLevelMoveT) {
        setTimeoutFunction('leftRightMoveRely', a);
        return;
    }

    requires([sForum, sJqueryJ, sMobileDomFuncJ, sMouseForumJ], function () {
        asyn(a);
    });
}/*wao*/
/*ozb*//**
 *
 * 修改url forum classify tag
 *
 * @param t 当前移动tag type int
 */
function changeUrlForumClassifyTag (t) {
    requires([sForum, sFuncForumJ, sJqueryJ], function () {
        let z = $('.' + sForumHeadClass);
        if (!z) {
            return;
        }

        updateUrlForumClassify(t, z[t].getAttribute(sForumClassifyTag));
    });
}/*ozb*/
/**
 *
 * forum 水平滑动 或 填写 地址栏请求 或点击请求
 *
 * @param d 滑动 tag type int
 * @param a 方向 type string
 * @param c 点击还是滑动 为真点击为假滑动
 */
function forumChangeLevelMove (d = '', a = '', c = false) {
    if (!bSetLevelMoveT) {
        setTimeoutFunction('forumChangeLevelMove', d, a);
        return;
    }

    let o = domById(sForumBodyD);
    if (!o) {
        return;
    }

    if (d === '') {
        d = iLevelMoveT;
    }
    a = a !== '' ? a : sLevelLeftMove;

    asyn('changeUrlForumClassifyTag', d);

    asyn('levelMoveForumHead', d);

    levelMoveForumBody(o, d, a);

    requires([sForumQueryJ, sMobileDomFuncJ, sForumApiJ], function () {
        asyn('forumRequest', d, c);
    });
}
/*lxq*//**
 *
 * 初始化 水平移动tag
 *
 */
let bSetLevelMoveT = false;
function initLevelMoveTag () {
    requires([sFuncJ, sEncodeJ, sStrFunc], function () {
        bSetLevelMoveT = true;
        iLevelMoveT = getNowForumLevelMoveTag();
    });
}/*lxq*/
/*mrj*//**
 *
 * 绑定forum 头部点击事件
 *
 */
function bindForumHeadClick () {
    let a = $('.' + sForumHeadClass);
    for (let b in a) {
        a[b].onclick = function () {
            if (typeof this.getAttribute != 'function') {
                return;
            }

            iLevelMoveT = this.getAttribute(sForumHeadClick);

            asyn('forumChangeLevelMove', iLevelMoveT);
        }
    }
}/*mrj*/
/*ttt*/function forumScrollTop () {
    console.log('top');
    forumTop();
}
function forumScrollDown () {
    console.log('down');
    forumDown();
}/*ttt*/
/*yeb*/function mouseForumBegin () {
    console.log('mouseForumBegin begin');

    initLevelMoveTag();
}/*yeb*/
/*aaa*/mouseForumBegin()/*aaa*/
