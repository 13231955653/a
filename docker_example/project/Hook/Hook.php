<?php

namespace Hook;

use Service\Depend\DependContainer;
use Service\Ioc\Ioc;
use ToolClass\Log\Exception;

class Hook
{
    private static $aHook = [];

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
        if (isset(self::$aHook[ $sHookClassName ]) && in_array($sHookFuncName, self::$aHook[ $sHookClassName ])) {
//            Exception::throwException('hook alerady use');
//            return FALSE;
//
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            $sServerDepengName = DependContainer::server();
            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                $oServerDepend->response(
                    $oServerDepend->errorStatus(),
                    $oServerDepend->returnError('hook alerady use')
                )
            );
            return FALSE;
        }

        $sHookFile = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'Hook' . DIRECTORY_SEPARATOR . ucfirst($sHookClassName) . '.php';
        if (!is_file($sHookFile)) {
//            Exception::throwException('no hook file ' .  ucfirst($sHookClassName));
//            return FALSE;
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

//            $sServerDepengName = DependContainer::server();
//            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                'no hook file ' .  ucfirst($sHookClassName)
            );
            return FALSE;
        }

        $sHookClassName = 'Hook\\' . $sHookClassName;

        if (!class_exists($sHookClassName)) {
//            Exception::throwException('no hook class ' . $sHookClassName);
//            return FALSE;
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

//            $sServerDepengName = DependContainer::server();
//            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                'no hook class ' . $sHookClassName
            );
            return FALSE;
        }

        if (!method_exists($sHookClassName, $sHookFuncName)) {
//            Exception::throwException('no hook func ' . $sHookClassName . '  ' . $sHookFuncName);
//            return FALSE;
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

//            $sServerDepengName = DependContainer::server();
//            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                'no hook func ' . $sHookClassName . '  ' . $sHookFuncName
            );
            return FALSE;
        }

        self::$aHook[ $sHookClassName ][] = $sHookFuncName;
    }

    public static function listen ($sHookClassName, $sHookFuncName, $aParams = [])
    {
        $sHookClassName = 'Hook\\' . $sHookClassName;
        if (!isset(self::$aHook[ $sHookClassName ])) {
//            Exception::throwException('no hook class1 ' . $sHookClassName);
//            return FALSE;
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            //            $sServerDepengName = DependContainer::server();
            //            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                'no hook class1 ' . $sHookClassName
            );
            return FALSE;
        }

        if (!in_array($sHookFuncName, self::$aHook[ $sHookClassName ])) {
//            Exception::throwException('no hook func1 ' . $sHookClassName . '  ' . $sHookFuncName);
//            return FALSE;
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            //            $sServerDepengName = DependContainer::server();
            //            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                'no hook func1 ' . $sHookClassName . '  ' . $sHookFuncName
            );
            return FALSE;
        }

        self::exec($sHookClassName, $sHookFuncName, $aParams);
    }

    private static function exec ($sHookClassName, $sHookFuncName, $aParams = [])
    {
        $sHookClassName::{$sHookFuncName}($aParams);
    }
}
