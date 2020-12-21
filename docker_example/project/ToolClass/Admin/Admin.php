<?php

namespace ToolClass\Admin;

use model\admin\Admin as AdminModel;
use ToolClass\Cache\AdminCache;
use ToolClass\Cache\RedisKey;
use ToolClass\Cache\Cache;
use ToolClass\Log\Exception;

use ToolClass\Model\Mysql;
use ToolClass\Server\Server;

class Admin
{
    /**
     * private key
     */
    public static $sPrivateKey = '-----BEGIN PRIVATE KEY-----
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
xlV3G3GyLRnZovat6RKmm/M7HwS7ctM=
-----END PRIVATE KEY-----
';

    /**
     * public key
     */
    public static $sPublicKey = '-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0i+NNHtBg923W6VOowp1
fj7V44xJ7dqtT6YpY7NVA9+3ElL8w70PQ3T35R2XNINTdXYZlORx9e0kdj2JpgBd
qbKmN+NP/B3zy2bGOxmcBfDppOD0qqOtVcQQkTMKDg4n9M9afVwR9aynkhp89yaD
zRIe+6ptp5TRFUFABEX9b0hvE/upAO0Xs62nz+2v4b+yEXjn3ghFOCgDPLDiHKqd
/s0QQFDzdX8qAfYtZVXtPJ64zdVnzFVpF0nnHdeetu+GCAECEpGFprkhPQT93/Zy
TCr94gWmJHrsgkvAvqJiTtQCiU17TTqf7sXodsl5rprpbC/H1I+uycMQNOTL7hE9
SGrEFaaiyYnByx7AZWfImDiByhYC5cbPUeC/yg83KvvzAWf4M0NXzVp6LMyyvPk/
SBrUvynloM8ZJF+ieVarPbdrwyPJzZCKVzWW/mXzhytHRt6WnF6m1Z9Uuk9sS4vv
lt4W2OMbMStbE/DA0s2FAn0O7Bp8Z2jq7j32lamQaUjv3KmxHELXr0DChpNaIfBH
2VY3+lt+VF9+vde+UB3yNJVmP5zTzhABEZyyulz4qi1YPWOJuONlnaVz2Rzsl0pk
kFuEFDjmgacJIfpSb+V3s3JWG+tXM1sy1Emvn5eZe6En6ZXxFXWABhoowLvWBp9w
dvCOnU5rWW6GYOXLLQo/280CAwEAAQ==
-----END PUBLIC KEY-----
';
    public static $sKeyFeild = 'admintool';

    public static $sCacheName     = 'admin_cache';
    public static $iCacheLiftTime = 18000;

    public static
    function adminNameArg ()
    {
        if ( ( !isset( $_POST[ Server::resquertResponseDataFieldValue() ] )
               || !$_POST[ Server::resquertResponseDataFieldValue() ] )
             || ( !isset(
                    $_POST[ Server::resquertResponseDataFieldValue(
                    ) ][ Server::$sRequestArgUserNameName ]
                )
                  || !$_POST[ Server::resquertResponseDataFieldValue(
                ) ][ Server::$sRequestArgUserNameName ] ) ) {
            //            Exception::throwException( 'no admin name args' );
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'no admin name args' ]
                )
            );
            //            return FALSE;
        }

        return $_POST[ Server::resquertResponseDataFieldValue(
        ) ][ Server::$sRequestArgUserNameName ];
    }

    public static
    function adminPwdArg ()
    {
        if ( ( !isset( $_POST[ Server::resquertResponseDataFieldValue() ] )
               || !$_POST[ Server::resquertResponseDataFieldValue() ] )
             || ( !isset(
                    $_POST[ Server::resquertResponseDataFieldValue(
                    ) ][ Server::$sRequestArgUserPwdFeild ]
                )
                  || !$_POST[ Server::resquertResponseDataFieldValue(
                ) ][ Server::$sRequestArgUserPwdFeild ] ) ) {
            //            Exception::throwException( 'no admin password args' );
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'no admin password args' ]
                )
            );
        }

        return $_POST[ Server::resquertResponseDataFieldValue(
        ) ][ Server::$sRequestArgUserPwdFeild ];
    }

    public static
    function checkAdminNamePassword ()
    {
        return self::adminNameArg() && self::adminPwdArg();
    }

    public static
    function setAdminName (
        $sUserName
    ) {
        return strtolower( $sUserName );
    }

    public static
    function setAdminPwd (
        $sPwd
    ) {
        return strtolower( $sPwd );
    }

    public static
    function getAdminInfoByCheckIdFormCache ()
    {

    }

    public static
    function queryAdmin (
        $aWhereCondition = [],
        $aQueryColumn = [],
        $iQueryNumber = 1
    ) {
        //        var_dump(AdminModel::$sTable);
        $oMysql = new Mysql( AdminModel::$sTable );
        //        var_dump($oMysql);return;
        $oMysql->table();

        if ( $aWhereCondition ) {
            foreach ( $aWhereCondition as $v ) {
                $oMysql->where( $v );
            }
        }

        $aQueryColumn = $aQueryColumn ? $aQueryColumn : '*';
        $oMysql->select( $aQueryColumn );

        $oMysql->writeSql( TRUE );

        $res = FALSE;
        switch ( $iQueryNumber ) {
            case 1 :
                $res = $oMysql->first();
                break;
        }

        return $res;
    }

    public static
    function getAdminInfoFromCache (
        $sFeild = FALSE
    ) {
        return AdminCache::getLoginAdminInfo( $sFeild );
    }

    public static
    function storageAdminCache (
        $res
    ) {
        $sAdminInfoHashKey = RedisKey::setAdminSessionRedisKeyByUsername(
            $res->username
        );

        $aCache                                     = [];
        $aCache[ AdminModel::$sIdColumn ]           = $res->id;
        $aCache[ AdminModel::$sUserNameColumn ]     = $res->username;
        $aCache[ AdminModel::$sJurisdictionColumn ] = $res->jurisdiction;
        $aCache[ RedisKey::$aAdminInfoLodinTime ]   = $res->login_time;

        $res    = Cache::hMset( $sAdminInfoHashKey, $aCache );
        $res1   = Cache::expire(
            $sAdminInfoHashKey,
            self::$iCacheLiftTime
        );
        $aCache = NULL;
        unset( $aCache );

        if ( !$res || !$res1 ) {
            //            Exception::throwException(Server::$aReturnData['set admin login cache error']);
            return Server::response(
                Server::errorStatus(),
                Server::$aReturnData[ 'set admin login cache error' ]
            );
        }

        return TRUE;
    }

    public static
    function delAdminCache ()
    {
        $sAdminInfoHashKey = RedisKey::adminSessionRedisKeyByCheckId();

        return Cache::del( $sAdminInfoHashKey );
    }
}