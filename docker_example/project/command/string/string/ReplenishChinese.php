<?php

namespace command\String\string;

use command\CommandFather;

use Service\Strings\string\ChineseString;

class ReplenishChinese extends CommandFather
{
    public $sCommandName = 'replenish_chinese';

    public
    function __construct ()
    {
    }

//    command.php replenish_chinese 补全中文字信息 参数1中文字 参数2繁体 参数3笔画 参数4拼音带声调 参数5偏旁 参数6说明 参数7更多说明
    public function do (array $aArg = [])
    {
        if (!is_array($aArg) || !isset($aArg[0]) || !$aArg[0]) {
            $this->outInfo('no exist string');
            return;
        }

        $sInfo = 'do error';
        if (ChineseString::replenishChinese($aArg)) {
            $sInfo = 'do success';
        }

        $this->outInfo($sInfo);
    }
}
