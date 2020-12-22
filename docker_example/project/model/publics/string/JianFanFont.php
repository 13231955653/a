<?php

namespace model\publics\string;

use model\Mysql;

use Service\Depend\DependContainer;
use Service\Ioc\Ioc;

class JianFanFont extends Mysql
{
    private static $sTable = 'jian_fan_fonts';

    private static $sPlatform = 'publics';

    private static $bQueueFeildRetry = TRUE;

    private static $sIdFeild = 'id';
    private static $sWordFeild = 'word';
    private static $sWordUrlEncodeFeild = 'word_url_encode';
    private static $sWordUrlencodeMd5 = 'word_urlencode_md5';
    private static $sOldWordFeild = 'oldword';
    private static $sOldWordUrlencodeFeild = 'oldword_urlencode';
    private static $sOldWordUrlencodeMd5Feild = 'oldword_urlencode_md5';
    private static $sStrokesFeild = 'strokes';
    private static $sPinyinWithVoiceFeild = 'pinyin_with_voice';
    private static $sPinyinFeild = 'pinyin';
    private static $sFirstPinyinFeild = 'first_pinyin';
    private static $sRadicalsFeild = 'radicals';
    private static $sExplanationFeild = 'explanation';
    private static $sExistExplanationFeild = 'exist_explanation';
    private static $sMoreFeild = 'more';
    private static $sExistMoreFeild = 'exist_more';
    private static $sWhoAdd = 'who_add';
    private static $sAddTime = 'add_time';
    private static $sWhoUpdate = 'who_update';
    private static $sUpdateTime = 'update_time';
    private static $sWhoDelete = 'who_delete';
    private static $sDeleteTime = 'delete_time';
    private static $sStatusFeild = 'status';
//    private static $sSimplifiedMd5Feild       = 'simplified_md5';

    private static $iExistMore = 1;
    private static $iExistExplain = 1;

    private static $iNoExistOldWordTag = 'a';
    private static $iNoExistStrokes = 0;
    private static $sNoPinYin = 'zz';
    private static $sNoRadicals = 'a';
    private static $iNoExistExplanation = 0;
    private static $iNoMore = 0;
    private static $iNormalStatus = 1;

    private
    function __construct ()
    {
    }

    public static function normalStatus ()
    {
        return self::$iNormalStatus;
    }

    public static function status ()
    {
        return self::$sStatusFeild;
    }

    public static function whoDelete ()
    {
        return self::$sWhoDelete;
    }


    public static function deleteTime ()
    {
        return self::$sDeleteTime;
    }

    public static function whoUpdate ()
    {
        return self::$sWhoUpdate;
    }


    public static function updateTime ()
    {
        return self::$sUpdateTime;
    }

    public static function whoAdd ()
    {
        return self::$sWhoAdd;
    }


    public static function addTime ()
    {
        return self::$sAddTime;
    }

    public static function urlencode ($sString = '')
    {
        if (!$sString) {
            return '';
        }

        return urlencode(trim($sString));
    }

    public static function wordUrlencodeMd5Encode ($sString = '')
    {
        if (!$sString) {
            return '';
        }

        return strtoupper(md5(urlencode(trim($sString))));
    }

    public static
    function primary ()
    {
        return self::$sIdFeild;
    }

    public static function word ()
    {
        return self::$sWordFeild;
    }

    public static function strokes ()
    {
        return self::$sStrokesFeild;
    }

    public static function noStrokes ()
    {
        return self::$iNoExistStrokes;
    }

    public static function pinyinWithVoice ()
    {
        return self::$sPinyinWithVoiceFeild;
    }

    public static function pinyin ()
    {
        return self::$sPinyinFeild;
    }

    public static function firstPinyin ()
    {
        return self::$sFirstPinyinFeild;
    }

    public static function noPinYin ()
    {
        return self::$sNoPinYin;
    }

    public static function radicals ()
    {
        return self::$sRadicalsFeild;
    }

    public static function noRadicals ()
    {
        return self::$sNoRadicals;
    }

    public static function explanation ()
    {
        return self::$sExplanationFeild;
    }

    public static function existExplanation ()
    {
        return self::$sExistExplanationFeild;
    }

    public static function noExistExplanation ()
    {
        return self::$iNoExistExplanation;
    }

    public static function more ()
    {
        return self::$sMoreFeild;
    }

    public static function existMore ()
    {
        return self::$sExistMoreFeild;
    }

    public static function noMore ()
    {
        return self::$iNoMore;
    }

    public static function existMoreTag ()
    {
        return self::$iExistMore;
    }

    public static function existExplainTag ()
    {
        return self::$iExistExplain;
    }

    public static function wordUrlencode ()
    {
        return self::$sWordUrlEncodeFeild;
    }

    public static function wordUrlencodeMd5 ()
    {
        return self::$sWordUrlencodeMd5;
    }

    public static function oldWord ()
    {
        return self::$sOldWordFeild;
    }

    public static function oldWordUrlencode ()
    {
        return self::$sOldWordUrlencodeFeild;
    }

    public static function oldWordUrlencodeMd5 ()
    {
        return self::$sOldWordUrlencodeMd5Feild;
    }

    public static function noExistOldWordTag ()
    {
        return self::$iNoExistOldWordTag;
    }

    public static function table ()
    {
        return self::$sTable;
    }

    public static function platform ()
    {
        return self::$sPlatform;
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

        //        echo 1;return;
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

        //        echo 1;return;
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
        if ( !$sSql || !$aWhere || !$aData ) {
            return FALSE;
        }

        return parent::update(
        //            static::$sPlatform,
        //            static::$sTable,
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
            return FALSE;
        }

        return parent::count(
            $sSql,
            $aWhere,
            $bWriteSql,
            false
        );
    }

//    public static function checkExistChineseSimpleString ( string $sSimpleChineseString = '')
//    {
//        if (!$sSimpleChineseString || is_numeric($sSimpleChineseString)) {
//            return FALSE;
//        }
//
//        $aWhere = [];
//        $aWhere[self::wordUrlencodeMd5()] = self::wordUrlencodeMd5Encode($sSimpleChineseString);
//
//        $sPrikey = self::primary();
//        $aSelect = [];
//        $aSelect = [$sPrikey];
//
//        $res = self::getStringFromDatabase( $aWhere, 1, $aSelect);
//        $aWhere = $aSelect = null;
//        unset($aWhere, $aSelect);
//
//        return $res ? TRUE : FALSE;
//    }

    public static function getStringFromDatabase ( $aWhere = [], $iGetNum = 1, $aSelect = '*', $aOrder = [])
    {
        if (!$aWhere) {
            return FALSE;
        }
        self::registerDatabaseCorrelation();

        $sDatabaseDepengName = DependContainer::database();
        $oDatabaseDepend = Ioc::resolve($sDatabaseDepengName);

        $sDatabaseToolDepengName = DependContainer::databaseTool();
        $oDatabaseToolDepend = Ioc::resolve($sDatabaseToolDepengName);

        $oDatabaseDepend->table(self::table());

        $sDaYu = $oDatabaseToolDepend->daYu();
        if (isset($aWhere[$sDaYu])) {
            $oDatabaseDepend->whereDaYu($aWhere[$sDaYu]);
            unset($aWhere[$sDaYu]);
        }

        $oDatabaseDepend->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oDatabaseDepend->select($aSelect);

        if ($aOrder) {
            foreach ($aOrder as $k => $v) {
                $oDatabaseDepend->orderBy($k, $v);
            }
        }

        if (is_numeric($iGetNum)) {
            $res = $iGetNum > 1 ? $oDatabaseDepend->getNum($iGetNum) : $oDatabaseDepend->first();
        } else {
            switch ($iGetNum) {
                case 'all' :
                    $res = $oDatabaseDepend->all();
                    break;
                case 'count' :
                    $res = $oDatabaseDepend->count();
                    break;
                default:
                    $sSearchWhat = $iGetNum = $oDatabaseDepend = $sDatabaseDepengName = $sDatabaseToolDepengName = $oDatabaseToolDepend = $sDaYu = NULL;
                    unset($sSearchWhat, $iGetNum, $oDatabaseDepend, $sDatabaseDepengName, $sDatabaseToolDepengName, $oDatabaseToolDepend, $sDaYu);

                    $sExceptionDepengName = DependContainer::exception();
                    $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

                    $sServerDepengName = DependContainer::server();
                    $oServerDepend = Ioc::resolve($sServerDepengName);

                    $oExceptionDepend->throwException(
                        $oServerDepend->response(
                            $oServerDepend->errorStatus(),
                            $oServerDepend->returnError('no get chinese number')
                        )
                    );

                    return FALSE;
                    break;
            }
        }

        $sSearchWhat = $iGetNum = $oDatabaseDepend = $sDatabaseDepengName = $sDatabaseToolDepengName = $oDatabaseToolDepend = $sDaYu = NULL;
        unset($sSearchWhat, $iGetNum, $oDatabaseDepend, $sDatabaseDepengName, $sDatabaseToolDepengName, $oDatabaseToolDepend, $sDaYu);

        return $res ? $res : FALSE;
    }
}
