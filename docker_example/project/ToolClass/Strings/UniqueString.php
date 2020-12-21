<?php
//
//namespace ToolClass\Strings;
//
//use ToolClass\Date\Time;
//
//use ToolClass\Strings\Strings;
//
//require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'define' . DIRECTORY_SEPARATOR . 'string.php';
//
//class UniqueString
//{
//    public static $sRandString = '1234567890`-=~_+/*-+ploikmujnhytgbvfrecqeawdsczxPOIUYTREWQASDFGHJKLMNBVCXZ\][\';/.,<>?:"{}|';
//
//    private
//    function __construct ()
//    {
//    }
//
//    public static function oneStringLength ()
//    {
//        return mb_strlen(self::oneString());
//    }
//
//    public static function oneString ()
//    {
//        $aString = self::make(1);
//        return $aString && isset($aString[0]) ? $aString[0] : false;
//    }
//
//    public static
//    function make ($iNumber = 0)
//    {
//        $aString = [];
//        $iNumber = $iNumber ? $iNumber : MAKE_UNIQUE_STRING_NUMBER;
//        while (count($aString) < $iNumber) {
//            $aString[] = self::makeRandString();
//
//            array_unique($aString);
//
//            $aString = array_values($aString);
//        }
//
//        return $aString;
////                var_dump($aString);
////        Queue::insertQueue();
//    }
//
//    private static
//    function makeRandString ()
//    {
//        $sTag = '_';
//        $sString = str_repeat(self::$sRandString, 3);
//
//        $sString = md5(Time::microtime(TRUE) . $sTag . mt_rand(100000000000000000, 999999999999999999) . $sTag . str_shuffle($sString) . $sTag . uniqid(md5(str_shuffle($sString) . $sTag . mt_rand(100000000000000000, 999999999999999999)), TRUE) . $sTag . session_create_id());
//
//        while (mb_strlen($sString) < 35) {
//            $iStringLength = mb_strlen($sString);
//            $iRandSplitTag = mt_rand(1, $iStringLength);
//            $sSplitBeforeString = mb_substr($sString, 0, $iRandSplitTag);
//            $sSplitAfterString = mb_substr($sString, $iRandSplitTag, mb_strlen($sString));
//            $sString = $sSplitBeforeString . $sTag . $sSplitAfterString;
//            /////////////////////////////////////
//            $sString = str_replace($sTag . $sTag, $sTag, $sString);
//            $sString = trim($sString, $sTag);
//        }
//        $sSplitAfterString = $sSplitBeforeString = $iRandSplitTag = $sTag = NULL;
//
//        $sString = Strings::makeStringsStartEnd($sString);
//
//        if (!Strings::checkStringsStartEnd($sString)) {
//            return '';
//        }
//
//        $sString = Strings::makeEncodeEnd($sString);
//
//        $sString = strtoupper($sString);
//
//        return $sString;
//    }
//}
