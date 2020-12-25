<?php

namespace Service\Strings\string;

use model\publics\string\JianFanFont as JianFanFontModel;
use Service\Depend\DependContainer;
use Service\Ioc\Ioc;

use Service\Service;
class ChineseString extends Service
{
    public static function replenishChinese (array $aArg = [])
    {
        $aData = self::disposeReplenishChineseArgs($aArg);
        $aArg = null;
        unset($aArg);
        if (!$aData) {
            return false;
        }

        if (!self::checkExistSimpleChineseString($aData[JianFanFontModel::word()])) {
            return FALSE;
        }

        $aData = self::disposeUpdateChineseStringInfo($aData);
        if (!$aData) {
            return false;
        }

        $res = self::updateChineseStringInfo($aData);
        $aData = null;
        unset($aData);
        if (!$res) {
            $res = null;
            unset($res);

            return FALSE;
        }
        $res = null;
        unset($res);

        $sDepengName = DependContainer::hook();
        Ioc::register($sDepengName, DependContainer::depend( $sDepengName));

        $sDepeng = Ioc::resolve($sDepengName);

        $sDepeng->addHook('string\ChineseFont\ChineseFont', 'afterUpdateChineseFont');
        //            更新文字拼音 cache hook
        $sDepeng->listen(
            $sDepeng->chineseFont(),
            $sDepeng->afterUpdateChineseFont(),
            TRUE
        );

        return TRUE;
    }

    private static function updateChineseStringInfo (array $aUpdateData = [])
    {
        if (!$aUpdateData) {
            return FALSE;
        }

        $sWordFeild = JianFanFontModel::word();
        $aWhere = [];
        $aWhere[JianFanFontModel::wordUrlencodeMd5()] = JianFanFontModel::wordUrlencodeMd5Encode($sWordFeild);
        unset($aUpdateData[$sWordFeild]);

        $sDatabaseDepengName = DependContainer::database();
        $oDatabaseDepend = Ioc::resolve($sDatabaseDepengName);

        $oDatabaseDepend->table( JianFanFontModel::table() );

        $oDatabaseDepend->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $res = $oDatabaseDepend->update($aUpdateData);

        $aUpdateData = null;
        unset($aUpdateData);

        return $res;
    }

    private static function disposeUpdateChineseStringInfo (array $aData = [])
    {
        if (!is_array($aData) || !$aData) {
            return FALSE;
        }

        $sWord = JianFanFontModel::word();
        if (!isset($aData[$sWord]) || !$aData[$sWord]) {
            return FALSE;
        }

        $bUpdate = false;

        $sOldWord = JianFanFontModel::oldWord();
        $aUpdateData = [];
        if (isset($aData[$sOldWord]) && $aData[$sOldWord]) {
            $aUpdateData[$sOldWord] = $aData[$sOldWord];
            $aUpdateData[JianFanFontModel::oldWordUrlencode()] = JianFanFontModel::urlencode($aUpdateData[$sOldWord]);
            $aUpdateData[JianFanFontModel::oldWordUrlencodeMd5()] = JianFanFontModel::wordUrlencodeMd5Encode($aUpdateData[$sOldWord]);

            $bUpdate = TRUE;
        }

        $sStrokes = JianFanFontModel::strokes();
        if (isset($aData[$sStrokes]) && $aData[$sStrokes] && is_numeric($aData[$sStrokes])) {
            $aUpdateData[$sStrokes] = (int)$aData[$sStrokes];

            $bUpdate = TRUE;
        }

        $sPinYinWithVoice = JianFanFontModel::pinyinWithVoice();
        $sPinYin = JianFanFontModel::pinyin();
        if (isset($aData[$sPinYinWithVoice]) && $aData[$sPinYinWithVoice]) {
            $aUpdateData[$sPinYinWithVoice] = $aData[$sPinYinWithVoice];
            $aUpdateData[$sPinYin] = PinYinShengDiao::deleteShengDiao($aUpdateData[$sPinYinWithVoice]);
            $aUpdateData[JianFanFontModel::firstPinyin()] = PinYinShengDiao::first($aUpdateData[$sPinYin]);

            $bUpdate = TRUE;
        }

        $sRadicals = JianFanFontModel::radicals();
        if (isset($aData[$sRadicals]) && $aData[$sRadicals]) {
            $aUpdateData[$sRadicals] = $aData[$sRadicals];

            $bUpdate = TRUE;
        }

        $sExplain = JianFanFontModel::explanation();
        if (isset($aData[$sExplain]) && $aData[$sExplain]) {
            $aUpdateData[$sExplain] = self::replaceString($aData[$sExplain]);
            $aUpdateData[JianFanFontModel::existExplanation()] = JianFanFontModel::existExplainTag();

            $bUpdate = TRUE;
        }

        $sMore = JianFanFontModel::more();
        if (isset($aData[$sMore]) && $aData[$sMore]) {
            $aUpdateData[$sMore] = self::replaceString($aData[$sMore]);
            $aUpdateData[JianFanFontModel::existMore()] = JianFanFontModel::existMoreTag();

            $bUpdate = TRUE;
        }

        $aData = null;
        unset($aData);
        if (!$bUpdate) {
            return FALSE;
        }

        $sServerDepengName = DependContainer::server();
        $oServerDepend = Ioc::resolve($sServerDepengName);

        $sTimeDepengName = DependContainer::time();
        $oTimeDepend = Ioc::resolve($sTimeDepengName);

        $aUpdateData[JianFanFontModel::whoUpdate()] = $oServerDepend->getNowUser();
        $aUpdateData[JianFanFontModel::updateTime()] = $oTimeDepend->nowRunTime();

        return $aUpdateData;
    }

    private static function checkExistSimpleChineseString (string $sSimpleChineseString = '')
    {
        if (!$sSimpleChineseString || is_numeric($sSimpleChineseString)) {
            return FALSE;
        }

        $aWhere = [];
        $aWhere[JianFanFontModel::wordUrlencodeMd5()] = JianFanFontModel::wordUrlencodeMd5Encode($sSimpleChineseString);
        $sSimpleChineseString = null;
        unset($sSimpleChineseString);

        $sPrikey = JianFanFontModel::primary();
        $aSelect = [];
        $aSelect = [$sPrikey];

        $res = JianFanFontModel::getStringFromDatabase($aWhere, 1, $aSelect);
        $aWhere = $aSelect = null;
        unset($aWhere, $aSelect);

        return $res ? TRUE : FALSE;
    }

    private static function disposeReplenishChineseArgs (array $aArg = [])
    {
        if (!is_array($aArg) || !$aArg) {
            return FALSE;
        }

        $aData = [];
        $aData[JianFanFontModel::word()] = $aArg[0];
        if (isset($aArg[1]) && $aArg[1]) {
            $aData[JianFanFontModel::oldWord()] = $aArg[1];
        }
        if (isset($aArg[2]) && $aArg[2] && is_numeric($aArg[2])) {
            $aData[JianFanFontModel::strokes()] = (int)$aArg[2];
        }
        if (isset($aArg[3]) && $aArg[3]) {
            $aData[JianFanFontModel::pinyinWithVoice()] = $aArg[3];
        }
        if (isset($aArg[4]) && $aArg[4]) {
            $aData[JianFanFontModel::radicals()] = $aArg[4];
        }
        if (isset($aArg[5]) && $aArg[5]) {
            $aData[JianFanFontModel::explanation()] = $aArg[5];
        }
        if (isset($aArg[6]) && $aArg[6]) {
            $aData[JianFanFontModel::more()] = $aArg[6];
        }

        $aArg = null;
        unset($aArg);

        return count($aData) > 1 ? $aData : FALSE;
    }
}
