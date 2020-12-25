<?php

namespace Service\Depend\Strings\String;

use Service\Strings\string\ChineseStringModel as ChineseStringModelService;

use Service\Depend\Depend;
class ChineseStringModel extends Depend
{
    public function allNormalChinese ()
    {
        return ChineseStringModelService::allNormalChinese();
    }
}
