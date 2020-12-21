<?php

namespace ToolClass\File;

use ToolClass\Date\Time;
use ToolClass\Log\ErrorInformAdminThrow;

use ToolClass\Json\Json;
use ToolClass\Log\Exception;
use ToolClass\Server\Server;
use command\String\cheng_yu\ChengYu as ChengYuInToJson;
use model\publics\file\File as FileModel;
use ToolClass\Model\Mysql;
use command\String\word\WordDatabaseInsertJsonFile;
use command\String\string\JianFanZiDatabaseIntoJsonFile;

class File
{
    public static $sLogType = 'file_error';

    private static $iDirNum  = [];
    private static $iFileNum = [];
    private static $iSize    = [];

    public static $sFileStatisticsField = 'file_statistics';

    public static $sStatisticsTime = 'statistice_time';

    public static $sDirNumField  = 'dir_num';
    public static $sFileNumField = 'file_num';
    public static $sSizeNumField = 'size';
    public static $sFormatSize   = 'size_format';

    private static $sKb = 'KB';
    private static $sMb = 'MB';
    private static $sGb = 'GB';

    private static $sIntervalTag = ' ';

    private static $sSaveFloat = 4;

    private static $sFileInfoRedisKey = 'file_info';
    //    public static $sDirNumRedisKey = 'FILE_dir_num';
    //    public static $sFileNumRedisKey = 'FILE_file_num';
    //    public static $sSizeNumRedisKey = 'FILE_size';
    //    public static $sSizeFormatRedisKey = 'FILE_size_format';

    public static
    function fileInfoRedisKey ()
    {
        return self::$sFileInfoRedisKey;
    }

    public static function getChengYuFile ()
    {
        $obj = new ChengYuInToJson();
        return self::getNowFile($obj->sFileName);
    }

    public static function getCiYuFile ()
    {
        $obj = new WordDatabaseInsertJsonFile();
        return self::getNowFile($obj->sFileName);
    }

    public static function getStringFile ()
    {
        $obj = new JianFanZiDatabaseIntoJsonFile();
        return self::getNowFile($obj->sFileName);
    }

    private static function getNowFile ($sFileName = '')
    {
        if (!$sFileName) {
            return FALSE;
        }

        $sPathFeild = FileModel::path();
        $aWhere = [];
        $aWhere[FileModel::type()] = $sFileName;

        $oMysql = Mysql::table( FileModel::table() );
        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );
        $oMysql->select($sPathFeild);

        $oMysql->orderBy (FileModel::addTime(), FALSE);

        $res = $oMysql->first();

        return $res ? $res->{$sPathFeild} : FALSE;
    }

    private static
    function init ()
    {
        self::$iDirNum  = 0;
        self::$iFileNum = 0;
        self::$iSize    = 0;
    }

    private static
    function formatSize (
        $iSize = 0,
        $sFormat
    ) {
        if ( !$iSize ) {
            return $iSize;
        }

        $iNum = 1024;

        $sFormat = strtoupper( $sFormat );

        $iSize = $iSize / $iNum;
        if ( $sFormat == self::$sKb ) {
            return self::formatFileSize( $iSize, self::$sKb );
        }

        $iSize = $iSize / $iNum;
        if ( $sFormat == self::$sMb ) {
            return self::formatFileSize( $iSize, self::$sMb );
        }

        $iSize = $iSize / $iNum;
        if ( $sFormat == self::$sGb ) {
            return self::formatFileSize( $iSize, self::$sGb );
        }
    }

    private static
    function formatFileSize (
        $iSize,
        $sUnit = ''
    ) {
        return number_format( $iSize, self::$sSaveFloat )
               . self::$sIntervalTag
               . $sUnit;
    }

    public static
    function pathFileList (
        $sDirName = ''
    )
    {
        if ( !$sDirName || !is_dir( $sDirName ) ) {
            return FALSE;
        }

        $dir = opendir( $sDirName );
        while ( $sFilename = readdir( $dir ) ) {
            if ( $sFilename != '.' && $sFilename != '..' ) {
                $sFilename = $sDirName . DIRECTORY_SEPARATOR . $sFilename;

                if ( is_dir( $sFilename ) ) {
                    self::pathFileList(
                        $sFilename
                    );
                } else {
                    $aFiles[] = $sFilename;
                }
            }


        }
        closedir( $dir );

        return $aFiles;
    }

    public static
    function StatisticsFileDirNumber (
        $sDirName = '',
        $bInit = TRUE
    ) {
        if ( !$sDirName || !is_dir( $sDirName ) ) {
            return FALSE;
        }

        if ( $bInit ) {
            self::init();
        }

        $dir = opendir( $sDirName );
        while ( $sFilename = readdir( $dir ) ) {
            if ( $sFilename != '.' && $sFilename != '..' ) {
                $sFilename = $sDirName . DIRECTORY_SEPARATOR . $sFilename;


                if ( is_dir( $sFilename ) ) {
                    self::$iDirNum[$sDirName]++;
                    self::StatisticsFileDirNumber(
                        $sFilename,
                        FALSE
                    );  //递归，就可以查看所有子目录
                } else {
                    self::$iFileNum[$sDirName]++;

                    self::$iSize[$sDirName] += filesize( $sFilename );
                }
            }


        }
        closedir( $dir );

        $aData                           = [];
        $aData[ self::$sStatisticsTime ] = Time::nowRunTime();
        $aData[ self::$sDirNumField ]    = self::$iDirNum[$sDirName];
        $aData[ self::$sFileNumField ]   = self::$iFileNum[$sDirName];
        $aData[ self::$sSizeNumField ]   = self::$iSize[$sDirName];
        $aData[ self::$sFormatSize ]     = self::formatSize(
            $aData[ self::$sSizeNumField ],
            self::$sMb
        );

        //        $aData1                                = [];
        //        $aData1[ self::$sFileStatisticsField ] = $aData;
        //        $aData                                 = NULL;
        //        unset( $aData );

        return $aData;
    }

    public static
    function unlinkFile (
        $sFile = ''
    ) {
        if ( !$sFile ) {
            return TRUE;
        }

        if ( !is_file( $sFile ) ) {
            return TRUE;
        }

        return unlink( $sFile );
    }

    public static
    function makeDir (
        $sDir
    ) {
        if ( is_dir( $sDir ) || @mkdir( $sDir, 0777 ) ) {
            //查看目录是否已经存在或尝试创建，加一个@抑制符号是因为第一次创建失败，会报一个“父目录不存在”的警告。
            //        echo $sDir . "创建成功<br>";   //输出创建成功的目录
        } else {
            $sDirArr = explode( DIRECTORY_SEPARATOR, $sDir );
            //当子目录没创建成功时，试图创建父目录，用explode()
            //函数以'/'分隔符切割成一个数组
            array_pop( $sDirArr ); //将数组中的最后一项（即子目录）弹出来，
            $sNewDir = implode( DIRECTORY_SEPARATOR, $sDirArr ); //重新组合成一个文件夹字符串
            self::makeDir( $sNewDir ); //试图创建父目录
            if ( !@mkdir( $sDir, 0777 ) ) {
                ErrorInformAdminThrow::recordErrorAndInformAdmin( 12, $sDir );
                //                echo $sDir . "创建成功<br>";
            } //再次试图创建子目录,成功输出目录名
        }
    }

    public static
    function writeFile (
        $sPath = '',
        $sInfo = ''
    ) {
        if ( !$sPath || !$sInfo ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('write file error')
                )
            );
            return FALSE;
        }

        return file_put_contents( $sPath, $sInfo );
    }

    public static
    function makeDieList (
        $sPath = ''
    ) {
        if ( !$sPath ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('make dir name is empty')
                )
            );
            return FALSE;
        }

        $sPath = str_replace( __ROOT_DIR__, '', $sPath );
        $sPath = mb_substr( $sPath, 0, 1 ) !== DIRECTORY_SEPARATOR ? $sPath
            : mb_substr( $sPath, 1, mb_strlen( $sPath ) );
        $aPath = explode( DIRECTORY_SEPARATOR, $sPath );
        $aPath = array_filter( $aPath );

        $sMakePath = __ROOT_DIR__ . DIRECTORY_SEPARATOR;
        foreach ( $aPath as $v ) {
            $sMakePath .= $v . DIRECTORY_SEPARATOR;
            if ( !File::checkExistDir( $sMakePath )
                 && !File::makeMonolayerDir(
                    $sMakePath
                ) ) {
                Exception::throwException(
                    Server::response(
                        Server::errorStatus(),
                        Server::returnError('make dir list error')
                    )
                );
                return FALSE;
            };
        }

        $aPath = $sMakePath = $sPath = NULL;
        unset( $aPath, $sMakePath, $sPath );

        return TRUE;
    }

    public static
    function makeMonolayerDir (
        $sDir
    ) {
        if ( is_dir( $sDir ) || @mkdir( $sDir, 0777 ) ) {
            return TRUE;
        } else {
            if ( self::makeMonolayerDir( $sDir ) ) {
                return TRUE;
            }

            if ( !@mkdir( $sDir, 0777 ) ) {
                //                ErrorInformAdminThrow::recordErrorAndInformAdmin( 20, $sDir );
                //
                Exception::throwException(
                    Server::response(
                        Server::errorStatus(),
                        Server::returnError('make dir error')
                    )
                );
                return FALSE;
            }

            return TRUE;
        }
    }

    public static
    function checkExistDir (
        $sPath = ''
    ) {
        if ( !$sPath ) {
            return FALSE;
        }

        return is_dir( $sPath );
    }

    public static
    function getFile (
        $sFileName
    ) {
        if ( !self::checkFileExist( $sFileName ) ) {
            return FALSE;
        }

        return file_get_contents( $sFileName );
    }

    public static
    function checkFileExist (
        $sFileName
    ) {
        return is_file( $sFileName );
    }

    public static
    function touchFile (
        $sFileName
    ) {
        if ( self::checkFileExist( $sFileName ) ) {
            return TRUE;
        }

        file_put_contents( $sFileName, '' );
    }

    public static
    function writeToFile (
        $sFileName = '',
        $sInfo = '',
        $flags = FALSE
    ) {
        if ( !$sFileName || !$sInfo ) {
            return FALSE;
        }

        $aDirPath = explode( DIRECTORY_SEPARATOR, $sFileName );
        unset( $aDirPath[ count( $aDirPath ) - 1 ] );
        $sDirPath = implode( DIRECTORY_SEPARATOR, $aDirPath );
        if ( !is_dir( $sDirPath ) ) {
            self::makeDir( $sDirPath );
        }
        $aDirPath = $sDirPath = NULL;
        unset( $aDirPath, $sDirPath );

        $sInfo = is_array( $sInfo ) || is_object( $sInfo ) ? Json::toJson(
            $sInfo
        ) : $sInfo;

        self::touchFile( $sFileName );

        if ( $flags ) {
            return file_put_contents( $sFileName, $sInfo, $flags );
        }

        return file_put_contents( $sFileName, $sInfo );
    }
}
