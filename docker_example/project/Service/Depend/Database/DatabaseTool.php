<?php

namespace Service\Depend\Database;
use ToolClass\Database\Mysql;

class DatabaseTool
{
    public function __call ($name, $arguments)
    {
        return Mysql::{$name}($arguments);
    }
}
