/*e97f4c94b9080aa6*//**
 *
 * 根据键值删除数组中的值
 *
 * @param a 待删除的数组
 * @param k 要删除的键值
 * @returns {string|*}
 */
function arrayDelValByKey (a = [], k = '') {
    if (!a || !k) {
        // console.log('arrayDelValByKey a or k is null');
        return '';
    }
    for (let i in a) {
        if (i !== k) {
            continue;
        }

        delete a[k];
    }

    return a;
}/*e97f4c94b9080aa6*/

/*efc7f7715bdcafb9*//**
 *
 * 检查数组中是否包含某键
 *
 * @param k 待检查的键
 * @param a 待检查的数组
 * @returns {string|boolean}
 */
function inArrayByKey ( k, a ) {
    for ( let i in a ) {
        if ( i === k ) {
            return i;
        }
    }

    return false;
}/*efc7f7715bdcafb9*/

/*afad128b70d53897*//**
 *
 * 检查数组中是否包含某值
 *
 * @param s 检查的字符串
 * @param aArray 待检查的数组
 * @returns {string|boolean}
 */
function inArray ( s, a ) {
    for (let i in a) {
        if (a[i] === s) {
            return i;
        }
    }

    return false;
}/*afad128b70d53897*/

/*3befb3e2ebbedb3c*/function arrayFunctionBegin () {
    console.log('3333333333333333333arrayFunctionBegin');
}/*3befb3e2ebbedb3c*/

/*aaa*/arrayFunctionBegin()/*aaa*/
