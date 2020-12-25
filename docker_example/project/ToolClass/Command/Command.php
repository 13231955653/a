<?php

namespace ToolClass\Command;

//use ToolClass\Server\Server;

require_once __ROOT_DIR__
             . DIRECTORY_SEPARATOR
             . 'define'
             . DIRECTORY_SEPARATOR
             . 'system.php';

use ToolClass\ToolFather;
class Command extends ToolFather
{
    public static function do ($sCommand = '')
    {
        if (!$sCommand || !is_string($sCommand)) {
            return FALSE;
        }

        $sLinuxOs = Server::linuxOs();

        $sOs = Server::osPlatform() === $sLinuxOs ? $sLinuxOs : Server::windowOs();

        $sEnd = ' & ';

        $sExec = $sExecSuffix = '';
        if ($sOs === $sLinuxOs) {
            $sExec = LINUX_COMMAND;
            $sExecSuffix = ' >/dev/null' . $sEnd;
        } else {
            $sExec = WINDOW_COMMAND;
            $sExecSuffix = $sEnd;
        }

        $sSystem = $sExec .  __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'command.php ' . $sCommand . $sExecSuffix;

        $sExec = $sExecSuffix = $sLinuxOs = $sOs = $sEnd = null;
        unset($sExec, $sExecSuffix, $sLinuxOs, $sOs, $sEnd);

        system($sSystem);
    }
}
