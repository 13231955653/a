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
let d = sForumPage;
const sForumBodySuffix = '_b';
const sForumHeadSuffix = '_h';
const sForumSplitTag = '_';
const sForumHeadClass = 'forum_head_c';
const sForumHeadActiveClass = 'forum_head_c_act';
const sForumHeadClick = 'forum_head_c';
const sForumHeadReplaceLangC = '_l';
let e = sForumSplitTag;
let c = [
    d + e + sAnnouncement,
    d + e + sAttention,
    d + e + sRecommend,
    d + e + sHot,
    d + e + sUserClassify,
    d + e + sClassify,
    d + e + sJoke,
    d + e + sSport,
    d + e + sBike,
    d + e + sMusic,
    d + e + sVideo,
    d + e + sMusicRecommend,
    d + e + sVideoRecommend,
];
d = null;
e = null;
const aForumList = c;
const iForumListLength = aForumList.length;
c = null;/*gkp*/

/*yxd*/const sForumBodyD = 'b_forum_body';
const sForumHeadD = 'b_forum_head';
const sForumHeadDUl = 'b_forum_head_u';
const sForumSonsClass = 'forum_sons';/*yxd*/

/*yxz*/const sOneForumSonC = 'f_grandson';
const sOneForumSonHeadC = 'f_grandson_h';
const sOneForumSonBodyC = 'f_grandson_b';
const sOneForumSonFootC = 'f_grandson_f';
/*yxz*/

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

        s.push('<li id="' + a[i] + sForumHeadSuffix + '" class="' + sForumHeadClass + ' ' + b + '" ' + sForumHeadClick + '="' + i + '">');
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
        s.push('<div id="' + a[i] + sForumBodySuffix + '" class="' + sFullWidthClass + ' ' + sForumSonsClass + '"></div>');
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

    requires([sPlatDomJ], function () {
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

    $(o).removeClass(sInvisibleClass);
    o = d = e = null;

    requires([sResetC, sPubC, sSzieC, sForumC, sForumSlideC, sPlatDomLogic, sMouseForumJ], function () {
        asyn('pageBegin');
    });
}/*oen*/
/*oen*/let oAnnouncement = '';
function announcementDom () {
    oAnnouncement = oAnnouncement ? oAnnouncement : domById(sForumPage + sForumSplitTag + sAnnouncement + sForumBodySuffix);
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
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
}/*jli*/
/*cgm*//**
 *
 * 写 forum announcement dom
 *
 * @param a 请求后返回数据 type json
 */
function writeAnnouncements (a = '') {
    let b = myFragment();
    let d = createDiv();
    let e = d.id = getMillisecondTime() + '_' + randStr(9);
    for (let c in a) {
        d.appendChild(writeAnnouncement(a[c]));
    }
    b.appendChild(d);

    $(announcementDom()).append(b);

    requires([sNowLang, sMobileDomFuncJ], function () {
        asyn('replaceLang', domById(e));
    });
    a = b = c = d = e = null;
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
    b.className = sOneForumSonC + ' ' + sFullWidthForFatherClass;

    b.appendChild(announcementHead());

    b.appendChild(announcementBody());

    b.appendChild(announcementFoot());

    return b;
}
function announcementHead () {
    let a = createDiv();
    a.className = sOneForumSonHeadC + ' ' + sFullWidthForFatherClass;

    return a;
}
function announcementBody () {
    let a = createDiv();
    a.className = sOneForumSonBodyC + ' ' + sFullWidthForFatherClass;

    return a;
}
function announcementFoot () {
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
/*luq*/
/*oai*/function forumBegin () {
    console.log('forumBegin begin');

    forumBodyClass();

    asyn('writeForumInfo');
}/*oai*/
