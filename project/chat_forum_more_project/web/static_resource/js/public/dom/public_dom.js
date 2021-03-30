/*6ba4d8ef878f4609*/let oBaseShade = '';/*6ba4d8ef878f4609*/

/*16da63640be0a4c9*/var sBaseShadeId = 'base_shade';/*16da63640be0a4c9*/

/*f0196c4afb85054e*/let sBaseShadeCenterDomClass = 'base_shade_center';
let sBaseShadeCenterSonDomClass = 'base_shade_center_son';
let sBaseShadeCenterSonClass = 'base_shade_center_sons';
let sBaseShadeCenterSonNowClass = 'base_shade_center_son_now';
/*f0196c4afb85054e*/

/*ab201f54fc997f78*/let sNoticeTitleClass = 'notice_head';
let sNoticeBodyClass = 'notice_body';
let sNoticeFootClass = 'notice_foot';
/*ab201f54fc997f78*/

/*605df86f799e4bd9*//**
 *
 * 写notice页面
 *
 */
let bWriteNotice = false;
function writeNotice () {
    if (bWriteNotice) {
        return;
    }
    bWriteNotice = true;

    let a = [
        sNoticeTitleClass,
        sNoticeBodyClass,
        sNoticeFootClass,
    ];

    let s = '';
    for (let i in a) {
        s += '<div class="' + a[i] + '">';
        if (a[i] !== sNoticeBodyClass) {
            s += '<span id="' + a[i] + '_span" class="' + sReLangClass + '"></span>';
        } else {
            s += '<span id="' + a[i] + '_span"></span>';
        }

        s += '</div>';
    }

    noticeDom().innerHTML = s;

    domById(sNoticeTitleClass + '_span').innerHTML = 'ss';
    domById(sNoticeFootClass + '_span').innerHTML = 'ss';

    requires([sDomFuncJsTag], function () {
        asyn('bindNoticeFoot');

        asyn('replaceLang', sReplaceLangIdType, sDomNoticeId);
    });
}/*605df86f799e4bd9*/
/*28f646c3b0eaccc8*//**
 *
 * 绑定提示信息脚步事件
 *
 */
function bindNoticeFoot () {
    // console.log('zzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaaqqqqqqqqqqqqqqqq');
    // console.log(sNoticeFootClass);
    // console.log(oneDomByClass(sNoticeFootClass));
    oneDomByClass(sNoticeFootClass).onclick = function () {
        asyn('hiddenNotice');
    }
}/*28f646c3b0eaccc8*/

/*4de1e35a389a1e25*/let bWriteShade = false;
function writeShades () {
    if (bWriteShade) {
        return;
    }
    bWriteShade = true;

    let a = [
        sBaseShadeId,
    ];

    let s = '';
    for (let i in a) {
        // s += '<div id="' + a[i] + '" class="' + sShadeClass + ' ' + sInvisibleClass + '">';
        s += '<div id="' + a[i] + '" class="' + sInvisibleClass + '">';

        s += '<div class="' + sBaseShadeCenterDomClass + '">';
        s += writeLoadAnimation();
        s += '</div>';

        s += '</div>';
    }

    let o = shadeDom();
    o.innerHTML = s;

    requires([sFuncJsTag], function () {
        // replaceClassNameToShow(o);
        asyn('replaceClassNameToShow', o);
    })
}
function baseShades () {
    oBaseShade = oBaseShade ? oBaseShade : domById(sBaseShadeId);
    return oBaseShade;
}/*4de1e35a389a1e25*/

/*4de1e35a389a1e25*//**
 *
 * 读取等待条
 *
 */
function writeLoadAnimation () {
    if (!iWinWidth) {
        winSize();
    }

    let z = iFontSize;

    let w = parseInt(iWinWidth) - parseInt(z * 2);

    let m = parseInt(z * 0.5);
    let l = parseInt(z * 1.5) + m;

    let n = Math.ceil(w / l) - 1;

    let i = 0;
    let s = '<div class="' + sBaseShadeCenterSonDomClass + '" style="width:' + (l * n - m)  + 'px;">';
    for (i; i < n; i++) {
        s += '<span class="' + sBaseShadeCenterSonClass + '"></span>';
    }
    s += '</div>';

    return s;
}/*4de1e35a389a1e25*/

/*baee8d2085edcee0*/function domBegin () {
    console.log('444444444444444444444domBegin');
}/*baee8d2085edcee0*/
