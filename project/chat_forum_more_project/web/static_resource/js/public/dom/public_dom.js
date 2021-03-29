/*6ba4d8ef878f4609*/let oBaseShade = '';/*6ba4d8ef878f4609*/

/*16da63640be0a4c9*/var sBaseShadeId = 'base_shade';/*16da63640be0a4c9*/

/*4de1e35a389a1e25*/let bWriteShade = false;
function writeShades () {
    if (bWriteShade) {
        return;
    }
    bWriteShade = true;

    let a = [
        sBaseShadeId,
    ];

    let o = document.createDocumentFragment();
    let m = '';
    for (let i in a) {
        m = document.createElement('div');
        m.id = a[i];
        m.className = sShadeClass + ' ' + sInvisibleClass;
        if (m) {
            o.appendChild(m);
        }
    }
    asyn('asynAppendShade', o);
}
function asynAppendShade (o) {
    shadeDom().appendChild(o);
}
function baseShades () {
    oBaseShade = oBaseShade ? oBaseShade : domById(sBaseShadeId);
    return oBaseShade;
}/*4de1e35a389a1e25*/

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

    asyn('showShade', o);
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

    asyn('clearShade', o);
}/*3db2ab832db6559f*/

/*dac55309121d59cf*/let aShades = [];
function showShade (o = false) {
    if (typeof window['animates'] == 'undefined') {
        setTimeoutFunction('showShade', o);
        return;
    }

    let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
    let p2 = new RegExp('\\s*' + sVisibleClass,'gm');

    let s = o.className;
    s = s.replace(p1, '');
    s = s.replace(p2, '');

    o.className = s ? s + ' ' + sVisibleClass : sVisibleClass;

    o.style.filter = 'alpha(opacity:' + 0 + ')';
    o.style.opacity = 0;

    animates(o, {opacity: 100}, iSpeed, function () {
        aShades[o.id] = true;
    });
}
/**
 *
 * 清除 遮罩层
 *
 * @param o 遮罩层 dom
 */
function clearShade (o = false) {
    if (typeof window['animates'] == 'undefined') {
        setTimeoutFunction('clearShade', o);
        return;
    }

    o.style.filter = 'alpha(opacity:' + 100 + ')';
    o.style.opacity = 1;
    o.className += ' ' + sVisibleClass;

    animates(o, {opacity: 0}, iSpeed, function () {
        let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
        let p2 = new RegExp('\\s*' + sVisibleClass,'gm');

        let s = o.className;
        s = s.replace(p1, '');
        s = s.replace(p2, '');
        o.className = s ? s + ' ' + sInvisibleClass : sInvisibleClass;

        aShades[o.id] = false;
    });
}/*dac55309121d59cf*/

/*baee8d2085edcee0*/function domBegin () {
    console.log('444444444444444444444domBegin');
}/*baee8d2085edcee0*/
