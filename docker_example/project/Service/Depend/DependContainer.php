<?php
/**
 * 依赖容器
 */
namespace Service\Depend;

use ToolClass\ToolFather;

class DependContainer
{
    private static $sDatabaseDepend = 'database';
    private static $sSqlSafeDepend = 'sqlSafe';
    private static $sJsonDepend = 'json';
    private static $sDatabaseTool = 'databaseTool';
    private static $sException = 'exception';
    private static $sServer = 'server';
    private static $sTime = 'time';
    private static $sHook = 'hook';
    private static $sFile = 'file';
    private static $sChineseStringCache = 'chineseStringCache';
    private static $sCache = 'cache';
    private static $sChineseStringModelService = 'chineseStringModelService';
    private static $sArrayService = 'arrayService';
    private static $sPdoService = 'pdoService';
    private static $sPinYinWithVoice = 'pinYinWithVoice';

    public static function pinYinWithVoice ()
    {
        return self::$sPinYinWithVoice;
    }


    public static function pdo ()
    {
        return self::$sPdoService;
    }

    public static function array ()
    {
        return self::$sArrayService;
    }

    public static function chineseStringModelService ()
    {
        return self::$sChineseStringModelService;
    }

    public static function cache ()
    {
        return self::$sCache;
    }

    public static function chineseStringCache ()
    {
        return self::$sChineseStringCache;
    }

    public static function file ()
    {
        return self::$sFile;
    }

    public static function hook ()
    {
        return self::$sHook;
    }

    public static function time ()
    {
        return self::$sTime;
    }

    public static function server ()
    {
        return self::$sServer;
    }

    public static function exception ()
    {
        return self::$sException;
    }

    public static function databaseTool ()
    {
        return self::$sDatabaseTool;
    }

    public static function json ()
    {
        return self::$sJsonDepend;
    }

    public static function sqlSafe ()
    {
        return self::$sSqlSafeDepend;
    }

    public static function database ()
    {
        return self::$sDatabaseDepend;
    }

    public static function depend ( string $sDepend = '')
    {
        if (is_numeric($sDepend) || !$sDepend) {
//            $sServerDepengName = DependContainer::server();
//            $oServerDepend = Ioc::resolve($sServerDepengName);
//
//            $sExceptionDepengName = DependContainer::exception();
//            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);
//            $oExceptionDepend->throwException(
//                $oServerDepend->response(
//                    [
//                        $oServerDepend->errorStatus(),
//                        $oServerDepend->returnError(
//                            'depend container error 1'
//                        )
//                    ]
//                )
//            );
//            return FALSE;
            return ToolFather::throwError('depend container error 1');
        }

        $sClass = '';
        switch ($sDepend) {
            case 'pinYinWithVoice' :
                $sClass = '\Service\Depend\Strings\String\PinYinWithVoice';
                break;
            case 'database' :
                $sClass = '\Service\Depend\Database\Database';
                break;
            case 'sqlSafe' :
                $sClass = '\Service\Depend\Database\SqlSafe';
                break;
            case 'json' :
                $sClass = '\Service\Depend\Json\Json';
                break;
            case 'databaseTool' :
                $sClass = '\Service\Depend\Database\DatabaseTool';
                break;
            case 'pdoService' :
                $sClass = '\Service\Depend\Database\Pdo';
                break;
            case 'exception' :
                $sClass = '\Service\Depend\Exception\Exception';
                break;
            case 'server' :
                $sClass = '\Service\Depend\Server\Server';
                break;
            case 'time' :
                $sClass = '\Service\Depend\Date\Time';
                break;
            case 'hook' :
                $sClass = '\Service\Depend\Hook\Hook';
                break;
            case 'file' :
                $sClass = '\Service\Depend\File\File';
                break;
            case 'chineseStringCache' :
                $sClass = '\Service\Depend\Strings\String\ChineseStringCache';
                break;
            case 'cache' :
                $sClass = '\Service\Depend\Cache\Cache';
                break;
            case 'chineseStringModelService' :
                $sClass = '\Service\Depend\Strings\String\ChineseStringModel';
                break;
            case 'arrayService' :
                $sClass = '\Service\Depend\Arrays\Arrays';
                break;
            default :
                if (DEBUG) {
                    var_dump($sDepend);
                }
//                $sServerDepengName = DependContainer::server();
//                $oServerDepend = Ioc::resolve($sServerDepengName);
//
//                $sExceptionDepengName = DependContainer::exception();
//                $oExceptionDepend = Ioc::resolve($sExceptionDepengName);
//                $oExceptionDepend->throwException(
//                    $oServerDepend->response(
//                        [
//                            $oServerDepend->errorStatus(),
//                            $oServerDepend->returnError(
//                                'depend container error 2'
//                            )
//                        ]
//                    )
//                );
//                return FALSE;
                return ToolFather::throwError('depend container error 2');
                break;
        }

        if (!$sClass) {
            if (DEBUG) {
                var_dump($sDepend);
            }
//            $sServerDepengName = DependContainer::server();
//            $oServerDepend = Ioc::resolve($sServerDepengName);
//
//            $sExceptionDepengName = DependContainer::exception();
//            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);
//            $oExceptionDepend->throwException(
//                $oServerDepend->response(
//                    [
//                        $oServerDepend->errorStatus(),
//                        $oServerDepend->returnError(
//                            'depend container error 3'
//                        )
//                    ]
//                )
//            );
//            return FALSE;
            return ToolFather::throwError('depend container error 3');
        }

        $sFile = __ROOT_DIR__ . str_replace('\\', DIRECTORY_SEPARATOR, $sClass) . '.php';
        if (!is_file($sFile)) {
            if (DEBUG) {
                var_dump($sFile);
            }

//            $sServerDepengName = DependContainer::server();
//            $oServerDepend = Ioc::resolve($sServerDepengName);
//
//            $sExceptionDepengName = DependContainer::exception();
//            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);
//            $oExceptionDepend->throwException(
//                $oServerDepend->response(
//                    [
//                        $oServerDepend->errorStatus(),
//                        $oServerDepend->returnError(
//                            'depend container error 4'
//                        )
//                    ]
//                )
//            );
//            return FALSE;
            return ToolFather::throwError('depend container error 4');
        }

        return $sClass;
    }
}
