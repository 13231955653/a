<?php
namespace Service\Depend\Cache;

use ToolClass\Cache\Cache as CacheTool;

use Service\Depend\Depend;
class Cache extends Depend
{
    public function del ($sKey = '')
    {
        if (!$sKey) {
            return FALSE;
        }

        return CacheTool::del($sKey);
    }

    public function keyStyle (string $sKey = '')
    {
        if (!$sKey) {
            return $this->throwError('no redis key');
        }

        return CacheTool::keyStyle($sKey);
    }

    public function keys (string $sKey = '')
    {
        if (!$sKey) {
            return $this->throwError('no redis key');
        }

        return CacheTool::keys($sKey);
    }

    public
    function hMset (
        string $sKey = '',
        array $aData = []
    ) {
        if ( !$sKey || !$aData ) {
            return $this->throwError('no redis key or data');
        }

        return CacheTool::hMset($sKey, $aData);
    }
    
    public
    function hSet (
        string $sKey = '',
        string $sHashKey = '',
        string $sValue = ''
    ) {
        if ( !$sKey || !$sHashKey || !$sValue ) {
            return $this->throwError('hset error');
        }

        return CacheTool::hSet($sKey, $sHashKey, $sValue);
    }
    
    public function setnx (string $sKey = '', string $sValue = '')
    {
        if ( !$sKey ) {
            return self::throwError('no redis key');
        }
    
        if ( !$sValue ) {
            return self::throwError('no redis setnx value');
        }
    
        return CacheTool::setnx( $sKey, $sValue);
    }
}
