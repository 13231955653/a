<?php

namespace command\Dispatch;

use command\CommandFather;
use model\publics\Spider as SpiderModel;
use ToolClass\Model\Mysql;
use ToolClass\Server\Server;

class SpiderDispatch extends CommandFather
{
    public $sCommandName = 'dispatch_spider_dispatch';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $aSpider = $this->querySpider();

        $this->dispatchSpider($aSpider);
    }

    private function dispatchSpider ($aSpider = [])
    {
        if (!$aSpider) {
            return;
        }

        $sExecSuffix = Server::osPlatform() === Server::$sLinuxOS ? ' >/dev/null &' : '';
        foreach ($aSpider as $v) {
//            $cmd = 'php ' .  __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'command.php ' . $v[SpiderModel::$sNameFeild] . $sExecSuffix;
            $cmd = 'php ' .  __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'command.php ' . $v[SpiderModel::name()] . $sExecSuffix;
            var_dump($cmd);
            die();
            exec($cmd);
        }
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
