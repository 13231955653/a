<?php
namespace Service\Depend\Database;

use Service\Ioc\Ioc;
use ToolClass\Safe\Database\SqlSafe as SqlSafeTool;

use Service\Depend\DependContainer;

class SqlSafe
{
    private static $oJson = false;

    private static function jsonObject ()
    {
        if (!self::$oJson) {
            $sDepeng = DependContainer::json();
            Ioc::register($sDepeng, DependContainer::depend( $sDepeng));
        }
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
        if (!$sString) {
            return $sString;
        }

        self::jsonObject();

        return SqlSafeTool::filterSqlArg( $sString);
    }
}
