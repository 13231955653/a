<?php
/**
 *
 * 词语数据库写入json文件
 */
namespace command\String\word;

use command\CommandFather;

use model\publics\word\Word as WordModel;
use model\publics\file\File as FileModel;
use ToolClass\Date\Time;
use ToolClass\File\File;
use ToolClass\Json\Json;
use ToolClass\Model\Mysql;

class WordDatabaseInsertJsonFile extends CommandFather
{
    public $sCommandName = 'word_database_insert_json_file';

    public $sFileName = 'word';
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
        $aWhere[ WordModel::primary() ] = 0;

        $oMysql = Mysql::table( WordModel::table() );

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
