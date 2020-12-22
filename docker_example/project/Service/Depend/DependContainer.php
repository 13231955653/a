<?php
/**
 * 依赖容器
 */
namespace Service\Depend;

use ToolClass\Log\Exception;
use ToolClass\Server\Server;

class DependContainer
{
    private static $sDatabaseDepend = 'database';
    private static $sSqlSafeDepend = 'sqlSafe';
    private static $sJsonDepend = 'json';
    private static $sDatabaseTool = 'databaseTool';
    private static $sException = 'exception';
    private static $sServer = 'server';

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

//    private static $sDepend = '';

//    public static function __construct (string $sDepend = '')
//    {
//        if (is_numeric($sDepend) || !$sDepend) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError(
//                        'depend container what error'
//                    )
//                )
//            );
//            return FALSE;
//        }
//
//        $this->sDepend = $sDepend;
//    }
//
    public static function depend ( string $sDepend = '')
    {
        if (is_numeric($sDepend) || !$sDepend) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'depend container error 1'
                    )
                )
            );
            return FALSE;
        }

        switch ($sDepend) {
            case 'database' :
                return '\Service\Depend\Database\Database';
                break;
            case 'sqlSafe' :
                return '\Service\Depend\Database\SqlSafe';
                break;
            case 'json' :
                return '\Service\Depend\Json\Json';
                break;
            case 'databaseTool' :
                return '\Service\Depend\Database\DatabaseTool';
                break;
            case 'exception' :
                return '\Service\Exception\Exception';
                break;
            case 'server' :
                return '\Service\Server\Server';
                break;
            default :
                if (DEBUG) {
                    var_dump($sDepend);
                }
                Exception::throwException(
                    Server::response(
                        Server::errorStatus(),
                        Server::returnError(
                            'depend container error 2'
                        )
                    )
                );
                return FALSE;
                break;
        }
    }
}
