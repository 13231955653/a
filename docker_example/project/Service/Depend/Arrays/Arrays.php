<?php

namespace Service\Depend\Arrays;

use ToolClass\Arrays\Arrays as ArraysTool;

use Service\Depend\Depend;

class Arrays extends Depend
{
    public
    function arrayMaxMin (
        $aArr = [],
        $sKeys = ''
    ) {
        return ArraysTool::arrayMaxMin( $aArr, $sKeys );
    }

    public function arrayMaxKey ()
    {
        return ArraysTool::arrayMaxKey();
    }

    public function arrayMinKey ()
    {
        return ArraysTool::arrayMinKey();
    }

    public function key ()
    {
        return ArraysTool::key();
    }

    public function value ()
    {
        return ArraysTool::value();
    }
}
