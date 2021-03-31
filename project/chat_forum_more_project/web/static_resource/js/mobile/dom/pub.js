/*9429d793fa750360*/const aBody = [
    'writeBHead',
    'writeBBody',
    'writeBFoot',
    'writeBLeft',
    'writeBRight',
];
const sFootTag = '_f';
const sFootLiSuffix = '_l';
const sActiveFootTag = 'f_act';

const sBHeadD = 'h_';
const sBBodyD = 'b_';
const sBFootD = 'f_';

var sForumPage = 'forum';
var sChatPage = 'chat';
var sFriendPage = 'friend';
var sAboutMePage = 'about';
var sSettingPage = 'set';

const sPubFootD = 'pub_foot';
const sPubHeadD = 'pub_head';
const sPubBodyD = 'pub_body';
const sPubLeftD = 'pub_left';
const sPubRightD = 'pub_right';

const aSecondBody = [
    sForumPage,
    sChatPage,
    sFriendPage,
    sAboutMePage,
    sSettingPage,
];

const sUpdateUrlPageKey = '_upd_url_page';
const sFootClick = 'foot_click';/*9429d793fa750360*/

/*637c85dcfd18cc0b*/let bWriteBody = false;
function threeBodyDom() {
    if (bWriteBody) {
        return;
    }
    bWriteBody = true;

    let s = '';
    for (let i in aBody) {
        s += window[aBody[i]]();
    }
    fatherDom().innerHTML = s;
    s = null;

    requires([sLogic, sDomFunc], function () {
        asyn('bindFootClick');
    });

    requires([sNowLang, sDomFunc], function () {
        asyn('replaceLang', sReplaceLangIdType, sPubFootD);
    });
}/*637c85dcfd18cc0b*/

/*d6b64dc699029c52*/let aFootClick = [];
function bindFootClick () {
    aFootClick = domByClass(sFootClick);
    let i = 0;
    let l = aFootClick.length;
    for (i; i < l; i ++) {
        aFootClick[i].index = i;
        aFootClick[i].onclick = function () {
            updUrlPage(aFootClick[this.index].getAttribute(sUpdateUrlPageKey));
        };
    }
}/*d6b64dc699029c52*/

/*c9f4866ae72da3be*/let oBHead = null;
function bHeadDom () {
    oBHead = oBHead ? oBHead : domById(sPubHeadD);
    return oBHead;
}
let oBBody = null;
function bBodyDom () {
    oBBody = oBBody ? oBBody : domById(sPubBodyD);
    return oBBody;
}
let oBFoot = null;
function bFootDom () {
    oBFoot = oBFoot ? oBFoot : domById(sPubFootD);
    return oBFoot;
}
let oBLeft = null;
function bLeftDom () {
    oBLeft = oBLeft ? oBLeft : domById(sPubLeftD);
    return oBLeft;
}
let oBRight = null;
function bRightDom () {
    oBRight = oBRight ? oBRight : domById(sPubRightD);
    return oBRight;
}/*c9f4866ae72da3be*/

/*16f799f68465dd08*/function writeBHead() {
    if (bHeadDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPubHeadD + '">';

    let a = aSecondBody;
    for (let i in a) {
        s += writeMoblieHeadDom(a[i]);
    }

    s += '</div>';

    return s;
}/*16f799f68465dd08*/

/*3f7550f47d4e0f87*/function writeBBody() {
    if (bBodyDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPubBodyD + '">';

    let a = aSecondBody;
    for (let i in a) {
        s += writeMobliePageBodyDom(a[i]);
    }

    s += '</div>';

    return s;
}/*3f7550f47d4e0f87*/

/*56b538473f0f3166*/function writeMoblieHeadDom (d) {
    if (domById(d)) {
        return '';
    }

    let s = '';
    s += '<div id="' + sBHeadD + d + '">';
    s += '</div>';
    return s;
}/*56b538473f0f3166*/

/*12c3163a66add709*/function writeMobliePageBodyDom (d) {
    if (domById(d)) {
        return '';
    }

    let s = '';
    s += '<div id="' + sBBodyD + d + '">';
    s += '</div>';
    return s;
}/*12c3163a66add709*/

/*5c2c1bce49b2a8f9*/function writeBFoot() {
    if (bFootDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPubFootD + '">';

    s += '<ul>';

    let a = aSecondBody;
    for (let i in a) {
        s += writeOneFooter(a[i]);
    }

    s += '</ul>';

    s += '</div>';

    return s;
}
function writeOneFooter (d = '') {
    let a = sFootTag;
    let id = d + a + sFootLiSuffix;
    if (domById(id)) {
        return '';
    }

    let l = d + a;

    let s = '';
    s += '<li id="' + sBFootD + id + '" class="' + a + '">';
    s += '<a href="javascript:void(0);" ' + sUpdateUrlPageKey + '="' + d + '" class="' + sFootClick + '">';
    s += '<span class="' + sReLangClass + '" id="' + l + '">';
    s += '</span>';
    s += '</a>';
    s += '</li>';

    return s;
}/*5c2c1bce49b2a8f9*/

/*c04f1262ec9a1e75*/function writeBLeft () {
    if (bLeftDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPubLeftD + '">';

    s += '</div>';

    return s;
}/*c04f1262ec9a1e75*/

/*d86f6d0f01d165ef*/function writeBRight () {
    if (bRightDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPubRightD + '">';

    s += '</div>';

    return s;
}/*d86f6d0f01d165ef*/

/*b85177e4aecead95*/function updateActiveFoot () {
    let a = sFootTag;
    let b = sActiveFootTag;
    let f = domById(sBFootD + getNowPage() + a + sFootLiSuffix);
    if (!f) {
        console.log('afterLoadPageJs f is null, so no to do');
        return false;
    }

    let o = domByClass(a);
    if (o.length) {
        let p = new RegExp('\\s+' + b,'gm');
        for (let i in o) {
            if (!o[i].className) {
                continue;
            }

            o[i].className = o[i].className.toString().replace(p, '');
        }
    }
    f.className += ' ' + b;
}/*b85177e4aecead95*/

/*b7cf1f44259f6ad5*/function platformBegin () {
    console.log('5555555555555555555platformBegin');
}/*b7cf1f44259f6ad5*/
