<?php

namespace ToolClass\Json;

use ToolClass\ToolFather;

class Json extends ToolFather
{
    /**
     * User: white
     * Date: 2020/12/21
     * Time: 12:03
     *
     * params string $sString
     * params bool $bArray is array or no
     *
     * return bool is or no json
     */
    public static
    function analyJson (string $sJsonData, $bArray = true)
    {
        if (is_array($sJsonData)) {
            return FALSE;
        }

        /////////////////////////////////////////
        $sJsonData = str_replace('\\', '', $sJsonData);
        $aOutArray = [];
        preg_match('/{.*}/', $sJsonData, $aOutArray);
        if (!empty($aOutArray)) {
            $result = json_decode($aOutArray[ 0 ], $bArray);
        } else {
            return FALSE;
        }

        return $result;
    }

    public static function toJson (array $aData)
    {
//        ini_set("memory_limit","15121M");
        return json_encode($aData);
    }

    public static function toArray ($sJsonData)
    {
        if (!$sJsonData) {
            return FALSE;
        }
//        ini_set("memory_limit","15121M");
        return json_decode($sJsonData, TRUE);
    }

    public static function toObject ($sJsonData)
    {
        return json_decode($sJsonData, false);
    }
}
