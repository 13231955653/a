<?php

namespace ToolClass\Web;

class Web
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