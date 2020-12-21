<?php

namespace command\String\string;

use command\CommandFather;
use ToolClass\Strings\string\ChineseStringTool;
use model\publics\string\JianFanFont as JianFanFontModel;

class HandleAddString extends CommandFather
{
    public $sCommandName = 'handle_add_string';

    public
    function __construct ()
    {
    }

    public function do ($aArg = [])
    {
        if (!isset($aArg[0]) || !$aArg[0]) {
            $this->outInfo('no exist string');
            return;
        }

        $aString = [];
        $aString[JianFanFontModel::word()] = $aArg[0];
        if ( !ChineseStringTool::insert( $aString ) ) {
            var_dump( $aString );
            $this->outInfo( 'insert data error' );
            die();
        }

        $this->outInfo( 'success' );
    }
}
