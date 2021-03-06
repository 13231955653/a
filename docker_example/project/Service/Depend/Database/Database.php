<?php

namespace Service\Depend\Database;

//use model\home\Menu;
//use ToolClass\Database\Mysql as MysqlTool;
//use ToolClass\Safe\Sql;
//
use Service\Ioc\Ioc;
//use ToolClass\Log\Exception;
//use ToolClass\Server\Server;
//
//use ToolClass\Regular\RegularVerify;

use Service\Depend\DependContainer;

use Service\Depend\Depend;
class Database extends Depend
{
    private $sNowTable        = '';
    private $sTable           = '';
    private $sWhere           = '';
    private $aWhereConditions = [];
    private $sSelect          = '';
    private $sQuery           = '';
    private $bWriteSql        = FALSE;
    private $bQueue           = FALSE;
    private $sFindInSet       = '';
    private $sUpdate          = '';
    private $aUpdateData      = [];
    private $sGroupBy         = '';
    private $sCount           = '';
    private $aOrder           = [];
//    private $bRegisterSqlSafe = false;

//    public $sDisposeIncrbyDecrbySql           = '';

    public
    function __construct ()
    {
        $this->init();
    }

    /**
     * User: white
     * Date: 2020/12/21
     * Time: 11:40
     *
     * 初始化变量
     */
    private
    function init ()
    {
        $this->sNowTable        = '';
        $this->sTable           = '';
        $this->sWhere           = '';
        $this->aWhereConditions = [];
        $this->sSelect          = '';
        $this->sQuery           = '';
        $this->sGroupBy         = '';
        $this->bWriteSql        = FALSE;
        $this->sFindInSet       = '';
        $this->aUpdateData      = [];
        $this->bQueue           = FALSE;
        $this->sCount           = '';
        $this->aOrder           = [];
//        $this->bRegisterSqlSafe           = FALSE;
    }

    /**
     * User: white
     * Date: 2020/12/21
     * Time: 11:55
     *
     * sql safe object
     */
//    private function sqlSafeObj ()
//    {
//        if (!$this->bRegisterSqlSafe) {
//            $sDepeng = DependContainer::sqlSafe();
//            Ioc::register($sDepeng, DependContainer::depend( $sDepeng));
//        }
//    }

    /**
     * User: white
     * Date: 2020/12/21
     * Time: 11:38
     *
     * 设置table
     *
     * params string $sTable
     *
     *
     * 初始化 table 变量
     */
    public
    function table (string $sTable = '')
    {
        if (!$sTable) {
            return false;
        }

//        $this->sqlSafeObj();

        $sDepeng = DependContainer::sqlSafe();
        $oDatabaseDepend = Ioc::resolve($sDepeng);

        $this->sNowTable = $oDatabaseDepend->sqlSafe($sTable);
        $this->sTable = '`' . $this->sNowTable . '`';
    }

    public function group ($aGroupBy = [])
    {
        $aGroupBy       = is_array($aGroupBy) ? $aGroupBy : [$aGroupBy];
        $this->sGroupBy = '`' . implode( '`', $aGroupBy) . '`';
    }

    public
    function findInSet (
        $aWhereConditions = []
    ) {
        if ( !$aWhereConditions || !is_array( $aWhereConditions ) ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError('find in set value must no empty, and must is array')
//                )
//            );
//            return FALSE;
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            $sServerDepengName = DependContainer::server();
            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                $oServerDepend->response(
                    $oServerDepend->errorStatus(),
                    $oServerDepend->returnError('find in set value must no empty, and must is array')
                )
            );
            return FALSE;
        }

        $sString = $this->sFindInSet ? ' AND' : '';
        foreach ( $aWhereConditions as $k => $v ) {
            $v                            = is_array( $v ) ? implode( ',', $v )
                : $v;
            $this->sFindInSet             .= $sString
                                             . 'FIND_IN_SET(`'
                                             . $k
                                             . '`,:'
                                             . $k
                                             . ')';
            $this->aWhereConditions[ $k ] = $v;
        }
        $this->sFindInSet .= '';

        $sString = NULL;
        unset( $sString );
    }

    public
    function orFindInSet (
        $aWhereConditions = []
    ) {
        if ( !$aWhereConditions || !is_array( $aWhereConditions ) ) {
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError('find in set value must no empty, and must is array')
//                )
//            );
//            return FALSE;
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            $sServerDepengName = DependContainer::server();
            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                $oServerDepend->response(
                    $oServerDepend->errorStatus(),
                    $oServerDepend->returnError('find in set value must no empty, and must is array')
                )
            );
            return FALSE;
        }

        $sString    = $this->sFindInSet ? 'OR ' : '';
        $bFindInSet = $this->sFindInSet ? TRUE : FALSE;
        foreach ( $aWhereConditions as $k => $v ) {
            $v                            = is_array( $v ) ? implode( ',', $v )
                : $v;
            $this->sFindInSet             .= $sString
                                             . 'FIND_IN_SET(`'
                                             . $k
                                             . '`,:'
                                             . $k
                                             . ')';
            $this->aWhereConditions[ $k ] = $v;
        }
        $this->sFindInSet .= '';

        $this->sFindInSet = $bFindInSet ? '(' . $this->sFindInSet . ')'
            : $this->sFindInSet;

        $sString = $bFindInSet = NULL;
        unset( $sString, $bFindInSet );
    }

    public
    function where (
        $aWhere = []
    ) {
        if (!$aWhere) {
            return;
        }

//        $this->sqlSafeObj();

        $sDepeng = DependContainer::sqlSafe();
        $oDatabaseDepend = Ioc::resolve($sDepeng);

        $this->sWhere = $this->sWhere ? $this->sWhere . 'AND' : '';
        $sAnd         = ' AND ';
        $this->sWhere .= '(';
        $bWhere = false;
        foreach ( $aWhere as $k => $v ) {
            $this->aWhereConditions[ $k ] = $oDatabaseDepend->sqlSafe( $v );

            $this->sWhere .= '`' . $k . '`' . '=:' . $k . $sAnd;
            $bWhere = TRUE;
        }
        $this->sWhere = mb_substr(
            $this->sWhere,
            0,
            mb_strlen( $this->sWhere ) - mb_strlen(
                $sAnd
            )
        );
        $this->sWhere .= $bWhere ? ')' : '';
    }

    public function whereDaYu ($aWhere = []) {
        if (!$aWhere) {
            return;
        }

        $sDepeng = DependContainer::sqlSafe();
        $oDatabaseDepend = Ioc::resolve($sDepeng);

//        var_dump($aWhere);
        $this->sWhere = $this->sWhere ? $this->sWhere . 'AND' : '';
        $sAnd         = ' AND ';
        $this->sWhere .= '(';
        foreach ( $aWhere as $k => $v ) {
            $this->aWhereConditions[ $k ] = $oDatabaseDepend->sqlSafe( $v );

            $this->sWhere .= '`' . $k . '`' . '>:' . $k . $sAnd;
        }
        $this->sWhere = mb_substr(
            $this->sWhere,
            0,
            mb_strlen( $this->sWhere ) - mb_strlen(
                $sAnd
            )
        );
        $this->sWhere .= ')';
//        var_dump($this->sWhere);
    }

    public function whereIn ($aWhere = []) {
        if (!$aWhere) {
            return;
        }

        $this->sWhere = $this->sWhere ? $this->sWhere . 'AND' : '';
        $sAnd         = ' AND ';
        $this->sWhere .= '(';
        foreach ( $aWhere as $k => $v ) {
            $this->sWhere .= '`' . $k . '`' . 'in(';
            foreach ($v as $key => $val) {
                $bInt = RegularVerify::regNumber($val);
                $sKey = $k . '_' . $key;
                $this->sWhere .= $bInt ? ':' . $sKey . ',' : '`:' . $sKey . '`,';
                $this->aWhereConditions[ $sKey ] = $bInt ? $val : '`' . implode('`,`', $val) . '`';
            }

            $this->sWhere = mb_substr($this->sWhere, 0, mb_strlen($this->sWhere) - 1);
            $this->sWhere .= ')' . $sAnd;
        }

        $this->sWhere = mb_substr(
            $this->sWhere,
            0,
            mb_strlen( $this->sWhere ) - mb_strlen(
                $sAnd
            )
        );
        $this->sWhere .= ')';
//        var_dump($this->sWhere);
//        var_dump($this->aWhereConditions);
    }

    public
    function select (
        $aData = []
    ) {
        if ($aData) {
//            $this->sqlSafeObj();
//
//
            $sDepeng = DependContainer::sqlSafe();
            $oDatabaseDepend = Ioc::resolve($sDepeng);

            if (is_array($aData)) {
                foreach ($aData as $k => $v) {
                    $aData[$k] = $oDatabaseDepend->sqlSafe( $v );
                }

                $aData = '`' . implode(
                        '`,`',
                        $aData
                    ) . '`';
            } else {
                $aData = '`' . $oDatabaseDepend->sqlSafe( $aData ) . '`';
            }
        }

        $this->sSelect = $aData ? $aData : '*' ;
    }

    public function orderBy ($sOrderByFeild = '', $bAsc = TRUE)
    {
        if (!$sOrderByFeild) {
            return;
        }

        $this->aOrder[$sOrderByFeild] = $bAsc ? 'ASC' : 'DESC';
    }

    public
    function writeSql (
        $bWriteSql = FALSE
    ) {
        $this->bWriteSql = $bWriteSql;
    }

    public
    function bQueue (
        $bQueue = FALSE
    ) {
        $this->bQueue = $bQueue;
    }

    private function model ()
    {
//        var_dump($this->sNowTable);
        $oModel = '';
        switch ( $this->sNowTable ) {
            case 'admins' :
                $oModel = '\model\admin\Admin';
                break;
            case 'home_menus' :
                $oModel = '\model\home\HomeMenu';
                break;
            case 'admin_menus' :
                $oModel = '\model\admin\AdminMenu';
                break;
            case 'langs' :
                $oModel = '\model\publics\Lang';
                break;
            case 'spiders' :
                $oModel = '\model\publics\Spider';
                break;
            case 'zhong_guan_cun_xiao_hua_spiders' :
                $oModel = '\model\publics\ZhongGuanCunXiaoHuaSpider';
                break;
            case 'spider_curl_datas' :
                $oModel = '\model\publics\SpiderCurlData';
                break;
            case 'image_lists' :
                $oModel = '\model\publics\ImageList';
                break;
            case 'spider_curl_datas' :
                $oModel = '\model\publics\ImageList';
                break;
            case 'jian_fan_fonts' :
                $oModel = 'model\publics\string\JianFanFont';
                break;
            case 'cheng_yus' :
                $oModel = 'model\publics\ChengYu';
                break;
            case 'cheng_yu_need_replenishs' :
                $oModel = 'model\publics\ReplenishChengYu';
                break;
            case 'files' :
                $oModel = 'model\publics\file\File';
                break;
            case 'words' :
                $oModel = 'model\publics\word\Word';
                break;
            case 'word_need_replenishs' :
                $oModel = 'model\publics\word\ReplenishWord';
                break;
            default:
                if (DEBUG) {
                    var_dump($this->sNowTable);
                }
//                Exception::throwException(
//                    Server::response(
//                        Server::errorStatus(),
//                        Server::returnError('error model 1')
//                    )
//                );
//                return FALSE;
                $sExceptionDepengName = DependContainer::exception();
                $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

                $sServerDepengName = DependContainer::server();
                $oServerDepend = Ioc::resolve($sServerDepengName);

                $oExceptionDepend->throwException(
                    $oServerDepend->response(
                        $oServerDepend->errorStatus(),
                        $oServerDepend->returnError('error model 1')
                    )
                );
                return FALSE;
                break;
        }

        return $oModel;
    }

    private function search ($sNumber = '')
    {
        $sSql = $this->disposeSql( 'select' );

        $oModel = $this->model();

        switch ($sNumber) {
            case 'one' :
                return $oModel::first(
                    $sSql,
                    $this->aWhereConditions,
                    $this->bWriteSql
                );
                break;
            case 'all' :
                return $oModel::all(
                    $sSql,
                    $this->aWhereConditions,
                    $this->bWriteSql
                );
                break;
        }
    }

    public
    function update ($aData = [])
    {
        $this->updateFeild($aData);

        $sSql = $this->disposeSql( 'update' );

        $oModel = $this->model();
        return $oModel::update(
            $sSql,
            $this->aWhereConditions,
            $this->aUpdateData,
            $this->bWriteSql,
            $this->bQueue
        );
    }

    private function updateFeild ($aData)
    {
        if (!$aData) {
            return;
        }

        $sDepeng = DependContainer::sqlSafe();
        $oDatabaseDepend = Ioc::resolve($sDepeng);
        $sDou = ',';
        foreach ( $aData as $k1 => $v1 ) {
//            foreach ($v1 as $k => $v) {
                $this->sUpdate .= '`' . $k1 . '`' . '=:' . $k1 . $sDou;
                $this->aUpdateData[ $k1 ] = $oDatabaseDepend->sqlSafe( $v1 );
//            }
        }
        $this->sUpdate = mb_substr(
            $this->sUpdate,
            0,
            mb_strlen( $this->sUpdate ) - mb_strlen(
                $sDou
            )
        );
    }

    public
    function first ()
    {
        $this->sQuery = ' LIMIT 1';

        return $this->search('one');
    }

    public
    function getNum ($iNum = 1)
    {
        $this->sQuery = ' LIMIT ' . $iNum;

        return $this->search('all');
    }

    public
    function all ()
    {
        $this->sQuery = '';

        return $this->search('all');
    }


    public function delete ()
    {
        $sSql = $this->disposeSql( 'delete' );

        $oModel = $this->model();

        return $oModel::delete(
            $sSql,
            $this->aWhereConditions,
            $this->bWriteSql
        );
    }

    public function count ($sCountWhat = 'id')
    {
        $this->sCount = 'COUNT(' . $sCountWhat . ')AS`' . MysqlTool::statistics() . '`';
        $sSql = $this->disposeSql( 'count' );

        $oModel = $this->model();

        return $oModel::count(
            $sSql,
            $this->aWhereConditions,
            $this->bWriteSql
        );
    }

    private
    function disposeSql (
        $sAction = ''
    ) {
        $sSql = '';
        switch ( $sAction ) {
            case 'count' :
                $sSql = 'SELECT ' . $this->sCount . $this->sGroupBy . 'FROM' . $this->sTable . ($this->sGroupBy ? 'GROUP BY' . $this->sGroupBy : '');
                break;
            case 'incrbyDecrbyOne' :
                $sSql = 'SELECT';
//                var_dump('`' . implode('`,`', array_keys($this->aUpdateData[MysqlTool::$sIncrbyFeild])) . '`');
//                die();
                $sSql .= '`' . implode('`,`', array_keys($this->aUpdateData[MysqlTool::incrbyKey()])) . '`';
                $sSql .= 'FROM';
                $sSql .= $this->sTable;
                $sSql .= $this->sFindInSet ? 'WHERE' . $this->sFindInSet . 'AND' : '';
                $sSql .= $this->sWhere ? 'WHERE' . $this->sWhere : '';
                $sSql .= $this->sQuery;
//                var_dump($sSql);
//                die();
                break;
            case 'select' :
                $sSql = 'SELECT';
                $sSql .= $this->sSelect;
                $sSql .= 'FROM';
                $sSql .= $this->sTable;
                $sSql .= $this->sFindInSet ? 'WHERE' . $this->sFindInSet . 'AND' : '';
                $sSql .= $this->sWhere ? 'WHERE' . $this->sWhere : '';

                if ($this->aOrder) {
                    foreach ($this->aOrder as $k => $v) {
                        $sSql .= 'ORDER BY ' . $k . ' ' . $v;
                    }
                }

                $sSql .= $this->sQuery;
                break;
            case 'update' :
                $sSql = 'UPDATE';
                $sSql .= $this->sTable;
                $sSql .= 'SET';
                $sSql .= $this->sUpdate . ' ';
                $sSql .= $this->sFindInSet ? 'WHERE' . $this->sFindInSet . 'AND' : '';
                $sSql .= $this->sWhere ? 'WHERE' . $this->sWhere : '';
                break;
            case 'delete' :
                $sSql = 'DELETE ';
                $sSql .= 'FROM';
                $sSql .= $this->sTable;
                $sSql .= $this->sFindInSet ? 'WHERE' . $this->sFindInSet . 'AND' : '';
                $sSql .= $this->sWhere ? 'WHERE' . $this->sWhere : '';
                break;
            default:
                if (DEBUG) {
                    var_dump($sAction);
                }
                //                Exception::throwException('error action');
//                Exception::throwException(
//                    Server::response(
//                        Server::errorStatus(),
//                        Server::returnError('error action')
//                    )
//                );
//                return FALSE;
                $sExceptionDepengName = DependContainer::exception();
                $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

                $sServerDepengName = DependContainer::server();
                $oServerDepend = Ioc::resolve($sServerDepengName);

                $oExceptionDepend->throwException(
                    $oServerDepend->response(
                        $oServerDepend->errorStatus(),
                        $oServerDepend->returnError('error action')
                    )
                );
                return FALSE;
                break;
        }

        if ( !$sSql ) {
            //            Exception::throwException('no sql');
//            Exception::throwException(
//                Server::response(
//                    Server::errorStatus(),
//                    Server::returnError('no sql')
//                )
//            );
//            return FALSE;
            $sExceptionDepengName = DependContainer::exception();
            $oExceptionDepend = Ioc::resolve($sExceptionDepengName);

            $sServerDepengName = DependContainer::server();
            $oServerDepend = Ioc::resolve($sServerDepengName);

            $oExceptionDepend->throwException(
                $oServerDepend->response(
                    $oServerDepend->errorStatus(),
                    $oServerDepend->returnError('no sql')
                )
            );
            return FALSE;
        }

        $sSql = str_replace( '  ', ' ', $sSql );
        return $sSql;
    }
}
