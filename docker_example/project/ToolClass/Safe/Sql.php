<?php
namespace ToolClass\Safe;

use ToolClass\Json\Json;

class Sql
{
    ////////////////////////////////
    public static function filterSqlArg ($sArg)
    {
        if (is_int($sArg)) {
            return $sArg;
        }

        if (is_array($sArg)) {

        }

        if (Json::analyJson($sArg)) {

        }

        if (is_string($sArg)) {

        }

        return $sArg;
    }
}
