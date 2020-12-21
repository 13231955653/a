<?php

namespace ToolClass\Lang;

use ToolClass\Model\Mysql;
use model\publics\Lang as LangModel;

class Lang
{
    public static function checkWhetherExistValue ($sValue = '')
    {
        if (!$sValue) {
            return TRUE;
        }

        $aWhere[LangModel::$sFiledName] = $sValue;

        $oMysql = new Mysql(LangModel::$sTable);
        $oMysql->table();
        $oMysql->writeSql( TRUE );
        $oMysql->where($aWhere);
        $oMysql->select(LangModel::$sIdFeild);
        $res = $oMysql->first();

        $sValue = $oMysql = $aWhere = null;
        unset($sValue, $oMysql, $aWhere);

        return $res;
    }
}