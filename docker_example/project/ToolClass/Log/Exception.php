<?php

namespace ToolClass\Log;

//use ToolClass\Json\Json;

use Service\Depend\DependContainer;
use Service\Ioc\Ioc;
use ToolClass\ToolFather;

class Exception extends ToolFather
{
    public static function throwException($sInfo)
    {
        if (is_array($sInfo)) {
            $sJsonDependName = DependContainer::json();
            $sJsonDepend = Ioc::resolve($sJsonDependName);
            $sInfo = $sJsonDepend->toJson($sInfo);
        }

        throw new \Exception($sInfo);
    }
}
