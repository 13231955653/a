/*9429d793fa750360*/const aBody = [
    // 'writeBHead',
    'writeBBody',
    'writeBFoot',
    'writeBLeft',
    'writeBRight',
];
const sFootTag = '_f';
const sFootLiSuffix = '_l';
const sActiveFootTag = 'f_act';

const sBBodyD = 'b_';
const sBFootD = 'f_';

const sForumPage = 'forum';
const sChatPage = 'chat';
const sFriendPage = 'friend';
const sAboutMePage = 'about';
const sSetPage = 'set';

const sPubFootD = 'pub_foot';
const sPubHeadD = 'pub_head';
const sPubBodyD = 'pub_body';
const sPubLeftD = 'pub_left';
const sPubRightD = 'pub_right';

const sBodySonsClass = 'body_sons';

const aSecondBody = [
    sForumPage,
    sChatPage,
    sFriendPage,
    sAboutMePage,
    sSetPage,
];

const sUpdateUrlPageKey = '_upd_url_page';
const sFootClick = 'foot_c';/*9429d793fa750360*/

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

    requires([sLogicJ, sMobileDomFuncJ], function () {
        asyn('bindFootClick');
    });

    requires([sNowLang, sMobileDomFuncJ], function () {
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

/*3f7550f47d4e0f87*/function writeBBody() {
    if (bBodyDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPubBodyD + '" class="' + sFullWidthClass + '">';

    let a = aSecondBody;
    for (let i in a) {
        s += writeMobliePageBodyDom(a[i]);
    }

    s += '</div>';

    return s;
}/*3f7550f47d4e0f87*/

/*12c3163a66add709*/function writeMobliePageBodyDom (d) {
    if (domById(d)) {
        return '';
    }

    let s = '';
    s += '<div id="' + sBBodyD + d + '" class="' + sFullWidthClass + ' ' + sFullHeightForFatherClass + ' ' + sBodySonsClass + ' ' + sHiddenClass + '">';
    s += '</div>';
    return s;
}/*12c3163a66add709*/

/*5c2c1bce49b2a8f9*/function writeBFoot() {
    if (bFootDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPubFootD + '" class="' + sFullWidthClass + '">';

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

/*b7cf1f44259f6ad5*/function platformBegin () {
    console.log('5555555555555555555platformBegin');
}/*b7cf1f44259f6ad5*/
