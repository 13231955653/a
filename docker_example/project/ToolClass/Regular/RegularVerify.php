<?php

namespace ToolClass\Regular;

//use ToolClass\Log\Exception;

use ToolClass\ToolFather;

class RegularVerify extends ToolFather
{
    public static $sImageFeild = 'image';
    public static $sSrcFeild = 'src';

    public static function regNumber ($sInfo = '')
    {
        if (!$sInfo) {
            return false;
        }

        return preg_match('/' . Regular::numberRegular() . '/', $sInfo);
    }

    public static function existImage ($sInfo = '')
    {
        if (!$sInfo) {
            return false;
        }

        return preg_match('/' . Regular::imageRegular() . '/', $sInfo);
    }

    public static function getAllImageSrc ($sInfo = '')
    {
        if (!$sInfo) {
            return false;
        }

        preg_match_all('/' . Regular::imageRegular() . '/', $sInfo, $aImageInfo);

        if (!isset($aImageInfo[0]) || !isset($aImageInfo[1])) {
            return FALSE;
        }

        if (count($aImageInfo[0]) !== count($aImageInfo[1])) {
            return FALSE;
        }

        $aImageInfo[self::$sImageFeild] = $aImageInfo[0];
        $aImageInfo[self::$sSrcFeild] = $aImageInfo[1];
        unset($aImageInfo[0], $aImageInfo[1]);
        return $aImageInfo;
    }

    public static function verifyYear ($sYear = '')
    {
        if (!$sYear) {
            return false;
        }

        return preg_match('/' . Regular::yearRegular() . '/', $sYear);
    }

    public static function verifyYearMonth ($sYearMonth = '')
    {
        if (!$sYearMonth) {
            return false;
        }

        return preg_match('/' . Regular::yearMonthRegular() . '/', $sYearMonth);
    }

    public static function verifyYearMonthDay ($sYearMonthDay = '')
    {
        if (!$sYearMonthDay) {
            return false;
        }

        return preg_match('/' . Regular::yearMonthDayRegular() . '/', $sYearMonthDay);
    }

    public static function verifyYearMonthDayHour ($sYearMonthDayHour = '')
    {
        if (!$sYearMonthDayHour) {
            return false;
        }

        return preg_match('/' . Regular::yearMonthDayHourRegular() . '/', $sYearMonthDayHour);
    }

    public static function disposeLineFeed ($sInfo = '')
    {
        if (!$sInfo || !is_string($sInfo)) {
            return self::throwError('disposeLineFeed info must be string');
        }

        $aReplace = ["\r\n", "\n", "\r", "\t", "/r/n", "/n", "/r", "/t", "</br>"];

        $sLineFeed = '<br>';

        $sInfo = str_replace(' ', '', $sInfo);
        $sInfo = str_replace($aReplace, $sLineFeed, $sInfo);
        $sInfo = preg_replace('/\s+(。)+(\<br\>)+\s+/', '。' . $sLineFeed, $sInfo);
        $sInfo = preg_replace('/(\<br\>)+/', $sLineFeed, $sInfo);

        $iLen1 = mb_strlen($sLineFeed);
        $sInfo = mb_substr($sInfo, 0, $iLen1) === $sLineFeed ? mb_substr($sInfo, $iLen1, mb_strlen($sInfo)) : $sInfo;

        return $sInfo;
    }

    public static function divClassInfo ($sInfoDivClassName = '', $sInfo = '')
    {
        if (!$sInfoDivClassName || !$sInfo) {
            return '';
        }

        preg_match_all(Regular::divClassInfo( $sInfoDivClassName ), $sInfo, $sPregInfo);

        return $sPregInfo;
    }

    public static function liClassInfo ($sInfoDivClassName = '', $sInfo = '')
    {
        if (!$sInfoDivClassName || !$sInfo) {
            return '';
        }

        preg_match_all(Regular::liClassInfo( $sInfoDivClassName ), $sInfo, $sPregInfo);

        return $sPregInfo;
    }

    public static function aClassInfo ($sInfoDivClassName = '', $sInfo = '')
    {
        if (!$sInfoDivClassName || !$sInfo) {
            return '';
        }

        preg_match_all(Regular::aClassInfo( $sInfoDivClassName ), $sInfo, $sPregInfo);

        return $sPregInfo;
    }

    public static function checkAdminName ($sName = false)
    {
        if (!$sName) {
            Exception::throwException('admin check name false');
            return false;
        }

        return preg_match('/' . Regular::adminNameRegular() . '/', $sName);
    }

    public static function checkAdminPwd ($sPwd = false)
    {
        if (!$sPwd) {
            Exception::throwException('admin check password false');
            return false;
        }

        return preg_match('/' . Regular::adminPasswordRegular() . '/', $sPwd);
    }

    public static function checkRequestSessionId ($sCheckSessionId = false)
    {
        if (!$sCheckSessionId) {
            Exception::throwException('no exist session id 3');
            return false;
        }

        return preg_match('/' . Regular::sessionIdRegular() . '/', $sCheckSessionId) ? TRUE : FALSE;
    }

    public static function checkNoEncodeRequestSessionIdFormat ($sEncodeCheckId = false)
    {
        if (!$sEncodeCheckId) {
            Exception::throwException('no exist session id 4');
            return false;
        }

        return preg_match('/' . Regular::encodeSessionIdRegular() . '/', $sEncodeCheckId) ? TRUE : FALSE;
    }
}