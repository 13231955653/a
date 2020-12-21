<?php

namespace command\Queue;

use command\CommandFather;
use ToolClass\Server\Server;

require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'command' . DIRECTORY_SEPARATOR . 'queue' . DIRECTORY_SEPARATOR . 'QueueList.php';

class QueueMaster extends CommandFather
{
    public $sCommandName = 'queue_queue_master';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $sLinuxOs = Server::linuxOs();

        $sOs = Server::osPlatform() === $sLinuxOs ? $sLinuxOs : Server::windowOs();

        $sEnd = ' & ';

        $sExec = $sExecSuffix = '';
        if ($sOs === $sLinuxOs) {
            $sExec = 'php ';
            $sExecSuffix = ' >/dev/null' . $sEnd;
        } else {
            $sExec = 'C:\phpstudy_pro\Extensions\php\php7.1.9nts\php.exe ';
            $sExecSuffix = $sEnd;
        }


        $sSystem = '';
        foreach (QUEUE_LIST as $v) {
            $sSystem .= $sExec .  __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'command.php ' . $v . $sExecSuffix;
        }
        $sExec = $sExecSuffix = null;
        unset($sExec, $sExecSuffix);

        var_dump($sSystem);
        system($sSystem);
    }
}
