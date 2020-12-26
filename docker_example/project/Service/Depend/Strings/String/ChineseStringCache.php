<?php

namespace Service\Depend\Strings\String;

use Service\Depend\DependContainer;
use Service\Ioc\Ioc;
use ToolClass\Strings\string\ChineseStringCache as ChineseStringCacheTool;

use Service\Depend\Depend;
class ChineseStringCache extends Depend
{
    public function deleteOldChineseFontCache ()
    {
        $sDependName = DependContainer::server();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
        $oServer = Ioc::resolve($sDependName);
        $oServer->setServerBidMemory(CHINESE_STRING_MAX_CAN_USE_MEMORY);

        return ChineseStringCacheTool::deleteOldChineseFontCache();
    }

    public function setNewChineseFontCache ()
    {
        return ChineseStringCacheTool::setNewChineseFontCache();
    }
}
