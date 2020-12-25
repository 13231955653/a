<?php

namespace Service\Depend\File;

use ToolClass\File\File as FileTool;

use Service\Depend\Depend;
class File extends Depend
{
    public function __call ( $name, $arguments )
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
        var_dump($arguments);
        die();
    }

    public function isFile ($arguments = '')
    {
        if (!$arguments || is_numeric($arguments)) {
            return FALSE;
        }

        return FileTool::isFile( $arguments);
    }

    public function writeToFile ($sFile = '', $sInfo = '')
    {
        if ( !$sFile || !$sInfo ) {
            return FALSE;
        }

        return FileTool::writeToFile($sFile, $sInfo);
    }

    public function getFile ($sFile = '')
    {
        if ( !$sFile ) {
            return FALSE;
        }

        return FileTool::getFile($sFile);
    }
}
