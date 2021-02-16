<?php

namespace Tool;

use Tool\Server;

class Exception
{
    public static function throwError (string $sErrorInfo = '')
    {
        throw new \Exception(Server::response(Server::errorStatus(), $sErrorInfo));
    }
    
    
}
