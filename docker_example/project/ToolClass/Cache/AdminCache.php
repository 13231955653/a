<?php
namespace ToolClass\Cache;

//use ToolClass\Log\Exception;
//use ToolClass\Server\Server;
//use ToolClass\Admin\Admin;

use ToolClass\ToolFather;
class AdminCache extends ToolFather
{
    public static function getLoginAdminInfo ($sGetFiled = false)
    {
        $sAdminInfoHashKey = RedisKey::adminSessionRedisKeyByCheckId();

        $adminCache = $sGetFiled && !is_array($sGetFiled)? Cache::hGet( $sAdminInfoHashKey, $sGetFiled) : Cache::hGetAll( $sAdminInfoHashKey);
        $sAdminInfoRedisKey = null;
        unset($sAdminInfoRedisKey);

        if (!$adminCache) {
//            Exception::throwException('no admin jurisdiction');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'no admin jurisdiction' ]
                )
            );
        }

        $res   = Cache::expire(
            $sAdminInfoHashKey,
            Admin::$iCacheLiftTime
        );
        if (!$res) {
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'update admin redis cache error' ]
                )
            );
        }

        return $adminCache;
    }
}
