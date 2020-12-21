<?php
require_once 'config.php';

if (
    !isset($_POST['source'])
    ||
    $_POST['source'] === ''
    ||
    !isset($_POST['md5'])
) {
    $aReturnData = [];
    $aReturnData['split_str'] = isset($_POST['source']) ? $_POST['source'] : '';
    $aReturnData['split_tag'] = SPLIT_TAG;

    echo json_encode($aReturnData);
    return false;
}

require_once 'include.php';
require_once 'CurlTool.php';
require_once 'phpanalysis.class.php';

$aValue = [];
$aValue['act'] = 'get';
$aValue['key'] = UNICODE_SPLIT_API_KEY;
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
    $aReturnData['split_str'] = $_POST['source'];
    $aReturnData['split_tag'] = SPLIT_TAG;
    
    echo json_encode($aReturnData);
    return false;
}

if (is_int($_POST['source'])) {
    $aReturnData = [];
    $aReturnData['split_str'] = $_POST['source'];
    $aReturnData['split_tag'] = SPLIT_TAG;

    echo json_encode($aReturnData);
    return false;
}

//岐义处理
//$do_fork = empty($_POST['do_fork']) ? false : true;
$do_fork = true;
//新词识别
//$do_unit = empty($_POST['do_unit']) ? false : true;
$do_unit = true;
//多元切分
//$do_multi = empty($_POST['do_multi']) ? false : true;
$do_multi = false;
//词性标注
//$do_prop = empty($_POST['do_prop']) ? false : true;
$do_prop = false;
//是否预载全部词条
//$pri_dict = empty($_POST['pri_dict']) ? false : true;
$pri_dict = true;

//初始化类
$pa = new PhpAnalysis(CHARSET, CHARSET, $pri_dict, $_POST['source']);

$pa->differMax = $do_multi;
$pa->unitWord = $do_unit;

$pa->StartAnalysis($do_fork);

$okresult = $pa->GetFinallyResult(SPLIT_TAG, $do_prop);

$pa_foundWordStr = $pa->foundWordStr;

$aReturnData = [];
$aReturnData['split_str'] = $okresult;
$aReturnData['split_tag'] = SPLIT_TAG;
$okresult = null;

echo json_encode($aReturnData);
