<?php

namespace model;

use Service\Depend\DependContainer;
use Service\Ioc\Ioc;

class MyPdo
{
    private static $_instance;
    private static $aInstance = [];

    private $link = [];

    private $iTag        = 0;
    private $sDbHost     = '';
    private $sDbPort     = '';
    private $sDbName     = '';
    private $sDbUser     = '';
    private $sDbPassword = '';
    private $sDbCharset  = '';

    private
    function __construct (
        $sDatabaseType = 'mysql',
        $sDbHost,
        $sDbPort,
        $sDbName,
        $sDbUser,
        $sDbPassword,
        $sDbCharset,
        $iTag = 0
    ) {
        $sDatabaseType = strtolower( $sDatabaseType );

        try {
            switch ( $sDatabaseType ) {
                case 'mysql' :
                    $this->iTag        = $iTag;
                    $this->sDbHost     = $sDbHost;
                    $this->sDbPort     = $sDbPort;
                    $this->sDbName     = $sDbName;
                    $this->sDbUser     = $sDbUser;
                    $this->sDbPassword = $sDbPassword;
                    $this->sDbCharset  = $sDbCharset;

                    $this->link = new \PDO(
                        'mysql:host='
                        . $sDbHost
                        . ';port='
                        . $sDbPort
                        . ';dbname='
                        . $sDbName, $sDbUser, $sDbPassword
                    );
                    $this->link = new \PDO(
                        'mysql:host='
                        . $sDbHost
                        . ';port='
                        . $sDbPort
                        . ';dbname='
                        . $sDbName,
                        $sDbUser,
                        $sDbPassword,
                        [
                            \PDO::MYSQL_ATTR_INIT_COMMAND => 'set names '
                                                             . strtolower(
                                                                 DATABASE_CHARSET
                                                             )
                        ]
                    );
                    break;
            }
        } catch ( \PDOException $e ) {
            $sDepengName = DependContainer::errorInformAdminThrow();
            Ioc::register($sDepengName, DependContainer::depend( $sDepengName));
            $oErrorInforAdminThrow = Ioc::resolve($sDepengName);
            $oErrorInforAdminThrow->recordErrorAndInformAdmin(
                12,
                $e->getMessage());
        }
    }

    public
    function __destruct ()
    {
    }

    /**
     * __clone 是对象进行浅复制（只被复制引用）
     * 在方法中再次进行clone 就是深复制（其中一个修改另外一个也会被修改）
     */
    private
    function __clone ()
    {
    }

    public static
    function getInstance (
        $sDatabaseType = 'mysql_group',
        $sDbHost,
        $sDbPort,
        $sDbName,
        $sDbUser,
        $sDbPassword,
        $sDbCharset,
        $iTag
    ) {
        $sDatabaseType = strtolower( $sDatabaseType );

        switch ( $sDatabaseType ) {
            case 'mysql_group' :
                if ( !isset( self::$aInstance[ $iTag ] ) ) {
                    self::$aInstance[ $iTag ] = TRUE;

                    self::$_instance = new self(
                        'mysql',
                        $sDbHost,
                        $sDbPort,
                        $sDbName,
                        $sDbUser,
                        $sDbPassword,
                        $sDbCharset,
                        $iTag
                    );
                }
                break;
        }

        return self::$_instance;
    }

    public
    function count (
        $sPlatform = '',
        $sTable = '',
        $sSql = '',
        $aWhere = '',
        $bWriteSql = false,
        $bQueue = false
    ) {
        $stmt = $this->link->prepare( $sSql );

        $sExplain = '';
        if ( $aWhere ) {
            foreach ( $aWhere as $k => $v ) {
                //                var_dump($v);
                $stmt->bindValue( ':' . $k, $v );
            }
            $sExplain = '参数绑定';
        }

        if (DEBUG) {
            $this->showSql( $sSql, $aWhere );
        }

        if ( WRITE_SQL_HISTORY && $bWriteSql ) {
            $this->writeSqlHistory(
                [
                    'sql'        => $sSql,
                    'bind_value' => $aWhere
                ],
                $sExplain,
                $sPlatform,
                $sTable,
                $bQueue
            );
        }

        if ( !$stmt->execute() ) {
            if (DEBUG) {
                var_dump($stmt->errorInfo());
            }
            return FALSE;
        }

        return $stmt->fetchObject();
    }

    public
    function queryOne (
        $sSql,
        $aBindValue = [],
        $sPlatform = '',
        $sTable = '',
        $bWriteSql = TRUE,
        $bQueue = FALSE
    ) {
        $stmt = $this->link->prepare( $sSql );

        $sExplain = '';
        if ( $aBindValue ) {
            foreach ( $aBindValue as $k => $v ) {
                $stmt->bindValue( ':' . $k, $v );
            }
            $sExplain = '参数绑定';
        }

        if (DEBUG) {
            $this->showSql( $sSql, $aBindValue );
        }

        if ( WRITE_SQL_HISTORY && $bWriteSql ) {
            $this->writeSqlHistory(
                [
                    'sql'        => $sSql,
                    'bind_value' => $aBindValue
                ],
                $sExplain,
                $sPlatform,
                $sTable,
                $bQueue
            );
        }

        if ( !$stmt->execute() ) {
            if (DEBUG) {
                var_dump($stmt->errorInfo());
            }
            return FALSE;
        }

        return $stmt->fetchObject();
    }

    public
    function delete (
        $sPlatform = '',
        $sTable = '',
        $sSql,
        $aBindValue = [],
        $bWriteSql = TRUE
    ) {
        $stmt = $this->link->prepare( $sSql );

        $sExplain = '';
        if ( $aBindValue ) {
            foreach ( $aBindValue as $k => $v ) {
                $stmt->bindValue( ':' . $k, $v );
            }
            $sExplain = '参数绑定';
        }

        if (DEBUG) {
            $this->showSql( $sSql, $aBindValue );
        }

        if ( WRITE_SQL_HISTORY && $bWriteSql ) {
            $this->writeSqlHistory(
                [
                    'sql'        => $sSql,
                    'bind_value' => $aBindValue
                ],
                $sExplain,
                $sPlatform,
                $sTable
            );
        }

        if (!$stmt->execute()) {
            if (DEBUG) {
                var_dump($stmt->errorInfo());
            }
            return FALSE;
        }

        return TRUE;
    }

    public
    function queryAll (
        $sPlatform = '',
        $sTable = '',
        $sSql,
        $aBindValue = [],
        $bWriteSql = TRUE
    ) {
        $stmt = $this->link->prepare( $sSql );

        $sExplain = '';
        if ( $aBindValue ) {
            foreach ( $aBindValue as $k => $v ) {
                $stmt->bindValue( ':' . $k, $v );
            }
            $sExplain = '参数绑定';
        }

        if (DEBUG) {
            $this->showSql( $sSql, $aBindValue );
        }

        if ( WRITE_SQL_HISTORY && $bWriteSql ) {
            $this->writeSqlHistory(
                [
                    'sql'        => $sSql,
                    'bind_value' => $aBindValue
                ],
                $sExplain,
                $sPlatform,
                $sTable
            );
        }

        if ( !$stmt->execute() ) {
            if (DEBUG) {
                var_dump($stmt->errorInfo());
            }
            return FALSE;
        }

        return $stmt->fetchAll( \PDO::FETCH_ASSOC );
    }


    public
    function update (
        $sPlatform = false,
        $sTable = false,
        $sSql,
        $aWhereConditions = [],
        $aUpdateData,
        $bWriteSql = false,
        $bQueue = false
    ) {
        if (!$sPlatform || !$sTable || !$aWhereConditions || !$aUpdateData) {
            return false;
        }

        $stmt = $this->link->prepare( $sSql );

        $sExplain = '参数绑定';
        foreach ( $aWhereConditions as $k => $v ) {
            $stmt->bindValue( ':' . $k, $v );
        }
        foreach ( $aUpdateData as $k => $v ) {
            $stmt->bindValue( ':' . $k, $v );
        }

        if (DEBUG) {
            $aData = array_merge($aWhereConditions, $aUpdateData);
            $this->showSql( $sSql,  $aData);
        }

        if ( WRITE_SQL_HISTORY && $bWriteSql ) {
            $this->writeSqlHistory(
                [
                    'sql'        => $sSql,
                    'bind_value' => $aUpdateData
                ],
                $sExplain,
                $sPlatform,
                $sTable,
                $bQueue
            );
        }

        if ( !$stmt->execute() ) {
            if (DEBUG) {
                var_dump($stmt->errorInfo());
            }
            return FALSE;
        }

        if ( $stmt->rowCount() > 0) {
            return TRUE;
        }

        if (DEBUG) {
            var_dump($stmt->errorInfo());
        }
        return FALSE;
    }

    public
    function insert (
        $sPlatform = '',
        $sTable = '',
        $sSql,
        $aBindValue = [],
        $bWriteSql = TRUE,
        $bQueue = FALSE
    ) {
        $stmt = $this->link->prepare( $sSql );

        $sExplain = '';
        if ( $aBindValue ) {
            foreach ( $aBindValue as $k => $v ) {
                $stmt->bindValue( ':' . $k, $v );
            }
            $sExplain = '参数绑定';
        }

        if (DEBUG) {
            $this->showSql( $sSql, $aBindValue );
        }

        if ( WRITE_SQL_HISTORY && $bWriteSql ) {
            $this->writeSqlHistory(
                [
                    'sql'        => $sSql,
                    'bind_value' => $aBindValue
                ],
                $sExplain,
                $sPlatform,
                $sTable,
                $bQueue
            );
        }

        if ( !$stmt->execute() ) {
            if (DEBUG) {
                var_dump($stmt->errorInfo());
            }
            return FALSE;
        }

        $iLastInsertId = $stmt->lastInsertId();
        if ($iLastInsertId) {
            return $iLastInsertId;
        }

        if (DEBUG) {
            var_dump($stmt->errorInfo());
        }

        return FALSE;
    }

    private
    function showSql (
        $sSql,
        $aBindValue
    ) {
        if (!DEBUG) {
            return FALSE;
        }

        foreach ( $aBindValue as $k => $v ) {
            $sSql = str_replace(
                ':' . $k,
                is_numeric( $v ) ? $v : '"' . $v . '"',
                $sSql
            );
        }

        var_dump( $sSql );
        var_dump( $aBindValue ? '参数绑定' : '未绑定参数' );

        $sSql = $aBindValue = NULL;
        unset( $sSql, $aBindValue );
    }

    private
    function writeSqlHistory (
        $aSqlData,
        $sExplain,
        $sPlatform = '',
        $sTable = '',
        $bQueue = false
    ) {
        $sSql = $aSqlData[ 'sql' ];

        foreach ( $aSqlData[ 'bind_value' ] as $k => $v ) {
            $sSql = str_replace(
                ':' . $k,
                is_numeric( $v ) ? $v : '"' . $v . '"',
                $sSql
            );
        }

        $aSqlData = NULL;
        unset( $aSqlData );

        $sDepengName = DependContainer::sqlHistory();
        Ioc::register($sDepengName, DependContainer::depend( $sDepengName));
        $oHistory = Ioc::resolve($sDepengName);
        $oHistory->writeSqlHistory($sSql, $sExplain, $sPlatform, $sTable, $bQueue);
    }
}
