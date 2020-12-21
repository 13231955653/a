<?php
namespace ToolClass\Strings\string;

use model\publics\string\JianFanFont as JianFanFontModel;
use ToolClass\Database\Mysql as MysqlTool;
use ToolClass\Depend\DependContainer;
use ToolClass\Log\Exception;
use ToolClass\Model\Mysql;
use ToolClass\Server\Server;
use ToolClass\Arrays\Arrays;

require_once __ROOT_DIR__
             . DIRECTORY_SEPARATOR
             . 'define'
             . DIRECTORY_SEPARATOR
             . 'string.php';

class ChineseStringModelTool
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

        $oDatabaseDepend = new DependContainer('database');
        $oDatabaseDepend = $oDatabaseDepend->selectClassDepend();

        $oDatabaseDepend->table(JianFanFontModel::table() );

        if (isset($aWhere[MysqlTool::daYu()])) {
            $oDatabaseDepend->whereDaYu($aWhere[MysqlTool::daYu()]);
            unset($aWhere[MysqlTool::daYu()]);
        }
        $oDatabaseDepend->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oDatabaseDepend->select($aSelect);

        if ($aOrder) {
            foreach ($aOrder as $k => $v) {
                $oDatabaseDepend->orderBy($k, $v);
            }
        }

        if (is_numeric($iGetNum)) {
            $res = $iGetNum > 1 ? $oDatabaseDepend->getNum($iGetNum) : $oDatabaseDepend->first();
        } else {
            switch ($iGetNum) {
                case 'all' :
                    $res = $oDatabaseDepend->all();
                    break;
                case 'count' :
                    $res = $oDatabaseDepend->count();
                    break;
                default:
                    $sSearchWhat = $iGetNum = $oDatabaseDepend = NULL;
                    unset($sSearchWhat, $iGetNum, $oDatabaseDepend);

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

        $sSearchWhat = $iGetNum = $oDatabaseDepend = NULL;
        unset($sSearchWhat, $iGetNum, $oDatabaseDepend);

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
