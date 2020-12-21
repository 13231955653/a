<?php

use artsian\model\MakeModel;
use artsian\command\MakeCommand;
use command\CommandFather;

require_once 'include.php';

$oCommand = new CommandFather();

if (!isset($argc)) {
    return;
}

$oCommand->outInfo("接收到{$argc}个参数");
$oCommand->outInfo($argv);
if (!isset($argv[1])) {
    $oCommand->outInfo('param insufficient what will to do');
    return false;
}

//参数 a action
switch ($argv[1]) {
    //MakeModel 创建model
    //参数 b path 绝对路径
    case 'MakeModel' :
        if (!isset($argv[2])) {
            $oCommand->outInfo('param insufficient model name');
            return false;
        }

        require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'artsian' . DIRECTORY_SEPARATOR . 'model' . DIRECTORY_SEPARATOR . 'MakeModel.php';
        $obj = new MakeModel($argv[2]);
        $obj->do();
        break;
    case 'MakeCommand' :
        if (!isset($argv[2])) {
            $oCommand->outInfo('param insufficient model name');
            return false;
        }

        //参数 b path command 文件路径，根目录artsian/command
        require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'artsian' . DIRECTORY_SEPARATOR . 'command' . DIRECTORY_SEPARATOR . 'MakeCommand.php';
        $obj = new MakeCommand($argv[2]);
        $obj->do();
        break;
}

//artsian.php whatToDo arg2