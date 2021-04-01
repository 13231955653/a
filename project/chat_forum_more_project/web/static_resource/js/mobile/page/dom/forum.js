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
c = null;/*gkp*/
/*yxd*/const sForumSonsClass = 'forum_sons';/*yxd*/
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

    console.log('zzzzzzzzzaaaaaaaaaaaaaaaaaa');
    console.log(a);
    let s = '';
    for (let i in a) {
        s += '<div id="' + a[i] + '" class="' + sFullWidthClass + ' ' + sForumSonsClass + '"></div>';
    }
    o.innerHTML = s;
    $(o).removeClass(sInvisibleClass);
    o = null;
    s = null;
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

    asyn('writeForumHead');

    asyn('writeForumBody');

    asyn('showForum');
}/*oai*/
