<?php

namespace command\Spider;

use command\CommandFather;

use model\publics\Spider as SpiderModel;
use model\publics\ZhongGuanCunXiaoHuaSpider;

use ToolClass\Cache\Cache;
use ToolClass\Curl\Snoopy\Snoopy;
use ToolClass\Date\Time;
use ToolClass\Model\Mysql;
use ToolClass\Server\System;

class ZhongGuanCunXiaoHuaClassifySpider extends CommandFather
{
    public $sCommandName = 'spider_zhong_guan_cun_xiao_hua_classify_spider';

    private $sSpiderName = 'spider_zhong_guan_cun_zai_xian_xiao_hua_ku';

    private $sDomain = '';

    private $sUrlEnding = '';

    private $sDetailInfoPageName = '';

    private $sNoCurlIncludeString = [];

    private $sSpiderDetailReg = '';

    public
    function __construct ()
    {
    }

    public
    function do ()
    {
        $this->queryLinks( $this->queryUrl() );

        $this->updateCurlNumber();
    }

    private
    function queryLinks (
        $oSpider = ''
    ) {
        if ( !$oSpider ) {
            return;
        }

        $this->sDomain = $oSpider->{SpiderModel::donain()};
        if ( !$this->sDomain ) {
            return;
        }

        $this->sUrlEnding = $oSpider->{SpiderModel::urlEnding()};
        if ( !$this->sUrlEnding ) {
            return;
        }

        $this->sSpiderDetailReg = $oSpider->{SpiderModel::detailPageATag()};
        $this->sSpiderDetailReg = str_replace(
            '=',
            '',
            str_replace(
                'href',
                '',
                str_replace(
                    '"',
                    '',
                    $this->sSpiderDetailReg
                )
            )
        );

        $this->sDetailInfoPageName
            = $oSpider->{SpiderModel::detailInfoPage()};

        $this->sNoCurlIncludeString = explode(
            ',',
            $oSpider->{SpiderModel::noCurlIncludeString()}
        );

        $sUrlFeild          = SpiderModel::url();
        $snoopy             = new Snoopy;
        $snoopy->proxy_host = $oSpider->{$sUrlFeild};

        if ( $snoopy->fetchlinks( $oSpider->{$sUrlFeild} ) ) {
            $this->disposeUrlAndInsertSpiderUrl( $snoopy->results );
        }
    }

    private
    function disposeUrlAndInsertSpiderUrl (
        & $aUrl = []
    ) {
        if ( !$aUrl ) {
            return FALSE;
        }

        $aData    = [];
        $aUrlArgs = [];
        $aUrl     = array_unique( $aUrl );
        $bNoCurl  = FALSE;
        $sUrl     = '';
        foreach ( $aUrl as $k => $v ) {
            if ( preg_match( $this->sSpiderDetailReg, $v ) ) {
                continue;
            }

            if ( str_replace(
                     '/',
                     '',
                     str_replace(
                         'https:',
                         '',
                         str_replace( 'http:', '', $v )
                     )
                 ) === $this->sDomain ) {
                continue;
            }

            if ( !strstr( $v, $this->sDomain ) ) {
                continue;
            }

            $bNoCurl = FALSE;
            if ( $this->sNoCurlIncludeString ) {
                foreach ( $this->sNoCurlIncludeString as $v1 ) {
                    if ( strstr( $v, $v1 ) ) {
                        $bNoCurl = TRUE;
                        break;
                    }
                }
            }
            if ( $bNoCurl ) {
                continue;
            }

            $v = $this->disposeUrlSprit( $v );

            if ( $this->affirmExistSameUrl( $v ) ) {
                continue;
            }

            $this->insert( $v );

        }

        $aData = $aUrl = $aUrlArgs = $bNoCurl = $sUrl = NULL;
        unset( $aData, $aUrl, $aUrlArgs, $bNoCurl, $sUrl );
    }

    private
    function insert (
        $sUrl
    ) {
        $aUrlArgs = explode( '/', $sUrl );
        $aUrlArgs = array_filter( $aUrlArgs );

        $aData[ ZhongGuanCunXiaoHuaSpider::domain() ]
            = $this->disposeDomain( $sUrl );

        $sUrl = $sUrl . ( mb_substr(
                              $sUrl,
                              -mb_strlen(
                                  $this->sUrlEnding
                              )
                          ) === $this->sUrlEnding
                ? ''
                : '/1'
                  . $this->sUrlEnding );
        $aData[ ZhongGuanCunXiaoHuaSpider::url() ]
              = $this->disposeUrlSprit(
            $sUrl
        );
        $aData[ ZhongGuanCunXiaoHuaSpider::name() ]
              = isset( $aUrlArgs[ 3 ] ) ? $aUrlArgs[ 3 ] : 0;
        $aData[ ZhongGuanCunXiaoHuaSpider::statusKey() ]
              = ZhongGuanCunXiaoHuaSpider::normalStatus();
        $aData[ ZhongGuanCunXiaoHuaSpider::noCurlIncludeStringFeild() ]
              = implode(
            ',',
            $this->sNoCurlIncludeString
        );
        $aData[ ZhongGuanCunXiaoHuaSpider::urlEnding() ]
              = $this->sUrlEnding;
        $aData[ ZhongGuanCunXiaoHuaSpider::whoAdd() ]
              = System::returnSystemUser();
        $aData[ ZhongGuanCunXiaoHuaSpider::addTime() ]
              = Time::nowRunTime();
        ZhongGuanCunXiaoHuaSpider::insert( $aData );
    }

    private
    function disposeDomain (
        $sUrl = ''
    ) {
        if ( !$sUrl ) {
            return '';
        }

        if ( strstr( $sUrl, $this->sUrlEnding ) ) {
            $sUrl = explode( '/', $sUrl );
            array_pop( $sUrl );
            $sUrl = implode( '/', $sUrl ) . '/';
        }

        return $sUrl;
    }

    private
    function disposeUrlSprit (
        $sUrl = ''
    ) {
        if ( !$sUrl ) {
            return '';
        }

        $sUrl = str_replace( '//', '/', $sUrl );
        $sUrl = str_replace( 'http:/', 'http://', $sUrl );
        $sUrl = str_replace( 'https:/', 'https://', $sUrl );

        if ( strstr( $sUrl, $this->sUrlEnding ) ) {
            $sUrl = explode( '/', $sUrl );
            array_pop( $sUrl );
            $sUrl = implode( '/', $sUrl ) . '/1' . $this->sUrlEnding;
        }

        return $sUrl;
    }

    private
    function affirmExistSameUrl (
        $sUrl = ''
    ) {
        if ( !$sUrl ) {
            return TRUE;
        }

        $aWhere = [];
        $aWhere[ ZhongGuanCunXiaoHuaSpider::domain() ]
                = $this->disposeDomain(
            $sUrl
        );

        $oMysql = Mysql::table( ZhongGuanCunXiaoHuaSpider::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->select(
            [
                ZhongGuanCunXiaoHuaSpider::primary(),
            ]
        );

        return $oMysql->first();
    }

    private
    function queryUrl ()
    {
        $aWhere                          = [];
        $aWhere[ SpiderModel::name() ]   = $this->sSpiderName;
        $aWhere[ SpiderModel::status() ] = SpiderModel::normalStatus();

        $sTable = SpiderModel::table();
        $oMysql = Mysql::table( $sTable );

        $oMysql->where( $aWhere );

        $oMysql->select(
            [
                SpiderModel::url(),
                SpiderModel::donain(),
                SpiderModel::detailInfoPage(),
                SpiderModel::noCurlIncludeString(),
                SpiderModel::urlEnding(),
                SpiderModel::detailPageATag()
            ]
        );

        return $oMysql->first();
    }

    private function retry ($iRetryNumber = 0)
    {
        if ($iRetryNumber > 9) {
            return FALSE;
        }

        sleep(1);

        return $this->updateCurlNumber($iRetryNumber);
    }

    private
    function updateCurlNumber ($iRetryNumber = 0) {
        $sTable = SpiderModel::table();

        $sPrimaryKey = SpiderModel::primary();
        $sCurlNumberKey = SpiderModel::curlNumber();

        $oMysql = Mysql::table( $sTable );

        $aWhere                          = [];
        $aWhere[ SpiderModel::name() ]   = $this->sSpiderName;
        $oMysql->where( $aWhere );

        $oMysql->writeSql( FALSE );

        $oMysql->select( [$sCurlNumberKey, $sPrimaryKey] );
        $res = $oMysql->first();


        if ( !$res ) {
            $res = $oMysql = NULL;
            unset( $res, $oMysql );
            return TRUE;
        }
        $res = (array)$res;

        if ( !Cache::lockForDatabase( $sTable, $res[ $sPrimaryKey ] ) ) {
            $this->retry($iRetryNumber + 1);
            return FALSE;
        }

        $aData = [];
        $aData[$sCurlNumberKey] = $res[$sCurlNumberKey] + 1;
        $aData[SpiderModel::lastCurlTime()] = Time::nowRunTime();

        $oMysql = Mysql::table( $sTable );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->writeSql( FALSE );

        $res1 = $oMysql->update( $aData );

        Cache::unlockForDatabase( $sTable, $res[ $sPrimaryKey ] );

        if (!$res1) {
            $this->retry($iRetryNumber + 1);
        }
    }
}
