/*6ba4d8ef878f4609*/let oBaseShade = '';/*6ba4d8ef878f4609*/

// /*16da63640be0a4c9*/var sBaseShadeId = 'base_shade';/*16da63640be0a4c9*/

/*f0196c4afb85054e*/let sBaseShadeCenterDomClass = 'b_shade_cent';
let sBaseShadeCenterSonDomClass = 'b_shade_cent_son';
let sBaseShadeCenterSonClass = 'b_shade_cent_sons';
let sBaseShadeCenterSonNowClass = 'b_shade_cent_son_now';
/*f0196c4afb85054e*/

/*ab201f54fc997f78*/let sNoticeShowBodyC = 'notice_show';
let sNoticeTitleC = 'notice_head';
let sNoticeBodyC = 'notice_body';
let sNoticeFootC = 'notice_foot';
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
        sNoticeTitleC,
        sNoticeBodyC,
        sNoticeFootC,
    ];

    let s = [];
    s.push('<div class="' + sNoticeShowBodyC + '">');
    for (let i in a) {
        s.push('<div class="' + a[i] + '">');

        if (a[i] !== sNoticeBodyC) {
            s.push('<span id="' + a[i] + '_span" class="' + sReLangC + '"></span>');
        } else {
            s.push('<span id="' + a[i] + '_span"></span>');
        }

        s.push('</div>');
    }
    s.push('</div>');

    noticeDom().innerHTML = s.join('');

    // domById(sNoticeTitleC + '_span').innerHTML = 'ss';
    // domById(sNoticeFootC + '_span').innerHTML = 'ss';

    requires([sMobileDomFuncJ], function () {
        asyn('bindNoticeFoot');

        // asyn('replaceLang', sReplaceLangIdType, sDomNoticeId);
        asyn('replaceLang', noticeDom());
    });

    a = i = s = null;
}/*605df86f799e4bd9*/
/*28f646c3b0eaccc8*//**
 *
 * 绑定提示信息脚步事件
 *
 */
function bindNoticeFoot () {
    oneDomByClass(sNoticeFootC).onclick = function () {
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

    let s = [];
    for (let i in a) {
        s.push('<div id="' + a[i] + '" class="' + sInvisibleClass + '">');

        s.push('<div class="' + sBaseShadeCenterDomClass + '">');
        s.push(writeLoadAnimation());
        s.push('</div>');

        s.push('</div>');
    }

    let o = shadeDom();
    o.innerHTML = s.join('');

    console.log('sass');
    console.log(o);
    requires([sFuncJ], function () {
        asyn('replaceClassNameToShow', o);
    })

    o = i = a = s = null;
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

    let w = parseInt(shadeDom().offsetWidth) - parseInt(z * 2);

    let m = parseInt(z * 0.5);
    let l = parseInt(z * 1.5) + m;

    let n = Math.ceil(w / l) - 1;

    let i = 0;
    let s = [];
    s.push('<div class="' + sBaseShadeCenterSonDomClass + '" style="width:' + (l * n - m)  + 'px;"><ul>');
    for (i; i < n; i++) {
        s.push('<li class="' + sBaseShadeCenterSonClass + '"></li>');
    }
    s.push('</ul></div>');

    return s.join('');
}/*4de1e35a389a1e25*/

/*baee8d2085edcee0*/function domBegin () {
    console.log('444444444444444444444domBegin');
}/*baee8d2085edcee0*/

/*aaa*/domBegin()/*aaa*/
