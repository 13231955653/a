/*aaa*//**
 *
 * 绑定forum body 滚动时间
 *
 */
function bindForumBodyScroll () {
    let a = $('.' + sForumSonsClass);
    for (let b in a) {
        a[b].onscroll = function () {
            checkScrollDirection(a[b]);
        }
    }
}/*aaa*/
/*bbb*//**
 *
 * 检查scroll 方向
 *
 * @param a 绑定滚动事件的dom
 */
let bCheckScrollDirection = false;
let bScrollDirectionTimeout = false;
const iCheckScrollDirectionLimit = 300;
let aScrollY = [];
function checkScrollDirection(a) {
    if (bScrollDirectionTimeout) {
        return;
    }
    bScrollDirectionTimeout = true;

    if (!bCheckScrollDirection) {
        let b = setTimeout(function () {
            clearTimeout(b);

            bCheckScrollDirection = true;

            bScrollDirectionTimeout = false;

            checkScrollDirection(a);
        }, iCheckScrollDirectionLimit);
        return;
    }
    bCheckScrollDirection = false;

    if (typeof aScrollY[a.id] == 'undefined') {
        aScrollY[a.id] = 0;
    }
    let c = aScrollY[a.id];
    let d = a.scrollTop;

    // if (c === d) {
    //     return;
    // }

    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnn');
    // console.log(a.scrollTop);
    // console.log(iForumHeadHeight);
    // console.log('qqqqqqqqqqqqqqqqqqqqqqqq');
    // console.log(c);
    // console.log(d);
    if (c < d) {
        if (a.scrollTop < iForumHeadHeight) {
            aScrollY[a.id] = d;
            bScrollDirectionTimeout = false;
            return;
        }

        console.log('向上滚动');
        // console.log(a);
        window[a.getAttribute(sScrollTopFuncK)](a.getAttribute(sScrollClassify));
    } else {
        console.log('向下滚动');
        window[a.getAttribute(sScrollDownFuncK)](a.getAttribute(sScrollClassify));
    }

    aScrollY[a.id] = d;
    bScrollDirectionTimeout = false;
}/*bbb*/
// /*ttt*/function forumScrollTop (a) {
//     console.log('top');
//     forumTop(a);
// }
// function forumScrollDown (a) {
//     console.log('down');
//     forumDown(a);
// }/*ttt*/
/*mbo*//**
 *
 * 上滑时间事件
 *
 * @param a 滑动 滚动 的 分类
 */
function forumTop (a = '') {
    console.log('forumTop');
    if (!a) {
        console.log('======1111111111');
        return;
    }

    let b = '';
    switch (a) {
        case sAnnouncement :
            b = announcementDom();
            break;
    }
    console.log('======222222222222222');
    if (!b) {
        console.log('======33333333333333333');
        return;
    }

    asyn('afterForumScroll', 1);

    requires([sFuncJ, sForumApiJ, sArrFuncJ, sForum], function () {
        asyn('doForumTop', a, b);
    });
}/*mbo*/
/*tai*/function doForumTop (a, b) {
    console.log('======444444444444444');
    if (aForumLastResponsePageNum[a] < aForumRequestPageNum[a]) {
        console.log('======555555555555555');
        return;
    }

    console.log('======6666666666666666666');

    console.log('======7777777777777777777');
    let c = parseInt(b.scrollHeight) - parseInt(b.offsetHeight) - parseInt(b.scrollTop);
    let d = parseInt(b.offsetHeight * 2);
    if (c > d) {
        console.log('======8888888888888888888');
        return;
    }

    asyn('forumRequest', inArray(a, aForumClassify));
}/*tai*/
// /*kxk*//**
//  *
//  * 检查forum头高度
//  *
//  */
// function checkForumHeadHeight (c = false) {
//     let b = forumHeadDom();
//     if (!c) {
//         if (b.offsetHeight < 1) {
//             b.id = sForumHeadHiddenD;
//             return;
//         }
//     } else {
//         if (b.offsetHeight > ) {
//             b.id = sForumHeadHiddenD;
//             return;
//         }
//     }
//
//
//     let a = setTimeout(function () {
//         clearTimeout(a);
//
//         checkForumHeadHeight();
//     }, 10);
// }/*kxk*/
/*chp*//**
 *
 * 向上滚动后
 *
 */
const sForumHeadHiddenC = 'b_forum_head_hidden';
const sPubFootHiddenC = 'pub_foot_hidden';
// const sForumBodyHiddenC = 'b_forum_body_1';
function afterForumScroll (a = false) {
    // if (
    //     a
    //     &&
    //     k.scrollHeight - k.scrollTop == k.offsetHeight
    // ) {
    //     return;
    // }

    let b = sForumHeadD;
    let c = sPubFootD;
    // let d = sForumBodyD;

    let e = '';
    let f = '';
    let g = '';
    let h = '';
    // let i = '';
    // let j = '';
    if (a) {
        e = sForumHeadD;
        f = sForumHeadHiddenC;

        g = sPubFootD;
        h = sPubFootHiddenC;

        // i = sForumBodyD;
        // j = sForumBodyHiddenC;
    } else {
        e = sForumHeadHiddenC;
        f = sForumHeadD;

        g = sPubFootHiddenC;
        h = sPubFootD;

        // i = sForumBodyHiddenC;
        // j = sForumBodyD;
    }

    $('#' + b).removeClass(e);
    $('#' + b).addClass(f);

    $('#' + c).removeClass(g);
    $('#' + c).addClass(h);

    // $('#' + d).removeClass(i);
    // $('#' + d).addClass(j);
}/*chp*/
/*xjc*//**
 *
 * 下滑时间事件
 *
 */
function forumDown() {
    console.log('forumDown');

    asyn('afterForumScroll');
}/*xjc*/
/*ccc*/function forumScrollBegin () {
    console.log('forumScrollBegin');
}/*ccc*/
/*ddd*/forumScrollBegin()/*ddd*/
