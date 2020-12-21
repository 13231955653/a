<?php
/**
 * 拼音分词示例
 */
namespace Yurun\Util;

require_once dirname(__DIR__) . '/config/config.php';

if (
    !isset($_POST['source'])
    ||
    $_POST['source'] === ''
    ||
    !isset($_POST['md5'])
) {
    $aReturnData = [];
    $aReturnData['interval_tag'] = WORD_SPLIT_TAG;
    $aReturnData['after_pin_yin_split'] = [];

    echo json_encode($aReturnData);
    return false;
}

require_once dirname(__DIR__) . '/vendor/autoload.php';

use \Yurun\Tool\CurlTool;

$aValue = [];
$aValue['act'] = 'get';
$aValue['key'] = PING_YIN_SPLIT_KEY;
$aValue['md5'] = REDIS_API_KEY;
$rReturn = CurlTool::instance(REDIS_GROUP_ADDRESS)->post($aValue, false);
$rReturn = json_decode($rReturn, true);
if (!isset($rReturn['status']) || !isset($rReturn['data'])) {
    return false;
}
if (!$rReturn['data']) {
    return false;
}

if (
    $_POST['md5'] !== $rReturn['data']
) {
    $aReturnData = [];
    $aReturnData['interval_tag'] = WORD_SPLIT_TAG;
    $aReturnData['after_pin_yin_split'] = [];

    echo json_encode($aReturnData);
    return false;
}

Chinese::setMode(MODE);
ini_set('memory_limit',MEMORY_LIMIT);

$aReturnData = [];
$aReturnData['interval_tag'] = WORD_SPLIT_TAG;
// 拼音分词
$aTmp = Chinese::splitPinyin($_POST['source']);
array_unique($aTmp);
$iNum = isset($_POST['num']) && $_POST['num'] > 0 ? (int)$_POST['num'] : PIN_YIN_SPLIT_DEFAULT_NUM;
while (count($aTmp) > $iNum) {
    array_pop($aTmp);
}
$aReturnData['after_pin_yin_split'] = $aTmp;
echo json_encode($aReturnData);
