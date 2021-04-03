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
}
function myCeeateElement (s) {
    return document.createElement(s);
}/*cgz*/

/*agm*/function funcDomBegin () {
    console.log('funcDomBegin');
}/*agm*/