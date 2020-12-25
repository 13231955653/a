<?php
namespace ToolClass\Encode;

use ToolClass\ToolFather;

class AdminEncode extends ToolFather
{
    private static $sAdminUserNameSlat = 'jghgdfgdfhcvbg5674hs132t1r3y4wr5yh1th2x)&(!^@%^$#*#%#{%|45JGVGGdafe)*&^GVCD#!#%&(Kmf4hs132t1r3y4wr5y}%:"<><FJHFY$@Q$@$(%#*IFDFJK425236246rtu';
    private static $sAdminPasswordSlat = 'zxcvbn45_++-+*/2145JGVGGdafe)*&^GVCD#!#%&(Kmf4hs132t1r3y4wr5yh1th2x)&(!^@%^$#*#%#{%|}%:"<><FJHFY$dsf{}|+-*/fsdfrwsasdasHJBJH^*%^%:?>';

    public static function encodeAdminPassword ($sPassword = '')
    {
        if (!$sPassword) {
            return false;
        }

        return strtoupper(md5($sPassword . self::$sAdminPasswordSlat));
    }

    public static function encodeAdminName ($sName = '')
    {
        if (!$sName) {
            return false;
        }

        return strtoupper(md5($sName . self::$sAdminUserNameSlat));
    }
}
