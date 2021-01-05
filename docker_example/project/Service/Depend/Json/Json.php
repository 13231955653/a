<?php

namespace Service\Depend\Json;

use ToolClass\Json\Json as JsonTool;

use Service\Depend\Depend;
class Json extends Depend
{
    public function analyJson ($arguments = '')
    {
        if (!$arguments || is_numeric($arguments)) {
            return FALSE;
        }

        return JsonTool::analyJson($arguments);
    }

    public function toJson (array $aData)
    {
        return JsonTool::toJson($aData);
    }
}
