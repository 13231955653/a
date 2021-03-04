function writeHeader() {
    let oDom = getPublicHeaderDom();
    if (oDom) {
        return true;
    }

    let sInfo = '';
    sInfo += '<div id="' + sPublicHeaderId + '">';

    sInfo += '</div>';

    let oBody = bodyDom();
    $(oBody).append(sInfo);
}

function writeBody() {
    let oDom = getPublicBodyDom();
    if (oDom) {
        return true;
    }

    let sInfo = '';
    sInfo += '<div id="' + sPublicBodyId + '">';

    sInfo += writeMobliePageFatherDom(sSettingBodyId);

    sInfo += writeMobliePageFatherDom(sForumBodyId);

    sInfo += writeMobliePageFatherDom(sChatBodyId);

    sInfo += writeMobliePageFatherDom(sFriendBodyId);

    sInfo += '</div>';

    let oBody = bodyDom();
    $(oBody).append(sInfo);
}

function writeMobliePageFatherDom (sId) {
    let sInfo = '';
    sInfo += '<div id="' + sId + '">';
    sInfo += '</div>';
    return sInfo;
}

function writeFooter() {
    let oDom = getPublicFootDom();
    if (oDom) {
        return true;
    }

    let f = sPublicFootId;

    let sInfo = '';
    sInfo += '<div id="' + f + '">';

    sInfo += '<ul>';

    sInfo += writeOneFooter(sForumPage);

    sInfo += writeOneFooter(sChatPage);

    sInfo += writeOneFooter(sFriendPage);

    sInfo += writeOneFooter(sSettingPage);

    sInfo += '</ul>';

    sInfo += '</div>';

    let oBody = bodyDom();
    $(oBody).append(sInfo);

    replaceDomLang(sReplaceLangIdType, f);
}
function writeOneFooter (sId = '') {
    let sLang = sId + sFootTag;

    let sInfo = '';
    sInfo += '<li id="' + sId + sFootTag + sFootLiSuffix + '" class="' + sFootTag + '">';
    sInfo += '<a href="javascript:void(0);" onclick="' + aFooterAction[sId] + '">';
    sInfo += '<span class="' + sReLangClass + '" id="' + sLang + '">';
    /////////////////////////////////////
    // sInfo += typeof aLang[sLang] !== 'undefined' ? aLang[sLang] : aLang['langvage_error'];
    sInfo += '</span>';
    sInfo += '</a>';
    sInfo += '</li>';

    return sInfo;
}

function writeLeft () {
    let oDom = getPublicLeftDom();
    if (oDom) {
        return true;
    }

    let sInfo = '';
    sInfo += '<div id="' + sPublicLeftId + '">';

    sInfo += '</div>';

    let oBody = bodyDom();
    $(oBody).append(sInfo);
}

function writeRight () {
    let oDom = getPublicRightDom();
    if (oDom) {
        return true;
    }

    let sInfo = '';
    sInfo += '<div id="' + sPublicRightId + '">';

    sInfo += '</div>';

    let oBody = bodyDom();
    $(oBody).append(sInfo);
}

function writeNotice () {
    let oDom = getPublicNoticeDom();
    if (oDom) {
        return true;
    }

    let sInfo = '';
    sInfo += '<div id="' + sPublicNoticeId + '">';

    sInfo += '</div>';

    let oBody = bodyDom();
    $(oBody).append(sInfo);
}

/**
 *
 * 替换dom语言
 *
 * @param p 传入第二参数的类型 type string id/class/tag
 * @param d 需要替换语言的dom的 id/class/tag type sting
 */
function replaceDomLang (p = '', d = '') {
    if (!p || !d) {
        console.log('replaceDomLang p or d is null, so no to do ');
        return;
    }

    if (typeof bLoadFunctionJs == 'undefined') {
        console.log('replaceDomLang bLoadFunctionJs is false, so settimtoue retry ');
        setTimeoutFunction('replaceDomLang', p, d);
        return;
    }

    replaceLang(p, d);
}
