var bLoadWriteDomMobile = true; // load wirte dom js file tag


// let shadeTimer;
// let iShadeTimerInterval = 30;
// function writeShadeDom () {
//     if (document.getElementById('shade')) {
//         return false;
//     }
//
//     let sInfo = '';
//     sInfo += '<div id="shade">';
//     sInfo += '</div>';
//
//     $('body').append(sInfo);
// }
// function showShadeDom (bShow = false) {
//     if (shadeTimer) {
//         clearTimeout(shadeTimer);
//     }
//
//     let oShadeDom = document.getElementById('shade');
//     if (!oShadeDom) {
//         writeShadeDom();
//
//         shadeTimer = setTimeout(function () {
//             showShadeDom(bShow);
//         }, iShadeTimerInterval);
//         return false;
//     }
//
//     incrZIndex();
//
//     oShadeDom.style.zIndex = iNowZIndex;
//
//     let sDisplay = bShow ? 'block' : 'none';
//     let iOpacity = bShow ? '1' : '0';
//     oShadeDom.style.display = sDisplay;
//     $(oShadeDom).animate({opacity: iOpacity}, iMoveSpeed);
//
//     shadeTimer = setTimeout(function () {
//         showShadeDom(false);
//     }, iShadeTimerInterval);
// }

let bInWriteBodyFather = false;
let bWriteEndBody = false;
function writeBodyFather () {
    if (bInWriteBodyFather) {
        return false;
    }
    bInWriteBodyFather = true;

    if (!document.getElementById('data_body')) {
        let sInfo1 = '<div id="data_body">';
        sInfo1 += '</div>';
        $('body').append(sInfo1);
    }

    let oIndexDom = document.getElementById('index_data_body');
    if (!oIndexDom) {
        let sInfo2 = '';
        sInfo2 += '<div id="index_data_body" class="data_body">';
        sInfo2 += '<div id="index_header"></div>';
        sInfo2 += '<div id="index_body"></div>';
        sInfo2 += '<div id="index_footer"></div>';
        sInfo2 += '</div>';
        $('#data_body').append(sInfo2);

        // writeIndexHeader();
        //
        // writeIndexFooter();
    }

    let oChatDom = document.getElementById('chat_data_body');
    if (!oChatDom) {
        let sInfo3 = '';
        sInfo3 += '<div id="chat_data_body" class="data_body">';
        // sInfo3 += '<div id="chat_header"></div>';
        sInfo3 += '<div id="chat_body"></div>';
        sInfo3 += '<div id="chat_footer"></div>';
        sInfo3 += '</div>';
        $('#data_body').append(sInfo3);

        // writeChatHeader();

        writeChatBody();

        writeChatFooter();
    }

    let oMoreDom = document.getElementById('more_data_body');
    if (!oMoreDom) {
        let sInfo3 = '';
        sInfo3 += '<div id="more_data_body" class="data_body">';
        // sInfo3 += '<div id="more_header"></div>';
        sInfo3 += '<div id="more_body"></div>';
        sInfo3 += '<div id="more_footer"></div>';
        sInfo3 += '</div>';
        $('#data_body').append(sInfo3);

        // writeMoreHeader();
        //
        writeMoreBody();

        writeMoreFooter();
    }

    let oSetDom = document.getElementById('set_data_body');
    if (!oSetDom) {
        let sInfo3 = '';
        sInfo3 += '<div id="set_data_body" class="data_body">';
        // sInfo3 += '<div id="set_header"></div>';
        sInfo3 += '<div id="set_body"></div>';
        sInfo3 += '<div id="set_body_more_set"></div>';
        sInfo3 += '<div id="set_footer"></div>';
        sInfo3 += '</div>';
        $('#data_body').append(sInfo3);

        // writeMoreHeader();
        //
        writeSetBody();

        writeSetFooter();
    }
    // document.getElementById('data_body').style.width = iWinWidth * 2 + 'px';
    // document.getElementById('data_body').style.height = iWinHeight + 'px';

    bInWriteBodyFather = false;
    bWriteEndBody = true;
}


function writeFrontPage (sNowPage, bCompel) {
    // showLoading(true);
    
    consoleLog(sNowPage);
    // consoleLog(queryWhatPage());
    consoleLog('write page');
    writeBodyFather();
    // return;
    // return;

    // writeShadeDom();

    // writeNoticeDom();

    if (!bWriteEndBody) {
        if (writePageTimer) {
            clearTimeout(writePageTimer);
        }

        writePageTimer = setTimeout(function () {
            writeFrontPage(bCompel, sNowPage);
        }, 10);

        return false;
    }

    switch (sNowPage) {
        case sIndexPageName :
            consoleLog('write index page');
            writeIndexPage(bCompel);
            break;
        case sCahtPageName :
            consoleLog('write chat page');
            writeChatPage(bCompel);
            break;
        case sMorePageName :
            consoleLog('write more page');
            writeMorePage(bCompel);
            break;
        case sSetPageName :
            consoleLog('write set page');
            writeSetPage(bCompel);
            break;
    }
}

//more页面
function writeSetPage (bCompel = false) {
    consoleLog('write set11111 page');
    // index_header_actions_li
    // $('#index_header_actions_li').addClass('now_index_footer_click');
    $('#index_set_actions').addClass('now_index_footer_click');

    let oSetDom = document.getElementById('set_data_body');
    // if (!oSetDom) {
    //     let sInfo = '';
    //     sInfo += '<div id="more_data_body" class="data_body">';
    //     sInfo += '<div id="more_header"></div>';
    //     sInfo += '<div id="more_body"></div>';
    //     sInfo += '<div id="more_footer"></div>';
    //     sInfo += '</div>';
    //     $('#data_body').append(sInfo);
    //
    //     oSetDom = document.getElementById('more_data_body');
    // }

    // writeChatHeader();
    //
    // writeChatBody();
    //
    // writeChatFooter();

    consoleLog(oSetDom.offsetLeft);

    $('#data_body').animate({left: '-' + oSetDom.offsetLeft}, iMoveSpeed);

    switchChatPageAction(bCompel);
}
//set页面footer
function writeSetFooter () {
    consoleLog('write set footer page');
    if (!document.getElementById('set_footer_actions_ul')) {
        let sInfo = '';
        sInfo += '<ul id="set_footer_actions_ul">';
        sInfo += '<li id="" class="set_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '0,' + true + ');"><img src="' + setStaticResouresImageAddress('web.png') + '"></li>';
        sInfo += '<div class="set_footer_split_tag"></div>';
        sInfo += '<li id="" class="set_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '1,' + true + ');"><img src="' + setStaticResouresImageAddress('chat.png') + '"></li>';
        sInfo += '<div class="set_footer_split_tag"></div>';
        sInfo += '<li id="" class="set_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '2,' + true + ');"><img src="' + setStaticResouresImageAddress('set.png') + '"></li>';
        sInfo += '<div class="set_footer_split_tag"></div>';
        sInfo += '<li id="index_set_actions" class="set_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '3,' + true + ');"><img src="' + setStaticResouresImageAddress('set.png') + '"></li>';
        sInfo += '</ul>';
        $('#set_footer').append(sInfo);
    }

    // $('.chat_footer_actions_li').removeClass('now_index_footer_click');
    // $('#index_chat_actions').addClass('now_index_footer_click');
}
//set页面body
function writeSetBody () {
    consoleLog('write set body page');
    let oMoreBodyDom = document.getElementById('set_data_body_ul');
    if (!oMoreBodyDom) {
        let sInfo = '';

        sInfo += '<div>';
        sInfo += '<ul id="set_data_body_ul">';

        sInfo += '<li class="set_body_data_li set_header"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"></li>';
        sInfo += '<li class="set_body_data_li" id="set_body_change_langvage" ontouchstart="showChangeLangvage();"><span class="relang_tag" _origin_lang="select_langvage">' + aLang['select_langvage'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';
        sInfo += '<li class="set_body_data_li"><span class="relang_tag" _origin_lang="set">' + aLang['set'] + '</span></li>';

        sInfo += '</ul>';
        sInfo += '</div>';
        $('#set_body').append(sInfo);
    }
}
let bInCreateChangeLangvageDom = false;
function writeChangeLangvageDom () {
    if (bInCreateChangeLangvageDom) {
        return false;
    }
    bInCreateChangeLangvageDom = true;

    let sInfo = '';
    sInfo += '<div id="set_change_langvage">';
    sInfo += '</div>';
    $('#set_body_more_set').append(sInfo);

    bInCreateChangeLangvageDom = false;
}
let showChangeLangvageTimer;
let bInSetBodyChangeLangvage = false;
function showChangeLangvage (bShow = true) {
    let oChangeLangvageDom = document.getElementById('set_change_langvage');
    if (!oChangeLangvageDom) {
        writeChangeLangvageDom();

        showChangeLangvageTimer = setTimeout(function () {
            showChangeLangvage(bShow);
        }, 10);

        return false;
    }

    let oSetBosyMoreSetDom = document.getElementById('set_body_more_set');
    let oChangeLangvageButton = document.getElementById('set_body_change_langvage');

    if (bShow) {
        oSetBosyMoreSetDom.style.zIndex = incrZIndex();

        oChangeLangvageDom.style.zIndex = incrZIndex();

        $(oSetBosyMoreSetDom).animate({left: '0px'}, iMoveSpeed, false, function () {
            bInSetBodyChangeLangvage = true;
        });

        oChangeLangvageButton.ontouchstart = function () {
            showChangeLangvage(false);
        };

        return false;
    }

    $(oSetBosyMoreSetDom).animate({left: iWinWidth * 1.2 + 'px'}, iMoveSpeed, false, function () {
        bInSetBodyChangeLangvage = false;
    });

    oChangeLangvageButton.ontouchstart = function () {
        showChangeLangvage(true);
    };
}
//more页面
function writeMorePage (bCompel = false) {
    consoleLog('write more11111 page');
    // index_header_actions_li
    // $('#index_header_actions_li').addClass('now_index_footer_click');
    $('#index_more_actions').addClass('now_index_footer_click');

    let oMoreDom = document.getElementById('more_data_body');
    // if (!oMoreDom) {
    //     let sInfo = '';
    //     sInfo += '<div id="more_data_body" class="data_body">';
    //     sInfo += '<div id="more_header"></div>';
    //     sInfo += '<div id="more_body"></div>';
    //     sInfo += '<div id="more_footer"></div>';
    //     sInfo += '</div>';
    //     $('#data_body').append(sInfo);
    //
    //     oMoreDom = document.getElementById('more_data_body');
    // }

    // writeChatHeader();
    //
    // writeChatBody();
    //
    // writeChatFooter();

    consoleLog(oMoreDom.offsetLeft);

    $('#data_body').animate({left: '-' + oMoreDom.offsetLeft}, iMoveSpeed);

    switchChatPageAction(bCompel);
}
//more页面footer
function writeMoreFooter () {
    consoleLog('write more footer page');
    if (!document.getElementById('more_footer_actions_ul')) {
        let sInfo = '';
        sInfo += '<ul id="more_footer_actions_ul">';
        sInfo += '<li id="" class="more_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '0,' + true + ');"><img src="' + setStaticResouresImageAddress('web.png') + '"></li>';
        sInfo += '<div class="more_footer_split_tag"></div>';
        sInfo += '<li id="" class="more_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '1,' + true + ');"><img src="' + setStaticResouresImageAddress('chat.png') + '"></li>';
        sInfo += '<div class="more_footer_split_tag"></div>';
        sInfo += '<li id="index_more_actions" class="more_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '2,' + true + ');"><img src="' + setStaticResouresImageAddress('more.png') + '"></li>';
        sInfo += '<div class="more_footer_split_tag"></div>';
        sInfo += '<li id="" class="more_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '3,' + true + ');"><img src="' + setStaticResouresImageAddress('set.png') + '"></li>';
        sInfo += '</ul>';
        $('#more_footer').append(sInfo);
    }

    // $('.chat_footer_actions_li').removeClass('now_index_footer_click');
    // $('#index_chat_actions').addClass('now_index_footer_click');
}
//more页面body
function writeMoreBody () {
    consoleLog('write more body page');
    let oMoreBodyDom = document.getElementById('more_data_body_ul');
    if (!oMoreBodyDom) {
        let sInfo = '';
        sInfo += '<ul id="more_data_body_ul">';
        sInfo += '<li class="more_data_body_li">';
        sInfo += '<div class="">';
        sInfo += '<div class="more_header">';
        sInfo += '</div>';
        sInfo += '<div class="more_body_data">';
        sInfo += '</div>';
        sInfo += '</div>';
        sInfo += '</li>';
        sInfo += '</ul>';
        $('#more_body').append(sInfo);
    }
}
//chat 页面
function writeChatPage (bCompel = false) {
    consoleLog('write chat11111 page');
    // index_header_actions_li
    // $('#index_header_actions_li').addClass('now_index_footer_click');
    $('#index_chat_actions').addClass('now_index_footer_click');

    let oChatDom = document.getElementById('chat_data_body');
    // if (!oChatDom) {
    //     let sInfo = '';
    //     sInfo += '<div id="chat_data_body" class="data_body">';
    //     sInfo += '<div id="chat_header"></div>';
    //     sInfo += '<div id="chat_body"></div>';
    //     sInfo += '<div id="chat_footer"></div>';
    //     sInfo += '</div>';
    //     $('#data_body').append(sInfo);
    //
    //     oChatDom = document.getElementById('chat_data_body');
    // }

    // writeChatHeader();
    //
    // writeChatBody();
    //
    // writeChatFooter();

    consoleLog(oChatDom.offsetLeft);

    $('#data_body').animate({left: '-' + oChatDom.offsetLeft}, iMoveSpeed);

    switchChatPageAction(bCompel);
}
let switchChatPageActionTimer; //index 页面选择操作定时器
//选择index页面操作
function switchChatPageAction (bCompel = false) {
    if (switchChatPageActionTimer) {
        clearTimeout(switchChatPageActionTimer);
    }

    if (!document.getElementById('chat_data_body')) {
        writeBodyFather();
        switchChatPageActionTimer = setTimeout(function () {
            switchChatPageAction(bCompel);
        }, 10);
        return false;
    }

    let sChatPageNowAction = getQueryVariable('now_chat_page_action_index');
    consoleLog(sChatPageNowAction);return;
    if (sChatPageNowAction !== false) {
        switch (sChatPageNowAction) {
            case '0' :
                chatPageRootAction(sChatPageNowAction, bCompel);
                break;
            case '1' :
                chatPageRootAction(sChatPageNowAction, bCompel);
                break;
            case '2' :
                chatPageRootAction(sChatPageNowAction, bCompel);
                break;
        }
    }
}
//chat页面header
// function writeChatHeader () {
//     consoleLog('write chat header page');
//     if (!document.getElementById('chat_header_actions_ul')) {
//         let sInfo = '';
//         sInfo += '<ul id="chat_header_actions_ul">';
//         sInfo += '<li class="chat_header_actions_li chat_header_actions_li_0" ontouchstart="indexLeftFunction(0);" _replace_index_url_now_action="0"><span class="relang_tag" _origin_lang="chat_header">' + aLang['chat_header'] + '</span></li>';
//         sInfo += '<li class="chat_header_actions_li' +
//             ' chat_header_actions_li_1" ontouchstart="indexLeftFunction(1);"' +
//             ' _replace_index_url_now_action="0"><span class="relang_tag" _origin_lang="chat_header">' + aLang['chat_header'] + '</span></li>';
//         sInfo += '<li class="chat_header_actions_li' +
//             ' chat_header_actions_li_2" ontouchstart="indexLeftFunction(2);"' +
//             ' _replace_index_url_now_action="0"><span class="relang_tag" _origin_lang="chat_header">' + aLang['chat_header'] + '</span></li>';
//         sInfo += '</ul>';
//         $('#chat_header').append(sInfo);
//     }
//
//     // writeChatBody(oHeaderLi.length);
// }
//chat页面body
function writeChatBody () {
    consoleLog('write chat body page');
    let oChatBodyDom = document.getElementById('chat_data_body_ul');
    if (!oChatBodyDom) {
        // let sInfo = '';
        // sInfo += '<ul id="chat_data_body_ul">';
        // sInfo += '<li class="chat_data_body_li"><div></div></li>';
        // sInfo += '</ul>';
        // $('#chat_body').append(sInfo);

        let sInfo = '';
        sInfo += '<ul id="chat_data_body_ul">';
        sInfo += '<li class="chat_data_body_li">';
        sInfo += '<div class="">';
        sInfo += '<div class="chat_header">';
        sInfo += '</div>';
        sInfo += '<div class="chat_body_data">';
        sInfo += '</div>';
        sInfo += '</div>';
        sInfo += '</li>';
        sInfo += '</ul>';
        $('#chat_body').append(sInfo);
    }
}
//默认页面footer
function writeChatFooter () {
    consoleLog('write chat footer page');
    if (!document.getElementById('chat_footer_actions_ul')) {
        let sInfo = '';
        sInfo += '<ul id="chat_footer_actions_ul">';
        sInfo += '<li id="" class="chat_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '0,' + true + ');"><img src="' + setStaticResouresImageAddress('web.png') + '"></li>';
        sInfo += '<div class="chat_footer_split_tag"></div>';
        sInfo += '<li id="index_chat_actions" class="chat_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '1,' + true + ');"><img src="' + setStaticResouresImageAddress('chat.png') + '"></li>';
        sInfo += '<div class="chat_footer_split_tag"></div>';
        sInfo += '<li id="" class="chat_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '2,' + true + ');"><img src="' + setStaticResouresImageAddress('friend_list.png') + '"></li>';
        sInfo += '<div class="chat_footer_split_tag"></div>';
        sInfo += '<li id="" class="chat_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '3,' + true + ');"><img src="' + setStaticResouresImageAddress('friend_dynamic.png') + '"></li>';
        sInfo += '</ul>';
        $('#chat_footer').append(sInfo);
    }

    // $('.chat_footer_actions_li').removeClass('now_index_footer_click');
    // $('#index_chat_actions').addClass('now_index_footer_click');
}

let writeIndexPageTimer;
//index 页面
function writeIndexPage (bCompel = false) {
    if (writeIndexPageTimer) {
        clearTimeout(writeIndexPageTimer);
    }
    
    // consoleLog('write index1111 page');
    if (!document.getElementById('index_header_actions_ul')) {
        queryIndexHeaderActions();
    
        writeIndexPageTimer = setTimeout(function () {
            writeIndexPage(bCompel);
        }, 20);
        
        return false;
    }
    // writeIndexHeader();
    
    // writeIndexFooter();

    $('#index_web_actions').addClass('now_index_footer_click');

    let oIndexDom = document.getElementById('index_data_body');

    $('#data_body').animate({left: '-' + oIndexDom.offsetLeft}, iMoveSpeed);
    
    showLoading(false);
    // switchIndexPageAction(bCompel);
}
//默认页面header
function writeIndexHeader () {
    consoleLog('write index header page');
    if (!document.getElementById('index_header_actions_ul')) {
        let sInfo = '';
        sInfo += '<ul id="index_header_actions_ul">';
        sInfo += '<li class="index_header_actions_li index_header_actions_li_0 now_index_header_actions" ontouchstart="indexLeftFunction(0);" _replace_index_url_now_action="0"><span class="relang_tag" _origin_lang="index_header_action_0">' + aLang['index_header_action_0'] + '</span></li>';
        sInfo += '<li class="index_header_actions_li index_header_actions_li_1" ontouchstart="indexLeftFunction(1);" _replace_index_url_now_action="1"><span class="relang_tag" _origin_lang="index_header_action_1">' + aLang['index_header_action_1'] + '</span></li>';
        sInfo += '<li class="index_header_actions_li index_header_actions_li_2" ontouchstart="indexLeftFunction(2);" _replace_index_url_now_action="2"><span class="relang_tag" _origin_lang="index_header_action_2">' + aLang['index_header_action_2'] + '</span></li>';
        sInfo += '<li class="index_header_actions_li index_header_actions_li_3" ontouchstart="indexLeftFunction(3);" _replace_index_url_now_action="3"><span class="relang_tag" _origin_lang="index_header_action_3">' + aLang['index_header_action_3'] + '</span></li>';
        sInfo += '<li class="index_header_actions_li index_header_actions_li_4" ontouchstart="indexLeftFunction(4);" _replace_index_url_now_action="4"><span class="relang_tag" _origin_lang="index_header_action_4">' + aLang['index_header_action_4'] + '</span></li>';
        sInfo += '</ul>';
        $('#index_header').append(sInfo);
    }

    let oHeaderLi = $('.index_header_actions_li');
    let i = 0;
    let j = oHeaderLi.length;
    let k = 0;
    let iBeforeWidth = 0;
    let iWidthTotal = 0;
    for (i; i < j; i++) {
        iWidthTotal += parseInt(oHeaderLi[i].offsetWidth);

        iBeforeWidth = 0;
        if (i > 0) {
            k = i;
            while (k - 1 >= 0) {
                iBeforeWidth += parseInt(oHeaderLi[k - 1].offsetWidth);
                k -= 1;
            }
            oHeaderLi[i].setAttribute('_left', iBeforeWidth + 'px');
            continue;
        }

        oHeaderLi[i].setAttribute('_left', '0px');
    }
    // consoleLog(iWidthTotal);
    document.getElementById('index_header_actions_ul').style.width = iWidthTotal * 2 + 'px';
    // $('#index_header_actions_ul').css('width', iWidthTotal);

    writeIndexBody(oHeaderLi.length);
}
//默认页面body
function writeIndexBody (iWriteIndexBodyLiNumber) {
    consoleLog('write index body page');
    if (!document.getElementById('index_data_body_ul')) {
        let sInfo = '';
        sInfo += '<ul id="index_data_body_ul">';

        let i = 0;
        for (i; i < iWriteIndexBodyLiNumber; i++) {
            sInfo += '<li class="index_data_body_li index_data_body_li_' + i + '"><div></div></li>';
        }
        sInfo += '<li class="index_data_body_li" id="classify_data_body"><div></div></li>';
        sInfo += '<li class="index_data_body_li" id="post_data_body"><div></div></li>';
        sInfo += '</ul>';
        $('#index_body').append(sInfo);
    }

    let oBodyLi = $('.index_data_body_li');
    let i = 0;
    let j = oBodyLi.length;
    let k = 0;
    let iBeforeWidth = 0;
    let iWidthTotal = 0;
    for (i; i < j; i++) {
        iWidthTotal += parseInt(oBodyLi[i].offsetWidth);

        iBeforeWidth = 0;
        if (i > 0) {
            k = i;
            while (k - 1 >= 0) {
                iBeforeWidth += parseInt(oBodyLi[k - 1].offsetWidth);
                k -= 1;
            }
            oBodyLi[i].setAttribute('_left', iBeforeWidth + 'px');
            continue;
        }

        oBodyLi[i].setAttribute('_left', '0px');
    }
    $('#index_data_body_ul').css('width', iWidthTotal);
}
//默认页面footer
function writeIndexFooter () {
    consoleLog('write index footer page');
    if (!document.getElementById('index_footer_actions_ul')) {
        let sInfo = '';
        sInfo += '<ul id="index_footer_actions_ul">';
        // sInfo += '<li id="index_web_actions" class="index_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '0,' + true + ');"><img src="' + setStaticResouresImageAddress('/web.png') + '"></li>';
        // sInfo += '<div class="index_footer_split_tag"></div>';
        // sInfo += '<li id="index_chat_actions" class="index_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '1,' + true + ');"><img src="' + setStaticResouresImageAddress('/chat.png') + '"></li>';
        // sInfo += '<div class="index_footer_split_tag"></div>';
        // sInfo += '<li id="index_more_actions" class="index_footer_actions_li"><img src="' + setStaticResouresImageAddress('/more.png') + '"></li>';
        // sInfo += '<div class="index_footer_split_tag"></div>';
        // sInfo += '<li id="index_setting_actions" class="index_footer_actions_li"><img src="' + setStaticResouresImageAddress('/set.png') + '"></li>';
        sInfo += '<li id="index_web_actions" class="index_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '0,' + true + ');"><img src="' + setStaticResouresImageAddress('web.png') + '"></li>';
        sInfo += '<div class="index_footer_split_tag"></div>';
        sInfo += '<li id="" class="index_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '1,' + true + ');"><img src="' + setStaticResouresImageAddress('chat.png') + '"></li>';
        sInfo += '<div class="index_footer_split_tag"></div>';
        sInfo += '<li id="" class="index_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '2,' + true + ');"><img src="' + setStaticResouresImageAddress('more.png') + '"></li>';
        sInfo += '<div class="index_footer_split_tag"></div>';
        sInfo += '<li id="" class="index_footer_actions_li" ontouchstart="replaceUrlPageFileName(' + '3,' + true + ');"><img src="' + setStaticResouresImageAddress('set.png') + '"></li>';
        sInfo += '</ul>';
        $('#index_footer').append(sInfo);
    }

    // $('.index_footer_actions_li').removeClass('now_index_footer_click');
    // $('#index_web_actions').addClass('now_index_footer_click');
}