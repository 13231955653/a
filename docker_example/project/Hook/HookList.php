<?php
namespace Hook;

use Hook\Hook;

class HookList
{
    public static function addHook ($sHookClassName = '', $sHookFuncName = '')
    {
//        echo 's';
//        var_dump($sHookClassName);
//        var_dump($sHookFuncName);
        switch ($sHookClassName) {
//            case 'controller\admin\AdminLogin':
////                echo 3;
//                self::adminLoginHook($sHookFuncName);
//                break;
        }

//        var_dump(explode('\\', $sHookClassName));
        switch (explode('\\', $sHookClassName)[1]) {
            case 'home' :
                self::writeUserAction($sHookClassName, $sHookFuncName);
                break;
            case 'admin' :
                self::writeAdminAction($sHookClassName, $sHookFuncName);
                break;
        }
    }

    //    ///////////////////////////////////////////////////////////////////////////////
    private static function writeUserAction ()
    {
        Hook::addHook('WriteUserAction', 'writeUserAction');
    }

    //    ///////////////////////////////////////////////////////////////////////////////
    private static function writeAdminAction ()
    {
        Hook::addHook('WriteAdminAction', 'writeAdminAction');
    }

    private static function adminLoginHook ($sHookFuncName)
    {
        switch ($sHookFuncName) {
//            case 'loginIn':
//                Hook::addHook('AdminLogin', 'afterLoginIn');
//                break;
        }
    }
}
