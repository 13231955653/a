function writePublicDom() {
    writeHeader();

    writeBody();

    writeFooter();

    writeLeft();

    writeRight();

    writeNotice();

    if (!checkAllreadyWritePublicDom) {
        console.log('writePublicDom checkAllreadyWritePublicDom is false, settimeout retry');
        setTimeoutFunction('writePublicDom');
        return;
    }

    clearPlatformShade();
}

function checkAllreadyWritePublicDom () {
    return checkExistPublicFootDom() && checkExistPublicHeaderDom() && checkExistPublicBodyDom() && checkExistPublicLeftDom() && checkExistPublicRightDom() && checkExistPublicNoticeDom();
}

function getPublicFootDom () {
    let oDom = document.getElementById(sPublicFootId);
    return oDom !== null ? oDom : false;
}
function checkExistPublicFootDom () {
    return document.getElementById(sPublicFootId) ? true : false;
}

function getPublicHeaderDom () {
    let oDom = document.getElementById(sPublicHeaderId);
    return oDom !== null ? oDom : false;
}
function checkExistPublicHeaderDom () {
    return document.getElementById(sPublicHeaderId) ? true : false;
}

function getPublicBodyDom () {
    let oDom = document.getElementById(sPublicBodyId);
    return oDom !== null ? oDom : false;
}
function checkExistPublicBodyDom () {
    return document.getElementById(sPublicBodyId) ? true : false;
}

function getPublicLeftDom () {
    let oDom = document.getElementById(sPublicLeftId);
    return oDom !== null ? oDom : false;
}
function checkExistPublicLeftDom () {
    return document.getElementById(sPublicLeftId) ? true : false;
}

function getPublicRightDom () {
    let oDom = document.getElementById(sPublicRightId);
    return oDom !== null ? oDom : false;
}
function checkExistPublicRightDom () {
    return document.getElementById(sPublicRightId) ? true : false;
}

function getPublicNoticeDom () {
    let oDom = document.getElementById(sPublicNoticeId);
    return oDom !== null ? oDom : false;
}
function checkExistPublicNoticeDom () {
    return document.getElementById(sPublicNoticeId) ? true : false;
}

