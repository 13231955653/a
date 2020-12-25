<?php
namespace Service\Strings\string;

use model\publics\string\JianFanFont as JianFanFontModel;
use Service\Depend\DependContainer;
use Service\Ioc\Ioc;

//use ToolClass\Database\Mysql as MysqlTool;
//use ToolClass\Model\Mysql;
//use ToolClass\Arrays\Arrays;

//use Service\Ioc\Ioc;
//use Service\Depend\DependContainer;
//use ToolClass\Log\Exception;
//use ToolClass\Server\Server;

require_once __ROOT_DIR__
             . DIRECTORY_SEPARATOR
             . 'define'
             . DIRECTORY_SEPARATOR
             . 'string.php';

class ChineseStringModel
{
    public static function allNormalChinese ()
    {
        $aWhere = [];
        $aWhere[JianFanFontModel::status()] = JianFanFontModel::normalStatus();
        return self::matchConditionChineseString($aWhere);
    }

    ///////////////////////////////////////////////////
    public static function maxGetNumber ()
    {
        return CHINESE_MAX_GET_NUMBER;
    }

    public static function matchConditionChineseString ($aWhere = [])
    {
        $sDependName = DependContainer::databaseTool();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
        $oDatabaseService = Ioc::resolve($sDependName);

        $sDependName = DependContainer::array();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
        $oArrayService = Ioc::resolve($sDependName);

        $res = true;
        $aData = [];
        $sSortByKey = 'id';
        $sSort = 'ASC';
        $iBeginId = 0;
        $aMaxMinId = [];
        $iLimitNumber = self::maxGetNumber();
        while ($res) {
            $aWhere[$oDatabaseService->daYu()][JianFanFontModel::primary()] = $iBeginId;
            $res = JianFanFontModel::getStringFromDatabase( $aWhere, $iLimitNumber, '*', [ $sSortByKey => $sSort]);
            if (!$res) {
                break;
            }

            $aData = array_merge($aData, $res);

            $aMaxMinId = $oArrayService->arrayMaxMin($res, $sSortByKey);
            $iBeginId = $sSort === 'ASC' ? $aMaxMinId[$oArrayService->arrayMaxKey()][$oArrayService->value()] : $aMaxMinId[$oArrayService->arrayMinKey()][$oArrayService->value()];
        }
        $aWhere = $aMaxMinId = $res = $sSortByKey = $sSort = $iBeginId = $aMaxMinId = $iLimitNumber = null;
        unset($aWhere, $aMaxMinId, $res, $sSortByKey, $sSort, $iBeginId, $aMaxMinId, $iLimitNumber);

        return $aData;
    }

    public static function insert ($aFontData)
    {
        return JianFanFontModel::insert($aFontData);
    }

    public static
    function checkExistSmaeMd5 (
        $sWordMd5 = ''
    ) {
        if ( !$sWordMd5 ) {
            return TRUE;
        }

        $aWhere                            = [];
        $aWhere[ JianFanFontModel::wordUrlencodeMd5() ] = strtoupper( $sWordMd5 );

        $oMysql = Mysql::table( JianFanFontModel::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->select(JianFanFontModel::primary());

        return $oMysql->first();
    }
}
