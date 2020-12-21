<?php

namespace ToolClass\Strings\chengyu;

use model\publics\ChengYu as ChengYuModel;
use ToolClass\Model\Mysql;
use ToolClass\Strings\PinYin;
use ToolClass\Strings\PinYinShengDiao;
//use ToolClass\Command\Command;
//use command\String\cheng_yu\ChengYu as ChengYuCommand;

class ChengYu
{
    public static
    function insertChengYu (
        $aChengYu = ''
//        $bExport = false
    ) {
        if ( !is_array( $aChengYu ) || !$aChengYu ) {
            return FALSE;
        }

        $aData                     = [];
        $sWordFeild                = ChengYuModel::word();
        $sWordMd5Feild             = ChengYuModel::wordMd5();

        $aData[ $sWordFeild ]    = $aChengYu[$sWordFeild];
        $aData[ $sWordMd5Feild ] = ChengYuModel::urlencodeMd5(
            $aData[ $sWordFeild ]
        );
        if ( self::checkExistSmaeMd5( $aData[ $sWordMd5Feild ] ) ) {
            $aData = null;
            unset($aData);
            return FALSE;
        }

        $sFirstWordFeild           = ChengYuModel::firstWord();
        $sFirstWordMd5Feild        = ChengYuModel::firstWordMd5();
//        $sStatusFeild              = ChengYuModel::status();
        $sPinYinFeild              = ChengYuModel::firstWordPinYin();
        $sPinYinFirstFeild         = ChengYuModel::firstWordPinYinFirst();
        $sFinalWordFeild           = ChengYuModel::finallyWord();
        $sFinalWordMd5Feild        = ChengYuModel::finallyWordMd5();
        $sPinYinFinalFeild         = ChengYuModel::finallyWordPinYin();
        $sFinalPinYinFinalFeild    = ChengYuModel::finallyWordPinYinFinal();
        $sAbbreviation             = ChengYuModel::abbreviation();
        $sPinYin                   = ChengYuModel::pinyin();
        $sPinYinNoVoice            = ChengYuModel::pinyinNoVoice();
        $sPinYinFirst              = ChengYuModel::pinyinFisrt();
        $sPinYinFirstMd5           = ChengYuModel::pinyinFisrtMd5();
        $sPinYinFinal              = ChengYuModel::pinyinFinal();
        $sPinYinFinalMd5           = ChengYuModel::pinyinFinalMd5();
        $sDerivation               = ChengYuModel::derivation();
        $sExistDerivation          = ChengYuModel::existDerivation();
        $sExample                  = ChengYuModel::example();
        $sExistExample             = ChengYuModel::existExample();
        $sExplanation              = ChengYuModel::explanation();
        $sExistExplanation         = ChengYuModel::existExplanation();
        $sUsedNumber               = ChengYuModel::usedNumber();
        $sLastUsedTime             = ChengYuModel::lastUsedTime();
//        $iNormalStatus             = ChengYuModel::normalStatus();
        $iExistDerivationStatus    = ChengYuModel::existDerivationStatus();
//        $iNoExistDerivationStatus  = ChengYuModel::noExistDerivationStatus();
        $iExistExampleStatus       = ChengYuModel::existExampleStatus();
//        $iNoExistExampleStatus     = ChengYuModel::noExistExampleStatus();
        $iExistExplanationStatus   = ChengYuModel::existExplanationStatus();
        $iNoExistExplanationStatus = ChengYuModel::noExistExplanationStatus();
        $sDefaultEmptyInfo         = '无';

//        $aData[ $sStatusFeild ] = $iNormalStatus;

        $sFirstWord   = ChengYuModel::subFirstWord( $aData[ $sWordFeild ] );
        $sFinallyWord   = ChengYuModel::subFinalWord( $aData[ $sWordFeild ] );

        $aData[ $sFirstWordFeild ]    = $sFirstWord;
        $aData[ $sFirstWordMd5Feild ] = ChengYuModel::urlencodeMd5(
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
        $aData[ $sFinalWordMd5Feild ] = ChengYuModel::urlencodeMd5(
            $aData[ $sFinalWordFeild ]
        );

        $aData[ $sPinYinFinalFeild ]      = PinYin::getpy(
            $aData[ $sFinalWordFeild ]
        );
        $aData[ $sFinalPinYinFinalFeild ] = PinYin::getpy(
            $aData[ $sFinalWordFeild ],
            FALSE
        );

        if (isset($aChengYu[ $sAbbreviation ])) {
            $aData[ $sAbbreviation ] = trim(
                str_replace( ' ', '', $aChengYu[ $sAbbreviation ] )
            );
        } else {
            $aData[ $sAbbreviation ] = trim(
                str_replace( ' ', '', PinYin::getpy(
                    $aData[ $sWordFeild ],
                    FALSE )
            ));
        }

        if (isset($aChengYu[ $sPinYin ])) {
            $aData[ $sPinYin ] = trim(
                str_replace( '  ', ' ', $aChengYu[ $sPinYin ] )
            );
        } else {
            $aData[ $sPinYin ] = trim(PinYinShengDiao::TransformWithTone(
                    $aData[ $sWordFeild ],
                    ' ' )
                );
        }

        if (isset($aChengYu[ $sPinYinNoVoice ])) {
            $aData[ $sPinYinNoVoice ] = trim(
                str_replace( '  ', ' ', $aChengYu[ $sPinYinNoVoice ] )
            );
        } else {
            $aData[ $sPinYinNoVoice ] = trim(PinYinShengDiao::TransformWithoutTone(
                $aData[ $sWordFeild ],
                ' ' )
            );
        }

        $aTmp1                     = explode( ' ', $aData[ $sPinYin ] );
        $aData[ $sPinYinFirst ]    = $aTmp1[0];
        $aData[ $sPinYinFirstMd5 ] = ChengYuModel::urlencodeMd5(
            $aData[ $sPinYinFirst ]
        );

        $aData[ $sPinYinFinal ]    = $aTmp1[ count( $aTmp1 ) - 1 ];
        $aData[ $sPinYinFinalMd5 ] = ChengYuModel::urlencodeMd5(
            $aData[ $sPinYinFinal ]
        );

        if (isset($aChengYu[ $sDerivation ]) && $aChengYu[ $sDerivation ]) {
            $aData[ $sDerivation ]      = trim(
                str_replace( '  ', ' ', $aChengYu[ $sDerivation ] )
            );
            $aData[ $sDerivation ]      = trim(
                str_replace( $sDefaultEmptyInfo, '', $aData[ $sDerivation ] )
            );
            $aData[ $sExistDerivation ] = $iExistDerivationStatus;
        }

        if (isset($aChengYu[ $sExample ]) && $aChengYu[ $sExample ]) {
            $aData[ $sExample ]      = trim(
                str_replace( '  ', ' ', $aChengYu[ $sExample ] )
            );
            $aData[ $sExample ]      = trim(
                str_replace( $sDefaultEmptyInfo, '', $aData[ $sExample ] )
            );
            $aData[ $sExistExample ] = $iExistExampleStatus;
        }

        if (isset($aChengYu[ $sExample ]) && $aChengYu[ $sExample ]) {
            $aData[ $sExplanation ]      = trim(
                str_replace( '  ', ' ', $aChengYu[ $sExplanation ] )
            );
            $aData[ $sExplanation ]      = trim(
                str_replace( $sDefaultEmptyInfo, '', $aData[ $sExplanation ] )
            );
            $aData[ $sExistExplanation ] = $iExistExplanationStatus;
        }

        if (isset($aChengYu[ $sUsedNumber ]) && $aChengYu[ $sUsedNumber ]) {
            $aData[ $sUsedNumber ] = (int)$aChengYu[ $sUsedNumber ];
        }

        if (isset($aChengYu[ $sLastUsedTime ]) && $aChengYu[ $sLastUsedTime ]) {
            $aData[ $sLastUsedTime ] = (int)$aChengYu[ $sLastUsedTime ];
        }

        $res = ChengYuModel::insert($aData);

        $aData = null;
        unset($aData);

//        if ($res && $bExport) {
//            self::exportChengYuToJson();
//        }

        return $res;
    }

//    private static function exportChengYuToJson ()
//    {
//        $obj = new ChengYuCommand();
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
        $aWhere[ ChengYuModel::wordMd5() ] = strtoupper( $sWordMd5 );

        $oMysql = Mysql::table( ChengYuModel::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->select(ChengYuModel::primary());

        return $oMysql->first();
    }
}
