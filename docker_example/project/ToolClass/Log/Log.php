<?php

namespace ToolClass\Log;

//use ToolClass\File\File;
//
//use ToolClass\Date\Time;

use ToolClass\ToolFather;

class Log extends ToolFather
{
    private function __construct()
    {
    }

    /////////////////////////////
    public static function writeLog ($sPath = '', $sFile = '', $sInfo = '')
    {
        if (!$sPath || !$sFile || !$sInfo) {
            return false;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////
        $sFile = $sPath . DIRECTORY_SEPARATOR . str_replace('\\', DIRECTORY_SEPARATOR, str_replace('/', DIRECTORY_SEPARATOR, date('Y/m/d'))) . DIRECTORY_SEPARATOR . $sFile;
        if (!file_exists($sFile)) {
            self::makeAndWriteLog($sFile, $sInfo);
        } else {
            self::checkAndMakeFile($sFile, $sInfo);
        }
    }

    private static function makeAndWriteLog ($sFile, $sInfo)
    {
        $aDir = explode(DIRECTORY_SEPARATOR, $sFile);
        array_pop($aDir);
        $aDir = implode(DIRECTORY_SEPARATOR, $aDir);

        while (!is_dir($aDir)) {
            File::makeDir($aDir);
        }

        file_put_contents($sFile, $sInfo, FILE_APPEND);
    }

    private static function checkAndMakeFile ($sFile, $sInfo)
    {
//        $iMax = 1024 * 1024;
//        switch (static::$sLogType) {
//            case 'sql' :
//                $iMax = LOG_MAX_FILE_SIZE;
//                break;
//        }

        $iSize = filesize($sFile);
        if ($iSize > LOG_MAX_FILE_SIZE) {
            rename($sFile,$sFile . '_bak_' . Time::getNowTime() . '.txt');
        }

        self::makeAndWriteLog($sFile, $sInfo);
    }
}
