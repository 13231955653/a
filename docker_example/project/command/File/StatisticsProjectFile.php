<?php

namespace command\File;

use command\CommandFather;
use ToolClass\Cache\Cache;
use ToolClass\Date\Time;
use ToolClass\File\File;
use ToolClass\Json\Json;

class StatisticsProjectFile extends CommandFather
{
    public $sCommandName = 'file_statistics_ingo';

    private $iOutTimeReStatisticsInterval = 3600;
    private $sLastStatisticsTimeFile = 'file_statistics_ingo_time_tag.txt';

    public
    function __construct ()
    {
    }

    public function do ()
    {
        $sLastStatisticsTimeFile = __ROOT_DIR__ . DIRECTORY_SEPARATOR . str_replace('\\', DIRECTORY_SEPARATOR, __NAMESPACE__) . DIRECTORY_SEPARATOR . $this->sLastStatisticsTimeFile;
        $iLastStatisticsTime = (int)file_get_contents($sLastStatisticsTimeFile);

        $iTime = Time::nowRunTime();
        if ($iTime - $iLastStatisticsTime < $this->iOutTimeReStatisticsInterval) {
            $this->outInfo('did not arrive interval time');
            return;
        }

        $sKey = File::fileInfoRedisKey();

//        $aData = RedisTool::get($sKey);
//        if (!$aData) {
            $aData = File::StatisticsFileDirNumber(__ROOT_DIR__);
            if (!$aData) {
                $this->outInfo('file data error');
                return FALSE;
            }

            Cache::set( $sKey, Json::toJson( $aData));
//        }
//        else {
//            $aData = Json::toArray($aData);
//        }

//        var_dump($aData);
        $this->outInfo('do');
    }
}
