<?php

namespace ToolClass\Strings\word;

use model\publics\word\Word as WordModel;
use ToolClass\Model\Mysql;
use ToolClass\Strings\PinYin;
use ToolClass\Strings\PinYinShengDiao;
//use ToolClass\Command\Command;
//use command\String\cheng_yu\Word as WordCommand;

class Word
{
    public static
    function insertWord (
        $aWord = ''
//        $bExport = false
    ) {
        if ( !is_array( $aWord ) || !$aWord ) {
            return FALSE;
        }

        $aData                     = [];
        $sWordFeild                = WordModel::word();
        $sWordMd5Feild             = WordModel::wordMd5();

        $aData[ $sWordFeild ]    = $aWord[$sWordFeild];
        $aData[ $sWordMd5Feild ] = WordModel::urlencodeMd5(
            $aData[ $sWordFeild ]
        );
        if ( self::checkExistSmaeMd5( $aData[ $sWordMd5Feild ] ) ) {
            var_dump('word exist !!!!');
            $aData = null;
            unset($aData);
            return FALSE;
        }

        $sFirstWordFeild           = WordModel::firstWord();
        $sFirstWordMd5Feild        = WordModel::firstWordMd5();
//        $sStatusFeild              = WordModel::status();
        $sPinYinFeild              = WordModel::firstWordPinYin();
        $sPinYinFirstFeild         = WordModel::firstWordPinYinFirst();
        $sFinalWordFeild           = WordModel::finallyWord();
        $sFinalWordMd5Feild        = WordModel::finallyWordMd5();
        $sPinYinFinalFeild         = WordModel::finallyWordPinYin();
        $sFinalPinYinFinalFeild    = WordModel::finallyWordPinYinFinal();
        $sAbbreviation             = WordModel::abbreviation();
        $sPinYin                   = WordModel::pinyin();
        $sPinYinNoVoice            = WordModel::pinyinNoVoice();
        $sPinYinFirst              = WordModel::pinyinFisrt();
        $sPinYinFirstMd5           = WordModel::pinyinFisrtMd5();
        $sPinYinFinal              = WordModel::pinyinFinal();
        $sPinYinFinalMd5           = WordModel::pinyinFinalMd5();
        $sDerivation               = WordModel::derivation();
        $sExistDerivation          = WordModel::existDerivation();
        $sExample                  = WordModel::example();
        $sExistExample             = WordModel::existExample();
        $sExplanation              = WordModel::explanation();
        $sExistExplanation         = WordModel::existExplanation();
        $sUsedNumber               = WordModel::usedNumber();
        $sLastUsedTime             = WordModel::lastUsedTime();
//        $iNormalStatus             = WordModel::normalStatus();
        $iExistDerivationStatus    = WordModel::existDerivationStatus();
//        $iNoExistDerivationStatus  = WordModel::noExistDerivationStatus();
        $iExistExampleStatus       = WordModel::existExampleStatus();
//        $iNoExistExampleStatus     = WordModel::noExistExampleStatus();
        $iExistExplanationStatus   = WordModel::existExplanationStatus();
        $iNoExistExplanationStatus = WordModel::noExistExplanationStatus();
        $sDefaultEmptyInfo         = '无';

//        $aData[ $sStatusFeild ] = $iNormalStatus;

        $sFirstWord   = WordModel::subFirstWord( $aData[ $sWordFeild ] );
        $sFinallyWord   = WordModel::subFinalWord( $aData[ $sWordFeild ] );

        $aData[ $sFirstWordFeild ]    = $sFirstWord;
        $aData[ $sFirstWordMd5Feild ] = WordModel::urlencodeMd5(
            $sFirstWord
        );

        $aData[ $sPinYinFeild ]      = PinYin::getpy(
            $aData[ $sFirstWordFeild ]
        );
        $aData[ $sPinYinFirstFeild ] = PinYin::getpy(
            $aData[ $sFirstWordFeild ],
            FALSE
        );

        $aData[ $sFinalWordFeild ]    = $sFinallyWord;
        $aData[ $sFinalWordMd5Feild ] = WordModel::urlencodeMd5(
            $aData[ $sFinalWordFeild ]
        );

        $aData[ $sPinYinFinalFeild ]      = PinYin::getpy(
            $aData[ $sFinalWordFeild ]
        );
        $aData[ $sFinalPinYinFinalFeild ] = PinYin::getpy(
            $aData[ $sFinalWordFeild ],
            FALSE
        );

        if (isset($aWord[ $sAbbreviation ])) {
            $aData[ $sAbbreviation ] = trim(
                str_replace( ' ', '', $aWord[ $sAbbreviation ] )
            );
        } else {
            $aData[ $sAbbreviation ] = trim(
                str_replace( ' ', '', PinYin::getpy(
                    $aData[ $sWordFeild ],
                    FALSE )
            ));
        }

        if (isset($aWord[ $sPinYin ])) {
            $aData[ $sPinYin ] = trim(
                str_replace( '  ', ' ', $aWord[ $sPinYin ] )
            );
        } else {
            $aData[ $sPinYin ] = trim(PinYinShengDiao::TransformWithTone(
                    $aData[ $sWordFeild ],
                    ' ' )
                );
        }

        if (isset($aWord[ $sPinYinNoVoice ])) {
            $aData[ $sPinYinNoVoice ] = trim(
                str_replace( '  ', ' ', $aWord[ $sPinYinNoVoice ] )
            );
        } else {
            $aData[ $sPinYinNoVoice ] = trim(PinYinShengDiao::TransformWithoutTone(
                $aData[ $sWordFeild ],
                ' ' )
            );
        }

        $aTmp1                     = explode( ' ', $aData[ $sPinYin ] );
        $aData[ $sPinYinFirst ]    = $aTmp1[0];
        $aData[ $sPinYinFirstMd5 ] = WordModel::urlencodeMd5(
            $aData[ $sPinYinFirst ]
        );

        $aData[ $sPinYinFinal ]    = $aTmp1[ count( $aTmp1 ) - 1 ];
        $aData[ $sPinYinFinalMd5 ] = WordModel::urlencodeMd5(
            $aData[ $sPinYinFinal ]
        );

        if (isset($aWord[ $sDerivation ]) && $aWord[ $sDerivation ]) {
            $aData[ $sDerivation ]      = trim(
                str_replace( '  ', ' ', $aWord[ $sDerivation ] )
            );
            $aData[ $sDerivation ]      = trim(
                str_replace( $sDefaultEmptyInfo, '', $aData[ $sDerivation ] )
            );
            $aData[ $sExistDerivation ] = $iExistDerivationStatus;
        }

        if (isset($aWord[ $sExample ]) && $aWord[ $sExample ]) {
            $aData[ $sExample ]      = trim(
                str_replace( '  ', ' ', $aWord[ $sExample ] )
            );
            $aData[ $sExample ]      = trim(
                str_replace( $sDefaultEmptyInfo, '', $aData[ $sExample ] )
            );
            $aData[ $sExistExample ] = $iExistExampleStatus;
        }

        if (isset($aWord[ $sExplanation ]) && $aWord[ $sExplanation ]) {
            $aWord[ $sExplanation ] = str_replace('~', $aWord[ $sWordFeild ], $aWord[ $sExplanation ]);
            $aWord[ $sExplanation ] = str_replace('～', $aWord[ $sWordFeild ], $aWord[ $sExplanation ]);
            $aData[ $sExplanation ]      = trim(
                str_replace( '  ', ' ', $aWord[ $sExplanation ] )
            );
            $aData[ $sExplanation ]      = trim(
                str_replace( $sDefaultEmptyInfo, '', $aData[ $sExplanation ] )
            );
            $aData[ $sExistExplanation ] = $iExistExplanationStatus;
        }

        if (isset($aWord[ $sUsedNumber ]) && $aWord[ $sUsedNumber ]) {
            $aData[ $sUsedNumber ] = (int)$aWord[ $sUsedNumber ];
        }

        if (isset($aWord[ $sLastUsedTime ]) && $aWord[ $sLastUsedTime ]) {
            $aData[ $sLastUsedTime ] = (int)$aWord[ $sLastUsedTime ];
        }

        $res = WordModel::insert($aData);

        $aData = null;
        unset($aData);

//        if ($res && $bExport) {
//            self::exportWordToJson();
//        }

        return $res;
    }

//    private static function exportWordToJson ()
//    {
//        $obj = new WordCommand();
//        Command::do($obj->sCommandName);
//    }

    private static
    function checkExistSmaeMd5 (
        $sWordMd5 = ''
    ) {
        if ( !$sWordMd5 ) {
            return TRUE;
        }

        $aWhere                            = [];
        $aWhere[ WordModel::wordMd5() ] = strtoupper( $sWordMd5 );

        $oMysql = Mysql::table( WordModel::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->select(WordModel::primary());

        return $oMysql->first();
    }
}
