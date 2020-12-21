<?php

namespace command\Spider;

use command\CommandFather;

use model\publics\Spider as SpiderModel;
use ToolClass\Model\Mysql;

class Spider extends CommandFather
{
    public $sCommandName = 'spider';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $aSpider = $this->querySpider();
        if (!$aSpider) {
            return;
        }

        $this->disposeSpider($aSpider);
    }

    private function disposeSpider ($aSpider)
    {
        var_dump($aSpider);
    }

    private function querySpider ()
    {
        $aWhere = [];
        $aWhere[SpiderModel::status()] = SpiderModel::normalStatus();

        $oMysql = new Mysql( SpiderModel::table() );
        $oMysql->table();

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->select([SpiderModel::url(), SpiderModel::name()]);

        return $oMysql->all();
    }
}
