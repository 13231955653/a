<?php

namespace ToolClass\Strings;

//use ToolClass\Log\Exception;
//use ToolClass\Server\Server;

require_once __ROOT_DIR__
             . DIRECTORY_SEPARATOR
             . 'define'
             . DIRECTORY_SEPARATOR
             . 'pin_yin_sheng_diao.php';

use ToolClass\ToolFather;

class PinYinShengDiao extends ToolFather
{
    //编码
    private static $charset = 'utf-8';

    public
    function __construct ()
    {
    }

    /*
    * 转成带有声调的汉语拼音
    * param $input_char String  需要转换的汉字
    * param $delimiter  String   转换之后拼音之间分隔符
    * param $outside_ignore  Boolean     是否忽略非汉字内容
    */
    public static
    function TransformWithTone (
        $input_char,
        $delimiter = ' ',
        $outside_ignore = FALSE
    ) {

        $input_len = iconv_strlen( $input_char, self::$charset );
        $output_char = '';
        for ( $i = 0; $i < $input_len; $i++ ) {
            $word = iconv_substr( $input_char, $i, 1, self::$charset );
            if ( preg_match( '/^[\x{4e00}-\x{9fa5}]$/u', $word )
                 && preg_match(
                     '/\,' . preg_quote( $word ) . '(.*?)\,/',
                     PIN_YIN_SHENG_DIAO,
                     $matches
                 ) ) {
                $output_char .= $matches[ 1 ] . $delimiter;
            } else {
                if ( !$outside_ignore ) {
                    $output_char .= $word . $delimiter;
                }
            }
        }

        return $output_char;
    }

    /*
    * 转成带无声调的汉语拼音
    * param $input_char String  需要转换的汉字
    * param $delimiter  String   转换之后拼音之间分隔符
    * param $outside_ignore  Boolean     是否忽略非汉字内容
    */
    public static
    function TransformWithoutTone (
        $input_char,
        $delimiter = '',
        $outside_ignore = FALSE
    ) {

        $char_with_tone = self::TransformWithTone(
            $input_char,
            $delimiter,
            $outside_ignore
        );


        return self::deleteShengDiao( $char_with_tone );

    }

    public static function first ($sPinYin = '')
    {
        if ( !$sPinYin ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no pinyin' )
//                )
//            );
//            return FALSE;
            return self::throwError('no pinyin');
        }

        $sFirstPinYin = mb_substr($sPinYin, 0, 1);
        $sFirstPinYin = !in_array($sFirstPinYin, ['sh', 'zh', 'ch']) ? $sFirstPinYin : mb_substr($sPinYin, 0, 2);
        return $sFirstPinYin;
    }

    public static
    function deleteShengDiao (
        $sPinYin = ''
    ) {
        if ( !$sPinYin ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError( 'no pinyin' )
//                )
//            );
//            return FALSE;
            return self::throwError('no pinyin');
        }

        return str_replace(
            [
                'ā',
                'á',
                'ǎ',
                'à',
                'ō',
                'ó',
                'ǒ',
                'ò',
                'ē',
                'é',
                'ě',
                'è',
                'ī',
                'í',
                'ǐ',
                'ì',
                'ū',
                'ú',
                'ǔ',
                'ù',
                'ǖ',
                'ǘ',
                'ǚ',
                'ǜ',
                'ü'
            ],
            [
                'a',
                'a',
                'a',
                'a',
                'o',
                'o',
                'o',
                'o',
                'e',
                'e',
                'e',
                'e',
                'i',
                'i',
                'i',
                'i',
                'u',
                'u',
                'u',
                'u',
                'v',
                'v',
                'v',
                'v',
                'v'
            ],
            $sPinYin
        );
    }

    /*
    * 转成汉语拼音首字母
    * param $input_char String  需要转换的汉字
     * $bToUpStr 是否大写
    * param $delimiter  String   转换之后拼音之间分隔符
    *  param $outside_ignore  Boolean     是否忽略非汉字内容
    */
    public static
    function TransformUcwords (
        $input_char,
        $bToUpStr = TRUE,
        $delimiter = '',
        $outside_ignore = TRUE
    ) {
        $str = '';
        $len = iconv_strlen( $input_char, self::$charset );
        for ( $i = 0; $i < $len; $i++ ) {
            $word = iconv_substr( $input_char, $i, 1, self::$charset );
            if ( preg_match( '/^[\x{4e00}-\x{9fa5}]$/u', $word ) ) {
                $char_without_tone = ucwords(
                    self::TransformWithoutTone( $word, ' ', $outside_ignore )
                );
                $ucwords           = preg_replace(
                    '/[^A-Z]/',
                    '',
                    $char_without_tone
                );
                if ( !empty( $delimiter ) ) {
                    $ucwords = implode( $delimiter, str_split( $ucwords ) );
                }
                $str .= $delimiter . $ucwords;
            } else {
                if ( !$outside_ignore ) {
                    $str .= $delimiter . $word;
                }
            }
        }
        return $bToUpStr ? strtoupper( $str ) : strtolower( $str );
    }
}
/*$Pinyin=new ChinesePinyin();
$words='那英';
echo '<p>转成带有声调的汉语拼音<br/>';
$result = $Pinyin->TransformWithTone($words);
echo $result,'</p>';
echo '<p>转成带无声调的汉语拼音<br/>';
$result = $Pinyin->TransformWithoutTone($words,' ');
echo($result),'</p>';
echo '<p>转成汉语拼音首字母<br/>';
$result = $Pinyin->TransformUcwords($words);
echo($result),'</p>';*/
