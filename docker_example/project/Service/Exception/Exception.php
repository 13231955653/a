<?php

namespace Service\Exception;

use ToolClass\Log\Exception as ExceptionTool;

class Exception
{
    public function __call ($name, $arguments)
    {
        return ExceptionTool::{$name}($arguments[0]);
    }
}
