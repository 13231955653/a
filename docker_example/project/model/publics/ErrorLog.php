<?php

namespace model\publics;

use model\Mysql;

class ErrorLog extends Mysql
{
    public static $sTable = 'error_logs';

    public static $sPlatform = 'publics';

    public static $bQueueFeildRetry = TRUE;

    private
    function __construct ()
    {
    }

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

    public static //    function insert ($aData = [], $sPlatform = FALSE, $sTable = FALSE, $bWriteSql = TRUE, $bQueue = TRUE)
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
