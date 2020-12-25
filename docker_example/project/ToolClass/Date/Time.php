<?php

namespace ToolClass\Date;

//use ToolClass\Log\Exception;
//use ToolClass\Server\Server;
//use ToolClass\Cache\Cache;
//use ToolClass\Regular\RegularVerify;

use ToolClass\ToolFather;
class Time extends ToolFather
{
    private static $sOperationTimeRedisKeySlat = '（……&*%……FGHVJ**……￥%￥fsdf7457';
    private static $sOperationTimeRedisKeyOutTime = 100;

    public static $iBeginRunTimeFeild = 'begin';
    public static $iEndRunTimeFeild   = 'end';

//    public static $sRandString   = '123456798!@#$%&(_+)*UHjhsgafwqeqwiouyrewuyhsjdbznxvmbnhsIOYUGBFBSDFERGSNFHRYWYf';

    public static
    function setStartTime ()
    {
        $_SERVER['start_time'] = self::nowTime();
//        var_dump($_SERVER['start_time']);
//        $oSelf = new self();
//        $oSelf->iStartTime = self::nowTime();
//        var_dump($oSelf);
//        die();
//        RedisTool::set(
//            self::operationTimeRedisKey(),
//            self::nowTime(),
//            self::$sOperationTimeRedisKeyOutTime
//        );
    }

    public static
    function getStartTime ()
    {
//        var_dump($_SERVER['start_time']);
        return isset($_SERVER['start_time']) ? $_SERVER['start_time'] : self::nowTime();
//        var_dump($_SERVER);
//        $oSelf = new self();
//        var_dump($oSelf);
//        return $oSelf->iStartTime;
//        return (int)RedisTool::get( self::operationTimeRedisKey() );
    }

    private static
    function operationTimeRedisKey ()
    {
        $sCheckSessionId = Server::getQueryArgs(
            Server::$sRequestSessionIdFeild
        );

        return md5( $sCheckSessionId . self::$sOperationTimeRedisKeySlat );
    }

    public static
    function yearStartTime (
        $sYear = ''
    ) {
        if ( !RegularVerify::verifyYear( $sYear ) ) {
             Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('year format error')
                )
            );
            return;
        }

        return (int)strtotime( $sYear . '-01-01 00:00:00' );
    }

    public static
    function yearMonthStartTime (
        $sYearMonth = ''
    ) {
        if ( !RegularVerify::verifyYearMonth( $sYearMonth ) ) {
           Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('year month format error')
                )
            );
            return;
        }

        return (int)strtotime( $sYearMonth . '-01 00:00:00' );
    }

    public static
    function yearMonthDayStartTime (
        $sYearMonthDay = ''
    ) {
        if ( !RegularVerify::verifyYearMonthDay( $sYearMonthDay ) ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('year month day format error')
                )
            );
            return;
        }

//        var_dump($sYearMonthDay);
//        var_dump((int)strtotime( $sYearMonthDay . ' 00:00:00' ));
        return (int)strtotime( $sYearMonthDay . ' 00:00:00' );
    }

    public static
    function yearMonthDayHourStartTime (
        $sYearMonthDayHour = ''
    ) {
        if ( !RegularVerify::verifyYearMonthDayHour( $sYearMonthDayHour ) ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('year month day hour format error')
                )
            );
            return;
        }

        return (int)strtotime( $sYearMonthDayHour . ':00:00' );
    }

    public static
    function yearMonthDayHourMinuteStartTime (
        $sYearMonthDayHour = ''
    ) {
        if ( !RegularVerify::verifyYearMonthDayHour( $sYearMonthDayHour ) ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('year month day hour minute format error')
                )
            );
            return;
        }

        return (int)strtotime( $sYearMonthDayHour . ':00:00' );
    }

    public static
    function nowTime ()
    {
        //        var_dump($_SERVER['REQUEST_TIME']);
        //        var_dump(time());
        return isset($_SERVER['REQUEST_TIME']) ? $_SERVER['REQUEST_TIME'] : time();
    }

    public static
    function nowRunTime ()
    {
//        time 反馈是当前时间
        return time();
    }

    public static
    function nowDate (
        $iTime = FALSE
    ) {
        return date( 'Y-m-d H:i:s', $iTime ? $iTime : self::nowTime() );
    }

    public static
    function microtime (
        $bFloat = TRUE
    ) {
        return microtime( $bFloat );
    }
}
