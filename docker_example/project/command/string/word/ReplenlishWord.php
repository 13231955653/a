<?php

namespace command\String\word;

use command\CommandFather;
use ToolClass\Strings\word\ReplenishWord as ReplenishWordTool;

class ReplenlishWord extends CommandFather
{
    public $sCommandName = 'replenlish_word_show';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $aReplenishChengYu = ReplenishWordTool::query();
        var_dump($aReplenishChengYu);
    }
}
