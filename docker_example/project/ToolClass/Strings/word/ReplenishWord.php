<?php

namespace ToolClass\Strings\word;

use model\publics\word\ReplenishWord as ReplenishWordModel;
use ToolClass\Model\Mysql;

class ReplenishWord
{
    public static function query ()
    {
        $aWhere = [];
        $aWhere[ReplenishWordModel::status()] = ReplenishWordModel::normalStatus();
        $oMysql = Mysql::table( ReplenishWordModel::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $sWordFeild = ReplenishWordModel::word();
        $sWordEncodeFeild = ReplenishWordModel::urlencodeFeild();
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
            if (ReplenishWordModel::urlDncode($v[$sWordEncodeFeild]) !== $v[$sWordFeild]) {
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
