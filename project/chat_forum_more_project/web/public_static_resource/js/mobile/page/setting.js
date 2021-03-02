function repeatedlySettingPage (bNoFirst = false) {
    if (typeof window['apiQuery'] === 'undefined') {
        loadApiQueryJs();

        console.log('repeatedlySettingPage apiQuery is undefined. so settimeout retry ');
        setTimeoutFunction('repeatedlySettingPage', bNoFirst);
        return;
    }

    console.log('repeatedlySettingPage');
    if (!existSettingBody()) {
        console.log('repeatedlySettingPage ' + sSettingBodyId + ' is no dom, so settimeout retry');
        setTimeoutFunction('repeatedlySettingPage');
        return;
    }
    console.log('repeatedlySettingPage allready');
    console.log(bNoFirst);
}

function existSettingBody () {
    return document.getElementById(sSettingBodyId) ? true : false;
}
