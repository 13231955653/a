/*dne*/const iForumRequestLimit = 3;/*dne*/

/*bbb*//**
 *
 * 检查当前滑动到的分类是否已经请求过，已经请求过不再请求
 *
 * @param a
 * @returns {boolean}
 */
function judgeToRequest (a) {
    switch (aForumList[a].replace(sForumPage + sForumSplitTag, '')) {
        case sAnnouncement :
            return oneDomByClass(sAnnouncementSonC, announcementDom()) ? false : true;
            break;
        case sRecommend :
            return oneDomByClass(sRecommendSonC, recommendDom()) ? false : true;
            break;
        default :
            throw new Error(aForumList[a].replace(sForumPage + sForumSplitTag, ''));
            break;
    }

    return false;
}/*bbb*/
/*dne*//**
 *
 * forum 请求
 *
 * @param a 当前页面，aForumList 的 索引 type int
 * @param g 点击还是滑动 为真点击为假滑动
 */
let iForumLastRequestTime = [];
let aInForumRequest = [];
function forumRequest(a = false, g = '') {
    if (a === false) {
        return;
    }

    let b = aForumClassify;

    let c = b[a];

    let j = aForumApi[c];
    if (aInForumRequest[j]) {
        return;
    }

    let d = domById(sForumPage + sForumSplitTag + c + sForumBodySuffix);
    if (!d) {
        return;
    }

    let h = false;
    if (g) {
        console.log('点击请求');
        h = true;
    } else {
        console.log(d);
        console.log('滑动请求，需检查当前dom是否已经请求过');
        h = judgeToRequest(a);
    }
    if (!h) {
        return;
    }

    let e = getSecondTime();
    let f = iForumRequestLimit;
    let i = iForumLastRequestTime[c];
    i = typeof i != 'undefined' ? i : 0;
    if (e - i < f) {
        requires([sFuncDomJ], function () {
            notice('forum request limit, interval ' + f + ' second!!!');
        });
        return;
    }
    iForumLastRequestTime[c] = e;

    aInForumRequest[j] = true;
    requires([sApiJ, sForumApiJ, sStrFunc, sFuncJ], function () {
        asyn('forumApiRequest', j);
    });
}/*dne*/
/*ttt*/
/**
 *
 * forum 请求
 *
 * @param a request api route
 */
function forumApiRequest (a) {
    let k = getForumNowShow();
    if (typeof aForumRequestPage[k] == 'undefined') {
        aForumRequestPage[k] = 1;
    }

    let m = {};
    m[sApiArgPage] = aForumRequestPage[k];

    apiQuery (a, m, 'post');
}/*ttt*/
/*syc*/function forumQueryBegin () {
    console.log('forumQueryBegin');
}/*syc*/
/*aaa*//**
 *
 * 请求具体 announcement
 *
 * @param a
 */
const sShowAnnouncementSonRoute = 'announcement_son';
function showAnnouncementSon (a) {
    console.log(aAnnouncementIds[a]);
    let b = requestRequireJs();
    b.push(sForumApiJ);
    b.push(sNumFunc);

    let c = {};
    c.d = aAnnouncementIds[a];
    requires(b, function () {
        if (!myIsNaN(c.d)) {
            console.log(c.d);
            console.log('llllllllkkkk');
            return;
        }

        apiQuery (aForumApi[sShowAnnouncementSonRoute], c, 'post');
    });
}/*aaa*/
/*qqq*/forumQueryBegin();/*qqq*/
