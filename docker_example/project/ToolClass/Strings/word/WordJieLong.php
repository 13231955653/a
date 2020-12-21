<?php

namespace ToolClass\Strings\word;

use model\publics\ReplenishChengYu;
use model\publics\word\Word as WordModel;
use command\Queue\string\word\ReplenlishWord as ReplenishChengYuQueue;
use model\publics\word\ReplenishWord as ReplenishWordModel;

use ToolClass\Database\Mysql as MysqlTool;
use ToolClass\Date\Time;
use ToolClass\Log\Exception;
use ToolClass\Model\Mysql;
use ToolClass\Server\Server;
use ToolClass\Strings\PinYin;
use command\Queue\string\word\WordQueue;
use ToolClass\Queue\Queue;

class WordJieLong
{
    //            匹配首个中文字符
    private static $iType0 = 0;
    //            倒叙查找中文字符，查找到的成语的最后一哥中文词为输入词的第一个中文词
    private static $iType3 = 3;
    //            匹配首个中文字声母
    private static $iType1 = 1;
    //            倒叙查找拼音，查找到的成语是输入词的第一个中文词的声母
    private static $iType5 = 5;
    //            匹配输入词最后一个中文字拼音，不带声调
    private static $iType2 = 2;
    //            倒叙查找拼音，查找到的成语是输入词的第一个中文词的拼音
    private static $iType4 = 4;
    //            匹配查找符合输入词第一个中文字的拼音，带声调。查找到的成语的最后一位中文字的拼音带声调是输入值的第一个中文字的拼音带音调
    private static $iType7 = 7;
    //            匹配查找符合输入词最后中文字的拼音，带声调
    private static $iType6 = 6;

//    直接从数据库查找
    private static $iSelectType0 = 0;

    public static
    function begin (
        $iSearchMode = 0,
        $sMatchMode = 0,
        $sSearchWord = '',
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE
    ) {
        if ( !$sSearchWord || mb_strlen( $sSearchWord ) < 2 ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'cheng yu jie long begin string is empty'
                    )
                )
            );
            return FALSE;
        }

        //        var_dump('成语接龙开始字符串---' . $sSearchWord);
        //        var_dump('查询方式' . $iSearchMode);
        switch ( $iSearchMode ) {
            //            数据库查找
            case self::$iSelectType0 :
                //        var_dump('数据库直接查找');
                return self::searchByDatabase(
                    $sMatchMode,
                    $sSearchWord,
                    $bGetDerivation,
                    $bGetExample,
                    $bGetExplain,
                    $bGetPinYin
                );
                break;
        }
    }

    private static
    function searchByDatabase (
        $sMatchMode = 0,
        $sSearchWord = '',
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE
    ) {
        if ( !$sSearchWord || mb_strlen( $sSearchWord ) < 2 ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'cheng yu jie long begin string is empty'
                    )
                )
            );
            return FALSE;
        }

        //        var_dump('匹配模式' . $sMatchMode);
        switch ( $sMatchMode ) {
            //            匹配首个中文字符
            case self::$iType0 :
                //                var_dump('匹配首个中文字符');
                return self::searchByFirstWord(
                    $sSearchWord,
                    $bGetDerivation,
                    $bGetExample,
                    $bGetExplain,
                    $bGetPinYin,
                    self::$iType0
                );
                break;
            //            匹配首个中文字声母
            case self::$iType1 :
                //                var_dump('匹配首个中文字声母');
                return self::searchByVoiceMother(
                    $sSearchWord,
                    $bGetDerivation,
                    $bGetExample,
                    $bGetExplain,
                    $bGetPinYin,
                    self::$iType1
                );
                break;
            //            匹配输入词最后一个中文字拼音，不带声调
            case self::$iType2 :
                //                var_dump('匹配输入词最后一个中文字拼音，不带声调');
                return self::searchByPinYin(
                    $sSearchWord,
                    $bGetDerivation,
                    $bGetExample,
                    $bGetExplain,
                    $bGetPinYin,
                    self::$iType2
                );
                break;
            //            倒叙查找中文字符，查找到的成语的最后一哥中文词为输入词的第一个中文词
            case self::$iType3 :
                //                var_dump('倒叙查找中文字符，查找到的成语的最后一哥中文词为输入词的第一个中文词');
                return self::searchByFinalWord(
                    $sSearchWord,
                    $bGetDerivation,
                    $bGetExample,
                    $bGetExplain,
                    $bGetPinYin,
                    self::$iType3
                );
                break;
            //            倒叙查找拼音，查找到的成语是输入词的第一个中文词的拼音
            case self::$iType4 :
                //                var_dump('倒叙查找拼音，查找到的成语是输入词的第一个中文词的拼音，不带声调');
                return self::searchByFinalPinYin(
                    $sSearchWord,
                    $bGetDerivation,
                    $bGetExample,
                    $bGetExplain,
                    $bGetPinYin,
                    self::$iType4
                );
                break;
            //            倒叙查找拼音，查找到的成语是输入词的第一个中文词的声母
            case self::$iType5 :
                //                var_dump('倒叙查找拼音，查找到的成语是输入词的第一个中文词的声母');
                return self::searchByFinalVoiceMother(
                    $sSearchWord,
                    $bGetDerivation,
                    $bGetExample,
                    $bGetExplain,
                    $bGetPinYin,
                    self::$iType5
                );
                break;
            //            匹配查找符合输入词最后中文字的拼音，带声调
            case self::$iType6 :
                //                var_dump('匹配查找符合输入词最后中文字的拼音，带声调');
                return self::searchByFinalWordVoice(
                    $sSearchWord,
                    $bGetDerivation,
                    $bGetExample,
                    $bGetExplain,
                    $bGetPinYin,
                    self::$iType6
                );
                break;
            //            匹配查找符合输入词第一个中文字的拼音，带声调。查找到的成语的最后一位中文字的拼音带声调是输入值的第一个中文字的拼音带音调
            case self::$iType7 :
                //                var_dump('匹配查找符合输入词最后中文字的拼音，带声调');
                return self::searchByFirstWordVoice(
                    $sSearchWord,
                    $bGetDerivation,
                    $bGetExample,
                    $bGetExplain,
                    $bGetPinYin,
                    self::$iType7
                );
                break;
        }
    }

    //匹配查找符合输入词最后中文字的拼音，带声调
    private static
    function searchByFirstWordVoice (
        $sSearchWord = '',
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE,
        $iSearchType
    ) {
        if ( !$sSearchWord || mb_strlen( $sSearchWord ) < 2 ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'cheng yu jie long begin string is empty'
                    )
                )
            );
            return FALSE;
        }

        $sSearchWord = mb_substr( trim( $sSearchWord ), 0, 1 );
        $sSearchWord = PinYinShengDiao::TransformWithTone(
            $sSearchWord,
            '',
            TRUE
        );
        //        var_dump('匹配查找符合输入词最后中文字的拼音，带声调---' . $sSearchWord);

        $aWhere                                   = [];
        $aWhere[ WordModel::pinyinFinalMd5() ] = WordModel::urlencodeMd5(
            WordModel::urlencode( $sSearchWord )
        );
        return self::searchNextWord(
            $sSearchWord,
            $aWhere,
            $bGetDerivation,
            $bGetExample,
            $bGetExplain,
            $bGetPinYin,
            $iSearchType
        );
    }

    //匹配查找符合输入词最后中文字的拼音，带声调
    private static
    function searchByFinalWordVoice (
        $sSearchWord = '',
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE,
        $iSearchType
    ) {
        if ( !$sSearchWord || mb_strlen( $sSearchWord ) < 2 ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'cheng yu jie long begin string is empty'
                    )
                )
            );
            return FALSE;
        }

        $sSearchWord = mb_substr( trim( $sSearchWord ), -1 );
        $sSearchWord = PinYinShengDiao::TransformWithTone(
            $sSearchWord,
            '',
            TRUE
        );
        //        var_dump('匹配查找符合输入词最后中文字的拼音，带声调---' . $sSearchWord);

        $aWhere                                   = [];
        $aWhere[ WordModel::pinyinFisrtMd5() ] = WordModel::urlencodeMd5(
            WordModel::urlencode( $sSearchWord )
        );
        return self::searchNextWord(
            $sSearchWord,
            $aWhere,
            $bGetDerivation,
            $bGetExample,
            $bGetExplain,
            $bGetPinYin,
            $iSearchType
        );
    }

    //倒叙查找拼音，查找到的成语是输入词的第一个中文词的声母
    private static
    function searchByFinalVoiceMother (
        $sSearchWord = '',
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE,
        $iSearchType
    ) {
        if ( !$sSearchWord || mb_strlen( $sSearchWord ) < 2 ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'cheng yu jie long begin string is empty'
                    )
                )
            );
            return FALSE;
        }

        $sSearchWord = mb_substr( trim( $sSearchWord ), 0, 1 );
        $sSearchWord = PinYin::getpy( $sSearchWord, FALSE );
        //        var_dump('倒叙查找拼音，查找到的成语是输入词的第一个中文词的声母---' . $sSearchWord);

        $aWhere                                           = [];
        $aWhere[ WordModel::finallyWordPinYinFinal() ] = $sSearchWord;
        return self::searchNextWord(
            $sSearchWord,
            $aWhere,
            $bGetDerivation,
            $bGetExample,
            $bGetExplain,
            $bGetPinYin,
            $iSearchType
        );
    }

    //倒叙查找拼音，查找到的成语是输入词的第一个中文词的拼音，不带声调
    private static
    function searchByFinalPinYin (
        $sSearchWord = '',
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE,
        $iSearchType
    ) {
        if ( !$sSearchWord || mb_strlen( $sSearchWord ) < 2 ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'cheng yu jie long begin string is empty'
                    )
                )
            );
            return FALSE;
        }

        $sSearchWord = mb_substr( trim( $sSearchWord ), 0, 1 );
        $sSearchWord = PinYin::getpy( $sSearchWord, TRUE );
        //        var_dump('倒叙查找拼音，查找到的成语是输入词的第一个中文词的拼音，不带声调---' . $sSearchWord);

        $aWhere                                      = [];
        $aWhere[ WordModel::finallyWordPinYin() ] = $sSearchWord;
        return self::searchNextWord(
            $sSearchWord,
            $aWhere,
            $bGetDerivation,
            $bGetExample,
            $bGetExplain,
            $bGetPinYin,
            $iSearchType
        );
    }

    //倒叙查找中文字符，查找到的成语的最后一哥中文词为输入词的第一个中文词
    private static
    function searchByFinalWord (
        $sSearchWord = '',
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE,
        $iSearchType
    ) {
        if ( !$sSearchWord || mb_strlen( $sSearchWord ) < 2 ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'cheng yu jie long begin string is empty'
                    )
                )
            );
            return FALSE;
        }

        $sSearchWord = mb_substr( trim( $sSearchWord ), 0, 1 );
        //        $sSearchWord = PinYin::getpy($sSearchWord, TRUE);
        //        var_dump('倒叙查找中文字符，查找到的成语的最后一哥中文词为输入词的第一个中文词---' . $sSearchWord);

        $aWhere                                   = [];
        $aWhere[ WordModel::finallyWordMd5() ] = WordModel::urlencodeMd5(
            trim( $sSearchWord )
        );
        return self::searchNextWord(
            $sSearchWord,
            $aWhere,
            $bGetDerivation,
            $bGetExample,
            $bGetExplain,
            $bGetPinYin,
            $iSearchType
        );
    }

    //匹配输入词最后一个中文字拼音，不带声调
    private static
    function searchByPinYin (
        $sSearchWord = '',
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE,
        $iSearchType
    ) {
        if ( !$sSearchWord || mb_strlen( $sSearchWord ) < 2 ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'cheng yu jie long begin string is empty'
                    )
                )
            );
            return FALSE;
        }

        $sSearchWord = mb_substr( trim( $sSearchWord ), -1 );
        $sSearchWord = PinYin::getpy( $sSearchWord, TRUE );
        //        var_dump('匹配输入词最后一个中文字拼音，不带声调---' . $sSearchWord);

        $aWhere                                    = [];
        $aWhere[ WordModel::firstWordPinYin() ] = trim( $sSearchWord );
        return self::searchNextWord(
            $sSearchWord,
            $aWhere,
            $bGetDerivation,
            $bGetExample,
            $bGetExplain,
            $bGetPinYin,
            $iSearchType
        );
    }

    //匹配首个中文字声母
    private static
    function searchByVoiceMother (
        $sSearchWord = '',
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE,
        $iSearchType
    ) {
        if ( !$sSearchWord || mb_strlen( $sSearchWord ) < 2 ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'cheng yu jie long begin string is empty'
                    )
                )
            );
            return FALSE;
        }

        $sSearchWord = mb_substr( trim( $sSearchWord ), -1 );
        $sSearchWord = PinYin::getpy( $sSearchWord, FALSE );
        //        var_dump('目前需匹配首个中文字声母---' . $sSearchWord);

        $aWhere                                         = [];
        $aWhere[ WordModel::firstWordPinYinFirst() ] = trim(
            $sSearchWord
        );
        return self::searchNextWord(
            $sSearchWord,
            $aWhere,
            $bGetDerivation,
            $bGetExample,
            $bGetExplain,
            $bGetPinYin,
            $iSearchType
        );
    }

    //匹配首个中文字符
    private static
    function searchByFirstWord (
        $sSearchWord = '',
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE,
        $iSearchType
    ) {
        if ( !$sSearchWord || mb_strlen( $sSearchWord ) < 2 ) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'cheng yu jie long begin string is empty'
                    )
                )
            );
            return FALSE;
        }

        $sSearchWord = mb_substr( trim( $sSearchWord ), -1 );
        //        var_dump('目前需匹配首个中文字---' . $sSearchWord);

        $aWhere                                 = [];
        $aWhere[ WordModel::firstWordMd5() ] = WordModel::urlencodeMd5(
            $sSearchWord
        );
        return self::searchNextWord(
            $sSearchWord,
            $aWhere,
            $bGetDerivation,
            $bGetExample,
            $bGetExplain,
            $bGetPinYin,
            $iSearchType
        );
    }

    private static
    function searchNextWord (
        $sSearchWord = '',
        $aWhere = [],
        $bGetDerivation = FALSE,
        $bGetExample = FALSE,
        $bGetExplain = FALSE,
        $bGetPinYin = FALSE,
        $iSearchType = 0
    ) {
        if ( !$aWhere || !is_array($aWhere) ) {
            var_dump($aWhere);
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'cheng yu jie long condition empty' )
                )
            );
            return FALSE;
        }

        $sPrikey       = WordModel::primary();
        $sStatusKey    = WordModel::status();
        $iNormalStatus = WordModel::normalStatus();

        $sTable   = WordModel::table();

        $oMysql = Mysql::table( $sTable );

        $aWhere[ $sStatusKey ] = $iNormalStatus;
        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $aGetData   = [];
        $aGetData[] = WordModel::word();
        $aGetData[] = $sPrikey;
        if ( $bGetDerivation ) {
            //            var_dump('获取起源');
            array_push( $aGetData, WordModel::derivation() );
        }
        if ( $bGetExample ) {
            //            var_dump('获取例子');
            array_push( $aGetData, WordModel::example() );
        }
        if ( $bGetExplain ) {
            //            var_dump('获取额外说明');
            array_push( $aGetData, WordModel::explanation() );
        }
        if ( $bGetPinYin ) {
            //            var_dump('获取拼音');
            array_push( $aGetData, WordModel::pinyin() );
        }

        $oMysql->select(
            $aGetData
        );

        $oMysql->orderBy(
            WordModel::lastUsedTime()
        );

        $res = $oMysql->first();

        if ( $res ) {
            self::updateUsedNumber( $res->{$sPrikey} );
        } else {
            self::insertNeedInsertByLabour($sSearchWord, $iSearchType);
        }

        return $res;
    }

    private static function insertNeedInsertByLabour ($sSearchWord = '', $iSearchType)
    {
        if (!$sSearchWord) {
            return;
        }

        $sReplenishWordFeild = ReplenishWordModel::word();
        $sReplenishWordMd5Feild = ReplenishWordModel::wordMd5();
        $sReplenishAddTimeFeild = ReplenishWordModel::addTime();
        $sReplenishTypeFeild = ReplenishWordModel::type();
        $sReplenishUrlEncodeFeild = ReplenishWordModel::urlencodeFeild();

        $aData = [];
        $aData[$sReplenishWordFeild] = $sSearchWord;
        $aData[$sReplenishWordMd5Feild] = ReplenishChengYu::urlencodeMd5($aData[$sReplenishWordFeild]);
        $aData[$sReplenishAddTimeFeild] = Time::nowRunTime();
        $aData[$sReplenishTypeFeild] = $iSearchType;
        $aData[$sReplenishUrlEncodeFeild] = ReplenishWordModel::urlEncode($sSearchWord);

        $sReplenishWordFeild = $sReplenishWordMd5Feild = $sReplenishAddTimeFeild = $sReplenishTypeFeild = $sReplenishUrlEncodeFeild = null;
        unset($sReplenishWordFeild, $sReplenishWordMd5Feild, $sReplenishAddTimeFeild, $sReplenishUrlEncodeFeild, $sReplenishTypeFeild);

        $obj = new ReplenishChengYuQueue();
        Queue::insertInsertQueue (
            $obj->sQueueName,
            $aData,
            false,
            TRUE
        );

        $aData = null;
        unset($aData);
    }

    private static function updateUsedNumber ($iId = 0)
    {
        if (!$iId) {
            return;
        }

        $aWhere[ WordModel::primary() ] = (int)$iId;

        $aData = [];
        $aData[MysqlTool::incrbyKey()][WordModel::usedNumber()] = 1;
        $aData[WordModel::lastUsedTime()] = Time::nowRunTime();

        $obj = new WordQueue();
        Queue::insertUpdateQueue (
            $obj->sQueueName,
            $aWhere,
            $aData,
            false,
            TRUE
        );

        $aWhere = $aData = $obj = $iId = null;
        unset($aWhere, $aData, $obj, $iId);
    }
}
