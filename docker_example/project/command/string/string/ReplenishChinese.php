<?php

namespace command\String\string;

use command\CommandFather;
use model\publics\string\JianFanFont as JianFanFontModel;

//use ToolClass\Strings\string\JianFanZi as JianFanZiTool;

use ToolClass\Strings\string\ChineseString;

class ReplenishChinese extends CommandFather
{
    public $sCommandName = 'replenish_chinese';

    public
    function __construct ()
    {
    }

//    command.php replenish_chinese 补全中文字信息 参数1中文字 参数2繁体 参数3笔画 参数4拼音带声调 参数5偏旁 参数6说明 参数7更多说明
    public function do ($aArg = [])
    {
        if (!isset($aArg[0]) || !$aArg[0]) {
            $this->outInfo('no exist string');
            return;
        }

        $aData = [];
        $aData[JianFanFontModel::word()] = $aArg[0];
        if (isset($aArg[1]) && $aArg[1]) {
            $aData[JianFanFontModel::oldWord()] = $aArg[1];
        }
        if (isset($aArg[2]) && $aArg[2] && is_numeric($aArg[2])) {
            $aData[JianFanFontModel::strokes()] = (int)$aArg[2];
        }
        if (isset($aArg[3]) && $aArg[3]) {
            $aData[JianFanFontModel::pinyinWithVoice()] = $aArg[3];
        }
        if (isset($aArg[4]) && $aArg[4]) {
            $aData[JianFanFontModel::radicals()] = $aArg[4];
        }
        if (isset($aArg[5]) && $aArg[5]) {
            $aData[JianFanFontModel::explanation()] = $aArg[5];
        }
        if (isset($aArg[6]) && $aArg[6]) {
            $aData[JianFanFontModel::more()] = $aArg[6];
        }

        if (!$aData) {
            $this->outInfo('no exist string');
            return false;
        }

        $res = ChineseString::updateChineseInfo($aData);
        $aData = $aArg = null;
        unset($aData, $aArg);

        $sInfo = $res ? 'do success' : 'do error';
        $res = $aData = $aArg = null;
        unset($res, $aData, $aArg);

        $this->outInfo($sInfo);
    }
}
