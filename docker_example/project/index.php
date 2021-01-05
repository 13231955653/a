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
        echo ApiReturn::response( $res );
    }
} catch ( \Exception $e ) {
    if (DEBUG) {
        var_dump( $e->getMessage() );
    }
    
    $res = Json::analyJson( $e->getMessage() );
    if ( !$res || !isset( Json::toArray($res)[ Server::statusFieldValue() ] ) ) {
        echo Json::toJson([Server::statusFieldValue() => Server::errorStatus()]);
        return;
    }
    
    echo ApiReturn::response( $res );
}

