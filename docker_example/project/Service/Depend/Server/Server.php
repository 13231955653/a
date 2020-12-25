<?php

namespace Service\Depend\Server;

use ToolClass\Server\Server as ServerTool;

use Service\Depend\Depend;
class Server extends Depend
{
    public function __call ( $name, $arguments )
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
        var_dump($arguments);
        die();
    }

    public function getNowUser ()
    {
        return ServerTool::getNowUser();
    }

    public function errorStatus ()
    {
        return ServerTool::errorStatus();
    }

    public function returnError ($arguments = '')
    {
        if (!$arguments || is_numeric($arguments)) {
            return '';
        }

        return ServerTool::returnError($arguments);
    }

    public function response ($arguments)
    {
        if (!$arguments || is_numeric($arguments)) {
            return '';
        }

        return ServerTool::response($arguments);
    }

    public function setServerBidMemory ()
    {
        return ServerTool::setServerBidMemory();
    }

    public function setNeverTimeout ()
    {
        return ServerTool::setNeverTimeout();
    }
}
