<?php
if (!isset($_GET['v'])) {
    return '';
}

$sFile = $_GET['v'];
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

//    $preg = '/((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/';
//    $sValue = preg_replace($preg, '', $sValue);
    
//    $preg = '/\s*\=\s*/';
//    $sValue = preg_replace($preg, '=', $sValue);
//    $preg = '/\s*\=\=\s*/';
//    $sValue = preg_replace($preg, '==', $sValue);
//    $preg = '/\s*\=\=\=\s*/';
//    $sValue = preg_replace($preg, '===', $sValue);
//    $preg = '/\s*\!\=\s*/';
//    $sValue = preg_replace($preg, '!=', $sValue);
//    $preg = '/\s*\!\=\=\s*/';
//    $sValue = preg_replace($preg, '!==', $sValue);
//
//    $preg = '/\s*\+\=\s*/';
//    $sValue = preg_replace($preg, '+=', $sValue);
//    $preg = '/\s*\-\=\s*/';
//    $sValue = preg_replace($preg, '-=', $sValue);
//    $preg = '/\s*\*\=\s*/';
//    $sValue = preg_replace($preg, '*=', $sValue);
//
//    $preg = '/\s*\?\s*/';
//    $sValue = preg_replace($preg, '?', $sValue);
//    $preg = '/\s*\:\s*/';
//    $sValue = preg_replace($preg, ':', $sValue);
//    $preg = '/\s*\;\s*/';
//    $sValue = preg_replace($preg, ';', $sValue);
//    $preg = '/\s*\,\s*/';
//    $sValue = preg_replace($preg, ',', $sValue);
//
//    $preg = '/\s*\+\s*/';
//    $sValue = preg_replace($preg, '+', $sValue);
//    $preg = '/\s*\-\s*/';
//    $sValue = preg_replace($preg, '-', $sValue);
//    $preg = '/\s*\*\s*/';
//    $sValue = preg_replace($preg, '*', $sValue);
//    $preg = '/\s*\/\s*/';
//    $sValue = preg_replace($preg, '/', $sValue);
//    $preg = '/\s*\%\s*/';
//    $sValue = preg_replace($preg, '%', $sValue);
//
//    $preg = '/\s*\(\s*/';
//    $sValue = preg_replace($preg, '(', $sValue);
//    $preg = '/\s*\)\s*/';
//    $sValue = preg_replace($preg, ')', $sValue);
//
//    $preg = '/\s*\{\s*/';
//    $sValue = preg_replace($preg, '{', $sValue);
//    $preg = '/\s*\}\s*/';
//    $sValue = preg_replace($preg, '}', $sValue);
//
//    $preg = '/\s*\[\s*/';
//    $sValue = preg_replace($preg, '[', $sValue);
//    $preg = '/\s*\]\s*/';
//    $sValue = preg_replace($preg, ']', $sValue);

//    $sValue = str_replace(["\r\n", "\r", "\n"], ' ', $sValue);

//    $preg = '/\s{2,}/';
//    $sValue = preg_replace($preg, ' ', $sValue);
    
    return $sValue;
}
//存用户上次访问时间戳
//    不存在
//        全量返回静态文件
//    存在
//        读取新添内容
//            可根据时间戳读取新添加内容
//        读取修改内容
//            怎么知道用户上次登录之后的修改
//                暂时修改过的版本号时间戳存首个引入js文件内
function compressCss (& $sValue = '') {
    if (!$sValue) {
        $sValue = '';
        return $sValue;
    }
    
    $preg = '/((?:\/\*(?:[^*|^version_begin_\d+|^version_end_\d+]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/';
    preg_match_all($preg, $sValue, $aAnnotation);
    if (count($aAnnotation) && isset($aAnnotation[0]) && count($aAnnotation[0])) {
        $aNeedReplace = $aAnnotation[0];
        $sValue = str_replace($aNeedReplace, '', $sValue);
    }
    $aAnnotation = null;
    unset($aAnnotation);
    
    $preg = '/\s*\:\s*/';
    $sValue = preg_replace($preg, ':', $sValue);
    $preg = '/\s*\;\s*/';
    $sValue = preg_replace($preg, ';', $sValue);
    $preg = '/\s*\,\s*/';
    $sValue = preg_replace($preg, ',', $sValue);

    $preg = '/\s*\(\s*/';
    $sValue = preg_replace($preg, '(', $sValue);
    $preg = '/\s*\)\s*/';
    $sValue = preg_replace($preg, ')', $sValue);

    $preg = '/\s*\{\s*/';
    $sValue = preg_replace($preg, '{', $sValue);
    $preg = '/\s*\}\s*/';
    $sValue = preg_replace($preg, '}', $sValue);

    $sValue = str_replace(["\r\n", "\r", "\n"], ' ', $sValue);

    $preg = '/\s{1,}/';
    $sValue = preg_replace($preg, ' ', $sValue);
    
//    var_dump($sValue);
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

if (!$sIncrement) {
    echo $sValue;
    
    $sValue = null;
    unset($sValue);
    return;
}

$sIncrement = null;
unset($sIncrement);
