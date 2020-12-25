<?php

namespace ToolClass\Web;
use ToolClass\ToolFather;

class Web extends ToolFather
{
    public static
    function checkUrlExist (
        $sUrl = ''
    ) {
        if ( !$sUrl ) {
            return FALSE;
        }

        $headers = @get_headers( $sUrl );
        if ( strpos( $headers[ 0 ], '200' ) === FALSE ) {
            return FALSE;
        }

        return TRUE;
    }
}