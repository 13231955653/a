<?php
namespace command;

class CommandFather
{
    public function outInfo ($sInfo = '')
    {
        if (!$sInfo) {
            $sInfo = 'no return';
        }

        if (is_array($sInfo)) {
            foreach ($sInfo as $k => $v) {
                $this->showInfo('key => ' . $k);
                $this->showInfo('value => ' . $v);
            }

            return;
        }

        $this->showInfo($sInfo);
    }

    private function showInfo ($sInfo)
    {
        $sTag = '---';
        echo "\n";
        echo $sTag;
        print_r($sInfo);
        echo $sTag;
        echo "\n";
    }

    public function showNowCommand ($sInfo = '')
    {
        if (!$sInfo) {
            $sInfo = 'no return';
        }

        return $this->outInfo($sInfo);
    }
}
