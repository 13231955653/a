<?php

namespace command\String\string;

use command\CommandFather;
use ToolClass\Strings\string\JianFanZi as JianFanZiTool;

class DisposeString extends CommandFather
{
    public $sCommandName = 'dispose_string';

    public
    function __construct ()
    {
    }

//    command.php dispose_string noOld/不存在繁体字 noStrokes/不存在笔画 noPinYin/不存在拼音 noRadicals/不存在偏旁 noExplain/不存在说明 noMore/不存在更多说明
    public function do ($aArg = [])
    {
        if (!isset($aArg[0]) || !$aArg[0]) {
            $this->outInfo('no exist string');
            return;
        }

        $res = JianFanZiTool::searchString($aArg[0], 1);
        var_dump($res);
    }
}
