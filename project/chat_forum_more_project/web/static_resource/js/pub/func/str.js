/*c4624490d7417821*//**
 *
 * 是否json 数据格式
 *
 * @param s 待检查字符串
 * @returns {boolean}
 */
function isJson (s = '') {
    if (!s) {
        return false;
    }

    if (typeof s == 'sString') {
        try {
            JSON.parse(s);
            console.log('zzzzzzz');
            return true;
        } catch(e) {
            console.log('ssssss');
            return false;
        }
    }
}/*c4624490d7417821*/

/*99505154d59d5848*//**
 *
 * 随机字符串
 *
 * @param l 随机字符串 长度 type int
 * @returns {string|string}
 */
function randStr (l) {
    l = l || 32;
    let s = sRandString;
    let a = s.length,
        n = '';
    for (let i = 0; i < l; i++) {
        n += s.charAt(Math.floor(Math.random() * a));
    }

    return n;
}/*99505154d59d5848*/

/*a3b0b94a5c5f285b*//**
 *
 * json 转成 字符串
 *
 * @param s 需要转换的json type json
 * @returns {Array|any}
 */
function jsonConvertFormatForReadNumberKey (s = '') {
    if (!s) {
        return [];
    }

    return eval('(' + s + ')');
}/*a3b0b94a5c5f285b*/

/*24bccc14e8e7cf3e*//**
 *
 * 字符串首字母大写
 *
 * @param s 带处理的字符串 type string
 * @returns {string|boolean}
 */
function ucfirst (s = '') {
    if (!s) {
        // console.log('ucfirst s is null, so no to do');
        return false;
    }

    return s.charAt(0).toUpperCase() + s.slice(1)
}/*24bccc14e8e7cf3e*/

/*9232a75eac993a71*//**
 *
 * 检查是否字符串格式
 *
 * @param s 需检查的字符串 type string
 * @returns {boolean}
 */
function isRealString (s = '') {
    if (s && (typeof s === 'string' || typeof s === 'number')) {
        return true;
    }

    // console.log('isRealString s is not real string');
    return false;
}/*9232a75eac993a71*/

/*77421bd31f4c1b07*//**
 *
 * 反转字符串
 *
 * @param s 需反转的字符串 type string
 * @returns {string}
 */
function reverseString (s = '') {
    if (!s) {
        return;
    }

    return s.split('').reverse().join('');
}/*77421bd31f4c1b07*/

/*aedff16c4f9e628f*//**
 *
 * 替换dom的class为显示的classname
 *
 * @param o 要替换的dom
 */
function replaceClassNameToShow (o = '') {
    if (!o) {
        console.log('dasdasd');
        return;
    }

    let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
    let p2 = new RegExp('\\s*' + sVisibleClass,'gm');

    let s = o.className;
    s = s.replace(p1, '');
    s = s.replace(p2, '');

    o.className = s ? s + ' ' + sVisibleClass : sVisibleClass;
}
/**
 *
 * 替换dom的class为隐藏的classname
 *
 * @param o 要替换的dom
 */
function replaceClassNameToHidden (o) {
    let p1 = new RegExp('\\s*' + sInvisibleClass,'gm');
    let p2 = new RegExp('\\s*' + sVisibleClass,'gm');

    let s = o.className;
    s = s.replace(p1, '');
    s = s.replace(p2, '');
    o.className = s ? s + ' ' + sInvisibleClass : sInvisibleClass;
}/*aedff16c4f9e628f*/

/*7713f03367e412a3*//**
 *
 * 生成自定义 uuid
 *
 * @returns {string|boolean}
 */
function individuationUuid () {
    // if (typeof window['md5'] == 'undefined') {
    //     return false;
    // }

    let a = individuationUuidUniqueStr();

    while (a.length < iIndividuationUniqueStrMinLength) {
        a += sIndividuationUuidTag + '---' + randStr(1);
    }

    a = md5(a);
    a = a.toLowerCase();

    return a;
}/*7713f03367e412a3*/

/*96bf7d7740d69c3b*/function generateUUID () {
    let d = getMillisecondTime();
    let i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return i;
}/*96bf7d7740d69c3b*/

/*a58c869d881ba45c*//**
 *
 * 生成自定义 uuid 唯一字符串 md5 字符串
 *
 * @returns {string|boolean}
 */
function individuationUuidUniqueStr () {
    let d = sUniqueStrSplitTag;

    let s = [];
    s.push(randStr(iIndividuationUniqueStrLength));
    s.push(d + randNum(iIndividuationUniqueStrNumberMin, iIndividuationUniqueStrNumberMax));
    s.push(d + getMillisecondTime());
    s.push(d + navigatorInfo());
    s.push(d + screenInfo());
    s.push(d + generateUUID());
    s.push(d + userIpInfo());

    s = md5(s.join(''));

    return s;
}/*a58c869d881ba45c*/

/*2a140060a8a71175*//**
 *
 * 按长度切割字符串为数组
 *
 * @param n
 * @returns {Array}
 */
String.prototype.strLengthSplit =function(n){
    let s=this;
    let a=[];
    let l=Math.ceil(s.length/n);
    for(let i=0;i < l;i++){
        if(s.length >= n){
            a.push(s.substring(0,n));
            s=s.substring(n);
        }else{
            a.push(s);
        }
    }
    return a;
}/*2a140060a8a71175*/

/*3befb3e2ebbedb3c*/function stringFunctionBegin () {
    console.log('3333333333333333333stringFunctionBegin');
}/*3befb3e2ebbedb3c*/
