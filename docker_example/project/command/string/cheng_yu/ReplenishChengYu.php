<?php
/**
 * 不存在的成语 /////////////////////////
 */

namespace command\String\cheng_yu;

use command\CommandFather;

use ToolClass\Strings\chengyu\ReplenishChengYu as ReplenishChengYuTool;

class ReplenishChengYu extends CommandFather
{
    public $sCommandName = 'replenish_cheng_yu';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $aReplenishChengYu = ReplenishChengYuTool::query();
        var_dump($aReplenishChengYu);
    }
}
