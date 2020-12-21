<?php
/**
 * 汉字转拼音示例
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
    $aReturnData['pin_yin_sound'] = [];

    echo json_encode($aReturnData);
    return false;
}

require_once dirname(__DIR__) . '/vendor/autoload.php';

use \Yurun\Tool\CurlTool;
use \Yurun\Util\Chinese\Pinyin;

$aValue = [];
$aValue['act'] = 'get';
$aValue['key'] = PIN_YIN_API_KEY;
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
    $aReturnData['pin_yin_sound'] = [];
    
    echo json_encode($aReturnData);
    return false;
}

Chinese::setMode(MODE);
ini_set('memory_limit',MEMORY_LIMIT);

$aReturnData = [];
$aReturnData['interval_tag'] = WORD_SPLIT_TAG;
$aTmp = Chinese::toPinyin($_POST['source'], Pinyin::CONVERT_MODE_PINYIN_SOUND);
array_unique($aTmp['pinyinSound']);
$iNum = isset($_POST['num']) && $_POST['num'] > 0 ? (int)$_POST['num'] : MAX_RETURN_NUM;
while (count($aTmp['pinyinSound']) > $iNum) {
    array_pop($aTmp['pinyinSound']);
}

$aReturnData['pin_yin_sound'] = $aTmp['pinyinSound'];
$aTmp = null;
echo json_encode($aReturnData);
