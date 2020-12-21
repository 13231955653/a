<?php
/**
 * User: white
 * Date: 2020/12/14
 * Time: 11:29
 *
 * 成语接龙 /////////////////////////
 */

namespace command\String\cheng_yu;

use command\CommandFather;

use ToolClass\Strings\chengyu\ChengYuJieLong as DoChengYuJieLong;

use model\publics\ChengYu as ChengYuModel;

class ChengYuJieLong extends CommandFather
{
    public $sCommandName = 'cheng_yu_jie_long';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $sWordFeild = ChengYuModel::word();

        $sBeginString = '号天是一';
        while ($sBeginString) {
            sleep(2);

            $oLong = DoChengYuJieLong::begin(0, 0, $sBeginString, TRUE, TRUE, TRUE, TRUE);
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
