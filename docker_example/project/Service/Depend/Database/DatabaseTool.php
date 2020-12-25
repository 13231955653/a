<?php

namespace Service\Depend\Database;
use ToolClass\Database\Mysql as MysqlTool;

use Service\Depend\Depend;
class DatabaseTool extends Depend
{
    public function __call ($name, $arguments)
    {
        var_dump(__NAMESPACE__);
        var_dump(__CLASS__);
        var_dump($name);
        var_dump($arguments);
        die();
        return Mysql::{$name}($arguments);
    }

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
