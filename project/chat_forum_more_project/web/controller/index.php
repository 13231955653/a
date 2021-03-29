<?php
if (!isset($_GET['f'])) {
    return '';
}

$sFile = $_GET['f'];
$sIncrement = isset($_GET['i']) && $_GET['i'] ? $_GET['i'] : '';
$sUpdate = isset($_GET['u']) && $_GET['u'] ? $_GET['u'] : '';
$bFull = isset($_GET['a']) && $_GET['a'] ? true : false;

$sBaseDir = dirname(__DIR__) . DIRECTORY_SEPARATOR;

$sFile = str_replace(DIRECTORY_SEPARATOR . DIRECTORY_SEPARATOR, DIRECTORY_SEPARATOR, $sBaseDir . DIRECTORY_SEPARATOR . 'static_resource' . DIRECTORY_SEPARATOR . $sFile);
$sBaseDir = null;
unset($sBaseDir);
if (!is_file($sFile)) {
    return '';
}


//存用户上次访问时间戳
//    存在
//        读取新添内容
//            可根据时间戳读取新添加内容
//        读取修改内容
//            怎么知道用户上次登录之后的修改
//                暂时修改过的版本号时间戳存首个引入js文件内
// 读取静态文件
//      用户上次访问时间
//          获取更新或新增文件

$sType = explode('.', $sFile);
$sType = isset($sType[1]) && $sType[1] ? strtolower($sType[1]) : '';

$sValue = file_get_contents($sFile);
$sFile = $sType = null;
unset($sFile, $sType);

$sReturn = [];
if (
    $bFull
    ||
    (
        !$sIncrement && !$sUpdate
    )
) {
    $sReturn = [
        't' => 'a',
        's' => $sValue,
    ];
    $sValue = null;
    unset($sValue);
    
    echo json_encode($sReturn);
    return;
}

$aRetrunInfo = [];
$reg = '';
$sSplitTag = '_';

$bIncrement = false;
if ($sIncrement) {
    $aIncrement = explode($sSplitTag, $sIncrement);
    foreach ($aIncrement as $v) {
        $reg = '\/\*' . $v . '\*\/' . '(.*?)' . '\/\*'. $v . '\*\/';
        $reg = '/' . $reg . '/ism';
        if (preg_match($reg, $sValue, $matches)) {
            if ($matches && isset($matches[0])) {
                $aRetrunInfo['i'] .= trim($matches[0]);
                $bIncrement = true;
            }
        }
    }
    unset($aIncrement);
    $aIncrement = null;
    
    $sReturn['t'] = 'i';
}
$sIncrement = null;
unset($sIncrement);

$bUpdate = false;
if ($sUpdate) {
    $aUpdate = explode($sSplitTag, $sUpdate);
    foreach ($aUpdate as $k => $v) {
        
        $reg = '\/\*' . $v . '\*\/' . '(.*?)' . '\/\*'. $v . '\*\/';
        $reg = '/' . $reg . '/ism';
        if (preg_match($reg, $sValue, $matches)) {
            if ($matches && isset($matches[0])) {
                $sReturn['g'][$k] = $v;
                
                $aRetrunInfo['u'][$k] = trim($matches[0]);
                $bUpdate = true;
            }
        }
    }
    unset($aUpdate);
    $aUpdate = null;
    
    $sReturn['t'] = 'u';
}
$sUpdate = null;
unset($sUpdate);

if ($bIncrement && $bUpdate) {
    $sReturn['t'] = 'ui';
}

$sReturn['s'] = $aRetrunInfo;

echo json_encode($sReturn);
return;
