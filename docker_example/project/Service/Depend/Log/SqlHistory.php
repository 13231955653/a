<?php

namespace Service\Depend\Regular\RegularVerify;

use ToolClass\Database\SqlHsitory as SqlHsitoryTool;

use Service\Depend\Depend;

class SqlHistory extends Depend
{
    public function writeSqlHistory ($sSql, $sExplain = '', $sPlatform = '', $sTable = '', $bQueue = false)
    {
        return SqlHsitoryTool::writeSqlHistory($sSql, $sExplain = '', $sPlatform = '', $sTable = '', $bQueue = false);
    }
}
