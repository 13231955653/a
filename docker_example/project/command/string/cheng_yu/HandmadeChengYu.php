<?php
/**
 * User: white
 * Date: 2020/12/14
 * Time: 11:29
 *
 * 手动添加成语 /////////////////////////
 */

namespace command\String\cheng_yu;

use command\CommandFather;

use ToolClass\Strings\chengyu\ChengYu as ChengYuTool;

class HandmadeChengYu extends CommandFather
{
    public $sCommandName = 'handmade_cheng_yu';

    public
    function __construct ()
    {
    }

    public
    function do (
        $aArgs = []
    ) {
        if ( !$aArgs ) {
            $this->outInfo( 'on exist input cheng yu' );
            return TRUE;
        }

        if ( is_string( $aArgs ) ) {
            if (!ChengYuTool::insertChengYu(['word' => $aArgs])) {
                $this->outInfo( 'insert cheng yu error ' . $aArgs);
                return false;
            }
            return TRUE;
        }

        foreach ( $aArgs as $v ) {
            if (!ChengYuTool::insertChengYu(['word' => $v])) {
                $this->outInfo( 'insert cheng yu error ' . $v);
                return false;
            }
        }
    }
}
