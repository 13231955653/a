<?php

require_once 'include.php';

require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'artsian' . DIRECTORY_SEPARATOR . 'command' . DIRECTORY_SEPARATOR . 'CommandList.php';

use command\CommandFather;
use ToolClass\Date\Time;
use ToolClass\Server\Server;

Time::setStartTime();

if (!isset($argc)) {
    return;
}

$oCommand = new CommandFather();

$oCommand->outInfo("接收到{$argc}个参数");
$oCommand->outInfo($argv);

$sName = isset($argv[1]) ? $argv[1] : false;
unset($argv[0], $argv[1]);
$aArgs = $argv ? array_values($argv) : [];

if (!$sName) {
    $oCommand->outInfo('param insufficient name, arg 1');
    return false;
}

//echo $sName;
$oCommand->showNowCommand($sName);
if (!isset($CommandList[$sName])) {
    if (DEBUG) {
        $oCommand->outInfo($sName);
    }
    $oCommand->outInfo('command no exist !!!');
    return false;
}

$sObj = $CommandList[$sName];

Server::setNeverTimeout();
$obj = new $sObj();
$obj->do($aArgs);

//command.php make_unique_string sArgList
//command.php UniqueStrings sArgList
