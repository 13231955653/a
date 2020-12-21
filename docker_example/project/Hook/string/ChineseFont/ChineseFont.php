<?php
namespace Hook\string\ChineseFont;

//use ToolClass\Strings\string\ChineseString;
use ToolClass\Strings\string\ChineseStringCache;
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
        return ChineseStringCache::deleteOldChineseFontCache();
    }

    private static function setNewChineseFontCache ()
    {
        return ChineseStringCache::setNewChineseFontCache();
    }
}
