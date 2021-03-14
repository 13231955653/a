const aBody = [
    'writeBodyHeader',
    'writeBodyBody',
    'writeBodyFooter',
    'writeBodyLeft',
    'writeBodyRight',
];

const sUpdateUrlPageKey = '_update_url_page';
const sFooterOnclickTag = 'footer_onclick';

let bWriteBody = false;
function writePublicDom() {
    if (!bJquery) {
        console.log('writePublicDom jQuery is undefined, so settimeout retry to writePublicDom ');

        setTimeoutFunction('writePublicDom');
        return;
    }
    console.log('pubHeader jQuery is defined, so will to do ');;

    for (let i in aBody) {
        if (typeof window[aBody[i]] == 'undefined') {
            setTimeoutFunction('writePublicDom');
            console.log('writePublicDom ' + aBody[i] + ' is undefined, so settimeout retry to writePublicDom ');
            return;
        }
    }

    if (bWriteBody) {
        return;
    }
    bWriteBody = true;

    console.log('writePublicDom all is defined, so will to do ');

    let s = '';
    for (let i in aBody) {
        s += window[aBody[i]]();

    }
    fatherDom().innerHTML = s;

    asyn('bindFooterOnclick');

    asyn('replaceFooterLang');
}

let oFooter = '';
function replaceFooterLang () {
    oFooter = oFooter ? oFooter : document.getElementById(sPublicFootId);
    asyn('replaceLang', sReplaceLangIdType, oFooter);
}

let aFooterOnclick = [];
function bindFooterOnclick () {
    aFooterOnclick = $('.' + sFooterOnclickTag);
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
    oBodyHeader = oBodyHeader ? oBodyHeader : document.getElementById(sPublicHeaderId);
    return oBodyHeader != null ? oBodyHeader : false;
}
let oBodyBody = null;
function bodyBodyDom () {
    oBodyBody = oBodyBody ? oBodyBody : document.getElementById(sPublicBodyId);
    return oBodyBody != null ? oBodyBody : false;
}
let oBodyFooter = null;
function bodyFooterDom () {
    oBodyFooter = oBodyFooter ? oBodyFooter : document.getElementById(sPublicFootId);
    return oBodyFooter != null ? oBodyFooter : false;
}
let oBodyLeft = null;
function bodyLeftDom () {
    oBodyLeft = oBodyLeft ? oBodyLeft : document.getElementById(sPublicLeftId);
    return oBodyLeft != null ? oBodyLeft : false;
}
let oBodyRight = null;
function bodyRightDom () {
    oBodyRight = oBodyRight ? oBodyRight : document.getElementById(sPublicRightId);
    return oBodyRight != null ? oBodyRight : false;
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

    s += writeMobliePageDom(sSettingBodyId);

    s += writeMobliePageDom(sForumBodyId);

    s += writeMobliePageDom(sChatBodyId);

    s += writeMobliePageDom(sFriendBodyId);

    s += '</div>';

    return s;
}

function writeMobliePageDom (d) {
    if (document.getElementById(d) != null) {
        return '';
    }

    let s = '';
    s += '<div id="' + d + '">';
    s += '</div>';
    return s;
}

function writeBodyFooter() {
    if (bodyFooterDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPublicFootId + '">';

    s += '<ul>';

    s += writeOneFooter(sForumPage);

    s += writeOneFooter(sChatPage);

    s += writeOneFooter(sFriendPage);

    s += writeOneFooter(sSettingPage);

    s += '</ul>';

    s += '</div>';

    // replaceDomLang(sReplaceLangIdType, f);
    return s;
}
function writeOneFooter (d = '') {
    let id = d + sFootTag + sFootLiSuffix;
    if (document.getElementById(id) != null) {
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

function platformBegin () {
    console.log('platformBegin 11111111111');
    asyn('showPlatformShade');

    console.log('platformBegin 333333333333');
    asyn('clearIndexShade');
}

function updateActiveFooter () {
    // let sPage = getNowPage();
    let f = document.getElementById(getNowPage() + sFootTag + sFootLiSuffix);
    if (!f) {
        console.log('afterLoadPageJs f is null, so no to do');
        return false;
    }
    console.log('afterLoadPageJs f is true, so to do');

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
