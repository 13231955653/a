<?php

namespace Service\Depend\Date;

use ToolClass\Date\Time as TimeTool;

use Service\Depend\Depend;
class Time extends Depend
{
    public function __call ( $name, $arguments )
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
    }

    public function nowRunTime ()
    {
        return TimeTool::nowRunTime();
    }
}
