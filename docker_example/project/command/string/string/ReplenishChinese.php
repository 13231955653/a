<?php

namespace command\String\string;

use command\CommandFather;
use Hook\Hook;
use model\publics\string\JianFanFont as JianFanFontModel;

use ToolClass\Strings\string\ChineseStringTool;
use ToolClass\Strings\string\ChineseStringModelTool;

use ToolClass\Depend\DependContainer;

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

        if (!$this->checkExistChineseString($aArg[0])) {
            $this->outInfo('no get chinese string');
            return FALSE;
        }
        die();

        $aData = $this->disposeArgs($aArg);
        if (!$aData) {
            $this->outInfo('after dispose args, error');
            return false;
        }

        $res = ChineseStringTool::updateChineseInfo( $aData);
        $aData = $aArg = null;
        unset($aData, $aArg);

        $sInfo = 'do error';
        if ($res) {
            Hook::addHook('string\ChineseFont\ChineseFont', 'afterUpdateChineseFont');
            //            更新文字拼音 cache hook
            Hook::listen(
                Hook::chineseFont(),
                Hook::afterUpdateChineseFont(),
                $res
            );

            $sInfo = 'do success';
        }
        $res = $aData = $aArg = null;
        unset($res, $aData, $aArg);

        $this->outInfo($sInfo);
    }

    private function disposeArgs (array $aArg = [])
    {
        if (!is_array($aArg) || !$aArg) {
            return FALSE;
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

        return $aData;
    }

    private function checkExistChineseString (string $sSimpleChineseString = '')
    {
        if (!$sSimpleChineseString) {
            return FALSE;
        }

        $aWhere = [];
        $aWhere[JianFanFontModel::wordUrlencodeMd5()] = JianFanFontModel::wordUrlencodeMd5Encode($sSimpleChineseString);

        $sPrikey = JianFanFontModel::primary();
        $aSelect = [];
        $aSelect = [$sPrikey];

        $res = ChineseStringModelTool::getJianFanZiFromDatabase($aWhere, 1, $aSelect);
        $aWhere = $aSelect = null;
        unset($aWhere, $aSelect);

        return $res ? TRUE : FALSE;
    }
}
