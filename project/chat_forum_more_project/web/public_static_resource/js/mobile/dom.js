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
    sInfo += '<div id="footer">';
    sInfo += '<a href=""><span class="re_lang">' + aLang['sasas'] + '</span></a>';
    sInfo += '<a href=""><span class="re_lang">' + aLang['sasas'] + '</span></a>';
    sInfo += '<a href=""><span class="re_lang">' + aLang['sasas'] + '</span></a>';
    sInfo += '<a href=""><span class="re_lang">' + aLang['sasas'] + '</span></a>';
    sInfo += '</div>';

    let oBody = bodyDom();
    $(oBody).append(sInfo);
}

function writeLeft () {

}

function writeRight () {

}

function writeNotice () {

}

function appendNode () {
}

function bodyDom() {
    return document.getElementsByTagName('body')[0];
}