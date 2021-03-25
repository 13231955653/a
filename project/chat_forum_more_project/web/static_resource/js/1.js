

/**
 *
 * 设置css地址跟版本号
 *
 */
let sResetCssFile = '';
let sPublicCssFile = '';
function setCssPathAndVersion () {
    let sResetCss = '/static_resource/css/public/reset.css';
    let sPublicCss = '/static_resource/css/public/' + sPlatformTag + '/public.css';

    // aCssVersion[sResetCss] = 'zzzzzzz';
    // aCssVersion[sPublicCss] = 'yyyyyy';

    sResetCssFile = incrementArg('css', sResetCss);
    sPublicCssFile = incrementArg('css', sPublicCss);
}
/*increment_version_25*/

/*increment_version_32*/
/**
 *
 * 加载用户自定义主题css
 *
 * @param c
 * @returns {boolean}
 */
let sPersonalizedCssFile = '';
let bLoadPersonalizedCss = false;
function loadPersonalizedCss (c = false) {
    c = c ? c : queryUserPersonalizedColor();

    if (bLoadPersonalizedCss) {
        return true;
    }
    bLoadPersonalizedCss = true;

    let sPersonalizedColor = c;

    if (!checkRequestJsCssLimit('css', 'loadPersonalizedCss')) {
        return false;
    }

    let sPersonalizedCss = '/static_resource/css/personalized/color/' + sPersonalizedColor + '.css';
    // aCssVersion[sPersonalizedCss] = 'ggggggggd';
    sPersonalizedCssFile = incrementArg('css', sPersonalizedCss);

    let t = setTimeout(function () {
        clearTimeout(t);

        initStaticResource(sPersonalizedCssFile, 'css', 'afterloadPersonalizedCss');
    }, 0);

    setTimeoutFunction('loadPersonalizedCss', c);
}
/**
 *
 * 加载用户自定义主题css 回调函数
 *
 */
function afterloadPersonalizedCss () {
    bLoadPersonalizedCss = false;
}
//加载静态文件=====================
/*increment_version_32*/

/*increment_version_33*/


//节点=================
/*increment_version_35*/

/*increment_version_36*/
//时间------------------


/*increment_version_36*/
/*increment_version_37*/
//时间===============
/*increment_version_37*/

/*increment_version_38*/
//localstorage---------------------
// 从localstorage 获取 用户自定义主题
function queryUserPersonalizedColor () {
    if (sPersonlizedColor) {
        return sPersonlizedColor;
    }

    let c = myStorage.get(sLocalstorgaeUserPersonalizedColorKey);
    if (!c) {
        c = iDefaultUserPersonalizedColor;

        asyn('setPersonlizedColor', c, false);
    }

    return c;
}
/*increment_version_38*/
/*increment_version_41*/
/**
 *
 * 设置用户自定义主题
 *
 * @param c localstorage key string
 * @param c localstorage key string
 * @returns {boolean}
 */
function setPersonlizedColor (c = '', n = false) {
    if (!c) {
        return false;
    }

    myStorage.set(sLocalstorgaeUserPersonalizedColorKey, c);

    if (n) {
        loadPersonalizedCss(c);
    }
}











