<?php

namespace model;


use model\MyPdo;

use ToolClass\Database\Mysql as Mysqltool;

use ToolClass\Log\ErrorInformAdminThrow;
use ToolClass\Safe\SqlSafe;

require_once __ROOT_DIR__
             . DIRECTORY_SEPARATOR
             . 'define'
             . DIRECTORY_SEPARATOR
             . 'mysql.php';

class Mysql
{
    private static $sPlatform = 'publics';

    private static $aGroupObj = FALSE;

    private static $sMysqlObj = FALSE;

    private
    function __construct ()
    {
    }


    protected static //    function first ($sSql, $aBindValue = [], $sPlatform, $sTable)
    function first (
        $sSql,
        $aBindValue = [],
        $bWriteSql = FALSE
    ) {
        //        $sSql = self::disposeSql( $sSql );

        $db = self::makeGroupObj();

        return $db->queryOne(
            $sSql,
            $aBindValue,
            static::platform(),
            static::table(),
            $bWriteSql
        );
    }

    protected static
    function delete (
        $sSql = '',
        $aWhere = '',
        $bWriteSql = false
    ) {
        if ( !$sSql ) {
            return FALSE;
        }

        $db = self::makeGroupObj();

        return $db->delete(
            static::platform(),
            static::table(),
            $sSql,
            $aWhere,
            $bWriteSql
        );
    }

    protected static //    function first ($sSql, $aBindValue = [], $sPlatform, $sTable)
    function all (
        $sSql,
        $aBindValue = [],
        $bWriteSql = FALSE
    ) {
        //        $sSql = self::disposeSql( $sSql );

        $db = self::makeGroupObj();

        return $db->queryAll(
            static::platform(),
            static::table(),
            $sSql,
            $aBindValue,
            $bWriteSql
        );
    }

    //    private static
    //    function disposeSql (
    //        $sSql
    //    ) {
    //        ///////////////////////////////////////////////
    //        return str_replace( '  ', ' ', $sSql );
    //    }

    private static
    function makeGroupObj ()
    {
        if ( self::$sMysqlObj ) {
            return self::$sMysqlObj;
        }

        if ( !self::$aGroupObj ) {
            foreach ( DATDABASE_CONFIG[ 'MYSQL_GROUP' ] as $k => $v ) {
                self::$aGroupObj[] = MyPdo::getInstance(
                    'mysql_group',
                    $v[ 'MYSQL_IP' ],
                    $v[ 'MYSQL_PORT' ],
                    $v[ 'DATABASE_NAME' ],
                    $v[ 'USER' ],
                    $v[ 'PASSWORD' ],
                    $v[ 'CHARSET' ],
                    $k
                );
            }
        }

        $iDatabaseTag = Mysqltool::queryNowDatabaseTag();
        $iDatabaseTag = $iDatabaseTag ? $iDatabaseTag
            : Mysqltool::mtRandNowDatabaseTag();

        self::$sMysqlObj = self::$aGroupObj[ $iDatabaseTag % count(
            DATDABASE_CONFIG[ 'MYSQL_GROUP' ]
        ) ];
        if ( !self::$sMysqlObj ) {
            ErrorInformAdminThrow::recordErrorAndInformAdmin(
                11,
                self::$aGroupObj
            );
            return FALSE;
        }

        return self::$sMysqlObj;
    }

    protected static
    function count (
        $sSql = '',
        $aWhere = '',
        $bWriteSql = FALSE,
        $bQueue = FALSE
    ) {
        if ( !$sSql ) {
            return TRUE;
        }

        $db = self::makeGroupObj();

        return $db->count(
            static::platform(),
            static::table(),
            $sSql,
            $aWhere,
            $bWriteSql,
            $bQueue
        );
    }

    protected static
    function update (
        $sSql = '',
        $aWhere = [],
        $aData = [],
        $bWriteSql = FALSE,
        $bQueue = TRUE
    ) {
        if ( !$sSql || !$aWhere || !$aData ) {
            return TRUE;
        }

        $db = self::makeGroupObj();
        return $db->update(
            static::platform(),
            static::table(),
            $sSql,
            $aWhere,
            $aData,
            $bWriteSql,
            $bQueue
        );
    }

    protected static
    function insert (
        $aData = [],
        //        $bQueue = 'none',
        $bWriteSql = FALSE
    ) {
        if ( !$aData ) {
            return FALSE;
        }

        if ( !is_array( $aData ) ) {
            return FALSE;
        }

        $sTable = static::table();

        $sSql     = 'INSERT INTO`' . $sTable . '`';
        $sString1 = '(';
        $sString2 = 'VALUES(';
        foreach ( $aData as $k => $v ) {
            $sString1 .= '`' . $k . '`,';
            $sString2 .= ':' . $k . ',';

            $aData[ $k ] = trim( $v, ' ' );
            if ( is_int( $v ) ) {
                continue;
            }

            $aData[ SqlSafe::filterSqlArg( $k ) ] = SqlSafe::filterSqlArg( $v );
        }
        $sSql .= mb_substr( $sString1, 0, mb_strlen( $sString1 ) - 1 )
                 . ')'
                 . mb_substr( $sString2, 0, mb_strlen( $sString2 ) - 1 )
                 . ')';

        //        $sSql = self::disposeSql( $sSql );

        //        if ( $bQueue && INSERT_BY_QUEUE ) {
        //            return Queue::insertInsertQueue(
        //                $sSql,
        //                $aData,
        //                static::platform(),
        //                $sTable,
        //                $bWriteSql,
        //                static::$bQueueFeildRetry
        //            );
        //            return TRUE;
        //        }

        return self::doInsertDatabase(
            static::platform(),
            $sTable,
            $sSql,
            $aData,
            $bWriteSql,
            FALSE
        );
    }

    public static
    function doInsertDatabase (
        $sPlatform,
        $sTable,
        $sSql,
        $aData,
        $bWriteSql,
        $bQueue = FALSE
    ) {
        $db = self::makeGroupObj();
        return $db->insert(
            $sPlatform,
            $sTable,
            $sSql,
            $aData,
            $bWriteSql,
            $bQueue
        );
    }
}
