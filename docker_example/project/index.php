<?php

use middleware\BeforeMiddlewareIndex;

use ToolClass\Route\RouteTool;

require_once 'include.php';

use ToolClass\Date\Time;

use ToolClass\Log\Exception;

use ToolClass\Server\ApiReturn;

use ToolClass\Json\Json;

use ToolClass\Server\Server;

try {
    if ( !isset( $_SERVER[ 'REQUEST_METHOD' ] )
         || !in_array(
            strtolower( $_SERVER[ 'REQUEST_METHOD' ] ),
            Server::$aAllowRequestMethod
        ) ) {
        Exception::throwException(
            Server::response(
                Server::errorStatus(),
                Server::returnError('no allow method')
            )
        );
        return;
    }

    if ( BeforeMiddlewareIndex::beforeCheckKey() !== TRUE ) {
        Exception::throwException(
            Server::response( Server::errorStatus(), ' ' )
        );
        return;
    }

    Time::setStartTime();

    if ( !strstr( $_SERVER[ 'REQUEST_URI' ], '.php' ) ) {
        $res = RouteTool::switchRoute();
        //        if (is_array($res)) {
        //            var_dump($res);
        echo ApiReturn::response( $res );
        //        }
        //        else {
        //            var_dump($res);
        //        }
    }
} catch ( \Exception $e ) {
    //    var_dump($_SERVER[ 'REQUEST_URI' ]);
    var_dump( $e->getMessage() );
    $res = Json::analyJson( $e->getMessage() );
    if ( $res ) {
        if ( !isset( $res[ Server::statusFieldValue() ] ) ) {
            $res[ Server::statusFieldValue() ] = Server::errorStatus();
        }
    } else {

    }

    echo ApiReturn::response( $res );
}

