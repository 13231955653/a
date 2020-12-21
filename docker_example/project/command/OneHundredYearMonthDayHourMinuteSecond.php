<?php

namespace command;

use command\CommandFather;

use ToolClass\Server\Server;

use ToolClass\Date\Time;

use model\publics\YearStatistics;
use model\publics\MonthStatistics;
use model\publics\DayStatistics;
use model\publics\HourStatistics;
use model\publics\MinuteStatistics;
use model\publics\SecondStatistics;

class OneHundredYearMonthDayHourMinuteSecond extends CommandFather
{
    public $sCommandName = 'one_hundred_year_month_day_hour_minute_second';

    public
    function __construct ()
    {
    }

//command.php OneHundredYearMonthDayHourMinuteSecond
    public function do ()
    {
        Server::setNeverTimeout();

        $iBeginYear = 2020;
        $iEndYear   = 2050;

        $iBeginMonth = 1;
        $iEndMonth   = 12;

        $iBeginDay = 1;
        $iEndDay   = 31;

        $iBeginHour = 0;
        $iEndHour   = 24;

        $iBeginMinute = 0;
        $iEndMinute   = 60;

        $iBeginSecond = 0;
        $iEndSecond   = 66;

        $aData = [];
        for ( $i = $iBeginYear; $i < $iEndYear; $i++ ) {
//            $aData = [];
//            $aData = [];
            $aData['year'] = $i;
//            $aData['time'] = Time::yearStartTime($i);
//            if ( !YearStatistics::insert($aData, false, false) ) {
//                exit('error');
//            }

            for ( $j = $iBeginMonth; $j <= $iEndMonth; $j++ ) {
                $aData['month'] = $j;
//                $aData['time'] = Time::yearMonthStartTime($i . '-' . $j);
//                if ( !MonthStatistics::insert($aData, false, false) ) {
//                    exit('error');
//                }

                if (in_array($j, [1,3,5,7,8,10,12])) {
                    $iEndDay = 31;
                }
                if (in_array($j, [4,6,9,11])) {
                    $iEndDay = 30;
                }
                if (2 == $j) {
                    if ($i % 4) {
                        $iEndDay = 28;
                    } else {
                        $iEndDay = 29;
                    }
                }
                for ( $k = $iBeginDay; $k <= $iEndDay; $k++ ) {
                    $aData['day'] = $k;
//
//                    var_dump($i . '-' . $j . '-' . $k);
//                    var_dump($aData);
//                    $aData['time'] = Time::yearMonthDayStartTime($i . '-' . $j . '-' . $k);
//                    if ( !DayStatistics::insert($aData, false, false) ) {
//                        exit('error');
//                    }
                    for ( $l = $iBeginHour; $l < $iEndHour; $l++ ) {
                        $aData['hour'] = $l;
//                        $aData['time'] = Time::yearMonthDayHourStartTime($i . '-' . $j . '-' . $k . ' ' . $l);
//                        if ( !HourStatistics::insert($aData, false, false) ) {
//                            exit('error');
//                        }
                        for ( $m = $iBeginMinute; $m < $iEndMinute; $m++ ) {
                            $aData['minute'] = $m;
                            $aData['time'] = Time::yearMonthDayHourStartTime($i . '-' . $j . '-' . $k . ' ' . $l);
                            if ( !MinuteStatistics::insert($aData, false, false) ) {
                                exit('error');
                            }
//                            for ( $n = $iBeginSecond; $n < $iEndSecond; $n++ ) {
//                                $aData['minute'] = $m;
//                                $aData['second'] = $n;
//                                INSERT INTO `days` (`time`, `year`, `month`, `day`, `hour`, `minute`, `second`) VALUES (NULL, '0', '0', '0', '0', '0', '0'), (NULL, '0', '0', '0', '0', '0', '0');
                                //                                var_dump($aData);
                                //                                exit();
//                                if ( !SecondStatistics::insert($aData, false, false) ) {
//                                    exit('error');
//                                }
//                            }
                        }
                    }
                }
            }
        }

        echo 'done';
    }
}
