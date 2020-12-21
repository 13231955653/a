<?php
namespace ToolClass\Server;

class System
{
    private static $sUserName = 'system';

    public static function returnSystemUser ()
    {
        return self::$sUserName;
    }
}

