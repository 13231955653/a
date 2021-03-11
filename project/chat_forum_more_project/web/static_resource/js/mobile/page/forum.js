function repeatedlyForumPage (bNoFirst = false) {
    if (typeof window['apiQuery'] === 'undefined') {
        loadApiJs();

        console.log('repeatedlyForumPage apiQuery is undefined. so settimeout retry ');
        setTimeoutFunction('repeatedlyForumPage', bNoFirst);
        return;
    }

    console.log(bNoFirst);
    console.log('repeatedlyForumPage');
    if (!existForumBody()) {
        console.log('repeatedlyForumPage ' + sForumBodyId + ' is no dom, so settimeout retry');
        setTimeoutFunction('repeatedlyForumPage');
        return;
    }
    console.log('repeatedlyForumPage allready');
    console.log(bNoFirst);

    clearPageShade();
}

function existForumBody () {
    return document.getElementById(sForumBodyId) ? true : false;
}

function forumBegin () {
    repeatedlyPage(sForumPage);
}

window.onload = forumBegin();