<?php

namespace ToolClass\Server;


use Service\Depend\DependContainer;
use Service\Ioc\Ioc;
//use ToolClass\Cache\RedisKey;
//use ToolClass\Cache\Cache;
//use ToolClass\Encode\Rsa;
//use ToolClass\Json\Json;

require_once __ROOT_DIR__
             . DIRECTORY_SEPARATOR
             . 'define'
             . DIRECTORY_SEPARATOR
             . 'string.php';

use ToolClass\ToolFather;

class Server extends ToolFather
{
    /**
     * private key
     */
    public static $sPrivateKey = '-----BEGIN PRIVATE KEY-----
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
t0tRKSmd+AzJU+AUz6UUUUjKvkWweQ==
-----END PRIVATE KEY-----
';

    /**
     * public key
     */
    public static $sPublicKey                 = '-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAnNWya/mKpYEk2LWFtF5u
9lwiHDlY6TSuq3aKEJisLjVsaWo7pIqdHRDwyUXLUuAR4Rp1gFFW7+/AX7PlVph1
jw5e5xOuvqz/1O6wqENm9/NTjLEvp30cc9jzzXbEsJmBoKRpwtEUiN7a6E//OiSq
Xbezw7x80p1hYJzm7oGLNIh397dE/CJ0dFBMNorzJK7Y0UxcnvIv4bcVcHH2K1YZ
r7hK94Oa4MbbgeuM++/Wf+aiHH+qprmB0jBmCpr+5WEGUJxoNTbkO+1tA1SPIuuO
HQ3pzPs3J9ZFh3XlpAz7oipLtOLzdm371twcpChZ24GYutMCHgM/lzwJ+6+FN7eP
mkcLKt85X4+TRQxyEXeKemvYMBWXaPd6D5qhwSNCFo2qZ+fSkiB2BtS6bENndtH5
LfOU8srOdwhF/1aflT2rb3D5KS03O31BBTRkVHjsjgYRnNBbraijtK668VozbmXt
l3N+CGrztBkT5lS5nlqifBxksejcV6OyTroHPZuzhFGjn6bh6jXD/OgcaNTNc+Uj
RpOkgNdHmUmdB1m0a+z5aGGKR8Q3EMwOBZqHEx2NFnajfTaOgaPu6jOGiSP3+SKN
OvTUZxPV5Ffden3ZxjNb8c7hi+wGYG6tdoO7ErrbDROhtG8VAXELYiQgeC6YLmPy
NijFTFBZCLlRyIiv/gq1TSECAwEAAQ==
-----END PUBLIC KEY-----
';
    public static $sKeyFeild                  = 'server';
    public static $sSessionIntervalTag        = '_';
    public static $sRequestSessionIdFeild     = 'check_id';
    public static $sRsaEncodeRequestSessionId = 'rsa_encode_check_id';

    private static $sCheckEncodeSesssionIdSalt = 'dasdasmksg45654678(*^&*%@@#';

    public static $sAdminAndUserUserNameColumn = 'username';

    public static $sRequestResponseBodyName = 'data';
    public static $sRequestArgUserNameName  = 'sName';
    public static $sRequestArgUserPwdFeild  = 'sPwd';
    public static $sRequestLocalstoeageName = 'localstorage';
    public static $sRequestEncodeName       = 'encode';
    public static $sResponseStatusName      = 'status';
    public static $sRequestErrorName        = 'error';
    public static $sRequestTimeName         = 'time';
    private static $iErrorStatus             = 0;
    public static $iNormalStatus            = 1;

    //限制频率
    public static $iLimitFrequencySecond = 5;

    public static $sWebActionFeild        = 'web_action';
    public static $sDel                   = 'del';
    public static $sDelLocalstorageAction = 'del_localstorage';
    public static $sEncodeKeyExplain      = 'encode_key_explain';

    private static $sWindowOS = 'win';
    private static $sLinuxOS  = 'linux';

    private static $bSetNeverTimeOut = FALSE;
    
    private static $sUsedPortPrefix = 'used-';

    public static function windowOs ()
    {
        return self::$sWindowOS;
    }

    public static function linuxOs ()
    {
        return self::$sLinuxOS;
    }

    //    private static $iDefaultLocalstorageOutTime = 86400;

    public static $aAllowRequestMethod
        = [
            //        'get',
            'post'
        ];

    public static function errorStatus ()
    {
        return self::$iErrorStatus;
    }
    
    public static function checkUsedPort (string $sPort = '')
    {
        if (!$sPort || !is_numeric($sPort)) {
            return self::throwError('websocket port must number');
        }
    
        $sDependName = DependContainer::cache();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
    
        $oCache = Ioc::resolve($sDependName);
        $oCache->setnx(self::$sUsedPortPrefix . $sPort, 1);
    }

    public static function returnError ($sKey = '')
    {
        if (!$sKey) {
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            $oExceptionDepend->throwException(
                self::response(
                    [
                        self::errorStatus(),
                        self::returnError('server error key is null')
                    ]
                )
            );
            return FALSE;
        }

        if (!isset(SERVER_ERROR_INFO[$sKey])) {
            if (DEBUG) {
                var_dump('no get error key ' . $sKey);
            }

            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            $oExceptionDepend->throwException(
                self::response(
                    [
                        self::errorStatus(),
                        self::returnError('server error key is no exist')
                    ]
                )
            );
            return FALSE;
        }

        return SERVER_ERROR_INFO[$sKey];
    }

    public static
    function response (
//        $iStatus = 0,
//        $sResponseNotice = '',
//        $aLocalstorageData = [],
//        $aLocalstorageTime = [],
//        $aResponseData = [],
//        $aEncodeData = [],
//        $aResponseWebAction = [],
//        $sEncodeKey = '',
//        $sEncodeKeyExplain = ''
        array $aArguments = []
    ) {
        $iStatus = $aArguments[0];
        $sResponseNotice = $aArguments[1];
        $aResponse = [];
        switch ( $iStatus ) {
            case 0 :
                $aResponse[ self::statusFieldValue() ] = (int)$iStatus;
                $aResponse[ self::errorFieldValue() ]
                                                       = (string)$sResponseNotice;
                break;
            case 1 :
                $aResponse[ self::statusFieldValue() ] = (int)$iStatus;
                $aResponse[ self::resquertResponseDataFieldValue() ]
                                                       = (string)$sResponseNotice;
                break;
            default :
                new \Exception(SERVER_ERROR_INFO[ 'response no status' ]);
                return FALSE;
                break;
        }

//        if ( $aLocalstorageData ) {
//            if ( count( $aLocalstorageData ) !== count( $aLocalstorageTime ) ) {
//                Exception::throwException(
//                    SERVER_ERROR_INFO[ 'localstorages data and storage time number no same' ]
//                );
//                return;
//            }
//
//            $aResponse[ self::localstorageFieldValue() ] = $aLocalstorageData;
//            $aResponse[ self::localstorageOutTimeFieldValue() ]
//                                                         = $aLocalstorageTime;
//        }
//
//        if ( $aResponseData ) {
//            $aResponse[ self::resquertResponseDataFieldValue() ]
//                = $aResponseData;
//        }
//
//        if ( $aEncodeData ) {
//            if ( !$sEncodeKey || !$sEncodeKeyExplain ) {
//                Exception::throwException(
//                    SERVER_ERROR_INFO[ 'no exists response encode key' ]
//                );
//            }
//
//            $aResponse[ self::encodeFieldValue() ] = $aEncodeData;
//            $aResponse[ self::responseEncodeKeyExplainFeild() ]
//                                                   = $sEncodeKeyExplain;
//            foreach ( $aEncodeData as $v ) {
//                $aResponse[ $v ] = self::encodeData(
//                    $aResponse[ $v ],
//                    $sEncodeKey
//                );
//            }
//        }
//
//        if ( $aResponseWebAction ) {
//            $aResponse[ self::responseWebActionFeild() ] = $aResponseWebAction;
//        }

        return $aResponse;
    }

    public static
    function osPlatform ()
    {
        return strtoupper( substr( PHP_OS, 0, 3 ) ) === 'WIN' ? self::windowOs()
            : self::linuxOs();
    }

    public static
    function decodeRequestData (
        $sRequestEncodeData,
        $sKey = ''
    ) {
        return Rsa::decodeByPrivateKey(
            $sRequestEncodeData,
            ( $sKey ? $sKey : self::$sPrivateKey )
        );
    }

    private static
    function responseEncodeKeyExplainFeild ()
    {
        return self::$sEncodeKeyExplain;
    }

    private static
    function responseWebActionFeild ()
    {
        return self::$sWebActionFeild;
    }

    public static
    function interactionFormat (
        $res
    ) {
        return Json::toJson( is_array( $res ) ? $res : (array)$res );
    }

    private static
    function encodeData (
        $res,
        $sKey
    ) {
        return Rsa::encryptByPrivateKey( $res, $sKey );
    }

    public static
    function encodeFieldValue ()
    {
        return self::$sRequestEncodeName
               . self::$sSessionIntervalTag
               . self::$sRequestResponseBodyName;
    }

    public static
    function localstorageOutTimeFieldValue ()
    {
        return self::localstorageFieldValue()
               . self::$sSessionIntervalTag
               . self::$sRequestTimeName;
    }

    public static
    function localstorageFieldValue ()
    {
        return self::$sRequestLocalstoeageName
               . self::$sSessionIntervalTag
               . self::$sRequestResponseBodyName;
    }

    public static
    function responseDelLocalstorageFeild ()
    {
        //        return self::$sDel . self::$sSessionIntervalTag . self::$sRequestLocalstoeageName;
        return self::$sDelLocalstorageAction;
    }

    public static
    function resquertResponseDataFieldValue ()
    {
        return self::$sRequestResponseBodyName;
    }

    public static
    function statusFieldValue ()
    {
        return self::$sResponseStatusName;
    }

    public static
    function errorFieldValue ()
    {
        return self::$sRequestErrorName;
    }

    public static
    function setNeverTimeout ()
    {
        if (self::$bSetNeverTimeOut) {
            return TRUE;
        }

        self::$bSetNeverTimeOut = TRUE;

        ini_set( 'max_execution_time', 0 );
    }

    public static
    function setServerBidMemory ($sMemory = '')
    {
        $sMemory = $sMemory ? $sMemory : '256M';
        ini_set( 'memory_limit', $sMemory );
    }

    public static
    function getNowUser ()
    {
        return isset( $_POST[ self::$sRequestResponseBodyName ] )
               && isset( $_POST[ self::$sRequestResponseBodyName ][ self::$sRequestArgUserNameName ] )
            ? $_POST[ self::$sRequestResponseBodyName ][ self::$sRequestArgUserNameName ]
            : System::returnSystemUser();
    }

    //    public static function requestArgBodyName ()
    //    {
    //        return 'data';
    //    }

    public static
    function outIntIp (
        $sIp = ''
    ) {
        $sIp = $sIp ? trim( $sIp, ' ' ) : '0.0.0.0';
        return ip2long( $sIp );
    }

    public static
    function intIpConvertString (
        $iIp
    ) {
        $iIp = $iIp ? $iIp : 0;
        $sIp = long2ip( (int)$iIp );
        return $sIp ? $sIp : '0.0.0.0';
    }

    //    public static
    //    function userIp ()
    //    {
    //        return $_SERVER[ 'HTTP_X_REAL_IP' ];
    //    }
    
    public static function getServerIp ()
    {
        if(!empty($_SERVER['SERVER_ADDR'])) {
            return $_SERVER['SERVER_ADDR'];
        }
        
        return gethostbyname($_SERVER['HOSTNAME']);
    }
    
    public static
    function userIp ()
    {
        $sRealip = NULL;
        if ( isset( $_SERVER ) ) {
            if ( isset( $_SERVER[ 'HTTP_X_REAL_IP' ] ) ) {
                $aArr = explode( ',', $_SERVER[ 'HTTP_X_REAL_IP' ] );
                foreach ( $aArr AS $sIp ) {
                    $sIp = trim( $sIp );
                    if ( $sIp != 'unknown' ) {
                        $sRealip = $sIp;
                        break;
                    }
                }
            } else {
                if ( isset( $_SERVER[ 'HTTP_CLIENT_IP' ] ) ) {
                    $sRealip = $_SERVER[ 'HTTP_CLIENT_IP' ];
                } else {
                    if ( isset( $_SERVER[ 'REMOTE_ADDR' ] ) ) {
                        $sRealip = $_SERVER[ 'REMOTE_ADDR' ];
                    } else {
                        $sRealip = '0.0.0.0';
                    }
                }
            }
        } else {
            if ( getenv( 'HTTP_X_REAL_IP' ) ) {
                $sRealip = getenv( 'HTTP_X_REAL_IP' );
            } else {
                if ( getenv( 'HTTP_CLIENT_IP' ) ) {
                    $sRealip = getenv( 'HTTP_CLIENT_IP' );
                } else {
                    $sRealip = getenv( 'REMOTE_ADDR' );
                }
            }
        }
        preg_match( '/[\d\.]{7,15}/', $sRealip, $aOnlineip );
        $sRealip = !empty( $aOnlineip[ 0 ] ) ? $aOnlineip[ 0 ] : '0.0.0.0';
        return $sRealip;
    }

    public static
    function getQueryArgs (
        $sGetWhat = FALSE
    ) {
        return $sGetWhat && isset( $_POST[ $sGetWhat ] ) ? $_POST[ $sGetWhat ]
            : FALSE;
    }

    public static
    function checkSessionId (
        $sSessionId = FALSE,
        $sCheckSessionString = FALSE
    ) {
        //        var_dump($sSessionId);
        //        var_dump($sCheckSessionString);
        if ( !$sSessionId || !$sCheckSessionString ) {
//            //            Exception::throwException('session check error 1');
//            Exception::throwException(
//                self::response(
//                    self::$iErrorStatus,
//                    SERVER_ERROR_INFO[ 'session check error 1' ]
//                )
//            );
//            return FALSE;
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            //            $sServerDepengName = DependContainer::server();
            //            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                self::response(
                    self::errorStatus(),
                    self::returnError('session check error 1')
                )
            );
            return FALSE;
        }

        if ( $sSessionId !== self::md5CheckSessionString(
                $sCheckSessionString
            ) ) {
//            //            Exception::throwException('session check error 2');
//            Exception::throwException(
//                self::response(
//                    self::$iErrorStatus,
//                    SERVER_ERROR_INFO[ 'session check error 2' ]
//                )
//            );
//            return FALSE;
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            //            $sServerDepengName = DependContainer::server();
            //            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                self::response(
                    self::errorStatus(),
                    self::returnError('session check error 2')
                )
            );
            return FALSE;
        }

        return TRUE;
    }

    public static
    function getNowLoginUser ()
    {
        if ( !isset( $_POST[ Server::$sRequestSessionIdFeild ] ) ) {
            return Server::getNowUser();
        }

        $sRedisKey = RedisKey::adminSessionRedisHou();
        $aRedisKey = Cache::keys( '*' . $sRedisKey . '*' );;
        if ( !$aRedisKey ) {
            return Server::getNowUser();
        }

        $sStringPerfix = RedisKey::adminSessionRedisPerfix();
        foreach ( $aRedisKey as $k => $v ) {
            if ( strstr( $v, $sStringPerfix ) === FALSE ) {
                unset( $aRedisKey[ $k ] );
            }

            /////////////////////////////////
            if ( strstr( $v, '__' ) ) {
                unset( $aRedisKey[ $k ] );
            }
        }

        if ( !$aRedisKey ) {
            return Server::getNowUser();
        }

        $aRedisKey = array_values( $aRedisKey );
        $sRedisKey = $aRedisKey[ 0 ];
        //////////////////////////////
        $sRedisKey  = str_replace( RedisKey::setKeyPerfix(), '', $sRedisKey );
        $oLoginUser = Cache::hGet(
            $sRedisKey,
            Server::$sAdminAndUserUserNameColumn
        );
        return $oLoginUser ? $oLoginUser : Server::getNowUser();
    }

    private static
    function md5CheckSessionString (
        $sCheckSessionString
    ) {
        return md5(
            md5( $sCheckSessionString ) . self::$sCheckEncodeSesssionIdSalt
        );
    }
}