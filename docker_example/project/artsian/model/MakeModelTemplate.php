<?php

namespace modelMakeModelTemplateNameapace;

use model\Mysql;

class MakeModelTemplateClass extends Mysql
{
    private static $sTable = 'MakeModelTemplateTable';

    private static $bQueueFeildRetry = TRUE;

    private static $sPrimaryFeild = 'id';

    private static $sPlatform = 'MakeModelTemplatePlatform';

    private
    function __construct ()
    {
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

    public static
    function update (
        $sSql = '',
        $aWhere = [],
        $aData = [],
        $bWriteSql = false,
        $bQueue = TRUE
    )
    {
        if ( !$sSql || !$aWhere || !$aData ) {
            return FALSE;
        }

        return parent::update(
//            static::$sPlatform,
//            static::$sTable,
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
            return FALSE;
        }

        return parent::count(
            $sSql,
            $aWhere,
            $bWriteSql,
            false
        );
    }

    public static
    function delete (
        $sSql = '',
        $aWhere = '',
        $bWriteSql = false
    ) {
        if ( !$sSql ) {
            return FALSE;
        }

        return parent::delete(
            $sSql,
            $aWhere,
            $bWriteSql
        );
    }
}
