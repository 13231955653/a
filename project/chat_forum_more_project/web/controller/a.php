<?php
/**
 *
 * 读取静态资源控制器
 *
 */
if (!isset($_GET['v']) || !$_GET['v']) {
    header('HTTP/1.1 404 Not Found');
    return;
}
$sVerify = $_GET['v'];

function verify ($sVerify = '') {
    if (!$sVerify) {
        return false;
    }
    
    $sRandStr = mb_substr($sVerify, 0, 1);
    $aArr = explode('_', $sVerify);
    $sMd5Str = mb_substr($aArr[0], 1, 32);
    $sRequestTime = $aArr[1];
    
    if ($_SERVER['REQUEST_TIME'] - $sRequestTime > 30) {
        return false;
    }
    
    $sVerify = md5($sRandStr . '_jhj978)_**%42' . $sRequestTime);
    
    return $sMd5Str === $sVerify;
}
if (!verify($_GET['v'])) {
    header('HTTP/1.1 404 Not Found');
    return;
}

if (!isset($_GET['f']) || !$_GET['f']) {
    header('HTTP/1.1 404 Not Found');
    return;
}
$sFile = $_GET['f'];

$sIncrement = isset($_GET['i']) && $_GET['i'] ? $_GET['i'] : '';
$sUpdate = isset($_GET['u']) && $_GET['u'] ? $_GET['u'] : '';
$bFull = isset($_GET['a']) && $_GET['a'] ? true : false;

$sBaseDir = dirname(__DIR__) . DIRECTORY_SEPARATOR;

$sFileType = mb_substr($sFile, -3);
switch ($sFileType) {
    case 'css' :
        $sFileType = 'css';
        break;
    case '.js' :
        $sFileType = 'js';
        break;
    default:
        header('HTTP/1.1 404 Not Found');
        break;
}

$sFile = $sBaseDir . DIRECTORY_SEPARATOR . 'static_resource' . DIRECTORY_SEPARATOR . $sFileType . DIRECTORY_SEPARATOR . $sFile;
$sBaseDir = null;
unset($sBaseDir);

$sFile = str_replace('\\', DIRECTORY_SEPARATOR, $sFile);
$sFile = str_replace('/', DIRECTORY_SEPARATOR, $sFile);
$sFile = str_replace(DIRECTORY_SEPARATOR . DIRECTORY_SEPARATOR, DIRECTORY_SEPARATOR, $sFile);
if (!is_file($sFile)) {
    header('HTTP/1.1 404 Not Found');
    return;
}

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
