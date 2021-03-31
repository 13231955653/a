/*9429d793fa750360*/const aBody = [
    'writeBodyHeader',
    'writeBodyBody',
    'writeBodyFooter',
    'writeBodyLeft',
    'writeBodyRight',
];

const sPublicFootId = 'public_footer';
const sPublicHeaderId = 'public_header';
const sPublicBodyId = 'public_body';
const sPublicLeftId = 'public_left';
const sPublicRightId = 'public_right';

const sUpdateUrlPageKey = '_update_url_page';
const sFooterOnclickTag = 'footer_onclick';/*9429d793fa750360*/

/*637c85dcfd18cc0b*/let bWriteBody = false;
function threeClassBodyDom() {
    for (let i in aBody) {
        if (typeof window[aBody[i]] == 'undefined') {
            setTimeoutFunction('threeClassBodyDom');
            console.log('threeClassBodyDom ' + aBody[i] + ' is undefined, so settimeout retry to threeClassBodyDom ');
            return;
        }
    }

    if (bWriteBody) {
        return;
    }
    bWriteBody = true;

    // console.log('writePublicDom all is defined, so will to do ');

    let s = '';
    for (let i in aBody) {
        s += window[aBody[i]]();

    }
    fatherDom().innerHTML = s;

    // asyn('bindFooterOnclick');
    // asyn('replaceFooterLang');
    requires([sDomFuncJsTag], function () {
        asyn('bindFooterOnclick');

        asyn('replaceLang', sReplaceLangIdType, sPublicFootId);
    });
}/*637c85dcfd18cc0b*/

// /*fe22db3fdcdb5c19*/// let oFooter = '';
// function replaceFooterLang () {
//     // oFooter = oFooter ? oFooter : domById(sPublicFootId);
//     requires([sDomFuncJsTag], function () {
//         asyn('replaceLang', sReplaceLangIdType, sPublicFootId);
//     });
// }/*fe22db3fdcdb5c19*/

/*d6b64dc699029c52*/let aFooterOnclick = [];
function bindFooterOnclick () {
    aFooterOnclick = domByClass(sFooterOnclickTag);
    let i = 0;
    let l = aFooterOnclick.length;
    for (i; i < l; i ++) {
        aFooterOnclick[i].index = i;
        aFooterOnclick[i].onclick = function () {
            uodateUrlPageArg(aFooterOnclick[this.index].getAttribute(sUpdateUrlPageKey));
        };
    }
    // $('#' + sPublicFootId).click(function (event) {
    //     var bt = $(event.target);
    //     console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaaaaaaasqqqqqqqqqqqqqqqq');
    //     console.log("Div Clicked : " + bt.id);
    //     console.log(this);
    // });
}/*d6b64dc699029c52*/

/*c9f4866ae72da3be*/let oBodyHeader = null;
function bodyHeaderDom () {
    oBodyHeader = oBodyHeader ? oBodyHeader : domById(sPublicHeaderId);
    return oBodyHeader;
}
let oBodyBody = null;
function bodyBodyDom () {
    oBodyBody = oBodyBody ? oBodyBody : domById(sPublicBodyId);
    return oBodyBody;
}
let oBodyFooter = null;
function bodyFooterDom () {
    oBodyFooter = oBodyFooter ? oBodyFooter : domById(sPublicFootId);
    return oBodyFooter;
}
let oBodyLeft = null;
function bodyLeftDom () {
    oBodyLeft = oBodyLeft ? oBodyLeft : domById(sPublicLeftId);
    return oBodyLeft;
}
let oBodyRight = null;
function bodyRightDom () {
    oBodyRight = oBodyRight ? oBodyRight : domById(sPublicRightId);
    return oBodyRight;
}/*c9f4866ae72da3be*/

/*16f799f68465dd08*/function writeBodyHeader() {
    if (bodyHeaderDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPublicHeaderId + '">';

    s += '</div>';

    return s;
}/*16f799f68465dd08*/

/*3f7550f47d4e0f87*/function writeBodyBody() {
    if (bodyBodyDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPublicBodyId + '">';

    let a = [
        sForumBodyId,
        sChatBodyId,
        sFriendBodyId,
        sAboutMeBodyId,
        sSettingBodyId,
    ];
    for (let i in a) {
        s += writeMobliePageDom(a[i]);
    }
    // s += writeMobliePageDom(sForumBodyId);
    //
    // s += writeMobliePageDom(sChatBodyId);
    //
    // s += writeMobliePageDom(sFriendBodyId);
    //
    // s += writeMobliePageDom(sAboutMeBodyId);
    //
    // s += writeMobliePageDom(sSettingBodyId);

    s += '</div>';

    return s;
}/*3f7550f47d4e0f87*/

/*12c3163a66add709*/function writeMobliePageDom (d) {
    if (domById(d)) {
        return '';
    }

    let s = '';
    s += '<div id="' + d + '">';
    s += '</div>';
    return s;
}/*12c3163a66add709*/

/*5c2c1bce49b2a8f9*/function writeBodyFooter() {
    // console.log('fffffffffffffffffffffffffffff');
    if (bodyFooterDom()) {
        // console.log('ttttttttttttttttttt');
        return '';
    }
    // console.log('bbbbbbbbbbbbbb');

    let s = '';
    s += '<div id="' + sPublicFootId + '">';

    s += '<ul>';

    let a = [
        sForumPage,
        sChatPage,
        sFriendPage,
        sAboutMePage,
        sSettingPage,
    ];
    for (let i in a) {
        s += writeOneFooter(a[i]);
    }

    // s += writeOneFooter(sForumPage);
    //
    // s += writeOneFooter(sChatPage);
    //
    // s += writeOneFooter(sFriendPage);
    //
    // s += writeOneFooter(sAboutMePage);
    //
    // s += writeOneFooter(sSettingPage);

    s += '</ul>';

    s += '</div>';

    // console.log(s);
    // replaceDomLang(sReplaceLangIdType, f);
    return s;
}
function writeOneFooter (d = '') {
    let id = d + sFootTag + sFootLiSuffix;
    if (domById(id)) {
        return '';
    }

    let l = d + sFootTag;

    let s = '';
    s += '<li id="' + id + '" class="' + sFootTag + '">';
    // s += '<a href="javascript:void(0);" onclick="' + aFooterAction[d] + '">';
    s += '<a href="javascript:void(0);" ' + sUpdateUrlPageKey + '="' + d + '" class="' + sFooterOnclickTag + '">';
    s += '<span class="' + sReLangClass + '" id="' + l + '">';
    s += '</span>';
    s += '</a>';
    s += '</li>';

    return s;
}/*5c2c1bce49b2a8f9*/

/*c04f1262ec9a1e75*/function writeBodyLeft () {
    if (bodyLeftDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPublicLeftId + '">';

    s += '</div>';

    return s;
}/*c04f1262ec9a1e75*/

/*d86f6d0f01d165ef*/function writeBodyRight () {
    if (bodyRightDom()) {
        return '';
    }

    let s = '';
    s += '<div id="' + sPublicRightId + '">';

    s += '</div>';

    return s;
}/*d86f6d0f01d165ef*/

/*b85177e4aecead95*/function updateActiveFooter () {
    // let sPage = getNowPage();
    let f = domById(getNowPage() + sFootTag + sFootLiSuffix);
    if (!f) {
        console.log('afterLoadPageJs f is null, so no to do');
        return false;
    }
    // console.log('afterLoadPageJs f is true, so to do');

    let o = document.getElementsByClassName(sFootTag);
    if (o.length) {
        let p = new RegExp('\\s+' + sActiveFootTag,'gm');
        for (let i in o) {
            if (!o[i].className) {
                continue;
            }

            o[i].className = o[i].className.toString().replace(p, '');
        }
    }
    f.className += ' ' + sActiveFootTag;

    let t = setTimeout(function () {
        clearTimeout(t);

        changeDomFatherOpacity(true);
    }, 0);

    // let z = setTimeout(function () {
    //     clearTimeout(z);
    //
    //     repeatedlyPage(getUrlArgs(sUrlAddressPageKey));
    // }, 0);
}/*b85177e4aecead95*/

/*b7cf1f44259f6ad5*/function platformBegin () {
    console.log('5555555555555555555platformBegin');
    // asyn('showPlatformShade');

    // asyn('clearIndexShade');
}/*b7cf1f44259f6ad5*/
