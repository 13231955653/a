<?php

namespace command\Queue\string\chengyu;

use command\CommandFather;
use ToolClass\Cache\Cache;
use ToolClass\Database\Mysql as MysqlTool;
use ToolClass\Json\Json;
use ToolClass\Model\Mysql;
use ToolClass\Queue\Queue;
use model\publics\ChengYu as ChengYuModel;

class ChengYu extends CommandFather
{
    public $sCommandName = 'cheng_yu_queue';

    public $sQueueName = 'cheng_yu_queue';

    private $iDisposeQueueErrorWaitTime = 1;
    private $iDisposeQueueErrorMaxRetryNumber = 9;

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $this->popList();
    }
    private
    function popList ()
    {
        $this->sQueueName = Queue::setQueueName($this->sQueueName);

        $iWaitTime = Queue::queueWaitTime();
        while ( TRUE ) {
            usleep( $iWaitTime );

            if ( $sQueueData = Cache::rPop( $this->sQueueName ) ) {
                $aData = Json::toArray( $sQueueData );

                switch ($aData[Queue::action()]) {
                    case  Queue::updateQueueName() :
                        $this->update( $aData );
                        break;
                }
            }
        }
    }

    private function retryMaxNumber ()
    {
        return $this->iDisposeQueueErrorMaxRetryNumber;
    }

    private function waitTime ()
    {
        return $this->iDisposeQueueErrorWaitTime;
    }

    private
    function retry (
        $aData,
        $iNumber
    ) {
        if ( $iNumber > $this->retryMaxNumber() ) {
            Queue::insertRetryQueue(
                $this->sQueueName,
                $aData
            );
            return;
        }

        sleep( $this->waitTime() );

        $this->update( $aData, $iNumber + 1 );
    }

    private
    function update (
        $aData,
        $iNumber = 0
    ) {
        $sTable = ChengYuModel::table();

        $sPrimaryKey = ChengYuModel::primary();
        $aDataKeys   = [];
        $aDataKeys[] = $sPrimaryKey;

        $sIncrbyKey = MysqlTool::incrbyKey();

        $sDataKey = Queue::dataKey();

        if ( isset( $aData[ $sDataKey ][ $sIncrbyKey ] )
             && $aData[ $sDataKey ][ $sIncrbyKey ] ) {
            $aDataKeys = array_merge(
                $aDataKeys,
                array_keys(
                    $aData[ $sDataKey ][ $sIncrbyKey ]
                )
            );
        }


        $oMysql = Mysql::table( $sTable );

        $sWhereKey = Queue::whereKey();

        $oMysql->where( $aData[ $sWhereKey ] );
        $aWhere = NULL;
        unset( $aWhere );

        $sWriteSqlKey = Queue::writeSqlKey();
        $oMysql->writeSql( $aData[ $sWriteSqlKey ] );

        $oMysql->select( $aDataKeys );
        $res = $oMysql->first();

        if ( !$res ) {
            $res = $aDataKeys = $oMysql = NULL;
            unset( $res, $aDataKeys, $oMysql );
            return TRUE;
        }
        $res = (array)$res;

        if ( !Cache::lockForDatabase( $sTable, $res[ $sPrimaryKey ] ) ) {
            $this->retry($aData, $iNumber);
            return FALSE;
        }

        $sDataKey1 = MysqlTool::updateDataKey();
        foreach ($aData[ $sDataKey ] as $k => $v) {
            $aData[ $sDataKey ][ $sDataKey1 ][ $k ] = $v;
        }

        foreach ( $res as $k => $v ) {
            if ( $k === $sPrimaryKey ) {
                continue;
            }

            if ( in_array( $k, [ ChengYuModel::usedNumber() ] ) ) {
                $aData[ $sDataKey ][ $sDataKey1 ][ $k ]
                    = (int)$aData[ $sDataKey ][ $sIncrbyKey ][ $k ] + (int)$v;
                continue;
            }
        }

        unset( $aData[ $sDataKey ][ $sDataKey1 ][ $sIncrbyKey ] );
        $aDataKeys = $oMysql = NULL;
        unset( $aDataKeys, $oMysql );


        $oMysql = Mysql::table( $sTable );

        $oMysql->where( $aData[ $sWhereKey ] );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->writeSql( $aData[ $sWriteSqlKey ] );

        $oMysql->bQueue( TRUE );

        $res1 = $oMysql->update( $aData[ $sDataKey ][ $sDataKey1 ] );

        Cache::unlockForDatabase( $sTable, $res[ $sPrimaryKey ] );

        if (!$res1) {
            $this->retry($sTable, $aData, $iNumber);
        }
    }
}
