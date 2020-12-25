<?php

namespace ToolClass\Cache;

//use ToolClass\Admin\Admin;
//use ToolClass\Log\Exception;
//use ToolClass\Server\Server;
//
//use ToolClass\Regular\RegularVerify;

use ToolClass\ToolFather;
class RedisKey extends ToolFather
{
    private static $sAdminMenuRedisJsonKey = 'admin_menus';
    private static $sHomeMenuRedisJsonKey = 'home_menus';

    private static $sAdminRedisHouMd5Salt = 'fasfjbvv456545&(*^^%%$#@$&^(*^&';

    private static $sAdminCachePrefix     = 'admin';
    private static $sAdminCacheSessionTag = 'session';

    private static $aAdminInfojurisdictionColumn     = 'jurisdiction';
    private static $aAdminInfoUserjurisdictionColumn = 'id';
    private static $aAdminInfoLodinTime              = 'login_time';
    private static $sInterValTag              = '_';

    public static
    function setAdminSessionRedisKeyByUsername (
        $sAdminName = ''
    ) {
        if ( !$sAdminName ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('hash admin name must')
                )
            );
        }

        return strtolower(
            self::adminSessionRedisPerfix()
            . $sAdminName
            . REDIS_INTER_TAG
            . self::adminSessionRedisHou()
        );
    }

    public static
    function adminSessionRedisKeyByCheckId ()
    {
        $sAdminInfoRedisKey = Cache::keys(
            '*' . REDIS_INTER_TAG . self::adminSessionRedisHou()
        );
        if ( !$sAdminInfoRedisKey ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('no admin cache key'),
                    [],
                    [],
                    [],
                    [],
                    [
                        Server::responseDelLocalstorageFeild() => [
                            Admin::$sCacheName
                        ]
                    ]
                )
            );
            return FALSE;
        }

        foreach ( $sAdminInfoRedisKey as $k => $v ) {
            if ( strstr( $v, RedisKey::adminSessionRedisPerfix() ) !== FALSE ) {
                $sAdminInfoRedisKey = $v;
                break;
            }
        }

        return $sAdminInfoRedisKey;
    }

    public static
    function adminSessionRedisPerfix ()
    {
        return strtolower(
            self::$sAdminCachePrefix
            . REDIS_INTER_TAG
            . self::$sAdminCacheSessionTag
            . REDIS_INTER_TAG
        );
    }

    public static
    function adminSessionRedisHou ()
    {
        $sCheckSessionId = Server::getQueryArgs(
            Server::$sRequestSessionIdFeild
        );
        if ( !$sCheckSessionId ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('no exist check session id 1')
                )
            );
            return FALSE;
        }

        if ( !RegularVerify::checkRequestSessionId( $sCheckSessionId ) ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('no exist check session id 2')
                )
            );
            return FALSE;
        }

        return strtolower(
            md5( md5( $sCheckSessionId ) . self::$sAdminRedisHouMd5Salt )
        );
    }

    public static
    function setKeyPerfix ()
    {
        return strtoupper( REDIS_PERFIX );
    }
}
