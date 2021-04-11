/*cgm*//**
 *
 * 创建 DocumentFragment
 *
 * @returns {DocumentFragment}
 */
function myFragment () {
    return document.createDocumentFragment();
}/*cgm*/

/*cgz*/function createDiv () {
    return myCeeateElement('div');
}/*cgz*/
/*agz*/function createUl () {
    return myCeeateElement('ul');
}/*agz*/
/*age*/function createLi () {
    return myCeeateElement('li');
}/*age*/
/*zzz*/function createA () {
    return myCeeateElement('a');
}/*zzz*/
/*ccc*/function createSpan () {
    return myCeeateElement('span');
}/*ccc*/
/*czz*/function myCeeateElement (s) {
    return document.createElement(s);
}/*czz*/
/*ddd*/function incrZIndex () {
    iNowIndex += parseInt(1);
    return iNowIndex;
}/*ddd*/
/*eee*//**
 *
 * 显示或隐藏dom zindex 递增
 *
 * @param a dom object type object
 * @param b 显示或隐藏 type bool true 显示 false 隐藏
 */
function showOrHiddenDom (a, b = false) {
    if (b) {
        a.style.zIndex = incrZIndex();

        a.style.filter = 'alpha(opacity:' + 0 + ')';
        a.style.opacity = 0;

        replaceClassNameToShow(a);
        animates(a, {opacity: 100}, iSpeed, function () {
        });
        return;
    }

    a.style.filter = 'alpha(opacity:' + 100 + ')';
    a.style.opacity = 100;

    replaceClassNameToHidden(a);
    animates(a, {opacity: 0}, iSpeed, function () {
        a.style.zIndex = 0;
    });
}/*eee*/

/*agm*/function funcDomBegin () {
    console.log('funcDomBegin');
}/*agm*/