<?php

namespace model\publics;

use model\Mysql;

class ReplenishChengYu extends Mysql
{
    private static $sTable = 'cheng_yu_need_replenishs';

    private static $bQueueFeildRetry = TRUE;

    private static $sPrimaryFeild = 'id';

    private static $sPlatform = 'publics';

    private static $sWordMd5 = 'word_md5';
    private static $sWord = 'word';
    private static $sAddTime = 'add_time';
    private static $sType = 'type';
    private static $sUrlencodeFeild = 'urlencode';
    private static $sStatusFeild = 'status';

    private static $iNormalStatus = 1;

    private static $sMd5Salt = 'fsajhkOIYUOGFA6544）&*……￥%&￥……%@#%@&GJ';

    private
    function __construct ()
    {
    }

    public static function urlencodeMd5 ($sString = '')
    {
        if (!$sString) {
            return '';
        }

        return strtoupper(md5(urlencode($sString) . self::$sMd5Salt));
    }

    public static function urlEncode ($sString = '')
    {
        if (!$sString) {
            return '';
        }

        return urlencode($sString);
    }

    public static function urlDncode ($sString = '')
    {
        if (!$sString) {
            return '';
        }

        return urldecode($sString);
    }

    public static function status ()
    {
        return self::$sStatusFeild;
    }

    public static function normalStatus ()
    {
        return self::$iNormalStatus;
    }

    public static function urlencodeFeild ()
    {
        return self::$sUrlencodeFeild;
    }

    public static function type ()
    {
        return self::$sType;
    }

    public static function addTime ()
    {
        return self::$sAddTime;
    }

    public static function word ()
    {
        return self::$sWord;
    }

    public static function wordMd5 ()
    {
        return self::$sWordMd5;
    }

    public static function platform ()
    {
        return self::$sPlatform;
    }

    public static function table()
    {
        return self::$sTable;
    }

    public static function primary()
    {
        return self::$sPrimaryFeild;
    }

    public static function queueFeildRetry ()
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

    protected static
    function update (
        $sSql = '',
        $aWhere = [],
        $aData = [],
        $bWriteSql = false,
        $bQueue = TRUE
    )
    {
        if ( !$sSql || !$aWhere || !$aData ) {
            return TRUE;
        }

        return parent::update(
            static::$sPlatform,
            static::$sTable,
            $sSql,
            $aWhere,
            $aData,
            $bWriteSql,
            $bQueue
        );
    }

    public static
    function count (
        $sSql = '',
        $aWhere = '',
        $bWriteSql = false,
        $bQueue = false
    ) {
        if ( !$sSql ) {
            return TRUE;
        }

        return parent::count(
            $sSql,
            $aWhere,
            $bWriteSql,
            false
        );
    }
}
