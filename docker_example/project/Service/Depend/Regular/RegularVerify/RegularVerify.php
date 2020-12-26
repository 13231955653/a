<?php

namespace Service\Depend\Regular\RegularVerify;

use ToolClass\Regular\RegularVerify as RegularVerifyTool;

use Service\Depend\Depend;

class RegularVerify extends Depend
{
    public function disposeLineFeed ($sString = '')
    {
        if (!$sString || !is_string($sString)) {
            return $this->throwError('disposeLineFeed info must be string');
        }

        return RegularVerifyTool::disposeLineFeed($sString);
    }
}
