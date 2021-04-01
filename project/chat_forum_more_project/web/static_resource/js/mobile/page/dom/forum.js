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
let f = sForumBodySuffix;
let sForumSplitTag = '_';
let e = sForumSplitTag;
let c = [
    d + e + sAnnouncement + f,
    d + e + sUserClassify + f,
    d + e + sClassify + f,
    d + e + sJoke + f,
    d + e + sSport + f,
    d + e + sBike + f,
    d + e + sMusic + f,
    d + e + sVideo + f,
    d + e + sMusicRecommend + f,
    d + e + sVideoRecommend + f,
];
d = null;
e = null;
f = null;
const aForumList = c;
const iForumListLength = aForumList.length;
c = null;/*gkp*/

const sForumBodyD = 'b_forum_body';
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
/*qct*//**
 *
 * 测试写页面dom
 *
 */
function writeForumHead () {
    requires([sPlatDomJ], function () {
        asyn('doWriteForumHead');
    });
}
/**
 *
 * 头部
 *
 */
let bWriteForumHead = false;
function doWriteForumHead () {
    // let d = sBHeadD + sForumPage;
    // let o = domById(d);
    // if (!o) {
    //     setTimeoutFunction('doWriteForumHead');
    //     return;
    // }
    //
    // if (bWriteForumHead) {
    //     return;
    // }
    // bWriteForumHead = true;
    //
    // let s = '';
    // s += '<div class="' + sOneHead + '">';
    // s += '<span class="' + sReLangClass + '" id="' + sForumPage + sPageTitSuffix + '"></span>';
    // s += '</div>';
    //
    // s += '<div class="' + sTwoHead + '">';
    // s += '<ul>';
    // s += '<li>';
    // s += '<span class="' + sReLangClass + '" id="sort"></span>';
    // s += '<li>';
    // s += '<li>';
    // s += '<span class="' + sReLangClass + '" id="hot"></span>';
    // s += '<li>';
    // s += '<li>';
    // s += '<span class="' + sReLangClass + '" id="new"></span>';
    // s += '<li>';
    // s += '<li>';
    // s += '<span class="' + sReLangClass + '" id="re"></span>';
    // s += '<li>';
    // s += '<ul>';
    // s += '</div>';
    //
    // s += '<div class="' + sThreeHead + '">';
    // s += '<ul>';
    // s += '<li>';
    // s += '<span class="' + sReLangClass + '" id="type"></span>';
    // s += '<li>';
    // s += '<li>';
    // s += '<span class="' + sReLangClass + '" id="all"></span>';
    // s += '<li>';
    // s += '<li>';
    // s += '<span class="' + sReLangClass + '" id="img"></span>';
    // s += '<li>';
    // s += '<li>';
    // s += '<span class="' + sReLangClass + '" id="text"></span>';
    // s += '<li>';
    // s += '<ul>';
    // s += '</div>';
    //
    // o.innerHTML = s;
    // o = null;
    // s = null;
    //
    // requires([sNowLang, sMobileDomFuncJ], function () {
    //     asyn('replaceLang', sReplaceLangIdType, d);
    // });
}/*qct*/
/*lay*//**
 *
 * 写forum body
 *
 */
function writeForumBody () {
    requires([sPlatDomJ], function () {
        asyn('doWriteForumBody');
    });
}
function doWriteForumBody () {
    let d = sBBodyD + sForumPage;
    let o = domById(d);
    if (!o) {
        setTimeoutFunction('doWriteForumBody');
        return;
    }
    $(o).addClass(sInvisibleClass);

    let a = aForumList;

    let s = '';
    s += '<div id="' + sForumBodyD + '" class="' + sFullHeightForFatherClass + '">';
    for (let i in a) {
        s += '<div id="' + a[i] + '" class="' + sFullWidthClass + ' ' + sForumSonsClass + '"><span style="font-size: 100px;">' + i + '</span></div>';
    }
    s += '</div>';
    o.innerHTML = s;

    $('#' + sForumBodyD).addClass(aForumBodyClass[a.length]);

    $(o).removeClass(sInvisibleClass);

    o = null;
    s = null;
    a = null;
}/*lay*/
/*rxe*//**
 *
 * 显示forum
 *
 */
function showForum () {
    // if (bWriteForumHead && bWriteForumHead) {
        asyn('pageBegin');
        return;
    // }

    setTimeoutFunction('showForum');
}/*rxe*/
/*oai*/function forumBegin () {
    console.log('forumBegin begin');

    forumBodyClass();

    asyn('writeForumHead');

    asyn('writeForumBody');

    asyn('showForum');
}/*oai*/
