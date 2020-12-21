<?php
/**
 *
 *
 */

namespace command\String\string;

use command\CommandFather;
use ToolClass\File\File as FileTool;
use ToolClass\Json\Json;
use ToolClass\Server\Server;
use ToolClass\Strings\string\ChineseStringTool;

class JianFanZiIntoDatabase extends CommandFather
{
    public $sCommandName = 'jian_fan_zi_json_into_database';

//    private $sNowFileName = '';
//    private $sFileType    = '';

    public
    function __construct ()
    {
    }

    public
    function do ()
    {
//        ini_set( 'memory_limit', CHINESE_STRING_MAX_CAN_USE_MEMORY);
        Server::setServerBidMemory(CHINESE_STRING_MAX_CAN_USE_MEMORY);

        $sFile = FileTool::getStringFile();
        if (!$sFile) {
            $this->outInfo('no get file');
            return FALSE;
        }

        $aFont = Json::toArray( FileTool::getFile( $sFile ) );

        foreach ( $aFont as $v ) {
            if ( !$v ) {
                continue;
            }

            if ( !ChineseStringTool::insert( $v ) ) {
                var_dump( $v );
                $this->outInfo( 'insert data error' );
                die();
            }
        }
    }
}
