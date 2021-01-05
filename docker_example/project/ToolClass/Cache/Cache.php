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
        string $sKey = ''
    ) {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }

        return self::keyStyle(RedisKey::setKeyPerfix() . str_replace(
                              RedisKey::setKeyPerfix(),
                              '',
                              $sKey
                          ));
    }

    public static function keyStyle (string $sKey = '')
    {
        if (!$sKey) {
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
        string $sLockPrefix = '',
        string $sLockSuffix = ''
    ) {
        if ( !$sLockPrefix || !$sLockSuffix ) {
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
    
    public static function setnx (string $sKey = '', string $sValue = '')
    {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }
    
        if ( !$sValue ) {
            return self::throwError('no redis setnx value');
        }
    
        return self::redisClusterObject()->setnx( self::setKey( $sKey ), $sValue );
    }

    public static
    function unlockForDatabase (
        string $sLockPrefix = '',
        string $sLockSuffix = ''
    ) {
        if ( !$sLockPrefix || !$sLockSuffix ) {
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
        string $sKey = ''
    ) {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->incr( self::setKey( $sKey ) );
    }

    public static
    function exists (
        string $sKey = ''
    ) {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->exists( self::setKey( $sKey ) );
    }

    public static
    function set (
        string $sKey = '',
        string $sValue = '',
        string $iTimeout = ''
    ) {
        if ( !$sKey || !$sValue ) {
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
        string $sKey = ''
    ) {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->get( self::setKey( $sKey ) );
    }


    public static
    function expire (
        string $sKey = '',
        string $ttl = ''
    ) {
        if ( !$sKey || !$ttl ) {
            return self::throwError('no redis key or ttl');
        }

        return self::redisClusterObject()->expire(
            self::setKey( $sKey ),
            $ttl
        );
    }


    public static
    function hSet (
        string $sKey = '',
        string $sHashKey = '',
        string $sValue = ''
    ) {
        if ( !$sKey || !$sHashKey || !$sValue ) {
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
        string $sKey = '',
        array $aData = []
    ) {
        if ( !$sKey || !$aData ) {
            return self::throwError('no redis key or data');
        }

        return self::redisClusterObject()->hMset(
            self::setKey( $sKey ),
            $aData
        );
    }

    public static
    function hKeys (
        string $sKey = ''
    ) {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->hKeys( self::setKey( $sKey ) );
    }

    public static
    function hGet (
        string $sKey = '',
        string $sField = ''
    ) {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->hGet(
            self::setKey( $sKey ),
            $sField
        );
    }

    public static
    function hGetAll (
        string $sKey = ''
    ) {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->hGetAll( self::setKey( $sKey ) );
    }

    public static
    function keys (
        string $sKey = ''
    ) {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->keys( self::setKey( $sKey ) );
    }

    public static
    function lPsuh (
        string $sKey = '',
        string $sJsonData = ''
    ) {
        if ( !$sKey || !$sJsonData ) {
            if (DEBUG) {
                var_dump( $sKey, $sJsonData );
            }

            return self::throwError('no redis key or sJsonData');
        }

        return self::redisClusterObject()->lPush(
            self::setKey( $sKey ),
            $sJsonData
        );
    }

    public static
    function rPop (
        string $sKey = ''
    ) {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->rPop( self::setKey( $sKey ) );
    }

    public static
    function lLen (
        string $sKey = ''
    ) {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }

        return self::redisClusterObject()->lLen( self::setKey( $sKey ) );
    }
}
