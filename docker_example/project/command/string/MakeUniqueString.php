<?php

namespace command\String;

use command\CommandFather;

use model\publics\UniqueStrings;
use ToolClass\Cache\Cache;
use ToolClass\Date\Time;
use ToolClass\Strings\Strings;

class MakeUniqueString extends CommandFather
{
    public $sCommandName = 'string_make_unique_string';

    private $iMakeUniqueStringNumber = 99;
    private $iMakeUniqueStringLength = 32;

    private $sInMakeUniqueStringRedisKey = 'in_string_make_unique_string';

    public
    function __construct ()
    {
    }

    public function do ($aArgs = [])
    {
        $iMakeUniqueStringNumber = isset($aArgs[0]) && $aArgs[0] ? (int)$aArgs[0] : $this->iMakeUniqueStringNumber;

        $this->makeStrings($iMakeUniqueStringNumber);
    }

    private function retry ($iMakeUniqueStringNumber, $iRetryNumber = 0)
    {
        if ($iRetryNumber > 9) {
            return;
        }

        sleep(1);

        return $this->makeStrings($iMakeUniqueStringNumber, $iRetryNumber);
    }

    private function makeStrings ($iMakeUniqueStringNumber = 0, $iRetryNumber = 0)
    {
        if (!Cache::lockForDatabase( $this->sInMakeUniqueStringRedisKey, 'in_do' )) {
            $this->retry($iMakeUniqueStringNumber, $iRetryNumber + 1);
        }

        $iMakeUniqueStringNumber = $iMakeUniqueStringNumber ? $iMakeUniqueStringNumber : $this->iMakeUniqueStringNumber;

        $aUniqueStrings = Strings::makeUniqueStrings($iMakeUniqueStringNumber, $this->iMakeUniqueStringLength, 4);

        if (!$aUniqueStrings) {
            return;
        }

        $this->insert($aUniqueStrings);

        Cache::unlockForDatabase( $this->sInMakeUniqueStringRedisKey, 'in_do' );
    }

    private function insert ($aUniqueStrings = '')
    {
        if (!$aUniqueStrings) {
            return FALSE;
        }

        $aData = [];
        $aData['add_time'] = Time::nowRunTime();
        foreach ($aUniqueStrings as $v) {
            $aData['strings'] = $v;
            if (!UniqueStrings::insert($aData)) {
                continue;
            }
        }
    }
}
