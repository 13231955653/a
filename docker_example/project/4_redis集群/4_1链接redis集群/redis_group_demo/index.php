<?php
require_once './config.php';
require_once './include.php';
require_once './RedisTool.php';

//echo 5;
//$_POST['act'] = 'get';
//$_POST['key'] = 'a';
//var_dump($_POST);
//return;

$aReturnData = [];
if (!isset($_POST['md5']) || $_POST['md5'] !== MD5_STRING) {
    $aReturnData['status'] = 0;
    echo json_encode($aReturnData);
    return false;
}

if (!isset($_POST['act']) || !in_array($_POST['act'], REDIS_ACTION)) {
    $aReturnData['status'] = 2;
    $aReturnData['data_explain'] = 'act no allow';
    echo json_encode($aReturnData);
    return false;
}

if (!isset($_POST['key'])) {
    $aReturnData['status'] = 3;
    $aReturnData['data_explain'] = 'key no allow';
    echo json_encode($aReturnData);
    return false;
}

if (
    $_POST['key'] === 'set'
    &&
    (
        !isset($_POST['value'])
        ||
        $_POST['value'] === ''
    )
) {
    $aReturnData['status'] = 4;
    $aReturnData['data_explain'] = 'value no allow';
    echo json_encode($aReturnData);
    return false;
}

//$client1 = new RedisTool (false);
//var_dump($client1->get('a'));
////return;

$sPerfixString = isset($_POST['REDIS_PERFIX']) && $_POST['REDIS_PERFIX'] ? $_POST['REDIS_PERFIX'] : REDIS_PERFIX;
$client = new RedisTool (true, REDIS_PERFIX);

$aReturnData['status'] = 1;
//echo '----------';
//var_dump($_POST['key']);
switch ($_POST['act']) {
//    case 'keys' :
//        $aReturnData['data'] = $client->keys('*');
//        break;
//    case 'keys_left_x_data' :
//        $aData = $client->keys(mb_substr($_POST['key'], -1) === '*' ? $_POST['key'] : $_POST['key'] . '*');
//        if (count($aData)) {
//            foreach ($aData as $k => $v) {
//                $aData[$k] = $client->get(str_replace($sPerfixString . MARK_STRING, '', $v));
//            }
//        }
//        $aReturnData['data'] =  $aData;
//        break;
//    case 'keys_right_x_data' :
//        $aData = $client->keys(mb_substr($_POST['key'], 0, 1) === '*' ? $_POST['key'] : '*' . $_POST['key']);
//        if (count($aData)) {
//            foreach ($aData as $k => $v) {
//                $aData[$k] = $client->get(str_replace($sPerfixString . MARK_STRING, '', $v));
//            }
//        }
//        $aReturnData['data'] =  $aData;
//        break;
//    case 'keys_all_x_data' :
//        $sKey = mb_substr($_POST['key'], 0, 1) === '*' ? $_POST['key'] : '*' . $_POST['key'];
//        $sKey = mb_substr($sKey, -1) === '*' ? $sKey : $sKey . '*';
//        $aData = $client->keys($sKey);
//        if (count($aData)) {
//            foreach ($aData as $k => $v) {
//                $aData[$k] = $client->get(str_replace($sPerfixString . MARK_STRING, '', $v));
//            }
//        }
//        $aReturnData['data'] =  $aData;
//        break;
//    case 'set' :
//        $aReturnData['data'] = $client->set($_POST['key'], $_POST['value']);
//        break;
//    case 'setnx' :
//        $aReturnData['data'] = $client->setnx($_POST['key'], $_POST['value']);
//        break;
//    case 'setex' :
//        $aReturnData['data'] = $client->setex($_POST['key'], isset($_POST['life_time']) ? $_POST['life_time'] : REDIS_KET_DAFULT_LIFE_TIME, $_POST['value']);
//        break;
//    case 'exists' :
//        $aReturnData['data'] = $client->exists($_POST['key']);
//        break;
    case 'get' :
        $aReturnData['data'] = $client->get($_POST['key']);
        break;
    case 'incr' :
        $aReturnData['data'] = $client->incr($_POST['key']);
        break;
    case 'hmset' :
        $aReturnData['data'] = $client->hmset($_POST['key'], $_POST['data']);
        break;
    case 'hkeys' :
        $aReturnData['data'] = $client->hKeys($_POST['key']);
        break;
    case 'hvals' :
        $aReturnData['data'] = $client->hVals($_POST['key']);
        break;
    default:
        $aReturnData['status'] = 9999;
        $aReturnData['data_explain'] = 'no case ' . $_POST['act'];
        break;
}

//echo 6;
echo json_encode($aReturnData);
