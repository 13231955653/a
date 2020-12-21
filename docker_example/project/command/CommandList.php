<?php

namespace command;

use command\CommandFather;

use ToolClass\File\File as FileTool;

class CommandList extends CommandFather
{
    public $sCommandName = 'command_list';

    private $sListName = 'command_list.txt';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        var_dump(FileTool::getFile(__DIR__ . DIRECTORY_SEPARATOR . $this->sListName));
    }
}
