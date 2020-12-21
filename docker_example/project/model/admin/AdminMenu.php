<?php

namespace model\admin;

use model\Mysql;

class AdminMenu extends Mysql
{
    public static $sTable = 'admin_menus';

    public static $sPlatform = 'admin';

    public static $bQueueFeildRetry = true;

    public static $iNormalStatus = 1;
    public static $iAdminJurisdiction = 1; // super admin

    public static $sIdName = 'id';
    public static $sNameFeild = 'name';
    public static $sUrlFeild = 'url';
    public static $sPliesFeild = 'plies';
    public static $sFatherIdName = 'father_id';
    public static $sFatherIdListFeild = 'father_id_list';
    public static $sJurisdictionRequireName = 'jurisdiction_require';
    public static $sUserJurisdiction = 'user_jurisdiction';
    public static $sExplainsFeild = 'explains';

    public static $sWhoAddFeild = 'who_add';
    public static $sAddTimeFeild = 'add_time';
    public static $sWhoUpdateFeild = 'who_update';
    public static $sUpdateTimeFeild = 'update_time';
    public static $sWhoDelFeild = 'who_delete';
    public static $sDelTimeFeild = 'delete_time';

    public static $sStatusFeild = 'status';

    public static $sPlatforms = 'platform';
    public static $sAdminPlatform = '1';
    public static $sHomePlatform = '2';

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

    protected static
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

//        if (!is_array($aWhere)) {
//            return FALSE;
//        }

//        var_dump(parent::all($sSql, $aWhere, $bWriteSql));
        //        echo 1;return;
        return parent::all($sSql, $aWhere, $bWriteSql);
    }
}
