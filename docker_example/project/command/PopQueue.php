<?php

namespace command;

use command\CommandFather;
use ToolClass\Date\Time;
use ToolClass\Json\Json;
use ToolClass\Log\Exception;
use ToolClass\Server\Server;

class PopQueue extends CommandFather
{
    public $sCommandName = 'pop_queue';

    private $iStartTime = 0;
    private $iOutTime = 5;

    public
    function __construct ()
    {
        $this->iStartTime = Time::nowTime();
    }

    ///////////////////////////
    /// 定时任务/守护进程 死循环 查询队列 pop 队列
    public function do ()
    {
        $this->iStartTime = $this->iStartTime ? $this->iStartTime : Time::nowTime();

        $sExecSuffix = Server::osPlatform() === Server::$sLinuxOS ? ' >/dev/null &' : '';

        $sJsonQueue1 = ['queue' => 'test_queue1', 'a' => 1, 'b' => Time::nowTime()];
        $sJsonQueue1 = Json::toJson($sJsonQueue1);
        $sJsonQueue2 = ['queue' => 'test_queue2', 'a' => 2, 'b' => 2];
        $sJsonQueue2 = Json::toJson($sJsonQueue2);
        $aQueue = [];
        array_push($aQueue, $sJsonQueue2);
        array_push($aQueue, $sJsonQueue1);

        while (1) {
            if (Time::nowTime() - $this->iStartTime > $this->iOutTime) {
                Exception::throwException('queue timing die');
                return;
            }

            $sPopQueueJson = array_pop($aQueue);//////////////////////

            $sPopQueueJson = Json::analyJson($sPopQueueJson) ? Json::toArray($sPopQueueJson) : $sPopQueueJson;

            $sQueueCommand = '';
            switch ($sPopQueueJson['queue']) {
                case 'test_queue1' :
                    $sQueueCommand = 'TestQueue1';
                    break;
                case 'test_queue2' :
                    $sQueueCommand = 'TestQueue2';
                    break;
            }
            if (!$sQueueCommand) {
                return;
            }

//            var_dump(Json::toJson($sPopQueueJson));
            $cmd = 'php ' .  __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'command.php ' . $sQueueCommand . ' ' . Json::toJson($sPopQueueJson) . $sExecSuffix;
            exec($cmd);
        }
    }
}
