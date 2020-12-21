<?php

/**
 *
 * 词语json文件写入数据库
 */

namespace command\String\word;

use command\CommandFather;

use ToolClass\File\File as FileTool;
use ToolClass\Json\Json;
use ToolClass\Strings\word\Word as WordTool;

class WordInsertDatabase extends CommandFather
{
    public $sCommandName = 'word_insert_database';

    public $sFileName = 'word';
    private $sNowFileName = '';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $this->sNowFileName = FileTool::getCiYuFile();
        if (!$this->sNowFileName) {
            $this->outInfo('no get file');
            return FALSE;
        }

        $this->jsonFileToDatabase();
    }

    private
    function jsonFileToDatabase ()
    {
        if (!$this->sNowFileName) {
            $this->outInfo('file is empty !!!');
            return FALSE;
        }

        $aWord = Json::toArray( FileTool::getFile( $this->sNowFileName ) );

        if ( !is_array( $aWord ) || !isset( $aWord[ 0 ] ) ) {
            return FALSE;
        }

        foreach ( $aWord as $v ) {
            if ( !WordTool::insertWord( $v ) ) {
                var_dump( $v );
                $this->outInfo( 'do faild' );
                die();
            }
        }
        $aWord = $aData = $aTmp1 = NULL;
        unset( $aWord, $aData, $aTmp1 );
    }
}
