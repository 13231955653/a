const aBody = [
    'writeBodyHeader',
    'writeBodyBody',
    'writeBodyFooter',
    'writeBodyLeft',
    'writeBodyRight',
];

const sPublicFootId = 'public_footer';
const sPublicHeaderId = 'public_header';
const sPublicBodyId = 'public_body';
const sPublicLeftId = 'public_left';
const sPublicRightId = 'public_right';

const sUpdateUrlPageKey = '_update_url_page';
const sFooterOnclickTag = 'footer_onclick';

let bWriteBody = false;
function threeClassBodyDom() {
    for (let i in aBody) {
        if (typeof window[aBody[i]] == 'undefined') {
            setTimeoutFunction('threeClassBodyDom');
            console.log('threeClassBodyDom ' + aBody[i] + ' is undefined, so settimeout retry to threeClassBodyDom ');
            return;
        }
    }

    if (bWriteBody) {
        return;
    }
    bWriteBody = true;

    // console.log('writePublicDom all is defined, so will to do ');

    let s = '';
    for (let i in aBody) {
        s += window[aBody[i]]();

    }
    fatherDom().innerHTML = s;

    asyn('bindFooterOnclick');

    asyn('replaceFooterLang');
}

// let oFooter = '';
function replaceFooterLang () {
    // oFooter = oFooter ? oFooter : domById(sPublicFootId);
    requires([sFuncJsTag], function () {
        asyn('replaceLang', sReplaceLangIdType, sPublicFootId);
    });
}

let aFooterOnclick = [];
function bindFooterOnclick () {
    if (typeof window['domByClass'] == 'undefined') {
        // console.log('bindFooterOnclick domByClass is no load, so settimeout retry to do bindFooterOnclick');

        setTimeoutFunction('bindFooterOnclick');
        return;
    }

    // aFooterOnclick = $('.' + sFooterOnclickTag);
    aFooterOnclick = domByClass(sFooterOnclickTag);
    let i = 0;
    let l = aFooterOnclick.length;
    for (i; i < l; i ++) {
        aFooterOnclick[i].index = i;
        aFooterOnclick[i].onclick = function () {
            uodateUrlPageArg(aFooterOnclick[this.index].getAttribute(sUpdateUrlPageKey));
        };
    }
}

let oBodyHeader = null;
function bodyHeaderDom () {
    oBodyHeader = oBodyHeader ? oBodyHeader : domById(sPublicHeaderId);
    return oBodyHeader;
}
let oBodyBody = null;
function bodyBodyDom () {
    oBodyBody = oBodyBody ? oBodyBody : domById(sPublicBodyId);
    return oBodyBody;
}
let oBodyFooter = null;
function bodyFooterDom () {
    oBodyFooter = oBodyFooter ? oBodyFooter : domById(sPublicFootId);
    return oBodyFooter;
}
let oBodyLeft = null;
function bodyLeftDom () {
    oBodyLeft = oBodyLeft ? oBodyLeft : domById(sPublicLeftId);
    return oBodyLeft;
}
let oBodyRight = null;
function bodyRightDom () {
    oBodyRight = oBodyRight ? oBodyRight : domById(sPublicRightId);
    return oBodyRight;
}
function writeBodyHeader() {
    if (bodyHeaderDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPublicHeaderId + '">';

    s += '</div>';

    return s;
}

function writeBodyBody() {
    if (bodyBodyDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPublicBodyId + '">';

    s += writeMobliePageDom(sForumBodyId);

    s += writeMobliePageDom(sChatBodyId);

    s += writeMobliePageDom(sFriendBodyId);

    s += writeMobliePageDom(sAboutMeBodyId);

    s += writeMobliePageDom(sSettingBodyId);

    s += '</div>';

    return s;
}

function writeMobliePageDom (d) {
    if (domById(d)) {
        return '';
    }

    let s = '';
    s += '<div id="' + d + '">';
    s += '</div>';
    return s;
}

function writeBodyFooter() {
    // console.log('fffffffffffffffffffffffffffff');
    if (bodyFooterDom()) {
        // console.log('ttttttttttttttttttt');
        return '';
    }
    // console.log('bbbbbbbbbbbbbb');

    let s = '';
    s += '<div id="' + sPublicFootId + '">';

    s += '<ul>';

    s += writeOneFooter(sForumPage);

    s += writeOneFooter(sChatPage);

    s += writeOneFooter(sFriendPage);

    s += writeOneFooter(sAboutMePage);

    s += writeOneFooter(sSettingPage);

    s += '</ul>';

    s += '</div>';

    // console.log(s);
    // replaceDomLang(sReplaceLangIdType, f);
    return s;
}
function writeOneFooter (d = '') {
    let id = d + sFootTag + sFootLiSuffix;
    if (domById(id)) {
        return '';
    }

    let l = d + sFootTag;

    let s = '';
    s += '<li id="' + id + '" class="' + sFootTag + '">';
    // s += '<a href="javascript:void(0);" onclick="' + aFooterAction[d] + '">';
    s += '<a href="javascript:void(0);" ' + sUpdateUrlPageKey + '="' + d + '" class="' + sFooterOnclickTag + '">';
    s += '<span class="' + sReLangClass + '" id="' + l + '">';
    s += '</span>';
    s += '</a>';
    s += '</li>';

    return s;
}

function writeBodyLeft () {
    if (bodyLeftDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPublicLeftId + '">';

    s += '</div>';

    return s;
}

function writeBodyRight () {
    if (bodyRightDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPublicRightId + '">';

    s += '</div>';

    return s;
}

function updateActiveFooter () {
    // let sPage = getNowPage();
    let f = domById(getNowPage() + sFootTag + sFootLiSuffix);
    if (!f) {
        console.log('afterLoadPageJs f is null, so no to do');
        return false;
    }
    // console.log('afterLoadPageJs f is true, so to do');

    let o = document.getElementsByClassName(sFootTag);
    if (o.length) {
        let p = new RegExp('\\s+' + sActiveFootTag,'gm');
        for (let i in o) {
            if (!o[i].className) {
                continue;
            }

            o[i].className = o[i].className.toString().replace(p, '');
        }
    }
    f.className += ' ' + sActiveFootTag;

    let t = setTimeout(function () {
        clearTimeout(t);

        changeDomFatherOpacity(true);
    }, 0);

    // let z = setTimeout(function () {
    //     clearTimeout(z);
    //
    //     repeatedlyPage(getUrlArgs(sUrlAddressPageKey));
    // }, 0);
}

function platformBegin () {
    console.log('5555555555555555555platformBegin');
    // asyn('showPlatformShade');

    // asyn('clearIndexShade');
}
