<?php
namespace ToolClass\Database;

use ToolClass\Log\ErrorInformAdminThrow;
use ToolClass\Log\Log;

use ToolClass\Date\Time;

use ToolClass\Log\Exception;

use model\publics\SqlHistory;
use ToolClass\Server\Server;

class SqlHsitory extends Log
{
    public static $sLogType = 'sql';

    private function __construct()
    {
    }

    public static function writeSqlHistory ($sSql, $sExplain = '', $sPlatform = '', $sTable = '', $bQueue = false)
    {
        $iStartTime = Time::getStartTime();
        $iTime = Time::nowRunTime();

        $sInfo = '';

        $sInfo .= '开始时间 ' . Time::nowDate( $iStartTime);
        $sInfo .= PHP_EOL;

        $sInfo .= '结束时间 ' . Time::nowDate();
        $sInfo .= PHP_EOL;

        $bOvertime = false;
        if ($iTime - $iStartTime > LONG_TIME_TAG) {
            $bOvertime = TRUE;
            $sInfo .= '程序处理时间超过预定时长 LONG_TIME_TAG ' . LONG_TIME_TAG;
            $sInfo .= PHP_EOL;
        }

        $aList = array_reverse(debug_backtrace());

        foreach ($aList as $row) {
            $sInfo .= '调用文件 ' . $row['file'];
            $sInfo .= PHP_EOL;

            if (isset($row['class'])) {
                $sInfo .= '调用类 ' . $row['class'];
                $sInfo .= PHP_EOL;
            }

            $sInfo .= '方法 ' . $row['function'];
            $sInfo .= PHP_EOL;

            $sInfo .= '参数 ' . json_encode($row['args']);
            $sInfo .= PHP_EOL;
        }

        $sInfo .= '请求SQL ' . $sSql;
        $sInfo .= PHP_EOL;
        $sInfo .= $sExplain;
        $sInfo .= PHP_EOL;

        if (!$sInfo) {
            Exception::throwException('write sql none');
            return false;
        }

        if (LOG_TYPE === 'database') {
            self::insertLog($sInfo, $sPlatform, $sTable, $bOvertime, $bQueue);
        } else {
            $sInfo .= $bQueue ? PHP_EOL . '队列执行' : PHP_EOL . '';
            parent::writeLog(self::setPathName(), self::setFileName(), $sInfo);
        }
    }

    private static
    function insertLog ($sLogInfo = '', $sPlatform = '', $sTable = '', $bOvertime = false, $bQueue = FALSE)
    {
        if (!$sLogInfo || !$sTable || !$sPlatform) {
            ErrorInformAdminThrow::recordErrorAndInformAdmin(13, [
                'log'      => $sLogInfo,
                'table'    => $sTable,
                'platform' => $sPlatform
            ]);

            return FALSE;
        }

        $aData = [];

        $aData[ 'info' ] = $sLogInfo;
        $aData[ 'platform' ] = $sPlatform;
        $aData[ 'tables' ] = $sTable;
        $aData[ 'queue' ] = $bQueue ? 1 : 0;
        /////////////////////////////////////////////////////////////////////////////
        $aData[ 'who_handle' ] = Server::getNowLoginUser();
        $aData[ 'add_ip' ] = Server::outIntIp(Server::userIp());
        $aData[ 'add_time' ] = Time::nowTime();

        if ($bOvertime) {
            $aData[ 'overtime' ] = 1;
        }

//        unset($aData['info']);
//        $aData['info'] = 1;
//        var_dump($aData);

        return SqlHistory::insert($aData, true);
    }


    private static function setPathName ()
    {
        return __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'logs' . DIRECTORY_SEPARATOR . 'sql_history';
    }

    private static function setFileName ()
    {
        return date('Y-m-d') . '.txt';
    }
}
