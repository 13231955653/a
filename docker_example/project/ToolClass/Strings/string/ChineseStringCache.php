<?php

namespace ToolClass\Strings\string;

use model\publics\string\JianFanFont as JianFanFontModel;

use Service\Depend\DependContainer;
use Service\Ioc\Ioc;

use ToolClass\ToolFather;

class ChineseStringCache extends ToolFather
{
    private static $sSimpleFontPrefix             = 'simple_font_';
    private static $sTraditionalChineseFontPrefix = 'traditional_chinese_font_';

    public static
    function traditionalChineseFontPrefix ()
    {
        return self::$sTraditionalChineseFontPrefix;
    }

    public static
    function simpleFontPrefix ()
    {
        return self::$sSimpleFontPrefix;
    }

    public static
    function deleteOldChineseFontCache ()
    {
        if ( !self::delTraditionalChinese() || !self::delSimpleChinese() ) {
            return FALSE;
        }

        return TRUE;
    }

    private static
    function delSimpleChinese ()
    {
        $sDependName = DependContainer::server();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));

        $oServer = Ioc::resolve($sDependName);
        $oServer->setServerBidMemory(PROCEDURE_MAX_CAN_USE_MEMORY);

        $sDependName = DependContainer::cache();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));

        $oCache = Ioc::resolve($sDependName);
        $sSimpleFontPrefix = $oCache->keyStyle(self::simpleFontPrefix());
        $res = $oCache->keys($sSimpleFontPrefix . '*');
        if (!$res) {
            return TRUE;
        }

        if ( !$oCache->del(
            (array)$res
        ) ) {
            return self::throwError('del simple chinese error');
        }

        $sSimpleFontPrefix = $res = $aOtherKeys = null;
        unset($sSimpleFontPrefix, $res, $aOtherKeys);

        return TRUE;
    }

    private static
    function delTraditionalChinese ()
    {

        $sDependName = DependContainer::cache();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));

        $oDepend = Ioc::resolve($sDependName);


        return $oDepend->del( self::traditionalChineseFontPrefix() );
    }

    public static
    function setNewChineseFontCache ()
    {
        $sDependName = DependContainer::server();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
        $oServer = Ioc::resolve($sDependName);
        $oServer->setNeverTimeout();

        $sDependName = DependContainer::chineseStringModelService();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
        $oChineseStringModelService = Ioc::resolve($sDependName);
        $aChinese = $oChineseStringModelService->allNormalChinese();
        if ( !$aChinese ) {
            return TRUE;
        }

        if (!self::setSimpleFontCache($aChinese)) {
            $aChinese = null;
            unset($aChinese);

            return self::throwError('set simple font cache error');
        }

        if ( !self::wordSimpleTraditionalChineseCorresponding( $aChinese ) ) {
            return self::throwError('set traditional chinese font cache error');
        }

        return TRUE;
    }

    private static
    function wordSimpleTraditionalChineseCorresponding (
        & $aChinese = []
    ) {
        $sDependName = DependContainer::server();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
        $oServer = Ioc::resolve($sDependName);
        $oServer->setNeverTimeout();

        if ( !$aChinese ) {
            return self::throwError('set traditional chinese font cache error 1');
        }

        if ( !self::delTraditionalChinese() ) {
            return self::throwError('set traditional chinese font cache error 3');
        }

        $aData = [];
        $sOldWordUrlencodeMd5 = JianFanFontModel::oldWordUrlencodeMd5();
        $sNoExistOldWordTag = JianFanFontModel::noExistOldWordTag();
        $sWordUrlencodeMd5 = JianFanFontModel::wordUrlencodeMd5();
        foreach ( $aChinese as $v ) {
            if ($v[$sOldWordUrlencodeMd5] === $sNoExistOldWordTag) {
                continue;
            }

            $aData[ $v[ $sOldWordUrlencodeMd5 ] ][]
                = $v[ $sWordUrlencodeMd5 ];

            if (count($aData[ $v[ $sOldWordUrlencodeMd5 ] ]) > 3) {
                die();
            }

        }
        $aChinese = null;
        unset($aChinese);

        $sPrefix = self::traditionalChineseFontPrefix();

        $sDependName = DependContainer::cache();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
        $oCache = Ioc::resolve($sDependName);

        $sDependName = DependContainer::json();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
        $oJson = Ioc::resolve($sDependName);
        foreach ( $aData as $k => $v ) {
            $v = count($v) > 1 ? $oJson->toJson($v) : $v[0];

            if ( !$oCache->hSet(
                $sPrefix,
                $k,
                $v
            ) ) {
                return self::throwError('set traditional chinese font cache error 2');
            }
        }
        $aData = $sPrefix = null;
        unset($aData, $sPrefix);

        return TRUE;
    }

    private static
    function setSimpleFontCache (
        & $aChinese = []
    ) {
        $sDependName = DependContainer::server();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
        $oServer = Ioc::resolve($sDependName);
        $oServer->setNeverTimeout();

        if ( !$aChinese ) {
            return self::throwError('set simple chinese, chinese is empty');
        }

        if ( !self::delSimpleChinese() ) {
            return self::throwError('set traditional chinese font cache error 4');
        }

        $sSimpleFontPrefix = self::simpleFontPrefix();
        $sRadicals         = JianFanFontModel::radicals();
        $sNoRadicals       = JianFanFontModel::noRadicals();
        $sWordUrlencodeMd5 = JianFanFontModel::wordUrlencodeMd5();
        $sWhoAdd           = JianFanFontModel::whoAdd();
        $sAddTime          = JianFanFontModel::addTime();
        $sWhoUpdate        = JianFanFontModel::whoUpdate();
        $sUpdateTime       = JianFanFontModel::updateTime();
        $sWhoDelete        = JianFanFontModel::whoDelete();
        $sDeleteTime       = JianFanFontModel::deleteTime();
        $sOldWord          = JianFanFontModel::oldWord();
        $sOldUrlencode     = JianFanFontModel::oldWordUrlencode();
        $sOldUrlencodeMd5  = JianFanFontModel::oldWordUrlencodeMd5();
        $sNoExistOldWord   = JianFanFontModel::noExistOldWordTag();
        $sStatus           = JianFanFontModel::status();
        $sPinYin           = JianFanFontModel::pinyin();
        $sPinYinWitdVoice  = JianFanFontModel::pinyinWithVoice();
        $sFirstPinYin      = JianFanFontModel::firstPinyin();
        $sNoPinYin         = JianFanFontModel::noPinYin();
        $sPrikey           = JianFanFontModel::primary();
        $sWord             = JianFanFontModel::word();

        $sDependName = DependContainer::cache();
        Ioc::register($sDependName, DependContainer::depend( $sDependName));
        $oCache = Ioc::resolve($sDependName);
        foreach ( $aChinese as $k => $v ) {
            $v = (array)$v;
            foreach ( $v as $key => $val ) {
                if ( !$val ) {
                    unset( $v[ $key ] );
                    //                    unset($aChinese[$k][$key]);
                }
            }
            unset( $v[ $sWord ] );
            unset( $v[ $sPrikey ] );
            unset( $v[ $sWhoAdd ] );
            unset( $v[ $sAddTime ] );
            unset( $v[ $sWhoUpdate ] );
            unset( $v[ $sUpdateTime ] );
            unset( $v[ $sWhoDelete ] );
            unset( $v[ $sDeleteTime ] );
            unset( $v[ $sStatus ] );

            if ( $v[ $sPinYin ] === $sNoPinYin ) {
                unset( $v[ $sPinYin ] );
            }

            if ( $v[ $sPinYinWitdVoice ] === $sNoPinYin ) {
                unset( $v[ $sPinYinWitdVoice ] );
            }

            if ( $v[ $sFirstPinYin ] === $sNoPinYin ) {
                unset( $v[ $sFirstPinYin ] );
            }

            if ( $v[ $sRadicals ] === $sNoRadicals ) {
                unset( $v[ $sRadicals ] );
            }

            if ( $v[ $sOldWord ] === $sNoExistOldWord ) {
                unset( $v[ $sOldWord ] );
            }

            if ( $v[ $sOldUrlencode ] === $sNoExistOldWord ) {
                unset( $v[ $sOldUrlencode ] );
            }

            if ( $v[ $sOldUrlencodeMd5 ] === $sNoExistOldWord ) {
                unset( $v[ $sOldUrlencodeMd5 ] );
            }

            if (!is_array($v)) {
                continue;
            }

            if ( !$oCache->hMset(
                $sSimpleFontPrefix . $v[ $sWordUrlencodeMd5 ],
                $v
            ) ) {
                return self::throwError('set simple font cache error, one error');
            }
        }

        return TRUE;
    }
}
