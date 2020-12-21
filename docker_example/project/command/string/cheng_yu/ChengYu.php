<?php

/**
 * User: white
 * Date: 2020/12/14
 * Time: 11:29
 *
 * 成语写入文件
 */
namespace command\String\cheng_yu;

use command\CommandFather;

use model\publics\ChengYu as ChengYuModel;
use model\publics\file\File as FileModel;

use ToolClass\Database\Mysql as MysqlTool;
use ToolClass\Date\Time;
use ToolClass\Json\Json;
use ToolClass\Model\Mysql;
use ToolClass\File\File;

class ChengYu extends CommandFather
{
    public $sCommandName = 'cheng_yu_database_to_json';

    public $sFileName = 'cheng_yu';
    private $sFileType = '.json';

    private $sNowFileName = '';
    private $sPath = '';

    public
    function __construct ()
    {
        $this->sNowFileName = $this->sNowFileName = '';
    }

    public function do ()
    {
        if (!$this->disposeDatabaseInsertToJson()) {
            $this->outInfo('error');
            return FALSE;
        }

        if (!$this->delElseChengYuFile()) {
            $this->outInfo('delete else cheng yu files error');
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
        $aWhere[ ChengYuModel::primary() ] = 0;

        $oMysql = Mysql::table( ChengYuModel::table() );

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
        $this->sPath = __ROOT_DIR__ . DIRECTORY_SEPARATOR . str_replace('\\', DIRECTORY_SEPARATOR, __NAMESPACE__) . DIRECTORY_SEPARATOR;

        if (!File::writeFile($this->sPath . $this->sNowFileName, Json::toJson($res))) {
            $res = null;
            unset($res);
            $this->outInfo('write into file error --- ' . $this->sNowFileName);
            $this->outInfo('please retry once !!!');
            return FALSE;
        }

        $this->outInfo('now cheng yu file name is ---' . $this->sNowFileName);

        $res = null;
        unset($res);

        return TRUE;
    }

    private function delElseChengYuFile ()
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
