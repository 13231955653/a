<?php

namespace ToolClass\Depend\Json;

use ToolClass\Json\Json as JsonTool;

class Json
{
    /**
     * User: white
     * Date: 2020/12/21
     * Time: 12:03
     *
     * params string $sString
     *
     * return bool is or no json
     */
    public function analyJson (string $sString = '')
    {
        if (!$sString) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'sql safe error 2'
                    )
                )
            );
            return FALSE;
        }

        return JsonTool::analyJson($sString);
    }
}
