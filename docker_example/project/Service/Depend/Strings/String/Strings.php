<?php

namespace Service\Depend\Strings\String;

use ToolClass\Strings\string\Strings as StringsTool;

use Service\Depend\Depend;
class Strings extends Depend
{
    public function replaceEnglishSymbolToChineseSymbol ($sString = '')
    {
        if (!$sString || !is_string($sString)) {
            return $this->throwError('disposeLineFeed info must be string 1');
        }

        return StringsTool::replaceEnglishSymbolToChineseSymbol($sString);
    }
}
