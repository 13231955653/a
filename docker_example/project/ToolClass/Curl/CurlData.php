<?php

namespace ToolClass\Curl;

use model\publics\SpiderCurlData;
//use model\publics\ZhongGuanCunXiaoHuaSpider;
use ToolClass\Log\Exception;
//use ToolClass\Model\Mysql as MysqlTool;
use ToolClass\Model\Mysql;
use ToolClass\Queue\Queue;
use ToolClass\Server\Server;
use ToolClass\Date\Time;

class CurlData
{
    public static
    function insertValue (
        $sSpiderName = '',
        $sOriginUrl = '',
        $sValue = '',
        $iClassifyId = 0
    ) {
        if ( !$sSpiderName || !$sOriginUrl || !$sValue || !$iClassifyId ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'curl data must be no empty' )
                )
            );
            return FALSE;
        }

        if ( mb_strlen( $sValue ) > SpiderCurlData::maxValue() ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'curl data too long' )
                )
            );
            return FALSE;
        }

        if ( !self::existSameEncodeValue( $sValue ) ) {
            $aData[ SpiderCurlData::encodeValueFeild() ]
                                                 = SpiderCurlData::encodeValue(
                $sValue
            );
            $aData[ SpiderCurlData::spiderName() ]    = $sSpiderName;
            $aData[ SpiderCurlData::value() ]    = $sValue;
            $aData[ SpiderCurlData::originUrl() ]    = $sOriginUrl;
            $aData[ SpiderCurlData::status() ]   = SpiderCurlData::normalNoUsed(
            );
            $aData[ SpiderCurlData::addTime() ]  = Time::nowRunTime();
            $aData[ SpiderCurlData::classify() ] = (int)$iClassifyId;
            return Queue::insertInsertQueue(
                Queue::curlData(),
                $aData,
                FALSE,
                TRUE
            );
        }

        Exception::throwException(
            Server::response(
                Server::errorStatus(),
                Server::returnError( 'curl data exits' )
            )
        );
        return FALSE;
    }

    public static
    function existSameEncodeValue (
        $sValue = ''
    ) {
        if ( !$sValue ) {
            return TRUE;
        }

        if ( !is_string( $sValue ) ) {
            return TRUE;
        }

        $aWhere = [];
        $aWhere[ SpiderCurlData::encodeValueFeild() ]
                = SpiderCurlData::encodeValue(
            $sValue
        );

        $oMysql = Mysql::table( SpiderCurlData::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        //        $oMysql->writeSql(false);

        $oMysql->select(
            [
                SpiderCurlData::primary()
            ]
        );

        return $oMysql->first() ? TRUE : FALSE;
    }
}