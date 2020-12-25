<?php

namespace Service;

use ToolClass\ToolFather;

class Service
{
    public function __call ( $name, $arguments )
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
        var_dump($arguments);
        die();
    }

    protected function throwError ($sErrorInfo = '')
    {
        $sErrorInfo = $sErrorInfo ? $sErrorInfo : 'unknown error';

        return ToolFather::throwError($sErrorInfo);
    }
}
