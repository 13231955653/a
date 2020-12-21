<?php

namespace model\publics;

use model\Mysql;

class Spider extends Mysql
{
    private static $sTable = 'spiders';

    private static $sPlatform = 'publics';

    private static $bQueueFeildRetry = TRUE;

    private static $sNormalStatus = 1;
    private static $sDelStatus    = 2;

    private static $sNameFeild                = 'name';
    private static $sStatusFeild              = 'status';
    private static $sUrlFeild                 = 'url';
    private static $sPortFeild                = 'port';
    private static $sDomainFeild              = 'domain';
    private static $sDetailInfoPageNameFeild  = 'detail_info_page_name';
    private static $sNoCurlIncludeStringFeild = 'no_curl_url_include_string';
    private static $sUrlEndingFeild           = 'url_ending';
    private static $sClassifyPageDomRegFeild  = 'classify_page_dom_reg';
    private static $sDetailPageDomRegFeild    = 'detail_page_dom_reg';
    private static $sOriginAddressNoticeFeild = 'origin_address_notice';
    private static $sOriginNoticeInfoFeild    = 'origin_notice_info';
    private static $sCurlNumberFeild          = 'curl_number';
    private static $sIdFeild                  = 'id';
    private static $sLastCurlTimeFeild        = 'last_curl_time';
    private static $sDetailPageATag           = 'detail_page_a_tag';

    private
    function __construct ()
    {
    }

    public static
    function detailPageATag ()
    {
        return self::$sDetailPageATag;
    }

    public static
    function lastCurlTime ()
    {
        return self::$sLastCurlTimeFeild;
    }

    public static
    function curlNumber ()
    {
        return self::$sCurlNumberFeild;
    }

    public static
    function originNotice ()
    {
        return self::$sOriginNoticeInfoFeild;
    }

    public static
    function originAddressNotice ()
    {
        return self::$sOriginAddressNoticeFeild;
    }

    public static
    function detailPageDomReg ()
    {
        return self::$sDetailPageDomRegFeild;
    }

    public static
    function classifyPageRed ()
    {
        return self::$sClassifyPageDomRegFeild;
    }

    public static
    function urlEnding ()
    {
        return self::$sUrlEndingFeild;
    }

    public static
    function noCurlIncludeString ()
    {
        return self::$sNoCurlIncludeStringFeild;
    }

    public static
    function detailInfoPage ()
    {
        return self::$sDetailInfoPageNameFeild;
    }

    public static
    function donain ()
    {
        return self::$sDomainFeild;
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
    function status ()
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
