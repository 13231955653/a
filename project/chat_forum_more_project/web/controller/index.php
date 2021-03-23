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

function compressCss (& $sValue = '') {
    if (!$sValue) {
        $sValue = '';
        return $sValue;
    }
    
//    $preg = '/((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/';
//    $sValue = preg_replace($preg, '', $sValue);
    
//    $preg = '/\s*\:\s*/';
//    $sValue = preg_replace($preg, ':', $sValue);
//    $preg = '/\s*\;\s*/';
//    $sValue = preg_replace($preg, ';', $sValue);
//    $preg = '/\s*\,\s*/';
//    $sValue = preg_replace($preg, ',', $sValue);
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
    
//    $sValue = str_replace(["\r\n", "\r", "\n"], ' ', $sValue);
    
//    $preg = '/\s{1,}/';
//    $sValue = preg_replace($preg, ' ', $sValue);
    
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
