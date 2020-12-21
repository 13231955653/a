<?php

namespace model\publics;

use model\Mysql;

class NoExistLangFeild extends Mysql
{
    public static $sTable = 'no_exist_lang_feilds';

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
