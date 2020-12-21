<?php

namespace model\publics;

use model\Mysql;


use ToolClass\Date\Time;

use ToolClass\Log\ErrorInformAdminThrow;

use ToolClass\Server\Server;

class Logs extends Mysql
{
    private static $sTable = 'logs';

    private static $sPlatform = 'logs';

    private static $bQueueFeildRetry = TRUE;

    private
    function __construct ()
    {
    }

    public static function table ()
    {
        return self::$sTable;
    }

    public static function platform ()
    {
        return self::$sPlatform;
    }

    public static
    function insertLog (
        $sLogInfo = '',
        $sPlatform = '',
        $sTable = '',
        $bOvertime = FALSE
    ) {
        //        echo 3;var_dump($sLogInfo, $sPlatform, $sTable, $bWirteSql);return;
        //        var_dump($sPlatform, $sTable);
        //        echo 'www';
        if ( !$sLogInfo || !$sTable || !$sPlatform ) {
            ErrorInformAdminThrow::recordErrorAndInformAdmin(
                13,
                [
                    'log'      => $sLogInfo,
                    'table'    => $sTable,
                    'platform' => $sPlatform
                ]
            );

            //            Exception::throwException('no loginfo or table or platform');
            return FALSE;
        }

        $aData = [];

        //        var_dump($_SERVER);
        //        $aData[ 'info' ] = Rsa::encryptByPublicKey(Sql::filterSqlArg($sLogInfo));

        //        $aData[ 'info' ] = Rsa::encryptByPublicKey($sLogInfo);
        $aData[ 'info' ]     = $sLogInfo;
        $aData[ 'platform' ] = $sPlatform;
        $aData[ 'tables' ]   = $sTable;
        /////////////////////////////////////////////////////////////////////////////
        $aData[ 'who_handle' ] = Server::getNowLoginUser();
        $aData[ 'add_time' ]   = Time::nowTime();

        //        $aData[ 'type' ] = $iType;

        if ( $bOvertime ) {
            $aData[ 'overtime' ] = 1;
        }
        //        else {
        //            $aData[ 'overtime' ] = 2;
        //        }
        //                var_dump($aData);

        return self::insert( $aData, TRUE );
    }

    //    private static function getNowLoginUser ()
    //    {
    //        if (!isset($_POST[Server::$sRequestSessionIdFeild])) {
    //            return Server::getNowUser();
    //        }
    //
    //        $sRedisKey = RedisKey::adminSessionRedisHou();
    //        $aRedisKey = RedisTool::keys('*' . $sRedisKey . '*');
    //            ;
    //        if (!$aRedisKey) {
    //            return Server::getNowUser();
    //        }
    //
    //        $sStringPerfix = RedisKey::adminSessionRedisPerfix();
    //        foreach ($aRedisKey as $k => $v) {
    //            if (strstr($v, $sStringPerfix) === false) {
    //                unset($aRedisKey[$k]);
    //            }
    //
    //            /////////////////////////////////
    //            if (strstr($v, '__')) {
    //                unset($aRedisKey[$k]);
    //            }
    //        }
    //
    //        if (!$aRedisKey) {
    //            return Server::getNowUser();
    //        }
    //
    //        $aRedisKey = array_values($aRedisKey);
    //        $sRedisKey = $aRedisKey[0];
    //        //////////////////////////////
    //        $sRedisKey = str_replace(RedisKey::setKeyPerfix(), '', $sRedisKey);
    //        $oLoginUser = RedisTool::hGet($sRedisKey, Server::$sAdminAndUserUserNameColumn);
    //        return $oLoginUser ? $oLoginUser : Server::getNowUser();
    //    }

    public static
    function first (
        $sSql,
        $aBindValue = [],
        $bWriteSql = FALSE
    ) {

        if ( !$sSql ) {
            return FALSE;
        }
        //        if (!$sSql || !$aBindValue) {
        //            return FALSE;
        //        }
        //
        //        if (!is_array($aBindValue)) {
        //            return FALSE;
        //        }

        return parent::first( $sSql, $aBindValue, $bWriteSql );
    }

    protected static
    function insert (
        $aData = [],
//        $bQueue = TRUE,
        $bWriteSql = FALSE
    ) {
        if ( !$aData ) {
            return FALSE;
        }

        if ( !is_array( $aData ) ) {
            return FALSE;
        }

        //        echo 1;return;
//        return parent::insert( $aData, $bQueue, $bWriteSql );
        return parent::insert( $aData, $bWriteSql );
    }

    public static
    function all (
        $sSql,
        $aWhere = [],
        $bWriteSql = FALSE
    ) {

        if ( !$sSql ) {
            return FALSE;
        }
        //        if (!$aWhere) {
        //            return FALSE;
        //        }
        //
        //        if (!is_array($aWhere)) {
        //            return FALSE;
        //        }

        //        echo 1;return;
        return parent::all( $sSql, $aWhere, $bWriteSql );
    }
}
