<?php

namespace middleware;

use ToolClass\Log\Exception;
use ToolClass\Server\Server;

class BeforeMiddleware
{
    private static $aBeforeMiddlewareObject = [
        'middleware\AdminMenu' => 'middleware\AdminMenu', //菜单操作
        'middleware\AdminMiddleware' => 'middleware\AdminMiddleware', //菜单操作
        'middleware\Lang' => 'middleware\Lang', // 语言操作
        'middleware\Test' => 'middleware\Test', //测试
    ];

    public static
    function exec ($sClassName = '', $sFuncName = '')
    {
//        $res = self::beforeCheck();
//        if (!$res) {
//            return $res;
//        }
//        var_dump($sClassName);
//        var_dump($sFuncName);

        $sFile = '';
        $sObjectName = '';
        switch ($sClassName) {
            case 'Admin':
                $sObjectName = 'AdminMiddleware';
                $sFile = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'middleware' . DIRECTORY_SEPARATOR . $sObjectName . '.php';
                break;
            case 'AdminMenu':
                $sObjectName = 'AdminMenu';
                $sFile = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'middleware' . DIRECTORY_SEPARATOR . $sObjectName . '.php';
                break;
            case 'Lang':
                $sObjectName = 'Lang';
                $sFile = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'middleware' . DIRECTORY_SEPARATOR . $sObjectName . '.php';
                break;
            case 'Test':
                $sObjectName = 'Test';
                $sFile = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'middleware' . DIRECTORY_SEPARATOR . $sObjectName . '.php';
                break;
            default:
                var_dump($sClassName);
                return Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'middle no customization' ]
                );
                break;
        }

//        if ($sFile) {
            if (!is_file($sFile)) {
                var_dump($sFile);
//                Exception::throwException('middleware file error');
                return Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'middleware file error' ]
                );
            }

            $sObjectName = 'middleware\\' . $sObjectName;
//            var_dump($sObjectName);

            if (!class_exists($sObjectName)) {
                            var_dump($sObjectName);
//                Exception::throwException('no middle class ' . $sObjectName);
                return Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'no middle class' ]
                );
            }

//            if (isset(self::$aBeforeMiddlewareObject[$sObjectName])) {
//                $oMiddle = self::$aBeforeMiddlewareObject[$sObjectName];
//            } else {
//                $oMiddle = new $sObjectName();
//                self::$aBeforeMiddlewareObject[$sObjectName] = $oMiddle;
//            }

            if (!isset(self::$aBeforeMiddlewareObject[$sObjectName])) {
                var_dump(self::$aBeforeMiddlewareObject);
                var_dump($sObjectName);
                return Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'no middle' ]
                );
            }

            $oMiddle = new $sObjectName();
//            $oMiddle = self::$aBeforeMiddlewareObject[$sObjectName];

            return $oMiddle->exec($sFuncName);
//        }
//
//        return TRUE;
    }
}
