<?php

namespace artsian\command;

use artsian\ArtsianFather;

class MakeCommand extends ArtsianFather
{
    private $sCommandPlaceholderString = 'MakeModelTemplateCommand';
    private $sClassPlaceholderString   = 'MakeCommandTemplateClass';
    private $sCommandNameSpace   = 'CommandNameSpace';

    private $sRootPath        = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'command' . DIRECTORY_SEPARATOR;
    private $sTemplatenaName  = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'artsian' . DIRECTORY_SEPARATOR . 'command' . DIRECTORY_SEPARATOR . 'MakeCommandTemplate.php';
    private $CommandList      = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'artsian' . DIRECTORY_SEPARATOR . 'command' . DIRECTORY_SEPARATOR . 'CommandList.php';
//    private $CommandNamespace = __ROOT_DIR__ . DIRECTORY_SEPARATOR . 'artsian' . DIRECTORY_SEPARATOR . 'command' . DIRECTORY_SEPARATOR . 'CommandNamespace.php';

    public
    function __construct ($sCommandName)
    {
        $this->sCommandName = mb_substr($sCommandName, 0, 1) === '/' || mb_substr($sCommandName, 0, 1) === '\\' ? mb_substr($sCommandName, 1, mb_strlen($sCommandName)) : $sCommandName;
        $this->sCommandName = ucfirst($this->sCommandName);
    }

    public
    function do ()
    {
        $sPath = $this->sRootPath . $this->sCommandName . '.php';
        if (is_file($sPath)) {
            $this->outInfo('file exist');
            return TRUE;
        }

        $sCommandName = explode('/', $this->sCommandName);
        $sCommandName = $sCommandName[ count($sCommandName) - 1 ];
        $sCommandName = ucwords($sCommandName);

        $aCommandName = preg_split("/(?=[A-Z])/", $sCommandName);
        $sCommandUseName = '';
        foreach ($aCommandName as $v) {
            $v = str_replace('/', '', $v);
            $v = str_replace('\\', '', $v);
            $sCommandUseName .= '_' . $v;
        }
        $sCommandUseName = trim($sCommandUseName, '_');
        $sCommandUseName = strtolower($sCommandUseName);
        $aCommandName = NULL;

        $sData = file_get_contents($this->sTemplatenaName);
        ////////////////////////////////////////////////
        $sData = str_replace($this->sCommandPlaceholderString, $sCommandUseName, $sData);

        ///////////////////////////////////////////////
//        var_dump($sCommandName);
        $aCommand = explode('\\', $sCommandName);
        $sCommandNow = array_pop($aCommand);

        ////////////////////////////////////////////////
        $sData = str_replace($this->sClassPlaceholderString, $sCommandNow, $sData);

//        var_dump($aCommand);
        $sCommand = implode('\\', $aCommand);
//        var_dump($sCommand);
        $sData = str_replace($this->sCommandNameSpace, $sCommand, $sData);
        $sCommand = $sCommandNow = null;
        unset($sCommand, $sCommandNow);

        if (file_put_contents($sPath, $sData)) {
            $sCommandList = '$CommandList[\'' . $sCommandUseName . '\'] = \'command\\' . $sCommandName . '\';';
            $sCommandList .= "\n";
            file_put_contents($this->CommandList, $sCommandList, FILE_APPEND);

//            $sCommandNamespace = 'use command\\' . $sCommandName . ';';
//            $sCommandNamespace .= "\n";
//            $sCommandNamespace .= 'require_once __ROOT_DIR__ . DIRECTORY_SEPARATOR' . " . 'command' . DIRECTORY_SEPARATOR . '$sCommandName.php';";
//            $sCommandNamespace .= "\n";
//            file_put_contents($this->CommandNamespace, $sCommandNamespace, FILE_APPEND);

            $this->outInfo('success');
            return TRUE;
        }
        $sPath = $sData = NULL;
        unset($sPath, $sData);

        $this->outInfo('faild');
        return FALSE;
    }
}
