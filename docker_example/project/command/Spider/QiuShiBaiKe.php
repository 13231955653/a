<?php

namespace command\Spider;

use command\CommandFather;
use ToolClass\Snoopy\Snoopy;
use model\publics\Spider;
use ToolClass\Model\Mysql;

class QiuShiBaiKe extends CommandFather
{
    public $sCommandName = 'qiu_shi_bai_ke';

    private $sSpiderName = 'qiu_shi_bai_ke';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $aWhere = [];
        $aWhere[Spider::name()] = $this->sSpiderName;
        $aWhere[Spider::status()] = Spider::normalStatus();

        $oMysql = new Mysql( Spider::table() );
        $oMysql->table();

        $oMysql->writeSql( TRUE );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->select([Spider::url()]);

        $oQiuShiBaiKe = $oMysql->first();
        var_dump($oQiuShiBaiKe);
    }
}
