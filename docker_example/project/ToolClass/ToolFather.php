<?php

namespace ToolClass;

use Service\Depend\DependContainer;
use Service\Ioc\Ioc;

class ToolFather
{
    public static function throwError ($sErrorInfo = '')
    {
        $sErrorInfo = $sErrorInfo ? $sErrorInfo : 'unknown error';

        $sExceptionDepengName = DependContainer::exception();
        $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

        $sServerDepengName = DependContainer::server();
        $oServerDepend = Ioc::resolve($sServerDepengName);

        $oExceptionDepend->throwException(
            $oServerDepend->response(
                [
                    $oServerDepend->errorStatus(),
                    $oServerDepend->returnError($sErrorInfo)
                ]
            )
        );
        return FALSE;
    }
}
