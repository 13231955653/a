<?php

namespace Service\Depend\Exception;

use ToolClass\Log\ErrorInformAdminThrow as ErrorInformAdminThrowTool;

use Service\Depend\Depend;
class ErrorInformAdminThrow extends Depend
{
    public function recordErrorAndInformAdmin ($iErrno = 0, $sErrorInfo = '')
    {
        if (!$iErrno) {
            return FALSE;
        }

        return ErrorInformAdminThrowTool::recordErrorAndInformAdmin($iErrno, $sErrorInfo);
    }
}
