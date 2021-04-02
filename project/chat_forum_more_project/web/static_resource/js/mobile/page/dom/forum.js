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
let sForumHeadSuffix = '_t';
let sForumSplitTag = '_';
let sForumHeadClass = 'forum_head_t';
let sForumHeadActiveClass = 'forum_head_t_act';
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
f = null;
const aForumList = c;
const iForumListLength = aForumList.length;
c = null;/*gkp*/

const sForumBodyD = 'b_forum_body';
const sForumHeadD = 'b_forum_head';
const sForumHeadDUl = 'b_forum_head_u';
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

    let s = '';
    s += '<div id="' + sForumHeadD + '" class="' + sFullWidthClass + '">';
    s += '<ul id="' + sForumHeadDUl + '">';
    let b = '';
    for (let i in a) {
        b = i == 0 ? sForumHeadActiveClass : '';

        s += '<li id="' + a[i] + sForumHeadSuffix + '" class="' + sForumHeadClass + ' ' + b + '">';
        s += '<span>' + i + '</span>';
        s += '</li>';
    }
    s += '</ul>';
    s += '</div>';

    a = null;

    return s;
}/*qct*/
/*lay*/
function writeForumBody () {
    let a = aForumList;

    let s = '';
    s += '<div id="' + sForumBodyD + '" class="' + sFullHeightForFatherClass + '">';
    for (let i in a) {
        s += '<div id="' + a[i] + sForumBodySuffix + '" class="' + sFullWidthClass + ' ' + sForumSonsClass + '">';

        s += '<span style="font-size: 100px;">' + i + '</span>';

        s += '</div>';
    }
    s += '</div>';

    a = null;

    return s;
}/*lay*/
/*oen*//**
 *
 * 写forum dom内容
 *
 */
function writeForumInfo () {
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

    let a = writeForumHead();

    let b = writeForumBody();

    o.innerHTML = a + b;
    $(o).removeClass(sInvisibleClass);

    asyn('pageBegin');
}/*oen*/
/*oai*/function forumBegin () {
    console.log('forumBegin begin');

    forumBodyClass();

    asyn('writeForumInfo');
}/*oai*/
