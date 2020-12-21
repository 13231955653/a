<?php

namespace command\Spider;

use command\CommandFather;
use model\publics\Spider as SpiderModel;
use ToolClass\Model\Mysql;
use ToolClass\Curl\Snoopy\Snoopy;

class Phper1 extends CommandFather
{
    public $sCommandName = 'spider_phper1';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $oPhper1 = $this->queryUrl();

        $this->curl($oPhper1);
    }

    private function curl ($oPhper1 = '')
    {
        if (!$oPhper1) {
            return;
        }

        $sUrlFeild = SpiderModel::url();

        $snoopy = new Snoopy;
        $snoopy->proxy_host = $oPhper1->{$sUrlFeild};
        $snoopy->referer = $oPhper1->{$sUrlFeild};
        if ($snoopy->fetchtext($oPhper1->{$sUrlFeild})) {
            echo "<PRE>" . htmlspecialchars($snoopy->results) . "</PRE>\n";
        } else {
            echo "error fetching document: " . $snoopy->error . "\n";
        }
    }

    private function queryUrl ()
    {
        $aWhere = [];
        $aWhere[SpiderModel::name()] = $this->sCommandName;
        $aWhere[SpiderModel::status()] = SpiderModel::normalStatus();

        $oMysql = new Mysql( SpiderModel::table() );
        $oMysql->table();

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->select([SpiderModel::url(), SpiderModel::port()]);

        return $oMysql->first();
    }
}
