<?php

namespace Hook;

//use model\admin\AdminLoginHistory;
use ToolClass\Date\Time;
use ToolClass\Model\Mysql;
use ToolClass\Server\Server;

use model\admin\AdminActionHistory;

use ToolClass\Admin\Admin;

class WriteAdminAction
{
    public
    function writeAdminAction ($oUserInfo = FALSE)
    {
        if (!isset($_POST[ Server::resquertResponseDataFieldValue() ])) {
            return FALSE;
        }

        $aData[ 'username' ] = isset($oUserInfo[ 'res' ][ Server::$sAdminAndUserUserNameColumn ]) ? $oUserInfo[ 'res' ][ Server::$sAdminAndUserUserNameColumn ] : Admin::adminNameArg();
        $aData[ 'u_id' ] = (int)$oUserInfo[ 'res' ][ 'id' ];
        $aData[ 'ip' ] = (int)Server::outIntIp(Server::userIp());
        $aData[ 'action_time' ] = (int)Time::getNowTime();
        $aData[ 'action' ] = (int)$oUserInfo[ 'action' ];

        //        $aCheckString = explode(rsa_encode_check_id_INTERVAL_TAG, $_POST['rsa_encode_check_id']);
        //        $aData['request_ip'] = Server::outIntIp($aCheckString[0]);
        //        $aData['request_address'] = $aCheckString[1];
        //        $aData = Server::getUserIpAndAddress($aData);

        $oMysql = new Mysql(AdminActionHistory::$sTable);
        $aCheckString = NULL;
        unset($aCheckString);

        return $oMysql->insert($aData, TRUE, TRUE);
    }
}
