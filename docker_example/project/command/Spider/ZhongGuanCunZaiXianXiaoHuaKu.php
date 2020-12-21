<?php

namespace command\Spider;

use command\CommandFather;

use model\publics\Spider as SpiderModel;
use model\publics\ZhongGuanCunXiaoHuaSpider;

use ToolClass\Database\Mysql as MysqlTool;
use ToolClass\Date\Time;
use ToolClass\Model\Mysql;
use ToolClass\Post\Post;
use ToolClass\Queue\Queue;
use ToolClass\Strings\Strings;
use ToolClass\Regular\RegularVerify;
use ToolClass\Server\System;

class ZhongGuanCunZaiXianXiaoHuaKu extends CommandFather
{
    public $sCommandName = 'spider_zhong_guan_cun_zai_xian_xiao_hua_ku';

    private $sSpiderName = 'spider_zhong_guan_cun_zai_xian_xiao_hua_ku';

    private $oSpiderSetting;

    //////////////////////////////////////////////
    /// 抓取层级不知道有没有生效，需要验证。
    private $iDetailPageCurlHierarchy = 3;

    public
    function __construct ()
    {
    }

    public
    function do ()
    {
        $aSpider = $this->querySpiderUrl();

        if ( !$aSpider ) {
            return;
        }

        $this->oSpiderSetting = $this->querySpiderSetting();
        if ( !$this->oSpiderSetting ) {
            return;
        }
        $sDetailInfoPage = SpiderModel::detailInfoPage();
        $this->oSpiderSetting->{$sDetailInfoPage}
            = explode(
            ',',
            $this->oSpiderSetting->{$sDetailInfoPage}
        );

        $this->updateMasterCurlCurlNumber();

        $this->curl( $aSpider );
    }

    private function updateMasterCurlCurlNumber ()
    {
        $sNameFeild = SpiderModel::name();
        $sName = $this->oSpiderSetting->{$sNameFeild};
        if (!$sName) {
            return;
        }

        $aWhere[$sNameFeild] = $sName;

        $aData[MysqlTool::updateDataKey()] = [
            SpiderModel::lastCurlTime() => Time::nowRunTime()
        ];

        $aData[MysqlTool::incrbyKey()] = [
            SpiderModel::curlNumber() => 1
        ];

        Queue::insertUpdateQueue (
            Queue::spiderQueueName(),
            $aWhere,
            $aData,
            FALSE,
            TRUE
        );
    }

    private
    function querySpiderSetting ()
    {
        $aWhere                               = [];
        $aWhere[ SpiderModel::name() ]   = $this->sSpiderName;
        $aWhere[ SpiderModel::status() ] = SpiderModel::normalStatus();

        $oMysql = Mysql::table( SpiderModel::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

//        $oMysql->writeSql(TRUE);

        $oMysql->select(
            [
                SpiderModel::name(),
                SpiderModel::url(),
                SpiderModel::classifyPageRed(),
                SpiderModel::detailPageDomReg(),
                SpiderModel::detailPageATag(),
                SpiderModel::detailInfoPage(),
            ]
        );

        return $oMysql->first();
    }

    private function getPageInfo ($sUrl = '')
    {
        if (!$sUrl) {
            return '';
        }

        return @file_get_contents( $sUrl );
    }

    private
    function curl (
        $aSpider = [],
        $iDetailPageCurlHierarchy = 0
    ) {
        if ( !$aSpider ) {
            return FALSE;
        }

        $sPageInfo   = $sPregInfo = '';
        $bDetailPage = FALSE;
        $sDisposeInfo = '';
        $sUrlFeild = ZhongGuanCunXiaoHuaSpider::url();
        $sDomainFeild = ZhongGuanCunXiaoHuaSpider::domain();
        $sNameFeild = ZhongGuanCunXiaoHuaSpider::name();
        foreach ( $aSpider as $v ) {
            $sPageInfo = $this->getPageInfo($v[$sUrlFeild]);

            if (isset($v[$sDomainFeild])) {
                $this->updateZgcJokeSpider($v[$sDomainFeild], $v[$sUrlFeild]);
            }
            if ( !$sPageInfo ) {
                continue;
            }

            if ( CHARSET === 'utf-8' ) {
                $sPageInfo = Strings::strToUtf8( $sPageInfo );
            }
            if ( !$sPageInfo ) {
                continue;
            }

            $bDetailPage = FALSE;
            foreach (
                $this->oSpiderSetting->{SpiderModel::detailInfoPage()}
                as $v1
            ) {
                if ( strstr( $v[$sUrlFeild], $v1 ) ) {
                    $bDetailPage = TRUE;
                    break;
                }
            }

            if ($bDetailPage) {
//                详细信息页面
                preg_match_all($this->oSpiderSetting->{SpiderModel::detailPageDomReg()}, $sPageInfo, $sPregInfo);
                $sPregInfo = isset( $sPregInfo[ 0 ] ) && $sPregInfo[0] ? $sPregInfo[ 0 ] : '';
                $this->insertInfo($this->oSpiderSetting->{SpiderModel::name()}, $v[$sUrlFeild], $sPregInfo);

                if ($iDetailPageCurlHierarchy > $this->iDetailPageCurlHierarchy) {
                    continue;
                }

                preg_match_all( $this->oSpiderSetting->{SpiderModel::detailPageATag()}, $sPageInfo, $sPregInfo);
                $sPregInfo = isset( $sPregInfo[ 1 ] ) && $sPregInfo[1] ? $sPregInfo[ 1 ] : '';
                if (!$sPregInfo) {
                    continue;
                }
                foreach ($sPregInfo as $v2) {
                    $this->curl([[$sUrlFeild => $this->oSpiderSetting->{SpiderModel::url()} . $v2]], $iDetailPageCurlHierarchy + 1);
                }
            } else {
                preg_match_all( $this->oSpiderSetting->{SpiderModel::detailPageATag()}, $sPageInfo, $sPregInfo);
                $sPregInfo = isset( $sPregInfo[ 1 ] ) && $sPregInfo[1] ? $sPregInfo[ 1 ] : '';
                if (!$sPregInfo) {
                    continue;
                }
                foreach ($sPregInfo as $v2) {
                    $this->curl([[$sUrlFeild => $this->oSpiderSetting->{SpiderModel::url()} . $v2]], $iDetailPageCurlHierarchy + 1);
                }
            }
        }
    }

    private function insertInfo ($sSpiderName = '', $sOriginUrl = '',$aInfo = [])
    {
        if (!$sSpiderName || !$sOriginUrl || !$aInfo) {
            return;
        }

        foreach ($aInfo as $v) {
            $v = strip_tags($v);
            $v = RegularVerify::disposeLineFeed($v);
            $v = htmlspecialchars_decode($v);
            $v = html_entity_decode($v);

            if (!$v) {
                continue;
            }

            Post::insertZGCXXHKPostQueue($sSpiderName, $sOriginUrl, $v);
        }
    }

    private function updateZgcJokeSpider ($sDomain = '', $sUrl = '')
    {
        if (!$sDomain || !$sUrl) {
            return;
        }

        $sSplitTag1 = '/';
        $sSplitTag2 = '.';

        $aUrl = explode($sSplitTag1, $sUrl);
        $sNowUrl = array_pop($aUrl);
        if (!strstr($sNowUrl, $sSplitTag2)) {
            return;
        }
        $aNowUrl = explode($sSplitTag2, $sNowUrl);
        $sNowUrl = $aNowUrl[0] + 1 . $sSplitTag2 . $aNowUrl[1];
        $aNowUrl = $sSplitTag2 = null;
        unset($aNowUrl, $sSplitTag2);

        array_push($aUrl, $sNowUrl);
        $sNewUrl = implode($sSplitTag1, $aUrl);
        $aUrl = $sSplitTag1 = null;
        unset($aUrl, $sSplitTag1);

        $aWhere = [];
        $aWhere[ZhongGuanCunXiaoHuaSpider::domain()] = $sDomain;

        $iTime = Time::nowRunTime();
        $aData[MysqlTool::updateDataKey()] = [
            ZhongGuanCunXiaoHuaSpider::lastCurlTime() => $iTime,
            ZhongGuanCunXiaoHuaSpider::url() => $sNewUrl,
            ZhongGuanCunXiaoHuaSpider::whoUpdate() => System::returnSystemUser(),
            ZhongGuanCunXiaoHuaSpider::updateTime() => $iTime
        ];

        $aData[MysqlTool::incrbyKey()] = [
            ZhongGuanCunXiaoHuaSpider::curlNumber() => 1
        ];

        Queue::insertUpdateQueue (
            Queue::spiderCurlQueueName(),
            $aWhere,
            $aData,
            FALSE,
            TRUE
        );
    }

    private
    function querySpiderUrl ()
    {
        $aWhere = [];
        $aWhere[ ZhongGuanCunXiaoHuaSpider::statusKey() ]
                = ZhongGuanCunXiaoHuaSpider::normalStatus();

//        $oMysql = new Mysql();
        $oMysql = Mysql::table( ZhongGuanCunXiaoHuaSpider::table() );

        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

//        $oMysql->writeSql(TRUE);

        $oMysql->select(
            [
                ZhongGuanCunXiaoHuaSpider::url(),
                ZhongGuanCunXiaoHuaSpider::domain()
            ]
        );

        return $oMysql->all();
    }
}
