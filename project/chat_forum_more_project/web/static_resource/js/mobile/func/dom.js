/*xfr*//**
 *
 * 替换dom语言
 *
 * @param p replace lang dom type dom object
 */
function replaceLang (p = '') {
    let a = p.getElementsByClassName(sReLangClass);
    for (let i in a) {
        a[i].innerHTML = typeof aLang[a[i].id] != 'undefined' ? aLang[a[i].id] : aLang['lang_err'];
    }

    a = i = null;
}/*xfr*/
/*cwp*//**
 *
 * 根据class 获取节点
 *
 * @param c class name type string
 * @param o 查找的dom type dom object
 * @returns {boolean}
 */
function domByClass (c, o = '') {
    o = o ? o : bodyDom();
    o = o.getElementsByClassName(c);
    return o.length > 0 ? o : false;
}
function oneDomByClass (c) {
    let o = domByClass(c);
    return o ? o[0] : false;
}
/**
 *
 * 根据tag 获取节点
 *
 * @param c
 * @returns {boolean}
 */
function domByTag (c) {
    let o = oBodyDom.getElementsByTagName(c);
    return o.length > 0 ? o : false;
}/*cwp*/
/*qjt*//**
 *
 * 获取对象样式规则信息，IE下使用currentStyle
 *
 * @param o 对象 dom type object
 * @param s 样式 type string
 * @returns {string}
 */
function getStyle (o, s) {
    return o.currentStyle ? o.currentStyle[s] : getComputedStyle(o,false)[s];
}/*qjt*/
// /*rnz*//**
//  *
//  * 修改 page  dom father 透明度
//  *
//  * @param b 显示或隐藏  bool true 显示  false 隐藏
//  */
// function changeDomFatherOpacity (b = false) {
//     // console.log('修改 page dom father opacity');
// }/*rnz*/
/*dgw*//**
 *
 * 显示当前页面body
 *
 */
function showNowPageBody (p) {
    let a = sHiddenClass;
    let b = sShowClass;

    let c = sBodySonsClass;
    $('.' + c).addClass(a);
    $('.' + c).removeClass(b);

    let f = sBBodyD + p;
    $('#' + f).removeClass(a);
    $('#' + f).addClass(b);
}/*dgw*/
/*rcj*//**
 *
 * 修改当前页面footer样式
 *
 * @returns {boolean}
 */
function updateActiveFoot (z) {
    let a = sFootTag;
    let b = sActiveFootTag;
    let f = domById(sBFootD + z + a + sFootLiSuffix);
    if (!f) {
        console.log('afterLoadPageJs f is null, so no to do');
        return false;
    }

    let o = domByClass(a);
    if (o.length) {
        let p = new RegExp('\\s+' + b,'gm');
        for (let i in o) {
            if (!o[i].className) {
                continue;
            }

            o[i].className = o[i].className.toString().replace(p, '');
        }
    }
    f.className += ' ' + b;
}/*rcj*/
/*xkv*//**
 *
 * 用户提示信息
 *
 * @param m 提示信息 type string
 * @returns {boolean}
 */
function notice (m = '') {
    if (!m) {
        return false;
    }

    domById(sNoticeBodyClass + '_span').innerHTML = m;

    let o = noticeDom();

    console.log('dasdasdqq');
    console.log(o);
    replaceClassNameToShow(o);

    o.style.filter = 'alpha(opacity:' + 0 + ')';
    o.style.opacity = 0;

    animates(o, {opacity: 100}, iSpeed, function () {
    });

    o = m = null;
}
function hiddenNotice () {
    let o = noticeDom();

    o.style.filter = 'alpha(opacity:' + 100 + ')';
    o.style.opacity = 1;
    o.className += ' ' + sVisibleClass;

    animates(o, {opacity: 0}, iSpeed, function () {
        replaceClassNameToHidden(o);
    });
}/*xkv*/
/*zzm*//**
 *
 * 在 j 之前插入 新节点o
 *
 * @param o 新节点 type dom object
 * @param j 要插入哪个节点之前 type dom object
 */
function insertBefores (o, j) {
    o.parentNode[0].insertBefore(o, j);
}/*zzm*/
/*qet*//**
 *
 * 修改最大级父状态，是否显示或隐藏
 *
 * @param b 显示或隐藏 type bool true 显示
 */
function changeBodyStatus (b = true) {
    let h = b ? sVisibleClass : sInvisibleClass;

    let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
    let p2 = new RegExp('\\s*' + sVisibleClass,'gm');
s
    let o = bodyDom();
    let s = o.className;
    s = s.replace(p1, '');
    s = s.replace(p2, '');

    o.className = s ? s + ' ' + h : h;
}/*qet*/
/*jbd*/function showBaseShade () {
    if (aShades[sBaseShadeId]) {
        setTimeoutFunction('showBaseShade');
        return;
    }

    let o = baseShades();
    if (!o) {
        setTimeoutFunction('showBaseShade');
        return;
    }

    requires([sStrFunc, sStyleFuncJ], function () {
        asyn('showShade', o);
        // showShade(o);
    });
}
/**
 *
 * 清除 未读取到 index js 遮罩层
 *
 */
function clearBaseShade () {
    if (!aShades[sBaseShadeId]) {
        setTimeoutFunction('clearBaseShade');
        return;
    }

    let o = baseShades();
    if (!o) {
        setTimeoutFunction('clearBaseShade');
        return;
    }

    requires([sStrFunc], function () {
        asyn('clearShade', o);
        // clearShade(o);
    });
}/*jbd*/
/*sdv*/let aShades = [];
function showShade (o) {
    replaceClassNameToShow(o);

    changeDomOpacity(o, false);

    animates(o, {opacity: 100}, iSpeed, function () {
        aShades[o.id] = true;

        asyn('showShades', o.id);
    });
}
/**
 *
 * 清除 遮罩层
 *
 * @param o 遮罩层 dom
 */
function clearShade (o) {
    // o.style.filter = 'alpha(opacity:' + 100 + ')';
    // o.style.opacity = 1;
    changeDomOpacity(o, true);
    o.className += ' ' + sVisibleClass;

    animates(o, {opacity: 0}, iSpeed, function () {
        replaceClassNameToHidden(o);

        aShades[o.id] = false;

        asyn('clearShades', o.id);
    });
}/*sdv*/
/*dsa*//**
 *
 * 根据显示的遮罩层不同显示不同遮罩
 *
 * @param d
 */
function clearShades (d) {
    switch (d) {
        case sBaseShadeId :
            bTimeOutBaseShade = false;
            break;
    }
}/*dsa*/
/*ocx*//**
 *
 * 根据显示的遮罩层不同显示不同遮罩
 *
 * @param d
 */
function showShades (d) {
    switch (d) {
        case sBaseShadeId :
            requires([sFuncJ], function () {
                asyn('baseShade');
            });
            break;
    }
}/*ocx*/
/*sfx*//**
 *
 * 展示 base shade
 *
 */
function baseShade () {
    let o = domByClass(sBaseShadeCenterSonClass);
    if (!o) {
        return;
    }

    let l = o.length;

    iNowBaseShadeTag = 0;
    asyn('timeOutBaseShade', o, l);
}
/**
 *
 * 定时器展示shade
 *
 * @param o shade 对象 type shade dom array
 * @param l shade dom 长度
 * @param b 是否第一次
 */
let iNowBaseShadeTag = 0;
let iTimeOutBaseShadeTime = 180;
let bTimeOutBaseShade = true;
function timeOutBaseShade (o, l) {
    if (!bTimeOutBaseShade) {
        return;
    }

    let n = sBaseShadeCenterSonNowClass;
    if (typeof jQuery != 'undefined') {
        $(o).removeClass(n);
        $(o[iNowBaseShadeTag % l]).addClass(n);
    } else {
        let g = new RegExp('\s+');
        for (let i in o) {
            o[i].className = o[i].className.replace(n, '').replace(g, ' ');
        }
        o[iNowBaseShadeTag].className = o[iNowBaseShadeTag].className + ' ' + n;
    }

    iNowBaseShadeTag += parseInt(1);
    let t = setTimeout(function () {
        clearTimeout(t);

        timeOutBaseShade (o, l, false);
    }, iTimeOutBaseShadeTime);
}/*sfx*/
/*sbb*//**
 *
 * js动画
 *
 * @param o 对象 dom  type object
 * @param s 样式 type json
 * @param p 改变样式速度 type number
 * @param c 回调函数 type string
 */
function animates (o = false, s = false, p = false, c = false) {
    p = p ? p : iSpeed;
    if (typeof jQuery != 'undefined') {
        $(o).animate(s, p, c);
        return;
    }

    if (!o || !s || !p) {
        // console.log(o);
        // console.log(s);
        // console.log(p);
        // console.log('animates o or s or p is null');
        return;
    }

    // console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    // console.log(bJquery);

    // setTimeoutFunction('animates');
    let t = setTimeout(function () {
        clearTimeout(t);

        animates(o, s, p, c);
    }, aTimer['animates']);

    // jsAnimate (o, s, parseInt(p / 20));
}/*sbb*/
/*jci*/function mebileDomBegin () {
    console.log('3333333333333333333mebileDomBegin');
}/*jci*/
/*aaa*/mebileDomBegin()/*aaa*/
