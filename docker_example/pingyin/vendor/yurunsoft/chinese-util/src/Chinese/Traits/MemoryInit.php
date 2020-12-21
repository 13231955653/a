<?php
namespace Yurun\Util\Chinese\Traits;

use Yurun\Util\Chinese;
use Yurun\Util\Chinese\SQLiteData;

trait MemoryInit
{
    protected function initData()
    {
        if (!isset(Chinese::$chineseData['chars'])) {
            if (USE_REDIS) {
                $redis = new \Redis();
                $redis->connect(REDIS_CONFIG['host'], REDIS_CONFIG['port']);
                
                $data = json_decode($redis->get(PING_YIN_DATA), true);
                if (!$data) {
                    SQLiteData::init();
                    $data = SQLiteData::getAllData();
        
                    $redis->set(PING_YIN_DATA, json_encode($data));
                }
            } else {
                SQLiteData::init();
                $data = SQLiteData::getAllData();
            }
    
            $this->parseData($data);
            Chinese::$chineseData['chars'] = $data;
        }
    }

    /**
     * 处理数据
     * @param array $array
     */
    protected function parseData (&$array)
    {
        $s = count($array);
        for ($i = 0; $i < $s; ++$i) {
            $char = $array[$i]['char'];
            unset($array[$i]['char']);
            $array[$char] = $array[$i];
            unset($array[$i]);
        }
    }
}