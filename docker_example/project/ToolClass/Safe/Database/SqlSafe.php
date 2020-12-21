<?php
namespace ToolClass\Safe\Database;

//use ToolClass\Json\Json;

use ToolClass\Depend\DependContainer;

class SqlSafe
{
    private static $oJson = false;

    /**
     * User: white
     * Date: 2020/12/21
     * Time: 11:55
     *
     * json object
     */
    private static function jsonObj ()
    {
        if (!self::$oJson) {
            self::$oJson = new DependContainer('json');
            self::$oJson = self::$oJson->selectClassDepend();
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

        if (is_int($sString)) {
            return $sString;
        }

        if (is_array($sString)) {

        }

        self::jsonObj();
        if (self::$oJson->analyJson($sString)) {

        }

        if (is_string($sString)) {

        }

        return $sString;
    }
}
