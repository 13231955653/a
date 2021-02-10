function connectWebsock () {
    if (ws) {
        return true;
    }

    if (!'WebSocket' in window) {
        notice('browser_does_not_support_websock');
        return false;
    }

    ws = new WebSocket('ws://' + sWebsocketIpAddr + ':' + sWebsocketPort);

    ws.onopen = function() {
        onWebsockOpen();
    };

    ws.onmessage = function () {
        onMessage();
    };

    ws.onclose = function() {
        onWebsockClose();
    };

    ws.onerror = function() {
        onWebsockError();
    };

    return true;
}

function onWebsockOpen () {
    if (!connectWebsock()) {
        return false;
    }

    sendMessage('online', '');
}

function onMessage () {
    if (!connectWebsock()) {
        return false;
    }

}

function onWebsockError () {
    if (!connectWebsock()) {
        return false;
    }

}

function onWebsockClose () {
    if (!connectWebsock()) {
        return false;
    }

}

function sendMessage (sType = '', sMessage = '') {
    if (!connectWebsock()) {
        return false;
    }

    if (typeof sType !== 'string' || typeof sMessage !== 'string') {
        return false;
    }

    if (typeof aAllowChatTypes[sType] == 'undefined') {
        return false;
    }

    if (sMessage.length > aAllowChatTypes[sType]) {
        notice('message_data_too_long');
        return false;
    }

    let sSendMessage = {type: sType};
    if (sMessage.length) {
        sSendMessage.message = sMessage;
    }

    ws.send(JSON.stringify(sSendMessage));
}

window.onload = function () {
    console.log('sss');
    connectWebsock();
}
