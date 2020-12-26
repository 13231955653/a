<?php

namespace Service;

use ToolClass\ToolFather;

class Service
{
    protected $sClass = '';

    public function __construct()
    {
        $this->sClass = get_class($this);
    }

    public function __call ( $name, $arguments )
    {
//        var_dump(__NAMESPACE__);
        var_dump($this->sClass);
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
