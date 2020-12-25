<?php
namespace Service\Depend\Cache;

use ToolClass\Cache\Cache as CacheTool;

use Service\Depend\Depend;
class Cache extends Depend
{
    public function __call ( $name, $arguments )
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
        var_dump($arguments);
        die();
    }

    public function del ($sKey = '')
    {
        if (!$sKey) {
            return FALSE;
        }

        return CacheTool::del($sKey);
    }

    public function keyStyle ($sKey = '')
    {
        if (!$sKey) {
            return $this->throwError('no redis key');
        }

        return CacheTool::keyStyle($sKey);
    }

    public function keys ($sKey = '')
    {
        if (!$sKey) {
            return $this->throwError('no redis key');
        }

        return CacheTool::keys($sKey);
    }
}
