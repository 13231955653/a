<?php

namespace command\Queue;

use command\CommandFather;
use ToolClass\Cache\Cache;
use model\publics\ImageList;
use ToolClass\Database\Mysql as MysqlTool;
use ToolClass\Date\Time;
use ToolClass\Model\Mysql;
use ToolClass\Queue\Queue;
use ToolClass\Json\Json;

class ImageLists extends CommandFather
{
    public $sCommandName = 'queue_image_lists';

    private $iDisposeQueueErrorWaitTime = 1;
    private $iDisposeQueueErrorMaxRetryNumber = 3;

    public
    function __construct ()
    {
    }

    public
    function do ()
    {
        $this->popList();
    }

    private
    function popList ()
    {
        $this->sQueueName = Queue::setQueueName(Queue::updateIamgeUsedNumber());

        $iWaitTime = Queue::queueWaitTime();

        $sAction = Queue::action();
        $sUpdateAction = Queue::updateQueueName();
        while ( TRUE ) {
            usleep( $iWaitTime );

            if ( $sQueueData = Cache::rPop( $this->sQueueName ) ) {
                $aData = Json::toArray( $sQueueData );

                switch ($aData[$sAction]) {
                    case  $sUpdateAction:
                        $this->update($aData);
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

        $this->insert( $aData, $iNumber + 1 );
    }

    private
    function update (
        $aData,
        $iNumber = 0
    ) {
        $sTable = ImageList::table();

        $sPrimaryKey = ImageList::primary();
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

        foreach ( $res as $k => $v ) {
            if ( $k === $sPrimaryKey ) {
                continue;
            }

            if ( in_array( $k, [ ImageList::usedNumber() ] ) ) {
                $aData[ $sDataKey ][ $k ]
                    = (int)$aData[ $sDataKey ][ $sIncrbyKey ][ $k ] + (int)$v;
            }
        }
        unset( $aData[ $sDataKey ][ $sIncrbyKey ] );
        $aDataKeys = $oMysql = NULL;
        unset( $aDataKeys, $oMysql );


        $oMysql = Mysql::table( $sTable );

        $oMysql->where( $aData[ $sWhereKey ] );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->writeSql( $aData[ $sWriteSqlKey ] );

        $oMysql->bQueue( TRUE );

//        $aData[ $sDataKey ][ImageList::updtaeTime()] = Time::nowRunTime();

        $res1 = $oMysql->update( $aData[ $sDataKey ] );

        Cache::unlockForDatabase( $sTable, $res[ $sPrimaryKey ] );

        if (!$res1) {
            $this->retry($aData, $iNumber);
        }
    }
}
