<?php

namespace ToolClass\Strings\string;

use ToolClass\Date\Time;
use ToolClass\Json\Json;

class Strings
{
    private static $sEncoedSalt = '(^&%^^%$#$545asf&*&\fasfaw24KJJHK(*&*%^';


    private static $iMakeUniqueStringNumber = 99;
    private static $iMakeUniqueStringLength = 32; //can not update
    //    private static $iEncodeUniqueLength = 32;
    private static $sSplitTag        = '_';
    private static $sRandString      = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    private static $iSplitLength     = 4; // can not update
    private static $iEndEncodeNumber = 2; // can not update

    private
    function __construct ()
    {
    }

    public static function replaceEnglishSymbolToChineseSymbol ($sString = '')
    {
        if (!$sString) {
            return '';
        }

        $sString = str_replace('?', '？', $sString);
        $sString = str_replace('!', '！', $sString);
        $sString = str_replace('.', '。', $sString);
        $sString = str_replace(',', '，', $sString);
        $sString = str_replace(':', '：', $sString);
        $sString = str_replace(';', '；', $sString);

        return $sString;
    }

    public static
    function mbStrSplit($str){
        return preg_split('/(?<!^)(?!$)/u', $str );
    }

    //    private static function encodeUniqueLength ()
    //    {
    //        return self::$iEncodeUniqueLength;
    //    }

    private static
    function uniqueStringSalt ()
    {
        return self::$sEncoedSalt;
    }

    private static
    function endEncodeNumber ()
    {
        return self::$iEndEncodeNumber;
    }

    private static
    function splitLength ()
    {
        return self::$iSplitLength;
    }

    private static
    function randString ()
    {
        return str_shuffle(
            str_replace( self::splitTag(), '', self::$sRandString )
        );
    }

    private static
    function splitTag ()
    {
        return self::$sSplitTag;
    }

    private static
    function makeUniqueStringNumber ()
    {
        return self::$iMakeUniqueStringNumber;
    }

    private static
    function makeUniqueStringLength ()
    {
        return self::$iMakeUniqueStringLength;
    }

    private static
    function minMakeUniqueStringLength (
        $iMakeUniqueStringLength = 0,
        $iSplitLength = 0
    ) {
        $iSplitLength = $iSplitLength ? $iSplitLength : self::splitLength();

        $iSplitTagLength = mb_strlen( self::splitTag() );
        //        var_dump('分隔符长度'. $iSplitTagLength);
        //        var_dump('分隔长度'. $iSplitLength);

        //        var_dump('最大长度'.$iMakeUniqueStringLength);
        $iEncodeLength = self::endEncodeNumber() * ( $iSplitTagLength
                                                     + $iSplitLength );
        //        var_dump('加密区长度'.$iEncodeLength);

        $iMakeUniqueStringLength -= $iEncodeLength;
        //        var_dump('最大长度减去加密区长度'.$iMakeUniqueStringLength);

        $iLen = $iMakeUniqueStringLength - 1;
        //        var_dump('长度'.$iLen);
        //        var_dump('分割每段长度'.($iSplitTagLength + $iSplitLength));
        $i = 0;
        while ( $i * ( $iSplitTagLength + $iSplitLength ) < $iLen ) {
            $i += 1;
        }
        //        var_dump('分割数量'.($i - 1));
        $iMakeUniqueStringLength = ( $i - 1 ) * $iSplitLength;
        //        var_dump('最大长度'.$iMakeUniqueStringLength);

        $iDefaultLength = self::makeUniqueStringLength();
        if ( $iMakeUniqueStringLength < $iDefaultLength ) {
            while ( $iMakeUniqueStringLength < $iDefaultLength ) {
                $iMakeUniqueStringLength = $iMakeUniqueStringLength
                                           + $iSplitLength;
            }
        }

        //        var_dump('最终长度'.$iMakeUniqueStringLength);

        return $iMakeUniqueStringLength;
    }

    public static
    function makeUniqueStrings (
        $iMakeUniqueStringNumber = 0,
        $iMakeUniqueStringMaxLength = 0,
        $iSplitLength = 0
    ) {
        $iMakeUniqueStringNumber    = $iMakeUniqueStringNumber
            ? $iMakeUniqueStringNumber : self::makeUniqueStringNumber();
        $iMakeUniqueStringMaxLength = self::minMakeUniqueStringLength(
            $iMakeUniqueStringMaxLength,
            $iSplitLength
        );

        $sSplitTag = self::splitTag();

        $aUniqueStrings = [];
        while ( count( $aUniqueStrings ) <= $iMakeUniqueStringNumber ) {
            $aUniqueStrings[] = Strings::makeUniqueString(
                $iMakeUniqueStringMaxLength,
                $iSplitLength,
                $sSplitTag
            );

            array_unique( $aUniqueStrings );
        }

        return $aUniqueStrings;
    }

    private static
    function makeUniqueString (
        $iMakeUniqueStringMaxLength = 0,
        $iSplitLength = 0,
        $sSplitTag = ''
    ) {
        //        参考 self::makeUniqueStrings()
        //        必须先计算 self::minMakeUniqueStringLength()
        $sUniqidSalt = '';
        $sUniqidSalt .= Time::microtime();
        $sUniqidSalt .= $sSplitTag;
        $sUniqidSalt .= mt_rand( 11111111111, 99999999999 );
        $sUniqidSalt .= $sSplitTag;
        $sUniqidSalt .= self::randString();
        $sUniqidSalt .= $sSplitTag;

        $aServerInfo = $_SERVER;
        ksort( $aServerInfo );
        $sUniqidSalt .= Json::toJson( $aServerInfo );
        $sUniqidSalt = md5( $sUniqidSalt );

        $sUniqueString = md5( uniqid( $sUniqidSalt, TRUE ) );

        $sUniqueString .= mb_substr(
            self::randString(),
            0,
            $iMakeUniqueStringMaxLength - mb_strlen(
                $sUniqueString
            )
        );

        if ( $iSplitLength ) {
            $sUniqueString = str_split( $sUniqueString, $iSplitLength );
            $sUniqueString = implode( $sSplitTag, $sUniqueString );
        }

        $sUniqueString = self::setUniqueStringEncodeInfo(
            $sUniqueString,
            $sSplitTag
        );
        $sUniqueString = strtoupper( $sUniqueString );
        //        var_dump(self::checkUniqueStringEncodeInfo($sUniqueString));
        return $sUniqueString;
    }

    private static
    function setUniqueStringEncodeInfo (
        $sUniqueString = '',
        $sSplitTag = ''
    ) {
        if ( !$sUniqueString || !$sSplitTag ) {
            return '';
        }

        $sEncodeString = md5(
            strrev( $sUniqueString ) . $sSplitTag . self::uniqueStringSalt()
        );
        $aEncodeString = str_split(
            $sEncodeString,
            mb_strlen(
                explode(
                    $sSplitTag,
                    $sUniqueString
                )[ 0 ]
            )
        );
        $sUniqueString = $sUniqueString
                         . $sSplitTag
                         . $aEncodeString[ 0 ]
                         . $sSplitTag
                         . $aEncodeString[ 1 ];

        return $sUniqueString;
    }

    private static
    function checkUniqueStringEncodeInfo (
        $sUniqueString = ''
    ) {
        if ( !$sUniqueString ) {
            return FALSE;
        }

        $sSplitTag     = self::splitTag();
        $aUniqueString = explode( $sSplitTag, $sUniqueString );

        $iCountUniqueString = count( $aUniqueString );
        unset(
            $aUniqueString[ $iCountUniqueString
                            - 2 ], $aUniqueString[ $iCountUniqueString - 1 ]
        );
        $sUniqueCheckString = implode( $sSplitTag, $aUniqueString );

        return $sUniqueString === self::setUniqueStringEncodeInfo(
                $sUniqueCheckString,
                $sSplitTag
            );
    }

    //    public static
    //    function strSplitUnicodeFixedLength ($sStr, $l = 4)
    //    {
    //        $aRet = array();
    //        $iLen = mb_strlen($sStr, "UTF-8");
    //        for ($i = 0; $i < $iLen; $i += $l) {
    //            $aRet[] = mb_substr($sStr, $i, $l, "UTF-8");
    //        }
    //        return $aRet;
    //    }
    //
    //    public static
    //    function judgeStringTrueFalse (
    //        $sString = ''
    //    ) {
    //        return $sString ? TRUE : FALSE;
    //    }
    //
    //    public static
    //    function strToUtf8 ($sStr = '') {
    //        if (!$sStr) {
    //            return $sStr;
    //        }
    //
    //        $sEncode = mb_detect_encoding($sStr, array("ASCII",'UTF-8',"GB2312","GBK",'BIG5'));
    //        if($sEncode == 'UTF-8'){
    //            return $sStr;
    //        }else{
    //            return mb_convert_encoding($sStr, 'UTF-8', $sEncode);
    //        }
    //    }
    //
    //    private static
    //    function makeStringsStart ()
    //    {
    //        $sString = str_repeat( self::$sStringList, self::$iRepeatNumber );
    //        $sString = str_shuffle( $sString );
    //        $sString = mb_substr( $sString, 0, 2 );
    //
    //        return $sString;
    //    }
    //
    //    private static
    //    function makeStringsEnd (
    //        $sStartString = ''
    //    ) {
    //        if ( !$sStartString ) {
    //            return FALSE;
    //        }
    //
    //        $iStringListLength = mb_strlen( self::$sStringList );
    //
    //        $iKey1 = 10000;
    //        while ( $iKey1 > $iStringListLength ) {
    //            $iKey1 = self::$aReplaceList[ (string)$sStartString[ 0 ] ]
    //                     % $iStringListLength;
    //        }
    //        $iKey1 = $iKey1 > 0 ? $iKey1 : 0 - $iKey1;
    //
    //        $aArray   = array_values( self::$aReplaceList );
    //        $sValue1  = $aArray[ $iKey1 ];
    //        $iKey1    = $aArray = NULL;
    //        $sString1 = array_search( $sValue1, self::$aReplaceList );
    //        $sValue1  = NULL;
    //
    //        $iTag         = self::$aReplaceList[ (string)$sStartString[ 0 ] ]
    //                        . self::$aReplaceList[ (string)$sStartString[ 1 ] ];
    //        $sStartString = NULL;
    //        $iKey2        = 10000 - $iTag;
    //        $iTag         = NULL;
    //        while ( $iKey2 > $iStringListLength ) {
    //            $iKey2 = $iKey2 % $iStringListLength;
    //        }
    //        $iKey2             = $iKey2 > 0 ? $iKey2 : 0 - $iKey2;
    //        $sString2          = self::$sStringList[ $iKey2 ];
    //        $iStringListLength = $iKey2 = NULL;
    //
    //        return $sString1 . $sString2;
    //    }
    //
    //    public static
    //    function makeStringsStartEnd (
    //        $sString = ''
    //    ) {
    //        if ( !$sString ) {
    //            return FALSE;
    //        }
    //
    //        $sStartString = self::makeStringsStart();
    //
    //        $sEndString = self::makeStringsEnd( $sStartString );
    //
    //        return $sStartString . $sString . $sEndString;
    //    }
    //
    //    public static
    //    function checkStringsStartEnd (
    //        $sString = ''
    //    ) {
    //        if ( !$sString ) {
    //            return FALSE;
    //        }
    //
    //        $sString = strtolower( $sString );
    //
    //        $iStartString = mb_substr( $sString, 0, 2 );
    //
    //        $iEndString      = mb_substr( $sString, -2 );
    //        $sCheckEndString = self::makeStringsEnd( $iStartString );
    //
    //        if ( $iEndString === $sCheckEndString ) {
    //            return TRUE;
    //        }
    //
    //        return FALSE;
    //    }
    //
    //    public static
    //    function makeEncodeEnd (
    //        $sString
    //    ) {
    //        if ( !$sString ) {
    //            return FALSE;
    //        }
    //
    //        return $sString . '.' . md5(
    //                $sString
    //                . '(&)$*#&%YUEHRJBJDF@)#@$*HNFWER265787+JKNKFJE（￥&）@&（￥HJFNFJBWJEBWQEMDNCS《DFWOEI0358iohefsjdfbjberkqr'
    //            );
    //    }
}
