<?php

namespace Service\Depend\Exception;

use ToolClass\Log\Exception as ExceptionTool;

use Service\Depend\Depend;
class Exception extends Depend
{
    public function __call ( $name, $arguments )
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
        var_dump($arguments);
        die();
    }

    public function throwException ($arguments)
    {
        return ExceptionTool::throwException($arguments);
    }
}
