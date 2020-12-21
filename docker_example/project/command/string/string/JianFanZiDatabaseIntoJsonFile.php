<?php

namespace command\String\string;

use command\CommandFather;
use model\publics\file\File as FileModel;
use model\publics\string\JianFanFont as JianFanFontModel;

use ToolClass\Date\Time;
use ToolClass\File\File;
use ToolClass\Json\Json;
use ToolClass\Model\Mysql;
use ToolClass\Server\Server;

class JianFanZiDatabaseIntoJsonFile extends CommandFather
{
    public $sCommandName = 'jian_fan_zi_database_into_json_file';

    public $sFileName = 'string';
    private $sFileType = '.json';

    private $sNowFileName = '';
    private $sPath = '';

    public
    function __construct ()
    {
        $this->sNowFileName = '';
    }

    public function do ()
    {
//        ini_set( 'memory_limit', CHINESE_STRING_MAX_CAN_USE_MEMORY);
        Server::setServerBidMemory(CHINESE_STRING_MAX_CAN_USE_MEMORY);

        if (!$this->disposeDatabaseInsertToJson()) {
            $this->outInfo('error');
            return FALSE;
        }

        if (!$this->delElseWordFile()) {
            $this->outInfo('delete else word files error');
            $this->outInfo('please retry once !!!');
            return FALSE;
        }

        if (!$this->insertToDatabaseFileName()) {
            $this->outInfo('insert file info error');
            $this->outInfo('please retry once !!!');
            return FALSE;
        }

        $this->outInfo('do success');
    }

    private function disposeDatabaseInsertToJson ()
    {
        $aWhere                                                 = [];
        $aWhere[ JianFanFontModel::primary() ] = 0;

        $oMysql = Mysql::table( JianFanFontModel::table() );

        $oMysql->whereDaYu( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );

        $oMysql->select();

        $res = $oMysql->all();
        $oMysql = null;
        unset($oMysql);
        if (!$res) {
            return false;
        }

        $this->sNowFileName = $this->sFileName . '_' . Time::nowRunTime() .  $this->sFileType;
        $this->sPath = __DIR__ . DIRECTORY_SEPARATOR;

        if (!File::writeFile($this->sPath . $this->sNowFileName, Json::toJson($res))) {
            $res = null;
            unset($res);
            $this->outInfo('write into file error --- ' . $this->sNowFileName);
            $this->outInfo('please retry once !!!');
            return FALSE;
        }

        $this->outInfo('now word file name is ---' . $this->sNowFileName);

        $res = null;
        unset($res);

        return TRUE;
    }

    private function delElseWordFile ()
    {
        $aFiles = File::pathFileList($this->sPath);
        if (!$aFiles) {
            return FALSE;
        }

        $aTmp = [];
        $bRes = FALSE;
        foreach ($aFiles as $v) {
            $aTmp = explode(DIRECTORY_SEPARATOR, $v);
            $aTmp = $aTmp[count($aTmp) - 1];

            $bRes = strstr($aTmp, $this->sFileName);
            if ($bRes === FALSE || $bRes != 0) {
                continue;
            }

            if ($aTmp === $this->sNowFileName) {
                continue;
            }

            if (!File::unlinkFile($this->sPath . DIRECTORY_SEPARATOR . $aTmp)) {
                $this->outInfo('delete file error ' . $aTmp);
                $aFiles = $aTmp = $bRes = null;
                unset($aFiles, $aTmp, $bRes);
                return FALSE;
            }
        }
        $aFiles = $aTmp = $bRes = null;
        unset($aFiles, $aTmp, $bRes);

        return TRUE;
    }

    private function insertToDatabaseFileName ()
    {
        $sPathFeild = FileModel::path();
        $sPriKeyFeild = FileModel::primary();
        $aData = [];
        $aData[$sPathFeild] = $this->sPath . $this->sNowFileName;
        $aData[FileModel::pathMd5()] = FileModel::encodePath($aData[$sPathFeild]);
        $aData[FileModel::type()] = $this->sFileName;
        $aData[FileModel::addTime()] = Time::nowRunTime();
        $res = FileModel::insert($aData);
        if (!$res) {
            $aData = $sPathFeild = null;
            unset($aData, $sPathFeild);
            $this->outInfo('insert file name to files table error');
            return FALSE;
        }
        $aData = $sPathFeild = null;
        unset($aData, $sPathFeild);

        $aWhere = [];
        $aWhere[FileModel::type()] = $this->sFileName;
        $oMysql = Mysql::table( FileModel::table() );
        $oMysql->where( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );
        $oMysql->select($sPriKeyFeild);
        $res = $oMysql->all();
        $oMysql = null;
        unset($oMysql);
        if (!$res) {
            $this->outInfo('no get same name data');
            return FALSE;
        }

        if (count($res) < 2) {
            return TRUE;
        }

        $aIds = [];
        foreach ($res as $v) {
            $aIds[] = $v[$sPriKeyFeild];
        }
        $res = null;
        unset($res);
        sort($aIds);
        array_pop($aIds);

        $aWhere = [];
        $aWhere[$sPriKeyFeild] = $aIds;
        $oMysql = Mysql::table( FileModel::table() );
        $oMysql->whereIn( $aWhere );
        $aWhere = NULL;
        unset( $aWhere );
        $res = $oMysql->delete();
        $oMysql = null;
        unset($oMysql);
        if (!$res) {
            $this->outInfo('delete old data error');
            return FALSE;
        }

        return TRUE;
    }
}
