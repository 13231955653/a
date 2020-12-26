<?php

namespace Service\Depend\Database;
use ToolClass\Database\Mysql as MysqlTool;

use Service\Depend\Depend;
class DatabaseTool extends Depend
{
    public function daYu ()
    {
//        var_dump($arguments);
        return MysqlTool::daYu();
    }

    public function queryNowDatabaseTag ()
    {
        return MysqlTool::queryNowDatabaseTag();
    }

    public function mtRandNowDatabaseTag ()
    {
        return MysqlTool::mtRandNowDatabaseTag();
    }
}
