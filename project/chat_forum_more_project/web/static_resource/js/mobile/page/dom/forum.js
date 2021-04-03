/*gkp*///forum 显示列表
const sAnnouncement = 'announcement';
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
let sForumBodySuffix = '_b';
let sForumHeadSuffix = '_h';
let sForumSplitTag = '_';
let sForumHeadClass = 'forum_head_c';
let sForumHeadActiveClass = 'forum_head_c_act';
let sForumHeadClick = 'forum_head_c';
let e = sForumSplitTag;
let c = [
    d + e + sAnnouncement,
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
/*qct*/
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
        s.push('<span>' + i + '</span>');
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

    $(o).removeClass(sInvisibleClass);
    o = d = e = null;

    requires([sResetC, sPubC, sSzieC, sForumC, sForumSlideC, sPlatDomLogic, sMouseForumJ], function () {
        asyn('pageBegin');
    });
}/*oen*/
/*jli*//**
 *
 * announcement 请求后处理函数
 *
 * @param a
 */
let oAnnouncement = '';
function afterRequestAnnouncement (a = '') {
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (!a) {
        return;
    }

    let c = oAnnouncement;
    if (!c) {
        let b = sForumPage + sForumSplitTag + sAnnouncement + sForumBodySuffix;
        c = oAnnouncement = domById(b);
    }

    if (!c) {
        asyn('writeForumInfo');
        setTimeoutFunction('afterRequestAnnouncement', a);
        return;
    }

    requires([sFuncDomJ, sJqueryJ], function () {
        asyn('writeAnnouncements', a);
    });

    a = b = c = null;
}/*jli*/
/*cgm*//**
 *
 * 写 forum announcement dom
 *
 * @param a 请求后返回数据 type json
 */
function writeAnnouncements (a = '') {
    let b = oAnnouncement;

    let c = myFragment();
    for (let d in a) {
        c.appendChild(writeAnnouncement(a[d]));
    }

    $(b).append(c);
    a = b = c = d = null;
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

    let c = createLi();
    let d = createA();
    c.appendChild(d);
    d = null;

    let e = createLi();
    let f = createA();
    e.appendChild(f);
    f = null;

    let g = createLi();
    let h = createA();
    g.appendChild(h);
    h = null;

    let i = createLi();
    let j = createA();
    i.appendChild(j);
    j = null;

    b.appendChild(c);
    b.appendChild(e);
    b.appendChild(g);
    b.appendChild(i);
    c = e = g = i = null;

    a.appendChild(b);

    return a;
}
/*luq*/
/*oai*/function forumBegin () {
    console.log('forumBegin begin');

    forumBodyClass();

    asyn('writeForumInfo');
}/*oai*/
