<?php

namespace controller\admin;

use controller\ControllerFather;

use model\admin\Admin as AdminModel;
use model\admin\AdminActionHistory;
use ToolClass\Encode\AdminEncode;

use ToolClass\Date\Time;

use Hook\Hook;

use ToolClass\Admin\Admin as AdminTool;
use ToolClass\Server\Server;


use ToolClass\Database\Mysql;

class Admin extends ControllerFather
{
    //    /route/admin/login/login_in
    public
    function loginIn ()
    {
        $sAdminName                              = AdminTool::adminNameArg();
        $aWhereCondition                         = [];
        $aWhereCondition[ Mysql::$sWhereFeild1 ] = [];
        $aWhereCondition[ Mysql::$sWhereFeild1 ][ AdminModel::$sUserNameColumn ]
                                                 = AdminTool::setAdminName(
            $sAdminName
        );
        $aWhereCondition[ Mysql::$sWhereFeild1 ][ AdminModel::$sUserPwdColumn ]
                                                 = AdminEncode::encodeAdminPassword(
            AdminTool::setAdminPwd( AdminTool::adminPwdArg() )
        );
        $aWhereCondition[ Mysql::$sWhereFeild2 ] = [];
        $aWhereCondition[ Mysql::$sWhereFeild2 ][ AdminModel::$sUserStatusColumn ]
                                                 = AdminModel::$iNormalStatus;

//        var_dump($aWhereCondition);
        $res             = AdminTool::queryAdmin(
            $aWhereCondition,
            [
                AdminModel::$sIdColumn,
                AdminModel::$sJurisdictionColumn
            ],
            1
        );
        $aWhereCondition = NULL;
        unset( $aWhereCondition );

        if ( !$res ) {
            return Server::response(
                Server::errorStatus(),
                Server::$aReturnData[ 'admin login error' ]
            );
        }

        $res->{AdminModel::$sUserNameColumn} = $sAdminName;
        $res->login_time                     = Time::getNowTime();
        $res1                                = $res;

        AdminTool::storageAdminCache( $res );

        Hook::listen(
            Hook::$sAdminLoginClass,
            Hook::$sAdminLoginFunction,
            [
                Hook::$sHookActionFeild => AdminActionHistory::$sAction1,
                Hook::$sHookResFeild    => (array)$res1
            ]
        );

        return Server::response(
            Server::$iNormalStatus,
            Server::$aReturnData[ 'admin login success' ],
            [
                AdminTool::$sCacheName => $res1,
            ],
            [
                AdminTool::$sCacheName => AdminTool::$iCacheLiftTime,
            ],
            [],
            [
                'a' => Server::localstorageFieldValue(),
            ],
            [],
            AdminTool::$sPrivateKey,
            AdminTool::$sKeyFeild

        );
    }

    //    /route/admin/login/out
    public
    function out ()
    {
        $aAdmin = AdminTool::getAdminInfoFromCache();

        $res = AdminTool::delAdminCache();
        if ( !$res ) {
            //            return Server::response(Server::errorStatus(), Server::$aReturnData[ 'del admin cache error' ]);
            return Server::response(
                Server::errorStatus(),
                Server::$aReturnData[ 'del admin cache error' ],
                [],
                [],
                [],
                [],
                [ 'a' => Server::responseDelLocalstorageFeild() ]
            );
        }

        Hook::listen(
            Hook::$sAdminLoginClass,
            Hook::$sAdminLoginFunction,
            [
                Hook::$sHookActionFeild => AdminActionHistory::$sAction2,
                Hook::$sHookResFeild    => (array)$aAdmin
            ]
        );
        $aAdmin = NULL;
        unset( $aAdmin );

        //        return Server::response(Server::$iNormalStatus, Server::$aReturnData[ 'admin out success' ]);
        return Server::response(
            Server::$iNormalStatus,
            Server::$aReturnData[ 'admin out success' ],
            [],
            [],
            [],
            [],
            [ 'a' => Server::responseDelLocalstorageFeild() ]
        );
    }
}
