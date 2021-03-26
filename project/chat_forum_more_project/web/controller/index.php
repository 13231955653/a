<?php
if (!isset($_GET['f'])) {
    return '';
}

$sFile = $_GET['f'];
$sIncrement = isset($_GET['z']) && $_GET['z'] ? $_GET['z'] : '';

$sBaseDir = dirname(__DIR__) . DIRECTORY_SEPARATOR;

$sFile = str_replace(DIRECTORY_SEPARATOR . DIRECTORY_SEPARATOR, DIRECTORY_SEPARATOR, $sBaseDir . $sFile);
$sBaseDir = null;
unset($sBaseDir);

function compress ($sType = '', & $sValue = '') {
    if (!in_array($sType, ['js', 'css']) || !$sValue) {
        $sValue = '';
        return $sValue;
    }
    
    switch ($sType) {
        case 'js' :
            $sValue = compressJs($sValue);
            break;
        case 'css' :
            $sValue = compressCss($sValue);
            break;
    }
    
    return $sValue;
}

function compressJs (& $sValue = '') {
    if (!$sValue) {
        $sValue = '';
        return $sValue;
    }
    
    return $sValue;
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
function compressCss (& $sValue = '') {
    if (!$sValue) {
        $sValue = '';
        return $sValue;
    }
    
    return $sValue;
}

$sType = explode('.', $sFile);
$sType = isset($sType[1]) && $sType[1] ? strtolower($sType[1]) : '';

$sValue = file_get_contents($sFile);
$sFile = null;
unset($sFile);

$sValue = compress($sType, $sValue);
$sType = null;
unset($sType);

function fullData () {

}

if (!$sIncrement) {
    echo $sValue;
    
    $sValue = null;
    unset($sValue);
    return;
}

$sFullLoadStaticResourceTag = 'full';
switch ($sIncrement) {
    case $sFullLoadStaticResourceTag :
            echo $sValue;
        
            $sValue = null;
            unset($sValue);
            return;
        break;
}

$sIncrement = null;
unset($sIncrement);
