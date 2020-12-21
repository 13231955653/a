<?php

namespace command;

use command\CommandFather;

class TestQueue2 extends CommandFather
{
    public $sCommandName = 'test_queue2';

    public
    function __construct ()
    {
    }

    public function do ($sJosnArg = '')
    {
        file_put_contents(__ROOT_DIR__ . DIRECTORY_SEPARATOR . 'command' . DIRECTORY_SEPARATOR . '2.txt', $sJosnArg);
        echo 2;
    }
}
