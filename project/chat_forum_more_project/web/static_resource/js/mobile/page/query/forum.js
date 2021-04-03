/*dne*/const iForumRequestLimit = 3;/*dne*/
/*dne*//**
 *
 * forum 请求
 *
 * @param a 当前页面，aForumList 的 索引 type int
 * @param g 点击还是滑动 为真点击为假滑动
 */
let iForumLastRequestTime = [];
function forumRequest(a = false, g = '') {
    if (a === false) {
        return;
    }

    let b = aForumList;

    let c = b[a];
    let d = domById(c + sForumBodySuffix);
    if (!d) {
        return;
    }

    let h = false;
    if (g) {
        console.log('点击请求');
        h = true;
    } else {
        console.log(d);
        h = domByClass(sOneForumSonC, d) ? false : true;
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

    requires([sApiJ, sForumApiJ], function () {
        apiQuery (aForumApi[c], false, 'post');
    });
}/*dne*/
/*syc*/function forumQueryBegin () {
    console.log('forumQueryBegin');
}/*syc*/
