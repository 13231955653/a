<?php

namespace ToolClass\Log;

use ToolClass\Log\Exception;

use ToolClass\Json\Json;

use model\publics\Logs;

use model\publics\ErrorLog;

//use ToolClass\Server\Server;

/**
 *
 * author: white
 * date:2020/9/22 20:21
 *
 */
class ErrorInformAdminThrow
{
    public static $sLogType = 'send_error_number';

    private static $sPlatform = 'log';

    private static $sTable = '';

    public
    function __destruct ()
    {
    }

    public static
    function recordErrorAndInformAdmin ($iErrno, $sErrorInfo = '')
    {
        //        var_dump($iErrno);
        //        var_dump($sErrorInfo);
//        var_dump($sErrorInfo);
//        var_dump(111);
//        die();
        $iErrorCode = 0;
        switch ($iErrno) {
            case '1' :
                $iErrorCode = 1;
                break;
            case '2' :
                $iErrorCode = 2;
                break;
            case '3' :
                $iErrorCode = 3;
                break;
            case '4' :
                $iErrorCode = 4;
                break;
            case '5' :
                //                redis 集群 异常
                $iErrorCode = 5;
                break;
            case '6' :
                //                未定义redis集群配置
                $iErrorCode = 6;
                break;
            case '7' :
                //                redis 集群 异常
                $iErrorCode = 7;
                break;
            case '8' :
                //                redis 操作异常
                $iErrorCode = 8;
                break;
            case '9' :
                //                new pdo error
                $iErrorCode = 9;
                break;
            case '10' :
                //                admin make sql error
                $iErrorCode = 10;
                break;
            case '11' :
                //                admin make mysql group object error
                $iErrorCode = 11;
                break;
            case '12' :
                //                admin make mysql group object error
                $iErrorCode = 12;
                break;
            case '12' :
                //                mkdir error
                $iErrorCode = 12;
                break;
            case '13' :
                //                log sql error
                $iErrorCode = 13;
                break;
            case '14' :
                //                insert queue faild
                $iErrorCode = 14;
                break;
            case '15' :
                //               rsa private key error  write log need
                // encode, so write log will be error with rsa key error, in
                // for ......
                $iErrorCode = 15;
                break;
            case '16' :
                //               rsa public key error
                $iErrorCode = 16;
                break;
            case '17' :
                //               redis cache menu error
                $iErrorCode = 17;
                break;
            case '18' :
                //               redis cache home menu error
                $iErrorCode = 18;
                break;
            case '19' :
                //               redis cache admin menu error
                $iErrorCode = 19;
                break;
            case '20' :
                //                mkdir error
                $iErrorCode = 20;
                break;
            case '21' :
                //                insert update queue error
                $iErrorCode = 21;
                break;
            case '22' :
                //                insert insert queue error
                $iErrorCode = 22;
                break;
        }

        if ($sErrorInfo) {
            $sErrorInfo = is_array($sErrorInfo) ? Json::toJson($sErrorInfo) : ($sErrorInfo ? $sErrorInfo : '');
        }

        if (!in_array($iErrorCode, [15, 16])) {
            self::afterError($iErrorCode, $sErrorInfo);
        }

//        Exception::throwException('error code number ' . $iErrorCode . ' error info ' . $sErrorInfo);
//        return Server::response(Server::errorStatus(), 'error code number ' . $iErrorCode . ' error info ' . $sErrorInfo);
        Exception::throwException(Server::response(Server::errorStatus(), 'error code number ' . $iErrorCode . ' error info ' . $sErrorInfo));
    }

    ///////////////////////////////////////////////
    private static
    function afterError ($iErrorCode, $sErrorInfo)
    {
        $sInfo = '';
        $sInfo .= PHP_EOL;
        $sInfo .= '错误号  ' . $iErrorCode;
        $sInfo .= PHP_EOL;
        $sInfo .= '错误信息  ' . $sErrorInfo;
        $sInfo .= PHP_EOL;

        if (LOG_TYPE === 'database') {
            Logs::insertLog($sInfo, ErrorLog::$sPlatform, $iErrorCode);
        } else {
            parent::writeLog(self::setPathName(), self::setFileName(), $sInfo);
        }
//        Log::writeLog(self::setPathName(), self::setFileName(), $sInfo);

        self::sendToAdmin($iErrorCode, $sErrorInfo);
        $iErrorCode = $sInfo = $sErrorInfo = NULL;
        unset($sInfo, $sErrorInfo, $iErrorCode);
    }

    ///////////////////
    private static
    function sendToAdmin ($iErrorCode, $sErrorInfo)
    {

    }

    private static
    function setPathName ()
    {
        return __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'logs' . DIRECTORY_SEPARATOR . 'error';
    }

    private static
    function setFileName ()
    {
        return date('Y-m-d') . '.txt';
    }
}
