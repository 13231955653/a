<?php

namespace Service\Depend\Strings\String;

use ToolClass\Strings\PinYinShengDiao as PinYinShengDiaoTool;
use Service\Depend\Depend;

class PinYinWithVoice extends Depend
{
    public
    function TransformWithTone (
        $input_char,
        $delimiter = ' ',
        $outside_ignore = FALSE
    ) {
        return PinYinShengDiaoTool::TransformWithTone(
            $input_char,
            $delimiter,
            $outside_ignore
        );
    }

    public
    function TransformUcwords (
        $input_char,
        $bToUpStr = TRUE,
        $delimiter = '',
        $outside_ignore = TRUE
    ) {
        return PinYinShengDiaoTool::TransformUcwords(
            $input_char,
            $bToUpStr,
            $delimiter,
            $outside_ignore
        );
    }

    public
    function TransformWithoutTone (
        $input_char,
        $delimiter = ' ',
        $outside_ignore = FALSE
    ) {
        return PinYinShengDiaoTool::TransformWithoutTone(
            $input_char,
            $delimiter,
            $outside_ignore
        );
    }

    public
    function first (
        $sPinYin = ''
    ) {
        if ( !$sPinYin ) {
            return $this->throwError( 'no pinyin' );
        }
        return PinYinShengDiaoTool::first( $sPinYin );
    }

    public
    function deleteShengDiao (
        $sPinYin = ''
    ) {
        if ( !$sPinYin ) {
            return $this->throwError( 'no pinyin' );
        }
        return PinYinShengDiaoTool::deleteShengDiao( $sPinYin );
    }
}
