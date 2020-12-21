<?php

namespace controller\api;

use ToolClass\Date\Time;

use ToolClass\Server\Server;

use model\publics\Day;

class Test
{
    //    public static $sTimeFeild = 'time';
    public static $iBeginRunTimeFeild = 'begin';
    public static $iEndRunTimeFeild   = 'end';

    ///route/api/test/time_statistics
    //    运行时间统计
    public
    function timeStatistics ()
    {
        //        js 记录时间，到程序 begin 时间 就是 request time
        //        程序 end 时间 到 js 时间 就是 reponse time
        $aData = [];
        $aData[ Time::$iBeginRunTimeFeild ] = Time::getStartTime();
        $aData[ Time::$iEndRunTimeFeild ] = Time::nowTime();
    }

    ///route/api/test/time_statistics
    /// 年 月 日 时  分 秒  /表
    public
    function oneHundredYearDayTable ()
    {
//        19:56
        Server::setNeverTimeout();

        $iBeginYear = 2017;
        $iEndYear   = 2117;

        $iBeginMonth = 0;
        $iEndMonth   = 13;

        $iBeginDay = 0;
        $iEndDay   = 21;

        $iBeginHour = 0;
        $iEndHour   = 25;

        $iBeginMinute = 0;
        $iEndMinute   = 61;

        $iBeginSecond = 0;
        $iEndSecond   = 61;

        $aData = [];
        for ( $i = $iBeginYear; $i < $iEndYear; $i++ ) {
            for ( $j = $iBeginMonth; $j < $iEndMonth; $j++ ) {
                for ( $k = $iBeginDay; $k < $iEndDay; $k++ ) {
                    for ( $l = $iBeginHour; $l < $iEndHour; $l++ ) {
                        for ( $m = $iBeginMinute; $m < $iEndMinute; $m++ ) {
                            for ( $n = $iBeginSecond; $n < $iEndSecond; $n++ ) {
                                $aData['year'] = $i;
                                $aData['month'] = $j;
                                $aData['day'] = $k;
                                $aData['hour'] = $l;
                                $aData['minute'] = $m;
                                $aData['second'] = $n;
//                                var_dump($aData);
//                                exit();
                                if ( !Day::insert($aData, false, false) ) {
                                    exit('error');
                                }
                            }
                        }
                    }
                }
            }
        }

        echo 'done';
    }
}
