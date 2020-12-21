<?php

namespace ToolClass\Image;

//use model\publics\ZhongGuanCunXiaoHuaSpider;
//use model\publics\ZhongGuanCunXiaoHuaSpider;
use ToolClass\Date\Time;
use ToolClass\Json\Json;
use ToolClass\Log\Exception;
use ToolClass\Model\Mysql;
//use ToolClass\Regular\Regular;
use ToolClass\Queue\Queue;
use ToolClass\Server\Server;
use ToolClass\Strings\Strings;
use ToolClass\File\File;
use model\publics\ImageList;
use ToolClass\Regular\RegularVerify;
use ToolClass\Database\Mysql as MysqlTool;

class Image
{
    private static $sSaveImageNameSalt    = '234867BJHBkdawir(*^$%^#}{:fafdg54wq';
    private static $sSaveImageNameMd5Salt = '1354fsdhjBJK098786%^&%^&$^&()*@$$>:"';
    private static $sSplitTag             = '_';
    private static $sUploadImagePath      = 'upload_image';
    private static $sUploadImageTmpPath   = 'upload_image_tmp';
    private static $sUploadImageRealPath  = 'upload_image_real';
    private static $sUploadImageFakePath  = 'images';

    public static
    function existImage (
        $sInfo = ''
    ) {
        if ( !$sInfo ) {
            return FALSE;
        }

        return RegularVerify::existImage( $sInfo );
    }

    public static
    function getAllImageSrc (
        $sInfo = ''
    ) {
        if ( !$sInfo ) {
            return FALSE;
        }

        return RegularVerify::getAllImageSrc( $sInfo );
    }

    public static
    function downloadImage (
        $sSrc = ''
    ) {
        if ( !$sSrc ) {
            return FALSE;
        }

        $sImageInfo = self::downImage( $sSrc );
        if ( !$sImageInfo ) {
            return FALSE;
        }

        $sMd5File = self::checkSameFileStyle( $sImageInfo );

        $sPath = self::existSameImage( $sMd5File );
        if ( $sPath ) {
            self::updateImageListUsedNumber( $sMd5File );
            return $sPath;
        }

        $sDownloadImageSaveAddress = self::setUploadImageTmpPath( $sSrc );

        if ( self::writeImage( $sDownloadImageSaveAddress, $sImageInfo ) ) {
            self::insertImageList( $sMd5File, $sDownloadImageSaveAddress );

            return str_replace(
                __ROOT_DIR__ . DIRECTORY_SEPARATOR,
                '',
                $sDownloadImageSaveAddress
            );
        }
    }

    //    public static function checkExistSameImage ($sImageInfo)
    //    {
    //        $sMd5File = self::checkSameFileStyle($sImageInfo);
    //
    //        return self::existSameImage($sMd5File);

    //        $sExistPath = self::existSameImage($sMd5File);
    //        if ($sExistPath) {
    //            self::updateImageListUsedNumber($sMd5File);
    //            return $sExistPath;
    //        } else {
    //            $sDownloadImageSaveAddress = self::setUploadImageTmpPath( $sSrc );
    //
    //            if (self::writeImage($sDownloadImageSaveAddress, $sImageInfo)) {
    //                self::insertImageList($sMd5File, $sDownloadImageSaveAddress);
    //
    //                return str_replace(__ROOT_DIR__ . DIRECTORY_SEPARATOR, '', $sDownloadImageSaveAddress);
    //            }
    //        }
    //    }

    public static
    function checkSameFileStyle (
        $sImageInfo
    ) {
        if ( !$sImageInfo ) {
            return FALSE;
        }

        return strtoupper( md5( $sImageInfo ) );
    }

    private static
    function existSameImage (
        $sMd5File = ''
    ) {
        if ( !$sMd5File ) {
            return TRUE;
        }

        $aWhere                                                 = [];
        $aWhere[ ImageList::md5FileKey() ]                      = $sMd5File;
        $aWhere[ MysqlTool::daYu() ][ ImageList::usedNumber() ] = 0;

        //        $oMysql = new Mysql();
        $oMysql = Mysql::table( ImageList::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        //        $oMysql->writeSql(TRUE);

        $sPathKey = ImageList::pathKey();

        $oMysql->select(
            [
                $sPathKey
            ]
        );

        $res = $oMysql->first();
        if ( $res ) {
            return $res->{$sPathKey};
        }

        return FALSE;
    }

    private static
    function insertImageList (
        $sMd5File = '',
        $sPath = ''
    ) {
        if ( !$sMd5File || !$sPath ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'insert image list error' )
                )
            );
            return FALSE;
        }

        $aData                            = [];
        $aData[ ImageList::md5FileKey() ] = $sMd5File;
        $aData[ ImageList::pathKey() ]    = str_replace(
            __ROOT_DIR__ . DIRECTORY_SEPARATOR,
            '',
            $sPath
        );
        $aData[ ImageList::usedNumber() ] = 1;

        if ( !ImageList::insert(
            $aData,
            FALSE,
            FALSE
        ) ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'insert image list faild' )
                )
            );
            return FALSE;
        }

        return TRUE;
    }

    private static
    function updateImageListUsedNumber (
        $sMd5File = ''
    ) {
        if ( !$sMd5File ) {
            return FALSE;
        }

        $aWhere = [];
        $aWhere[ ImageList::md5FileKey() ]
                = $sMd5File;

        $aData                            = [];
        $aData[ MysqlTool::incrbyKey() ]  = [
            ImageList::usedNumber() => 1
        ];
        $aData[ ImageList::updtaeTime() ] = Time::nowRunTime();

        return Queue::insertUpdateQueue(
            Queue::updateIamgeUsedNumber(),
            $aWhere,
            $aData,
            FALSE,
            TRUE
        );
    }

    private static
    function writeImage (
        $sPath = '',
        $sInfo = ''
    ) {
        if ( !$sPath || !$sInfo ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'write image eeror' )
                )
            );
            return;
        }

        $aPath = explode( DIRECTORY_SEPARATOR, $sPath );
        array_pop( $aPath );

        if ( !File::makeDieList( implode( DIRECTORY_SEPARATOR, $aPath ) ) ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'make write image dir error' )
                )
            );
            return;
        }

        return File::writeFile( $sPath, $sInfo );
    }

    private static
    function setUploadImageTmpPath (
        $sSrc = ''
    ) {
        $iTime = Time::nowRunTime();

        $aServerInfo = $_SERVER;
        ksort( $aServerInfo );
        $aServerInfo = Json::toJson( $aServerInfo );

        $sSrc = $sSrc
            ? md5(
                $sSrc
                . self::$sSplitTag
                . $iTime
                . self::$sSplitTag
                . self::$sSaveImageNameMd5Salt
                . self::$sSplitTag
                . $aServerInfo
            )
            : md5(
                mt_rand( 11111111111, 99999999999 )
                . self::$sSplitTag
                . $iTime
                . self::$sSplitTag
                . self::$sSaveImageNameMd5Salt
                . self::$sSplitTag
                . $aServerInfo
            );
        $sSrc = strtoupper( $sSrc );
        $sSrc = self::formattingUrl( $sSrc );

        $sMicrotime  = explode( '.', Time::microtime() )[ 1 ];
        $sMicrotime1 = mb_substr( $sMicrotime, 0, 2 );
        $sMicrotime1 = $sMicrotime1 ? $sMicrotime1 : '00';
        $sMicrotime2 = mb_substr( $sMicrotime, -2 );
        $sMicrotime2 = $sMicrotime2 ? $sMicrotime2 : '00';
        $sMicrotime  = NULL;
        unset( $sMicrotime );

        $sSrc        = date( 'Y*m*d*H*i*s', $iTime )
                       . DIRECTORY_SEPARATOR
                       . $sMicrotime1
                       . DIRECTORY_SEPARATOR
                       . $sMicrotime2
                       . DIRECTORY_SEPARATOR
                       . $sSrc;
        $sSrc        = __ROOT_DIR__
                       . DIRECTORY_SEPARATOR
                       . self::$sUploadImagePath
                       . DIRECTORY_SEPARATOR
                       . self::$sUploadImageTmpPath
                       . DIRECTORY_SEPARATOR
                       . str_replace( '*', DIRECTORY_SEPARATOR, $sSrc );
        $sMicrotime1 = $sMicrotime2 = NULL;
        unset( $sMicrotime1, $sMicrotime2 );

        return $sSrc;
    }

    private static
    function formattingEncode (
        $sSrc = ''
    ) {
        if ( !$sSrc ) {
            return '';
        }

        $aSrc = Strings::strSplitUnicodeFixedLength(
            strtoupper(
                md5( $sSrc . self::$sSplitTag . self::$sSaveImageNameSalt )
            )
        );
        return self::$sSplitTag
               . $aSrc[ 0 ]
               . self::$sSplitTag
               . $aSrc[ 1 ]
               . self::$sSplitTag
               . $aSrc[ 2 ];
    }

    private static
    function formattingUrl (
        $sSrc = ''
    ) {
        if ( !$sSrc ) {
            return FALSE;
        }

        $sSrc = implode(
            self::$sSplitTag,
            Strings::strSplitUnicodeFixedLength( $sSrc )
        );
        $sSrc .= self::formattingEncode( $sSrc );

        return $sSrc;
    }

    private static
    function checkUrlFormatting (
        $sSrc
    ) {
        if ( !$sSrc ) {
            return FALSE;
        }

        $aSrc = explode( self::$sSplitTag, $sSrc );
        array_pop( $aSrc );
        array_pop( $aSrc );
        array_pop( $aSrc );
        $sSrcVerify = implode( self::$sSplitTag, $aSrc );
        $aSrc       = NULL;
        unset( $aSrc );

        $sSrcVerify .= self::formattingEncode( $sSrcVerify );
        if ( $sSrcVerify !== $sSrc ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'image formatting error' )
                )
            );
            return FALSE;
        }
    }

    ////////////////////
    private static
    function downImage (
        $sSrc = ''
    ) {
        if ( !$sSrc ) {
            return FALSE;
        }

        return file_get_contents( $sSrc );
    }
}
