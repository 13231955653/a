<?php

namespace controller\api;

use controller\ToolClass\Strings\UniqueString;

use model\publics\UniqueStrings;

use controller\ToolClass\Date\Time;

class MakeUniqueStrings
{
//    /route/api/make_unique_strings/make
    public function make ()
    {
        set_time_limit(0);
        $aString = UniqueString::make();

        if (count($aString)) {
            $aInsertData = [];
            $aInsertData['add_time'] = Time::getNowTime();
            foreach ($aString as $v) {
                $aInsertData['strings'] = $v;
                UniqueStrings::insert($aInsertData);
            }
        }

        return TRUE;
    }
}
