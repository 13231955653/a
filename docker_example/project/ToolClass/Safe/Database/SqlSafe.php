<?php
namespace ToolClass\Safe\Database;

//use ToolClass\Json\Json;

use Service\Ioc\Ioc;
use Service\Depend\DependContainer;

use ToolClass\ToolFather;

class SqlSafe extends ToolFather
{
    private static $oJson = false;

    private static function jsonObject ()
    {
        if (!self::$oJson) {
            self::$oJson = TRUE;
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
     * return string safe filter $sString
     */
    ////////////////////////////////
    public static function filterSqlArg (string $sString)
    {
        if (!$sString) {
            return $sString;
        }

        if (is_int($sString)) {
            return $sString;
        }

        if (is_array($sString)) {

        }

        self::jsonObject();
        $sDepeng = DependContainer::json();
        $oDatabaseDepend = Ioc::resolve($sDepeng);
        if ($oDatabaseDepend->analyJson($sString)) {

        }

        if (is_string($sString)) {

        }

        return $sString;
    }
}
