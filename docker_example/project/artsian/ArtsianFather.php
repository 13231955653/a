<?php
namespace artsian;

class ArtsianFather
{
    protected function outInfo ($sInfo = '')
    {
        if (!$sInfo) {
            $sInfo = 'no return';
        }

        echo "\n";
        print_r($sInfo);
        echo "\n";
        echo "\n";
    }
}
