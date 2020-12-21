<?php

/**
 * User: white
 * Date: 2020/12/14
 * Time: 11:29
 *
 * 成语写入数据库
 */

namespace command\String\cheng_yu;

use command\CommandFather;
//use model\publics\ChengYu as ChengYuModel;
use ToolClass\Json\Json;
//use ToolClass\Model\Mysql;
//use ToolClass\Strings\PinYin;
use ToolClass\Strings\chengyu\ChengYu as ChengYuTool;
//use model\publics\file\File as FileModel;
//use command\String\cheng_yu\ChengYu as ChengYuInToJson;
use ToolClass\File\File as FileTool;

class ChengYuInsertDatabase extends CommandFather
{
    public $sCommandName = 'cheng_yu_insert_database';
    private $sFileName = '';

    public
    function __construct ()
    {
    }

    public
    function do ()
    {
        $this->sFileName = FileTool::getChengYuFile();
        if (!$this->sFileName) {
            $this->outInfo('no get file');
            return FALSE;
        }

        $this->jsonFileToDatabase();
    }

    private
    function jsonFileToDatabase ()
    {
        if (!$this->sFileName) {
            $this->outInfo('file is empty !!!');
            return FALSE;
        }

        $aChengYu = Json::toArray( FileTool::getFile( $this->sFileName ) );

        if ( !is_array( $aChengYu ) || !isset( $aChengYu[ 0 ] ) ) {
            return FALSE;
        }

//        $aKeys                     = array_keys( $aChengYu[ 0 ] );
        foreach ( $aChengYu as $v ) {
//            $aData = [];

//            $sWord = trim( str_replace( ' ', '', $v[ 'word' ] ) );

//            foreach ( $aKeys as $sKey ) {
//                $v[ $sKey ] = htmlspecialchars_decode( $v[ $sKey ] );
//                $v[ $sKey ] = html_entity_decode( $v[ $sKey ] );
//
//                $v[ $sKey ] = str_replace( '★', '', $v[ $sKey ] );
//                $v[ $sKey ] = str_replace( '  ', ' ', $v[ $sKey ] );
//                $v[ $sKey ] = str_replace( '～', $sWord, $v[ $sKey ] );
//                $v[ $sKey ] = str_replace( '~', $sWord, $v[ $sKey ] );
//
//                $v[ $sKey ] = str_replace( $sWord, $sWord, $v[ $sKey ] );
//
//                if ( mb_substr( $v[ $sKey ], 0, 1 ) == '“' ) {
//                    $v[ $sKey ] = mb_substr(
//                        $v[ $sKey ],
//                        1,
//                        mb_strlen( $v[ $sKey ] )
//                    );
//                }
//                if ( mb_substr( $v[ $sKey ], -1 ) == '”' ) {
//                    $v[ $sKey ] = mb_substr(
//                        $v[ $sKey ],
//                        0,
//                        mb_strlen( $v[ $sKey ] ) - 1
//                    );
//                }
//
//
//                if ( mb_substr( $v[ $sKey ], 0, 1 ) == ',' ) {
//                    $v[ $sKey ] = mb_substr(
//                        $v[ $sKey ],
//                        1,
//                        mb_strlen( $v[ $sKey ] )
//                    );
//                }
//                if ( mb_substr( $v[ $sKey ], -1 ) == ',' ) {
//                    $v[ $sKey ] = mb_substr(
//                        $v[ $sKey ],
//                        0,
//                        mb_strlen( $v[ $sKey ] ) - 1
//                    );
//                }
//
//                if ( mb_substr( $v[ $sKey ], 0, 1 ) == '，' ) {
//                    $v[ $sKey ] = mb_substr(
//                        $v[ $sKey ],
//                        1,
//                        mb_strlen( $v[ $sKey ] )
//                    );
//                }
//                if ( mb_substr( $v[ $sKey ], -1 ) == '，' ) {
//                    $v[ $sKey ] = mb_substr(
//                        $v[ $sKey ],
//                        0,
//                        mb_strlen( $v[ $sKey ] ) - 1
//                    );
//                }
//            }

            if ( !ChengYuTool::insertChengYu( $v ) ) {
                var_dump( $v );
                $this->outInfo( 'do faild' );
                die();
            }
        }
        $aChengYu = $aData = $aTmp1 = NULL;
        unset( $aChengYu, $aData, $aTmp1 );
    }
}
