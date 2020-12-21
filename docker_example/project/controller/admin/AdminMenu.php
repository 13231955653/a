<?php

namespace controller\admin;

use controller\ControllerFather;
//use model\admin\Admin as AdminModel;
//use ToolClass\Admin\Admin;
use ToolClass\Menu\AdminMenus;
use ToolClass\Server\Server;

class AdminMenu extends ControllerFather
{
    //    /route/admin/admin_menu/index
    public
    function index ()
    {
        return Server::response(
            Server::$iNormalStatus,
            '',
            [],
            [],
            AdminMenus::queryAdminMenus(
                []
            )
        );
    }

    ////////////////////////////////////
    public
    function homeMenu ()
    {
        return [
            Server::statusFieldValue()               => Server::$iNormalStatus,
            Server::resquertResponseDataFieldValue() => 'sssss'
        ];
    }

    //    /route/admin/admin_menu/admin_list
    public
    function adminList ()
    {
        return Server::response(
            Server::$iNormalStatus,
            '',
            [],
            [],
            array_values(AdminMenus::queryAdminMenuList())
        );
    }

    private function getRequestId ()
    {
        $aUri = explode('/', $_SERVER['REQUEST_URI']);
        return $aUri[count($aUri) - 1];
    }

//    /route/admin/admin_menu/one_detail/(int)id
    public function oneDetail () {
//        var_dump($iMenuId);

        return Server::response(
            Server::$iNormalStatus,
            '',
            [],
            [],
            array_values(AdminMenus::queryOneMenuDetail($this->getRequestId()))
        );
    }

//    /route/admin/admin_menu/del_menu/(int)id
    public function delMenu () {
        echo 1;return;
        $res = AdminMenus::queryAdminMenus;
//        var_dump($res);
    }
}
