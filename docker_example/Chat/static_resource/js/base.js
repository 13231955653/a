function selectPlatForm () {
    let aHrefInfo = window.location.pathname.split('/');
    switch (aHrefInfo[aHrefInfo.length - 1]) {
        case 'chat.html' :
            break;
    }
}

window.onload = function () {
    selectPlatForm();
}