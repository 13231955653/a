/*ysn*//**
 *
 * 更新url forum classify 参数
 *
 * a forum level move tag  type int
 * p classify 更新为 p type string
 *
 * @type {Array}
 */
function updateUrlForumClassify (a = '', p = '') {
    requires([sEncodeJ], function () {
        let t = p + sLangTitlePostfix;

        updateUrlArg (sUrlAddressClassifyKey, p, t);
        updateUrlArg (sUrlAddressForumLevelMoveTagKey, a, t);

        setBrowserTitle(t);
    });
}/*ysn*/

/*ysn*/function funcForumBegin() {
    console.log('funcForumBegin begin');
}/*ysn*/

/*ysn*/funcForumBegin()/*ysn*/
