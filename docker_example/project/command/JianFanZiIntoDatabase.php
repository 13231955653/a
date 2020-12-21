<?php

namespace command;

use command\CommandFather;

require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'define' .DIRECTORY_SEPARATOR . 'jian_fan_zi.php';
use model\publics\JianFanFont;

class JianFanZiIntoDatabase extends CommandFather
{
    public $sCommandName = 'jian_fan_zi_into_database';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $aString = explode(',', CHINESE_STRING);
        foreach ($aString as $k => $v) {
            $v = preg_replace('/[0-9]+/', '', $v);
            $v = str_replace(',', '', $v);
            $v = str_replace('\'', '', $v);
            $v = str_replace(':', '', $v);
            $v = str_replace('{', '', $v);
            $v = str_replace('}', '', $v);
            $v = trim($v);

//            $aString[$k] = $v;

            JianFanFont::insert(['simplified' => $v], false, false);
        }
//        var_dump($aString);   121.14.39.211  121.14.39.210 121.14.39.210 121.14.39.210 103.113.63.53
    }
}
