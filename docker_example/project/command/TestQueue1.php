<?php

namespace command;

use command\CommandFather;
use ToolClass\Json\Json;

class TestQueue1 extends CommandFather
{
    public $sCommandName = 'test_queue1';

    public
    function __construct ()
    {
    }

    public function do ($sJosnArg = '')
    {
        file_put_contents(__ROOT_DIR__ . DIRECTORY_SEPARATOR . 'command' . DIRECTORY_SEPARATOR . '1.txt', $sJosnArg, FILE_APPEND);
        echo 1;
    }
}
