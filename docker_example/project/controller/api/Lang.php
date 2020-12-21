<?php
namespace controller\api;

use ToolClass\Log\Exception;
use ToolClass\Server\Server;

use ToolClass\Model\Mysql;
//use model\publics\NoExistLangFeild;
use model\publics\Lang as LangModel;
use ToolClass\Date\Time;

use ToolClass\Lang\Lang as LangTool;

class Lang
{
//   /route/api/lang/statistics_no_existLang_feild
    public function statisticsNoExistLangFeild ()
    {
        $sValue = $_POST[Server::$sRequestResponseBodyName];
        if (!is_numeric($sValue) && is_string($sValue)) {
            if (!LangTool::checkWhetherExistValue($sValue)) {
                $oMysql = new Mysql(LangModel::$sTable);

                $aData = [];
                $aData[LangModel::$sFiledName] = strtolower($sValue);
                $aData[LangModel::$sAddIpFeild] = Server::outIntIp(Server::userIp());
                $aData[LangModel::$sAddTimeFeild] = Time::getNowTime();

                $oMysql->insert ($aData, TRUE, true);

                $sValue = $aData = $oMysql = null;
                unset($sValue, $aData, $oMysql);
            }
        }
    }

    //////////////////////////////////////////////////////////////////
    public function exportTranslate ()
    {

    }
}
