<?php

namespace command\Queue\string\word;

use command\CommandFather;

use model\publics\word\ReplenishWord as ReplenlishWordModel;

use ToolClass\Cache\Cache;
use ToolClass\Json\Json;
use ToolClass\Model\Mysql;
use ToolClass\Queue\Queue;

class ReplenlishWord extends CommandFather
{
    public $sCommandName = 'replenlish_word_queue';
    public $sQueueName = 'replenlish_word_queue';

    private $iDisposeQueueErrorWaitTime = 1;
    private $iDisposeQueueErrorMaxRetryNumber = 9;

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
        $this->sQueueName = Queue::setQueueName($this->sQueueName);

        $iWaitTime = Queue::queueWaitTime();

        $sAction = Queue::action();
        $sUpdateAction = Queue::insertQueueName();
        while ( TRUE ) {
            usleep( $iWaitTime );

            if ( $sQueueData = Cache::rPop( $this->sQueueName ) ) {
                $aData = Json::toArray( $sQueueData );

                switch ($aData[$sAction]) {
                    case  $sUpdateAction:
                        $this->insert($aData);
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
    function insert (
        $aData,
        $iNumber = 0
    ) {
        $sDataKey = Queue::dataKey();
        if ( !isset( $aData[ $sDataKey ] ) ) {
            return TRUE;
        }

        $aWhere = [];
        $sWordMd5Feild = ReplenlishWordModel::wordMd5();
        if (isset($aData[ $sDataKey ][$sWordMd5Feild])) {
            $aWhere[$sWordMd5Feild] = $aData[ $sDataKey ][$sWordMd5Feild];
        }
        if ($aWhere) {
            $oMysql = Mysql::table( ReplenlishWordModel::table() );

            $oMysql->where( $aWhere );
            $aWhere = NULL;
            unset( $aWhere );

            $oMysql->writeSql($aData[ Queue::writeSqlKey() ] );

            $oMysql->select( ReplenlishWordModel::primary() );
            if ($oMysql->first()) {
                return TRUE;
            }
        }

        $res = ReplenlishWordModel::insert(
            $aData[ $sDataKey ],
            $aData[ Queue::writeSqlKey() ]
        );

        if ( !$res ) {
            $this->retry( $aData, $iNumber + 1 );
        }
    }
}
