<?php

namespace Service\Depend\Strings\String;

use ToolClass\Strings\string\ChineseStringTool as ChineseStringTools;

use Service\Depend\Depend;

class ChineseStringTool extends Depend
{

    public
    function replaceChineseString (
        $sString = '',
        $sNowChineseString = ''
    ) {
        if ( ( !$sString || !is_string( $sString ) )
             || ( !$sNowChineseString || !is_string( $sNowChineseString ) ) ) {
            return '';
        }

        return ChineseStringTools::replaceChineseString(
            $sString,
            $sNowChineseString
        );
    }
}
