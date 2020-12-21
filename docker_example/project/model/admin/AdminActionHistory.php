<?php

namespace model\admin;

use model\Mysql;

class AdminActionHistory extends Mysql
{
    public static $sTable = 'admin_action_historys';

    public static $sPlatform = 'admin';

    public static $bQueueFeildRetry = true;

    public static $sAction1 = 1; //登录
    public static $sAction2 = 2; //退出

    private
    function __construct ()
    {
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

        return parent::all($sSql, $aWhere, $bWriteSql);
    }
}
