function writePublicDom() {
    writeHeader();

    writeBody();

    writeFooter();

    writeLeft();

    writeRight();

    writeNotice();

    writeShade();
}

function writeShade () {

}

function bodyDom() {
    return document.getElementsByTagName('body')[0];
}