<?php
namespace ToolClass\Server;

use ToolClass\ToolFather;

class System extends ToolFather
{
    private static $sUserName = 'system';

    public static function returnSystemUser ()
    {
        return self::$sUserName;
    }
}

