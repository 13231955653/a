/*eec5415451591df6*//**
 *
 * 替换dom语言
 *
 * @param p 传入第二参数的类型 type string id/class/tag
 * @param d 需要替换语言的dom的 id/class/tag type sting
 */
function replaceDomLang (p = '', d = '') {
    if (!p || !d) {
        // console.log('replaceDomLang p or d is null, so no to do ');
        return;
    }

    // if (typeof bLoadFunctionJs == 'undefined') {
    //     console.log('replaceDomLang bLoadFunctionJs is false, so settimtoue retry ');
    //     setTimeoutFunction('replaceDomLang', p, d);
    //     return;
    // }

    replaceLang(p, d);
}
/**
 *
 * 替换dom语言
 *
 * @param p 传入第二参数的类型 type string id/class/tag
 * @param d 需要替换语言的dom的 id/class/tag type sting
 */
function replaceLang (p = '', d = '') {
    console.log('zzzzzzzzzzzzzzzzzzzzooooooooooqqqqqqqqqqiiiiiiiiiiiiissssssss');
    console.log(p);
    console.log(d);
    if (!p || !d) {
        return;
    }
    console.log('zzzzzzzzzzzzzzzzzzzzooooooooooqqsssssssssssqqqqqqqqiiiiiiiiiiiiissssssss');

    if (typeof aLang == 'undefined') {
        setTimeoutFunction('replaceLang', p, d);
        return;
    }
    console.log('zzzzzzzzzzzzzzzzzzzzooooooooooqqdddddddddddsssssssssssqqqqqqqqiiiiiiiiiiiiissssssss');

    let o = false;
    switch (p) {
        case sReplaceLangIdType :
            o = domById(d);
            break;
        case sReplaceLangClassType :
            o = domByClass(d);
            break;
    }

    console.log(o);
    if (!o) {
        setTimeoutFunction('replaceLang', p, d);
        return;
    }
    console.log('zzzzzzzzzzzsdsssssssszzzzzzzzzooooooooooqqdddddddddddsssssssssssqqqqqqqqiiiiiiiiiiiiissssssss');

    console.log(sReLangClass);
    let s = o.getElementsByClassName(sReLangClass);
    // if (!s.length) {
    //     setTimeoutFunction('replaceLang', p, d);
    //     return;
    // }
    console.log(s);
    for (let i in s) {
        s[i].innerHTML = typeof aLang[s[i].id] != 'undefined' ? aLang[s[i].id] : aLang['lang_err'];
    }
}
function replaceLangs () {
    if (typeof window['aLang'] === 'undefined') {
        setTimeoutFunction('replaceLangs');
        return;
    }

    let a = bodyDom().getElementsByClassName(sReLangClass);
    if (!a.length) {
        return false;
    }

    let s = '';
    for (let i in a) {
        s = typeof a[i].id != 'undefined' ? a[i].id : 'error';
        s = typeof aLang[s] != 'undefined' ? aLang[s] : aLang['error'];
        a[i].innerHTML = s;
    }
}/*eec5415451591df6*/

/*e91048f9066a0cb4*//**
 *
 * 根据class 获取节点
 *
 * @param o 查找的dom type dom object
 * @param c class name type string
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
}/*e91048f9066a0cb4*/

/*f08e820a220ce9b2*//**
 *
 * 获取对象样式规则信息，IE下使用currentStyle
 *
 * @param o 对象 dom type object
 * @param s 样式 type string
 * @returns {string}
 */
function getStyle (o, s) {
    return o.currentStyle ? o.currentStyle[s] : getComputedStyle(o,false)[s];
}/*f08e820a220ce9b2*/

/*85dc3fa0c694bcb0*//**
 *
 * 修改 page  dom father 透明度
 *
 * @param b 显示或隐藏  bool true 显示  false 隐藏
 */
function changeDomFatherOpacity (b = false) {
    // console.log('修改 page dom father opacity');
}/*85dc3fa0c694bcb0*/

/*5e0bd59639a733a0*//**
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

    replaceClassNameToShow(o);

    o.style.filter = 'alpha(opacity:' + 0 + ')';
    o.style.opacity = 0;

    animates(o, {opacity: 100}, iSpeed, function () {
    });
}
function hiddenNotice () {
    let o = noticeDom();

    o.style.filter = 'alpha(opacity:' + 100 + ')';
    o.style.opacity = 1;
    o.className += ' ' + sVisibleClass;

    animates(o, {opacity: 0}, iSpeed, function () {
        replaceClassNameToHidden(o);
    });
}/*5e0bd59639a733a0*/

/*8d46b84ff4622bf4*//**
 *
 * 在 j 之前插入 新节点o
 *
 * @param o 新节点 type dom object
 * @param j 要插入哪个节点之前 type dom object
 */
function insertBefores (o, j) {
    o.parentNode[0].insertBefore(o, j);
}/*8d46b84ff4622bf4*/

/*163e8f3a539e7f75*//**
 *
 * 根据tag 获取节点
 *
 * @param c
 * @returns {boolean}
 */
function domByTag (c) {
    let o = oBodyDom.getElementsByTagName(c);
    return o.length > 0 ? o : false;
}/*163e8f3a539e7f75*/

/*ca17d35b59f8062c*//**
 *
 * 修改最大级父状态，是否显示或隐藏
 *
 * @param b 显示或隐藏 type bool true 显示
 */
function changeBodyStatus (b = true) {
    let h = b ? sVisibleClass : sInvisibleClass;

    let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
    let p2 = new RegExp('\\s*' + sVisibleClass,'gm');

    let o = bodyDom();
    let s = o.className;
    s = s.replace(p1, '');
    s = s.replace(p2, '');

    o.className = s ? s + ' ' + h : h;
}/*ca17d35b59f8062c*/

/*3db2ab832db6559f*/function showBaseShade () {
    if (aShades[sBaseShadeId]) {
        setTimeoutFunction('showBaseShade');
        return;
    }

    let o = baseShades();
    if (!o) {
        setTimeoutFunction('showBaseShade');
        return;
    }

    requires([sStrFunc], function () {
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
}/*3db2ab832db6559f*/

/*dac55309121d59cf*/let aShades = [];
function showShade (o = false) {
    replaceClassNameToShow(o);

    o.style.filter = 'alpha(opacity:' + 0 + ')';
    o.style.opacity = 0;

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
function clearShade (o = false) {
    o.style.filter = 'alpha(opacity:' + 100 + ')';
    o.style.opacity = 1;
    o.className += ' ' + sVisibleClass;

    animates(o, {opacity: 0}, iSpeed, function () {
        replaceClassNameToHidden(o);

        aShades[o.id] = false;

        asyn('clearShades', o.id);
    });
}/*dac55309121d59cf*/
/*b60da723c82a7f1e*//**
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
}/*b60da723c82a7f1e*/
/*9c98598f92998834*//**
 *
 * 根据显示的遮罩层不同显示不同遮罩
 *
 * @param d
 */
function showShades (d) {
    switch (d) {
        case sBaseShadeId :
            requires([sFuncJsTag], function () {
                asyn('baseShade');
            });
            break;
    }
}/*9c98598f92998834*/
/*97da65db36a14a6e*//**
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
}/*97da65db36a14a6e*/

/*3befb3e2ebbedb3c*/function domFunctionBegin () {
    console.log('3333333333333333333domFunctionBegin');
}/*3befb3e2ebbedb3c*/
