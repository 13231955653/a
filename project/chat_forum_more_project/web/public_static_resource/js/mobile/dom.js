function writeHeader() {

}

function writeBody() {

}

function writeFooter() {
    let oFooter = document.getElementById('footer');
    if (oFooter) {
        return true;
    }

    let sInfo = '';
    sInfo += '<div id="public_footer">';

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

}

function writeRight () {

}

function writeNotice () {

}

function appendNode () {
}
