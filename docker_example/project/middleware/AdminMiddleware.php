<?php

namespace middleware;

use ToolClass\Admin\Admin;
use ToolClass\Log\Exception;

use ToolClass\Encode\Rsa;
use ToolClass\Json\Json;
use ToolClass\Server\Server;

class AdminMiddleware
{
    public function exec ($sFuncName)
    {
//        var_dump($sFuncName);
//        var_dump($_POST);
        switch ($sFuncName) {
            case 'loginIn':
                return $this->adminLogin();
                break;
            case 'out':
                return $this->judgeAdminLogin();
                break;
            default:
                Exception::throwException('admin middle no exist ' . $sFuncName);
                break;
        }
    }

    ///////////////////////////////////////////////
    private function judgeAdminLogin ()
    {
        return isset($_POST[Server::$sRequestSessionIdFeild]);
    }

    private function adminLogin ()
    {
        $sFeild = Server::resquertResponseDataFieldValue();
        //        $_POST[Server::resquertResponseDataFieldValue()] = Rsa::decodeByPrivateKey($_POST[Server::resquertResponseDataFieldValue()]);
        $_POST[$sFeild] = Server::decodeRequestData($_POST[$sFeild]);

        /////////////////////////////////////
        if (!isset($_POST[Server::$sEncodeKeyExplain])) {
            $sEncodeCheckId = Server::decodeRequestData($_POST[Server::$sRsaEncodeRequestSessionId]);
        }
        $_POST[$sFeild] = Json::toArray($_POST[$sFeild]);
        $sFeild = null;
        unset($sFeild);

        if (!Admin::checkAdminNamePassword()) {
//            Exception::throwException('no post data');
            return Server::response(
                Server::errorStatus(),
                Server::$aReturnData[ 'no post data' ]
            );
        }

        return TRUE;
    }
}
