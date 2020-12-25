<?php

namespace ToolClass\Strings\chengyu;

use model\publics\ReplenishChengYu as ReplenishChengYuModel;
//use ToolClass\Model\Mysql;

use ToolClass\ToolFather;

class ReplenishChengYu extends ToolFather
{
    public static function query ()
    {
        $aWhere = [];
        $aWhere[ReplenishChengYuModel::status()] = ReplenishChengYuModel::normalStatus();
        $oMysql = Mysql::table( ReplenishChengYuModel::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $sWordFeild = ReplenishChengYuModel::word();
        $sWordEncodeFeild = ReplenishChengYuModel::urlencodeFeild();
        $aData = [
            $sWordFeild,
            $sWordEncodeFeild
        ];
        $oMysql->select( $aData );
        $aData = NULL;
        unset( $aData );

        $res = $oMysql->all();
        $oMysql = NULL;
        unset($oMysql);

        if (!$res) {
            $sWordFeild = $sWordEncodeFeild = null;
            unset($sWordFeild, $sWordEncodeFeild);
            return FALSE;
        }

        foreach ($res as $k => $v) {
            if (ReplenishChengYuModel::urlDncode($v[$sWordEncodeFeild]) !== $v[$sWordFeild]) {
                unset($res[$k]);
                continue;
            }

            $res[$k] = $v[$sWordFeild];
        }
        $sWordFeild = $sWordEncodeFeild = null;
        unset($sWordFeild, $sWordEncodeFeild);

        return array_unique($res);
    }
}
