<?php
namespace Hook\string\ChineseFont;

use Service\Depend\DependContainer;
use Service\Ioc\Ioc;

class ChineseFont
{
    public static function afterUpdateChineseFont ($bRes = FALSE)
    {
        if (!$bRes) {
            return FALSE;
        }

        if (!self::deleteOldChineseFontCache()) {
            return FALSE;
        }

        if (!self::setNewChineseFontCache()) {
            return FALSE;
        }
    }

    private static function deleteOldChineseFontCache ()
    {
        $sDependName = DependContainer::chineseStringCache();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));

        $oDepend = Ioc::resolve($sDependName);

        return $oDepend->deleteOldChineseFontCache();
    }

    private static function setNewChineseFontCache ()
    {
        $sDependName = DependContainer::chineseStringCache();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));

        $oDepend = Ioc::resolve($sDependName);

        return $oDepend->setNewChineseFontCache();
    }
}
