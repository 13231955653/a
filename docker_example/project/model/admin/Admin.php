<?php
namespace model\admin;

use model\Mysql;

class Admin extends Mysql
{
    public static $sTable = 'admins';

    public static $sPlatform = 'admin';

    public static $iNormalStatus = 1;

    public static $bQueueFeildRetry = true;

    public static $sUserNameColumn = 'username';
    public static $sUserPwdColumn = 'password';
    public static $sUserStatusColumn = 'status';
    public static $sJurisdictionColumn = 'jurisdiction';
    public static $sIdColumn = 'id';

    private function __construct()
    {
    }

    ///////////////////////
    public static function updateAdminLoginData ($aAdminLoginInfo = [])
    {
        if (!$aAdminLoginInfo || !is_object($aAdminLoginInfo)) {
            return false;
        }

        if (
            !isset($aAdminLoginInfo->id)
            ||
            !isset($aAdminLoginInfo->username)
            ||
            !isset($aAdminLoginInfo->login_time)
        ) {
            return false;
        }

        return true;
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
