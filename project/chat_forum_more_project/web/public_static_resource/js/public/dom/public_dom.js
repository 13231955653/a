function writePublicDom() {
    writeHeader();

    writeBody();

    writeFooter();

    writeLeft();

    writeRight();

    writeNotice();

    if (!checkAllreadyWritePublicDom) {
        console.log('writePublicDom checkAllreadyWritePublicDom is false');
        setTimeoutFunction('writePublicDom');
        return;
    }

    clearPlatformShade();
}

function checkAllreadyWritePublicDom () {
    return checkExistPublicFootDom() && checkExistPublicHeaderDom() && checkExistPublicBodyDom() && checkExistPublicLeftDom() && checkExistPublicRightDom() && checkExistPublicNoticeDom();
}

function getPublicFootDom () {
    let oDom = document.getElementById(sPublicFootClass);
    return oDom !== null ? oDom : false;
}
function checkExistPublicFootDom () {
    return document.getElementById(sPublicFootClass) ? true : false;
}

function getPublicHeaderDom () {
    let oDom = document.getElementById(sPublicHeaderClass);
    return oDom !== null ? oDom : false;
}
function checkExistPublicHeaderDom () {
    return document.getElementById(sPublicHeaderClass) ? true : false;
}

function getPublicBodyDom () {
    let oDom = document.getElementById(sPublicBodyClass);
    return oDom !== null ? oDom : false;
}
function checkExistPublicBodyDom () {
    return document.getElementById(sPublicBodyClass) ? true : false;
}

function getPublicLeftDom () {
    let oDom = document.getElementById(sPublicLeftClass);
    return oDom !== null ? oDom : false;
}
function checkExistPublicLeftDom () {
    return document.getElementById(sPublicLeftClass) ? true : false;
}

function getPublicRightDom () {
    let oDom = document.getElementById(sPublicRightClass);
    return oDom !== null ? oDom : false;
}
function checkExistPublicRightDom () {
    return document.getElementById(sPublicRightClass) ? true : false;
}

function getPublicNoticeDom () {
    let oDom = document.getElementById(sPublicNoticeClass);
    return oDom !== null ? oDom : false;
}
function checkExistPublicNoticeDom () {
    return document.getElementById(sPublicNoticeClass) ? true : false;
}

