<?php

namespace middleware;

use ToolClass\Log\Exception;

//use ToolClass\Encode\Rsa;

use ToolClass\Regular\RegularVerify;

use ToolClass\Server\Server;

class BeforeMiddlewareIndex
{
    public static
    function beforeCheckKey ()
    {
        if ( !isset( $_SERVER[ 'REQUEST_METHOD' ] ) ) {
            return FALSE;
        }

        $aRequestData = [];
        switch ( strtolower( $_SERVER[ 'REQUEST_METHOD' ] ) ) {
            case 'post' :
                if ( !isset( $_POST[ Server::$sRequestSessionIdFeild ] ) ) {
                    //                    Exception::throwException('no exist check id 1');
                    return FALSE;
//                    return Server::response(
//                        Server::errorStatus(),
//                        Server::$aReturnData[ 'no exist check id 1' ]
//                    );
                }

                $aRequestData = $_POST;
                break;
            case 'get' :
                if ( !isset( $_GET[ Server::$sRequestSessionIdFeild ] ) ) {
                    //                    Exception::throwException('no exist check id 2');
//                    return Server::response(
//                        Server::errorStatus(),
//                        Server::$aReturnData[ 'no exist check id 2' ]
//                    );
                    return FALSE;
                }

                $aRequestData = $_GET;
                break;
            default :
                //                Exception::throwException('no allow server');
//                return Server::response(
//                    Server::errorStatus(),
//                    Server::$aReturnData[ 'no allow server' ]
//                );
                return FALSE;
                break;
        }

        $bCheckSessionId = self::checkKey( $aRequestData );
        if ( $bCheckSessionId !== TRUE) {
            $aRequestData = NULL;
            unset( $aRequestData );
            //            Exception::throwException('check check id error');
//            return Server::response(
//                Server::errorStatus(),
//                Server::$aReturnData[ 'check check id error' ]
//            );
            return false;
        }

        $aRequestData = NULL;
        unset( $aRequestData );

        return TRUE;
    }

    private static
    function checkKey (
        $aRequestData = []
    ) {
//        echo 2;
//        echo 1111;
        if ( !$aRequestData ) {
            //            Exception::throwException('no check id');
//            return Server::response(
//                Server::errorStatus(),
//                Server::$aReturnData[ 'no check id' ]
//            );
            return false;
        }

//        echo 3;
        if ( !isset( $aRequestData[ Server::$sRsaEncodeRequestSessionId ] ) ) {
            $aRequestData = NULL;
            unset( $aRequestData );
            //            Exception::throwException('no check string');
//            return Server::response(
//                Server::errorStatus(),
//                Server::$aReturnData[ 'no check string' ]
//            );
            return false;
        }

//        echo 4;
        //        $sDecodeCheckId = Rsa::decodeByPrivateKey($aRequestData[Server::$sRsaEncodeRequestSessionId]);
        /////////////////////////////////////
        if ( !isset( $aRequestData[ Server::$sEncodeKeyExplain ] ) ) {
            $sDecodeCheckId = Server::decodeRequestData(
                $aRequestData[ Server::$sRsaEncodeRequestSessionId ]
            );
        } else {

        }

//        echo 5;
        //////////////////////////////////////////
        $sDecodeCheckId = str_replace( '"', '', $sDecodeCheckId );
//        var_dump($sDecodeCheckId);
        if ( !RegularVerify::checkNoEncodeRequestSessionIdFormat( $sDecodeCheckId ) ) {
            $aRequestData = NULL;
            unset( $aRequestData );
            //            Exception::throwException('check string error');
//            return Server::response(
//                Server::errorStatus(),
//                Server::$aReturnData[ 'check string error' ]
//            );
            return false;
        }

//        echo 6;
        if ( !Server::checkSessionId(
            $aRequestData[ Server::$sRequestSessionIdFeild ],
            $sDecodeCheckId
        ) ) {
            $aRequestData = NULL;
            unset( $aRequestData );
            //            Exception::throwException('check id error 1');
//            return Server::response(
//                Server::errorStatus(),
//                Server::$aReturnData[ 'check id error 1' ]
//            );
            return false;
        }

//        echo 7;
        $aRequestData = NULL;
        unset( $aRequestData );
        if ( strtolower( $_SERVER[ 'REQUEST_METHOD' ] ) === 'post' ) {
            $_POST[ Server::$sRsaEncodeRequestSessionId ] = $sDecodeCheckId;
        } else {
            var_dump($_SERVER['REQUEST_METHOD']);
//            return Server::response(
//                Server::errorStatus(),
//                Server::$aReturnData[ 'method no allow' ]
//            );
            return false;
//            if ( strtolower( $_SERVER[ 'REQUEST_METHOD' ] ) === 'get' ) {
//                $_GET[ Server::$sRsaEncodeRequestSessionId ] = $sDecodeCheckId;
//            }
        }

        return TRUE;
    }
}
