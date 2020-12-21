<?php

namespace command\String\string;

use command\CommandFather;
use ToolClass\File\File as FileTool;
use ToolClass\Json\Json;
use ToolClass\Strings\string\ChineseString;

class TestInsertIntoDatabase extends CommandFather
{
    public $sCommandName = 'test';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $aFont = file_get_contents( 'D:\www\test\docker_example\project\command\string\string\font_list.php' );
        $aFont = explode(',', $aFont);

        foreach ( $aFont as $v ) {
            if ( !$v ) {
                continue;
            }
            var_dump($v);

            $a = [];
            $a['word'] = $v;
//            var_dump($a);die();

            if ( !ChineseString::insert( $a ) ) {
                var_dump( $v );
                $this->outInfo( 'insert data error' );
                die();
            }
        }
    }
}
