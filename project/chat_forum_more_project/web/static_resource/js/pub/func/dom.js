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
/*czz*/function myCeeateElement (s) {
    return document.createElement(s);
}/*czz*/

/*agm*/function funcDomBegin () {
    console.log('funcDomBegin');
}/*agm*/