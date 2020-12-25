<?php

namespace Service\Depend\Database;

use model\MyPdo;

class Pdo
{
    public
    function getInstance (
        $sDatabaseType = 'mysql_group',
        $sDbHost,
        $sDbPort,
        $sDbName,
        $sDbUser,
        $sDbPassword,
        $sDbCharset,
        $iTag
    ) {
        return MyPdo::getInstance(
            $sDatabaseType,
            $sDbHost,
            $sDbPort,
            $sDbName,
            $sDbUser,
            $sDbPassword,
            $sDbCharset,
            $iTag
        );
    }
}
