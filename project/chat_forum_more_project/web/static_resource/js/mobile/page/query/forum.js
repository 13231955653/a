/*dne*/const iForumRequestLimit = 3;/*dne*/

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
    console.log('dasdwqpeiwqeii=====================================');
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
        // h = domByClass(onPostC, d) ? false : true;
        h = domByClass(onPostC, d) ? false : true;
        console.log('滑动请求，需检查当前dom是否已经请求过');
    }
    if (!h) {
        return;
    }

    let e = getSecondTime();
    let f = iForumRequestLimit;
    let i = iForumLastRequestTime[c];
    i = typeof i != 'undefined' ? i : 0;
    if (e - i < f) {
        notice('forum request limit, interval ' + f + ' second!!!');
        return;
    }
    iForumLastRequestTime[c] = e;

    aInForumRequest[j] = true;
    requires([sApiJ, sForumApiJ, sMd5J, sStrFunc, sFuncJ], function () {
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
/*qqq*/forumQueryBegin()/*qqq*/
