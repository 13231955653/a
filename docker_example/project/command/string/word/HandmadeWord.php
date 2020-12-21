<?php

namespace command\String\word;

use command\CommandFather;
use ToolClass\Strings\word\Word as WordTool;

class HandmadeWord extends CommandFather
{
    public $sCommandName = 'handmade_word';

    public
    function __construct ()
    {
    }

    public
    function do (
        $aArgs = []
    ) {
        if ( !$aArgs ) {
            $this->outInfo( 'on exist input word' );
            return TRUE;
        }

        if ( is_string( $aArgs ) ) {
            if (!WordTool::insertWord(['word' => $aArgs])) {
                $this->outInfo( 'insert word error ' . $aArgs);
                return false;
            }
            return TRUE;
        }

        foreach ( $aArgs as $v ) {
            if (!WordTool::insertWord(['word' => $v])) {
                $this->outInfo( 'insert word error ' . $v);
                return false;
            }
        }
    }
}
