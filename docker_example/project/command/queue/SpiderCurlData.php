<?php

namespace command\Queue;

use command\CommandFather;
use model\publics\SpiderCurlData as SpiderCurlDataModel;
use ToolClass\Cache\Cache;
use ToolClass\Json\Json;
use ToolClass\Queue\Queue;

class SpiderCurlData extends CommandFather
{
    public $sCommandName = 'queue_spider_curl_data';

    private $iDisposeQueueErrorWaitTime = 1;
    private $iDisposeQueueErrorMaxRetryNumber = 5;

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
        $this->sQueueName = Queue::setQueueName(Queue::curlData());

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
//        $sTable = SpiderCurlDataModel::table();

        $sDataKey = Queue::dataKey();
        if ( !isset( $aData[ $sDataKey ] ) ) {
            return TRUE;
        }

//        $sKey = self::setLockKey( $aData[ $sDataKey ] );

//        if ( !RedisTool::lockForDatabase( $sTable, $sKey ) ) {
//            $this->retry( $aData, $iNumber );
//            return FALSE;
//        }

        $res = SpiderCurlDataModel::insert(
            $aData[ $sDataKey ],
            FALSE,
            FALSE
        );
        if ( !$res ) {
            $this->retry( $aData, $iNumber + 1 );
        }
    }

//    private
//    function setLockKey (
//        $aData
//    ) {
//        ksort( $aData );
//        $sKey = '';
//        foreach ( $aData as $k => $v ) {
//            $sKey .= strtolower($k) . '===' . strtolower($v) . '====';
//        }
//
//        return strtolower( md5( $sKey ) );
//    }
}
