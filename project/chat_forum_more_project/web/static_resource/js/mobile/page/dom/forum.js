/*gkp*///forum 显示列表
const sAnnouncement = 'announcement';
const sAttention = 'attention';
const sRecommend = 'recommend';
const sHot = 'hot';
const sUserClassify = 'uclassify';
const sClassify = 'classify';
const sJoke = 'joke';
const sSport = 'sport';
const sBike = 'bike';
const sMusic = 'music';
const sVideo = 'video';
const sMusicRecommend = 'musique';
const sVideoRecommend = 'mas';
const sForumBodySuffix = '_b';
const sForumHeadSuffix = '_h';
const sForumSplitTag = '_';
const sForumHeadClass = 'forum_head_c';
const sForumHeadActiveClass = 'forum_head_c_act';
const sForumHeadClick = 'forum_head_c';
const sForumHeadReplaceLangC = '_l';
const sForumClassifyTag = 'forum_select';
const aForumClassify = [
    sAnnouncement,
    sRecommend,
    sAttention,
    sHot,
    sUserClassify,
    sClassify,
    sJoke,
    sSport,
    sBike,
    sMusic,
    sVideo,
    sMusicRecommend,
    sVideoRecommend,
];
let e = sForumSplitTag;
let d = sForumPage;
let aForumList = [];
for (let i in aForumClassify) {
    aForumList.push(d + e + aForumClassify[i]);
}
d = null;
e = null;
const iForumListLength = aForumList.length;/*gkp*/

/*yxd*/const sForumBodyD = 'b_forum_body';
const sForumHeadD = 'b_forum_head';
const sForumHeadDUl = 'b_forum_head_u';
const sForumSonsClass = 'forum_sons';/*yxd*/

/*yxz*/const onPostC = 'f_grandson';
const onPostHeadC = 'f_grandson_h';
const onePostBodyC = 'f_grandson_b';
const onepPoseFootC = 'f_grandson_f';
/*yxz*/

/*kkk*/const sOneAnnouncementC = 'one_announcement';
const sOneAnnouncementHeadC = 'one_announcement_h';
const sOneAnnouncementBodyC = 'one_announcement_b';
const sOneAnnouncementFootC = 'one_announcement_f';
/*kkk*/
/*ddd*/const sScrollTopFuncK = 'scroll_top_f';
const sScrollDownFuncK = 'scroll_down_f';/*ddd*/

/*vvs*/const sForumGrandsonFoot1 = 'collect';
const sForumGrandsonFoot2 = 'praise';
const sForumGrandsonFoot3 = 'trample';
const sForumGrandsonFoot4 = 'more';
let j = [
    sForumGrandsonFoot1,
    sForumGrandsonFoot2,
    sForumGrandsonFoot3,
    sForumGrandsonFoot4,
];
const sForumGrandsonFoot = j;
// const sForumGrandsonFootLangSuffix = '_l';
j = null;
const sCollect = '💋';
const sPraise = '👍';
const sTrample = '👎';
const sMore = '┉';
/*vvs*/
/*ddd*/let k = [];
k[sAnnouncement] = 'one_announcement';
k[sAttention] = '';
k[sRecommend] = '';
k[sHot] = '';
k[sUserClassify] = '';
k[sClassify] = '';
k[sJoke] = '';
k[sSport] = '';
k[sBike] = '';
k[sMusic] = '';
k[sVideo] = '';
k[sMusicRecommend] = '';
k[sVideoRecommend] = '';
const aForumGrandsonC = k;
k = null;/*ddd*/

/*upg*//**
 *
 * 设置forum body class
 *
 */
let aForumBodyClass = [];
const sForumBodyClass = 'forum_body_';
function forumBodyClass () {
    let a = aForumList.length;
    let b = 1;
    for (b; b <= a; b++) {
        aForumBodyClass[b] = sForumBodyClass + b;
    }
}/*upg*/
/*qct*/let oForumHead = false;
function forumHeadDom () {
    if (oForumHead) {
        return oForumHead;
    }

    oForumHead = domById(sForumHeadD);
    return oForumHead;
}
/**
 *
 * 头部
 *
 */
function writeForumHead () {
    let a = aForumList;

    let s = [];
    s.push('<div id="' + sForumHeadD + '" class="' + sFullWidthClass + '">');
    s.push('<ul id="' + sForumHeadDUl + '">');
    let b = '';
    for (let i in a) {
        b = i == 0 ? sForumHeadActiveClass : '';

        s.push('<li id="' + a[i] + sForumHeadSuffix + '" class="' + sForumHeadClass + ' ' + b + '" ' + sForumHeadClick + '="' + i + '"' + sForumClassifyTag + '="' + aForumClassify[i] + '">');
        s.push('<span id="' + a[i] + sForumHeadReplaceLangC + '" class="' + sReLangClass + '"></span>');
        s.push('</li>');
    }
    s.push('</ul>');
    s.push('</div>');

    a = i = null;

    return s.join('');
}/*qct*/
/*lay*/
function writeForumBody () {
    let a = aForumList;

    let s = [];
    s.push('<div id="' + sForumBodyD + '" class="' + sFullHeightForFatherClass + '">');
    for (let i in a) {
        s.push('<div id="' + a[i] + sForumBodySuffix + '" class="' + sFullWidthClass + ' ' + sForumSonsClass + '" ' + sScrollTopFuncK + '="forumScrollTop" ' + sScrollDownFuncK + '="forumScrollDown"></div>');
    }
    s.push('</div>');

    a = i = null;

    return s.join('');
}/*lay*/
/*oen*//**
 *
 * 写forum dom内容
 *
 */
function writeForumInfo () {
    if (!aForumList) {
        forumBodyClass();
    }

    requires([sPlatDomJ, sJqueryJ], function () {
        asyn('doWriteForumInfo');
    });
}
function doWriteForumInfo () {
    let d = sBBodyD + sForumPage;
    let o = domById(d);
    if (!o) {
        setTimeoutFunction('doWriteForumInfo');
        return;
    }
    $(o).addClass(sInvisibleClass);

    o.innerHTML = writeForumHead() + writeForumBody();

    requires([sJqueryJ, sMouseForumJ], function () {
        asyn('bindForumHeadClick');
    });

    requires([sNowLang, sMobileDomFuncJ], function () {
        asyn('replaceLang', forumHeadDom());
    });

    requires([sJqueryJ, sMouseForumJ, sMouseJ], function () {
        asyn('bindForumBodyScroll');
    });

    $(o).removeClass(sInvisibleClass);
    o = d = e = null;

    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
    // requires([sResetC, sPubC, sSzieC, sForumC, sForumSlideC, sPlatDomLogic, sMouseForumJ], function () {
    //     console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
    //     asyn('pageBegin');
    // });
    requires([sPlatDomLogic, sMouseForumJ, sResetC, sSizeC], function () {
        // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
        asyn('pageBegin');
    });
}/*oen*/
/*oen*/let oAnnouncement = '';
function announcementDom () {
    if (oAnnouncement) {
        return oAnnouncement;
    }
    oAnnouncement = domById(sForumPage + sForumSplitTag + sAnnouncement + sForumBodySuffix);
    return oAnnouncement;
}
/*oen*/
/*jli*//**
 *
 * announcement 请求后处理函数
 *
 * @param a
 */
function afterRequestAnnouncement (a = '') {
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,4,4,423,4,23,42,34,234,2,34,23,4,235,2,35,23,5,23,52,35,23,5,235,23,5,235,23,5,235,23,5,235,23,5,523523];
    if (!a) {
        return;
    }

    if (!announcementDom()) {
        asyn('writeForumInfo');
        setTimeoutFunction('afterRequestAnnouncement', a);
        return;
    }

    requires([sFuncDomJ, sJqueryJ, sStrFunc], function () {
        asyn('writeAnnouncements', a);
    });
    a = null;

    aInForumRequest[aForumApi[sAnnouncement]] = false;
    aForumRequestPage[sAnnouncement] += parseInt(1);
}/*jli*/
/*cgm*//**
 *
 * 写 forum announcement dom
 *
 * @param a 请求后返回数据 type json
 */

function writeAnnouncements (a = '') {
    let b = myFragment();
    for (let c in a) {
        b.appendChild(writeAnnouncement(a[c]));
    }

    $(announcementDom()).append(b);

    a = b = null;
}/*cgm*/
/*luq*//**
 *
 * 写 forum announcement dom
 *
 * @param a 请求后返回数据 type json
 */
function writeAnnouncement (a = '') {
    if (!a) {
        return;
    }

    let b = createDiv();
    b.className = sOneAnnouncementC;

    let c = createDiv();
    c.className = sOneAnnouncementHeadC;
    c.innerHTML = 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqq';

    let d = createDiv();
    d.className = sOneAnnouncementBodyC;
    d.innerHTML = a;

    let e = createDiv();
    e.className = sOneAnnouncementFootC;
    e.innerHTML = '111111111111111111';

    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    a = c = d = e = null;

    return b;
}/*luq*/
/*aaa*/function onePoseHead () {
    let a = createDiv();
    a.className = sOneForumSonHeadC + ' ' + sFullWidthForFatherClass;

    return a;
}
function onePoseBody () {
    let a = createDiv();
    a.className = sOneForumSonBodyC + ' ' + sFullWidthForFatherClass;

    return a;
}
function onePoseFoot () {
    let a = createDiv();
    a.className = sOneForumSonFootC + ' ' + sFullWidthForFatherClass;

    let b = createUl();

    let c = sForumGrandsonFoot;
    let e = '';
    let g = '';
    let h = '';
    let i = '';
    for (let d in c) {
        e = createLi();
        e.className = sGray;

        h = createSpan();
        switch (c[d]) {
            case sForumGrandsonFoot1 :
                i = sCollect;
                break;
            case sForumGrandsonFoot2 :
                i = sPraise;
                break;
            case sForumGrandsonFoot3 :
                i = sTrample;
                break;
            case sForumGrandsonFoot4 :
                i = sMore;
                break;
        }
        h.innerHTML = i;

        g = createSpan();
        g.innerHTML = randNum(0, 999);

        e.appendChild(h);
        e.appendChild(g);
        b.appendChild(e);
    }
    c = d = e = d = g = h = i = null;
    a.appendChild(b);
    b = null;

    return a;
}
/*aaa*/
/*oai*/function forumBegin () {
    console.log('forumBegin begin');

    forumBodyClass();

    asyn('writeForumInfo');
}/*oai*/
/*zzz*/forumBegin();/*zzz*/
