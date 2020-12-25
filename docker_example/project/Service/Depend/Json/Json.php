<?php

namespace Service\Depend\Json;

use ToolClass\Json\Json as JsonTool;

use Service\Depend\Depend;
class Json extends Depend
{
    public function __call ( $name, $arguments )
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
        var_dump($arguments);
        die();
    }

    public function analyJson ($arguments = '')
    {
        if (!$arguments || is_numeric($arguments)) {
            return FALSE;
        }

        return JsonTool::analyJson($arguments);
    }

    public function toJson ($aData)
    {
        return JsonTool::toJson($aData);
    }
}
