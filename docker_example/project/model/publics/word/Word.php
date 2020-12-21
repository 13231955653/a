<?php

namespace model\publics\word;

use model\Mysql;

class Word extends Mysql
{
    private static $sTable = 'words';

    private static $bQueueFeildRetry = TRUE;

    private static $sPrimaryFeild = 'id';

    private static $sPlatform = 'publics';

    private static $sDerivation = 'derivation';
    private static $sStatus = 'status';
    private static $sWordMd5 = 'word_md5';
    private static $sWord = 'word';
    private static $sAbbreviation = 'abbreviation';
    private static $sPinyin = 'pinyin';
    private static $sPinyinNoVoice = 'pinyin_no_voice';
    private static $sExample = 'example';
    private static $sExplanation = 'explanation';
    private static $sFirstWord = 'first_word';
    private static $sFirstWordMd5 = 'first_word_md5';
    private static $sFinallyWord = 'finally_word';
    private static $sFinallyWordMd5 = 'finally_word_md5';
    private static $sExistDerivation = 'exist_derivation';
    private static $sExistExample = 'exist_example';
    private static $sExistExplanation = 'exist_explanation';
    private static $sFirstWordPinyin = 'first_word_pinyin';
    private static $sFirstWordPinyinFirst = 'first_word_pinyin_first';
    private static $sFinalWordPinyin = 'final_word_pinyin';
    private static $sFinalWordPinyinFinal = 'final_word_pinyin_final';
    private static $sPinyinFirst = 'pinyin_first';
    private static $sPinyinFirstMd5 = 'pinyin_first_md5';
    private static $sPinyinFinal = 'pinyin_final';
    private static $sPinyinFinalMd5 = 'pinyin_final_md5';
    private static $sUsedNumber = 'used_number';
    private static $sLastUsedTime = 'last_used_time';

    private static $iNoExistDerivation = 0;
    private static $iExistDerivation = 1;
    private static $iNoExistExample = 0;
    private static $iExistExample = 1;
    private static $iNoExistExplanation = 0;
    private static $iExistExplanation = 1;
    private static $iNormalStatus = 1;

    private static $sMd5Salt = '1324hjkgIUSTIOQEHN(&*(^#$%@$#!^&*)_';

    private
    function __construct ()
    {
    }

    public static function urlencode ($sString = '')
    {
        if (!$sString) {
            return '';
        }

        return urlencode($sString);
    }

    public static function urlencodeMd5 ($sString = '')
    {
        if (!$sString) {
            return '';
        }

        return strtoupper(md5(urlencode($sString) . self::$sMd5Salt));
    }

    public static function usedNumber ()
    {
        return self::$sUsedNumber;
    }

    public static function lastUsedTime ()
    {
        return self::$sLastUsedTime;
    }

    public static function pinyinFinalMd5 ()
    {
        return self::$sPinyinFinalMd5;
    }

    public static function pinyinFinal ()
    {
        return self::$sPinyinFinal;
    }

    public static function pinyinFisrtMd5 ()
    {
        return self::$sPinyinFirstMd5;
    }

    public static function pinyinFisrt ()
    {
        return self::$sPinyinFirst;
    }

    public static function finallyWordPinYinFinal ()
    {
        return self::$sFinalWordPinyinFinal;
    }

    public static function finallyWordPinYin ()
    {
        return self::$sFinalWordPinyin;
    }

    public static function firstWordPinYinFirst ()
    {
        return self::$sFirstWordPinyinFirst;
    }

    public static function firstWordPinYin ()
    {
        return self::$sFirstWordPinyin;
    }

    public static function noExistExplanationStatus ()
    {
        return self::$iNoExistExplanation;
    }

    public static function existExplanationStatus ()
    {
        return self::$iExistExplanation;
    }

    public static function existExplanation ()
    {
        return self::$sExistExplanation;
    }

    public static function noExistExampleStatus ()
    {
        return self::$iNoExistExample;
    }

    public static function existExampleStatus ()
    {
        return self::$iExistExample;
    }

    public static function existExample ()
    {
        return self::$sExistExample;
    }

    public static function noExistDerivationStatus ()
    {
        return self::$iNoExistDerivation;
    }

    public static function existDerivationStatus ()
    {
        return self::$iExistDerivation;
    }

    public static function existDerivation ()
    {
        return self::$sExistDerivation;
    }

    public static function finallyWordMd5 ()
    {
        return self::$sFinallyWordMd5;
    }

    public static function finallyWord ()
    {
        return self::$sFinallyWord;
    }

    public static function firstWordMd5 ()
    {
        return self::$sFirstWordMd5;
    }

    public static function subFirstWord ($sString = '')
    {
        if (!$sString || !is_string($sString)) {
            return '';
        }

        return mb_substr($sString, 0, 1);
    }

    public static function subFinalWord ($sString = '')
    {
        if (!$sString || !is_string($sString)) {
            return '';
        }

        return mb_substr($sString, -1);
    }

    public static function firstWord ()
    {
        return self::$sFirstWord;
    }

    public static function explanation ()
    {
        return self::$sExplanation;
    }

    public static function example ()
    {
        return self::$sExample;
    }

    public static function pinyin ()
    {
        return self::$sPinyin;
    }
    public static function pinyinNoVoice ()
    {
        return self::$sPinyinNoVoice;
    }

    public static function abbreviation ()
    {
        return self::$sAbbreviation;
    }

    public static function word ()
    {
        return self::$sWord;
    }

    public static function wordMd5 ()
    {
        return self::$sWordMd5;
    }

    public static function normalStatus ()
    {
        return self::$iNormalStatus;
    }

    public static function status ()
    {
        return self::$sStatus;
    }

    public static function derivation ()
    {
        return self::$sDerivation;
    }

    public static function platform ()
    {
        return self::$sPlatform;
    }

    public static function table()
    {
        return self::$sTable;
    }

    public static function primary()
    {
        return self::$sPrimaryFeild;
    }

    public static function queueFeildRetry ()
    {
        return self::$bQueueFeildRetry;
    }

    public static
    function first (
        $sSql,
        $aBindValue = [],
        $bWriteSql = FALSE
    ) {
        if ( !$sSql || !$aBindValue ) {
            return FALSE;
        }

        if ( !is_array( $aBindValue ) ) {
            return FALSE;
        }

        return parent::first( $sSql, $aBindValue, $bWriteSql );
    }

    public static
    function insert (
        $aData = [],
        //        $bQueue = TRUE,
        $bWriteSql = FALSE
    ) {
        if ( !$aData ) {
            return FALSE;
        }

        if ( !is_array( $aData ) ) {
            return FALSE;
        }

        //        return parent::insert( $aData, $bQueue, $bWriteSql );
        return parent::insert( $aData, $bWriteSql );
    }

    public static
    function all (
        $sSql,
        $aWhere = [],
        $bWriteSql = FALSE
    ) {
        if ( !$aWhere ) {
            return FALSE;
        }

        if ( !is_array( $aWhere ) ) {
            return FALSE;
        }

        return parent::all( $sSql, $aWhere, $bWriteSql );
    }

    public static
    function update (
        $sSql = '',
        $aWhere = [],
        $aData = [],
        $bWriteSql = false,
        $bQueue = TRUE
    )
    {
        //        var_dump($sSql, $aWhere, $aData, $bWriteSql, $bQueue);die();
        if ( !$sSql || !$aWhere || !$aData ) {
            return TRUE;
        }

        //        $sSql = '',
        //        $aWhere = [],
        //        $aData = [],
        //        $bWriteSql = FALSE,
        //        $bQueue = TRUE
        return parent::update(
            $sSql,
            $aWhere,
            $aData,
            $bWriteSql,
            $bQueue
        );
    }

    public static
    function count (
        $sSql = '',
        $aWhere = '',
        $bWriteSql = false,
        $bQueue = false
    ) {
        if ( !$sSql ) {
            return TRUE;
        }

        return parent::count(
            $sSql,
            $aWhere,
            $bWriteSql,
            false
        );
    }
}
