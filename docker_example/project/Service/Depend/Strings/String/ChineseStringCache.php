<?php

namespace Service\Depend\Strings\String;

use ToolClass\Strings\string\ChineseStringCache as ChineseStringCacheTool;

use Service\Depend\Depend;
class ChineseStringCache extends Depend
{
    public function __call ( $name, $arguments )
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
        var_dump($arguments);
        die();
    }

    public function deleteOldChineseFontCache ()
    {
        return ChineseStringCacheTool::deleteOldChineseFontCache();
    }

    public function setNewChineseFontCache ()
    {
        return ChineseStringCacheTool::setNewChineseFontCache();
    }
}
