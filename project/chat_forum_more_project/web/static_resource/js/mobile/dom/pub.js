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
/*qzt*/let bWriteBody = false;
function threeBodyDom() {
    if (bWriteBody) {
        return;
    }
    bWriteBody = true;

    let s = [];
    for (let i in aBody) {
        s.push(window[aBody[i]]());
    }
    fatherDom().innerHTML = s.join('');
    s = null;

    requires([sLogicJ, sMobileDomFuncJ], function () {
        asyn('bindFootClick');
    });

    requires([sNowLang, sMobileDomFuncJ], function () {
        asyn('replaceLang', bFootDom());
    });
}/*qzt*/
/*jwu*/let aFootClick = [];
function bindFootClick () {
    aFootClick = domByClass(sFootClick);
    for (let b in aFootClick) {
        aFootClick[b].index = b;
        aFootClick[b].onclick = function () {
            updUrlPage(aFootClick[this.index].getAttribute(sUpdateUrlPageKey));
        };
    }
}/*jwu*/

/*c9f4866ae72da3be*/let oBHead = null;
function bHeadDom () {
    if (oBHead) {
        return oBHead;
    }

    oBHead = domById(sPubHeadD);
    return oBHead;
}
let oBBody = null;
function bBodyDom () {
    if (oBBody) {
        return oBBody;
    }

    oBBody = domById(sPubBodyD);
    return oBBody;
}
let oBFoot = null;
function bFootDom () {
    if (oBFoot) {
        return oBFoot;
    }

    oBFoot = domById(sPubFootD);
    return oBFoot;
}
let oBLeft = null;
function bLeftDom () {
    if (oBLeft) {
        return oBLeft;
    }

    oBLeft = domById(sPubLeftD);
    return oBLeft;
}
let oBRight = null;
function bRightDom () {
    if (oBRight) {
        return oBRight;
    }

    oBRight = domById(sPubRightD);
    return oBRight;
}/*c9f4866ae72da3be*/

/*3f7550f47d4e0f87*/function writeBBody() {
    if (bBodyDom()) {
        return '';
    }

    let s = [];
    s.push('<div id="' + sPubBodyD + '" class="' + sFullWidthClass + '">');

    let a = aSecondBody;
    for (let i in a) {
        s.push(writeMobliePageBodyDom(a[i]));
    }

    s.push('</div>');

    return s.join('');
}/*3f7550f47d4e0f87*/

/*12c3163a66add709*/function writeMobliePageBodyDom (d) {
    if (domById(d)) {
        return '';
    }

    let s = [];
    s.push('<div id="' + sBBodyD + d + '" class="' + sFullWidthClass + ' ' + sFullHeightForFatherClass + ' ' + sBodySonsClass + ' ' + sHiddenClass + '">');
    s.push('</div>');
    return s.join('');
}/*12c3163a66add709*/

/*5c2c1bce49b2a8f9*/function writeBFoot() {
    if (bFootDom()) {
        return '';
    }

    let s = [];
    s.push('<div id="' + sPubFootD + '" class="' + sFullWidthClass + '">');

    s.push('<ul>');

    let a = aSecondBody;
    for (let i in a) {
        s.push(writeOneFooter(a[i]));
    }

    s.push('</ul>');

    s.push('</div>');

    return s.join('');
}
function writeOneFooter (d = '') {
    let a = sFootTag;
    let id = d + a + sFootLiSuffix;
    if (domById(id)) {
        return '';
    }

    let l = d + a;

    let s = [];
    s.push('<li id="' + sBFootD + id + '" class="' + a + '">');
    s.push('<a href="javascript:void(0);" ' + sUpdateUrlPageKey + '="' + d + '" class="' + sFootClick + '">');
    s.push('<span class="' + sReLangClass + '" id="' + l + '">');
    s.push('</span></a></li>');

    return s.join('');
}/*5c2c1bce49b2a8f9*/

/*c04f1262ec9a1e75*/function writeBLeft () {
    if (bLeftDom()) {
        return '';
    }

    let s = [];
    s.push('<div id="' + sPubLeftD + '"></div>');

    return s.join('');
}/*c04f1262ec9a1e75*/

/*d86f6d0f01d165ef*/function writeBRight () {
    if (bRightDom()) {
        return '';
    }

    let s = [];
    s.push('<div id="' + sPubRightD + '"></div>');

    return s.join('');
}/*d86f6d0f01d165ef*/

/*b7cf1f44259f6ad5*/function platformBegin () {
    console.log('5555555555555555555platformBegin');
}/*b7cf1f44259f6ad5*/

/*aaa*/platformBegin()/*aaa*/
