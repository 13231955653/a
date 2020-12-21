<?php

namespace ToolClass\Regular;
use ToolClass\Server\Server;

class Regular
{
    public static function numberRegular ()
    {
        return '[0-9]+';
    }

    public static function imageRegular ()
    {
        return "<[img|IMG].*?src=[\'|\"](.*?)[\'|\"].*?[\/]?>";
    }

    public static function yearRegular ()
    {
        return '^[0-9]{4}$';
    }

    public static function yearMonthRegular ()
    {
        return '^[0-9]{4}-{1}[0-9]{1,2}$';
    }

    public static function yearMonthDayRegular ()
    {
        return '^[0-9]{4}-{1}[0-9]{1,2}-{1}[0-9]{1,2}$';
    }

    public static function yearMonthDayHourRegular ()
    {
        return '^[0-9]{4}-{1}[0-9]{1,2}-{1}[0-9]{1,2}\s{1}[0-9]{1,2}$';
    }

    public static function adminNameRegular ()
    {
        return '^[A-Za-z0-9]{10,19}$';
    }

    public static function adminPasswordRegular ()
    {
        return '^[A-Za-z0-9]{10,19}$';
    }

    public static function sessionIdRegular ()
    {
        return '^[a-z0-9]{32}$';
    }

    public static function encodeSessionIdRegular ()
    {
        return '^[a-z0-9]{32}' . Server::$sSessionIntervalTag . '[0-9]{10}' . Server::$sSessionIntervalTag . '[a-z0-9]{32}' . '$';
    }

    public static function divClassInfo ($sClassName)
    {
        return "/<div.*?class=\"{$sClassName}\".*?>.*?<\/div>/ism";
    }

    public static function liClassInfo ($sClassName)
    {
        return "/<li.*?class=\"{$sClassName}\".*?>.*?<\/li>/ism";
    }

    public static function aClassInfo ($sClassName)
    {
        return "/<a.*?class=\"{$sClassName}\".*?>.*?<\/a>/ism";
    }
}