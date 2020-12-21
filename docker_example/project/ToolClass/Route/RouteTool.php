<?php

namespace ToolClass\Route;

use ToolClass\Log\Exception;

use Hook\HookList;

use middleware\BeforeMiddleware;

//use ToolClass\Server\ApiReturn;

use middleware\AfterMiddleware;

use ToolClass\Server\Server;

//use middleware\BeforeMiddlewareIndex;

class RouteTool
{
    private static $aClassMap = [];

    public static
    function switchRoute ()
    {
        $aRoute = self::finishingRoute();

        if ( !$aRoute ) {
            //            Exception::throwException('route error');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'route error' ]
                )
            );
        }

        if ( !isset( $aRoute[ 'path' ] )
             || !isset( $aRoute[ 'class' ] )
             || !isset( $aRoute[ 'method' ] ) ) {
            //            Exception::throwException('route format error');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ 'route format error' ]
                )
            );
        }

        $oCLass  = 'controller'
                   . '\\'
                   . $aRoute[ 'path' ]
                   . '\\'
                   . $aRoute[ 'class' ];
        $sMethos = $aRoute[ 'method' ];

        if ( !self::checkClassIsExist( $oCLass, $sMethos ) ) {
            //            Exception::throwException($oCLass . ' - ' . ' no exists');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    $oCLass . ' - ' . ' no exists'
                )
            );
        }

        //        $middle = BeforeMiddlewareIndex::beforeCheckKey();
        //        if ($middle !== true) {
        //            return ApiReturn::return($middle);
        //        }

        $middle = BeforeMiddleware::exec( $aRoute[ 'class' ], $sMethos );
        if ( $middle !== TRUE ) {
            return $middle;
        }

        self::$aClassMap[] = $oCLass;

        HookList::addHook( $oCLass, $sMethos );

        $oClass = isset( self::$aClassMap[ $oCLass ] )
            ? self::$aClassMap[ $oCLass ] : new $oCLass();
        $res    = $oClass->$sMethos();

        $middle = AfterMiddleware::exec( $aRoute[ 'class' ], $sMethos );
        if ( !$middle ) {
            return $middle;
        }

        return $res;
    }

    private static
    function finishingRoute ()
    {
        $aUrl = parse_url( $_SERVER[ "REQUEST_URI" ] );
        //        var_dump($aUrl);
        if ( !count( $aUrl ) ) {
            //            Exception::throwException('_a');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ '_a' ]
                )
            );
        }

        $aUrl = explode( '/', $aUrl[ 'path' ] );
        $aUrl = array_values( array_filter( $aUrl ) );
//                var_dump($aUrl);
        if ( count( $aUrl ) < 4 ) {
            //            Exception::throwException('_b');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ '_b' ]
                )
            );
        }
        $aUrl[ 2 ] = explode( API_URL_INTERVAL_TAG, $aUrl[ 2 ] );
        foreach ( $aUrl[ 2 ] as $k => $v ) {
            $aUrl[ 2 ][ $k ] = ucfirst( $v );
        }
        $aUrl[ 2 ] = implode( '', $aUrl[ 2 ] );
        $aUrl[ 2 ] = lcfirst( $aUrl[ 2 ] );

        $aUrl[ 3 ] = explode( API_URL_INTERVAL_TAG, $aUrl[ 3 ] );
        foreach ( $aUrl[ 3 ] as $k => $v ) {
            $aUrl[ 3 ][ $k ] = ucfirst( $v );
        }
        $aUrl[ 3 ] = implode( '', $aUrl[ 3 ] );
        $aUrl[ 3 ] = lcfirst( $aUrl[ 3 ] );
        //        var_dump($aUrl);

        //        var_dump($aUrl);
        $aAfterFinishingUrl             = [];
        $aAfterFinishingUrl[ 'path' ]   = $aUrl[ 1 ];
        $aAfterFinishingUrl[ 'class' ]  = ucfirst( $aUrl[ 2 ] );
        $aAfterFinishingUrl[ 'method' ] = $aUrl[ 3 ];
        $aUrl                           = NULL;

        //        var_dump('pppppppppppppp');
        //        var_dump($aAfterFinishingUrl);
        $sFileName = __ROOT_DIR__
                     . DIRECTORY_SEPARATOR
                     . 'controller'
                     . DIRECTORY_SEPARATOR
                     . $aAfterFinishingUrl[ 'path' ]
                     . DIRECTORY_SEPARATOR
                     . $aAfterFinishingUrl[ 'class' ]
                     . '.php';
                        var_dump($sFileName);
        if ( !file_exists( $sFileName ) ) {
            //            Exception::throwException('_c');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ '_c' ]
                )
            );
        }

        //        var_dump($aAfterFinishingUrl);return;
        return $aAfterFinishingUrl;
    }

    private static
    function checkClassIsExist (
        $oCLass = '',
        $sMethos = ''
    ) {
        //        var_dump($oCLass);
        //        var_dump($sMethos);
        if ( !$oCLass ) {
            //            echo 1;
            //            Exception::throwException('_d');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ '_d' ]
                )
            );
        }

        if ( !is_string( $oCLass ) ) {
            //            echo 2;
            //            Exception::throwException('_e');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ '_e' ]
                )
            );
        }

        if ( !class_exists( $oCLass ) ) {
            //            echo 3;
            //            Exception::throwException('_f');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ '_f' ]
                )
            );
        }

        //        var_dump($oCLass, $sMethos);
        if ( !method_exists( $oCLass, $sMethos ) ) {
                    var_dump($oCLass, $sMethos);
            //            echo 3;
            //            Exception::throwException('_g');
            return Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::$aReturnData[ '_g' ]
                )
            );
        }

        return TRUE;
    }
}
