//需判断是否第一次 laod 或者强制刷新
function repeatedlyChatPage (bNoFirst = false) {
    if (typeof window['apiQuery'] === 'undefined') {
        loadApiQueryJs();

        console.log('repeatedlyChatPage apiQuery is undefined. so settimeout retry ');
        setTimeoutFunction('repeatedlyChatPage', bNoFirst);
        return;
    }

    console.log(bNoFirst);
    console.log('repeatedlyChatPage');
    if (!existChatBody()) {
        console.log('repeatedlyChatPage ' + sChatBodyId + ' is no dom, so settimeout retry');
        setTimeoutFunction('repeatedlyChatPage');
        return;
    }
    console.log('repeatedlyChatPage allready');
    console.log(bNoFirst);
}

function existChatBody () {
    return document.getElementById(sChatBodyId) ? true : false;
}