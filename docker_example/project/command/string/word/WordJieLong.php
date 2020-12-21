<?php
/**
 *
 * 词语接龙
 */
namespace command\String\word;

use command\CommandFather;
use ToolClass\Strings\word\WordJieLong as WordJieLongTool;
use model\publics\word\Word as WordModel;

class WordJieLong extends CommandFather
{
    public $sCommandName = 'word_jie_long';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $sWordFeild = WordModel::word();

        $sBeginString = '号天是一';
        while ($sBeginString) {
            sleep(1);

            $oLong = WordJieLongTool::begin(0, 0, $sBeginString, TRUE, TRUE, TRUE, TRUE);
            if ($oLong) {
                $sBeginString = $oLong->{$sWordFeild};
                var_dump($sBeginString);
                var_dump('下一次接龙词语---' . $sBeginString);
            } else {
                var_dump('成语接龙结束');

                $sBeginString = FALSE;
            }
        }
    }
}
