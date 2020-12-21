<?php

namespace Hook;

use ToolClass\Log\Exception;

class Hook
{
    private static $aHook = [];
    private static $aHookObject = [];

    public static $sHookActionFeild = 'action';
    public static $sHookResFeild = 'res';

    public static $sAdminLoginClass = 'WriteAdminAction';
    public static $sAdminLoginFunction = 'writeAdminAction';

    public static $sChineseFontClass       = 'string\ChineseFont\ChineseFont';
    public static $sAfterUpdateChineseFont = 'afterUpdateChineseFont';

    public static function chineseFont ()
    {
        return self::$sChineseFontClass;
    }
    public static function afterUpdateChineseFont ()
    {
        return self::$sAfterUpdateChineseFont;
    }

    public static
    function retrunHook ()
    {

    }

    public static
    function addHook ($sHookClassName, $sHookFuncName)
    {
//        var_dump('aaaaaa');
//        echo 2;
//        var_dump($sHookClassName, $sHookFuncName);
        if (isset(self::$aHook[ $sHookClassName ]) && in_array($sHookFuncName, self::$aHook[ $sHookClassName ])) {
            Exception::throwException('hook alerady use');
            return FALSE;
        }

        $sHookFile = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'Hook' . DIRECTORY_SEPARATOR . ucfirst($sHookClassName) . '.php';
//        var_dump($sHookFile);
        if (!is_file($sHookFile)) {
            Exception::throwException('no hook file ' .  ucfirst($sHookClassName));
            return FALSE;
        }

//        require_once $sHookFile;
//        var_dump($sHookFile);
//        var_dump($sHookClassName);
        $sHookClassName = 'Hook\\' . $sHookClassName;

        if (!class_exists($sHookClassName)) {
            Exception::throwException('no hook class ' . $sHookClassName);
            return FALSE;
        }

//        $oHook = new $sHookClassName();
//        self::$aHookObject[$sHookClassName] = $oHook;

        if (!method_exists($sHookClassName, $sHookFuncName)) {
            Exception::throwException('no hook func ' . $sHookClassName . '  ' . $sHookFuncName);
            return FALSE;
        }

        self::$aHook[ $sHookClassName ][] = $sHookFuncName;

//        var_dump(self::$aHook);
//        var_dump(self::$aHook);
    }

    public static function listen ($sHookClassName, $sHookFuncName, $aParams = [])
    {
        $sHookClassName = 'Hook\\' . $sHookClassName;
//        var_dump($sHookClassName, $sHookFuncName);
//        return;
        if (!isset(self::$aHook[ $sHookClassName ])) {
            var_dump($sHookClassName);
            Exception::throwException('no hook class1 ' . $sHookClassName);
            return FALSE;
        }

        if (!in_array($sHookFuncName, self::$aHook[ $sHookClassName ])) {
            var_dump($sHookClassName . '  ' . $sHookFuncName);
            Exception::throwException('no hook func1 ' . $sHookClassName . '  ' . $sHookFuncName);
            return FALSE;
        }

//        $aParams = $aParams && !is_array($aParams) ? (array)$aParams : $aParams;

        self::exec($sHookClassName, $sHookFuncName, $aParams);
    }

    private static function exec ($sHookClassName, $sHookFuncName, $aParams = [])
    {
//        $oHook = isset(self::$aHookObject[$sHookClassName]) ?
//            self::$aHookObject[$sHookClassName] : new $sHookClassName();

//        $oHook->$sHookFuncName($aParams);
        $sHookClassName::{$sHookFuncName}($aParams);
    }
}
