<?php
/**
 * 汉字简繁互转示例
 */

namespace Yurun\Util;

if (
    !isset($_POST['source'])
    ||
    $_POST['source'] === ''
    ||
    !isset($_POST['md5'])
) {
    $aReturnData = [];
    $aReturnData['traditional'] = [];
    $aReturnData['simplified'] = [];

    echo json_encode($aReturnData);
    $aReturnData = null;
    unset($aReturnData);
    return false;
}

require_once dirname(__DIR__) . '/config/config.php';
require_once dirname(__DIR__) . '/vendor/autoload.php';

use \Yurun\Tool\CurlTool;
//use \Yurun\Util\Chinese\Pinyin;

$aValue = [];
$aValue['act'] = 'get';
$aValue['key'] = TRADITIONAL_SIMPLIFIED_API_KEY;
$aValue['md5'] = REDIS_API_KEY;
$rReturn = CurlTool::instance(REDIS_GROUP_ADDRESS)->post($aValue, false);
$rReturn = json_decode($rReturn, true);
if (!isset($rReturn['status']) || !isset($rReturn['data'])) {
    $aValue = $rReturn = null;
    unset($aValue, $rReturn);
    return false;
}
if (!$rReturn['data']) {
    $aValue = $rReturn = null;
    unset($aValue, $rReturn);
    return false;
}

if (
    $_POST['md5'] !== $rReturn['data']
) {
    $aReturnData = [];
    $aReturnData['traditional'] = [];
    $aReturnData['simplified'] = [];

    echo json_encode($aReturnData);
    $aReturnData = null;
    unset($aReturnData);
    return false;
}

Chinese::setMode(MODE);
ini_set('memory_limit',MEMORY_LIMIT);


// 设为性能模式
// Chinese::setMode('Memory');
// 性能模式占用内存大，如果提示内存不足，请扩大内存限制
// ini_set('memory_limit','256M');

// 设为通用模式，支持 PDO_SQLITE 的情况下为默认
// Chinese::setMode('SQLite');

// 设为兼容模式，不支持 PDO_SQLITE 的情况下为默认
// Chinese::setMode('JSON');

//$_POST['source'] = '中华人民共和国！恭喜發財！1111111';
$aReturnData = [];
$_POST['convert'] = isset($_POST['convert']) ? $_POST['convert'] : '';
switch ($_POST['convert']) {
    case 'simplified' :
        $aReturnData['data']['simplified'] = Chinese::toSimplified($_POST['source']);
        $aReturnData['data']['traditional'] = [];
        break;
    case 'traditional' :
        $aReturnData['data']['simplified'] = [];
        $aReturnData['data']['traditional'] = Chinese::toTraditional($_POST['source']);
        break;
    default:
        $aReturnData['data']['traditional'] = Chinese::toTraditional($_POST['source']);
        $aReturnData['data']['simplified'] = Chinese::toSimplified($_POST['source']);
        break;
}

echo json_encode($aReturnData);
