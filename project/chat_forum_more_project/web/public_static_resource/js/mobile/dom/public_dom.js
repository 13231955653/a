function writeHeader() {
    // let oDom = getPublicHeaderDom();
    if (getPublicHeaderDom()) {
        return true;
    }

    let s = '';
    s += '<div id="' + sPublicHeaderId + '">';

    s += '</div>';

    // let oBody = bodyDom();
    $(fatherFom()).append(s);
}

function writeBody() {
    // let oDom = getPublicBodyDom();
    if (getPublicBodyDom()) {
        return true;
    }

    let s = '';
    s += '<div id="' + sPublicBodyId + '">';

    s += writeMobliePageFatherDom(sSettingBodyId);

    s += writeMobliePageFatherDom(sForumBodyId);

    s += writeMobliePageFatherDom(sChatBodyId);

    s += writeMobliePageFatherDom(sFriendBodyId);

    s += '</div>';

    // let oBody = bodyDom();
    $(fatherFom()).append(s);
}

function writeMobliePageFatherDom (d) {
    let s = '';
    s += '<div id="' + d + '">';
    s += '</div>';
    return s;
}

function writeFooter() {
    // let oDom = getPublicFootDom();
    if (getPublicFootDom()) {
        return true;
    }

    let f = sPublicFootId;

    let s = '';
    s += '<div id="' + f + '">';

    s += '<ul>';

    s += writeOneFooter(sForumPage);

    s += writeOneFooter(sChatPage);

    s += writeOneFooter(sFriendPage);

    s += writeOneFooter(sSettingPage);

    s += '</ul>';

    s += '</div>';

    // let oBody = bodyDom();
    $(fatherFom()).append(s);

    replaceDomLang(sReplaceLangIdType, f);
}
function writeOneFooter (d = '') {
    let l = d + sFootTag;

    let s = '';
    s += '<li id="' + d + sFootTag + sFootLiSuffix + '" class="' + sFootTag + '">';
    s += '<a href="javascript:void(0);" onclick="' + aFooterAction[d] + '">';
    s += '<span class="' + sReLangClass + '" id="' + l + '">';
    /////////////////////////////////////
    // s += typeof aLang[sLang] !== 'undefined' ? aLang[sLang] : aLang['langvage_error'];
    s += '</span>';
    s += '</a>';
    s += '</li>';

    return s;
}

function writeLeft () {
    // let oDom = getPublicLeftDom();
    if (getPublicLeftDom()) {
        return true;
    }

    let s = '';
    s += '<div id="' + sPublicLeftId + '">';

    s += '</div>';

    // let oBody = bodyDom();
    $(fatherFom()).append(s);
}

function writeRight () {
    // let oDom = getPublicRightDom();
    if (getPublicRightDom()) {
        return true;
    }

    let s = '';
    s += '<div id="' + sPublicRightId + '">';

    s += '</div>';

    // let oBody = bodyDom();
    $(fatherFom()).append(s);
}

function writeNotice () {
    // let oDom = getPublicNoticeDom();
    if (getPublicNoticeDom()) {
        return true;
    }

    let s = '';
    s += '<div id="' + sPublicNoticeId + '">';

    s += '</div>';

    // let oBody = bodyDom();
    $(fatherFom()).append(s);
}

