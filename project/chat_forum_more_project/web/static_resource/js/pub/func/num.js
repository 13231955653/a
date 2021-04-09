/*aaa*//**
 *
 * 判断是否数字
 *
 * @param a 待检查字符串 type string | int | float
 */
function myIsNaN (a) {
    if (isNaN(a)) {
        return true;
    }

    if (typeof a === 'number') {
        return true;
    }

    if (parseInt(a).toString().length === a.length) {
        return true;
    }

    return false;
}/*aaa*/
/*bbb*/function numBegin () {
    console.log('numBegin');
}/*bbb*/