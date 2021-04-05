/*lsb*/function pageBegin () {
    console.log('pageBegin 1111111111111');

    console.log('dasdasdppp');
    console.log(domById(oDomFatherId));
    requires([sPubDomJ], function () {
        asyn('clearBaseShade');

        asyn('replaceClassNameToShow', domById(oDomFatherId));
    });

    let a = getNowPage();
    let b = '';
    let c = '';
    switch (a) {
        case sForumPage :
            requires([sMouseForumJ], function () {
                forumChangeLevelMove('', '', 1);
            });
            break;
        case sChatPage :
            b = sMouseChatJ;
            c = '';
            break;
        case sFriendPage :
            b = sMouseFriendJ;
            c = '';
            break;
        case sAboutMePage :
            b = sMouseAboutMeJ;
            c = '';
            break;
        case sSetPage :
            b = sMouseSetJ;
            c = '';
            break;
    }
    // if (!b) {
    //     return;
    // }
    //
    // requires([b], function () {
    //     window[c]();
    // });
}/*lsb*/

/*con*/function platDomLogicBegin () {
    console.log('platDomLogicBegin begin');
}/*con*/
/*aaa*/platDomLogicBegin()/*aaa*/