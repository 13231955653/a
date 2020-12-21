<?php

namespace model\publics;

use model\Mysql;

class UniqueStrings extends Mysql
{
    private static $sTable = 'unique_strings';

    private static $sPlatform = 'publics';

    public static $bQueueFeildRetry = false;

    private
    function __construct ()
    {
    }

    public static function platform ()
    {
        return self::$sPlatform;
    }

    public static function table ()
    {
        return self::$sTable;
    }

    public static
    function first ($sSql, $aBindValue = [], $bWriteSql = false)
    {

        if (!$sSql) {
            return false;
        }
//        if (!$sSql || !$aBindValue) {
//            return FALSE;
//        }
//
//        if (!is_array($aBindValue)) {
//            return FALSE;
//        }

        return parent::first($sSql, $aBindValue, $bWriteSql);
    }

    public static
    function insert ($aData = [], $bWriteSql = false)
    {
        if (!$aData) {
            return FALSE;
        }

        if (!is_array($aData)) {
            return FALSE;
        }

        //        echo 1;return;
//        return parent::insert($aData, $bQueue, $bWriteSql);
        return parent::insert($aData, $bWriteSql);
    }

    public static
    function all ($sSql, $aWhere = [], $bWriteSql = false)
    {

        if (!$sSql) {
            return false;
        }
//        if (!$aWhere) {
//            return FALSE;
//        }
//
//        if (!is_array($aWhere)) {
//            return FALSE;
//        }

        //        echo 1;return;
        return parent::all($sSql, $aWhere, $bWriteSql);
    }
}
