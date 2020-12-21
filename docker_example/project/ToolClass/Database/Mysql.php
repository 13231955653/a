<?php
namespace ToolClass\Database;

//use ToolClass\Cache\RedisTool;

use ToolClass\File\File;

require_once __ROOT_DIR__
             . DIRECTORY_SEPARATOR
             . 'define'
             . DIRECTORY_SEPARATOR
             . 'mysql.php';

class Mysql
{
    private static $sNowDatabaseTagFileName = 'mysql_database_tag.txt';

    private static $iMaxDatabaseTag = 99999999;

    private static $sWhereFeild1 = 'where_1';
    private static $sWhereFeild2 = 'where_2';
    private static $sDaYu = 'daYu';
    private static $sIn = 'whereIn';

    private static $sIncrbyFeild = 'incrby';
    private static $sUpdateFeild = 'data';

    private static $sStatisticsFeild = 'statistics';

    public static function statistics ()
    {
        return self::$sStatisticsFeild;
    }

    public static function in ()
    {
        return self::$sIn;
    }

    public static function daYu ()
    {
        return self::$sDaYu;
    }

    public static function updateDataKey ()
    {
        return self::$sUpdateFeild;
    }

    public static function incrbyKey ()
    {
        return self::$sIncrbyFeild;
    }

    private static function mysqlLinkTagFile ()
    {
        return __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'ToolClass' . DIRECTORY_SEPARATOR . 'Database' . DIRECTORY_SEPARATOR . self::$sNowDatabaseTagFileName;
    }

    public static function queryNowDatabaseTag ()
    {
        $sNowDatabaseTagFileName = self::mysqlLinkTagFile();

        $iTag = 0;
        if (is_file($sNowDatabaseTagFileName)) {
            $iTag = (int)file_get_contents($sNowDatabaseTagFileName);
        }
        $iTag = $iTag ? $iTag : self::mtRandNowDatabaseTag();

        $iTag = $iTag < self::$iMaxDatabaseTag ? $iTag : 0;

        $iTag += 1;

        self::incrbyMysqlLinkTag($iTag);

        return $iTag;
    }

    public static function mtRandNowDatabaseTag ()
    {
        return mt_rand(MT_RAND_DATABASE_MIN_TAG, MT_RAND_DATABASE_MAX_TAG);
    }

    private static function incrbyMysqlLinkTag ($iTag = 0)
    {
        $iTag = $iTag ? $iTag : self::mtRandNowDatabaseTag();

        return File::writeToFile(self::mysqlLinkTagFile(), $iTag);
    }
}
