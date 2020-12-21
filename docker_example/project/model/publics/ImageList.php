<?php

namespace model\publics;

use model\Mysql;

class ImageList extends Mysql
{
    private static $sTable = 'image_lists';

    private static $sMd5FileFeild = 'md5_file';
    private static $sUsedNumberFeild = 'used_number';
    public static $sPathFeild = 'path';

    private static $sPrimaryFeild = 'id';

    private static $sNoUsedNumber = 0;

    private static $sPlatform = 'publics';

    private static $sUpdateTimeFeild = 'update_time';

    private static $bQueueFeildRetry = TRUE;

    private
    function __construct ()
    {
    }

    public static function updtaeTime ()
    {
        return self::$sUpdateTimeFeild;
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

    public static function md5FileKey ()
    {
        return self::$sMd5FileFeild;
    }

    public static function pathKey ()
    {
        return self::$sPathFeild;
    }

    public static function usedNumber()
    {
        return self::$sUsedNumberFeild;
    }

    public static function noUsedNumber ()
    {
        return self::$sNoUsedNumber;
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
