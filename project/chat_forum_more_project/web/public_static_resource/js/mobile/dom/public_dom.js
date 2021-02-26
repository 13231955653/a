function writeHeader() {
    let oDom = getPublicHeaderDom();
    if (oDom) {
        return true;
    }

    let sInfo = '';
    sInfo += '<div id="' + sPublicHeaderClass + '">';

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
    sInfo += '<div id="' + sPublicBodyClass + '">';

    sInfo += '</div>';

    let oBody = bodyDom();
    $(oBody).append(sInfo);
}

function writeFooter() {
    let oDom = getPublicFootDom();
    if (oDom) {
        return true;
    }

    let sInfo = '';
    sInfo += '<div id="' + sPublicFootClass + '">';

    sInfo += '<ul>';

    sInfo += writeOneFooter('public_foot1');

    sInfo += writeOneFooter('public_foot2');

    sInfo += writeOneFooter('public_foot3');

    sInfo += writeOneFooter('public_foot4');

    sInfo += '</ul>';

    sInfo += '</div>';

    let oBody = bodyDom();
    $(oBody).append(sInfo);
}
function writeOneFooter (sId = '') {
    let sInfo = '';
    sInfo += '<li>';
    sInfo += '<a href="">';
    sInfo += '<span class="' + sReLangClass + '" id="' + sId + '">';
    sInfo += typeof aLang[sId] !== 'undefined' ? aLang[sId] : aLang['langvage_error'];
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
    sInfo += '<div id="' + sPublicLeftClass + '">';

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
    sInfo += '<div id="' + sPublicRightClass + '">';

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
    sInfo += '<div id="' + sPublicNoticeClass + '">';

    sInfo += '</div>';

    let oBody = bodyDom();
    $(oBody).append(sInfo);
}

function appendNode () {
}
