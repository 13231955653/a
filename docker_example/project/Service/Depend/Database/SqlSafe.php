<?php
namespace Service\Depend\Database;

//use Service\Ioc\Ioc;
use ToolClass\Safe\Database\SqlSafe as SqlSafeTool;

//use Service\Depend\DependContainer;

use Service\Depend\Depend;
class SqlSafe extends Depend
{
//    private static $oJson = false;
//
//    private static function jsonObject ()
//    {
//        if (!self::$oJson) {
//            $sDepeng = DependContainer::json();
//            Ioc::register($sDepeng, DependContainer::depend( $sDepeng));
//        }
//    }

    public function __call ( $name, $arguments )
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
        var_dump($arguments);
        die();
    }

    /**
     * User: white
     * Date: 2020/12/21
     * Time: 12:03
     *
     * params string $sString
     *
     * return Sql::filterSqlArg($sString)
     */
    public function sqlSafe (string $sString = '')
    {
        if (!$sString || is_numeric($sString)) {
            return $sString;
        }

//        self::jsonObject();

        return SqlSafeTool::filterSqlArg( $sString);
    }
}
