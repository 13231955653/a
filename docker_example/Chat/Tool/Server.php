<?php

namespace Tool;

require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'error_code.php';

class Server
{
    public static function response (int $aResponseStatus = 0, string $aResponseInfo = '')
    {
        return json_encode(['status' => $aResponseStatus, 'error_info' => $aResponseInfo]);
    }
    
    public static function errorStatus ()
    {
        return 0;
    }
    
    public static function errorCode (int $iErrorCode = 0)
    {
        return isset(ERROR_CODE[$iErrorCode]) ? ERROR_CODE[$iErrorCode] : ERROR_CODE[0];
    }
}
