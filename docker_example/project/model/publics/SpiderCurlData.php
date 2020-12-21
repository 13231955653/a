<?php

namespace model\publics;

use model\Mysql;
use ToolClass\Log\Exception;
//use ToolClass\Model\Mysql as MysqlTool;
use ToolClass\Server\Server;

class SpiderCurlData extends Mysql
{
    private static $sTable = 'spider_curl_datas';

    private static $sPlatform = 'publics';

    private static $bQueueFeildRetry = TRUE;

    private static $iMaxValue = 12000;

    private static $iClassifyJokeTextId = 1;
    private static $iClassifyJokeImgId  = 7;

    private static $sIdFeild          = 'id';
    private static $sEncodeValueFeild = 'md5_value';
    private static $sValueFeild       = 'value';
    private static $sStatusFeild      = 'status';
    private static $sAddTimeFeild     = 'add_time';
    private static $sClassifyFeild    = 'classify_id';
    private static $sOriginUrl        = 'origin_url';
    private static $sSpiderNameFeild  = 'spider_name';

    private static $iNormalNoUsedStatus = 1;
    private static $iIllegalityStatus   = 2;
    private static $iAlreadyUsedStatus  = 3;

    private
    function __construct ()
    {
    }

    public static
    function spiderName ()
    {
        return self::$sSpiderNameFeild;
    }

    public static
    function originUrl ()
    {
        return self::$sOriginUrl;
    }

    public static
    function alreadyUsedStatus ()
    {
        return self::$iAlreadyUsedStatus;
    }

    public static
    function illegalityStatus ()
    {
        return self::$iIllegalityStatus;
    }

    public static
    function normalNoUsed ()
    {
        return self::$iNormalNoUsedStatus;
    }

    public static
    function classify ()
    {
        return self::$sClassifyFeild;
    }

    public static
    function addTime ()
    {
        return self::$sAddTimeFeild;
    }

    public static
    function value ()
    {
        return self::$sValueFeild;
    }

    public static
    function status ()
    {
        return self::$sStatusFeild;
    }

    public static
    function encodeValueFeild ()
    {
        return self::$sEncodeValueFeild;
    }

    public static
    function jokeImgId ()
    {
        return self::$iClassifyJokeImgId;
    }

    public static
    function jokeTextId ()
    {
        return self::$iClassifyJokeTextId;
    }

    public static
    function maxValue ()
    {
        return self::$iMaxValue;
    }

    public static
    function platform ()
    {
        return self::$sPlatform;
    }

    public static
    function table ()
    {
        return self::$sTable;
    }

    public static
    function primary ()
    {
        return self::$sIdFeild;
    }

    public static
    function queueFeildRetry ()
    {
        return self::$bQueueFeildRetry;
    }

    public static
    function first (
        $sSql,
        $aBindValue = [],
        $bWriteSql = FALSE
    ) {
        if ( !$sSql || !$aBindValue ) {
            return FALSE;
        }

        if ( !is_array( $aBindValue ) ) {
            return FALSE;
        }

        return parent::first( $sSql, $aBindValue, $bWriteSql );
    }

    public static
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

//        return parent::insert( $aData, $bQueue, $bWriteSql );
        return parent::insert( $aData, $bWriteSql );
    }

    public static
    function all (
        $sSql,
        $aWhere = [],
        $bWriteSql = FALSE
    ) {
        if ( !$aWhere ) {
            return FALSE;
        }

        if ( !is_array( $aWhere ) ) {
            return FALSE;
        }

        return parent::all( $sSql, $aWhere, $bWriteSql );
    }

    public static
    function encodeValue (
        $sValue
    ) {
        if ( !$sValue ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'spider data value id null' )
                )
            );
        }

        return self::encodeStyle( $sValue );
    }

    private static
    function encodeStyle (
        $sValue
    ) {
        return strtoupper( md5( $sValue ) );
    }

    public static
    function count (
        $sSql = '',
        $aWhere = '',
        $bWriteSql = FALSE,
        $bQueue = FALSE
    ) {
        if ( !$sSql ) {
            return TRUE;
        }

        return parent::count(
            $sSql,
            $aWhere,
            $bWriteSql,
            FALSE
        );
    }
}
