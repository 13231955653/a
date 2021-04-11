/*gkp*///forum 显示列表
const sAnnouncement = 'announcement';
const sRecommend = 'recommend';
const sAttention = 'attention';
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
// const sForumClassifyTag = 'forum_select';
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

/*yay*/const sRecommendSonC = 'recommend_son';/*yay*/

/*yxz*/const onPostC = 'f_grandson';
const onPostHeadC = 'f_grandson_h';
const onePostBodyC = 'f_grandson_b';
const onepPoseFootC = 'f_grandson_f';
/*yxz*/

/*kkk*/const sAnnouncementSonC = 'announcement_son';
const sAnnouncementSonHeadC = 'announcement_son_h';
const sAnnouncementSonBodyC = 'announcement_son_b';
const sAnnouncementSonFootC = 'announcement_son_f';
const sAnnouncementSonIdT = 'announcement_id_t';
/*kkk*/
/*ddd*/const sScrollTopFuncK = 'scroll_top_f';
const sScrollDownFuncK = 'scroll_down_f';
const sScrollClassify = 'scroll_classify';/*ddd*/

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
k[sAnnouncement] = 'announcement_son';
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

// /*upg*//**
//  *
//  * 设置forum body class
//  *
//  */
// let aForumBodyClass = [];
// const sForumBodyClass = 'forum_body_';
// let bSetForumBodyC = false;
// function forumBodyClass () {
//     if (bSetForumBodyC) {
//         return;
//     }
//     bSetForumBodyC = true;
//
//     let a = aForumList.length;
//     let b = 1;
//     for (b; b <= a; b++) {
//         aForumBodyClass[b] = sForumBodyClass + b;
//     }
// }/*upg*/
/*fvn*/let oForumBody = false;
function forumBodyDom () {
    if (oForumBody) {
        return oForumBody;
    }

    oForumBody = domById(sForumBodyD);
    return oForumBody;
}/*fvn*/
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
let aForumSlideTag = [];
let aForumSlideClassify = [];
const iForumHeadHeight = parseInt(iFontSize * 3);
function writeForumHead () {
    let a = aForumList;

    let s = [];
    s.push('<div id="' + sForumHeadD + '" class="' + sFullWidthClass + ' ' + sForumHeadD + '">');
    s.push('<ul id="' + sForumHeadDUl + '">');
    let b = '';
    let f = '';
    for (let i in a) {
        b = i == 0 ? sForumHeadActiveClass : '';

        f = md5(randStr(32) + getMillisecondTime());
        aForumSlideClassify[f] = aForumClassify[i];

        aForumSlideTag[f] = i;

        s.push('<li id="' + a[i] + sForumHeadSuffix + '" class="' + sForumHeadClass + ' ' + b + '" ' + sForumHeadClick + '="' + f + '">');
        s.push('<span id="' + a[i] + sForumHeadReplaceLangC + '" class="' + sReLangC + '"></span>');
        s.push('</li>');
    }
    s.push('</ul>');
    s.push('</div>');

    a = i = f = null;

    return s.join('');
}/*qct*/
/*lay*/
function writeForumBody () {
    let a = aForumList;

    let s = [];
    s.push('<div id="' + sForumBodyD + '" class="' + sForumBodyD + '">');
    let b = [];
    let d = '';
    for (let i in a) {
        d = '';
        // console.log('lllllllllllllllll');
        // console.log(a[i]);
        b = a[i].split('_');
        b.shift();
        b = b.join('_');
        // console.log(b);
        s.push('<div id="' + a[i] + sForumBodySuffix + '" class="' + sFullWidthClass + ' ' + sForumSonsClass + '" ' + sScrollTopFuncK + '="forumTop" ' + sScrollDownFuncK + '="forumDown" ' + sScrollClassify + '="' + b + '"></div>');
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
let bWriteForumInfo = false;
function writeForumInfo () {
    // if (!bSetForumBodyC) {
    //     forumBodyClass();
    //
    //     setTimeoutFunction('writeForumInfo');
    //
    //     return;
    // }

    if (bWriteForumInfo) {
        return;
    }
    bWriteForumInfo = true;

    requires([sPlatDomJ, sJqueryJ, sStrFunc], function () {
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

    requires([sJqueryJ, sSideForumJ], function () {
        asyn('bindForumHeadClick');
    });

    requires([sNowLang, sMobileDomFuncJ], function () {
        asyn('replaceLang', forumHeadDom());
    });

    requires([sJqueryJ, sScrollIncidentForumJ, sMouseJ], function () {
        asyn('bindForumBodyScroll');
    });

    $(o).removeClass(sInvisibleClass);
    o = d = e = null;

    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
    // requires([sResetC, sPubC, sSzieC, sForumC, sForumSlideC, sPlatDomLogic, sMouseForumJ], function () {
    //     console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
    //     asyn('pageBegin');
    // });
    requires([sPlatDomLogic, sSideForumJ, sForumC, sForumSlideC], function () {
        // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
        asyn('pageBegin');
    });
}/*oen*/
/*oen*/let oAnnouncement = '';
function announcementDom () {
    if (oAnnouncement) {
        return oAnnouncement;
    }
    oAnnouncement = forumSonBodyDom(sAnnouncement);
    return oAnnouncement;
}
/*oen*/
/*bbb*//**
 *
 * 获取 forum son body class
 *
 * @param a 分类 名字  type string
 * @returns {string}
 */
function forumSonBodyC (a) {
    return sForumPage + sForumSplitTag + a + sForumBodySuffix;
}/*bbb*/
/*ccc*//**
 *
 * 获取 forum son body dom 对象
 *
 * @param a
 * @returns {any}
 */
function forumSonBodyDom (a) {
    return domById(forumSonBodyC(a));
}/*ccc*/
/*kkk*//**
 *
 * forum dom father
 *
 */
const sShowAnnouncementFatherD = 'show_announcement_father';
let oShowAnnouncementFather = false;
function showAnnouncement () {
    if (oShowAnnouncementFather) {
        return oShowAnnouncementFather;
    }

    oShowAnnouncementFather = domById(sShowAnnouncementFatherD);
    return oShowAnnouncementFather;
}/*kkk*/
/*iii*//**
 *
 * 检查是否存在 show Announcement father dom
 *
 */
function checkExistShowAnnouncementFatherDom () {
    return domById(sShowAnnouncementFatherD) ? true : false;
}
function makeShowAnnouncementFatherDom () {
    if (checkExistShowAnnouncementFatherDom()) {
        return true;
    }

    let a = createDiv();
    a.id = sShowAnnouncementFatherD;

    forumDomFather().appendChild(a);

    return true;
}
/*iii*/
/*jjj*//**
 *
 * forum dom father
 *
 */
let oForumDomFather = false;
function forumDomFather () {
    if (oForumDomFather) {
        return oForumDomFather;
    }

    oForumDomFather = domById(sBBodyD + sForumPage);
    return oForumDomFather;
}/*jjj*/
/*fff*//**
 *
 * 展示单个 announcement
 *
 * @param a announcement 信息  type  json array
 */
const sShowAnnouncementSonC = 'show_announcement_son';
const sShowAnnouncementTitC = 'show_announcement_son_t';
const sShowAnnouncementSonInfoC = 'show_announcement_son_i';
const sShowAnnouncementSonCloseC = 'show_announcement_son_close';
const sShowAnnouncementSonCloseL = 'show_announcement_son_close';
function afterRequestAnnouncementSon (a = '') {
    if (!checkExistShowAnnouncementFatherDom()) {
        makeShowAnnouncementFatherDom();

        setTimeoutFunction('afterRequestAnnouncementSon', a);
        return;
    }

    a = [];
    a[sForumAnnouncementId] = '111';
    a[sForumAnnouncementTit] = 'tit_111';
    a[sForumAnnouncementInfo] = 'info_1111';
    a[sForumAnnouncementATime] = 'time_11111';
    // console.log(a);

    if (
        !a
        ||
        !a[sForumAnnouncementId]
        ||
        !a[sForumAnnouncementTit]
        ||
        !a[sForumAnnouncementInfo]
        ||
        !a[sForumAnnouncementATime]
    ) {
        return;
    }

    let f = setAnnouncementShowOneId(a[sForumAnnouncementId]);
    let g = sShowAnnouncementTitC;
    let h = sShowAnnouncementSonInfoC;
    let i = checkExistNowAnnouncement(f);
    if (i) {
        domById(g).innerHTML = a[sForumAnnouncementTit];
        domById(h).innerHTML = a[sForumAnnouncementInfo];

        showOrHiddenDom(i, 1);
        return;
    }

    let k = sFullWidthClass;
    let l = sFullHeightClass;
    let m = sTextCenterC;

    let b = createDiv();
    b.className = g + ' ' + k + ' ' + m;
    let n = createSpan();
    n.innerHTML = a[sForumAnnouncementTit];
    b.appendChild(n);

    let c = createDiv();
    c.className = h + ' ' + k;
    c.innerHTML = a[sForumAnnouncementInfo];

    let d = createDiv();
    d.className = sShowAnnouncementSonCloseC + ' ' + m;
    let o = createSpan();
    o.id = sShowAnnouncementSonCloseL;
    o.className = sReLangC;
    d.appendChild(o);
    d.onclick = function () {
        showOrHiddenDom(j, 0);
    }

    let j = createDiv();
    j.id = setAnnouncementShowOneId(f);
    j.className = k + ' ' + l + ' ' + sShowAnnouncementSonC;

    let e = myFragment();
    j.appendChild(b);
    j.appendChild(c);
    j.appendChild(d);
    e.appendChild(j);

    showAnnouncement().appendChild(e);
    showOrHiddenDom(j, 1);

    requires([sFuncDomJ], function () {
        replaceLang(d);
    });
    // console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    // console.log(domById(sBBodyD + sForumPage));
}/*fff*/
/*jli*//**
 *
 * announcement 请求后处理函数
 *
 * @param a
 */
function afterRequestAnnouncement (a = '') {
    if (!announcementDom()) {
        asyn('writeForumInfo');
        setTimeoutFunction('afterRequestAnnouncement', a);
        return;
    }

    let f = sForumAnnouncementRequestData;

    let b = [];
    b[sForumAnnouncementId] = '111';
    b[sForumAnnouncementTit] = 'tit_111';
    b[sForumAnnouncementInfo] = 'info_1111';
    b[sForumAnnouncementATime] = 'time_11111';
    let c = [];
    c[sForumAnnouncementId] = '222';
    c[sForumAnnouncementTit] = 'tit_222';
    c[sForumAnnouncementInfo] = 'info_222';
    c[sForumAnnouncementATime] = 'time_222';
    let d = [];
    d[sForumAnnouncementId] = '333';
    d[sForumAnnouncementTit] = 'tit_333';
    d[sForumAnnouncementInfo] = 'info_333';
    d[sForumAnnouncementATime] = 'time_333';
    let e = [];
    e[sForumAnnouncementId] = '444';
    e[sForumAnnouncementTit] = 'tit_444';
    e[sForumAnnouncementInfo] = 'info_444';
    e[sForumAnnouncementATime] = 'time_444';

    a = [];
    a[f] = [];
    a[sForumAnnouncementRequestStatus] = sForumAnnouncementRequestNormalStatus;
    a[f].push(b);
    a[f].push(c);
    a[f].push(d);
    a[f].push(e);
    console.log('zzzzaaaaaaaaaaaaa===============');
    console.log(a);

    asyn('afterForumClassifyRequest', sAnnouncement, a.length);
    if (
        !a
        ||
        a[sForumAnnouncementRequestStatus] !== sForumAnnouncementRequestNormalStatus
        ||
        a[f].length < 1
    ) {
        return;
    }
    // aForumLastResponsePageNum[sAnnouncement] = a.length;

    // console.log(a[f]);

    requires([sFuncDomJ, sJqueryJ, sStrFunc], function () {
        asyn('writeAnnouncements', a[f]);
    });
    a = null;

    // aInForumRequest[aForumApi[sAnnouncement]] = false;
    // aForumRequestPage[sAnnouncement] += parseInt(1);
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

    let d = announcementDom();
    if (aAfterRequestClearSon[sAnnouncement]) {
        aAfterRequestClearSon[sAnnouncement] = false;
        d.innerHTML = '';
    }

    $(d).append(b);

    a = b = d = null;
}/*cgm*/
/*eee*//**
 *
 * 写 forum announcement dom
 *
 * @param a 请求后返回数据 type json
 */
function showAnnouncementSonInfo (a) {
    console.log(a);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>');
    let b = checkExistNowAnnouncement(a);
    if (b) {
        showOrHiddenDom(b, 1);
        return;
    }

    requires([sForumQueryJ], function () {
        asyn('showAnnouncementSon', a);
    });
}/*eee*/
/*ggg*//**
 *
 * 检查是否存在当前 Announcement
 *
 * @param a Announcement id type int
 */
function checkExistNowAnnouncement (a) {
    let b = domById(setAnnouncementShowOneId(a));
    return b ? b : false;
}/*ggg*/
/*ggg*/
/**
 *
 * 设置显示 Announcement one 的 id
 *
 * @param a Announcement id
 */
function setAnnouncementShowOneId (a) {
    return md5(a + '__==789/-*YUIhjk');
}
/*ggg*/
/*luq*/let aAnnouncementIds = [];
function writeAnnouncement (a = '') {
    let f = md5(randStr(32) + getMillisecondTime());
    let j = setAnnouncementShowOneId(a[sForumAnnouncementId]);
    aAnnouncementIds[f] = j;

    let b = createDiv();
    b.className = sAnnouncementSonC;
    b.setAttribute(sAnnouncementSonIdT, j);
    b.onclick = function() {
        asyn('showAnnouncementSonInfo', this.getAttribute(sAnnouncementSonIdT));
    };

    let c = createDiv();
    c.className = sAnnouncementSonHeadC + ' ' + sTextCenterC;
    let h = createSpan();
    h.innerHTML = a[sForumAnnouncementTit];
    c.appendChild(h);

    let d = createDiv();
    d.className = sAnnouncementSonBodyC;
    d.innerHTML = a[sForumAnnouncementInfo];

    let e = createDiv();
    e.className = sAnnouncementSonFootC;
    let i = createSpan();
    i.innerHTML = a[sForumAnnouncementATime];
    e.appendChild(i);

    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    a = c = d = e = f = h = i = null;

    return b;
}/*luq*/
/*hiu*/function onePoseHead () {
    let a = createDiv();
    a.className = sOneForumSonHeadC + ' ' + sFullWidthForFatherClass;

    return a;
}/*hiu*/
/*ykg*/function onePoseBody () {
    let a = createDiv();
    a.className = sOneForumSonBodyC + ' ' + sFullWidthForFatherClass;

    return a;
}/*ykg*/
/*thi*/function onePoseFoot () {
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
/*thi*/
/*ynz*/let oRecommend = '';
function recommendDom () {
    if (oRecommend) {
        return oRecommend;
    }
    oRecommend = forumSonBodyDom(sRecommend);
    return oRecommend;
}
/*ynz*/
/*bhx*//**
 *
 * 填充 Recommend
 *
 */
function afterRequestRecommend (a) {
    if (!recommendDom()) {
        asyn('writeForumInfo');
        setTimeoutFunction('afterRequestRecommend', a);
        return;
    }

    let f = sForumsRecommendRequestData;

    let b = [];
    b[sForumsRecommendId] = '111';
    b[sForumsRecommendInfo] = 'info_1111';
    b[sForumsRecommendWhoAdd] = 'add___11111';
    let c = [];
    c[sForumsRecommendId] = '222';
    c[sForumsRecommendInfo] = 'info_222';
    c[sForumsRecommendWhoAdd] = 'add___222';
    let d = [];
    d[sForumsRecommendId] = '333';
    d[sForumsRecommendInfo] = 'info_333';
    d[sForumsRecommendWhoAdd] = 'add___333';
    let e = [];
    e[sForumsRecommendId] = '444';
    e[sForumsRecommendInfo] = 'info_444';
    e[sForumsRecommendWhoAdd] = 'add___444';

    a = [];
    a[f] = [];
    a[sForumsRecommendRequestStatus] = sForumsRecommendRequestNormalStatus;
    a[f].push(b);
    a[f].push(c);
    a[f].push(d);
    a[f].push(e);

    asyn('afterForumClassifyRequest', sRecommend, a.length);
    if (
        !a
        ||
        a[sForumsRecommendRequestStatus] !== sForumsRecommendRequestNormalStatus
        ||
        a[f].length < 1
    ) {
        return;
    }

    requires([sFuncDomJ, sJqueryJ, sStrFunc], function () {
        asyn('writeRecommends', a[f]);
    });
    a = null;
}/*bhx*/
/**
 *
 * 填充 Recommend
 *
 * @param a request Recommend 数据 type json array
 */
function writeRecommends (a) {
    console.log('zzzzaaaaaaaaaaaaa===============');
    console.log(a);
}
/*zrq*/
/**
 *
 * forum 类别 请求后
 *
 * @param a 类别 type string
 * @param b 上次请求返回的数据长度
 */
function afterForumClassifyRequest (a, b) {
    aForumLastResponsePageNum[a] = b;

    aInForumRequest[aForumApi[a]] = false;
    aForumRequestPage[a] += parseInt(1);
}
/*zrq*/
/*oai*/function forumBegin () {
    // alert(1);
    console.log('forumBegin begin');

    // if (!bWriteForumInfo) {
        asyn('writeForumInfo');
    // }
}/*oai*/
/*zzz*/forumBegin();/*zzz*/
