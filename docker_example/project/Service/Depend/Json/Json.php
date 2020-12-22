<?php

namespace Service\Depend\Json;

use ToolClass\Json\Json as JsonTool;

class Json
{
    public function __call ($name, $arguments)
    {
        return JsonTool::{$name}($arguments[0]);
    }
}
