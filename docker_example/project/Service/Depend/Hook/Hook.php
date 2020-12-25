<?php

namespace Service\Depend\Hook;

use Hook\Hook as HookTool;

use Service\Depend\Depend;
class Hook extends Depend
{
    public function __call ( $name, $arguments )
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
        var_dump($arguments);
        die();
    }

    public function addHook ($sHookClass = '', $sHookFunc = '')
    {
        if ((!$sHookClass || !is_string($sHookClass)) || (!$sHookFunc || !is_string($sHookFunc))) {
            return FALSE;
        }

        return HookTool::addHook($sHookClass, $sHookFunc);
    }

    public function listen ($sHookClass = '', $sHookFunc = '', $bUpdate = false)
    {
        if (!$bUpdate || (!$sHookClass || !is_string($sHookClass)) || (!$sHookFunc || !is_string($sHookFunc))) {
            return FALSE;
        }

        return HookTool::listen($sHookClass, $sHookFunc, $bUpdate);
    }

    public function chineseFont ()
    {
        return HookTool::chineseFont();
    }

    public function afterUpdateChineseFont ()
    {
        return HookTool::afterUpdateChineseFont();
    }
}
