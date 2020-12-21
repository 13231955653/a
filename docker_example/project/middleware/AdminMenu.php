<?php

namespace middleware;

use ToolClass\Admin\Admin;

use model\admin\Admin as AdminModel;

use ToolClass\Log\Exception;
use ToolClass\Server\Server;

class AdminMenu
{
    public
    function exec (
        $sFuncName
    ) {
        $this->checkJurisdiction( );
//        $iAdminJurisdiction = (int)Admin::getAdminInfoFromCache(
//            AdminModel::$sJurisdictionColumn
//        );
//        if ( !$iAdminJurisdiction ) {
//            //            Exception::throwException('no admin login eroor');
//            return Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::$aReturnData[ 'no admin login eroor' ]
//                )
//            );
//        }

        //        var_dump($iAdminJurisdiction);
        //        var_dump($sFuncName);
        switch ( $sFuncName ) {
            case 'index':
                return TRUE;
                //                return $this->adminLogin();
                break;
            case 'adminList':
                return TRUE;
                //                return $this->adminLogin();
                break;
            case 'oneDetail':
                return $this->checkIdFormat();
                //                return $this->adminLogin();
                break;
            case 'delMenu':
//                var_dump($this->checkIdFormat());
                return $this->checkIdFormat();
                //                return $this->adminLogin();
                break;
            default:
                //                Exception::throwException('admin menu middle no select function');
                Exception::throwException(
                    Server::response(
                        Server::errorStatus(),
                        Server::returnError('admin menu middle no select function')
                    )
                );
                return FALSE;
                break;
        }
    }

    private
    function checkJurisdiction () {
        $iAdminJurisdiction = (int)Admin::getAdminInfoFromCache(
            AdminModel::$sJurisdictionColumn
        );
        if ( !$iAdminJurisdiction ) {
            //            Exception::throwException('no admin login eroor');
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('no admin login eroor')
                )
            );
            return FALSE;
        }

        return TRUE;
    }

    private function checkIdFormat ()
    {
        $aUri = explode('/', $_SERVER['REQUEST_URI']);
        if (!is_numeric($aUri[count($aUri) - 1])) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('menu id format error')
                )
            );
            return FALSE;
        }

        return TRUE;
    }
}
