<?php

namespace controller\home;

use controller\ControllerFather;

use Hook\Hook;

use model\home\HomeMenu;

use ToolClass\Model\Mysql;

use ToolClass\Log\Exception;

class Menu extends ControllerFather
{
    //route/home/menu/index_header
    public
    function indexHeader ()
    {
//        SELECT `position`,`name` FROM `home_menus`WHERE(`platform`="mobile" AND `page`="index")AND(`status`=1)
        $oMysql = new Mysql(HomeMenu::$sTable);
        $oMysql->table();

        $oMysql->writeSql(TRUE);

        $aWhere = [];
        $aWhere[ 'platform' ] = HomeMenu::$sMobilePlatform;
        $aWhere[ 'page' ] = HomeMenu::$sIndexPage;
//        $aWhere[ 'position' ] = HomeMenu::$sIndexPage;
        $oMysql->where($aWhere);
        $aWhere = NULL;
        unset($aWhere);

        $aWhere1 = [];
        $aWhere1[ 'status' ] = HomeMenu::$iNormalStatus;
        $oMysql->where($aWhere1);
        $aWhere1 = NULL;
        unset($aWhere1);

        $oMysql->select(['position', 'name']);

        $res = $oMysql->all();
        if (!$res) {
            Exception::throwException('no home menus');
            return false;
        }

        $res1 = [];
        foreach ($res as $v) {
            $res1[$v['position']][] = $v['name'];
        }
        $res = null;
        unset($res);

        var_dump($res1);
        //        Hook::listen('WriteUserAction', 'writeUserAction', UserActionHistory::$sAction1);
    }
}
