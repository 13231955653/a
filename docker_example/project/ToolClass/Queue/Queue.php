<?php

namespace ToolClass\Queue;

//use model\Mysql;
//
//use ToolClass\Cache\RedisKey;
//use ToolClass\Cache\Cache;
//use ToolClass\Json\Json;
//use ToolClass\File\File;
//use ToolClass\Log\Exception;
//use ToolClass\Server\Server;
//use ToolClass\Log\ErrorInformAdminThrow;

use ToolClass\ToolFather;

class Queue extends ToolFather
{
    private static $queue = FALSE;

    private static $sQueueName = 'queue';
    private static $sQueueSplitTag = ':';

    private static $iWaitTime = 100; // 毫秒

    private static $sInsertQueueName = 'insert';
    private static $sDeleteQueueName = 'delete';
    private static $sUpdateQueueName = 'update';

    private static $sDefauleQueueName = 'queue';

    private static $iMaxRetryNumber = 9;


    private static $sSpiderCurlQueueName = 'spider_curl';
    private static $sSpiderName = 'spider';
    private static $sImageUsedNumber = 'image_used_number';
    private static $sCurlDataName = 'curl_data';


    public static function curlData ()
    {
        return self::$sCurlDataName;
    }
    public static function updateIamgeUsedNumber ()
    {
        return self::$sImageUsedNumber;
    }

    public static function spiderQueueName ()
    {
        return self::$sSpiderName;
    }

    public static function spiderCurlQueueName ()
    {
        return self::$sSpiderCurlQueueName;
    }

    //////////
    public static function insertDelFile ($sFile = '')
    {
        if (!$sFile) {
            return;
        }

        return self::insertDelFileQueue( $sFile );
    }
    ////////////////////////////////////////
    private static
    function insertDelFileQueue (
        $sFile = ''
    ) {
        if (!$sFile) {
            return;
        }

        ///////////////////////////////////////
        self::$queue = $sFile;

        return self::queryDelFileQueue();
    }
    ////////////////////////////
    public static
    function queryDelFileQueue ()
    {
        if (!self::$queue) {
            return;
        }

        if ( self::$queue ) {
            return self::doDelFile( self::$queue );

            self::$queue = FALSE;
        }
    }    /////////////////////////////
    private static
    function doDelFile (
        $sFile = ''
    ) {
        if (!$sFile) {
            return;
        }

        if ( !File::unlinkFile( $sFile ) ) {
            self::insertDelFile($sFile);

            return TRUE;
        }

        return TRUE;
    }



//    ///////////////////////////////////
//    public static
//    function insertQueue (
//        $sSql,
//        $aData,
//        $sPlatform,
//        $sTable,
//        $bWriteSql,
//        $bRetry = TRUE,
//        $bQueue = TRUE
//    ) {
//        if ( !$sSql || !$aData || !$sPlatform || !$sTable ) {
////            ErrorInformAdminThrow::recordErrorAndInformAdmin(
////                14,
////                'insert queue error'
////            );
//            return FALSE;
//        }
//
//        $sJsonData = Json::toJson(
//            [
//                'action'    => 'insert',
//                'sql'       => $sSql,
//                self::dataKey()      => $aData,
//                'platform'  => $sPlatform,
//                'table'     => $sTable,
//                self::writeSqlKey() => $bWriteSql,
//                'retry'     => $bRetry
//            ]
//        );
//
//        return self::insertToQueue( $sJsonData );
//    }
//
//    ////////////////////////////////////////
//    private static
//    function insertToQueue (
//        $sJsonData
//    ) {
//        ///////////////////////////////////////
//        self::$queue = $sJsonData;
//
//        return self::queryQueue();
//    }
//
//    ////////////////////////////
//    public static
//    function queryQueue ()
//    {
//        if ( self::$queue ) {
//            return self::doQueueToDatabase( self::$queue );
//
//            self::$queue = FALSE;
//        }
//    }
//
//    /////////////////////////////
//    private static
//    function doQueueToDatabase (
//        $sJsonData
//    ) {
//        $aData = Json::toArray( $sJsonData );
//        if ( !self::queueInsertDataToDatabase( $aData ) ) {
//            if ( $aData[ 'retry' ] ) {
//                self::insertQueue(
//                    $aData[ 'sql' ],
//                    $aData[ self::dataKey() ],
//                    $aData[ 'platform' ],
//                    $aData[ 'table' ],
//                    $aData[ self::writeSqlKey() ],
//                    $aData[ 'retry' ]
//                );
//            }
//
//            return TRUE;
//        }
//
//        return TRUE;
//    }
//
//    //////////////////////////////////////////
//    private static
//    function queueInsertDataToDatabase (
//        $sJsonData
//    ) {
//        return Mysql::doInsertDatabase(
//            $sJsonData[ 'sql' ],
//            $sJsonData[ self::dataKey() ],
//            $sJsonData[ 'platform' ],
//            $sJsonData[ 'table' ],
//            $sJsonData[ self::writeSqlKey() ],
//            TRUE
//        );
//    }




    ///////////////////////////////////
    public static
    function insertDelData (
        $sPlatform,
        $sTable,
        $aWhere = [],
        $bWriteSql = false,
        $bRetry = TRUE
    ) {
        if ( !$sPlatform || !$sTable || !$aWhere ) {
            return TRUE;
        }

        $sJsonData = Json::toJson(
            [
                'platform'  => $sPlatform,
                'table'     => $sTable,
                self::whereKey()      => $aWhere,
                self::writeSqlKey() => $bWriteSql,
                'retry'     => $bRetry,
            ]
        );

        $aMenu = Cache::hGetAll( RedisKey::$sAdminMenuRedisJsonKey );
        if ( !$aMenu ) {
            return [];
        }

        foreach ( $aMenu as $k => $v ) {
            $aMenu[ $k ] = Json::toArray( $v );
        }

        return $aMenu;

        $sDelDataQueueName = self::setQueueName($sTable);


//        return self::insertDelDataQueue( $sJsonData );
        return TRUE;
    }

    private static function queueActionList ()
    {
        return [self::$sInsertQueueName, self::$sDeleteQueueName, self::$sUpdateQueueName];
    }

    public static function insertQueueName ()
    {
        return self::$sInsertQueueName;
    }

    public static function delQueueName ()
    {
        return self::$sDeleteQueueName;
    }

    public static function updateQueueName ()
    {
        return self::$sUpdateQueueName;
    }

    public static function writeSqlKey ()
    {
        return 'write_sql';
    }

    public static function queueErrorRetryKey ()
    {
        return 'queue_error_retry';
    }

    public static function whereKey ()
    {
        return 'where';
    }

    public static function dataKey ()
    {
        return 'data';
    }

    public static function retryNumber ()
    {
        return 're_num';
    }

    public static function table ()
    {
        return 'table';
    }

    public static function action ()
    {
        return 'action';
    }

    public static function queueName ()
    {
        return 'queueName';
    }

    public static function maxRetryNumber ()
    {
        return self::$iMaxRetryNumber;
    }

    public static function setQueueName ($sQueueName = '')
    {
        if (!$sQueueName) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('set del data queue name error')
                )
            );
            return;
        }

        return self::$sQueueName . self::$sQueueSplitTag . $sQueueName;
    }

    public static
    function insertInsertQueue (
        $sQueueName = '',
        $aData = [],
        $bWriteSql = false,
        $bQueueFeildRetry = TRUE
    ) {
        if ( !$aData || !$sQueueName ) {
            return FALSE;
        }

        $sJsonData = Json::toJson(
            [
                self::queueName() => $sQueueName,
                self::action() => self::insertQueueName(),
                self::dataKey()      => $aData,
                self::writeSqlKey()      => $bWriteSql,
                self::queueErrorRetryKey() => $bQueueFeildRetry,
            ]
        );

        return self::intoQueue($sQueueName, $sJsonData);
    }
    public static
    function insertUpdateQueue (
        $sQueueName = '',
        $aWhere = [],
        $aData = [],
        $bWriteSql = false,
        $bQueueFeildRetry = TRUE
    ) {
        if ( !$aWhere || !$aData || !$sQueueName ) {
            return FALSE;
        }

        $sJsonData = Json::toJson(
            [
                self::queueName() => $sQueueName,
                self::action() => self::updateQueueName(),
                self::whereKey()       => $aWhere,
                self::dataKey()      => $aData,
                self::writeSqlKey()      => $bWriteSql,
                self::queueErrorRetryKey() => $bQueueFeildRetry,
            ]
        );

        return self::intoQueue($sQueueName, $sJsonData);
    }
    public static function defaultQueueName ()
    {
        return self::$sDefauleQueueName;
    }
    private static function intoQueue ($sQueueName = '', $sJsonData = '')
    {
//        $sInsertQueueName = self::setQueueName($sTable, self::insertQueueName());
        $sInsertQueueName = self::setQueueName($sQueueName);
        if (!Cache::lPsuh ( $sInsertQueueName, $sJsonData)) {
            $sErrorInfo = 'insert queue ' . $sInsertQueueName . ' error';

            ErrorInformAdminThrow::recordErrorAndInformAdmin (22, $sErrorInfo);

            return FALSE;
        }

        return TRUE;
    }

    public static function queueWaitTime ()
    {
        return self::$iWaitTime;
    }
    public static function insertRetryQueue ( $sQueueName = '', $aData = [] )
    {
        if (!$sQueueName || !$aData) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('insert retry queue error')
                )
            );
            return FALSE;
        }

//        $aData = Json::toArray($aData);
        $aData[self::retryNumber()] = !isset($aData[self::retryNumber()]) ? 1 : (int)$aData[self::retryNumber()] + 1;
        ///////////////////////
        if ($aData[self::retryNumber()] > self::maxRetryNumber()) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                )
            );
            return FALSE;
//            insert queue database
        }
        $aData = Json::toJson($aData);

        return self::intoQueue($sQueueName, Json::toJson($aData));

//        switch ($sAction) {
//            case self::updateQueueName() :
//                return self::intoUpdateQueue($sTable, $sJsonData);
//                break;
//            case self::insertQueueName() :
//                return self::intoInsertQueue($sTable, $sJsonData);
//                break;
//        }
    }
}
