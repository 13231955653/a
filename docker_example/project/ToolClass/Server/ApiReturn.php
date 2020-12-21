<?php

namespace ToolClass\Server;

use ToolClass\Json\Json;

use ToolClass\Log\Exception;

class ApiReturn
{
    public static
    function response ($aRetrun = [])
    {
//        $aRetrun = $aRetrun ? $aRetrun : [
//            'status' => 0,
//            'error'  => 'error_known'
//        ];

//        var_dump($aRetrun);
        if (!is_array($aRetrun)) {
            Exception::throwException('retrun must be array');
            return false;
        }

        return Json::toJson($aRetrun);
    }
}