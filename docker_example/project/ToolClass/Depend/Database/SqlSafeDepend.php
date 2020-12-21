<?php
namespace ToolClass\Depend\Database;

use ToolClass\Safe\Database\SqlSafe;

class SqlSafeDepend
{
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
        if (is_numeric($sString) || !$sString) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'sql safe error 1'
                    )
                )
            );
            return FALSE;
        }

        return SqlSafe::filterSqlArg( $sString);
    }
}
