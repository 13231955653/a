<?php

namespace command\Spider;

use command\CommandFather;

use ToolClass\Cache\Cache;
use ToolClass\Model\Mysql;
use ToolClass\Database\Mysql as MysqlTool;

use model\publics\Spider as SpiderModel;
use model\publics\SpiderCurlData as SpiderCurlDataModel;

class StatisticsInsertCurlDataTotal extends CommandFather
{
    public $sCommandName = 'spider_statistics_insert_curl_data_total';

    private $iMaxRetryNumber = 9;

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $aCount = $this->countInsertCurlDataNumber();
        if (!$aCount) {
            return;
        }

        foreach ($aCount as $v) {
            if (!$this->querySpiderByName($v[SpiderCurlDataModel::spiderName()])) {
                continue;
            }

            $this->updateCurlNumber($v[SpiderCurlDataModel::spiderName()], $v[MysqlTool::statistics()]);
        }
    }

    private function updateCurlNumber ($sName, $iCurlNumber = 0, $iNumber = 0)
    {
        if ($iNumber > $this->iMaxRetryNumber) {
            return;
        }

        if (!$sName) {
            return FALSE;
        }

        $sNowName = SpiderModel::name();
        if ( !Cache::lockForDatabase( $sNowName , $sName ) ) {
            sleep(1);
            $this->retry($sName, $iCurlNumber, $iNumber + 1);
            return FALSE;
        }

        $aWhere = [];
        $aWhere[SpiderModel::name()] = $sName;

        $oMysql = Mysql::table( SpiderModel::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->writeSql( FALSE );

        $aData = [];
        $aData[SpiderModel::curlNumber()] = $iCurlNumber;
        $res = $oMysql->update( $aData );

        Cache::unlockForDatabase( $sNowName, $sName );

        return $res;
    }

    private
    function querySpiderByName ($sName = '')
    {
        if (!$sName) {
            return FALSE;
        }

        $aWhere                               = [];
        $aWhere[ SpiderModel::name() ]   = $sName;

        $oMysql = Mysql::table( SpiderModel::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        //        $oMysql->writeSql(false);

        $oMysql->select(
            [
                SpiderModel::name(),
            ]
        );

        return $oMysql->first();
    }

    private
    function countInsertCurlDataNumber ()
    {
        $oMysql = Mysql::table( SpiderCurlDataModel::table() );

        $aWhere = NULL;
        unset( $aWhere );

        //        $oMysql->writeSql(TRUE);

        $oMysql->group(SpiderCurlDataModel::spiderName());

        return $oMysql->count();
    }
}
