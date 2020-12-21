<?php

namespace controller\api;

use ToolClass\Menu\AdminMenus;

class Initialize
{
    ///////////////////////
    public function index () {
        AdminMenus::queryAdminMenu();
    }
}
