<?php

namespace ToolClass\Log;

use ToolClass\Json\Json;

class Exception
{
    public static function throwException($sInfo)
    {
        if (is_array($sInfo)) {
            $sInfo = Json::toJson($sInfo);
        }

        throw new \Exception($sInfo);
    }
}
