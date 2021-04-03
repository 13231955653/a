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

const sForumBodyD = 'b_forum_body';
const sForumHeadD = 'b_forum_head';
const sForumHeadDUl = 'b_forum_head_u';
const sOneForumSonC = 'forum_grandson';
/*yxd*/const sForumSonsClass = 'forum_sons';/*yxd*/
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

    a = null;

    return s;
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

    a = null;

    return s;
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

    o.innerHTML = writeForumHead().join('') + writeForumBody().join('');

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

    requires([sFuncDomJ], function () {
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
    if (!a) {
        return;
    }

    let c = oAnnouncement;

    if (!c) {
        return;
    }

    let d = [];
    for (let e in a) {
        d.push(writeAnnouncement(a[e]));
    }
    let f = myFragment();
    f.innerHTML = d.join('');
    console.log(f.innerHTML);
    console.log('zzzzzzzzzz=--ddddd');
    // let g = document.createElement('div');
    // f.appendChild(g);

    console.log(c);
    console.log(f);
    c.appendChild(f);
    a = b = c = d = e = f = null;
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

    let b = [];
    b.push('<div class="' + sOneForumSonC + '">');
    b.push('</div>');

    return b;
}/*luq*/
/*oai*/function forumBegin () {
    console.log('forumBegin begin');

    forumBodyClass();

    asyn('writeForumInfo');
}/*oai*/
