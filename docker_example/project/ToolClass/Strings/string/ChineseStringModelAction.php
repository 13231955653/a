<?php
namespace ToolClass\Strings\string;

use model\publics\string\JianFanFont as JianFanFontModel;
use ToolClass\Database\Mysql as MysqlTool;
use ToolClass\Log\Exception;
use ToolClass\Model\Mysql;
use ToolClass\Server\Server;
use ToolClass\Arrays\Arrays;

require_once __ROOT_DIR__
             . DIRECTORY_SEPARATOR
             . 'define'
             . DIRECTORY_SEPARATOR
             . 'string.php';

class ChineseStringModelAction
{
    public static function update ($aWhere = [], $aUpdateData = [])
    {
        if (!$aWhere || !$aUpdateData) {
            return FALSE;
        }

        $oMysql = Mysql::table( JianFanFontModel::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $res = $oMysql->update($aUpdateData);

        $sSearchWhat = $iGetNum = $oMysql = NULL;
        unset($sSearchWhat, $iGetNum, $oMysql);

        return $res ? $res : FALSE;
    }

    public static function allNormalChinese ()
    {
        $aWhere = [];
        $aWhere[JianFanFontModel::status()] = JianFanFontModel::normalStatus();
        return self::allChinese($aWhere);
    }

    ///////////////////////////////////////////////////
    public static function maxGetNumber ()
    {
        return CHINESE_MAX_GET_NUMBER;
    }

    public static function allChinese ($aWhere = [])
    {
        $res = true;
        $aData = [];
        $sSortByKey = 'id';
        $sSort = 'ASC';
        $iBeginId = 0;
        $aMaxMinId = [];
        $iLimitNumber = self::maxGetNumber();
        while ($res) {
            $aWhere[MysqlTool::daYu()][JianFanFontModel::primary()] = $iBeginId;
            $res = self::getJianFanZiFromDatabase($aWhere, $iLimitNumber, '*', [$sSortByKey => $sSort]);
            if (!$res) {
                break;
            }

            $aData = array_merge($aData, $res);

            $aMaxMinId = Arrays::arrayMaxMin($res, $sSortByKey);
            $iBeginId = $sSort === 'ASC' ? $aMaxMinId[Arrays::arrayMaxKey()][Arrays::value()] : $aMaxMinId[Arrays::arrayMinKey()][Arrays::value()];
        }
        $aWhere = $aMaxMinId = $res = $sSortByKey = $sSort = $iBeginId = $aMaxMinId = $iLimitNumber = null;
        unset($aWhere, $aMaxMinId, $res, $sSortByKey, $sSort, $iBeginId, $aMaxMinId, $iLimitNumber);

        return $aData;
    }

    public static function getJianFanZiFromDatabase ($aWhere = [], $iGetNum = 1, $aSelect = '*', $aOrder = [])
    {
        if (!$aWhere) {
            return FALSE;
        }

        $oMysql = Mysql::table( JianFanFontModel::table() );

        if (isset($aWhere[MysqlTool::daYu()])) {
            $oMysql->whereDaYu($aWhere[MysqlTool::daYu()]);
            unset($aWhere[MysqlTool::daYu()]);
        }
        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->select($aSelect);

        if ($aOrder) {
            foreach ($aOrder as $k => $v) {
                $oMysql->orderBy($k, $v);
            }
        }

        if (is_numeric($iGetNum)) {
            $res = $iGetNum > 1 ? $oMysql->getNum($iGetNum) : $oMysql->first();
        } else {
            switch ($iGetNum) {
                case 'all' :
                    $res = $oMysql->all();
                    break;
                case 'count' :
                    $res = $oMysql->count();
                    break;
                default:
                    Exception::throwException(
                        Server::response(
                            Server::errorStatus(),
                            Server::returnError('no get chinese number')
                        )
                    );
                    return FALSE;
                    break;
            }
        }

        $sSearchWhat = $iGetNum = $oMysql = NULL;
        unset($sSearchWhat, $iGetNum, $oMysql);

        return $res ? $res : FALSE;
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
