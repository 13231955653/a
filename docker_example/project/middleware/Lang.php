<?php

namespace middleware;

use ToolClass\Server\Server;
use ToolClass\Log\Exception;

class Lang
{
    public
    function exec (
        $sFuncName
    ) {
        switch ( $sFuncName ) {
            case 'statisticsNoExistLangFeild':
                return $this->checkExistFeild();
                break;
            default:
                var_dump($sFuncName);
                return Exception::throwException(
                    Server::response(
                        Server::errorStatus(),
                        Server::$aReturnData[ 'lang middle no select function' ]
                    )
                );
                break;
        }
    }

    private function checkExistFeild ()
    {
        if (!isset($_POST[Server::$sRequestResponseBodyName])) {
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'lang middle no insert feild' ]
                )
            );
        }

        return TRUE;
    }
}
