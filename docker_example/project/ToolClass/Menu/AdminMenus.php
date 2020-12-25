<?php

namespace ToolClass\Menu;

use model\admin\AdminMenu as AdminMenuModel;
//use ToolClass\Arrays\Arrays;
//use ToolClass\Cache\AdminCache;
//use ToolClass\Cache\RedisKey;
//use ToolClass\Cache\Cache;
//use ToolClass\Json\Json;
//use ToolClass\Log\Exception;
//use ToolClass\Model\Mysql;
//use ToolClass\Server\Server;
//use ToolClass\Log\ErrorInformAdminThrow;
//use ToolClass\Strings\Strings;

use ToolClass\ToolFather;

class AdminMenus extends ToolFather
{
    //    private static $sSortColumn = 'id';
    //    private static $sPid = 'father_id';
    public static $sChildTagKey = 'son';

    //    private static $aNeedGetAdminInfoColumn = [
    //        'id',
    //        'jurisdiction'
    //    ];

    //    private static $sjurisdictionColumn              = 'jurisdiction_require';
    //    private static $sUserjurisdictionColumn          = 'user_jurisdiction';
    //    private static $aAdminInfojurisdictionColumn     = 'jurisdiction';
    //    private static $aAdminInfoUserjurisdictionColumn = 'id';

    //    private static $aAdminMenuNeedColumn = [
    //        'id',
    //        'name',
    //        'url',
    //        'father_id',
    //        'jurisdiction_require',
    //        'user_jurisdiction'
    //    ];

    //    public static
    //    function adminMenuJurisdictionColumn ()
    //    {
    //        return AdminMenuModel::$sJurisdictionRequireName;
    //    }

    //    public static
    //    function adminMenuJurisdictionColumn ()
    //    {
    //        return AdminMenuModel::$sJurisdictionRequireName;
    //    }

    //    public static
    //    function adminMenuUserJurisdictionColumn ()
    //    {
    //        return AdminMenuModel::$sUserJurisdiction;
    //    }

    //    public static $sStatusFeild = 'status';

    private static
    function getAndFiltrateAdminMenu (
        $aWhere = [],
        $aDelFeild = []
    ) {
        $aMenu = self::queryAdminMenu( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $aMenu = self::retainPlatform(
            AdminMenuModel::$sAdminPlatform,
            $aMenu
        );

        $aMenu = self::delAdminMenuNoJurisdictionFeildFeild(
            $aMenu
        );

        if ( $aDelFeild ) {
            $aMenu = self::delMenuFeild(
                $aDelFeild,
                $aMenu
            );
        }

        $aDelFeild = NULL;
        unset( $aDelFeild );
        return $aMenu;
    }

    public static
    function queryOneMenuDetail ($iMenuId = 0)
    {
        if (!$iMenuId) {
            return [];
        }

        $aWhere = [];
        $aWhere[AdminMenuModel::$sIdName] = (int)$iMenuId;
        $res = self::getAndFiltrateAdminMenu( $aWhere, [] );
        ///////////////////////
        /// 删除为假的数据，减少带宽消耗
        if ($res) {
            foreach ($res[array_keys($res)[0]] as $k => $v) {
                if (!Strings::judgeStringTrueFalse($v)) {
                    unset($res[array_keys($res)[0]][$k]);
                }
            }
        }
//        var_dump($res);
        return $res;
    }

    public static
    function queryAdminMenuList ()
    {
        $res = self::getAndFiltrateAdminMenu( [], [
            AdminMenuModel::$sWhoAddFeild,
            AdminMenuModel::$sAddTimeFeild,
            AdminMenuModel::$sWhoUpdateFeild,
            AdminMenuModel::$sUpdateTimeFeild,
            AdminMenuModel::$sWhoDelFeild,
            AdminMenuModel::$sDelTimeFeild,
        ] );
        ///////////////////////
        /// 删除为假的数据，减少带宽消耗
//        if ($res) {
//            foreach ($res as $k => $v) {
//                foreach ($v as $k1 => $v1) {
//                    if (!Strings::judgeStringTrueFalse($v1)) {
//                        unset($res[$k][$k1]);
//                    }
//                }
//            }
//        }

        return $res;
    }

    public static
    function retainPlatform (
        $sPlatform = '',
        $aAdminMenu = []
    ) {
        if ( !$sPlatform ) {
            return $aAdminMenu;
        }

        foreach ( $aAdminMenu as $k2 => $v2 ) {
            if ( !Arrays::inCommaStringArray(
                $sPlatform,
                $v2[ AdminMenuModel::$sPlatforms ]
            ) ) {
                unset( $aAdminMenu[ $k2 ] );
            }
        }

        return $aAdminMenu;
    }

    public static
    function queryAdminMenus (
        $aDelData = []
    ) {
        $aWhere = [];
        $aWhere[ AdminMenuModel::$sStatusFeild ]
                = AdminMenuModel::$iNormalStatus;

        //        $aMenu = self::getAndFiltrateAdminMenu ($aWhere, [
        //            AdminMenuModel::$sPlatforms,
        //            AdminMenuModel::$sStatusFeild,
        //            AdminMenuModel::$sExplainsFeild,
        //            AdminMenuModel::$sJurisdictionRequireName,
        //            AdminMenuModel::$sUserJurisdiction,
        //            AdminMenuModel::$sFatherIdListFeild
        //        ]);

        return self::getAndFiltrateAdminMenu(
            $aWhere,
            [
                AdminMenuModel::$sPlatforms,
                AdminMenuModel::$sStatusFeild,
                AdminMenuModel::$sExplainsFeild,
                AdminMenuModel::$sJurisdictionRequireName,
                AdminMenuModel::$sUserJurisdiction,
                AdminMenuModel::$sFatherIdListFeild
            ]
        );
    }

    private static
    function delMenuFeild (
        $aFeild = [],
        $aAdminMenu = []
    ) {
        if ( !$aFeild || !$aAdminMenu ) {
            return $aAdminMenu;
        }

        foreach ( $aFeild as $v1 ) {
            foreach ( $aAdminMenu as $k2 => $v2 ) {
                unset( $aAdminMenu[ $k2 ][ $v1 ] );
            }
        }

        return $aAdminMenu;
    }

    private static
    function delAdminMenuNoJurisdictionFeildFeild (
        $aMenu
    ) {
        $aAdminCache = AdminCache::getLoginAdminInfo(
            [
                RedisKey::$aAdminInfoUserjurisdictionColumn,
                RedisKey::$aAdminInfojurisdictionColumn
            ]
        );

        foreach ( $aMenu as $k => $v ) {
            if ( ( !Arrays::inCommaStringArray(
                    $aAdminCache[ RedisKey::$aAdminInfojurisdictionColumn ],
                    $v[ AdminMenuModel::$sJurisdictionRequireName ]
                )
                   && !Arrays::inCommaStringArray(
                    $aAdminCache[ RedisKey::$aAdminInfoUserjurisdictionColumn ],
                    $v[ AdminMenuModel::$sUserJurisdiction ]
                ) ) ) {
                unset( $aMenu[ $k ] );
            }
        }

        $aAdminCache = NULL;
        unset( $aAdminCache );

        return $aMenu;
    }

    ///////////////////////////////////////////////////////
    public static
    function queryAdminMenu (
        $aWhere = []
    ) {
        $aMenu = self::getAdminMenuFromCache();
        if ( !$aMenu ) {
            $aMenu = self::queryAdminMenuByMysql( $aWhere );
            if ( !$aMenu ) {
                return Exception::throwException(
                    Server::response(
                        Server::errorStatus(),
                        Server::$aReturnData[ 'no admin menus 2' ]
                    )
                );
            }

            self::cacheMenu( $aMenu );
        }

        foreach ($aWhere as $k => $v) {
            foreach ($aMenu as $k1 => $v1) {
                if ($v1[$k] != $v) {
                    unset($aMenu[$k1]);
                }
            }
        }

        return $aMenu;
    }

    private static
    function getMenuFromCahce ()
    {
        $res1 = self::getAdminMenuFromCache();
        $res2 = self::getAdminMenuFromCache();
        return $res1;
    }

    public static
    function delAdminMenuCache ()
    {
        return Cache::del( RedisKey::$sAdminMenuRedisJsonKey );
    }

    private static
    function cacheMenu (
        $aMenu = []
    ) {
        if ( !$aMenu ) {
            ErrorInformAdminThrow::recordErrorAndInformAdmin(
                17,
                Server::$aReturnData[ 'admin menu data is null' ]
            );
        }

        self::cacheAdminMenu( $aMenu );
        self::cacheHomeMenu( $aMenu );

        $aMenu = NULL;
        unset( $aMenu );

        return TRUE;
    }

    private static
    function cacheHomeMenu (
        $aMenu = []
    ) {
        if ( !$aMenu ) {
            return;
        }

        $res   = FALSE;
        $aData = [];
        foreach ( $aMenu as $k => $v ) {
            if ( Arrays::inCommaStringArray(
                AdminMenuModel::$sHomePlatform,
                $v[ AdminMenuModel::$sPlatforms ]
            ) ) {
                $aData[ $v[ AdminMenuModel::$sNameFeild ] ] = Json::toJson(
                    $v
                );
            }
        }
        if ( !$aData ) {
            $aMenu = $res = NULL;
            unset( $aMenu, $res );
            return;
        }

        $res = Cache::hMSet( RedisKey::$sHomeMenuRedisJsonKey, $aData );
        if ( !$res ) {
            $aMenu = $res = $aData = NULL;
            unset( $aMenu, $res, $aData );
            ErrorInformAdminThrow::recordErrorAndInformAdmin(
                18,
                Server::$aReturnData[ 'hmset admin menu error 1' ]
            );
        }

        $aMenu = $res = $aData = NULL;
        unset( $aMenu, $res, $aData );
    }

    private static
    function cacheAdminMenu (
        $aMenu = []
    ) {
        if ( !$aMenu ) {
            return;
        }

        $res   = FALSE;
        $aData = [];
        foreach ( $aMenu as $k => $v ) {
            if ( Arrays::inCommaStringArray(
                AdminMenuModel::$sAdminPlatform,
                $v[ AdminMenuModel::$sPlatforms ]
            ) ) {
                $aData[ $v[ AdminMenuModel::$sNameFeild ] ] = Json::toJson(
                    $v
                );
            }
        }
        if ( !$aData ) {
            $aMenu = $res = $aData = NULL;
            unset( $aMenu, $res, $aData );
            return;
        }

        $res = Cache::hMSet( RedisKey::$sAdminMenuRedisJsonKey, $aData );
        if ( !$res ) {
            $aMenu = $res = $aData = NULL;
            unset( $aMenu, $res, $aData );
            ErrorInformAdminThrow::recordErrorAndInformAdmin(
                19,
                Server::$aReturnData[ 'hmset admin menu error 2' ]
            );
        }

        $aMenu = $res = $aData = NULL;
        unset( $aMenu, $res, $aData );
    }

    private static
    function getAdminMenuFromCache ()
    {
        $aMenu = Cache::hGetAll( RedisKey::$sAdminMenuRedisJsonKey );
        if ( !$aMenu ) {
            return [];
        }

        foreach ( $aMenu as $k => $v ) {
            $aMenu[ $k ] = Json::toArray( $v );
        }

        return $aMenu;
    }

    private static
    function queryAdminMenuByMysql (
        $aWhere = []
    ) {
        $oMysql = new Mysql( AdminMenuModel::$sTable );
        $oMysql->table();

        $oMysql->writeSql( TRUE );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->select();

        $aAdminMenu = $oMysql->all();
        if ( !$aAdminMenu ) {
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'no admin menus 3' ]
                )
            );
        }

        return $aAdminMenu;
    }
}