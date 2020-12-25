<?php

namespace ToolClass\Cache;

//use ToolClass\Log\ErrorInformAdminThrow;
//use ToolClass\Log\Exception;
//use ToolClass\Server\Server;

require_once __ROOT_DIR__
             . DIRECTORY_SEPARATOR
             . 'define'
             . DIRECTORY_SEPARATOR
             . 'redis.php';

use ToolClass\ToolFather;
class Cache extends ToolFather
{
    public static $sLogType = 'redis_error';

    private static $client = FALSE;

    private static
    function redisClusterObject ()
    {
        try {
            self::$client = !self::$client ? new \RedisCluster (
                NULL,
                REDIS_GROUP_IP_PORT_LIST
            ) : self::$client;
            return self::$client;
        } catch ( \Exception $e ) {
            ErrorInformAdminThrow::recordErrorAndInformAdmin(
                5,
                $e->getMessage()
            );
            return FALSE;
        }
    }

    private static
    function setKey (
        $sKey
    ) {
        if ( !$sKey ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return FALSE;
            return self::throwError('no redis key');
        }

        return self::keyStyle(RedisKey::setKeyPerfix() . str_replace(
                              RedisKey::setKeyPerfix(),
                              '',
                              $sKey
                          ));
    }

    public static function keyStyle ($sKey = '')
    {
        if (!$sKey) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return FALSE;
            return self::throwError('no redis key');
        }

        return strtoupper($sKey);
    }

    public static
    function del (
        $otherKeys
    ) {
        if ( is_array( $otherKeys ) ) {
            foreach ( $otherKeys as $k => $v ) {
                if ( !self::exists( $v ) ) {
                    unset( $otherKeys[ $k ] );
                    continue;
                }

                $otherKeys[ $k ] = self::setKey( $v );
            }

            if ( !$otherKeys ) {
                return TRUE;
            }
        } else {
            if ( !self::exists( $otherKeys ) ) {
                return TRUE;
            }

            $otherKeys = self::setKey( $otherKeys );
        }

        return self::redisClusterObject()->del( $otherKeys );
    }

    public static
    function lockForDatabase (
        $sLockPrefix = '',
        $sLockSuffix = 0
    ) {
        if ( !$sLockPrefix || !$sLockSuffix ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return FALSE;
            return self::throwError('no redis key');
        }

        $sKey = self::setKey( $sLockPrefix . '-' . $sLockSuffix . '-lock' );

        if ( self::redisClusterObject()->setnx( $sKey, 1 )
             && self::expire(
                $sKey,
                60
            ) ) {
            return TRUE;
        }

        return FALSE;
    }

    public static
    function unlockForDatabase (
        $sLockPrefix = '',
        $sLockSuffix = 0
    ) {
        if ( !$sLockPrefix || !$sLockSuffix ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return FALSE;
            return self::throwError('no redis key');
        }

        $sKey = self::setKey( $sLockPrefix . '-' . $sLockSuffix . '-lock' );

        $oRedis = self::redisClusterObject();

        if ( !$oRedis->exists( $sKey ) ) {
            return TRUE;
        }

        if ( !$oRedis->del( $sKey ) ) {
            return TRUE;
        }

        return FALSE;
    }

    public static
    function incr (
        $sKey
    ) {
        if ( !$sKey ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return;
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->incr( self::setKey( $sKey ) );
    }

    public static
    function exists (
        $sKey
    ) {
        if ( !$sKey ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return;
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->exists( self::setKey( $sKey ) );
    }

    public static
    function set (
        $sKey,
        $sValue,
        $iTimeout = NULL
    ) {
        if ( !$sKey || !$sValue ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key or value' )
//                )
//            );
//            return;
            return self::throwError('no redis key or value');
        }

        return self::redisClusterObject()->set(
            self::setKey( $sKey ),
            $sValue,
            $iTimeout
        );
    }

    public static
    function get (
        $sKey
    ) {
        if ( !$sKey ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return;
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->get( self::setKey( $sKey ) );
    }


    public static
    function expire (
        $sKey,
        $ttl
    ) {
        if ( !$sKey || !$ttl ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key or ttl' )
//                )
//            );
//            return;
            return self::throwError('no redis key or ttl');
        }

        return self::redisClusterObject()->expire(
            self::setKey( $sKey ),
            $ttl
        );
    }


    public static
    function hSet (
        $sKey = FALSE,
        $sHashKey = '',
        $sValue = ''
    ) {
        if ( !$sKey || !$sHashKey || !$sValue ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'hset error' )
//                )
//            );
//            return FALSE;
            return self::throwError('hset error');
        }

        return self::redisClusterObject()->hSet(
            self::setKey( $sKey ),
            $sHashKey,
            $sValue
        );
    }

    public static
    function hMset (
        $sKey = FALSE,
        $aData = []
    ) {
        if ( !$sKey || !$aData ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key or data' )
//                )
//            );
//            return FALSE;
            return self::throwError('no redis key or data');
        }

        //        var_dump($sKey);
        return self::redisClusterObject()->hMset(
            self::setKey( $sKey ),
            $aData
        );
    }

    public static
    function hKeys (
        $sKey
    ) {
        if ( !$sKey ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return FALSE;
            return self::throwError('no redis key');
        }

//        var_dump($sKey);
        //        var_dump(self::setKey($sKey));
        return self::redisClusterObject()->hKeys( self::setKey( $sKey ) );
    }

    public static
    function hGet (
        $sKey,
        $sField
    ) {
        if ( !$sKey ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return;
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->hGet(
            self::setKey( $sKey ),
            $sField
        );
    }

    public static
    function hGetAll (
        $sKey
    ) {
        if ( !$sKey ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return;
            return self::throwError('no redis key');
        }

        //        var_dump(self::setKey($sKey));
        return self::redisClusterObject()->hGetAll( self::setKey( $sKey ) );
    }

    public static
    function keys (
        $sKey
    ) {
        if ( !$sKey ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return FALSE;
            return self::throwError('no redis key');
        }

//        var_dump(self::setKey( $sKey ));
        return self::redisClusterObject()->keys( self::setKey( $sKey ) );
    }

    public static
    function lPsuh (
        $sKey,
        $sJsonData = ''
    ) {
        if ( !$sKey || !$sJsonData ) {
            if (DEBUG) {
                var_dump( $sKey, $sJsonData );
            }
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key or sJsonData' )
//                )
//            );
//            return;
            return self::throwError('no redis key or sJsonData');
        }

        //        $sJsonData = Json::analyJson($sJsonData, TRUE) ? $sJsonData : Json::toJson($sJsonData);

        return self::redisClusterObject()->lPush(
            self::setKey( $sKey ),
            $sJsonData
        );
    }

    public static
    function rPop (
        $sKey = ''
    ) {
        if ( !$sKey ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return;
            return self::throwError('no redis key');
        }

        //        $sJsonData = self::redisClusterObject()->rPop(self::setKey($sKey));
        //        return $sJsonData ? Json::toArray($sJsonData) : false;
        return self::redisClusterObject()->rPop( self::setKey( $sKey ) );
    }

    public static
    function lLen (
        $sKey = ''
    ) {
        if ( !$sKey ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no redis key' )
//                )
//            );
//            return;
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->lLen( self::setKey( $sKey ) );
    }
}
