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

/*yxz*/const onPostC = 'f_grandson';
const onPostHeadC = 'f_grandson_h';
const onePostBodyC = 'f_grandson_b';
const onepPoseFootC = 'f_grandson_f';
/*yxz*/

/*kkk*/const sOneAnnouncementC = 'one_announcement';
const sOneAnnouncementHeadC = 'one_announcement_h';
const sOneAnnouncementBodyC = 'one_announcement_b';
const sOneAnnouncementFootC = 'one_announcement_f';
const sOneAnnouncementIdT = 'announcement_id_t';
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
function writeForumHead () {
    let a = aForumList;

    let s = [];
    s.push('<div id="' + sForumHeadD + '" class="' + sFullWidthClass + '">');
    s.push('<ul id="' + sForumHeadDUl + '">');
    let b = '';
    let f = '';
    for (let i in a) {
        b = i == 0 ? sForumHeadActiveClass : '';

        f = md5(randStr(32) + getMillisecondTime());
        aForumSlideClassify[f] = aForumClassify[i];

        aForumSlideTag[f] = i;

        s.push('<li id="' + a[i] + sForumHeadSuffix + '" class="' + sForumHeadClass + ' ' + b + '" ' + sForumHeadClick + '="' + f + '">');
        s.push('<span id="' + a[i] + sForumHeadReplaceLangC + '" class="' + sReLangClass + '"></span>');
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
    requires([sPlatDomLogic, sMouseForumJ, sForumC, sForumSlideC], function () {
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
/*jli*//**
 *
 * announcement 请求后处理函数
 *
 * @param a
 */
function afterRequestAnnouncement (a = '') {
    let b = [];
    b['d'] = '111';
    b['tit'] = 'tit_111';
    b['info'] = 'info_1111';
    b['add_time'] = 'time_11111';
    let c = [];
    c['d'] = '222';
    c['tit'] = 'tit_222';
    c['info'] = 'info_222';
    c['add_time'] = 'time_222';
    let d = [];
    d['d'] = '333';
    d['tit'] = 'tit_333';
    d['info'] = 'info_333';
    d['add_time'] = 'time_333';
    let e = [];
    e['d'] = '444';
    e['tit'] = 'tit_444';
    e['info'] = 'info_444';
    e['add_time'] = 'time_444';
    a = [];
    a.push(b);
    a.push(c);
    a.push(d);
    a.push(e);
    if (!a) {
        return;
    }
    aForumLastResponsePageNum[sAnnouncement] = a.length;

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

    let d = announcementDom();
    if (aAfterRequestClearSon[sAnnouncement]) {
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
function showOneAnnouncementInfo (a) {
    requires([sForumQueryJ], function () {
        asyn('showOneAnnouncement', a);
    });
}/*eee*/
/*luq*/let aAnnouncementIds = [];
function writeAnnouncement (a = '') {
    let f = md5(randStr(32) + getMillisecondTime());
    aAnnouncementIds[f] = a['d'];

    let b = createDiv();
    b.className = sOneAnnouncementC;
    b.setAttribute(sOneAnnouncementIdT, f);
    b.onclick = function() {
        asyn('showOneAnnouncementInfo', this.getAttribute(sOneAnnouncementIdT));
    };

    let c = createDiv();
    c.className = sOneAnnouncementHeadC;
    c.innerHTML = a['tit'];

    let d = createDiv();
    d.className = sOneAnnouncementBodyC;
    d.innerHTML = a['info'];

    let e = createDiv();
    e.className = sOneAnnouncementFootC;
    e.innerHTML = a['add_time'];

    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    a = c = d = e = f = null;

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
    // alert(1);
    console.log('forumBegin begin');

    // if (!bWriteForumInfo) {
        asyn('writeForumInfo');
    // }
}/*oai*/
/*zzz*/forumBegin();/*zzz*/
