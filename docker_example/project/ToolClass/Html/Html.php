<?php

namespace ToolClass\Html;

use ToolClass\ToolFather;

class Html extends ToolFather
{
    private static $sHeightLightWordClassName = 'height-light-word';

    public static function heightLightWordClassName ()
    {
        return self::$sHeightLightWordClassName;
    }
}