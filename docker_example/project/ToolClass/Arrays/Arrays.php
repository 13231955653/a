<?php

namespace ToolClass\Arrays;

//use ToolClass\Log\Exception;
//use ToolClass\Server\Server;

use ToolClass\ToolFather;
class Arrays extends ToolFather
{
    private static $sArrayMaxKey = 'max';
    private static $sArrayMinKey = 'min';
    private static $sKey = 'key';
    private static $sValue = 'value';

    public static function arrayMaxKey ()
    {
        return self::$sArrayMaxKey;
    }

    public static function arrayMinKey ()
    {
        return self::$sArrayMinKey;
    }

    public static function key ()
    {
        return self::$sKey;
    }

    public static function value ()
    {
        return self::$sValue;
    }

    public static
    function arrayMaxMin (
        $arr = [],
        $keys = ''
    ) {
        if (!$arr) {
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'sort array is empty'
                    )
                )
            );
            return FALSE;
        }

        $aValue = [];
        foreach ( $arr as $key => $val ) {
            $aValue[$key] = $val[ $keys ];
        }
        ksort($aValue);

        $aMax = [];
        $aMax[self::value()] = $aValue[count($aValue) - 1];
        $aMax[self::key()] = array_search($aMax[self::value()], $aValue);

        $aValueTmp = $aValue;
        array_values($aValueTmp);
        $aMin = [];
        $aMin[self::value()] = $aValueTmp[0];
        $aMin[self::key()] = array_search($aMax[self::value()], $aValue);

        $aArray[ self::arrayMaxKey() ] = $aMax;
        $aArray[ self::arrayMinKey() ] = $aMin;

        $aValue = $aValueTmp = $aMax = $aMin = null;
        unset($aValue, $aValueTmp, $aMax, $aMin);

        return $aArray;
    }

    //    查找含有英文逗号的字符串是否 包含某字符串
    public static
    function inCommaStringArray (
        $sSelectString = FALSE,
        $sString = FALSE
    ) {
        //        var_dump($sSelectString, $sString);
        if ( $sString === FALSE || $sSelectString === FALSE ) {
            //            Exception::throwException('in string array string must be , string');
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError(
                        'in string array string must be string'
                    )
                )
            );
            return FALSE;
        }

        $aString = explode( ',', $sString );
        foreach ( $aString as $v ) {
            if ( $v == $sSelectString ) {
                return TRUE;
            }
        }

        return FALSE;
    }

    /*
     *content: 根据数组某个字段进行排序
     * $aArray    需要排序的数组
     * $sField  数组里的某个字段
     * sort    1为正序排序  2为倒序排序
     * time :  2016年12月21日19:02:33
     */
    public static
    function sortByValue (
        $aArray,
        $sField = FALSE,
        $iSort = 1
    ) {
        if ( !is_array( $aArray ) ) {
            //            Exception::throwException( 'array must array 1' );
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'array must array 1' )
                )
            );
            return FALSE;
        }

        if ( !is_string( $sField ) ) {
            //            Exception::throwException( 'field must string 1' );
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'field must string 1' )
                )
            );
            return FALSE;
        }

        $order = [];
        foreach ( $aArray as $kay => $value ) {
            $order[] = $value[ $sField ];
        }

        if ( $iSort == 1 ) {
            array_multisort( $order, SORT_ASC, $aArray );
        } else {
            array_multisort( $order, SORT_DESC, $aArray );
        }

        return $aArray;
    }

    /**
     * 无极限分类，把返回的数据集转换成Tree
     *
     * @param array  $aList       要转换的数据集
     * @param string $sSortColumn 主键字段
     * @param string $sPid        parent_id标记字段
     * @param string $sChild      子数据集键名
     * @param string $iRoot       初始等级标记字段
     *
     * @return array
     */
    public static
    function listToTree (
        $aList,
        $sSortColumn = 'id',
        $sPid = 'parent_id',
        $sChild = 'child',
        $iRoot = 0
    ) {
        // 创建Tree
        $aTree = [];
        if ( is_array( $aList ) ) {
            // 创建基于主键的数组引用
            $refer = [];
            foreach ( $aList as $key => $data ) {
                $refer[ $data[ $sSortColumn ] ] =& $aList[ $key ];
            }

            foreach ( $aList as $key => $data ) {
                // 判断是否存在parent
                $parentId = $data[ $sPid ];
                if ( $iRoot == $parentId ) {
                    $aTree[] =& $aList[ $key ];
                } else {
                    if ( isset( $refer[ $parentId ] ) ) {
                        $parent              =& $refer[ $parentId ];
                        $parent[ $sChild ][] =& $aList[ $key ];
                    }
                }
            }
        }
        return $aTree;
    }

    public static
    function foreachDelKey (
        & $aData = [],
        $aDelData = []
    ) {
        if ( !is_array( $aData ) || !is_array( $aDelData ) ) {
            //            Exception::throwException( 'array must array 2' );
            Exception::throwException(
                Server::response(
                    Server::errorStatus(),
                    Server::returnError( 'array must array 2' )
                )
            );
            return FALSE;
        }

        foreach ( $aDelData as $v ) {
            foreach ( $aData as $k1 => $v1 ) {
                if ( isset( $aData[ $k1 ][ $v ] ) ) {
                    unset( $aData[ $k1 ][ $v ] );
                }

                if ( is_array( $aData[ $k1 ] ) ) {
                    self::foreachDelKey( $aData[ $k1 ], $aDelData );
                }
            }
        }

        $aDelData = NULL;
        unset( $aDelData );
        return $aData;
    }
}