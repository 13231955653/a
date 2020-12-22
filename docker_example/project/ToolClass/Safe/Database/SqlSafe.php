<?php
namespace ToolClass\Safe\Database;

//use ToolClass\Json\Json;

use Service\Ioc\Ioc;
use Service\Depend\DependContainer;

class SqlSafe
{
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

        $sDepeng = DependContainer::json();
        $oDatabaseDepend = Ioc::resolve($sDepeng);
        if ($oDatabaseDepend->analyJson($sString)) {

        }

        if (is_string($sString)) {

        }

        return $sString;
    }
}
