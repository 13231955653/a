<?php

namespace Service\Server;

use ToolClass\Server\Server as ServerTool;

class Server
{
    public function __call ($name, $arguments)
    {
        $arguments = $arguments ? count($arguments) > 1 ? $arguments : $arguments[0] : $arguments;
        return ServerTool::{$name}($arguments);
    }
}
