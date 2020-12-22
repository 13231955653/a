<?php

namespace ToolClass\Strings\string;

use Hook\Hook;
use model\publics\string\JianFanFont as JianFanFontModel;

use ToolClass\Date\Time;
use ToolClass\Log\Exception;
use ToolClass\Server\Server;
use ToolClass\Strings\PinYinShengDiao;
use ToolClass\Regular\RegularVerify;
use ToolClass\Strings\Strings;
//use ToolClass\Model\Mysql;
//use ToolClass\Cache\Cache;
//use ToolClass\Strings\string\ChineseStringModelAction;

class ChineseStringTool
{
    public static function insert ($aChineseString = [])
    {
        if (!$aChineseString || !is_array($aChineseString)) {
            return FALSE;
        }

        $sWordFeild = JianFanFontModel::word();
        if (!isset($aChineseString[$sWordFeild])) {
            return FALSE;
        }

        $sWordUrlencodeFeild = JianFanFontModel::wordUrlencode();
        $sWordUrlencodeMd5Feild = JianFanFontModel::wordUrlencodeMd5();
        $sOldWordFeild = JianFanFontModel::oldWord();
        $sOldWordUrlencodeFeild = JianFanFontModel::oldWordUrlencode();
        $sOldWordUrlencodeMd5Feild = JianFanFontModel::oldWordUrlencodeMd5();
        $sStrokesFeild = JianFanFontModel::strokes();
        $sPinyinWithVoiceFeild = JianFanFontModel::pinyinWithVoice();
        $sPinyinFeild = JianFanFontModel::pinyin();
        $sFirstPinyinFeild = JianFanFontModel::firstPinyin();
        $sRadicalsFeild = JianFanFontModel::radicals();
        $sExplanationFeild = JianFanFontModel::explanation();
        $sMoreFeild = JianFanFontModel::more();
        $sExistMore = JianFanFontModel::existMore();
        $sExistExplain = JianFanFontModel::existExplanation();

        $aFontData                = [];
        $aFontData[ $sWordFeild ] = trim($aChineseString[$sWordFeild]);
        $aFontData[ $sWordUrlencodeFeild ] = JianFanFontModel::urlencode($aFontData[ $sWordFeild ]);
        $aFontData[ $sWordUrlencodeMd5Feild ] = JianFanFontModel::wordUrlencodeMd5Encode($aFontData[ $sWordFeild ]);
        if ( ChineseStringModelTool::checkExistSmaeMd5( $aFontData[ $sWordUrlencodeMd5Feild ] ) ) {
//            var_dump('word exist !!!!');
            $aData = null;
            unset($aData);
            return TRUE;
        }

        if (isset($aChineseString[$sOldWordFeild]) && $aChineseString[$sOldWordFeild]) {
            $aFontData[ $sOldWordFeild ] = trim($aChineseString[$sOldWordFeild]);
        }

        if (isset($aChineseString[$sOldWordUrlencodeFeild]) && $aChineseString[$sOldWordUrlencodeFeild]) {
            $aFontData[ $sOldWordUrlencodeFeild ] = trim($aChineseString[$sOldWordUrlencodeFeild]);
        } else if (isset($aChineseString[$sOldWordFeild])){
            $aFontData[ $sOldWordUrlencodeFeild ] = JianFanFontModel::urlencode($aChineseString[$sOldWordFeild]);
        }

        if (isset($aChineseString[$sOldWordUrlencodeMd5Feild]) && $aChineseString[$sOldWordUrlencodeMd5Feild]) {
            $aFontData[ $sOldWordUrlencodeMd5Feild ] = trim($aChineseString[$sOldWordUrlencodeMd5Feild]);
        } else if (isset($aChineseString[$sOldWordFeild])){
            $aFontData[ $sOldWordUrlencodeMd5Feild ] = JianFanFontModel::wordUrlencodeMd5Encode($aChineseString[$sOldWordFeild]);
        }

        if (isset($aChineseString[$sStrokesFeild]) && $aChineseString[$sStrokesFeild]) {
            $aFontData[ $sStrokesFeild ] = trim($aChineseString[$sStrokesFeild]);
        }

        if (isset($aChineseString[$sPinyinWithVoiceFeild]) && $aChineseString[$sPinyinWithVoiceFeild]) {
            $aFontData[ $sPinyinWithVoiceFeild ] = trim($aChineseString[$sPinyinWithVoiceFeild]);
        } else {
            $aFontData[ $sPinyinWithVoiceFeild ] = trim(PinYinShengDiao::TransformWithTone($aChineseString[$sWordFeild]));
//            var_dump($aFontData[ $sPinyinWithVoiceFeild ], $aFontData[ $sWordFeild ], $aFontData[ $sPinyinWithVoiceFeild ] === $aFontData[ $sWordFeild ]);
//            die();
            if (!$aFontData[ $sPinyinWithVoiceFeild ] || JianFanFontModel::urlencode($aFontData[ $sPinyinWithVoiceFeild ]) === $aFontData[ $sWordUrlencodeFeild ]) {
                unset($aFontData[ $sPinyinWithVoiceFeild ]);
            }
        }

        if (isset($aChineseString[$sPinyinFeild]) && $aChineseString[$sPinyinFeild]) {
            $aFontData[ $sPinyinFeild ] = trim($aChineseString[$sPinyinFeild]);
        } else {
            $aFontData[ $sPinyinFeild ] = trim(PinYinShengDiao::TransformWithoutTone($aChineseString[$sWordFeild]));
            if (!$aFontData[ $sPinyinFeild ] || JianFanFontModel::urlencode($aFontData[ $sPinyinFeild ]) === $aFontData[ $sWordUrlencodeFeild ]) {
                unset($aFontData[ $sPinyinFeild ]);
            }
        }

        if (isset($aChineseString[$sFirstPinyinFeild]) && $aChineseString[$sFirstPinyinFeild]) {
            $aFontData[ $sFirstPinyinFeild ] = trim($aChineseString[$sFirstPinyinFeild]);
        } else {
            $aFontData[ $sFirstPinyinFeild ] = trim(PinYinShengDiao::TransformUcwords($aChineseString[$sWordFeild], false));
            if (!$aFontData[ $sFirstPinyinFeild ] || JianFanFontModel::urlencode($aFontData[ $sFirstPinyinFeild ]) === $aFontData[ $sWordUrlencodeFeild ]) {
                unset($aFontData[ $sFirstPinyinFeild ]);
            }
        }

        if (isset($aChineseString[$sRadicalsFeild]) && $aChineseString[$sRadicalsFeild]) {
            $aFontData[ $sRadicalsFeild ] = trim($aChineseString[$sRadicalsFeild]);
        }

        if (isset($aChineseString[$sExplanationFeild]) && $aChineseString[$sExplanationFeild]) {
            $aFontData[ $sExplanationFeild ] = self::replaceString($aChineseString[ $sExplanationFeild ], $aFontData[ $sWordFeild ]);
            $aFontData[$sExistExplain] = JianFanFontModel::existExplainTag();
        }

        if (isset($aChineseString[$sMoreFeild]) && $aChineseString[$sMoreFeild]) {
            $aFontData[ $sMoreFeild ] = self::replaceString($aChineseString[ $sMoreFeild ], $aFontData[ $sWordFeild ]);
            $aFontData[$sExistMore] = JianFanFontModel::existMoreTag();
        }

        $aChineseString = null;
        unset($aChineseString);

//        var_dump($aFontData[ $sPinyinWithVoiceFeild ], $aFontData[ $sWordFeild ]);
//        var_dump(JianFanFontModel::urlencode($aFontData[ $sPinyinWithVoiceFeild ]), $aFontData[ $sWordUrlencodeFeild ]);
//        var_dump($aFontData);die();

        $aFontData[JianFanFontModel::whoAdd()] = Server::getNowUser();
        $aFontData[JianFanFontModel::addTime()] = Time::nowRunTime();

        $res = ChineseStringModelTool::insert( $aFontData);
        $aFontData = null;
        unset($aFontData);
        if (!$res) {
//            var_dump($aFontData);
            return FALSE;
        }

        Hook::addHook('string\ChineseFont\ChineseFont', 'afterUpdateChineseFont');
        //            更新文字拼音 cache hook
        Hook::listen(
            Hook::chineseFont(),
            Hook::afterUpdateChineseFont(),
            $res
        );

        return $res;
    }

    public static function replaceString ($sString = '', $sNowChineseString = '')
    {
        if (!$sString || !is_string($sString) || !$sNowChineseString || !is_string($sNowChineseString)) {
            return '';
        }

        $sString = trim($sString);

        $sString = str_replace('', '', $sString);

        $sString = RegularVerify::disposeLineFeed($sString);

        $sTag1 = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';
        $sString = preg_replace('/([0-9])+、/', '$1' . $sTag1, $sString);

        $sString = preg_replace('/([0-9]+)/', '$1、', $sString);
        $sString = preg_replace('/\(([0-9]+)/', '$1', $sString);
        $sString = preg_replace('/([0-9]+、)\)/', '$1', $sString);
        $sString = preg_replace('/\（([0-9]+)/', '$1', $sString);
        $sString = preg_replace('/([0-9]+、)\）/', '$1', $sString);
//        $sString = preg_replace('/(、)+/', '、', $sString);

//        $sString = preg_replace('/<br>([0-9]+、)/', '$1', $sString);

        $sString = str_replace('～', $sNowChineseString, $sString);
        $sString = str_replace('~', $sNowChineseString, $sString);

        $sString = Strings::replaceEnglishSymbolToChineseSymbol($sString);

        $sString = RegularVerify::disposeLineFeed($sString);

        $sString = str_replace($sTag1, '、', $sString);
        $sString = str_replace('、、', '、', $sString);

        $sString = preg_replace('/笔顺编号[0-9]*[、|，|,|。|.]+/', '', $sString);

        $sString1 = mb_substr($sString, -1);
        if (in_array($sString1, ['，', '，'])) {
            $sString = mb_substr($sString, 0, mb_strlen($sString) - 1) . '。';
        }

        $sString = htmlspecialchars_decode($sString);
        $sString = html_entity_decode($sString);

        return $sString;
    }

//    public static function updateChineseInfo (array $aData = [])
//    {
//        if (!is_array($aData) || !$aData) {
//            return FALSE;
//        }
//
//        $sWord = JianFanFontModel::word();
//        if (!isset($aData[$sWord]) || !$aData[$sWord]) {
//            return FALSE;
//        }
//
//        $bExecHook = false;
//
//        $sOldWord = JianFanFontModel::oldWord();
//        $aUpdateData = [];
//        if (isset($aData[$sOldWord]) && $aData[$sOldWord]) {
//            $aUpdateData[$sOldWord] = $aData[$sOldWord];
//            $aUpdateData[JianFanFontModel::oldWordUrlencode()] = JianFanFontModel::urlencode($aUpdateData[$sOldWord]);
//            $aUpdateData[JianFanFontModel::oldWordUrlencodeMd5()] = JianFanFontModel::wordUrlencodeMd5Encode($aUpdateData[$sOldWord]);
//
//            $bExecHook = TRUE;
//        }
//
//        $sStrokes = JianFanFontModel::strokes();
//        if (isset($aData[$sStrokes]) && $aData[$sStrokes] && is_numeric($aData[$sStrokes])) {
//            $aUpdateData[$sStrokes] = (int)$aData[$sStrokes];
//
//            $bExecHook = TRUE;
//        }
//
//        $sPinYinWithVoice = JianFanFontModel::pinyinWithVoice();
//        $sPinYin = JianFanFontModel::pinyin();
//        if (isset($aData[$sPinYinWithVoice]) && $aData[$sPinYinWithVoice]) {
//            $aUpdateData[$sPinYinWithVoice] = $aData[$sPinYinWithVoice];
//            $aUpdateData[$sPinYin] = PinYinShengDiao::deleteShengDiao($aUpdateData[$sPinYinWithVoice]);
//            $aUpdateData[JianFanFontModel::firstPinyin()] = PinYinShengDiao::first($aUpdateData[$sPinYin]);
//
//            $bExecHook = TRUE;
//        }
//
//        $sRadicals = JianFanFontModel::radicals();
//        if (isset($aData[$sRadicals]) && $aData[$sRadicals]) {
//            $aUpdateData[$sRadicals] = $aData[$sRadicals];
//
//            $bExecHook = TRUE;
//        }
//
//        $sExplain = JianFanFontModel::explanation();
//        if (isset($aData[$sExplain]) && $aData[$sExplain]) {
//            $aUpdateData[$sExplain] = self::replaceString($aData[$sExplain]);
//            $aUpdateData[JianFanFontModel::existExplanation()] = JianFanFontModel::existExplainTag();
//
//            $bExecHook = TRUE;
//        }
//
//        $sMore = JianFanFontModel::more();
//        if (isset($aData[$sMore]) && $aData[$sMore]) {
//            $aUpdateData[$sMore] = self::replaceString($aData[$sMore]);
//            $aUpdateData[JianFanFontModel::existMore()] = JianFanFontModel::existMoreTag();
//
//            $bExecHook = TRUE;
//        }
//
//        if (!$bExecHook) {
//            $aData = $aUpdateData = null;
//            unset($aData, $aUpdateData);
//            return FALSE;
//        }
//
//        $aUpdateData[JianFanFontModel::whoUpdate()] = Server::getNowUser();
//        $aUpdateData[JianFanFontModel::updateTime()] = Time::nowRunTime();
//
//        $aWhere = [];
//        $aWhere[JianFanFontModel::wordUrlencodeMd5()] = JianFanFontModel::wordUrlencodeMd5Encode($aData[$sWord]);
//        $res = ChineseStringModelTool::update( $aWhere, $aUpdateData);
//        $aWhere = $aUpdateData = $aData = null;
//        unset($aWhere, $aUpdateData, $aData);
//
//        return $res ? TRUE : FALSE;
//    }

    public static function searchString ($sSearchWhat = '', $iGetNum = 1)
    {
        if (!$sSearchWhat) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('no get search condition')
                )
            );
            return FALSE;
        }

        $aWhere = [];
        switch ($sSearchWhat) {
            //            不存在繁体字
            case 'noOld' :
                $aWhere[JianFanFontModel::oldWordUrlencodeMd5()] = JianFanFontModel::noExistOldWordTag();
                break;
            //            不存在笔画
            case 'noStrokes' :
                $aWhere[JianFanFontModel::strokes()] = JianFanFontModel::noStrokes();
                break;
            //            不存在拼音
            case 'noPinYin' :
                $aWhere[JianFanFontModel::firstPinyin()] = JianFanFontModel::noPinYin();
                break;
            //            不存在偏旁
            case 'noRadicals' :
                $aWhere[JianFanFontModel::radicals()] = JianFanFontModel::noRadicals();
                break;
            //            不存在说明
            case 'noExplain' :
                $aWhere[JianFanFontModel::existExplanation()] = JianFanFontModel::noExistExplanation();
                break;
            //            不存在更多说明
            case 'noMore' :
                $aWhere[JianFanFontModel::existMore()] = JianFanFontModel::noMore();
                break;
            default :
                Exception::throwException(
                    Server::response(
                        Server::errorStatus(),
                        Server::returnError('no get search condition')
                    )
                );
                return FALSE;
                break;
        }

        if (!$aWhere) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError('no get search condition')
                )
            );
            return FALSE;
        }

        return ChineseStringModelTool::getJianFanZiFromDatabase( $aWhere, $iGetNum);
    }
}
