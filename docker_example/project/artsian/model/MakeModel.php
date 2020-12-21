<?php

namespace artsian\model;

use ToolClass\File\File;

use artsian\ArtsianFather;

use model\Mysql;

class MakeModel extends ArtsianFather
{
    private $sModelName = '';

    private $sMakeModelTemplateNameapace = 'MakeModelTemplateNameapace';
    private $sClassPlaceholderString = 'MakeModelTemplateClass';
    private $sTablePlaceholderString = 'MakeModelTemplateTable';
    private $sMakeModelTemplatePlatform = 'MakeModelTemplatePlatform';

    private $sRootPath       = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'model' . DIRECTORY_SEPARATOR;
    private $sTemplatenaName = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'artsian' . DIRECTORY_SEPARATOR . 'model' . DIRECTORY_SEPARATOR . 'MakeModelTemplate.php';

    public
    function __construct ($sModelName)
    {
        $this->sModelName = trim($sModelName, '/');
        $this->sModelName = trim($this->sModelName, '\\');
    }

//artsian.php MakeModel sModelName
    public
    function do ()
    {
        $sPath = $this->sRootPath . $this->sModelName . '.php';
//        var_dump($sPath);

        $sModelName = explode(DIRECTORY_SEPARATOR, $this->sModelName);
        if (strstr($this->sModelName, '\\')) {
            $sModelName1 = $sModelName;
            unset($sModelName1[count($sModelName1) - 1]);
            $sMakeModelTemplateNameapace = implode('\\', $sModelName1);
            $sMakeModelTemplateNameapace = '\\' . trim($sMakeModelTemplateNameapace, '\\');
        } else {
            $sMakeModelTemplateNameapace = '';
        }
        $sModelName = $sModelName[ count($sModelName) - 1 ];
        $sModelName = ucwords($sModelName);

        $aTableName = preg_split("/(?=[A-Z])/", $sModelName);
        $sTableName = '';
        foreach ($aTableName as $v) {
            $sTableName .= '_' . $v;
        }
        $sTableName = trim($sTableName, '_');
        $sTableName = mb_substr($sTableName, -1) === 's' ? $sTableName : $sTableName . 's';
        $sTableName = strtolower($sTableName);
        $aTableName = null;

        $sPlatform = $sMakeModelTemplateNameapace;
        $sPlatform = trim($sPlatform, '\\');
        $sPlatform = trim($sPlatform, '/');
        $sPlatform = explode('\\', $sPlatform);
        $sPlatform = $sPlatform[0];
        $sPlatform = $sPlatform ? $sPlatform : Mysql::$sPlatform;

        $sData = file_get_contents($this->sTemplatenaName);
        ////////////////////////////////
        $sData = str_replace($this->sMakeModelTemplateNameapace, $sMakeModelTemplateNameapace, $sData);
        ////////////////////////////////
        $sData = str_replace($this->sMakeModelTemplatePlatform, $sPlatform, $sData);
        ////////////////////////////////
        $sData = str_replace($this->sClassPlaceholderString, $sModelName, $sData);
        ////////////////////////////////
        $sData = str_replace($this->sTablePlaceholderString, $sTableName, $sData);
        $sTableName = null;

//        var_dump($this->sRootPath);
//        var_dump($this->sMakeModelName);
//        var_dump($sData);

        if (is_file($sPath)) {
            $this->outInfo('file exist');
            return true;
        }

//        var_dump($sPath);
        $aDir = explode(DIRECTORY_SEPARATOR, $sPath);
        unset($aDir[count($aDir) - 1]);
        $aDir = implode(DIRECTORY_SEPARATOR, $aDir);
//        var_dump($aDir);
        File::makeDir($aDir);
        $aDir = null;

        if (file_put_contents($sPath, $sData)) {
            $sPath = $sData = null;
            $this->outInfo('success');
            return true;
        }
        $sPath = $sData = null;

        $this->outInfo('faild');
        return false;
    }
}
