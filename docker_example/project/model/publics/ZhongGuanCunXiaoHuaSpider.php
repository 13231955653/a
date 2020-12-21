<?php

namespace model\publics;

use model\Mysql;

class ZhongGuanCunXiaoHuaSpider extends Mysql
{
    private static $sTable = 'zhong_guan_cun_xiao_hua_spiders';

    private static $sPlatform = 'publics';

    private static $bQueueFeildRetry = TRUE;

    private static $sNormalStatus = 1;
    private static $sDelStatus    = 2;

    private static $sIdFeild                  = 'id';
    private static $sDomainFeild              = 'domain';
    private static $sNameFeild                = 'name';
    private static $sStatusFeild              = 'status';
    private static $sUrlFeild                 = 'url';
    private static $sPortFeild                = 'port';
    private static $sNoCurlIncludeStringFeild = 'no_curl_url_include_string';
    private static $sUrlEndingFeild           = 'url_ending';
    private static $sWhoAddFeild              = 'who_add';
    private static $sAddTimeFeild             = 'add_time';
    private static $sCurlNumber               = 'curl_number';
    private static $sLastCurlTime             = 'last_curl_time';
    private static $sWhoUpdate                = 'who_update';
    private static $sUpdateTime               = 'update_time';


    private
    function __construct ()
    {
    }

    public static
    function whoUpdate ()
    {
        return self::$sWhoUpdate;
    }

    public static
    function updateTime ()
    {
        return self::$sUpdateTime;
    }

    public static
    function addTime ()
    {
        return self::$sAddTimeFeild;
    }

    public static
    function curlNumber ()
    {
        return self::$sCurlNumber;
    }

    public static
    function lastCurlTime ()
    {
        return self::$sLastCurlTime;
    }

    public static
    function whoAdd ()
    {
        return self::$sWhoAddFeild;
    }

    public static
    function urlEnding ()
    {
        return self::$sUrlEndingFeild;
    }

    public static
    function noCurlIncludeStringFeild ()
    {
        return self::$sNoCurlIncludeStringFeild;
    }

    public static
    function port ()
    {
        return self::$sPortFeild;
    }

    public static
    function url ()
    {
        return self::$sUrlFeild;
    }

    public static
    function statusKey ()
    {
        return self::$sStatusFeild;
    }

    public static
    function normalStatus ()
    {
        return self::$sNormalStatus;
    }

    public static
    function name ()
    {
        return self::$sNameFeild;
    }

    public static
    function domain ()
    {
        return self:: $sDomainFeild;
    }

    public static
    function delStatus ()
    {
        return self::$sDelStatus;
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
        if ( !$aWhere ) {
            return FALSE;
        }

        if ( !is_array( $aWhere ) ) {
            return FALSE;
        }

        //        echo 1;return;
        return parent::all( $sSql, $aWhere, $bWriteSql );
    }

    public static
    function update (
        $sSql = '',
        $aWhereConditions = [],
        $aUpdateData = [],
        $bWriteSql = FALSE,
        $bQueue = FALSE
    ) {
        if ( !$sSql || !$aWhereConditions || !$aUpdateData ) {
            return TRUE;
        }

        return parent::update(
            $sSql,
            $aWhereConditions,
            $aUpdateData,
            $bWriteSql,
            $bQueue
        );
    }
}
